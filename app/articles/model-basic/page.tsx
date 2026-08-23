import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArticleNavigation } from "@/components/ArticleNavigation";
import { ArticleBody } from "@/components/content/ArticleBody";
import { Callout } from "@/components/content/Callout";
import { ContentHero } from "@/components/content/ContentHero";
import { ContentPageShell } from "@/components/content/ContentPageShell";
import { contentCategoryLabels } from "@/data/content";
import { allPublishedContents } from "@/data/contents";

const title = "画像生成AIのモデルとは？SD1.5・SDXLの違いと選び方";
const description =
  "画像生成AIで使うモデルの基本と、SD1.5系・SDXL系の違いを、画像サイズ・軽さ・ワークフローの違いから整理します。";
const lead = "画像生成AIで使うモデルの基本と、SD1.5系・SDXL系の違いを整理します。";
const canonicalUrl = "https://lulinaworks.com/articles/model-basic";
const currentHref = "/articles/model-basic";
const imageBase = "/assets/articles/model-basic/";
const ogImage = "/assets/og/og-model-basic.png";
const contentRecord = allPublishedContents.find((content) => content.href === currentHref);

if (!contentRecord) {
  throw new Error(`Published content is missing for ${currentHref}`);
}

const articleCategory = contentCategoryLabels[contentRecord.primaryCategory];
const backHref = `/contents?category=${contentRecord.primaryCategory}`;
const heroImageSrc = contentRecord.cardImage.src;
const publishedAt = contentRecord.publishedAt;

const toc = [
  "画像生成AIの「モデル」とは",
  "まずはモデルの系統をざっくり整理",
  "SD1.5系とSDXL系は何が違う？",
  "SD1.5系とSDXL系のざっくり比較",
  "前回のワークフローで使ったモデルを確認してみる",
  "SD1.5とSDXLではワークフローも違うことがある",
  "同じようなプロンプトでも結果は変わる",
  "最初はどちらを使えばいい？",
  "モデルとプロンプトの関係",
  "モデルを使うときの注意",
  "まとめ",
  "参考リンク",
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

function StructurePanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="model-structure-panel">
      <p className="model-panel-title">{title}</p>
      {children}
    </aside>
  );
}

function SelectionFlowPanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="model-flow-panel">
      <p className="model-panel-title">{title}</p>
      {children}
    </aside>
  );
}

function RelatedArticleCard() {
  return (
    <a className="related-article-card" href="/articles/comfyui-start-guide">
      <span>関連記事</span>
      <strong>ComfyUIの始め方｜Portable版の導入から画像生成まで</strong>
      <p>Portable版の導入から、ComfyUIを起動して最初の1枚を生成するまでをまとめています。</p>
    </a>
  );
}

