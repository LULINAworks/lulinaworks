import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
import { ArticleNavigation } from "@/components/ArticleNavigation";
import { ArticlePublishedDate } from "@/components/ArticlePublishedDate";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const title = "Animaでも使えるプロンプトガイドジェネレーター βの使い方｜AI発注書と骨組みプロンプトの作り方";
const description =
  "プロンプトの骨組みやAI発注書を作れる「プロンプトガイドジェネレーター β」の使い方を解説。タグのみ・タグ＋自然文の違い、ComfyUIでの使い方、ChatGPTなどの対話型AIへ渡す方法を紹介します。";
const canonicalUrl = "https://lulinaworks.com/articles/anima-prompt-template-guide";
const imageBase = "/assets/articles/anima-prompt-template-guide/";
const eyecatchPc = "/assets/eyecatch/eyecatch-tool-anima-prompt-template-pc.webp";
const eyecatchMobile = "/assets/eyecatch/eyecatch-tool-anima-prompt-template-mobile.webp";
const ogImage = "/assets/og/ogp-article-anima-prompt-template-guide.png";

const toc = [
  "プロンプトガイドジェネレーター βでできること",
  "基本の操作手順",
  "骨組みプロンプトをComfyUIで使う例",
  "AI発注書をChatGPTなどに渡す例",
  "タグのみ / タグ＋自然文の違い",
  "プリセットの使い分け",
  "LULINAworksの辞書ページと組み合わせる",
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

今後、LULINAworks内のプロンプトタグ辞書の対応カテゴリや項目がさらに揃った段階で、辞書内のタグを参照しながらプロンプトを組み立てられる形へ拡張する予定です。

現時点では、骨組みを自分で埋めるか、AI発注書としてChatGPTなどの対話型AIに渡して具体的なタグや自然文へ整えてもらう使い方を想定しています。

## この記事でわかること

[ルリナ吹き出し]
このページでは、プロンプトガイドジェネレーター βの基本的な使い方を紹介するよ。
骨組みプロンプトを自分で埋める方法と、AI発注書をChatGPTなどに渡す方法の両方を見ていこう。
[/ルリナ吹き出し]

この記事では、以下の内容を解説します。

- プロンプトガイドジェネレーター βでできること
- タグのみ / タグ＋自然文の違い
- 1人用・複数人用・版権キャラ用プリセットの考え方
- 骨組みプロンプトをComfyUIなどで使う方法
- AI発注書をChatGPTなどの対話型AIに渡す方法
- LULINAworksの辞書ページと組み合わせる使い方

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

なお、現在のβ版では角括弧の項目を手動で埋める形ですが、今後はLULINAworks内のプロンプトタグ辞書と連携し、辞書内のタグを参照しながらプロンプトを組み立てられる形へ拡張する予定です。

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

## LULINAworksの辞書ページと組み合わせる

骨組みプロンプトの角括弧を埋める時は、LULINAworksのプロンプト辞書もあわせて使えます。

たとえば、以下のように組み合わせられます。

- [髪型] → 髪型辞書
- [表情] → 表情辞書
- [ポーズ] → ポーズ辞書
- [構図] → 構図・カメラ辞書

辞書一覧：/dictionary

髪型辞書：/dictionary/hairstyle

表情辞書：/dictionary/expression

ポーズ辞書：/dictionary/pose

構図・カメラ辞書：/dictionary/composition

今後は、辞書内のタグをツール側から直接参照し、選んだ項目をそのまま生成プロンプトへ組み込める形へ拡張する予定です。

現時点では、辞書ページでタグ候補を探し、ツールで作った骨組みに手動で入れていく使い方がおすすめです。

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

function LulinaSpeech({ children, label = "ルリナ" }: { children: ReactNode; label?: string }) {
  return (
    <aside className="lulina-speech" aria-label="ルリナのメモ">
      <img src="/assets/character/lulina-speech-recommend.png" alt="おすすめを話すルリナ" />
      <div className="lulina-bubble">
        <span>{label}</span>
        <p>{children}</p>
      </div>
    </aside>
  );
}

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

function renderTextWithBreaks(lines: string[], keyPrefix: string) {
  return lines.map((line, index) => (
    <Fragment key={`${keyPrefix}-${index}`}>
      {line}
      {index < lines.length - 1 ? <br /> : null}
    </Fragment>
  ));
}

function isStepHeading(heading: string) {
  return /^Step[1-6]：/.test(heading);
}

function ArticleBody() {
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

    if (trimmed === "[ルリナ吹き出し]") {
      const speechLines: string[] = [];
      index += 1;
      while (index < lines.length && lines[index].trim() !== "[/ルリナ吹き出し]") {
        if (lines[index].trim()) {
          speechLines.push(lines[index]);
        }
        index += 1;
      }
      elements.push(
        <LulinaSpeech key={`speech-${elements.length}`}>{renderTextWithBreaks(speechLines, "speech-line")}</LulinaSpeech>
      );
      index += 1;
      continue;
    }

    const ctaMatch = trimmed.match(/^\[CTA: (.+) -> (.+)\]$/);
    if (ctaMatch) {
      elements.push(<ArticleCta key={`cta-${elements.length}`} label={ctaMatch[1]} href={ctaMatch[2]} />);
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
      <Header />
      <main className="article-main anima-prompt-template-guide-page">
        <article className="article-shell" id="article-top">
          <header className="article-header">
            <picture className="article-eyecatch-picture" aria-hidden="true">
              <source media="(max-width: 760px)" srcSet={eyecatchMobile} />
              <img src={eyecatchPc} alt="" />
            </picture>
            <div className="article-header-copy">
              <a className="back-link" href="/articles">記事一覧へ戻る</a>
              <span className="page-kicker">Prompt Tool</span>
              <h1>
                <span className="article-title-part">Animaでも使える</span>
                <span className="article-title-part">プロンプトガイド</span>
                <span className="article-title-part">ジェネレーター βの使い方</span>
                <span className="article-title-separator">｜</span>
                <span className="article-title-part">AI発注書と</span>
                <span className="article-title-part">骨組みプロンプトの作り方</span>
              </h1>
              <p>{description}</p>
            </div>
          </header>

          <section className="article-content">
            <ArticlePublishedDate href="/articles/anima-prompt-template-guide" />
            <ArticleBody />
          </section>
          <ArticleNavigation currentHref="/articles/anima-prompt-template-guide" series="anima" />
        </article>
      </main>
      <Footer />

      <style>{`
        .anima-prompt-template-guide-page {
          overflow-x: clip;
        }

        .anima-prompt-template-guide-page .article-header {
          isolation: isolate;
          min-height: 360px;
          padding: clamp(30px, 5vw, 58px);
          background: #fff7ee;
        }

        .anima-prompt-template-guide-page .article-header::after {
          z-index: 1;
          background:
            linear-gradient(90deg, rgba(255, 253, 249, 0.96) 0%, rgba(255, 247, 238, 0.86) 46%, rgba(255, 247, 238, 0.18) 78%),
            radial-gradient(circle at 54% 46%, rgba(255, 255, 255, 0.7), transparent 36%);
        }

        .anima-prompt-template-guide-page .article-eyecatch-picture,
        .anima-prompt-template-guide-page .article-eyecatch-picture img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .anima-prompt-template-guide-page .article-eyecatch-picture img {
          object-fit: cover;
          object-position: center center;
        }

        .anima-prompt-template-guide-page .article-header-copy {
          z-index: 3;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 12px;
          width: min(58%, 560px);
          min-width: 0;
        }

        .anima-prompt-template-guide-page .article-header-copy > * {
          min-width: 0;
        }

        .anima-prompt-template-guide-page .article-header h1 {
          flex-basis: 100%;
          margin-top: 8px;
          font-size: clamp(1.34rem, 2.2vw, 1.82rem);
          line-height: 1.48;
          overflow-wrap: break-word;
          word-break: normal;
          line-break: strict;
        }

        .anima-prompt-template-guide-page .article-title-part,
        .anima-prompt-template-guide-page .article-title-separator {
          display: inline;
        }

        .anima-prompt-template-guide-page .article-header p {
          flex-basis: 100%;
          max-width: 34em;
        }

        .anima-prompt-template-guide-page .article-content .article-step-heading {
          margin: 34px 0 16px;
          padding: 12px 16px 12px 18px;
          border-left: 5px solid #f2a46f;
          border-radius: 0 14px 14px 0;
          background: rgba(255, 247, 238, 0.78);
          font-family: var(--font-heading), var(--font-body), sans-serif;
          color: var(--navy);
          font-size: clamp(1.08rem, 1.8vw, 1.28rem);
          line-height: 1.5;
          font-weight: 900;
          letter-spacing: 0;
        }

        .anima-prompt-template-guide-page .article-content .article-subheading,
        .anima-prompt-template-guide-page .article-content h4 {
          margin: 28px 0 12px;
          color: #24406d;
          font-size: 1.05rem;
          font-weight: 900;
          line-height: 1.6;
        }

        .anima-prompt-template-guide-page .article-content p,
        .anima-prompt-template-guide-page .article-content li,
        .anima-prompt-template-guide-page .article-content a,
        .anima-prompt-template-guide-page .lulina-bubble p {
          overflow-wrap: break-word;
          word-break: normal;
          line-break: strict;
        }

        .article-tool-cta {
          display: block;
          margin: 24px 0 30px;
          padding: 20px 22px;
          border: 1px solid rgba(94, 134, 200, 0.24);
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(238, 245, 255, 0.96), rgba(255, 247, 238, 0.96));
          box-shadow: 0 10px 22px rgba(48, 39, 31, 0.05);
          text-decoration: none !important;
        }

        .article-tool-cta span {
          display: inline-flex;
          margin-bottom: 8px;
          padding: 5px 10px;
          border-radius: 999px;
          background: var(--blue);
          color: #fff;
          font-size: .82rem;
          font-weight: 900;
        }

        .article-tool-cta strong {
          display: block;
          color: var(--navy);
          font-size: 1.08rem;
          line-height: 1.6;
          font-weight: 900;
        }

        .article-tool-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 14px 26px rgba(48, 39, 31, 0.08);
        }

        @media (max-width: 760px) {
          .anima-prompt-template-guide-page .article-header {
            min-height: 0;
            align-items: flex-start;
            padding: 210px 20px 24px;
          }

          .anima-prompt-template-guide-page .article-header::after {
            background:
              linear-gradient(180deg, rgba(255, 253, 249, 0.18) 0%, rgba(255, 247, 238, 0.7) 42%, rgba(255, 253, 249, 0.98) 72%),
              radial-gradient(circle at 50% 32%, rgba(255, 255, 255, 0.72), transparent 40%);
          }

          .anima-prompt-template-guide-page .article-header-copy {
            width: 100%;
            gap: 8px 10px;
          }

          .anima-prompt-template-guide-page .article-header h1 {
            margin-top: 10px;
            font-size: clamp(1.08rem, 4.8vw, 1.28rem);
            line-height: 1.55;
          }

          .anima-prompt-template-guide-page .article-title-part {
            display: block;
          }

          .anima-prompt-template-guide-page .article-title-separator {
            display: none;
          }

          .anima-prompt-template-guide-page .article-header p {
            font-size: .9rem;
            line-height: 1.85;
            overflow-wrap: anywhere;
          }

          .anima-prompt-template-guide-page .article-content .article-step-heading {
            margin-top: 30px;
            padding: 10px 13px;
            font-size: 1.04rem;
          }

          .anima-prompt-template-guide-page .article-header,
          .anima-prompt-template-guide-page .article-content,
          .anima-prompt-template-guide-page .toc-box,
          .anima-prompt-template-guide-page .lulina-bubble {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
}
