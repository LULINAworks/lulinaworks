export type ToolMode = "tag" | "hybrid";
export type PeopleMode = "single" | "multiple";
export type CharacterCount = 2 | 3;
export type CharacterKey = "A" | "B" | "C";
export type SinglePresetId = "custom" | "portrait" | "scene" | "copyright";
export type MultiplePresetId = "custom" | "standard" | "copyright";
export type CategoryGroupId =
  | "basic"
  | "character"
  | "appearance"
  | "impression"
  | "clothes"
  | "motion"
  | "environment";

export type DictionaryTarget = "hairstyle" | "expression" | "pose" | "composition";

export type PromptCategory = {
  id: string;
  label: string;
  placeholder: string;
  group: CategoryGroupId;
  dictionaryTarget?: DictionaryTarget;
};

export const modeOptions = [
  {
    id: "tag",
    label: "タグのみで組み立てる",
    description: "Anima・NovelAI・SDなどで使いやすい汎用タグ形式です。",
  },
  {
    id: "hybrid",
    label: "タグ+自然文で組み立てる",
    description: "タグでキャラクター情報を、自然文でシーンを整理します。",
  },
] as const satisfies readonly { id: ToolMode; label: string; description: string }[];

export const peopleOptions = [
  { id: "single", label: "1人" },
  { id: "multiple", label: "複数人" },
] as const satisfies readonly { id: PeopleMode; label: string }[];

export const characterCountOptions = [
  { id: 2, label: "2人" },
  { id: 3, label: "3人" },
] as const satisfies readonly { id: CharacterCount; label: string }[];

export const characterKeys = ["A", "B", "C"] as const satisfies readonly CharacterKey[];

export const categoryGroups = [
  { id: "basic", label: "基本設定" },
  { id: "character", label: "キャラ基本" },
  { id: "appearance", label: "容姿" },
  { id: "impression", label: "印象" },
  { id: "clothes", label: "服装・小物" },
  { id: "motion", label: "動き・画面" },
  { id: "environment", label: "環境" },
] as const satisfies readonly { id: CategoryGroupId; label: string }[];

export const promptCategories = [
  { id: "quality", label: "品質", placeholder: "[品質]", group: "basic" },
  { id: "style", label: "絵柄・スタイル", placeholder: "[絵柄・スタイル]", group: "basic" },
  { id: "lora", label: "LoRAトリガー", placeholder: "[LoRAトリガー]", group: "basic" },
  { id: "character_name", label: "キャラ名", placeholder: "[キャラ名]", group: "character" },
  { id: "gender_count", label: "性別・人数", placeholder: "[性別・人数]", group: "character" },
  { id: "hair_color", label: "髪色", placeholder: "[髪色]", group: "appearance", dictionaryTarget: "hairstyle" },
  { id: "hair_style", label: "髪型", placeholder: "[髪型]", group: "appearance", dictionaryTarget: "hairstyle" },
  { id: "eye_color", label: "目の色", placeholder: "[目の色]", group: "appearance" },
  { id: "eye_shape", label: "目の形", placeholder: "[目の形]", group: "appearance", dictionaryTarget: "expression" },
  { id: "body_type", label: "体型", placeholder: "[体型]", group: "appearance" },
  { id: "skin_color", label: "肌の色", placeholder: "[肌の色]", group: "appearance" },
  { id: "expression", label: "表情", placeholder: "[表情]", group: "impression", dictionaryTarget: "expression" },
  { id: "mood", label: "印象・雰囲気", placeholder: "[印象・雰囲気]", group: "impression" },
  { id: "outfit", label: "服装", placeholder: "[服装]", group: "clothes" },
  { id: "prop", label: "小道具", placeholder: "[小道具]", group: "clothes" },
  { id: "pose", label: "ポーズ・動作", placeholder: "[ポーズ・動作]", group: "motion", dictionaryTarget: "pose" },
  { id: "composition", label: "構図", placeholder: "[構図]", group: "motion", dictionaryTarget: "composition" },
  { id: "angle", label: "アングル", placeholder: "[アングル]", group: "motion", dictionaryTarget: "composition" },
  { id: "gaze", label: "目線", placeholder: "[目線]", group: "motion", dictionaryTarget: "composition" },
  { id: "background", label: "背景", placeholder: "[背景]", group: "environment" },
  { id: "lighting", label: "ライティング", placeholder: "[ライティング]", group: "environment" },
] as const satisfies readonly PromptCategory[];

export type CategoryId = (typeof promptCategories)[number]["id"];

export const singlePresetOptions = [
  { id: "custom", label: "カスタム", description: "すべてOFFから自由に組み立てます。" },
  { id: "portrait", label: "ポートレート", description: "キャラクターの見た目を中心に組みます。" },
  { id: "scene", label: "シーン", description: "背景や動きを含めた場面用です。" },
  { id: "copyright", label: "版権キャラ用", description: "既存キャラを中心に差分を足す構成です。" },
] as const satisfies readonly { id: SinglePresetId; label: string; description: string }[];

