import { publishedArticles, type CardItem } from "./articles";
import {
  contentCategoryIds,
  contentTypeIds,
  type ContentCardImage,
  type ContentCategory,
  type ContentDate,
  type ContentHref,
  type ContentItem,
  type ContentType,
} from "./content";
import { dictionaryItems } from "./dictionary";
import { tools } from "./tools";

type ContentTaxonomy = {
  primaryCategory: ContentCategory;
  categories: readonly ContentCategory[];
  contentType: ContentType;
  cardImageSrc?: ContentHref;
  imageFit?: ContentCardImage["fit"];
  imagePosition?: string;
  sameDayPriority?: number;
};

const articleTaxonomyByHref = {
  "/articles/chatgpt-images-2-5": {
    primaryCategory: "ai-model-service",
    categories: ["ai-model-service", "guide"],
    contentType: "article",
    cardImageSrc: "/assets/articles/chatgpt-images-2-5/hero.webp",
    imageFit: "cover",
    imagePosition: "center",
  },
  "/articles/comfyui-start-guide": {
    primaryCategory: "comfyui",
    categories: ["comfyui"],
    contentType: "article",
    imageFit: "cover",
    imagePosition: "center",
  },
  "/articles/model-basic": {
    primaryCategory: "comfyui",
    categories: ["comfyui"],
    contentType: "article",
    imageFit: "cover",
    imagePosition: "center",
  },
  "/articles/prompt-basic": {
    primaryCategory: "guide",
    categories: ["guide"],
    contentType: "article",
    imageFit: "cover",
    imagePosition: "center",
  },
  "/articles/anima-basic": {
    primaryCategory: "ai-model-service",
    categories: ["ai-model-service"],
    contentType: "article",
    cardImageSrc: "/assets/articles/anima-basic/anima-basic-02-two-girls.webp",
    imageFit: "cover",
    imagePosition: "62% 34%",
  },
  "/articles/anima-style-compare": {
    primaryCategory: "ai-model-service",
    categories: ["ai-model-service", "guide"],
    contentType: "article",
    cardImageSrc: "/assets/articles/anima-style-compare/anima-style-scene-anime-screenshot.webp",
    imageFit: "cover",
    imagePosition: "58% 42%",
  },
  "/articles/anima-prompt-writing": {
    primaryCategory: "ai-model-service",
    categories: ["ai-model-service", "guide"],
    contentType: "article",
    cardImageSrc: "/assets/articles/anima-prompt-writing/anima-prompt-single.webp",
    imageFit: "cover",
    imagePosition: "center",
  },
  "/articles/anima-prompt-template-guide": {
    primaryCategory: "tools",
    categories: ["tools", "guide"],
    contentType: "article",
    imageFit: "cover",
    imagePosition: "center",
    sameDayPriority: 90,
  },
} as const satisfies Record<string, ContentTaxonomy>;

const dictionaryTaxonomy = {
  primaryCategory: "prompt",
  categories: ["prompt"],
  contentType: "dictionary",
  imageFit: "cover",
  imagePosition: "center",
} as const satisfies ContentTaxonomy;

const dictionaryCardImageByHref = {
  "/dictionary/hairstyle": "/assets/eyecatch/eyecatch-dictionary-hairstyle-bg-pc.webp",
  "/dictionary/expression": "/assets/eyecatch/eyecatch-dictionary-expression-bg-pc.webp",
  "/dictionary/pose": "/assets/eyecatch/eyecatch-dictionary-pose-bg-pc.webp",
  "/dictionary/composition": "/assets/eyecatch/eyecatch-dictionary-composition-bg-pc.webp",
} as const satisfies Record<string, ContentHref>;

function requireHref(value: string): ContentHref {
  if (!value.startsWith("/")) {
    throw new Error(`Content href must start with /: ${value}`);
  }
  return value as ContentHref;
}

function requireDate(item: CardItem): ContentDate {
  if (!item.date || !/^\d{4}-\d{2}-\d{2}$/.test(item.date)) {
    throw new Error(`Published content is missing a valid date: ${item.href}`);
  }
  return item.date as ContentDate;
}

function requireImage(item: CardItem, preferredSource?: ContentHref): ContentHref {
  const imageSource = preferredSource ?? item.thumbnail;
  if (!imageSource) {
    throw new Error(`Published content is missing a card image: ${item.href}`);
  }
  return requireHref(imageSource);
}

function requireTopSummary(item: CardItem): string {
  if (!item.topSummary?.trim()) {
    throw new Error(`Published content is missing a TOP summary: ${item.href}`);
  }
  return item.topSummary;
}

function adaptCardItem(item: CardItem, taxonomy: ContentTaxonomy): ContentItem {
  return {
    title: item.title,
    description: item.description,
    topSummary: requireTopSummary(item),
    href: requireHref(item.href),
    cardImage: {
      src: requireImage(item, taxonomy.cardImageSrc),
      fit: taxonomy.imageFit,
      position: taxonomy.imagePosition,
    },
    publishedAt: requireDate(item),
    primaryCategory: taxonomy.primaryCategory,
    categories: taxonomy.categories,
    contentType: taxonomy.contentType,
    sameDayPriority: taxonomy.sameDayPriority,
  };
}

const articleContents = publishedArticles.map((article) => {
  const taxonomy = articleTaxonomyByHref[article.href as keyof typeof articleTaxonomyByHref];
  if (!taxonomy) {
    throw new Error(`Published article is missing content taxonomy: ${article.href}`);
  }
  return adaptCardItem(article, taxonomy);
});

