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

  const renderCopyFormatControl = () => (
    <SegmentedControl label="コピー形式" options={copyFormatOptions} value={copyFormat} onChange={setCopyFormat} />
  );

  return (
    <PromptListPageShell
      title="構図プロンプト一覧"
      heroImage="/assets/eyecatch/eyecatch-dictionary-composition-bg-pc.webp"
      heroImagePosition="center"
      lead="構図やカメラ指定は、キャラクターをどの距離・角度・向きで見せるかを決めるためのプロンプトです。 このページでは、AIイラストで使いやすい構図・画角・目線タグを、サンプル付きで一覧化しています。"
      usageItems={[
        "画像サンプルを見ながら、使いたい構図・カメラ・目線タグと英語プロンプトを確認できます。",
        "英語プロンプトは、各カードのコピーボタンからコピーできます。",
        "コピー形式は「カンマなし / カンマあり」で切り替えできます。",
      ]}
      categories={itemsByCategory.map((category) => ({
        id: category.id,
        label: category.label,
        count: category.items.length,
      }))}
      categoryControl={renderCopyFormatControl()}
      relatedContent={<RelatedDictionaries currentHref="/dictionary/composition" showEyebrow={false} />}
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
