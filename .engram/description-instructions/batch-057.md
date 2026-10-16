# Node Description Batch 58 of 82

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

- "core_monogatari_fw_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Fw()]
- "core_monogatari_g_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[G()]
- "core_monogatari_g2_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[G2]
- "core_monogatari_g6_addtransformation": ".addTransformation()" | kind=code-symbol | source=engine/core/monogatari.js:L716 | neighbors=[G6]
- "core_monogatari_g6_configuration": ".configuration()" | kind=code-symbol | source=engine/core/monogatari.js:L716 | neighbors=[G6]
- "core_monogatari_g6_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L716 | neighbors=[G6]
- "core_monogatari_g6_each": ".each()" | kind=code-symbol | source=engine/core/monogatari.js:L716 | neighbors=[G6]
- "core_monogatari_g6_key": ".key()" | kind=code-symbol | source=engine/core/monogatari.js:L716 | neighbors=[G6]
- "core_monogatari_g6_oncreate": ".onCreate()" | kind=code-symbol | source=engine/core/monogatari.js:L716 | neighbors=[G6]
- "core_monogatari_g6_ondelete": ".onDelete()" | kind=code-symbol | source=engine/core/monogatari.js:L716 | neighbors=[G6]
- "core_monogatari_g6_onupdate": ".onUpdate()" | kind=code-symbol | source=engine/core/monogatari.js:L716 | neighbors=[G6]
- "core_monogatari_g6_open": ".open()" | kind=code-symbol | source=engine/core/monogatari.js:L716 | neighbors=[G6]
- "core_monogatari_g6_removetransformation": ".removeTransformation()" | kind=code-symbol | source=engine/core/monogatari.js:L716 | neighbors=[G6]
- "core_monogatari_g6_rename": ".rename()" | kind=code-symbol | source=engine/core/monogatari.js:L716 | neighbors=[G6]
- "core_monogatari_g6_upgrade": ".upgrade()" | kind=code-symbol | source=engine/core/monogatari.js:L716 | neighbors=[G6]
- "core_monogatari_get": "get()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js]
- "core_monogatari_gh_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[gH]
- "core_monogatari_gh_die": ".die()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[gH]
- "core_monogatari_gh_int53full": ".int53Full()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[gH]
- "core_monogatari_gh_uint32": ".uint32()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[gH]
- "core_monogatari_gh_uint53": ".uint53()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[gH]
- "core_monogatari_gh_uint53full": ".uint53Full()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[gH]
- "core_monogatari_gh_uuid4": ".uuid4()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[gH]
- "core_monogatari_gi": "GI()" | kind=code-symbol | source=engine/core/monogatari.js:L39 | neighbors=[monogatari.js]
- "core_monogatari_gq_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[gq]
- "core_monogatari_gq_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[gq]
- "core_monogatari_gr": "GR()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js]
- "core_monogatari_gu": "GU()" | kind=code-symbol | source=engine/core/monogatari.js:L34 | neighbors=[monogatari.js]
- "core_monogatari_gw_addeventlistener": ".addEventListener()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[GW]
- "core_monogatari_gw_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[GW]
- "core_monogatari_gw_dispatchevent": ".dispatchEvent()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[GW]
- "core_monogatari_gw_haseventlistener": ".hasEventListener()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[GW]
- "core_monogatari_gw_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[GW]
- "core_monogatari_gx_commitvalue": "._commitValue()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[GX]
- "core_monogatari_gx_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[GX]
- "core_monogatari_gz_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[GZ()]
- "core_monogatari_gz_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[GZ()]
- "core_monogatari_gz_didapply": ".didApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[GZ()]
- "core_monogatari_gz_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[GZ()]
- "core_monogatari_gz_matchstring": ".matchString()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[GZ()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-057.json

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
