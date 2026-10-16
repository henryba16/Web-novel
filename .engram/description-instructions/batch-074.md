# Node Description Batch 75 of 82

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

- "core_monogatari_sd_willmount": ".willMount()" | kind=code-symbol | source=engine/core/monogatari.js:L767 | neighbors=[SD]
- "core_monogatari_stringprototypeslice": "StringPrototypeSlice()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_stringprototypetolowercase": "StringPrototypeToLowerCase()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_stringprototypetouppercase": "StringPrototypeToUpperCase()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_stringprototypetrim": "StringPrototypeTrim()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_sw_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[sw()]
- "core_monogatari_sw_isenabled": ".isEnabled()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[sw()]
- "core_monogatari_sw_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[sw()]
- "core_monogatari_sw_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[sw()]
- "core_monogatari_sy_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[sY]
- "core_monogatari_sy_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[sY]
- "core_monogatari_sz_isconnected": "._$isConnected()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[SZ()]
- "core_monogatari_sz_tagname": ".tagName()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[SZ()]
- "core_monogatari_t0_register": ".register()" | kind=code-symbol | source=engine/core/monogatari.js:L638 | neighbors=[t0]
- "core_monogatari_ti": "tI()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js]
- "core_monogatari_tk_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[TK]
- "core_monogatari_tq_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[TQ()]
- "core_monogatari_tq_create": ".create()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[TQ()]
- "core_monogatari_tq_drawparticle": ".drawParticle()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[TQ()]
- "core_monogatari_tq_humansize": ".humanSize()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[TQ()]
- "core_monogatari_tq_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[TQ()]
- "core_monogatari_tq_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[TQ()]
- "core_monogatari_tr": "TR()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js]
- "core_monogatari_tw_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[tw()]
- "core_monogatari_tw_handlecolor": ".handleColor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[tw()]
- "core_monogatari_tw_handlerangecolor": ".handleRangeColor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[tw()]
- "core_monogatari_tw_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[tw()]
- "core_monogatari_tw_parsestring": ".parseString()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[tw()]
- "core_monogatari_tx_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[TX]
- "core_monogatari_tx_isconnected": "._$isConnected()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[TX]
- "core_monogatari_tx_parentnode": ".parentNode()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[TX]
- "core_monogatari_typedarrayprototypeset": "TypedArrayPrototypeSet()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_u_aborted": ".aborted()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[U]
- "core_monogatari_u_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[U]
- "core_monogatari_u4": "u4()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js]
- "core_monogatari_ud_render": ".render()" | kind=code-symbol | source=engine/core/monogatari.js:L1004 | neighbors=[uD]
- "core_monogatari_uq_clear": ".clear()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Uq]
- "core_monogatari_uq_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Uq]
- "core_monogatari_uq_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Uq]
- "core_monogatari_uq_isenabled": ".isEnabled()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Uq]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-074.json

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
