import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArticleNavigation } from "@/components/ArticleNavigation";
import { ArticleBody } from "@/components/content/ArticleBody";
import { ContentHero } from "@/components/content/ContentHero";
import { ContentPageShell } from "@/components/content/ContentPageShell";
import { contentCategoryLabels } from "@/data/content";
import { allPublishedContents } from "@/data/contents";

const title = "Animaでも使えるプロンプトガイドジェネレーター βの使い方｜AI発注書と骨組みプロンプトの作り方";
const heroTitle = (
  <>
    <span style={{ whiteSpace: "nowrap" }}>Animaでも使える</span><span style={{ whiteSpace: "nowrap" }}>プロンプトガイド</span><span style={{ whiteSpace: "nowrap" }}>ジェネレーター β</span>の使い方｜<span style={{ whiteSpace: "nowrap" }}>AI発注書</span>と<span style={{ whiteSpace: "nowrap" }}>骨組みプロンプト</span>の<span style={{ whiteSpace: "nowrap" }}>作り方</span>
  </>
);
const description =
  "プロンプトの骨組みやAI発注書を作れる「プロンプトガイドジェネレーター β」の使い方を解説。タグのみ・タグ＋自然文の違い、ComfyUIでの使い方、ChatGPTなどの対話型AIへ渡す方法を紹介します。";
const canonicalUrl = "https://lulinaworks.com/articles/anima-prompt-template-guide";
const currentHref = "/articles/anima-prompt-template-guide";
const ogImage = "/assets/og/ogp-article-anima-prompt-template-guide.png";
const contentRecord = allPublishedContents.find((content) => content.href === currentHref);

if (!contentRecord) {
  throw new Error(`Published content is missing for ${currentHref}`);
}

const articleCategory = contentCategoryLabels[contentRecord.primaryCategory];
const backHref = `/contents?category=${contentRecord.primaryCategory}`;
const heroImageSrc = contentRecord.cardImage.src;
const publishedAt = contentRecord.publishedAt;

const toc = [
  "プロンプトガイドジェネレーター βでできること",
  "基本の操作手順",
  "骨組みプロンプトをComfyUIで使う例",
  "AI発注書をChatGPTなどに渡す例",
  "タグのみ / タグ＋自然文の違い",
  "プリセットの使い分け",
  "LULINAworksのプロンプト一覧と組み合わせる",
  "まとめ",
];

const headingIds = new Map<string, string>([
  ["はじめに", "intro"],
  ["このツールはβ版です", "beta"],
  ["この記事でわかること", "article-summary"],
  ...toc.map((item, index) => [item, `section-${index + 1}`] as const),
]);

