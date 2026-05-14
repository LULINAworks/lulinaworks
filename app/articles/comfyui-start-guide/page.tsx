import type { Metadata } from "next";
import { ArticleNavigation } from "@/components/ArticleNavigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const title = "ComfyUIの始め方｜Portable版の導入から画像生成まで";
const description =
  "ComfyUI Portable版の導入から、公式Text to Image Workflowを使った画像生成までの流れをまとめました。SD1.5モデルの用意、ワークフローの読み込み、最初の1枚を生成するまでを順番に確認できます。";
const canonicalUrl = "https://lulinaworks.com/articles/comfyui-start-guide";
const imageBase = "/assets/articles/comfyui-start-guide/";
const ogImage = "/assets/og/og-comfyui-start-guide.png";

const toc = [
  "ComfyUI Portable版をダウンロードする",
  "ダウンロードしたファイルを展開する",
  "公式Text to Image Workflowを確認する",
  "公式案内に沿ってSD1.5モデルをダウンロードする",
  "モデルファイルをcheckpointsフォルダに入れる",
  "ComfyUIを起動する",
  "ComfyUIの表示を日本語にする",
  "公式ワークフロー画像を読み込む",
  "まずは公式ワークフローのプロンプトで生成してみる",
  "テキストプロンプトを自分で書き換えてみる",
  "生成された画像を確認する",
  "うまく動かないときの確認",
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
}: {
  children: React.ReactNode;
  tone?: "point" | "recommend" | "warning" | "reassure";
}) {
  const speechTone = tone === "reassure" ? "recommend" : tone;
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
  const image = imageMap[speechTone];

  return (
    <aside className="lulina-speech" aria-label="ルリナのメモ">
      <img src={image.src} alt={image.alt} />
      <div className="lulina-bubble">
        <span>ルリナ</span>
        <p>{children}</p>
      </div>
    </aside>
  );
}

