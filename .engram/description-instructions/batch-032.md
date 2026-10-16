# Node Description Batch 33 of 82

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

- "core_monogatari_ta": "TA()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .dice(), .as()]
- "core_monogatari_tq_download": ".download()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[TQ(), .createElement(), .click()]
- "core_monogatari_tq_isaudio": ".isAudio()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[TQ(), .has(), .extension()]
- "core_monogatari_tq_isvideo": ".isVideo()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[TQ(), .has(), .extension()]
- "core_monogatari_tx_clone": "._clone()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[._commitTemplateResult(), TX, vX]
- "core_monogatari_u2": "U2()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .autoSeed(), .autoSeed()]
- "core_monogatari_u6": "u6()" | kind=code-symbol | source=engine/core/monogatari.js:L39 | neighbors=[monogatari.js, MM(), QP()]
- "core_monogatari_u8_addbuttonbefore": ".addButtonBefore()" | kind=code-symbol | source=engine/core/monogatari.js:L968 | neighbors=[U8, .buttons(), .onConfigurationUpdate()]
- "core_monogatari_u8_render": ".render()" | kind=code-symbol | source=engine/core/monogatari.js:L968 | neighbors=[U8, join(), .buttons()]
- "core_monogatari_uc": "UC()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, OQ(), vL()]
- "core_monogatari_uo": "UO()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[monogatari.js, .translations(), VO()]
- "core_monogatari_up": "UP()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, t6(), concat()]
- "core_monogatari_ur": "UR()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, o9(), QR()]
- "core_monogatari_uu": "UU()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, nC(), ST()]
- "core_monogatari_uw_particleinit": ".particleInit()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Uw(), fQ(), xV()]
- "core_monogatari_uz_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[UZ, M1(), xV()]
- "core_monogatari_v0": "V0()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, m(), o0()]
- "core_monogatari_v8_alert": ".alert()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .asEngine(), .init()]
- "core_monogatari_v8_audiobuffercache": ".audioBufferCache()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[.createAudioPlayer(), v8, .asEngine()]
- "core_monogatari_v8_audiobufferclearcache": ".audioBufferClearCache()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, FF(), .asEngine()]
- "core_monogatari_v8_audiobufferuncache": ".audioBufferUncache()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .asEngine(), XF()]
- "core_monogatari_v8_autoplay": ".autoPlay()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[PO(), v8, .asEngine()]
- "core_monogatari_v8_clearallcaches": ".clearAllCaches()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[.apply(), v8, .asEngine()]
- "core_monogatari_v8_displayinitialscreen": ".displayInitialScreen()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[v8, .asEngine(), .init()]
- "core_monogatari_v8_getaudiobufferpersistent": ".getAudioBufferPersistent()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .asEngine(), vF()]
- "core_monogatari_v8_hidescreens": ".hideScreens()" | kind=code-symbol | source=engine/core/monogatari.js:L732 | neighbors=[v8, .asEngine(), .willApply()]
- "core_monogatari_v8_loadfromslot": ".loadFromSlot()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[.didMount(), v8, .asEngine()]
- "core_monogatari_v8_localize": ".localize()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .init(), .asEngine()]
- "core_monogatari_v8_parentelement": ".parentElement()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[C(), v8, .bind()]
- "core_monogatari_v8_previous": ".previous()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[H(), v8, .asEngine()]
- "core_monogatari_v8_proceed": ".proceed()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .asEngine(), .bind()]
- "core_monogatari_v8_registeraction": ".registerAction()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, unshift(), .asEngine()]
- "core_monogatari_v8_runlistener": ".runListener()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .bind(), .asEngine()]
- "core_monogatari_v8_script": ".script()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .preference(), .setting()]
- "core_monogatari_v8_shouldproceed": ".shouldProceed()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, CO(), .asEngine()]
- "core_monogatari_v8_skip": ".skip()" | kind=code-symbol | source=engine/core/monogatari.js:L732 | neighbors=[PO(), v8, .asEngine()]
- "core_monogatari_v8_stoptyping": ".stopTyping()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .asEngine(), .shouldProceed()]
- "core_monogatari_v8_string": ".string()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, KO(), .asEngine()]
- "core_monogatari_v8_translation": ".translation()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[.onStateUpdate(), v8, .asEngine()]
- "core_monogatari_v8_translations": ".translations()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, UO(), .asEngine()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-032.json

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
