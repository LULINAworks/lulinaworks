import styles from "./TopHero.module.css";

export function TopHero() {
  return (
    <section className={styles.hero} aria-labelledby="top-catch-copy">
      <picture className={styles.picture}>
        <source
          media="(max-width: 760px)"
          srcSet="/assets/hero/hero-sp.webp"
          width="1440"
          height="1800"
        />
        <img
          src="/assets/hero/hero-pc.webp"
          alt=""
          width="2400"
          height="1000"
          decoding="async"
          fetchPriority="high"
        />
      </picture>

      <div className={styles.copy}>
        <img
          className={styles.logo}
          src="/assets/brand/logoword-standard.png"
          alt="LULINAworks"
          width="2172"
          height="724"
        />
        <h1 id="top-catch-copy">「やってみたい」を、形にする。</h1>
      </div>
    </section>
  );
}
