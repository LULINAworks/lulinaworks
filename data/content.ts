export const contentCategoryIds = ["ai-model-service", "prompt", "guide", "comfyui", "tools"] as const;

export type ContentCategory = (typeof contentCategoryIds)[number];

export const contentTypeIds = ["article", "dictionary", "tool"] as const;

export type ContentType = (typeof contentTypeIds)[number];

export type ContentDate = `${number}-${number}-${number}`;

export type ContentHref = `/${string}`;

export type ContentCardImage = {
  src: ContentHref;
  fit?: "cover" | "contain";
  position?: string;
};

export type ContentItem = {
  title: string;
  description: string;
  topSummary: string;
  href: ContentHref;
  cardImage: ContentCardImage;
  publishedAt: ContentDate;
  primaryCategory: ContentCategory;
  categories: readonly ContentCategory[];
  contentType: ContentType;
  sameDayPriority?: number;
};

export type ContentCategoryDefinition = {
  id: ContentCategory;
  label: string;
  href: `/contents?category=${ContentCategory}`;
  landingHref: ContentHref;
};

export const contentCategoryDefinitions = [
  {
    id: "ai-model-service",
    label: "AIモデル/サービス",
    href: "/contents?category=ai-model-service",
    landingHref: "/contents?category=ai-model-service",
  },
  {
    id: "prompt",
    label: "プロンプト",
    href: "/contents?category=prompt",
    landingHref: "/dictionary",
  },
  {
    id: "guide",
    label: "制作ガイド",
    href: "/contents?category=guide",
    landingHref: "/contents?category=guide",
  },
  {
    id: "comfyui",
    label: "ComfyUI",
    href: "/contents?category=comfyui",
    landingHref: "/contents?category=comfyui",
  },
  {
    id: "tools",
    label: "ツール",
    href: "/contents?category=tools",
    landingHref: "/contents?category=tools",
  },
] as const satisfies readonly ContentCategoryDefinition[];

export const contentCategoryLabels = {
  "ai-model-service": "AIモデル/サービス",
  prompt: "プロンプト",
  guide: "制作ガイド",
  comfyui: "ComfyUI",
  tools: "ツール",
} as const satisfies Record<ContentCategory, string>;

export const contentTypeLabels = {
  article: "記事",
  dictionary: "プロンプト一覧",
  tool: "ツール",
} as const satisfies Record<ContentType, string>;

export function isContentCategory(value: string | null): value is ContentCategory {
  return value !== null && (contentCategoryIds as readonly string[]).includes(value);
}

export function normalizeContentCategory(value: string | null): ContentCategory | null {
  if (value === "anima") {
    return "ai-model-service";
  }

  return isContentCategory(value) ? value : null;
}

export function formatContentDate(date: ContentDate) {
  const [year, month, day] = date.split("-");
  return `${year}年${Number(month)}月${Number(day)}日`;
}
