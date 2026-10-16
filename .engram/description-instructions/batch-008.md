# Node Description Batch 9 of 82

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

- "core_monogatari_co": "CO()" | kind=code-symbol | source=engine/core/monogatari.js:L720 | neighbors=[monogatari.js, .error(), .groupCollapsed(), .components(), .global(), .shouldProceed()]
- "core_monogatari_dk": "dK" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .contains(), .intersects(), I(), .intersects()]
- "core_monogatari_dv_formselector": ".formSelector()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[DV, .fill(), .escapeAttributeValue(), .isValid(), .reportValidity(), .reset()]
- "core_monogatari_dw": "DW" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .handleColor(), .handleRangeColor(), .load(), .parseString()]
- "core_monogatari_e5": "E5()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, B5(), CK(), .getEasing(), .subFrom(), WK()]
- "core_monogatari_e6": "e6()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, concat(), .data(), .replaceWith(), .global(), .setting()]
- "core_monogatari_ed": "ED" | kind=code-symbol | source=engine/core/monogatari.js:L935 | neighbors=[monogatari.js, .constructor(), .didMount(), .onStateUpdate(), .render(), .willUnmount()]
- "core_monogatari_es": "ES" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[monogatari.js, .apply(), .constructor(), .didApply(), .didRevert(), .matchString()]
- "core_monogatari_ew": "ew()" | kind=code-symbol | source=engine/core/monogatari.js:L21 | neighbors=[monogatari.js, AO(), aw(), .constructor(), .load(), iw()]
- "core_monogatari_fu": "fU()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, B8(), .handleColor(), .handleRangeColor(), O(), G8()]
- "core_monogatari_fv": "fV()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .configuration(), .constructor(), .upgrade(), .configuration(), .constructor()]
- "core_monogatari_h6": "H6()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, l7(), V(), .fromObject(), .set(), .fromObject()]
- "core_monogatari_h8_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[h8(), .createElement(), .setProps(), .append(), .prepend(), .global()]
- "core_monogatari_hi_unloadasset": ".unloadAsset()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[HI, .apply(), .getLoader(), .getLoaderType(), .warn(), .delete()]
- "core_monogatari_hi_unloadblock": ".unloadBlock()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[HI, .apply(), .unloadAsset(), .unloadCharacter(), .blocks(), .hasLoader()]
- "core_monogatari_hi_unloadpersistent": ".unloadPersistent()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[HI, .apply(), .isAudioCategory(), .asset(), .clearAudioBufferPersistent(), .removeAudioBufferPersistent()]
- "core_monogatari_hw_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw(), hK(), .item(), M1(), .loadCanvas(), q1()]
- "core_monogatari_ik_getloader": ".getLoader()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[.unloadAsset(), .unloadCategoryAssets(), .unloadCharacter(), iK, .preloadAsset(), .preloadCharacterSprite()]
- "core_monogatari_js": "JS" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[monogatari.js, .apply(), .constructor(), .didApply(), .didRevert(), .matchString()]
- "core_monogatari_k_end": ".end()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[B0(), I0(), k(), T(), W(), Y()]
- "core_monogatari_ky": "KY()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, e6(), LM(), mQ(), rQ(), YP()]
- "core_monogatari_ld": "lD" | kind=code-symbol | source=engine/core/monogatari.js:L1047 | neighbors=[monogatari.js, .bind(), .constructor(), .didMount(), .onStateUpdate(), .render()]
- "core_monogatari_lh": "LH()" | kind=code-symbol | source=engine/core/monogatari.js:L39 | neighbors=[monogatari.js, C6(), DP(), IM(), JM(), TM()]
- "core_monogatari_lk_unwrapvalue": ".unwrapValue()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[lK, .get(), .getAll(), .remove(), .set(), .looksLikeWrapper()]
- "core_monogatari_lq_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[Lq, .createElement(), .setProps(), .append(), .prepend(), .global()]
- "core_monogatari_lq_bind": ".bind()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[Lq, O(), .callAsync(), preventDefault(), stopImmediatePropagation(), stopPropagation()]
- "core_monogatari_lv_sub": ".sub()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[LV, .distanceTo(), .distanceToSq(), O(), R(), UL()]
- "core_monogatari_mh_groupcollapsed": ".groupCollapsed()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CO(), eO(), G(), GO(), MH, N()]
- "core_monogatari_n2": "N2" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .buildFormatParser(), .constructor(), .explainFromTokens(), .invalidReason(), .isValid()]
- "core_monogatari_nd": "ND" | kind=code-symbol | source=engine/core/monogatari.js:L982 | neighbors=[monogatari.js, .constructor(), .didMount(), .init(), .render(), .willMount()]
- "core_monogatari_nk_last": ".last()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.pop(), .constructor(), .constructor(), NK, .displayNvlDialog(), .revert()]
- "core_monogatari_nk_replacewith": ".replaceWith()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[e6(), .constructor(), .render(), NK, p(), sO()]
- "core_monogatari_nk_value": ".value()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.onStateUpdate(), KO(), NK, .didMount(), .desktop(), .didMount()]
- "core_monogatari_ow_update": ".update()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[ow(), A5(), .values(), .getPosition(), .getRadius(), QU()]
- "core_monogatari_p0": "P0()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, destroy(), d0(), .write(), p(), QK()]
- "core_monogatari_preventdefault": "preventDefault()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, .didMount(), .bind(), .bind(), H(), W()]
- "core_monogatari_pz": "PZ()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, join(), _L(), p(), .constructor(), wH()]
- "core_monogatari_qd": "qD" | kind=code-symbol | source=engine/core/monogatari.js:L743 | neighbors=[monogatari.js, ._cleanupTypeWriter(), .constructor(), .onReset(), .render(), .willRollback()]
- "core_monogatari_qg": "QG()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, JL(), CZ(), fH(), _L(), WR()]
- "core_monogatari_r9": "r9()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, J0(), EE(), GE(), OZ(), $Q()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-008.json

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
