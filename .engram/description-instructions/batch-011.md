# Node Description Batch 12 of 82

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

- "core_monogatari_ik_preloadblock": ".preloadBlock()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[iK, .apply(), .hasLoader(), .preloadAsset(), .preloadCharacterSprite(), .warn()]
- "core_monogatari_j1_getmindaysinfirstweek": ".getMinDaysInFirstWeek()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.getMinimumDaysInFirstWeek(), J1(), .getWeekSettings(), .weeksInLocalWeekYear(), lA(), M2()]
- "core_monogatari_j6_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[J6, .asset(), .mediaPlayer(), .mediaPlayers(), .preference(), .capitalize()]
- "core_monogatari_j6_createaudioplayer": ".createAudioPlayer()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[J6, .apply(), .parseEffects(), .arrayBuffer(), .audioBufferCache(), .setting()]
- "core_monogatari_jd": "JD" | kind=code-symbol | source=engine/core/monogatari.js:L962 | neighbors=[monogatari.js, .constructor(), .didMount(), .onPropsUpdate(), .onStateUpdate(), .render()]
- "core_monogatari_jh": "jH()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, constructor(), fR(), IG(), JR(), JZ()]
- "core_monogatari_jk": "JK()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .format(), HZ, q7, R2(), .num()]
- "core_monogatari_jw": "JW" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, CH(), .constructor(), .load(), .setResponsive(), .setTheme()]
- "core_monogatari_jw_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[JW, AL(), dY, lY, uY, v8]
- "core_monogatari_jx_render": "._render()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[JX, .createElement(), ._applyMiddleware(), ._hasMiddleware(), .connectedCallback(), .forceRender()]
- "core_monogatari_k_splitby": ".splitBy()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[k(), .divideEqually(), .fromDateTimes(), .as(), .fromDurationLike(), .mapUnits()]
- "core_monogatari_k5": "K5()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .move(), GC(), .addTo(), .mult(), .multTo()]
- "core_monogatari_k6": "K6()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, G2, .toISO(), .toISODate(), .toISOTime(), u7()]
- "core_monogatari_ke": "kE()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, .addShape(), .checkVersion(), JL(), .eq(), uE()]
- "core_monogatari_kk_forcerender": ".forceRender()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[KK, ._render(), .onStateUpdate(), .onStateUpdate(), .onStateUpdate(), .onStateUpdate()]
- "core_monogatari_kk_render": ".render()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[KK, .createElement(), ._applyMiddleware(), ._hasMiddleware(), .hasAttribute(), .replaceWith()]
- "core_monogatari_kk_updatecallback": ".updateCallback()" | kind=code-symbol | source=engine/core/monogatari.js:L615 | neighbors=[KK, .attributeChangedCallback(), .setProps(), .setState(), .didUpdate(), .willUpdate()]
- "core_monogatari_la": "lA()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .fromObject(), .set(), iU, .getMinDaysInFirstWeek(), Z1()]
- "core_monogatari_lq_revert": ".revert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[Lq, .callAsync(), .component(), .global(), .history(), .prepareAction()]
- "core_monogatari_lv_copy": ".copy()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[D(), .init(), GE(), H(), LV, X()]
- "core_monogatari_lw": "Lw()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, .constructor(), .handleColor(), .handleRangeColor(), .load(), .parseString()]
- "core_monogatari_mh_time": ".time()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[eH(), Ej(), MH, nw(), R(), U]
- "core_monogatari_mh_timeend": ".timeEnd()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[eH(), Ej(), MH, nw(), R(), U]
- "core_monogatari_n2_explainfromtokens": ".explainFromTokens()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.fromFormatParser(), N2, Hf(), iU, zf(), WX()]
- "core_monogatari_nh": "nH()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[monogatari.js, ._$setValue(), ._$setValue(), W(), ._$setValue(), ._$setValue()]
- "core_monogatari_nk_prepend": ".prepend()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[D(), .apply(), .apply(), NK, .pop(), .apply()]
- "core_monogatari_nk_removeattribute": ".removeAttribute()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[AO(), .constructor(), ._applyEffectAttributes(), NK, ._commitValue(), vM()]
- "core_monogatari_nw_destroy": ".destroy()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[nw(), .values(), .clearPlugins(), .clearClickHandlers(), .delete(), SK()]
- "core_monogatari_ny": "NY()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, M1(), .constructor(), .load(), q1(), wL()]
- "core_monogatari_oh": "OH" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .contains(), .ensureOk(), .get(), .constructor(), U]
- "core_monogatari_os_revert": ".revert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[oS, .addClass(), .style(), .global(), .history(), .prepareAction()]
- "core_monogatari_pd": "pD" | kind=code-symbol | source=engine/core/monogatari.js:L994 | neighbors=[monogatari.js, .bind(), .constructor(), .render(), .willMount(), .willUnmount()]
- "core_monogatari_pd_bind": ".bind()" | kind=code-symbol | source=engine/core/monogatari.js:L994 | neighbors=[pD, preventDefault(), stopImmediatePropagation(), stopPropagation(), .global(), .registerListener()]
- "core_monogatari_ph": "PH" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), cV, .setZone(), .constructor(), .load()]
- "core_monogatari_pk_arraybuffer": ".arrayBuffer()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[BT(), .createAudioPlayer(), .audio(), pK(), vQ, .read()]
- "core_monogatari_py_initbackground": ".initBackground()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.init(), pY, .init(), VV(), YV(), .loadCanvas()]
- "core_monogatari_q9": "Q9()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .addPlugin(), .addShape(), .checkVersion(), jT(), YZ()]
- "core_monogatari_qk": "QK()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, P0(), .add(), N1(), n7(), p()]
- "core_monogatari_qu": "QU()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, F5(), H(), .update(), .update(), x4()]
- "core_monogatari_rk_formatdatetimefromstring": ".formatDateTimeFromString()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.toFormat(), rK, .listingMode(), oA(), .parseFormat(), tL()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-011.json

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
