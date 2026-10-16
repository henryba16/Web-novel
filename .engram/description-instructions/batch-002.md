# Node Description Batch 3 of 82

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

- "commit:repo:github.com/henryba16/Web-novel@ebab758676aeda36ffe2e6d2966236498ba7b80e": "ebab758 Merge pull request #43 from henryba16/henry" | kind=Commit | source=git | neighbors=[19b1ff8 oh man, 2e82db5 partial fix, summarize-class.js, summarize-student.js, main, build-web.ts]
- "core_monogatari_dq": "Dq" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .apply(), .clear(), .constructor(), .contains(), .didApply()]
- "core_monogatari_fw_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Fw(), AL(), .values(), FC(), hK(), HL()]
- "core_monogatari_i": "I()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, C(), D(), dispatchEvent(), dK, G()]
- "core_monogatari_j6": "J6" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[monogatari.js, .apply(), .bind(), .constructor(), .createAudioPlayer(), .didApply()]
- "core_monogatari_pq": "Pq" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .loadModeOptions(), .constructor(), .create(), .draw(), .equals()]
- "commit:repo:github.com/henryba16/Web-novel@f5055e942ab1d52ad1361f8ff58e3bf5e1686894": "f5055e9 add more function" | kind=Commit | source=git | neighbors=[2e82db5 partial fix, summarize-class.js, summarize-student.js, main, build-web.ts, 0c1d54b fix sign in-sign up]
- "core_monogatari_ch": "CH()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .eras(), .features(), .getMinimumDaysInFirstWeek(), .getStartOfWeek(), .getWeekendWeekdays()]
- "core_monogatari_fw_getradius": ".getRadius()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[B8(), .interact(), .move(), .move(), D9(), E8()]
- "core_monogatari_jl": "JL()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, fE(), JE(), fL(), HG(), inspect()]
- "core_monogatari_m1": "M1()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .init(), e4(), .init(), HC(), HL()]
- "core_monogatari_c": "C()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, A(), hK(), I(), L0(), m()]
- "core_monogatari_cz": "CZ()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, .clear(), .computeId(), .configuration(), .constructor(), .contains()]
- "core_monogatari_m2_has": ".has()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[.initialize(), gf(), .hasLoader(), .setup(), ._applyEffectAttributes(), .particleInit()]
- "core_monogatari_nk_addclass": ".addClass()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.apply(), .apply(), .apply(), .apply(), .apply(), .apply()]
- "core_monogatari_nk_style": ".style()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.apply(), C(), .apply(), .apply(), .apply(), NK]
- "core_monogatari_s": "s()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, C(), G(), JM(), _L(), .write()]
- "js_storage": "storage.js" | kind=code-symbol | source=js/storage.js:L1 | neighbors=[3f70adb Merge pull request #28 from hen…, 432cae5 Merge pull request #30 from hen…, 581f4b9 final characters, 5c1019d Merge pull request #17 from hen…, 5ebdaf3 implement ai, 66814b2 working on AI feedback]
- "probes_prompt_hash_capture": "prompt-hash-capture.mjs" | kind=code-symbol | source=eval/probes/prompt-hash-capture.mjs:L1 | neighbors=[3ed1f4a feat(ai-eval): Phase 01 Step C+…, harness.mjs, buildFlows(), CAPTURE_FIXTURE, installFetchStub(), invokeHandler()]
- "api_chat_ending": "chat-ending.js" | kind=code-symbol | source=api/chat-ending.js:L1 | neighbors=[__ew(), handler(), __tags(), callOpenRouter(), buildChatPrompt(), buildChatPromptGrounded()]
- "core_monogatari_dz": "DZ()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, ._$clear(), ._commitIterable(), ._commitNode(), ._commitTemplateResult(), ._commitText()]
- "core_monogatari_fw": "Fw()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, .constructor(), .destroy(), .draw(), .getFillColor(), .getMass()]
- "core_monogatari_jv": "jV()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .create(), .create(), .apply(), .constructor(), .didApply()]
- "core_monogatari_kk_emit": ".emit()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[$0(), A0(), c0(), F(), FG(), H1()]
- "core_monogatari_l": "_L()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, JL(), A(), .createElement(), .item(), J()]
- "core_monogatari_nk_data": ".data()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.apply(), .apply(), .apply(), e6(), .apply(), .apply()]
- "core_monogatari_sk": "SK()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .addClickHandler(), .addPath(), .animationStatus(), .clearClickHandlers(), .destroy()]
- "core_monogatari_z1": "Z1()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, aU, BH(), F2(), h7(), Jj()]
- "probes_payload_probe": "payload-probe.mjs" | kind=code-symbol | source=eval/probes/payload-probe.mjs:L1 | neighbors=[3ed1f4a feat(ai-eval): Phase 01 Step C+…, harness.mjs, buildFlows(), CAPTURE_FIXTURE, installFetchStub(), invokeHandler()]
- "probes_telemetry_gate": "telemetry-gate.mjs" | kind=code-symbol | source=eval/probes/telemetry-gate.mjs:L1 | neighbors=[3ed1f4a feat(ai-eval): Phase 01 Step C+…, harness.mjs, buildFlows(), installFetchStub(), invokeHandler(), loadHandlers()]
- "core_monogatari_ak": "AK()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, eK(), V(), .load(), .load(), .addEffect()]
- "core_monogatari_lq": "Lq" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .afterRevert(), .apply(), .bind(), .constructor(), .didRevert()]
- "core_monogatari_n": "N()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, A0(), C(), G(), m(), A()]
- "core_monogatari_nk_append": ".append()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.apply(), .apply(), .write(), .constructor(), .apply(), .apply()]
- "core_monogatari_oq": "OQ()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .isEnabled(), .move(), J4(), .clear(), .constructor()]
- "core_monogatari_rk": "rK" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .create(), .dtFormatter(), .formatDateTime(), .formatDateTimeFromString()]
- "core_monogatari_v8_components": ".components()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[CO(), eO(), GO(), PO(), tO(), v8]
- "core_monogatari_vm": "vM()" | kind=code-symbol | source=engine/core/monogatari.js:L590 | neighbors=[monogatari.js, bI(), concat(), join(), jP(), KY()]
- "core_monogatari_xo_displaynvldialog": ".displayNvlDialog()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[XO(), .displayDialog(), .checkUnread(), .ready(), .setProps(), .error()]
- "core_monogatari_yz": "YZ()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .setup(), _9(), C5(), D5(), g9()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-002.json

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
