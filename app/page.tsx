import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  ComfyUiSection,
  FeatureCompactSection,
  PromptSection,
  ToolSection,
} from "@/components/top/CategorySection";
import { LatestContent } from "@/components/top/LatestContent";
import { TopHero } from "@/components/top/TopHero";
import { latestTopContents, topContentConfig } from "@/data/topContent";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main} id="top">
        <TopHero />

        <section className={styles.introduction} aria-label="LULINAworksの紹介">
          <p>
            LULINAworksでは、AIイラスト制作に役立つモデルやプロンプト、制作方法などの情報をわかりやすく紹介しています。
          </p>
        </section>

        <div className={styles.contentSections}>
          <div className={`${styles.sectionBand} ${styles.latestBand}`}>
            <div className={styles.sectionInner}>
              <LatestContent items={latestTopContents} />
            </div>
          </div>

          <div className={styles.sectionBand}>
            <div className={styles.sectionInner}>
              <FeatureCompactSection
                compact={topContentConfig["ai-model-service"].compact}
                description="Animaを中心に、AIイラスト生成に使うモデルやサービスの特徴、使い方、アップデート、比較などを紹介します。"
                featured={topContentConfig["ai-model-service"].featured}
                href="/contents?category=ai-model-service"
                id="top-category-ai-model-service"
                title="AIモデル/サービス"
              />
            </div>
          </div>

          <div className={styles.sectionBand}>
            <div className={styles.sectionInner}>
              <PromptSection items={topContentConfig.prompt} />
            </div>
          </div>

          <div className={styles.sectionBand}>
            <div className={styles.sectionInner}>
              <FeatureCompactSection
                compact={topContentConfig.guide.compact}
                description="AIイラスト制作の基礎やプロンプトの考え方、比較・検証など、制作に役立つ情報を紹介します。"
                featured={topContentConfig.guide.featured}
                href="/contents?category=guide"
                id="top-category-guide"
                title="制作ガイド"
              />
            </div>
          </div>

          <div className={styles.sectionBand}>
            <div className={styles.sectionInner}>
              <ComfyUiSection
                featured={topContentConfig.comfyui.featured}
                medium={topContentConfig.comfyui.medium}
              />
            </div>
          </div>

          <div className={styles.sectionBand}>
            <div className={styles.sectionInner}>
              <ToolSection
                featured={topContentConfig.tools.featured}
                guide={topContentConfig.tools.guide}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
