# Node Description Batch 2 of 82

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

- "core_monogatari_j1": "J1()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, .clone(), .constructor(), .create(), .dtFormatter(), .equals()]
- "core_monogatari_a": "A()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, $0(), aF(), concat(), eH(), final()]
- "core_monogatari_xo": "XO()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[monogatari.js, .playAmbient(), .asset(), .assets(), .preference(), .setting()]
- "core_monogatari_gh": "gH" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .auto(), .bool(), .constructor(), .date(), .dice()]
- "core_monogatari_mh": "MH" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .assert(), .clear(), .count(), .countReset(), .currentLevel()]
- "core_monogatari_tq": "TQ()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, A(), Bj(), C6(), eH(), Ej()]
- "js_cloud_hook": "cloud-hook.js" | kind=code-symbol | source=js/cloud-hook.js:L1 | neighbors=[0acc958 Merge pull request #51 from hen…, 0f593dc fix bug, 2a8dcd7 fix bug, 43d4c21 fix bug, 48c1733 fix bug, 700e830 final ver]
- "core_monogatari_f": "F()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, B(), dispatchEvent(), A(), concat(), D()]
- "core_monogatari_g6": "G6" | kind=code-symbol | source=engine/core/monogatari.js:L716 | neighbors=[monogatari.js, F(), .addTransformation(), .applyGetTransformations(), .applySetTransformations(), .clear()]
- "core_monogatari_v8_prepareaction": ".prepareAction()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[.onLoad(), .onLoad(), .revert(), .willApply(), .willRevert(), .onLoad()]
- "core_monogatari_xw": "Xw()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, Fw(), .addManualParticles(), .addParticle(), .clear(), .constructor()]
- "js_cloud_sync": "cloud-sync.js" | kind=code-symbol | source=js/cloud-sync.js:L1 | neighbors=[0acc958 Merge pull request #51 from hen…, 172eaff Merge pull request #52 from hen…, 1e1641a fix bug, 700e830 final ver, a3e0c22 final ver, e9426de Merge pull request #45 from hen…]
- "core_monogatari_i1": "i1()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, I0(), .canHover(), .coarsePointer(), .cordova(), .darkMode()]
- "core_monogatari_j": "J()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, A(), D(), dispatchEvent(), _E(), F()]
- "core_monogatari_zd": "zD" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[monogatari.js, .all(), .bind(), .configuration(), .connectedCallback(), .constructor()]
- "api_analyze_ending": "analyze-ending.js" | kind=code-symbol | source=api/analyze-ending.js:L1 | neighbors=[deriveTagsFromRequest(), handler(), callOpenRouter(), buildAnalyzePrompt(), buildAnalyzePromptGrounded(), 0acc958 Merge pull request #51 from hen…]
- "core_monogatari_kk_setprops": ".setProps()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[.apply(), D(), .apply(), KK, ._setPropAttributes(), .updateCallback()]
- "core_monogatari_lk": "lK" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .clear(), .computeEndpoint(), .configuration(), .constructor(), .contains()]
- "core_monogatari_y0": "Y0()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, C(), F(), _L(), M0(), p()]
- "core_monogatari_z": "$Z()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, JL(), concat(), .write(), dI(), .fill()]
- "js_cloud_dashboard": "cloud-dashboard.js" | kind=code-symbol | source=js/cloud-dashboard.js:L1 | neighbors=[ebab758 Merge pull request #43 from hen…, f5055e9 add more function, choiceKey(), computeAggregates(), computeFlags(), displayNameFor()]
- "core_monogatari_bv": "bV()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, Bj(), .apply(), .bind(), .configuration(), .constructor()]
- "core_monogatari_pk_delete": ".delete()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[df(), dispatchEvent(), FF(), .removeAllEventListeners(), .removeEventListener(), .unloadAsset()]
- "core_monogatari_q": "$Q()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, EE(), A(), D(), J(), k()]
- "core_monogatari_vv": "VV()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .init(), JQ, .initBackground(), t9(), .values()]
- "js_cloud_classes": "cloud-classes.js" | kind=code-symbol | source=js/cloud-classes.js:L1 | neighbors=[1e1641a fix bug, 2a8dcd7 fix bug, d18b715 Merge pull request #44 from hen…, e9426de Merge pull request #45 from hen…, ebab758 Merge pull request #43 from hen…, f5055e9 add more function]
- "core_monogatari_g": "G()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, B(), C(), .constructor(), I(), L0()]
- "core_monogatari_m": "m()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, C(), G(), H(), A(), D()]
- "core_monogatari_py": "pY" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .clear(), .constructor(), .destroy(), .draw()]
- "core_monogatari_r": "R()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, C(), _L(), M0(), p(), A()]
- "core_monogatari_us_match": ".match()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[.apply(), bw(), .apply(), .apply(), Hf(), I()]
- "api_openrouter": "_openrouter.js" | kind=code-symbol | source=api/_openrouter.js:L1 | neighbors=[bodyErrorCode(), callOpenRouter(), DEFAULT_FALLBACKS, failureClassForCode(), failureClassForStatus(), getOpenRouterModels()]
- "core_monogatari_ju": "JU" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .clear(), .configuration(), .constructor(), .contains(), .create()]
- "core_monogatari_pk": "pK()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, _2(), iK, .arrayBuffer(), .blob(), .createTimeoutController()]
- "core_monogatari_q1": "q1()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .load(), .load(), .load(), .load(), .load()]
- "core_monogatari_t": "T()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, dispatchEvent(), _E(), G(), I(), k()]
- "core_monogatari_x": "X()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, D(), F(), k(), m(), NK]
- "js_cloud_auth": "cloud-auth.js" | kind=code-symbol | source=js/cloud-auth.js:L1 | neighbors=[172eaff Merge pull request #52 from hen…, 2a8dcd7 fix bug, a3e0c22 final ver, d18b715 Merge pull request #44 from hen…, ebab758 Merge pull request #43 from hen…, f5055e9 add more function]
- "js_cloud_slots": "cloud-slots.js" | kind=code-symbol | source=js/cloud-slots.js:L1 | neighbors=[0acc958 Merge pull request #51 from hen…, 1e1641a fix bug, 700e830 final ver, 7ddb35a final ver, a7a0dcd Merge pull request #53 from hen…, e9426de Merge pull request #45 from hen…]
- "build_web": "build-web.ts" | kind=code-symbol | source=build-web.ts:L1 | neighbors=[cleanedHtml, configPath, html, include, 2a8dcd7 fix bug, 31c7947 fix bug]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-001.json

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
