import type { Metadata } from "next";
import { StaticPageShell } from "@/components/static-page/StaticPageShell";

const title = "LULINAworksについて | LULINAworks";
const description =
  "LULINAworksは、AIイラスト制作に役立つ情報を、試しやすく・探しやすい形で整理しているサイトです。";
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
    <StaticPageShell
      title="LULINAworksについて"
      lead="LULINAworksは、AIイラスト制作に役立つ情報を、試しやすく・探しやすい形で整理しているサイトです。"
    >
      <h2>1. 当サイトについて</h2>
      <p>
        LULINAworksでは、AnimaやComfyUI、プロンプト、AIイラスト制作の基礎や実践に役立つ情報を紹介しています。使い方を調べたいときや、新しい制作方法を試したいときに参考にできるサイトを目指しています。
      </p>

      <h2>2. 掲載している内容</h2>
      <p>当サイトでは、主に以下の内容を掲載しています。</p>
      <ul>
        <li>Animaの使い方や特徴に関するコンテンツ</li>
        <li>髪型・表情・ポーズ・構図などのプロンプト一覧</li>
        <li>AIイラスト制作の基礎・比較・考え方をまとめた制作ガイド</li>
        <li>ComfyUIの導入や使い方</li>
        <li>プロンプト作成などを補助する制作ツール</li>
      </ul>

      <h2>3. プロンプト一覧について</h2>
      <p>
        プロンプト一覧では、AIイラスト制作で使いやすい単語や表現をカテゴリ別に整理しています。サンプル画像を見ながらプロンプトタグを確認・コピーできます。
      </p>

      <h2>4. X</h2>
      <p>LULINAworksの更新情報は、Xでもお知らせしています。</p>
      <p>
        <a href="https://x.com/LULINAworks" target="_blank" rel="noopener noreferrer">
          @LULINAworks
        </a>
      </p>
    </StaticPageShell>
  );
}