export default function ModelBasicPage() {
  return (
    <>
      <ContentPageShell articleId="article-top">
        <ContentHero
          className="model-basic-hero"
          backHref={backHref}
          backLabel="コンテンツ一覧へ"
          category={articleCategory}
          title={title}
          lead={lead}
          publishedAt={publishedAt}
          eyecatchSrc={heroImageSrc}
          eyecatchAlt=""
          imagePosition="center top"
          tone="dark"
        />

        <ArticleBody>
            <h2 id="intro">はじめに</h2>
            <p>前回の記事では、ComfyUI Portable版を導入して、最初の1枚を生成するところまで確認しました。</p>
            <p>今回はその続きとして、画像生成で使うモデルの基本を整理していきます。</p>
            <p>同じプロンプトを書いても、使うモデルが変わると、絵柄・質感・構図・プロンプトの効き方が変わることがあります。</p>
            <p>この記事では、SD1.5系とSDXL系の違いを、画像サイズ・軽さ・得意な表現・ワークフローの違いから見ていきます。</p>

            <h2 id="article-summary">この記事でわかること</h2>
            <p>
              画像生成AIでは、同じプロンプトでも使用するモデルによって絵柄や生成結果が変わります。この記事では、SD1.5系とSDXL系の違いを、画像サイズ・軽さ・ワークフローの違いから整理します。読み終えるころには、どちらの系統から試すかを判断しやすくなります。
            </p>

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

            <h2 id="section-1">1. 画像生成AIの「モデル」とは</h2>
            <p>画像生成AIにおけるモデルは、画像を作るための土台になるファイルです。</p>
            <p>ComfyUIでは、モデルは <code>checkpoint</code> や チェックポイント と呼ばれることもあります。ワークフローの中では、Load Checkpointなどのノードから使用するモデルを選びます。</p>
            <p>モデルによって変わるものは、たとえば次のような部分です。</p>
            <ul>
              <li>絵柄</li>
              <li>色味</li>
              <li>質感</li>
              <li>背景の描き込み</li>
              <li>人物の雰囲気</li>
              <li>構図の出方</li>
              <li>プロンプトの効き方</li>
              <li>得意な表現、苦手な表現</li>
            </ul>
            <p>つまり、プロンプトだけで画像の結果が決まるわけではありません。同じプロンプトでも、使うモデルが変わると、出てくる画像の雰囲気は大きく変わることがあります。</p>
            <ArticleFigure
              name="model-basic-01-sd15-workflow-model-area.png"
              alt="ComfyUIのLoad Checkpointノードでモデルを選ぶ画面"
              caption="ComfyUIでは、Load Checkpointノードなどで使用するモデルを選びます。ここで選ぶモデルによって、生成される画像の雰囲気やプロンプトの効き方が変わります。"
            />

            <h2 id="section-2">2. まずはモデルの系統をざっくり整理</h2>
            <p>モデルには、SD1.5系やSDXL系のような大きな系統があります。</p>
            <p>ここで少し注意したいのは、SD1.5やSDXLは、アニメ系・リアル系といった絵柄ジャンルそのものの名前ではないという点です。</p>
            <p>モデルという言葉は、絵柄や雰囲気の違いとして語られることもあります。ただし、この記事で扱うSD1.5系・SDXL系の違いは、「アニメ系かリアル系か」という分類ではありません。</p>
            <p>SD1.5系やSDXL系は、モデルの大きな世代・土台のようなものです。その中に、アニメ寄り、リアル寄り、イラスト寄りなど、さまざまな方向に調整された派生モデルがあります。</p>
            <p>この記事では、個別の派生モデルの違いではなく、まずSD1.5系とSDXL系という大きな分け方を整理していきます。</p>
            <figure className="model-system-figure">
              <StructurePanel title="モデルの大きな系統イメージ">
                <pre><code>{`SD1.5系
├─ SD1.5 base
└─ SD1.5系の派生モデル
   ├─ アニメ寄り
   ├─ リアル寄り
   └─ その他

SDXL系
├─ SDXL base
└─ SDXL系の派生モデル
   ├─ アニメ・イラスト寄り
   ├─ リアル寄り
   └─ その他`}</code></pre>
              </StructurePanel>
              <figcaption>
                SD1.5やSDXLは、絵柄ジャンル名ではなく、大きな系統として考えると分かりやすいです。その中に、さまざまな方向に調整された派生モデルがあります。
              </figcaption>
            </figure>
            <Callout variant="point">
              SD1.5やSDXLは、絵柄の名前ではなく大きなモデル系統として捉えると分かりやすくなります。アニメ寄り・リアル寄りなどの雰囲気は、それぞれの系統に属する派生モデルによって変わることがあります。
            </Callout>

            <h2 id="section-3">3. SD1.5系とSDXL系は何が違う？</h2>
            <p>SD1.5系とSDXL系の違いは、単に「古い・新しい」だけではありません。</p>
            <p>また、先ほど触れたように、「SD1.5系だからアニメ向き」「SDXL系だからリアル向き」というような絵柄ジャンルの違いでもありません。</p>
            <p>ここでは、モデルの大きな系統として、どんな部分に違いが出やすいのかを見ていきます。</p>
            <p>大きく見ると、違いが出やすいのは次のような部分です。</p>
            <ul>
              <li>よく使われる画像サイズ</li>
              <li>PCへの負荷</li>
              <li>得意な表現の傾向</li>
              <li>必要になるワークフロー</li>
            </ul>

            <h3>画像サイズの違い</h3>
            <p>SD1.5系は、512×512px前後の画像サイズで使われることが多い系統です。一方で、SDXL系は1024×1024px前後の大きめの画像サイズで使われることが多い系統です。</p>
            <p>ここでいう px は、画像の一辺の長さを表す単位です。たとえば、512×512pxは小さめの正方形画像、1024×1024pxはそれより大きめの正方形画像として考えると分かりやすいです。</p>
            <p>もちろん、必ずそのサイズでしか使えないという意味ではありません。ただ、最初は「SD1.5系は512px前後」「SDXL系は1024px前後」がよく使われる目安、と覚えておくと理解しやすいです。</p>

            <h3>PCへの負荷の違い</h3>
            <p>SD1.5系は、比較的軽く扱いやすい系統です。PCへの負荷を抑えながら試しやすく、古くから使われている分、情報や作例も多く見つけやすいです。</p>
            <p>SDXL系は、SD1.5系より重くなりやすいです。大きめの画像サイズで生成することが多く、モデル自体も重めになるため、PCの性能によっては生成に時間がかかる場合があります。</p>

            <h3>得意な表現の違い</h3>
            <p>SD1.5系は、派生モデルや作例が多く、既存の情報を参考にしやすいのが強みです。軽く試したり、作例を見ながら調整したりする用途では、今でも使いやすい場面があります。</p>
            <p>SDXL系は、大きめの画像サイズや、背景込みのまとまり、全体の質感を出したい場面で使われることが多いです。人物だけでなく、背景や光の雰囲気も含めて見たい場合は、SDXL系が合うこともあります。</p>
            <p>ただし、「SDXL系なら必ずきれい」「SD1.5系は古いから使えない」という話ではありません。実際の結果は、使うモデルの調整内容、プロンプト、ワークフローによって大きく変わります。</p>

            <h3>ワークフローの違い</h3>
            <p>SD1.5系とSDXL系では、ComfyUIで使うワークフローが変わることがあります。</p>
            <p>たとえば、画像サイズの目安やノード構成が違うため、モデルだけを差し替えればいつでも同じように動く、とは限りません。</p>
            <p>最初は、使うモデルに合ったワークフローを使うと覚えておくと安心です。</p>

            <h2 id="section-4">4. SD1.5系とSDXL系のざっくり比較</h2>
            <p>ここまでの内容を、表にまとめると次のようになります。</p>
            <div className="model-table-scroll">
              <table className="model-comparison-table">
                <thead>
                  <tr>
                    <th>比較するところ</th>
                    <th>SD1.5系</th>
                    <th>SDXL系</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>大きな位置づけ</th>
                    <td>古くから使われている定番系</td>
                    <td>SD1.5より新しい世代</td>
                  </tr>
                  <tr>
                    <th>画像サイズの目安</th>
                    <td>512×512px前後で使われることが多い</td>
                    <td>1024×1024px前後で使われることが多い</td>
                  </tr>
                  <tr>
                    <th>PCへの負荷</th>
                    <td>比較的軽め</td>
                    <td>SD1.5系より重め</td>
                  </tr>
                  <tr>
                    <th>得意な方向</th>
                    <td>軽く試す、既存情報を参考にする、作例を見ながら調整する</td>
                    <td>大きめの画像、背景込みの表現、全体の質感</td>
                  </tr>
                  <tr>
                    <th>情報量・素材</th>
                    <td>古くから使われていて情報や作例が多い</td>
                    <td>新しめだが、情報や作例も増えている</td>
                  </tr>
                  <tr>
                    <th>ワークフロー</th>
                    <td>SD1.5向けの構成を使う</td>
                    <td>SDXL向けの構成を使う</td>
                  </tr>
                  <tr>
                    <th>最初の選び方</th>
                    <td>軽さや作例の多さを重視したい場合</td>
                    <td>新しめの環境や大きめの画像を試したい場合</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>この表は、あくまで大まかな整理です。同じSD1.5系・SDXL系でも、モデルごとに得意な絵柄や使い方は変わります。</p>

            <h2 id="section-5">5. 前回のワークフローで使ったモデルを確認してみる</h2>
            <p>前回の記事では、ComfyUI Portable版を起動して、シンプルなワークフローで最初の1枚を生成する流れを確認しました。</p>
            <RelatedArticleCard />
            <p>今回は、そのワークフローの中で、どのモデルが読み込まれていたのかを確認していきます。</p>
            <p>前回使ったワークフローでは、Load Checkpointノードから <code>v1-5-pruned-emaonly-fp16.safetensors</code> を選んでいました。</p>
            <p>これは、SD1.5 v1.5系のベースモデルを扱いやすくしたFP16版です。この記事では、SD1.5系の例として、この <code>v1-5-pruned-emaonly-fp16.safetensors</code> を使って見ていきます。</p>
            <p>ここで大事なのは、モデルはワークフローの中で選ばれているという点です。ComfyUIでは、プロンプトを書く場所とは別に、モデルを読み込む場所があります。</p>
            <ArticleFigure
              name="model-basic-01-sd15-workflow-model-area.png"
              alt="前回のComfyUIワークフローでLoad Checkpointノードを確認する画面"
              caption="前回使用したワークフローのモデル部分です。Load Checkpointノードで、使用するモデルを選んでいます。"
            />
            <p>ただし、SDXL系では推奨される画像サイズやワークフロー構成が変わることがあります。そのため、SDXL baseを見るときは、SDXL向けのワークフローを使って確認する方が分かりやすいです。</p>

            <h2 id="section-6">6. SD1.5とSDXLではワークフローも違うことがある</h2>
            <p>ComfyUIでは、モデルだけでなくワークフローも大事です。</p>
            <p>SD1.5系とSDXL系では、推奨される画像サイズやノード構成が違うことがあります。そのため、モデルだけを差し替えれば必ず同じように動く、とは限りません。</p>
            <p>今回の記事では、SD1.5側は前回の記事で使ったシンプルなtext-to-imageワークフローをベースにします。一方で、SDXL側はSDXL向けのワークフローを使って確認する想定です。</p>
            <ArticleFigure
              name="model-basic-02-comfyui-sdxl-examples-page.png"
              alt="ComfyUI ExamplesのSDXL Examplesページ"
              caption="ComfyUI ExamplesのSDXL Examplesページです。SDXL baseを使う場合の画像サイズの目安や、base/refinerを使うワークフロー例が紹介されています。"
            />
            <p>SDXL向けのサンプルワークフローでは、baseモデルに加えてrefinerモデルを使う構成が出てくることがあります。</p>
            <p>refinerは仕上げ用のモデルですが、SDXL baseは単体でも使えます。この記事ではrefinerの詳しい使い方までは扱わず、SDXLではSD1.5と比べてワークフロー構成が変わることがある、という点だけ確認します。</p>
            <ArticleFigure
              name="model-basic-03-sdxl-workflow-overview.png"
              alt="SDXL向けワークフロー全体の例"
              caption="SDXL向けワークフローの例です。SD1.5向けのシンプルなワークフローと比べると、画像サイズやノード構成が変わることがあります。"
            />
            <ArticleFigure
              name="model-basic-04-sdxl-base-refiner-area.png"
              alt="SDXLワークフロー内のbaseモデルとrefinerモデル周辺"
              caption="SDXL向けのサンプルワークフローでは、baseモデルに加えてrefinerモデルを使う構成が出てくることがあります。この記事ではrefinerの詳しい使い方までは扱わず、ワークフロー構成の違いとして確認します。"
            />
            <Callout variant="warning">
              SDXLモデルをSD1.5用のワークフローにそのまま組み込むと、想定どおりに動作しないことがあります。まずは使用するモデルに合ったワークフローを選ぶことが重要です。
            </Callout>

            <h2 id="section-7">7. 同じようなプロンプトでも結果は変わる</h2>
            <p>ここでは、近い内容のプロンプトを使って、SD1.5系の例とSDXL系の例で生成結果を見比べます。</p>
            <p>比較に使ったプロンプトの例は、次のような内容です。</p>
            <pre><code>{`Positive:
1girl, short brown hair, gentle smile, white blouse, flower garden, soft natural light, upper body, looking at viewer, soft colors, detailed background, digital illustration, anime-style, soft shading

Negative:
photorealistic, realistic, photo, photography, low quality, bad anatomy, bad hands, extra fingers, missing fingers, blurry, deformed, distorted face, low resolution, text, watermark, logo`}</code></pre>
            <p>この記事では、細かいプロンプトの書き方までは深く扱いません。ここで見たいのは、「近い内容を指定しても、モデルやワークフローが変わると結果の雰囲気が変わる」という点です。</p>
            <figure className="comparison-figure">
              <div className="comparison-grid">
                <figure className="article-figure comparison-item">
                  <img src={`${imageBase}model-basic-06-sd15-output.png`} alt="SD1.5系で生成した花畑の人物イラスト" />
                  <figcaption>SD1.5系の例です。512×512pxで生成しています。比較的シンプルで、淡い雰囲気の出力になっています。</figcaption>
                </figure>
                <figure className="article-figure comparison-item">
                  <img src={`${imageBase}model-basic-07-sdxl-output.png`} alt="SDXL系で生成した花畑の人物イラスト" />
                  <figcaption>SDXL系の例です。1024×1024pxで生成しています。背景や光の表現、画面全体のまとまりに違いが出ています。</figcaption>
                </figure>
              </div>
              <figcaption className="comparison-caption">
                近い内容のプロンプトを使い、SD1.5系の例とSDXL系の例で生成した比較画像です。使用するワークフロー、画像サイズ、seed、設定によって結果は変わるため、あくまで傾向を見るための一例です。
              </figcaption>
            </figure>
            <p>比較するときは、次のような部分を見ると分かりやすいです。</p>
            <ul>
              <li>顔立ち</li>
              <li>線の出方</li>
              <li>色味</li>
              <li>背景の描き込み</li>
              <li>服や小物の質感</li>
              <li>光の雰囲気</li>
              <li>プロンプトの反映され方</li>
            </ul>
            <p>SDXL系の方が新しいから必ず良い、という単純な話ではありません。軽く試したい場合はSD1.5系が扱いやすいこともありますし、目的によってはSD1.5系の方が合う場面もあります。</p>

            <h2 id="section-8">8. 最初はどちらを使えばいい？</h2>
            <p>最初に使うモデルを選ぶときは、「どちらが絶対に正解か」よりも、自分の目的に合っているかで考えると分かりやすいです。</p>
            <p>軽さや情報の多さを重視するなら、SD1.5系から試すのもよいと思います。古くから使われている分、解説や作例が見つけやすく、PCへの負荷も比較的軽めです。</p>
            <p>一方で、今から新しめの環境で覚えていくなら、SDXL系も候補になります。1024×1024px前後の生成や、背景込みのまとまりを見たい場合は、SDXL系の方が合う場面もあります。</p>
            <p>使いたいモデルがすでに決まっている場合は、まずそのモデル向けの説明や推奨設定を確認しておくと安心です。まだ迷う場合は、最初からたくさん入れず、まずは1つに絞って試すのがおすすめです。</p>
            <SelectionFlowPanel title="最初の選び方">
              <ul className="flow-list">
                <li><span>PC負荷を軽くしたい</span><strong>SD1.5系から試す</strong></li>
                <li><span>今から新しめの環境で覚えたい</span><strong>SDXL系も候補</strong></li>
                <li><span>使いたいモデルが決まっている</span><strong>そのモデル向けの説明や推奨設定を確認する</strong></li>
                <li><span>まだ迷う</span><strong>まず1つのモデルに絞って試す</strong></li>
              </ul>
            </SelectionFlowPanel>
            <Callout variant="point">
              最初から多くのモデルを入れると、何が原因で生成結果が変わったのか判断しにくくなります。まずは1つのモデルに絞って使い、慣れてから比較していくのがおすすめです。
            </Callout>

            <h2 id="section-9">9. モデルとプロンプトの関係</h2>
            <p>画像生成では、モデルとプロンプトの両方が結果に関わります。</p>
            <p>プロンプトは、作りたい画像の内容を伝えるためのメモのようなものです。ただし、そのプロンプトをどう受け取るかは、モデルによって変わります。</p>
            <p>たとえば、同じ「white blouse」や「flower garden」という指定でも、モデルによって服の雰囲気や背景の描き方が変わることがあります。同じ単語を書いたからといって、すべてのモデルで同じように出るわけではありません。</p>
            <p>そのため、プロンプト辞書を見るときも、「この単語を書けば必ず同じ絵になる」と考えるより、表現を探しやすくするためのメモとして使う方が自然です。</p>
            <ArticleFigure
              name="model-basic-05-model-and-prompt-nodes.png"
              alt="ComfyUIでモデルを選ぶノードとプロンプトを書くノード"
              caption="ComfyUIでは、モデルを選ぶノードとプロンプトを書くノードが分かれています。同じプロンプトでも、読み込むモデルが変わると生成結果も変わります。"
            />
            <p>プロンプトの詳しい考え方や書き方は、次の記事で整理していきます。今回はまず、「モデルが変わると、同じプロンプトでも結果が変わることがある」と押さえておけば大丈夫です。</p>

            <h2 id="section-10">10. モデルを使うときの注意</h2>
            <p>モデルを使うときは、配布ページに書かれているライセンスや利用条件も確認しておきましょう。</p>
            <p>特に、商用利用・再配布・マージモデルの公開・生成画像の販売などを考えている場合は、使うモデルごとの条件を確認してから進めるのが安全です。</p>
            <Callout variant="warning">
              モデルごとに利用条件は異なります。商用利用や配布、販売を考えている場合は、必ず配布ページのライセンスや利用条件を確認しておきましょう。
            </Callout>

            <h2 id="section-11">11. まとめ</h2>
            <p>今回は、画像生成AIで使う「モデル」の基本と、SD1.5系・SDXL系の違いを整理しました。</p>
            <p>モデルは、画像生成の土台になるものです。同じプロンプトを書いても、使うモデルが変わると、絵柄や質感、構図、背景の描き込み、プロンプトの効き方が変わることがあります。</p>
            <p>SD1.5系とSDXL系は、アニメ系・リアル系といった絵柄ジャンルの名前ではなく、モデルの大きな系統として考えると分かりやすいです。その中に、アニメ寄り、リアル寄り、イラスト寄りなど、さまざまな方向に調整された派生モデルがあります。</p>
            <p>SD1.5系は、比較的軽く、情報や作例が多い定番の系統です。SDXL系は、それより新しい世代で、1024×1024px前後の画像サイズや、背景込みの表現で使われることが多い系統です。</p>
            <p>また、SD1.5とSDXLでは、モデルだけでなくワークフローも合わせて考える必要があります。最初は、使いたいモデルに合ったワークフローを使い、1つずつ違いを確認していくのがおすすめです。</p>
            <Callout variant="info">
              モデルは、画像生成の土台になる重要な要素です。使用するモデルによって同じプロンプトでも結果が変わるため、まずは1つずつ試しながら違いを確認していくと理解しやすくなります。
            </Callout>

            <h2 id="section-12">12. 参考リンク</h2>
            <ul>
              <li><a href="https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0" target="_blank" rel="noopener noreferrer">Stable Diffusion XL base 1.0</a></li>
              <li><a href="https://comfyanonymous.github.io/ComfyUI_examples/" target="_blank" rel="noopener noreferrer">ComfyUI Examples</a></li>
              <li><a href="https://comfyanonymous.github.io/ComfyUI_examples/sdxl/" target="_blank" rel="noopener noreferrer">ComfyUI SDXL Examples</a></li>
            </ul>
        </ArticleBody>
        <ArticleNavigation currentHref="/articles/model-basic" />
      </ContentPageShell>
      <style>{`
        .related-article-card strong {
          overflow-wrap: anywhere;
          word-break: normal;
        }

        .model-structure-panel,
        .model-flow-panel {
          margin: 26px 0 30px;
          padding: 20px 22px;
          border: 1px solid #cfe0f7;
          border-radius: 16px;
          background: #f5f9ff;
        }

        .model-panel-title {
          margin: 0 0 12px !important;
          color: var(--content-text, #242a36);
          font-weight: 800 !important;
        }

        .model-structure-panel > :last-child,
        .model-flow-panel > :last-child {
          margin-bottom: 0;
        }

        .model-structure-panel pre {
          margin-bottom: 0;
          border-color: #dbe6f5;
          background: #fff;
        }

        .model-system-figure {
          margin: 28px 0 34px;
        }

        .model-system-figure figcaption,
        .comparison-caption {
          margin-top: 10px;
          color: var(--content-muted, #5f697b);
          font-size: .84rem;
          font-weight: 600;
          line-height: 1.65;
          text-align: center;
        }

        .model-table-scroll {
          overflow-x: auto;
          margin: 22px 0 24px;
          border: 1px solid #d6e3f4;
          border-radius: 16px;
          background: #fff;
        }

        .model-comparison-table {
          width: 100%;
          min-width: 690px;
          border-collapse: collapse;
        }

        .model-comparison-table th,
        .model-comparison-table td {
          padding: 13px 14px;
          border-bottom: 1px solid #dbe6f5;
          color: var(--content-text, #242a36);
          font-size: .93rem;
          line-height: 1.75;
          text-align: left;
          vertical-align: top;
        }

        .model-comparison-table thead th {
          background: #edf4ff;
          color: #174784;
          font-weight: 800;
        }

        .model-comparison-table tbody th {
          width: 26%;
          background: #f8fbff;
          color: #174784;
          font-weight: 800;
        }

        .model-comparison-table tr:last-child th,
        .model-comparison-table tr:last-child td {
          border-bottom: 0;
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

        .comparison-figure {
          margin: 28px 0 34px;
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          align-items: start;
        }

        .comparison-item {
          margin: 0;
        }

        .comparison-item img {
          aspect-ratio: 1;
          object-fit: cover;
        }

        .flow-list {
          display: grid;
          gap: 12px;
          margin: 0 !important;
          padding: 0 !important;
          list-style: none;
        }

        .flow-list li {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 28px minmax(0, 1fr);
          gap: 8px;
          align-items: stretch;
          margin: 0;
        }

        .flow-list li::before {
          content: "→";
          display: flex;
          align-items: center;
          justify-content: center;
          grid-column: 2;
          grid-row: 1;
          color: var(--content-cyan, #00c6ff);
          font-weight: 800;
          line-height: 1;
        }

        .flow-list span,
        .flow-list strong {
          display: flex;
          align-items: center;
          min-width: 0;
          min-height: 58px;
          padding: 12px 14px;
          border: 1px solid #d6e3f4;
          border-radius: 12px;
          background: #fff;
          color: var(--content-text, #242a36);
          font-size: .95rem;
          line-height: 1.6;
        }

        .flow-list strong {
          grid-column: 3;
          border-color: #bfd6f5;
          background: #edf5ff;
          color: #174784;
          font-weight: 800;
        }

        @media (min-width: 761px) {
          .model-basic-hero > figure {
            height: 450px;
          }
        }

        @media (max-width: 760px) {
          .comparison-grid {
            grid-template-columns: 1fr;
          }

          .model-structure-panel,
          .model-flow-panel {
            padding: 18px 16px;
          }

          .flow-list li {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .flow-list {
            gap: 0;
          }

          .flow-list li + li {
            margin-top: 10px;
            padding-top: 12px;
            border-top: 1px solid #dbe6f5;
          }

          .flow-list li::before {
            content: "↓";
            grid-column: 1;
            grid-row: 2;
            min-height: 18px;
          }

          .flow-list strong {
            grid-column: 1;
            grid-row: 3;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .related-article-card {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
