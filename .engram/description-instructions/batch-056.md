# Node Description Batch 57 of 82

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

- "core_monogatari_ek_fadein": ".fadeIn()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[eK()]
- "core_monogatari_ek_fadeout": ".fadeOut()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[eK()]
- "core_monogatari_ek_hasended": ".hasEnded()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[eK()]
- "core_monogatari_ek_ispaused": ".isPaused()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[eK()]
- "core_monogatari_ek_isplaying": ".isPlaying()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[eK()]
- "core_monogatari_ek_loop": ".loop()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[eK()]
- "core_monogatari_ek_output": ".output()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[eK()]
- "core_monogatari_ek_paused": ".paused()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[eK()]
- "core_monogatari_ek_volume": ".volume()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[eK()]
- "core_monogatari_eq_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Eq]
- "core_monogatari_eq_getcenter": ".getCenter()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Eq]
- "core_monogatari_eq_getsidesdata": ".getSidesData()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Eq]
- "core_monogatari_es_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[ES]
- "core_monogatari_es_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[ES]
- "core_monogatari_es_didapply": ".didApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[ES]
- "core_monogatari_es_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[ES]
- "core_monogatari_es_matchstring": ".matchString()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[ES]
- "core_monogatari_ew_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[ew()]
- "core_monogatari_ew_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[ew()]
- "core_monogatari_ex_commitvalue": "._commitValue()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[EX]
- "core_monogatari_ex_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[EX]
- "core_monogatari_ey_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[eY]
- "core_monogatari_ey_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[eY]
- "core_monogatari_f7_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[f7]
- "core_monogatari_f8_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[F8()]
- "core_monogatari_first": "first()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_fk": "fK()" | kind=code-symbol | source=engine/core/monogatari.js:L34 | neighbors=[monogatari.js]
- "core_monogatari_fm": "FM()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js]
- "core_monogatari_fo_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1047 | neighbors=[FO()]
- "core_monogatari_fo_render": ".render()" | kind=code-symbol | source=engine/core/monogatari.js:L1047 | neighbors=[FO()]
- "core_monogatari_fo_show": ".show()" | kind=code-symbol | source=engine/core/monogatari.js:L1047 | neighbors=[FO()]
- "core_monogatari_fq_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[fQ()]
- "core_monogatari_fs_didapply": ".didApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[FS]
- "core_monogatari_fs_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[FS]
- "core_monogatari_fs_matchstring": ".matchString()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[FS]
- "core_monogatari_fs_willapply": ".willApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[FS]
- "core_monogatari_functionprototypecall": "FunctionPrototypeCall()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_functionprototypesymbolhasinstance": "FunctionPrototypeSymbolHasInstance()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_fw_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Fw()]
- "core_monogatari_fw_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Fw()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-056.json

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
