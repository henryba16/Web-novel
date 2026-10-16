# Node Description Batch 30 of 82

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

- "core_monogatari_jv_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[jV(), .notifications(), .warn()]
- "core_monogatari_jx_setstyle": ".setStyle()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[JX, A6(), join()]
- "core_monogatari_k_after": ".after()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k(), .fromDateTimes(), .fromDurationLike()]
- "core_monogatari_k_before": ".before()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k(), .fromDateTimes(), .fromDurationLike()]
- "core_monogatari_k_count": ".count()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k(), .diff(), .startOf()]
- "core_monogatari_k_difference": ".difference()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k(), concat(), .xor()]
- "core_monogatari_k_invalid": ".invalid()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k(), cV, W7]
- "core_monogatari_k_toduration": ".toDuration()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k(), .length(), .diff()]
- "core_monogatari_k7": "k7()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, Hj(), .isEnglish()]
- "core_monogatari_k8": "k8" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .load()]
- "core_monogatari_ka": "kA()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .sample(), dL()]
- "core_monogatari_kh": "kH()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, hE(), y8()]
- "core_monogatari_kk_disconnectedcallback": ".disconnectedCallback()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[KK, .didUnmount(), .unmount()]
- "core_monogatari_kk_ready": ".ready()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[KK, .displayCenteredDialog(), .displayNvlDialog()]
- "core_monogatari_kk_setpropattributes": "._setPropAttributes()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[KK, .connectedCallback(), .setProps()]
- "core_monogatari_kk_setstyle": ".setStyle()" | kind=code-symbol | source=engine/core/monogatari.js:L613 | neighbors=[KK, A6(), join()]
- "core_monogatari_kv": "kV()" | kind=code-symbol | source=engine/core/monogatari.js:L34 | neighbors=[monogatari.js, rV(), WQ()]
- "core_monogatari_l1_buildformatparser": ".buildFormatParser()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, .fromOpts(), N2]
- "core_monogatari_l1_endof": ".endOf()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, .startOf(), .hasSame()]
- "core_monogatari_l1_fromjsdate": ".fromJSDate()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[KZ, L1, XU()]
- "core_monogatari_l1_invalid": ".invalid()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, cV, Y7]
- "core_monogatari_l1_parseformatforopts": ".parseFormatForOpts()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, join(), qX()]
- "core_monogatari_l1_toformat": ".toFormat()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, .redefaultToEN(), .formatDateTimeFromString()]
- "core_monogatari_l1_tohttp": ".toHTTP()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, .toUTC(), tL()]
- "core_monogatari_l1_toiso": ".toISO()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, K6(), R2()]
- "core_monogatari_l1_toisodate": ".toISODate()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, K6(), R2()]
- "core_monogatari_l1_tosql": ".toSQL()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, .toSQLDate(), .toSQLTime()]
- "core_monogatari_l1_tosqldate": ".toSQLDate()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, .toSQL(), R2()]
- "core_monogatari_l1_tosqltime": ".toSQLTime()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, .toSQL(), tL()]
- "core_monogatari_l1_toutc": ".toUTC()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, .toHTTP(), .setZone()]
- "core_monogatari_l1_utc": ".utc()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Gj(), L1, Yj()]
- "core_monogatari_l7": "l7()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, H6(), .mapUnits()]
- "core_monogatari_l9": "l9()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, a9(), A()]
- "core_monogatari_lk_clear": ".clear()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[lK, .ensureOk(), .delete()]
- "core_monogatari_lk_computeendpoint": ".computeEndpoint()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[lK, .configuration(), .constructor()]
- "core_monogatari_lk_getall": ".getAll()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[lK, .unwrapValue(), .json()]
- "core_monogatari_lk_lookslikewrapper": ".looksLikeWrapper()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[lK, .toRequestData(), .unwrapValue()]
- "core_monogatari_lm": "LM()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, KY(), sI()]
- "core_monogatari_lo": "LO()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[monogatari.js, .deserializeAudioBuffer(), vF()]
- "core_monogatari_lq_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[Lq, .global(), .history()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-029.json

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
