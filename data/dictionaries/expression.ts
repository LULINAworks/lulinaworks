export type DictionarySampleVariant = "female";

export type DictionarySample = {
  variant: DictionarySampleVariant;
  label: "女性";
  image: string;
};

export type ExpressionDictionaryItem = {
  id: string;
  category: string;
  categoryLabel: string;
  nameJa: string;
  prompt: string;
  memo: string[];
  samples: DictionarySample[];
};

export const expressionCategories = [
  { id: "joy", label: "喜び・笑顔" },
  { id: "anger_displeasure", label: "怒り・不満・嫌悪" },
  { id: "sadness", label: "悲しみ・涙" },
  { id: "surprise_fear", label: "驚き・恐怖" },
  { id: "embarrassment", label: "照れ・赤面" },
  { id: "worry_discomfort", label: "不安・緊張・困り" },
  { id: "neutral_tired", label: "無表情・真面目・ぼんやり" },
  { id: "symbol_expression", label: "記号顔・特殊な目" },
  { id: "mouth_tongue", label: "口元・舌" },
  { id: "expression_parts", label: "表情パーツ・演出" },
] as const;

export const expressionDictionaryItems: ExpressionDictionaryItem[] = [
  {
    id: "smile",
    category: "joy",
    categoryLabel: "喜び・笑顔",
    nameJa: "笑顔",
    prompt: "smile",
    memo: ["自然な笑顔を指定する基本の表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-smile.webp",
      },
    ],
  },
  {
    id: "soft_smile",
    category: "joy",
    categoryLabel: "喜び・笑顔",
    nameJa: "やわらかい笑顔",
    prompt: "soft smile",
    memo: ["控えめで穏やかな笑顔を出したいときの表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-soft-smile.webp",
      },
    ],
  },
  {
    id: "grin",
    category: "joy",
    categoryLabel: "喜び・笑顔",
    nameJa: "にっこり笑う",
    prompt: "grin",
    memo: ["口角を上げてはっきり笑う表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-grin.webp",
      },
    ],
  },
  {
    id: "laughing",
    category: "joy",
    categoryLabel: "喜び・笑顔",
    nameJa: "大きく笑う",
    prompt: "laughing",
    memo: ["口を開けて大きく笑う表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-laughing.webp",
      },
    ],
  },
  {
    id: "excited",
    category: "joy",
    categoryLabel: "喜び・笑顔",
    nameJa: "はしゃいだ表情",
    prompt: "excited",
    memo: ["楽しさや高揚感を出したいときの表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-excited.webp",
      },
    ],
  },
  {
    id: "smirk",
    category: "joy",
    categoryLabel: "喜び・笑顔",
    nameJa: "ニヤリ",
    prompt: "smirk",
    memo: ["余裕やいたずらっぽさを出したいときの表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-smirk.webp",
      },
    ],
  },
  {
    id: "smug",
    category: "joy",
    categoryLabel: "喜び・笑顔",
    nameJa: "得意げ",
    prompt: "smug",
    memo: ["自信や得意そうな印象を出したいときの表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-smug.webp",
      },
    ],
  },
  {
    id: "evil_grin",
    category: "joy",
    categoryLabel: "喜び・笑顔",
    nameJa: "悪い笑み",
    prompt: "evil grin",
    memo: ["企みや悪役っぽい笑みを出したいときの表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-evil-grin.webp",
      },
    ],
  },
  {
    id: "angry",
    category: "anger_displeasure",
    categoryLabel: "怒り・不満・嫌悪",
    nameJa: "怒り顔",
    prompt: "angry",
    memo: ["怒りをはっきり出したいときの基本の表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-angry.webp",
      },
    ],
  },
  {
    id: "annoyed",
    category: "anger_displeasure",
    categoryLabel: "怒り・不満・嫌悪",
    nameJa: "イラッとした表情",
    prompt: "annoyed",
    memo: ["軽い不満や苛立ちを出したいときの表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-annoyed.webp",
      },
    ],
  },
  {
    id: "irritated",
    category: "anger_displeasure",
    categoryLabel: "怒り・不満・嫌悪",
    nameJa: "いらだち",
    prompt: "irritated",
    memo: ["落ち着かない不快感や苛立ちを出したいときの表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-irritated.webp",
      },
    ],
  },
  {
    id: "upset",
    category: "anger_displeasure",
    categoryLabel: "怒り・不満・嫌悪",
    nameJa: "不機嫌",
    prompt: "upset",
    memo: ["怒りや落ち込みが混ざった不機嫌な表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-upset.webp",
      },
    ],
  },
  {
    id: "frown",
    category: "anger_displeasure",
    categoryLabel: "怒り・不満・嫌悪",
    nameJa: "ムッとした表情",
    prompt: "frown",
    memo: ["口元や眉で不満を出したいときの表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-frown.webp",
      },
    ],
  },
  {
    id: "scowl",
    category: "anger_displeasure",
    categoryLabel: "怒り・不満・嫌悪",
    nameJa: "しかめっ面",
    prompt: "scowl",
    memo: ["眉間に力を入れた強い不満や怒りの表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-scowl.webp",
      },
    ],
  },
  {
    id: "pout",
    category: "anger_displeasure",
    categoryLabel: "怒り・不満・嫌悪",
    nameJa: "ふくれっ面",
    prompt: "pout",
    memo: ["頬や口元で拗ねた印象を出したいときの表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-pout.webp",
      },
    ],
  },
  {
    id: "clenched_teeth",
    category: "anger_displeasure",
    categoryLabel: "怒り・不満・嫌悪",
    nameJa: "歯を食いしばる",
    prompt: "clenched teeth",
    memo: ["怒りや我慢を歯を食いしばって出す表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-clenched-teeth.webp",
      },
    ],
  },
  {
    id: "shouting",
    category: "anger_displeasure",
    categoryLabel: "怒り・不満・嫌悪",
    nameJa: "叫ぶ",
    prompt: "shouting",
    memo: ["声を荒げるような強い感情を出す表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-shouting.webp",
      },
    ],
  },
  {
    id: "disgust",
    category: "anger_displeasure",
    categoryLabel: "怒り・不満・嫌悪",
    nameJa: "嫌悪感",
    prompt: "disgust",
    memo: ["不快感や拒否感を出したいときの表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-disgust.webp",
      },
    ],
  },
  {
    id: "disdain",
    category: "anger_displeasure",
    categoryLabel: "怒り・不満・嫌悪",
    nameJa: "軽蔑",
    prompt: "disdain",
    memo: ["相手を見下すような冷たい表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-disdain.webp",
      },
    ],
  },
  {
    id: "v_shaped_eyebrows",
    category: "anger_displeasure",
    categoryLabel: "怒り・不満・嫌悪",
    nameJa: "つり上がった眉",
    prompt: "v-shaped eyebrows",
    memo: ["怒りや真剣さを眉の形で強める指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-v-shaped-eyebrows.webp",
      },
    ],
  },
  {
    id: "sad",
    category: "sadness",
    categoryLabel: "悲しみ・涙",
    nameJa: "悲しい顔",
    prompt: "sad",
    memo: ["悲しさを出したいときの基本の表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-sad.webp",
      },
    ],
  },
  {
    id: "tearing_up",
    category: "sadness",
    categoryLabel: "悲しみ・涙",
    nameJa: "涙ぐむ",
    prompt: "tearing up",
    memo: ["泣く前の涙がにじむ表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-tearing-up.webp",
      },
    ],
  },
  {
    id: "tears",
    category: "sadness",
    categoryLabel: "悲しみ・涙",
    nameJa: "涙",
    prompt: "tears",
    memo: ["表情に涙を加えたいときの指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-tears.webp",
      },
    ],
  },
  {
    id: "streaming_tears",
    category: "sadness",
    categoryLabel: "悲しみ・涙",
    nameJa: "流れる涙",
    prompt: "streaming tears",
    memo: ["涙が流れている状態を強めたいときの指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-streaming-tears.webp",
      },
    ],
  },
  {
    id: "crying",
    category: "sadness",
    categoryLabel: "悲しみ・涙",
    nameJa: "泣き",
    prompt: "crying",
    memo: ["涙を流して泣いている表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-crying.webp",
      },
    ],
  },
  {
    id: "sobbing",
    category: "sadness",
    categoryLabel: "悲しみ・涙",
    nameJa: "すすり泣き",
    prompt: "sobbing",
    memo: ["声を抑えて泣いている印象の表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-sobbing.webp",
      },
    ],
  },
  {
    id: "tearful_smile",
    category: "sadness",
    categoryLabel: "悲しみ・涙",
    nameJa: "泣き笑い",
    prompt: "tearful smile",
    memo: ["悲しさと笑顔が混ざった複雑な表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-tearful-smile.webp",
      },
    ],
  },
  {
    id: "surprised",
    category: "surprise_fear",
    categoryLabel: "驚き・恐怖",
    nameJa: "驚いた顔",
    prompt: "surprised",
    memo: ["驚きを出したいときの基本の表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-surprised.webp",
      },
    ],
  },
  {
    id: "wide_eyed",
    category: "surprise_fear",
    categoryLabel: "驚き・恐怖",
    nameJa: "目を見開く",
    prompt: "wide eyed",
    memo: ["驚きや緊張を目の開きで強める指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-wide-eyed.webp",
      },
    ],
  },
  {
    id: "scared",
    category: "surprise_fear",
    categoryLabel: "驚き・恐怖",
    nameJa: "怖がる表情",
    prompt: "scared",
    memo: ["不安や恐怖を感じている表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-scared.webp",
      },
    ],
  },
  {
    id: "frightened",
    category: "surprise_fear",
    categoryLabel: "驚き・恐怖",
    nameJa: "おびえた表情",
    prompt: "frightened",
    memo: ["怖さに反応して身構えるような表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-frightened.webp",
      },
    ],
  },
  {
    id: "horrified",
    category: "surprise_fear",
    categoryLabel: "驚き・恐怖",
    nameJa: "恐怖にひきつった表情",
    prompt: "horrified",
    memo: ["強い恐怖やショックを出したいときの表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-horrified.webp",
      },
    ],
  },
  {
    id: "panicking",
    category: "surprise_fear",
    categoryLabel: "驚き・恐怖",
    nameJa: "パニック顔",
    prompt: "panicking",
    memo: ["慌てた恐怖や混乱を出したいときの表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-panicking.webp",
      },
    ],
  },
  {
    id: "screaming",
    category: "surprise_fear",
    categoryLabel: "驚き・恐怖",
    nameJa: "悲鳴顔",
    prompt: "screaming face",
    memo: ["恐怖や驚きで叫ぶような表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-screaming.webp",
      },
    ],
  },
  {
    id: "blush",
    category: "embarrassment",
    categoryLabel: "照れ・赤面",
    nameJa: "赤面",
    prompt: "blush",
    memo: ["頬を赤らめた表情にしたいときの指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-blush.webp",
      },
    ],
  },
  {
    id: "deep_blush",
    category: "embarrassment",
    categoryLabel: "照れ・赤面",
    nameJa: "強い赤面",
    prompt: "deep blush",
    memo: ["赤面をより強く出したいときの指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-deep-blush.webp",
      },
    ],
  },
  {
    id: "embarrassed",
    category: "embarrassment",
    categoryLabel: "照れ・赤面",
    nameJa: "恥ずかしそう",
    prompt: "embarrassed",
    memo: ["恥ずかしさや気まずさを出したいときの表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-embarrassed.webp",
      },
    ],
  },
  {
    id: "shy",
    category: "embarrassment",
    categoryLabel: "照れ・赤面",
    nameJa: "控えめな表情",
    prompt: "shy",
    memo: ["控えめな雰囲気やおずおずした印象の表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-shy.webp",
      },
    ],
  },
  {
    id: "embarrassed_smile",
    category: "embarrassment",
    categoryLabel: "照れ・赤面",
    nameJa: "照れ笑い",
    prompt: "embarrassed smile",
    memo: ["恥ずかしさを笑顔でごまかすような表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-embarrassed-smile.webp",
      },
    ],
  },
  {
    id: "flustered",
    category: "embarrassment",
    categoryLabel: "照れ・赤面",
    nameJa: "あわてた照れ",
    prompt: "flustered",
    memo: ["照れや動揺が混ざった落ち着かない表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-flustered.webp",
      },
    ],
  },
  {
    id: "worried",
    category: "worry_discomfort",
    categoryLabel: "不安・緊張・困り",
    nameJa: "心配",
    prompt: "worried",
    memo: ["不安や心配を感じている表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-worried.webp",
      },
    ],
  },
  {
    id: "nervous",
    category: "worry_discomfort",
    categoryLabel: "不安・緊張・困り",
    nameJa: "緊張",
    prompt: "nervous",
    memo: ["緊張や落ち着かなさを出したいときの表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-nervous.webp",
      },
    ],
  },
  {
    id: "sweatdrop",
    category: "worry_discomfort",
    categoryLabel: "不安・緊張・困り",
    nameJa: "汗マーク",
    prompt: "sweatdrop",
    memo: ["困りや気まずさを記号的に出したいときの指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-sweatdrop.webp",
      },
    ],
  },
  {
    id: "cold_sweat",
    category: "worry_discomfort",
    categoryLabel: "不安・緊張・困り",
    nameJa: "冷や汗",
    prompt: "cold sweat",
    memo: ["焦りや不安を汗で強調したいときの指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-cold-sweat.webp",
      },
    ],
  },
  {
    id: "confused",
    category: "worry_discomfort",
    categoryLabel: "不安・緊張・困り",
    nameJa: "困惑",
    prompt: "confused",
    memo: ["状況が分からず戸惑っている表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-confused.webp",
      },
    ],
  },
  {
    id: "wince",
    category: "worry_discomfort",
    categoryLabel: "不安・緊張・困り",
    nameJa: "顔をしかめる",
    prompt: "wince",
    memo: ["痛みや気まずさで顔をしかめる表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-wince.webp",
      },
    ],
  },
  {
    id: "sigh",
    category: "worry_discomfort",
    categoryLabel: "不安・緊張・困り",
    nameJa: "ため息",
    prompt: "sigh",
    memo: ["疲れやあきらめを含んだ落ち着かない表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-sigh.webp",
      },
    ],
  },
  {
    id: "forced_smile",
    category: "worry_discomfort",
    categoryLabel: "不安・緊張・困り",
    nameJa: "作り笑い",
    prompt: "forced smile",
    memo: ["無理に笑っているようなぎこちない表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-forced-smile.webp",
      },
    ],
  },
  {
    id: "neutral",
    category: "neutral_tired",
    categoryLabel: "無表情・真面目・ぼんやり",
    nameJa: "普通の表情",
    prompt: "neutral",
    memo: ["感情を強く出さない自然な表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-neutral.webp",
      },
    ],
  },
  {
    id: "expressionless",
    category: "neutral_tired",
    categoryLabel: "無表情・真面目・ぼんやり",
    nameJa: "無表情",
    prompt: "expressionless",
    memo: ["感情を抑えた無表情を出したいときの表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-expressionless.webp",
      },
    ],
  },
  {
    id: "blank_expression",
    category: "neutral_tired",
    categoryLabel: "無表情・真面目・ぼんやり",
    nameJa: "感情の薄い表情",
    prompt: "blank expression",
    memo: ["反応が薄くぼんやりした印象の表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-blank-expression.webp",
      },
    ],
  },
  {
    id: "blank_stare",
    category: "neutral_tired",
    categoryLabel: "無表情・真面目・ぼんやり",
    nameJa: "ぼんやり見つめる",
    prompt: "blank stare",
    memo: ["焦点が合わないように見つめる表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-blank-stare.webp",
      },
    ],
  },
  {
    id: "empty_eyes",
    category: "neutral_tired",
    categoryLabel: "無表情・真面目・ぼんやり",
    nameJa: "虚ろな目",
    prompt: "empty eyes",
    memo: ["感情の抜けた目元にしたいときの指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-empty-eyes.webp",
      },
    ],
  },
  {
    id: "dead_eyes",
    category: "neutral_tired",
    categoryLabel: "無表情・真面目・ぼんやり",
    nameJa: "生気のない目",
    prompt: "dead eyes",
    memo: ["生気のない暗い目元を出したいときの指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-dead-eyes.webp",
      },
    ],
  },
  {
    id: "serious",
    category: "neutral_tired",
    categoryLabel: "無表情・真面目・ぼんやり",
    nameJa: "真面目な表情",
    prompt: "serious",
    memo: ["落ち着いた真剣さを出したいときの表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-serious.webp",
      },
    ],
  },
  {
    id: "determined",
    category: "neutral_tired",
    categoryLabel: "無表情・真面目・ぼんやり",
    nameJa: "決意した表情",
    prompt: "determined",
    memo: ["意志の強さや覚悟を出したいときの表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-determined.webp",
      },
    ],
  },
  {
    id: "sleepy",
    category: "neutral_tired",
    categoryLabel: "無表情・真面目・ぼんやり",
    nameJa: "眠そうな表情",
    prompt: "sleepy",
    memo: ["眠気や気だるさを出したいときの表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-sleepy.webp",
      },
    ],
  },
  {
    id: "colon_d",
    category: "symbol_expression",
    categoryLabel: "記号顔・特殊な目",
    nameJa: "口を開けた笑顔",
    prompt: ":d",
    memo: ["大きく口を開けた笑顔を出したいときの表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-colon-d.webp",
      },
    ],
  },
  {
    id: "greater_less",
    category: "symbol_expression",
    categoryLabel: "記号顔・特殊な目",
    nameJa: "＞＜顔",
    prompt: "> <",
    memo: ["ぎゅっと目を閉じた記号風の表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-greater-less.webp",
      },
    ],
  },
  {
    id: "xd",
    category: "symbol_expression",
    categoryLabel: "記号顔・特殊な目",
    nameJa: "＞＜笑顔",
    prompt: "xd",
    memo: ["＞＜顔に笑顔の印象を加えた表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-xd.webp",
      },
    ],
  },
  {
    id: "caret_caret",
    category: "symbol_expression",
    categoryLabel: "記号顔・特殊な目",
    nameJa: "にこにこ目",
    prompt: "^ ^",
    memo: ["目を細めたにこにこした表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-caret-caret.webp",
      },
    ],
  },
  {
    id: "caret_o_caret",
    category: "symbol_expression",
    categoryLabel: "記号顔・特殊な目",
    nameJa: "にこにこ顔",
    prompt: "^o^",
    memo: ["口を開けた明るい顔文字風の表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-caret-o-caret.webp",
      },
    ],
  },
  {
    id: "x3",
    category: "symbol_expression",
    categoryLabel: "記号顔・特殊な目",
    nameJa: "猫口っぽい笑顔",
    prompt: "x3",
    memo: ["猫口風のかわいい笑顔を出したいときの表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-x3.webp",
      },
    ],
  },
  {
    id: "equal_equal",
    category: "symbol_expression",
    categoryLabel: "記号顔・特殊な目",
    nameJa: "==目",
    prompt: "= =",
    memo: ["横線目で冷めた印象を出したいときの表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-equal-equal.webp",
      },
    ],
  },
  {
    id: "x_x",
    category: "symbol_expression",
    categoryLabel: "記号顔・特殊な目",
    nameJa: "xx顔",
    prompt: "x x",
    memo: ["ぐったりしたり倒れたような記号顔の表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-x-x.webp",
      },
    ],
  },
  {
    id: "o_o",
    category: "symbol_expression",
    categoryLabel: "記号顔・特殊な目",
    nameJa: "丸目",
    prompt: "o o",
    memo: ["目を丸くした記号風の驚き表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-o-o.webp",
      },
    ],
  },
  {
    id: "at_at",
    category: "symbol_expression",
    categoryLabel: "記号顔・特殊な目",
    nameJa: "ぐるぐる記号目",
    prompt: "@ @",
    memo: ["混乱や目が回る印象を出したいときの指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-at-at.webp",
      },
    ],
  },
  {
    id: "spiral_eyes",
    category: "symbol_expression",
    categoryLabel: "記号顔・特殊な目",
    nameJa: "ぐるぐる目",
    prompt: "spiral eyes",
    memo: ["混乱や気絶気味の印象を目で出す指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-spiral-eyes.webp",
      },
    ],
  },
  {
    id: "plus_plus",
    category: "symbol_expression",
    categoryLabel: "記号顔・特殊な目",
    nameJa: "十字目",
    prompt: "+ +",
    memo: ["記号的な目元でデフォルメ感を強める指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-plus-plus.webp",
      },
    ],
  },
  {
    id: "heart_eyes",
    category: "symbol_expression",
    categoryLabel: "記号顔・特殊な目",
    nameJa: "ハート目",
    prompt: "heart eyes",
    memo: ["好意や夢中な印象を目で強める指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-heart-eyes.webp",
      },
    ],
  },
  {
    id: "starry_eyes",
    category: "symbol_expression",
    categoryLabel: "記号顔・特殊な目",
    nameJa: "星目",
    prompt: "starry eyes",
    memo: ["憧れや期待感を目で強める指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-starry-eyes.webp",
      },
    ],
  },
  {
    id: "sparkling_eyes",
    category: "symbol_expression",
    categoryLabel: "記号顔・特殊な目",
    nameJa: "きらきら目",
    prompt: "sparkling eyes",
    memo: ["目を輝かせた期待感を出す指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-sparkling-eyes.webp",
      },
    ],
  },
  {
    id: "sanpaku",
    category: "symbol_expression",
    categoryLabel: "記号顔・特殊な目",
    nameJa: "三白眼",
    prompt: "sanpaku",
    memo: ["白目部分を強調した独特な目元の指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-sanpaku.webp",
      },
    ],
  },
  {
    id: "cat_mouth",
    category: "mouth_tongue",
    categoryLabel: "口元・舌",
    nameJa: "猫口",
    prompt: "cat mouth",
    memo: ["猫のような口元にしたいときの指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-cat-mouth.webp",
      },
    ],
  },
  {
    id: "w_shaped_mouth",
    category: "mouth_tongue",
    categoryLabel: "口元・舌",
    nameJa: "W字口",
    prompt: "w shaped mouth",
    memo: ["W字の口元でかわいさを出したいときの指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-w-shaped-mouth.webp",
      },
    ],
  },
  {
    id: "triangle_mouth",
    category: "mouth_tongue",
    categoryLabel: "口元・舌",
    nameJa: "三角口",
    prompt: "triangle mouth",
    memo: ["三角形の口元でデフォルメ感を出す指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-triangle-mouth.webp",
      },
    ],
  },
  {
    id: "o_shaped_mouth",
    category: "mouth_tongue",
    categoryLabel: "口元・舌",
    nameJa: "O字口",
    prompt: "o shaped mouth",
    memo: ["驚きや発声中のような丸い口元の指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-o-shaped-mouth.webp",
      },
    ],
  },
  {
    id: "jagged_mouth",
    category: "mouth_tongue",
    categoryLabel: "口元・舌",
    nameJa: "ギザギザ口",
    prompt: "jagged mouth",
    memo: ["焦りや怒りをギザギザの口元で出す指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-jagged-mouth.webp",
      },
    ],
  },
  {
    id: "tongue_out",
    category: "mouth_tongue",
    categoryLabel: "口元・舌",
    nameJa: "舌を出す",
    prompt: "tongue out",
    memo: ["舌を出した遊び心を加える指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-tongue-out.webp",
      },
    ],
  },
  {
    id: "blep",
    category: "mouth_tongue",
    categoryLabel: "口元・舌",
    nameJa: "ちょこんと舌を出す",
    prompt: "blep",
    memo: ["少しだけ舌を出した軽いデフォルメ指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-blep.webp",
      },
    ],
  },
  {
    id: "drooling",
    category: "mouth_tongue",
    categoryLabel: "口元・舌",
    nameJa: "よだれ",
    prompt: "drooling",
    memo: ["よだれで夢中さやだらしなさを出す指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-drooling.webp",
      },
    ],
  },
  {
    id: "fanged_smile",
    category: "mouth_tongue",
    categoryLabel: "口元・舌",
    nameJa: "牙見せ笑顔",
    prompt: "fanged smile",
    memo: ["牙を見せたいたずらっぽい笑顔"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-fanged-smile.webp",
      },
    ],
  },
  {
    id: "wink",
    category: "expression_parts",
    categoryLabel: "表情パーツ・演出",
    nameJa: "ウインク",
    prompt: "wink",
    memo: ["片目を閉じた合図のような表情"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-wink.webp",
      },
    ],
  },
  {
    id: "one_eye_closed",
    category: "expression_parts",
    categoryLabel: "表情パーツ・演出",
    nameJa: "片目を閉じる",
    prompt: "one eye closed",
    memo: ["片目だけを閉じた表情にしたいときの指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-one-eye-closed.webp",
      },
    ],
  },
  {
    id: "puffed_cheeks",
    category: "expression_parts",
    categoryLabel: "表情パーツ・演出",
    nameJa: "ほっぺを膨らませる",
    prompt: "puffed cheeks",
    memo: ["頬をふくらませた表情にしたいときの指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-puffed-cheeks.webp",
      },
    ],
  },
  {
    id: "anger_vein",
    category: "expression_parts",
    categoryLabel: "表情パーツ・演出",
    nameJa: "怒りマーク",
    prompt: "anger vein",
    memo: ["怒りを記号的に強調したいときの指定"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/expression/female/expression-anger-vein.webp",
      },
    ],
  },
];

