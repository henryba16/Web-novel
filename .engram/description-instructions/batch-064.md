# Node Description Batch 65 of 82

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

- "core_monogatari_kz_getcenter": ".getCenter()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[KZ]
- "core_monogatari_kz_getsidescount": ".getSidesCount()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[KZ]
- "core_monogatari_kz_getsidesdata": ".getSidesData()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[KZ]
- "core_monogatari_l1_date_full": ".DATE_FULL()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_date_huge": ".DATE_HUGE()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_date_med": ".DATE_MED()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_date_med_with_weekday": ".DATE_MED_WITH_WEEKDAY()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_date_short": ".DATE_SHORT()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_datetime_full": ".DATETIME_FULL()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_datetime_full_with_seconds": ".DATETIME_FULL_WITH_SECONDS()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_datetime_huge": ".DATETIME_HUGE()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_datetime_huge_with_seconds": ".DATETIME_HUGE_WITH_SECONDS()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_datetime_med": ".DATETIME_MED()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_datetime_med_with_seconds": ".DATETIME_MED_WITH_SECONDS()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_datetime_med_with_weekday": ".DATETIME_MED_WITH_WEEKDAY()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_datetime_short": ".DATETIME_SHORT()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_datetime_short_with_seconds": ".DATETIME_SHORT_WITH_SECONDS()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_day": ".day()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_daysinmonth": ".daysInMonth()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_daysinyear": ".daysInYear()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_equals": ".equals()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_fromiso": ".fromISO()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_fromrfc2822": ".fromRFC2822()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_fromsql": ".fromSQL()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_get": ".get()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_hour": ".hour()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_invalidexplanation": ".invalidExplanation()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_invalidreason": ".invalidReason()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_isindst": ".isInDST()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_isinleapyear": ".isInLeapYear()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_isoffsetfixed": ".isOffsetFixed()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_isvalid": ".isValid()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_local": ".local()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_locale": ".locale()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_max": ".max()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_millisecond": ".millisecond()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_min": ".min()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_minute": ".minute()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_month": ".month()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]
- "core_monogatari_l1_monthlong": ".monthLong()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-064.json

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
