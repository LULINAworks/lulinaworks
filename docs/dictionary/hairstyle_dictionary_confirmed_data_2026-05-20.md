# LULINAworks 髪型辞書 確定版データ一覧

作成日：2026-05-20

用途：`/dictionary/hairstyle` 実装前の確定データ整理。CodexでTypeScript配列へ変換する前段の人間確認用。

## 前提・表示ルール

- 髪型カード数：86項目（元85項目 + `short_ponytail` 追加）
- femaleサンプルあり：80項目
- maleサンプルあり：37項目
- 男女両方あり：31項目
- maleサンプルのみ：6項目
- `short_ponytail` は追加WebP作成済み。ここでは female サンプルあり / male サンプルなし想定で記載。実装前に実ファイルのパス照合を行う。
- カテゴリ表示は「男性向け」を使わず、「その他」を使う。
- 男女両方ある項目はカード上で `[女性] [男性]` の切り替えを表示。
- 片方だけの項目は `サンプル：女性` / `サンプル：男性` と表示し、「女性のみ」「男性のみ」は使わない。
- 使い方メモは基本1行。必要な項目だけ2行。カード側は行数に関係なく高さ固定。
- コピー形式切り替えはページ全体で共通・連動。UIは男女切り替えと同じセグメントボタン素材を使い回す。

## カテゴリID案

| categoryId | 表示名 | 件数 |
|---|---|---:|
| `length` | 長さ | 6 |
| `silhouette` | 形・シルエット | 23 |
| `ponytail` | ポニーテール | 7 |
| `twintails` | ツインテール | 5 |
| `bun_updo` | お団子・アップ | 9 |
| `braids` | 三つ編み | 7 |
| `bangs` | 前髪 | 16 |
| `face_around` | 顔まわり | 7 |
| `other` | その他 | 6 |

## 長さ

| id | categoryId | 日本語名 | prompt | sample表示 | memo | femaleImage | maleImage |
|---|---|---|---|---|---|---|---|
| `very_short_hair` | `length` | ベリーショート | `very short hair` | 女性/男性 | かなり短い長さを指定する髪型 | `/assets/dictionary/hairstyle/female/hairstyle-very-short-hair.webp` | `/assets/dictionary/hairstyle/male/hairstyle-very-short-hair.webp` |
| `short_hair` | `length` | ショートヘア | `short hair` | 女性/男性 | 短めで扱いやすい基本の髪型 | `/assets/dictionary/hairstyle/female/hairstyle-short-hair.webp` | `/assets/dictionary/hairstyle/male/hairstyle-short-hair.webp` |
| `medium_hair` | `length` | ミディアムヘア | `medium hair` | 女性/男性 | 長すぎず短すぎない中間の髪型 | `/assets/dictionary/hairstyle/female/hairstyle-medium-hair.webp` | `/assets/dictionary/hairstyle/male/hairstyle-medium-hair.webp` |
| `long_hair` | `length` | ロングヘア | `long hair` | 女性/男性 | 肩より長い髪を指定する基本の髪型 | `/assets/dictionary/hairstyle/female/hairstyle-long-hair.webp` | `/assets/dictionary/hairstyle/male/hairstyle-long-hair.webp` |
| `very_long_hair` | `length` | ベリーロング | `very long hair` | サンプル：女性 | 腰あたりまで伸びる長い髪型<br>近い構図では髪の流れが崩れやすい | `/assets/dictionary/hairstyle/female/hairstyle-very-long-hair.webp` | - |
| `absurdly_long_hair` | `length` | スーパーロングヘア | `absurdly long hair` | サンプル：女性 | 画面内で大きく広がる長い髪型<br>全身構図で髪の長さを見せやすい | `/assets/dictionary/hairstyle/female/hairstyle-absurdly-long-hair.webp` | - |

## 形・シルエット

