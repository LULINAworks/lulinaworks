import type { Metadata } from "next";
import { PoseDictionaryClient } from "./PoseDictionaryClient";

const title = "ポーズプロンプト辞書｜AIイラスト向けポーズタグ一覧｜LULINAworks";
const description =
  "Stable DiffusionやNovelAIなどの画像生成AIで使いやすいポーズプロンプトを、立ちポーズ・座りポーズ・手や腕の動き・寝そべりなどのカテゴリ別にサンプル付きでまとめています。";
const canonicalUrl = "https://lulinaworks.com/dictionary/pose";
const ogImage = "/assets/og/ogp-dictionary-pose.png";

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

export default function PoseDictionaryPage() {
  return <PoseDictionaryClient />;
}
