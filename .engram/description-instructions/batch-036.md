# Node Description Batch 37 of 82

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

- "core_monogatari_as_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[AS, .history()]
- "core_monogatari_as_onload": ".onLoad()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[AS, .prepareAction()]
- "core_monogatari_as_setup": ".setup()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[AS, .history()]
- "core_monogatari_aw_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[aw(), M1()]
- "core_monogatari_aw_update": ".update()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[aw(), IH()]
- "core_monogatari_ay_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[aY, x1()]
- "core_monogatari_bd": "BD" | kind=code-symbol | source=engine/core/monogatari.js:L947 | neighbors=[monogatari.js, .render()]
- "core_monogatari_bd_render": ".render()" | kind=code-symbol | source=engine/core/monogatari.js:L947 | neighbors=[BD, .setting()]
- "core_monogatari_bk": "Bk()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, _2()]
- "core_monogatari_bo_render": ".render()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[BO, join()]
- "core_monogatari_bo_willmount": ".willMount()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[BO, .add()]
- "core_monogatari_bq_loadmodeoptions": ".loadModeOptions()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Bq, Eq]
- "core_monogatari_bubbles": "bubbles()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, H()]
- "core_monogatari_bv_didapply": ".didApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[bV(), .history()]
- "core_monogatari_bv_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[bV(), .history()]
- "core_monogatari_bv_onload": ".onLoad()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[bV(), .prepareAction()]
- "core_monogatari_bv_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[bV(), .history()]
- "core_monogatari_bv_revert": ".revert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[bV(), .callAsync()]
- "core_monogatari_bv_setup": ".setup()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[bV(), .history()]
- "core_monogatari_bx_handleevent": ".handleEvent()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[BX, dispatchEvent()]
- "core_monogatari_bx_setvalue": "._$setValue()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[BX, nH()]
- "core_monogatari_c1": "C1()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, W1()]
- "core_monogatari_ca": "CA()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .date()]
- "core_monogatari_cancelable": "cancelable()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, H()]
- "core_monogatari_cancelbubble": "cancelBubble()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, H()]
- "core_monogatari_cd": "CD" | kind=code-symbol | source=engine/core/monogatari.js:L783 | neighbors=[monogatari.js, .render()]
- "core_monogatari_ch_getminimumdaysinfirstweek": ".getMinimumDaysInFirstWeek()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CH(), .getMinDaysInFirstWeek()]
- "core_monogatari_ch_getweekendweekdays": ".getWeekendWeekdays()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CH(), .getWeekendDays()]
- "core_monogatari_ch_hasdst": ".hasDST()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CH(), .setZone()]
- "core_monogatari_ch_isvalidianazone": ".isValidIANAZone()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CH(), .isValidZone()]
- "core_monogatari_ch_normalizezone": ".normalizeZone()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CH(), XU()]
- "core_monogatari_composed": "composed()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, H()]
- "core_monogatari_composedpath": "composedPath()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, H()]
- "core_monogatari_constructor": "constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, jH()]
- "core_monogatari_cq_isenabled": ".isEnabled()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Cq, OQ()]
- "core_monogatari_cq_loadmodeoptions": ".loadModeOptions()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Cq, Pq]
- "core_monogatari_currenttarget": "currentTarget()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, H()]
- "core_monogatari_cw_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[cw(), U5()]
- "core_monogatari_cw_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[cw(), x1()]
- "core_monogatari_cx": "CX()" | kind=code-symbol | source=engine/core/monogatari.js:L596 | neighbors=[monogatari.js, ._commitTemplateResult()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-036.json

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
