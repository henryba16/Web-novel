# Node Description Batch 76 of 82

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

- "core_monogatari_uq_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Uq]
- "core_monogatari_uq_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Uq]
- "core_monogatari_us_afterrevert": ".afterRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[US]
- "core_monogatari_us_afterrun": ".afterRun()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[US]
- "core_monogatari_us_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[US]
- "core_monogatari_us_beforerevert": ".beforeRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[US]
- "core_monogatari_us_beforerun": ".beforeRun()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[US]
- "core_monogatari_us_bind": ".bind()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[US]
- "core_monogatari_us_configuration": ".configuration()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[US]
- "core_monogatari_us_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[US]
- "core_monogatari_us_didapply": ".didApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[US]
- "core_monogatari_us_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[US]
- "core_monogatari_us_engine": ".engine()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[US]
- "core_monogatari_us_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[US]
- "core_monogatari_us_interrupt": ".interrupt()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[US]
- "core_monogatari_us_matchobject": ".matchObject()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[US]
- "core_monogatari_us_matchstring": ".matchString()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[US]
- "core_monogatari_us_onload": ".onLoad()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[US]
- "core_monogatari_us_onsave": ".onSave()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[US]
- "core_monogatari_us_onstart": ".onStart()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[US]
- "core_monogatari_us_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[US]
- "core_monogatari_us_revert": ".revert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[US]
- "core_monogatari_us_setup": ".setup()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[US]
- "core_monogatari_us_shouldproceed": ".shouldProceed()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[US]
- "core_monogatari_us_shouldrollback": ".shouldRollback()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[US]
- "core_monogatari_us_willapply": ".willApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[US]
- "core_monogatari_us_willproceed": ".willProceed()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[US]
- "core_monogatari_us_willrevert": ".willRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[US]
- "core_monogatari_us_willrollback": ".willRollback()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[US]
- "core_monogatari_uw_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Uw()]
- "core_monogatari_uw_getsidescount": ".getSidesCount()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Uw()]
- "core_monogatari_uw_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Uw()]
- "core_monogatari_uy_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[uY]
- "core_monogatari_uz_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[UZ]
- "core_monogatari_uz_isenabled": ".isEnabled()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[UZ]
- "core_monogatari_v_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[V()]
- "core_monogatari_v1": "v1()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js]
- "core_monogatari_v8_action": ".action()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8]
- "core_monogatari_v8_blobtodataurl": "._blobToDataURL()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8]
- "core_monogatari_v8_cacheinserviceworker": ".cacheInServiceWorker()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-075.json

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
