import type { Metadata } from "next";
import Link from "next/link";
import { ArticleNavigation } from "@/components/ArticleNavigation";
import { ArticleBody } from "@/components/content/ArticleBody";
import { ContentHero } from "@/components/content/ContentHero";
import { ContentPageShell } from "@/components/content/ContentPageShell";
import { contentCategoryLabels } from "@/data/content";
import { allPublishedContents } from "@/data/contents";
import styles from "./article.module.css";

const currentHref = "/articles/anima-3month-review";
const canonicalUrl = "https://lulinaworks.com/articles/anima-3month-review";
const imageBase = "/assets/articles/anima-3month-review/";
const ogImage = "/assets/og/og-anima-3month-review.png";
const contentRecord = allPublishedContents.find((content) => content.href === currentHref);

if (!contentRecord) {
  throw new Error(`Published content is missing for ${currentHref}`);
}

const { title, description, publishedAt, primaryCategory, cardImage } = contentRecord;
const backHref = `/contents?category=${primaryCategory}`;
const lead =
  "Animaを使い続ける中で、リリース直後に感じていた印象や使い方は少しずつ変わってきました。\n\nモデルの選択肢、Turbo、プロンプトの3つを中心に、現在の使用感を振り返ります。";
const heroTitle = (
  <span className={styles.heroTitleText}>
    Animaは3ヶ月で<br className={styles.mobileTitleBreak} />どう変わった？{" "}
    <br />
    モデル・Turbo・<br className={styles.mobileTitleBreak} />プロンプトを
    <br />
    使い続けて感じたこと
  </span>
);
const toc = [
  { id: "environment-changes", label: "3ヶ月でAnimaを取り巻く環境はかなり変わった" },
  { id: "turbo-changes", label: "Turboの登場で生成速度の印象も変わった" },
  { id: "anima-style", label: "スタイルは増えたが、Animaらしさは残っている" },
  { id: "prompt-changes", label: "プロンプトは「タグ＋自然文」からタグ中心になった" },
  { id: "natural-language-use", label: "それでも自然文が便利な場面はある" },
  { id: "summary", label: "まとめ" },
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
  "aesthetic-vs-turbo-aesthetic.webp": [832, 1216],
  "aesthetic-vs-turbo-turbo.webp": [832, 1216],
  "model-compare-aesthetic.webp": [832, 1216],
  "model-compare-q-anima.webp": [832, 1216],
  "model-compare-wai-anima.webp": [832, 1216],
  "wai-anima.webp": [832, 1216],
  "wai-illustrious-sdxl.webp": [832, 1216],
  "hero.webp": [1216, 832],
};

