# Node Description Batch 49 of 82

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

- "core_monogatari_v8_screenshotspace": ".screenshotSpace()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .asEngine()]
- "core_monogatari_v8_serializeaudiobuffer": ".serializeAudioBuffer()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, zO()]
- "core_monogatari_v8_setup": ".setup()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .components()]
- "core_monogatari_v8_shouldrollback": ".shouldRollback()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .asEngine()]
- "core_monogatari_v8_showsplashscreen": ".showSplashScreen()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .asEngine()]
- "core_monogatari_v8_storeaudiobufferpersistent": ".storeAudioBufferPersistent()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .asEngine()]
- "core_monogatari_v8_trigger": ".trigger()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[v8, F8()]
- "core_monogatari_v8_unregisterlistener": ".unregisterListener()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .asEngine()]
- "core_monogatari_v8_upgrade": ".upgrade()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .asEngine()]
- "core_monogatari_v8_willproceed": ".willProceed()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .asEngine()]
- "core_monogatari_vg": "VG()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, JL()]
- "core_monogatari_vk": "VK()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, u0()]
- "core_monogatari_vl": "vL()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, UC()]
- "core_monogatari_vr": "VR()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, zR()]
- "core_monogatari_vs_action": ".action()" | kind=code-symbol | source=engine/core/monogatari.js:L1075 | neighbors=[VS, ._invalidateAllPatternCaches()]
- "core_monogatari_vs_animationloop": "._animationLoop()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VS, ._revealNextCharacter()]
- "core_monogatari_vs_destroy": ".destroy()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VS, .unsetAllCursors()]
- "core_monogatari_vs_didmount": ".didMount()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VS, .initiate()]
- "core_monogatari_vs_humanizer": ".humanizer()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VS, .typewrite()]
- "core_monogatari_vs_invalidateallpatterncaches": "._invalidateAllPatternCaches()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VS, .action()]
- "core_monogatari_vs_onstateupdate": ".onStateUpdate()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VS, .forceRender()]
- "core_monogatari_vs_parseoptions": "._parseOptions()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VS, ._parseActionSection()]
- "core_monogatari_vs_start": ".start()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VS, .typewrite()]
- "core_monogatari_vv_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VV(), .asset()]
- "core_monogatari_vv_didapply": ".didApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VV(), .history()]
- "core_monogatari_vv_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VV(), .history()]
- "core_monogatari_vv_onload": ".onLoad()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VV(), .prepareAction()]
- "core_monogatari_vv_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VV(), .history()]
- "core_monogatari_vv_revert": ".revert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VV(), .cleanupVideoElement()]
- "core_monogatari_vv_setup": ".setup()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VV(), .history()]
- "core_monogatari_vw_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[VW, J8]
- "core_monogatari_vx_setvalue": "._$setValue()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[vX, nH()]
- "core_monogatari_vz_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[VZ, q1()]
- "core_monogatari_w_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[W(), OQ()]
- "core_monogatari_w_initparticle": ".initParticle()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.init(), W()]
- "core_monogatari_w7_formattoparts": ".formatToParts()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[W7, .toJSDate()]
- "core_monogatari_w8_insert": ".insert()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[W8(), .update()]
- "core_monogatari_w8_queryrectangle": ".queryRectangle()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[W8(), dK]
- "core_monogatari_wc": "WC()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, IH()]
- "core_monogatari_we": "wE()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, JL()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-048.json

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
