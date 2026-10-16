# Node Description Batch 32 of 82

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

- "core_monogatari_oq_interact": ".interact()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[OQ(), f1(), SH()]
- "core_monogatari_oq_isenabled": ".isEnabled()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[OQ(), DH(), f1()]
- "core_monogatari_or": "OR()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, SZ(), UG()]
- "core_monogatari_os_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[oS, .addClass(), .style()]
- "core_monogatari_os_setup": ".setup()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[oS, .global(), .history()]
- "core_monogatari_oy": "OY" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .load()]
- "core_monogatari_oz": "OZ()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, EE(), r9()]
- "core_monogatari_pf": "pf()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, cf(), HO()]
- "core_monogatari_pk_blob": ".blob()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[pK(), vQ, .readRemote()]
- "core_monogatari_pk_head": ".head()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[pK(), .exists(), .send()]
- "core_monogatari_pk_put": ".put()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.update(), pK(), .send()]
- "core_monogatari_py_clear": ".clear()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[pY, .paint(), YV()]
- "core_monogatari_py_paint": ".paint()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[pY, .clear(), .init()]
- "core_monogatari_py_windowresize": ".windowResize()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[pY, .updateActualOptions(), .setDensity()]
- "core_monogatari_qi_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI, .match(), .removeMediaPlayer()]
- "core_monogatari_qi_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI, .mediaPlayer(), .mediaPlayers()]
- "core_monogatari_qi_revert": ".revert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI, .history(), .prepareAction()]
- "core_monogatari_ql": "QL()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, _4(), gY()]
- "core_monogatari_qx": "qX()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .parseFormatForOpts(), yf()]
- "core_monogatari_removeeventlistener": "removeEventListener()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, p(), .delete()]
- "core_monogatari_returnvalue": "returnValue()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, H(), W()]
- "core_monogatari_rk_formatinterval": ".formatInterval()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.toLocaleString(), rK, .toJSDate()]
- "core_monogatari_rk_num": ".num()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[rK, .numberFormatter(), JK()]
- "core_monogatari_ry": "RY" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .load()]
- "core_monogatari_ry_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[RY, OL, sY]
- "core_monogatari_s0": "s0()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, .emit(), p()]
- "core_monogatari_s1_invalid": ".invalid()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1, cV, q7]
- "core_monogatari_s1_mapunits": ".mapUnits()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.splitBy(), S1, l7()]
- "core_monogatari_s1_minus": ".minus()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1, .fromDurationLike(), .negate()]
- "core_monogatari_s1_shifttoall": ".shiftToAll()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1, .rescale(), .shiftTo()]
- "core_monogatari_sa": "sA()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, J2(), ZZ()]
- "core_monogatari_sf": "sf()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, Fw(), .delete()]
- "core_monogatari_sq_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Sq, AK(), q1()]
- "core_monogatari_st": "ST()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, I5(), UU()]
- "core_monogatari_sw_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[sw(), HL(), M1()]
- "core_monogatari_t0_attachdismisshandler": ".attachDismissHandler()" | kind=code-symbol | source=engine/core/monogatari.js:L638 | neighbors=[t0, .click(), .pop()]
- "core_monogatari_t0_escapehtml": ".escapeHtml()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[t0, .createElement(), .generateModalHtml()]
- "core_monogatari_t0_generatemodalhtml": ".generateModalHtml()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[t0, .escapeHtml(), .pop()]
- "core_monogatari_t0_interpolate": ".interpolate()" | kind=code-symbol | source=engine/core/monogatari.js:L638 | neighbors=[t0, .interpolateProps(), .show()]
- "core_monogatari_t0_interpolateprops": ".interpolateProps()" | kind=code-symbol | source=engine/core/monogatari.js:L638 | neighbors=[t0, .interpolate(), .show()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-031.json

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
