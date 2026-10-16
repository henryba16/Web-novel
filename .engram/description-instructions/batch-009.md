# Node Description Batch 10 of 82

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

- "core_monogatari_rw_update": ".update()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[rw(), .getRadius(), .addTo(), M1(), QU(), WK()]
- "core_monogatari_so": "sO()" | kind=code-symbol | source=engine/core/monogatari.js:L39 | neighbors=[monogatari.js, concat(), .replaceWith(), .global(), .preference(), W8()]
- "core_monogatari_t0_show": ".show()" | kind=code-symbol | source=engine/core/monogatari.js:L638 | neighbors=[t0, F8(), .uuid(), .interpolate(), .interpolateProps(), unshift()]
- "core_monogatari_tw": "tw()" | kind=code-symbol | source=engine/core/monogatari.js:L21 | neighbors=[monogatari.js, ew(), .constructor(), .handleColor(), .handleRangeColor(), .load()]
- "core_monogatari_tx": "TX" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[monogatari.js, ._commitTemplateResult(), ._clone(), .constructor(), ._$isConnected(), .parentNode()]
- "core_monogatari_ud_didmount": ".didMount()" | kind=code-symbol | source=engine/core/monogatari.js:L999 | neighbors=[uD, .mobile(), .html(), .value(), V(), .preference()]
- "core_monogatari_uh": "UH()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, aw(), C6(), Gj(), .createElement(), I6()]
- "core_monogatari_ul": "UL()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, EL(), F5(), .rotate(), .sub(), WK()]
- "core_monogatari_uw": "Uw()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, bw(), .constructor(), .draw(), .getSidesCount(), .load()]
- "core_monogatari_v8_assets": ".assets()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[.init(), .render(), v8, MF(), .asEngine(), .preload()]
- "core_monogatari_v8_label": ".label()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[FO(), .afterRevert(), N(), O(), v8, .apply()]
- "core_monogatari_v8_mediaplayer": ".mediaPlayer()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[.constructor(), .apply(), .constructor(), .onLoad(), .constructor(), v8]
- "core_monogatari_v8_random": ".random()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[dO(), ED, next(), v8, gH, .integer()]
- "core_monogatari_v8_removemediaplayer": ".removeMediaPlayer()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[.reset(), .revert(), .shutUp(), .apply(), v8, U]
- "core_monogatari_vs_revealnextcharacter": "._revealNextCharacter()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VS, ._animationLoop(), .executeAction(), .initiate(), .setCursor(), .typewrite()]
- "core_monogatari_vs_setcontent": ".setContent()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VS, .createElement(), .global(), .setting(), .stripActionMarkers(), .displayDialog()]
- "core_monogatari_xf": "XF()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[monogatari.js, .audioBufferUncache(), .closest(), .data(), .matches(), .callAsync()]
- "core_monogatari_xo_displaycentereddialog": ".displayCenteredDialog()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[XO(), .apply(), .createElement(), .ready(), .append(), .hide()]
- "core_monogatari_xo_revert": ".revert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[XO(), .setProps(), .html(), .last(), .global(), .history()]
- "core_monogatari_xw_update": ".update()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Xw(), .values(), .getPosition(), .externalInteract(), .particlesInteract(), .add()]
- "core_monogatari_y4": "y4()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, VV(), .values(), eK(), jV(), OC()]
- "js_ai_format": "ai-format.js" | kind=code-symbol | source=js/ai-format.js:L1 | neighbors=[43f02be fix user feedback, d9483a2 Merge pull request #46 from hen…, escapeHtml(), overallLevel(), renderMarkdown(), stripCJK()]
- "js_cloud_client_loadsession": "loadSession()" | kind=code-symbol | source=js/cloud-client.js:L52 | neighbors=[cloud-client.js, accessToken(), getSession(), getUser(), refreshSession(), signOut()]
- "js_cloud_client_refreshsession": "refreshSession()" | kind=code-symbol | source=js/cloud-client.js:L249 | neighbors=[cloud-client.js, authFetch(), CloudError(), loadSession(), normalizeSession(), requireEnabled()]
- "js_cloud_client_requireenabled": "requireEnabled()" | kind=code-symbol | source=js/cloud-client.js:L38 | neighbors=[cloud-client.js, authFetch(), getUser(), refreshSession(), CloudError(), isEnabled()]
- "js_cloud_hook_rendermenuentry": "renderMenuEntry()" | kind=code-symbol | source=js/cloud-hook.js:L229 | neighbors=[cloud-hook.js, init(), el(), enabled(), hasSession(), isShown()]
- "js_cloud_run_snapshotfromstorage": "snapshotFromStorage()" | kind=code-symbol | source=js/cloud-run.js:L132 | neighbors=[cloud-run.js, finishRun(), ensureRun(), getChoices(), getItem(), nowIso()]
- "js_cloud_slots_pullnewer": "pullNewer()" | kind=code-symbol | source=js/cloud-slots.js:L293 | neighbors=[cloud-slots.js, credentials(), loadPushed(), ms(), readLocalSlots(), storePushed()]
- "js_cloud_sync_queuerun": "queueRun()" | kind=code-symbol | source=js/cloud-sync.js:L43 | neighbors=[cloud-sync.js, loadOutbox(), markCurrent(), nowIso(), pendingCount(), storeOutbox()]
- "scripts_check_ai_guardrail_drift_main": "main()" | kind=code-symbol | source=scripts/check-ai-guardrail-drift.mjs:L77 | neighbors=[check-ai-guardrail-drift.mjs, captureAnalyzePromptSha(), fail(), normalize(), parseArgs(), pass()]
- "commit:repo:github.com/henryba16/Web-novel@172eaff9850ae47a6eb25e5fd7815116a0492404": "172eaff Merge pull request #52 from henryba16/henry" | kind=Commit | source=git | neighbors=[0acc958 Merge pull request #51 from hen…, main, a7a0dcd Merge pull request #53 from hen…, cloud-auth.js, cloud-sync.js, a3e0c22 final ver]
- "commit:repo:github.com/henryba16/Web-novel@18987efd7d7a3f63dd014a3e1f51ff1b6ab4651b": "18987ef feat(api): Phase 01 Step B - versioned prompt artifacts, guardrails, dr…" | kind=Commit | source=git | neighbors=[_guardrails.js, _prompts.js, main, 3ed1f4a feat(ai-eval): Phase 01 Step C+…, check-ai-guardrail-drift.mjs, ebcbd82 feat(api): Phase 01 Step A - pr…]
- "commit:repo:github.com/henryba16/Web-novel@2e82db56654a33b0bca08a5f7077f9c45443be8a": "2e82db5 partial fix" | kind=Commit | source=git | neighbors=[main, ebab758 Merge pull request #43 from hen…, f5055e9 add more function, script.js, service-worker.js, 702e3af Update issue templates]
- "commit:repo:github.com/henryba16/Web-novel@41a5e448906651b0c4f95d3d32deedc630209615": "41a5e44 Merge pull request #20 from henryba16/henry" | kind=Commit | source=git | neighbors=[main, 42a5545 Merge pull request #21 from hen…, 7f9b57f Merge branch 'main' into henry, service-worker.js, b4585f2 Merge pull request #19 from hen…, bdf118a Merge branch 'main' into henry]
- "commit:repo:github.com/henryba16/Web-novel@42a55459bcb3cfd8d9578ce780b28b8e780e2c67": "42a5545 Merge pull request #21 from henryba16/henry" | kind=Commit | source=git | neighbors=[41a5e44 Merge pull request #20 from hen…, main, build-web.ts, 07912b9 Merge pull request #22 from hen…, service-worker.js, 6ec5028 fix pwa]
- "commit:repo:github.com/henryba16/Web-novel@48c1733bcd37e6eeb368fce18a7c30a878f0430c": "48c1733 fix bug" | kind=Commit | source=git | neighbors=[43d4c21 fix bug, main, 43f02be fix user feedback, e9426de Merge pull request #45 from hen…, cloud-hook.js, script.js]
- "commit:repo:github.com/henryba16/Web-novel@4ca20003c940ccf49814f3dd66db055e9d890e80": "4ca2000 Merge pull request #9 from henryba16/phuoc" | kind=Commit | source=git | neighbors=[main, 3262ef8 Merge pull request #10 from hen…, 6768136 patch, 74125de Merge pull request #11 from hen…, 86b1d2f finish background, a17ec14 Merge pull request #8 from henr…]
- "commit:repo:github.com/henryba16/Web-novel@4ef82973424c8d84ac3347fdf6ffbd8e8200c1c3": "4ef8297 idk too long to know" | kind=Commit | source=git | neighbors=[main, 49da244 idk too long to know, e8b537e Merge pull request #23 from hen…, main.js, script.js, 83a4c96 work in progress]
- "commit:repo:github.com/henryba16/Web-novel@5ebdaf3ad9e6abc06659c521aadff802308d4161": "5ebdaf3 implement ai" | kind=Commit | source=git | neighbors=[analyze-ending.js, main, 6ec78d1 fix ai, script.js, storage.js, 6ae4c6b done resize code, todo:standari…]
- "commit:repo:github.com/henryba16/Web-novel@66814b2e4d0fd222a629e10cbf935e7fbe580b1a": "66814b2 working on AI feedback" | kind=Commit | source=git | neighbors=[main, 3f70adb Merge pull request #28 from hen…, a2580a6 partial, script.js, storage.js, f78d9e9 fix most of the things, add end…]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-009.json

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
