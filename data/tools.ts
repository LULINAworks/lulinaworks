import type { ContentItem } from "./content";

export const tools = [
  {
    title: "Animaでも使える!! AI発注書付きプロンプトガイドジェネレーター β",
    description:
      "AnimaやNovelAI・SD系でも使えるAIイラスト生成プロンプトの骨組みを作る補助ツール。AI発注書機能を使って、対話型AIへ渡す指示も作成できます。",
    topSummary: "AIイラスト用プロンプトの骨組みを作れる制作補助ツールです。",
    href: "/tools/anima-prompt-template",
    cardImage: {
      src: "/assets/eyecatch/eyecatch-tool-anima-prompt-template.webp",
      fit: "cover",
      position: "center",
    },
    publishedAt: "2026-06-27",
    primaryCategory: "tools",
    categories: ["tools"],
    contentType: "tool",
    sameDayPriority: 100,
  },
] as const satisfies readonly ContentItem[];
