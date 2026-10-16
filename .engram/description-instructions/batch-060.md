# Node Description Batch 61 of 82

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

- "core_monogatari_ik_type": ".type()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[iK]
- "core_monogatari_ik_utcinstance": ".utcInstance()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[iK]
- "core_monogatari_initevent": "initEvent()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_iq_clear": ".clear()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Iq]
- "core_monogatari_iq_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Iq]
- "core_monogatari_iq_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Iq]
- "core_monogatari_iq_interact": ".interact()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Iq]
- "core_monogatari_iq_isenabled": ".isEnabled()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Iq]
- "core_monogatari_iq_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Iq]
- "core_monogatari_is_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[IS]
- "core_monogatari_is_matchstring": ".matchString()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[IS]
- "core_monogatari_is_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[IS]
- "core_monogatari_isarraybufferview": "isArrayBufferView()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_isasyncfunction": "isAsyncFunction()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_iw_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[iw()]
- "core_monogatari_iw_isenabled": ".isEnabled()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[iw()]
- "core_monogatari_iw_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[iw()]
- "core_monogatari_iw_update": ".update()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[iw()]
- "core_monogatari_iy_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[iY]
- "core_monogatari_iy_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[iY]
- "core_monogatari_j1_dtformatter": ".dtFormatter()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[J1()]
- "core_monogatari_j1_equals": ".equals()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[J1()]
- "core_monogatari_j1_eras": ".eras()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[J1()]
- "core_monogatari_j1_extract": ".extract()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[J1()]
- "core_monogatari_j1_fastnumbers": ".fastNumbers()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[J1()]
- "core_monogatari_j1_fromobject": ".fromObject()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[J1()]
- "core_monogatari_j1_meridiems": ".meridiems()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[J1()]
- "core_monogatari_j1_months": ".months()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[J1()]
- "core_monogatari_j1_resetcache": ".resetCache()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[J1()]
- "core_monogatari_j1_tostring": ".toString()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[J1()]
- "core_monogatari_j1_weekdays": ".weekdays()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[J1()]
- "core_monogatari_j6_matchstring": ".matchString()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[J6]
- "core_monogatari_j6_willapply": ".willApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[J6]
- "core_monogatari_j7_format": ".format()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[j7]
- "core_monogatari_j7_formattoparts": ".formatToParts()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[j7]
- "core_monogatari_j8_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[J8]
- "core_monogatari_jd_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L962 | neighbors=[JD]
- "core_monogatari_jd_didmount": ".didMount()" | kind=code-symbol | source=engine/core/monogatari.js:L962 | neighbors=[JD]
- "core_monogatari_jd_render": ".render()" | kind=code-symbol | source=engine/core/monogatari.js:L962 | neighbors=[JD]
- "core_monogatari_jo_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[JO]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-060.json

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
