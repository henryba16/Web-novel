# Node Description Batch 64 of 82

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

- "core_monogatari_ki_didapply": ".didApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[kI()]
- "core_monogatari_ki_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[kI()]
- "core_monogatari_ki_matchstring": ".matchString()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[kI()]
- "core_monogatari_ki_revert": ".revert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[kI()]
- "core_monogatari_kk_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L613 | neighbors=[KK]
- "core_monogatari_kk_defaultlocale": ".defaultLocale()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[KK]
- "core_monogatari_kk_defaultnumberingsystem": ".defaultNumberingSystem()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[KK]
- "core_monogatari_kk_defaultoutputcalendar": ".defaultOutputCalendar()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[KK]
- "core_monogatari_kk_didmount": ".didMount()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[KK]
- "core_monogatari_kk_dom": ".dom()" | kind=code-symbol | source=engine/core/monogatari.js:L613 | neighbors=[KK]
- "core_monogatari_kk_height": ".height()" | kind=code-symbol | source=engine/core/monogatari.js:L613 | neighbors=[KK]
- "core_monogatari_kk_isconnected": ".isConnected()" | kind=code-symbol | source=engine/core/monogatari.js:L613 | neighbors=[KK]
- "core_monogatari_kk_isfirstmount": ".isFirstMount()" | kind=code-symbol | source=engine/core/monogatari.js:L613 | neighbors=[KK]
- "core_monogatari_kk_isready": ".isReady()" | kind=code-symbol | source=engine/core/monogatari.js:L613 | neighbors=[KK]
- "core_monogatari_kk_now": ".now()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[KK]
- "core_monogatari_kk_observedattributes": ".observedAttributes()" | kind=code-symbol | source=engine/core/monogatari.js:L613 | neighbors=[KK]
- "core_monogatari_kk_off": ".off()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[KK]
- "core_monogatari_kk_on": ".on()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[KK]
- "core_monogatari_kk_once": ".once()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[KK]
- "core_monogatari_kk_onpropsupdate": ".onPropsUpdate()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[KK]
- "core_monogatari_kk_onstateupdate": ".onStateUpdate()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[KK]
- "core_monogatari_kk_props": ".props()" | kind=code-symbol | source=engine/core/monogatari.js:L613 | neighbors=[KK]
- "core_monogatari_kk_query": ".query()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[KK]
- "core_monogatari_kk_queryall": ".queryAll()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[KK]
- "core_monogatari_kk_register": ".register()" | kind=code-symbol | source=engine/core/monogatari.js:L613 | neighbors=[KK]
- "core_monogatari_kk_resetcaches": ".resetCaches()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[KK]
- "core_monogatari_kk_slotcontent": ".slotContent()" | kind=code-symbol | source=engine/core/monogatari.js:L613 | neighbors=[KK]
- "core_monogatari_kk_state": ".state()" | kind=code-symbol | source=engine/core/monogatari.js:L613 | neighbors=[KK]
- "core_monogatari_kk_static": ".static()" | kind=code-symbol | source=engine/core/monogatari.js:L613 | neighbors=[KK]
- "core_monogatari_kk_template": ".template()" | kind=code-symbol | source=engine/core/monogatari.js:L613 | neighbors=[KK]
- "core_monogatari_kk_throwoninvalid": ".throwOnInvalid()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[KK]
- "core_monogatari_kk_twodigitcutoffyear": ".twoDigitCutoffYear()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[KK]
- "core_monogatari_kk_update": ".update()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[KK]
- "core_monogatari_kk_width": ".width()" | kind=code-symbol | source=engine/core/monogatari.js:L613 | neighbors=[KK]
- "core_monogatari_kk_willmount": ".willMount()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[KK]
- "core_monogatari_kk_willunmount": ".willUnmount()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[KK]
- "core_monogatari_kq_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Kq]
- "core_monogatari_kw_handleclickmode": ".handleClickMode()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Kw()]
- "core_monogatari_kw_reset": ".reset()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Kw()]
- "core_monogatari_kz_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[KZ]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-063.json

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
