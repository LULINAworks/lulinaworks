import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const title = "プライバシーポリシー | LULINAworks";
const description =
  "LULINAworksのプライバシーポリシーです。アクセス解析、広告配信、Cookie、免責事項、著作権などについて記載しています。";
const canonicalUrl = "https://lulinaworks.com/privacy-policy";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: canonicalUrl,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="article-main static-page-main">
        <article className="article-shell">
          <header className="article-header">
            <div className="article-header-copy">
              <span className="page-kicker">Policy</span>
              <h1>プライバシーポリシー</h1>
              <p>LULINAworksをご利用いただく際の情報の取り扱いについてまとめています。</p>
            </div>
          </header>

          <section className="article-content">
            <h2>1. はじめに</h2>
            <p>
              LULINAworks（以下「当サイト」）では、AIイラスト制作に関するガイド記事やプロンプト辞書などの情報を掲載しています。
              当サイトをご利用いただく際の個人情報の取り扱い、アクセス解析、広告配信、Cookieなどについて、以下のとおり定めます。
            </p>

            <h2>2. アクセス解析について</h2>
            <p>
              当サイトでは、サイトの利用状況を把握し、コンテンツ改善の参考にするため、Google Analyticsなどのアクセス解析ツールを利用する場合があります。
              これらのツールではCookieなどを使用し、ページ閲覧状況やサイト内での操作状況などの利用データを収集する場合があります。
              収集した情報は、個人を特定する目的では使用しません。
              Googleによるデータ収集・処理については、
              <a
                href="https://policies.google.com/technologies/partner-sites?hl=ja"
                target="_blank"
                rel="noopener noreferrer"
              >
                Googleのサービスを使用するサイトやアプリから収集した情報のGoogleによる使用
              </a>
              をご確認ください。
            </p>

            <h2>3. 広告配信について</h2>
            <p>
              当サイトでは、Google AdSenseなどの第三者配信広告サービスを利用する場合があります。
              Googleを含む第三者配信事業者は、Cookieなどを使用し、ユーザーの過去の当サイトまたは他サイトへのアクセス情報に基づいて広告を配信する場合があります。
              また、Googleやそのパートナーが、当サイトや他サイトへのアクセス情報に基づいて広告を表示する場合があります。
              パーソナライズ広告を希望しない場合は、
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">
                Googleの広告設定
              </a>
              から無効にできます。
              また、Cookieはブラウザ設定から無効にできます。
            </p>

            <h2>4. Cookieについて</h2>
            <p>
              Cookieとは、サイトを利用した際にブラウザへ保存される情報です。
              当サイトでは、アクセス解析、広告配信、サイトの利便性向上、不正利用防止などの目的でCookieを使用する場合があります。
              Cookieには氏名、住所、メールアドレスなど、個人を直接特定する情報は含まれません。
              Cookieの使用を希望しない場合は、ブラウザの設定から無効にできます。
              ただし、Cookieを無効にすると一部機能が正常に利用できない場合があります。
            </p>

            <h2>5. 免責事項</h2>
            <p>
              当サイトでは、できる限り正確な情報を掲載するよう努めていますが、内容の正確性、最新性、安全性を保証するものではありません。
              当サイトの情報を利用したことにより発生した損害やトラブルについて、当サイトでは責任を負いかねます。
              また、掲載内容は予告なく変更・削除する場合があります。
            </p>

            <h2>6. 掲載コンテンツの利用について</h2>
            <p>
              当サイトで紹介しているプロンプトや単語例は、AIイラスト制作の参考として自由にご利用いただけます。
              そのまま使うだけでなく、ご自身の制作内容に合わせて調整していただいて問題ありません。
            </p>
            <p>
              ただし、当サイトの文章、サンプル画像、ページ内容をそのままコピーして別サイトやSNSなどへ転載・再配布することはご遠慮ください。
              内容を紹介する場合は、引用元としてLULINAworksへのリンクを添えていただけると助かります。
            </p>

            <h2>7. リンクについて</h2>
            <p>
              当サイトは基本的にリンクフリーです。
              ただし、画像ファイルへの直リンクや、当サイトの内容を誤解させる形でのリンクはご遠慮ください。
            </p>

            <h2>8. お問い合わせ</h2>
            <p>
              当サイトに関するお問い合わせは、
              <Link href="/contact">お問い合わせページ</Link>
              よりお願いいたします。
            </p>

            <h2>9. 制定日・最終更新日</h2>
            <p>
              制定日：2026年5月
              <br />
              最終更新日：2026年6月26日
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
