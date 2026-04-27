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
    title: "ComfyUI導入ガイド",
    description: "ComfyUIの導入から、最初の1枚を生成するところまでを紹介します。",
    href: "/articles/comfyui-setup",
    thumbnail: "/assets/thumb-article-comfyui.png",
    tag: "ComfyUI",
    readTime: "約15分",
    status: "固定表示",
    featured: true,
    published: true,
    date: "2026-05-01",
  },
  {
    title: "プロンプトの基本と考え方",
    description: "プロンプトの基本的な見方や考え方を掲載予定です。",
    href: "/articles/prompt-basic",
    thumbnail: "/assets/thumb-article-prompt.png",
    tag: "Prompt",
    status: "公開予定",
    featured: true,
    published: false,
  },
  {
    title: "サンプラー・ステップ数・CFGの違い",
    description: "画像生成でよく出てくる設定項目を掲載予定です。",
    href: "/articles/basic-settings",
    thumbnail: "/assets/thumb-article-settings.png",
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
