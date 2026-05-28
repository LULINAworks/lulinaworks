import type { CardItem } from "./articles";

export const dictionaryItems: CardItem[] = [
  {
    title: "髪型辞書",
    description:
      "髪の長さ・前髪・ポニーテール・三つ編みなど、髪型指定に使いやすいプロンプトをまとめています。",
    href: "/dictionary/hairstyle",
    thumbnail: "/assets/dictionary/hairstyle/female/hairstyle-long-hair.webp",
    tag: "Prompt Dictionary",
    status: "86項目",
    featured: true,
    published: true,
    date: "2026-05-20",
  },
  {
    title: "表情辞書",
    description: "笑顔・怒り・涙・記号表情など、表情づくりに使いやすいプロンプトをまとめています。",
    href: "/dictionary/expression",
    thumbnail: "/assets/dictionary/expression/female/expression-caret-o-caret.webp",
    tag: "Prompt Dictionary",
    status: "86項目",
    featured: true,
    published: true,
    date: "2026-05-28",
  },
  {
    title: "辞書一覧",
    description: "公開中のプロンプト辞書をまとめて確認できます。髪型や表情など、制作に使いやすい項目を探せます。",
    href: "/dictionary",
    thumbnail: "/assets/thumbs/thumb-dictionary-grid.png",
    tag: "Prompt Guide",
    status: "辞書一覧へ",
    featured: true,
    published: false,
  },
];

export const featuredDictionaryItems = dictionaryItems.filter((item) => item.featured).slice(0, 3);
export const latestDictionaryItems = dictionaryItems
  .filter((item) => item.published)
  .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""))
  .slice(0, 1);
