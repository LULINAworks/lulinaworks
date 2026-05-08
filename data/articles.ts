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
    title: "プロンプトの基本と考え方",
    description: "プロンプトの基本的な見方や考え方を掲載予定です。",
    href: "/articles/prompt-basic",
    thumbnail: "/assets/thumbs/thumb-article-note.png",
    tag: "Prompt",
    status: "公開予定",
    featured: true,
    published: false,
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

export const featuredArticles = articles.filter((item) => item.featured).slice(0, 3);
export const latestArticles = articles
  .filter((item) => item.published)
  .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""))
  .slice(0, 1);
