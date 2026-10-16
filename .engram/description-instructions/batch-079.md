# Node Description Batch 80 of 82

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

- "electrobun_view_callbacks": "callbacks" | kind=code-symbol | source=engine/electrobun/view.ts:L21 | neighbors=[view.ts]
- "electrobun_view_on": "on()" | kind=code-symbol | source=engine/electrobun/view.ts:L40 | neighbors=[view.ts]
- "electrobun_view_rpc": "rpc" | kind=code-symbol | source=engine/electrobun/view.ts:L14 | neighbors=[view.ts]
- "electrobun_view_send": "send()" | kind=code-symbol | source=engine/electrobun/view.ts:L24 | neighbors=[view.ts]
- "electron_index_app_ipcmain_shell_browserwindow_menu": "{ app, ipcMain, shell, BrowserWindow, Menu }" | kind=code-symbol | source=engine/electron/index.js:L12 | neighbors=[index.js]
- "electron_index_createwindow": "createWindow()" | kind=code-symbol | source=engine/electron/index.js:L24 | neighbors=[index.js]
- "electron_index_path": "path" | kind=code-symbol | source=engine/electron/index.js:L13 | neighbors=[index.js]
- "electron_index_url": "url" | kind=code-symbol | source=engine/electron/index.js:L14 | neighbors=[index.js]
- "electron_notarize_build_appid": "{ build: { appId }}" | kind=code-symbol | source=engine/electron/notarize.js:L5 | neighbors=[notarize.js]
- "electron_notarize_notarize": "{ notarize }" | kind=code-symbol | source=engine/electron/notarize.js:L7 | neighbors=[notarize.js]
- "electron_preload_allow": "allow" | kind=code-symbol | source=engine/electron/preload.js:L4 | neighbors=[preload.js]
- "electron_preload_contextbridge_ipcrenderer": "{ contextBridge, ipcRenderer }" | kind=code-symbol | source=engine/electron/preload.js:L2 | neighbors=[preload.js]
- "eval_run_eval_allfixtures": "allFixtures" | kind=code-symbol | source=eval/run-eval.mjs:L74 | neighbors=[run-eval.mjs]
- "eval_run_eval_args": "args" | kind=code-symbol | source=eval/run-eval.mjs:L73 | neighbors=[run-eval.mjs]
- "eval_run_eval_candidates": "candidates" | kind=code-symbol | source=eval/run-eval.mjs:L88 | neighbors=[run-eval.mjs]
- "eval_run_eval_fixtures_dir": "FIXTURES_DIR" | kind=code-symbol | source=eval/run-eval.mjs:L7 | neighbors=[run-eval.mjs]
- "eval_run_eval_loadfixtures": "loadFixtures()" | kind=code-symbol | source=eval/run-eval.mjs:L27 | neighbors=[run-eval.mjs]
- "eval_run_eval_makestubfetch": "makeStubFetch()" | kind=code-symbol | source=eval/run-eval.mjs:L57 | neighbors=[run-eval.mjs]
- "eval_run_eval_normalizefixture": "normalizeFixture()" | kind=code-symbol | source=eval/run-eval.mjs:L37 | neighbors=[run-eval.mjs]
- "eval_run_eval_parseargs": "parseArgs()" | kind=code-symbol | source=eval/run-eval.mjs:L14 | neighbors=[run-eval.mjs]
- "eval_run_eval_report": "report" | kind=code-symbol | source=eval/run-eval.mjs:L125 | neighbors=[run-eval.mjs]
- "eval_run_eval_root": "ROOT" | kind=code-symbol | source=eval/run-eval.mjs:L6 | neighbors=[run-eval.mjs]
- "eval_run_eval_transcript": "transcript" | kind=code-symbol | source=eval/run-eval.mjs:L94 | neighbors=[run-eval.mjs]
- "js_ai_format_overalllevel": "overallLevel()" | kind=code-symbol | source=js/ai-format.js:L56 | neighbors=[ai-format.js]
- "js_cloud_auth_isonline": "isOnline()" | kind=code-symbol | source=js/cloud-auth.js:L183 | neighbors=[cloud-auth.js]
- "js_cloud_auth_signout": "signOut()" | kind=code-symbol | source=js/cloud-auth.js:L126 | neighbors=[cloud-auth.js]
- "js_cloud_auth_signoutlocal": "signOutLocal()" | kind=code-symbol | source=js/cloud-auth.js:L145 | neighbors=[cloud-auth.js]
- "js_cloud_dashboard_progresslabel": "progressLabel()" | kind=code-symbol | source=js/cloud-dashboard.js:L116 | neighbors=[cloud-dashboard.js]
- "js_cloud_dashboard_stattag": "statTag()" | kind=code-symbol | source=js/cloud-dashboard.js:L28 | neighbors=[cloud-dashboard.js]
- "js_cloud_export_computeaggregates": "computeAggregates()" | kind=code-symbol | source=js/cloud-export.js:L159 | neighbors=[cloud-export.js]
- "js_cloud_export_stattag": "statTag()" | kind=code-symbol | source=js/cloud-export.js:L32 | neighbors=[cloud-export.js]
- "js_cloud_run_clearrun": "clearRun()" | kind=code-symbol | source=js/cloud-run.js:L179 | neighbors=[cloud-run.js]
- "js_cloud_slots_onlinenow": "onlineNow()" | kind=code-symbol | source=js/cloud-slots.js:L21 | neighbors=[cloud-slots.js]
- "js_cloud_sync_describecurrent": "describeCurrent()" | kind=code-symbol | source=js/cloud-sync.js:L69 | neighbors=[cloud-sync.js]
- "js_script_addawareness": "addawareness()" | kind=code-symbol | source=js/script.js:L10 | neighbors=[script.js]
- "js_script_addempathy": "addempathy()" | kind=code-symbol | source=js/script.js:L7 | neighbors=[script.js]
- "js_script_addsafe": "addsafe()" | kind=code-symbol | source=js/script.js:L13 | neighbors=[script.js]
- "js_script_armroute": "armRoute()" | kind=code-symbol | source=js/script.js:L1460 | neighbors=[script.js]
- "js_script_finishchapter": "finishChapter()" | kind=code-symbol | source=js/script.js:L17 | neighbors=[script.js]
- "js_script_onlinenow": "onlineNow()" | kind=code-symbol | source=js/script.js:L1546 | neighbors=[script.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-079.json

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
