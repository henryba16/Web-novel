# Node Description Batch 74 of 82

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

- "core_monogatari_rk_resolvedoptions": ".resolvedOptions()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[rK]
- "core_monogatari_rl_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[RL]
- "core_monogatari_rq_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[rQ()]
- "core_monogatari_rq_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[rQ()]
- "core_monogatari_rr": "RR()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js]
- "core_monogatari_rw_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[rw()]
- "core_monogatari_rw_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[rw()]
- "core_monogatari_rz": "RZ()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js]
- "core_monogatari_s_didapply": ".didApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[s()]
- "core_monogatari_s_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[s()]
- "core_monogatari_s_matchstring": ".matchString()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[s()]
- "core_monogatari_s1_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1]
- "core_monogatari_s1_days": ".days()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1]
- "core_monogatari_s1_fromiso": ".fromISO()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1]
- "core_monogatari_s1_fromisotime": ".fromISOTime()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1]
- "core_monogatari_s1_frommillis": ".fromMillis()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1]
- "core_monogatari_s1_hours": ".hours()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1]
- "core_monogatari_s1_invalidexplanation": ".invalidExplanation()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1]
- "core_monogatari_s1_invalidreason": ".invalidReason()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1]
- "core_monogatari_s1_isvalid": ".isValid()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1]
- "core_monogatari_s1_locale": ".locale()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1]
- "core_monogatari_s1_milliseconds": ".milliseconds()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1]
- "core_monogatari_s1_minutes": ".minutes()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1]
- "core_monogatari_s1_months": ".months()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1]
- "core_monogatari_s1_numberingsystem": ".numberingSystem()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1]
- "core_monogatari_s1_quarters": ".quarters()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1]
- "core_monogatari_s1_reconfigure": ".reconfigure()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1]
- "core_monogatari_s1_removezeros": ".removeZeros()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1]
- "core_monogatari_s1_seconds": ".seconds()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1]
- "core_monogatari_s1_symbol_for_nodejs_util_inspect_custom": ".[Symbol.for(\"nodejs.util.inspect.custom\")]()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1]
- "core_monogatari_s1_toiso": ".toISO()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1]
- "core_monogatari_s1_toisotime": ".toISOTime()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1]
- "core_monogatari_s1_tojson": ".toJSON()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1]
- "core_monogatari_s1_toobject": ".toObject()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1]
- "core_monogatari_s1_tostring": ".toString()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1]
- "core_monogatari_s1_valueof": ".valueOf()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1]
- "core_monogatari_s1_weeks": ".weeks()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1]
- "core_monogatari_s1_years": ".years()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1]
- "core_monogatari_s4": "s4()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js]
- "core_monogatari_sd_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L767 | neighbors=[SD]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-073.json

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
