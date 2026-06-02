import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArticleNavigation } from "@/components/ArticleNavigation";
import { ArticlePublishedDate } from "@/components/ArticlePublishedDate";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const title = "Animaの絵柄はどう変わる？スタイル系プロンプト10種類を作例で比較";
const description =
  "Animaにスタイル系プロンプトを追加したときの絵柄・塗り・雰囲気の違いを、1人イラストと複数人シーンの作例で比較します。";
const canonicalUrl = "https://lulinaworks.com/articles/anima-style-compare";
const imageBase = "/assets/articles/anima-style-compare/";
const heroImage = `${imageBase}anima-style-scene-anime-screenshot.webp`;
const ogImage = "/assets/og/ogp-anima-style-compare.png";

const toc = [
  "今回の比較条件",
  "比較するスタイル系プロンプト一覧",
  "白背景・1人イラストで比較",
  "複数人シーンでも比較",
  "注意点",
  "まとめ",
];

const singleStyleItems = [
  {
    heading: "anime screenshot",
    tag: "anime screenshot",
    a: "anima-style-single-anime-screenshot-seed-a.webp",
    b: "anima-style-single-anime-screenshot-seed-b.webp",
    text: [
      "anime screenshot は、アニメの1カットのような見た目に寄せたいときのタグです。",
      "線が比較的すっきりまとまり、髪や首元、服まわりにアニメ調のシェーディングが自然に入っているように見えます。",
      "Animaのアニメ調を保ちながら、画面のまとまりを少し強める印象でした。",
    ],
  },
  {
    heading: "retro artstyle",
    tag: "retro artstyle",
    a: "anima-style-single-retro-artstyle-seed-a.webp",
    b: "anima-style-single-retro-artstyle-seed-b.webp",
    text: [
      "retro artstyle は、昔のアニメやセル画風の雰囲気に寄せたいときのタグです。",
      "髪色や肌の影がかなりはっきり出て、線も強めになりました。",
      "全体的に色の主張が強く、レトロなアニメ絵に近づく印象です。",
    ],
  },
  {
    heading: "90s anime style",
    tag: "90s anime style",
    a: "anima-style-single-90s-anime-style-seed-a.webp",
    b: "anima-style-single-90s-anime-style-seed-b.webp",
    text: [
      "90s anime style は、90年代アニメらしい絵柄に寄せたいときのタグです。",
      "retro artstyle と比べると、目がより大きくなり、顔まわりの特徴も強く出ています。",
      "色や線の主張もはっきりしていて、昔のアニメらしいデフォルメ感が強まる印象でした。",
    ],
  },
  {
    heading: "pastel colors",
    tag: "pastel colors",
    a: "anima-style-single-pastel-colors-seed-a.webp",
    b: "anima-style-single-pastel-colors-seed-b.webp",
    text: [
      "pastel colors は、色味を淡く柔らかい方向に寄せたいときのタグです。",
      "今回の作例では、髪や肌、服の影が全体的に薄くなり、明るくやさしい印象になりました。",
      "絵柄そのものを大きく変えるというより、画面全体の色の雰囲気を整えるタグに見えます。",
    ],
  },
  {
    heading: "flat color",
    tag: "flat color",
    a: "anima-style-single-flat-color-seed-a.webp",
    b: "anima-style-single-flat-color-seed-b.webp",
    text: [
      "flat color は、塗りをシンプルで平面的な方向に寄せたいときのタグです。",
      "今回の作例では、影や質感の情報が抑えられ、髪や服がすっきりした面でまとまりました。",
      "派手さは控えめですが、比較用の画像や説明用のイラストでは見やすく使いやすい印象です。",
    ],
  },
  {
    heading: "painterly",
    tag: "painterly",
    a: "anima-style-single-painterly-seed-a.webp",
    b: "anima-style-single-painterly-seed-b.webp",
    text: [
      "painterly は、絵画調のやわらかい雰囲気に寄せたいときのタグです。",
      "今回の作例では、線の主張が少し弱まり、髪や肌の塗り、光の入り方がなめらかになりました。",
      "アニメ塗りをはっきり見せるというより、空気感のある一枚絵に近づく印象です。",
    ],
  },
  {
    heading: "watercolor",
    tag: "watercolor",
    a: "anima-style-single-watercolor-seed-a.webp",
    b: "anima-style-single-watercolor-seed-b.webp",
    text: [
      "watercolor は、水彩風の淡くやわらかい質感に寄せたいときのタグです。",
      "今回の作例では、髪や服の色が明るくにじむようにまとまり、線の主張も少し弱まりました。",
      "painterly よりも軽く、透明感のある雰囲気に近づく印象です。",
    ],
  },
  {
    heading: "sketch",
    tag: "sketch",
    a: "anima-style-single-sketch-seed-a.webp",
    b: "anima-style-single-sketch-seed-b.webp",
    text: [
      "sketch は、ラフな線や描き途中のような雰囲気に寄せたいときのタグです。",
      "今回の作例では、輪郭や服の線がやや粗くなり、塗りよりも線のニュアンスが目立ちました。",
      "完成イラストというより、下描き感のあるやわらかいスケッチ風の印象です。",
    ],
  },
  {
    heading: "game cg",
    tag: "game cg",
    a: "anima-style-single-game-cg-seed-a.webp",
    b: "anima-style-single-game-cg-seed-b.webp",
    text: [
      "game cg は、ゲームのイベントCGやキャラクターイラストのような見た目に寄せたいときのタグです。",
      "アニメの1カットというより、一枚絵として整ったキャラクター画像に近づく印象でした。",
      "Seedによって絵柄の幅はありますが、完成イラスト寄りに見えます。",
    ],
  },
  {
    heading: "realistic",
    tag: "realistic",
    a: "anima-style-single-realistic-seed-a.webp",
    b: "anima-style-single-realistic-seed-b.webp",
    text: [
      "realistic は、リアル寄りの見た目にどのくらい変化するかを見るため、実験的に入れたタグです。",
      "Animaはアニメ・イラスト寄りの画像を中心に学習されたモデルなので、実写系を安定して狙うというより、絵柄の変化幅を見るための比較枠として扱っています。",
      "今回の1人作例では、顔立ちや肌、髪の質感が半リアル寄りになりました。",
    ],
  },
];

