import { articleAnimaOrderHrefs, articleGuideOrderHrefs, articles } from "@/data/articles";

type ArticleNavigationProps = {
  currentHref: string;
  series?: "guide" | "anima";
};

function findPublishedArticle(href: string | undefined) {
  if (!href) {
    return undefined;
  }

  return articles.find((item) => item.href === href && item.published);
}

export function ArticleNavigation({ currentHref, series = "guide" }: ArticleNavigationProps) {
  const orderHrefs = series === "anima" ? articleAnimaOrderHrefs : articleGuideOrderHrefs;
  const currentIndex = orderHrefs.indexOf(currentHref);

  if (currentIndex < 0) {
    return null;
  }

  const previousArticle = findPublishedArticle(orderHrefs[currentIndex - 1]);
  const nextArticle = findPublishedArticle(orderHrefs[currentIndex + 1]);

  if (!previousArticle && !nextArticle) {
    return null;
  }

  return (
    <nav className="article-navigation" aria-label="前後の記事">
      <div className="article-navigation-links">
        {previousArticle ? (
          <a className="article-navigation-card previous" href={previousArticle.href}>
            <span>前の記事へ</span>
            <strong>{previousArticle.title}</strong>
          </a>
        ) : (
          <span aria-hidden="true" />
        )}

        {nextArticle ? (
          <a className="article-navigation-card next" href={nextArticle.href}>
            <span>次の記事へ</span>
            <strong>{nextArticle.title}</strong>
          </a>
        ) : null}
      </div>

      <a className="article-navigation-top" href="#article-top">
        ↑ ページ上部へ戻る
      </a>

      <style>{`
        .article-navigation {
          width: min(880px, calc(100% - 40px));
          margin: 22px auto 0;
        }

        .article-navigation-links {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .article-navigation-card {
          display: block;
          min-width: 0;
          padding: 18px 20px;
          border: 1px solid rgba(236, 217, 199, 0.9);
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(255, 247, 238, 0.96));
          box-shadow: 0 10px 22px rgba(48, 39, 31, 0.05);
          text-decoration: none;
        }

        .article-navigation-card.next {
          text-align: right;
        }

        .article-navigation-card span {
          display: inline-flex;
          margin-bottom: 8px;
          padding: 5px 10px;
          border-radius: 999px;
          background: var(--blue);
          color: #fff;
          font-size: .82rem;
          font-weight: 900;
        }

        .article-navigation-card strong {
          display: block;
          color: var(--navy);
          font-size: 1.02rem;
          line-height: 1.65;
          font-weight: 900;
          overflow-wrap: anywhere;
          word-break: normal;
        }

        .article-navigation-card:hover {
          transform: translateY(-1px);
          box-shadow: 0 14px 26px rgba(48, 39, 31, 0.08);
        }

        .article-navigation-top {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin: 16px auto 0;
          padding: 9px 14px;
          border: 1px solid rgba(236, 217, 199, 0.9);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.82);
          color: var(--navy-2);
          font-size: .9rem;
          font-weight: 900;
          line-height: 1.4;
          text-decoration: none;
          box-shadow: 0 8px 18px rgba(48, 39, 31, 0.04);
        }

        .article-navigation-top:hover {
          background: #fff7ee;
        }

        @media (max-width: 760px) {
          .article-navigation {
            width: min(100% - 24px, 880px);
            margin-top: 18px;
          }

          .article-navigation-links {
            grid-template-columns: 1fr;
          }

          .article-navigation-links > span[aria-hidden="true"] {
            display: none;
          }

          .article-navigation-card.next {
            text-align: left;
          }
        }
      `}</style>
    </nav>
  );
}
