# Node Description Batch 5 of 82

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
Write every description in English (en). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "core_monogatari_l1_fromobject": ".fromObject()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, H6(), h7(), iL(), iU, lA()]
- "core_monogatari_nw_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[nw(), CH(), .values(), .getAvailablePlugins(), .getEffectDrawer(), .getShapeDrawer()]
- "core_monogatari_os": "oS" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[monogatari.js, .apply(), .constructor(), .didApply(), .didRevert(), .matchString()]
- "core_monogatari_v8_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[v8, .mobile(), .hide(), .alert(), .components(), .displayInitialScreen()]
- "core_monogatari_v8_mediaplayers": ".mediaPlayers()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[.constructor(), .constructor(), .init(), .onLoad(), .reset(), .shouldProceed()]
- "core_monogatari_w8": "W8()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, Nz(), vM(), concat(), join(), sO()]
- "core_monogatari_x1": "x1()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .load(), .load(), .load(), C(), .load()]
- "core_monogatari_xu": "XU()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .normalizeZone(), h7(), .defaultZone(), .fromJSDate(), .fromMillis()]
- "core_monogatari_zq": "zq" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .apply(), .bind(), .constructor(), .didRevert(), .load()]
- "api_prompts": "_prompts.js" | kind=code-symbol | source=api/_prompts.js:L1 | neighbors=[buildAnalyzePrompt(), buildAnalyzePromptGrounded(), buildChatPrompt(), buildChatPromptGrounded(), buildClassPrompt(), buildStudentPrompt()]
- "commit:repo:github.com/henryba16/Web-novel@b892279543e7d30b0fd261a80d7e08230daaf802": "b892279 Merge pull request #34 from henryba16/main" | kind=Commit | source=git | neighbors=[71bf838 Delete .gradio/flagged directory, analyze-ending.js, main, build-web.ts, 815fef9 final characters, main.js]
- "core_monogatari_aq": "Aq" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .clear(), .constructor(), .getPlugin(), .init(), .interact()]
- "core_monogatari_au": "aU" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .equals(), .formatOffset(), .ianaName(), .isUniversal(), .isValid()]
- "core_monogatari_b2": "B2" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .equals(), .formatOffset(), .isUniversal(), .isValid()]
- "core_monogatari_dv": "DV" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .escapeAttributeValue(), .fill(), .formSelector(), .isNamedControl(), .isValid()]
- "core_monogatari_is_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[IS, .createElement(), .add(), .addClass(), .append(), .attribute()]
- "core_monogatari_kq": "Kq" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, C5(), FA(), .constructor(), .destroy(), .draw()]
- "core_monogatari_l0": "L0()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, C(), G(), _L(), I(), .emit()]
- "core_monogatari_m0": "M0()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, G(), m(), B(), .write(), H1()]
- "core_monogatari_m2_init": "._init()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[H(), M2(), .lazy(), .onError(), .onMount(), .onUnmount()]
- "core_monogatari_nk_html": ".html()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.onReset(), .stop(), NK, .didMount(), .characterDialog(), .displayDialog()]
- "core_monogatari_nk_removeclass": ".removeClass()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.apply(), .apply(), .apply(), NK, .apply(), .willApply()]
- "core_monogatari_ns": "nS" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[monogatari.js, .apply(), .constructor(), .didApply(), .didRevert(), .matchString()]
- "core_monogatari_od": "OD" | kind=code-symbol | source=engine/core/monogatari.js:L745 | neighbors=[monogatari.js, .constructor(), .didMount(), .onPropsUpdate(), .onStateUpdate(), .render()]
- "core_monogatari_pk_send": ".send()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[pK(), .delete(), .get(), .head(), .patch(), .post()]
- "core_monogatari_t0": "t0" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[monogatari.js, .attachDismissHandler(), .escapeHtml(), .generateModalHtml(), .interpolate(), .interpolateProps()]
- "core_monogatari_v8_asset": ".asset()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[.constructor(), .unloadPersistent(), .preloadAsset(), .constructor(), .constructor(), .render()]
- "core_monogatari_xo_displaydialog": ".displayDialog()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[XO(), .apply(), .characterDialog(), .setProps(), .error(), .data()]
- "commit:repo:github.com/henryba16/Web-novel@43f02be60a520f80b8d9082aa5707cea09a838f4": "43f02be fix user feedback" | kind=Commit | source=git | neighbors=[analyze-ending.js, chat-ending.js, summarize-class.js, summarize-student.js, main, 9e4c5b1 fix ending fetch]
- "commit:repo:github.com/henryba16/Web-novel@581f4b99ff15fe4bcf7ee84740452e4ec13eabaf": "581f4b9 final characters" | kind=Commit | source=git | neighbors=[1a71ccf nah, main, build-web.ts, 74ea0ca final characters update, main.js, script.js]
- "commit:repo:github.com/henryba16/Web-novel@815fef90f5979e4b400d6876f1238690152a7523": "815fef9 final characters" | kind=Commit | source=git | neighbors=[74ea0ca final characters update, analyze-ending.js, main, build-web.ts, e377d17 Merge pull request #35 from hen…, script.js]
- "commit:repo:github.com/henryba16/Web-novel@d18b715158098831592297e97ac08c1001806612": "d18b715 Merge pull request #44 from henryba16/henry" | kind=Commit | source=git | neighbors=[main, build-web.ts, e9426de Merge pull request #45 from hen…, cloud-auth.js, cloud-classes.js, cloud-hook.js]
- "commit:repo:github.com/henryba16/Web-novel@d9483a21347a870768518f21b6b22a2626c1a360": "d9483a2 Merge pull request #46 from henryba16/henry" | kind=Commit | source=git | neighbors=[43f02be fix user feedback, analyze-ending.js, chat-ending.js, summarize-class.js, summarize-student.js, main]
- "core_monogatari_as": "AS" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[monogatari.js, .apply(), .constructor(), .didApply(), .didRevert(), .matchString()]
- "core_monogatari_as_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[AS, .createElement(), .addClass(), .append(), .attribute(), .data()]
- "core_monogatari_cv": "cV" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .toMessage(), .invalid(), .constructor(), .invalid()]
- "core_monogatari_hk": "hK()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, C(), FC(), .init(), eK(), i7()]
- "core_monogatari_hq": "Hq" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .clear(), .constructor(), .init(), .interact(), .isEnabled()]
- "core_monogatari_hw_addshape": ".addShape()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[C5(), g9(), h9(), Hw(), .getShapeDrawer(), kE()]
- "core_monogatari_ih": "IH()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .update(), CK(), JQ, .warn(), .setting()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-004.json

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
