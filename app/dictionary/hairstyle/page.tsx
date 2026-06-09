import type { Metadata } from "next";
import { HairstyleDictionaryClient } from "./HairstyleDictionaryClient";

const title = "髪型プロンプト辞書｜AIイラスト向け髪型タグ一覧｜LULINAworks";
const description =
  "Stable DiffusionやNovelAIなどの画像生成AIで使いやすい髪型プロンプトを、長さ・シルエット・前髪・顔まわりなどのカテゴリ別にサンプル付きでまとめています。";
const canonicalUrl = "https://lulinaworks.com/dictionary/hairstyle";
const ogImage = "/assets/og/ogp-dictionary-hairstyle.png";

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

export default function HairstyleDictionaryPage() {
  return <HairstyleDictionaryClient />;
}
