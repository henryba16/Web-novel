# Node Description Batch 72 of 82

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

- "core_monogatari_pq_resetcache": ".resetCache()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Pq]
- "core_monogatari_pq_type": ".type()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Pq]
- "core_monogatari_promiseprototypecatch": "PromisePrototypeCatch()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_promiseprototypethen": "PromisePrototypeThen()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_promisereject": "PromiseReject()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_promiseresolve": "PromiseResolve()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_promisify": "promisify()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_push": "push()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_pw_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Pw()]
- "core_monogatari_py_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[pY]
- "core_monogatari_py_destroy": ".destroy()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[pY]
- "core_monogatari_py_draw": ".draw()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[pY]
- "core_monogatari_py_drawasync": ".drawAsync()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[pY]
- "core_monogatari_py_fullscreen": "._fullScreen()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[pY]
- "core_monogatari_py_setpointerevents": ".setPointerEvents()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[pY]
- "core_monogatari_py_stop": ".stop()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[pY]
- "core_monogatari_pz_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[PZ()]
- "core_monogatari_q_clear": ".clear()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[$Q()]
- "core_monogatari_q_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[$Q()]
- "core_monogatari_q_getplugin": ".getPlugin()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[$Q()]
- "core_monogatari_q_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[$Q()]
- "core_monogatari_q_loadmodeoptions": ".loadModeOptions()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[$Q()]
- "core_monogatari_q_loadoptions": ".loadOptions()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[$Q()]
- "core_monogatari_q_needsplugin": ".needsPlugin()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[$Q()]
- "core_monogatari_q_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[$Q()]
- "core_monogatari_qd_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L743 | neighbors=[qD]
- "core_monogatari_qd_render": ".render()" | kind=code-symbol | source=engine/core/monogatari.js:L743 | neighbors=[qD]
- "core_monogatari_qi_all": ".all()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI]
- "core_monogatari_qi_bind": ".bind()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI]
- "core_monogatari_qi_configuration": ".configuration()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI]
- "core_monogatari_qi_content": ".content()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI]
- "core_monogatari_qi_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI]
- "core_monogatari_qi_element": ".element()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI]
- "core_monogatari_qi_engine": ".engine()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI]
- "core_monogatari_qi_get": ".get()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI]
- "core_monogatari_qi_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI]
- "core_monogatari_qi_instance": ".instance()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI]
- "core_monogatari_qi_instances": ".instances()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI]
- "core_monogatari_qi_matchstring": ".matchString()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI]
- "core_monogatari_qi_onload": ".onLoad()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[QI]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-071.json

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
