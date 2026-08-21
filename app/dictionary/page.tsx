import type { Metadata } from "next";
import { ContentsCard } from "@/components/content/ContentsCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { allPublishedContents } from "@/data/contents";
import styles from "./dictionary-hub.module.css";

const title = "AIイラストのプロンプト一覧｜髪型・表情・ポーズ・構図 | LULINAworks";
const description =
  "髪型・表情・ポーズ・構図など、AIイラスト制作で使えるプロンプトをカテゴリ別に探せます。";
const canonicalUrl = "https://lulinaworks.com/dictionary";
const ogImage = "/assets/og/og-prompt-hub.png";

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
        alt: "LULINAworks AIイラストのプロンプト一覧",
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

const promptContents = allPublishedContents.filter(
  (item) => item.contentType === "dictionary",
);

export default function DictionaryPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="prompt-hub-title">
          <div className={styles.heroImage}>
            <img
              src="/assets/eyecatch/prompt-hub-eyecatch.webp"
              alt=""
              width="1600"
              height="900"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className={styles.heroCopy}>
            <h1 id="prompt-hub-title">プロンプト一覧</h1>
            <p>{description}</p>
          </div>
        </section>

        <section className={styles.indexSection} aria-label="公開中のプロンプト一覧">
          <div className={styles.grid}>
            {promptContents.map((item) => (
              <ContentsCard item={item} key={item.href} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
