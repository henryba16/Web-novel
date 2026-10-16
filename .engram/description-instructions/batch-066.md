# Node Description Batch 67 of 82

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

- "core_monogatari_li_didapply": ".didApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[lI()]
- "core_monogatari_li_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[lI()]
- "core_monogatari_li_matchstring": ".matchString()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[lI()]
- "core_monogatari_li_willapply": ".willApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[lI()]
- "core_monogatari_lk_isrecord": ".isRecord()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[lK]
- "core_monogatari_lk_key": ".key()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[lK]
- "core_monogatari_lk_mergevalues": ".mergeValues()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[lK]
- "core_monogatari_lk_open": ".open()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[lK]
- "core_monogatari_lk_rename": ".rename()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[lK]
- "core_monogatari_lk_upgrade": ".upgrade()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[lK]
- "core_monogatari_lq_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[Lq]
- "core_monogatari_lq_matchobject": ".matchObject()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[Lq]
- "core_monogatari_lq_shouldproceed": ".shouldProceed()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[Lq]
- "core_monogatari_lq_willrollback": ".willRollback()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[Lq]
- "core_monogatari_ls_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[LS]
- "core_monogatari_ls_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[LS]
- "core_monogatari_ls_matchstring": ".matchString()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[LS]
- "core_monogatari_lu": "lU()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js]
- "core_monogatari_lv_angle": ".angle()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[LV]
- "core_monogatari_lv_clone": ".clone()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[LV]
- "core_monogatari_lv_create": ".create()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[LV]
- "core_monogatari_lv_divto": ".divTo()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[LV]
- "core_monogatari_lv_matchobject": ".matchObject()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[LV]
- "core_monogatari_lv_origin": ".origin()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[LV]
- "core_monogatari_lv_setto": ".setTo()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[LV]
- "core_monogatari_lv_shouldproceed": ".shouldProceed()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[LV]
- "core_monogatari_lv_willrollback": ".willRollback()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[LV]
- "core_monogatari_lw_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Lw()]
- "core_monogatari_lw_handlecolor": ".handleColor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Lw()]
- "core_monogatari_lw_handlerangecolor": ".handleRangeColor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Lw()]
- "core_monogatari_lw_parsestring": ".parseString()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Lw()]
- "core_monogatari_lz_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[LZ]
- "core_monogatari_lz_equals": ".equals()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[LZ]
- "core_monogatari_lz_formatoffset": ".formatOffset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[LZ]
- "core_monogatari_lz_instance": ".instance()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[LZ]
- "core_monogatari_lz_isenabled": ".isEnabled()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[LZ]
- "core_monogatari_lz_isuniversal": ".isUniversal()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[LZ]
- "core_monogatari_lz_isvalid": ".isValid()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[LZ]
- "core_monogatari_lz_name": ".name()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[LZ]
- "core_monogatari_lz_offset": ".offset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[LZ]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-066.json

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
