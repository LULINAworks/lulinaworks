import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const title = "Animaとは？ComfyUIで試して感じた特徴と注意点";
const description =
  "AnimaをComfyUIで試した所感をもとに、タグ形式・自然文形式の違い、生成速度、使う前に知っておきたい注意点を整理します。";
const canonicalUrl = "https://lulinaworks.com/articles/anima-basic";
const imageBase = "/assets/articles/anima-basic/";
const ogImage = "/assets/og/og-anima-basic.png";

const toc = [
  "Animaとは？",
  "ComfyUIで使うときの大まかな構成",
  "タグ形式と自然文形式、どちらで書く？",
  "実際にプロンプト形式を変えて試してみた",
  "スタイル指定はどこまで効く？",
  "生成速度はやや重め",
  "ライセンスと商用利用の注意",
  "Animaに感じた可能性と今後への期待",
  "まとめ",
];

const compareItems = [
  { name: "compare-01-tag-basic.webp", alt: "タグのみで生成した人物と白背景の比較画像", label: "タグのみ" },
  { name: "compare-02-natural-basic.webp", alt: "自然文のみで生成した人物と白背景の比較画像", label: "自然文のみ" },
  { name: "compare-03-mix-basic.webp", alt: "タグと自然文で生成した人物と白背景の比較画像", label: "タグ＋自然文" },
  { name: "compare-04-tag-pose-bg.webp", alt: "タグのみで生成した人物とポーズと背景の比較画像", label: "タグのみ" },
  { name: "compare-05-natural-pose-bg.webp", alt: "自然文のみで生成した人物とポーズと背景の比較画像", label: "自然文のみ" },
  { name: "compare-06-mix-pose-bg.webp", alt: "タグと自然文で生成した人物とポーズと背景の比較画像", label: "タグ＋自然文" },
  { name: "compare-07-tag-hair-bg-light.webp", alt: "タグのみで生成した髪型と背景とライティングの比較画像", label: "タグのみ" },
  { name: "compare-08-natural-hair-bg-light.webp", alt: "自然文のみで生成した髪型と背景とライティングの比較画像", label: "自然文のみ" },
  { name: "compare-09-mix-hair-bg-light.webp", alt: "タグと自然文で生成した髪型と背景とライティングの比較画像", label: "タグ＋自然文" },
  { name: "compare-10-tag-two-girls.webp", alt: "タグのみで生成した2人のキャラクターの比較画像", label: "タグのみ" },
  { name: "compare-11-natural-two-girls.webp", alt: "自然文のみで生成した2人のキャラクターの比較画像", label: "自然文のみ" },
  { name: "compare-12-mix-two-girls.webp", alt: "タグと自然文で生成した2人のキャラクターの比較画像", label: "タグ＋自然文" },
];

