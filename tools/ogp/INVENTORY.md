# OGP target inventory

2026-08-31 時点のページ実装を基準にした監査結果です。短縮タイトルが必要な通常記事は、承認前の「案」として扱います。

| route | ページ種別 | 現在の H1 | OGP 生成方式 | Hero 画像 | 現行 OGP | 短縮タイトル案 |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | `home` | `「やってみたい」を、形にする。` | `hero-direct` | `/assets/hero/hero-pc.webp` | `/assets/og/og-top.png` | — |
| `/contents` | `contents-index` | `コンテンツ一覧` | `hero-direct` | `/assets/eyecatch/contents-eyecatch.webp` | `/assets/og/og-contents.png` | — |
| `/dictionary` | `prompt-hub` | `プロンプト一覧` | `hero-direct` | `/assets/eyecatch/prompt-hub-eyecatch.webp` | `/assets/og/og-prompt-hub.png` | — |
| `/dictionary/hairstyle` | `prompt-list` | `髪型プロンプト一覧` | `hero-direct` | `/assets/eyecatch/eyecatch-dictionary-hairstyle-bg-pc.webp` | `/assets/og/ogp-dictionary-hairstyle.png` | — |
| `/dictionary/expression` | `prompt-list` | `表情プロンプト一覧` | `hero-direct` | `/assets/eyecatch/eyecatch-dictionary-expression-bg-pc.webp` | `/assets/og/ogp-dictionary-expression.png` | — |
| `/dictionary/pose` | `prompt-list` | `ポーズプロンプト一覧` | `hero-direct` | `/assets/eyecatch/eyecatch-dictionary-pose-bg-pc.webp` | `/assets/og/ogp-dictionary-pose.png` | — |
| `/dictionary/composition` | `prompt-list` | `構図プロンプト一覧` | `hero-direct` | `/assets/eyecatch/eyecatch-dictionary-composition-bg-pc.webp` | `/assets/og/ogp-dictionary-composition.png` | — |
| `/tools/anima-prompt-template` | `tool` | `Animaでも使える!! AI発注書付きプロンプトガイドジェネレーター β` | `hero-with-short-title` | `/assets/eyecatch/eyecatch-tool-anima-prompt-template.webp` | `/assets/og/ogp-tool-anima-prompt-template.png` | `プロンプトガイドジェネレーター β`（承認済み） |
| `/articles/anima-prompt-template-guide` | `article` | `Animaでも使えるプロンプトガイドジェネレーター βの使い方｜AI発注書と骨組みプロンプトの作り方` | `hero-with-short-title` | `/assets/eyecatch/eyecatch-tool-anima-prompt-template.webp` | `/assets/og/ogp-article-anima-prompt-template-guide.png` | `プロンプトガイドジェネレーター β 使い方ガイド`（承認済み） |
| `/articles/anima-basic` | `article` | `Animaとは？ComfyUIで試して感じた特徴と注意点` | `hero-with-short-title` | `/assets/articles/anima-basic/anima-basic-02-two-girls.webp` | `/assets/og/og-anima-basic.png` | `Animaの特徴と注意点`（承認済み） |
| `/articles/anima-style-compare` | `article` | `Animaの絵柄はどう変わる？スタイル系プロンプト10種類を作例で比較` | `hero-with-short-title` | `/assets/articles/anima-style-compare/anima-style-scene-anime-screenshot.webp` | `/assets/og/ogp-anima-style-compare.png` | `Anima｜スタイル10種比較`（承認済み） |
| `/articles/anima-prompt-writing` | `article` | `Animaで使える？プロンプトをタグと自然文で書く方法` | `hero-with-short-title` | `/assets/articles/anima-prompt-writing/anima-prompt-single.webp` | `/assets/og/ogp-anima-prompt-writing.png` | `Anima｜タグ＋自然文の書き方`（承認済み） |
| `/articles/model-basic` | `article` | `画像生成AIのモデルとは？SD1.5・SDXLの違いと選び方` | `hero-with-short-title` | `/assets/articles/model-basic/model-basic-thumb.png` | `/assets/og/og-model-basic.png` | `画像生成AIモデルの基本｜SD1.5・SDXL`（承認済み） |
| `/articles/comfyui-start-guide` | `article` | `ComfyUIの始め方｜Portable版の導入から画像生成まで` | `hero-with-short-title` | `/assets/articles/comfyui-start-guide/comfyui-start-guide-08-workflow-loaded.png` | `/assets/og/og-comfyui-start-guide.png` | `ComfyUIの始め方`（承認済み） |
| `/articles/prompt-basic` | `article` | `AIイラストのプロンプトとは？基本の考え方と書き方を整理する` | `hero-with-short-title` | `/assets/articles/prompt-basic/prompt-basic-thumb.png` | `/assets/og/og-prompt-basic.png` | `AIイラスト｜プロンプトの基本`（承認済み） |

## 監査境界

- `home`、`contents-index`、`prompt-hub`、`prompt-list`、`tool`、`article` の計15 route を対象にしています。
- `/articles` ハブとその他の固定ページは、今回提示された生成ルールに該当しないため対象外です。追加する場合は先に `hero-direct` / `hero-with-short-title` のどちらへ分類するかを決めます。
- 中央配置を共通既定値にしています。TOP は中央へ寄せると人物に重なるため、見やすさの個別調整として現行 Hero と同じ左配置を維持しています。
- 通常記事6件を含む短縮タイトル対象8件はすべて承認済みです。
