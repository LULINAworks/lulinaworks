import type { Metadata } from "next";
import { ExpressionDictionaryClient } from "./ExpressionDictionaryClient";

const title = "表情辞書｜LULINAworks";
const description =
  "笑顔・怒り・涙・記号表情など、AIイラスト制作で使いやすい表情プロンプトをカテゴリ別にまとめています。";
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
