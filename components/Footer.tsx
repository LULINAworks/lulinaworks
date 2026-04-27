export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="footer-logo" href="#top"><img src="/assets/logo-header.png" alt="LULINAworks ロゴ" /></a>
        <nav className="footer-nav" aria-label="フッターナビゲーション">
          <a href="#top">TOP</a>
          <a href="#portal">記事</a>
          <a href="#portal">辞書</a>
          <a href="#about">ルリナについて</a>
          <a href="#">お問い合わせ</a>
          <a href="#">プライバシーポリシー</a>
        </nav>
        <div className="sns"><a href="#" aria-label="X">X</a></div>
        <div className="copyright">© LULINAworks All rights reserved.</div>
      </div>
    </footer>
  );
}
