import Link from "next/link";
import type { ContentItem } from "@/data/content";
import { CompactContentCard, FeaturedContentCard } from "./TopContentCard";
import styles from "./TopContent.module.css";

type LatestContentProps = {
  items: readonly ContentItem[];
};

export function LatestContent({ items }: LatestContentProps) {
  const [featured, ...secondary] = items;

  return (
    <section className={styles.section} aria-labelledby="latest-content-heading">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionHeading} id="latest-content-heading">
          最新コンテンツ
        </h2>
        <Link className={styles.sectionLink} href="/contents">
          コンテンツ一覧はこちら <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className={styles.latestGrid}>
        <FeaturedContentCard item={featured} showCategoryBadge showDate />
        <div className={styles.latestSecondary}>
          {secondary.map((item) => (
            <CompactContentCard item={item} key={item.href} showCategoryBadge showDate />
          ))}
        </div>
      </div>
    </section>
  );
}
