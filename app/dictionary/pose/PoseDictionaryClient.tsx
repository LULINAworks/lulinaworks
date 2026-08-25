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
import { poseCategories, poseDictionaryItems } from "@/data/dictionaries/pose";

const copyFormatOptions = [
  { value: "plain", label: "カンマなし" },
  { value: "comma", label: "カンマあり" },
] satisfies { value: CopyFormat; label: string }[];

export function PoseDictionaryClient() {
  const [copyFormat, setCopyFormat] = useState<CopyFormat>("plain");

  const itemsByCategory = useMemo(() => {
    return poseCategories.map((category) => ({
      ...category,
      items: poseDictionaryItems.filter((item) => item.category === category.id),
    }));
  }, []);

  const renderCopyFormatControl = () => (
    <SegmentedControl label="コピー形式" options={copyFormatOptions} value={copyFormat} onChange={setCopyFormat} />
  );

  return (
    <PromptListPageShell
      title="ポーズプロンプト一覧"
      heroImage="/assets/eyecatch/eyecatch-dictionary-pose-bg-pc.webp"
      heroImagePosition="center"
      lead="Stable DiffusionやNovelAIなどの画像生成AIで使いやすいポーズプロンプトを、立ちポーズ・座りポーズ・手や腕の動き・寝そべりなどのカテゴリ別に整理しています。現在は1人用サンプルのみを掲載しています。"
      usageItems={[
        "画像サンプルを見ながら、AIイラストに使いたいポーズタグと英語プロンプトを確認できます。",
        "英語プロンプトは、各カードのコピーボタンからコピーできます。",
        "コピー形式は「カンマなし / カンマあり」で切り替えできます。ポーズによっては構図やカメラ指定と組み合わせると安定しやすくなります。",
      ]}
      categories={itemsByCategory.map((category) => ({
        id: category.id,
        label: category.label,
        count: category.items.length,
      }))}
      categoryControl={renderCopyFormatControl()}
      relatedContent={<RelatedDictionaries currentHref="/dictionary/pose" showEyebrow={false} />}
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
