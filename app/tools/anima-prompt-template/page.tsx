import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { tools } from "@/data/tools";
import { AnimaPromptTemplateClient } from "./AnimaPromptTemplateClient";
import styles from "./AnimaPromptTemplate.module.css";

const pageName = "Animaでも使える!! AI発注書付きプロンプトガイドジェネレーター β";
const title = `${pageName} | LULINAworks`;
const description =
  "AnimaやNovelAI・SD系でも使えるAIイラスト生成プロンプトの骨組みを作る補助ツール。AI発注書機能搭載で対話型AIへそのまま投げられます。";
const canonicalUrl = "https://lulinaworks.com/tools/anima-prompt-template";
const ogImage = "/assets/og/ogp-tool-anima-prompt-template.png";
const heroImage =
  tools.find((item) => item.href === "/tools/anima-prompt-template")?.cardImage.src ??
  (() => {
    throw new Error("Anima prompt template content record was not found.");
  })();

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
        alt: "Animaプロンプトテンプレート β",
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

const tips = [
  {
    title: "1. モードを選ぶ",
    body: [
      "タグのみは、Anima・NovelAI・SD系など、タグ形式を使う生成環境で扱いやすい汎用形式です。",
      "タグ+自然文は、タグでキャラクター情報を、自然文でシーンを描写する形式です。",
    ],
  },
  {
    title: "2. プリセットを選ぶ",
    body: ["作りたいイメージに近いプリセットを選択します。後からカテゴリを個別に追加・削除できます。"],
  },
  {
    title: "3. カテゴリを選択する",
    body: ["必要な項目にチェックを入れるとプレビューにリアルタイムで反映されます。不要な項目はオフのままでOKです。"],
  },
  {
    title: "4. 出力を使う",
    body: [
      "このままコピーでは、骨組みの状態で生成ツールのプロンプト欄に貼り付け、[ ]部分を自分で埋めていきます。",
      "AI発注書を作るでは、シーンの説明文を入力して対話型AIに投げるテンプレを生成します。AIが具体的なタグを補完してくれるので、プロンプトに自信がない方向けです。",
      "低スペックなローカルLLMではAI発注書が正常に動作しない場合があります。",
    ],
  },
];

export default function AnimaPromptTemplatePage() {
  return (
    <>
      <Header />
      <main className={`subpage-main ${styles.page}`} id="page-top">
        <header className={styles.hero} aria-labelledby="anima-template-title">
          <nav className={styles.backNav} aria-label="コンテンツ一覧へ戻る">
            <a href="/contents?category=tools">← コンテンツ一覧へ</a>
          </nav>

          <figure className={styles.heroImage}>
            <img
              src={heroImage}
              alt=""
              aria-hidden="true"
              style={{ objectPosition: "center 52%" }}
            />
            <figcaption className={styles.heroBand}>
              <h1 id="anima-template-title" className={styles.heroTitle}>
                <span className={styles.noBreak}>Animaでも使える!!</span>{" "}
                <span className={styles.noBreak}>AI発注書付き</span>
                <span className={styles.noBreak}>プロンプトガイド</span>
                <span className={styles.noBreak}>ジェネレーター β</span>
              </h1>
            </figcaption>
          </figure>

          <div className={styles.heroLead}>
            <p>{description}</p>
          </div>
        </header>

        <section className="container tool-info-section anima-tool-section" aria-labelledby="tool-overview-title">
          <div className="tool-section-head">
            <h2 id="tool-overview-title">
              <span className="anima-heading-line">プロンプトガイドジェネレーター</span>
              <span className="anima-heading-line">とは？</span>
            </h2>
          </div>
          <div className="tool-overview-layout">
            <div className="tool-overview-copy">
              <p>
                このツールはAIイラスト生成のプロンプトを「骨組み」の状態で組み立てる補助ツールです。
                プロンプトの並べ方がわからない方・自然文の組み立てが苦手な方・英語が得意でない方など、
                AIイラスト生成を始めたばかりの方に特におすすめです。
              </p>
              <p>
                hairやponytailなどの完成タグを直接選ぶのではなく、[髪色][髪型]といったカテゴリの枠組みを作り、
                ユーザー自身か対話型AIが中身を埋める使い方を想定しています。
              </p>
            </div>
            <aside className="tool-overview-side" aria-label="使い方とβ版について">
              <h3>どう使うか</h3>
              <p>
                Anima・NovelAI・SD系など幅広い生成ツールに対応しており、「AI発注書」機能を使えば
                対話型AIにそのまま投げて完成プロンプトを生成させることもできます。
              </p>
              <p className="tool-beta-note">
                ※β版のため、仕様や出力形式は変更する場合があります。現在はLULINAworksのプロンプト一覧を参照しながら、
                必要なタグを骨組みプロンプトへ手動で組み合わせて利用できます。
              </p>
            </aside>
          </div>
        </section>

        <section className="container tool-info-section anima-tool-section" aria-labelledby="tool-tips-title">
          <div className="tool-section-head">
            <h2 id="tool-tips-title">使い方tips</h2>
          </div>
          <div className="tool-tips-list">
            {tips.map((tip, index) => (
              <details className="tool-tip-item" open={index === 0} key={tip.title}>
                <summary>
                  <span className="tool-tip-title">{tip.title}</span>
                  <span className="tool-tip-hint">クリックで開閉</span>
                </summary>
                <div>
                  {tip.body.map((body) => (
                    <p key={body}>{body}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="anima-guide-block" aria-labelledby="tool-guide-title">
          <div className="container tool-guide-pending anima-guide-section">
            <div>
              <h2 id="tool-guide-title">
                <span className="anima-heading-line">詳しい使い方ガイドを</span>
                <span className="anima-heading-line">公開しました</span>
              </h2>
              <p>
                基本操作、骨組みプロンプトの使い方、AI発注書を対話型AIへ渡す流れをまとめています。
              </p>
            </div>
            <a href="/articles/anima-prompt-template-guide">使い方ガイドを読む</a>
          </div>
        </section>

        <div className="anima-generator-block">
          <AnimaPromptTemplateClient />
        </div>

        <section className="anima-dictionary-block" aria-labelledby="tool-dictionary-title">
          <div className="container tool-dictionary-links anima-dictionary-section">
            <div className="tool-section-head">
              <h2 id="tool-dictionary-title">枠を埋めるときに使えるプロンプト一覧</h2>
            </div>
            <a className="tool-dictionary-main" href="/dictionary">
              <span>プロンプト一覧</span>
              <strong>AIイラスト制作に使えるプロンプト一覧</strong>
              <p>AIイラスト制作で使いやすいプロンプトを、カテゴリごとにサンプル付きで整理しています。</p>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
