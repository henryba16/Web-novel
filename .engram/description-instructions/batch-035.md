# Node Description Batch 36 of 82

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
Write every description in Portuguese (pt). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "js_cloud_slots_loadpushed": "loadPushed()" | kind=code-symbol | source=js/cloud-slots.js:L80 | neighbors=[cloud-slots.js, pullNewer(), pushChanged()]
- "js_cloud_slots_storepushed": "storePushed()" | kind=code-symbol | source=js/cloud-slots.js:L90 | neighbors=[cloud-slots.js, pullNewer(), pushChanged()]
- "js_cloud_slots_txpromise": "txPromise()" | kind=code-symbol | source=js/cloud-slots.js:L151 | neighbors=[cloud-slots.js, readLocalSlots(), writeLocalSlot()]
- "js_cloud_sync_markcurrent": "markCurrent()" | kind=code-symbol | source=js/cloud-sync.js:L58 | neighbors=[cloud-sync.js, nowIso(), queueRun()]
- "js_cloud_sync_offlinenow": "offlineNow()" | kind=code-symbol | source=js/cloud-sync.js:L78 | neighbors=[cloud-sync.js, mergeOnLogin(), saveFinished()]
- "js_cloud_sync_torow": "toRow()" | kind=code-symbol | source=js/cloud-sync.js:L97 | neighbors=[cloud-sync.js, nowIso(), uploadOne()]
- "lib_harness_capture_fixture": "CAPTURE_FIXTURE" | kind=code-symbol | source=eval/lib/harness.mjs:L255 | neighbors=[harness.mjs, payload-probe.mjs, prompt-hash-capture.mjs]
- "scripts_check_ai_guardrail_drift_captureanalyzepromptsha": "captureAnalyzePromptSha()" | kind=code-symbol | source=scripts/check-ai-guardrail-drift.mjs:L57 | neighbors=[check-ai-guardrail-drift.mjs, sha256hex(), main()]
- "scripts_check_ai_guardrail_drift_sha256hex": "sha256hex()" | kind=code-symbol | source=scripts/check-ai-guardrail-drift.mjs:L51 | neighbors=[check-ai-guardrail-drift.mjs, captureAnalyzePromptSha(), main()]
- "scripts_check_ai_log_hygiene_findhits": "findHits()" | kind=code-symbol | source=scripts/check-ai-log-hygiene.mjs:L74 | neighbors=[check-ai-log-hygiene.mjs, lineOf(), scanText()]
- "scripts_check_ai_log_hygiene_scantext": "scanText()" | kind=code-symbol | source=scripts/check-ai-log-hygiene.mjs:L100 | neighbors=[check-ai-log-hygiene.mjs, countSites(), findHits()]
- "service_worker_networkfirst": "networkFirst()" | kind=code-symbol | source=service-worker.js:L133 | neighbors=[service-worker.js, offlinePage(), putInCache()]
- "service_worker_offlinepage": "offlinePage()" | kind=code-symbol | source=service-worker.js:L82 | neighbors=[service-worker.js, networkFirst(), staleWhileRevalidate()]
- "service_worker_putincache": "putInCache()" | kind=code-symbol | source=service-worker.js:L115 | neighbors=[service-worker.js, networkFirst(), isCacheable()]
- "api_chat_ending_ew": "__ew()" | kind=code-symbol | source=api/chat-ending.js:L7 | neighbors=[chat-ending.js, __tags()]
- "api_chat_ending_handler": "handler()" | kind=code-symbol | source=api/chat-ending.js:L19 | neighbors=[chat-ending.js, __tags()]
- "api_openrouter_bodyerrorcode": "bodyErrorCode()" | kind=code-symbol | source=api/_openrouter.js:L89 | neighbors=[_openrouter.js, callOpenRouter()]
- "api_openrouter_failureclassforcode": "failureClassForCode()" | kind=code-symbol | source=api/_openrouter.js:L114 | neighbors=[_openrouter.js, callOpenRouter()]
- "api_openrouter_failureclassforstatus": "failureClassForStatus()" | kind=code-symbol | source=api/_openrouter.js:L105 | neighbors=[_openrouter.js, callOpenRouter()]
- "api_openrouter_getopenroutermodels": "getOpenRouterModels()" | kind=code-symbol | source=api/_openrouter.js:L152 | neighbors=[_openrouter.js, modelList()]
- "api_openrouter_hasusablechoice": "hasUsableChoice()" | kind=code-symbol | source=api/_openrouter.js:L96 | neighbors=[_openrouter.js, callOpenRouter()]
- "api_openrouter_isretryablestatus": "isRetryableStatus()" | kind=code-symbol | source=api/_openrouter.js:L81 | neighbors=[_openrouter.js, callOpenRouter()]
- "api_openrouter_newrequestid": "newRequestId()" | kind=code-symbol | source=api/_openrouter.js:L138 | neighbors=[_openrouter.js, callOpenRouter()]
- "api_openrouter_parseretryafter": "parseRetryAfter()" | kind=code-symbol | source=api/_openrouter.js:L125 | neighbors=[_openrouter.js, callOpenRouter()]
- "api_privacy": "_privacy.js" | kind=code-symbol | source=api/_privacy.js:L1 | neighbors=[classPromptLabel(), ebcbd82 feat(api): Phase 01 Step A - pr…]
- "api_prompts_buildanalyzeprompt": "buildAnalyzePrompt()" | kind=code-symbol | source=api/_prompts.js:L25 | neighbors=[analyze-ending.js, _prompts.js]
- "api_prompts_buildchatprompt": "buildChatPrompt()" | kind=code-symbol | source=api/_prompts.js:L48 | neighbors=[chat-ending.js, _prompts.js]
- "api_prompts_buildclassprompt": "buildClassPrompt()" | kind=code-symbol | source=api/_prompts.js:L127 | neighbors=[_prompts.js, summarize-class.js]
- "api_prompts_clamp": "clamp()" | kind=code-symbol | source=api/_prompts.js:L7 | neighbors=[_prompts.js, buildStudentPrompt()]
- "commit:repo:github.com/henryba16/Web-novel@1a89aacee9666d8c07e515b319d872fc589f29b6": "1a89aac background" | kind=Commit | source=git | neighbors=[main, 038a77f Merge pull request #7 from henr…]
- "commit:repo:github.com/henryba16/Web-novel@2679f364a0a74518d9efbaf98ed3654af954a0f8": "2679f36 Merge pull request #6 from henryba16/son" | kind=Commit | source=git | neighbors=[main, 038a77f Merge pull request #7 from henr…]
- "core_monogatari_a5": "A5()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .update()]
- "core_monogatari_ac": "AC()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, B4()]
- "core_monogatari_ad": "aD()" | kind=code-symbol | source=engine/core/monogatari.js:L1073 | neighbors=[monogatari.js, ._getLeafNodes()]
- "core_monogatari_addeventlistener": "addEventListener()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, p()]
- "core_monogatari_ap": "AP()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, concat()]
- "core_monogatari_aq_interact": ".interact()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Aq, .queryCircle()]
- "core_monogatari_aq_isenabled": ".isEnabled()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Aq, f1()]
- "core_monogatari_arrayprototypejoin": "ArrayPrototypeJoin()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, join()]
- "core_monogatari_as_didapply": ".didApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[AS, .history()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-035.json

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
