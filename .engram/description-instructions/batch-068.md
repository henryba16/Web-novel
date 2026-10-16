# Node Description Batch 69 of 82

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

- "core_monogatari_mk_script": ".script()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[mK]
- "core_monogatari_mk_stylesheet": ".stylesheet()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[mK]
- "core_monogatari_ml_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[ML]
- "core_monogatari_mp": "MP()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js]
- "core_monogatari_mq_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[mQ()]
- "core_monogatari_ms_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[MS]
- "core_monogatari_ms_didapply": ".didApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[MS]
- "core_monogatari_ms_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[MS]
- "core_monogatari_ms_matchobject": ".matchObject()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[MS]
- "core_monogatari_ms_willapply": ".willApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[MS]
- "core_monogatari_mw_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[mw()]
- "core_monogatari_mw_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[mw()]
- "core_monogatari_my_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[MY]
- "core_monogatari_my_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[MY]
- "core_monogatari_my_open": ".open()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[MY]
- "core_monogatari_n2_invalidreason": ".invalidReason()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[N2]
- "core_monogatari_n2_isvalid": ".isValid()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[N2]
- "core_monogatari_n8_draw": ".draw()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[N8]
- "core_monogatari_n8_getsidescount": ".getSidesCount()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[N8]
- "core_monogatari_nd_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1071 | neighbors=[ND]
- "core_monogatari_nd_willunmount": ".willUnmount()" | kind=code-symbol | source=engine/core/monogatari.js:L1071 | neighbors=[ND]
- "core_monogatari_nk_after": ".after()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_animate": ".animate()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_before": ".before()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_blur": ".blur()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_change": ".change()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_children": ".children()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_clone": ".clone()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_each": ".each()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_empty": ".empty()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_exists": ".exists()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_fadein": ".fadeIn()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_fadeout": ".fadeOut()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_filter": ".filter()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_first": ".first()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_get": ".get()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_hasclass": ".hasClass()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_height": ".height()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_input": ".input()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-068.json

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
