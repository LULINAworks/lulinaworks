import Link from "next/link";
import {
  contentCategoryLabels,
  contentTypeLabels,
  formatContentDate,
  type ContentItem,
} from "@/data/content";
import styles from "./ContentsCard.module.css";

type ContentsCardProps = {
  item: ContentItem;
  showContentType?: boolean;
};

export function ContentsCard({ item, showContentType = true }: ContentsCardProps) {
  return (
    <Link className={styles.card} href={item.href}>
      <div className={styles.imageFrame}>
        <img
          src={item.cardImage.src}
          alt=""
          width="1600"
          height="900"
          loading="lazy"
          decoding="async"
          style={{
            objectFit: item.cardImage.fit ?? "cover",
            objectPosition: item.cardImage.position ?? "center",
          }}
        />
      </div>

      <div className={styles.body}>
        <div className={styles.labels}>
          <span className={styles.category}>{contentCategoryLabels[item.primaryCategory]}</span>
          {showContentType ? (
            <span className={styles.type}>{contentTypeLabels[item.contentType]}</span>
          ) : null}
        </div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <time dateTime={item.publishedAt}>公開日：{formatContentDate(item.publishedAt)}</time>
      </div>
    </Link>
  );
}
