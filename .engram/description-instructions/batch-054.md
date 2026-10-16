# Node Description Batch 55 of 82

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

- "core_monogatari_cd_render": ".render()" | kind=code-symbol | source=engine/core/monogatari.js:L783 | neighbors=[CD]
- "core_monogatari_ch_eras": ".eras()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CH()]
- "core_monogatari_ch_getstartofweek": ".getStartOfWeek()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CH()]
- "core_monogatari_ch_meridiems": ".meridiems()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CH()]
- "core_monogatari_ch_months": ".months()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CH()]
- "core_monogatari_ch_monthsformat": ".monthsFormat()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CH()]
- "core_monogatari_ch_weekdays": ".weekdays()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CH()]
- "core_monogatari_ch_weekdaysformat": ".weekdaysFormat()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CH()]
- "core_monogatari_cj": "CJ()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js]
- "core_monogatari_clear": "clear()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_cq_clear": ".clear()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Cq]
- "core_monogatari_cq_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Cq]
- "core_monogatari_cq_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Cq]
- "core_monogatari_cq_interact": ".interact()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Cq]
- "core_monogatari_cq_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Cq]
- "core_monogatari_cs_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[CS]
- "core_monogatari_cs_didapply": ".didApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[CS]
- "core_monogatari_cs_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[CS]
- "core_monogatari_cs_matchstring": ".matchString()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[CS]
- "core_monogatari_cv_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[cV]
- "core_monogatari_cw_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[cw()]
- "core_monogatari_cw_isenabled": ".isEnabled()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[cw()]
- "core_monogatari_cy_addlisteners": ".addListeners()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[cY]
- "core_monogatari_cy_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[cY]
- "core_monogatari_cz_clear": ".clear()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CZ()]
- "core_monogatari_cz_contains": ".contains()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CZ()]
- "core_monogatari_cz_get": ".get()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CZ()]
- "core_monogatari_cz_getall": ".getAll()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CZ()]
- "core_monogatari_cz_key": ".key()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CZ()]
- "core_monogatari_cz_keys": ".keys()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CZ()]
- "core_monogatari_cz_remove": ".remove()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CZ()]
- "core_monogatari_cz_set": ".set()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CZ()]
- "core_monogatari_cz_update": ".update()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CZ()]
- "core_monogatari_d_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L755 | neighbors=[D()]
- "core_monogatari_d_onstateupdate": ".onStateUpdate()" | kind=code-symbol | source=engine/core/monogatari.js:L760 | neighbors=[D()]
- "core_monogatari_d_render": ".render()" | kind=code-symbol | source=engine/core/monogatari.js:L760 | neighbors=[D()]
- "core_monogatari_d4": "d4()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js]
- "core_monogatari_dc": "DC()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js]
- "core_monogatari_de": "dE()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js]
- "core_monogatari_debuglog": "debuglog()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-054.json

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
