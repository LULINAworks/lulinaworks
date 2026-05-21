export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="footer-logo" href="/"><img src="/assets/logo/logo-header.png" alt="LULINAworks ロゴ" /></a>
        <nav className="footer-nav" aria-label="フッターナビゲーション">
          <a href="/">TOP</a>
          <a href="/articles">記事一覧</a>
          <a href="/dictionary">辞書一覧</a>
          <a href="/about">LULINAworksについて</a>
          <a href="/contact">お問い合わせ</a>
          <a href="/privacy-policy">プライバシーポリシー</a>
        </nav>
        <div className="copyright">© LULINAworks All rights reserved.</div>
      </div>
    </footer>
  );
}
