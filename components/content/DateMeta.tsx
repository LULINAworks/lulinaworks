import styles from "./ContentPage.module.css";

type DateMetaProps = {
  publishedAt: string;
  updatedAt?: string;
};

function formatDate(date: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);

  if (!match) {
    return date;
  }

  return `${match[1]}年${Number(match[2])}月${Number(match[3])}日`;
}

export function DateMeta({ publishedAt, updatedAt }: DateMetaProps) {
  return (
    <dl className={styles.dateMeta}>
      <div>
        <dt>公開日：</dt>
        <dd>
          <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
        </dd>
      </div>
      {updatedAt ? (
        <div>
          <dt>更新日：</dt>
          <dd>
            <time dateTime={updatedAt}>{formatDate(updatedAt)}</time>
          </dd>
        </div>
      ) : null}
    </dl>
  );
}
