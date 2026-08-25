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

  const renderCopyFormatControl = () => (
    <SegmentedControl label="コピー形式" options={copyFormatOptions} value={copyFormat} onChange={setCopyFormat} />
  );

  return (
    <PromptListPageShell
      title="髪型プロンプト一覧"
      heroImage="/assets/eyecatch/eyecatch-dictionary-hairstyle-bg-pc.webp"
      heroImagePosition="center"
      lead="Stable DiffusionやNovelAIなどの画像生成AIで使いやすい髪型プロンプトを、長さ・シルエット・前髪・顔まわりなどのカテゴリ別に整理しています。"
      usageItems={[
        "画像サンプルを見ながら、AIイラストに使いたい髪型タグと英語プロンプトを確認できます。",
        "英語プロンプトは、各カードのコピーボタンからコピーできます。",
        "コピー形式は「カンマなし / カンマあり」で切り替えできます。対応する髪型では女性・男性サンプルを切り替えて確認できます。",
      ]}
      categories={itemsByCategory.map((category) => ({
        id: category.id,
        label: category.label,
        count: category.items.length,
      }))}
      categoryControl={renderCopyFormatControl()}
      relatedContent={<RelatedDictionaries currentHref="/dictionary/hairstyle" showEyebrow={false} />}
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
