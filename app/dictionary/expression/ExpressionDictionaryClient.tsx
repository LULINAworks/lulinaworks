"use client";

import { useMemo, useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { DictionaryCard, type CopyFormat } from "@/components/dictionary/DictionaryCard";
import { RelatedDictionaries } from "@/components/dictionary/RelatedDictionaries";
import { SegmentedControl } from "@/components/dictionary/SegmentedControl";
import { expressionCategories, expressionDictionaryItems } from "@/data/dictionaries/expression";

const copyFormatOptions = [
  { value: "plain", label: "カンマなし" },
  { value: "comma", label: "カンマあり" },
] satisfies { value: CopyFormat; label: string }[];

const relatedDictionaryDescriptions = {
  "/dictionary/hairstyle": "髪の長さ・前髪・ポニーテール・三つ編みなど、髪型指定に使いやすいプロンプトをまとめています。",
};

export function ExpressionDictionaryClient() {
  const [copyFormat, setCopyFormat] = useState<CopyFormat>("plain");

  const itemsByCategory = useMemo(() => {
    return expressionCategories.map((category) => ({
      ...category,
      items: expressionDictionaryItems.filter((item) => item.category === category.id),
    }));
  }, []);

  return (
    <>
      <Header />
      <main className="subpage-main dictionary-page expression-dictionary-page" id="page-top">
        <section className="container dictionary-hero-panel" aria-labelledby="expression-page-title">
          <nav className="breadcrumb" aria-label="パンくず">
            <a href="/">TOP</a>
            <span aria-hidden="true">/</span>
            <a href="/dictionary">辞書一覧</a>
            <span aria-hidden="true">/</span>
            <span>表情辞書</span>
          </nav>

          <div className="dictionary-eyecatch">
            <div className="dictionary-eyecatch-copy">
              <span className="page-kicker">Dictionary</span>
              <h1 id="expression-page-title">表情辞書</h1>
              <p>
                AIイラスト制作で使いやすい表情プロンプトを、笑顔・怒り・涙・記号顔などのカテゴリ別に整理しています。
              </p>
            </div>

            <div className="dictionary-usage-note" aria-label="使い方メモ">
              <strong>使い方メモ</strong>
              <p>
                <span>画像サンプルを見ながら、使いたい表情のpromptを探せます。</span>
                <span>コピー形式は「カンマなし / カンマあり」で切り替えできます。</span>
                <span>女性サンプルのみを掲載しています。</span>
              </p>
            </div>
          </div>
        </section>

        <section className="container dictionary-toc-section" id="category-toc" aria-labelledby="category-toc-title">
          <div className="dictionary-section-head">
            <div>
              <span className="page-kicker">Category</span>
              <h2 id="category-toc-title">カテゴリ目次</h2>
            </div>
            <SegmentedControl label="コピー形式" options={copyFormatOptions} value={copyFormat} onChange={setCopyFormat} />
          </div>
          <div className="dictionary-toc">
            {itemsByCategory.map((category) => (
              <a key={category.id} href={`#category-${category.id}`}>
                <span>{category.label}</span>
                <small>{category.items.length}件</small>
              </a>
            ))}
          </div>
        </section>

        {itemsByCategory.map((category) => (
          <section key={category.id} className="container dictionary-category-section" id={`category-${category.id}`}>
            <div className="dictionary-section-head">
              <div>
                <span className="dictionary-count">{category.items.length}件</span>
                <h2>{category.label}</h2>
              </div>
              <SegmentedControl label="コピー形式" options={copyFormatOptions} value={copyFormat} onChange={setCopyFormat} />
            </div>

            <div className="dictionary-card-grid">
              {category.items.map((item) => (
                <DictionaryCard key={item.id} item={item} copyFormat={copyFormat} />
              ))}
            </div>

            <div className="dictionary-category-back">
              <a href="#category-toc">↑ カテゴリ目次へ戻る</a>
            </div>
          </section>
        ))}

        <RelatedDictionaries currentHref="/dictionary/expression" descriptionsByHref={relatedDictionaryDescriptions} />

        <div className="container dictionary-back-top">
          <a href="#page-top">ページ上部へ戻る</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