const sceneStyleItems = [
  {
    heading: "anime screenshot",
    tag: "anime screenshot",
    name: "anima-style-scene-anime-screenshot.webp",
    text: [
      "anime screenshot は、複数人シーンでもアニメの1カットらしい見た目になりました。",
      "背景やテーブルまわりも含めて画面全体がまとまり、会話シーンとして自然に見えます。",
      "1人イラストよりも、日常シーンのスクリーンショット感が分かりやすい印象です。",
    ],
  },
  {
    heading: "90s anime style",
    tag: "90s anime style",
    name: "anima-style-scene-90s-anime-style.webp",
    text: [
      "90s anime style は、複数人シーンでも90年代アニメらしいデフォルメ感がはっきり出ました。",
      "特に目の大きさや色の強さが目立ち、anime screenshot よりも年代感のある絵柄に寄っています。",
      "背景を含めたシーン全体よりも、キャラクターの顔立ちや作画の変化が分かりやすい印象です。",
    ],
  },
  {
    heading: "flat color",
    tag: "flat color",
    name: "anima-style-scene-flat-color.webp",
    text: [
      "flat color は、複数人シーンでは1人イラスト以上に変化が分かりやすく出ました。",
      "今回の作例では、背景や服の影が整理され、色面と線で構成されたシンプルな見た目になっています。",
      "今回のようなシーンでは、全体を少しフラットに見せる方向で効いているように感じます。",
    ],
  },
  {
    heading: "game cg",
    tag: "game cg",
    name: "anima-style-scene-game-cg.webp",
    text: [
      "game cg は、複数人シーンでもキャラクターの見栄えが出やすく、イベントCGのような雰囲気になりました。",
      "anime screenshot よりも、アニメの1カットというより一枚絵として整った印象が強めです。",
      "今回の作例でも、2人の表情や服の見え方に特徴が出ていました。",
    ],
  },
  {
    heading: "watercolor",
    tag: "watercolor",
    name: "anima-style-scene-watercolor.webp",
    text: [
      "watercolor は、複数人シーンでは絵柄への反映がやや控えめでした。",
      "今回の作例では、背景や光の入り方が明るくやわらかくなり、全体的に淡い雰囲気にまとまっています。",
      "キャラクターの絵柄そのものより、シーン全体の空気感に出るタイプの変化に見えました。",
    ],
  },
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

function RelatedAnimaCard() {
  return (
    <a className="related-article-card" href="/articles/anima-basic">
      <span>前回の記事</span>
      <strong>Animaとは？ComfyUIで試して感じた特徴と注意点</strong>
      <p>AnimaをComfyUIで試し、タグ形式・自然文形式の違いや注意点を整理しています。</p>
    </a>
  );
}

function DictionaryLinkCard() {
  return (
    <a className="related-article-card" href="/dictionary">
      <span>プロンプト辞書</span>
      <strong>AIイラスト制作に使えるプロンプト辞書</strong>
      <p>AIイラスト制作で使いやすいプロンプトを、カテゴリごとにサンプル付きで整理しています。</p>
    </a>
  );
}

function SingleStyleCompare({
  heading,
  tag,
  a,
  b,
  text,
}: {
  heading: string;
  tag: string;
  a: string;
  b: string;
  text: string[];
}) {
  const id = heading.replaceAll(" ", "-");

  return (
    <section className="style-compare-block" aria-labelledby={`single-${id}`}>
      <h3 id={`single-${id}`}>{heading}</h3>
      <figure className="single-compare-figure">
        <div className="single-compare-grid">
          <figure>
            <img src={`${imageBase}${a}`} alt={`Animaで ${tag} を指定した1人イラストの比較 Seed A`} />
            <figcaption>Seed A</figcaption>
          </figure>
          <figure>
            <img src={`${imageBase}${b}`} alt={`Animaで ${tag} を指定した1人イラストの比較 Seed B`} />
            <figcaption>Seed B</figcaption>
          </figure>
        </div>
        <figcaption>{tag} を指定した1人イラストの比較</figcaption>
      </figure>
      {text.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  );
}

function SceneStyleCompare({
  heading,
  tag,
  name,
  text,
}: {
  heading: string;
  tag: string;
  name: string;
  text: string[];
}) {
  const id = heading.replaceAll(" ", "-");

  return (
    <section className="style-compare-block" aria-labelledby={`scene-${id}`}>
      <h3 id={`scene-${id}`}>{heading}</h3>
      <ArticleFigure
        name={name}
        alt={`Animaで ${tag} を指定した複数人シーンの比較`}
        caption={`${tag} を指定した複数人シーン`}
      />
      {text.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  );
}

export default function AnimaStyleComparePage() {
  return (
    <>
      <Header />
      <main className="article-main anima-style-compare-page">
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
            <ArticlePublishedDate href="/articles/anima-style-compare" />
            <h2 id="intro">はじめに</h2>
            <p>前回の記事では、AnimaをComfyUIで試しながら、タグ形式・自然文形式の違いや、使う前に知っておきたい注意点を整理しました。</p>
            <p>
              Animaはベースモデルとして使える幅がある一方で、生成していると、同じような内容のプロンプトでも絵柄や雰囲気に差が出る場面があります。
              特に、アニメ調・レトロ調・水彩風・ゲームCG風のようなスタイル系プロンプトを加えると、画像全体の見え方が変わることがあります。
            </p>
            <p>
              そこで今回は、Animaの絵柄に絞って、スタイル系プロンプトを比較していきます。
              同じ共通プロンプトを使い、最後に入れるスタイル系プロンプトだけを差し替えて、どのような違いが出るかを作例で確認します。
            </p>
            <p>前回の記事はこちらです。</p>
            <RelatedAnimaCard />

            <h2 id="article-summary">この記事でわかること</h2>
            <LulinaSpeech tone="recommend" label="ルリナ">
              Animaでスタイル系プロンプトを足したときに、絵柄や塗りがどのくらい変わるのかを作例で見ていくよ。
              <br />
              1人イラストと複数人シーンの両方で比べるから、タグごとの違いをざっくり確認しやすいと思うよ。
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

            <h2 id="section-1">1. 今回の比較条件</h2>
            <p>今回は、共通プロンプトを固定し、最後に入れる <code>[style tag]</code> だけを差し替えて比較します。</p>
            <div className="anima-style-table-scroll">
              <table className="anima-style-table">
                <thead>
                  <tr>
                    <th>項目</th>
                    <th>設定</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th>Model</th><td>anima-base-v1.0</td></tr>
                  <tr><th>Sampler</th><td>Euler</td></tr>
                  <tr><th>Steps</th><td>40</td></tr>
                  <tr><th>CFG</th><td>5.0</td></tr>
                  <tr><th>1人比較</th><td>1024x1024</td></tr>
                  <tr><th>1人比較 Seed A</th><td>435230025936092</td></tr>
                  <tr><th>1人比較 Seed B</th><td>988292519661244</td></tr>
                  <tr><th>複数人シーン</th><td>1536x864</td></tr>
                  <tr><th>複数人シーン Seed C</th><td>819499044197465</td></tr>
                </tbody>
              </table>
            </div>
            <p>補足として、Anima公式では生成解像度について 512x512px から 1536x1536px 程度の範囲が案内されています。</p>
            <p>
              1人比較と複数人シーンでは、それぞれ別のPositive promptを使っています。
              各Positive promptは、実際の作例を見る前に、それぞれの比較セクション内で掲載します。
            </p>
            <p>ここでは、共通で使用したNegative promptを先に載せておきます。</p>
            <h3>Negative prompt</h3>
            <PromptCode>{`worst quality, low quality, score_1, score_2, score_3, blurry, bad anatomy, bad hands, extra fingers, extra arms, extra legs, missing fingers, text, letters, logo, watermark, signature, artist name`}</PromptCode>

            <h2 id="section-2">2. 比較するスタイル系プロンプト一覧</h2>
            <p>今回は、以下の10種類を比較します。</p>
            <ul>
              <li><code>anime screenshot</code></li>
              <li><code>retro artstyle</code></li>
              <li><code>90s anime style</code></li>
              <li><code>pastel colors</code></li>
              <li><code>flat color</code></li>
              <li><code>painterly</code></li>
              <li><code>watercolor</code></li>
              <li><code>sketch</code></li>
              <li><code>game cg</code></li>
              <li><code>realistic</code></li>
            </ul>
            <p>この記事では、これらを「スタイル系プロンプト」として扱います。</p>

            <h2 id="section-3">3. 白背景・1人イラストで比較</h2>
            <p>
              まずは、白背景の1人イラストで比較します。
              人物・背景・構図をできるだけシンプルにすることで、スタイル系プロンプトによる絵柄や塗りの違いを見やすくしています。
            </p>
            <p>
              今回使った1人比較用の共通プロンプトは以下です。
              最後の <code>[style tag]</code> の部分だけを差し替えています。
            </p>
            <h3>1人比較用 Positive prompt</h3>
            <PromptCode>{`masterpiece, best quality, highres, absurdres, safe,

1girl, solo, upper body, facing viewer, looking at viewer,
soft smile,
blonde hair, medium length hair, green eyes,
simple white blouse,
white background,

[style tag]`}</PromptCode>
            {singleStyleItems.map((item) => (
              <SingleStyleCompare key={item.heading} {...item} />
            ))}

            <h2 id="section-4">4. 複数人シーンでも比較</h2>
            <p>後半では、カフェで2人が会話している横長シーンを使い、いくつかのスタイル系プロンプトを追加して比較します。</p>
            <p>
              今回は、1人比較の中からいくつかピックアップして試しています。
              1人イラストでは分かりやすかったタグでも、背景や人物が増えると反映のされ方が変わる場合がありました。
            </p>
            <p>
              今回使った複数人シーン用の共通プロンプトは以下です。
              こちらも、最後の <code>[style tag]</code> の部分だけを差し替えています。
            </p>
            <h3>複数人比較用 Positive prompt</h3>
            <PromptCode>{`masterpiece, best quality, highres, absurdres, safe,

two girls are sitting together at a small cafe table, talking happily, warm and friendly atmosphere,

2girls, two girls, upper body, medium shot,
indoors, cozy cafe, two cups of coffee on the small round table,
soft smile, cheerful expression, relaxed pose,

girl on the left has short brown hair, amber eyes, white cardigan, light blue blouse,
girl on the right has long black hair, blue eyes, beige knit sweater, red ribbon hair accessory,

natural interaction, sitting side by side, facing each other slightly,
cute, clean composition, detailed eyes,

[style tag]`}</PromptCode>
            {sceneStyleItems.map((item) => (
              <SceneStyleCompare key={item.heading} {...item} />
            ))}

            <h2 id="section-5">5. 注意点</h2>
            <p>スタイル系プロンプトは、共通プロンプトやSeed、構図、画像サイズとの組み合わせによって見え方が変わります。</p>
            <p>今回の作例では変化が控えめだったタグでも、条件を変えて試すことで、また違った雰囲気が出る可能性があります。</p>
            <p>今回の記事では、試した中から変化が見えやすかったものや、比較として見せやすかったものを中心に掲載しています。</p>
            <p>気になるタグは、この記事の結果をひとつの目安にしながら、自分の作りたい絵に合わせて試してみるのがおすすめです。</p>

            <h2 id="section-6">6. まとめ</h2>
            <p>今回は、Animaでスタイル系プロンプトを追加したときの絵柄・塗り・雰囲気の違いを、1人イラストと複数人シーンで比較しました。</p>
            <p>
              白背景の1人イラストでは、<code>anime screenshot</code>、<code>90s anime style</code>、<code>watercolor</code>、<code>sketch</code>、<code>realistic</code> など、それぞれのタグによる違いが比較的見えやすく出ました。
              一方で、複数人シーンでは、背景や人物の関係性が入ることで、タグによって反映のされ方に差が出ました。
            </p>
            <p>スタイル系プロンプトは、単体で絵柄を完全に固定するものというより、画像全体の方向性を調整するための手がかりとして使うと扱いやすい印象です。</p>
            <p>
              LULINAworksでは、髪型などのプロンプト辞書も公開しています。
              今回のようなスタイル系プロンプトと組み合わせながら、作りたい絵に近づけるための指定を探すときに活用してください。
            </p>
            <DictionaryLinkCard />
            <p>今回の比較を目安にしつつ、作りたい絵柄やシーンに合わせて、気になるタグを試してみるのがよさそうです。</p>
          </section>
          <ArticleNavigation currentHref="/articles/anima-style-compare" series="anima" />
        </article>
      </main>
      <Footer />

      <style>{`
        .anima-style-compare-page .article-header {
          background:
            linear-gradient(90deg, rgba(255, 253, 249, 0.94) 0%, rgba(255, 247, 238, 0.86) 48%, rgba(255, 247, 238, 0.2) 78%),
            url("${heroImage}") 58% 42% / cover no-repeat;
        }

        .anima-style-compare-page .article-content h3 {
          margin: 34px 0 14px;
          font-family: var(--font-heading), var(--font-body), sans-serif;
          color: var(--navy);
          font-size: clamp(1.18rem, 2vw, 1.45rem);
          line-height: 1.5;
          font-weight: 900;
          letter-spacing: 0;
        }

        .anima-style-compare-page .article-content p,
        .anima-style-compare-page .article-content li,
        .anima-style-compare-page .article-content a,
        .anima-style-compare-page .lulina-bubble p,
        .anima-style-compare-page .related-article-card strong,
        .anima-style-table th,
        .anima-style-table td {
          overflow-wrap: anywhere;
          word-break: normal;
        }

        .anima-style-table-scroll {
          overflow-x: auto;
          margin: 22px 0 28px;
          border: 1px solid rgba(236, 217, 199, 0.9);
          border-radius: 16px;
          background: #fff;
          box-shadow: 0 10px 22px rgba(48, 39, 31, 0.05);
        }

        .anima-style-table {
          width: 100%;
          min-width: 560px;
          border-collapse: collapse;
        }

        .anima-style-table th,
        .anima-style-table td {
          padding: 13px 15px;
          border-bottom: 1px solid rgba(236, 217, 199, 0.75);
          color: #344563;
          font-size: .95rem;
          line-height: 1.75;
          text-align: left;
          vertical-align: top;
        }

        .anima-style-table thead th {
          background: #fff7ee;
          color: var(--navy);
          font-weight: 900;
        }

        .anima-style-table tbody th {
          color: var(--navy);
          font-weight: 900;
        }

        .anima-style-table tr:last-child th,
        .anima-style-table tr:last-child td {
          border-bottom: 0;
        }

        .style-compare-block {
          margin-top: 42px;
          padding-top: 4px;
        }

        .style-compare-block > h3 {
          margin: 0 0 18px;
          padding: 12px 16px;
          border-left: 5px solid var(--blue);
          border-radius: 0 12px 12px 0;
          background: rgba(255, 247, 238, 0.72);
          font-size: clamp(1.28rem, 2.2vw, 1.62rem);
          font-weight: 900;
          line-height: 1.35;
        }

        .single-compare-figure {
          margin: 24px 0 30px;
        }

        .single-compare-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .single-compare-grid figure {
          margin: 0;
          min-width: 0;
        }

        .single-compare-grid img {
          display: block;
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
          border: 1px solid rgba(236, 217, 199, 0.95);
          border-radius: 14px;
          background: #fff;
          box-shadow: 0 10px 22px rgba(48, 39, 31, 0.08);
        }

        .single-compare-grid figcaption {
          margin-top: 8px;
          color: var(--navy);
          font-size: .88rem;
          font-weight: 900;
          line-height: 1.45;
          text-align: center;
        }

        .single-compare-figure > figcaption {
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
          .anima-style-compare-page {
            overflow-x: clip;
          }

          .anima-style-compare-page .article-header {
            background:
              linear-gradient(180deg, rgba(255, 253, 249, 0.34) 0%, rgba(255, 247, 238, 0.82) 46%, rgba(255, 253, 249, 0.96) 100%),
              url("${heroImage}") center top / cover no-repeat;
          }

          .anima-style-compare-page .article-header,
          .anima-style-compare-page .article-content,
          .anima-style-compare-page .toc-box,
          .anima-style-compare-page .lulina-bubble {
            max-width: 100%;
          }

          .single-compare-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
