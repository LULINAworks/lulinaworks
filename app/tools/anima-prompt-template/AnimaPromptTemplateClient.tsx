"use client";

import { useEffect, useMemo, useState } from "react";
import {
  allCategoryIds,
  categoryGroups,
  characterCountOptions,
  characterKeys,
  getMultiplePresetCategoryIds,
  getSinglePresetCategoryIds,
  modeOptions,
  multipleHybridCharacterCategoryIds,
  multipleHybridGlobalCategoryIds,
  multiplePresetOptions,
  multipleTagCharacterCategoryIds,
  multipleTagGlobalCategoryIds,
  peopleOptions,
  promptCategories,
  singleHybridTagCategoryIds,
  singlePresetOptions,
  type CategoryId,
  type CharacterCount,
  type CharacterKey,
  type MultiplePresetId,
  type PeopleMode,
  type SinglePresetId,
  type ToolMode,
} from "./data";

type PanelName = "settings" | "preview";
type CopyState = "idle" | "success" | "failed";
type CopyTarget = "template" | "order";
type OutputType = CopyTarget;
type AnalyticsEventName =
  | "anima_template_preset_select"
  | "anima_template_output_select"
  | "anima_template_copy";
type AnalyticsEventParams = Record<string, string | number>;

type MultipleSelection = {
  global: Set<CategoryId>;
  character: Record<CharacterKey, Set<CategoryId>>;
  natural: Set<CategoryId>;
};

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params: AnalyticsEventParams) => void;
  }
}

const categoryMap = new Map(promptCategories.map((category) => [category.id, category]));
const tagOnlySingleAllowedIds = new Set(allCategoryIds);
const singleHybridTagIdSet = new Set<CategoryId>(singleHybridTagCategoryIds);
const multipleHybridGlobalIdSet = new Set<CategoryId>(multipleHybridGlobalCategoryIds);
const multipleHybridCharacterIdSet = new Set<CategoryId>(multipleHybridCharacterCategoryIds);
const multipleTagGlobalIdSet = new Set<CategoryId>(multipleTagGlobalCategoryIds);
const multipleTagCharacterIdSet = new Set<CategoryId>(multipleTagCharacterCategoryIds);

const singleSceneDescriptionPlaceholder =
  "例：1人の女の子。茶色のショートヘアで、白いブラウスを着ている。放課後の教室で窓際の席に座り、夕日を浴びながら外を見ている。上半身構図。落ち着いた雰囲気。";
const multipleSceneDescriptionPlaceholder =
  "例：2人のキャラクター。Character Aは黒いロングヘアの女の子で、白いワンピースを着ている。Character Bは短い茶髪の男の子で、黒いジャケットを着ている。放課後の教室で机を挟んで向かい合い、静かに会話している。夕日が差し込む落ち着いた雰囲気。";
const hybridSceneDescriptionFallback = "ここに自然文のシーン描写を書いてください。";

function toggleSet<T>(source: Set<T>, value: T) {
  const next = new Set(source);
  if (next.has(value)) {
    next.delete(value);
  } else {
    next.add(value);
  }
  return next;
}

function makeCharacterSelection(ids: readonly CategoryId[]) {
  return {
    A: new Set(ids),
    B: new Set(ids),
    C: new Set(ids),
  } satisfies Record<CharacterKey, Set<CategoryId>>;
}

function makeMultipleSelection(mode: ToolMode, presetId: MultiplePresetId): MultipleSelection {
  const preset = getMultiplePresetCategoryIds(mode, presetId);
  return {
    global: new Set(preset.global),
    character: makeCharacterSelection(preset.character),
    natural: new Set(preset.natural),
  };
}

function getCategory(categoryId: CategoryId) {
  return categoryMap.get(categoryId);
}

