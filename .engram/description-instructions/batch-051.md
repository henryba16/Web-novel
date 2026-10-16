# Node Description Batch 52 of 82

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

- "js_cloud_export_choicestext": "choicesText()" | kind=code-symbol | source=js/cloud-export.js:L85 | neighbors=[cloud-export.js, rowToRecord()]
- "js_cloud_export_csvescape": "csvEscape()" | kind=code-symbol | source=js/cloud-export.js:L99 | neighbors=[cloud-export.js, buildCsv()]
- "js_cloud_export_displaynameof": "displayNameOf()" | kind=code-symbol | source=js/cloud-export.js:L21 | neighbors=[cloud-export.js, rowToRecord()]
- "js_cloud_export_downloadfilename": "downloadFilename()" | kind=code-symbol | source=js/cloud-export.js:L136 | neighbors=[cloud-export.js, downloadCsv()]
- "js_cloud_export_token": "token()" | kind=code-symbol | source=js/cloud-export.js:L17 | neighbors=[cloud-export.js, fetchFinishedRuns()]
- "js_cloud_run_mintid": "mintId()" | kind=code-symbol | source=js/cloud-run.js:L21 | neighbors=[cloud-run.js, startRun()]
- "js_cloud_run_readstats": "readStats()" | kind=code-symbol | source=js/cloud-run.js:L119 | neighbors=[cloud-run.js, snapshotFromStorage()]
- "js_cloud_slots_ms": "ms()" | kind=code-symbol | source=js/cloud-slots.js:L249 | neighbors=[cloud-slots.js, pullNewer()]
- "js_cloud_slots_profileid": "profileId()" | kind=code-symbol | source=js/cloud-slots.js:L41 | neighbors=[cloud-slots.js, credentials()]
- "js_cloud_slots_sessiontoken": "sessionToken()" | kind=code-symbol | source=js/cloud-slots.js:L29 | neighbors=[cloud-slots.js, credentials()]
- "js_cloud_sync_ensuresession": "ensureSession()" | kind=code-symbol | source=js/cloud-sync.js:L309 | neighbors=[cloud-sync.js, resolveProfile()]
- "js_cloud_sync_fetchcloudrun": "fetchCloudRun()" | kind=code-symbol | source=js/cloud-sync.js:L89 | neighbors=[cloud-sync.js, uploadOne()]
- "js_cloud_sync_profileof": "profileOf()" | kind=code-symbol | source=js/cloud-sync.js:L82 | neighbors=[cloud-sync.js, resolveProfile()]
- "js_cloud_sync_syncnow": "syncNow()" | kind=code-symbol | source=js/cloud-sync.js:L253 | neighbors=[cloud-sync.js, mergeOnLogin()]
- "js_speed_insights": "speed-insights.js" | kind=code-symbol | source=js/speed-insights.js:L1 | neighbors=[238fa9b Merge pull request #14 from hen…, 28417c8 Install Vercel Speed Insights w…]
- "lib_harness_behaviortoresponse": "behaviorToResponse()" | kind=code-symbol | source=eval/lib/harness.mjs:L47 | neighbors=[harness.mjs, makeHttpResponse()]
- "lib_harness_makehttpresponse": "makeHttpResponse()" | kind=code-symbol | source=eval/lib/harness.mjs:L30 | neighbors=[harness.mjs, behaviorToResponse()]
- "lib_harness_maketelemetryconsolecapture": "makeTelemetryConsoleCapture()" | kind=code-symbol | source=eval/lib/harness.mjs:L197 | neighbors=[harness.mjs, telemetry-gate.mjs]
- "lib_harness_max_tokens_by_endpoint": "MAX_TOKENS_BY_ENDPOINT" | kind=code-symbol | source=eval/lib/harness.mjs:L20 | neighbors=[harness.mjs, prompt-hash-capture.mjs]
- "probes_prompt_hash_capture_captureall": "captureAll()" | kind=code-symbol | source=eval/probes/prompt-hash-capture.mjs:L45 | neighbors=[prompt-hash-capture.mjs, sha256hex()]
- "probes_prompt_hash_capture_comparesnapshots": "compareSnapshots()" | kind=code-symbol | source=eval/probes/prompt-hash-capture.mjs:L95 | neighbors=[prompt-hash-capture.mjs, firstDiffWindow()]
- "probes_prompt_hash_capture_firstdiffwindow": "firstDiffWindow()" | kind=code-symbol | source=eval/probes/prompt-hash-capture.mjs:L83 | neighbors=[prompt-hash-capture.mjs, compareSnapshots()]
- "probes_prompt_hash_capture_sha256hex": "sha256hex()" | kind=code-symbol | source=eval/probes/prompt-hash-capture.mjs:L32 | neighbors=[prompt-hash-capture.mjs, captureAll()]
- "scripts_check_ai_guardrail_drift_fail": "fail()" | kind=code-symbol | source=scripts/check-ai-guardrail-drift.mjs:L54 | neighbors=[check-ai-guardrail-drift.mjs, main()]
- "scripts_check_ai_guardrail_drift_normalize": "normalize()" | kind=code-symbol | source=scripts/check-ai-guardrail-drift.mjs:L52 | neighbors=[check-ai-guardrail-drift.mjs, main()]
- "scripts_check_ai_guardrail_drift_parseargs": "parseArgs()" | kind=code-symbol | source=scripts/check-ai-guardrail-drift.mjs:L39 | neighbors=[check-ai-guardrail-drift.mjs, main()]
- "scripts_check_ai_guardrail_drift_pass": "pass()" | kind=code-symbol | source=scripts/check-ai-guardrail-drift.mjs:L55 | neighbors=[check-ai-guardrail-drift.mjs, main()]
- "scripts_check_ai_log_hygiene_countsites": "countSites()" | kind=code-symbol | source=scripts/check-ai-log-hygiene.mjs:L89 | neighbors=[check-ai-log-hygiene.mjs, scanText()]
- "scripts_check_ai_log_hygiene_lineof": "lineOf()" | kind=code-symbol | source=scripts/check-ai-log-hygiene.mjs:L69 | neighbors=[check-ai-log-hygiene.mjs, findHits()]
- "service_worker_iscacheable": "isCacheable()" | kind=code-symbol | source=service-worker.js:L99 | neighbors=[service-worker.js, putInCache()]
- "service_worker_stalewhilerevalidate": "staleWhileRevalidate()" | kind=code-symbol | source=service-worker.js:L156 | neighbors=[service-worker.js, offlinePage()]
- "api_analyze_ending_derivetagsfromrequest": "deriveTagsFromRequest()" | kind=code-symbol | source=api/analyze-ending.js:L6 | neighbors=[analyze-ending.js]
- "api_analyze_ending_handler": "handler()" | kind=code-symbol | source=api/analyze-ending.js:L18 | neighbors=[analyze-ending.js]
- "api_guardrails": "_guardrails.js" | kind=code-symbol | source=api/_guardrails.js:L1 | neighbors=[18987ef feat(api): Phase 01 Step B - ve…]
- "api_openrouter_default_fallbacks": "DEFAULT_FALLBACKS" | kind=code-symbol | source=api/_openrouter.js:L39 | neighbors=[_openrouter.js]
- "api_openrouter_openrouter_models": "OPENROUTER_MODELS" | kind=code-symbol | source=api/_openrouter.js:L150 | neighbors=[_openrouter.js]
- "api_openrouter_retryable_status": "RETRYABLE_STATUS" | kind=code-symbol | source=api/_openrouter.js:L79 | neighbors=[_openrouter.js]
- "api_prompts_change_notes": "CHANGE_NOTES" | kind=code-symbol | source=api/_prompts.js:L18 | neighbors=[_prompts.js]
- "api_prompts_change_notes_v2": "CHANGE_NOTES_V2" | kind=code-symbol | source=api/_prompts.js:L169 | neighbors=[_prompts.js]
- "api_summarize_class_handler": "handler()" | kind=code-symbol | source=api/summarize-class.js:L6 | neighbors=[summarize-class.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-051.json

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
