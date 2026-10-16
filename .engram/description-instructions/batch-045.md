# Node Description Batch 46 of 82

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

- "core_monogatari_pi": "pI()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, cI()]
- "core_monogatari_pj": "PJ()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .seedWithArray()]
- "core_monogatari_pk_createtimeoutcontroller": ".createTimeoutController()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[pK(), .send()]
- "core_monogatari_pk_exists": ".exists()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[pK(), .head()]
- "core_monogatari_pk_get": ".get()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[pK(), .send()]
- "core_monogatari_pk_parseurl": ".parseUrl()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[pK(), .send()]
- "core_monogatari_pk_patch": ".patch()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[pK(), .send()]
- "core_monogatari_pk_serialize": ".serialize()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[pK(), join()]
- "core_monogatari_pk_text": ".text()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[pK(), vQ]
- "core_monogatari_pq_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Pq, .isValidZone()]
- "core_monogatari_pq_isvalidspecifier": ".isValidSpecifier()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Pq, .isValidZone()]
- "core_monogatari_pq_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Pq, q1()]
- "core_monogatari_pq_offset": ".offset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Pq, L6()]
- "core_monogatari_pq_offsetname": ".offsetName()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Pq, b7()]
- "core_monogatari_pw_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Pw(), e1]
- "core_monogatari_py_drawparticleplugin": ".drawParticlePlugin()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.draw(), pY]
- "core_monogatari_py_drawplugin": ".drawPlugin()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[pY, .draw()]
- "core_monogatari_py_initplugins": ".initPlugins()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[pY, .values()]
- "core_monogatari_py_initupdaters": ".initUpdaters()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[pY, .init()]
- "core_monogatari_py_resize": ".resize()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[pY, .setResizeFactor()]
- "core_monogatari_q_isenabled": ".isEnabled()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[$Q(), f1()]
- "core_monogatari_q7_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[q7, .toMessage()]
- "core_monogatari_qd_onreset": ".onReset()" | kind=code-symbol | source=engine/core/monogatari.js:L743 | neighbors=[qD, ._cleanupTypeWriter()]
- "core_monogatari_qd_willrollback": ".willRollback()" | kind=code-symbol | source=engine/core/monogatari.js:L743 | neighbors=[qD, ._cleanupTypeWriter()]
- "core_monogatari_qd_willunmount": ".willUnmount()" | kind=code-symbol | source=engine/core/monogatari.js:L743 | neighbors=[qD, ._cleanupTypeWriter()]
- "core_monogatari_qf": "Qf()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .preference()]
- "core_monogatari_qi_connectedcallback": ".connectedCallback()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI, .add()]
- "core_monogatari_qi_didapply": ".didApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI, .history()]
- "core_monogatari_qq_isenabled": ".isEnabled()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Qq, f1()]
- "core_monogatari_qw_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[QW, q1()]
- "core_monogatari_qz_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[QZ, VZ]
- "core_monogatari_r8_autoseed": ".autoSeed()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[r8, U2()]
- "core_monogatari_r8_seedwitharray": ".seedWithArray()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[r8, PJ()]
- "core_monogatari_re": "RE()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, AE()]
- "core_monogatari_rf": "rf()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, .error()]
- "core_monogatari_rj": "Rj()" | kind=code-symbol | source=engine/core/monogatari.js:L22 | neighbors=[monogatari.js, $Q()]
- "core_monogatari_rk_formatdatetime": ".formatDateTime()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.toLocaleString(), rK]
- "core_monogatari_rk_formatdatetimeparts": ".formatDateTimeParts()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.toLocaleParts(), rK]
- "core_monogatari_rk_formatwithsystemdefault": ".formatWithSystemDefault()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[rK, .redefaultToSystem()]
- "core_monogatari_rk_macrotokentoformatopts": ".macroTokenToFormatOpts()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[rK, yf()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-045.json

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
