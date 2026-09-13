import type { Metadata } from "next";
import { ArticleNavigation } from "@/components/ArticleNavigation";
import { ArticleBody } from "@/components/content/ArticleBody";
import { Callout } from "@/components/content/Callout";
import { ContentHero } from "@/components/content/ContentHero";
import { ContentPageShell } from "@/components/content/ContentPageShell";
import { contentCategoryLabels } from "@/data/content";
import { allPublishedContents } from "@/data/contents";
import styles from "./article.module.css";

const currentHref = "/articles/chatgpt-images-2-5";
const canonicalUrl = "https://lulinaworks.com/articles/chatgpt-images-2-5";
const imageBase = "/assets/articles/chatgpt-images-2-5/";
const ogImage = "/assets/og/og-chatgpt-images-2-5.png";
const contentRecord = allPublishedContents.find((content) => content.href === currentHref);

if (!contentRecord) {
  throw new Error(`Published content is missing for ${currentHref}`);
}

const { title, description, publishedAt, primaryCategory, cardImage } = contentRecord;
const backHref = `/contents?category=${primaryCategory}`;
const lead = "ChatGPT Images 2.5を使って、AIイラストの新規生成や部分編集、人物・絵柄の変更を実際に試してみました。\n今回は1枚の画像を基準に、それぞれの変更がどのように反映されるのかを見ていきます。";
const toc = [
  "今回試す内容",
  "日本語でベース画像を作ってみる",
  "元画像を保ったまま一部分だけ変更できる？",
  "人物そのものを別人に変えられる？",
  "絵柄はどこまで変えられる？",
  "実写寄りに変更するとどうなる？",
  "Animaで作った画像でも絵柄を保ったまま人物変更できる？",
  "使ってみて気づいたこと",
  "まとめ",
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title,
    description,
    url: canonicalUrl,
    siteName: "LULINAworks",
    type: "article",
    locale: "ja_JP",
    images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

const imageSizes: Record<string, readonly [number, number]> = {
  "prompt-example.webp": [1384, 460],
  "base.webp": [1122, 1402],
  "expression-worried.webp": [1122, 1402],
  "clothes-change.webp": [1122, 1402],
  "background-change.webp": [1122, 1402],
  "character-change.webp": [1145, 1374],
  "style-anime.webp": [1024, 1536],
  "style-painted.webp": [1145, 1374],
  "style-photoreal.webp": [1122, 1402],
  "anima-base.webp": [832, 1216],
  "anima-character-change.webp": [1037, 1516],
};

function ArticleFigure({ name, caption }: { name: string; caption: string }) {
  const [width, height] = imageSizes[name];
  return (
    <figure className="article-figure">
      <img
        src={`${imageBase}${name}`}
        alt={caption}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function ChatGptImagesPage() {
  return (
    <ContentPageShell articleId="article-top">
      <ContentHero
        className={styles.articleHero}
        backHref={backHref}
        backLabel="コンテンツ一覧へ"
        category={contentCategoryLabels[primaryCategory]}
        title={
          <>
            <span className={styles.heroTitleLine}>ChatGPT Images 2.5は</span>
            <span className={styles.heroTitleLine}>AIイラスト制作でどう使える？{" "}</span>
            <span className={styles.heroTitleLine}>
              生成・編集・絵柄変更を<br className={styles.mobileTitleBreak} />試してみた
            </span>
          </>
        }
        lead={lead}
        publishedAt={publishedAt}
        eyecatchSrc={cardImage.src}
        eyecatchAlt={title}
        imagePosition={cardImage.position}
        tone="dark"
      />
      <ArticleBody>
        <h2 id="intro">{"はじめに"}</h2>
        <p>{"2026年9月にChatGPT Images 2.5が公開され、画像編集や絵柄の反映などがアップデートされました。"}</p>
        <p>{"ChatGPTでは、日本語でイメージを伝えて画像を作るだけでなく、すでにある画像をもとに一部分を変更することもできます。"}</p>
        <p>{"そこで今回は、機能やスペックを並べるのではなく、"}<strong>{"AIイラスト制作の中で実際にどんな使い方ができるのか"}</strong>{"を作例を見ながら試してみます。"}</p>
        <Callout variant="note">{"厳密に条件を揃えた性能テストではありません。普段ChatGPTを使うときと同じように、日本語でざっくり指示を出しながら、どこまで狙った変化をつけられるのかを見ていきます。"}</Callout>
        <h2 id="article-summary">{"この記事でわかること"}</h2>
        <ul>
          <li>{"日本語の指示からAIイラストを作ると、どんな仕上がりになるか"}</li>
          <li>{"表情・服装・背景だけを変更できるか"}</li>
          <li>{"構図やポーズを残しながら人物を変更できるか"}</li>
          <li>{"絵柄の指定でどのくらい見た目を変えられるか"}</li>
          <li>{"Animaで生成した画像でも、元の絵柄を残しながら人物変更できるか"}</li>
        </ul>
        <nav className="toc-box" aria-labelledby="toc-title">
          <h2 id="toc-title">目次</h2>
          <ol>
            {toc.map((item, index) => (
              <li key={item}><a href={`#section-${index + 1}`}>{item}</a></li>
            ))}
          </ol>
        </nav>
        <h2 id="section-1">{"1. 今回試す内容"}</h2>
        <p>{"最初に1枚のベース画像を作り、その画像をもとに表情や服装、背景などを変更していきます。"}</p>
        <p>{"今回は変更を順番に重ねるのではなく、"}<strong>{"毎回ベース画像から個別に編集"}</strong>{"しています。"}</p>
        <p>{"たとえば、表情を変えた画像からさらに服装を変えるのではなく、「ベース画像から表情変更」「ベース画像から服装変更」という形です。"}</p>
        <p>{"こうしておくと、変更したかった部分以外がどのくらい残っているのかも見比べやすくなります。"}</p>
        <p>{"今回は細かな数値を比較するテストではないので、結果を見ながら「このくらいなら使いやすそう」「ここは思ったより変わった」といった実際の使い勝手も含めて見ていきます。"}</p>
        <h2 id="section-2">{"2. 日本語でベース画像を作ってみる"}</h2>
        <p>{"まずは、今回の基準になる画像を作ります。"}</p>
        <p>{"人物の髪色や目の色、ポーズ、構図などは指定していますが、絵柄についてはあえて細かく指定していません。"}</p>
        <p>{"実際に入力した内容はこちらです。"}</p>
        <pre className="prompt-code"><code>{"若い女性のAIイラスト。人間キャラ。明るめの茶髪〜ダークブロンド、青緑系の目、シンプルで清潔感のある服装。\n\n少し斜め向きで、片手を胸元に軽く添えた自然なポーズ。上半身〜3/4身くらいの構図で、少し動きのある雰囲気。\n\n背景は人物が見やすい落ち着いたもの。全体的に親しみやすく自然な印象で。"}</code></pre>
        <ArticleFigure name={"prompt-example.webp"} caption={"実際にChatGPTへ入力した画面"} />
        <p>{"細かなタグを並べるのではなく、「どんな人物を、どんな構図で作りたいか」を普通の日本語で伝えています。"}</p>
        <p>{"生成された画像がこちらです。"}</p>
        <ArticleFigure name={"base.webp"} caption={"今回のベース画像"} />
        <p>{"明るめの髪色や青緑系の目、少し斜めを向いたポーズなど、指定した特徴はだいたい反映されました。"}</p>
        <p>{"一方で、カーディガンやバッグ、室内の背景までは細かく指定していません。このあたりはChatGPT側で補われていますが、全体としては自然に1枚のイラストとしてまとまっています。"}</p>
        <p>{"今回は絵柄を指定していないこともあり、仕上がりはややセミリアル寄りになりました。"}</p>
        <p>{"この画像を基準にして、まずは表情・服装・背景といった一部分だけを変えてみます。"}</p>
        <h2 id="section-3">{"3. 元画像を保ったまま一部分だけ変更できる？"}</h2>
        <p>{"まずは大きく作り直すのではなく、元画像の一部分だけを変えてみます。"}</p>
        <p>{"今回は表情・服装・背景の3つを、それぞれベース画像から変更しました。"}</p>
        <h3 id="expression">{"3-1. 表情だけを変えてみる"}</h3>
        <p>{"ベース画像はすでにやわらかく微笑んでいるので、違いが分かりやすいように、少し困ったような表情へ変えてみました。"}</p>
        <pre className="prompt-code"><code>{"この画像をベースに、人物の表情だけを笑顔ではない、少し困ったような戸惑いのある表情に変えてください。髪型、服装、ポーズ、構図、背景はなるべくそのまま維持してください。"}</code></pre>
        <div className={styles.comparison}>
          <ArticleFigure name={"base.webp"} caption={"ベース画像"} />
          <ArticleFigure name={"expression-worried.webp"} caption={"表情変更後"} />
        </div>
        <p>{"笑顔がなくなり、目元や口元も含めて少し不安そうな印象に変わりました。"}</p>
        <p>{"一方で、髪型や服装、ポーズ、背景はほとんどそのままです。同じ人物の表情差分として見ても、かなり分かりやすい結果になりました。"}</p>
        <p>{"このくらいの変更であれば、残したい部分を一緒に伝えておくだけでも扱いやすそうです。"}</p>
        <h3 id="clothes">{"3-2. 服装だけを変えてみる"}</h3>
        <p>{"次は、もう少し見た目の変化が大きい服装を試します。"}</p>
        <p>{"ベース画像は白を中心としたやわらかい服装だったので、反対方向に振って、暗めの色を使ったクールでカジュアルな服装を指定しました。"}</p>
        <pre className="prompt-code"><code>{"この画像の人物はそのままにして、服装だけをクールでカジュアル寄りのものに変えてください。暗めのジャケットや落ち着いた色合いにして、髪型、表情、ポーズ、構図、背景はなるべくそのまま維持してください。"}</code></pre>
        <div className={styles.comparison}>
          <ArticleFigure name={"base.webp"} caption={"ベース画像"} />
          <ArticleFigure name={"clothes-change.webp"} caption={"服装変更後"} />
        </div>
        <p>{"白を中心としたやわらかい服装から、黒いジャケットを使ったクールな雰囲気へかなり印象が変わりました。"}</p>
        <p>{"服装は大きく変わっていますが、顔立ちや髪型、ポーズは思ったよりそのままです。"}</p>
        <p>{"「服だけ変えてほしい」という使い方としては、かなり分かりやすい結果になりました。"}</p>
        <h3 id="background">{"3-3. 背景だけを変えてみる"}</h3>
        <p>{"続いて、人物はそのままにして背景を変更します。"}</p>
        <p>{"今回は室内から、夕方の屋外へ大きく雰囲気を変えてみました。"}</p>
        <pre className="prompt-code"><code>{"この画像をベースに、人物は同じままで背景だけを変更してください。今の室内背景から、やわらかい夕方の街角や屋外の背景に変えてください。人物の顔立ち、髪型、服装、ポーズ、構図はなるべくそのまま維持してください。"}</code></pre>
        <div className={styles.comparison}>
          <ArticleFigure name={"base.webp"} caption={"ベース画像"} />
          <ArticleFigure name={"background-change.webp"} caption={"背景変更後"} />
        </div>
        <p>{"背景は室内から夕方の街中へ大きく変わりましたが、人物の顔立ちや服装、ポーズはかなり元の状態を残しています。"}</p>
        <p>{"光の当たり方や画像全体の色味は背景に合わせて少し変化していて、単純に背景だけを切り抜いて差し替えたような仕上がりではありません。"}</p>
        <p>{"人物を残しながら、シーン全体の雰囲気まで変えたいときにも使いやすそうです。"}</p>
        <h2 id="section-4">{"4. 人物そのものを別人に変えられる？"}</h2>
        <p>{"部分変更だけではなく、今度は人物そのものを変えてみます。"}</p>
        <p>{"最初は「別の人物に変更してください」といった大まかな指示を試しましたが、それだけでは思っていたほど大きな変化になりませんでした。"}</p>
        <p>{"そこで、変更後の特徴として黒髪ストレート、日本人風の顔立ちなどを追加しています。"}</p>
        <pre className="prompt-code"><code>{"この画像をベースに、ポーズ、構図、服装、背景はできるだけ維持したまま、人物だけを別の女性に変えてください。黒髪のストレートヘア、日本人風の顔立ちにして、元の人物とは明確に別人に見えるようにしてください。"}</code></pre>
        <div className={styles.comparison}>
          <ArticleFigure name={"base.webp"} caption={"ベース画像"} />
          <ArticleFigure name={"character-change.webp"} caption={"人物変更後"} />
        </div>
        <p>{"今度は一目で別の人物だと分かるくらい変わりました。"}</p>
        <p>{"髪色や顔立ちは大きく変わっていますが、元画像のポーズや構図はかなり近い状態です。"}</p>
        <p>{"今回試した感じでは、「別の人物にして」とだけ伝えるよりも、"}<strong>{"変更後にどんな人物にしたいのかを少し具体的に伝えた方が狙いやすい"}</strong>{"印象でした。"}</p>
        <p>{"髪色や髪型、顔立ちなど、いくつか特徴を足すだけでも結果はかなり分かりやすくなります。"}</p>
        <h2 id="section-5">{"5. 絵柄はどこまで変えられる？"}</h2>
        <p>{"次は人物や服装ではなく、絵柄そのものを変えてみます。"}</p>
        <p>{"ベース画像では絵柄を指定していなかったため、今回はそこから「アニメイラスト寄り」「厚塗り寄り」の2方向へ変更します。"}</p>
        <h3 id="anime">{"5-1. アニメイラスト寄りに変更"}</h3>
        <pre className="prompt-code"><code>{"この画像をベースに、人物や構図の印象は保ちながら、全体をやわらかいアニメイラスト風の絵柄に変えてください。顔立ち、髪型、服装、ポーズ、背景の構成はできるだけ維持してください。"}</code></pre>
        <ArticleFigure name={"style-anime.webp"} caption={"アニメイラスト寄り"} />
        <p>{"かなり分かりやすく変わりました。"}</p>
        <p>{"線の使い方や顔立ち、塗りまで変化していて、単純に色味だけを変えたという感じではありません。"}</p>
        <p>{"元画像の人物や服装の特徴は残っていますが、全体としてはかなり別のタッチになっています。"}</p>
        <h3 id="painted">{"5-2. 厚塗り寄りに変更"}</h3>
        <p>{"続いて、厚塗り寄りのイラストを指定します。"}</p>
        <pre className="prompt-code"><code>{"この画像をベースに、人物や構図の印象は保ちながら、全体を厚塗り寄りのリッチなイラスト風に変えてください。陰影や塗りの情報量を少し増やしつつ、顔立ち、髪型、服装、ポーズ、背景の構成はできるだけ維持してください。"}</code></pre>
        <ArticleFigure name={"style-painted.webp"} caption={"厚塗り寄り"} />
        <p>{"こちらはアニメ寄りとは少し違って、元画像の人物や構図を残しつつ、陰影や質感が強くなった印象です。"}</p>
        <p>{"同じ「絵柄を変える」でも、指定する方向によって変わり方はかなり違いました。"}</p>
        <h3 id="style-comparison">{"3つの絵柄を並べてみる"}</h3>
        <div className={`${styles.comparison} ${styles.threeImages}`}>
          <ArticleFigure name={"base.webp"} caption={"絵柄未指定"} />
          <ArticleFigure name={"style-anime.webp"} caption={"アニメイラスト寄り"} />
          <ArticleFigure name={"style-painted.webp"} caption={"厚塗り寄り"} />
        </div>
        <p>{"3つを並べると違いがかなり分かりやすくなります。"}</p>
        <p>{"未指定のベース画像から、アニメ寄りでは顔の造形や線まで大きく変化し、厚塗り寄りでは元画像を残しながら質感を強めたような仕上がりになりました。"}</p>
        <p>{"以前のChatGPT画像生成では「これGPTっぽいな」と感じる絵柄に寄りやすい印象もありましたが、今回の作例では、指定次第でかなり違う方向へ動かせています。"}</p>
        <p>{"ただし、絵柄を大きく変えると顔立ちや画角なども少し変わります。元画像を完全に固定したまま、塗りだけを差し替えるような編集とは少し違いそうです。"}</p>
        <h2 id="section-6">{"6. 実写寄りに変更するとどうなる？"}</h2>
        <p>{"イラストだけでなく、実写寄りへの変更も軽く試しました。"}</p>
        <pre className="prompt-code"><code>{"この画像をベースに、人物や構図の印象は残しつつ、全体を自然な実写ポートレート風に変えてください。髪型、服装、ポーズ、背景の雰囲気はできるだけ維持してください。"}</code></pre>
        <div className={styles.comparison}>
          <ArticleFigure name={"base.webp"} caption={"ベース画像"} />
          <ArticleFigure name={"style-photoreal.webp"} caption={"実写寄りに変更後"} />
        </div>
        <p>{"今回のベース画像はもともと少しセミリアル寄りだったため、アニメ化や厚塗り化ほど大きな差にはなりませんでした。"}</p>
        <p>{"より写真的な方向には寄っていますが、今回の1枚だけだと、実写生成そのものの得意・不得意までは判断しにくいところです。"}</p>
        <p>{"実写について詳しく見るなら、最初から実写画像を作り、その人物をベースに変更していく方が違いは分かりやすそうです。"}</p>
        <h2 id="section-7">{"7. Animaで作った画像でも絵柄を保ったまま人物変更できる？"}</h2>
        <p>{"ここまではChatGPT Imagesで作った画像を編集してきましたが、最後に別の画像生成モデルで作った画像でも試してみます。"}</p>
        <p>{"元画像には、ComfyUIで生成したAnimaの画像を使用しました。"}</p>
        <p>{"使用したのは "}<strong>{"Anima Turbo v1.1＋LULINAworksオリジナルスタイルLoRA"}</strong>{" です。"}</p>
        <p>{"今回は絵柄そのものを比較する目的ではないため、品質指定やスタイルLoRAに関する部分を除き、人物・構図・背景に使ったプロンプトだけ掲載します。"}</p>
        <pre className="prompt-code"><code>{"1girl, solo, young woman, light brown hair, blue-green eyes,\nmedium hair, loosely tied low bun, loose strands,\ncardigan, inner top, skirt, shoulder bag,\nstanding, slight angle, looking at viewer,\none hand near chest, upper body to three-quarter view,\ngentle pose, calm expression,\nindoor, cafe, soft light, window light,\ntable, flowers, simple background"}</code></pre>
        <ArticleFigure name={"anima-base.webp"} caption={"Animaで生成した元画像"} />
        <p>{"今回は背景や服装を変えるのではなく、"}<strong>{"元画像の絵柄をできるだけ残したまま人物だけ変えられるか"}</strong>{"を見てみます。"}</p>
        <p>{"ChatGPT Imagesには次のように指示しました。"}</p>
        <pre className="prompt-code"><code>{"この画像の絵柄、塗り、ポーズ、構図、服装、背景はできるだけそのまま維持して、人物だけを別の女性に変更してください。黒髪のストレートヘア、茶〜琥珀色の目、少しシャープでクールな顔立ちにして、元の人物とは明確に別人に見えるようにしてください。"}</code></pre>
        <div className={styles.comparison}>
          <ArticleFigure name={"anima-base.webp"} caption={"Animaで生成した元画像"} />
          <ArticleFigure name={"anima-character-change.webp"} caption={"ChatGPT Imagesで人物変更後"} />
        </div>
        <p>{"人物はかなり変わっていますが、線や塗りの雰囲気は元画像にかなり近いままです。"}</p>
        <p>{"服装や背景、ポーズについても大きく崩れておらず、別の人物に差し替えながら、元のイラストらしさはかなり残っています。"}</p>
        <p>{"今回ここで見たかったのは、ChatGPT側の絵柄に大きく寄ってしまうのか、それとも元画像のタッチを残せるのかという点でした。"}</p>
        <p>{"この作例では、Anima＋LULINAworksオリジナルスタイルLoRAで作った画像でも、元の雰囲気を残しながら人物だけ変えることができています。"}</p>
        <p>{"もちろん完全に同じ絵柄や構図をそのままコピーしているわけではありませんが、「別のAIモデルで作ったイラストをベースに編集する」という使い方も十分試せそうです。"}</p>
        <h2 id="section-8">{"8. 使ってみて気づいたこと"}</h2>
        <p>{"今回いくつかの変更を試してみて、特に気になったのは"}<strong>{"「何を変えたいか」だけでなく、「何を残したいか」も伝えておいた方が扱いやすい"}</strong>{"という点です。"}</p>
        <p>{"表情や服装のような部分変更では、髪型・ポーズ・背景などを残すように指定しておくことで、元画像の印象をかなり維持できました。"}</p>
        <p>{"一方、人物変更や絵柄変更のように変化が大きくなるほど、指示していない部分まで少し変わることがあります。"}</p>
        <p>{"人物そのものを変えたい場合も、「別人にして」とだけ伝えるより、黒髪ストレートや顔立ちの方向性など、変更後のイメージを少し具体的にした方が違いは出しやすくなりました。"}</p>
        <p>{"完全に一部分だけを固定して差し替えるというより、"}<strong>{"残したい要素も伝えながら画像全体を調整してもらう"}</strong>{"くらいの感覚で使うと分かりやすそうです。"}</p>
        <h2 id="section-9">{"9. まとめ"}</h2>
        <p>{"今回はChatGPT Images 2.5を使って、日本語からの新規生成、表情・服装・背景の変更、人物差し替え、絵柄変更などを試しました。"}</p>
        <p>{"部分的な変更では、元画像の人物や構図をかなり残したまま差分を作れています。"}</p>
        <p>{"人物そのものを大きく変える場合も、変更後の特徴を具体的に伝えることで、狙った方向へ持っていきやすくなりました。"}</p>
        <p>{"絵柄についても、未指定の状態からアニメ寄り・厚塗り寄りへかなり印象を変えられます。"}</p>
        <p>{"さらに、Anima＋LULINAworksオリジナルスタイルLoRAで生成した画像でも、元の絵柄や構図を残しながら人物を変更できました。"}</p>
        <p>{"今回試した範囲では、ChatGPT Images 2.5は新しい画像を作るだけでなく、"}<strong>{"すでにある画像の一部分を変えたり、人物や絵柄を大きく変更したりする用途にも使えそうです。"}</strong></p>
        <p>{"ただし、変更していない部分まで必ず完全に固定されるわけではありません。残しておきたい要素がある場合は、「何を変えるか」と一緒に「何を残したいか」も伝えておく方が使いやすそうです。"}</p>
      </ArticleBody>
      <ArticleNavigation currentHref={currentHref} />
    </ContentPageShell>
  );
}