const dictionaryContents = dictionaryItems
  .filter((item) => item.published && item.href !== "/dictionary")
  .map((item) => {
    const cardImageSrc =
      dictionaryCardImageByHref[item.href as keyof typeof dictionaryCardImageByHref];
    if (!cardImageSrc) {
      throw new Error(`Published dictionary is missing a card image: ${item.href}`);
    }
    return adaptCardItem(item, { ...dictionaryTaxonomy, cardImageSrc });
  });

export const allPublishedContents: readonly ContentItem[] = [
  ...articleContents,
  ...dictionaryContents,
  ...tools,
];

export function sortContentsByPublishedAt(contents: readonly ContentItem[]) {
  return [...contents].sort((a, b) => {
    const dateComparison = b.publishedAt.localeCompare(a.publishedAt);
    if (dateComparison !== 0) {
      return dateComparison;
    }

    const priorityComparison = (b.sameDayPriority ?? 0) - (a.sameDayPriority ?? 0);
    if (priorityComparison !== 0) {
      return priorityComparison;
    }

    return a.href.localeCompare(b.href);
  });
}

export const publishedContentsByDate = sortContentsByPublishedAt(allPublishedContents);

export function getContentsByPrimaryCategory(category: ContentCategory) {
  return publishedContentsByDate.filter((item) => item.primaryCategory === category);
}

export function getContentsByCategory(category: ContentCategory) {
  return publishedContentsByDate.filter((item) => item.categories.includes(category));
}

function validatePublishedContents(contents: readonly ContentItem[]) {
  const errors: string[] = [];
  const hrefs = new Set<string>();
  const typeCounts: Record<ContentType, number> = { article: 0, dictionary: 0, tool: 0 };
  const primaryCategoryCounts = Object.fromEntries(
    contentCategoryIds.map((category) => [category, 0]),
  ) as Record<ContentCategory, number>;

  for (const item of contents) {
    if (hrefs.has(item.href)) {
      errors.push(`Duplicate href: ${item.href}`);
    }
    hrefs.add(item.href);

    if (!/^\d{4}-\d{2}-\d{2}$/.test(item.publishedAt)) {
      errors.push(`Missing or invalid publishedAt: ${item.href}`);
    }
    if (!contentCategoryIds.includes(item.primaryCategory)) {
      errors.push(`Invalid primaryCategory: ${item.href}`);
    } else {
      primaryCategoryCounts[item.primaryCategory] += 1;
    }
    if (item.categories.length === 0 || item.categories.some((category) => !contentCategoryIds.includes(category))) {
      errors.push(`Missing or invalid categories: ${item.href}`);
    }
    if (!item.categories.includes(item.primaryCategory)) {
      errors.push(`primaryCategory is not included in categories: ${item.href}`);
    }
    if (!item.cardImage.src) {
      errors.push(`Missing cardImage: ${item.href}`);
    }
    if (!item.topSummary.trim()) {
      errors.push(`Missing or empty topSummary: ${item.href}`);
    }

    if (!contentTypeIds.includes(item.contentType)) {
      errors.push(`Missing or invalid contentType: ${item.href}`);
    } else {
      typeCounts[item.contentType] += 1;
    }
  }

  if (contents.length !== 13) {
    errors.push(`Expected 13 published contents, received ${contents.length}`);
  }
  if (typeCounts.article !== 8 || typeCounts.dictionary !== 4 || typeCounts.tool !== 1) {
    errors.push(
      `Unexpected content type counts: article=${typeCounts.article}, dictionary=${typeCounts.dictionary}, tool=${typeCounts.tool}`
    );
  }

  const expectedPrimaryCategoryCounts: Record<ContentCategory, number> = {
    "ai-model-service": 4,
    comfyui: 2,
    guide: 1,
    prompt: 4,
    tools: 2,
  };
  for (const category of contentCategoryIds) {
    if (primaryCategoryCounts[category] !== expectedPrimaryCategoryCounts[category]) {
      errors.push(
        `Unexpected primary category count: ${category}=${primaryCategoryCounts[category]}`,
      );
    }
  }

  const expectedCategoryHrefs = {
    guide: [
      "/articles/chatgpt-images-2-5",
      "/articles/anima-prompt-template-guide",
      "/articles/anima-prompt-writing",
      "/articles/anima-style-compare",
      "/articles/prompt-basic",
    ],
    prompt: [
      "/dictionary/composition",
      "/dictionary/expression",
      "/dictionary/hairstyle",
      "/dictionary/pose",
    ],
  } as const;
  for (const category of ["guide", "prompt"] as const) {
    const actualHrefs = contents
      .filter((item) => item.categories.includes(category))
      .map((item) => item.href)
      .sort();
    const expectedHrefs = [...expectedCategoryHrefs[category]].sort();
    if (actualHrefs.join("\n") !== expectedHrefs.join("\n")) {
      errors.push(`Unexpected ${category} category contents: ${actualHrefs.join(", ")}`);
    }
  }
  if (hrefs.has("/articles/basic-settings")) {
    errors.push("Unpublished basic-settings must not be included");
  }

  if (errors.length > 0) {
    throw new Error(`Content validation failed:\n${errors.join("\n")}`);
  }

  return {
    total: contents.length,
    typeCounts,
    primaryCategoryCounts,
    duplicateHrefCount: contents.length - hrefs.size,
  } as const;
}

export const contentValidationSummary = validatePublishedContents(allPublishedContents);
