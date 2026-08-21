import type { MetadataRoute } from "next";
import { publishedContentsByDate } from "@/data/contents";

export const dynamic = "force-static";

const siteUrl = "https://lulinaworks.com";

const contentEntries = publishedContentsByDate.map(
  (content): MetadataRoute.Sitemap[number] => ({
    url: `${siteUrl}${content.href}`,
    lastModified: content.publishedAt,
    changeFrequency: "monthly",
    priority:
      content.contentType === "article"
        ? 0.9
        : content.contentType === "dictionary"
          ? 0.8
          : 0.7,
  }),
);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/contents`,
      lastModified: "2026-08-20",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/dictionary`,
      lastModified: "2026-08-21",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...contentEntries,
    {
      url: `${siteUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/contact`,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: "2026-06-26",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
