export type DictionarySampleVariant = "female" | "male";

export type DictionarySample = {
  variant: DictionarySampleVariant;
  label: "女性" | "男性";
  image: string;
};

export type HairstyleDictionaryItem = {
  id: string;
  category: string;
  categoryLabel: string;
  nameJa: string;
  prompt: string;
  memo: string[];
  samples: DictionarySample[];
};

export const hairstyleCategories = [
  { id: "length", label: "長さ" },
  { id: "shape", label: "形・シルエット" },
  { id: "ponytail", label: "ポニーテール" },
  { id: "twintails", label: "ツインテール" },
  { id: "bun_updo", label: "お団子・アップ" },
  { id: "braid", label: "三つ編み" },
  { id: "bangs", label: "前髪" },
  { id: "face_around", label: "顔まわり" },
  { id: "other", label: "その他" },
] as const;

export const hairstyleDictionaryItems: HairstyleDictionaryItem[] = [
  {
    id: "very_short_hair",
    category: "length",
    categoryLabel: "長さ",
    nameJa: "ベリーショート",
    prompt: "very short hair",
    memo: ["かなり短い長さを指定する髪型"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-very-short-hair.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-very-short-hair-male.webp",
      },
    ],
  },
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
        image: "/assets/dictionary/hairstyle/male/hairstyle-short-hair-male.webp",
      },
    ],
  },
  {
    id: "medium_hair",
    category: "length",
    categoryLabel: "長さ",
    nameJa: "ミディアムヘア",
    prompt: "medium hair",
    memo: ["長すぎず短すぎない中間の髪型"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-medium-hair.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-medium-hair-male.webp",
      },
    ],
  },
  {
    id: "long_hair",
    category: "length",
    categoryLabel: "長さ",
    nameJa: "ロングヘア",
    prompt: "long hair",
    memo: ["肩より長い髪を指定する基本の髪型"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-long-hair.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-long-hair-male.webp",
      },
    ],
  },
  {
    id: "very_long_hair",
    category: "length",
    categoryLabel: "長さ",
    nameJa: "ベリーロング",
    prompt: "very long hair",
    memo: [
      "腰あたりまで伸びる長い髪型",
      "近い構図では髪の流れが崩れやすい",
    ],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-very-long-hair.webp",
      },
    ],
  },
  {
    id: "absurdly_long_hair",
    category: "length",
    categoryLabel: "長さ",
    nameJa: "スーパーロングヘア",
    prompt: "absurdly long hair",
    memo: [
      "画面内で大きく広がる長い髪型",
      "全身構図で髪の長さを見せやすい",
    ],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-absurdly-long-hair.webp",
      },
    ],
  },
  {
    id: "straight_hair",
    category: "shape",
    categoryLabel: "形・シルエット",
    nameJa: "ストレートヘア",
    prompt: "straight hair",
    memo: ["まっすぐな髪質や流れを指定する言葉"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-straight-hair.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-straight-hair-male.webp",
      },
    ],
  },
  {
    id: "wavy_hair",
    category: "shape",
    categoryLabel: "形・シルエット",
    nameJa: "ウェーブヘア",
    prompt: "wavy hair",
    memo: ["ゆるく波打つ髪の流れを作る髪型"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-wavy-hair.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-wavy-hair-male.webp",
      },
    ],
  },
  {
    id: "curly_hair",
    category: "shape",
    categoryLabel: "形・シルエット",
    nameJa: "カーリーヘア",
    prompt: "curly hair",
    memo: ["巻きの強いカールを出しやすい髪型"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-curly-hair.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-curly-hair-male.webp",
      },
    ],
  },
  {
    id: "messy_hair",
    category: "shape",
    categoryLabel: "形・シルエット",
    nameJa: "無造作ヘア",
    prompt: "messy hair",
    memo: ["整えすぎない自然な乱れを出す髪型"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-messy-hair.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-messy-hair-male.webp",
      },
    ],
  },
  {
    id: "bob_cut",
    category: "shape",
    categoryLabel: "形・シルエット",
    nameJa: "ボブカット",
    prompt: "bob cut",
    memo: ["丸みのある短めの定番シルエット"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-bob-cut.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-bob-cut-male.webp",
      },
    ],
  },
  {
    id: "long_bob",
    category: "shape",
    categoryLabel: "形・シルエット",
    nameJa: "ロングボブ",
    prompt: "long bob",
    memo: ["ボブより長めで肩周りに収まる髪型"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-long-bob.webp",
      },
    ],
  },
  {
    id: "pixie_cut",
    category: "shape",
    categoryLabel: "形・シルエット",
    nameJa: "ピクシーカット",
    prompt: "pixie cut",
    memo: ["短く軽いシルエットに寄せる髪型"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-pixie-cut.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-pixie-cut-male.webp",
      },
    ],
  },
  {
    id: "bowl_cut",
    category: "shape",
    categoryLabel: "形・シルエット",
    nameJa: "ボウルカット",
    prompt: "bowl cut",
    memo: ["丸く切りそろえたラインが出やすい髪型"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-bowl-cut.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-bowl-cut-male.webp",
      },
    ],
  },
  {
    id: "hime_cut",
    category: "shape",
    categoryLabel: "形・シルエット",
    nameJa: "姫カット",
    prompt: "hime cut",
    memo: ["顔横を切りそろえた形が出やすい髪型"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-hime-cut.webp",
      },
    ],
  },
  {
    id: "wolf_cut",
    category: "shape",
    categoryLabel: "形・シルエット",
    nameJa: "ウルフカット",
    prompt: "wolf cut",
    memo: ["段差と毛先の動きが出やすい髪型"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-wolf-cut.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-wolf-cut-male.webp",
      },
    ],
  },
  {
    id: "layered_hair",
    category: "shape",
    categoryLabel: "形・シルエット",
    nameJa: "レイヤーヘア",
    prompt: "layered hair",
    memo: ["髪に段差をつけて動きを出す指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-layered-hair.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-layered-hair-male.webp",
      },
    ],
  },
  {
    id: "fluffy_hair",
    category: "shape",
    categoryLabel: "形・シルエット",
    nameJa: "ふんわりヘア",
    prompt: "fluffy hair",
    memo: ["髪全体にやわらかい量感を足す指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-fluffy-hair.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-fluffy-hair-male.webp",
      },
    ],
  },
  {
    id: "asymmetrical_hair",
    category: "shape",
    categoryLabel: "形・シルエット",
    nameJa: "アシンメトリーヘア",
    prompt: "asymmetrical hair",
    memo: ["左右差のある髪型に寄せる指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-asymmetrical-hair.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-asymmetrical-hair-male.webp",
      },
    ],
  },
  {
    id: "ringlets",
    category: "shape",
    categoryLabel: "形・シルエット",
    nameJa: "縦ロール",
    prompt: "ringlets",
    memo: ["高貴でクラシカルな印象を出しやすい髪型"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-ringlets.webp",
      },
    ],
  },
  {
    id: "slicked_back_hair",
    category: "shape",
    categoryLabel: "形・シルエット",
    nameJa: "オールバック",
    prompt: "slicked back hair",
    memo: ["前髪を後ろへ流して額を見せる髪型"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-slicked-back-hair.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-slicked-back-hair-male.webp",
      },
    ],
  },
  {
    id: "blunt_cut",
    category: "shape",
    categoryLabel: "形・シルエット",
    nameJa: "ブラントカット",
    prompt: "blunt cut",
    memo: ["毛先をまっすぐ切りそろえる指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-blunt-cut.webp",
      },
    ],
  },
  {
    id: "flipped_hair",
    category: "shape",
    categoryLabel: "形・シルエット",
    nameJa: "外ハネヘア",
    prompt: "flipped hair",
    memo: ["毛先を外側に跳ねさせる指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-flipped-hair.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-flipped-hair-male.webp",
      },
    ],
  },
  {
    id: "one_side_up",
    category: "shape",
    categoryLabel: "形・シルエット",
    nameJa: "サイドアップ",
    prompt: "one side up",
    memo: ["片側の髪だけを上げるアレンジ"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-one-side-up.webp",
      },
    ],
  },
  {
    id: "two_side_up",
    category: "shape",
    categoryLabel: "形・シルエット",
    nameJa: "ツーサイドアップ",
    prompt: "two side up",
    memo: ["両側の一部を上げるアレンジ"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-two-side-up.webp",
      },
    ],
  },
  {
    id: "drill_hair",
    category: "shape",
    categoryLabel: "形・シルエット",
    nameJa: "ドリルヘア",
    prompt: "drill hair",
    memo: ["太く巻いた特徴的な縦カール"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-drill-hair.webp",
      },
    ],
  },
  {
    id: "undercut",
    category: "shape",
    categoryLabel: "形・シルエット",
    nameJa: "アンダーカット",
    prompt: "undercut",
    memo: ["内側や下側を短く刈り込む髪型"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-undercut.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-undercut-male.webp",
      },
    ],
  },
  {
    id: "side_shave",
    category: "shape",
    categoryLabel: "形・シルエット",
    nameJa: "サイドシェーブ",
    prompt: "side shave",
    memo: ["横側を短く刈り込む髪型"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-side-shave.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-side-shave-male.webp",
      },
    ],
  },
  {
    id: "spiky_hair",
    category: "shape",
    categoryLabel: "形・シルエット",
    nameJa: "スパイクヘア",
    prompt: "spiky hair",
    memo: ["毛束を立たせたシャープな髪型"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-spiky-hair.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-spiky-hair-male.webp",
      },
    ],
  },
  {
    id: "ponytail",
    category: "ponytail",
    categoryLabel: "ポニーテール",
    nameJa: "ポニーテール",
    prompt: "ponytail",
    memo: ["後ろで一つにまとめた基本の結び髪"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-ponytail.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-ponytail-male.webp",
      },
    ],
  },
  {
    id: "high_ponytail",
    category: "ponytail",
    categoryLabel: "ポニーテール",
    nameJa: "ハイポニーテール",
    prompt: "high ponytail",
    memo: ["高い位置で一つにまとめたポニーテール"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-high-ponytail.webp",
      },
    ],
  },
  {
    id: "low_ponytail",
    category: "ponytail",
    categoryLabel: "ポニーテール",
    nameJa: "ローポニーテール",
    prompt: "low ponytail",
    memo: ["低い位置で一つにまとめたポニーテール"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-low-ponytail.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-low-ponytail-male.webp",
      },
    ],
  },
  {
    id: "side_ponytail",
    category: "ponytail",
    categoryLabel: "ポニーテール",
    nameJa: "サイドポニーテール",
    prompt: "side ponytail",
    memo: ["横側に寄せて一つにまとめたポニーテール"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-side-ponytail.webp",
      },
    ],
  },
  {
    id: "short_ponytail",
    category: "ponytail",
    categoryLabel: "ポニーテール",
    nameJa: "ショートポニーテール",
    prompt: "short ponytail",
    memo: ["短めの毛束を一つにまとめたポニーテール"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-short-ponytail.webp",
      },
    ],
  },
  {
    id: "long_ponytail",
    category: "ponytail",
    categoryLabel: "ポニーテール",
    nameJa: "ロングポニーテール",
    prompt: "long ponytail",
    memo: ["長い毛束を一つにまとめたポニーテール"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-long-ponytail.webp",
      },
    ],
  },
  {
    id: "folded_ponytail",
    category: "ponytail",
    categoryLabel: "ポニーテール",
    nameJa: "折り返しポニーテール",
    prompt: "folded ponytail",
    memo: ["毛束を折り返した形のポニーテール"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-folded-ponytail.webp",
      },
    ],
  },
  {
    id: "twin_tails",
    category: "twintails",
    categoryLabel: "ツインテール",
    nameJa: "ツインテール",
    prompt: "twin tails",
    memo: ["左右に分けて結んだ基本の結び髪"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-twin-tails.webp",
      },
    ],
  },
  {
    id: "high_twin_tails",
    category: "twintails",
    categoryLabel: "ツインテール",
    nameJa: "ハイツインテール",
    prompt: "high twin tails",
    memo: ["高い位置で左右に結んだツインテール"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-high-twin-tails.webp",
      },
    ],
  },
  {
    id: "low_twin_tails",
    category: "twintails",
    categoryLabel: "ツインテール",
    nameJa: "ローツインテール",
    prompt: "low twin tails",
    memo: ["低い位置で左右に結んだツインテール"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-low-twin-tails.webp",
      },
    ],
  },
  {
    id: "short_twin_tails",
    category: "twintails",
    categoryLabel: "ツインテール",
    nameJa: "ショートツインテール",
    prompt: "short twin tails",
    memo: ["短めの毛束を左右に結んだツインテール"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-short-twin-tails.webp",
      },
    ],
  },
  {
    id: "long_twin_tails",
    category: "twintails",
    categoryLabel: "ツインテール",
    nameJa: "ロングツインテール",
    prompt: "long twin tails",
    memo: ["長い毛束を左右に結んだツインテール"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-long-twin-tails.webp",
      },
    ],
  },
  {
    id: "hair_bun",
    category: "bun_updo",
    categoryLabel: "お団子・アップ",
    nameJa: "お団子",
    prompt: "hair bun",
    memo: ["髪を丸くまとめた基本のお団子ヘア"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-hair-bun.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-hair-bun-male.webp",
      },
    ],
  },
  {
    id: "high_bun",
    category: "bun_updo",
    categoryLabel: "お団子・アップ",
    nameJa: "高い位置のお団子",
    prompt: "high bun",
    memo: ["高い位置で髪をまとめたお団子ヘア"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-high-bun.webp",
      },
    ],
  },
  {
    id: "low_bun",
    category: "bun_updo",
    categoryLabel: "お団子・アップ",
    nameJa: "低い位置のお団子",
    prompt: "low bun",
    memo: ["低い位置で髪をまとめたお団子ヘア"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-low-bun.webp",
      },
    ],
  },
  {
    id: "double_bun",
    category: "bun_updo",
    categoryLabel: "お団子・アップ",
    nameJa: "ダブルお団子",
    prompt: "double bun",
    memo: ["左右に分けて丸くまとめたお団子ヘア"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-double-bun.webp",
      },
    ],
  },
  {
    id: "side_bun",
    category: "bun_updo",
    categoryLabel: "お団子・アップ",
    nameJa: "サイドお団子",
    prompt: "side bun",
    memo: ["横側に寄せてまとめたお団子ヘア"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-side-bun.webp",
      },
    ],
  },
  {
    id: "updo",
    category: "bun_updo",
    categoryLabel: "お団子・アップ",
    nameJa: "アップヘア",
    prompt: "updo",
    memo: ["髪を上げてまとめたアレンジヘア"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-updo.webp",
      },
    ],
  },
  {
    id: "half_updo",
    category: "bun_updo",
    categoryLabel: "お団子・アップ",
    nameJa: "ハーフアップ",
    prompt: "half updo",
    memo: ["上側の髪だけをまとめるアレンジ"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-half-updo.webp",
      },
    ],
  },
  {
    id: "cone_hair_bun",
    category: "bun_updo",
    categoryLabel: "お団子・アップ",
    nameJa: "コーン型お団子",
    prompt: "cone hair bun",
    memo: ["高さのある形にまとめたお団子ヘア"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-cone-hair-bun.webp",
      },
    ],
  },
  {
    id: "multi_tied_hair",
    category: "bun_updo",
    categoryLabel: "お団子・アップ",
    nameJa: "複数結びヘア",
    prompt: "multi tied hair",
    memo: ["複数の位置で髪を結んだアレンジヘア"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-multi-tied-hair.webp",
      },
    ],
  },
  {
    id: "braid",
    category: "braid",
    categoryLabel: "三つ編み",
    nameJa: "三つ編み",
    prompt: "braid",
    memo: ["髪を編み込んだ基本の三つ編み"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-braid.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-braid-male.webp",
      },
    ],
  },
  {
    id: "side_braid",
    category: "braid",
    categoryLabel: "三つ編み",
    nameJa: "三つ編みサイド",
    prompt: "side braid",
    memo: ["横側に三つ編みを作るアレンジ"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-side-braid.webp",
      },
    ],
  },
  {
    id: "twin_braids",
    category: "braid",
    categoryLabel: "三つ編み",
    nameJa: "三つ編みツイン",
    prompt: "twin braids",
    memo: ["左右に分けて編んだ三つ編み"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-twin-braids.webp",
      },
    ],
  },
  {
    id: "braided_ponytail",
    category: "braid",
    categoryLabel: "三つ編み",
    nameJa: "三つ編みポニーテール",
    prompt: "braided ponytail",
    memo: ["編み込んだ毛束をまとめたポニーテール"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-braided-ponytail.webp",
      },
    ],
  },
  {
    id: "braided_bun",
    category: "braid",
    categoryLabel: "三つ編み",
    nameJa: "三つ編みお団子",
    prompt: "braided bun",
    memo: ["三つ編みを丸くまとめたお団子ヘア"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-braided-bun.webp",
      },
    ],
  },
  {
    id: "french_braid",
    category: "braid",
    categoryLabel: "三つ編み",
    nameJa: "フレンチブレイド",
    prompt: "french braid",
    memo: ["頭に沿って編み込む三つ編みアレンジ"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-french-braid.webp",
      },
    ],
  },
  {
    id: "crown_braid",
    category: "braid",
    categoryLabel: "三つ編み",
    nameJa: "クラウンブレイド",
    prompt: "crown braid",
    memo: ["頭まわりを囲むように編んだ髪型"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-crown-braid.webp",
      },
    ],
  },
  {
    id: "bangs",
    category: "bangs",
    categoryLabel: "前髪",
    nameJa: "前髪",
    prompt: "bangs",
    memo: ["前髪を追加する基本の指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-bangs.webp",
      },
    ],
  },
  {
    id: "blunt_bangs",
    category: "bangs",
    categoryLabel: "前髪",
    nameJa: "ぱっつん前髪",
    prompt: "blunt bangs",
    memo: ["まっすぐ切りそろえた前髪"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-blunt-bangs.webp",
      },
    ],
  },
  {
    id: "short_bangs",
    category: "bangs",
    categoryLabel: "前髪",
    nameJa: "短い前髪",
    prompt: "short bangs",
    memo: ["短めの長さにした前髪"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-short-bangs.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-short-bangs-male.webp",
      },
    ],
  },
  {
    id: "long_bangs",
    category: "bangs",
    categoryLabel: "前髪",
    nameJa: "長い前髪",
    prompt: "long bangs",
    memo: ["長めに伸びた前髪"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-long-bangs.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-long-bangs-male.webp",
      },
    ],
  },
  {
    id: "side_swept_bangs",
    category: "bangs",
    categoryLabel: "前髪",
    nameJa: "流した前髪",
    prompt: "side swept bangs",
    memo: ["横方向に流した前髪"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-side-swept-bangs.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-side-swept-bangs-male.webp",
      },
    ],
  },
  {
    id: "center_parted_bangs",
    category: "bangs",
    categoryLabel: "前髪",
    nameJa: "センター分け",
    prompt: "center parted bangs",
    memo: ["中央で分けた前髪"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-center-parted-bangs.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-center-parted-bangs-male.webp",
      },
    ],
  },
  {
    id: "curtained_bangs",
    category: "bangs",
    categoryLabel: "前髪",
    nameJa: "カーテンバング",
    prompt: "curtained bangs",
    memo: ["顔まわりに分かれて落ちる前髪"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-curtained-bangs.webp",
      },
    ],
  },
  {
    id: "asymmetrical_bangs",
    category: "bangs",
    categoryLabel: "前髪",
    nameJa: "アシンメトリー前髪",
    prompt: "asymmetrical bangs",
    memo: ["左右差のある前髪"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-asymmetrical-bangs.webp",
      },
    ],
  },
  {
    id: "arched_bangs",
    category: "bangs",
    categoryLabel: "前髪",
    nameJa: "アーチ前髪",
    prompt: "arched bangs",
    memo: ["丸みのあるラインを作る前髪"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-arched-bangs.webp",
      },
    ],
  },
  {
    id: "hair_between_eyes",
    category: "bangs",
    categoryLabel: "前髪",
    nameJa: "目の間にかかる髪",
    prompt: "hair between eyes",
    memo: ["目の間に髪が落ちる指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-hair-between-eyes.webp",
      },
    ],
  },
  {
    id: "choppy_bangs",
    category: "bangs",
    categoryLabel: "前髪",
    nameJa: "チョッピーバング",
    prompt: "choppy bangs",
    memo: ["束感やすき間のある前髪"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-choppy-bangs.webp",
      },
    ],
  },
  {
    id: "hair_over_eyes",
    category: "bangs",
    categoryLabel: "前髪",
    nameJa: "目にかかる髪",
    prompt: "hair over eyes",
    memo: ["目元を髪で隠す指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-hair-over-eyes.webp",
      },
    ],
  },
  {
    id: "hair_over_one_eye",
    category: "bangs",
    categoryLabel: "前髪",
    nameJa: "片目にかかる髪",
    prompt: "hair over one eye",
    memo: ["片目だけを髪で隠す指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-hair-over-one-eye.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-hair-over-one-eye-male.webp",
      },
    ],
  },
  {
    id: "diagonal_bangs",
    category: "bangs",
    categoryLabel: "前髪",
    nameJa: "斜め前髪",
    prompt: "diagonal bangs",
    memo: ["斜めに流れる形の前髪"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-diagonal-bangs.webp",
      },
    ],
  },
  {
    id: "no_bangs",
    category: "bangs",
    categoryLabel: "前髪",
    nameJa: "前髪なし",
    prompt: "no bangs",
    memo: ["前髪を作らない指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-no-bangs.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-no-bangs-male.webp",
      },
    ],
  },
  {
    id: "bangs_pinned_back",
    category: "bangs",
    categoryLabel: "前髪",
    nameJa: "留めた前髪",
    prompt: "bangs pinned back",
    memo: ["前髪を留めて額を見せる指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-bangs-pinned-back.webp",
      },
    ],
  },
  {
    id: "sidelocks",
    category: "face_around",
    categoryLabel: "顔まわり",
    nameJa: "サイドロック",
    prompt: "sidelocks",
    memo: ["顔の横に垂れる髪を指定する言葉"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-sidelocks.webp",
      },
    ],
  },
  {
    id: "asymmetrical_sidelocks",
    category: "face_around",
    categoryLabel: "顔まわり",
    nameJa: "左右非対称のサイドロック",
    prompt: "asymmetrical sidelocks",
    memo: ["左右で長さや形の違うサイドロック"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-asymmetrical-sidelocks.webp",
      },
    ],
  },
  {
    id: "hair_intakes",
    category: "face_around",
    categoryLabel: "顔まわり",
    nameJa: "ヘアインテーク",
    prompt: "hair intakes",
    memo: ["前髪上部が盛り上がるアニメ風の髪型パーツ"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-hair-intakes.webp",
      },
    ],
  },
  {
    id: "ahoge",
    category: "face_around",
    categoryLabel: "顔まわり",
    nameJa: "アホ毛",
    prompt: "ahoge",
    memo: ["頭頂部から跳ねた毛を追加する指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-ahoge.webp",
      },
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-ahoge-male.webp",
      },
    ],
  },
  {
    id: "hair_over_shoulder",
    category: "face_around",
    categoryLabel: "顔まわり",
    nameJa: "肩にかかる髪",
    prompt: "hair over shoulder",
    memo: ["髪が肩の前に流れる形を指定する言葉"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-hair-over-shoulder.webp",
      },
    ],
  },
  {
    id: "hair_behind_ear",
    category: "face_around",
    categoryLabel: "顔まわり",
    nameJa: "耳かけヘア",
    prompt: "hair behind ear",
    memo: ["髪を耳にかけた形にする指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-hair-behind-ear.webp",
      },
    ],
  },
  {
    id: "hair_flaps",
    category: "face_around",
    categoryLabel: "顔まわり",
    nameJa: "横に跳ねた毛束",
    prompt: "hair flaps",
    memo: ["横方向に跳ねる毛束を追加する指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/hairstyle/female/hairstyle-hair-flaps.webp",
      },
    ],
  },
  {
    id: "bald",
    category: "other",
    categoryLabel: "その他",
    nameJa: "スキンヘッド",
    prompt: "bald",
    memo: ["髪のない頭部を指定する言葉"],
    samples: [
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-bald-male.webp",
      },
    ],
  },
  {
    id: "mohawk",
    category: "other",
    categoryLabel: "その他",
    nameJa: "モヒカン",
    prompt: "mohawk",
    memo: ["中央に髪を残して立てる髪型"],
    samples: [
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-mohawk-male.webp",
      },
    ],
  },
  {
    id: "crew_cut",
    category: "other",
    categoryLabel: "その他",
    nameJa: "クルーカット",
    prompt: "crew cut",
    memo: ["全体を短く整えたすっきりした髪型"],
    samples: [
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-crew-cut-male.webp",
      },
    ],
  },
  {
    id: "buzz_cut",
    category: "other",
    categoryLabel: "その他",
    nameJa: "坊主",
    prompt: "buzz cut",
    memo: ["短く刈り込んだシンプルな髪型"],
    samples: [
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-buzz-cut-male.webp",
      },
    ],
  },
  {
    id: "pompadour",
    category: "other",
    categoryLabel: "その他",
    nameJa: "ポンパドール",
    prompt: "pompadour",
    memo: ["前髪を大きく持ち上げた髪型"],
    samples: [
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-pompadour-male.webp",
      },
    ],
  },
  {
    id: "quiff",
    category: "other",
    categoryLabel: "その他",
    nameJa: "クイッフ",
    prompt: "quiff",
    memo: ["前髪に高さと流れを出す髪型"],
    samples: [
      {
        variant: "male",
        label: "男性",
        image: "/assets/dictionary/hairstyle/male/hairstyle-quiff-male.webp",
      },
    ],
  },
];
