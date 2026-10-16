# Node Description Batch 62 of 82

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

- "core_monogatari_jo_onpropsupdate": ".onPropsUpdate()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[JO]
- "core_monogatari_jq_addimage": ".addImage()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ]
- "core_monogatari_jq_addtransformation": ".addTransformation()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ]
- "core_monogatari_jq_clear": ".clear()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ]
- "core_monogatari_jq_configuration": ".configuration()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ]
- "core_monogatari_jq_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ]
- "core_monogatari_jq_contains": ".contains()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ]
- "core_monogatari_jq_each": ".each()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ]
- "core_monogatari_jq_get": ".get()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ]
- "core_monogatari_jq_getall": ".getAll()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ]
- "core_monogatari_jq_getsidescount": ".getSidesCount()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ]
- "core_monogatari_jq_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ]
- "core_monogatari_jq_interact": ".interact()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ]
- "core_monogatari_jq_key": ".key()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ]
- "core_monogatari_jq_keys": ".keys()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ]
- "core_monogatari_jq_loadmodeoptions": ".loadModeOptions()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ]
- "core_monogatari_jq_oncreate": ".onCreate()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ]
- "core_monogatari_jq_ondelete": ".onDelete()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ]
- "core_monogatari_jq_onupdate": ".onUpdate()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ]
- "core_monogatari_jq_open": ".open()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ]
- "core_monogatari_jq_remove": ".remove()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ]
- "core_monogatari_jq_removetransformation": ".removeTransformation()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ]
- "core_monogatari_jq_rename": ".rename()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ]
- "core_monogatari_jq_set": ".set()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ]
- "core_monogatari_jq_update": ".update()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ]
- "core_monogatari_jq_upgrade": ".upgrade()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ]
- "core_monogatari_js_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[JS]
- "core_monogatari_js_didapply": ".didApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[JS]
- "core_monogatari_js_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[JS]
- "core_monogatari_js_matchstring": ".matchString()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[JS]
- "core_monogatari_ju_clear": ".clear()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JU]
- "core_monogatari_ju_contains": ".contains()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JU]
- "core_monogatari_ju_get": ".get()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JU]
- "core_monogatari_ju_getall": ".getAll()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JU]
- "core_monogatari_ju_isrecord": ".isRecord()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JU]
- "core_monogatari_ju_key": ".key()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JU]
- "core_monogatari_ju_keys": ".keys()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JU]
- "core_monogatari_ju_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JU]
- "core_monogatari_ju_mergevalues": ".mergeValues()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JU]
- "core_monogatari_ju_remove": ".remove()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JU]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-061.json

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
