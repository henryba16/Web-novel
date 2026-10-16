# Node Description Batch 23 of 82

Engram is running in assistant/skill mode (no API key). You are the host
assistant (Claude Code / Codex / Gemini CLI). Read the prompt below and write
your JSON answer to the answer file.

## Prompt

You are documenting nodes in a knowledge graph.
For each entry below, write ONE concise factual plain-language sentence
describing what it is or does. Use only the provided context.
For a code symbol (kind=code-symbol — a function, class, or constant),
describe what the function/symbol does based on its name, source location
and neighbors — e.g. "Resolves the configured ontology profile from graphify.yaml.".
Write every description in English (en). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "core_monogatari_rc": "RC()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, B4(), .fill(), HU()]
- "core_monogatari_rl": "RL" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .constructor(), .load()]
- "core_monogatari_s1_negate": ".negate()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.diff(), .minus(), S1, .minus()]
- "core_monogatari_s1_normalizeunit": ".normalizeUnit()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.startOf(), S1, .get(), G2]
- "core_monogatari_s9": "s9()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, D9(), EL(), F9()]
- "core_monogatari_sd_bind": ".bind()" | kind=code-symbol | source=engine/core/monogatari.js:L767 | neighbors=[SD, .closest(), .data(), .showImage()]
- "core_monogatari_sd_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L767 | neighbors=[SD, .addButton(), .assets(), .component()]
- "core_monogatari_sd_render": ".render()" | kind=code-symbol | source=engine/core/monogatari.js:L767 | neighbors=[SD, join(), .assets(), .setting()]
- "core_monogatari_si": "sI()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, LM(), vU(), $Z()]
- "core_monogatari_sq": "Sq" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .loadModeOptions(), .constructor(), .load()]
- "core_monogatari_sy": "sY" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .constructor(), .load()]
- "core_monogatari_tj": "Tj()" | kind=code-symbol | source=engine/core/monogatari.js:L29 | neighbors=[monogatari.js, R(), .append(), tF()]
- "core_monogatari_tp": "TP()" | kind=code-symbol | source=engine/core/monogatari.js:L590 | neighbors=[monogatari.js, .createElement(), NK, r6()]
- "core_monogatari_tq_extension": ".extension()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[TQ(), .isAudio(), .isImage(), .isVideo()]
- "core_monogatari_tq_isimage": ".isImage()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[TQ(), .has(), .extension(), .preload()]
- "core_monogatari_u7": "u7()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .features(), .getWeekSettings(), K6()]
- "core_monogatari_u8_addbuttonafter": ".addButtonAfter()" | kind=code-symbol | source=engine/core/monogatari.js:L968 | neighbors=[.setup(), U8, .buttons(), .onConfigurationUpdate()]
- "core_monogatari_u8_removebutton": ".removeButton()" | kind=code-symbol | source=engine/core/monogatari.js:L968 | neighbors=[.init(), U8, .buttons(), .onConfigurationUpdate()]
- "core_monogatari_u9": "u9()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, JE(), AE(), join()]
- "core_monogatari_uq_interact": ".interact()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Uq, .getPosition(), .queryCircle(), WK()]
- "core_monogatari_uy": "uY" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .constructor(), .load()]
- "core_monogatari_v4": "v4()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, M1(), rV(), xV()]
- "core_monogatari_v5": "V5()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .move(), .addInteractor(), .checkVersion()]
- "core_monogatari_v8_clearaudiobufferpersistent": ".clearAudioBufferPersistent()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[.apply(), .unloadPersistent(), v8, .asEngine()]
- "core_monogatari_v8_imagecache": ".imageCache()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[.apply(), .apply(), v8, .asEngine()]
- "core_monogatari_v8_keyboardshortcut": ".keyboardShortcut()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .bind(), .asEngine(), WO()]
- "core_monogatari_v8_onload": ".onLoad()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, U, .components(), .global()]
- "core_monogatari_v8_playambient": ".playAmbient()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[.onStateUpdate(), v8, .asEngine(), XO()]
- "core_monogatari_v8_removeaudiobufferpersistent": ".removeAudioBufferPersistent()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[.unloadPersistent(), v8, JF(), .asEngine()]
- "core_monogatari_v8_resetgame": ".resetGame()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, PO(), .asEngine(), .apply()]
- "core_monogatari_v8_setupstorage": ".setupStorage()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .init(), .preferences(), .asEngine()]
- "core_monogatari_v8_showmainscreen": ".showMainScreen()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, FO(), .asEngine(), .apply()]
- "core_monogatari_v8_showscreen": ".showScreen()" | kind=code-symbol | source=engine/core/monogatari.js:L732 | neighbors=[v8, .init(), .asEngine(), .willApply()]
- "core_monogatari_v8_stopambient": ".stopAmbient()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[.onStateUpdate(), v8, .asEngine(), .willApply()]
- "core_monogatari_v8_storage": ".storage()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[iO(), PO(), QO(), v8]
- "core_monogatari_v8_translate": ".translate()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[K9(), v8, .asEngine(), VO()]
- "core_monogatari_v8_unregistercomponent": ".unregisterComponent()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .registerComponent(), .components(), .global()]
- "core_monogatari_ve": "vE()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, .addShape(), .checkVersion(), KZ]
- "core_monogatari_vf": "vF()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[monogatari.js, .getAudioBufferPersistent(), LO(), .warn()]
- "core_monogatari_vs_buildactionpatterns": "._buildActionPatterns()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VS, join(), V(), .initiate()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-022.json

Keep each description factual and concise (one sentence). No markdown, no prose
outside the JSON object. It is acceptable to omit a node if context is
insufficient — but include every node you can ground confidently.

Example answer format:
```json
{
  "node_id_1": "Resolves the configured ontology profile from graphify.yaml.",
  "node_id_2": "Colonel James Barclay, an antagonist in The Crooked Man."
}
```
