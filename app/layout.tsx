import type { Metadata } from "next";
import { Noto_Sans_JP, Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-body",
});

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-heading",
});

const title = "LULINAworks｜AIイラストとプロンプトのメモ帳";
const description =
  "AIイラスト制作、ComfyUI、プロンプトの考え方や辞書を、制作メモとしてまとめています。";
const canonicalUrl = "https://lulinaworks.com/";

export const metadata: Metadata = {
  metadataBase: new URL("https://lulinaworks.com"),
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
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${notoSansJp.variable} ${zenMaruGothic.variable}`}>
      <body>{children}</body>
    </html>
  );
}
