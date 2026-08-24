import Link from "next/link";
import type { ReactNode } from "react";
import { DateMeta } from "./DateMeta";
import styles from "./ContentPage.module.css";

type ContentHeroProps = {
  className?: string;
  backHref: string;
  backLabel: string;
  category: string;
  title: ReactNode;
  lead: string;
  publishedAt: string;
  updatedAt?: string;
  eyecatchSrc: string;
  eyecatchAlt: string;
  imagePosition?: string;
  tone?: "light" | "dark";
};

export function ContentHero({
  className,
  backHref,
  backLabel,
  title,
  lead,
  publishedAt,
  updatedAt,
  eyecatchSrc,
  eyecatchAlt,
  imagePosition,
  tone = "light",
}: ContentHeroProps) {
  const toneClass = tone === "dark" ? styles.heroToneDark : styles.heroToneLight;

  return (
    <header className={className ? `${styles.hero} ${className}` : styles.hero}>
      <nav className={styles.backNav} aria-label="記事ナビゲーション">
        <Link href={backHref} className={styles.backLink}>
          <span aria-hidden="true">←</span> {backLabel}
        </Link>
      </nav>

      <figure className={`${styles.eyecatch} ${toneClass}`}>
        <img
          src={eyecatchSrc}
          alt={eyecatchAlt}
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
        />
        <figcaption className={styles.heroBand}>
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
