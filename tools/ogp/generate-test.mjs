import { createServer } from "node:http";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";
import sharp from "sharp";
import { ogpDefaults, ogpPages } from "./config.mjs";
import { renderOgpHtml } from "./template.mjs";

const toolDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(toolDirectory, "../..");
const publicDirectory = path.join(repositoryRoot, "public");
const nextStaticDirectory = path.join(repositoryRoot, ".next", "static");
const outputDirectory = path.join(toolDirectory, "output-test");
const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const localDevelopmentOrigin = "http://localhost:3000";

const mimeTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".png", "image/png"],
  [".webp", "image/webp"],
  [".woff2", "font/woff2"],
]);

function walk(directory) {
  if (!existsSync(directory)) {
    return [];
  }

  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(entryPath) : [entryPath];
  });
}

function extractFontFaces(css) {
  return (css.match(/@font-face\{[^}]+\}/g) ?? []).filter(
    (rule) => rule.includes("M PLUS 1") || rule.includes("Zen Maru Gothic")
  );
}

function normalizeLocalFontUrls(css) {
  return css.replaceAll("url(../media/", "url(/_next/static/media/");
}

function normalizeDevelopmentFontUrls(css) {
  return css.replaceAll(
    "url(../media/",
    `url(${localDevelopmentOrigin}/_next/static/media/`
  );
}

async function loadFontCss() {
  const cssFiles = walk(nextStaticDirectory).filter((file) => file.endsWith(".css"));
  const fontFaces = [];

  for (const cssFile of cssFiles) {
    const css = readFileSync(cssFile, "utf8");
    fontFaces.push(...extractFontFaces(css));
  }

  const uniqueFontFaces = [...new Set(fontFaces)];
  if (uniqueFontFaces.length > 0) {
    return normalizeLocalFontUrls(uniqueFontFaces.join("\n"));
  }

  try {
    const htmlResponse = await fetch(`${localDevelopmentOrigin}/`);
    if (!htmlResponse.ok) {
      throw new Error(`HTTP ${htmlResponse.status}`);
    }

    const html = await htmlResponse.text();
    const styleHrefs = [...html.matchAll(/href="([^"]+\.css[^"]*)"/g)].map((match) =>
      match[1].replaceAll("&amp;", "&")
    );
    const developmentFontFaces = [];

    for (const href of [...new Set(styleHrefs)]) {
      const cssResponse = await fetch(new URL(href, localDevelopmentOrigin));
      if (!cssResponse.ok) {
        continue;
      }
      developmentFontFaces.push(...extractFontFaces(await cssResponse.text()));
    }

    const uniqueDevelopmentFontFaces = [...new Set(developmentFontFaces)];
    if (uniqueDevelopmentFontFaces.length > 0) {
      return normalizeDevelopmentFontUrls(uniqueDevelopmentFontFaces.join("\n"));
    }
  } catch {
    // The actionable error below covers both an absent build and an absent dev server.
  }

  throw new Error(
    "next/fontのCSSが見つかりません。ユーザー側で npm run dev を起動するか、npm run build を一度実行してから再試行してください。"
  );
}

function safePath(root, pathname) {
  const resolved = path.resolve(root, `.${pathname}`);
  return resolved === root || resolved.startsWith(`${root}${path.sep}`) ? resolved : null;
}

function sendFile(response, filePath) {
  if (!filePath || !existsSync(filePath) || !statSync(filePath).isFile()) {
    response.writeHead(404).end("Not found");
    return;
  }

  response.writeHead(200, {
    "Cache-Control": "no-store",
    "Content-Type": mimeTypes.get(path.extname(filePath).toLowerCase()) ?? "application/octet-stream",
  });
  response.end(readFileSync(filePath));
}

function createPreviewServer(fontCss, pages) {
  const pagesById = new Map(pages.map((page) => [page.id, page]));

  return createServer((request, response) => {
    const url = new URL(request.url ?? "/", "http://127.0.0.1");

    if (url.pathname === "/__ogp__/fonts.css") {
      response.writeHead(200, {
        "Cache-Control": "no-store",
        "Content-Type": "text/css; charset=utf-8",
      });
      response.end(fontCss);
      return;
    }

    if (url.pathname.startsWith("/__ogp__/preview/")) {
      const id = decodeURIComponent(url.pathname.slice("/__ogp__/preview/".length));
      const page = pagesById.get(id);
      if (!page) {
        response.writeHead(404).end("Unknown OGP page");
        return;
      }

      response.writeHead(200, {
        "Cache-Control": "no-store",
        "Content-Type": "text/html; charset=utf-8",
      });
      response.end(renderOgpHtml(page));
      return;
    }

    if (url.pathname.startsWith("/assets/")) {
      sendFile(response, safePath(publicDirectory, url.pathname));
      return;
    }

    if (url.pathname.startsWith("/_next/static/")) {
      const relativePath = url.pathname.slice("/_next/static".length);
      sendFile(response, safePath(nextStaticDirectory, relativePath));
      return;
    }

    response.writeHead(404).end("Not found");
  });
}

