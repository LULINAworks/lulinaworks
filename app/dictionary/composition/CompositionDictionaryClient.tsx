"use client";

import { useMemo, useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { DictionaryCard, type CopyFormat } from "@/components/dictionary/DictionaryCard";
import { RelatedDictionaries } from "@/components/dictionary/RelatedDictionaries";
import { SegmentedControl } from "@/components/dictionary/SegmentedControl";
import { compositionCategories, compositionDictionaryItems } from "@/data/dictionaries/composition";

const copyFormatOptions = [
  { value: "plain", label: "カンマなし" },
  { value: "comma", label: "カンマあり" },
] satisfies { value: CopyFormat; label: string }[];

const imageBasePath = "/assets/dictionary/composition/female";

export function CompositionDictionaryClient() {
  const [copyFormat, setCopyFormat] = useState<CopyFormat>("plain");

  const itemsByCategory = useMemo(() => {
    return compositionCategories.map((category) => ({
      ...category,
      items: compositionDictionaryItems
        .filter((item) => item.categoryKey === category.id)
        .map((item) => ({
          id: item.id,
          category: item.categoryKey,
          categoryLabel: item.categoryLabel,
          nameJa: item.name,
          prompt: item.prompt,
          memo: [item.description, item.supplement].filter(Boolean),
          samples: [
            {
              variant: "female",
              label: "女性",
              image: `${imageBasePath}/${item.imageFilename}`,
            },
          ],
        })),
    }));
  }, []);

  return (
    <>
      <Header />
      <main className="subpage-main dictionary-page composition-dictionary-page" id="page-top">
        <section className="container dictionary-hero-panel" aria-labelledby="composition-page-title">
          <nav className="breadcrumb" aria-label="パンくず">
            <a href="/">TOP</a>
            <span aria-hidden="true">/</span>
            <a href="/dictionary">辞書一覧</a>
            <span aria-hidden="true">/</span>
            <span>構図・カメラプロンプト辞書</span>
          </nav>

          <div className="dictionary-eyecatch">
            <div className="dictionary-eyecatch-copy">
              <span className="page-kicker">Dictionary</span>
              <h1 id="composition-page-title">
                <span className="hero-title-line">構図・カメラ</span>
                <span className="hero-title-line">プロンプト辞書</span>
              </h1>
              <p className="dictionary-eyecatch-subcopy">AIイラスト向け構図・画角・目線タグ一覧</p>
              <p>
                構図やカメラ指定は、キャラクターをどの距離・角度・向きで見せるかを決めるためのプロンプトです。
                このページでは、AIイラストで使いやすい構図・画角・目線タグを、サンプル付きで一覧化しています。
              </p>
            </div>
          </div>

          <div className="dictionary-usage-note" aria-label="使い方メモ">
            <strong>使い方メモ</strong>
            <p>
              画像サンプルを見ながら、使いたい構図・カメラ・目線タグを探せます。コピー形式は「カンマなし / カンマあり」で切り替えできます。
            </p>
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

        <RelatedDictionaries currentHref="/dictionary/composition" />

        <div className="container dictionary-back-top">
          <a href="#page-top">ページ上部へ戻る</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
