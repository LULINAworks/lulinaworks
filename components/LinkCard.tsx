import type { CardItem } from "@/data/articles";

export function LinkCard({ item, variant = "article" }: { item: CardItem; variant?: "article" | "dictionary" }) {
  const thumbClass = variant === "dictionary" ? "thumb dict-thumb" : "thumb";

  return (
    <a className="link-card" href={item.href}>
      <div className={thumbClass} aria-hidden="true">
        {item.thumbnail ? <img src={item.thumbnail} alt="" /> : null}
      </div>
      <div className="card-body">
        <span className={`tag ${variant === "dictionary" ? "orange" : ""}`}>{item.tag}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="meta">
          <span>{item.readTime ?? item.status ?? "固定表示"}</span>
          <span>{item.status ?? "固定表示"}</span>
        </div>
      </div>
    </a>
  );
}

export function LatestCard({
  item,
  fallbackTitle,
  fallbackDescription,
  variant = "article",
}: {
  item?: CardItem;
  fallbackTitle: string;
  fallbackDescription: string;
  variant?: "article" | "dictionary";
}) {
  const thumbClass = variant === "dictionary" ? "thumb dict-thumb" : "thumb";

  return (
    <a className="latest-card" href={item?.href ?? "#"}>
      <div className={thumbClass} aria-hidden="true">
        {item?.thumbnail ? <img src={item.thumbnail} alt="" /> : null}
      </div>
      <div>
        <h4>{item?.title ?? fallbackTitle}</h4>
        <p>{item?.description ?? fallbackDescription}</p>
      </div>
    </a>
  );
}
