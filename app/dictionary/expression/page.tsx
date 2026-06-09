import type { Metadata } from "next";
import { ExpressionDictionaryClient } from "./ExpressionDictionaryClient";

const title = "表情プロンプト辞書｜AIイラスト向け表情タグ一覧｜LULINAworks";
const description =
  "Stable DiffusionやNovelAIなどの画像生成AIで使いやすい表情プロンプトを、笑顔・怒り・涙・照れ・記号表情などのカテゴリ別にサンプル付きでまとめています。";
const canonicalUrl = "https://lulinaworks.com/dictionary/expression";
const ogImage = "/assets/og/ogp-dictionary-expression.png";

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
        alt: title,
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

export default function ExpressionDictionaryPage() {
  return <ExpressionDictionaryClient />;
}
