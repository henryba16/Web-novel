# Node Description Batch 34 of 82

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

- "core_monogatari_v8_willrollback": ".willRollback()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, GO(), .asEngine()]
- "core_monogatari_va": "vA()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .real(), MU()]
- "core_monogatari_vj": "vj()" | kind=code-symbol | source=engine/core/monogatari.js:L29 | neighbors=[monogatari.js, C6(), TQ()]
- "core_monogatari_vp": "VP()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, iO(), k()]
- "core_monogatari_vs_checkvoidtags": ".checkVoidTags()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VS, .createElement(), .setDisplay()]
- "core_monogatari_vs_getleafnodes": "._getLeafNodes()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VS, aD(), .setDisplay()]
- "core_monogatari_vs_parsestringtofragment": ".parseStringToFragment()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VS, ._parseTextOnlyToFragment(), .setDisplay()]
- "core_monogatari_vs_unsetcursor": ".unsetCursor()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VS, .setCursor(), .unsetAllCursors()]
- "core_monogatari_vv_cleanupvideoelement": ".cleanupVideoElement()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[.apply(), VV(), .revert()]
- "core_monogatari_w4": "w4()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), OQ()]
- "core_monogatari_w7_format": ".format()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[W7, join(), .toJSDate()]
- "core_monogatari_w8_query": ".query()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[W8(), .getRadius(), V()]
- "core_monogatari_wl": "wL()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, JL(), NY()]
- "core_monogatari_wo": "WO()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[monogatari.js, .keyboardShortcut(), Wf()]
- "core_monogatari_ws_willapply": ".willApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[wS, .showScreen(), .stopAmbient()]
- "core_monogatari_wu": "WU()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, .constructor(), .load()]
- "core_monogatari_x0": "X0()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, H(), U]
- "core_monogatari_x8": "x8" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .load()]
- "core_monogatari_x8_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[x8, AK(), eK()]
- "core_monogatari_x9": "X9()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, F9(), CK()]
- "core_monogatari_xd_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L749 | neighbors=[XD, .addButton(), .component()]
- "core_monogatari_xd_willmount": ".willMount()" | kind=code-symbol | source=engine/core/monogatari.js:L749 | neighbors=[XD, .setProps(), .add()]
- "core_monogatari_xi": "xI()" | kind=code-symbol | source=engine/core/monogatari.js:L39 | neighbors=[monogatari.js, MM(), concat()]
- "core_monogatari_xo_bind": ".bind()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[XO(), .preference(), .setting()]
- "core_monogatari_xo_setcharacter": "._setCharacter()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[XO(), .constructor(), .character()]
- "core_monogatari_xo_setup": ".setup()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[XO(), .globals(), .history()]
- "core_monogatari_xw_draw": ".draw()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Xw(), .values(), .drawPlugin()]
- "core_monogatari_xw_removeat": ".removeAt()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Xw(), .remove(), .removeQuantity()]
- "core_monogatari_xw_removequantity": ".removeQuantity()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Xw(), .addParticle(), .removeAt()]
- "core_monogatari_xw_setdensity": ".setDensity()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.init(), .windowResize(), Xw()]
- "core_monogatari_y1": "Y1()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, p(), W1()]
- "core_monogatari_y7": "Y7" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .invalid(), .constructor()]
- "core_monogatari_y8": "y8()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, hE(), kH()]
- "core_monogatari_y9": "y9()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .rotate(), .draw()]
- "core_monogatari_yd_render": ".render()" | kind=code-symbol | source=engine/core/monogatari.js:L741 | neighbors=[YD, join(), .setting()]
- "core_monogatari_yf": "yf()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, qX(), .macroTokenToFormatOpts()]
- "core_monogatari_yj": "Yj()" | kind=code-symbol | source=engine/core/monogatari.js:L21 | neighbors=[monogatari.js, AO(), .utc()]
- "core_monogatari_zc": "zC()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, H(), .values()]
- "core_monogatari_zh": "ZH()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .applySetTransformations(), NM()]
- "core_monogatari_zj": "zJ()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, Kq, IA()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-033.json

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
