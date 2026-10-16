# Node Description Batch 22 of 82

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

- "core_monogatari_lv_rotate": ".rotate()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[K9(), LV, UL(), y9()]
- "core_monogatari_ly": "lY" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .constructor(), .load()]
- "core_monogatari_m2_instantiate": ".instantiate()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2(), .createElement(), .setProps(), .has()]
- "core_monogatari_m2_loadlazycomponent": "._loadLazyComponent()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2(), .error(), V(), .preload()]
- "core_monogatari_m2_onerror": ".onError()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2(), .add(), ._init(), ._setupRegistry()]
- "core_monogatari_m2_onmount": ".onMount()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2(), .add(), ._init(), ._setupRegistry()]
- "core_monogatari_m2_onunmount": ".onUnmount()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2(), .add(), ._init(), ._setupRegistry()]
- "core_monogatari_m6": "m6()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, bI(), p(), vM()]
- "core_monogatari_m9": "M9()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .addMover(), .checkVersion(), YZ()]
- "core_monogatari_me": "ME()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, LR(), OE(), ZE()]
- "core_monogatari_n1": "N1()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, p(), .delete(), QK()]
- "core_monogatari_n2_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[N2, .parseFormat(), Uf(), YX()]
- "core_monogatari_n4": "N4()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, f1(), .createElement(), .loadCanvas()]
- "core_monogatari_n5": "n5()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .addInteractor(), .checkVersion(), YZ()]
- "core_monogatari_ni": "nI()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, mQ(), vU(), $Z()]
- "core_monogatari_ns_revert": ".revert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[nS, .history(), .prepareAction(), .setting()]
- "core_monogatari_nw_addpath": ".addPath()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.init(), nw(), .has(), SK()]
- "core_monogatari_nw_pause": ".pause()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[nw(), B4(), .values(), SK()]
- "core_monogatari_oa": "oA()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, V(), .formatDateTimeFromString(), .formatDurationFromString()]
- "core_monogatari_og": "OG()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, DZ(), join(), QR()]
- "core_monogatari_ol": "OL" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .load(), .constructor()]
- "core_monogatari_p9": "p9()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .addParticleUpdater(), .checkVersion(), YZ()]
- "core_monogatari_pd_willmount": ".willMount()" | kind=code-symbol | source=engine/core/monogatari.js:L994 | neighbors=[pD, .setProps(), .error(), .warn()]
- "core_monogatari_pk_post": ".post()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.set(), pK(), .send(), .postJson()]
- "core_monogatari_pk_postjson": ".postJson()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[pK(), .json(), .post(), vQ]
- "core_monogatari_pp": "PP()" | kind=code-symbol | source=engine/core/monogatari.js:L590 | neighbors=[monogatari.js, concat(), k(), TM()]
- "core_monogatari_pq_isvalidzone": ".isValidZone()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.isValidIANAZone(), Pq, .constructor(), .isValidSpecifier()]
- "core_monogatari_pw": "Pw()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, eH(), .constructor(), .load()]
- "core_monogatari_py_drawparticle": ".drawParticle()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[pY, .getFillColor(), .getRadius(), .getStrokeColor()]
- "core_monogatari_py_loadcanvas": ".loadCanvas()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.load(), pY, N4(), .initBackground()]
- "core_monogatari_q5": "Q5()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .move(), .addParticleUpdater(), .checkVersion()]
- "core_monogatari_q7": "q7" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, JK(), .constructor(), .invalid()]
- "core_monogatari_qc": "QC()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, AK(), eK(), .createElement()]
- "core_monogatari_qd_cleanuptypewriter": "._cleanupTypeWriter()" | kind=code-symbol | source=engine/core/monogatari.js:L743 | neighbors=[qD, .onReset(), .willRollback(), .willUnmount()]
- "core_monogatari_qj": "qj()" | kind=code-symbol | source=engine/core/monogatari.js:L22 | neighbors=[monogatari.js, AO(), IA(), LJ()]
- "core_monogatari_qq_interact": ".interact()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Qq, B5(), f1(), G5()]
- "core_monogatari_qr": "QR()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, HR(), OG(), UR()]
- "core_monogatari_qw": "QW" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .constructor(), .load()]
- "core_monogatari_r5": "R5()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .update(), BH(), .error()]
- "core_monogatari_ra": "rA()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, HX(), .normalize(), .shiftTo()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-021.json

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
