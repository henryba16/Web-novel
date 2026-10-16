# Node Description Batch 70 of 82

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

- "core_monogatari_nk_isvisible": ".isVisible()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_keydown": ".keydown()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_keyup": ".keyup()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_next": ".next()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_off": ".off()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_offset": ".offset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_on": ".on()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_parent": ".parent()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_parents": ".parents()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_prev": ".prev()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_property": ".property()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_remove": ".remove()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_scroll": ".scroll()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_scrollintoview": ".scrollIntoView()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_siblings": ".siblings()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_submit": ".submit()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_text": ".text()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_toggleclass": ".toggleClass()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_trigger": ".trigger()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_nk_width": ".width()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NK]
- "core_monogatari_none": "NONE()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js]
- "core_monogatari_nq_clear": ".clear()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NQ()]
- "core_monogatari_nq_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NQ()]
- "core_monogatari_nq_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NQ()]
- "core_monogatari_nq_isenabled": ".isEnabled()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NQ()]
- "core_monogatari_nq_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NQ()]
- "core_monogatari_nq_loadparticlesoptions": ".loadParticlesOptions()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NQ()]
- "core_monogatari_nq_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NQ()]
- "core_monogatari_ns_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[nS]
- "core_monogatari_ns_matchstring": ".matchString()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[nS]
- "core_monogatari_ns_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[nS]
- "core_monogatari_nu_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NU]
- "core_monogatari_nv": "NV()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js]
- "core_monogatari_nw_addlifetime": ".addLifeTime()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[nw()]
- "core_monogatari_nw_alive": ".alive()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[nw()]
- "core_monogatari_nw_options": ".options()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[nw()]
- "core_monogatari_nw_sourceoptions": ".sourceOptions()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[nw()]
- "core_monogatari_ny_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NY()]
- "core_monogatari_ny_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[NY()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-069.json

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
