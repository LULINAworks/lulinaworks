import type { CardItem } from "./articles";

export const dictionaryItems: CardItem[] = [
  {
    title: "髪型プロンプト辞書",
    description:
      "short hair、long hair、ponytail など、AIイラストの髪型指定に使いやすいタグを画像サンプル付きでまとめています。",
    href: "/dictionary/hairstyle",
    thumbnail: "/assets/dictionary/hairstyle/female/hairstyle-long-hair.webp",
    tag: "Prompt Dictionary",
    status: "86項目",
    featured: true,
    published: true,
    date: "2026-05-20",
  },
  {
    title: "表情プロンプト辞書",
    description: "smile、angry、crying など、AIイラストの表情指定に使いやすいタグを画像サンプル付きでまとめています。",
    href: "/dictionary/expression",
    thumbnail: "/assets/dictionary/expression/female/expression-caret-o-caret.webp",
    tag: "Prompt Dictionary",
    status: "86項目",
    featured: true,
    published: true,
    date: "2026-05-28",
  },
  {
    title: "AIイラスト用プロンプト辞書一覧",
    description: "Stable DiffusionやNovelAIなどで使いやすいプロンプト辞書を、カテゴリ別にまとめています。",
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
