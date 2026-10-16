# Node Description Batch 20 of 82

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

- "core_monogatari_dm": "DM()" | kind=code-symbol | source=engine/core/monogatari.js:L590 | neighbors=[monogatari.js, CP(), OP(), TM()]
- "core_monogatari_dq_stop": ".stop()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[Dq, .domItem(), .error(), .html()]
- "core_monogatari_ds_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[DS, .last(), .character(), .characters()]
- "core_monogatari_ds_didapply": ".didApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[DS, .global(), .history(), .setting()]
- "core_monogatari_dy": "dY" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .load(), .constructor()]
- "core_monogatari_dz_clear": "._$clear()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[DZ(), ._commitIterable(), ._commitNode(), ._$setValue()]
- "core_monogatari_dz_commititerable": "._commitIterable()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[DZ(), ._$clear(), ._insert(), ._$setValue()]
- "core_monogatari_e4": "e4()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .move(), M1(), WK()]
- "core_monogatari_ek_initialize": ".initialize()" | kind=code-symbol | source=engine/core/monogatari.js:L638 | neighbors=[eK(), .has(), .warn(), .setup()]
- "core_monogatari_ek_play": ".play()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[eK(), .createEffectChain(), .createSourceNode(), .error()]
- "core_monogatari_ey": "eY" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .load(), .constructor()]
- "core_monogatari_f2": "F2()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, Z1(), J(), .constructor()]
- "core_monogatari_f7": "f7" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .format(), .numberFormatter()]
- "core_monogatari_f9": "F9()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .getRadius(), X9(), s9()]
- "core_monogatari_fc": "FC()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, hK(), x1(), .init()]
- "core_monogatari_fh": "fH()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, HC(), QG(), SZ()]
- "core_monogatari_fl": "fL()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, TZ(), wH(), JL()]
- "core_monogatari_fp": "FP()" | kind=code-symbol | source=engine/core/monogatari.js:L590 | neighbors=[monogatari.js, join(), k(), PM()]
- "core_monogatari_fq_nexttwobytes": ".nextTwoBytes()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[BT(), CT(), fQ(), TT()]
- "core_monogatari_fr": "fR()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, BR(), jH(), JR()]
- "core_monogatari_fs_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[FS, .addClass(), .data(), .callAsync()]
- "core_monogatari_fw_destroy": ".destroy()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Fw(), .values(), .particleDestroy(), .particleDestroyed()]
- "core_monogatari_g0": "G0()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, p(), H1(), I0()]
- "core_monogatari_g2": "G2" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), K6(), .normalizeUnit()]
- "core_monogatari_g8": "G8()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, B8(), fU(), nC()]
- "core_monogatari_gc": "GC()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, CK(), .addTo(), K5()]
- "core_monogatari_getbuffer": "_getBuffer()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, consume(), H(), W()]
- "core_monogatari_gq": "gq" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .load(), .constructor()]
- "core_monogatari_h5": "H5()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, D5(), .addMover(), .checkVersion()]
- "core_monogatari_h9": "h9()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .addShape(), .checkVersion(), YZ()]
- "core_monogatari_he": "hE()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, kH(), y8(), zR()]
- "core_monogatari_hi_isaudiocategory": ".isAudioCategory()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[HI, .apply(), .getLoaderType(), .unloadPersistent()]
- "core_monogatari_ho": "HO()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[monogatari.js, cf(), pf(), tF()]
- "core_monogatari_hu": "HU()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, eC(), RC(), t9()]
- "core_monogatari_hw_addcolormanager": ".addColorManager()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[F5(), Hw(), O5(), Z5()]
- "core_monogatari_hw_getshapedrawer": ".getShapeDrawer()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.init(), Hw(), .addShape(), .init()]
- "core_monogatari_i6": "I6()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, iF(), tF(), UH()]
- "core_monogatari_if": "iF()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, .createElement(), I6(), .match()]
- "core_monogatari_ik_blocks": ".blocks()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[.apply(), .unloadBlock(), iK, .preload()]
- "core_monogatari_ik_parsespecifier": ".parseSpecifier()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[iK, .match(), Y6(), XU()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-019.json

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
