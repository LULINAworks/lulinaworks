import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArticleNavigation } from "@/components/ArticleNavigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const title = "AIイラストのプロンプトとは？基本の考え方と書き方を整理する";
const description =
  "AIイラストで使うプロンプトの基本と、要素ごとに分けて考える書き方を整理します。";
const canonicalUrl = "https://lulinaworks.com/articles/prompt-basic";
const imageBase = "/assets/articles/prompt-basic/";
const eyecatchImage = "/assets/eyecatch/eyecatch-article-note.png";
const ogImage = "/assets/og/og-prompt-basic.png";

const toc = [
  "プロンプトとは何か",
  "positive promptとnegative promptの違い",
  "プロンプトは英語で書く？日本語でもいい？",
  "タグ形式と自然文形式の違い",
  "普通の英語とプロンプト用の言い方が違うこともある",
  "プロンプトは要素ごとに分けて考える",
  "まず指定したい基本要素",
  "作例：一部だけ変えると画像はどう変わる？",
  "強調指定は最初から使いすぎなくていい",
  "モデルによってプロンプトの効き方は変わる",
  "プロンプトの言葉が思いつかないときは？",
  "まとめ",
];

const hairExamples = [
  { name: "prompt-basic-02-hair-short.png", alt: "short hairの作例", label: "short hair" },
  { name: "prompt-basic-03-hair-bob.png", alt: "bob cutの作例", label: "bob cut" },
  { name: "prompt-basic-04-hair-long.png", alt: "long hairの作例", label: "long hair" },
  { name: "prompt-basic-05-hair-twintails.png", alt: "twin tailsの作例", label: "twin tails" },
];

const expressionExamples = [
  { name: "prompt-basic-06-expression-smile.png", alt: "smileの作例", label: "smile" },
  { name: "prompt-basic-07-expression-surprised.png", alt: "surprisedの作例", label: "surprised" },
  { name: "prompt-basic-08-expression-serious.png", alt: "seriousの作例", label: "serious" },
  { name: "prompt-basic-09-expression-embarrassed.png", alt: "embarrassedの作例", label: "embarrassed" },
];

