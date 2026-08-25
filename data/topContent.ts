import type { ContentHref, ContentItem } from "./content";
import { allPublishedContents, publishedContentsByDate } from "./contents";

export const topContentHrefConfig = {
  "ai-model-service": {
    featured: "/articles/anima-basic",
    compact: [
      "/articles/anima-prompt-writing",
      "/articles/anima-style-compare",
    ],
  },
  comfyui: {
    featured: "/articles/comfyui-start-guide",
    medium: "/articles/model-basic",
  },
  guide: {
    featured: "/articles/prompt-basic",
    compact: [
      "/articles/anima-prompt-writing",
      "/articles/anima-style-compare",
    ],
  },
  prompt: [
    {
      href: "/dictionary/hairstyle",
      label: "髪型プロンプト",
    },
    {
      href: "/dictionary/expression",
      label: "表情プロンプト",
    },
    {
      href: "/dictionary/pose",
      label: "ポーズプロンプト",
    },
    {
      href: "/dictionary/composition",
      label: "構図プロンプト",
    },
  ],
  tools: {
    featured: "/tools/anima-prompt-template",
    guide: "/articles/anima-prompt-template-guide",
  },
} as const satisfies {
  "ai-model-service": { featured: ContentHref; compact: readonly ContentHref[] };
  comfyui: { featured: ContentHref; medium: ContentHref };
  guide: { featured: ContentHref; compact: readonly ContentHref[] };
  prompt: readonly {
    href: ContentHref;
    label: string;
  }[];
  tools: { featured: ContentHref; guide: ContentHref };
};

const contentsByHref = new Map<ContentHref, ContentItem>(
  allPublishedContents.map((item) => [item.href, item]),
);

function getRequiredContent(href: ContentHref) {
  const content = contentsByHref.get(href);
  if (!content) {
    throw new Error(`TOP content configuration references an unknown href: ${href}`);
  }
  return content;
}

export const latestTopContents = publishedContentsByDate.slice(0, 4);

if (latestTopContents.length !== 4) {
  throw new Error(`TOP latest section requires 4 contents, received ${latestTopContents.length}`);
}

export const topContentConfig = {
  "ai-model-service": {
    featured: getRequiredContent(topContentHrefConfig["ai-model-service"].featured),
    compact: topContentHrefConfig["ai-model-service"].compact.map(getRequiredContent),
  },
  comfyui: {
    featured: getRequiredContent(topContentHrefConfig.comfyui.featured),
    medium: getRequiredContent(topContentHrefConfig.comfyui.medium),
  },
  guide: {
    featured: getRequiredContent(topContentHrefConfig.guide.featured),
    compact: topContentHrefConfig.guide.compact.map(getRequiredContent),
  },
  prompt: topContentHrefConfig.prompt.map((slot) => ({
    ...slot,
    item: getRequiredContent(slot.href),
  })),
  tools: {
    featured: getRequiredContent(topContentHrefConfig.tools.featured),
    guide: getRequiredContent(topContentHrefConfig.tools.guide),
  },
} as const;
