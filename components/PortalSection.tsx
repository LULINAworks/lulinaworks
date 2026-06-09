import { featuredArticles, latestArticles } from "@/data/articles";
import { featuredDictionaryItems, latestDictionaryItems } from "@/data/dictionary";
import { Icon } from "./Icons";
import { LatestCard, LinkCard } from "./LinkCard";

const articleDraftThumbnail = "/assets/thumbs/thumb-article-note.png";
const dictionaryDraftThumbnail = "/assets/thumbs/thumb-dictionary-grid.png";

function withTopArticleThumbnail(item: (typeof featuredArticles)[number]) {
  return {
    ...item,
    thumbnail: item.thumbnail ?? articleDraftThumbnail,
  };
}

function withTopDictionaryThumbnail(item: (typeof featuredDictionaryItems)[number]) {
  return {
    ...item,
    thumbnail: item.thumbnail ?? dictionaryDraftThumbnail,
  };
}

export function PortalSection() {
  const topFeaturedArticles = featuredArticles.map(withTopArticleThumbnail);
  const topLatestArticle = latestArticles[0] ? withTopArticleThumbnail(latestArticles[0]) : undefined;
  const topFeaturedDictionaryItems = featuredDictionaryItems.map(withTopDictionaryThumbnail);
  const topLatestDictionaryItem = latestDictionaryItems[0] ? withTopDictionaryThumbnail(latestDictionaryItems[0]) : undefined;

  return (
    <section className="section" id="portal">
      <div className="section-head">
        <div className="section-title-wrap">
          <span className="section-title-icon"><Icon name="i-star" /></span>
          <h2 className="section-title">記事と辞書</h2>
          <p className="section-desc">見たいものを選んで進めます。</p>
        </div>
      </div>

      <div className="portal-grid">
        <section className="portal-column articles" aria-labelledby="articles-title">
          <div className="column-head">
            <h3 className="column-title" id="articles-title">
              <span className="icon-wrap"><Icon name="i-pen" /></span>
              おすすめの記事
            </h3>
            <a className="section-link" href="/articles">記事一覧へ　→</a>
          </div>
          <p className="column-sub">ComfyUIの導入や基本、プロンプトの考え方などを掲載しています。</p>

          <div className="featured-list">
            {topFeaturedArticles.map((item) => <LinkCard key={item.href} item={item} />)}
          </div>

          <div className="latest-block">
            <h4 className="latest-title"><Icon name="i-clock" />最新記事はこちら</h4>
            <LatestCard
              item={topLatestArticle}
              fallbackTitle="記事は少しずつ追加予定です"
              fallbackDescription="新しく公開した記事をここに表示します。"
            />
          </div>
        </section>

        <section className="portal-column dictionary" aria-labelledby="dictionary-title">
          <div className="column-head">
            <h3 className="column-title" id="dictionary-title">
              <span className="icon-wrap"><Icon name="i-book" /></span>
              プロンプト辞書
            </h3>
            <a className="section-link" href="/dictionary">辞書ページへ　→</a>
          </div>
          <p className="column-sub">髪型・表情・ポーズなど、制作に使えるプロンプトをまとめています。</p>

          <div className="featured-list">
            {topFeaturedDictionaryItems.map((item) => (
              <LinkCard key={`${item.href}-${item.tag}`} item={item} variant="dictionary" />
            ))}
          </div>

          <div className="latest-block">
            <h4 className="latest-title"><Icon name="i-save" />最近追加した辞書</h4>
            <LatestCard
              item={topLatestDictionaryItem}
              fallbackTitle="辞書はこれから順次追加予定です"
              fallbackDescription="追加した項目をここに表示します。"
              variant="dictionary"
            />
          </div>
        </section>
      </div>
    </section>
  );
}
