import Link from "next/link";
import styles from "./Footer.module.css";

const contentLinks = [
  { label: "コンテンツ一覧", href: "/contents" },
  { label: "AIモデル/サービス", href: "/contents?category=ai-model-service" },
  { label: "プロンプト", href: "/dictionary" },
  { label: "制作ガイド", href: "/contents?category=guide" },
  { label: "ComfyUI", href: "/contents?category=comfyui" },
  { label: "ツール", href: "/contents?category=tools" },
] as const;

const siteLinks = [
  { label: "LULINAworksについて", href: "/about" },
  { label: "お問い合わせ", href: "/contact" },
  { label: "プライバシーポリシー", href: "/privacy-policy" },
] as const;

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.columns}>
          <section className={styles.column} aria-labelledby="footer-contents-heading">
            <Link className={styles.logoLink} href="/" aria-label="LULINAworks ホーム">
              <img
                className={styles.logo}
                src="/assets/brand/logoword-standard.png"
                alt="LULINAworks"
                width="2172"
                height="724"
                loading="lazy"
              />
            </Link>
            <h2 id="footer-contents-heading">コンテンツ</h2>
            <nav aria-labelledby="footer-contents-heading">
              <ul>
                {contentLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          <section className={styles.column} aria-labelledby="footer-site-heading">
            <h2 id="footer-site-heading">サイト情報</h2>
            <nav aria-labelledby="footer-site-heading">
              <ul>
                {siteLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
                <li>
                  <a href="https://x.com/LULINAworks" target="_blank" rel="noopener noreferrer">
                    X
                    <span className={styles.externalMark} aria-hidden="true">↗</span>
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </div>

        <p className={styles.copyright}>© LULINAworks. All rights reserved.</p>
      </div>
    </footer>
  );
}
