const socialLinks = [
  {
    label: "X",
    title: "Xで更新情報を見る",
    description: "新記事・辞書追加・制作進捗をお知らせします",
    href: "https://x.com/LULINAworks",
    variant: "x",
  },
  {
    label: "pixiv",
    title: "pixivで作品を見る",
    description: "ルリナやAIイラスト作品をまとめています",
    href: "https://www.pixiv.net/users/126196865",
    variant: "pixiv",
  },
] as const;

export function AboutLulinaSection() {
  return (
    <section className="section" id="about">
      <div className="section-head social-section-head">
        <div className="section-title-wrap social-title-wrap">
          <h2 className="section-title">
            <span>LULINAworksの更新情報・</span>
            <span>作品投稿</span>
          </h2>
          <p className="section-desc">
            新しい記事や辞書の追加情報、制作したAIイラストは、外部サービスでも確認できます。
          </p>
        </div>
      </div>

      <div className="lulina-row social-link-list">
        {socialLinks.map((link) => (
          <a
            className={`about-card social-link-card social-link-card-${link.variant}`}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            key={link.href}
          >
            <div className="social-link-body">
              <span className="social-link-label">{link.label}</span>
              <h3>{link.title}</h3>
              <p>{link.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
