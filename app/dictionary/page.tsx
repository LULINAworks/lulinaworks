import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LinkCard } from "@/components/LinkCard";
import { dictionaryItems } from "@/data/dictionary";

const title = "辞書一覧｜LULINAworks";
const description = "AIイラスト制作に使うプロンプト辞書ページです。現在準備中です。";
const canonicalUrl = "https://lulinaworks.com/dictionary";

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
    images: ["/assets/og/og-dictionary.png"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/og/og-dictionary.png"],
  },
};

export default function DictionaryPage() {
  const publishedDictionaryItems = dictionaryItems.filter((item) => item.published);

  return (
    <>
      <Header />
      <main className="subpage-main">
        <section className="container list-hero visual-list-hero dictionary-hero" aria-labelledby="dictionary-page-title">
          <div className="sr-only">
            <span className="page-kicker">Dictionary</span>
            <h1 id="dictionary-page-title">辞書ページは準備中です</h1>
            <p>髪型、表情、ポーズなど、AIイラスト制作に使いやすいプロンプト表現を整理していく予定です。</p>
          </div>
          <img src="/assets/eyecatch/dictionary-list-eyecatch.png" alt="LULINAworksの辞書ページは準備中です" />
        </section>

        <section className="container list-section dictionary-list-section" aria-label="辞書一覧">
          <div className="article-list-grid dictionary-list-grid">
            {publishedDictionaryItems.map((item) => (
              <LinkCard key={item.href} item={item} variant="dictionary" />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
