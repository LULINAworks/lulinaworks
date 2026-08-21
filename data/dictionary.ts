import type { CardItem } from "./articles";

export const dictionaryItems: CardItem[] = [
  {
    title: "髪型プロンプト一覧",
    description:
      "short hair、long hair、ponytail など、AIイラストの髪型指定に使いやすいタグを画像サンプル付きでまとめています。",
    topSummary: "髪の長さ・前髪・結び方など、髪型指定に使えるプロンプトをまとめています。",
    href: "/dictionary/hairstyle",
    thumbnail: "/assets/dictionary/hairstyle/female/hairstyle-long-hair.webp",
    tag: "Prompt List",
    status: "86項目",
    featured: true,
    published: true,
    date: "2026-05-20",
  },
  {
    title: "表情プロンプト一覧",
    description: "smile、angry、crying など、AIイラストの表情指定に使いやすいタグを画像サンプル付きでまとめています。",
    topSummary: "笑顔・怒り・涙・照れなど、表情指定に使えるプロンプトをまとめています。",
    href: "/dictionary/expression",
    thumbnail: "/assets/dictionary/expression/female/expression-caret-o-caret.webp",
    tag: "Prompt List",
    status: "86項目",
    featured: true,
    published: true,
    date: "2026-05-28",
  },
  {
    title: "ポーズプロンプト一覧",
    description: "standing、sitting、hands on hips など、AIイラストのポーズ指定に使いやすいタグを画像サンプル付きでまとめています。",
    topSummary: "立ち・座り・手や腕の動きなど、ポーズ指定に使えるプロンプトをまとめています。",
    href: "/dictionary/pose",
    thumbnail: "/assets/dictionary/pose/female/pose-hands-on-own-cheeks.webp",
    tag: "Prompt List",
    status: "139項目",
    featured: true,
    published: true,
    date: "2026-06-09",
  },
  {
    title: "構図プロンプト一覧",
    description:
      "close-up shot、from above など、AIイラストの構図・画角・目線指定に使いやすいタグを画像サンプル付きでまとめています。",
    topSummary: "距離・角度・視線など、構図指定に使えるプロンプトをまとめています。",
    href: "/dictionary/composition",
    thumbnail: "/assets/dictionary/composition/female/composition-from-above.webp",
    tag: "Prompt List",
    status: "42項目",
    featured: false,
    published: true,
    date: "2026-06-19",
  },
  {
    title: "AIイラスト用プロンプト一覧",
    description: "Stable DiffusionやNovelAIなどで使いやすいプロンプトを、カテゴリ別にまとめています。",
    href: "/dictionary",
    thumbnail: "/assets/thumbs/thumb-dictionary-grid.png",
    tag: "Prompt Guide",
    status: "プロンプト一覧へ",
    featured: false,
    published: false,
  },
];

export const featuredDictionaryItems = dictionaryItems.filter((item) => item.featured).slice(0, 3);
export const latestDictionaryItems = dictionaryItems
  .filter((item) => item.published)
  .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""))
  .slice(0, 1);