| id | categoryId | 日本語名 | prompt | sample表示 | memo | femaleImage | maleImage |
|---|---|---|---|---|---|---|---|
| `straight_hair` | `silhouette` | ストレートヘア | `straight hair` | 女性/男性 | まっすぐな髪質や流れを指定する言葉 | `/assets/dictionary/hairstyle/female/hairstyle-straight-hair.webp` | `/assets/dictionary/hairstyle/male/hairstyle-straight-hair.webp` |
| `wavy_hair` | `silhouette` | ウェーブヘア | `wavy hair` | 女性/男性 | ゆるく波打つ髪の流れを作る髪型 | `/assets/dictionary/hairstyle/female/hairstyle-wavy-hair.webp` | `/assets/dictionary/hairstyle/male/hairstyle-wavy-hair.webp` |
| `curly_hair` | `silhouette` | カーリーヘア | `curly hair` | 女性/男性 | 巻きの強いカールを出しやすい髪型 | `/assets/dictionary/hairstyle/female/hairstyle-curly-hair.webp` | `/assets/dictionary/hairstyle/male/hairstyle-curly-hair.webp` |
| `messy_hair` | `silhouette` | 無造作ヘア | `messy hair` | 女性/男性 | 整えすぎない自然な乱れを出す髪型 | `/assets/dictionary/hairstyle/female/hairstyle-messy-hair.webp` | `/assets/dictionary/hairstyle/male/hairstyle-messy-hair.webp` |
| `bob_cut` | `silhouette` | ボブカット | `bob cut` | 女性/男性 | 丸みのある短めの定番シルエット | `/assets/dictionary/hairstyle/female/hairstyle-bob-cut.webp` | `/assets/dictionary/hairstyle/male/hairstyle-bob-cut.webp` |
| `long_bob` | `silhouette` | ロングボブ | `long bob` | サンプル：女性 | ボブより長めで肩周りに収まる髪型 | `/assets/dictionary/hairstyle/female/hairstyle-long-bob.webp` | - |
| `pixie_cut` | `silhouette` | ピクシーカット | `pixie cut` | 女性/男性 | 短く軽いシルエットに寄せる髪型 | `/assets/dictionary/hairstyle/female/hairstyle-pixie-cut.webp` | `/assets/dictionary/hairstyle/male/hairstyle-pixie-cut.webp` |
| `bowl_cut` | `silhouette` | ボウルカット | `bowl cut` | 女性/男性 | 丸く切りそろえたラインが出やすい髪型 | `/assets/dictionary/hairstyle/female/hairstyle-bowl-cut.webp` | `/assets/dictionary/hairstyle/male/hairstyle-bowl-cut.webp` |
| `hime_cut` | `silhouette` | 姫カット | `hime cut` | サンプル：女性 | 顔横を切りそろえた形が出やすい髪型 | `/assets/dictionary/hairstyle/female/hairstyle-hime-cut.webp` | - |
| `wolf_cut` | `silhouette` | ウルフカット | `wolf cut` | 女性/男性 | 段差と毛先の動きが出やすい髪型 | `/assets/dictionary/hairstyle/female/hairstyle-wolf-cut.webp` | `/assets/dictionary/hairstyle/male/hairstyle-wolf-cut.webp` |
| `layered_hair` | `silhouette` | レイヤーヘア | `layered hair` | 女性/男性 | 髪に段差をつけて動きを出す指定 | `/assets/dictionary/hairstyle/female/hairstyle-layered-hair.webp` | `/assets/dictionary/hairstyle/male/hairstyle-layered-hair.webp` |
| `fluffy_hair` | `silhouette` | ふんわりヘア | `fluffy hair` | 女性/男性 | 髪全体にやわらかい量感を足す指定 | `/assets/dictionary/hairstyle/female/hairstyle-fluffy-hair.webp` | `/assets/dictionary/hairstyle/male/hairstyle-fluffy-hair.webp` |
| `asymmetrical_hair` | `silhouette` | アシンメトリーヘア | `asymmetrical hair` | 女性/男性 | 左右差のある髪型に寄せる指定 | `/assets/dictionary/hairstyle/female/hairstyle-asymmetrical-hair.webp` | `/assets/dictionary/hairstyle/male/hairstyle-asymmetrical-hair.webp` |
| `ringlets` | `silhouette` | 縦ロール | `ringlets` | サンプル：女性 | 高貴でクラシカルな印象を出しやすい髪型 | `/assets/dictionary/hairstyle/female/hairstyle-ringlets.webp` | - |
| `slicked_back_hair` | `silhouette` | オールバック | `slicked back hair` | 女性/男性 | 前髪を後ろへ流して額を見せる髪型 | `/assets/dictionary/hairstyle/female/hairstyle-slicked-back-hair.webp` | `/assets/dictionary/hairstyle/male/hairstyle-slicked-back-hair.webp` |
| `blunt_cut` | `silhouette` | ブラントカット | `blunt cut` | サンプル：女性 | 毛先をまっすぐ切りそろえる指定 | `/assets/dictionary/hairstyle/female/hairstyle-blunt-cut.webp` | - |
| `flipped_hair` | `silhouette` | 外ハネヘア | `flipped hair` | 女性/男性 | 毛先を外側に跳ねさせる指定 | `/assets/dictionary/hairstyle/female/hairstyle-flipped-hair.webp` | `/assets/dictionary/hairstyle/male/hairstyle-flipped-hair.webp` |
| `one_side_up` | `silhouette` | サイドアップ | `one side up` | サンプル：女性 | 片側の髪だけを上げるアレンジ | `/assets/dictionary/hairstyle/female/hairstyle-one-side-up.webp` | - |
| `two_side_up` | `silhouette` | ツーサイドアップ | `two side up` | サンプル：女性 | 両側の一部を上げるアレンジ | `/assets/dictionary/hairstyle/female/hairstyle-two-side-up.webp` | - |
| `drill_hair` | `silhouette` | ドリルヘア | `drill hair` | サンプル：女性 | 太く巻いた特徴的な縦カール | `/assets/dictionary/hairstyle/female/hairstyle-drill-hair.webp` | - |
| `undercut` | `silhouette` | アンダーカット | `undercut` | 女性/男性 | 内側や下側を短く刈り込む髪型 | `/assets/dictionary/hairstyle/female/hairstyle-undercut.webp` | `/assets/dictionary/hairstyle/male/hairstyle-undercut.webp` |
| `side_shave` | `silhouette` | サイドシェーブ | `side shave` | 女性/男性 | 横側を短く刈り込む髪型 | `/assets/dictionary/hairstyle/female/hairstyle-side-shave.webp` | `/assets/dictionary/hairstyle/male/hairstyle-side-shave.webp` |
| `spiky_hair` | `silhouette` | スパイクヘア | `spiky hair` | 女性/男性 | 毛束を立たせたシャープな髪型 | `/assets/dictionary/hairstyle/female/hairstyle-spiky-hair.webp` | `/assets/dictionary/hairstyle/male/hairstyle-spiky-hair.webp` |

