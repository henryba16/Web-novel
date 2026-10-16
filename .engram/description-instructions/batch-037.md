# Node Description Batch 38 of 82

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

- "core_monogatari_cy_removelisteners": ".removeListeners()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[cY, .stop()]
- "core_monogatari_cz_open": ".open()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CZ(), U]
- "core_monogatari_cz_rename": ".rename()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CZ(), .computeId()]
- "core_monogatari_cz_upgrade": ".upgrade()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CZ(), fV()]
- "core_monogatari_d_bind": ".bind()" | kind=code-symbol | source=engine/core/monogatari.js:L755 | neighbors=[D(), .registerListener()]
- "core_monogatari_d_onreset": ".onReset()" | kind=code-symbol | source=engine/core/monogatari.js:L755 | neighbors=[D(), .html()]
- "core_monogatari_d_pop": ".pop()" | kind=code-symbol | source=engine/core/monogatari.js:L760 | neighbors=[D(), .last()]
- "core_monogatari_d_willmount": ".willMount()" | kind=code-symbol | source=engine/core/monogatari.js:L760 | neighbors=[D(), .add()]
- "core_monogatari_d6": "d6()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, eO()]
- "core_monogatari_da": "DA()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, BA()]
- "core_monogatari_defaultprevented": "defaultPrevented()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, H()]
- "core_monogatari_destroy": "destroy()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, P0()]
- "core_monogatari_df": "df()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, .delete()]
- "core_monogatari_dj": "Dj()" | kind=code-symbol | source=engine/core/monogatari.js:L22 | neighbors=[monogatari.js, R()]
- "core_monogatari_dq_didapply": ".didApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[Dq, .history()]
- "core_monogatari_dq_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[Dq, .history()]
- "core_monogatari_dq_onload": ".onLoad()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[Dq, .prepareAction()]
- "core_monogatari_dq_particles": ".particles()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[Dq, .constructor()]
- "core_monogatari_ds_willapply": ".willApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[DS, .characters()]
- "core_monogatari_ds_willrevert": ".willRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[DS, .history()]
- "core_monogatari_dv_nameselector": ".nameSelector()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[DV, .escapeAttributeValue()]
- "core_monogatari_dv_parsevalue": ".parseValue()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[DV, .values()]
- "core_monogatari_dw_handlecolor": ".handleColor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[DW, fU()]
- "core_monogatari_dw_handlerangecolor": ".handleRangeColor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[DW, fU()]
- "core_monogatari_dw_parsestring": ".parseString()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[DW, h4()]
- "core_monogatari_dz_gettemplate": "._$getTemplate()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[DZ(), ._commitTemplateResult()]
- "core_monogatari_ed_didmount": ".didMount()" | kind=code-symbol | source=engine/core/monogatari.js:L935 | neighbors=[ED, .setting()]
- "core_monogatari_ed_onstateupdate": ".onStateUpdate()" | kind=code-symbol | source=engine/core/monogatari.js:L935 | neighbors=[ED, .translation()]
- "core_monogatari_ek_currenttime": ".currentTime()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[eK(), .cleanup()]
- "core_monogatari_ek_effect": ".effect()" | kind=code-symbol | source=engine/core/monogatari.js:L638 | neighbors=[eK(), .createEffectChain()]
- "core_monogatari_ek_pause": ".pause()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[eK(), .cleanup()]
- "core_monogatari_ek_stop": ".stop()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[eK(), .cleanup()]
- "core_monogatari_eq_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Eq, AK()]
- "core_monogatari_er": "ER()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, .warn()]
- "core_monogatari_eventphase": "eventPhase()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, H()]
- "core_monogatari_ez": "EZ()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, wH()]
- "core_monogatari_f0": "f0()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, p()]
- "core_monogatari_f4": "f4()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, x4()]
- "core_monogatari_f7_format": ".format()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[f7, JK()]
- "core_monogatari_f8_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[F8(), ML]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-037.json

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
