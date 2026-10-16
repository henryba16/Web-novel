# Node Description Batch 29 of 82

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

- "core_monogatari_gh_integer": ".integer()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[gH, V(), .random()]
- "core_monogatari_gx": "GX" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[monogatari.js, ._commitValue(), .constructor()]
- "core_monogatari_h4": "h4()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .parseString(), fU()]
- "core_monogatari_hc": "HC()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, fH(), M1()]
- "core_monogatari_hf": "Hf()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .match(), .explainFromTokens()]
- "core_monogatari_hg": "HG()" | kind=code-symbol | source=engine/core/monogatari.js:L7 | neighbors=[monogatari.js, join(), JL()]
- "core_monogatari_hj": "Hj()" | kind=code-symbol | source=engine/core/monogatari.js:L21 | neighbors=[monogatari.js, AO(), k7()]
- "core_monogatari_hq_interact": ".interact()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hq, f1(), j5()]
- "core_monogatari_hq_isenabled": ".isEnabled()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hq, DH(), f1()]
- "core_monogatari_hr": "HR()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, o9(), QR()]
- "core_monogatari_hs_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[hS, .mediaPlayer(), .mediaPlayers()]
- "core_monogatari_hw_addeasing": ".addEasing()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw(), .getEasing(), S5()]
- "core_monogatari_hw_addmover": ".addMover()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[H5(), Hw(), M9()]
- "core_monogatari_hw_addplugin": ".addPlugin()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw(), Q9(), V9()]
- "core_monogatari_hw_clearplugins": ".clearPlugins()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw(), .delete(), .destroy()]
- "core_monogatari_hw_domitem": ".domItem()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.stop(), Hw(), .item()]
- "core_monogatari_hw_geteasing": ".getEasing()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[E5(), Hw(), .addEasing()]
- "core_monogatari_hw_geteffectdrawer": ".getEffectDrawer()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.init(), Hw(), .init()]
- "core_monogatari_hw_getpathgenerator": ".getPathGenerator()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.init(), Hw(), .addPathGenerator()]
- "core_monogatari_hx": "HX()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, rA(), .toMillis()]
- "core_monogatari_i1_desktop": ".desktop()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[i1(), .values(), .isIpadOS()]
- "core_monogatari_i1_isipados": ".isIpadOS()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[i1(), .desktop(), .mobile()]
- "core_monogatari_i5": "I5()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, ST(), .draw()]
- "core_monogatari_ia": "IA()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, qj(), zJ()]
- "core_monogatari_ig": "IG()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, jH(), set()]
- "core_monogatari_ik_resolvecategory": ".resolveCategory()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[.constructor(), iK, .constructor()]
- "core_monogatari_is_revert": ".revert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[IS, .history(), .prepareAction()]
- "core_monogatari_j0": "J0()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, AZ(), r9()]
- "core_monogatari_j1_numberformatter": ".numberFormatter()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[J1(), f7, .num()]
- "core_monogatari_j1_relformatter": ".relFormatter()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[J1(), .isEnglish(), j7]
- "core_monogatari_j5": "j5()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .interact(), XK]
- "core_monogatari_j6_parseeffects": ".parseEffects()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[J6, .createAudioPlayer(), .effects()]
- "core_monogatari_j6_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[J6, .mediaPlayers(), .removeMediaPlayer()]
- "core_monogatari_j6_setup": ".setup()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[J6, .initialize(), .history()]
- "core_monogatari_jf": "JF()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[monogatari.js, .warn(), .removeAudioBufferPersistent()]
- "core_monogatari_jo_render": ".render()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[JO, ._getVoidElementType(), join()]
- "core_monogatari_jq_applysettransformations": ".applySetTransformations()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ, .values(), ZH()]
- "core_monogatari_js_revert": ".revert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[JS, .history(), .prepareAction()]
- "core_monogatari_ju_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JU, fV(), VW]
- "core_monogatari_ju_create": ".create()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JU, eK(), jV()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-028.json

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
