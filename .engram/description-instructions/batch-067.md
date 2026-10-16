# Node Description Batch 68 of 82

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

- "core_monogatari_lz_type": ".type()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[LZ]
- "core_monogatari_lz_update": ".update()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[LZ]
- "core_monogatari_m2_debug": ".debug()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2()]
- "core_monogatari_m2_evolve": ".evolve()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2()]
- "core_monogatari_m2_get": ".get()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2()]
- "core_monogatari_m2_getallstate": ".getAllState()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2()]
- "core_monogatari_m2_getimplementation": ".getImplementation()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2()]
- "core_monogatari_m2_getoriginaltag": ".getOriginalTag()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2()]
- "core_monogatari_m2_getstate": ".getState()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2()]
- "core_monogatari_m2_hasstate": ".hasState()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2()]
- "core_monogatari_m2_instances": ".instances()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2()]
- "core_monogatari_m2_isalias": ".isAlias()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2()]
- "core_monogatari_m2_list": ".list()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2()]
- "core_monogatari_m2_log": ".log()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2()]
- "core_monogatari_m2_notifyerror": "._notifyError()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2()]
- "core_monogatari_m2_notifymount": "._notifyMount()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2()]
- "core_monogatari_m2_notifyunmount": "._notifyUnmount()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2()]
- "core_monogatari_m2_setstate": ".setState()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[M2()]
- "core_monogatari_m4_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[m4]
- "core_monogatari_mh_clear": ".clear()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[MH]
- "core_monogatari_mh_count": ".count()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[MH]
- "core_monogatari_mh_countreset": ".countReset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[MH]
- "core_monogatari_mh_currentlevel": ".currentLevel()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[MH]
- "core_monogatari_mh_debug": ".debug()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[MH]
- "core_monogatari_mh_dir": ".dir()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[MH]
- "core_monogatari_mh_dirxml": ".dirxml()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[MH]
- "core_monogatari_mh_format": ".format()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[MH]
- "core_monogatari_mh_group": ".group()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[MH]
- "core_monogatari_mh_info": ".info()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[MH]
- "core_monogatari_mh_isenabled": ".isEnabled()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[MH]
- "core_monogatari_mh_level": ".level()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[MH]
- "core_monogatari_mh_log": ".log()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[MH]
- "core_monogatari_mh_setlevel": ".setLevel()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[MH]
- "core_monogatari_mh_table": ".table()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[MH]
- "core_monogatari_mh_timelog": ".timeLog()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[MH]
- "core_monogatari_mk_addalltocache": ".addAllToCache()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[mK]
- "core_monogatari_mk_audios": ".audios()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[mK]
- "core_monogatari_mk_files": ".files()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[mK]
- "core_monogatari_mk_font": ".font()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[mK]
- "core_monogatari_mk_images": ".images()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[mK]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-067.json

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
