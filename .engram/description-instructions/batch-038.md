# Node Description Batch 39 of 82

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

- "core_monogatari_fa": "FA()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, Kq]
- "core_monogatari_fd": "fD" | kind=code-symbol | source=engine/core/monogatari.js:L968 | neighbors=[monogatari.js, .render()]
- "core_monogatari_fg": "FG()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, .emit()]
- "core_monogatari_fj": "Fj()" | kind=code-symbol | source=engine/core/monogatari.js:L22 | neighbors=[monogatari.js, m()]
- "core_monogatari_fo_onstateupdate": ".onStateUpdate()" | kind=code-symbol | source=engine/core/monogatari.js:L1047 | neighbors=[FO(), .hide()]
- "core_monogatari_format": "format()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, shift()]
- "core_monogatari_fq_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[fQ(), Xq]
- "core_monogatari_fq_readsubblocks": ".readSubBlocks()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CT(), fQ()]
- "core_monogatari_fq_skipsubblocks": ".skipSubBlocks()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CT(), fQ()]
- "core_monogatari_fs_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[FS, .objects()]
- "core_monogatari_fw_isvisible": ".isVisible()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Fw(), .isInsideCanvas()]
- "core_monogatari_g1": "g1()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, p()]
- "core_monogatari_g4": "G4()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .draw()]
- "core_monogatari_g6_applygettransformations": ".applyGetTransformations()" | kind=code-symbol | source=engine/core/monogatari.js:L716 | neighbors=[G6, .values()]
- "core_monogatari_g6_applysettransformations": ".applySetTransformations()" | kind=code-symbol | source=engine/core/monogatari.js:L716 | neighbors=[G6, .values()]
- "core_monogatari_g6_clear": ".clear()" | kind=code-symbol | source=engine/core/monogatari.js:L716 | neighbors=[G6, .sendRequest()]
- "core_monogatari_g6_contains": ".contains()" | kind=code-symbol | source=engine/core/monogatari.js:L716 | neighbors=[G6, .sendRequest()]
- "core_monogatari_g6_get": ".get()" | kind=code-symbol | source=engine/core/monogatari.js:L716 | neighbors=[G6, .sendRequest()]
- "core_monogatari_g6_getall": ".getAll()" | kind=code-symbol | source=engine/core/monogatari.js:L716 | neighbors=[G6, .sendRequest()]
- "core_monogatari_g6_keys": ".keys()" | kind=code-symbol | source=engine/core/monogatari.js:L716 | neighbors=[G6, .sendRequest()]
- "core_monogatari_ga": "GA()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .hex()]
- "core_monogatari_getstring": "_getString()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, consume()]
- "core_monogatari_gh_auto": ".auto()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[gH, SJ()]
- "core_monogatari_gh_int32": ".int32()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[gH, sL()]
- "core_monogatari_gh_int53": ".int53()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[gH, lL()]
- "core_monogatari_gh_max": ".max()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[gH, V()]
- "core_monogatari_gh_min": ".min()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[gH, V()]
- "core_monogatari_gh_pick": ".pick()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[gH, BA()]
- "core_monogatari_gh_real": ".real()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[gH, vA()]
- "core_monogatari_gh_realzerotooneexclusive": ".realZeroToOneExclusive()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[gH, K2()]
- "core_monogatari_gh_realzerotooneinclusive": ".realZeroToOneInclusive()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[gH, V2()]
- "core_monogatari_gh_sample": ".sample()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[gH, kA()]
- "core_monogatari_gh_shuffle": ".shuffle()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[gH, dL()]
- "core_monogatari_gh_string": ".string()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[gH, V()]
- "core_monogatari_gk": "gk()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .fromHTTP()]
- "core_monogatari_gt": "GT()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, V9()]
- "core_monogatari_gw_removealleventlisteners": ".removeAllEventListeners()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[GW, .delete()]
- "core_monogatari_gw_removeeventlistener": ".removeEventListener()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[GW, .delete()]
- "core_monogatari_h8_afterrevert": ".afterRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[h8(), .global()]
- "core_monogatari_h8_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[h8(), .global()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-038.json

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
