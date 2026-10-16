# Node Description Batch 77 of 82

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

- "core_monogatari_v8_configuration": ".configuration()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8]
- "core_monogatari_v8_debug": ".debug()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8]
- "core_monogatari_v8_element": ".element()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[v8]
- "core_monogatari_v8_fn": ".fn()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8]
- "core_monogatari_v8_getfromserviceworkercache": ".getFromServiceWorkerCache()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8]
- "core_monogatari_v8_height": ".height()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8]
- "core_monogatari_v8_isinserviceworkercache": ".isInServiceWorkerCache()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8]
- "core_monogatari_v8_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[v8]
- "core_monogatari_v8_off": ".off()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[v8]
- "core_monogatari_v8_on": ".on()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[v8]
- "core_monogatari_v8_settings": ".settings()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8]
- "core_monogatari_v8_state": ".state()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8]
- "core_monogatari_v8_temp": ".temp()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8]
- "core_monogatari_v8_template": ".template()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8]
- "core_monogatari_v8_unregisteraction": ".unregisterAction()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8]
- "core_monogatari_v8_width": ".width()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8]
- "core_monogatari_vc": "VC()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js]
- "core_monogatari_vi": "vI()" | kind=code-symbol | source=engine/core/monogatari.js:L39 | neighbors=[monogatari.js]
- "core_monogatari_vo_didmount": ".didMount()" | kind=code-symbol | source=engine/core/monogatari.js:L778 | neighbors=[VO()]
- "core_monogatari_vo_render": ".render()" | kind=code-symbol | source=engine/core/monogatari.js:L778 | neighbors=[VO()]
- "core_monogatari_vo_shouldproceed": ".shouldProceed()" | kind=code-symbol | source=engine/core/monogatari.js:L776 | neighbors=[VO()]
- "core_monogatari_vq_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[vQ]
- "core_monogatari_vq_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[vQ]
- "core_monogatari_vs_actions": ".actions()" | kind=code-symbol | source=engine/core/monogatari.js:L1075 | neighbors=[VS]
- "core_monogatari_vs_configuration": ".configuration()" | kind=code-symbol | source=engine/core/monogatari.js:L1075 | neighbors=[VS]
- "core_monogatari_vs_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1075 | neighbors=[VS]
- "core_monogatari_vs_patterncacheversion": ".patternCacheVersion()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VS]
- "core_monogatari_vs_render": ".render()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VS]
- "core_monogatari_vs_stop": ".stop()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VS]
- "core_monogatari_vs_strings": ".strings()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VS]
- "core_monogatari_vs_willunmount": ".willUnmount()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VS]
- "core_monogatari_vv_matchstring": ".matchString()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VV()]
- "core_monogatari_vv_shouldproceed": ".shouldProceed()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VV()]
- "core_monogatari_vv_willapply": ".willApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[VV()]
- "core_monogatari_vw_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[VW]
- "core_monogatari_vx_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[vX]
- "core_monogatari_vx_isconnected": "._$isConnected()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[vX]
- "core_monogatari_vz_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[VZ]
- "core_monogatari_w_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[W()]
- "core_monogatari_w_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[W()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-076.json

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
