# Node Description Batch 53 of 82

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

- "api_summarize_student_handler": "handler()" | kind=code-symbol | source=api/summarize-student.js:L6 | neighbors=[summarize-student.js]
- "build_web_cleanedhtml": "cleanedHtml" | kind=code-symbol | source=build-web.ts:L37 | neighbors=[build-web.ts]
- "build_web_configpath": "configPath" | kind=code-symbol | source=build-web.ts:L49 | neighbors=[build-web.ts]
- "build_web_html": "html" | kind=code-symbol | source=build-web.ts:L36 | neighbors=[build-web.ts]
- "build_web_include": "include" | kind=code-symbol | source=build-web.ts:L11 | neighbors=[build-web.ts]
- "core_monogatari_8_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[_8]
- "core_monogatari_8_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[_8]
- "core_monogatari_a7": "a7()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js]
- "core_monogatari_aa": "aA()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js]
- "core_monogatari_aq_clear": ".clear()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Aq]
- "core_monogatari_aq_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Aq]
- "core_monogatari_aq_getplugin": ".getPlugin()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Aq]
- "core_monogatari_aq_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Aq]
- "core_monogatari_aq_loadmodeoptions": ".loadModeOptions()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Aq]
- "core_monogatari_aq_loadoptions": ".loadOptions()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Aq]
- "core_monogatari_aq_needsplugin": ".needsPlugin()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Aq]
- "core_monogatari_aq_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Aq]
- "core_monogatari_arrayisarray": "ArrayIsArray()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_arrayprototypeincludes": "ArrayPrototypeIncludes()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_arrayprototypeindexof": "ArrayPrototypeIndexOf()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_arrayprototypemap": "ArrayPrototypeMap()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_arrayprototypepop": "ArrayPrototypePop()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_arrayprototypepush": "ArrayPrototypePush()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_arrayprototypeslice": "ArrayPrototypeSlice()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_as_matchstring": ".matchString()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[AS]
- "core_monogatari_as_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[AS]
- "core_monogatari_as_revert": ".revert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[AS]
- "core_monogatari_at_target": "AT_TARGET()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_au_equals": ".equals()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[aU]
- "core_monogatari_au_formatoffset": ".formatOffset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[aU]
- "core_monogatari_au_iananame": ".ianaName()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[aU]
- "core_monogatari_au_isuniversal": ".isUniversal()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[aU]
- "core_monogatari_au_isvalid": ".isValid()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[aU]
- "core_monogatari_au_name": ".name()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[aU]
- "core_monogatari_au_offset": ".offset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[aU]
- "core_monogatari_au_offsetname": ".offsetName()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[aU]
- "core_monogatari_au_type": ".type()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[aU]
- "core_monogatari_aw_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[aw()]
- "core_monogatari_aw_isenabled": ".isEnabled()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[aw()]
- "core_monogatari_aw_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[aw()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-052.json

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