## ポニーテール

| id | categoryId | 日本語名 | prompt | sample表示 | memo | femaleImage | maleImage |
|---|---|---|---|---|---|---|---|
| `ponytail` | `ponytail` | ポニーテール | `ponytail` | 女性/男性 | 後ろで一つにまとめた基本の結び髪 | `/assets/dictionary/hairstyle/female/hairstyle-ponytail.webp` | `/assets/dictionary/hairstyle/male/hairstyle-ponytail.webp` |
| `high_ponytail` | `ponytail` | ハイポニーテール | `high ponytail` | サンプル：女性 | 高い位置で一つにまとめたポニーテール | `/assets/dictionary/hairstyle/female/hairstyle-high-ponytail.webp` | - |
| `low_ponytail` | `ponytail` | ローポニーテール | `low ponytail` | 女性/男性 | 低い位置で一つにまとめたポニーテール | `/assets/dictionary/hairstyle/female/hairstyle-low-ponytail.webp` | `/assets/dictionary/hairstyle/male/hairstyle-low-ponytail.webp` |
| `side_ponytail` | `ponytail` | サイドポニーテール | `side ponytail` | サンプル：女性 | 横側に寄せて一つにまとめたポニーテール | `/assets/dictionary/hairstyle/female/hairstyle-side-ponytail.webp` | - |
| `short_ponytail` | `ponytail` | ショートポニーテール | `short ponytail` | サンプル：女性 | 短めの毛束を一つにまとめたポニーテール | `/assets/dictionary/hairstyle/female/hairstyle-short-ponytail.webp` | - |
| `long_ponytail` | `ponytail` | ロングポニーテール | `long ponytail` | サンプル：女性 | 長い毛束を一つにまとめたポニーテール | `/assets/dictionary/hairstyle/female/hairstyle-long-ponytail.webp` | - |
| `folded_ponytail` | `ponytail` | 折り返しポニーテール | `folded ponytail` | サンプル：女性 | 毛束を折り返した形のポニーテール | `/assets/dictionary/hairstyle/female/hairstyle-folded-ponytail.webp` | - |