function formatPlaceholders(ids: Iterable<CategoryId>, allowedIds?: Set<CategoryId>) {
  const selectedIdSet = new Set(ids);
  const placeholders = promptCategories
    .filter((category) => selectedIdSet.has(category.id) && (!allowedIds || allowedIds.has(category.id)))
    .flatMap((category) => {
      const placeholder = category.placeholder;
      return placeholder ? [placeholder] : [];
    });

  return placeholders.length > 0 ? placeholders.join(", ") : "（未選択）";
}

function getSceneLengthBucket(text: string) {
  const length = text.trim().length;
  if (length === 0) {
    return "empty";
  }
  if (length <= 15) {
    return "short";
  }
  if (length <= 50) {
    return "medium";
  }
  return "long";
}

function track(eventName: AnalyticsEventName, params: AnalyticsEventParams) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  try {
    window.gtag("event", eventName, params);
  } catch {
    // Analytics must never block the generator.
  }
}

function getPeopleLabel(peopleMode: PeopleMode, characterCount: CharacterCount) {
  return peopleMode === "single" ? "1人" : `${characterCount}人`;
}

function getPresetLabel(peopleMode: PeopleMode, presetId: SinglePresetId | MultiplePresetId) {
  const options = peopleMode === "single" ? singlePresetOptions : multiplePresetOptions;
  return options.find((option) => option.id === presetId)?.label ?? presetId;
}

function getPeopleCount(peopleMode: PeopleMode, characterCount: CharacterCount) {
  return peopleMode === "single" ? 1 : characterCount;
}

function getSelectedCategoryCount({
  peopleMode,
  characterCount,
  singleSelectedIds,
  multipleSelection,
}: {
  peopleMode: PeopleMode;
  characterCount: CharacterCount;
  singleSelectedIds: Set<CategoryId>;
  multipleSelection: MultipleSelection;
}) {
  if (peopleMode === "single") {
    return singleSelectedIds.size;
  }

  const activeCharacters = characterKeys.slice(0, characterCount);
  return (
    multipleSelection.global.size +
    activeCharacters.reduce((total, characterKey) => total + multipleSelection.character[characterKey].size, 0)
  );
}

function buildTemplateText({
  mode,
  peopleMode,
  characterCount,
  singleSelectedIds,
  multipleSelection,
  freeText,
  includeSceneDescription = true,
  includeHybridTagHeading = false,
}: {
  mode: ToolMode;
  peopleMode: PeopleMode;
  characterCount: CharacterCount;
  singleSelectedIds: Set<CategoryId>;
  multipleSelection: MultipleSelection;
  freeText: string;
  includeSceneDescription?: boolean;
  includeHybridTagHeading?: boolean;
}) {
  const trimmedFreeText = freeText.trim();
  const hybridSceneText = trimmedFreeText || hybridSceneDescriptionFallback;

  if (peopleMode === "single" && mode === "tag") {
    return formatPlaceholders(singleSelectedIds, tagOnlySingleAllowedIds);
  }

  if (peopleMode === "single") {
    const lines = [
      ...(includeHybridTagHeading ? ["タグ側"] : []),
      formatPlaceholders(singleSelectedIds, singleHybridTagIdSet),
    ];

    if (includeSceneDescription) {
      lines.push("", hybridSceneText);
    }

    return lines.join("\n");
  }

  const activeCharacters = characterKeys.slice(0, characterCount);

  if (mode === "tag") {
    return [
      "全体設定タグ",
      formatPlaceholders(multipleSelection.global, multipleTagGlobalIdSet),
      "",
      ...activeCharacters.flatMap((characterKey) => [
        `Character ${characterKey}`,
        formatPlaceholders(multipleSelection.character[characterKey], multipleTagCharacterIdSet),
        "",
      ]),
    ]
      .join("\n")
      .trimEnd();
  }

  const lines = [
    "全体設定タグ",
    formatPlaceholders(multipleSelection.global, multipleHybridGlobalIdSet),
    "",
    ...activeCharacters.flatMap((characterKey) => [
      `Character ${characterKey}`,
      formatPlaceholders(multipleSelection.character[characterKey], multipleHybridCharacterIdSet),
      "",
    ]),
  ];

  if (includeSceneDescription) {
    lines.push(hybridSceneText);
  }

  return lines.join("\n").trimEnd();
}

