# OGP test generator v0

ページの既存 Hero を基準に、1200 x 630 の OGP 試作画像を HTML/CSS から生成する開発用ツールです。アプリのルートは追加せず、`public/assets/og/` には書き込みません。

対象ページと短縮タイトル案は [`INVENTORY.md`](./INVENTORY.md) にまとめています。

## 生成方式

- `hero-direct`: Hero の既存情報をそのまま OGP 比率へ調整する方式。TOP、コンテンツ一覧、プロンプト一覧ハブ、プロンプト一覧4ページが対象です。
- `hero-with-short-title`: Hero を背景に、短い OGP タイトルを中央配置する方式。ツールと記事が対象です。

共通既定値は `titlePosition: "center"`、`textAlign: "center"` です。TOP のみ、人物とタイトルが重なるため、現行 Hero に合わせて左配置を明示しています。

## 実行

```powershell
npm run ogp:generate:test
```

通常実行では、`hero-direct` の7件と短縮タイトル承認済みのツール・記事8件、計15件を生成します。未承認のページを今後追加する場合は、`shortTitleStatus: "proposal"` とすることで通常の一括生成から除外できます。

特定 ID だけを確認する場合:

```powershell
npm run ogp:generate:test -- --ids article-anima-basic
```

`--ids` ではカンマ区切りで複数 ID を指定できます。出力先は `tools/ogp/output-test/` です。

## 実装メモ

- Chrome は `playwright-core` からローカルインストール済みの実体を起動します。
- 1200 x 630、device scale factor 2 で 2400 x 1260 を撮影後、Sharp の Lanczos 3 で 1200 x 630 に縮小します。
- フォントは `.next/static` に生成済みの `M PLUS 1` と `Zen Maru Gothic` を参照し、ツール内へ複製しません。
- フォント CSS がまだない場合は、ユーザー側ターミナルで `npm run dev` を起動するか、一度 `npm run build` を実行してから再生成します。
- ページ本文、metadata、公開 OGP の更新はこのツールの責務外です。
