import Link from "next/link";
import type { ContentHref, ContentItem } from "@/data/content";
import {
  CompactContentCard,
  FeaturedContentCard,
  MediumContentCard,
  PromptHubCard,
  ToolFeatureCard,
  ToolGuideCard,
} from "./TopContentCard";
import styles from "./TopContent.module.css";

type SectionHeaderProps = {
  id: string;
  title: string;
  description: string;
  href: ContentHref;
};

function SectionHeader({ id, title, description, href }: SectionHeaderProps) {
  const descriptionId = `${id}-description`;

  return (
    <>
      <div className={`${styles.sectionHeader} ${styles.categorySectionHeader}`}>
        <h2 className={styles.sectionHeading} id={id}>
          {title}
        </h2>
        <Link className={`${styles.sectionLink} ${styles.desktopSectionLink}`} href={href}>
          もっと見る <span aria-hidden="true">→</span>
        </Link>
      </div>
      <p className={styles.categoryIntro} id={descriptionId}>
        {description}
      </p>
    </>
  );
}

function MobileMoreLink({ href }: { href: ContentHref }) {
  return (
    <Link className={`${styles.sectionLink} ${styles.mobileSectionLink}`} href={href}>
      もっと見る <span aria-hidden="true">→</span>
    </Link>
  );
}

type FeatureCompactSectionProps = {
  id: string;
  title: string;
  description: string;
  href: ContentHref;
  featured: ContentItem;
  compact: readonly ContentItem[];
};

export function FeatureCompactSection({
  id,
  title,
  description,
  href,
  featured,
  compact,
}: FeatureCompactSectionProps) {
  return (
    <section className={styles.section} aria-describedby={`${id}-description`} aria-labelledby={id}>
      <SectionHeader description={description} href={href} id={id} title={title} />
      <div className={styles.featureCompactGrid}>
        <FeaturedContentCard item={featured} />
        <div className={styles.compactStack}>
          {compact.map((item) => (
            <CompactContentCard item={item} key={item.href} />
          ))}
        </div>
      </div>
      <MobileMoreLink href={href} />
    </section>
  );
}

type ComfyUiSectionProps = {
  featured: ContentItem;
  medium: ContentItem;
};

export function ComfyUiSection({ featured, medium }: ComfyUiSectionProps) {
  const id = "top-category-comfyui";
  const href = "/contents?category=comfyui";

  return (
    <section className={styles.section} aria-describedby={`${id}-description`} aria-labelledby={id}>
      <SectionHeader
        description="ComfyUIの導入や基本操作、モデルなど、画像生成を始めるための情報を紹介します。"
        href={href}
        id={id}
        title="ComfyUI"
      />
      <div className={styles.comfyGrid}>
        <FeaturedContentCard item={featured} />
        <MediumContentCard item={medium} />
      </div>
      <MobileMoreLink href={href} />
    </section>
  );
}

type PromptSectionProps = {
  items: readonly {
    item: ContentItem;
    label: string;
  }[];
};

export function PromptSection({ items }: PromptSectionProps) {
  const id = "top-category-prompt";
  const href = "/dictionary";

  return (
    <section className={styles.section} aria-describedby={`${id}-description`} aria-labelledby={id}>
      <SectionHeader
        description="髪型・表情・ポーズ・構図など、AIイラストで使えるプロンプトをまとめています。"
        href={href}
        id={id}
        title="プロンプト"
      />
      <div className={styles.promptGrid}>
        {items.map(({ item, label }) => (
          <PromptHubCard
            item={item}
            key={item.href}
            label={label}
          />
        ))}
      </div>
      <MobileMoreLink href={href} />
    </section>
  );
}

type ToolSectionProps = {
  featured: ContentItem;
  guide: ContentItem;
};

export function ToolSection({ featured, guide }: ToolSectionProps) {
  const id = "top-category-tools";
  const href = "/contents?category=tools";

  return (
    <section className={styles.section} aria-describedby={`${id}-description`} aria-labelledby={id}>
      <SectionHeader
        description="AIイラスト制作やプロンプト作成をサポートするツールと、その使い方を紹介します。"
        href={href}
        id={id}
        title="ツール"
      />
      <div className={styles.toolGrid}>
        <ToolFeatureCard item={featured} />
        <ToolGuideCard item={guide} />
      </div>
      <MobileMoreLink href={href} />
    </section>
  );
}
