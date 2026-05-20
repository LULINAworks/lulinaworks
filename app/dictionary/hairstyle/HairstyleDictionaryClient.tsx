"use client";

import { useMemo, useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { DictionaryCard, type CopyFormat } from "@/components/dictionary/DictionaryCard";
import { SegmentedControl } from "@/components/dictionary/SegmentedControl";
import { hairstyleCategories, hairstyleDictionaryItems } from "@/data/dictionaries/hairstyle";

const copyFormatOptions = [
  { value: "plain", label: "カンマなし" },
  { value: "comma", label: "カンマあり" },
] satisfies { value: CopyFormat; label: string }[];

export function HairstyleDictionaryClient() {
  const [copyFormat, setCopyFormat] = useState<CopyFormat>("plain");

  const itemsByCategory = useMemo(() => {
    return hairstyleCategories.map((category) => ({
      ...category,
      items: hairstyleDictionaryItems.filter((item) => item.category === category.id),
    }));
  }, []);

  return (
    <>
      <Header />
      <main className="subpage-main dictionary-page" id="page-top">
        <section className="container dictionary-hero-panel" aria-labelledby="hairstyle-page-title">
          <nav className="breadcrumb" aria-label="パンくず">
            <a href="/">TOP</a>
            <span aria-hidden="true">/</span>
            <a href="/dictionary">辞書一覧</a>
            <span aria-hidden="true">/</span>
            <span>髪型辞書</span>
          </nav>

          <div className="dictionary-eyecatch">
            <div className="dictionary-eyecatch-copy">
              <span className="page-kicker">Dictionary</span>
              <h1 id="hairstyle-page-title">髪型辞書</h1>
              <p>
                AIイラスト制作で使いやすい髪型プロンプトを、長さ・シルエット・前髪・顔まわりなどのカテゴリ別に整理しています。
              </p>
            </div>

            <div className="dictionary-usage-note" aria-label="使い方メモ">
              <strong>使い方メモ</strong>
              <p>
                <span>画像サンプルを見ながら、使いたい髪型プロンプトを探せます。</span>
                <span>コピー形式は「カンマなし / カンマあり」で切り替えでき、全カードに連動します。</span>
                <span>女性・男性の切り替えがある項目は、同じpromptでサンプルの違いを確認できます。</span>
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

        <div className="container dictionary-back-top">
          <a href="#page-top">ページ上部へ戻る</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