export default function ComfyuiStartGuidePage() {
  return (
    <>
      <Header />
      <main className="article-main">
        <article className="article-shell" id="article-top">
          <header className="article-header">
            <div className="article-header-copy">
              <a className="back-link" href="/articles">記事一覧へ戻る</a>
              <span className="page-kicker">ComfyUI</span>
              <h1>{title}</h1>
              <p>
                Windows向けComfyUI Portable版の導入から、公式Text to Image Workflowを使って最初の画像生成を行うまでの流れをまとめます。
              </p>
            </div>
          </header>

          <section className="article-content">
            <h2 id="intro">はじめに</h2>
            <p>ComfyUIは、画像生成の流れを「ノード」と呼ばれるパーツで組み立てて使うツールです。</p>
            <p>
              最初に画面を見ると、四角いボックスや線が並んでいて少し複雑に見えるかもしれません。ただ、基本の流れに沿って進めれば、最初の1枚を生成するところまではそこまで難しくありません。
            </p>
            <p>
              この記事では、Windows向けのPortable版を使って、ComfyUIを導入し、公式のText to Image Workflowを読み込み、画像を生成するところまでを順番にまとめます。
            </p>
            <p>
              今回は、ComfyUI公式ドキュメントで紹介されている流れに沿って進めます。モデルについても、公式ページで案内されているSD1.5モデルを使って、まずは基本の動作確認をしていきます。
            </p>
            <h2 id="article-summary">この記事でわかること</h2>
            <LulinaSpeech tone="recommend">
              ComfyUI Portable版は、必要なファイルを用意して起動できれば、まずはシンプルなワークフローで画像生成まで進められるよ。
              この記事では、導入・起動・画面の見方・最初の1枚生成までを順番に確認していくよ。
              読み終えるころには、ComfyUIで画像を出すまでの全体の流れをつかみやすくなるよ。
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

            <h2 id="section-1">1. ComfyUI Portable版をダウンロードする</h2>
            <p>まずは、ComfyUIのPortable版をダウンロードします。</p>
            <p>
              Portable版は、ComfyUI本体と実行に必要な環境がまとまっているWindows向けの形式です。最初にComfyUIを試す場合は、このPortable版を使うと進めやすいです。
            </p>
            <p>
              ダウンロードは、
              <a href="https://docs.comfy.org/ja/installation/comfyui_portable_windows" target="_blank" rel="noopener noreferrer">
                ComfyUI公式ドキュメントのPortable版ページ
              </a>
              から行います。
            </p>
            <ArticleFigure
              name="comfyui-start-guide-01-portable-docs.png"
              alt="ComfyUI Portable版の公式ドキュメント"
              caption="ComfyUI Portable版の公式ドキュメント。Windows向けのPortable版をここからダウンロードします。"
            />
            <p>ページ内の「ComfyUI Portable のダウンロード」から、使用している環境に合ったものを選びます。</p>
            <p>NVIDIAのGPUを使う場合は、「Nvidia GPU 向け標準ポータブル版」を選びます。</p>
            <ArticleFigure
              name="comfyui-start-guide-02-portable-download.png"
              alt="ComfyUI Portable版のダウンロード箇所"
              caption="使用しているGPUに合わせて、Portable版をダウンロードします。"
            />

            <h2 id="section-2">2. ダウンロードしたファイルを展開する</h2>
            <p>ダウンロードした圧縮ファイルを、任意の場所に展開します。</p>
            <p>たとえば、以下のような場所に置くと管理しやすいです。</p>
            <pre><code>D:\ComfyUI_windows_portable\</code></pre>
            <p>フォルダ名や保存場所は自由ですが、あとから見つけやすい場所にしておくと安心です。</p>
            <p>
              展開したフォルダの中には、<code>ComfyUI</code>、<code>python_embeded</code>、<code>run_nvidia_gpu.bat</code> などのファイルやフォルダが入っています。
            </p>
            <p>NVIDIAのGPUを使う場合は、基本の起動用として <code>run_nvidia_gpu.bat</code> を使います。</p>
            <ArticleFigure
              name="comfyui-start-guide-03-extracted-folder.png"
              alt="Portable版を展開したフォルダ"
              caption="Portable版を展開したフォルダ。NVIDIA GPUを使う場合は run_nvidia_gpu.bat から起動します。"
            />
            <LulinaSpeech>
              長く使うなら、専用フォルダを作っておくと管理しやすいよ。あとからモデルや出力画像が増えても、場所が分かりやすくなるからね。
            </LulinaSpeech>

            <h2 id="section-3">3. 公式Text to Image Workflowを確認する</h2>
            <p>ComfyUIで画像を生成するには、ComfyUI本体とは別に、画像生成に使うモデルファイルが必要です。</p>
            <p>
              最初は「どのモデルを使えばいいの？」と迷いやすいところですが、今回は
              <a href="https://docs.comfy.org/ja/tutorials/basic/text-to-image" target="_blank" rel="noopener noreferrer">
                ComfyUI公式ドキュメントの Text to Image Workflow
              </a>
              に沿って進めます。
            </p>
            <p>
              公式ページでは、<code>ComfyUI/models/checkpoints</code> フォルダ内に、少なくとも1つのSD1.5モデルファイルを入れておくよう案内されています。
            </p>
            <p>例として紹介されているのが、<code>v1-5-pruned-emaonly-fp16.safetensors</code> です。</p>
            <ArticleFigure
              name="comfyui-start-guide-05-official-model-guide.png"
              alt="公式ページ内のSD1.5モデル案内"
              caption="公式ページでは、SD1.5モデルファイルを ComfyUI/models/checkpoints に入れるよう案内されています。"
            />
            <LulinaSpeech>
              最初は公式の流れに合わせると迷いにくいよ。モデル選びで止まるより、まずは動かしてみるところまで進めてみよう。
            </LulinaSpeech>

            <h2 id="section-4">4. 公式案内に沿ってSD1.5モデルをダウンロードする</h2>
            <p>
              公式Text to Image Workflowのページ内には、SD1.5モデルファイルの例として <code>v1-5-pruned-emaonly-fp16.safetensors</code> が紹介されています。
            </p>
            <p>今回は、この公式案内に沿ってモデルを用意します。</p>
            <p>流れは次のようになります。</p>
            <ol>
              <li>ComfyUI公式 Text to Image Workflow のページを開く</li>
              <li><code>v1-5-pruned-emaonly-fp16.safetensors</code> のリンクをクリックする</li>
              <li>リンク先のHugging Faceページで download を押す</li>
              <li>ダウンロードが完了したら、モデルファイルをComfyUIの checkpoints フォルダに入れる</li>
            </ol>
            <p>モデルファイルはサイズが大きいため、ダウンロードに時間がかかる場合があります。</p>
            <p>
              また、モデルごとに配布条件や利用範囲が異なることがあります。ダウンロードする際は、配布元の説明やライセンスもあわせて確認してください。
            </p>
            <ArticleFigure
              name="comfyui-start-guide-06-huggingface-download.png"
              alt="Hugging Faceのdownloadボタン"
              caption="リンク先のHugging Faceページで download を押してモデルをダウンロードします。"
            />

            <h2 id="section-5">5. モデルファイルをcheckpointsフォルダに入れる</h2>
            <p>
              ダウンロードした <code>v1-5-pruned-emaonly-fp16.safetensors</code> を、ComfyUIの checkpoints フォルダに入れます。
            </p>
            <p>保存先は次の場所です。</p>
            <pre><code>ComfyUI\models\checkpoints</code></pre>
            <p>Portable版を <code>D:\ComfyUI_windows_portable\</code> に展開した場合は、次のような場所になります。</p>
            <pre><code>D:\ComfyUI_windows_portable\ComfyUI\models\checkpoints</code></pre>
            <p>このフォルダにモデルファイルを入れておくと、あとでComfyUI内の「チェックポイントを読み込む」ノードから選べるようになります。</p>
            <ArticleFigure
              name="comfyui-start-guide-04-checkpoints-model.png"
              alt="checkpointsフォルダにモデルを入れた状態"
              caption="checkpoints フォルダに、SD1.5モデルファイルを入れた状態です。"
            />
            <p>すでにComfyUIを起動している場合は、モデル追加後に再起動しておくと安心です。</p>
            <LulinaSpeech>
              モデルを入れたのに一覧に出ないときは、ComfyUIを再起動してみよう。あとから追加したモデルは、読み込み直しが必要なことがあるよ。
            </LulinaSpeech>

            <h2 id="section-6">6. ComfyUIを起動する</h2>
            <p>モデルファイルを配置したら、ComfyUIを起動します。</p>
            <p>NVIDIAのGPUを使う場合は、Portable版フォルダ内の以下のファイルをダブルクリックします。</p>
            <pre><code>run_nvidia_gpu.bat</code></pre>
            <p>起動すると、黒いコンソール画面が表示されます。しばらく待つと、ブラウザでComfyUIの画面が開きます。</p>
            <ArticleFigure
              name="comfyui-start-guide-07-console-startup.png"
              alt="ComfyUI起動中のコンソール画面"
              caption="ComfyUI起動中のコンソール画面。この画面はComfyUI本体が動いている画面なので、使用中は閉じないようにします。"
            />
            <p>ブラウザが自動で開かない場合は、黒い画面に表示されているURLを確認します。多くの場合は、以下のようなURLです。</p>
            <pre><code>http://127.0.0.1:8188/</code></pre>
            <LulinaSpeech tone="warning">
              黒い画面は閉じないでね。ComfyUI本体が動いている画面だから、閉じるとブラウザ側も使えなくなるよ。
            </LulinaSpeech>

            <h2 id="section-7">7. ComfyUIの表示を日本語にする</h2>
            <p>この記事では、日本語表示のComfyUI画面をもとに説明します。</p>
            <p>ComfyUIが英語で表示されている場合は、画面左下の歯車マークを開き、表示言語を日本語に変更します。</p>
            <p>
              日本語化すると、ノード名やボタン名が日本語で表示されます。この記事内の説明も、日本語表示に合わせて進めます。
            </p>
            <p>
              たとえば、英語表示では <code>Load Checkpoint</code> と表示される部分は、日本語表示では「チェックポイントを読み込む」と表示されます。
            </p>

            <h2 id="section-8">8. 公式ワークフロー画像を読み込む</h2>
            <p>今回は、ComfyUI公式ドキュメントで紹介されている基本的なText to Image Workflowを使って生成していきます。</p>
            <p>公式ページにはワークフロー画像が用意されています。この画像をComfyUIの画面にドラッグ＆ドロップすると、同じワークフローを読み込めます。</p>
            <p>また、公式ページ内の補足にもあるように、メニューの <code>Workflows → Open</code> から読み込むこともできます。</p>
            <ArticleFigure
              name="comfyui-start-guide-09-official-workflow-image.png"
              alt="公式ページ内のワークフロー画像"
              caption="公式ページ内のワークフロー画像。この画像をComfyUIへドラッグ＆ドロップして読み込みます。"
            />
            <p>ワークフローを読み込むと、ComfyUIの画面上に複数のノードが表示されます。</p>
            <ArticleFigure
              name="comfyui-start-guide-08-workflow-loaded.png"
              alt="公式ワークフローを読み込んだComfyUI画面"
              caption="公式ワークフローをComfyUIに読み込んだ状態です。"
            />
            <p>このワークフローには、モデルの読み込み、プロンプト入力、画像生成、保存までの基本的な流れが含まれています。</p>
            <LulinaSpeech>
              まずは公式ワークフローをそのまま読み込んでみよう。自分でノードを組むのは、流れを確認してからで大丈夫だよ。
            </LulinaSpeech>

            <h2 id="section-9">9. まずは公式ワークフローのプロンプトで生成してみる</h2>
            <p>ワークフローを読み込んだら、最初は中身を大きく変えずに、そのまま生成してみます。</p>
            <p>まず、「チェックポイントを読み込む」ノードで、先ほど用意したSD1.5モデルが選択されていることを確認します。</p>
            <ArticleFigure
              name="comfyui-start-guide-10-checkpoint-node.png"
              alt="チェックポイントを読み込むノードでモデルを選択"
              caption="「チェックポイントを読み込む」ノードで、v1-5-pruned-emaonly-fp16.safetensors が選択されている状態です。"
            />
            <p>モデルが選択できていることを確認したら、画面右上の 実行する を押します。</p>
            <ArticleFigure
              name="comfyui-start-guide-11-run-button.png"
              alt="右上の実行するボタン"
              caption="画面右上の「実行する」を押すと、ワークフローが実行されます。"
            />
            <p>生成が終わると、「画像を保存」ノードの中に生成結果が表示されます。</p>
            <ArticleFigure
              name="comfyui-start-guide-12-first-result.png"
              alt="公式ワークフローのプロンプトで生成された結果"
              caption="公式ワークフローのプロンプトで生成された画像です。"
            />
            <p>ここまでできれば、ComfyUIの基本的な動作確認はできています。</p>

            <h2 id="section-10">10. テキストプロンプトを自分で書き換えてみる</h2>
            <p>公式ワークフローのまま生成できたら、次にプロンプトを書き換えてみます。</p>
            <p>ワークフロー内には、CLIP テキスト エンコード（プロンプト）というノードが2つあります。</p>
            <p>上にある入力欄が、生成したい内容を書くポジティブプロンプトです。下にある入力欄が、避けたい内容を書くネガティブプロンプトです。</p>
            <ArticleFigure
              name="comfyui-start-guide-13-positive-negative-prompt.png"
              alt="上がポジティブ、下がネガティブの入力欄"
              caption="上の入力欄がポジティブプロンプト、下の入力欄がネガティブプロンプトです。"
            />
            <p>ポジティブプロンプトには、生成したい内容を書きます。最初は短い内容で十分です。</p>
            <pre><code>1girl, portrait, smile</code></pre>
            <p>ネガティブプロンプトには、避けたい要素を書きます。</p>
            <pre><code>low quality, bad anatomy, blurry</code></pre>
            <p>書き換えると、次のようになります。</p>
            <ArticleFigure
              name="comfyui-start-guide-14-edited-prompt.png"
              alt="プロンプトを書き換えた状態"
              caption="ポジティブプロンプトとネガティブプロンプトを書き換えた状態です。"
            />
            <p>書き換えたら、もう一度 実行する を押して生成します。テキストを変えることで、生成される画像の内容が変わることを確認できます。</p>
            <ArticleFigure
              name="comfyui-start-guide-15-edited-result.png"
              alt="書き換え後に生成された画像"
              caption="プロンプトを書き換えたあとに生成された画像です。"
            />
            <LulinaSpeech>
              最初のプロンプトは短くてOK。まずは「文字を変えると画像も変わる」感覚をつかんでみよう。
            </LulinaSpeech>

            <h2 id="section-11">11. 生成された画像を確認する</h2>
            <p>生成された画像はComfyUIの画面上で確認でき、左側の アセット をクリックすると一覧が表示されます。</p>
            <ArticleFigure
              name="comfyui-start-guide-16-assets-panel.png"
              alt="左側のアセットを開いた画像一覧"
              caption="左側の「アセット」を開くと、生成済みの画像を一覧で確認できます。"
            />
            <p>また、通常はComfyUIフォルダ内の output フォルダにも保存されます。</p>
            <pre><code>ComfyUI\output</code></pre>
            <ArticleFigure
              name="comfyui-start-guide-17-output-folder-result.png"
              alt="outputフォルダに保存された画像"
              caption="生成された画像は、ComfyUIの output フォルダにも保存されます。"
            />
            <p>ComfyUI上で画像が表示され、output フォルダにも保存されていれば、最初の画像生成は成功です。</p>
            <LulinaSpeech tone="recommend">
              ここまでできれば、ComfyUIの導入と基本的な動作確認は完了だよ。まずは1枚出せたことを成功ラインにしよう。
            </LulinaSpeech>

            <h2 id="section-12">12. うまく動かないときの確認</h2>
            <p>ComfyUIが起動しない、モデルが選べない、画像が生成されない場合は、まず以下を確認します。</p>
            <ul>
              <li>黒いコンソール画面に赤いエラーが出ていないか</li>
              <li>モデルファイルを checkpoints フォルダに入れているか</li>
              <li>モデルファイルの拡張子が <code>.safetensors</code> または <code>.ckpt</code> になっているか</li>
              <li>モデル配置後にComfyUIを再起動したか</li>
              <li>フォルダパスが複雑すぎないか</li>
              <li>GPUのVRAMが不足していないか</li>
            </ul>
            <p>
              特に、モデルファイルの置き場所はつまずきやすいポイントです。<code>ComfyUI\models\checkpoints</code> に入っているかをもう一度確認してみてください。
            </p>
            <p>
              また、ComfyUIが動いている間は、起動時に開いた黒いコンソール画面を閉じないようにします。閉じてしまった場合は、もう一度 <code>run_nvidia_gpu.bat</code> から起動し直します。
            </p>
            <LulinaSpeech tone="warning">
              エラーが出たときは、まず黒い画面を見てみよう。どこで止まっているかのヒントが書かれていることが多いよ。
            </LulinaSpeech>

            <h2 id="section-13">まとめ</h2>
            <p>この記事では、ComfyUI Portable版を使って、導入から最初の画像生成までの流れをまとめました。</p>
            <p>流れを整理すると、次のようになります。</p>
            <ol>
              <li>ComfyUI Portable版をダウンロードする</li>
              <li>ファイルを展開する</li>
              <li>公式Text to Image Workflowを確認する</li>
              <li>公式案内に沿ってSD1.5モデルをダウンロードする</li>
              <li>モデルを checkpoints フォルダに入れる</li>
              <li>ComfyUIを起動する</li>
              <li>表示言語を日本語にする</li>
              <li>公式ワークフロー画像を読み込む</li>
              <li>まず公式の状態で生成する</li>
              <li>プロンプトを書き換えてもう一度生成する</li>
              <li>生成結果を確認する</li>
            </ol>
            <p>
              最初は画面が複雑に見えますが、基本の流れはそこまで多くありません。まずは公式の流れに沿って、1枚生成できるところまで進めてみてください。
            </p>
            <p>
              SDXLやPony系などのモデルもComfyUIで使えますが、推奨設定やプロンプトの考え方が変わる部分があります。そのあたりは、別の記事で整理していく予定です。
            </p>
            <LulinaSpeech tone="recommend">
              まずは基本ワークフローで1枚出せれば大丈夫。次は、プロンプトの書き方や設定の意味も少しずつ見ていこう。
            </LulinaSpeech>
          </section>
          <ArticleNavigation currentHref="/articles/comfyui-start-guide" />
        </article>
      </main>
      <Footer />
    </>
  );
}
