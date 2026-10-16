# Node Description Batch 6 of 82

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

- "core_monogatari_nk_attribute": ".attribute()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.apply(), .apply(), .onPropsUpdate(), .didMount(), NK, .apply()] | lang=en
- "core_monogatari_nk_hide": ".hide()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.onStateUpdate(), NK, .style(), p(), .init(), .displayCenteredDialog()] | lang=en
- "core_monogatari_tt": "TT()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, ET(), concat(), F(), .nextByte(), .nextTwoBytes()] | lang=en
- "core_monogatari_v8_bind": ".bind()" | kind=code-symbol | source=engine/core/monogatari.js:L732 | neighbors=[v8, .mobile(), .addClass(), .data(), stopPropagation(), .components()] | lang=en
- "core_monogatari_v8_character": ".character()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[.constructor(), .preloadCharacterSprite(), .constructor(), .constructor(), v8, .asEngine()] | lang=en
- "core_monogatari_v8_registerlistener": ".registerListener()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[.bind(), .bind(), .bind(), .bind(), v8, .asEngine()] | lang=en
- "core_monogatari_v8_replacevariables": ".replaceVariables()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[b6(), .write(), .apply(), .apply(), v8, QO()] | lang=en
- "core_monogatari_vo": "VO()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[monogatari.js, QO(), .translate(), UO(), .match(), .preference()] | lang=en
- "core_monogatari_vs_initiate": ".initiate()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VS, .didMount(), .values(), .setProps(), .warn(), .preference()] | lang=en
- "core_monogatari_vs_setdisplay": ".setDisplay()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VS, .initiate(), concat(), .createElement(), .setProps(), .append()] | lang=en
- "core_monogatari_wk": "WK()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, BT(), e4(), E5(), mK, .update()] | lang=en
- "core_monogatari_ws": "wS" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[monogatari.js, .apply(), .bind(), .constructor(), .didRevert(), .matchString()] | lang=en
- "core_monogatari_xk": "XK" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, B5(), .intersects(), G5(), j5(), .interact()] | lang=en
- "core_monogatari_xo_characterdialog": ".characterDialog()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[XO(), .apply(), .addClass(), .attribute(), .data(), .html()] | lang=en
- "core_monogatari_zz": "ZZ()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, EE(), GE(), NQ(), sA(), XZ()] | lang=en
- "js_cloud_hook_rendersavebuttons": "renderSaveButtons()" | kind=code-symbol | source=js/cloud-hook.js:L185 | neighbors=[cloud-hook.js, init(), doSync(), el(), enabled(), hasSession()] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@3f70adb01350c08c79f9ac76d8f65ca46c579727": "3f70adb Merge pull request #28 from henryba16/henry" | kind=Commit | source=git | neighbors=[main, build-web.ts, 432cae5 Merge pull request #30 from hen…, 9f4c1e3 Merge pull request #29 from hen…, script.js, storage.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@7a27dd10d8e3a95108241cd908b40cc92f24536f": "7a27dd1 add failback model" | kind=Commit | source=git | neighbors=[analyze-ending.js, chat-ending.js, _openrouter.js, summarize-class.js, summarize-student.js, main] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@ce6035ff57609530313de5920b697fa8be9a3570": "ce6035f Merge pull request #48 from henryba16/henry" | kind=Commit | source=git | neighbors=[7a27dd1 add failback model, a3f44d7 Change model to 'google/gemma-4…, analyze-ending.js, chat-ending.js, _openrouter.js, summarize-class.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@ebcbd820e998865f64a742e0aa5a400b1bb62c6a": "ebcbd82 feat(api): Phase 01 Step A - privacy pseudonymization layer + D13 log h…" | kind=Commit | source=git | neighbors=[0fb6229 Merge pull request #55 from hen…, analyze-ending.js, chat-ending.js, _privacy.js, summarize-class.js, summarize-student.js] | lang=pt
- "core_monogatari_0": "$0()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, A(), B(), D(), .emit(), O()] | lang=en
- "core_monogatari_bs": "BS" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[monogatari.js, .apply(), .didApply(), .didRevert(), .matchString(), .onLoad()] | lang=en
- "core_monogatari_c6": "C6()" | kind=code-symbol | source=engine/core/monogatari.js:L29 | neighbors=[monogatari.js, aF(), LH(), nw(), TQ(), UH()] | lang=en
- "core_monogatari_ck": "CK()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, E5(), GC(), gY(), IH(), M1()] | lang=en
- "core_monogatari_cq": "Cq" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .clear(), .constructor(), .init(), .interact(), .isEnabled()] | lang=en
- "core_monogatari_cs": "CS" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[monogatari.js, .apply(), .constructor(), .didApply(), .didRevert(), .matchString()] | lang=en
- "core_monogatari_ct": "CT()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .getString(), .nextByte(), .nextTwoBytes(), .readSubBlocks(), .readSubBlocksBin()] | lang=en
- "core_monogatari_dispatchevent": "dispatchEvent()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, .handleEvent(), F(), I(), J(), .error()] | lang=en
- "core_monogatari_ds_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[DS, join(), .addClass(), .data(), .removeClass(), .style()] | lang=en
- "core_monogatari_dv_fill": ".fill()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CE(), DV, .formSelector(), .warn(), e9(), H()] | lang=en
- "core_monogatari_dz_committemplateresult": "._commitTemplateResult()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[DZ(), CX(), ._commitNode(), ._$getTemplate(), .createElement(), TX] | lang=en
- "core_monogatari_e": "_E()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, BE(), H(), J(), k(), O()] | lang=en
- "core_monogatari_g6_sendrequest": ".sendRequest()" | kind=code-symbol | source=engine/core/monogatari.js:L716 | neighbors=[G6, .clear(), .contains(), .get(), .getAll(), .keys()] | lang=en
- "core_monogatari_gw": "GW" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .addEventListener(), .constructor(), .dispatchEvent(), .hasEventListener()] | lang=en
- "core_monogatari_gz": "GZ()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, .apply(), .constructor(), .didApply(), .didRevert(), .matchString()] | lang=en
- "core_monogatari_h7": "h7()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, bV(), L1, p7(), uV(), XU()] | lang=en
- "core_monogatari_hs": "hS" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[monogatari.js, .apply(), .constructor(), .didApply(), .didRevert(), .matchString()] | lang=en
- "core_monogatari_ik_preloadasset": ".preloadAsset()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[iK, .apply(), .getLoader(), .getLoaderType(), .error(), .warn()] | lang=en
- "core_monogatari_iw": "iw()" | kind=code-symbol | source=engine/core/monogatari.js:L21 | neighbors=[monogatari.js, ew(), AO(), .constructor(), .init(), .isEnabled()] | lang=en
- "core_monogatari_jm": "JM()" | kind=code-symbol | source=engine/core/monogatari.js:L591 | neighbors=[monogatari.js, concat(), HY(), join(), LH(), .add()] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-005.json

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
