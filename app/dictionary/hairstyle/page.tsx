import type { Metadata } from "next";
import { HairstyleDictionaryClient } from "./HairstyleDictionaryClient";

const title = "髪型辞書｜AIイラスト制作に使える髪型プロンプト集";
const description =
  "AIイラスト制作で使いやすい髪型プロンプトを、長さ・シルエット・前髪・顔まわりなどのカテゴリ別に整理しています。画像サンプルを見ながら、必要なpromptをコピーできます。";
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