function buildOrderText({
  mode,
  peopleMode,
  characterCount,
  templateText,
  freeText,
}: {
  mode: ToolMode;
  peopleMode: PeopleMode;
  characterCount: CharacterCount;
  templateText: string;
  freeText: string;
}) {
  const isHybrid = mode === "hybrid";
  const isMultiple = peopleMode === "multiple";
  const characterLabel = characterKeys
    .slice(0, characterCount)
    .map((characterKey) => `Character ${characterKey}`)
    .join(" / ");
  const trimmedFreeText = freeText.trim();

  const instructions = [
    "※これは画像生成の依頼ではなく、プロンプトテキストの作成依頼です。",
    "",
    "以下の骨組みをもとに、AIイラスト生成用のプロンプトテキストを作成してください。",
    "日本語の角括弧で書かれた部分は、具体的な英語タグまたは短い英語表現に置き換えてください。",
    "完成したプロンプトのみを、コピーしやすい形で出力してください。",
  ];

  if (isHybrid) {
    instructions.push(
      "",
      "タグ+自然文形式のルール:",
      "・タグ側には、性別・人数、品質、絵柄、LoRA、キャラクター基本、容姿、表情、服装などの情報を中心に入れてください。",
      "・背景・ポーズ・構図・アングル・目線・ライティングなどのシーン情報は、自然文側にまとめてください。"
    );
  }

  if (isMultiple) {
    instructions.push(
      "",
      "複数人形式のルール:",
      "・「シーン共通タグ」ではなく「全体設定タグ」と表現してください。",
      "・性別・人数には例として「1boy 1girl」のような形式を使ってください。",
      `・${characterLabel} を分けて扱ってください。`
    );
  }

  instructions.push("", "骨組み:", templateText);

  instructions.push(
    "",
    "シーン描写:",
    trimmedFreeText || "未入力です。必要であれば、人物や背景、ポーズなどのシーン説明もAI側で補ってください。"
  );

  instructions.push(
    "",
    "注意:",
    "ネガティブプロンプトは作成しないでください。",
    "品質タグ・絵柄タグ・LoRAトリガーは、骨組みに含まれている場合だけ補完してください。"
  );

  return instructions.join("\n");
}

function CategoryGroupControls({
  allowedIds,
  selectedIds,
  onToggle,
  idPrefix,
}: {
  allowedIds: readonly CategoryId[];
  selectedIds: Set<CategoryId>;
  onToggle: (categoryId: CategoryId) => void;
  idPrefix: string;
}) {
  const allowedSet = useMemo(() => new Set<CategoryId>(allowedIds), [allowedIds]);

  return (
    <div className="tool-category-groups">
      {categoryGroups.map((group) => {
        const groupCategories = promptCategories.filter(
          (category) => category.group === group.id && allowedSet.has(category.id)
        );

        if (groupCategories.length === 0) {
          return null;
        }

        return (
          <details className="tool-category-group" open key={`${idPrefix}-${group.id}`}>
            <summary>
              <span>{group.label}</span>
              <small>{groupCategories.length}項目</small>
            </summary>
            <div className="tool-checkbox-list">
              {groupCategories.map((category) => {
                const checkboxId = `${idPrefix}-${category.id}`;
                return (
                  <label className="tool-checkbox-row" htmlFor={checkboxId} key={category.id}>
                    <input
                      id={checkboxId}
                      type="checkbox"
                      checked={selectedIds.has(category.id)}
                      onChange={() => onToggle(category.id)}
                    />
                    <span>
                      <strong>{category.label}</strong>
                      <code>{category.placeholder}</code>
                    </span>
                  </label>
                );
              })}
            </div>
          </details>
        );
      })}
    </div>
  );
}

