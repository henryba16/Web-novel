# Node Description Batch 51 of 82

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

- "core_monogatari_zq_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[zq, .messages()]
- "core_monogatari_zq_revert": ".revert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[zq, .component()]
- "core_monogatari_zq_willapply": ".willApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[zq, .messages()]
- "core_monogatari_zs_bind": ".bind()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[ZS, .registerListener()]
- "core_monogatari_zs_willapply": ".willApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[ZS, .hideScreens()]
- "core_monogatari_zw_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[zw(), WV]
- "core_monogatari_zw_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[zw(), x1()]
- "core_monogatari_zz_draw": ".draw()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[ZZ(), y9()]
- "debug_debug_e": "e()" | kind=code-symbol | source=engine/debug/debug.js:L1 | neighbors=[debug.js, d()]
- "debug_debug_i": "i()" | kind=code-symbol | source=engine/debug/debug.js:L1 | neighbors=[debug.js, r()]
- "electrobun_index_monogatarirpc": "MonogatariRPC" | kind=code-symbol | source=engine/electrobun/index.ts:L16 | neighbors=[index.ts, view.ts]
- "electron_notarize": "notarize.js" | kind=code-symbol | source=engine/electron/notarize.js:L1 | neighbors=[{ build: { appId }}, { notarize }]
- "electron_preload": "preload.js" | kind=code-symbol | source=engine/electron/preload.js:L1 | neighbors=[allow, { contextBridge, ipcRenderer }]
- "js_ai_format_escapehtml": "escapeHtml()" | kind=code-symbol | source=js/ai-format.js:L12 | neighbors=[ai-format.js, renderMarkdown()]
- "js_ai_format_stripmarkdown": "stripMarkdown()" | kind=code-symbol | source=js/ai-format.js:L47 | neighbors=[ai-format.js, stripCJK()]
- "js_analytics": "analytics.js" | kind=code-symbol | source=js/analytics.js:L1 | neighbors=[74bd801 Merge pull request #12 from hen…, 92bb88a Install Vercel Web Analytics]
- "js_cloud_auth_getcacheduser": "getCachedUser()" | kind=code-symbol | source=js/cloud-auth.js:L30 | neighbors=[cloud-auth.js, getSession()]
- "js_cloud_auth_gotolanding": "goToLanding()" | kind=code-symbol | source=js/cloud-auth.js:L122 | neighbors=[cloud-auth.js, landingFor()]
- "js_cloud_classes_addemailinvite": "addEmailInvite()" | kind=code-symbol | source=js/cloud-classes.js:L104 | neighbors=[cloud-classes.js, token()]
- "js_cloud_classes_getclassbycode": "getClassByCode()" | kind=code-symbol | source=js/cloud-classes.js:L85 | neighbors=[cloud-classes.js, token()]
- "js_cloud_classes_leaveclass": "leaveClass()" | kind=code-symbol | source=js/cloud-classes.js:L191 | neighbors=[cloud-classes.js, token()]
- "js_cloud_classes_listclassmembers": "listClassMembers()" | kind=code-symbol | source=js/cloud-classes.js:L167 | neighbors=[cloud-classes.js, token()]
- "js_cloud_classes_mymemberships": "myMemberships()" | kind=code-symbol | source=js/cloud-classes.js:L157 | neighbors=[cloud-classes.js, token()]
- "js_cloud_classes_removemembership": "removeMembership()" | kind=code-symbol | source=js/cloud-classes.js:L204 | neighbors=[cloud-classes.js, token()]
- "js_cloud_client_accesstoken": "accessToken()" | kind=code-symbol | source=js/cloud-client.js:L327 | neighbors=[cloud-client.js, loadSession()]
- "js_cloud_client_confighost": "configHost()" | kind=code-symbol | source=js/cloud-client.js:L333 | neighbors=[cloud-client.js, baseUrl()]
- "js_cloud_client_getsession": "getSession()" | kind=code-symbol | source=js/cloud-client.js:L233 | neighbors=[cloud-client.js, loadSession()]
- "js_cloud_client_sendpasswordreset": "sendPasswordReset()" | kind=code-symbol | source=js/cloud-client.js:L267 | neighbors=[cloud-client.js, authFetch()]
- "js_cloud_dashboard_choicekey": "choiceKey()" | kind=code-symbol | source=js/cloud-dashboard.js:L192 | neighbors=[cloud-dashboard.js, computeAggregates()]
- "js_cloud_dashboard_displaynamefor": "displayNameFor()" | kind=code-symbol | source=js/cloud-dashboard.js:L54 | neighbors=[cloud-dashboard.js, shortId()]
- "js_cloud_dashboard_endingsreached": "endingsReached()" | kind=code-symbol | source=js/cloud-dashboard.js:L268 | neighbors=[cloud-dashboard.js, finishedRuns()]
- "js_cloud_dashboard_hasminimumdata": "hasMinimumData()" | kind=code-symbol | source=js/cloud-dashboard.js:L321 | neighbors=[cloud-dashboard.js, finishedCount()]
- "js_cloud_dashboard_latestrun": "latestRun()" | kind=code-symbol | source=js/cloud-dashboard.js:L79 | neighbors=[cloud-dashboard.js, progressFor()]
- "js_cloud_dashboard_loadclassruns": "loadClassRuns()" | kind=code-symbol | source=js/cloud-dashboard.js:L283 | neighbors=[cloud-dashboard.js, token()]
- "js_cloud_dashboard_loadstudentruns": "loadStudentRuns()" | kind=code-symbol | source=js/cloud-dashboard.js:L295 | neighbors=[cloud-dashboard.js, token()]
- "js_cloud_dashboard_lowestmetric": "lowestMetric()" | kind=code-symbol | source=js/cloud-dashboard.js:L129 | neighbors=[cloud-dashboard.js, computeFlags()]
- "js_cloud_dashboard_runsforstudent": "runsForStudent()" | kind=code-symbol | source=js/cloud-dashboard.js:L70 | neighbors=[cloud-dashboard.js, progressFor()]
- "js_cloud_dashboard_shortid": "shortId()" | kind=code-symbol | source=js/cloud-dashboard.js:L45 | neighbors=[cloud-dashboard.js, displayNameFor()]
- "js_cloud_dashboard_summarizeclass": "summarizeClass()" | kind=code-symbol | source=js/cloud-dashboard.js:L356 | neighbors=[cloud-dashboard.js, postSummary()]
- "js_cloud_dashboard_summarizestudent": "summarizeStudent()" | kind=code-symbol | source=js/cloud-dashboard.js:L368 | neighbors=[cloud-dashboard.js, postSummary()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-050.json

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
