import Link from "next/link";
import { DateMeta } from "./DateMeta";
import styles from "./ContentPage.module.css";

type ContentHeroProps = {
  backHref: string;
  backLabel: string;
  category: string;
  title: string;
  lead: string;
  publishedAt: string;
  updatedAt?: string;
  eyecatchSrc: string;
  eyecatchAlt: string;
  tone?: "light" | "dark";
};

export function ContentHero({
  backHref,
  backLabel,
  category,
  title,
  lead,
  publishedAt,
  updatedAt,
  eyecatchSrc,
  eyecatchAlt,
  tone = "light",
}: ContentHeroProps) {
  const toneClass = tone === "dark" ? styles.heroToneDark : styles.heroToneLight;

  return (
    <header className={styles.hero}>
      <nav className={styles.backNav} aria-label="記事ナビゲーション">
        <Link href={backHref} className={styles.backLink}>
          <span aria-hidden="true">←</span> {backLabel}
        </Link>
      </nav>

      <figure className={`${styles.eyecatch} ${toneClass}`}>
        <img src={eyecatchSrc} alt={eyecatchAlt} />
        <figcaption className={styles.heroBand}>
          <span className={styles.category}>{category}</span>
          <h1>{title}</h1>
        </figcaption>
      </figure>

      <div className={styles.heroMeta}>
        <p className={styles.lead}>{lead}</p>
        <DateMeta publishedAt={publishedAt} updatedAt={updatedAt} />
      </div>
    </header>
  );
}