function selectPages() {
  const pages = ogpPages.map((page) => ({ ...ogpDefaults, ...page }));
  const idsArgumentIndex = process.argv.indexOf("--ids");
  if (idsArgumentIndex === -1) {
    const selected = pages.filter((page) => page.shortTitleStatus !== "proposal");
    const skipped = pages.filter((page) => page.shortTitleStatus === "proposal");
    if (skipped.length > 0) {
      console.log(`承認待ち短縮タイトルをスキップ: ${skipped.map((page) => page.id).join(", ")}`);
    }
    return selected;
  }

  const idsValue = process.argv[idsArgumentIndex + 1];
  if (!idsValue) {
    throw new Error("--ids にはカンマ区切りのOGP idが必要です。");
  }

  const requestedIds = [...new Set(idsValue.split(",").map((id) => id.trim()).filter(Boolean))];
  const pagesById = new Map(pages.map((page) => [page.id, page]));
  const unknownIds = requestedIds.filter((id) => !pagesById.has(id));
  if (unknownIds.length > 0) {
    throw new Error(`不明なOGP id: ${unknownIds.join(", ")}`);
  }
  return requestedIds.map((id) => pagesById.get(id));
}

async function listen(server) {
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });

  const address = server.address();
  if (!address || typeof address === "string") {
    throw new Error("OGP preview server did not return a TCP address.");
  }
  return `http://127.0.0.1:${address.port}`;
}

async function closeServer(server) {
  await new Promise((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()));
  });
}

async function generate() {
  if (!existsSync(chromePath)) {
    throw new Error(`Chromeが見つかりません: ${chromePath}`);
  }

  const selectedPages = selectPages();
  const fontCss = await loadFontCss();
  const server = createPreviewServer(fontCss, selectedPages);
  const baseUrl = await listen(server);
  await mkdir(outputDirectory, { recursive: true });

  let browser;
  try {
    browser = await chromium.launch({
      executablePath: chromePath,
      headless: true,
      args: ["--disable-gpu"],
    });
    const context = await browser.newContext({
      viewport: { width: 1200, height: 630 },
      deviceScaleFactor: 2,
      colorScheme: "light",
    });

    for (const pageConfig of selectedPages) {
      const page = await context.newPage();
      await page.goto(`${baseUrl}/__ogp__/preview/${encodeURIComponent(pageConfig.id)}`, {
        waitUntil: "networkidle",
      });
      await page.evaluate(async () => document.fonts.ready);

      if (pageConfig.heroVariant !== "image-only") {
        const fontCheck = await page.evaluate(({ fontFamily, fontWeight, title }) => {
          const family = fontFamily === "heading" ? "Zen Maru Gothic" : "M PLUS 1";
          const sample = fontFamily === "heading" ? title : "プロンプトガイド";
          return {
            family,
            loaded: document.fonts.check(`${fontWeight} 40px "${family}"`, sample),
          };
        }, pageConfig);
        if (!fontCheck.loaded) {
          throw new Error(`${pageConfig.id}: ${fontCheck.family}を読み込めませんでした。`);
        }
      }

      const rawScreenshot = await page.screenshot({ type: "png" });
      const rawMetadata = await sharp(rawScreenshot).metadata();
      if (rawMetadata.width !== 2400 || rawMetadata.height !== 1260) {
        throw new Error(
          `${pageConfig.id}: 2倍スクリーンショットが2400x1260ではありません (${rawMetadata.width}x${rawMetadata.height})。`
        );
      }

      const outputPath = path.join(outputDirectory, pageConfig.outputName);
      await sharp(rawScreenshot)
        .resize(1200, 630, { fit: "fill", kernel: sharp.kernel.lanczos3 })
        .png({ compressionLevel: 9, adaptiveFiltering: true })
        .toFile(outputPath);

      const metadata = await sharp(outputPath).metadata();
      const bytes = (await readFile(outputPath)).byteLength;
      if (metadata.width !== 1200 || metadata.height !== 630 || metadata.format !== "png") {
        throw new Error(`${pageConfig.id}: 最終PNGの仕様確認に失敗しました。`);
      }

      console.log(
        `${pageConfig.id}: ${path.relative(repositoryRoot, outputPath)} (${metadata.width}x${metadata.height}, ${bytes} bytes)`
      );
      await page.close();
    }

    await context.close();
  } finally {
    if (browser) {
      await browser.close();
    }
    await closeServer(server);
  }
}

generate().catch((error) => {
  console.error(error instanceof Error ? error.stack : error);
  process.exitCode = 1;
});
