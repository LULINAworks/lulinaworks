"use client";

import { useMemo, useState } from "react";
import type { HairstyleDictionaryItem, DictionarySampleVariant } from "@/data/dictionaries/hairstyle";
import { SegmentedControl } from "./SegmentedControl";

export type CopyFormat = "plain" | "comma";

type DictionaryCardProps = {
  item: HairstyleDictionaryItem;
  copyFormat: CopyFormat;
};

const sampleOptions = [
  { value: "female", label: "女性" },
  { value: "male", label: "男性" },
] satisfies { value: DictionarySampleVariant; label: string }[];

function formatPrompt(prompt: string, copyFormat: CopyFormat) {
  return copyFormat === "comma" ? `${prompt},` : prompt;
}

export function DictionaryCard({ item, copyFormat }: DictionaryCardProps) {
  const [selectedVariant, setSelectedVariant] = useState<DictionarySampleVariant>(item.samples[0]?.variant ?? "female");
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  const selectedSample = useMemo(() => {
    return item.samples.find((sample) => sample.variant === selectedVariant) ?? item.samples[0];
  }, [item.samples, selectedVariant]);

  const promptText = formatPrompt(item.prompt, copyFormat);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }

    window.setTimeout(() => setCopyState("idle"), 1500);
  }

  return (
    <article className="dictionary-card">
      <div className="dictionary-card-head">
        <span className="dictionary-category-tag">{item.categoryLabel}</span>
        <h3>{item.nameJa}</h3>
      </div>

      <div className="dictionary-prompt-row">
        <code>{promptText}</code>
        <button type="button" className="dictionary-copy-button" onClick={handleCopy} aria-label={`${item.prompt}をコピー`}>
          {copyState === "copied" ? "済" : copyState === "failed" ? "失敗" : "コピー"}
        </button>
      </div>

      <div className="dictionary-sample-switch">
        {item.samples.length > 1 ? (
          <SegmentedControl
            label={`${item.nameJa}のサンプル`}
            options={sampleOptions.filter((option) => item.samples.some((sample) => sample.variant === option.value))}
            value={selectedSample.variant}
            onChange={setSelectedVariant}
            className="sample-segmented"
          />
        ) : (
          <span className="single-sample-label">サンプル：{selectedSample.label}</span>
        )}
      </div>

      <div className="dictionary-image-frame">
        <img src={selectedSample.image} alt={`${item.nameJa}の${selectedSample.label}サンプル`} loading="lazy" />
      </div>

      <ul className="dictionary-memo-list" aria-label={`${item.nameJa}の使い方メモ`}>
        {item.memo.map((memo) => (
          <li key={memo}>{memo}</li>
        ))}
      </ul>
    </article>
  );
}
