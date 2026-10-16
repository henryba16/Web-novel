# Node Description Batch 63 of 82

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

- "core_monogatari_ju_rename": ".rename()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JU]
- "core_monogatari_ju_set": ".set()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JU]
- "core_monogatari_ju_update": ".update()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JU]
- "core_monogatari_ju_valuewithinlinekey": ".valueWithInlineKey()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JU]
- "core_monogatari_jv_didapply": ".didApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[jV()]
- "core_monogatari_jv_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[jV()]
- "core_monogatari_jv_matchstring": ".matchString()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[jV()]
- "core_monogatari_jv_shouldproceed": ".shouldProceed()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[jV()]
- "core_monogatari_jv_willapply": ".willApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[jV()]
- "core_monogatari_jv_willrollback": ".willRollback()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[jV()]
- "core_monogatari_jx_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[JX]
- "core_monogatari_jx_dom": ".dom()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[JX]
- "core_monogatari_jx_query": ".query()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[JX]
- "core_monogatari_jx_queryall": ".queryAll()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[JX]
- "core_monogatari_jx_shadowroot": ".shadowRoot()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[JX]
- "core_monogatari_k_abutsend": ".abutsEnd()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k()]
- "core_monogatari_k_abutsstart": ".abutsStart()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k()]
- "core_monogatari_k_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k()]
- "core_monogatari_k_contains": ".contains()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k()]
- "core_monogatari_k_engulfs": ".engulfs()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k()]
- "core_monogatari_k_equals": ".equals()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k()]
- "core_monogatari_k_invalidexplanation": ".invalidExplanation()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k()]
- "core_monogatari_k_invalidreason": ".invalidReason()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k()]
- "core_monogatari_k_isafter": ".isAfter()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k()]
- "core_monogatari_k_isbefore": ".isBefore()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k()]
- "core_monogatari_k_isinterval": ".isInterval()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k()]
- "core_monogatari_k_isvalid": ".isValid()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k()]
- "core_monogatari_k_lastdatetime": ".lastDateTime()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k()]
- "core_monogatari_k_overlaps": ".overlaps()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k()]
- "core_monogatari_k_start": ".start()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k()]
- "core_monogatari_k_symbol_for_nodejs_util_inspect_custom": ".[Symbol.for(\"nodejs.util.inspect.custom\")]()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k()]
- "core_monogatari_k_toformat": ".toFormat()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k()]
- "core_monogatari_k_toiso": ".toISO()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k()]
- "core_monogatari_k_toisodate": ".toISODate()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k()]
- "core_monogatari_k_toisotime": ".toISOTime()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k()]
- "core_monogatari_k_tostring": ".toString()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k()]
- "core_monogatari_k8_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k8]
- "core_monogatari_k8_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k8]
- "core_monogatari_kg": "KG()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js]
- "core_monogatari_ki_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[kI()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-062.json

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
