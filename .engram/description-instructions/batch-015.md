# Node Description Batch 16 of 82

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

- "core_monogatari_lj": "LJ()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, bV(), uV(), z6(), qj()]
- "core_monogatari_lk_ensureok": ".ensureOk()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[lK, .clear(), OH, vQ, .readJsonResponse()]
- "core_monogatari_lk_readjsonresponse": ".readJsonResponse()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[lK, .ensureOk(), .remove(), .set(), .update()]
- "core_monogatari_lk_set": ".set()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[lK, .readJsonResponse(), .toRequestData(), .unwrapValue(), .post()]
- "core_monogatari_lk_update": ".update()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[lK, .readJsonResponse(), .toRequestData(), .unwrapValue(), .put()]
- "core_monogatari_m2_applymiddleware": "._applyMiddleware()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[._render(), .render(), .setProps(), .setState(), M2()]
- "core_monogatari_m2_hasmiddleware": "._hasMiddleware()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[._render(), .render(), .setProps(), .setState(), M2()]
- "core_monogatari_m5": "M5()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, D5(), .addInteractor(), .addParticleUpdater(), .checkVersion()]
- "core_monogatari_mm": "MM()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, join(), u6(), wz(), xI()]
- "core_monogatari_mw": "mw()" | kind=code-symbol | source=engine/core/monogatari.js:L21 | neighbors=[monogatari.js, .constructor(), .load(), .update(), U]
- "core_monogatari_my": "MY" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .load(), .open(), .upgrade()]
- "core_monogatari_nk_closest": ".closest()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.didMount(), NK, .bind(), .bind(), XF()]
- "core_monogatari_nw_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[nw(), CH(), cY, pY, w4()]
- "core_monogatari_nw_stop": ".stop()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[nw(), .removeListeners(), .values(), .delete(), SK()]
- "core_monogatari_nw_updateactualoptions": ".updateActualOptions()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[nw(), .init(), .setResponsive(), .setTheme(), .windowResize()]
- "core_monogatari_o_abort": ".abort()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[O(), W(), X(), s(), Y0()]
- "core_monogatari_o0": "o0()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, L0(), N(), z0(), V0()]
- "core_monogatari_o2": "O2()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .weekday(), .weekNumber(), .weekYear(), Q6()]
- "core_monogatari_o5": "O5()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, D5(), .addColorManager(), .addInteractor(), .checkVersion()]
- "core_monogatari_os_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[oS, join(), .asset(), .setting(), .prefix()]
- "core_monogatari_ow": "ow()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, .constructor(), .load(), .update(), U]
- "core_monogatari_p1": "P1" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .callAsync(), .debounce(), .throttle(), .uuid()]
- "core_monogatari_p4": "p4()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, B8(), q1(), yK(), y4()]
- "core_monogatari_p7": "p7()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, h7(), .fromObject(), bV(), uV()]
- "core_monogatari_pd_render": ".render()" | kind=code-symbol | source=engine/core/monogatari.js:L994 | neighbors=[pD, .asset(), .setting(), .prefix(), .suffix()]
- "core_monogatari_pm": "PM()" | kind=code-symbol | source=engine/core/monogatari.js:L590 | neighbors=[monogatari.js, CM(), DP(), FP(), n6()]
- "core_monogatari_py_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[pY, .error(), .initBackground(), .initUpdaters(), .paint()]
- "core_monogatari_q_interact": ".interact()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[$Q(), B8(), .getPosition(), .queryCircle(), YL()]
- "core_monogatari_qo": "QO()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[monogatari.js, .match(), .storage(), VO(), .replaceVariables()]
- "core_monogatari_qp": "QP()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, concat(), u6(), wz(), t6()]
- "core_monogatari_qz": "QZ" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, cV, .constructor(), .load(), .loadOptions()]
- "core_monogatari_r1": "r1" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .clone(), .constructor(), .create(), .origin()]
- "core_monogatari_r2": "R2()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .toISO(), .toISODate(), .toSQLDate(), JK()]
- "core_monogatari_r6": "r6()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, mQ(), tO(), vU(), TP()]
- "core_monogatari_rk_parseformat": ".parseFormat()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.expandFormat(), .constructor(), rK, .formatDateTimeFromString(), .formatDurationFromString()]
- "core_monogatari_s1_as": ".as()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.splitBy(), S1, .shiftTo(), TA(), V7()]
- "core_monogatari_s5": "S5()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .addEasing(), .addInteractor(), .checkVersion(), YZ()]
- "core_monogatari_sc": "SC()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .load(), hK(), .error(), .json()]
- "core_monogatari_sh": "SH()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .interact(), .interact(), AK(), W5()]
- "core_monogatari_t0_pop": ".pop()" | kind=code-symbol | source=engine/core/monogatari.js:L638 | neighbors=[t0, .prepend(), .attachDismissHandler(), .generateModalHtml(), .isDevEnvironment()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-015.json

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
