# Node Description Batch 7 of 82

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
For an entity node (any other kind — e.g. a person, place, event, object),
describe what the entity is and its role, grounded in its type, its
relations (neighbors) and the provided citations/evidence — e.g.
"Lady Carfax, a wealthy heiress who disappears en route to Lausanne.".
Ground entity descriptions in the citations/evidence when present; do not
speculate beyond the context, so a node with no supporting context may be
left out of the reply.
LANGUAGE: each entry has a `lang=` marker giving the language of its source.
Write that entry's description in EXACTLY that language. Do not translate to
a single common language — match each node's source language individually.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "core_monogatari_jo": "JO" | kind=code-symbol | source=engine/core/monogatari.js:L971 | neighbors=[monogatari.js, ._applyEffectAttributes(), .constructor(), .didMount(), ._extractEffectNames(), ._getVoidElementType()] | lang=en
- "core_monogatari_k0": "K0()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, $0(), A(), C(), D(), .emit()] | lang=en
- "core_monogatari_kw": "Kw()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, .constructor(), .externalInteract(), .handleClickMode(), .init(), .load()] | lang=en
- "core_monogatari_l1_set": ".set()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, H6(), iU, lA(), Q6(), rU()] | lang=en
- "core_monogatari_l1_setzone": ".setZone()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.hasDST(), L1, .hasSame(), rU(), XU(), .toLocal()] | lang=en
- "core_monogatari_li": "lI()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, concat(), .apply(), .constructor(), .didApply(), .didRevert()] | lang=en
- "core_monogatari_nc": "nC()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, iC(), CK(), .getFillColor(), .getPosition(), .getRadius()] | lang=en
- "core_monogatari_po": "PO()" | kind=code-symbol | source=engine/core/monogatari.js:L716 | neighbors=[monogatari.js, .autoPlay(), .components(), .global(), .setting(), .skip()] | lang=en
- "core_monogatari_qq": "Qq" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, join(), .clear(), .constructor(), .init(), .interact()] | lang=en
- "core_monogatari_s1_fromdurationlike": ".fromDurationLike()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.after(), .before(), .splitBy(), .minus(), .plus(), S1] | lang=en
- "core_monogatari_t9": "t9()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, HU(), LR(), MZ(), $Q(), VV()] | lang=en
- "core_monogatari_tm": "TM()" | kind=code-symbol | source=engine/core/monogatari.js:L590 | neighbors=[monogatari.js, CM(), concat(), DM(), join(), LH()] | lang=en
- "core_monogatari_u8": "U8" | kind=code-symbol | source=engine/core/monogatari.js:L968 | neighbors=[monogatari.js, .addButton(), .addButtonAfter(), .addButtonBefore(), .button(), .buttons()] | lang=en
- "core_monogatari_u8_buttons": ".buttons()" | kind=code-symbol | source=engine/core/monogatari.js:L968 | neighbors=[.render(), .render(), U8, .addButton(), .addButtonAfter(), .addButtonBefore()] | lang=en
- "core_monogatari_uq": "Uq" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .loadModeOptions(), .clear(), .constructor(), .init(), .interact()] | lang=en
- "core_monogatari_v8_component": ".component()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[.setup(), .revert(), .init(), v8, .components(), .init()] | lang=en
- "core_monogatari_vq": "vQ" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .ensureOk(), .arrayBuffer(), .blob(), .json(), .postJson()] | lang=en
- "core_monogatari_vv_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VV(), .createElement(), .add(), .addClass(), .append(), .attribute()] | lang=en
- "core_monogatari_xd": "XD" | kind=code-symbol | source=engine/core/monogatari.js:L749 | neighbors=[monogatari.js, .constructor(), .init(), .onReset(), .render(), .shouldProceed()] | lang=en
- "core_monogatari_yk": "yK()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, A0(), gY(), HL(), p4(), .update()] | lang=en
- "core_monogatari_z0": "z0()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, G(), L0(), m(), o0(), p()] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@1e1641a201ef05c00f6e92e1d2d89da375d8bb67": "1e1641a fix bug" | kind=Commit | source=git | neighbors=[main, 29c7bc4 fix bug, cloud-classes.js, cloud-slots.js, cloud-sync.js, script.js] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@2a8dcd7c88b69b35d8898cae12798aa8e73acc7b": "2a8dcd7 fix bug" | kind=Commit | source=git | neighbors=[19b1ff8 oh man, main, build-web.ts, 0f593dc fix bug, cloud-auth.js, cloud-classes.js] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@3ed1f4ac705d58c175a270ba704132d7b679ce10": "3ed1f4a feat(ai-eval): Phase 01 Step C+D - telemetry hooks, synthetic eval harn…" | kind=Commit | source=git | neighbors=[18987ef feat(api): Phase 01 Step B - ve…, _openrouter.js, main, run-eval.mjs, harness.mjs, payload-probe.mjs] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@432cae5e60c30c7b95414825f79eb0686e04b46f": "432cae5 Merge pull request #30 from henryba16/henry" | kind=Commit | source=git | neighbors=[3f70adb Merge pull request #28 from hen…, main, 84ebb9c Merge pull request #31 from hen…, 8579909 Install and Configure Vercel Sp…, cc5cbae Install Vercel Web Analytics, script.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@5c1019da3a74a9891168330eee99910efba32ebe": "5c1019d Merge pull request #17 from henryba16/henry" | kind=Commit | source=git | neighbors=[main, 2cf430f Merge pull request #18 from hen…, 5a56aa3 anbatukam, script.js, storage.js, serve.ts] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@9150bc7d936adfd9c8b9b4916bdec781f23d63fe": "9150bc7 Merge pull request #36 from henryba16/henry" | kind=Commit | source=git | neighbors=[analyze-ending.js, chat-ending.js, main, 6e0ba7a Merge pull request #37 from hen…, options.js, script.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@f7ca9ffb99196d2a52008c4016cb62ab04e655da": "f7ca9ff Fix warning messages and improve text clarity" | kind=Commit | source=git | neighbors=[main, 1a71ccf nah, 840e3db Merge branch 'main' into henry, 9a6c02a index page, b892279 Merge pull request #34 from hen…, ebd2b78 Merge pull request #16 from hen…] | lang=en
- "core_monogatari_b": "B()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, $0(), A(), F(), G(), H()] | lang=en
- "core_monogatari_b6": "b6()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, H(), kI(), .setContext(), ._setCycle(), .setExtras()] | lang=en
- "core_monogatari_b8": "B8()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, fU(), .getFillColor(), .getRadius(), .getStrokeColor(), G8()] | lang=en
- "core_monogatari_bq": "Bq" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .clear(), .constructor(), .init(), .interact(), .isEnabled()] | lang=en
- "core_monogatari_bt": "BT()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, ET(), .getString(), .nextByte(), .nextTwoBytes(), .arrayBuffer()] | lang=en
- "core_monogatari_bw": "bw()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, .constructor(), .init(), .isEnabled(), .load(), .update()] | lang=en
- "core_monogatari_cw": "cw()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, .constructor(), .init(), .isEnabled(), .load(), .move()] | lang=en
- "core_monogatari_dz_setvalue": "._$setValue()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[DZ(), ._$clear(), ._commitIterable(), ._commitNode(), ._commitTemplateResult(), ._commitText()] | lang=en
- "core_monogatari_e1": "e1" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .create(), .load(), .constructor(), .constructor()] | lang=en
- "core_monogatari_f5": "F5()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, D5(), E8(), .addColorManager(), .checkVersion(), QU()] | lang=en
- "core_monogatari_fs": "FS" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[monogatari.js, .apply(), .constructor(), .didApply(), .didRevert(), .matchString()] | lang=en
- "core_monogatari_gf": "gf()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, AO(), JQ, .has(), .warn(), .setting()] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-006.json

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
