# Node Description Batch 45 of 82

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

- "core_monogatari_nd_willmount": ".willMount()" | kind=code-symbol | source=engine/core/monogatari.js:L1071 | neighbors=[ND, .setProps()]
- "core_monogatari_ne": "NE()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, BE()]
- "core_monogatari_next": "next()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .random()]
- "core_monogatari_nj": "NJ()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor()]
- "core_monogatari_nk_eq": ".eq()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[kE(), NK]
- "core_monogatari_nk_find": ".find()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK, .add()]
- "core_monogatari_nk_hasattribute": ".hasAttribute()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.render(), NK]
- "core_monogatari_nk_removedata": ".removeData()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK, .willApply()]
- "core_monogatari_nk_show": ".show()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK, .style()]
- "core_monogatari_ns_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[nS, .character()]
- "core_monogatari_ns_onload": ".onLoad()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[nS, .prepareAction()]
- "core_monogatari_ns_setup": ".setup()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[nS, .history()]
- "core_monogatari_ns_willapply": ".willApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[nS, .characters()]
- "core_monogatari_nw_addclickhandler": ".addClickHandler()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[nw(), SK()]
- "core_monogatari_nw_animationstatus": ".animationStatus()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[nw(), SK()]
- "core_monogatari_nw_loadtheme": ".loadTheme()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[nw(), SK()]
- "core_monogatari_nw_refresh": ".refresh()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[nw(), SK()]
- "core_monogatari_nw_start": ".start()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[nw(), SK()]
- "core_monogatari_nw_update": ".update()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[nw(), .getRadius()]
- "core_monogatari_o_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[O(), H()]
- "core_monogatari_o_signal": ".signal()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[O(), X()]
- "core_monogatari_o4": "o4()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .add()]
- "core_monogatari_oc": "OC()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, y4()]
- "core_monogatari_od_onstateupdate": ".onStateUpdate()" | kind=code-symbol | source=engine/core/monogatari.js:L745 | neighbors=[OD, .forceRender()]
- "core_monogatari_od_render": ".render()" | kind=code-symbol | source=engine/core/monogatari.js:L745 | neighbors=[OD, join()]
- "core_monogatari_od_resize": ".resize()" | kind=code-symbol | source=engine/core/monogatari.js:L745 | neighbors=[OD, .style()]
- "core_monogatari_od_willmount": ".willMount()" | kind=code-symbol | source=engine/core/monogatari.js:L745 | neighbors=[OD, .add()]
- "core_monogatari_oe": "OE()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, ME()]
- "core_monogatari_of": "of()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, join()]
- "core_monogatari_oo": "OO()" | kind=code-symbol | source=engine/core/monogatari.js:L25 | neighbors=[monogatari.js, concat()]
- "core_monogatari_op": "OP()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, DM()]
- "core_monogatari_oq_loadmodeoptions": ".loadModeOptions()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[OQ(), Lq]
- "core_monogatari_os_didapply": ".didApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[oS, .history()]
- "core_monogatari_os_onload": ".onLoad()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[oS, .prepareAction()]
- "core_monogatari_os_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[oS, .style()]
- "core_monogatari_os_willapply": ".willApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[oS, .removeClass()]
- "core_monogatari_os_willrevert": ".willRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[oS, .removeClass()]
- "core_monogatari_p1_uuid": ".uuid()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[P1, .show()]
- "core_monogatari_pa": "PA()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .bool()]
- "core_monogatari_ph_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[PH, q1()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-044.json

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
