# Node Description Batch 25 of 82

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

- "js_cloud_classes_claimfloatingruns": "claimFloatingRuns()" | kind=code-symbol | source=js/cloud-classes.js:L247 | neighbors=[cloud-classes.js, token(), claimPendingInvites(), joinByCode()]
- "js_cloud_classes_regeneratecode": "regenerateCode()" | kind=code-symbol | source=js/cloud-classes.js:L217 | neighbors=[cloud-classes.js, isUniqueViolation(), mintCode(), token()]
- "js_cloud_client_authheaders": "authHeaders()" | kind=code-symbol | source=js/cloud-client.js:L84 | neighbors=[cloud-client.js, authFetch(), pubKey(), rest()]
- "js_cloud_client_config": "config()" | kind=code-symbol | source=js/cloud-client.js:L29 | neighbors=[cloud-client.js, baseUrl(), isEnabled(), pubKey()]
- "js_cloud_client_fetchwithtimeout": "fetchWithTimeout()" | kind=code-symbol | source=js/cloud-client.js:L97 | neighbors=[cloud-client.js, authFetch(), CloudError(), rest()]
- "js_cloud_client_normalizesession": "normalizeSession()" | kind=code-symbol | source=js/cloud-client.js:L223 | neighbors=[cloud-client.js, refreshSession(), signIn(), signUp()]
- "js_cloud_client_readerror": "readError()" | kind=code-symbol | source=js/cloud-client.js:L124 | neighbors=[cloud-client.js, authFetch(), CloudError(), rest()]
- "js_cloud_client_signin": "signIn()" | kind=code-symbol | source=js/cloud-client.js:L201 | neighbors=[cloud-client.js, authFetch(), normalizeSession(), saveSession()]
- "js_cloud_client_signout": "signOut()" | kind=code-symbol | source=js/cloud-client.js:L211 | neighbors=[cloud-client.js, authFetch(), clearSession(), loadSession()]
- "js_cloud_client_signup": "signUp()" | kind=code-symbol | source=js/cloud-client.js:L186 | neighbors=[cloud-client.js, authFetch(), normalizeSession(), saveSession()]
- "js_cloud_client_updatepassword": "updatePassword()" | kind=code-symbol | source=js/cloud-client.js:L274 | neighbors=[cloud-client.js, authFetch(), CloudError(), loadSession()]
- "js_cloud_dashboard_postsummary": "postSummary()" | kind=code-symbol | source=js/cloud-dashboard.js:L328 | neighbors=[cloud-dashboard.js, token(), summarizeClass(), summarizeStudent()]
- "js_cloud_dashboard_progressfor": "progressFor()" | kind=code-symbol | source=js/cloud-dashboard.js:L101 | neighbors=[cloud-dashboard.js, finishedRuns(), latestRun(), runsForStudent()]
- "js_cloud_dashboard_token": "token()" | kind=code-symbol | source=js/cloud-dashboard.js:L23 | neighbors=[cloud-dashboard.js, loadClassRuns(), loadStudentRuns(), postSummary()]
- "js_cloud_export_buildcsv": "buildCsv()" | kind=code-symbol | source=js/cloud-export.js:L124 | neighbors=[cloud-export.js, csvEscape(), rowToRecord(), downloadCsv()]
- "js_cloud_export_downloadcsv": "downloadCsv()" | kind=code-symbol | source=js/cloud-export.js:L143 | neighbors=[cloud-export.js, buildCsv(), downloadFilename(), fetchFinishedRuns()]
- "js_cloud_export_rowtorecord": "rowToRecord()" | kind=code-symbol | source=js/cloud-export.js:L107 | neighbors=[cloud-export.js, buildCsv(), choicesText(), displayNameOf()]
- "js_cloud_hook_dosync": "doSync()" | kind=code-symbol | source=js/cloud-hook.js:L121 | neighbors=[cloud-hook.js, pendingCount(), remountSlotContainers(), renderSaveButtons()]
- "js_cloud_hook_isshown": "isShown()" | kind=code-symbol | source=js/cloud-hook.js:L109 | neighbors=[cloud-hook.js, remountSlotContainers(), renderMenuEntry(), renderSaveButtons()]
- "js_cloud_hook_remountslotcontainers": "remountSlotContainers()" | kind=code-symbol | source=js/cloud-hook.js:L156 | neighbors=[cloud-hook.js, doSync(), isShown(), saveScreens()]
- "js_cloud_run_getchoices": "getChoices()" | kind=code-symbol | source=js/cloud-run.js:L90 | neighbors=[cloud-run.js, getItem(), logChoice(), snapshotFromStorage()]
- "js_cloud_slots_opendb": "openDb()" | kind=code-symbol | source=js/cloud-slots.js:L98 | neighbors=[cloud-slots.js, discoverDb(), readLocalSlots(), writeLocalSlot()]
- "js_cloud_slots_writelocalslot": "writeLocalSlot()" | kind=code-symbol | source=js/cloud-slots.js:L209 | neighbors=[cloud-slots.js, pullNewer(), openDb(), txPromise()]
- "js_cloud_sync_nowiso": "nowIso()" | kind=code-symbol | source=js/cloud-sync.js:L17 | neighbors=[cloud-sync.js, markCurrent(), queueRun(), toRow()]
- "js_cloud_sync_storeoutbox": "storeOutbox()" | kind=code-symbol | source=js/cloud-sync.js:L31 | neighbors=[cloud-sync.js, mergeOnLogin(), queueRun(), saveFinished()]
- "js_main": "main.js" | kind=code-symbol | source=js/main.js:L1 | neighbors=[4ef8297 idk too long to know, 581f4b9 final characters, b892279 Merge pull request #34 from hen…, e8b537e Merge pull request #23 from hen…]
- "lib_harness_buildflows": "buildFlows()" | kind=code-symbol | source=eval/lib/harness.mjs:L330 | neighbors=[harness.mjs, payload-probe.mjs, prompt-hash-capture.mjs, telemetry-gate.mjs]
- "lib_harness_installfetchstub": "installFetchStub()" | kind=code-symbol | source=eval/lib/harness.mjs:L94 | neighbors=[harness.mjs, payload-probe.mjs, prompt-hash-capture.mjs, telemetry-gate.mjs]
- "lib_harness_invokehandler": "invokeHandler()" | kind=code-symbol | source=eval/lib/harness.mjs:L165 | neighbors=[harness.mjs, payload-probe.mjs, prompt-hash-capture.mjs, telemetry-gate.mjs]
- "lib_harness_loadhandlers": "loadHandlers()" | kind=code-symbol | source=eval/lib/harness.mjs:L374 | neighbors=[harness.mjs, payload-probe.mjs, prompt-hash-capture.mjs, telemetry-gate.mjs]
- "lib_harness_withenv": "withEnv()" | kind=code-symbol | source=eval/lib/harness.mjs:L227 | neighbors=[harness.mjs, payload-probe.mjs, prompt-hash-capture.mjs, telemetry-gate.mjs]
- "api_chat_ending_tags": "__tags()" | kind=code-symbol | source=api/chat-ending.js:L8 | neighbors=[chat-ending.js, handler(), __ew()]
- "api_openrouter_modellist": "modelList()" | kind=code-symbol | source=api/_openrouter.js:L52 | neighbors=[_openrouter.js, callOpenRouter(), getOpenRouterModels()]
- "api_privacy_classpromptlabel": "classPromptLabel()" | kind=code-symbol | source=api/_privacy.js:L24 | neighbors=[_privacy.js, summarize-class.js, summarize-student.js]
- "api_prompts_buildanalyzepromptgrounded": "buildAnalyzePromptGrounded()" | kind=code-symbol | source=api/_prompts.js:L174 | neighbors=[analyze-ending.js, _prompts.js, _formatSources()]
- "api_prompts_buildchatpromptgrounded": "buildChatPromptGrounded()" | kind=code-symbol | source=api/_prompts.js:L190 | neighbors=[chat-ending.js, _prompts.js, _formatSources()]
- "api_prompts_buildstudentprompt": "buildStudentPrompt()" | kind=code-symbol | source=api/_prompts.js:L89 | neighbors=[_prompts.js, clamp(), summarize-student.js]
- "api_prompts_formatsources": "_formatSources()" | kind=code-symbol | source=api/_prompts.js:L205 | neighbors=[_prompts.js, buildAnalyzePromptGrounded(), buildChatPromptGrounded()]
- "commit:repo:github.com/henryba16/Web-novel@02d3b7ff8ba636e9ab4d7faf2ba6b9b50c6d863a": "02d3b7f Delete BG-11.png" | kind=Commit | source=git | neighbors=[main, 2739562 Delete classroom-02.png, d8d1acb Delete BG-01D.png]
- "commit:repo:github.com/henryba16/Web-novel@0c1d54b02a25e2402cc2f63bd8e290e689b076ac": "0c1d54b fix sign in-sign up" | kind=Commit | source=git | neighbors=[main, 8d305e5 fix more, f5055e9 add more function]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-024.json

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