const articleBody = String.raw`# Animaでも使えるプロンプトガイドジェネレーター βの使い方｜AI発注書と骨組みプロンプトの作り方

## はじめに

このページでは、LULINAworksの「Animaでも使えるプロンプトガイドジェネレーター β」の使い方を解説します。

このツールは、AIイラスト生成のプロンプトを「骨組み」の状態で組み立てるための補助ツールです。プロンプトの並べ方がわからない方、自然文の組み立てが苦手な方、英語タグに慣れていない方など、AI生成を始めたばかりの方でも使いやすいように作っています。

ツール本体は、以下のページから利用できます。

[CTA: プロンプトガイドジェネレーター βを開く -> /tools/anima-prompt-template]

このページでは、基本的な操作手順だけでなく、出力した骨組みプロンプトをComfyUIなどで使う方法や、AI発注書をChatGPTなどの対話型AIに渡す使い方も紹介します。

## このツールはβ版です

このツールはβ版です。

現時点では、完成済みの正解プロンプトを自動生成するものではありません。必要なカテゴリを選び、プロンプトの骨組みや、対話型AIに渡すためのAI発注書を作る補助ツールです。

出力された内容は、そのまま使うだけでなく、使用するモデルや生成サービスに合わせて調整してください。

現時点では、骨組みを自分で埋めるか、AI発注書としてChatGPTなどの対話型AIに渡して具体的なタグや自然文へ整えてもらう使い方を想定しています。

## この記事でわかること

このページでは、プロンプトガイドジェネレーター βの基本的な使い方を紹介します。骨組みプロンプトを自分で埋める方法と、AI発注書をChatGPTなどに渡す方法の両方を確認します。

## プロンプトガイドジェネレーター βでできること

プロンプトガイドジェネレーター βでは、必要な項目を選びながら、AIイラスト生成用プロンプトの土台を作れます。

主な使い方は、以下の2つです。

1. 骨組みプロンプトを作る
2. AI発注書を作る

骨組みプロンプトは、[髪型] や [服装] のような角括弧つきの項目を、自分で具体的なタグへ置き換えて使う形式です。

AI発注書は、選んだ項目やシーン描写をまとめて、ChatGPTなどの対話型AIに渡しやすい形にしたものです。英語タグや自然文プロンプトを自分で組み立てるのが難しい場合に使いやすい形式です。

## 基本の操作手順

ここからは、実際の画面に沿って操作手順を見ていきます。

### Step1：モードを選ぶ

最初に、プロンプトの形式を選びます。

- タグのみで組み立てる
- タグ＋自然文で組み立てる

タグのみは、タグを並べる形式です。NovelAIやStable Diffusion系のタグ入力に慣れている場合や、自分で細かくタグを調整したい場合に向いています。

タグ＋自然文は、キャラクターの見た目や服装などをタグ側に置き、背景・ポーズ・構図・雰囲気などを自然文側にまとめる形式です。Animaのように自然文も扱いやすいモデルで、シーン全体の説明を加えたい場合に使いやすい形式です。

### Step2：人数を選ぶ

次に、1人用か複数人用かを選びます。

1人用では、1キャラクター分の骨組みを作ります。

複数人用では、Character A、Character B のように、キャラクターごとに分けた骨組みを作れます。

複数人を選んだ場合は、Step2-2で人数を指定します。

### Step3：プリセットを選ぶ

プリセットでは、用途に合わせた初期状態を選べます。

- カスタム
- ポートレート
- シーン
- 版権キャラ用
- 標準

表示されるプリセットは、モードや人数によって変わります。

プリセットを選んだあとでも、カテゴリのON/OFFは自由に調整できます。

[画像: /assets/articles/anima-prompt-template-guide/tool-guide-01-settings-mode-preset.webp]
[キャプション: モード、人数、プリセットを選んで、プロンプトの基本形を決めます。]

## Step4：カテゴリを選ぶ

カテゴリ選択では、プロンプトに入れたい項目を選びます。

たとえば、1人用のポートレートでは、髪色、髪型、目の色、表情、服装など、人物の見た目に関係する項目が中心になります。

品質・絵柄・LoRAトリガーは、すべてのプリセットで初期OFFにしています。必要な場合だけ、自分でONにしてください。

[画像: /assets/articles/anima-prompt-template-guide/tool-guide-02-category-select.webp]
[キャプション: 必要なカテゴリだけを選びます。後からONにしても、骨組みでは基本の並び順に整理されます。]

このツールは、選んだ順番ではなく、カテゴリの基本順に沿って骨組みを並べます。

そのため、後から品質や絵柄をONにしても、プロンプトの末尾に追加されるのではなく、基本の並び順に合わせて整理されます。

### AI発注書を使う場合の注意点

AI発注書を使う場合は、品質・絵柄・LoRAトリガーなどの項目を必要な時だけONにするのがおすすめです。

これらの項目には、生成環境ごとの専用タグや、特定モデル・LoRAでだけ意味を持つトリガーワードが含まれることがあります。対話型AIがDanbooruタグや各モデル固有のトリガーを正確に把握しているとは限りません。

品質タグ、絵柄タグ、LoRAトリガーなどを使いたい場合は、カテゴリとしてAIに推測させるより、シーン描写欄に「このタグを入れてください」「このLoRAトリガーを入れてください」のように直接書く方が安定しやすいです。

## Step5：シーン描写を書く

シーン描写欄には、作りたいイラストの内容を日本語で書けます。

たとえば、以下のように書きます。

1人の女の子。茶色のショートヘアに茶色のタレ目で、白いブラウスを着ている。放課後の教室で窓際の席に座り、夕日を浴びながら外を見ている。上半身構図。落ち着いた雰囲気。

AI発注書を使う場合、この内容をもとに、対話型AIが具体的なタグや英語表現を補完します。

タグ＋自然文モードでは、キャラクター情報をタグ側に置き、背景・ポーズ・構図・雰囲気などをシーン描写側にまとめると扱いやすくなります。

[画像: /assets/articles/anima-prompt-template-guide/tool-guide-03-scene-description.webp]
[キャプション: シーン描写欄には、作りたい場面を日本語で書けます。]

空欄のままコピーして、あとから対話型AI側でシーン内容を書いても構いません。

ただし、AI発注書を使う場合は、ここにある程度の情報を書いておくと、対話型AIが具体的なプロンプトへ整えやすくなります。

## Step6：出力をコピーする

最後に、出力タイプを選びます。

- 骨組みプロンプト
- AI発注書

自分でプロンプトを埋めたい場合は、骨組みプロンプトを選びます。

ChatGPTなどの対話型AIに整えてもらいたい場合は、AI発注書を選びます。

[画像: /assets/articles/anima-prompt-template-guide/tool-guide-04-output-template.webp]
[キャプション: 骨組みプロンプトでは、タグ部分とシーン描写をまとめてコピーできます。]

タグ＋自然文モードの場合、骨組みプロンプトにはタグ部分と自然文部分が入ります。

そのため、ComfyUIなどに貼り付けたあと、タグ部分と自然文部分をそれぞれ調整できます。

## 骨組みプロンプトをComfyUIで使う例

骨組みプロンプトは、ComfyUIなどのプロンプト欄に貼り付けて使えます。

貼り付けた直後は、[髪型] や [服装] のような角括弧つきの項目が残っている場合があります。これらを、自分で具体的なタグへ置き換えていきます。

たとえば、以下のように置き換えます。

- [髪色] → brown hair
- [髪型] → short hair
- [目の色] → brown eyes
- [目の形] → tareme
- [表情] → calm expression
- [服装] → white blouse

[画像: /assets/articles/anima-prompt-template-guide/tool-guide-05-comfyui-fill.webp]
[キャプション: ComfyUIのプロンプト欄に貼り付け、角括弧の項目を具体的なタグへ置き換えます。]

自然文部分も、使うモデルに合わせて調整してください。

日本語のまま使うより、英語の自然文や短い英語表現へ整えた方が扱いやすい場合があります。

骨組みプロンプトは、最初から完成プロンプトを出すものではありません。

「どの要素を入れるか」を先に整理し、あとから自分で埋めていくための下書きとして使うと便利です。

## AI発注書をChatGPTなどに渡す例

英語タグや自然文を自分で組み立てるのが難しい場合は、AI発注書を使います。

AI発注書には、選択した骨組み、シーン描写、出力時のルールがまとめられています。

また、冒頭に「これは画像生成の依頼ではなく、プロンプトテキストの作成依頼です」という注意文が入っています。

[画像: /assets/articles/anima-prompt-template-guide/tool-guide-06-ai-order-preview.webp]
[キャプション: AI発注書では、対話型AIに渡すための依頼文をまとめて確認できます。]

AI発注書をコピーしたら、ChatGPTなどの対話型AIに貼り付けます。

[画像: /assets/articles/anima-prompt-template-guide/tool-guide-07-ai-order-paste.webp]
[キャプション: AI発注書をChatGPTなどの対話型AIに貼り付けます。]

対話型AIに渡すことで、角括弧の項目やシーン描写をもとに、具体的なタグや自然文プロンプトを作ってもらえます。

[画像: /assets/articles/anima-prompt-template-guide/tool-guide-08-ai-response.webp]
[キャプション: 対話型AIから、具体的なタグと自然文プロンプトが返ってきます。]

### AI発注書を使う時の注意点

AI発注書の出力結果は、貼り付け先の対話型AIの性能や知識に左右されます。

返ってきたプロンプトは完成形として固定せず、必要に応じて自分の生成環境に合わせて調整してください。

## タグのみ / タグ＋自然文の違い

このツールでは、タグのみとタグ＋自然文の2種類を選べます。

### タグのみ

タグのみは、タグを並べる形式です。

NovelAIやStable Diffusion系のように、タグ形式でプロンプトを書くことに慣れている場合に使いやすい形式です。

例：

1girl, solo, brown hair, short hair, brown eyes, tareme, white blouse, calm expression, upper body

タグを細かく調整したい場合や、自然文よりタグ形式の方が扱いやすい場合は、タグのみを選ぶと良いです。

### タグ＋自然文

タグ＋自然文は、タグ部分と自然文部分を分けて組み立てる形式です。

キャラクターの基本情報や見た目はタグ側に置き、背景・ポーズ・構図・雰囲気などは自然文側にまとめます。

例：

1girl, solo, brown hair, short hair, brown eyes, tareme, white blouse

A girl is sitting by the window in an after-school classroom, quietly looking outside in warm sunset light.

Animaのように自然文も扱いやすいモデルでは、シーン全体の説明を自然文で加えると意図を伝えやすくなる場合があります。

どちらが正解というものではありません。

使うモデルや、自分が書きやすい形式に合わせて選んでください。

## プリセットの使い分け

プリセットは、最初にどのカテゴリをONにするかを決めるためのものです。

あとから自由に変更できるため、迷った時の初期設定として使ってください。

### カスタム

すべてOFFの状態から、自分で必要な項目だけを選びます。

慣れている人や、最小限の骨組みだけを作りたい場合に向いています。

### ポートレート

キャラクターの見た目を中心に組み立てるプリセットです。

髪色、髪型、目の色、表情、服装など、人物描写を整えたい場合に使いやすいです。

### シーン

タグのみモードで、背景や構図などもタグ側に入れたい場合に使うプリセットです。

タグ＋自然文モードでは、シーン情報はシーン描写欄に書く前提のため、1人用のシーンプリセットは表示していません。

### 版権キャラ用

既存キャラクター名を使う場合のプリセットです。

髪色や服装などを細かく入れすぎると、キャラクター再現の邪魔になる場合があるため、必要最低限の項目に絞っています。

### 複数人

複数人用では、Character A、Character B のように分けて骨組みを作ります。

キャラクターごとの髪色、服装、表情などが混ざりにくくなるように整理しています。

## LULINAworksのプロンプト一覧と組み合わせる

骨組みプロンプトの角括弧を埋めるときは、LULINAworksのプロンプト一覧から必要なタグを探して組み合わせられます。

たとえば、以下のように探せます。

- [髪型] → 髪型のタグを探す
- [表情] → 表情のタグを探す
- [ポーズ] → ポーズのタグを探す
- [構図] → 構図のタグを探す

プロンプト一覧で候補を確認し、使いたいタグを骨組みプロンプトへ入れていく使い方ができます。

[プロンプト一覧カード]

## まとめ

プロンプトガイドジェネレーター βは、AIイラスト生成用のプロンプトを一から考えるのではなく、必要な項目を選んで骨組みを作るための補助ツールです。

自分で調整したい場合は、骨組みプロンプトをComfyUIなどに貼り付け、角括弧を具体的なタグへ置き換えて使えます。

英語タグや自然文の組み立てを対話型AIに任せたい場合は、AI発注書としてコピーし、ChatGPTなどに貼り付けて使えます。

まずは、1人用・ポートレート・タグ＋自然文のようなシンプルな構成から試してみてください。

[CTA: プロンプトガイドジェネレーター βを使ってみる -> /tools/anima-prompt-template]`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title,
    description,
    url: canonicalUrl,
    siteName: "LULINAworks",
    type: "article",
    locale: "ja_JP",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

