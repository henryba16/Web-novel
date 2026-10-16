# Node Description Batch 66 of 82

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

- "core_monogatari_l1_monthshort": ".monthShort()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_now": ".now()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_numberingsystem": ".numberingSystem()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_offset": ".offset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_offsetnamelong": ".offsetNameLong()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_offsetnameshort": ".offsetNameShort()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_outputcalendar": ".outputCalendar()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_quarter": ".quarter()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_resetcache": ".resetCache()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_resolvedlocaleoptions": ".resolvedLocaleOptions()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_second": ".second()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_setlocale": ".setLocale()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_symbol_for_nodejs_util_inspect_custom": ".[Symbol.for(\"nodejs.util.inspect.custom\")]()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_time_24_simple": ".TIME_24_SIMPLE()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_time_24_with_long_offset": ".TIME_24_WITH_LONG_OFFSET()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_time_24_with_seconds": ".TIME_24_WITH_SECONDS()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_time_24_with_short_offset": ".TIME_24_WITH_SHORT_OFFSET()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_time_simple": ".TIME_SIMPLE()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_time_with_long_offset": ".TIME_WITH_LONG_OFFSET()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_time_with_seconds": ".TIME_WITH_SECONDS()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_time_with_short_offset": ".TIME_WITH_SHORT_OFFSET()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_tojson": ".toJSON()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_tomillis": ".toMillis()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_toobject": ".toObject()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_toseconds": ".toSeconds()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_tostring": ".toString()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_tounixinteger": ".toUnixInteger()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_valueof": ".valueOf()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_weekdaylong": ".weekdayLong()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_weekdayshort": ".weekdayShort()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_weeksinweekyear": ".weeksInWeekYear()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_year": ".year()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_zone": ".zone()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_zonename": ".zoneName()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l4": "l4()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js]
- "core_monogatari_ld_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1047 | neighbors=[lD]
- "core_monogatari_ld_willmount": ".willMount()" | kind=code-symbol | source=engine/core/monogatari.js:L1047 | neighbors=[lD]
- "core_monogatari_lf": "lf()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js]
- "core_monogatari_lg": "LG()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js]
- "core_monogatari_li_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[lI()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-065.json

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
