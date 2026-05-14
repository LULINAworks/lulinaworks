import { Icon } from "./Icons";

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <picture className="hero-visual">
        <source media="(max-width: 760px)" srcSet="/assets/hero/lulina-top-hero-mobile.png" />
        <img src="/assets/hero/lulina-top-hero-desktop.png" alt="" />
      </picture>
      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title" id="hero-title">
            <span>LULINAworks</span>
            AIイラストを<br />
            作りやすく、<br />
            わかりやすく。
          </h1>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/articles"><Icon name="i-book" />記事を見る</a>
            <a className="btn btn-secondary" href="/dictionary"><Icon name="i-book" />辞書を見る</a>
          </div>
        </div>
      </div>
    </section>
  );
}