function ArticleFigure({ src, caption }: { src: string; caption: string }) {
  return (
    <figure className="article-figure">
      <img src={src} alt={caption} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function ArticleCta({ label, href }: { label: string; href: string }) {
  return (
    <a className="article-tool-cta" href={href}>
      <span>Prompt Tool</span>
      <strong>{label}</strong>
    </a>
  );
}

function DictionaryLinkCard() {
  return (
    <a className="related-article-card" href="/dictionary">
      <span>プロンプト一覧</span>
      <strong>AIイラスト制作に使えるプロンプト一覧</strong>
      <p>AIイラスト制作で使いやすいプロンプトを、カテゴリごとにサンプル付きで整理しています。</p>
    </a>
  );
}

function TocBox() {
  return (
    <nav className="toc-box" aria-labelledby="toc-title">
      <h2 id="toc-title">目次</h2>
      <ol>
        {toc.map((item) => (
          <li key={item}>
            <a href={`#${headingIds.get(item)}`}>{item}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function isStepHeading(heading: string) {
  return /^Step[1-6]：/.test(heading);
}

function ParsedArticleBody() {
  const elements: ReactNode[] = [];
  const lines = articleBody.split(/\r?\n/);
  let index = 0;
  let insertedToc = false;

  const flushList = (items: string[], ordered: boolean) => {
    if (items.length === 0) {
      return;
    }
    const key = `list-${elements.length}`;
    elements.push(
      ordered ? (
        <ol key={key}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      ) : (
        <ul key={key}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    );
  };

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("# ")) {
      index += 1;
      continue;
    }

    const ctaMatch = trimmed.match(/^\[CTA: (.+) -> (.+)\]$/);
    if (ctaMatch) {
      elements.push(<ArticleCta key={`cta-${elements.length}`} label={ctaMatch[1]} href={ctaMatch[2]} />);
      index += 1;
      continue;
    }

    if (trimmed === "[プロンプト一覧カード]") {
      elements.push(<DictionaryLinkCard key={`dictionary-${elements.length}`} />);
      index += 1;
      continue;
    }

    const imageMatch = trimmed.match(/^\[画像: (.+)\]$/);
    if (imageMatch) {
      let caption = "";
      if (lines[index + 1]?.trim().startsWith("[キャプション: ")) {
        caption = lines[index + 1].trim().replace(/^\[キャプション: /, "").replace(/\]$/, "");
        index += 1;
      }
      elements.push(<ArticleFigure key={`figure-${elements.length}`} src={imageMatch[1]} caption={caption} />);
      index += 1;
      continue;
    }

    if (trimmed.startsWith("## ")) {
      const heading = trimmed.replace(/^## /, "");
      if (!insertedToc && heading === "プロンプトガイドジェネレーター βでできること") {
        elements.push(<TocBox key="toc" />);
        insertedToc = true;
      }
      if (isStepHeading(heading)) {
        elements.push(
          <h3 className="article-step-heading" id={headingIds.get(heading)} key={`h3-${elements.length}`}>
            {heading}
          </h3>
        );
        index += 1;
        continue;
      }
      elements.push(
        <h2 id={headingIds.get(heading)} key={`h2-${elements.length}`}>
          {heading}
        </h2>
      );
      index += 1;
      continue;
    }

    if (trimmed.startsWith("### ")) {
      const heading = trimmed.replace(/^### /, "");
      elements.push(
        isStepHeading(heading) ? (
          <h3 className="article-step-heading" key={`h3-${elements.length}`}>
            {heading}
          </h3>
        ) : (
          <h4 className="article-subheading" key={`h4-${elements.length}`}>
            {heading}
          </h4>
        )
      );
      index += 1;
      continue;
    }

    if (trimmed.startsWith("- ")) {
      const items: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(lines[index].trim().replace(/^- /, ""));
        index += 1;
      }
      flushList(items, false);
      continue;
    }

    if (/^\d+\. /.test(trimmed)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\. /.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^\d+\. /, ""));
        index += 1;
      }
      flushList(items, true);
      continue;
    }

    elements.push(<p key={`p-${elements.length}`}>{line}</p>);
    index += 1;
  }

  return <>{elements}</>;
}

export default function AnimaPromptTemplateGuidePage() {
  return (
    <>
      <ContentPageShell articleId="article-top">
        <ContentHero
          className="anima-prompt-template-guide-hero"
          backHref={backHref}
          backLabel="コンテンツ一覧へ"
          category={articleCategory}
          title={heroTitle}
          lead={description}
          publishedAt={publishedAt}
          eyecatchSrc={heroImageSrc}
          eyecatchAlt={title}
          imagePosition="center 52%"
          tone="dark"
        />

        <ArticleBody>
          <ParsedArticleBody />
        </ArticleBody>
        <ArticleNavigation currentHref={currentHref} series="anima" />
      </ContentPageShell>

      <style>{`
        .anima-prompt-template-guide-hero h1 {
          font-size: clamp(1.8rem, 3.8vw, 2.6rem);
          line-height: 1.32;
        }

        .article-step-heading {
          margin: 34px 0 16px;
          padding: 12px 16px 12px 18px;
          border: 1px solid #d8e5f7;
          border-left: 5px solid var(--content-blue, #1565ff);
          border-radius: 0 14px 14px 0;
          background: #f3f7ff;
          color: var(--content-text, #242a36);
          font-size: clamp(1.08rem, 1.8vw, 1.28rem);
          line-height: 1.5;
          font-weight: 800;
          letter-spacing: 0;
        }

        .article-subheading {
          margin: 30px 0 12px;
          color: #174784;
          font-size: 1.05rem;
          font-weight: 800;
          line-height: 1.6;
        }

        .article-tool-cta strong,
        .related-article-card strong {
          overflow-wrap: anywhere;
          word-break: normal;
        }

        .article-tool-cta {
          display: block;
          margin: 24px 0 30px;
          padding: 20px 22px;
          border: 1px solid #bfd5f5;
          border-radius: 16px;
          background: #f3f8ff;
          box-shadow: none;
          text-decoration: none !important;
          transition: border-color 180ms ease, background-color 180ms ease;
        }

        .article-tool-cta span {
          display: inline-flex;
          margin-bottom: 8px;
          padding: 5px 10px;
          border-radius: 999px;
          background: var(--content-blue, #1565ff);
          color: #fff;
          font-size: .82rem;
          font-weight: 800;
        }

        .article-tool-cta strong {
          display: block;
          color: var(--content-text, #242a36);
          font-size: 1.08rem;
          line-height: 1.6;
          font-weight: 800;
        }

        .article-tool-cta:hover {
          border-color: rgba(21, 101, 255, 0.42);
          background: #eaf3ff;
        }

        .related-article-card {
          display: block;
          margin: 24px 0 28px;
          padding: 18px 20px;
          border: 1px solid #cfe0f7;
          border-radius: 16px;
          background: #f7fbff;
          box-shadow: none;
          text-decoration: none !important;
          transition: border-color 180ms ease, background-color 180ms ease;
        }

        .related-article-card:hover {
          border-color: rgba(21, 101, 255, 0.36);
          background: #eef6ff;
        }

        .related-article-card span {
          display: inline-flex;
          margin-bottom: 8px;
          padding: 5px 10px;
          border-radius: 999px;
          background: var(--content-blue, #1565ff);
          color: #fff;
          font-size: .82rem;
          font-weight: 800;
        }

        .related-article-card strong {
          display: block;
          color: var(--content-text, #242a36);
          font-size: 1.04rem;
          line-height: 1.6;
        }

        .related-article-card p {
          margin: 6px 0 0;
          color: var(--content-muted, #5f697b);
          font-size: .94rem;
          line-height: 1.8;
        }

        @media (max-width: 700px) {
          .anima-prompt-template-guide-hero h1 {
            font-size: 1.6rem;
            line-height: 1.28;
          }

          .article-step-heading {
            margin-top: 30px;
            padding: 10px 13px;
            font-size: 1.04rem;
          }

          .article-subheading {
            font-size: 1rem;
          }

          .article-tool-cta,
          .related-article-card {
            padding: 17px 18px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .article-tool-cta,
          .related-article-card {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
