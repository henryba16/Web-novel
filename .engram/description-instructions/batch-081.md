# Node Description Batch 82 of 82

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

- "serve_mime_types": "MIME_TYPES" | kind=code-symbol | source=serve.ts:L7 | neighbors=[serve.ts]
- "serve_open": "open()" | kind=code-symbol | source=serve.ts:L93 | neighbors=[serve.ts]
- "serve_reloadsockets": "reloadSockets" | kind=code-symbol | source=serve.ts:L41 | neighbors=[serve.ts]
- "serve_watch_dirs": "WATCH_DIRS" | kind=code-symbol | source=serve.ts:L44 | neighbors=[serve.ts]
- "service_worker_files": "files" | kind=code-symbol | source=service-worker.js:L14 | neighbors=[service-worker.js]
- "electrobun_config": "electrobun.config.ts" | kind=code-symbol | source=electrobun.config.ts:L1

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-081.json

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
