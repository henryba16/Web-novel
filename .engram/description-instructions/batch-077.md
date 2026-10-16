# Node Description Batch 78 of 82

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

- "core_monogatari_w0": "w0()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_w7_resolvedoptions": ".resolvedOptions()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[W7]
- "core_monogatari_w8_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[W8()]
- "core_monogatari_wg": "WG()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js]
- "core_monogatari_ws_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[wS]
- "core_monogatari_ws_matchstring": ".matchString()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[wS]
- "core_monogatari_wu_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[WU()]
- "core_monogatari_wu_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[WU()]
- "core_monogatari_wv_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[WV]
- "core_monogatari_ww_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Ww()]
- "core_monogatari_ww_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Ww()]
- "core_monogatari_x8_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[x8]
- "core_monogatari_xc": "XC()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js]
- "core_monogatari_xd_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L749 | neighbors=[XD]
- "core_monogatari_xd_onreset": ".onReset()" | kind=code-symbol | source=engine/core/monogatari.js:L971 | neighbors=[XD]
- "core_monogatari_xd_shouldproceed": ".shouldProceed()" | kind=code-symbol | source=engine/core/monogatari.js:L971 | neighbors=[XD]
- "core_monogatari_xd_willproceed": ".willProceed()" | kind=code-symbol | source=engine/core/monogatari.js:L971 | neighbors=[XD]
- "core_monogatari_xd_willrollback": ".willRollback()" | kind=code-symbol | source=engine/core/monogatari.js:L971 | neighbors=[XD]
- "core_monogatari_xg": "XG()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js]
- "core_monogatari_xk_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[XK]
- "core_monogatari_xk_contains": ".contains()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[XK]
- "core_monogatari_xk_intersects": ".intersects()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[XK]
- "core_monogatari_xo_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[XO()]
- "core_monogatari_xo_matchstring": ".matchString()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[XO()]
- "core_monogatari_xq_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Xq]
- "core_monogatari_xq_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Xq]
- "core_monogatari_xw_clear": ".clear()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Xw()]
- "core_monogatari_xw_count": ".count()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Xw()]
- "core_monogatari_xw_destroy": ".destroy()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Xw()]
- "core_monogatari_xw_filter": ".filter()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Xw()]
- "core_monogatari_xw_find": ".find()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Xw()]
- "core_monogatari_xw_get": ".get()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Xw()]
- "core_monogatari_xw_handleclickmode": ".handleClickMode()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Xw()]
- "core_monogatari_xw_redraw": ".redraw()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Xw()]
- "core_monogatari_y0_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[Y0()]
- "core_monogatari_yd_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L741 | neighbors=[YD]
- "core_monogatari_yd_onpropsupdate": ".onPropsUpdate()" | kind=code-symbol | source=engine/core/monogatari.js:L741 | neighbors=[YD]
- "core_monogatari_yg": "YG()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js]
- "core_monogatari_yq_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Yq()]
- "core_monogatari_yw_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[YW]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-077.json

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