## ツインテール

| id | categoryId | 日本語名 | prompt | sample表示 | memo | femaleImage | maleImage |
|---|---|---|---|---|---|---|---|
| `twin_tails` | `twintails` | ツインテール | `twin tails` | サンプル：女性 | 左右に分けて結んだ基本の結び髪 | `/assets/dictionary/hairstyle/female/hairstyle-twin-tails.webp` | - |
| `high_twin_tails` | `twintails` | ハイツインテール | `high twin tails` | サンプル：女性 | 高い位置で左右に結んだツインテール | `/assets/dictionary/hairstyle/female/hairstyle-high-twin-tails.webp` | - |
| `low_twin_tails` | `twintails` | ローツインテール | `low twin tails` | サンプル：女性 | 低い位置で左右に結んだツインテール | `/assets/dictionary/hairstyle/female/hairstyle-low-twin-tails.webp` | - |
| `short_twin_tails` | `twintails` | ショートツインテール | `short twin tails` | サンプル：女性 | 短めの毛束を左右に結んだツインテール | `/assets/dictionary/hairstyle/female/hairstyle-short-twin-tails.webp` | - |
| `long_twin_tails` | `twintails` | ロングツインテール | `long twin tails` | サンプル：女性 | 長い毛束を左右に結んだツインテール | `/assets/dictionary/hairstyle/female/hairstyle-long-twin-tails.webp` | - |

## お団子・アップ

| id | categoryId | 日本語名 | prompt | sample表示 | memo | femaleImage | maleImage |
|---|---|---|---|---|---|---|---|
| `hair_bun` | `bun_updo` | お団子 | `hair bun` | 女性/男性 | 髪を丸くまとめた基本のお団子ヘア | `/assets/dictionary/hairstyle/female/hairstyle-hair-bun.webp` | `/assets/dictionary/hairstyle/male/hairstyle-hair-bun.webp` |
| `high_bun` | `bun_updo` | 高い位置のお団子 | `high bun` | サンプル：女性 | 高い位置で髪をまとめたお団子ヘア | `/assets/dictionary/hairstyle/female/hairstyle-high-bun.webp` | - |
| `low_bun` | `bun_updo` | 低い位置のお団子 | `low bun` | サンプル：女性 | 低い位置で髪をまとめたお団子ヘア | `/assets/dictionary/hairstyle/female/hairstyle-low-bun.webp` | - |
| `double_bun` | `bun_updo` | ダブルお団子 | `double bun` | サンプル：女性 | 左右に分けて丸くまとめたお団子ヘア | `/assets/dictionary/hairstyle/female/hairstyle-double-bun.webp` | - |
| `side_bun` | `bun_updo` | サイドお団子 | `side bun` | サンプル：女性 | 横側に寄せてまとめたお団子ヘア | `/assets/dictionary/hairstyle/female/hairstyle-side-bun.webp` | - |
| `updo` | `bun_updo` | アップヘア | `updo` | サンプル：女性 | 髪を上げてまとめたアレンジヘア | `/assets/dictionary/hairstyle/female/hairstyle-updo.webp` | - |
| `half_updo` | `bun_updo` | ハーフアップ | `half updo` | サンプル：女性 | 上側の髪だけをまとめるアレンジ | `/assets/dictionary/hairstyle/female/hairstyle-half-updo.webp` | - |
| `cone_hair_bun` | `bun_updo` | コーン型お団子 | `cone hair bun` | サンプル：女性 | 高さのある形にまとめたお団子ヘア | `/assets/dictionary/hairstyle/female/hairstyle-cone-hair-bun.webp` | - |
| `multi_tied_hair` | `bun_updo` | 複数結びヘア | `multi tied hair` | サンプル：女性 | 複数の位置で髪を結んだアレンジヘア | `/assets/dictionary/hairstyle/female/hairstyle-multi-tied-hair.webp` | - |

