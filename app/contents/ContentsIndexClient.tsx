"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ContentsCard } from "@/components/content/ContentsCard";
import {
  contentCategoryDefinitions,
  normalizeContentCategory,
  type ContentItem,
} from "@/data/content";
import styles from "./contents.module.css";

type ContentsIndexClientProps = {
  contents: readonly ContentItem[];
};

export function ContentsIndexClient({ contents }: ContentsIndexClientProps) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const selectedCategory = normalizeContentCategory(categoryParam);
  const visibleContents = selectedCategory
    ? contents.filter((item) => item.categories.includes(selectedCategory))
    : contents;

  return (
    <>
      <nav className={styles.filters} aria-label="コンテンツカテゴリ">
        <Link className={!selectedCategory ? styles.activeFilter : undefined} href="/contents" aria-current={!selectedCategory ? "page" : undefined} scroll={false}>
          すべて
        </Link>
        {contentCategoryDefinitions.map((category) => {
          const isActive = selectedCategory === category.id;
          return (
            <Link
              className={isActive ? styles.activeFilter : undefined}
              href={category.href}
              aria-current={isActive ? "page" : undefined}
              key={category.id}
              scroll={false}
            >
              {category.label}
            </Link>
          );
        })}
      </nav>

      <p className={styles.resultCount} aria-live="polite">
        {visibleContents.length}件のコンテンツ
      </p>

      <div className={styles.grid}>
        {visibleContents.map((item) => (
          <ContentsCard item={item} key={item.href} showContentType={false} />
        ))}
      </div>
    </>
  );
}
