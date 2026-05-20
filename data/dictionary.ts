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
    title: "表情",
    description: "笑顔、困り顔、驚きなど、表情の指定に使う表現を掲載予定です。",
    href: "/dictionary",
    thumbnail: "/assets/thumbs/thumb-dictionary-grid.png",
    tag: "Expression",
    status: "準備中",
    featured: true,
    published: false,
  },
  {
    title: "ポーズ",
    description: "立ち姿や手の動きなど、ポーズ指定に使う表現を掲載予定です。",
    href: "/dictionary",
    thumbnail: "/assets/thumbs/thumb-dictionary-grid.png",
    tag: "Pose",
    status: "準備中",
    featured: true,
    published: false,
  },
];

export const featuredDictionaryItems = dictionaryItems.filter((item) => item.featured).slice(0, 3);
export const latestDictionaryItems = dictionaryItems
  .filter((item) => item.published)
  .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""))
  .slice(0, 1);
