import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArticleNavigation } from "@/components/ArticleNavigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const title = "Animaで使える？プロンプトをタグと自然文で書く方法";
const description =
  "Animaでタグ指定と自然文を組み合わせ、キャラの特徴や複数人シーンを整理して書く方法を紹介します。";
const canonicalUrl = "https://lulinaworks.com/articles/anima-prompt-writing";
const imageBase = "/assets/articles/anima-prompt-writing/";
const heroImage = `${imageBase}anima-prompt-writing-eyecatch.png`;
const ogImage = "/assets/og/ogp-anima-prompt-writing.png";
const publishedLabel = "2026年6月2日";

const toc = [
  "Animaは自然文だけでも使える",
  "既存キャラとオリジナルキャラでは指定の考え方が変わる",
  "自然文だけだと面倒になりやすい場面",
  "タグ＋自然文で分けると管理しやすい",
  "1人キャラの特徴はタグで整理する",
  "複数人シーンではキャラごとに情報を分ける",
  "よく使う指定は辞書化しておくと扱いやすい",
  "Animaでタグ＋自然文を書くときの注意点",
  "まとめ",
];

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

function PromptCode({ children }: { children: string }) {
  return (
    <pre>
      <code>{children}</code>
    </pre>
  );
}

function ArticleFigure({ name, alt, caption }: { name: string; alt: string; caption: string }) {
  return (
    <figure className="article-figure">
      <img src={`${imageBase}${name}`} alt={alt} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function LulinaSpeech({
  children,
  tone = "point",
  label,
}: {
  children: ReactNode;
  tone?: "point" | "recommend" | "warning";
  label?: string;
}) {
  const imageMap = {
    point: {
      src: "/assets/character/lulina-speech-point.png",
      alt: "ワンポイントを話すルリナ",
    },
    recommend: {
      src: "/assets/character/lulina-speech-recommend.png",
      alt: "おすすめを話すルリナ",
    },
    warning: {
      src: "/assets/character/lulina-speech-warning.png",
      alt: "注意をうながすルリナ",
    },
  } as const;
  const image = imageMap[tone];

  return (
    <aside className="lulina-speech" aria-label="ルリナのメモ">
      <img src={image.src} alt={image.alt} />
      <div className="lulina-bubble">
        <span>{label ?? "ルリナ"}</span>
        <p>{children}</p>
      </div>
    </aside>
  );
}

function DictionaryCards() {
  const items = [
    {
      label: "プロンプト辞書",
      title: "AIイラスト制作に使えるプロンプト辞書",
      description: "AIイラスト制作で使いやすいプロンプトを、カテゴリごとにサンプル付きで整理しています。",
      href: "/dictionary",
    },
    {
      label: "髪型辞書",
      title: "髪型辞書",
      description: "髪の長さ・前髪・ポニーテールなど、髪型に関するプロンプトを探せます。",
      href: "/dictionary/hairstyle",
    },
    {
      label: "表情辞書",
      title: "表情辞書",
      description: "笑顔・怒り・涙・記号表情など、表情づくりに使いやすいプロンプトを探せます。",
      href: "/dictionary/expression",
    },
  ];

  return (
    <div className="related-card-grid">
      {items.map((item) => (
        <a className="related-article-card" href={item.href} key={item.href}>
          <span>{item.label}</span>
          <strong>{item.title}</strong>
          <p>{item.description}</p>
        </a>
      ))}
    </div>
  );
}

export default function AnimaPromptWritingPage() {
  return (
    <>
      <Header />
      <main className="article-main anima-prompt-writing-page">
        <article className="article-shell" id="article-top">
          <header className="article-header">
            <div className="article-header-copy">
              <a className="back-link" href="/articles">記事一覧へ戻る</a>
              <span className="page-kicker">Model</span>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </header>

          <section className="article-content">
            <p className="published-date">公開日：{publishedLabel}</p>

            <h2 id="intro">はじめに</h2>
            <p>画像生成AIでイラストを作るとき、プロンプトの書き方にはいくつかの考え方があります。</p>
            <p>カンマで区切ったタグを並べる書き方もあれば、英語の文章でシーンを説明する書き方もあります。</p>
            <p>
              Animaは、自然文でも比較的扱いやすいモデルです。
              <br />
              たとえば「女の子が浜辺を歩いている」「2人のキャラクターが並木道を歩きながら話している」のように、文章としてシーンを説明しても使いやすい場面があります。
            </p>
            <p>ただ、実際に細かく指定していくと、自然文だけでは少し面倒になることもあります。</p>
            <p>
              特に、既存キャラの表情や構図を変えたい場合、オリジナルキャラを作る場合、複数人の特徴を分けて指定したい場合は、自然文だけだと管理が難しくなることがあります。
            </p>
            <p>
              この記事では、Animaでプロンプトを書くときに、<strong>タグ指定と自然文をどう組み合わせると扱いやすいか</strong>を整理します。
            </p>
            <p>自然文を否定するのではなく、キャラクターの特徴はタグで整理し、シーンや雰囲気は自然文で補う、という使い方を紹介します。</p>

            <h2 id="article-summary">この記事でわかること</h2>
            <LulinaSpeech tone="recommend" label="この記事でわかること">
              Animaは自然文だけでも使えるけれど、表情・構図・服装差分やオリジナルキャラの特徴づけでは、タグで分けた方が扱いやすい場面もあるよ。
              <br />
              この記事では、タグ指定と自然文をどう組み合わせるかを整理していくね。
            </LulinaSpeech>

            <nav className="toc-box" aria-labelledby="toc-title">
              <h2 id="toc-title">目次</h2>
              <ol>
                {toc.map((item, index) => (
                  <li key={item}>
                    <a href={`#section-${index + 1}`}>{item}</a>
                  </li>
                ))}
              </ol>
            </nav>

            <h2 id="section-1">1. Animaは自然文だけでも使える</h2>
            <p>Animaは、タグだけでなく自然文でも扱いやすいモデルです。</p>
            <p>たとえば、次のように文章でシーンを説明することもできます。</p>
            <PromptCode>{`A cheerful girl is walking on a sunny beach, with her hair fluttering in the sea breeze.`}</PromptCode>
            <p>このように、キャラクターの動きや空気感を文章で伝えられるのは、Animaの使いやすいところです。</p>
            <p>従来の画像生成AIでは、</p>
            <PromptCode>{`1girl, solo, blonde hair, beach, smile`}</PromptCode>
            <p>のように、タグを並べる書き方に慣れている人も多いと思います。</p>
            <p>一方でAnimaでは、自然文で「どんな場面なのか」「どういう雰囲気なのか」を書く方法も取り入れやすいです。</p>
            <p>
              Animaの公式説明でも、タグと自然文を混ぜて使えることや、自然文プロンプトの前に
              <code>quality tag</code> や <code>artist tag</code> を置けることが紹介されています。
            </p>
            <p>
              つまり、Animaは「自然文だけで書くモデル」というより、
              <strong>タグと自然文を組み合わせて使いやすいモデル</strong>として考えると扱いやすいです。
            </p>

            <h2 id="section-2">2. 既存キャラとオリジナルキャラでは指定の考え方が変わる</h2>
            <p>
              既存キャラを生成して楽しむ場合は、細かい指定を毎回しなくても、モデル側がある程度イメージを拾ってくれる場合がありますし、簡単なシーン説明だけでも形になりやすいことがあります。
            </p>
            <p>そのため、既存キャラを中心に楽しんでいる人にとっては、自然文だけでも十分使いやすく感じるかもしれません。</p>
            <p>ただし、既存キャラの場合でも、表情・構図・ポーズ・服装差分・シーンの雰囲気などは、自分で指定した方が調整しやすい場面があります。</p>
            <p>たとえば、</p>
            <ul>
              <li>笑顔にしたい</li>
              <li>照れ顔にしたい</li>
              <li>横顔にしたい</li>
              <li>歩いている場面にしたい</li>
              <li>別衣装にしたい</li>
              <li>複数人で並ばせたい</li>
            </ul>
            <p>といった差分を作る場合は、キャラ名とは別に指定を足すことになります。</p>
            <p>その指定が増えてくると、自然文だけで管理するより、タグで分けておいた方が修正しやすくなります。</p>
            <p>それ以上に大変なのは、オリジナルキャラを作る場合です。</p>
            <p>オリジナルキャラでは、髪色、髪型、前髪、目の色、目の形、表情、服装、雰囲気などを自分で指定する必要があります。</p>
            <p>そのため、すべてを自然文だけで書こうとすると、プロンプトが長くなりやすくなります。</p>

            <h2 id="section-3">3. 自然文だけだと面倒になりやすい場面</h2>
            <p>自然文プロンプトは便利ですが、指定する内容が増えるほど、あとから修正しづらくなります。</p>
            <p>たとえば、次のような内容なら、自然文だけでもあまり困りません。</p>
            <PromptCode>{`A girl with blonde hair is walking on a beach.`}</PromptCode>
            <p>このくらいなら短く、あとから修正する場所も分かりやすいです。</p>
            <p>でも、実際に一枚絵として作り込もうとすると、指定したい内容はもっと増えます。</p>
            <p>たとえば、</p>
            <ul>
              <li>金髪</li>
              <li>ロングヘア</li>
              <li>ぱっつん前髪</li>
              <li>緑の目</li>
              <li>アーモンドアイ</li>
              <li>笑顔</li>
              <li>かわいい雰囲気</li>
              <li>白いTシャツ</li>
              <li>ショートパンツ</li>
              <li>サンダル</li>
              <li>昼の浜辺</li>
              <li>風で髪がなびく</li>
              <li>髪に手を添える</li>
              <li>斜め下からの構図</li>
              <li>視線を外す</li>
            </ul>
            <p>といった要素を全部入れたい場合、自然文だけで書くとそれなりに長くなります。</p>
            <PromptCode>{`A cute girl with long blonde hair, blunt bangs, green almond-shaped eyes, and a smile is walking on a sunny beach. She is wearing a white T-shirt, short pants, and sandals. Her hair is fluttering in the sea breeze, and she is touching her hair while looking away from a low camera angle.`}</PromptCode>
            <p>この書き方でも使えます。</p>
            <p>ただ、あとから「前髪だけ変えたい」「目の形だけ変えたい」「服装だけ変えたい」となったとき、文章の中から該当部分を探して直す必要があります。</p>
            <p>
              英語に慣れている人なら、それほど気にならないかもしれません。
              <br />
              でも、英語が得意ではない場合、少し直すたびに翻訳ツールやAIに確認したくなることもあります。
            </p>
            <p>文章として自然かどうかを気にしながら、髪型や表情を調整するのは少し手間です。</p>
            <p>
              自然文は、場面や雰囲気を伝えるのには向いています。
              <br />
              一方で、髪型・目の色・服装・表情のように、あとから差し替えたい要素を管理する用途では、タグの方が扱いやすいことがあります。
            </p>

            <h2 id="section-4">4. タグ＋自然文で分けると管理しやすい</h2>
            <p>
              そこで使いやすいのが、<strong>タグ＋自然文</strong>の書き方です。
            </p>
            <p>考え方はシンプルです。</p>
            <PromptCode>{`キャラの特徴はタグで書く
シーンや雰囲気は自然文で書く`}</PromptCode>
            <p>髪型、髪色、目の色、目の形、表情、服装、構図などは、タグで分けておくと見直しやすくなります。</p>
            <p>一方で、場面や空気感、キャラクター同士の関係、動きの雰囲気などは、自然文で書いた方が伝えやすいことがあります。</p>
            <p>たとえば、次のように分けます。</p>
            <PromptCode>{`1girl, blonde hair, long hair, blunt bangs, green eyes, almond eyes, smile, cute girl

A cheerful girl is walking on a sunny beach, with her hair fluttering in the sea breeze.`}</PromptCode>
            <p>
              上の行では、キャラクターの見た目をタグで整理しています。
              <br />
              下の文では、浜辺を歩いているシーンや、風で髪がなびく雰囲気を自然文で説明しています。
            </p>
            <p>このように分けておくと、あとから調整するときに便利です。</p>
            <p>
              髪型を変えたいなら、タグ部分を直す。
              <br />
              シーンを変えたいなら、自然文部分を直す。
              <br />
              表情を変えたいなら、表情タグを差し替える。
            </p>
            <p>プロンプトのどこを触ればいいかが分かりやすくなります。</p>

            <h2 id="section-5">5. 1人キャラの特徴はタグで整理する</h2>
            <p>まずは、1人キャラの例で考えてみます。</p>
            <p>たとえば、次のような画像を作りたいとします。</p>
            <ul>
              <li>金髪ロングヘア</li>
              <li>ぱっつん前髪</li>
              <li>緑の目</li>
              <li>アーモンドアイ</li>
              <li>笑顔</li>
              <li>かわいい雰囲気</li>
              <li>白Tシャツ</li>
              <li>ショートパンツ</li>
              <li>サンダル</li>
              <li>昼の浜辺</li>
              <li>風で髪がなびく</li>
              <li>髪に触れるポーズ</li>
              <li>斜め下からの構図</li>
              <li>視線を外す</li>
            </ul>
            <p>このくらい情報が増えると、自然文だけで全部を管理するより、タグで分けた方が扱いやすくなります。</p>
            <p>今回の例では、次のように書きます。</p>
            <PromptCode>{`1girl, blonde hair, long hair, blunt bangs, green eyes, almond eyes, smile, cute girl, white t-shirt, short pants, sandals, beach, daytime, wind, touching hair, 3/4 body, from below, looking away,

A cheerful girl is walking on a sunny beach, with her hair fluttering in the sea breeze.`}</PromptCode>
            <p>ここでは、キャラクターの見た目や服装、構図はタグで整理しています。</p>
            <PromptCode>{`blonde hair
long hair
blunt bangs
green eyes
almond eyes
white t-shirt
short pants
sandals
from below
looking away`}</PromptCode>
            <p>このように分けておくと、あとから一部だけ変えたいときに探しやすくなります。</p>
            <p>たとえば、髪型を変えたいなら、</p>
            <PromptCode>{`long hair`}</PromptCode>
            <p>を別の髪型タグに変えます。</p>
            <p>表情を変えたいなら、</p>
            <PromptCode>{`smile`}</PromptCode>
            <p>を別の表情タグに変えます。</p>
            <p>服装を変えたいなら、</p>
            <PromptCode>{`white t-shirt, short pants, sandals`}</PromptCode>
            <p>の部分を差し替えます。</p>
            <p>一方で、シーンの雰囲気は自然文で補っています。</p>
            <PromptCode>{`A cheerful girl is walking on a sunny beach, with her hair fluttering in the sea breeze.`}</PromptCode>
            <p>この文では、「明るい浜辺を歩いている」「海風で髪がなびいている」という、タグだけでは少し硬くなりやすい雰囲気を説明しています。</p>
            <ArticleFigure
              name="anima-prompt-single.webp"
              alt="Animaで生成した1人キャラの浜辺サンプル"
              caption="キャラの見た目や構図はタグで整理し、シーンの雰囲気は自然文で補うと、あとから修正しやすくなります。"
            />
            <p>
              タグだけで全部を表現しようとすると、雰囲気がやや硬くなることがあります。
              <br />
              逆に自然文だけで全部を書こうとすると、修正したい部分を探しにくくなります。
            </p>
            <p>その中間として、タグと自然文を分けて使うと、かなり扱いやすくなります。</p>

            <h2 id="section-6">6. 複数人シーンではキャラごとに情報を分ける</h2>
            <p>タグ＋自然文の便利さが特に出るのは、複数人シーンです。</p>
            <p>
              1人なら、自然文だけでもそこまで困らないことがあります。
              <br />
              でも、2人以上になると、誰がどの特徴なのかを分けて考える必要があります。
            </p>
            <p>たとえば、2人の女の子が並木道を歩きながら話しているシーンを考えてみます。</p>
            <p>自然文だけで書くなら、次のような形になります。</p>
            <PromptCode>{`Two girls are walking together along a tree-lined path in the afternoon. The girl on the left has black bob-cut hair, blue sharp eyes, and a calm smile, giving off a cool-girl impression. She is wearing a navy cardigan, a white blouse, a pleated skirt, and carrying a school bag. The girl on the right has long blonde hair, green almond-shaped eyes, and a bright smile, giving off a cute-girl impression. She is wearing a light pink hoodie and a short skirt, and she is waving one hand while they talk in a relaxed and friendly atmosphere.`}</PromptCode>
            <p>これでも意味は伝わります。</p>
            <p>
              ただ、文章が長くなります。
              <br />
              また、あとから「左の子だけ髪型を変えたい」「右の子だけ服装を変えたい」となったとき、文章全体を確認する必要があります。
            </p>
            <p>そこで、キャラクターごとに情報を分けます。</p>
            <PromptCode>{`2girls, tree-lined path, afternoon, walking together, horizontal composition, slight front angle,

left side girl: black hair, bob cut, blue eyes, sharp eyes, calm smile, cool girl, navy cardigan, white blouse, pleated skirt, carrying a school bag,
right side girl: blonde hair, long hair, green eyes, almond eyes, bright smile, cute girl, light pink hoodie, short skirt, waving one hand,

Two girls are walking together along a tree-lined path, talking in a relaxed and friendly atmosphere.`}</PromptCode>
            <p>このように書くと、誰の特徴なのかが見やすくなります。</p>
            <p>左側のキャラは、</p>
            <PromptCode>{`left side girl: black hair, bob cut, blue eyes, sharp eyes, calm smile, cool girl`}</PromptCode>
            <p>右側のキャラは、</p>
            <PromptCode>{`right side girl: blonde hair, long hair, green eyes, almond eyes, bright smile, cute girl`}</PromptCode>
            <p>という形で分けています。</p>
            <p>服装やポーズも、それぞれのキャラに紐づけて書いています。</p>
            <PromptCode>{`navy cardigan, white blouse, pleated skirt, carrying a school bag`}</PromptCode>
            <PromptCode>{`light pink hoodie, short skirt, waving one hand`}</PromptCode>
            <p>これなら、あとから片方のキャラクターだけ修正したいときにも、どこを触ればいいか分かりやすくなります。</p>
            <ArticleFigure
              name="anima-prompt-two-girls.webp"
              alt="Animaで生成した2人キャラの並木道サンプル"
              caption="複数人では、キャラごとに特徴を分けて書くと、あとから一部だけ修正したいときにも見直しやすくなります。"
            />
            <p>
              もちろん、<code>left side girl</code> や <code>right side girl</code> と書いたからといって、必ず完全に位置が固定されるわけではありません。
            </p>
            <p>生成結果によっては、特徴が少し混ざったり、左右の印象が変わったりすることもあります。</p>
            <p>それでも、自然文だけで全部を書くより、プロンプトの管理はかなり楽になります。</p>
            <p>複数人シーンでは、キャラ情報とシーン情報を分けるのが大事です。</p>
            <PromptCode>{`キャラごとの特徴：タグで分ける
シーン全体：自然文でまとめる`}</PromptCode>
            <p>この形にしておくと、オリジナルキャラ同士の会話シーンや、複数人のグループイラストを作るときにも調整しやすくなります。</p>

            <h2 id="section-7">7. よく使う指定は辞書化しておくと扱いやすい</h2>
            <p>タグ＋自然文で書くときに、毎回すべてのタグを思い出すのは少し面倒です。</p>
            <p>
              既存キャラでも、表情・構図・ポーズ・服装差分などは毎回指定することがあります。
              <br />
              オリジナルキャラなら、髪型や目の色、雰囲気まで自分で指定する場面が増えます。
            </p>
            <p>そのため、よく使う指定を辞書や一覧から探せるようにしておくと便利です。</p>
            <p>たとえば、キャラクターの見た目なら、</p>
            <PromptCode>{`long hair
bob cut
blunt bangs
green eyes
almond eyes
smile`}</PromptCode>
            <p>服装や雰囲気なら、</p>
            <PromptCode>{`white t-shirt
school uniform
light pink hoodie
cute girl
cool girl
calm smile`}</PromptCode>
            <p>構図や動きなら、</p>
            <PromptCode>{`3/4 body
from below
looking away
walking together
waving one hand`}</PromptCode>
            <p>のような指定があります。</p>
            <p>こうした言葉を毎回ゼロから考えるより、よく使う指定を辞書や一覧から探せるようにしておくと、プロンプトを組み立てやすくなります。</p>
            <p>LULINAworksでは、現在は髪型辞書と表情辞書を公開しています。</p>
            <p>髪型や表情は、キャラクターの印象を作るうえで使う機会が多いため、タグ＋自然文の書き方とも相性が良い項目です。</p>
            <p>たとえば、複数人シーンでキャラクターごとに特徴を分ける場合も、</p>
            <PromptCode>{`left side girl: bob cut, calm smile, cool girl
right side girl: long hair, bright smile, cute girl`}</PromptCode>
            <p>のように、タグ候補を組み合わせて考えやすくなります。</p>
            <p>今後、ポーズや視線、服装、演出系の辞書が増えれば、同じ考え方でさらに使える範囲が広がります。</p>
            <p>辞書は、プロンプトを丸暗記するためのものではありません。</p>
            <p>
              「この指定は英語でどう書くのか」
              <br />
              「似たようなタグにはどんなものがあるのか」
              <br />
              「キャラごとに特徴を分けるとき、どの言葉を使うと整理しやすいか」
            </p>
            <p>を探すための道具として使うと便利です。</p>
            <DictionaryCards />

            <h2 id="section-8">8. Animaでタグ＋自然文を書くときの注意点</h2>
            <p>タグ＋自然文は便利ですが、書いた内容が必ずそのまま反映されるわけではありません。</p>
            <p>ここでは、Animaでタグと自然文を組み合わせるときに、気にしておきたい点を整理します。</p>

            <h3>指定が増えるほど、優先したい要素を見直す</h3>
            <p>タグを多く入れること自体が悪いわけではなく、自然文が長いこと自体も問題ではありません。</p>
            <p>ただ、指定が増えるほど、どの言葉が効いていて、どこを直せばよいのか分かりにくくなることがあります。</p>
            <p>そのため、うまくいかないときは、タグを減らすというより、まずは「どの指定を優先したいのか」を見直すと調整しやすくなります。</p>
            <p>たとえば、髪型を優先したいのか、表情を優先したいのか、構図を優先したいのかを分けて考えると、プロンプトの修正箇所を見つけやすくなります。</p>

            <h3>位置指定は完全には固定されない</h3>
            <p>
              <code>left side girl</code> や <code>right side girl</code> のように書いても、必ずその通りに配置されるとは限りません。
            </p>
            <p>特に複数人シーンでは、髪色や服装、表情が少し混ざることもあります。</p>
            <p>ただ、それでもキャラごとに情報を分けておくと、プロンプトを見直しやすくなります。</p>
            <p>うまくいかないときは、キャラ数を減らしたり、服装や髪色の差を大きくしたり、自然文側のシーン説明を少し単純にしたりすると、調整しやすくなります。</p>

            <h3>品質タグや安全寄りの指定は別で考える</h3>
            <p>この記事では、タグと自然文の分け方を説明するため、プロンプト例をシンプルにしています。</p>
            <p>実際に画像を作るときは、必要に応じて品質タグや安全寄りの指定、negative promptなどを組み合わせて調整します。</p>
            <p>Animaの公式説明でも、自然文プロンプトの前にquality tagやartist tagを置けることが紹介されています。</p>
            <p>つまり、自然文でシーンを書く場合でも、品質やキャラクターの見た目まで全部を英文に押し込む必要はありません。</p>
            <p>
              固定したい要素はタグで置く。
              <br />
              シーンや雰囲気は自然文で補う。
            </p>
            <p>この分け方で考えると、プロンプト全体を管理しやすくなります。</p>

            <h3>英語が不安な場合ほどタグが便利</h3>
            <p>英語の自然文に慣れていない場合、タグで固定できる部分はタグにしておくと楽です。</p>
            <PromptCode>{`blonde hair
green eyes
smile
white t-shirt`}</PromptCode>
            <p>のような短いタグなら、文法をあまり気にせず使えます。</p>
            <p>一方で、自然文は、</p>
            <PromptCode>{`A cheerful girl is walking on a sunny beach.`}</PromptCode>
            <p>のように、シーンや雰囲気を説明するところだけに使うと負担が少なくなります。</p>
            <p>タグと自然文を分けることで、英語が得意でなくてもプロンプトを調整しやすくなります。</p>

            <h2 id="section-9">9. まとめ</h2>
            <p>Animaは、自然文だけでも使いやすいモデルです。</p>
            <p>ざっくりしたシーンや雰囲気を伝えたいときは、英語の文章でそのまま書けるのが魅力です。</p>
            <p>既存キャラを生成する場合は、簡単なシーン説明だけでも形になりやすいことがあります。</p>
            <p>ただし、既存キャラでも表情・構図・ポーズ・服装差分などを調整したい場合は、タグで指定を分けておくと扱いやすくなります。</p>
            <p>オリジナルキャラを作る場合は、さらに指定する内容が増えます。</p>
            <p>
              髪型、前髪、目の色、目の形、表情、服装、ポーズ、構図、カメラアングルなどを自分で管理する必要があるため、自然文だけだとプロンプトが長くなり、あとから一部だけ修正するのが面倒になりやすいです。
            </p>
            <p>そこで、Animaでは次のように分けて考えると扱いやすくなります。</p>
            <PromptCode>{`キャラの特徴：タグで書く
シーンや雰囲気：自然文で書く`}</PromptCode>
            <p>1人キャラなら、髪型や表情、服装、構図をタグで整理しておくと、あとから差し替えやすくなります。</p>
            <p>
              複数人シーンなら、<code>left side girl</code> や <code>right side girl</code> のようにキャラごとに特徴を分けると、誰の情報なのか見やすくなります。
            </p>
            <p>自然文の強みを活かしつつ、キャラの特徴はタグで整理する。</p>
            <p>この形にすると、Animaのプロンプトはかなり扱いやすくなります。</p>
            <p>よく使う指定に迷ったときは、辞書や一覧から使いやすいタグを探して、プロンプトに組み込んでみてください。</p>
          </section>
          <ArticleNavigation currentHref="/articles/anima-prompt-writing" series="anima" />
        </article>
      </main>
      <Footer />

      <style>{`
        .anima-prompt-writing-page .article-header {
          background:
            linear-gradient(90deg, rgba(255, 253, 249, 0.94) 0%, rgba(255, 247, 238, 0.86) 48%, rgba(255, 247, 238, 0.18) 78%),
            url("${heroImage}") right 42% / cover no-repeat;
        }

        .anima-prompt-writing-page .published-date {
          margin: 0 0 26px;
          color: #69758a;
          font-size: .92rem;
          font-weight: 900;
          line-height: 1.6;
        }

        .anima-prompt-writing-page .article-content h3 {
          margin: 34px 0 14px;
          font-family: var(--font-heading), var(--font-body), sans-serif;
          color: var(--navy);
          font-size: clamp(1.18rem, 2vw, 1.45rem);
          line-height: 1.5;
          font-weight: 900;
          letter-spacing: 0;
        }

        .anima-prompt-writing-page .article-content p,
        .anima-prompt-writing-page .article-content li,
        .anima-prompt-writing-page .article-content a,
        .anima-prompt-writing-page .lulina-bubble p,
        .anima-prompt-writing-page .related-article-card strong {
          overflow-wrap: anywhere;
          word-break: normal;
        }

        .related-card-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin: 24px 0 30px;
        }

        .related-card-grid .related-article-card {
          margin: 0;
        }

        .related-article-card {
          display: block;
          margin: 24px 0 28px;
          padding: 18px 20px;
          border: 1px solid rgba(236, 217, 199, 0.9);
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(255, 247, 238, 0.96));
          box-shadow: 0 10px 22px rgba(48, 39, 31, 0.05);
          text-decoration: none !important;
        }

        .related-article-card span {
          display: inline-flex;
          margin-bottom: 8px;
          padding: 5px 10px;
          border-radius: 999px;
          background: var(--blue);
          color: #fff;
          font-size: .82rem;
          font-weight: 900;
        }

        .related-article-card strong {
          display: block;
          color: var(--navy);
          font-size: 1.04rem;
          line-height: 1.6;
        }

        .related-article-card p {
          margin: 6px 0 0;
          color: #586273;
          font-size: .94rem;
          line-height: 1.8;
        }

        @media (max-width: 900px) {
          .related-card-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 760px) {
          .anima-prompt-writing-page {
            overflow-x: clip;
          }

          .anima-prompt-writing-page .article-header {
            background:
              linear-gradient(180deg, rgba(255, 253, 249, 0.28) 0%, rgba(255, 247, 238, 0.76) 44%, rgba(255, 253, 249, 0.96) 100%),
              url("${heroImage}") right top / cover no-repeat;
          }

          .anima-prompt-writing-page .article-header,
          .anima-prompt-writing-page .article-content,
          .anima-prompt-writing-page .toc-box,
          .anima-prompt-writing-page .lulina-bubble {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
}
