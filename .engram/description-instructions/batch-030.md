# Node Description Batch 31 of 82

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

- "core_monogatari_lq_setup": ".setup()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[Lq, .globals(), .history()]
- "core_monogatari_ls_revert": ".revert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[LS, .global(), .history()]
- "core_monogatari_lv_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[LV, .callAsync(), .run()]
- "core_monogatari_lv_didapply": ".didApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[LV, .global(), .history()]
- "core_monogatari_lv_distancetosq": ".distanceToSq()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[LV, .getLengthSq(), .sub()]
- "core_monogatari_lv_getlengthsq": ".getLengthSq()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[LV, .distanceToSq(), .length()]
- "core_monogatari_lv_multto": ".multTo()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[K5(), LV, .normalize()]
- "core_monogatari_lv_setup": ".setup()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[LV, .global(), .history()]
- "core_monogatari_lz_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[LZ, .getFillColor(), hK()]
- "core_monogatari_m2_lazy": ".lazy()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2(), .has(), ._init()]
- "core_monogatari_m2_preload": ".preload()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2(), .isLazy(), ._loadLazyComponent()]
- "core_monogatari_m2_use": ".use()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2(), .add(), ._init()]
- "core_monogatari_m4": "m4" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .load()]
- "core_monogatari_mh_groupend": ".groupEnd()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[G(), MH, N()]
- "core_monogatari_ml": "ML" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .constructor()]
- "core_monogatari_mu": "MU()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, Kq, vA()]
- "core_monogatari_mw_update": ".update()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[mw(), .getRadius(), WK()]
- "core_monogatari_mz": "MZ()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, JE(), t9()]
- "core_monogatari_n6": "n6()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, concat(), PM()]
- "core_monogatari_n8": "N8" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .draw(), .getSidesCount()]
- "core_monogatari_nd_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L982 | neighbors=[ND, .removeButton(), .setting()]
- "core_monogatari_nd_render": ".render()" | kind=code-symbol | source=engine/core/monogatari.js:L982 | neighbors=[ND, join(), .buttons()]
- "core_monogatari_nk_click": ".click()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK, .attachDismissHandler(), .download()]
- "core_monogatari_nk_focus": ".focus()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK, .didMount(), .bind()]
- "core_monogatari_nk_matches": ".matches()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK, .apply(), XF()]
- "core_monogatari_nl": "NL()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, .listingMode(), U]
- "core_monogatari_nm": "NM()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, V(), ZH()]
- "core_monogatari_nq_interact": ".interact()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NQ(), .getPosition(), XK]
- "core_monogatari_ns_didapply": ".didApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[nS, .history(), .setting()]
- "core_monogatari_nu": "NU" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), Z1()]
- "core_monogatari_nw_clearclickhandlers": ".clearClickHandlers()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[nw(), SK(), .destroy()]
- "core_monogatari_nw_draw": ".draw()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[nw(), G4(), SK()]
- "core_monogatari_nw_export": ".export()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[nw(), .values(), .error()]
- "core_monogatari_nw_handleclickmode": ".handleClickMode()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[nw(), .values(), SK()]
- "core_monogatari_nw_play": ".play()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[nw(), .values(), SK()]
- "core_monogatari_nw_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[nw(), CH(), SK()]
- "core_monogatari_nz": "Nz()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, .createElement(), W8()]
- "core_monogatari_o9": "o9()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, HR(), UR()]
- "core_monogatari_od_didmount": ".didMount()" | kind=code-symbol | source=engine/core/monogatari.js:L745 | neighbors=[OD, .focus(), .value()]
- "core_monogatari_od_onpropsupdate": ".onPropsUpdate()" | kind=code-symbol | source=engine/core/monogatari.js:L745 | neighbors=[OD, .createElement(), .style()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-030.json

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
