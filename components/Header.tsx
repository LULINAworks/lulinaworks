export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="LULINAworks トップへ戻る">
          <img src="/assets/logo-header.png" alt="LULINAworks ロゴ" />
        </a>
        <nav className="nav" aria-label="グローバルナビゲーション">
          <a className="is-active" href="#top">TOP</a>
          <a href="#portal">記事</a>
          <a href="#portal">辞書</a>
          <a href="#about">ルリナについて</a>
        </nav>
      </div>
    </header>
  );
}
