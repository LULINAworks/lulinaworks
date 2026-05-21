import type { CardItem } from "./articles";

export const dictionaryItems: CardItem[] = [
  {
    title: "髪型辞書",
    description: "AIイラスト制作で使いやすい髪型プロンプトを、長さ・シルエット・前髪・顔まわりなどのカテゴリ別に整理しています。",
    href: "/dictionary/hairstyle",
    thumbnail: "/assets/dictionary/hairstyle/female/hairstyle-long-hair.webp",
    tag: "Prompt Dictionary",
    status: "86項目",
    featured: true,
    published: true,
  },
  {
    title: "制作に使える指定を探す",
    description: "髪型や表情、ポーズなど、キャラクター作りに役立つ指定を少しずつまとめています。",
    href: "/dictionary",
    thumbnail: "/assets/thumbs/thumb-dictionary-grid.png",
    tag: "Prompt Guide",
    status: "辞書一覧へ",
    featured: true,
    published: false,
  },
  {
    title: "プロンプト辞書一覧",
    description: "AIイラスト制作で使いやすいプロンプトを、カテゴリごとにサンプル付きで整理しています。",
    href: "/dictionary",
    thumbnail: "/assets/thumbs/thumb-dictionary-grid.png",
    tag: "Prompt Dictionary",
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
