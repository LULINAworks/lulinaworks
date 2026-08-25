"use client";

import type { CSSProperties, ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import styles from "./PromptListPageShell.module.css";

type PromptListCategory = {
  id: string;
  label: string;
  count: number;
};

type PromptListPageShellProps = {
  title: string;
  heroImage: string;
  heroImagePosition?: CSSProperties["objectPosition"];
  lead: string;
  usageItems: readonly string[];
  categories: readonly PromptListCategory[];
  categoryControl: ReactNode;
  relatedContent: ReactNode;
  children: ReactNode;
};

type PromptListCategorySectionProps = {
  id: string;
  label: string;
  count: number;
  control: ReactNode;
  children: ReactNode;
};

export function PromptListPageShell({
  title,
  heroImage,
  heroImagePosition = "center",
  lead,
  usageItems,
  categories,
  categoryControl,
  relatedContent,
  children,
}: PromptListPageShellProps) {
  return (
    <>
      <Header />
      <main className={styles.page} id="page-top">
        <div className={styles.shell}>
          <nav className={styles.breadcrumb} aria-label="パンくず">
            <a href="/">TOP</a>
            <span aria-hidden="true">/</span>
            <a href="/dictionary">プロンプト一覧</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{title}</span>
          </nav>

          <section className={styles.hero} aria-labelledby="prompt-list-page-title">
            <img
              src={heroImage}
              alt=""
              width="1600"
              height="900"
              decoding="async"
              fetchPriority="high"
              style={{ objectPosition: heroImagePosition }}
            />
            <div className={styles.heroBand}>
              <h1 id="prompt-list-page-title">{title}</h1>
            </div>
          </section>

          <section className={styles.lead} aria-label={`${title}の説明`}>
            <p>{lead}</p>
          </section>

          <section className={styles.usage} aria-labelledby="prompt-list-usage-title">
            <h2 id="prompt-list-usage-title">使い方</h2>
            <ul>
              {usageItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className={styles.wideContent}>
          <section className={styles.categoryNavSection} id="category-toc" aria-labelledby="category-toc-title">
            <div className={styles.sectionHeader}>
              <div>
                <h2 id="category-toc-title">カテゴリ目次</h2>
              </div>
              {categoryControl}
            </div>

            <nav className={styles.categoryNav} aria-label={`${title}のカテゴリ`}>
              {categories.map((category) => (
                <a key={category.id} href={`#category-${category.id}`}>
                  <span>{category.label}</span>
                  <small>{category.count}件</small>
                </a>
              ))}
            </nav>
          </section>

          {children}
        </div>

        <div className={styles.shell}>
          {relatedContent}

          <div className={styles.backToTop}>
            <a href="#page-top">↑ ページ上部へ戻る</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export function PromptListCategorySection({
  id,
  label,
  count,
  control,
  children,
}: PromptListCategorySectionProps) {
  return (
    <section className={styles.categorySection} id={`category-${id}`}>
      <div className={styles.sectionHeader}>
        <div>
          <span className={styles.count}>{count}件</span>
          <h2>{label}</h2>
        </div>
        {control}
      </div>

      {children}

      <div className={styles.backToCategories}>
        <a href="#category-toc">↑ カテゴリ目次へ戻る</a>
      </div>
    </section>
  );
}

export function PromptListCardGrid({ children }: { children: ReactNode }) {
  return <div className={styles.cardGrid}>{children}</div>;
}