## 三つ編み

| id | categoryId | 日本語名 | prompt | sample表示 | memo | femaleImage | maleImage |
|---|---|---|---|---|---|---|---|
| `braid` | `braids` | 三つ編み | `braid` | 女性/男性 | 髪を編み込んだ基本の三つ編み | `/assets/dictionary/hairstyle/female/hairstyle-braid.webp` | `/assets/dictionary/hairstyle/male/hairstyle-braid.webp` |
| `side_braid` | `braids` | 三つ編みサイド | `side braid` | サンプル：女性 | 横側に三つ編みを作るアレンジ | `/assets/dictionary/hairstyle/female/hairstyle-side-braid.webp` | - |
| `twin_braids` | `braids` | 三つ編みツイン | `twin braids` | サンプル：女性 | 左右に分けて編んだ三つ編み | `/assets/dictionary/hairstyle/female/hairstyle-twin-braids.webp` | - |
| `braided_ponytail` | `braids` | 三つ編みポニーテール | `braided ponytail` | サンプル：女性 | 編み込んだ毛束をまとめたポニーテール | `/assets/dictionary/hairstyle/female/hairstyle-braided-ponytail.webp` | - |
| `braided_bun` | `braids` | 三つ編みお団子 | `braided bun` | サンプル：女性 | 三つ編みを丸くまとめたお団子ヘア | `/assets/dictionary/hairstyle/female/hairstyle-braided-bun.webp` | - |
| `french_braid` | `braids` | フレンチブレイド | `french braid` | サンプル：女性 | 頭に沿って編み込む三つ編みアレンジ | `/assets/dictionary/hairstyle/female/hairstyle-french-braid.webp` | - |
| `crown_braid` | `braids` | クラウンブレイド | `crown braid` | サンプル：女性 | 頭まわりを囲むように編んだ髪型 | `/assets/dictionary/hairstyle/female/hairstyle-crown-braid.webp` | - |

## 前髪

