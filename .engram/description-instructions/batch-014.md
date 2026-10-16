# Node Description Batch 15 of 82

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

- "core_monogatari_bo": "BO" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[monogatari.js, .constructor(), .onPropsUpdate(), .render(), .willMount()]
- "core_monogatari_c2": "C2()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, bV(), .clone(), .create(), .defaultWeekSettings()]
- "core_monogatari_c5": "C5()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .addShape(), .checkVersion(), Kq, YZ()]
- "core_monogatari_cm": "CM()" | kind=code-symbol | source=engine/core/monogatari.js:L590 | neighbors=[monogatari.js, PM(), rQ(), CP(), TM()]
- "core_monogatari_consume": "consume()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, _getBuffer(), _getString(), shift(), Y0()]
- "core_monogatari_cy": "cY" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .addListeners(), .constructor(), .removeListeners(), .constructor()]
- "core_monogatari_dh": "DH()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .isEnabled(), _4(), .isEnabled(), .isEnabled()]
- "core_monogatari_do": "dO()" | kind=code-symbol | source=engine/core/monogatari.js:L39 | neighbors=[monogatari.js, .createElement(), .warn(), U, .random()]
- "core_monogatari_ds_revert": ".revert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[DS, V(), .global(), .history(), .prepareAction()]
- "core_monogatari_ee": "EE()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, OZ(), $Q(), ZZ(), r9()]
- "core_monogatari_ej": "Ej()" | kind=code-symbol | source=engine/core/monogatari.js:L29 | neighbors=[monogatari.js, C6(), .time(), .timeEnd(), TQ()]
- "core_monogatari_ek_createeffectchain": ".createEffectChain()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[eK(), .effect(), .error(), .warn(), .play()]
- "core_monogatari_el": "EL()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, D9(), E8(), UL(), s9()]
- "core_monogatari_et": "ET()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, BT(), CT(), .nextByte(), TT()]
- "core_monogatari_f8": "F8()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .load(), .show(), .trigger()]
- "core_monogatari_fq_nextbyte": ".nextByte()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[BT(), CT(), ET(), fQ(), TT()]
- "core_monogatari_g9": "g9()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .addShape(), .checkVersion(), HZ, YZ()]
- "core_monogatari_gj": "Gj()" | kind=code-symbol | source=engine/core/monogatari.js:L29 | neighbors=[monogatari.js, eH(), .utc(), TQ(), UH()]
- "core_monogatari_gy": "gY()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, CK(), XH(), yK(), QL()]
- "core_monogatari_h1": "H1()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, G0(), .emit(), unshift(), M0()]
- "core_monogatari_hh": "HH" | kind=code-symbol | source=engine/core/monogatari.js:L749 | neighbors=[monogatari.js, .constructor(), .onStateUpdate(), .render(), .willMount()]
- "core_monogatari_hi_unloadcategoryassets": ".unloadCategoryAssets()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[HI, .apply(), .getLoader(), .getLoaderType(), .warn()]
- "core_monogatari_i9": "i9()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, AZ(), CE(), .addInteractor(), .checkVersion()]
- "core_monogatari_ik_setup": ".setup()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[iK, .registerAlias(), .registerCategory(), .registerLoader(), .has()]
- "core_monogatari_iu": "iU" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .fromObject(), .set(), lA(), .explainFromTokens()]
- "core_monogatari_j1_fromopts": ".fromOpts()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[J1(), .buildFormatParser(), .fromFormat(), .fromFormatExplain(), .fromFormatParser()]
- "core_monogatari_j1_getweeksettings": ".getWeekSettings()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[J1(), .getMinDaysInFirstWeek(), .getStartOfWeek(), .getWeekendDays(), u7()]
- "core_monogatari_j6_shutup": ".shutUp()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[J6, .mediaPlayers(), .removeMediaPlayer(), .willProceed(), .willRollback()]
- "core_monogatari_j7": "j7" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .relFormatter(), .constructor(), .format(), .formatToParts()]
- "core_monogatari_jo_onstateupdate": ".onStateUpdate()" | kind=code-symbol | source=engine/core/monogatari.js:L971 | neighbors=[JO, ._applyEffectAttributes(), .global(), .playAmbient(), .stopAmbient()]
- "core_monogatari_jw_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JW, AK(), aY, q1(), x1()]
- "core_monogatari_k_xor": ".xor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k(), .difference(), concat(), .fromDateTimes(), .merge()]
- "core_monogatari_k9": "K9()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .draw(), .rotate(), .translate(), xV()]
- "core_monogatari_kj": "KJ()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, eH(), .createElement(), .warn(), TQ()]
- "core_monogatari_l1_diff": ".diff()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.count(), .toDuration(), L1, .negate(), .diffNow()]
- "core_monogatari_l1_fromformat": ".fromFormat()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, .fromOpts(), Wf(), Z1(), .fromString()]
- "core_monogatari_l1_minus": ".minus()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, rU(), .fromDurationLike(), .negate(), V7()]
- "core_monogatari_l1_startof": ".startOf()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.count(), L1, .endOf(), .hasSame(), .normalizeUnit()]
- "core_monogatari_l1_tojsdate": ".toJSDate()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[L1, .toBSON(), .formatInterval(), .format(), .formatToParts()]
- "core_monogatari_l6": "L6()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, AL(), .getPossibleOffsets(), .offset(), V7()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-014.json

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