export function AnimaPromptTemplateClient() {
  const [activePanel, setActivePanel] = useState<PanelName>("settings");
  const [activeOutput, setActiveOutput] = useState<OutputType>("template");
  const [mode, setMode] = useState<ToolMode>("tag");
  const [peopleMode, setPeopleMode] = useState<PeopleMode>("single");
  const [characterCount, setCharacterCount] = useState<CharacterCount>(2);
  const [singlePreset, setSinglePreset] = useState<SinglePresetId>("portrait");
  const [multiplePreset, setMultiplePreset] = useState<MultiplePresetId>("standard");
  const [singleSelectedIds, setSingleSelectedIds] = useState<Set<CategoryId>>(
    () => new Set(getSinglePresetCategoryIds("tag", "portrait"))
  );
  const [multipleSelection, setMultipleSelection] = useState<MultipleSelection>(() =>
    makeMultipleSelection("tag", "standard")
  );
  const [freeText, setFreeText] = useState("");
  const [copyState, setCopyState] = useState<{ target: CopyTarget; state: CopyState } | null>(null);

  const activePresetId = peopleMode === "single" ? singlePreset : multiplePreset;
  const activePresetLabel = getPresetLabel(peopleMode, activePresetId);
  const singleAllowedIds = mode === "hybrid" ? singleHybridTagCategoryIds : allCategoryIds;
  const multipleGlobalAllowedIds = mode === "hybrid" ? multipleHybridGlobalCategoryIds : multipleTagGlobalCategoryIds;
  const multipleCharacterAllowedIds = mode === "hybrid" ? multipleHybridCharacterCategoryIds : multipleTagCharacterCategoryIds;
  const activeCharacters = characterKeys.slice(0, characterCount);
  const sceneDescriptionPlaceholder =
    peopleMode === "multiple" ? multipleSceneDescriptionPlaceholder : singleSceneDescriptionPlaceholder;
  const visibleSinglePresetOptions =
    mode === "hybrid" ? singlePresetOptions.filter((option) => option.id !== "scene") : singlePresetOptions;

  useEffect(() => {
    if (peopleMode === "single") {
      const nextSinglePreset = mode === "hybrid" && singlePreset === "scene" ? "portrait" : singlePreset;
      if (nextSinglePreset !== singlePreset) {
        setSinglePreset(nextSinglePreset);
      }
      setSingleSelectedIds(new Set(getSinglePresetCategoryIds(mode, nextSinglePreset)));
      return;
    }

    setMultipleSelection(makeMultipleSelection(mode, multiplePreset));
  }, [mode, peopleMode, singlePreset, multiplePreset]);

  const templateText = useMemo(
    () =>
      buildTemplateText({
        mode,
        peopleMode,
        characterCount,
        singleSelectedIds,
        multipleSelection,
        freeText,
        includeSceneDescription: mode === "hybrid",
      }),
    [mode, peopleMode, characterCount, singleSelectedIds, multipleSelection, freeText]
  );

  const orderSkeletonText = useMemo(
    () =>
      buildTemplateText({
        mode,
        peopleMode,
        characterCount,
        singleSelectedIds,
        multipleSelection,
        freeText: "",
        includeSceneDescription: false,
        includeHybridTagHeading: true,
      }),
    [mode, peopleMode, characterCount, singleSelectedIds, multipleSelection]
  );

  const orderText = useMemo(
    () =>
      buildOrderText({
        mode,
        peopleMode,
        characterCount,
        templateText: orderSkeletonText,
        freeText,
      }),
    [mode, peopleMode, characterCount, orderSkeletonText, freeText]
  );

  function handleModeChange(nextMode: ToolMode) {
    setMode(nextMode);
  }

  function handlePeopleChange(nextPeopleMode: PeopleMode) {
    setPeopleMode(nextPeopleMode);
  }

  function handleCharacterCountChange(nextCount: CharacterCount) {
    setCharacterCount(nextCount);
  }

  function handleSinglePresetChange(nextPreset: SinglePresetId) {
    setSinglePreset(nextPreset);
    track("anima_template_preset_select", {
      mode,
      people_mode: "single",
      people_count: 1,
      preset_id: nextPreset,
    });
  }

  function handleMultiplePresetChange(nextPreset: MultiplePresetId) {
    setMultiplePreset(nextPreset);
    track("anima_template_preset_select", {
      mode,
      people_mode: "multiple",
      people_count: characterCount,
      preset_id: nextPreset,
    });
  }

  function toggleSingleCategory(categoryId: CategoryId) {
    setSingleSelectedIds((currentIds) => toggleSet(currentIds, categoryId));
  }

  function toggleMultipleGlobalCategory(categoryId: CategoryId) {
    setMultipleSelection((currentSelection) => ({
      ...currentSelection,
      global: toggleSet(currentSelection.global, categoryId),
    }));
  }

  function toggleCharacterCategory(characterKey: CharacterKey, categoryId: CategoryId) {
    setMultipleSelection((currentSelection) => ({
      ...currentSelection,
      character: {
        ...currentSelection.character,
        [characterKey]: toggleSet(currentSelection.character[characterKey], categoryId),
      },
    }));
  }

  function handleOutputSelect(nextOutput: OutputType) {
    setActiveOutput(nextOutput);
    track("anima_template_output_select", {
      mode,
      people_mode: peopleMode,
      people_count: getPeopleCount(peopleMode, characterCount),
      preset_id: activePresetId,
      output_type: nextOutput,
    });
  }

  async function copyText(target: CopyTarget, text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopyState({ target, state: "success" });
      track("anima_template_copy", {
        mode,
        people_mode: peopleMode,
        people_count: getPeopleCount(peopleMode, characterCount),
        preset_id: activePresetId,
        copy_type: target,
        scene_length_bucket: getSceneLengthBucket(freeText),
        selected_category_count: getSelectedCategoryCount({
          peopleMode,
          characterCount,
          singleSelectedIds,
          multipleSelection,
        }),
      });
    } catch {
      setCopyState({ target, state: "failed" });
    }

    window.setTimeout(() => setCopyState(null), 1800);
  }

  const copyLabel = (target: CopyTarget) => {
    if (copyState?.target !== target) {
      return target === "template" ? "骨組みをコピーする" : "AI発注書をコピーする";
    }

    return copyState.state === "success" ? "コピーしました" : "コピー失敗";
  };

  const activeOutputText = activeOutput === "template" ? templateText : orderText;
  const activeOutputLabel = activeOutput === "template" ? "骨組みプロンプト" : "AI発注書";

  return (
    <section className="container tool-builder-section anima-generator-section" aria-labelledby="tool-builder-title">
      <div className="tool-builder-head anima-generator-head">
        <div>
          <h2 id="tool-builder-title">プロンプトガイドジェネレーター β</h2>
          <p>設定を変えるたびに、右側のプレビューへリアルタイムで反映されます。</p>
        </div>
        <div className="tool-builder-status" aria-label="現在の設定">
          <span>{mode === "tag" ? "タグのみ" : "タグ+自然文"}</span>
          <span>{getPeopleLabel(peopleMode, characterCount)}</span>
          <span>{activePresetLabel}</span>
        </div>
      </div>

      <div className="tool-sticky-switch" role="group" aria-label="設定とプレビューの切り替え">
        <button
          type="button"
          className={activePanel === "settings" ? "is-active" : ""}
          aria-pressed={activePanel === "settings"}
          onClick={() => setActivePanel("settings")}
        >
          設定
        </button>
        <button
          type="button"
          className={activePanel === "preview" ? "is-active" : ""}
          aria-pressed={activePanel === "preview"}
          onClick={() => setActivePanel("preview")}
        >
          プレビュー
        </button>
      </div>

      <div className={`tool-slide-grid is-${activePanel}`}>
        <section
          className={activePanel === "settings" ? "tool-slide-panel is-active" : "tool-slide-panel is-inactive"}
          onClick={activePanel === "settings" ? undefined : () => setActivePanel("settings")}
        >
          <button className="tool-panel-peek" type="button" tabIndex={activePanel === "settings" ? -1 : 0}>
            設定
          </button>
          <div className="tool-panel-content">
            <div className="tool-step">
              <span className="tool-step-label">Step1</span>
              <h3>モード選択</h3>
              <div className="tool-choice-grid">
                {modeOptions.map((option) => (
                  <button
                    className={mode === option.id ? "tool-choice-card is-active" : "tool-choice-card"}
                    type="button"
                    aria-pressed={mode === option.id}
                    onClick={() => handleModeChange(option.id)}
                    key={option.id}
                  >
                    <strong>{option.label}</strong>
                    <span>{option.description}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="tool-step">
              <span className="tool-step-label">Step2</span>
              <h3>人数選択</h3>
              <div className="tool-segmented-row" role="group" aria-label="人数選択">
                {peopleOptions.map((option) => (
                  <button
                    className={peopleMode === option.id ? "is-active" : ""}
                    type="button"
                    aria-pressed={peopleMode === option.id}
                    onClick={() => handlePeopleChange(option.id)}
                    key={option.id}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {peopleMode === "multiple" ? (
              <div className="tool-step">
                <span className="tool-step-label">Step2-2</span>
                <h3>人数指定</h3>
                <div className="tool-segmented-row" role="group" aria-label="複数人の人数指定">
                  {characterCountOptions.map((option) => (
                    <button
                      className={characterCount === option.id ? "is-active" : ""}
                      type="button"
                      aria-pressed={characterCount === option.id}
                      onClick={() => handleCharacterCountChange(option.id)}
                      key={option.id}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="tool-step">
              <span className="tool-step-label">Step3</span>
              <h3>プリセット選択</h3>
              <div className="tool-choice-grid compact">
                {peopleMode === "single"
                  ? visibleSinglePresetOptions.map((option) => (
                      <button
                        className={singlePreset === option.id ? "tool-choice-card is-active" : "tool-choice-card"}
                        type="button"
                        aria-pressed={singlePreset === option.id}
                        onClick={() => handleSinglePresetChange(option.id)}
                        key={option.id}
                      >
                        <strong>{option.label}</strong>
                        <span>{option.description}</span>
                      </button>
                    ))
                  : multiplePresetOptions.map((option) => (
                      <button
                        className={multiplePreset === option.id ? "tool-choice-card is-active" : "tool-choice-card"}
                        type="button"
                        aria-pressed={multiplePreset === option.id}
                        onClick={() => handleMultiplePresetChange(option.id)}
                        key={option.id}
                      >
                        <strong>{option.label}</strong>
                        <span>{option.description}</span>
                      </button>
                    ))}
              </div>
            </div>

            <div className="tool-step">
              <span className="tool-step-label">Step4</span>
              <h3>カテゴリ選択・調整</h3>
              <p className="tool-step-note">
                品質・絵柄・LoRAトリガーは全プリセットでOFFです。必要な場合だけ手動でONにしてください。
              </p>

              {peopleMode === "single" ? (
                <CategoryGroupControls
                  allowedIds={singleAllowedIds}
                  selectedIds={singleSelectedIds}
                  onToggle={toggleSingleCategory}
                  idPrefix="single-category"
                />
              ) : (
                <div className="tool-multiple-settings">
                  <aside className="tool-warning-note" aria-label="複数人生成について">
                    <strong>複数人生成について</strong>
                    <p>
                      複数キャラクターを同時に生成する場合、AIが髪色・服装などの属性を混在させてしまうことがあります。
                      Character A/B/Cのラベルで区別することで軽減できますが、完全には防げない場合があります。
                    </p>
                  </aside>

                  <section className="tool-character-block always-open" aria-labelledby="global-settings-title">
                    <div className="tool-character-head">
                      <h4 id="global-settings-title">全体設定タグ</h4>
                      <span>{multipleSelection.global.size}項目ON</span>
                    </div>
                    <CategoryGroupControls
                      allowedIds={multipleGlobalAllowedIds}
                      selectedIds={multipleSelection.global}
                      onToggle={toggleMultipleGlobalCategory}
                      idPrefix="multiple-global"
                    />
                  </section>

                  {activeCharacters.map((characterKey) => (
                    <section className="tool-character-block always-open" aria-labelledby={`character-${characterKey}-title`} key={characterKey}>
                      <div className="tool-character-head">
                        <h4 id={`character-${characterKey}-title`}>Character {characterKey}</h4>
                        <span>{multipleSelection.character[characterKey].size}項目ON</span>
                      </div>
                      <CategoryGroupControls
                        allowedIds={multipleCharacterAllowedIds}
                        selectedIds={multipleSelection.character[characterKey]}
                        onToggle={(categoryId) => toggleCharacterCategory(characterKey, categoryId)}
                        idPrefix={`character-${characterKey}`}
                      />
                    </section>
                  ))}
                </div>
              )}
            </div>

            <div className="tool-step">
              <span className="tool-step-label">Step5</span>
              <h3>シーン描写</h3>
              <p className="tool-step-note">
                選択したカテゴリに合わせて、人数・外見・服装・表情・ポーズ・背景・雰囲気などを書いてください。
                AI発注書を使う場合、この内容をもとに対話型AIが具体的なタグや英語表現を補完します。
                空欄のままコピーし、対話型AI側で書いても構いません。
              </p>
              {peopleMode === "multiple" ? (
                <p className="tool-step-note">
                  複数人の場合は、Character A / Character B のように分けて書くと、髪色や服装の混在を減らしやすくなります。
                </p>
              ) : null}
              <textarea
                className="tool-free-text"
                value={freeText}
                onChange={(event) => setFreeText(event.target.value)}
                placeholder={sceneDescriptionPlaceholder}
                rows={6}
              />
            </div>
          </div>
        </section>

        <section
          className={activePanel === "preview" ? "tool-slide-panel preview-panel is-active" : "tool-slide-panel preview-panel is-inactive"}
          onClick={activePanel === "preview" ? undefined : () => setActivePanel("preview")}
        >
          <button className="tool-panel-peek" type="button" tabIndex={activePanel === "preview" ? -1 : 0}>
            プレビュー
          </button>
          <div className="tool-panel-content">
            <div className="tool-step preview-output">
              <span className="tool-step-label">Step6</span>
              <h3>出力</h3>
              <p className="tool-step-note">骨組みのまま使うか、対話型AIに渡すAI発注書として使うかを選べます。</p>

              <div className="tool-output-switch" role="group" aria-label="出力タイプ">
                <button
                  type="button"
                  className={activeOutput === "template" ? "is-active" : ""}
                  aria-pressed={activeOutput === "template"}
                  onClick={() => handleOutputSelect("template")}
                >
                  骨組みプロンプト
                </button>
                <button
                  type="button"
                  className={activeOutput === "order" ? "is-active" : ""}
                  aria-pressed={activeOutput === "order"}
                  onClick={() => handleOutputSelect("order")}
                >
                  AI発注書
                </button>
              </div>

              <div className="tool-preview-card">
                <div className="tool-preview-head">
                  <strong>{activeOutputLabel}</strong>
                  <span>{activeOutput === "template" ? (mode === "tag" ? "タグのみ" : "タグ+自然文") : "本文は外部送信しません"}</span>
                </div>
                <pre>
                  <code>{activeOutputText}</code>
                </pre>
              </div>

              <div className="tool-output-actions">
                <button
                  type="button"
                  className={activeOutput === "template" ? "tool-copy-button primary" : "tool-copy-button secondary"}
                  onClick={() => copyText(activeOutput, activeOutputText)}
                >
                  {copyLabel(activeOutput)}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