| id | categoryId | 日本語名 | prompt | sample表示 | memo | femaleImage | maleImage |
|---|---|---|---|---|---|---|---|
| `bangs` | `bangs` | 前髪 | `bangs` | サンプル：女性 | 前髪を追加する基本の指定 | `/assets/dictionary/hairstyle/female/hairstyle-bangs.webp` | - |
| `blunt_bangs` | `bangs` | ぱっつん前髪 | `blunt bangs` | サンプル：女性 | まっすぐ切りそろえた前髪 | `/assets/dictionary/hairstyle/female/hairstyle-blunt-bangs.webp` | - |
| `short_bangs` | `bangs` | 短い前髪 | `short bangs` | 女性/男性 | 短めの長さにした前髪 | `/assets/dictionary/hairstyle/female/hairstyle-short-bangs.webp` | `/assets/dictionary/hairstyle/male/hairstyle-short-bangs.webp` |
| `long_bangs` | `bangs` | 長い前髪 | `long bangs` | 女性/男性 | 長めに伸びた前髪 | `/assets/dictionary/hairstyle/female/hairstyle-long-bangs.webp` | `/assets/dictionary/hairstyle/male/hairstyle-long-bangs.webp` |
| `side_swept_bangs` | `bangs` | 流した前髪 | `side swept bangs` | 女性/男性 | 横方向に流した前髪 | `/assets/dictionary/hairstyle/female/hairstyle-side-swept-bangs.webp` | `/assets/dictionary/hairstyle/male/hairstyle-side-swept-bangs.webp` |
| `center_parted_bangs` | `bangs` | センター分け | `center parted bangs` | 女性/男性 | 中央で分けた前髪 | `/assets/dictionary/hairstyle/female/hairstyle-center-parted-bangs.webp` | `/assets/dictionary/hairstyle/male/hairstyle-center-parted-bangs.webp` |
| `curtained_bangs` | `bangs` | カーテンバング | `curtained bangs` | サンプル：女性 | 顔まわりに分かれて落ちる前髪 | `/assets/dictionary/hairstyle/female/hairstyle-curtained-bangs.webp` | - |
| `asymmetrical_bangs` | `bangs` | アシンメトリー前髪 | `asymmetrical bangs` | サンプル：女性 | 左右差のある前髪 | `/assets/dictionary/hairstyle/female/hairstyle-asymmetrical-bangs.webp` | - |
| `arched_bangs` | `bangs` | アーチ前髪 | `arched bangs` | サンプル：女性 | 丸みのあるラインを作る前髪 | `/assets/dictionary/hairstyle/female/hairstyle-arched-bangs.webp` | - |
| `hair_between_eyes` | `bangs` | 目の間にかかる髪 | `hair between eyes` | サンプル：女性 | 目の間に髪が落ちる指定 | `/assets/dictionary/hairstyle/female/hairstyle-hair-between-eyes.webp` | - |
| `choppy_bangs` | `bangs` | チョッピーバング | `choppy bangs` | サンプル：女性 | 束感やすき間のある前髪 | `/assets/dictionary/hairstyle/female/hairstyle-choppy-bangs.webp` | - |
| `hair_over_eyes` | `bangs` | 目にかかる髪 | `hair over eyes` | サンプル：女性 | 目元を髪で隠す指定 | `/assets/dictionary/hairstyle/female/hairstyle-hair-over-eyes.webp` | - |
| `hair_over_one_eye` | `bangs` | 片目にかかる髪 | `hair over one eye` | 女性/男性 | 片目だけを髪で隠す指定 | `/assets/dictionary/hairstyle/female/hairstyle-hair-over-one-eye.webp` | `/assets/dictionary/hairstyle/male/hairstyle-hair-over-one-eye.webp` |
| `diagonal_bangs` | `bangs` | 斜め前髪 | `diagonal bangs` | サンプル：女性 | 斜めに流れる形の前髪 | `/assets/dictionary/hairstyle/female/hairstyle-diagonal-bangs.webp` | - |
| `no_bangs` | `bangs` | 前髪なし | `no bangs` | 女性/男性 | 前髪を作らない指定 | `/assets/dictionary/hairstyle/female/hairstyle-no-bangs.webp` | `/assets/dictionary/hairstyle/male/hairstyle-no-bangs.webp` |
| `bangs_pinned_back` | `bangs` | 留めた前髪 | `bangs pinned back` | サンプル：女性 | 前髪を留めて額を見せる指定 | `/assets/dictionary/hairstyle/female/hairstyle-bangs-pinned-back.webp` | - |

## 顔まわり

