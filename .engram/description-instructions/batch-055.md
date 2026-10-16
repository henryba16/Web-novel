# Node Description Batch 56 of 82

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

- "core_monogatari_deprecate": "deprecate()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_dk_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[dK]
- "core_monogatari_dk_contains": ".contains()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[dK]
- "core_monogatari_dk_intersects": ".intersects()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[dK]
- "core_monogatari_dq_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[Dq]
- "core_monogatari_dq_clear": ".clear()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Dq]
- "core_monogatari_dq_contains": ".contains()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Dq]
- "core_monogatari_dq_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Dq]
- "core_monogatari_dq_interact": ".interact()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Dq]
- "core_monogatari_dq_isenabled": ".isEnabled()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Dq]
- "core_monogatari_dq_matchstring": ".matchString()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[Dq]
- "core_monogatari_dq_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Dq]
- "core_monogatari_dq_revert": ".revert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[Dq]
- "core_monogatari_dq_willapply": ".willApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[Dq]
- "core_monogatari_ds_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[DS]
- "core_monogatari_ds_matchstring": ".matchString()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[DS]
- "core_monogatari_ds_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[DS]
- "core_monogatari_dv_isnamedcontrol": ".isNamedControl()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[DV]
- "core_monogatari_dw_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[DW]
- "core_monogatari_dw_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[DW]
- "core_monogatari_dy_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[dY]
- "core_monogatari_dy_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[dY]
- "core_monogatari_dz_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[DZ()]
- "core_monogatari_dz_endnode": ".endNode()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[DZ()]
- "core_monogatari_dz_isconnected": "._$isConnected()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[DZ()]
- "core_monogatari_dz_parentnode": ".parentNode()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[DZ()]
- "core_monogatari_dz_setconnected": ".setConnected()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[DZ()]
- "core_monogatari_dz_startnode": ".startNode()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[DZ()]
- "core_monogatari_e0": "E0()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_e1_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[e1]
- "core_monogatari_e1_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[e1]
- "core_monogatari_ea": "eA()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js]
- "core_monogatari_ed_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L935 | neighbors=[ED]
- "core_monogatari_ed_willunmount": ".willUnmount()" | kind=code-symbol | source=engine/core/monogatari.js:L935 | neighbors=[ED]
- "core_monogatari_ef": "ef()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js]
- "core_monogatari_ei": "EI()" | kind=code-symbol | source=engine/core/monogatari.js:L39 | neighbors=[monogatari.js]
- "core_monogatari_ek_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[eK()]
- "core_monogatari_ek_destroy": ".destroy()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[eK()]
- "core_monogatari_ek_duration": ".duration()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[eK()]
- "core_monogatari_ek_ended": ".ended()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[eK()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-055.json

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
