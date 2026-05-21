import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const title = "お問い合わせ | LULINAworks";
const description =
  "LULINAworksへのお問い合わせページです。記事、辞書、掲載内容に関するご連絡先を掲載しています。";
const canonicalUrl = "https://lulinaworks.com/contact";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: canonicalUrl,
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="article-main static-page-main">
        <article className="article-shell">
          <header className="article-header">
            <div className="article-header-copy">
              <span className="page-kicker">Contact</span>
              <h1>お問い合わせ</h1>
              <p>LULINAworksへのご連絡先と、お問い合わせ時の注意事項をまとめています。</p>
            </div>
          </header>

          <section className="article-content">
            <h2>1. お問い合わせについて</h2>
            <p>
              LULINAworksへのお問い合わせは、現在Xアカウントにて受け付けています。
              記事内容、プロンプト辞書、画像、掲載内容に関するご連絡などがありましたら、以下のアカウントまでお願いいたします。
            </p>

            <h2>2. 連絡先</h2>
            <p>
              LULINAworks Xアカウント
              <br />
              <a href="https://x.com/LULINAworks" target="_blank" rel="noopener noreferrer">
                https://x.com/LULINAworks
              </a>
            </p>

            <h2>3. 返信について</h2>
            <p>
              いただいた内容は確認いたしますが、すべてのお問い合わせへの返信を保証するものではありません。
              内容によっては返信できない場合がありますので、あらかじめご了承ください。
            </p>

            <h2>4. 注意事項</h2>
            <p>
              営業、勧誘、当サイトと関係のないご連絡については、返信を控えさせていただく場合があります。
              また、個人情報を含む内容の送信はお控えください。
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
