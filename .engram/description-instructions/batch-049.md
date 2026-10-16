# Node Description Batch 50 of 82

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

- "core_monogatari_wj": "Wj()" | kind=code-symbol | source=engine/core/monogatari.js:L22 | neighbors=[monogatari.js, gf()]
- "core_monogatari_wm": "WM()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, $Z()]
- "core_monogatari_wp": "wP()" | kind=code-symbol | source=engine/core/monogatari.js:L590 | neighbors=[monogatari.js, vM()]
- "core_monogatari_wq": "WQ()" | kind=code-symbol | source=engine/core/monogatari.js:L34 | neighbors=[monogatari.js, kV()]
- "core_monogatari_wr": "WR()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, QG()]
- "core_monogatari_ws_bind": ".bind()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[wS, .registerListener()]
- "core_monogatari_ws_didrevert": ".didRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[wS, .history()]
- "core_monogatari_ws_revert": ".revert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[wS, .history()]
- "core_monogatari_ws_setup": ".setup()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[wS, .history()]
- "core_monogatari_ws_willrevert": ".willRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[wS, .history()]
- "core_monogatari_wv_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[WV, q1()]
- "core_monogatari_xd_render": ".render()" | kind=code-symbol | source=engine/core/monogatari.js:L749 | neighbors=[XD, join()]
- "core_monogatari_xe": "xE()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, e9()]
- "core_monogatari_xj": "Xj()" | kind=code-symbol | source=engine/core/monogatari.js:L22 | neighbors=[monogatari.js, m()]
- "core_monogatari_xm": "XM()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, IM()]
- "core_monogatari_xo_didapply": ".didApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[XO(), .global()]
- "core_monogatari_xo_willproceed": ".willProceed()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[XO(), .global()]
- "core_monogatari_xp": "XP()" | kind=code-symbol | source=engine/core/monogatari.js:L590 | neighbors=[monogatari.js, vM()]
- "core_monogatari_xw_addmanualparticles": ".addManualParticles()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Xw(), .init()]
- "core_monogatari_xw_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Xw(), YW]
- "core_monogatari_xw_push": ".push()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Xw(), .addParticle()]
- "core_monogatari_xw_remove": ".remove()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Xw(), .removeAt()]
- "core_monogatari_xw_setlastzindex": ".setLastZIndex()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.init(), Xw()]
- "core_monogatari_xw_setresizefactor": ".setResizeFactor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.resize(), Xw()]
- "core_monogatari_xy": "xY()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, UL()]
- "core_monogatari_y7_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Y7, .toMessage()]
- "core_monogatari_yc": "YC()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, zL()]
- "core_monogatari_yd_bind": ".bind()" | kind=code-symbol | source=engine/core/monogatari.js:L985 | neighbors=[YD, .registerListener()]
- "core_monogatari_yd_didmount": ".didMount()" | kind=code-symbol | source=engine/core/monogatari.js:L741 | neighbors=[YD, .callAsync()]
- "core_monogatari_yd_onstateupdate": ".onStateUpdate()" | kind=code-symbol | source=engine/core/monogatari.js:L985 | neighbors=[YD, .value()]
- "core_monogatari_yd_willmount": ".willMount()" | kind=code-symbol | source=engine/core/monogatari.js:L741 | neighbors=[YD, .add()]
- "core_monogatari_ye": "yE()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, BE()]
- "core_monogatari_yq_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Yq(), gq]
- "core_monogatari_yr": "YR()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, JL()]
- "core_monogatari_yw_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[YW, q1()]
- "core_monogatari_yy": "yY()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, JQ]
- "core_monogatari_zd_connectedcallback": ".connectedCallback()" | kind=code-symbol | source=engine/core/monogatari.js:L733 | neighbors=[zD, .add()]
- "core_monogatari_ze": "ZE()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, ME()]
- "core_monogatari_zk_suffix": ".suffix()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.render(), zK()]
- "core_monogatari_zl": "zL()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, YC()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-049.json

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
