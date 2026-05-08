export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/" aria-label="LULINAworks トップへ戻る">
          <img src="/assets/logo/logo-header.png" alt="LULINAworks ロゴ" />
        </a>
        <nav className="nav" aria-label="グローバルナビゲーション">
          <a href="/">TOP</a>
          <a href="/articles">記事一覧</a>
          <a href="/dictionary">辞書一覧</a>
        </nav>
      </div>
    </header>
  );
}
