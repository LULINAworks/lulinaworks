"use client";

import { useMemo, useState } from "react";
import { SegmentedControl } from "./SegmentedControl";

export type CopyFormat = "plain" | "comma";

type DictionaryCardSample = {
  variant: string;
  label: string;
  image: string;
};

type DictionaryCardItem = {
  id: string;
  category: string;
  categoryLabel: string;
  nameJa: string;
  prompt: string;
  memo: string[];
  samples: DictionaryCardSample[];
};

type DictionaryCardProps = {
  item: DictionaryCardItem;
  copyFormat: CopyFormat;
};

function formatPrompt(prompt: string, copyFormat: CopyFormat) {
  return copyFormat === "comma" ? `${prompt},` : prompt;
}

export function DictionaryCard({ item, copyFormat }: DictionaryCardProps) {
  const [selectedVariant, setSelectedVariant] = useState<string>(item.samples[0]?.variant ?? "female");
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  const selectedSample = useMemo(() => {
    return item.samples.find((sample) => sample.variant === selectedVariant) ?? item.samples[0];
  }, [item.samples, selectedVariant]);

  const sampleOptions = useMemo(() => {
    return item.samples.map((sample) => ({ value: sample.variant, label: sample.label }));
  }, [item.samples]);

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
            options={sampleOptions}
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
