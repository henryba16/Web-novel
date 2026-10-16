# Node Description Batch 79 of 82

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
For an entity node (any other kind — e.g. a person, place, event, object),
describe what the entity is and its role, grounded in its type, its
relations (neighbors) and the provided citations/evidence — e.g.
"Lady Carfax, a wealthy heiress who disappears en route to Lausanne.".
Ground entity descriptions in the citations/evidence when present; do not
speculate beyond the context, so a node with no supporting context may be
left out of the reply.
Write every description in English (en). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "core_monogatari_z8": "z8()" | kind=code-symbol | source=engine/core/monogatari.js:L39 | neighbors=[monogatari.js]
- "core_monogatari_zd_all": ".all()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[zD]
- "core_monogatari_zd_bind": ".bind()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[zD]
- "core_monogatari_zd_configuration": ".configuration()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[zD]
- "core_monogatari_zd_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[zD]
- "core_monogatari_zd_content": ".content()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[zD]
- "core_monogatari_zd_element": ".element()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[zD]
- "core_monogatari_zd_engine": ".engine()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[zD]
- "core_monogatari_zd_get": ".get()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[zD]
- "core_monogatari_zd_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[zD]
- "core_monogatari_zd_instance": ".instance()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[zD]
- "core_monogatari_zd_instances": ".instances()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[zD]
- "core_monogatari_zd_onload": ".onLoad()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[zD]
- "core_monogatari_zd_onreset": ".onReset()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[zD]
- "core_monogatari_zd_onsave": ".onSave()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[zD]
- "core_monogatari_zd_onstart": ".onStart()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[zD]
- "core_monogatari_zd_parent": ".parent()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[zD]
- "core_monogatari_zd_remove": ".remove()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[zD]
- "core_monogatari_zd_setup": ".setup()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[zD]
- "core_monogatari_zd_shouldproceed": ".shouldProceed()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[zD]
- "core_monogatari_zd_shouldrollback": ".shouldRollback()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[zD]
- "core_monogatari_zd_willproceed": ".willProceed()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[zD]
- "core_monogatari_zd_willrollback": ".willRollback()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[zD]
- "core_monogatari_zk_isblank": ".isBlank()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[zK()]
- "core_monogatari_zk_selection": ".selection()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[zK()]
- "core_monogatari_zk_truncate": ".truncate()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[zK()]
- "core_monogatari_zq_bind": ".bind()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[zq]
- "core_monogatari_zq_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[zq]
- "core_monogatari_zq_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[zq]
- "core_monogatari_zq_matchstring": ".matchString()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[zq]
- "core_monogatari_zq_shouldproceed": ".shouldProceed()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[zq]
- "core_monogatari_zq_willrollback": ".willRollback()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[zq]
- "core_monogatari_zs_matchstring": ".matchString()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[ZS]
- "core_monogatari_zs_willrevert": ".willRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[ZS]
- "core_monogatari_zz_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[ZZ()]
- "core_monogatari_zz_getsidescount": ".getSidesCount()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[ZZ()]
- "core_monogatari_zz_particleinit": ".particleInit()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[ZZ()]
- "debug_debug_j": "J()" | kind=code-symbol | source=engine/debug/debug.js:L5 | neighbors=[debug.js]
- "docref_rfc_4180": "RFC-4180" | kind=entity | source=js/cloud-export.js:L96 | neighbors=[cloud-export.js]
- "electrobun_index_win": "win" | kind=code-symbol | source=engine/electrobun/index.ts:L104 | neighbors=[index.ts]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-078.json

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
