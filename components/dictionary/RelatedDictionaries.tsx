"use client";

import type { CardItem } from "@/data/articles";
import { dictionaryItems } from "@/data/dictionary";
import { LinkCard } from "@/components/LinkCard";

type RelatedDictionariesProps = {
  currentHref: string;
  descriptionsByHref?: Record<string, string>;
};

export function RelatedDictionaries({ currentHref, descriptionsByHref = {} }: RelatedDictionariesProps) {
  const relatedItems = dictionaryItems
    .filter((item) => item.published && item.href !== currentHref)
    .map<CardItem>((item) => ({
      ...item,
      description: descriptionsByHref[item.href] ?? item.description,
    }));

  if (relatedItems.length === 0) {
    return null;
  }

  return (
    <section className="container related-dictionaries-section" aria-labelledby="related-dictionaries-title">
      <div className="dictionary-section-head">
        <div>
          <span className="page-kicker">Related</span>
          <h2 id="related-dictionaries-title">関連する辞書</h2>
        </div>
      </div>
      <div className="related-dictionaries-grid">
        {relatedItems.map((item) => (
          <LinkCard key={item.href} item={item} variant="dictionary" />
        ))}
      </div>
    </section>
  );
}
