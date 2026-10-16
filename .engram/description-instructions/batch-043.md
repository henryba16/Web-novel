# Node Description Batch 44 of 82

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

- "core_monogatari_lv_length": ".length()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[LV, .getLengthSq()]
- "core_monogatari_lv_mult": ".mult()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[K5(), LV]
- "core_monogatari_lv_normalize": ".normalize()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[LV, .multTo()]
- "core_monogatari_lv_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[LV, .global()]
- "core_monogatari_lv_revert": ".revert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[LV, .history()]
- "core_monogatari_lv_subfrom": ".subFrom()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[E5(), LV]
- "core_monogatari_lv_willrevert": ".willRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[LV, .history()]
- "core_monogatari_lw_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Lw(), q1()]
- "core_monogatari_ly_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[lY, bY]
- "core_monogatari_ly_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[lY, jV()]
- "core_monogatari_lz_offsetname": ".offsetName()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[LZ, b7()]
- "core_monogatari_m2_alias": ".alias()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2(), .has()]
- "core_monogatari_m2_clearstate": ".clearState()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2(), .deleteState()]
- "core_monogatari_m2_deletestate": ".deleteState()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2(), .clearState()]
- "core_monogatari_m2_islazy": ".isLazy()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2(), .preload()]
- "core_monogatari_m2_register": ".register()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2(), ._init()]
- "core_monogatari_m2_stats": ".stats()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2(), .has()]
- "core_monogatari_m2_subscribe": ".subscribe()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2(), .add()]
- "core_monogatari_m2_unsubscribe": ".unsubscribe()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2(), .delete()]
- "core_monogatari_m4_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[m4, PH]
- "core_monogatari_ma": "mA()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, _2()]
- "core_monogatari_mc": "MC()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, B4()]
- "core_monogatari_mf": "MF()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[monogatari.js, .assets()]
- "core_monogatari_mh_assert": ".assert()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[H(), MH]
- "core_monogatari_mh_trace": ".trace()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[G(), MH]
- "core_monogatari_mh_warning": ".warning()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[MH, .warn()]
- "core_monogatari_mj": "Mj()" | kind=code-symbol | source=engine/core/monogatari.js:L22 | neighbors=[monogatari.js, $Q()]
- "core_monogatari_mk_addtocache": ".addToCache()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[mK, .add()]
- "core_monogatari_mk_audio": ".audio()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[mK, .arrayBuffer()]
- "core_monogatari_mk_file": ".file()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[mK, .preload()]
- "core_monogatari_mk_image": ".image()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[mK, .preload()]
- "core_monogatari_mk_iscached": ".isCached()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[mK, .match()]
- "core_monogatari_mq_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[mQ(), e1]
- "core_monogatari_ms_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[MS, .callAsync()]
- "core_monogatari_ms_revert": ".revert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[MS, .callAsync()]
- "core_monogatari_my_upgrade": ".upgrade()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[MY, .warn()]
- "core_monogatari_n0": "N0()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, H0()]
- "core_monogatari_n7": "n7()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, QK()]
- "core_monogatari_n9": "N9()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .draw()]
- "core_monogatari_nd_didmount": ".didMount()" | kind=code-symbol | source=engine/core/monogatari.js:L1071 | neighbors=[ND, .setProps()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-043.json

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