function ArticleFigure({ name, alt, caption }: { name: string; alt: string; caption: string }) {
  const [width, height] = imageSizes[name];

  return (
    <figure className="article-figure">
      <img
        src={`${imageBase}${name}`}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function PromptCode({ children }: { children: string }) {
  return (
    <pre className="prompt-code">
      <code>{children}</code>
    </pre>
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

function PromptGuideLinkCard() {
  return (
    <a className="related-article-card" href="/articles/anima-prompt-template-guide">
      <span>関連記事</span>
      <strong>Animaでも使えるプロンプトガイドジェネレーター βの使い方｜AI発注書と骨組みプロンプトの作り方</strong>
      <p>ジェネレーターの基本操作やAI発注書・骨組みプロンプトの使い方を紹介します。</p>
    </a>
  );
}

export default function AnimaThreeMonthReviewPage() {
  return (
    <ContentPageShell articleId="article-top">
      <ContentHero
        className={styles.articleHero}
        backHref={backHref}
        backLabel="コンテンツ一覧へ"
        category={contentCategoryLabels[primaryCategory]}
        title={heroTitle}
        lead={lead}
        publishedAt={publishedAt}
        eyecatchSrc={cardImage.src}
        eyecatchAlt={title}
        imagePosition={cardImage.position}
        tone="dark"
      />

      <ArticleBody>
        <h2 id="intro">はじめに</h2>
        <p>Animaが登場してから3ヶ月ほどが経ちました。</p>
        <p>LULINAworksではこれまで、Animaの基本的な特徴やスタイルの違い、タグと自然文を組み合わせたプロンプトの書き方などを紹介してきましたが、リリース直後と比べると、Animaを取り巻く環境は少しずつ変わってきたように感じます。</p>
        <p>そこで今回は、厳密なベンチマークではなく、Animaを約3ヶ月使い続けて感じた変化を、モデル・Turbo・プロンプトの3つを中心に振り返ってみます。</p>
        <p>※この記事は筆者の普段の生成環境や使い方をもとにした使用感です。モデルごとの性能を厳密に比較することを目的としたものではありません。</p>

        <h2 id="article-summary">この記事でわかること</h2>
        <ul>
          <li>派生・マージモデルが増えて、Animaの絵柄選びがどう変わったか</li>
          <li>Anima-Aesthetic v1.1とAnima-Turbo v1.1の違いと、現在の使い分け</li>
          <li>3ヶ月使って変わったプロンプトの使い方と、自然文が便利な場面</li>
        </ul>

        <nav className="toc-box" aria-labelledby="toc-title">
          <h2 id="toc-title">目次</h2>
          <ol>
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <h2 id="environment-changes">3ヶ月でAnimaを取り巻く環境はかなり変わった</h2>

        <h3 id="more-derived-models">派生・マージモデルが増えて絵柄を選びやすくなった</h3>
        <p>Animaを使い始めた頃と現在を比べて、まず大きく変わったと感じるのが<strong>モデルの選択肢</strong>です。</p>
        <p>リリース直後はまだ選べるモデルが少なく、生成されるイラストの雰囲気もAnima本来の傾向を強く感じることがありましたし、なにより絵柄の出力が不安定という点がありました。</p>
        <p>
          以前LULINAworksで<Link href="/articles/anima-style-compare">スタイルを比較した際</Link>にも、プロンプトでスタイルを指定することはできるものの、狙った絵柄を安定して出すという点では少し難しさを感じていました。
        </p>
        <p>しかし、その後はAnimaをベースにした派生・マージモデルも増え、現在は好みに近いモデルを選んで使うという選択肢が出てきています。</p>
        <p>今回は公式のAnima-Aesthetic v1.1を基準に、Q-ANIMAとWAI-ANIMAを同じプロンプト・同じ生成条件で比較しました。</p>
        <p>Q-ANIMAは、絵柄やプロンプトの解釈に違いが見られたことから比較対象として選んでいます。</p>
        <p>WAI-ANIMAについては、WAI系がIllustriousなどAnima以前のモデルでも人気のあるシリーズのひとつということもあり、Anima版ではどのような出力になるのかを見る目的で取り上げました。</p>

        <div className={`${styles.comparison} ${styles.threeImages}`}>
          <ArticleFigure
            name="model-compare-aesthetic.webp"
            alt="Anima-Aesthetic v1.1で生成したモデル比較画像"
            caption="Anima-Aesthetic v1.1"
          />
          <ArticleFigure
            name="model-compare-q-anima.webp"
            alt="Q-ANIMAで生成したモデル比較画像"
            caption="Q-ANIMA"
          />
          <ArticleFigure
            name="model-compare-wai-anima.webp"
            alt="WAI-ANIMAで生成したモデル比較画像"
            caption="WAI-ANIMA"
          />
        </div>

        <p>モデルごとに絵柄は大きく違いますね。</p>
        <p>1枚ずつの比較では各モデル固有の絵柄の傾向までは分かりづらいかもしれませんが、Seedを変えて生成しても、おおむね近い方向の絵柄が出る印象です。</p>
        <p>生成条件：<br />832×1216 / Steps 40 / CFG 5 / Sampler euler_a / Scheduler simple</p>
        <p>使用プロンプト：</p>
        <PromptCode>{`masterpiece, best quality, amazing quality, very aesthetic, extremely detailed, highres, score_9, score_8_up, score_7_up, safe, anime coloring,
1girl, solo, short black hair, cowboy shot, black jacket over white blouse, long pants, city background, evening light, confident expression, looking at viewer, stylish anime illustration, detailed eyes, detailed hair`}</PromptCode>
        <p>以前は限られたモデルの中でプロンプトやLoRAを使い、好みのスタイルへ近づける必要がありましたが、そうした負担も小さくなりつつあります。</p>
        <p>そのため、以前の記事で触れた「スタイルを安定させづらい」という印象は、筆者の中ではかなり小さくなりました。</p>

        <h2 id="turbo-changes">Turboの登場で生成速度の印象も変わった</h2>

        <h3 id="turbo-lora">以前はTurbo LoRAを追加して高速化していた</h3>
        <p>もうひとつ、リリース当初から印象が大きく変わったのが生成速度です。</p>
        <p>以前の記事でも触れていますが、Animaを通常設定で何度も試していると、プロンプトや構図を少し変えるたびに生成を待つ時間が積み重なります。</p>
        <p>筆者も途中からTurbo LoRAを利用し、生成時間を短縮しながら試すことが増えていました。</p>
        <p>特にプロンプトを調整している段階では、一枚をじっくり作ることよりも「少し変えて生成する」を何度も繰り返すため、生成速度の差はかなり大きく感じます。</p>

        <h3 id="turbo-models">今はTurboを組み込んだモデルも選べる</h3>
        <p>現在はTurbo系のモデル自体を選んで生成できるようになり、以前のように毎回Turbo LoRAを追加する必要がない選択肢も出てきました。</p>
        <p>数多く生成しながら構図やプロンプトを探したいときには、生成時間が短いことは単純に大きなメリットです。</p>
        <p>そして実際に使ってみると、現在のTurbo系は「とにかく速い代わりに仕上がりを大きく妥協するもの」という印象でもありません。</p>
        <p>普段の生成でそのまま使える場面も多く、速度のみを優先したモデルではなく、<strong>実用的な選択肢</strong>のひとつになっています。</p>

        <h3 id="aesthetic-vs-turbo">Anima-Aesthetic v1.1とAnima-Turbo v1.1は、速さだけの違いではない</h3>
        <p>AestheticとTurboを使い比べていて感じるのが、<strong>違いは生成速度だけではない</strong>ということです。</p>
        <p>今回は、Anima公式が提供しているAnima-Aesthetic v1.1とAnima-Turbo v1.1を同じプロンプトで生成してみました。</p>

        <div className={styles.comparison}>
          <ArticleFigure
            name="aesthetic-vs-turbo-aesthetic.webp"
            alt="Anima-Aesthetic v1.1で生成した比較画像"
            caption="Anima-Aesthetic v1.1"
          />
          <ArticleFigure
            name="aesthetic-vs-turbo-turbo.webp"
            alt="Anima-Turbo v1.1で生成した比較画像"
            caption="Anima-Turbo v1.1"
          />
        </div>

        <p>Anima-Turbo v1.1は単純に「Aesthetic v1.1を速くしただけ」という印象ではなく、実際に生成してみると絵柄や空気感にも差があります。</p>
        <p>もちろんSeedや設定による変化もあるため、一枚だけを見て単純に判断することはできませんが、筆者自身は継続して使う中で、それぞれ少し違った出力傾向があるように感じています。</p>
        <p>用途や好みに応じて使い分けるのがよさそうです。</p>
        <p>※同じプロンプトを使用し、それぞれ普段使用している設定で生成しています。厳密な性能比較ではなく、実際に使った際の出力傾向を見るための比較です。</p>
        <p>使用プロンプト：</p>
        <PromptCode>{`masterpiece, best quality, amazing quality, very aesthetic, extremely detailed, highres, score_9, score_8_up, score_7_up, safe, anime coloring,
1girl, solo, upper body, long brown hair, gentle smile, white blouse, light cardigan, looking at viewer, sitting by the window in a cafe, cup on the table, soft daylight, indoor cafe background`}</PromptCode>

        <h3 id="turbo-use">筆者はTurboを中心に使い分けている</h3>
        <p>現在の筆者は、主にTurbo系を使っています。</p>
        <p>オリジナルスタイルLoRAを作成したことで絵柄の統一感を出しやすくなり、現在は絵柄の違いよりも生成速度を重視することが増えたためです。</p>
        <p>ただし、細部まで詰めたいときや、複雑なイラストを生成したい場合には通常モデルも候補に入れます。</p>
        <p>「最終画像だから必ず通常モデル」「試しだから必ずTurbo」と決めているわけではありません。</p>
        <p>以前は生成速度そのものが気になる場面もありましたが、現在は速度を出しつつ一定の品質も確保できるようになったという印象です。</p>

        <h2 id="anima-style">スタイルは増えたが、Animaらしさは残っている</h2>

        <h3 id="anima-characteristics">派生モデルでもAnima特有の傾向は感じる</h3>
        <p>モデルの選択肢が増えたことでスタイルの幅はかなり広がりました。</p>
        <p>ただ、どんな絵柄でも自由に再現できるようになったかというと、そこまでは感じていません。</p>
        <p>派生モデルを使っていても、人物の造形や線、塗りなどにAnimaらしい雰囲気を感じることがあります。</p>
        <p>Animaの絵柄が好きなら、ある程度共通した特徴が残っていることはメリットにもなります。</p>
        <p>一方で、「別のモデルで気に入っていた絵柄をそのままAnimaへ移したい」という場合には、まだ難しいケースもあります。</p>

        <h3 id="wai-comparison">Illustriousなど他モデルとはまだ違いがある</h3>
        <p>そこで今回は、AnimaとIllustriousの違いを見るために、同じWAI系のモデルを使って比較してみました。</p>
        <p>使用したのはWAI-ANIMAとWAI-illustrious-SDXLです。</p>
        <p>WAI系はIllustriousなどAnima以前のモデルでも人気のあるシリーズのひとつなので、できるだけ近い系列でベースモデルの違いを見る比較として選んでいます。</p>

        <div className={styles.comparison}>
          <ArticleFigure
            name="wai-anima.webp"
            alt="WAI-ANIMAで生成した比較画像"
            caption="WAI-ANIMA"
          />
          <ArticleFigure
            name="wai-illustrious-sdxl.webp"
            alt="WAI-illustrious-SDXLで生成した比較画像"
            caption="WAI-illustrious-SDXL"
          />
        </div>

        <p>今回使用したプロンプトがシンプルなものだったこともあり、Anima側では窓の外まで描写されませんでした。</p>
        <p>もちろんSeedによっては補完される場合もありますが、裏を返せば、指定した内容に沿う傾向はAnimaの方が強いとも考えられます。</p>
        <p>一方、Illustrious側は指定していない部分も自然に補完してくれる印象があり、今回の画像では全体の雰囲気もとても良く感じました。</p>
        <p>※同じ内容のプロンプトを使用しています。Illustrious側ではscore系タグを使用せず、Face Detailerを使用しています。各モデルは普段使用している設定で生成しています。</p>
        <p>使用プロンプト：</p>
        <PromptCode>{`masterpiece, best quality, amazing quality, very aesthetic, extremely detailed, highres, safe, anime coloring,
1girl, solo, upper body, long black hair, school uniform, looking at viewer, calm expression, afternoon sunlight, sitting by the classroom window, desk, detailed eyes, detailed hair`}</PromptCode>
        <p>Animaの派生モデルが増えたからといって、IllustriousやSDXL、Pony系などの絵柄まで完全に置き換えられるわけではありません。</p>
        <p>むしろ選択肢が増えた現在だからこそ、モデルごとの得意な方向を見ながら使い分ける方が自然だと感じています。</p>
        <p>筆者の普段の生成では、複数人の描写や細部のディテールなどでAnimaの方が扱いやすいと感じる場面があります。</p>
        <p>一方で、Illustrious系にはこれまで蓄積されてきた便利なツールやノードも多く、塗りや絵柄についてもIllustrious系を好む方は多いと思います。</p>
        <p>最終的には好みの問題ですね。</p>

        <h2 id="prompt-changes">プロンプトは「タグ＋自然文」からタグ中心になった</h2>

        <h3 id="hybrid-prompts">以前はタグ＋自然文のハイブリッドを使っていた</h3>
        <p>
          以前公開した<Link href="/articles/anima-prompt-writing">Animaのプロンプト記事</Link>では、タグと自然文を組み合わせる方法を紹介しました。
        </p>
        <p>人物の特徴や服装などはタグで指定し、タグだけでは説明しづらいシーンや人物同士の関係を自然文で補う方法です。</p>
        <p>Animaはタグだけでなく自然文でも指示できるため、両方を組み合わせられることは現在もメリットだと思っています。</p>
        <p>ただ、3ヶ月使い続けた結果、筆者自身の普段のプロンプトは少し変わりました。</p>

        <h3 id="tag-focused-prompts">3ヶ月使った現在は、ほぼタグだけで生成している</h3>
        <p>現在の筆者は、ほとんどの生成を<strong>タグ中心</strong>で行っています。</p>
        <p>理由のひとつは単純で、その方が筆者にとって楽だったからです。</p>
        <p>筆者は英語が得意ではないため、自然文を細かく書こうとすると翻訳を挟むことがあります。</p>
        <p>もちろん短い文章なら大きな手間ではありませんが、生成するたびに自然文を考えて調整するより、使い慣れたタグを追加・削除していく方が気軽に感じるようになりました。</p>
        <p>また、普段作るイラストであればタグだけでも問題なく生成できる場面が多く、結果として自然文を使う機会が少なくなっています。</p>
        <p>以前紹介した方法が間違っていたというわけではなく、使い続けた結果、自分にとって扱いやすい方法へ落ち着いたというのが一番近いです。</p>

        <h2 id="natural-language-use">それでも自然文が便利な場面はある</h2>

        <h3 id="multiple-characters">複数人や位置関係を指定するとき</h3>
        <p>普段はタグ中心になった筆者ですが、自然文をまったく使わなくなったわけではありません。</p>
        <p>特に便利だと感じるのが、<strong>複数人を配置したい場面</strong>です。</p>
        <p>たとえば、</p>
        <ul>
          <li>一人が手前にいて、もう一人が後ろにいる</li>
          <li>二人が向かい合っている</li>
          <li>一人が座り、もう一人がその隣に立っている</li>
          <li>誰が何をしているのかを分けて伝えたい</li>
        </ul>
        <p>といった状況は、タグだけで細かく整理しようとすると分かりづらくなることがあります。</p>
        <p>こうしたときは、基本となるタグに短い自然文を足して位置関係や行動を補うことがあります。</p>

        <h3 id="natural-language-example">タグだけでは説明しづらいシーンを補う</h3>
        <p>自然文を使うときも、筆者の場合はプロンプト全体を文章にすることはあまりありません。</p>
        <p>基本的な人物・服装・表情・背景などは普段通りタグで指定し、文章で説明した方が分かりやすい部分だけを自然文で補います。</p>
        <p>今回の例では、女の子が少し前を歩きながら指をさし、男の子がその後ろをついていくという位置関係を指定しています。</p>

        <ArticleFigure
          name="hero.webp"
          alt="自然文で2人の位置関係と動きを指定したAnimaの作例"
          caption="Anima-Turbo v1.1 ＋ LULINAworksオリジナルスタイルLoRA"
        />

        <p>使用プロンプト：</p>
        <PromptCode>{`masterpiece, best quality, amazing quality, very aesthetic, extremely detailed, highres, score_9, score_8_up, score_7_up, anime coloring,
1girl and 1boy, A girl pointing ahead, girl's slightly ahead and boy's following behind, street, walking, cowboy shot`}</PromptCode>
        <p>この使い方であれば、普段使っているタグの感覚をそのまま残しながら、必要な部分だけ自然文の自由度を利用できます。</p>
        <p>筆者にとっては、現在このくらいの使い方が一番扱いやすく感じています。</p>
        <p>どちらか一方を正解にするより、自分が生成しやすい方法を選べること自体がAnimaの使いやすさのひとつではないでしょうか。</p>
        <p>タグ形式のプロンプトで悩んでいる方は、当サイトで髪型・表情・ポーズ・構図などのプロンプトを一覧で紹介しています。</p>
        <p>タグを中心に試してみたい場合は、以下のプロンプト一覧も参考にしてみてください。</p>
        <DictionaryLinkCard />
        <p>また、β版ではありますが、事前に決めた枠組みと生成したいイメージをChatGPTなどにそのまま貼り付けて、プロンプト作成を依頼できるツールも用意しています。</p>
        <PromptGuideLinkCard />
        <p>興味のある方は使ってみてください。</p>

        <h2 id="summary">まとめ</h2>
        <p>Animaを使い始めた頃と比べると、筆者の印象はかなり変わりました。</p>
        <p>リリース直後と比べると、Animaを使い続けやすい環境はかなり整ってきたと感じています。</p>
        <p>派生・マージモデルが増えたことやTurbo系モデルの登場など、想像以上のスピードで発展している印象ですね。</p>
        <p>モデルの選択肢が増え、Turboによって生成速度の問題も小さくなり、タグと自然文も自分に合った方法で選べる。</p>
        <p>最初からひとつに決めるのではなく、「今回はどれが合いそうか」を選べるようになったことが、この3ヶ月で一番大きく変わった部分かもしれません。</p>
        <p>Animaをベースにした2.9Bや3.8Bの拡張モデルなど、新しい試みも出てきています。</p>
        <p>こうしたモデルについては、実際に使える環境や方向性が見えてきた段階で、LULINAworksでも改めて取り上げるかもしれません。</p>
        <p>Animaはリリースからまだそれほど長い時間が経っていません。</p>
        <p>この3ヶ月だけでも環境はかなり変わりました。これからどのように発展していくのか、楽しみですね。</p>
      </ArticleBody>

      <ArticleNavigation currentHref={currentHref} />
    </ContentPageShell>
  );
}
