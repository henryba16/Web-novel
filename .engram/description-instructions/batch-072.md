# Node Description Batch 73 of 82

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

- "core_monogatari_qi_onreset": ".onReset()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI]
- "core_monogatari_qi_onsave": ".onSave()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI]
- "core_monogatari_qi_onstart": ".onStart()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI]
- "core_monogatari_qi_parent": ".parent()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI]
- "core_monogatari_qi_remove": ".remove()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI]
- "core_monogatari_qi_setup": ".setup()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI]
- "core_monogatari_qi_shouldproceed": ".shouldProceed()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI]
- "core_monogatari_qi_shouldrollback": ".shouldRollback()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI]
- "core_monogatari_qi_willapply": ".willApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI]
- "core_monogatari_qi_willproceed": ".willProceed()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI]
- "core_monogatari_qi_willrollback": ".willRollback()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI]
- "core_monogatari_qq_clear": ".clear()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Qq]
- "core_monogatari_qq_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Qq]
- "core_monogatari_qq_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Qq]
- "core_monogatari_qq_loadmodeoptions": ".loadModeOptions()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Qq]
- "core_monogatari_qq_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Qq]
- "core_monogatari_qw_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[QW]
- "core_monogatari_qz_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[QZ]
- "core_monogatari_r0": "r0()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_r1_clone": ".clone()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[r1]
- "core_monogatari_r1_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[r1]
- "core_monogatari_r1_create": ".create()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[r1]
- "core_monogatari_r1_origin": ".origin()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[r1]
- "core_monogatari_r8_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[r8]
- "core_monogatari_r8_discard": ".discard()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[r8]
- "core_monogatari_r8_getusecount": ".getUseCount()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[r8]
- "core_monogatari_r8_next": ".next()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[r8]
- "core_monogatari_r8_seed": ".seed()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[r8]
- "core_monogatari_rd_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L745 | neighbors=[RD]
- "core_monogatari_rd_didmount": ".didMount()" | kind=code-symbol | source=engine/core/monogatari.js:L745 | neighbors=[RD]
- "core_monogatari_rd_onreset": ".onReset()" | kind=code-symbol | source=engine/core/monogatari.js:L745 | neighbors=[RD]
- "core_monogatari_rd_render": ".render()" | kind=code-symbol | source=engine/core/monogatari.js:L745 | neighbors=[RD]
- "core_monogatari_rd_shouldproceed": ".shouldProceed()" | kind=code-symbol | source=engine/core/monogatari.js:L745 | neighbors=[RD]
- "core_monogatari_rd_willmount": ".willMount()" | kind=code-symbol | source=engine/core/monogatari.js:L745 | neighbors=[RD]
- "core_monogatari_rd_willrollback": ".willRollback()" | kind=code-symbol | source=engine/core/monogatari.js:L745 | neighbors=[RD]
- "core_monogatari_read": "read()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_regexpprototypetest": "RegExpPrototypeTest()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_rk_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[rK]
- "core_monogatari_rk_create": ".create()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[rK]
- "core_monogatari_rk_dtformatter": ".dtFormatter()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[rK]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-072.json

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
