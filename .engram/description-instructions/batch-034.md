# Node Description Batch 35 of 82

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

- "core_monogatari_zk_prefix": ".prefix()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.constructor(), .render(), zK()]
- "core_monogatari_zo": "zO()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[monogatari.js, bf(), .serializeAudioBuffer()]
- "core_monogatari_zp": "zP()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, join(), wz()]
- "core_monogatari_zq_messages": ".messages()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[zq, .constructor(), .willApply()]
- "core_monogatari_zx": "ZX()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, AL(), V7()]
- "debug_debug_d": "d()" | kind=code-symbol | source=engine/debug/debug.js:L2 | neighbors=[debug.js, e(), r()]
- "debug_debug_r": "r()" | kind=code-symbol | source=engine/debug/debug.js:L1 | neighbors=[debug.js, d(), i()]
- "electrobun_index": "index.ts" | kind=code-symbol | source=engine/electrobun/index.ts:L1 | neighbors=[MonogatariRPC, win, view.ts]
- "js_ai_format_rendermarkdown": "renderMarkdown()" | kind=code-symbol | source=js/ai-format.js:L30 | neighbors=[ai-format.js, escapeHtml(), stripCJK()]
- "js_ai_format_stripcjk": "stripCJK()" | kind=code-symbol | source=js/ai-format.js:L23 | neighbors=[ai-format.js, renderMarkdown(), stripMarkdown()]
- "js_cloud_auth_afterlogin": "afterLogin()" | kind=code-symbol | source=js/cloud-auth.js:L66 | neighbors=[cloud-auth.js, signIn(), signUp()]
- "js_cloud_auth_currentprofile": "currentProfile()" | kind=code-symbol | source=js/cloud-auth.js:L164 | neighbors=[cloud-auth.js, fetchProfile(), getSession()]
- "js_cloud_auth_fetchprofile": "fetchProfile()" | kind=code-symbol | source=js/cloud-auth.js:L35 | neighbors=[cloud-auth.js, currentProfile(), ensureProfile()]
- "js_cloud_auth_getsession": "getSession()" | kind=code-symbol | source=js/cloud-auth.js:L26 | neighbors=[cloud-auth.js, currentProfile(), getCachedUser()]
- "js_cloud_auth_landingfor": "landingFor()" | kind=code-symbol | source=js/cloud-auth.js:L22 | neighbors=[cloud-auth.js, goToLanding(), normalizeRole()]
- "js_cloud_auth_signin": "signIn()" | kind=code-symbol | source=js/cloud-auth.js:L112 | neighbors=[cloud-auth.js, afterLogin(), ensureProfile()]
- "js_cloud_classes_claimpendinginvites": "claimPendingInvites()" | kind=code-symbol | source=js/cloud-classes.js:L267 | neighbors=[cloud-classes.js, claimFloatingRuns(), token()]
- "js_cloud_classes_isuniqueviolation": "isUniqueViolation()" | kind=code-symbol | source=js/cloud-classes.js:L40 | neighbors=[cloud-classes.js, createClass(), regenerateCode()]
- "js_cloud_classes_joinbycode": "joinByCode()" | kind=code-symbol | source=js/cloud-classes.js:L122 | neighbors=[cloud-classes.js, claimFloatingRuns(), token()]
- "js_cloud_classes_listteacherclasses": "listTeacherClasses()" | kind=code-symbol | source=js/cloud-classes.js:L74 | neighbors=[cloud-classes.js, teacherIdOf(), token()]
- "js_cloud_classes_mintcode": "mintCode()" | kind=code-symbol | source=js/cloud-classes.js:L24 | neighbors=[cloud-classes.js, createClass(), regenerateCode()]
- "js_cloud_classes_teacheridof": "teacherIdOf()" | kind=code-symbol | source=js/cloud-classes.js:L16 | neighbors=[cloud-classes.js, createClass(), listTeacherClasses()]
- "js_cloud_client_clearsession": "clearSession()" | kind=code-symbol | source=js/cloud-client.js:L73 | neighbors=[cloud-client.js, saveSession(), signOut()]
- "js_cloud_client_isenabled": "isEnabled()" | kind=code-symbol | source=js/cloud-client.js:L33 | neighbors=[cloud-client.js, config(), requireEnabled()]
- "js_cloud_client_isofflineerror": "isOfflineError()" | kind=code-symbol | source=js/cloud-client.js:L77 | neighbors=[cloud-client.js, authFetch(), rest()]
- "js_cloud_client_pubkey": "pubKey()" | kind=code-symbol | source=js/cloud-client.js:L48 | neighbors=[cloud-client.js, authHeaders(), config()]
- "js_cloud_dashboard_computeaggregates": "computeAggregates()" | kind=code-symbol | source=js/cloud-dashboard.js:L198 | neighbors=[cloud-dashboard.js, choiceKey(), finishedRuns()]
- "js_cloud_dashboard_computeflags": "computeFlags()" | kind=code-symbol | source=js/cloud-dashboard.js:L151 | neighbors=[cloud-dashboard.js, finishedRuns(), lowestMetric()]
- "js_cloud_dashboard_finishedcount": "finishedCount()" | kind=code-symbol | source=js/cloud-dashboard.js:L315 | neighbors=[cloud-dashboard.js, finishedRuns(), hasMinimumData()]
- "js_cloud_export_fetchfinishedruns": "fetchFinishedRuns()" | kind=code-symbol | source=js/cloud-export.js:L41 | neighbors=[cloud-export.js, downloadCsv(), token()]
- "js_cloud_hook_el": "el()" | kind=code-symbol | source=js/cloud-hook.js:L33 | neighbors=[cloud-hook.js, renderMenuEntry(), renderSaveButtons()]
- "js_cloud_hook_enabled": "enabled()" | kind=code-symbol | source=js/cloud-hook.js:L13 | neighbors=[cloud-hook.js, renderMenuEntry(), renderSaveButtons()]
- "js_cloud_hook_hassession": "hasSession()" | kind=code-symbol | source=js/cloud-hook.js:L25 | neighbors=[cloud-hook.js, renderMenuEntry(), renderSaveButtons()]
- "js_cloud_hook_measurechoicelines": "measureChoiceLines()" | kind=code-symbol | source=js/cloud-hook.js:L299 | neighbors=[cloud-hook.js, init(), startScreenObserver()]
- "js_cloud_hook_pendingcount": "pendingCount()" | kind=code-symbol | source=js/cloud-hook.js:L44 | neighbors=[cloud-hook.js, doSync(), renderSaveButtons()]
- "js_cloud_hook_savescreens": "saveScreens()" | kind=code-symbol | source=js/cloud-hook.js:L94 | neighbors=[cloud-hook.js, remountSlotContainers(), renderSaveButtons()]
- "js_cloud_run_currentrunid": "currentRunId()" | kind=code-symbol | source=js/cloud-run.js:L78 | neighbors=[cloud-run.js, getItem(), ensureRun()]
- "js_cloud_run_finishrun": "finishRun()" | kind=code-symbol | source=js/cloud-run.js:L161 | neighbors=[cloud-run.js, nowIso(), snapshotFromStorage()]
- "js_cloud_run_setitem": "setItem()" | kind=code-symbol | source=js/cloud-run.js:L52 | neighbors=[cloud-run.js, logChoice(), startRun()]
- "js_cloud_slots_discoverdb": "discoverDb()" | kind=code-symbol | source=js/cloud-slots.js:L118 | neighbors=[cloud-slots.js, openDb(), readLocalSlots()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-034.json

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
