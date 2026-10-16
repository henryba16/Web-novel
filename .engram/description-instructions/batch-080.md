# Node Description Batch 81 of 82

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

- "js_script_particlepointerfix": "particlePointerFix" | kind=code-symbol | source=js/script.js:L3 | neighbors=[script.js]
- "js_script_pushrun": "pushRun()" | kind=code-symbol | source=js/script.js:L1554 | neighbors=[script.js]
- "js_script_sessionon": "sessionOn()" | kind=code-symbol | source=js/script.js:L1538 | neighbors=[script.js]
- "probes_payload_probe_args": "args" | kind=code-symbol | source=eval/probes/payload-probe.mjs:L106 | neighbors=[payload-probe.mjs]
- "probes_payload_probe_banned": "banned" | kind=code-symbol | source=eval/probes/payload-probe.mjs:L35 | neighbors=[payload-probe.mjs]
- "probes_payload_probe_evidence": "evidence" | kind=code-symbol | source=eval/probes/payload-probe.mjs:L50 | neighbors=[payload-probe.mjs]
- "probes_payload_probe_expectedpresence": "expectedPresence" | kind=code-symbol | source=eval/probes/payload-probe.mjs:L41 | neighbors=[payload-probe.mjs]
- "probes_payload_probe_flows": "flows" | kind=code-symbol | source=eval/probes/payload-probe.mjs:L49 | neighbors=[payload-probe.mjs]
- "probes_payload_probe_parseargs": "parseArgs()" | kind=code-symbol | source=eval/probes/payload-probe.mjs:L28 | neighbors=[payload-probe.mjs]
- "probes_payload_probe_repo_root": "REPO_ROOT" | kind=code-symbol | source=eval/probes/payload-probe.mjs:L26 | neighbors=[payload-probe.mjs]
- "probes_payload_probe_script_dir": "SCRIPT_DIR" | kind=code-symbol | source=eval/probes/payload-probe.mjs:L25 | neighbors=[payload-probe.mjs]
- "probes_prompt_hash_capture_args": "args" | kind=code-symbol | source=eval/probes/prompt-hash-capture.mjs:L127 | neighbors=[prompt-hash-capture.mjs]
- "probes_prompt_hash_capture_parseargs": "parseArgs()" | kind=code-symbol | source=eval/probes/prompt-hash-capture.mjs:L36 | neighbors=[prompt-hash-capture.mjs]
- "probes_prompt_hash_capture_repo_root": "REPO_ROOT" | kind=code-symbol | source=eval/probes/prompt-hash-capture.mjs:L30 | neighbors=[prompt-hash-capture.mjs]
- "probes_prompt_hash_capture_script_dir": "SCRIPT_DIR" | kind=code-symbol | source=eval/probes/prompt-hash-capture.mjs:L29 | neighbors=[prompt-hash-capture.mjs]
- "probes_telemetry_gate_capture": "capture" | kind=code-symbol | source=eval/probes/telemetry-gate.mjs:L51 | neighbors=[telemetry-gate.mjs]
- "probes_telemetry_gate_evidence": "evidence" | kind=code-symbol | source=eval/probes/telemetry-gate.mjs:L54 | neighbors=[telemetry-gate.mjs]
- "probes_telemetry_gate_flows": "flows" | kind=code-symbol | source=eval/probes/telemetry-gate.mjs:L47 | neighbors=[telemetry-gate.mjs]
- "probes_telemetry_gate_repo_root": "REPO_ROOT" | kind=code-symbol | source=eval/probes/telemetry-gate.mjs:L29 | neighbors=[telemetry-gate.mjs]
- "probes_telemetry_gate_schema_fields": "SCHEMA_FIELDS" | kind=code-symbol | source=eval/probes/telemetry-gate.mjs:L31 | neighbors=[telemetry-gate.mjs]
- "probes_telemetry_gate_script_dir": "SCRIPT_DIR" | kind=code-symbol | source=eval/probes/telemetry-gate.mjs:L28 | neighbors=[telemetry-gate.mjs]
- "probes_telemetry_gate_stub": "stub" | kind=code-symbol | source=eval/probes/telemetry-gate.mjs:L52 | neighbors=[telemetry-gate.mjs]
- "probes_telemetry_gate_violations": "violations" | kind=code-symbol | source=eval/probes/telemetry-gate.mjs:L53 | neighbors=[telemetry-gate.mjs]
- "scripts_check_ai_guardrail_drift_all_handlers": "ALL_HANDLERS" | kind=code-symbol | source=scripts/check-ai-guardrail-drift.mjs:L37 | neighbors=[check-ai-guardrail-drift.mjs]
- "scripts_check_ai_guardrail_drift_repo_root": "REPO_ROOT" | kind=code-symbol | source=scripts/check-ai-guardrail-drift.mjs:L28 | neighbors=[check-ai-guardrail-drift.mjs]
- "scripts_check_ai_guardrail_drift_script_dir": "SCRIPT_DIR" | kind=code-symbol | source=scripts/check-ai-guardrail-drift.mjs:L27 | neighbors=[check-ai-guardrail-drift.mjs]
- "scripts_check_ai_guardrail_drift_sync_handlers": "SYNC_HANDLERS" | kind=code-symbol | source=scripts/check-ai-guardrail-drift.mjs:L30 | neighbors=[check-ai-guardrail-drift.mjs]
- "scripts_check_ai_guardrail_drift_version_ref": "VERSION_REF" | kind=code-symbol | source=scripts/check-ai-guardrail-drift.mjs:L31 | neighbors=[check-ai-guardrail-drift.mjs]
- "scripts_check_ai_log_hygiene_default_scope": "DEFAULT_SCOPE" | kind=code-symbol | source=scripts/check-ai-log-hygiene.mjs:L38 | neighbors=[check-ai-log-hygiene.mjs]
- "scripts_check_ai_log_hygiene_files": "files" | kind=code-symbol | source=scripts/check-ai-log-hygiene.mjs:L129 | neighbors=[check-ai-log-hygiene.mjs]
- "scripts_check_ai_log_hygiene_fixtureproblems": "fixtureProblems" | kind=code-symbol | source=scripts/check-ai-log-hygiene.mjs:L109 | neighbors=[check-ai-log-hygiene.mjs]
- "scripts_check_ai_log_hygiene_negative_fixture": "NEGATIVE_FIXTURE" | kind=code-symbol | source=scripts/check-ai-log-hygiene.mjs:L56 | neighbors=[check-ai-log-hygiene.mjs]
- "scripts_check_ai_log_hygiene_negresult": "negResult" | kind=code-symbol | source=scripts/check-ai-log-hygiene.mjs:L108 | neighbors=[check-ai-log-hygiene.mjs]
- "scripts_check_ai_log_hygiene_positive_fixture": "POSITIVE_FIXTURE" | kind=code-symbol | source=scripts/check-ai-log-hygiene.mjs:L46 | neighbors=[check-ai-log-hygiene.mjs]
- "scripts_check_ai_log_hygiene_posresult": "posResult" | kind=code-symbol | source=scripts/check-ai-log-hygiene.mjs:L107 | neighbors=[check-ai-log-hygiene.mjs]
- "scripts_check_ai_log_hygiene_script_dir": "SCRIPT_DIR" | kind=code-symbol | source=scripts/check-ai-log-hygiene.mjs:L37 | neighbors=[check-ai-log-hygiene.mjs]
- "scripts_check_ai_log_hygiene_violations": "violations" | kind=code-symbol | source=scripts/check-ai-log-hygiene.mjs:L134 | neighbors=[check-ai-log-hygiene.mjs]
- "serve_close": "close()" | kind=code-symbol | source=serve.ts:L96 | neighbors=[serve.ts]
- "serve_fetch": "fetch()" | kind=code-symbol | source=serve.ts:L55 | neighbors=[serve.ts]
- "serve_message": "message()" | kind=code-symbol | source=serve.ts:L99 | neighbors=[serve.ts]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-080.json

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
