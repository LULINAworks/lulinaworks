export type CardItem = {
  title: string;
  description: string;
  href: string;
  thumbnail?: string;
  tag: string;
  date?: string;
  readTime?: string;
  status?: string;
  featured: boolean;
  published: boolean;
};

export const articles: CardItem[] = [
  {
    title: "Animaの絵柄はどう変わる？スタイル系プロンプト10種類を作例で比較",
    description:
      "Animaにスタイル系プロンプトを追加したときの絵柄・塗り・雰囲気の違いを、1人イラストと複数人シーンの作例で比較します。",
    href: "/articles/anima-style-compare",
    thumbnail: "/assets/articles/anima-style-compare/anima-style-compare-thumb.png",
    tag: "Model",
    readTime: "約12分",
    status: "公開中",
    featured: true,
    published: true,
    date: "2026-05-23",
  },
  {
    title: "Animaとは？ComfyUIで試して感じた特徴と注意点",
    description: "AnimaをComfyUIで試し、タグ形式・自然文形式の違いや注意点を整理します。",
    href: "/articles/anima-basic",
    thumbnail: "/assets/articles/anima-basic/anima-basic-thumb.webp",
    tag: "Model",
    readTime: "約10分",
    status: "公開中",
    featured: true,
    published: true,
    date: "2026-05-18",
  },
  {
    title: "画像生成AIのモデルとは？SD1.5・SDXLの違いと選び方",
    description: "画像の雰囲気やプロンプトの効き方に関わる「モデル」の基本を整理します。",
    href: "/articles/model-basic",
    thumbnail: "/assets/articles/model-basic/model-basic-thumb.png",
    tag: "ComfyUI",
    readTime: "約8分",
    featured: true,
    published: true,
    date: "2026-05-12",
  },
  {
    title: "ComfyUIの始め方｜Portable版の導入から画像生成まで",
    description: "ComfyUI Portable版の導入から、公式Text to Image Workflowを使った画像生成までの流れをまとめました。",
    href: "/articles/comfyui-start-guide",
    thumbnail: "/assets/articles/comfyui-start-guide/comfyui-start-guide-08-workflow-loaded.png",
    tag: "ComfyUI",
    readTime: "約15分",
    featured: true,
    published: true,
    date: "2026-05-08",
  },
  {
    title: "AIイラストのプロンプトとは？基本の考え方と書き方を整理する",
    description: "AIイラストで使うプロンプトの基本と、要素ごとに分けて考える書き方を整理します。",
    href: "/articles/prompt-basic",
    thumbnail: "/assets/articles/prompt-basic/prompt-basic-thumb.png",
    tag: "Prompt",
    readTime: "約12分",
    status: "公開中",
    featured: true,
    published: true,
    date: "2026-05-14",
  },
  {
    title: "サンプラー・ステップ数・CFGの違い",
    description: "画像生成でよく出てくる設定項目を掲載予定です。",
    href: "/articles/basic-settings",
    thumbnail: "/assets/thumbs/thumb-article-note.png",
    tag: "Settings",
    status: "公開予定",
    featured: true,
    published: false,
  },
];

export const articleGuideOrderHrefs = [
  "/articles/comfyui-start-guide",
  "/articles/model-basic",
  "/articles/prompt-basic",
];

export const articleAnimaOrderHrefs = [
  "/articles/anima-basic",
  "/articles/anima-style-compare",
];

const featuredArticleHrefs = [
  "/articles/comfyui-start-guide",
  "/articles/prompt-basic",
  "/articles/anima-basic",
];

export const featuredArticles = featuredArticleHrefs
  .map((href) => articles.find((item) => item.href === href && item.featured))
  .filter((item): item is CardItem => Boolean(item));
export const publishedArticles = articles
  .filter((item) => item.published)
  .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
export const latestArticles = articles
  .filter((item) => item.published)
  .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""))
  .slice(0, 1);
