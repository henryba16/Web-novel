# Node Description Batch 8 of 82

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

- "core_monogatari_hw_addparticleupdater": ".addParticleUpdater()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[$5(), _9(), Hw(), M5(), p9(), Q5()]
- "core_monogatari_i8": "i8" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .autoSeed(), .constructor(), .discard(), .getUseCount(), .next()]
- "core_monogatari_ik_preloadcharactersprite": ".preloadCharacterSprite()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[iK, .apply(), .preloadBlock(), .getLoader(), .error(), .warn()]
- "core_monogatari_iq": "Iq" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .clear(), .constructor(), .init(), .interact(), .isEnabled()]
- "core_monogatari_jo_applyeffectattributes": "._applyEffectAttributes()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[JO, ._extractEffectNames(), .add(), .has(), .removeAttribute(), .delete()]
- "core_monogatari_jx": "JX" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[monogatari.js, .constructor(), .dom(), .query(), .queryAll(), ._render()]
- "core_monogatari_ki": "kI()" | kind=code-symbol | source=engine/core/monogatari.js:L39 | neighbors=[monogatari.js, b6(), .createElement(), .apply(), .didApply(), .didRevert()]
- "core_monogatari_kz": "KZ" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .getCenter(), .getSidesCount(), .getSidesData(), .fromJSDate()]
- "core_monogatari_ld_didmount": ".didMount()" | kind=code-symbol | source=engine/core/monogatari.js:L1047 | neighbors=[lD, .attribute(), .closest(), preventDefault(), stopImmediatePropagation(), stopPropagation()]
- "core_monogatari_ls": "LS" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[monogatari.js, .apply(), .didApply(), .didRevert(), .matchString(), .revert()]
- "core_monogatari_mq": "mQ()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, IM(), KY(), .constructor(), .load(), nI()]
- "core_monogatari_ms": "MS" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[monogatari.js, .apply(), .constructor(), .didApply(), .didRevert(), .matchObject()]
- "core_monogatari_pk_json": ".json()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[J(), .get(), .getAll(), .keys(), pK(), vQ]
- "core_monogatari_q6": "Q6()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .fromObject(), .set(), M2(), O2(), g7()]
- "core_monogatari_r8": "r8" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .autoSeed(), .constructor(), .discard(), .getUseCount(), .next()]
- "core_monogatari_rd": "RD" | kind=code-symbol | source=engine/core/monogatari.js:L745 | neighbors=[monogatari.js, .constructor(), .didMount(), .onReset(), .render(), .shouldProceed()]
- "core_monogatari_rq": "rQ()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, CM(), KY(), dT(), M1(), .constructor()]
- "core_monogatari_ru": "rU()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .getPossibleOffsets(), .minus(), .plus(), .reconfigure(), .set()]
- "core_monogatari_rv": "rV()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, A0(), kV(), .constructor(), q1(), v4()]
- "core_monogatari_sd": "SD" | kind=code-symbol | source=engine/core/monogatari.js:L767 | neighbors=[monogatari.js, .bind(), .constructor(), .init(), .onStateUpdate(), .render()]
- "core_monogatari_stoppropagation": "stopPropagation()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, _E(), .didMount(), .bind(), .bind(), H()]
- "core_monogatari_sw": "sw()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, .constructor(), .init(), .isEnabled(), .load(), .reset()]
- "core_monogatari_t6": "t6()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, concat(), HP(), join(), QP(), rQ()]
- "core_monogatari_v8_characters": ".characters()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[.constructor(), .willApply(), .constructor(), .willApply(), .willApply(), v8]
- "core_monogatari_xo_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[XO(), .error(), .component(), .setting(), .characterDialog(), .displayCenteredDialog()]
- "core_monogatari_xo_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[XO(), .setProps(), .attribute(), .data(), .hide(), .html()]
- "core_monogatari_yd": "YD" | kind=code-symbol | source=engine/core/monogatari.js:L741 | neighbors=[monogatari.js, .bind(), .constructor(), .didMount(), .onPropsUpdate(), .onStateUpdate()]
- "core_monogatari_yv": "YV()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, B4(), e9(), eC(), nC(), .clear()]
- "core_monogatari_zk": "zK()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, .capitalize(), .friendly(), .isBlank(), .prefix(), .selection()]
- "js_cloud_client_clouderror": "CloudError()" | kind=code-symbol | source=js/cloud-client.js:L20 | neighbors=[cloud-client.js, authFetch(), fetchWithTimeout(), readError(), refreshSession(), requireEnabled()]
- "js_cloud_client_rest": "rest()" | kind=code-symbol | source=js/cloud-client.js:L288 | neighbors=[cloud-client.js, authHeaders(), baseUrl(), CloudError(), fetchWithTimeout(), isOfflineError()]
- "js_cloud_sync_mergeonlogin": "mergeOnLogin()" | kind=code-symbol | source=js/cloud-sync.js:L180 | neighbors=[cloud-sync.js, loadOutbox(), offlineNow(), pendingCount(), resolveProfile(), storeOutbox()]
- "js_cloud_sync_savefinished": "saveFinished()" | kind=code-symbol | source=js/cloud-sync.js:L261 | neighbors=[cloud-sync.js, loadOutbox(), offlineNow(), pendingCount(), queueRun(), resolveProfile()]
- "js_options": "options.js" | kind=code-symbol | source=js/options.js:L1 | neighbors=[18b5bde fix ux, 6e0ba7a Merge pull request #37 from hen…, 8620549 Merge pull request #47 from hen…, 9150bc7 Merge pull request #36 from hen…, 9e4c5b1 fix ending fetch, ebab758 Merge pull request #43 from hen…]
- "commit:repo:github.com/henryba16/Web-novel@18b5bde0aea1a43a720f885b66879cc2045ef062": "18b5bde fix ux" | kind=Commit | source=git | neighbors=[main, 179c5fa change readme, 6e0ba7a Merge pull request #37 from hen…, options.js, script.js, service-worker.js]
- "commit:repo:github.com/henryba16/Web-novel@33e6dee2cdc201d29b4f966f6d1d51a964df81e2": "33e6dee Merge pull request #49 from henryba16/henry" | kind=Commit | source=git | neighbors=[_openrouter.js, main, 68318a1 Merge pull request #50 from hen…, a834a48 Merge branch 'main' into henry, service-worker.js, 7816025 add failback model]
- "commit:repo:github.com/henryba16/Web-novel@682832bb1e51a4e0f10a5e9090e90c784a7554c5": "682832b Merge pull request #33 from henryba16/henry" | kind=Commit | source=git | neighbors=[analyze-ending.js, main, 71bf838 Delete .gradio/flagged directory, script.js, storage.js, 6ec78d1 fix ai]
- "commit:repo:github.com/henryba16/Web-novel@6e0ba7a0fec60d1d5c33ffd4f27d8d1bf00ddf69": "6e0ba7a Merge pull request #37 from henryba16/henry" | kind=Commit | source=git | neighbors=[18b5bde fix ux, main, 9bb7d2c Merge pull request #38 from hen…, options.js, script.js, service-worker.js]
- "commit:repo:github.com/henryba16/Web-novel@a17ec14a74060ea2e9e861fcd3bd6e2c56e8cfb1": "a17ec14 Merge pull request #8 from henryba16/henry" | kind=Commit | source=git | neighbors=[038a77f Merge pull request #7 from henr…, main, 4ca2000 Merge pull request #9 from henr…, 86b1d2f finish background, script.js, storage.js]
- "core_monogatari_b4": "B4()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, AC(), .getPosition(), MC(), RC(), YV()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-007.json

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
