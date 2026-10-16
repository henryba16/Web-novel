# Node Description Batch 28 of 82

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

- "core_monogatari_dq_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Dq, .particles(), .error()]
- "core_monogatari_dq_intersects": ".intersects()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Dq, dK, XK]
- "core_monogatari_dq_setup": ".setup()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[Dq, .history(), YZ()]
- "core_monogatari_ds_onload": ".onLoad()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[DS, .history(), .prepareAction()]
- "core_monogatari_ds_setup": ".setup()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[DS, .global(), .history()]
- "core_monogatari_dt": "dT()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, join(), rQ()]
- "core_monogatari_dv_escapeattributevalue": ".escapeAttributeValue()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[DV, .formSelector(), .nameSelector()]
- "core_monogatari_dv_isvalid": ".isValid()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[DV, .formSelector(), .warn()]
- "core_monogatari_dv_reportvalidity": ".reportValidity()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[DV, .formSelector(), .warn()]
- "core_monogatari_dv_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[DV, .formSelector(), .warn()]
- "core_monogatari_dz_committext": "._commitText()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[DZ(), ._commitNode(), ._$setValue()]
- "core_monogatari_dz_insert": "._insert()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[DZ(), ._commitIterable(), ._commitNode()]
- "core_monogatari_e1_create": ".create()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[e1, eK(), jV()]
- "core_monogatari_ec": "eC()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, HU(), YV()]
- "core_monogatari_ed_render": ".render()" | kind=code-symbol | source=engine/core/monogatari.js:L935 | neighbors=[ED, join(), .setting()]
- "core_monogatari_ek_createsourcenode": ".createSourceNode()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[eK(), .cleanup(), .play()]
- "core_monogatari_ek_effects": ".effects()" | kind=code-symbol | source=engine/core/monogatari.js:L638 | neighbors=[eK(), .values(), .parseEffects()]
- "core_monogatari_es_revert": ".revert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[ES, .history(), .prepareAction()]
- "core_monogatari_ex": "EX" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[monogatari.js, ._commitValue(), .constructor()]
- "core_monogatari_fd_render": ".render()" | kind=code-symbol | source=engine/core/monogatari.js:L968 | neighbors=[fD, join(), .buttons()]
- "core_monogatari_fe": "fE()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, JL(), LR()]
- "core_monogatari_ff": "FF()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[monogatari.js, .delete(), .audioBufferClearCache()]
- "core_monogatari_final": "final()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, A(), Y()]
- "core_monogatari_fo_checkunread": ".checkUnread()" | kind=code-symbol | source=engine/core/monogatari.js:L1047 | neighbors=[FO(), .add(), .displayNvlDialog()]
- "core_monogatari_fq_getstring": ".getString()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[BT(), CT(), fQ()]
- "core_monogatari_fq_readsubblocksbin": ".readSubBlocksBin()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CT(), fQ(), TT()]
- "core_monogatari_fs_revert": ".revert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[FS, .history(), .prepareAction()]
- "core_monogatari_fw_draw": ".draw()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Fw(), .values(), .drawParticlePlugin()]
- "core_monogatari_fw_getmass": ".getMass()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[E8(), Fw(), .getRadius()]
- "core_monogatari_fw_getstrokecolor": ".getStrokeColor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[B8(), Fw(), .drawParticle()]
- "core_monogatari_fw_isinsidecanvas": ".isInsideCanvas()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Fw(), .getRadius(), .isVisible()]
- "core_monogatari_fz": "FZ()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, .constructor(), .createElement()]
- "core_monogatari_g6_remove": ".remove()" | kind=code-symbol | source=engine/core/monogatari.js:L716 | neighbors=[G6, .sendRequest(), V()]
- "core_monogatari_g6_set": ".set()" | kind=code-symbol | source=engine/core/monogatari.js:L716 | neighbors=[G6, .sendRequest(), H()]
- "core_monogatari_g6_update": ".update()" | kind=code-symbol | source=engine/core/monogatari.js:L716 | neighbors=[G6, .sendRequest(), H()]
- "core_monogatari_g7": "g7()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, Q6(), W2()]
- "core_monogatari_gh_bool": ".bool()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[gH, PA(), V()]
- "core_monogatari_gh_date": ".date()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[gH, CA(), V()]
- "core_monogatari_gh_dice": ".dice()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[gH, TA(), V()]
- "core_monogatari_gh_hex": ".hex()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[gH, GA(), V()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-027.json

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
