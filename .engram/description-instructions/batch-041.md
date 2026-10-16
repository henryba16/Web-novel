# Node Description Batch 42 of 82

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

- "core_monogatari_k_intersection": ".intersection()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k(), .fromDateTimes()]
- "core_monogatari_k_isempty": ".isEmpty()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k(), .hasSame()]
- "core_monogatari_k_length": ".length()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k(), .toDuration()]
- "core_monogatari_k_mapendpoints": ".mapEndpoints()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k(), .fromDateTimes()]
- "core_monogatari_k_merge": ".merge()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k(), .xor()]
- "core_monogatari_k_set": ".set()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k(), .fromDateTimes()]
- "core_monogatari_k_splitat": ".splitAt()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k(), .fromDateTimes()]
- "core_monogatari_k_tolocalestring": ".toLocaleString()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k(), .formatInterval()]
- "core_monogatari_k_union": ".union()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k(), .fromDateTimes()]
- "core_monogatari_k2": "K2()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .realZeroToOneExclusive()]
- "core_monogatari_k4": "k4()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, M1()]
- "core_monogatari_kf": "Kf()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .warn()]
- "core_monogatari_kk_attributechangedcallback": ".attributeChangedCallback()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[KK, .updateCallback()]
- "core_monogatari_kk_defaultweeksettings": ".defaultWeekSettings()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[KK, C2()]
- "core_monogatari_kk_defaultzone": ".defaultZone()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[KK, XU()]
- "core_monogatari_kk_didreconnect": ".didReconnect()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[KK, .connectedCallback()]
- "core_monogatari_kk_didunmount": ".didUnmount()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[KK, .disconnectedCallback()]
- "core_monogatari_kk_didupdate": ".didUpdate()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[KK, .updateCallback()]
- "core_monogatari_kk_tag": ".tag()" | kind=code-symbol | source=engine/core/monogatari.js:L613 | neighbors=[KK, .match()]
- "core_monogatari_kk_unmount": ".unmount()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[KK, .disconnectedCallback()]
- "core_monogatari_kk_willupdate": ".willUpdate()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[KK, .updateCallback()]
- "core_monogatari_kq_destroy": ".destroy()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Kq, .delete()]
- "core_monogatari_kq_draw": ".draw()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Kq, I5()]
- "core_monogatari_kq_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Kq, AK()]
- "core_monogatari_kq_particledestroy": ".particleDestroy()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.destroy(), Kq]
- "core_monogatari_kr": "KR()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, zR()]
- "core_monogatari_kw_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Kw(), eY]
- "core_monogatari_kw_externalinteract": ".externalInteract()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Kw(), .update()]
- "core_monogatari_kw_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Kw(), .getInteractors()]
- "core_monogatari_kw_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Kw(), x1()]
- "core_monogatari_kw_particlesinteract": ".particlesInteract()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Kw(), .update()]
- "core_monogatari_l1_diffnow": ".diffNow()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, .diff()]
- "core_monogatari_l1_fromhttp": ".fromHTTP()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, gk()]
- "core_monogatari_l1_frommillis": ".fromMillis()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, XU()]
- "core_monogatari_l1_fromseconds": ".fromSeconds()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, XU()]
- "core_monogatari_l1_fromstring": ".fromString()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, .fromFormat()]
- "core_monogatari_l1_fromstringexplain": ".fromStringExplain()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, .fromFormatExplain()]
- "core_monogatari_l1_isdatetime": ".isDateTime()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[KZ, L1]
- "core_monogatari_l1_isweekend": ".isWeekend()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, .getWeekendDays()]
- "core_monogatari_l1_localweekday": ".localWeekday()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, M2()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-041.json

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