| id | categoryId | 日本語名 | prompt | sample表示 | memo | femaleImage | maleImage |
|---|---|---|---|---|---|---|---|
| `sidelocks` | `face_around` | サイドロック | `sidelocks` | サンプル：女性 | 顔の横に垂れる髪を指定する言葉 | `/assets/dictionary/hairstyle/female/hairstyle-sidelocks.webp` | - |
| `asymmetrical_sidelocks` | `face_around` | 左右非対称のサイドロック | `asymmetrical sidelocks` | サンプル：女性 | 左右で長さや形の違うサイドロック | `/assets/dictionary/hairstyle/female/hairstyle-asymmetrical-sidelocks.webp` | - |
| `hair_intakes` | `face_around` | ヘアインテーク | `hair intakes` | サンプル：女性 | 前髪上部が盛り上がるアニメ風の髪型パーツ | `/assets/dictionary/hairstyle/female/hairstyle-hair-intakes.webp` | - |
| `ahoge` | `face_around` | アホ毛 | `ahoge` | 女性/男性 | 頭頂部から跳ねた毛を追加する指定 | `/assets/dictionary/hairstyle/female/hairstyle-ahoge.webp` | `/assets/dictionary/hairstyle/male/hairstyle-ahoge.webp` |
| `hair_over_shoulder` | `face_around` | 肩にかかる髪 | `hair over shoulder` | サンプル：女性 | 髪が肩の前に流れる形を指定する言葉 | `/assets/dictionary/hairstyle/female/hairstyle-hair-over-shoulder.webp` | - |
| `hair_behind_ear` | `face_around` | 耳かけヘア | `hair behind ear` | サンプル：女性 | 髪を耳にかけた形にする指定 | `/assets/dictionary/hairstyle/female/hairstyle-hair-behind-ear.webp` | - |
| `hair_flaps` | `face_around` | 横に跳ねた毛束 | `hair flaps` | サンプル：女性 | 横方向に跳ねる毛束を追加する指定 | `/assets/dictionary/hairstyle/female/hairstyle-hair-flaps.webp` | - |

## その他

| id | categoryId | 日本語名 | prompt | sample表示 | memo | femaleImage | maleImage |
|---|---|---|---|---|---|---|---|
| `bald` | `other` | スキンヘッド | `bald` | サンプル：男性 | 髪のない頭部を指定する言葉 | - | `/assets/dictionary/hairstyle/male/hairstyle-bald.webp` |
| `mohawk` | `other` | モヒカン | `mohawk` | サンプル：男性 | 中央に髪を残して立てる髪型 | - | `/assets/dictionary/hairstyle/male/hairstyle-mohawk.webp` |
| `crew_cut` | `other` | クルーカット | `crew cut` | サンプル：男性 | 全体を短く整えたすっきりした髪型 | - | `/assets/dictionary/hairstyle/male/hairstyle-crew-cut.webp` |
| `buzz_cut` | `other` | 坊主 | `buzz cut` | サンプル：男性 | 短く刈り込んだシンプルな髪型 | - | `/assets/dictionary/hairstyle/male/hairstyle-buzz-cut.webp` |
| `pompadour` | `other` | ポンパドール | `pompadour` | サンプル：男性 | 前髪を大きく持ち上げた髪型 | - | `/assets/dictionary/hairstyle/male/hairstyle-pompadour.webp` |
| `quiff` | `other` | クイッフ | `quiff` | サンプル：男性 | 前髪に高さと流れを出す髪型 | - | `/assets/dictionary/hairstyle/male/hairstyle-quiff.webp` |

## TypeScript化する時の推奨構造

```ts
{
  id: "short_hair",
  category: "length",
  categoryLabel: "長さ",
  nameJa: "ショートヘア",
  prompt: "short hair",
  memo: ["短めで扱いやすい基本の髪型"],
  samples: [
    {
      variant: "female",
      label: "女性",
      image: "/assets/dictionary/hairstyle/female/hairstyle-short-hair.webp",
    },
    {
      variant: "male",
      label: "男性",
      image: "/assets/dictionary/hairstyle/male/hairstyle-short-hair.webp",
    },
  ],
}
```

## 実装前チェック

- `short_ponytail` のWebPが想定パスに存在するか確認。
- 全項目の `femaleImage` / `maleImage` が実ファイルと一致するか確認。
- `サンプル：女性` / `サンプル：男性` の表示が性別固定に見えないか確認。
- `other` カテゴリ内でも「男性向け」「女性向け」表現を使わない。
