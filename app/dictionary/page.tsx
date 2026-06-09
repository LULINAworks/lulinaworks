import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LinkCard } from "@/components/LinkCard";
import { dictionaryItems } from "@/data/dictionary";

const title = "AIイラスト用プロンプト辞書｜Stable Diffusion・NovelAI向けタグ一覧｜LULINAworks";
const description =
  "Stable DiffusionやNovelAIなどの画像生成AIで使いやすいプロンプトを、髪型・表情・ポーズなどのカテゴリ別にサンプル付きでまとめています。";
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
          <picture className="visual-list-picture" aria-hidden="true">
            <source media="(max-width: 760px)" srcSet="/assets/eyecatch/eyecatch-dictionary-index-bg-mobile.webp" />
            <img src="/assets/eyecatch/eyecatch-dictionary-index-bg-pc.webp" alt="" />
          </picture>
          <div className="list-hero-copy">
            <span className="page-kicker">Dictionary</span>
            <h1 id="dictionary-page-title">
              <span className="hero-title-line">AIイラスト用</span>
              <span className="hero-title-line">プロンプト辞書</span>
            </h1>
            <p className="list-hero-subcopy">Stable Diffusion・NovelAI向けタグ一覧</p>
            <p>
              Stable DiffusionやNovelAIなどの画像生成AIで使いやすいプロンプトを、髪型・表情・ポーズなどのカテゴリ別にまとめています。画像サンプルを見ながら、使いたいタグや指定を探せます。
            </p>
          </div>
        </section>

        <section className="container list-section dictionary-list-section" aria-label="AIイラスト用プロンプト辞書一覧">
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
