# Node Description Batch 59 of 82

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

- "core_monogatari_gz_shouldproceed": ".shouldProceed()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[GZ()]
- "core_monogatari_gz_willrollback": ".willRollback()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[GZ()]
- "core_monogatari_h8_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[h8()]
- "core_monogatari_h8_matchobject": ".matchObject()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[h8()]
- "core_monogatari_h8_shouldproceed": ".shouldProceed()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[h8()]
- "core_monogatari_h8_willrevert": ".willRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[h8()]
- "core_monogatari_h8_willrollback": ".willRollback()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[h8()]
- "core_monogatari_hh_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L749 | neighbors=[HH]
- "core_monogatari_hh_render": ".render()" | kind=code-symbol | source=engine/core/monogatari.js:L749 | neighbors=[HH]
- "core_monogatari_hh_willmount": ".willMount()" | kind=code-symbol | source=engine/core/monogatari.js:L749 | neighbors=[HH]
- "core_monogatari_hi_didapply": ".didApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[HI]
- "core_monogatari_hi_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[HI]
- "core_monogatari_hi_matchstring": ".matchString()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[HI]
- "core_monogatari_hi_revert": ".revert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[HI]
- "core_monogatari_hq_clear": ".clear()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hq]
- "core_monogatari_hq_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hq]
- "core_monogatari_hq_loadoptions": ".loadOptions()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hq]
- "core_monogatari_hq_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hq]
- "core_monogatari_hs_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[hS]
- "core_monogatari_hs_didapply": ".didApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[hS]
- "core_monogatari_hs_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[hS]
- "core_monogatari_hs_matchstring": ".matchString()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[hS]
- "core_monogatari_hs_revert": ".revert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[hS]
- "core_monogatari_hs_willapply": ".willApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[hS]
- "core_monogatari_hs_willrevert": ".willRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[hS]
- "core_monogatari_hw_addconfig": ".addConfig()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw()]
- "core_monogatari_hw_addeventlistener": ".addEventListener()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw()]
- "core_monogatari_hw_configs": ".configs()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw()]
- "core_monogatari_hw_dispatchevent": ".dispatchEvent()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw()]
- "core_monogatari_hw_dom": ".dom()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw()]
- "core_monogatari_hw_getplugin": ".getPlugin()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw()]
- "core_monogatari_hw_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw()]
- "core_monogatari_hw_items": ".items()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw()]
- "core_monogatari_hw_loadoptions": ".loadOptions()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw()]
- "core_monogatari_hw_loadparticlesoptions": ".loadParticlesOptions()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw()]
- "core_monogatari_hw_refresh": ".refresh()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw()]
- "core_monogatari_hw_removeeventlistener": ".removeEventListener()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw()]
- "core_monogatari_hw_setonclickhandler": ".setOnClickHandler()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw()]
- "core_monogatari_hw_version": ".version()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw()]
- "core_monogatari_hz_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[HZ]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-058.json

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