export const multiplePresetOptions = [
  { id: "custom", label: "カスタム", description: "すべてOFFから自由に組み立てます。" },
  { id: "standard", label: "標準", description: "複数人で混ざりやすい属性を分けて組みます。" },
  { id: "copyright", label: "版権キャラ用", description: "既存キャラの名前と表情を中心に組みます。" },
] as const satisfies readonly { id: MultiplePresetId; label: string; description: string }[];

export const allCategoryIds = promptCategories.map((category) => category.id) as CategoryId[];

export const singleHybridTagCategoryIds = [
  "quality",
  "style",
  "lora",
  "character_name",
  "gender_count",
  "hair_color",
  "hair_style",
  "eye_color",
  "eye_shape",
  "body_type",
  "skin_color",
  "expression",
  "outfit",
  "prop",
] as const satisfies readonly CategoryId[];

export const singleHybridNaturalCategoryIds = [
  "pose",
  "composition",
  "angle",
  "gaze",
  "background",
  "lighting",
  "mood",
] as const satisfies readonly CategoryId[];

export const multipleHybridGlobalCategoryIds = [
  "quality",
  "style",
  "lora",
  "gender_count",
] as const satisfies readonly CategoryId[];

export const multipleHybridCharacterCategoryIds = [
  "character_name",
  "hair_color",
  "hair_style",
  "eye_color",
  "eye_shape",
  "body_type",
  "skin_color",
  "expression",
  "outfit",
  "prop",
] as const satisfies readonly CategoryId[];

export const multipleHybridNaturalCategoryIds = [
  "pose",
  "composition",
  "angle",
  "gaze",
  "background",
  "lighting",
  "mood",
] as const satisfies readonly CategoryId[];

export const multipleTagGlobalCategoryIds = [
  "quality",
  "style",
  "lora",
  "gender_count",
  "mood",
  "composition",
  "angle",
  "background",
  "lighting",
] as const satisfies readonly CategoryId[];

export const multipleTagCharacterCategoryIds = [
  "character_name",
  "hair_color",
  "hair_style",
  "eye_color",
  "eye_shape",
  "body_type",
  "skin_color",
  "expression",
  "outfit",
  "prop",
  "pose",
  "gaze",
] as const satisfies readonly CategoryId[];

const singleTagPresetCategoryIds = {
  custom: [],
  portrait: [
    "gender_count",
    "hair_color",
    "hair_style",
    "eye_color",
    "eye_shape",
    "body_type",
    "skin_color",
    "expression",
    "mood",
    "outfit",
    "composition",
    "gaze",
  ],
  scene: [
    "gender_count",
    "mood",
    "outfit",
    "pose",
    "composition",
    "angle",
    "background",
    "lighting",
  ],
  copyright: [
    "character_name",
    "gender_count",
    "expression",
    "mood",
    "prop",
    "pose",
    "composition",
    "angle",
    "gaze",
    "lighting",
    "background",
  ],
} as const satisfies Record<SinglePresetId, readonly CategoryId[]>;

const singleHybridPresetCategoryIds = {
  custom: [],
  portrait: [
    "gender_count",
    "hair_color",
    "hair_style",
    "eye_color",
    "eye_shape",
    "body_type",
    "skin_color",
    "expression",
    "outfit",
  ],
  scene: ["gender_count", "outfit"],
  copyright: ["character_name", "gender_count", "expression"],
} as const satisfies Record<SinglePresetId, readonly CategoryId[]>;

const multipleHybridPresetCategoryIds = {
  custom: {
    global: [],
    character: [],
    natural: [],
  },
  standard: {
    global: ["gender_count"],
    character: ["hair_color", "hair_style", "eye_color", "eye_shape", "expression", "outfit"],
    natural: [],
  },
  copyright: {
    global: ["gender_count"],
    character: ["character_name", "expression"],
    natural: [],
  },
} as const satisfies Record<
  MultiplePresetId,
  { global: readonly CategoryId[]; character: readonly CategoryId[]; natural: readonly CategoryId[] }
>;

const multipleTagPresetCategoryIds = {
  custom: {
    global: [],
    character: [],
    natural: [],
  },
  standard: {
    global: ["gender_count", "composition", "angle", "background", "lighting", "mood"],
    character: ["hair_color", "hair_style", "eye_color", "eye_shape", "expression", "outfit"],
    natural: [],
  },
  copyright: {
    global: ["gender_count", "mood", "composition", "angle", "background", "lighting"],
    character: ["character_name", "expression", "pose", "gaze"],
    natural: [],
  },
} as const satisfies Record<
  MultiplePresetId,
  { global: readonly CategoryId[]; character: readonly CategoryId[]; natural: readonly CategoryId[] }
>;

export function getSinglePresetCategoryIds(mode: ToolMode, presetId: SinglePresetId): readonly CategoryId[] {
  return mode === "hybrid" ? singleHybridPresetCategoryIds[presetId] : singleTagPresetCategoryIds[presetId];
}

export function getMultiplePresetCategoryIds(mode: ToolMode, presetId: MultiplePresetId) {
  return mode === "hybrid" ? multipleHybridPresetCategoryIds[presetId] : multipleTagPresetCategoryIds[presetId];
}
