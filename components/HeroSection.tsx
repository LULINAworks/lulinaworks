import { Icon } from "./Icons";

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <span className="hero-arc-left" />
      <span className="hero-arc-right" />
      <span className="sparkle s1">✦</span>
      <span className="sparkle s2">✧</span>
      <span className="sparkle s3">✦</span>
      <span className="sparkle s4">○</span>
      <div className="hero-inner">
        <div className="hero-figure">
          <img src="/assets/lulina-guide-pose.png" alt="案内ポーズのルリナ" />
        </div>
        <div className="hero-content">
          <img className="hero-logo" src="/assets/logo-hero.png" alt="LULINAworks ロゴ" />
          <h1 className="hero-title" id="hero-title">
            AIイラストを<br />
            分かりやすく<br />
            作りやすく
          </h1>
          <p className="hero-lead">
            生成イラスト関連の記事と<span className="sp-break"><br /></span>プロンプト辞書をまとめた、<br />
            AIイラストのガイドサイトです。<br />
            ComfyUIの導入から、使い方の基礎まで<span className="sp-break"><br /></span>掲載していきます。
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#portal"><Icon name="i-book" />記事を見る</a>
            <a className="btn btn-secondary" href="#portal"><Icon name="i-book" />辞書を見る</a>
          </div>
        </div>
      </div>
    </section>
  );
}
