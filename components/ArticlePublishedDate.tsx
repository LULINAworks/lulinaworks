import { articles } from "@/data/articles";

function formatPublishedDate(date: string) {
  const [year, month, day] = date.split("-");

  return `${year}年${Number(month)}月${Number(day)}日`;
}

export function ArticlePublishedDate({ href }: { href: string }) {
  const article = articles.find((item) => item.href === href && item.published);

  if (!article?.date) {
    return null;
  }

  return <p className="published-date">公開日：{formatPublishedDate(article.date)}</p>;
}
