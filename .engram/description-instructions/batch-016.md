# Node Description Batch 17 of 82

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

- "core_monogatari_te": "TE()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, r9(), .write(), NQ(), t9()]
- "core_monogatari_tf": "tF()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, A(), HO(), I6(), Tj()]
- "core_monogatari_to": "tO()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, r6(), .error(), .groupCollapsed(), .components()]
- "core_monogatari_u0": "u0()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, D(), P0(), s(), VK()]
- "core_monogatari_u8_addbutton": ".addButton()" | kind=code-symbol | source=engine/core/monogatari.js:L968 | neighbors=[.init(), U8, .buttons(), .onConfigurationUpdate(), .init()]
- "core_monogatari_u8_onconfigurationupdate": ".onConfigurationUpdate()" | kind=code-symbol | source=engine/core/monogatari.js:L968 | neighbors=[U8, .addButton(), .addButtonAfter(), .addButtonBefore(), .removeButton()]
- "core_monogatari_ua": "uA()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .fromObject(), .set(), J2(), W6()]
- "core_monogatari_ud_desktop": ".desktop()" | kind=code-symbol | source=engine/core/monogatari.js:L999 | neighbors=[uD, .value(), .send(), .preference(), .setting()]
- "core_monogatari_ug": "UG()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, JL(), OR(), SZ(), .match()]
- "core_monogatari_unshift": "unshift()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, H1(), .show(), .registerAction(), $Z()]
- "core_monogatari_v8_registercomponent": ".registerComponent()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .asEngine(), .components(), .global(), .unregisterComponent()]
- "core_monogatari_v8_setupregistry": "._setupRegistry()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[v8, .init(), .onError(), .onMount(), .onUnmount()]
- "core_monogatari_v9": "V9()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, BH(), BT(), GT(), .addPlugin()]
- "core_monogatari_vo_bind": ".bind()" | kind=code-symbol | source=engine/core/monogatari.js:L776 | neighbors=[VO(), .closest(), .proceed(), .registerListener(), .setting()]
- "core_monogatari_vx": "vX" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[monogatari.js, ._clone(), .constructor(), ._$isConnected(), ._$setValue()]
- "core_monogatari_w1": "W1()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, $0(), C1(), p(), Y1()]
- "core_monogatari_w5": "W5()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, D5(), .addShape(), .checkVersion(), SH()]
- "core_monogatari_w6": "W6()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, BA(), Q6(), uA(), W2()]
- "core_monogatari_wf": "Wf()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .fromFormat(), .global(), WO(), WX()]
- "core_monogatari_wx": "WX()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .fromFormatExplain(), Wf(), N2, .explainFromTokens()]
- "core_monogatari_x5": "X5()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, D5(), .addInteractor(), .addParticleUpdater(), .checkVersion()]
- "core_monogatari_xo_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[XO(), join(), .character(), .stripActionMarkers(), ._setCharacter()]
- "core_monogatari_xo_handlecustomclasses": "._handleCustomClasses()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[XO(), .apply(), .displayCenteredDialog(), .displayNvlDialog(), .revert()]
- "core_monogatari_xo_willapply": ".willApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[XO(), .hide(), .html(), .removeClass(), .removeData()]
- "core_monogatari_xv": "xV()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, K9(), .particleInit(), .init(), v4()]
- "core_monogatari_yw": "YW" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .values(), .constructor(), .load()]
- "core_monogatari_z6": "z6()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, Bj(), bV(), h7(), LJ()]
- "core_monogatari_z7": "z7()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .toRelative(), .toRelativeCalendar(), W(), Z1()]
- "core_monogatari_zs_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[ZS, .removeClass(), .global(), .resetGame(), .showMainScreen()]
- "debug_debug": "debug.js" | kind=code-symbol | source=engine/debug/debug.js:L1 | neighbors=[d(), e(), i(), J(), r()]
- "js_cloud_auth_ensureprofile": "ensureProfile()" | kind=code-symbol | source=js/cloud-auth.js:L45 | neighbors=[cloud-auth.js, fetchProfile(), normalizeRole(), signIn(), signUp()]
- "js_cloud_classes_createclass": "createClass()" | kind=code-symbol | source=js/cloud-classes.js:L44 | neighbors=[cloud-classes.js, isUniqueViolation(), mintCode(), teacherIdOf(), token()]
- "js_cloud_client_baseurl": "baseUrl()" | kind=code-symbol | source=js/cloud-client.js:L44 | neighbors=[cloud-client.js, authFetch(), config(), configHost(), rest()]
- "js_cloud_client_getuser": "getUser()" | kind=code-symbol | source=js/cloud-client.js:L237 | neighbors=[cloud-client.js, authFetch(), loadSession(), requireEnabled(), saveSession()]
- "js_cloud_hook_init": "init()" | kind=code-symbol | source=js/cloud-hook.js:L54 | neighbors=[cloud-hook.js, measureChoiceLines(), renderMenuEntry(), renderSaveButtons(), startScreenObserver()]
- "js_cloud_hook_startscreenobserver": "startScreenObserver()" | kind=code-symbol | source=js/cloud-hook.js:L327 | neighbors=[cloud-hook.js, init(), measureChoiceLines(), renderMenuEntry(), renderSaveButtons()]
- "js_cloud_run_getitem": "getItem()" | kind=code-symbol | source=js/cloud-run.js:L44 | neighbors=[cloud-run.js, currentRunId(), ensureRun(), getChoices(), snapshotFromStorage()]
- "js_cloud_run_logchoice": "logChoice()" | kind=code-symbol | source=js/cloud-run.js:L101 | neighbors=[cloud-run.js, ensureRun(), getChoices(), nowIso(), setItem()]
- "js_cloud_run_nowiso": "nowIso()" | kind=code-symbol | source=js/cloud-run.js:L17 | neighbors=[cloud-run.js, finishRun(), logChoice(), snapshotFromStorage(), startRun()]
- "js_cloud_run_startrun": "startRun()" | kind=code-symbol | source=js/cloud-run.js:L60 | neighbors=[cloud-run.js, ensureRun(), mintId(), nowIso(), setItem()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-016.json

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
