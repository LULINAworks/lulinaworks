import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LinkCard } from "@/components/LinkCard";
import { publishedArticles } from "@/data/articles";

const title = "記事一覧｜LULINAworks";
const description = "ComfyUIやAIイラスト制作に関する記事をまとめています。";
const canonicalUrl = "https://lulinaworks.com/articles";

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
    images: ["/assets/og/og-articles.png"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/og/og-articles.png"],
  },
};

export default function ArticlesPage() {
  return (
    <>
      <Header />
      <main className="subpage-main">
        <section className="container list-hero visual-list-hero" aria-labelledby="articles-page-title">
          <div className="sr-only">
            <span className="page-kicker">Articles</span>
            <h1 id="articles-page-title">記事一覧</h1>
            <p>ComfyUIの導入やAIイラスト制作の基礎を、少しずつ読みやすくまとめていきます。</p>
          </div>
          <img src="/assets/eyecatch/articles-list-eyecatch.png" alt="LULINAworksの記事一覧" />
        </section>

        <section className="container list-section" aria-label="記事一覧">
          <div className="article-list-grid">
            {publishedArticles.map((item) => (
              <LinkCard key={item.href} item={item} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
