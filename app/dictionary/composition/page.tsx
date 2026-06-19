import type { Metadata } from "next";
import { CompositionDictionaryClient } from "./CompositionDictionaryClient";

const title = "構図・カメラプロンプト辞書｜AIイラスト向け構図・画角・目線タグ一覧｜LULINAworks";
const description =
  "Stable DiffusionやNovelAIなどの画像生成AIで使いやすい構図・カメラ・目線プロンプトを、ショットサイズ、カメラアングル、向き、視線、奥行き表現などのカテゴリ別にサンプル付きでまとめています。";
const canonicalUrl = "https://lulinaworks.com/dictionary/composition";
const ogImage = "/assets/og/ogp-dictionary-composition.png";

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

export default function CompositionDictionaryPage() {
  return <CompositionDictionaryClient />;
}
