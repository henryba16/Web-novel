# Node Description Batch 54 of 82

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

- "core_monogatari_ay_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[aY]
- "core_monogatari_b2_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[B2]
- "core_monogatari_b2_equals": ".equals()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[B2]
- "core_monogatari_b2_formatoffset": ".formatOffset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[B2]
- "core_monogatari_b2_isuniversal": ".isUniversal()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[B2]
- "core_monogatari_b2_isvalid": ".isValid()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[B2]
- "core_monogatari_b2_name": ".name()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[B2]
- "core_monogatari_b2_offset": ".offset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[B2]
- "core_monogatari_b2_offsetname": ".offsetName()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[B2]
- "core_monogatari_b2_type": ".type()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[B2]
- "core_monogatari_bc": "bC()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js]
- "core_monogatari_bo_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[BO]
- "core_monogatari_bo_onpropsupdate": ".onPropsUpdate()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[BO]
- "core_monogatari_bq_clear": ".clear()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Bq]
- "core_monogatari_bq_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Bq]
- "core_monogatari_bq_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Bq]
- "core_monogatari_bq_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Bq]
- "core_monogatari_bs_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[BS]
- "core_monogatari_bs_didapply": ".didApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[BS]
- "core_monogatari_bs_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[BS]
- "core_monogatari_bs_matchstring": ".matchString()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[BS]
- "core_monogatari_bs_onload": ".onLoad()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[BS]
- "core_monogatari_bs_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[BS]
- "core_monogatari_bs_revert": ".revert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[BS]
- "core_monogatari_bs_setup": ".setup()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[BS]
- "core_monogatari_bubbling_phase": "BUBBLING_PHASE()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_bv_bind": ".bind()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[bV()]
- "core_monogatari_bv_configuration": ".configuration()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[bV()]
- "core_monogatari_bv_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[bV()]
- "core_monogatari_bv_matchstring": ".matchString()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[bV()]
- "core_monogatari_bv_shouldproceed": ".shouldProceed()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[bV()]
- "core_monogatari_bv_willrevert": ".willRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[bV()]
- "core_monogatari_bw_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[bw()]
- "core_monogatari_bw_isenabled": ".isEnabled()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[bw()]
- "core_monogatari_bw_update": ".update()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[bw()]
- "core_monogatari_bx_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[BX]
- "core_monogatari_by_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[bY]
- "core_monogatari_by_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[bY]
- "core_monogatari_c4": "c4()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js]
- "core_monogatari_capturing_phase": "CAPTURING_PHASE()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-053.json

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
