# Node Description Batch 40 of 82

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

- "core_monogatari_h8_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[h8(), .globals()]
- "core_monogatari_h8_revert": ".revert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[h8(), .callAsync()]
- "core_monogatari_h8_setup": ".setup()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[h8(), .globals()]
- "core_monogatari_hh_onstateupdate": ".onStateUpdate()" | kind=code-symbol | source=engine/core/monogatari.js:L749 | neighbors=[HH, .add()]
- "core_monogatari_hi_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[HI, .resolveCategory()]
- "core_monogatari_hp": "HP()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, t6()]
- "core_monogatari_hq_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hq, M1()]
- "core_monogatari_hq_loadmodeoptions": ".loadModeOptions()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hq, Uq]
- "core_monogatari_hq_update": ".update()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hq, z9()]
- "core_monogatari_hw_addeffect": ".addEffect()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw(), AK()]
- "core_monogatari_hw_addpathgenerator": ".addPathGenerator()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw(), .getPathGenerator()]
- "core_monogatari_hw_addpreset": ".addPreset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw(), .getPreset()]
- "core_monogatari_hw_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw(), QW]
- "core_monogatari_hw_getavailableplugins": ".getAvailablePlugins()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw(), .init()]
- "core_monogatari_hw_getinteractors": ".getInteractors()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw(), .init()]
- "core_monogatari_hw_getmovers": ".getMovers()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw(), .initPlugins()]
- "core_monogatari_hw_getpreset": ".getPreset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw(), .addPreset()]
- "core_monogatari_hw_getsupportedeffects": ".getSupportedEffects()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw(), .init()]
- "core_monogatari_hw_getsupportedshapes": ".getSupportedShapes()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw(), .init()]
- "core_monogatari_hw_getupdaters": ".getUpdaters()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw(), .initPlugins()]
- "core_monogatari_hy": "HY()" | kind=code-symbol | source=engine/core/monogatari.js:L590 | neighbors=[monogatari.js, JM()]
- "core_monogatari_hz_draw": ".draw()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[HZ, N9()]
- "core_monogatari_i7": "i7()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, hK()]
- "core_monogatari_i8_autoseed": ".autoSeed()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[i8, U2()]
- "core_monogatari_ic": "iC()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, nC()]
- "core_monogatari_id": "iD" | kind=code-symbol | source=engine/core/monogatari.js:L1073 | neighbors=[monogatari.js, .render()]
- "core_monogatari_ik_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[iK, .resolveCategory()]
- "core_monogatari_ik_registeralias": ".registerAlias()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[iK, .setup()]
- "core_monogatari_ik_registercategory": ".registerCategory()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[iK, .setup()]
- "core_monogatari_ik_registerloader": ".registerLoader()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[iK, .setup()]
- "core_monogatari_inspect": "inspect()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, JL()]
- "core_monogatari_iq_loadmodeoptions": ".loadModeOptions()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Iq, Sq]
- "core_monogatari_ir": "IR()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, BR()]
- "core_monogatari_is_didapply": ".didApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[IS, .history()]
- "core_monogatari_is_onload": ".onLoad()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[IS, .prepareAction()]
- "core_monogatari_is_setup": ".setup()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[IS, .history()]
- "core_monogatari_is_willapply": ".willApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[IS, .characters()]
- "core_monogatari_is_willrevert": ".willRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[IS, .history()]
- "core_monogatari_iw_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[iw(), DW]
- "core_monogatari_j1_clone": ".clone()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[J1(), C2()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-039.json

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
