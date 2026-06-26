import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { dictionaryItems } from "@/data/dictionary";
import { AnimaPromptTemplateClient } from "./AnimaPromptTemplateClient";

const pageName = "Animaでも使える!! AI発注書付きプロンプトガイドジェネレーター β";
const title = `${pageName} | LULINAworks`;
const description =
  "AnimaやNovelAI・SD系でも使えるAIイラスト生成プロンプトの骨組みを作る補助ツール。AI発注書機能搭載で対話型AIへそのまま投げられます。";
const canonicalUrl = "https://lulinaworks.com/tools/anima-prompt-template";
const ogImage = "/assets/og/ogp-tool-anima-prompt-template.png";
const eyecatchPc = "/assets/eyecatch/eyecatch-tool-anima-prompt-template-pc.webp";
const eyecatchMobile = "/assets/eyecatch/eyecatch-tool-anima-prompt-template-mobile.webp";

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
      "タグのみは、Anima・NovelAI・SDなど全ての生成ツールで使える汎用形式です。",
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

const dictionaryCards = dictionaryItems.filter((item) => item.published && item.href !== "/dictionary");

export default function AnimaPromptTemplatePage() {
  return (
    <>
      <Header />
      <main className="subpage-main anima-template-page" id="page-top">
        <section className="container anima-template-hero" aria-labelledby="anima-template-title">
          <nav className="breadcrumb" aria-label="パンくず">
            <a href="/">TOP</a>
            <span aria-hidden="true">/</span>
            <span>Tools</span>
            <span aria-hidden="true">/</span>
            <span>Animaプロンプトテンプレート β</span>
          </nav>

          <picture className="anima-template-hero-picture" aria-hidden="true">
            <source media="(max-width: 768px)" srcSet={eyecatchMobile} />
            <img src={eyecatchPc} alt="" />
          </picture>

          <div className="anima-template-hero-copy">
            <span className="page-kicker">Animaプロンプトテンプレート β</span>
            <h1 id="anima-template-title">
              <span className="anima-title-line">Animaでも使える!!</span>
              <span className="anima-title-line">AI発注書付き</span>
              <span className="anima-title-line">
                <span className="anima-title-chunk">プロンプトガイド</span>
                <span className="anima-title-chunk">ジェネレーター β</span>
              </span>
            </h1>
            <p>{description}</p>
          </div>
        </section>

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
                ※現在β版です。今後サイト内のタグ辞書と連携し、実際のタグを選択して完成プロンプトを
                そのまま出力できる機能を追加予定です。
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
              <h2 id="tool-dictionary-title">枠を埋めるときに使える辞書</h2>
            </div>
            <a className="tool-dictionary-main" href="/dictionary">
              <span>辞書一覧を見る</span>
              <strong>AIイラスト用プロンプト辞書一覧</strong>
              <p>髪型・表情・ポーズ・構図など、公開済みの辞書をまとめて確認できます。</p>
            </a>
            <div className="tool-dictionary-grid">
              {dictionaryCards.map((item) => (
                <a className="tool-dictionary-card" href={item.href} key={item.href}>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                  {item.status ? <span className="tool-dictionary-status">{item.status}</span> : null}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
