import Link from "next/link";
import {
  contentCategoryLabels,
  formatContentDate,
  type ContentItem,
} from "@/data/content";
import styles from "./TopContent.module.css";

type ContentCardProps = {
  item: ContentItem;
  showCategoryBadge?: boolean;
  showDate?: boolean;
};

function ContentImage({ item }: ContentCardProps) {
  return (
    <img
      src={item.cardImage.src}
      alt=""
      style={{
        objectFit: item.cardImage.fit ?? "cover",
        objectPosition: item.cardImage.position ?? "center",
      }}
      loading="lazy"
      decoding="async"
    />
  );
}

function CategoryBadge({ item }: Pick<ContentCardProps, "item">) {
  return (
    <span className={styles.cardBadge}>
      {contentCategoryLabels[item.primaryCategory]}
    </span>
  );
}

function ImageContentCard({
  item,
  className,
  showCategoryBadge = false,
  showDate = false,
}: ContentCardProps & { className: string }) {
  return (
    <Link className={`${styles.imageCard} ${className}`} href={item.href}>
      <span className={styles.imageCardMedia}>
        <ContentImage item={item} />
        {showCategoryBadge ? <CategoryBadge item={item} /> : null}
      </span>
      <span className={styles.imageCardOverlay}>
        <h3 className={styles.imageCardTitle}>{item.title}</h3>
        <span className={styles.imageCardDescription}>{item.topSummary}</span>
        {showDate ? (
          <time className={styles.imageCardDate} dateTime={item.publishedAt}>
            {formatContentDate(item.publishedAt)}
          </time>
        ) : null}
      </span>
    </Link>
  );
}

export function FeaturedContentCard(props: ContentCardProps) {
  return <ImageContentCard className={styles.featuredCard} {...props} />;
}

export function MediumContentCard(props: ContentCardProps) {
  return <ImageContentCard className={styles.mediumCard} {...props} />;
}

export function CompactContentCard({
  item,
  showCategoryBadge = false,
  showDate = false,
}: ContentCardProps) {
  return (
    <Link className={styles.compactCard} href={item.href}>
      <span className={styles.compactMedia}>
        <ContentImage item={item} />
        {showCategoryBadge ? <CategoryBadge item={item} /> : null}
      </span>
      <span className={styles.compactBody}>
        <h3>{item.title}</h3>
        <span className={styles.compactDescription}>{item.topSummary}</span>
        {showDate ? (
          <time dateTime={item.publishedAt}>{formatContentDate(item.publishedAt)}</time>
        ) : null}
      </span>
    </Link>
  );
}

type PromptHubCardProps = ContentCardProps & {
  label: string;
};

export function PromptHubCard({ item, label }: PromptHubCardProps) {
  return (
    <Link className={styles.promptCard} href={item.href}>
      <span className={styles.promptMedia}>
        <ContentImage item={item} />
      </span>
      <span className={styles.promptBody}>
        <h3>{label}</h3>
        <span>{item.topSummary}</span>
      </span>
    </Link>
  );
}

export function ToolFeatureCard({ item }: ContentCardProps) {
  return (
    <Link className={styles.toolFeature} href={item.href}>
      <span className={styles.toolFeatureMedia}>
        <ContentImage item={item} />
      </span>
      <span className={styles.toolFeatureBody}>
        <h3>{item.title}</h3>
        <span className={styles.toolDescription}>{item.topSummary}</span>
        <span className={styles.toolCta}>ツールを使う <span aria-hidden="true">→</span></span>
      </span>
    </Link>
  );
}

export function ToolGuideCard({ item, showDate = false }: ContentCardProps) {
  return (
    <Link className={styles.toolGuide} href={item.href}>
      <span className={styles.toolGuideBody}>
        <h3>使い方ガイド</h3>
        <span className={styles.toolDescription}>{item.topSummary}</span>
        {showDate ? (
          <time dateTime={item.publishedAt}>{formatContentDate(item.publishedAt)}</time>
        ) : null}
        <span className={styles.toolTextLink}>使い方ガイドを読む <span aria-hidden="true">→</span></span>
      </span>
    </Link>
  );
}