const backgroundExamples = [
  { name: "prompt-basic-10-background-studio.png", alt: "studioの作例", label: "studio" },
  { name: "prompt-basic-11-background-workspace.png", alt: "workspaceの作例", label: "workspace" },
  { name: "prompt-basic-12-background-garden.png", alt: "gardenの作例", label: "garden" },
  { name: "prompt-basic-13-background-classroom.png", alt: "classroomの作例", label: "classroom" },
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

function PromptCode({ children }: { children: string }) {
  return (
    <pre>
      <code>{children}</code>
    </pre>
  );
}

function PromptBasicGrid({
  items,
  caption,
}: {
  items: { name: string; alt: string; label: string }[];
  caption: string;
}) {
  return (
    <figure className="prompt-basic-variant-figure">
      <div className="prompt-basic-variant-grid">
        {items.map((item) => (
          <figure className="prompt-basic-variant-item" key={item.name}>
            <img src={`${imageBase}${item.name}`} alt={item.alt} />
            <figcaption>{item.label}</figcaption>
          </figure>
        ))}
      </div>
      <figcaption className="prompt-basic-variant-caption">{caption}</figcaption>
    </figure>
  );
}

function RelatedArticleCard() {
  return (
    <a className="related-article-card" href="/articles/model-basic">
      <span>関連記事</span>
      <strong>画像生成AIのモデルとは？SD1.5・SDXLの違いと選び方</strong>
      <p>画像生成AIで使うモデルの基本と、SD1.5系・SDXL系の違いを整理します。</p>
    </a>
  );
}

export default function PromptBasicPage() {
  return (
    <>
      <Header />
      <main className="article-main prompt-basic-page">
        <article className="article-shell" id="article-top">
          <header className="article-header">
            <div className="article-header-copy">
              <a className="back-link" href="/articles">記事一覧へ戻る</a>
              <span className="page-kicker">Prompt</span>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </header>

          <section className="article-content">
            <h2 id="intro">はじめに</h2>
            <p>ComfyUIで画像を生成できるようになると、次に迷いやすいのが「プロンプトに何を書くか」です。</p>
            <p>同じモデルや同じワークフローを使っていても、プロンプトの内容によって、キャラクターの見た目、表情、服装、背景、雰囲気は大きく変わります。</p>
            <p>ただ、最初から長いプロンプトを丸ごと覚えようとすると、どの言葉が何に効いているのか分かりにくくなります。</p>
            <p>この記事では、AIイラストで使うプロンプトを「長い呪文」として覚えるのではなく、被写体・見た目・表情・構図・背景・画風などの要素に分けて整理する考え方を紹介します。</p>
            <p>今回はSDXL系のイラスト向けモデルを使った作例を中心に載せていますが、基本的な考え方はSD1.5系や他のモデルでも共通して使えます。</p>

            <LulinaSpeech tone="recommend" label="この記事でわかること">
              プロンプトは、長く書けばよくなるというより「何を変えたいか」を分けて考えるのが大事だよ。
              この記事では、英語・日本語の違い、positive / negative、タグ形式、髪型や表情などの要素ごとの考え方を整理していくね。
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

            <h2 id="section-1">1. プロンプトとは何か</h2>
            <p>プロンプトとは、画像生成AIに「どんな画像を作ってほしいか」を伝えるためのテキストです。</p>
            <p>たとえば、次のような短いプロンプトでも、画像の方向性をある程度指定できます。</p>
            <PromptCode>{`1girl, blue hair, blue eyes, smile, white dress, garden`}</PromptCode>
            <p>このプロンプトでは、女の子、青い髪、青い目、笑顔、白い服、庭の背景といった要素を指定しています。</p>
            <p>プロンプトは、文章として完璧に書く必要はありません。AIイラストでは、単語や短いフレーズを並べて、画像に入れたい要素を指定することが多いです。</p>
            <p>ただし、プロンプトを書いたからといって、必ずその通りに出るとは限りません。</p>
            <p>使用するモデル、ワークフロー、サンプラー、画像サイズ、seedなどによって、結果は変わります。</p>
            <p>プロンプトは「完全な命令」というより、画像の方向性を伝えるための材料として考えると分かりやすくなります。</p>
            <ArticleFigure
              name="prompt-basic-01-comfyui-prompt-area.png"
              alt="ComfyUIのpositive promptとnegative promptの入力欄"
              caption="ComfyUIでは、positive promptに入れたい要素、negative promptに避けたい要素を書いて画像を生成します。"
            />

            <h2 id="section-2">2. positive promptとnegative promptの違い</h2>
            <p>画像生成では、よく positive prompt と negative prompt を使います。</p>
            <p>positive promptは、画像に入れたい要素を書く場所です。</p>
            <PromptCode>{`1girl, blue hair, smile, white dress, garden`}</PromptCode>
            <p>一方で、negative promptは、画像に出てほしくない要素や、避けたい崩れを書く場所です。</p>
            <PromptCode>{`low quality, blurry, bad hands, text, watermark`}</PromptCode>
            <p>たとえば、画質の低下、手の崩れ、文字、透かしのような要素を避けたいときに使います。</p>
            <p>ただし、negative promptに書いたものが必ず完全に消えるわけではありません。「絶対に禁止する命令」というより、出にくくするための補助として考える方が近いです。</p>
            <LulinaSpeech>
              negative promptは「絶対に出さない命令」ではなく、避けたい方向を伝える補助として考えると分かりやすいよ。
              最初はよく使う基本のnegativeを入れて、必要に応じて少しずつ調整していけば大丈夫だね。
            </LulinaSpeech>

            <h2 id="section-3">3. プロンプトは英語で書く？日本語でもいい？</h2>
            <p>プロンプトを書くときに、最初に迷いやすいのが「英語で書くべきか、日本語でもいいのか」という点です。</p>
            <p>結論としては、基本的には英語のプロンプトを使う方が安定しやすいです。</p>
            <p>画像生成モデルの多くは、英語の説明文や英語圏のタグ、画像につけられた英語のキャプションなどをもとに学習されています。そのため、blue hair、smile、white dress、garden のような英語の単語や短いフレーズの方が、意図が伝わりやすい場合があります。</p>
            <p>たとえば、次のように日本語で書いたとします。</p>
            <PromptCode>{`青い髪の女の子、笑顔、白いワンピース、庭`}</PromptCode>
            <p>日本語でもある程度反応する場合はあります。ただ、モデルや環境によっては、意図が弱くなったり、思った通りに反映されなかったりすることがあります。</p>
            <p>同じ内容を英語で書くと、次のようになります。</p>
            <PromptCode>{`1girl, blue hair, smile, white dress, garden`}</PromptCode>
            <p>AIイラスト制作では、このように英語の単語や短いフレーズをカンマで区切って並べる書き方がよく使われます。</p>
            <p>日本語を絶対に使ってはいけないわけではありません。一部のモデルや環境では、日本語の説明でも反応することがあります。</p>
            <p>それでも、プロンプトを自分で調整したり、他の人のプロンプトを参考にしたり、プロンプト辞書を使ったりするなら、まずは英語のタグや短い英語フレーズに慣れておく方が扱いやすいです。</p>
            <LulinaSpeech>
              日本語で書いちゃダメ、というわけではないよ。
              ただ、最初は blue hair や smile みたいな短い英語タグで考えると、あとから調整しやすいね。
              辞書や配布プロンプトでも英語表記が多いから、少しずつ慣れていけば大丈夫だよ。
            </LulinaSpeech>

            <h2 id="section-4">4. タグ形式と自然文形式の違い</h2>
            <p>英語でプロンプトを書く場合にも、大きく分けてタグ形式と自然文形式があります。</p>
            <p>タグ形式は、単語や短いフレーズをカンマで区切って並べる書き方です。</p>
            <PromptCode>{`1girl, blue hair, blue eyes, smile, white dress, garden, soft lighting`}</PromptCode>
            <p>AIイラスト系のモデルでは、このようなタグ形式のプロンプトをよく見かけます。要素ごとに分けやすく、どこを変えたのか確認しやすいのが特徴です。</p>
            <p>一方で、自然文形式は、文章としてイメージを伝える書き方です。</p>
            <PromptCode>{`A girl with blue hair and blue eyes is smiling in a bright garden, wearing a white dress.`}</PromptCode>
            <p>自然文形式は、文章として読みやすく、雰囲気をまとめて伝えやすい書き方です。SDXL系のモデルでは、自然文に近い指定が使いやすい場合もあります。</p>
            <p>ただ、最初のうちはタグ形式で考える方が、プロンプトの構造を整理しやすいです。</p>
            <p>たとえば、髪型だけを変えたいときは、タグ形式なら short hair を long hair に変えるだけで比較しやすくなります。</p>
            <div className="prompt-basic-table-scroll">
              <table className="prompt-basic-table">
                <thead>
                  <tr>
                    <th>書き方</th>
                    <th>例</th>
                    <th>向いていること</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>タグ形式</th>
                    <td>1girl, blue hair, smile</td>
                    <td>要素を分けて調整しやすい</td>
                  </tr>
                  <tr>
                    <th>自然文形式</th>
                    <td>A girl with blue hair is smiling.</td>
                    <td>雰囲気を文章で伝えやすい</td>
                  </tr>
                  <tr>
                    <th>混合形式</th>
                    <td>1girl, blue hair, smile, standing in a bright garden</td>
                    <td>タグと文章の両方を使える</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="section-5">5. 普通の英語とプロンプト用の言い方が違うこともある</h2>
            <p>英語でプロンプトを書くときに注意したいのは、日本語をそのまま英訳すれば、必ず思った通りに伝わるわけではないという点です。</p>
            <p>普通の英語としては間違っていなくても、画像生成ではあまり反応しなかったり、別の意味に寄ったりすることがあります。</p>
            <p>画像生成AIでは、学習時に使われていたタグやキャプションの表現に近い言葉の方が、反応しやすい場合があります。そのため、プロンプトでは「辞書的に正しい英語」だけでなく、実際によく使われているプロンプト表現を知っておくと便利です。</p>
            <p>たとえば、「こちらを見ている」と指定したいとき、普通に英訳すると、</p>
            <PromptCode>{`looking this way`}</PromptCode>
            <p>のように考えるかもしれません。</p>
            <p>でも、AIイラストのプロンプトでは、</p>
            <PromptCode>{`looking at viewer`}</PromptCode>
            <p>のような表現がよく使われます。</p>
            <p>また、「横顔」を指定したいときも、</p>
            <PromptCode>{`side face`}</PromptCode>
            <p>より、</p>
            <PromptCode>{`profile`}</PromptCode>
            <p>や</p>
            <PromptCode>{`side view`}</PromptCode>
            <p>のような表現の方が使われることがあります。</p>
            <p>構図でも、普通の英語とは少し違う表現があります。たとえば、太ももあたりまでを入れる構図として、</p>
            <PromptCode>{`cowboy shot`}</PromptCode>
            <p>というタグが使われることがあります。</p>
            <p>さらに、モデルやタグ文化によっては、</p>
            <PromptCode>{`:3`}</PromptCode>
            <p>のような顔文字に近いタグが、猫っぽい口元や、少しむにっとした表情の指定として使われることもあります。普通の英単語ではありませんが、プロンプトではこうした記号に近い表現を見かける場合もあります。</p>
            <p>このように、プロンプトでは普通の英単語だけでなく、タグとしてよく使われている表現や、少し独特な書き方が出てくることがあります。</p>
            <p>最初から全部覚える必要はありません。まずはよく使われる表現を少しずつ見ながら、思った通りに反応しない言葉があったときに、別のタグ表現を探してみると調整しやすくなります。</p>
            <div className="prompt-basic-table-scroll">
              <table className="prompt-basic-table">
                <thead>
                  <tr>
                    <th>日本語で言いたいこと</th>
                    <th>直訳っぽい書き方</th>
                    <th>プロンプトで使われやすい表現</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>こちらを見ている</th>
                    <td>looking this way</td>
                    <td>looking at viewer</td>
                  </tr>
                  <tr>
                    <th>横顔</th>
                    <td>side face</td>
                    <td>profile, side view</td>
                  </tr>
                  <tr>
                    <th>太ももあたりまでの構図</th>
                    <td>from head to thighs など</td>
                    <td>cowboy shot</td>
                  </tr>
                  <tr>
                    <th>猫っぽい口元・むにっとした表情</th>
                    <td>通常の英単語では表しにくい</td>
                    <td>:3</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="section-6">6. プロンプトは要素ごとに分けて考える</h2>
            <p>プロンプトを書くときは、最初から長い文章を作るより、要素ごとに分けて考えると整理しやすくなります。</p>
            <p>たとえば、ひとつのキャラクター画像でも、次のような要素に分けられます。</p>
            <div className="prompt-basic-table-scroll">
              <table className="prompt-basic-table">
                <thead>
                  <tr>
                    <th>要素</th>
                    <th>例</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>被写体</th>
                    <td>1girl, solo</td>
                  </tr>
                  <tr>
                    <th>髪型</th>
                    <td>short hair, long hair, twin tails</td>
                  </tr>
                  <tr>
                    <th>髪色</th>
                    <td>blue hair, black hair, silver hair</td>
                  </tr>
                  <tr>
                    <th>目</th>
                    <td>blue eyes, green eyes</td>
                  </tr>
                  <tr>
                    <th>表情</th>
                    <td>smile, surprised expression, serious expression</td>
                  </tr>
                  <tr>
                    <th>服装</th>
                    <td>white blouse, blue dress, school uniform</td>
                  </tr>
                  <tr>
                    <th>構図</th>
                    <td>upper body, full body, looking at viewer</td>
                  </tr>
                  <tr>
                    <th>背景</th>
                    <td>simple background, garden, classroom</td>
                  </tr>
                  <tr>
                    <th>光</th>
                    <td>soft lighting, sunlight, backlight</td>
                  </tr>
                  <tr>
                    <th>雰囲気</th>
                    <td>pastel colors, warm atmosphere, clean composition</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>このように分けておくと、あとから調整しやすくなります。</p>
            <p>たとえば、表情だけ変えたいなら、表情の部分だけを差し替えます。背景だけ変えたいなら、背景の部分だけを差し替えます。</p>
            <p>プロンプト全体を毎回作り直すより、「どの要素を変えたのか」を意識する方が、結果を比べやすくなります。</p>
            <h3>プロンプトは見やすい順番に並べると調整しやすい</h3>
            <p>プロンプトを書くときは、「どの順番で並べればいいのか」も気になるところです。</p>
            <p>プロンプトの順番には、すべてのモデルで共通する絶対的なルールがあるわけではありません。モデルや環境によっては、前の方に書いた要素が少し意識されやすいと感じる場合もありますが、毎回はっきり同じ結果になるとは限りません。</p>
            <p>そのため、最初のうちは「効き方を細かく調整するための順番」よりも、「あとから見直しやすい順番」で並べるのがおすすめです。</p>
            <p>たとえば、次のように要素ごとにまとめると、どこを変えたのか分かりやすくなります。</p>
            <ul>
              <li>被写体</li>
              <li>見た目</li>
              <li>表情</li>
              <li>服装</li>
              <li>構図</li>
              <li>背景</li>
              <li>光や雰囲気</li>
              <li>品質・仕上げ</li>
            </ul>
            <p>例としては、次のような並びです。</p>
            <PromptCode>{`1girl, solo,
blue hair, blue eyes, long hair,
gentle smile,
white blouse, light blue ribbon,
upper body, looking at viewer,
simple background, soft lighting,
clean composition, high quality`}</PromptCode>
            <p>このように並べておくと、「髪型だけ変えたい」「背景だけ変えたい」と思ったときに、変更する場所を見つけやすくなります。</p>
            <p>順番そのものにこだわりすぎるより、まずは自分が見て分かりやすい形に整理しておくことが大切です。</p>
            <LulinaSpeech>
              プロンプトは、あとから直すことが多いから、自分で見返しやすい並びにしておくと楽だよ。
              髪型、表情、背景みたいに場所を決めておくと、差し替えるときに迷いにくいね。
            </LulinaSpeech>

            <h2 id="section-7">7. まず指定したい基本要素</h2>
            <p>最初からすべての要素を細かく指定する必要はありません。</p>
            <p>まずは、次のような基本要素だけでも画像の方向性を決められます。</p>
            <PromptCode>{`1girl, blue hair, blue eyes, smile, white blouse, upper body, simple background`}</PromptCode>
            <p>このプロンプトでは、</p>
            <ul>
              <li>被写体</li>
              <li>髪色</li>
              <li>目の色</li>
              <li>表情</li>
              <li>服装</li>
              <li>構図</li>
              <li>背景</li>
            </ul>
            <p>を指定しています。</p>
            <p>慣れないうちは、ここに少しずつ要素を足していくのがおすすめです。</p>
            <p>たとえば、背景を変えたいなら、</p>
            <PromptCode>{`simple background`}</PromptCode>
            <p>を</p>
            <PromptCode>{`bright classroom`}</PromptCode>
            <p>に変えます。</p>
            <p>髪型を変えたいなら、</p>
            <PromptCode>{`short hair`}</PromptCode>
            <p>を</p>
            <PromptCode>{`long hair`}</PromptCode>
            <p>に変えます。</p>
            <p>このように、ひとつずつ変えると、どの言葉がどの変化につながったのか確認しやすくなります。</p>

            <h2 id="section-8">8. 作例：一部だけ変えると画像はどう変わる？</h2>
            <p>ここでは、同じ条件に近づけて、髪型・表情・背景など一部の指定を変えた作例を見ていきます。</p>
            <p>作例はSDXL系のイラスト向けモデルで生成しています。同じプロンプトでも、使用するモデルやseed、設定によって仕上がりは変わります。ここでは「プロンプトの考え方を見るための一例」として見てください。</p>
            <h3>8-1. 髪型だけ変える</h3>
            <p>まずは、髪型だけを変えた例です。</p>
            <p>共通部分はなるべく同じにして、髪型の指定だけを変えています。</p>
            <PromptCode>{`short hair
bob cut
long hair
twin tails`}</PromptCode>
            <p>髪型の指定を変えると、キャラクターの印象も変わります。ただし、顔立ちや服装まで少し変わることもあるため、完全に髪型だけが変わるとは限りません。</p>
            <p>それでも、同じ構図・同じ背景に近づけて比較すると、プロンプトの変化が見えやすくなります。</p>
            <PromptBasicGrid
              items={hairExamples}
              caption="髪型の指定だけを変えた例です。基本の構図や服装を揃えると、どの部分が変わったのか比較しやすくなります。"
            />

            <h3>8-2. 表情だけ変える</h3>
            <p>次に、表情だけを変えた例です。</p>
            <PromptCode>{`smile
surprised expression
serious expression
embarrassed expression`}</PromptCode>
            <p>表情の指定を変えると、目や口、眉の印象が変わります。</p>
            <p>ただし、表情によっては顔の角度や雰囲気まで少し変わることがあります。完全に同じ構図で表情だけを変えるのは難しい場合もあるため、最初は大まかな違いを見るくらいで大丈夫です。</p>
            <PromptBasicGrid
              items={expressionExamples}
              caption="表情の指定だけを変えた例です。smile、surprised、serious、embarrassed のように分けると、表情差分を確認しやすくなります。"
            />

            <h3>8-3. 背景だけ変える</h3>
            <p>最後に、背景だけを変えた例です。</p>
            <PromptCode>{`simple studio background
cozy bright workspace
bright flower garden
bright classroom`}</PromptCode>
            <p>背景を変えると、画像全体の雰囲気も大きく変わります。</p>
            <p>同じキャラクターでも、作業部屋なら記事や制作メモの印象に、花畑なら明るいイラストの印象に、教室なら日常シーンの印象に寄せやすくなります。</p>
            <PromptBasicGrid
              items={backgroundExamples}
              caption="背景の指定だけを変えた例です。背景は画像全体の雰囲気に大きく影響します。"
            />
            <LulinaSpeech>
              比較するときは、一度にたくさん変えすぎないのがコツだよ。
              髪型を見たいなら髪型だけ、背景を見たいなら背景だけ変えると、プロンプトの効き方を確認しやすいね。
            </LulinaSpeech>

            <h2 id="section-9">9. 強調指定は最初から使いすぎなくていい</h2>
            <p>プロンプトでは、特定の単語を少し強めるために、次のような書き方を使うことがあります。</p>
            <PromptCode>{`(black hair:1.1)`}</PromptCode>
            <p>これは、black hair の指定を少し強める書き方です。</p>
            <p>ざっくり言うと、1.0 が通常に近く、1.1 や 1.2 のように数字を上げると、その要素を少し強く意識させる指定になります。</p>
            <p>ただし、強調指定は便利な反面、最初から多用すると分かりにくくなります。</p>
            <p>たとえば、いろいろな単語に強調を入れすぎると、どの指定が効いているのか分かりにくくなったり、絵が不自然になったりする場合があります。</p>
            <p>最初は通常の単語で試して、それでも弱いと感じた部分だけ少し強めるくらいで十分です。</p>
            <LulinaSpeech>
              強調指定は便利だけど、最初からたくさん使わなくても大丈夫だよ。
              まずは普通のプロンプトで試して、「ここだけもう少し効かせたい」と思ったところに少しだけ使ってみてね。
            </LulinaSpeech>

            <h2 id="section-10">10. モデルによってプロンプトの効き方は変わる</h2>
            <p>同じプロンプトを書いても、使うモデルによって結果は変わります。</p>
            <p>たとえば、同じ blue hair や white dress でも、モデルによって色の出方、顔立ち、服のデザイン、背景の描き方は違います。</p>
            <p>そのため、うまくいかないときに「プロンプトが全部悪い」と考える必要はありません。</p>
            <p>画像の仕上がりには、プロンプト以外にも次のような要素が関わります。</p>
            <ul>
              <li>モデルとの相性</li>
              <li>画像サイズ</li>
              <li>サンプラー</li>
              <li>CFG</li>
              <li>negative prompt</li>
              <li>seed</li>
            </ul>
            <p>この記事ではSDXL系の作例を使っていますが、SD1.5系でも「要素ごとに分けて考える」という流れは同じです。</p>
            <p>モデルの違いについては、前回の記事でSD1.5系とSDXL系の違いを整理しています。プロンプトの効き方が気になったら、モデル側の特徴もあわせて確認してみてください。</p>
            <RelatedArticleCard />

            <h2 id="section-11">11. プロンプトの言葉が思いつかないときは？</h2>
            <p>プロンプトの基本的な考え方が分かっても、実際に書こうとすると「この髪型は英語で何て書けばいいんだろう」「この表情はどんな単語で指定するんだろう」と迷うことがあります。</p>
            <p>たとえば、髪型を変えたいと思っても、</p>
            <PromptCode>{`short hair
long hair
twin tails
bob cut
ponytail`}</PromptCode>
            <p>のような単語を知らないと、プロンプトに入れるのが難しくなります。</p>
            <p>表情やポーズも同じです。</p>
            <PromptCode>{`smile
surprised expression
serious expression
looking at viewer
standing
upper body`}</PromptCode>
            <p>こうした言葉を毎回ゼロから探すのは、少し大変です。</p>
            <p>そこで役に立つのが、プロンプト辞書です。</p>
            <p>プロンプト辞書は、長いプロンプトを丸ごとコピーするためだけのものではありません。むしろ、「髪型を変えたい」「表情を変えたい」「ポーズを変えたい」と思ったときに、使えそうな単語を探す場所として使うと便利です。</p>
            <p>たとえば、基本のプロンプトがある状態で髪型だけ変えたいなら、</p>
            <PromptCode>{`short hair`}</PromptCode>
            <p>を</p>
            <PromptCode>{`long hair`}</PromptCode>
            <p>や</p>
            <PromptCode>{`twin tails`}</PromptCode>
            <p>に差し替えるような使い方ができます。</p>
            <p>プロンプトを要素ごとに分けて考えられるようになると、辞書の使い方も分かりやすくなります。</p>
            <p>LULINAworksでも、今後は髪型・表情・ポーズなど、制作に使いやすいプロンプト辞書を少しずつ追加していく予定です。</p>
            <LulinaSpeech>
              プロンプト辞書は、長い文章を丸ごとコピーするためだけのものではないよ。
              髪型だけ、表情だけ、ポーズだけ、みたいに必要な言葉を探して差し替えると、自分の画像に合わせやすいね。
              LULINAworksでも、使いやすい形で少しずつまとめていくよ。
            </LulinaSpeech>

            <h2 id="section-12">12. まとめ</h2>
            <p>この記事では、AIイラストで使うプロンプトの基本的な考え方を整理しました。</p>
            <p>プロンプトは、画像生成AIに「どんな画像を作りたいか」を伝えるためのテキストです。</p>
            <p>最初から長いプロンプトを覚える必要はありません。まずは、被写体・髪型・表情・服装・構図・背景など、要素ごとに分けて考えることが大切です。</p>
            <p>今回のポイントをまとめると、次のようになります。</p>
            <ul>
              <li>positive promptには入れたい要素を書く</li>
              <li>negative promptには避けたい要素を書く</li>
              <li>日本語でも反応する場合はあるが、基本は英語の方が安定しやすい</li>
              <li>タグ形式は要素を分けて調整しやすい</li>
              <li>自然文形式は雰囲気を文章で伝えやすい</li>
              <li>普通の英訳とプロンプトで使われやすい表現が違うこともある</li>
              <li>プロンプトは要素ごとに整理しておくと見直しやすい</li>
              <li>最初は短めのプロンプトから始める</li>
              <li>一度に変える要素は少なめにする</li>
              <li>強調指定は必要な部分だけ少し使う</li>
              <li>同じプロンプトでもモデルによって仕上がりは変わる</li>
              <li>辞書は必要な要素を探して差し替える場所として使う</li>
            </ul>
            <p>プロンプトは、最初から完璧に書こうとしなくても大丈夫です。まずは短いプロンプトを作り、変えたい部分を少しずつ差し替えながら、自分の作りたい画像に近づけていきましょう。</p>
            <LulinaSpeech>
              プロンプトは、少しずつ試しながら覚えていけば大丈夫だよ。
              まずは短く作って、髪型・表情・背景みたいに一部分だけ変えてみると、どの言葉が画像に効いているのか見えやすくなるね。
            </LulinaSpeech>
          </section>
          <ArticleNavigation currentHref="/articles/prompt-basic" />
        </article>
      </main>
      <Footer />

      <style>{`
        .prompt-basic-page .article-header {
          background:
            linear-gradient(90deg, rgba(255, 253, 249, 0.94) 0%, rgba(255, 247, 238, 0.86) 48%, rgba(255, 247, 238, 0.2) 78%),
            url("${eyecatchImage}") center / cover no-repeat;
        }

        .prompt-basic-page .article-content h3 {
          margin: 34px 0 14px;
          font-family: var(--font-heading), var(--font-body), sans-serif;
          color: var(--navy);
          font-size: clamp(1.18rem, 2vw, 1.45rem);
          line-height: 1.5;
          font-weight: 900;
          letter-spacing: 0;
        }

        .prompt-basic-page .article-content p,
        .prompt-basic-page .article-content li,
        .prompt-basic-page .article-content a,
        .prompt-basic-page .lulina-bubble p,
        .prompt-basic-page .prompt-basic-table th,
        .prompt-basic-page .prompt-basic-table td {
          overflow-wrap: anywhere;
          word-break: normal;
        }

        .prompt-basic-table-scroll {
          overflow-x: auto;
          margin: 22px 0 28px;
          border: 1px solid rgba(236, 217, 199, 0.9);
          border-radius: 16px;
          background: #fff;
          box-shadow: 0 10px 22px rgba(48, 39, 31, 0.05);
        }

        .prompt-basic-table {
          width: 100%;
          min-width: 640px;
          border-collapse: collapse;
        }

        .prompt-basic-table th,
        .prompt-basic-table td {
          padding: 13px 15px;
          border-bottom: 1px solid rgba(236, 217, 199, 0.75);
          color: #344563;
          font-size: .95rem;
          line-height: 1.75;
          text-align: left;
          vertical-align: top;
        }

        .prompt-basic-table thead th {
          background: #fff7ee;
          color: var(--navy);
          font-weight: 900;
        }

        .prompt-basic-table tbody th {
          color: var(--navy);
          font-weight: 900;
        }

        .prompt-basic-table tr:last-child th,
        .prompt-basic-table tr:last-child td {
          border-bottom: 0;
        }

        .prompt-basic-variant-figure {
          margin: 28px 0 34px;
        }

        .prompt-basic-variant-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }

        .prompt-basic-variant-item {
          margin: 0;
          min-width: 0;
        }

        .prompt-basic-variant-item img {
          display: block;
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
          border: 1px solid rgba(236, 217, 199, 0.95);
          border-radius: 14px;
          background: #fff;
          box-shadow: 0 10px 22px rgba(48, 39, 31, 0.08);
        }

        .prompt-basic-variant-item figcaption {
          margin-top: 8px;
          color: var(--navy);
          font-size: .88rem;
          font-weight: 900;
          line-height: 1.45;
          text-align: center;
        }

        .prompt-basic-variant-caption {
          margin-top: 12px;
          color: #6d7280;
          font-size: .9rem;
          font-weight: 700;
          line-height: 1.7;
          text-align: center;
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

        @media (max-width: 760px) {
          .prompt-basic-page {
            overflow-x: clip;
          }

          .prompt-basic-page .article-header {
            background:
              linear-gradient(180deg, rgba(255, 253, 249, 0.34) 0%, rgba(255, 247, 238, 0.82) 46%, rgba(255, 253, 249, 0.96) 100%),
              url("${eyecatchImage}") center top / cover no-repeat;
          }

          .prompt-basic-page .article-header,
          .prompt-basic-page .article-content,
          .prompt-basic-page .toc-box,
          .prompt-basic-page .lulina-bubble {
            max-width: 100%;
          }

          .prompt-basic-variant-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }

          .prompt-basic-variant-item figcaption {
            font-size: .82rem;
          }
        }
      `}</style>
    </>
  );
}
