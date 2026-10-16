# Node Description Batch 21 of 82

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

- "core_monogatari_il": "iL()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .fromObject(), .getPossibleOffsets()]
- "core_monogatari_im": "IM()" | kind=code-symbol | source=engine/core/monogatari.js:L590 | neighbors=[monogatari.js, LH(), mQ(), XM()]
- "core_monogatari_io": "iO()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, .history(), .storage(), VP()]
- "core_monogatari_is_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[IS, .last(), .character(), .characters()]
- "core_monogatari_iy": "iY" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .load(), .constructor()]
- "core_monogatari_iz": "IZ()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, TZ(), wH(), JL()]
- "core_monogatari_j1_getweekenddays": ".getWeekendDays()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.getWeekendWeekdays(), J1(), .getWeekSettings(), .isWeekend()]
- "core_monogatari_j1_isenglish": ".isEnglish()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[J1(), k7(), .listingMode(), .relFormatter()]
- "core_monogatari_j1_listingmode": ".listingMode()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[J1(), .isEnglish(), NL(), .formatDateTimeFromString()]
- "core_monogatari_j2": "J2()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, Q6(), sA(), uA()]
- "core_monogatari_j6_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[J6, .createAudioPlayer(), .match(), .mediaPlayer()]
- "core_monogatari_j6_init": ".init()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[J6, .mediaPlayers(), .preference(), .capitalize()]
- "core_monogatari_j6_onload": ".onLoad()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[J6, .mediaPlayer(), .mediaPlayers(), .prepareAction()]
- "core_monogatari_j8": "J8" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .load(), .constructor()]
- "core_monogatari_j9": "J9()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, C9(), .checkVersion(), YZ()]
- "core_monogatari_je": "JE()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, JL(), MZ(), u9()]
- "core_monogatari_jj": "Jj()" | kind=code-symbol | source=engine/core/monogatari.js:L29 | neighbors=[monogatari.js, eH(), TQ(), Z1()]
- "core_monogatari_jr": "JR()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, fR(), jH(), JZ()]
- "core_monogatari_js_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[JS, .addClass(), .data(), .cleanupVideoElement()]
- "core_monogatari_jz": "JZ()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, JR(), jH(), SG()]
- "core_monogatari_kk_connectedcallback": ".connectedCallback()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[KK, ._render(), .didReconnect(), ._setPropAttributes()]
- "core_monogatari_kk_setstate": ".setState()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[KK, .updateCallback(), ._applyMiddleware(), ._hasMiddleware()]
- "core_monogatari_kl": "kL()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, JL(), TZ(), wH()]
- "core_monogatari_ko": "KO()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[monogatari.js, .value(), .preference(), .string()]
- "core_monogatari_kq_particleinit": ".particleInit()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Kq, .createElement(), hK(), .has()]
- "core_monogatari_l1_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, cV, iL(), Z1()]
- "core_monogatari_l1_expandformat": ".expandFormat()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, join(), .parseFormat(), YX()]
- "core_monogatari_l1_fromformatexplain": ".fromFormatExplain()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, .fromOpts(), WX(), .fromStringExplain()]
- "core_monogatari_l1_fromformatparser": ".fromFormatParser()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, .fromOpts(), .explainFromTokens(), Z1()]
- "core_monogatari_l1_getpossibleoffsets": ".getPossibleOffsets()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, iL(), L6(), rU()]
- "core_monogatari_l1_hassame": ".hasSame()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, .endOf(), .setZone(), .startOf()]
- "core_monogatari_l1_plus": ".plus()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, rU(), .fromDurationLike(), V7()]
- "core_monogatari_l5": "L5()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .addInteractor(), .checkVersion(), .draw()]
- "core_monogatari_lk_get": ".get()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[lK, .unwrapValue(), OH, .json()]
- "core_monogatari_lk_remove": ".remove()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[lK, .readJsonResponse(), .unwrapValue(), .delete()]
- "core_monogatari_lk_torequestdata": ".toRequestData()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[lK, .set(), .looksLikeWrapper(), .update()]
- "core_monogatari_lr": "LR()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, fE(), ME(), t9()]
- "core_monogatari_lv_addto": ".addTo()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[GC(), K5(), LV, .update()]
- "core_monogatari_lv_afterrevert": ".afterRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[LV, .global(), .history(), .label()]
- "core_monogatari_lv_div": ".div()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[LV, O(), R(), Y0()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-020.json

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
