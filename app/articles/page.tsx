import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LinkCard } from "@/components/LinkCard";
import { publishedArticles } from "@/data/articles";

const title = "記事一覧｜LULINAworks";
const description =
  "ComfyUIの始め方、画像生成AIのモデル、プロンプトの考え方など、AIイラスト制作に役立つ記事をまとめています。";
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
        <section className="container list-hero visual-list-hero articles-index-hero" aria-labelledby="articles-page-title">
          <picture className="visual-list-picture" aria-hidden="true">
            <source media="(max-width: 760px)" srcSet="/assets/eyecatch/eyecatch-articles-index-bg-mobile.webp" />
            <img src="/assets/eyecatch/eyecatch-articles-index-bg-pc.webp" alt="" />
          </picture>
          <div className="list-hero-copy">
            <span className="page-kicker">Articles</span>
            <h1 id="articles-page-title">記事一覧</h1>
            <p className="list-hero-subcopy">AIイラスト制作のガイドをまとめています</p>
            <p>
              ComfyUIの始め方、画像生成AIのモデル、プロンプトの考え方など、AIイラスト制作に役立つ記事をまとめています。
            </p>
          </div>
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
