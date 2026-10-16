# Node Description Batch 71 of 82

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

- "core_monogatari_objectdefineproperties": "ObjectDefineProperties()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_objectdefineproperty": "ObjectDefineProperty()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_objectgetownpropertydescriptor": "ObjectGetOwnPropertyDescriptor()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_objectkeys": "ObjectKeys()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_objectsetprototypeof": "ObjectSetPrototypeOf()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_od_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L745 | neighbors=[OD]
- "core_monogatari_od_shouldproceed": ".shouldProceed()" | kind=code-symbol | source=engine/core/monogatari.js:L1057 | neighbors=[OD]
- "core_monogatari_od_willrollback": ".willRollback()" | kind=code-symbol | source=engine/core/monogatari.js:L1057 | neighbors=[OD]
- "core_monogatari_od_willunmount": ".willUnmount()" | kind=code-symbol | source=engine/core/monogatari.js:L745 | neighbors=[OD]
- "core_monogatari_oh_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[OH]
- "core_monogatari_oj": "Oj()" | kind=code-symbol | source=engine/core/monogatari.js:L22 | neighbors=[monogatari.js]
- "core_monogatari_ol_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[OL]
- "core_monogatari_ol_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[OL]
- "core_monogatari_once": "once()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_oq_clear": ".clear()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[OQ()]
- "core_monogatari_oq_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[OQ()]
- "core_monogatari_oq_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[OQ()]
- "core_monogatari_oq_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[OQ()]
- "core_monogatari_oq_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[OQ()]
- "core_monogatari_os_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[oS]
- "core_monogatari_os_matchstring": ".matchString()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[oS]
- "core_monogatari_ov": "OV()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js]
- "core_monogatari_ow_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[ow()]
- "core_monogatari_ow_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[ow()]
- "core_monogatari_oy_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[OY]
- "core_monogatari_oy_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[OY]
- "core_monogatari_p1_debounce": ".debounce()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[P1]
- "core_monogatari_p1_throttle": ".throttle()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[P1]
- "core_monogatari_p5": "p5()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js]
- "core_monogatari_pd_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L994 | neighbors=[pD]
- "core_monogatari_pd_willunmount": ".willUnmount()" | kind=code-symbol | source=engine/core/monogatari.js:L994 | neighbors=[pD]
- "core_monogatari_ph_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[PH]
- "core_monogatari_pq_create": ".create()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Pq]
- "core_monogatari_pq_draw": ".draw()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Pq]
- "core_monogatari_pq_equals": ".equals()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Pq]
- "core_monogatari_pq_formatoffset": ".formatOffset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Pq]
- "core_monogatari_pq_getsidescount": ".getSidesCount()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Pq]
- "core_monogatari_pq_isuniversal": ".isUniversal()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Pq]
- "core_monogatari_pq_isvalid": ".isValid()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Pq]
- "core_monogatari_pq_name": ".name()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Pq]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-070.json

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
