# Node Description Batch 41 of 82

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

- "core_monogatari_j1_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[J1(), NJ()]
- "core_monogatari_j1_create": ".create()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[J1(), C2()]
- "core_monogatari_j1_getstartofweek": ".getStartOfWeek()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[J1(), .getWeekSettings()]
- "core_monogatari_j1_listformatter": ".listFormatter()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[J1(), .toHuman()]
- "core_monogatari_j1_redefaulttoen": ".redefaultToEN()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[J1(), .toFormat()]
- "core_monogatari_j1_redefaulttosystem": ".redefaultToSystem()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[J1(), .formatWithSystemDefault()]
- "core_monogatari_j4": "J4()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, OQ()]
- "core_monogatari_j6_bind": ".bind()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[J6, .registerListener()]
- "core_monogatari_j6_didapply": ".didApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[J6, .history()]
- "core_monogatari_j6_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[J6, .history()]
- "core_monogatari_j6_revert": ".revert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[J6, .removeMediaPlayer()]
- "core_monogatari_j6_shouldproceed": ".shouldProceed()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[J6, .mediaPlayers()]
- "core_monogatari_j6_willproceed": ".willProceed()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[J6, .shutUp()]
- "core_monogatari_j6_willrollback": ".willRollback()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[J6, .shutUp()]
- "core_monogatari_j7_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[j7, c7()]
- "core_monogatari_j8_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[J8, q1()]
- "core_monogatari_jd_onpropsupdate": ".onPropsUpdate()" | kind=code-symbol | source=engine/core/monogatari.js:L962 | neighbors=[JD, .attribute()]
- "core_monogatari_jd_onstateupdate": ".onStateUpdate()" | kind=code-symbol | source=engine/core/monogatari.js:L962 | neighbors=[JD, .value()]
- "core_monogatari_ji": "JI()" | kind=code-symbol | source=engine/core/monogatari.js:L39 | neighbors=[monogatari.js, concat()]
- "core_monogatari_jo_didmount": ".didMount()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[JO, ._applyEffectAttributes()]
- "core_monogatari_jo_extracteffectnames": "._extractEffectNames()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[JO, ._applyEffectAttributes()]
- "core_monogatari_jo_getvoidelementtype": "._getVoidElementType()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[JO, .render()]
- "core_monogatari_jp": "jP()" | kind=code-symbol | source=engine/core/monogatari.js:L590 | neighbors=[monogatari.js, vM()]
- "core_monogatari_jq_applygettransformations": ".applyGetTransformations()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ, .values()]
- "core_monogatari_jq_draw": ".draw()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ, K9()]
- "core_monogatari_jq_isenabled": ".isEnabled()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ, f1()]
- "core_monogatari_jq_loadshape": ".loadShape()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.init(), JQ]
- "core_monogatari_jq_particleinit": ".particleInit()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ, .getFillColor()]
- "core_monogatari_jq_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JQ, .getPosition()]
- "core_monogatari_jt": "jT()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, Q9()]
- "core_monogatari_ju_configuration": ".configuration()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JU, fV()]
- "core_monogatari_ju_open": ".open()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JU, U]
- "core_monogatari_ju_upgrade": ".upgrade()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JU, fV()]
- "core_monogatari_jv_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[jV(), .replaceVariables()]
- "core_monogatari_jv_notifications": ".notifications()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[jV(), .constructor()]
- "core_monogatari_jw_setresponsive": ".setResponsive()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JW, .updateActualOptions()]
- "core_monogatari_jw_settheme": ".setTheme()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JW, .updateActualOptions()]
- "core_monogatari_k_divideequally": ".divideEqually()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k(), .splitBy()]
- "core_monogatari_k_fromiso": ".fromISO()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k(), .fromDateTimes()]
- "core_monogatari_k_hassame": ".hasSame()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k(), .isEmpty()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-040.json

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