const styleItems = [
  { name: "anima-basic-05-style-none.webp", alt: "スタイル指定なしで生成したAnimaのイラスト", label: "スタイル指定なし" },
  { name: "anima-basic-06-style-prompt.webp", alt: "絵柄と塗りの方向を指定して生成したAnimaのイラスト", label: "スタイル指定あり" },
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

function RelatedArticleCard() {
  return (
    <a className="related-article-card" href="/articles/comfyui-start-guide">
      <span>関連記事</span>
      <strong>ComfyUIの始め方｜Portable版の導入から画像生成まで</strong>
      <p>ComfyUI Portable版の導入から、公式Text to Imageワークフローで最初の1枚を生成するまでを整理しています。</p>
    </a>
  );
}

function CompareGrid() {
  return (
    <figure className="anima-compare-figure">
      <div className="anima-compare-grid">
        {compareItems.map((item) => (
          <figure className="anima-compare-item" key={item.name}>
            <img src={`${imageBase}${item.name}`} alt={item.alt} />
            <figcaption>{item.label}</figcaption>
          </figure>
        ))}
      </div>
      <figcaption className="anima-compare-caption">
        同じテーマを、左からタグのみ・自然文のみ・タグ＋自然文で生成した比較例です。
      </figcaption>
    </figure>
  );
}

function StyleCompare() {
  return (
    <figure className="anima-style-figure">
      <div className="anima-style-grid">
        {styleItems.map((item) => (
          <figure className="article-figure anima-style-item" key={item.name}>
            <img src={`${imageBase}${item.name}`} alt={item.alt} />
            <figcaption>{item.label}</figcaption>
          </figure>
        ))}
      </div>
      <figcaption className="anima-compare-caption">
        スタイル指定なしと、絵柄・塗りの方向を指定した場合の比較例です。指定を入れることで仕上がりの方向は寄せられますが、ベースモデルのため完全に同じ絵柄へ固定されるわけではありません。
      </figcaption>
    </figure>
  );
}

export default function AnimaBasicPage() {
  return (
    <>
      <Header />
      <main className="article-main anima-basic-page">
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
            <h2 id="intro">はじめに</h2>
            <p>画像生成AIのモデルには、SD1.5系、SDXL系、NovelAI系など、さまざまな系統があります。</p>
            <p>その中で、最近気になったモデルのひとつが <strong>Anima</strong> です。</p>
            <p>Animaはアニメ・イラスト系の画像生成を目的としたモデルで、ComfyUI向けの公式ワークフローも用意されています。</p>
            <p>この記事ではAnimaを実際にComfyUIで試してみて、タグ形式と自然文形式の違いや生成速度、使う前に知っておきたい注意点を整理します。</p>

            <h2 id="article-summary">この記事でわかること</h2>
            <LulinaSpeech tone="recommend" label="この記事でわかること">
              Animaは、タグだけでなく文章でも指定できるモデルだよ。<br />
              この記事では、ComfyUIで試したときの使い方の違いや、生成速度、ライセンス面の注意点をまとめていくね。<br />
              いつものタグ指定とどう違うのかを見たい人にも、判断材料になる内容だよ。
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

            <h2 id="section-1">1. Animaとは？</h2>
            <p>Animaは、CircleStone LabsとComfy Orgの協力によって作られた、アニメ・イラスト向けの画像生成モデルです。</p>
            <p>公式では、アニメ系のキャラクターやスタイル、非写実的な表現を目的としたモデルとして説明されています。<br />リアルな写真風の画像を狙うというより、キャラクターイラストやアート寄りの画像を作るためのモデルと考えると分かりやすいです。</p>
            <p>Animaの公式ページでは、モデルの概要、ComfyUIでの使い方、プロンプトの書き方、ライセンスなどがまとめられています。</p>
            <p>参考リンク：<a href="https://huggingface.co/circlestone-labs/Anima" target="_blank" rel="noopener noreferrer">Anima公式ページ（Hugging Face）</a></p>
            <ArticleFigure
              name="anima-basic-01-single-girl.webp"
              alt="Animaで生成したキャラクターイラスト例"
              caption="Animaで生成したイラスト例。アニメ・イラスト向けモデルとして、キャラクターイラストを作りやすい印象があります。"
            />

            <h2 id="section-2">2. ComfyUIで使うときの大まかな構成</h2>
            <p>AnimaはComfyUIで使うことを想定したモデルです。<br />公式ページにはComfyUI用のワークフロー画像も掲載されており、その画像をComfyUIにドラッグ＆ドロップすることでワークフローを読み込めます。</p>
            <p>ComfyUI自体の導入がまだの場合は、先に以下の記事でPortable版の導入から最初の画像生成まで確認しておくと進めやすいです。</p>
            <RelatedArticleCard />
            <p>今回の記事では、公式ページで案内されているワークフローを使用します。</p>
            <p>通常のチェックポイントを1つ読み込むだけの構成とは少し違い、Anima本体のモデルファイル、テキストエンコーダー、VAEをそれぞれ読み込む形になっています。</p>
            <p>ここでいうテキストエンコーダーは、ざっくり言えばプロンプトを読み取るための部分です。<br />SD系やNovelAI系などのタグ中心のモデルに慣れている人から見ると、Animaはプロンプトの扱い方や読み取り方が少し違うモデルとして見た方が分かりやすいと思います。</p>
            <p>細かい仕組みを最初から理解する必要はありませんが、必要なファイルが複数あるため、最初は公式ページの案内に沿って配置するのが安全です。</p>
            <p>使用ファイルの確認先：</p>
            <ul>
              <li>Anima公式ページ</li>
              <li>Anima本体のモデルファイル</li>
              <li>テキストエンコーダー</li>
              <li>VAE</li>
            </ul>
            <p>公式ページでは、Anima本体のモデルファイルを <code>models/diffusion_models</code>、テキストエンコーダーを <code>models/text_encoders</code>、VAEを <code>models/vae</code> に置くよう案内されています。</p>
            <ArticleFigure
              name="anima-basic-03-model-load.webp"
              alt="Anima用ワークフローのモデル読み込み部分"
              caption="今回使用したAnima用ワークフローのモデル読み込み部分。Anima本体のモデルファイル、テキストエンコーダー、VAEをそれぞれ読み込む構成になっています。"
            />

            <h2 id="section-3">3. タグ形式と自然文形式、どちらで書く？</h2>
            <p>Animaの特徴として、タグ形式と自然文形式の両方を使える点があります。</p>
            <p>SD系やNovelAI系のイラスト生成では、<code>1girl, long hair, smile</code> のように短いタグを並べる書き方に慣れている人も多いと思います。</p>
            <p>一方でAnimaではタグだけでなく、文章で場面やキャラクター同士の関係性を説明する書き方も想定されています。<br />公式READMEでも、Danbooru風タグ、自然文キャプション、タグと自然文を組み合わせた形式で学習されていると説明されています。</p>
            <p>たとえば、単に</p>
            <p><code>2girls, blue hair, red hair</code></p>
            <p>と並べるだけでなく、</p>
            <p><code>Two girls are standing side by side. The girl on the left has long blue hair and wears a white dress. The girl on the right has short red hair and wears a black dress.</code></p>
            <p>のように文章で補足すると、どの要素をどちらのキャラクターに対応させたいのかを伝えやすくなります。</p>
            <p>ただし、自然文にすれば必ず意図通りになるというわけではありません。<br />公式でも、自然文だけで使う場合は具体的に書くことが推奨されており、極端に短いプロンプトでは予想外の結果になることがあると説明されています。</p>
            <ArticleFigure
              name="anima-basic-04-prompt-node.webp"
              alt="Animaでタグ形式と自然文を組み合わせたプロンプト例"
              caption="タグ形式の指定に加えて、自然文で2人の髪色・服装・位置関係を補足した例。Animaでは、タグと文章を組み合わせた指定も試せます。"
            />

            <h2 id="section-4">4. 実際にプロンプト形式を変えて試してみた</h2>
            <CompareGrid />
            <p>この画像は、プロンプトの書き方による出力の違いを見るために作成した比較です。</p>
            <p>細かいプロンプトは割愛しますが、共通部分として</p>
            <p><code>masterpiece, best quality, score_7, safe, anime screenshot</code></p>
            <p>を固定し、上から順に「人物＋白背景」「人物＋ポーズ＋背景」「人物＋髪型＋背景＋ライティング」「2人＋それぞれの容姿＋背景」というテーマで生成しました。</p>
            <p>試した範囲では「タグのみ」「自然文のみ」「タグ＋自然文」のどの書き方でも一定のクオリティのイラストは生成できています。</p>
            <p>ただ、自然文が絡む生成では文章の書き方によって、結果のまとまり方や要素の伝わり方が変わりそうな印象もありました。</p>
            <p>なお、Animaはベースモデルのため、共通のスタイル指定を入れても絵柄や塗りにはある程度のブレがあります。<br />ここでは絵柄の違いというより、タグや自然文の書き方によってどこまで要素が反映されるかを見る比較として扱っています。</p>
            <LulinaSpeech>
              タグだけでも画像は作れるよ。<br />
              ただ、文章で場面を足せる分、いつものタグ指定とは少し違う調整ができそうだね。
            </LulinaSpeech>

            <h2 id="section-5">5. スタイル指定はどこまで効く？</h2>
            <p>Animaはベースモデルなので、スタイル指定を入れない場合は絵柄や塗りの方向がモデル側の補完に寄りやすい印象がありました。</p>
            <p>スタイル指定なしでも画像は生成できますが、仕上がりの方向が毎回きれいに揃うわけではありません。</p>
            <p>一方で、プロンプトに絵柄や塗りの方向を入れると、線の整理感や塗りの簡潔さなど、ある程度は方向を調整できます。</p>
            <p>公式ページでも、Animaのベース版は美的調整されたモデルではなく、artist tagやquality tagを使わない場合はデフォルトのスタイルがかなり平坦で中立的になりやすいと説明されています。</p>
            <StyleCompare />
            <p>今回の比較でも、スタイル指定を入れることで線や塗りの印象はかなり変わりました。</p>
            <p>Animaは幅広い表現を含むベースモデルなので、目的の雰囲気に寄せたい場合はキャラクターや構図だけでなく、絵柄・塗り・画面の方向性も一緒に指定した方が扱いやすそうです。</p>

            <h2 id="section-6">6. 生成速度はやや重め</h2>
            <p>Animaを試していて分かりやすく差を感じたのが生成速度です。</p>
            <p>同じ1024×1024px・batch 1・step 40・CFG 5・Eulerで比較したところ、AnimaはIllustrious系SDXLモデルより生成時間が長くなりました。</p>
            <p>初回生成では約2倍、モデル読み込み後の2回目以降では約2〜3倍ほど時間がかかる結果でした。</p>
            <p>もちろん、生成時間はPCスペック、ComfyUI環境、使用モデル、ワークフロー、解像度、サンプラーによって変わります。</p>
            <p>それでも、プロンプトを何度も調整しながら生成する用途ではテンポの差を感じやすいと思います。</p>
            <LulinaSpeech>
              1枚だけ試すならそこまで気にならなくても、何度もプロンプトを直すと生成時間の差はけっこう効いてくるよ。<br />
              検証や大量生成に使うなら、時間も含めて見ておきたいね。
            </LulinaSpeech>

            <h2 id="section-7">7. ライセンスと商用利用の注意</h2>
            <p>Animaを使うときは、ライセンスも確認しておきたいポイントです。</p>
            <p>AnimaはHugging Face上では CircleStone Labs Non-Commercial License として公開されています。<br />公式ページでも、モデル本体や派生モデルの利用は非商用目的に限られると説明されています。</p>
            <p>一方でライセンス本文では、生成された画像については商用目的を含めて利用できる内容も書かれています。<br />ただし、生成画像を競合モデルの学習・ファインチューニング・蒸留に使うことは禁止されています。</p>
            <p>つまりAnimaでは「モデル本体の利用」と「生成画像の利用」を分けて確認する必要があります。</p>
            <p>販売物や商用利用を考えている場合は、必ず公式ページのライセンス本文を確認してから使うようにしてください。</p>

            <h2 id="section-8">8. Animaに感じた可能性と今後への期待</h2>
            <p>Animaを試してみて新鮮に感じたのは、タグ形式と自然文形式の両方を使える点です。</p>
            <p>これまでのSD系ローカルモデルでは、<code>1girl, long hair, smile</code> のようにタグを積み重ねていく使い方に慣れている人も多いと思います。<br />Animaでもタグ形式の指定は使えるため、タグで生成してきた人でもいきなり大きく書き方を変えなくてよい安心感があります。</p>
            <p>実際に試した範囲でも、「タグのみ」「自然文のみ」「タグ＋自然文」のどの書き方でも一定のクオリティの画像は生成できましたが、自然文のみでプロンプトを組もうとすると、人物の容姿・服装・背景・行動などの情報を文章としてどうまとめるかに迷う場面もありました。</p>
            <p>タグ形式であれば、髪型、服装、背景、行動を要素ごとに分けて並べられますが、自然文ではそれらを英文として自然につなげる必要があります。</p>
            <p>特に日本語で考えてから英語に直す場合、「どこまでを1文に入れるか？」「要素を分けて書いた方が伝わりやすいのか？」で悩む場面もありました。</p>
            <p>そのため、人物まわりの基本要素はタグで指定し、シーンや関係性、複数人の位置関係は自然文で補足する形が扱いやすいのかなと感じました。</p>
            <p>LULINAworksでも、こうしたタグ指定を整理して使いやすくするために、髪型・表情・ポーズなどのプロンプト辞書を少しずつ制作しています。</p>
            <p>そのほかに特筆する点といえば、やはり複数人の描き分けです。<br />従来のSD系ローカルモデルでは、2人以上のキャラクターを出したときに髪色や服装、特徴が混ざってしまうことがありましたが、Animaでは自然文を使って人物ごとの特徴や関係性を補足することで、複数人の容姿を指定しやすい印象がありました。</p>
            <ArticleFigure
              name="anima-basic-02-two-girls.webp"
              alt="Animaで複数人を自然文で指定して生成した例"
              caption="複数人を自然文で指定して生成した例。人物ごとの髪色や服装、位置関係を文章で補足する使い方を試しています。"
            />
            <p>今後、派生モデルやワークフロー、作例、プロンプトの知見が増えてくれば、Animaはさらに扱いやすいモデルになっていく可能性があります。</p>

            <h2 id="section-9">9. まとめ</h2>
            <p>Animaは、アニメ・イラスト向けのモデルとしてタグ形式と自然文形式の両方を試せるのが特徴です。</p>
            <p>ComfyUIで試した範囲ではタグのみでも一定のイラストは生成でき、そこに自然文を組み合わせることで、複数人の容姿や位置関係、シーン全体の説明を加えやすくなる印象がありました。</p>
            <p>生成速度はやや重く、ベースモデルらしく絵柄や塗りにもある程度のブレがあるため、使う場面によってはスタイル指定やプロンプト調整を前提にしておくとよさそうです。</p>
            <p>ライセンス面では非商用ライセンスである点にも注意が必要で、販売物や商用利用を考える場合は、公式ページのライセンス本文まで目を通しておくと安心です。</p>
            <p>Animaはいつものタグ指定に自然文での説明を加えられるモデルです。<br />新しい指定方法を試せる選択肢として、今後の展開も含めて見ておきたいモデルだと感じました。</p>
            <LulinaSpeech tone="recommend">
              Animaは、タグだけでも試せるし、自然文を足して場面を説明できるのが面白いところだね。<br />
              特に複数人の描き分けや、キャラクター同士の関係を入れたいときは、今後の使い方が広がりそうだよ。
            </LulinaSpeech>
          </section>
        </article>
      </main>
      <Footer />

      <style>{`
        .anima-basic-page .article-header {
          background:
            linear-gradient(90deg, rgba(255, 253, 249, 0.94) 0%, rgba(255, 247, 238, 0.86) 48%, rgba(255, 247, 238, 0.2) 78%),
            url("${imageBase}anima-basic-02-two-girls.webp") 62% 34% / cover no-repeat;
        }

        .anima-basic-page .article-content p,
        .anima-basic-page .article-content li,
        .anima-basic-page .article-content a,
        .anima-basic-page .lulina-bubble p,
        .anima-basic-page .related-article-card strong {
          overflow-wrap: anywhere;
          word-break: normal;
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

        .anima-compare-figure,
        .anima-style-figure {
          margin: 28px 0 34px;
        }

        .anima-compare-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .anima-compare-item {
          margin: 0;
          min-width: 0;
        }

        .anima-compare-item img {
          display: block;
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
          border: 1px solid rgba(236, 217, 199, 0.95);
          border-radius: 14px;
          background: #fff;
          box-shadow: 0 10px 22px rgba(48, 39, 31, 0.08);
        }

        .anima-compare-item figcaption {
          margin-top: 8px;
          color: var(--navy);
          font-size: .88rem;
          font-weight: 900;
          line-height: 1.45;
          text-align: center;
        }

        .anima-compare-caption {
          margin-top: 12px;
          color: #6d7280;
          font-size: .9rem;
          font-weight: 700;
          line-height: 1.7;
          text-align: center;
        }

        .anima-style-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          align-items: start;
        }

        .anima-style-item {
          margin: 0;
        }

        .anima-style-item img {
          aspect-ratio: 1;
          object-fit: cover;
        }

        @media (max-width: 760px) {
          .anima-basic-page {
            overflow-x: clip;
          }

          .anima-basic-page .article-header {
            background:
              linear-gradient(180deg, rgba(255, 253, 249, 0.34) 0%, rgba(255, 247, 238, 0.82) 46%, rgba(255, 253, 249, 0.96) 100%),
              url("${imageBase}anima-basic-02-two-girls.webp") 50% 28% / cover no-repeat;
          }

          .anima-basic-page .article-header,
          .anima-basic-page .article-content,
          .anima-basic-page .toc-box,
          .anima-basic-page .lulina-bubble {
            max-width: 100%;
          }

          .anima-compare-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 8px;
          }

          .anima-style-grid {
            grid-template-columns: 1fr;
          }

          .anima-compare-item figcaption {
            font-size: .72rem;
          }
        }
      `}</style>
    </>
  );
}
