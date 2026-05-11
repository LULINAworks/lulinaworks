export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="footer-logo" href="/"><img src="/assets/logo/logo-header.png" alt="LULINAworks ロゴ" /></a>
        <nav className="footer-nav" aria-label="フッターナビゲーション">
          <a href="/">TOP</a>
          <a href="/articles">記事一覧</a>
          <a href="/dictionary">辞書一覧</a>
        </nav>
        <div className="sns"><a href="https://x.com/LULINAworks" target="_blank" rel="noopener noreferrer" aria-label="LULINAworksのXアカウント">X</a></div>
        <div className="copyright">© LULINAworks All rights reserved.</div>
      </div>
    </footer>
  );
}
