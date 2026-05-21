import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const title = "LULINAworksについて | LULINAworks";
const description = "LULINAworksは、AIイラスト制作に役立つガイド記事とプロンプト辞書をまとめるサイトです。";
const canonicalUrl = "https://lulinaworks.com/about";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: canonicalUrl,
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="article-main static-page-main">
        <article className="article-shell">
          <header className="article-header">
            <div className="article-header-copy">
              <span className="page-kicker">About</span>
              <h1>LULINAworksについて</h1>
              <p>AIイラスト制作に役立つガイド記事とプロンプト辞書を、制作時に使いやすい形で整理しているサイトです。</p>
            </div>
          </header>

          <section className="article-content">
            <h2>1. LULINAworksについて</h2>
            <p>
              LULINAworksは、AIイラスト制作に役立つガイド記事とプロンプト辞書をまとめるサイトです。
              ComfyUIの使い方、画像生成AIの基礎、プロンプトの考え方、制作に使える辞書ページなどを整理しています。
            </p>

            <h2>2. 掲載している内容</h2>
            <p>当サイトでは、主に以下の内容を掲載しています。</p>
            <ul>
              <li>ComfyUIの導入や基本操作に関するガイド記事</li>
              <li>画像生成AIのモデルやプロンプトに関する基礎記事</li>
              <li>髪型、表情、ポーズなど、制作に使えるプロンプト辞書</li>
              <li>AIイラスト制作に関する検証やメモ</li>
            </ul>

            <h2>3. プロンプト辞書について</h2>
            <p>
              プロンプト辞書では、制作時に使いやすい単語や表現をカテゴリ別に整理しています。
              髪型辞書では、プロンプト、サンプル画像、コピー機能を用意し、制作中に確認しやすい形を目指しています。
              今後は表情辞書やポーズ辞書なども追加していく予定です。
            </p>

            <h2>4. ルリナについて</h2>
            <p>
              ルリナは、LULINAworksの案内役キャラクターです。
              記事内では、補足や注意点、制作時のちょっとしたポイントを案内する役割として登場します。
            </p>

            <h2>5. 外部リンク</h2>
            <p>LULINAworksの更新情報や作品投稿は、以下の外部サービスでも確認できます。</p>
            <ul>
              <li>
                X：
                <a href="https://x.com/LULINAworks" target="_blank" rel="noopener noreferrer">
                  https://x.com/LULINAworks
                </a>
              </li>
              <li>
                pixiv：
                <a href="https://www.pixiv.net/users/126196865" target="_blank" rel="noopener noreferrer">
                  https://www.pixiv.net/users/126196865
                </a>
              </li>
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
