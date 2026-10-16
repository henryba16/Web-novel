# Node Description Batch 48 of 82

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

- "core_monogatari_ty": "tY" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .load()]
- "core_monogatari_ty_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[tY, x1()]
- "core_monogatari_type": "type()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, H()]
- "core_monogatari_u8_button": ".button()" | kind=code-symbol | source=engine/core/monogatari.js:L968 | neighbors=[U8, .buttons()]
- "core_monogatari_ud_bind": ".bind()" | kind=code-symbol | source=engine/core/monogatari.js:L999 | neighbors=[uD, .focus()]
- "core_monogatari_ud_changewindowresolution": ".changeWindowResolution()" | kind=code-symbol | source=engine/core/monogatari.js:L999 | neighbors=[uD, .send()]
- "core_monogatari_ue": "uE()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, kE()]
- "core_monogatari_uf": "Uf()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor()]
- "core_monogatari_ui": "uI()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, p()]
- "core_monogatari_uk": "Uk()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, s7()]
- "core_monogatari_us_setcontext": ".setContext()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[b6(), US]
- "core_monogatari_us_setcycle": "._setCycle()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[b6(), US]
- "core_monogatari_us_setextras": ".setExtras()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[b6(), US]
- "core_monogatari_us_setstatement": "._setStatement()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[b6(), US]
- "core_monogatari_uw_draw": ".draw()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Uw(), L5()]
- "core_monogatari_uy_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[uY, e1]
- "core_monogatari_uz_loadoptions": ".loadOptions()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[UZ, QZ]
- "core_monogatari_uz_update": ".update()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[UZ, IH()]
- "core_monogatari_v2": "V2()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .realZeroToOneInclusive()]
- "core_monogatari_v8_actions": ".actions()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .setting()]
- "core_monogatari_v8_assertasync": ".assertAsync()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .asEngine()]
- "core_monogatari_v8_audiobufferspace": ".audioBufferSpace()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .asEngine()]
- "core_monogatari_v8_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[v8, iY]
- "core_monogatari_v8_deserializeaudiobuffer": ".deserializeAudioBuffer()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, LO()]
- "core_monogatari_v8_dismissalert": ".dismissAlert()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .asEngine()]
- "core_monogatari_v8_distractionfree": ".distractionFree()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .asEngine()]
- "core_monogatari_v8_goback": ".goBack()" | kind=code-symbol | source=engine/core/monogatari.js:L732 | neighbors=[v8, .asEngine()]
- "core_monogatari_v8_imageclearcache": ".imageClearCache()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .asEngine()]
- "core_monogatari_v8_imageuncache": ".imageUncache()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .asEngine()]
- "core_monogatari_v8_isindexeddbavailable": ".isIndexedDBAvailable()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .asEngine()]
- "core_monogatari_v8_languagemetadata": ".languageMetadata()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .asEngine()]
- "core_monogatari_v8_next": ".next()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .asEngine()]
- "core_monogatari_v8_object": ".object()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .asEngine()]
- "core_monogatari_v8_onsavescreenshot": ".onSaveScreenshot()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[J(), v8]
- "core_monogatari_v8_onstart": ".onStart()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .components()]
- "core_monogatari_v8_preferences": ".preferences()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .setupStorage()]
- "core_monogatari_v8_resize": ".resize()" | kind=code-symbol | source=engine/core/monogatari.js:L732 | neighbors=[v8, .asEngine()]
- "core_monogatari_v8_revert": ".revert()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .asEngine()]
- "core_monogatari_v8_rollback": ".rollback()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .asEngine()]
- "core_monogatari_v8_saveto": ".saveTo()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .asEngine()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-047.json

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
