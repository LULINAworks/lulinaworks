import type { CardItem } from "./articles";

export const dictionaryItems: CardItem[] = [
  {
    title: "髪型",
    description: "長さ、前髪、分け目、髪質などの表現をカテゴリ別に掲載予定です。",
    href: "/dictionary/hair",
    thumbnail: "/assets/thumb-dict-hair.png",
    tag: "Hair",
    status: "準備中",
    featured: true,
    published: false,
  },
  {
    title: "表情",
    description: "笑顔、困り顔、驚きなど、表情の指定に使う表現を掲載予定です。",
    href: "/dictionary/expression",
    thumbnail: "/assets/thumb-dict-expression.png",
    tag: "Expression",
    status: "準備中",
    featured: true,
    published: false,
  },
  {
    title: "ポーズ",
    description: "立ち姿や手の動きなど、ポーズ指定に使う表現を掲載予定です。",
    href: "/dictionary/pose",
    thumbnail: "/assets/thumb-dict-pose.png",
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
