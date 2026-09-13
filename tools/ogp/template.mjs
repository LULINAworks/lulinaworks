import { ogpDefaults } from "./config.mjs";

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderTitle(page) {
  const lines = page.titleLines ?? [page.title];
  return lines
    .map((line) => `<span class="title-line">${escapeHtml(line)}</span>`)
    .join("");
}

function renderHome(page) {
  return `
    <main class="canvas direct-home tone-${page.tone} position-${page.titlePosition}">
      <img class="hero-image" src="${page.heroImage}" alt="" />
      <div class="home-copy">
        <img class="home-logo" src="${page.brandImage}" alt="LULINAworks" />
        <h1>${renderTitle(page)}</h1>
      </div>
    </main>`;
}

function renderImageOnly(page) {
  return `
    <main class="canvas direct-image-only tone-${page.tone}">
      <img class="hero-image" src="${page.heroImage}" alt="" />
    </main>`;
}

function renderPromptList(page) {
  return `
    <main class="canvas direct-prompt-list tone-${page.tone}">
      <img class="hero-image" src="${page.heroImage}" alt="" />
      <div class="prompt-list-band">
        <span class="prompt-line" aria-hidden="true"></span>
        <h1>${renderTitle(page)}</h1>
        <span class="prompt-line" aria-hidden="true"></span>
      </div>
    </main>`;
}

function renderHeroDirect(page) {
  if (page.heroVariant === "home") {
    return renderHome(page);
  }
  if (page.heroVariant === "image-only") {
    return renderImageOnly(page);
  }
  if (page.heroVariant === "prompt-list") {
    return renderPromptList(page);
  }
  throw new Error(`Unknown hero-direct variant: ${page.heroVariant}`);
}

function renderHeroWithShortTitle(page) {
  return `
    <main class="canvas content tone-${page.tone}">
      <img class="hero-image" src="${page.heroImage}" alt="" />
      <div class="hero-band">
        <h1>${renderTitle(page)}</h1>
      </div>
    </main>`;
}

export function renderOgpHtml(pageConfig) {
  const page = { ...ogpDefaults, ...pageConfig };
  const content = page.templateType === "hero-direct"
    ? renderHeroDirect(page)
    : renderHeroWithShortTitle(page);

  return `<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="/__ogp__/fonts.css" />
    <style>
      :root {
        --font-heading: "Zen Maru Gothic", "Zen Maru Gothic Fallback", sans-serif;
        --font-renewal: "M PLUS 1", "M PLUS 1 Fallback", sans-serif;
      }

      * { box-sizing: border-box; }

      html,
      body {
        width: 1200px;
        height: 630px;
        margin: 0;
        overflow: hidden;
        background: #f4f8ff;
      }

      .canvas {
        position: relative;
        isolation: isolate;
        width: 1200px;
        height: 630px;
        overflow: hidden;
        text-align: ${page.textAlign};
      }

      .hero-image {
        position: absolute;
        inset: 0;
        z-index: 0;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: ${page.imagePosition};
      }

      h1 {
        margin: 0;
        font-weight: ${page.fontWeight};
        letter-spacing: 0.015em;
      }

      .title-line { display: block; }

      .home-copy {
        position: absolute;
        z-index: 1;
        top: 46.5%;
        left: 54px;
        width: 550px;
        color: #29364e;
        transform: translateY(-50%);
      }

      .position-center .home-copy {
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .home-logo {
        display: block;
        width: 520px;
        height: auto;
        margin: 0 auto;
      }

      .direct-home h1 {
        width: min(${page.titleMaxWidth}px, 100%);
        margin: 8px auto 0;
        color: #29364e;
        font-family: var(--font-heading);
        font-size: ${page.titleSize}px;
        line-height: 1.5;
        letter-spacing: 0.025em;
        white-space: nowrap;
        text-shadow: 0 1px 0 rgb(255 255 255 / 90%);
        transform: translateX(-24px);
      }

      .direct-prompt-list {
        background: #eaf4ff;
      }

      .prompt-list-band {
        position: absolute;
        z-index: 1;
        inset: 26% 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        padding: 22px 54px;
        background: rgb(45 83 103 / 60%);
        backdrop-filter: blur(3px);
        color: #fff7e8;
      }

      .direct-prompt-list h1 {
        flex: 0 1 auto;
        width: min(${page.titleMaxWidth}px, 100%);
        font-family: var(--font-heading);
        font-size: ${page.titleSize}px;
        line-height: 1.35;
        text-shadow: 0 2px 0 rgb(25 52 67 / 42%), 0 4px 8px rgb(20 40 50 / 18%);
      }

      .prompt-line {
        flex: 0 1 48px;
        width: 48px;
        height: 1px;
        border-radius: 999px;
        background: rgb(255 247 232 / 76%);
      }

      .content {
        background: #eaf2ff;
      }

      .hero-band {
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 52%;
        padding: 38px 72px;
        color: #fff;
        transform: translateY(-50%);
        background: linear-gradient(
          180deg,
          rgb(19 33 58 / 8%) 0%,
          rgb(19 33 58 / 60%) 18%,
          rgb(19 33 58 / 84%) 38%,
          rgb(19 33 58 / 84%) 62%,
          rgb(19 33 58 / 60%) 82%,
          rgb(19 33 58 / 8%) 100%
        );
        backdrop-filter: blur(2px);
      }

      .content h1 {
        width: min(${page.titleMaxWidth}px, 100%);
        color: inherit;
        font-family: var(--font-renewal);
        font-size: ${page.titleSize}px;
        line-height: 1.28;
        text-shadow: 0 2px 0 rgb(0 0 0 / 20%), 0 10px 28px rgb(0 0 0 / 32%);
      }

      .content.tone-light .hero-band {
        color: #202a3b;
        background: linear-gradient(
          180deg,
          rgb(247 251 255 / 8%) 0%,
          rgb(247 251 255 / 66%) 18%,
          rgb(244 249 255 / 88%) 38%,
          rgb(244 249 255 / 88%) 62%,
          rgb(247 251 255 / 66%) 82%,
          rgb(247 251 255 / 8%) 100%
        );
      }

      .content.tone-light h1 {
        text-shadow: 0 2px 0 rgb(255 255 255 / 80%), 0 10px 28px rgb(24 56 103 / 18%);
      }
    </style>
  </head>
  <body>${content}</body>
</html>`;
}
