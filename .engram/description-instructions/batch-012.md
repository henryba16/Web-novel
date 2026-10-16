# Node Description Batch 13 of 82

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

- "core_monogatari_rk_formatdurationfromstring": ".formatDurationFromString()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[rK, H(), oA(), .parseFormat(), .shiftTo(), .toFormat()]
- "core_monogatari_rw": "rw()" | kind=code-symbol | source=engine/core/monogatari.js:L21 | neighbors=[monogatari.js, nw(), .createElement(), .constructor(), .load(), .update()]
- "core_monogatari_s1_shiftto": ".shiftTo()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[rK, .formatDurationFromString(), S1, .as(), rA(), .shiftToAll()]
- "core_monogatari_sd_showimage": ".showImage()" | kind=code-symbol | source=engine/core/monogatari.js:L767 | neighbors=[SD, .bind(), .addClass(), .style(), .asset(), .setting()]
- "core_monogatari_shift": "shift()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, consume(), format(), m(), Ww(), Y0()]
- "core_monogatari_stopimmediatepropagation": "stopImmediatePropagation()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, .didMount(), .bind(), .bind(), H(), T()]
- "core_monogatari_tl": "tL()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .toHTTP(), .toISOWeekDate(), .toRFC2822(), .toSQLTime(), .formatDateTimeFromString()]
- "core_monogatari_tz": "TZ()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, fL(), IZ(), kL(), .global(), .setting()]
- "core_monogatari_u5": "U5()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .init(), .getPosition(), .addInteractor(), .checkVersion(), M1()]
- "core_monogatari_ud": "uD" | kind=code-symbol | source=engine/core/monogatari.js:L999 | neighbors=[monogatari.js, .bind(), .changeWindowResolution(), .desktop(), .didMount(), .render()]
- "core_monogatari_uj": "Uj()" | kind=code-symbol | source=engine/core/monogatari.js:L21 | neighbors=[monogatari.js, AO(), .item(), .add(), .has(), .delete()]
- "core_monogatari_uv": "uV()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, Bj(), h7(), LJ(), p7(), cV]
- "core_monogatari_uz": "UZ" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .init(), .isEnabled(), .loadOptions(), .update()]
- "core_monogatari_v7": "V7()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .minus(), .plus(), L6(), .as(), ZX()]
- "core_monogatari_v8_globals": ".globals()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[.reset(), .setup(), .reset(), .setup(), v8, .setup()]
- "core_monogatari_v8_run": ".run()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[FO(), .apply(), O(), v8, .asEngine(), .apply()]
- "core_monogatari_vs_typewrite": ".typewrite()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VS, .initiate(), ._revealNextCharacter(), .start(), .executeAction(), .humanizer()]
- "core_monogatari_w2": "W2()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .fromObject(), .ordinal(), .set(), g7(), W6()]
- "core_monogatari_w7": "W7" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .invalid(), .constructor(), .format(), .formatToParts(), .resolvedOptions()]
- "core_monogatari_w8_querycircle": ".queryCircle()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.interact(), .interact(), .interact(), .interact(), W8(), XK]
- "core_monogatari_wh": "wH()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, EZ(), fL(), IZ(), kL(), PZ()]
- "core_monogatari_wz": "wz()" | kind=code-symbol | source=engine/core/monogatari.js:L39 | neighbors=[monogatari.js, MM(), QP(), concat(), Y6(), zP()]
- "core_monogatari_x4": "x4()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, F5(), f4(), .getPosition(), .getRadius(), QU()]
- "core_monogatari_xh": "XH()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, gY(), HL(), q1(), rV(), yK()]
- "core_monogatari_z9": "z9()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .update(), .addShape(), .checkVersion(), q1(), yK()]
- "core_monogatari_zq_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[zq, .createElement(), .setProps(), .add(), .append(), .replaceVariables()]
- "core_monogatari_zs": "ZS" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[monogatari.js, .apply(), .bind(), .matchString(), .willApply(), .willRevert()]
- "core_monogatari_zw": "zw()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, aX(), concat(), H(), .constructor(), .load()]
- "electrobun_view": "view.ts" | kind=code-symbol | source=engine/electrobun/view.ts:L1 | neighbors=[index.ts, MonogatariRPC, callbacks, on(), rpc, send()]
- "js_cloud_client_savesession": "saveSession()" | kind=code-symbol | source=js/cloud-client.js:L61 | neighbors=[cloud-client.js, clearSession(), getUser(), refreshSession(), signIn(), signUp()]
- "js_cloud_dashboard_finishedruns": "finishedRuns()" | kind=code-symbol | source=js/cloud-dashboard.js:L92 | neighbors=[cloud-dashboard.js, computeAggregates(), computeFlags(), endingsReached(), finishedCount(), progressFor()]
- "js_cloud_run_ensurerun": "ensureRun()" | kind=code-symbol | source=js/cloud-run.js:L82 | neighbors=[cloud-run.js, currentRunId(), getItem(), startRun(), logChoice(), snapshotFromStorage()]
- "js_cloud_slots_readlocalslots": "readLocalSlots()" | kind=code-symbol | source=js/cloud-slots.js:L166 | neighbors=[cloud-slots.js, pullNewer(), pushChanged(), discoverDb(), openDb(), txPromise()]
- "commit:repo:github.com/henryba16/Web-novel@038a77ff55ed9a618bf4bc12ac27f6de6469be44": "038a77f Merge pull request #7 from henryba16/son" | kind=Commit | source=git | neighbors=[main, 3ece3b2 3/9/26, a17ec14 Merge pull request #8 from henr…, 1a89aac background, 2679f36 Merge pull request #6 from henr…]
- "commit:repo:github.com/henryba16/Web-novel@0729ecc65c1b4a9dfb376129698c3e4fbe9c8336": "0729ecc ok" | kind=Commit | source=git | neighbors=[main, f46d27d declare scene, script.js, serve.ts, f97c7a4 15-9 14:21]
- "commit:repo:github.com/henryba16/Web-novel@07912b918c8edba3aba1fc62072b73472dc0d11f": "07912b9 Merge pull request #22 from henryba16/henry" | kind=Commit | source=git | neighbors=[main, 83a4c96 work in progress, 87f0031 Update copyright owner in LICEN…, 42a5545 Merge pull request #21 from hen…, f1b7e56 moreeeeeeee patch]
- "commit:repo:github.com/henryba16/Web-novel@19b1ff825a001e7b4db330d5d4c7fc50577205e7": "19b1ff8 oh man" | kind=Commit | source=git | neighbors=[main, 2a8dcd7 fix bug, ebab758 Merge pull request #43 from hen…, supabase-config.js, 5884c88 oh man]
- "commit:repo:github.com/henryba16/Web-novel@238fa9b1d6cbf8c540dc73f10ebf0644faf20f93": "238fa9b Merge pull request #14 from henryba16/vercel/install-vercel-speed-insig…" | kind=Commit | source=git | neighbors=[main, fc0d806 Merge pull request #15 from hen…, speed-insights.js, 28417c8 Install Vercel Speed Insights w…, e84e69c Add website link to README]
- "commit:repo:github.com/henryba16/Web-novel@23f97b62d1f859ec63559794a999e6db8cde39d3": "23f97b6 fix character choice 1" | kind=Commit | source=git | neighbors=[main, 8631638 Merge pull request #27 from hen…, e520236 Merge pull request #26 from hen…, script.js, f46d27d declare scene]
- "commit:repo:github.com/henryba16/Web-novel@24d591c59e6a597e80e0cde9ca22f023ac7ba075": "24d591c Merge branch 'main' into henry" | kind=Commit | source=git | neighbors=[1215825 dam, main, f0f54ea fix many things, script.js, e377d17 Merge pull request #35 from hen…]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-012.json

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
