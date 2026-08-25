"use client";

import { useMemo, useState } from "react";
import { DictionaryCard, type CopyFormat } from "@/components/dictionary/DictionaryCard";
import { RelatedDictionaries } from "@/components/dictionary/RelatedDictionaries";
import { SegmentedControl } from "@/components/dictionary/SegmentedControl";
import {
  PromptListCardGrid,
  PromptListCategorySection,
  PromptListPageShell,
} from "@/components/prompt-list/PromptListPageShell";
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

  const renderCopyFormatControl = () => (
    <SegmentedControl label="コピー形式" options={copyFormatOptions} value={copyFormat} onChange={setCopyFormat} />
  );

  return (
    <PromptListPageShell
      title="表情プロンプト一覧"
      heroImage="/assets/eyecatch/eyecatch-dictionary-expression-bg-pc.webp"
      heroImagePosition="center"
      lead="Stable DiffusionやNovelAIなどの画像生成AIで使いやすい表情プロンプトを、笑顔・怒り・涙・照れ・記号表情などのカテゴリ別に整理しています。"
      usageItems={[
        "画像サンプルを見ながら、AIイラストに使いたい表情タグと英語プロンプトを確認できます。",
        "英語プロンプトは、各カードのコピーボタンからコピーできます。",
        "コピー形式は「カンマなし / カンマあり」で切り替えできます。現在は女性サンプルのみを掲載しています。",
      ]}
      categories={itemsByCategory.map((category) => ({
        id: category.id,
        label: category.label,
        count: category.items.length,
      }))}
      categoryControl={renderCopyFormatControl()}
      relatedContent={
        <RelatedDictionaries
          currentHref="/dictionary/expression"
          descriptionsByHref={relatedDictionaryDescriptions}
          showEyebrow={false}
        />
      }
    >
      {itemsByCategory.map((category) => (
        <PromptListCategorySection
          key={category.id}
          id={category.id}
          label={category.label}
          count={category.items.length}
          control={renderCopyFormatControl()}
        >
          <PromptListCardGrid>
            {category.items.map((item) => (
              <DictionaryCard key={item.id} item={item} copyFormat={copyFormat} />
            ))}
          </PromptListCardGrid>
        </PromptListCategorySection>
      ))}
    </PromptListPageShell>
  );
}
