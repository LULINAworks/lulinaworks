export type DictionarySampleVariant = "female";

export type DictionarySample = {
  variant: DictionarySampleVariant;
  label: "女性";
  image: string;
};

export type PoseDictionaryItem = {
  id: string;
  category: string;
  categoryLabel: string;
  nameJa: string;
  prompt: string;
  memo: string[];
  samples: DictionarySample[];
};

export const poseCategories = [
  { id: "standing_pose", label: "立ちポーズ" },
  { id: "sitting_pose", label: "座りポーズ" },
  { id: "lying_floor_pose", label: "寝そべり・床ポーズ" },
  { id: "action_pose", label: "動き・アクション" },
  { id: "raised_extended_arms", label: "上げる・伸ばす腕" },
  { id: "bent_crossed_arms", label: "曲げる・組む腕" },
  { id: "hair_head_hands", label: "髪・頭まわりの手" },
  { id: "face_hands", label: "顔まわりの手" },
  { id: "front_body_hands", label: "胸・体の前の手" },
  { id: "waist_side_hands", label: "腰・横まわりの手" },
  { id: "legs_feet_pose", label: "脚・足のポーズ" },
  { id: "hand_sign", label: "手のサイン" },
] as const;

export const poseDictionaryItems: PoseDictionaryItem[] = [
  {
    id: "standing",
    category: "standing_pose",
    categoryLabel: "立ちポーズ",
    nameJa: "立ち姿勢",
    prompt: "standing",
    memo: ["基本の立ち姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-standing.webp",
      },
    ],
  },
  {
    id: "standing_straight",
    category: "standing_pose",
    categoryLabel: "立ちポーズ",
    nameJa: "まっすぐ立つ",
    prompt: "standing straight",
    memo: ["まっすぐ立つ姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-standing-straight.webp",
      },
    ],
  },
  {
    id: "relaxed_standing",
    category: "standing_pose",
    categoryLabel: "立ちポーズ",
    nameJa: "リラックス立ち",
    prompt: "relaxed standing",
    memo: ["力を抜いた立ち姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-relaxed-standing.webp",
      },
    ],
  },
  {
    id: "contrapposto",
    category: "standing_pose",
    categoryLabel: "立ちポーズ",
    nameJa: "コントラポスト",
    prompt: "contrapposto",
    memo: ["片脚に重心を乗せる立ち姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-contrapposto.webp",
      },
    ],
  },
  {
    id: "leaning_forward",
    category: "standing_pose",
    categoryLabel: "立ちポーズ",
    nameJa: "前かがみ",
    prompt: "leaning forward",
    memo: ["前に身を乗り出す姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-leaning-forward.webp",
      },
    ],
  },
  {
    id: "leaning_to_the_side",
    category: "standing_pose",
    categoryLabel: "立ちポーズ",
    nameJa: "横に傾く",
    prompt: "leaning to the side",
    memo: ["横へ傾く姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-leaning-to-the-side.webp",
      },
    ],
  },
  {
    id: "bent_over",
    category: "standing_pose",
    categoryLabel: "立ちポーズ",
    nameJa: "体を曲げる",
    prompt: "bent over",
    memo: ["体を前に大きく曲げる姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-bent-over.webp",
      },
    ],
  },
  {
    id: "arched_back",
    category: "standing_pose",
    categoryLabel: "立ちポーズ",
    nameJa: "背中を反らす",
    prompt: "arched back",
    memo: ["背中を反らせる姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-arched-back.webp",
      },
    ],
  },
  {
    id: "looking_back",
    category: "standing_pose",
    categoryLabel: "立ちポーズ",
    nameJa: "振り返る",
    prompt: "looking back",
    memo: ["後ろを見る姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-looking-back.webp",
      },
    ],
  },
  {
    id: "sitting",
    category: "sitting_pose",
    categoryLabel: "座りポーズ",
    nameJa: "座る",
    prompt: "sitting",
    memo: ["基本の座り姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-sitting.webp",
      },
    ],
  },
  {
    id: "on_ground",
    category: "sitting_pose",
    categoryLabel: "座りポーズ",
    nameJa: "地面に座る",
    prompt: "on ground",
    memo: ["地面に座る姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-on-ground.webp",
      },
    ],
  },
  {
    id: "knees_up",
    category: "sitting_pose",
    categoryLabel: "座りポーズ",
    nameJa: "膝を立てる",
    prompt: "knees up",
    memo: ["膝を立てて座る姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-knees-up.webp",
      },
    ],
  },
  {
    id: "one_knee_up",
    category: "sitting_pose",
    categoryLabel: "座りポーズ",
    nameJa: "片膝を立てる",
    prompt: "one knee up",
    memo: ["片膝を立てる座り方"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-one-knee-up.webp",
      },
    ],
  },
  {
    id: "crossed_legs",
    category: "sitting_pose",
    categoryLabel: "座りポーズ",
    nameJa: "脚を組む",
    prompt: "crossed legs",
    memo: ["脚を組む・交差させる座り姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-crossed-legs.webp",
      },
    ],
  },
  {
    id: "legs_folded",
    category: "sitting_pose",
    categoryLabel: "座りポーズ",
    nameJa: "脚を折りたたむ",
    prompt: "legs folded",
    memo: ["脚を折りたたむ座り方"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-legs-folded.webp",
      },
    ],
  },
  {
    id: "seiza",
    category: "sitting_pose",
    categoryLabel: "座りポーズ",
    nameJa: "正座",
    prompt: "seiza",
    memo: ["正座の姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-seiza.webp",
      },
    ],
  },
  {
    id: "wariza",
    category: "sitting_pose",
    categoryLabel: "座りポーズ",
    nameJa: "割座",
    prompt: "wariza",
    memo: ["割座の姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-wariza.webp",
      },
    ],
  },
  {
    id: "yokozuwari",
    category: "sitting_pose",
    categoryLabel: "座りポーズ",
    nameJa: "横座り",
    prompt: "yokozuwari",
    memo: ["横座りの姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-yokozuwari.webp",
      },
    ],
  },
  {
    id: "indian_style",
    category: "sitting_pose",
    categoryLabel: "座りポーズ",
    nameJa: "あぐら",
    prompt: "indian style",
    memo: ["あぐら系の座り方"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-indian-style.webp",
      },
    ],
  },
  {
    id: "hugging_own_legs",
    category: "sitting_pose",
    categoryLabel: "座りポーズ",
    nameJa: "膝を抱える",
    prompt: "hugging own legs",
    memo: ["膝を抱えて座る姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hugging-own-legs.webp",
      },
    ],
  },
  {
    id: "on_chair",
    category: "sitting_pose",
    categoryLabel: "座りポーズ",
    nameJa: "椅子に座る",
    prompt: "on chair",
    memo: ["椅子に座る姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-on-chair.webp",
      },
    ],
  },
  {
    id: "leaning_back_sitting",
    category: "sitting_pose",
    categoryLabel: "座りポーズ",
    nameJa: "座って後ろにもたれる",
    prompt: "leaning back",
    memo: ["座った状態で後ろに寄りかかる姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-leaning-back-sitting.webp",
      },
    ],
  },
  {
    id: "sitting_backwards",
    category: "sitting_pose",
    categoryLabel: "座りポーズ",
    nameJa: "後ろ向きに座る",
    prompt: "sitting backwards",
    memo: ["後ろ向きに座る姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-sitting-backwards.webp",
      },
    ],
  },
  {
    id: "lounging",
    category: "sitting_pose",
    categoryLabel: "座りポーズ",
    nameJa: "くつろいで座る",
    prompt: "lounging",
    memo: ["くつろいで座る姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-lounging.webp",
      },
    ],
  },
  {
    id: "arm_support",
    category: "sitting_pose",
    categoryLabel: "座りポーズ",
    nameJa: "腕で支える",
    prompt: "arm support",
    memo: ["手や腕で体を支える姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-arm-support.webp",
      },
    ],
  },
  {
    id: "lying",
    category: "lying_floor_pose",
    categoryLabel: "寝そべり・床ポーズ",
    nameJa: "横たわる",
    prompt: "lying",
    memo: ["横たわる基本姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-lying.webp",
      },
    ],
  },
  {
    id: "on_back",
    category: "lying_floor_pose",
    categoryLabel: "寝そべり・床ポーズ",
    nameJa: "仰向け",
    prompt: "on back",
    memo: ["仰向けに寝る姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-on-back.webp",
      },
    ],
  },
  {
    id: "on_stomach",
    category: "lying_floor_pose",
    categoryLabel: "寝そべり・床ポーズ",
    nameJa: "うつ伏せ",
    prompt: "on stomach",
    memo: ["うつ伏せの姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-on-stomach.webp",
      },
    ],
  },
  {
    id: "on_side",
    category: "lying_floor_pose",
    categoryLabel: "寝そべり・床ポーズ",
    nameJa: "横向き",
    prompt: "on side",
    memo: ["横向きに寝る姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-on-side.webp",
      },
    ],
  },
  {
    id: "on_floor",
    category: "lying_floor_pose",
    categoryLabel: "寝そべり・床ポーズ",
    nameJa: "床上",
    prompt: "on floor",
    memo: ["床上の姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-on-floor.webp",
      },
    ],
  },
  {
    id: "on_bed",
    category: "lying_floor_pose",
    categoryLabel: "寝そべり・床ポーズ",
    nameJa: "ベッド上",
    prompt: "on bed",
    memo: ["ベッド上の姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-on-bed.webp",
      },
    ],
  },
  {
    id: "head_on_pillow",
    category: "lying_floor_pose",
    categoryLabel: "寝そべり・床ポーズ",
    nameJa: "枕に頭を乗せる",
    prompt: "head on pillow",
    memo: ["枕に頭を乗せる姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-head-on-pillow.webp",
      },
    ],
  },
  {
    id: "sleeping",
    category: "lying_floor_pose",
    categoryLabel: "寝そべり・床ポーズ",
    nameJa: "寝ている",
    prompt: "sleeping",
    memo: ["寝ている姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-sleeping.webp",
      },
    ],
  },
  {
    id: "fetal_position",
    category: "lying_floor_pose",
    categoryLabel: "寝そべり・床ポーズ",
    nameJa: "胎児姿勢",
    prompt: "fetal position",
    memo: ["体を丸めた寝姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-fetal-position.webp",
      },
    ],
  },
  {
    id: "all_fours",
    category: "lying_floor_pose",
    categoryLabel: "寝そべり・床ポーズ",
    nameJa: "四つん這い",
    prompt: "all fours",
    memo: ["四つん這いの姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-all-fours.webp",
      },
    ],
  },
  {
    id: "walking",
    category: "action_pose",
    categoryLabel: "動き・アクション",
    nameJa: "歩く",
    prompt: "walking",
    memo: ["歩く動き"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-walking.webp",
      },
    ],
  },
  {
    id: "running",
    category: "action_pose",
    categoryLabel: "動き・アクション",
    nameJa: "走る",
    prompt: "running",
    memo: ["走る動き"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-running.webp",
      },
    ],
  },
  {
    id: "dashing",
    category: "action_pose",
    categoryLabel: "動き・アクション",
    nameJa: "ダッシュ",
    prompt: "dashing",
    memo: ["勢いよく走り出す動き"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-dashing.webp",
      },
    ],
  },
  {
    id: "jumping",
    category: "action_pose",
    categoryLabel: "動き・アクション",
    nameJa: "ジャンプ",
    prompt: "jumping",
    memo: ["ジャンプする動き"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-jumping.webp",
      },
    ],
  },
  {
    id: "dancing",
    category: "action_pose",
    categoryLabel: "動き・アクション",
    nameJa: "踊る",
    prompt: "dancing",
    memo: ["踊る動き"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-dancing.webp",
      },
    ],
  },
  {
    id: "stretching",
    category: "action_pose",
    categoryLabel: "動き・アクション",
    nameJa: "ストレッチ",
    prompt: "stretching",
    memo: ["全身を伸ばす姿勢"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-stretching.webp",
      },
    ],
  },
  {
    id: "crawling",
    category: "action_pose",
    categoryLabel: "動き・アクション",
    nameJa: "這う",
    prompt: "crawling",
    memo: ["這う動き"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-crawling.webp",
      },
    ],
  },
  {
    id: "falling",
    category: "action_pose",
    categoryLabel: "動き・アクション",
    nameJa: "倒れる",
    prompt: "falling",
    memo: ["倒れる・落ちる動き"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-falling.webp",
      },
    ],
  },
  {
    id: "arm_up",
    category: "raised_extended_arms",
    categoryLabel: "上げる・伸ばす腕",
    nameJa: "片腕を上げる",
    prompt: "arm up",
    memo: ["片腕を上げる"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-arm-up.webp",
      },
    ],
  },
  {
    id: "arms_up",
    category: "raised_extended_arms",
    categoryLabel: "上げる・伸ばす腕",
    nameJa: "両腕を上げる",
    prompt: "arms up",
    memo: ["両腕を上げる"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-arms-up.webp",
      },
    ],
  },
  {
    id: "hands_up",
    category: "raised_extended_arms",
    categoryLabel: "上げる・伸ばす腕",
    nameJa: "両手を上げる",
    prompt: "hands up",
    memo: ["両手を上げる"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hands-up.webp",
      },
    ],
  },
  {
    id: "outstretched_arm",
    category: "raised_extended_arms",
    categoryLabel: "上げる・伸ばす腕",
    nameJa: "片腕を伸ばす",
    prompt: "outstretched arm",
    memo: ["片腕を伸ばす"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-outstretched-arm.webp",
      },
    ],
  },
  {
    id: "outstretched_arms",
    category: "raised_extended_arms",
    categoryLabel: "上げる・伸ばす腕",
    nameJa: "両腕を伸ばす",
    prompt: "outstretched arms",
    memo: ["両腕を伸ばす"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-outstretched-arms.webp",
      },
    ],
  },
  {
    id: "outstretched_hand",
    category: "raised_extended_arms",
    categoryLabel: "上げる・伸ばす腕",
    nameJa: "手を差し出す",
    prompt: "outstretched hand",
    memo: ["手を差し出す"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-outstretched-hand.webp",
      },
    ],
  },
  {
    id: "reaching",
    category: "raised_extended_arms",
    categoryLabel: "上げる・伸ばす腕",
    nameJa: "手を伸ばす",
    prompt: "reaching",
    memo: ["手を伸ばす"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-reaching.webp",
      },
    ],
  },
  {
    id: "reaching_towards_viewer",
    category: "raised_extended_arms",
    categoryLabel: "上げる・伸ばす腕",
    nameJa: "viewer方向へ手を伸ばす",
    prompt: "reaching towards viewer",
    memo: ["viewer方向へ手を伸ばす"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-reaching-towards-viewer.webp",
      },
    ],
  },
  {
    id: "waving",
    category: "raised_extended_arms",
    categoryLabel: "上げる・伸ばす腕",
    nameJa: "手を振る",
    prompt: "waving",
    memo: ["手を振る"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-waving.webp",
      },
    ],
  },
  {
    id: "beckoning",
    category: "raised_extended_arms",
    categoryLabel: "上げる・伸ばす腕",
    nameJa: "手招き",
    prompt: "beckoning",
    memo: ["手招きする"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-beckoning.webp",
      },
    ],
  },
  {
    id: "crossed_arms",
    category: "bent_crossed_arms",
    categoryLabel: "曲げる・組む腕",
    nameJa: "腕を組む",
    prompt: "crossed arms",
    memo: ["腕を組む"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-crossed-arms.webp",
      },
    ],
  },
  {
    id: "one_arm_across_chest",
    category: "bent_crossed_arms",
    categoryLabel: "曲げる・組む腕",
    nameJa: "片腕を胸の前へ",
    prompt: "one arm across chest",
    memo: ["片腕を胸の前に置く"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-one-arm-across-chest.webp",
      },
    ],
  },
  {
    id: "arm_behind_back",
    category: "bent_crossed_arms",
    categoryLabel: "曲げる・組む腕",
    nameJa: "片腕を背中側へ",
    prompt: "arm behind back",
    memo: ["片腕を背中側へ回す"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-arm-behind-back.webp",
      },
    ],
  },
  {
    id: "arms_behind_back",
    category: "bent_crossed_arms",
    categoryLabel: "曲げる・組む腕",
    nameJa: "両腕を背中側へ",
    prompt: "arms behind back",
    memo: ["両腕を背中側へ回す"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-arms-behind-back.webp",
      },
    ],
  },
  {
    id: "hand_on_own_head",
    category: "hair_head_hands",
    categoryLabel: "髪・頭まわりの手",
    nameJa: "頭に片手",
    prompt: "hand on own head",
    memo: ["頭に片手を置く"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hand-on-own-head.webp",
      },
    ],
  },
  {
    id: "hands_on_own_head",
    category: "hair_head_hands",
    categoryLabel: "髪・頭まわりの手",
    nameJa: "頭に両手",
    prompt: "hands on own head",
    memo: ["頭に両手を置く"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hands-on-own-head.webp",
      },
    ],
  },
  {
    id: "arm_behind_head",
    category: "hair_head_hands",
    categoryLabel: "髪・頭まわりの手",
    nameJa: "腕を頭の後ろへ",
    prompt: "arm behind head",
    memo: ["腕を頭の後ろへ回す"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-arm-behind-head.webp",
      },
    ],
  },
  {
    id: "arms_behind_head",
    category: "hair_head_hands",
    categoryLabel: "髪・頭まわりの手",
    nameJa: "両腕を頭の後ろへ",
    prompt: "arms behind head",
    memo: ["両腕を頭の後ろへ回す"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-arms-behind-head.webp",
      },
    ],
  },
  {
    id: "scratching_head",
    category: "hair_head_hands",
    categoryLabel: "髪・頭まわりの手",
    nameJa: "頭をかく",
    prompt: "scratching head",
    memo: ["頭をかく"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-scratching-head.webp",
      },
    ],
  },
  {
    id: "hand_in_own_hair",
    category: "hair_head_hands",
    categoryLabel: "髪・頭まわりの手",
    nameJa: "髪に片手",
    prompt: "hand in own hair",
    memo: ["髪に手を入れる"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hand-in-own-hair.webp",
      },
    ],
  },
  {
    id: "hands_in_own_hair",
    category: "hair_head_hands",
    categoryLabel: "髪・頭まわりの手",
    nameJa: "髪に両手",
    prompt: "hands in own hair",
    memo: ["両手を髪に入れる"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hands-in-own-hair.webp",
      },
    ],
  },
  {
    id: "playing_with_own_hair",
    category: "hair_head_hands",
    categoryLabel: "髪・頭まわりの手",
    nameJa: "髪をいじる",
    prompt: "playing with own hair",
    memo: ["髪をいじる"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-playing-with-own-hair.webp",
      },
    ],
  },
  {
    id: "twirling_hair",
    category: "hair_head_hands",
    categoryLabel: "髪・頭まわりの手",
    nameJa: "髪を指で巻く",
    prompt: "twirling hair",
    memo: ["髪を指で巻く"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-twirling-hair.webp",
      },
    ],
  },
  {
    id: "tying_hair",
    category: "hair_head_hands",
    categoryLabel: "髪・頭まわりの手",
    nameJa: "髪を結ぶ",
    prompt: "tying hair",
    memo: ["髪を結ぶ"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-tying-hair.webp",
      },
    ],
  },
  {
    id: "hand_on_own_cheek",
    category: "face_hands",
    categoryLabel: "顔まわりの手",
    nameJa: "頬に片手",
    prompt: "hand on own cheek",
    memo: ["片手を頬に当てる"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hand-on-own-cheek.webp",
      },
    ],
  },
  {
    id: "hands_on_own_cheeks",
    category: "face_hands",
    categoryLabel: "顔まわりの手",
    nameJa: "頬に両手",
    prompt: "hands on own cheeks",
    memo: ["両手を頬に当てる"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hands-on-own-cheeks.webp",
      },
    ],
  },
  {
    id: "hand_on_own_chin",
    category: "face_hands",
    categoryLabel: "顔まわりの手",
    nameJa: "顎に片手",
    prompt: "hand on own chin",
    memo: ["片手を顎に当てる"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hand-on-own-chin.webp",
      },
    ],
  },
  {
    id: "hands_on_own_chin",
    category: "face_hands",
    categoryLabel: "顔まわりの手",
    nameJa: "顎に両手",
    prompt: "hands on own chin",
    memo: ["両手を顎に添える"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hands-on-own-chin.webp",
      },
    ],
  },
  {
    id: "resting_chin_on_hand",
    category: "face_hands",
    categoryLabel: "顔まわりの手",
    nameJa: "顎を手に乗せる",
    prompt: "resting chin on hand",
    memo: ["顎を手に乗せる"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-resting-chin-on-hand.webp",
      },
    ],
  },
  {
    id: "hand_on_own_face",
    category: "face_hands",
    categoryLabel: "顔まわりの手",
    nameJa: "顔に片手",
    prompt: "hand on own face",
    memo: ["顔に手を添える"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hand-on-own-face.webp",
      },
    ],
  },
  {
    id: "hands_on_own_face",
    category: "face_hands",
    categoryLabel: "顔まわりの手",
    nameJa: "顔に両手",
    prompt: "hands on own face",
    memo: ["両手を顔に添える"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hands-on-own-face.webp",
      },
    ],
  },
  {
    id: "hand_on_own_forehead",
    category: "face_hands",
    categoryLabel: "顔まわりの手",
    nameJa: "額に手",
    prompt: "hand on own forehead",
    memo: ["額に手を当てる"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hand-on-own-forehead.webp",
      },
    ],
  },
  {
    id: "covering_own_mouth",
    category: "face_hands",
    categoryLabel: "顔まわりの手",
    nameJa: "口を覆う",
    prompt: "covering own mouth",
    memo: ["口を覆う"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-covering-own-mouth.webp",
      },
    ],
  },
  {
    id: "hand_over_mouth",
    category: "face_hands",
    categoryLabel: "顔まわりの手",
    nameJa: "口に手を重ねる",
    prompt: "hand over mouth",
    memo: ["手を口に重ねる"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hand-over-mouth.webp",
      },
    ],
  },
  {
    id: "finger_to_mouth",
    category: "face_hands",
    categoryLabel: "顔まわりの手",
    nameJa: "指を口元へ",
    prompt: "finger to mouth",
    memo: ["指を口元へ添える"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-finger-to-mouth.webp",
      },
    ],
  },
  {
    id: "fingers_to_mouth",
    category: "face_hands",
    categoryLabel: "顔まわりの手",
    nameJa: "複数の指を口元へ",
    prompt: "fingers to mouth",
    memo: ["複数の指を口元へ添える"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-fingers-to-mouth.webp",
      },
    ],
  },
  {
    id: "touching_lips",
    category: "face_hands",
    categoryLabel: "顔まわりの手",
    nameJa: "唇に触れる",
    prompt: "touching lips",
    memo: ["唇に触れる"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-touching-lips.webp",
      },
    ],
  },
  {
    id: "biting_finger",
    category: "face_hands",
    categoryLabel: "顔まわりの手",
    nameJa: "指を噛む",
    prompt: "biting finger",
    memo: ["指を噛む"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-biting-finger.webp",
      },
    ],
  },
  {
    id: "licking_finger",
    category: "face_hands",
    categoryLabel: "顔まわりの手",
    nameJa: "指を舐める",
    prompt: "licking finger",
    memo: ["指を舐める"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-licking-finger.webp",
      },
    ],
  },
  {
    id: "covering_one_eye",
    category: "face_hands",
    categoryLabel: "顔まわりの手",
    nameJa: "片目を覆う",
    prompt: "covering one eye",
    memo: ["片目を覆う"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-covering-one-eye.webp",
      },
    ],
  },
  {
    id: "covering_own_eyes",
    category: "face_hands",
    categoryLabel: "顔まわりの手",
    nameJa: "目を覆う",
    prompt: "covering own eyes",
    memo: ["目を覆う"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-covering-own-eyes.webp",
      },
    ],
  },
  {
    id: "rubbing_eyes",
    category: "face_hands",
    categoryLabel: "顔まわりの手",
    nameJa: "目をこする",
    prompt: "rubbing eyes",
    memo: ["目をこする"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-rubbing-eyes.webp",
      },
    ],
  },
  {
    id: "wiping_tears",
    category: "face_hands",
    categoryLabel: "顔まわりの手",
    nameJa: "涙を拭う",
    prompt: "wiping tears",
    memo: ["涙を拭う"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-wiping-tears.webp",
      },
    ],
  },
  {
    id: "covering_own_face",
    category: "face_hands",
    categoryLabel: "顔まわりの手",
    nameJa: "顔を覆う",
    prompt: "covering own face",
    memo: ["顔全体を覆う"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-covering-own-face.webp",
      },
    ],
  },
  {
    id: "facepalm",
    category: "face_hands",
    categoryLabel: "顔まわりの手",
    nameJa: "顔を手で覆う",
    prompt: "facepalm",
    memo: ["顔を手で覆う"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-facepalm.webp",
      },
    ],
  },
  {
    id: "blowing_kiss",
    category: "face_hands",
    categoryLabel: "顔まわりの手",
    nameJa: "投げキッス",
    prompt: "blowing kiss",
    memo: ["投げキッス"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-blowing-kiss.webp",
      },
    ],
  },
  {
    id: "hand_on_own_chest",
    category: "front_body_hands",
    categoryLabel: "胸・体の前の手",
    nameJa: "胸元に片手",
    prompt: "hand on own chest",
    memo: ["胸元に片手を置く"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hand-on-own-chest.webp",
      },
    ],
  },
  {
    id: "hands_on_own_chest",
    category: "front_body_hands",
    categoryLabel: "胸・体の前の手",
    nameJa: "胸元に両手",
    prompt: "hands on own chest",
    memo: ["胸元に両手を置く"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hands-on-own-chest.webp",
      },
    ],
  },
  {
    id: "clutching_chest",
    category: "front_body_hands",
    categoryLabel: "胸・体の前の手",
    nameJa: "胸元を押さえる",
    prompt: "clutching chest",
    memo: ["胸元を押さえる"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-clutching-chest.webp",
      },
    ],
  },
  {
    id: "hand_between_breasts",
    category: "front_body_hands",
    categoryLabel: "胸・体の前の手",
    nameJa: "胸の間に手",
    prompt: "hand between breasts",
    memo: ["胸の間に手を置く"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hand-between-breasts.webp",
      },
    ],
  },
  {
    id: "hand_on_own_stomach",
    category: "front_body_hands",
    categoryLabel: "胸・体の前の手",
    nameJa: "お腹に片手",
    prompt: "hand on own stomach",
    memo: ["お腹に片手を置く"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hand-on-own-stomach.webp",
      },
    ],
  },
  {
    id: "hands_on_own_stomach",
    category: "front_body_hands",
    categoryLabel: "胸・体の前の手",
    nameJa: "お腹に両手",
    prompt: "hands on own stomach",
    memo: ["お腹に両手を置く"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hands-on-own-stomach.webp",
      },
    ],
  },
  {
    id: "hand_on_own_shoulder",
    category: "front_body_hands",
    categoryLabel: "胸・体の前の手",
    nameJa: "自分の肩に手",
    prompt: "hand on own shoulder",
    memo: ["自分の肩に手を置く"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hand-on-own-shoulder.webp",
      },
    ],
  },
  {
    id: "hand_on_own_arm",
    category: "front_body_hands",
    categoryLabel: "胸・体の前の手",
    nameJa: "自分の腕に手",
    prompt: "hand on own arm",
    memo: ["自分の腕に手を置く"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hand-on-own-arm.webp",
      },
    ],
  },
  {
    id: "hugging_own_arms",
    category: "front_body_hands",
    categoryLabel: "胸・体の前の手",
    nameJa: "自分の腕を抱く",
    prompt: "hugging own arms",
    memo: ["自分の腕を抱く"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hugging-own-arms.webp",
      },
    ],
  },
  {
    id: "own_hands_clasped",
    category: "front_body_hands",
    categoryLabel: "胸・体の前の手",
    nameJa: "手を組む",
    prompt: "own hands clasped",
    memo: ["手を組む"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-own-hands-clasped.webp",
      },
    ],
  },
  {
    id: "interlocked_fingers",
    category: "front_body_hands",
    categoryLabel: "胸・体の前の手",
    nameJa: "指を絡める",
    prompt: "interlocked fingers",
    memo: ["指を絡める"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-interlocked-fingers.webp",
      },
    ],
  },
  {
    id: "palms_together",
    category: "front_body_hands",
    categoryLabel: "胸・体の前の手",
    nameJa: "手のひらを合わせる",
    prompt: "palms together",
    memo: ["手のひらを合わせる"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-palms-together.webp",
      },
    ],
  },
  {
    id: "arms_at_sides",
    category: "waist_side_hands",
    categoryLabel: "腰・横まわりの手",
    nameJa: "両腕を体の横へ",
    prompt: "arms at sides",
    memo: ["両腕を体の横に下ろす"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-arms-at-sides.webp",
      },
    ],
  },
  {
    id: "hand_on_own_hip",
    category: "waist_side_hands",
    categoryLabel: "腰・横まわりの手",
    nameJa: "腰に片手",
    prompt: "hand on own hip",
    memo: ["片手を腰に置く"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hand-on-own-hip.webp",
      },
    ],
  },
  {
    id: "hands_on_own_hips",
    category: "waist_side_hands",
    categoryLabel: "腰・横まわりの手",
    nameJa: "腰に両手",
    prompt: "hands on own hips",
    memo: ["両手を腰に置く"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hands-on-own-hips.webp",
      },
    ],
  },
  {
    id: "hand_on_own_waist",
    category: "waist_side_hands",
    categoryLabel: "腰・横まわりの手",
    nameJa: "ウエストに片手",
    prompt: "hand on own waist",
    memo: ["片手をウエストに置く"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hand-on-own-waist.webp",
      },
    ],
  },
  {
    id: "hands_on_own_waist",
    category: "waist_side_hands",
    categoryLabel: "腰・横まわりの手",
    nameJa: "ウエストに両手",
    prompt: "hands on own waist",
    memo: ["両手をウエストに置く"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hands-on-own-waist.webp",
      },
    ],
  },
  {
    id: "hand_in_pocket",
    category: "waist_side_hands",
    categoryLabel: "腰・横まわりの手",
    nameJa: "片手をポケットに入れる",
    prompt: "hand in pocket",
    memo: ["片手をポケットに入れる"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hand-in-pocket.webp",
      },
    ],
  },
  {
    id: "hands_in_pockets",
    category: "waist_side_hands",
    categoryLabel: "腰・横まわりの手",
    nameJa: "両手をポケットに入れる",
    prompt: "hands in pockets",
    memo: ["両手をポケットに入れる"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hands-in-pockets.webp",
      },
    ],
  },
  {
    id: "hand_on_own_thigh",
    category: "waist_side_hands",
    categoryLabel: "腰・横まわりの手",
    nameJa: "太ももに片手",
    prompt: "hand on own thigh",
    memo: ["片手を太ももに置く"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hand-on-own-thigh.webp",
      },
    ],
  },
  {
    id: "hands_on_own_thighs",
    category: "waist_side_hands",
    categoryLabel: "腰・横まわりの手",
    nameJa: "太ももに両手",
    prompt: "hands on own thighs",
    memo: ["両手を太ももに置く"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hands-on-own-thighs.webp",
      },
    ],
  },
  {
    id: "hand_on_own_ass",
    category: "waist_side_hands",
    categoryLabel: "腰・横まわりの手",
    nameJa: "お尻に手",
    prompt: "hand on own ass",
    memo: ["お尻に手を置く"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-hand-on-own-ass.webp",
      },
    ],
  },
  {
    id: "legs_apart",
    category: "legs_feet_pose",
    categoryLabel: "脚・足のポーズ",
    nameJa: "足を離して立つ",
    prompt: "legs apart",
    memo: ["足を離して立つ"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-legs-apart.webp",
      },
    ],
  },
  {
    id: "pigeon_toed",
    category: "legs_feet_pose",
    categoryLabel: "脚・足のポーズ",
    nameJa: "内股",
    prompt: "pigeon-toed",
    memo: ["内股"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-pigeon-toed.webp",
      },
    ],
  },
  {
    id: "bent_knees",
    category: "legs_feet_pose",
    categoryLabel: "脚・足のポーズ",
    nameJa: "膝を曲げる",
    prompt: "bent knees",
    memo: ["膝を曲げる"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-bent-knees.webp",
      },
    ],
  },
  {
    id: "knees_apart",
    category: "legs_feet_pose",
    categoryLabel: "脚・足のポーズ",
    nameJa: "膝を開く",
    prompt: "knees apart",
    memo: ["膝を開く"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-knees-apart.webp",
      },
    ],
  },
  {
    id: "knee_up",
    category: "legs_feet_pose",
    categoryLabel: "脚・足のポーズ",
    nameJa: "膝を上げる",
    prompt: "knee up",
    memo: ["膝を上げる"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-knee-up.webp",
      },
    ],
  },
  {
    id: "one_leg_bent",
    category: "legs_feet_pose",
    categoryLabel: "脚・足のポーズ",
    nameJa: "片脚を曲げる",
    prompt: "one leg bent",
    memo: ["片脚を曲げる"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-one-leg-bent.webp",
      },
    ],
  },
  {
    id: "one_leg_up",
    category: "legs_feet_pose",
    categoryLabel: "脚・足のポーズ",
    nameJa: "片脚を上げる",
    prompt: "one leg up",
    memo: ["片脚を上げる"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-one-leg-up.webp",
      },
    ],
  },
  {
    id: "leg_lift",
    category: "legs_feet_pose",
    categoryLabel: "脚・足のポーズ",
    nameJa: "脚を持ち上げる",
    prompt: "leg lift",
    memo: ["脚を持ち上げる"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-leg-lift.webp",
      },
    ],
  },
  {
    id: "standing_on_one_leg",
    category: "legs_feet_pose",
    categoryLabel: "脚・足のポーズ",
    nameJa: "片脚立ち",
    prompt: "standing on one leg",
    memo: ["片脚で立つ"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-standing-on-one-leg.webp",
      },
    ],
  },
  {
    id: "standing_on_tiptoes",
    category: "legs_feet_pose",
    categoryLabel: "脚・足のポーズ",
    nameJa: "つま先立ち",
    prompt: "standing on tiptoes",
    memo: ["つま先立ち"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-standing-on-tiptoes.webp",
      },
    ],
  },
  {
    id: "kneeling",
    category: "legs_feet_pose",
    categoryLabel: "脚・足のポーズ",
    nameJa: "膝をつく",
    prompt: "kneeling",
    memo: ["膝をつく"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-kneeling.webp",
      },
    ],
  },
  {
    id: "on_one_knee",
    category: "legs_feet_pose",
    categoryLabel: "脚・足のポーズ",
    nameJa: "片膝をつく",
    prompt: "on one knee",
    memo: ["片膝をつく"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-on-one-knee.webp",
      },
    ],
  },
  {
    id: "kicking",
    category: "legs_feet_pose",
    categoryLabel: "脚・足のポーズ",
    nameJa: "蹴る",
    prompt: "kicking",
    memo: ["蹴る動き"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-kicking.webp",
      },
    ],
  },
  {
    id: "peace_sign",
    category: "hand_sign",
    categoryLabel: "手のサイン",
    nameJa: "ピースサイン",
    prompt: "peace sign",
    memo: ["ピースサイン"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-peace-sign.webp",
      },
    ],
  },
  {
    id: "thumbs_up",
    category: "hand_sign",
    categoryLabel: "手のサイン",
    nameJa: "サムズアップ",
    prompt: "thumbs up",
    memo: ["親指を立てる"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-thumbs-up.webp",
      },
    ],
  },
  {
    id: "ok_sign",
    category: "hand_sign",
    categoryLabel: "手のサイン",
    nameJa: "OKサイン",
    prompt: "ok sign",
    memo: ["OKサイン"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-ok-sign.webp",
      },
    ],
  },
  {
    id: "pointing",
    category: "hand_sign",
    categoryLabel: "手のサイン",
    nameJa: "指差し",
    prompt: "pointing",
    memo: ["指差し"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-pointing.webp",
      },
    ],
  },
  {
    id: "pointing_at_viewer",
    category: "hand_sign",
    categoryLabel: "手のサイン",
    nameJa: "viewerを指す",
    prompt: "pointing at viewer",
    memo: ["viewer方向を指す"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-pointing-at-viewer.webp",
      },
    ],
  },
  {
    id: "pointing_to_self",
    category: "hand_sign",
    categoryLabel: "手のサイン",
    nameJa: "自分を指す",
    prompt: "pointing to self",
    memo: ["自分を指す"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-pointing-to-self.webp",
      },
    ],
  },
  {
    id: "pointing_up",
    category: "hand_sign",
    categoryLabel: "手のサイン",
    nameJa: "上を指す",
    prompt: "pointing up",
    memo: ["上を指す"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-pointing-up.webp",
      },
    ],
  },
  {
    id: "finger_gun",
    category: "hand_sign",
    categoryLabel: "手のサイン",
    nameJa: "指鉄砲",
    prompt: "finger gun",
    memo: ["指鉄砲"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-finger-gun.webp",
      },
    ],
  },
  {
    id: "finger_heart",
    category: "hand_sign",
    categoryLabel: "手のサイン",
    nameJa: "指ハート",
    prompt: "finger heart",
    memo: ["指ハート"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-finger-heart.webp",
      },
    ],
  },
  {
    id: "heart_hands",
    category: "hand_sign",
    categoryLabel: "手のサイン",
    nameJa: "両手ハート",
    prompt: "heart hands",
    memo: ["両手ハート"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-heart-hands.webp",
      },
    ],
  },
  {
    id: "praying",
    category: "hand_sign",
    categoryLabel: "手のサイン",
    nameJa: "祈る",
    prompt: "praying",
    memo: ["祈る仕草"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-praying.webp",
      },
    ],
  },
  {
    id: "fist",
    category: "hand_sign",
    categoryLabel: "手のサイン",
    nameJa: "拳",
    prompt: "fist",
    memo: ["拳"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-fist.webp",
      },
    ],
  },
  {
    id: "raised_fist",
    category: "hand_sign",
    categoryLabel: "手のサイン",
    nameJa: "拳を上げる",
    prompt: "raised fist",
    memo: ["拳を上げる"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-raised-fist.webp",
      },
    ],
  },
  {
    id: "salute",
    category: "hand_sign",
    categoryLabel: "手のサイン",
    nameJa: "敬礼",
    prompt: "salute",
    memo: ["敬礼"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-salute.webp",
      },
    ],
  },
  {
    id: "shushing",
    category: "hand_sign",
    categoryLabel: "手のサイン",
    nameJa: "静かにの仕草",
    prompt: "shushing",
    memo: ["静かに、の仕草"],
    samples: [
      {
        variant: "female",
        label: "女性",
        image: "/assets/dictionary/pose/female/pose-shushing.webp",
      },
    ],
  },
];
