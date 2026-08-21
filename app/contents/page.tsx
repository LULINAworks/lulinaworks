import type { Metadata } from "next";
import { Suspense } from "react";
import { ContentsCard } from "@/components/content/ContentsCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { contentValidationSummary, publishedContentsByDate } from "@/data/contents";
import { ContentsIndexClient } from "./ContentsIndexClient";
import styles from "./contents.module.css";

const title = "コンテンツ一覧｜LULINAworks";
const description =
  "Anima、ComfyUI、制作ガイド、プロンプト一覧、制作ツールをまとめて探せるLULINAworksの総合コンテンツ一覧です。";
const canonicalUrl = "https://lulinaworks.com/contents";
const ogImage = "/assets/og/og-contents.png";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title,
    description,
    url: canonicalUrl,
    siteName: "LULINAworks",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "LULINAworks コンテンツ一覧",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

function ContentsFallback() {
  return (
    <>
      <nav className={styles.filters} aria-label="コンテンツカテゴリ">
        <span className={styles.activeFilter}>すべて</span>
      </nav>
      <p className={styles.resultCount}>{contentValidationSummary.total}件のコンテンツ</p>
      <div className={styles.grid}>
        {publishedContentsByDate.map((item) => (
          <ContentsCard item={item} key={item.href} showContentType={false} />
        ))}
      </div>
    </>
  );
}

export default function ContentsPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="contents-page-title">
          <div className={styles.heroImage}>
            <img
              src="/assets/eyecatch/contents-eyecatch.webp"
              alt=""
              width="1600"
              height="900"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className={styles.heroCopy}>
            <h1 id="contents-page-title">コンテンツ一覧</h1>
            <p>
              AnimaやComfyUI、制作ガイド、プロンプト一覧、制作ツールを、カテゴリからまとめて探せます。
            </p>
          </div>
        </section>

        <section className={styles.indexSection} aria-label="公開コンテンツ一覧">
          <Suspense fallback={<ContentsFallback />}>
            <ContentsIndexClient contents={publishedContentsByDate} />
          </Suspense>
        </section>
      </main>
      <Footer />
    </>
  );
}
