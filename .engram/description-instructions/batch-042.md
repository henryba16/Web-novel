# Node Description Batch 43 of 82

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

- "core_monogatari_l1_localweeknumber": ".localWeekNumber()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, M2()]
- "core_monogatari_l1_localweekyear": ".localWeekYear()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, M2()]
- "core_monogatari_l1_ordinal": ".ordinal()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, W2()]
- "core_monogatari_l1_reconfigure": ".reconfigure()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, rU()]
- "core_monogatari_l1_tobson": ".toBSON()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, .toJSDate()]
- "core_monogatari_l1_toisotime": ".toISOTime()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, K6()]
- "core_monogatari_l1_toisoweekdate": ".toISOWeekDate()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, tL()]
- "core_monogatari_l1_tolocal": ".toLocal()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, .setZone()]
- "core_monogatari_l1_tolocaleparts": ".toLocaleParts()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, .formatDateTimeParts()]
- "core_monogatari_l1_tolocalestring": ".toLocaleString()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, .formatDateTime()]
- "core_monogatari_l1_torelative": ".toRelative()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, z7()]
- "core_monogatari_l1_torelativecalendar": ".toRelativeCalendar()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, z7()]
- "core_monogatari_l1_torfc2822": ".toRFC2822()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, tL()]
- "core_monogatari_l1_until": ".until()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, .fromDateTimes()]
- "core_monogatari_l1_weekday": ".weekday()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, O2()]
- "core_monogatari_l1_weeknumber": ".weekNumber()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, O2()]
- "core_monogatari_l1_weeksinlocalweekyear": ".weeksInLocalWeekYear()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, .getMinDaysInFirstWeek()]
- "core_monogatari_l1_weekyear": ".weekYear()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, O2()]
- "core_monogatari_lc": "LC()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, AK()]
- "core_monogatari_ld_bind": ".bind()" | kind=code-symbol | source=engine/core/monogatari.js:L1047 | neighbors=[lD, .registerListener()]
- "core_monogatari_ld_onstateupdate": ".onStateUpdate()" | kind=code-symbol | source=engine/core/monogatari.js:L1047 | neighbors=[lD, .forceRender()]
- "core_monogatari_ld_render": ".render()" | kind=code-symbol | source=engine/core/monogatari.js:L1047 | neighbors=[lD, join()]
- "core_monogatari_li_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[lI(), .warn()]
- "core_monogatari_lk_configuration": ".configuration()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[lK, .computeEndpoint()]
- "core_monogatari_lk_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[lK, .computeEndpoint()]
- "core_monogatari_lk_contains": ".contains()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[lK, OH]
- "core_monogatari_lk_keys": ".keys()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[lK, .json()]
- "core_monogatari_ll": "lL()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .int53()]
- "core_monogatari_lq_afterrevert": ".afterRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[Lq, .global()]
- "core_monogatari_lq_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Lq, AK()]
- "core_monogatari_lq_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[Lq, .globals()]
- "core_monogatari_lq_willrevert": ".willRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[Lq, .history()]
- "core_monogatari_ls_didapply": ".didApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[LS, .history()]
- "core_monogatari_ls_setup": ".setup()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[LS, .history()]
- "core_monogatari_ls_willrevert": ".willRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[LS, .history()]
- "core_monogatari_lt": "lT()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, e9()]
- "core_monogatari_lv_beforerun": ".beforeRun()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[LV, .global()]
- "core_monogatari_lv_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[LV, rV()]
- "core_monogatari_lv_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[LV, .global()]
- "core_monogatari_lv_distanceto": ".distanceTo()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[LV, .sub()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-042.json

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
