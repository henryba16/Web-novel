# Node Description Batch 24 of 82

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

- "core_monogatari_vs_executeaction": ".executeAction()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VS, .values(), ._revealNextCharacter(), .typewrite()]
- "core_monogatari_vs_finish": ".finish()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[p(), VS, .setting(), .stripActionMarkers()]
- "core_monogatari_vs_parseactionsection": "._parseActionSection()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VS, .error(), .match(), ._parseOptions()]
- "core_monogatari_vs_parsetextonlytofragment": "._parseTextOnlyToFragment()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VS, .parseStringToFragment(), .createElement(), .setProps()]
- "core_monogatari_vs_setcursor": ".setCursor()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VS, ._revealNextCharacter(), .add(), .unsetCursor()]
- "core_monogatari_vs_stripactionmarkers": ".stripActionMarkers()" | kind=code-symbol | source=engine/core/monogatari.js:L1075 | neighbors=[VS, .finish(), .setContent(), .constructor()]
- "core_monogatari_vs_unsetallcursors": ".unsetAllCursors()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VS, .destroy(), ._revealNextCharacter(), .unsetCursor()]
- "core_monogatari_vu": "vU()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, nI(), r6(), sI()]
- "core_monogatari_vw": "VW" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .constructor(), .load()]
- "core_monogatari_vz": "VZ" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .constructor(), .load()]
- "core_monogatari_w7_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[W7, .toMessage(), F2(), .setZone()]
- "core_monogatari_w9": "W9()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .addParticleUpdater(), .checkVersion(), YZ()]
- "core_monogatari_wi": "wI()" | kind=code-symbol | source=engine/core/monogatari.js:L39 | neighbors=[monogatari.js, W8(), concat(), sO()]
- "core_monogatari_ws_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[wS, .history(), .label(), .run()]
- "core_monogatari_wv": "WV" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .load(), .constructor()]
- "core_monogatari_ww": "Ww()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, shift(), .constructor(), .load()]
- "core_monogatari_xl": "xL()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, PZ(), QG(), SZ()]
- "core_monogatari_xo_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[XO(), .attribute(), .hide(), .setting()]
- "core_monogatari_xo_shouldproceed": ".shouldProceed()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[XO(), .last(), .global(), .stopTyping()]
- "core_monogatari_xo_willrevert": ".willRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[XO(), .hide(), .html(), .removeClass()]
- "core_monogatari_xo_willrollback": ".willRollback()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[XO(), .html(), .component(), .global()]
- "core_monogatari_xq": "Xq" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .constructor(), .load()]
- "core_monogatari_xw_addparticle": ".addParticle()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Xw(), .removeQuantity(), .init(), .push()]
- "core_monogatari_xw_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Xw(), .values(), .addManualParticles(), .addParticle()]
- "core_monogatari_xw_initplugins": ".initPlugins()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Xw(), .values(), .getMovers(), .getUpdaters()]
- "core_monogatari_xw_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Xw(), fQ(), q1(), rV()]
- "core_monogatari_xz": "XZ()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, AZ(), GE(), ZZ()]
- "core_monogatari_y6": "Y6()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .parseSpecifier(), pK(), wz()]
- "core_monogatari_yl": "YL()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .interact(), jV(), VV()]
- "core_monogatari_yp": "YP()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, KY(), concat(), .error()]
- "core_monogatari_yq": "Yq()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, CK(), .constructor(), .load()]
- "core_monogatari_yx": "YX()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .expandFormat(), .constructor(), concat()]
- "core_monogatari_z5": "Z5()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, D5(), .addColorManager(), .checkVersion()]
- "core_monogatari_zf": "zf()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .explainFromTokens(), iK, Z1()]
- "core_monogatari_zk_capitalize": ".capitalize()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.constructor(), .init(), .render(), zK()]
- "core_monogatari_zk_friendly": ".friendly()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[F(), gf(), IH(), zK()]
- "core_monogatari_zr": "zR()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, KR(), VR(), hE()]
- "electron_index": "index.js" | kind=code-symbol | source=engine/electron/index.js:L1 | neighbors=[{ app, ipcMain, shell, BrowserWindow, M…, createWindow(), path, url]
- "js_cloud_auth_normalizerole": "normalizeRole()" | kind=code-symbol | source=js/cloud-auth.js:L18 | neighbors=[cloud-auth.js, ensureProfile(), landingFor(), signUp()]
- "js_cloud_auth_signup": "signUp()" | kind=code-symbol | source=js/cloud-auth.js:L95 | neighbors=[cloud-auth.js, afterLogin(), ensureProfile(), normalizeRole()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-023.json

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
