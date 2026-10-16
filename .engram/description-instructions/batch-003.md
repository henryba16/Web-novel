# Node Description Batch 4 of 82

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

- "js_cloud_client_authfetch": "authFetch()" | kind=code-symbol | source=js/cloud-client.js:L161 | neighbors=[cloud-client.js, authHeaders(), baseUrl(), CloudError(), fetchWithTimeout(), isOfflineError()]
- "js_cloud_run": "cloud-run.js" | kind=code-symbol | source=js/cloud-run.js:L1 | neighbors=[ebab758 Merge pull request #43 from hen…, f5055e9 add more function, clearRun(), currentRunId(), ensureRun(), finishRun()]
- "lib_harness": "harness.mjs" | kind=code-symbol | source=eval/lib/harness.mjs:L1 | neighbors=[3ed1f4a feat(ai-eval): Phase 01 Step C+…, run-eval.mjs, behaviorToResponse(), buildFlows(), CAPTURE_FIXTURE, installFetchStub()]
- "api_summarize_class": "summarize-class.js" | kind=code-symbol | source=api/summarize-class.js:L1 | neighbors=[callOpenRouter(), classPromptLabel(), buildClassPrompt(), handler(), 0acc958 Merge pull request #51 from hen…, 43f02be fix user feedback]
- "api_summarize_student": "summarize-student.js" | kind=code-symbol | source=api/summarize-student.js:L1 | neighbors=[callOpenRouter(), classPromptLabel(), buildStudentPrompt(), handler(), 0acc958 Merge pull request #51 from hen…, 43f02be fix user feedback]
- "core_monogatari_f1": "f1()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .isEnabled(), .interact(), .isEnabled(), eK(), .interact()]
- "core_monogatari_hw_addinteractor": ".addInteractor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[a9(), C9(), D5(), G5(), Hw(), i9()]
- "core_monogatari_lz": "LZ" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .equals(), .formatOffset(), .init(), .instance()]
- "core_monogatari_mk": "mK" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .addAllToCache(), .addToCache(), .audio(), .audios(), .file()]
- "core_monogatari_nq": "NQ()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, AZ(), CE(), GE(), .clear(), .constructor()]
- "core_monogatari_ns_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[nS, .createElement(), .setProps(), .add(), .addClass(), .append()]
- "core_monogatari_p1_callasync": ".callAsync()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.revert(), .willApply(), .willRevert(), .apply(), G(), .revert()]
- "core_monogatari_v8_preference": ".preference()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[.constructor(), .init(), KO(), Qf(), sO(), .desktop()]
- "js_cloud_export": "cloud-export.js" | kind=code-symbol | source=js/cloud-export.js:L1 | neighbors=[ebab758 Merge pull request #43 from hen…, f5055e9 add more function, RFC-4180, buildCsv(), choicesText(), computeAggregates()]
- "scripts_check_ai_log_hygiene": "check-ai-log-hygiene.mjs" | kind=code-symbol | source=scripts/check-ai-log-hygiene.mjs:L1 | neighbors=[ebcbd82 feat(api): Phase 01 Step A - pr…, countSites(), DEFAULT_SCOPE, files, findHits(), fixtureProblems]
- "serve": "serve.ts" | kind=code-symbol | source=serve.ts:L1 | neighbors=[0729ecc ok, 581f4b9 final characters, 5c1019d Merge pull request #17 from hen…, 65ba988 so many bug, 815fef9 final characters, 9ba3350 Merge pull request #25 from hen…]
- "api_openrouter_callopenrouter": "callOpenRouter()" | kind=code-symbol | source=api/_openrouter.js:L157 | neighbors=[analyze-ending.js, chat-ending.js, _openrouter.js, bodyErrorCode(), failureClassForCode(), failureClassForStatus()]
- "commit:repo:github.com/henryba16/Web-novel@0acc958043f0d3e96e84a531a7d81af7f5319335": "0acc958 Merge pull request #51 from henryba16/henry" | kind=Commit | source=git | neighbors=[analyze-ending.js, chat-ending.js, summarize-class.js, summarize-student.js, main, 172eaff Merge pull request #52 from hen…]
- "commit:repo:github.com/henryba16/Web-novel@700e830f35bd5dd915fc578c5e003eee8a432f2e": "700e830 final ver" | kind=Commit | source=git | neighbors=[analyze-ending.js, chat-ending.js, summarize-class.js, summarize-student.js, main, 0acc958 Merge pull request #51 from hen…]
- "core_monogatari_ao": "AO()" | kind=code-symbol | source=engine/core/monogatari.js:L22 | neighbors=[monogatari.js, ew(), Hj(), k(), .removeAttribute(), O()]
- "core_monogatari_d_write": ".write()" | kind=code-symbol | source=engine/core/monogatari.js:L755 | neighbors=[D(), .append(), .replaceVariables(), F(), J(), k()]
- "core_monogatari_fw_getposition": ".getPosition()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[B4(), .interact(), E8(), Fw(), .reset(), nC()]
- "core_monogatari_hi": "HI" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[monogatari.js, .apply(), .constructor(), .didApply(), .didRevert(), .isAudioCategory()]
- "core_monogatari_sz": "SZ()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, JL(), fH(), join(), OR(), ._commitValue()]
- "core_monogatari_v8_preload": ".preload()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .values(), .blocks(), .getLoader(), .getLoaderType(), .warn()]
- "core_monogatari_y": "Y()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, final(), G(), _L(), U, CO()]
- "eval_run_eval": "run-eval.mjs" | kind=code-symbol | source=eval/run-eval.mjs:L1 | neighbors=[3ed1f4a feat(ai-eval): Phase 01 Step C+…, allFixtures, args, candidates, FIXTURES_DIR, loadFixtures()]
- "js_cloud_classes_token": "token()" | kind=code-symbol | source=js/cloud-classes.js:L20 | neighbors=[cloud-classes.js, addEmailInvite(), claimFloatingRuns(), claimPendingInvites(), createClass(), getClassByCode()]
- "scripts_check_ai_guardrail_drift": "check-ai-guardrail-drift.mjs" | kind=code-symbol | source=scripts/check-ai-guardrail-drift.mjs:L1 | neighbors=[18987ef feat(api): Phase 01 Step B - ve…, ALL_HANDLERS, captureAnalyzePromptSha(), fail(), main(), normalize()]
- "commit:repo:github.com/henryba16/Web-novel@e9426de0835055b679b383f8be1112d94509e93b": "e9426de Merge pull request #45 from henryba16/henry" | kind=Commit | source=git | neighbors=[48c1733 fix bug, d18b715 Merge pull request #44 from hen…, analyze-ending.js, main, build-web.ts, d9483a2 Merge pull request #46 from hen…]
- "core_monogatari_aw": "aw()" | kind=code-symbol | source=engine/core/monogatari.js:L21 | neighbors=[monogatari.js, aH(), .constructor(), .init(), .isEnabled(), .load()]
- "core_monogatari_d5": "D5()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, $5(), F5(), H5(), .addInteractor(), .checkVersion()]
- "core_monogatari_ds": "DS" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[monogatari.js, .apply(), .constructor(), .didApply(), .didRevert(), .matchString()]
- "core_monogatari_eh": "eH()" | kind=code-symbol | source=engine/core/monogatari.js:L29 | neighbors=[monogatari.js, A(), Bj(), C6(), join(), .time()]
- "core_monogatari_fo": "FO()" | kind=code-symbol | source=engine/core/monogatari.js:L715 | neighbors=[monogatari.js, .checkUnread(), .constructor(), .onStateUpdate(), .render(), .show()]
- "core_monogatari_fq": "fQ()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .getString(), .load(), .nextByte(), .nextTwoBytes()]
- "core_monogatari_h8": "h8()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, .afterRevert(), .apply(), .constructor(), .didRevert(), .matchObject()]
- "core_monogatari_hi_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[HI, .isAudioCategory(), .unloadAsset(), .unloadBlock(), .unloadCategoryAssets(), .unloadCharacter()]
- "core_monogatari_is": "IS" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[monogatari.js, .apply(), .constructor(), .didApply(), .didRevert(), .matchString()]
- "core_monogatari_k_fromdatetimes": ".fromDateTimes()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k(), .after(), .before(), .fromISO(), .intersection(), .mapEndpoints()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-003.json

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
