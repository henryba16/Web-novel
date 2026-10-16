# Node Description Batch 47 of 82

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

- "core_monogatari_rl_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[RL, q1()]
- "core_monogatari_rp": "RP()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, .createElement()]
- "core_monogatari_ry_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[RY, AK()]
- "core_monogatari_s1_equals": ".equals()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1, V()]
- "core_monogatari_s1_fromobject": ".fromObject()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1, H6()]
- "core_monogatari_s1_get": ".get()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1, .normalizeUnit()]
- "core_monogatari_s1_isduration": ".isDuration()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1, .fromDurationLike()]
- "core_monogatari_s1_normalize": ".normalize()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1, rA()]
- "core_monogatari_s1_plus": ".plus()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1, .fromDurationLike()]
- "core_monogatari_s1_rescale": ".rescale()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1, .shiftToAll()]
- "core_monogatari_s1_set": ".set()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1, H6()]
- "core_monogatari_s1_toformat": ".toFormat()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1, .formatDurationFromString()]
- "core_monogatari_s1_tohuman": ".toHuman()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1, .listFormatter()]
- "core_monogatari_s1_tomillis": ".toMillis()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[S1, HX()]
- "core_monogatari_s7": "s7()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, Uk()]
- "core_monogatari_sd_onstateupdate": ".onStateUpdate()" | kind=code-symbol | source=engine/core/monogatari.js:L767 | neighbors=[SD, .forceRender()]
- "core_monogatari_set": "set()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, IG()]
- "core_monogatari_sg": "SG()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, JZ()]
- "core_monogatari_sj": "SJ()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .auto()]
- "core_monogatari_sl": "sL()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .int32()]
- "core_monogatari_sm": "SM()" | kind=code-symbol | source=engine/core/monogatari.js:L590 | neighbors=[monogatari.js, JM()]
- "core_monogatari_sp": "SP()" | kind=code-symbol | source=engine/core/monogatari.js:L590 | neighbors=[monogatari.js, vM()]
- "core_monogatari_sq_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Sq, e1]
- "core_monogatari_srcelement": "srcElement()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, H()]
- "core_monogatari_sw_update": ".update()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[sw(), IH()]
- "core_monogatari_symbol_for_nodejs_util_inspect_custom": "[Symbol.for(\"nodejs.util.inspect.custom\")]()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, O()]
- "core_monogatari_sz_commitvalue": "._commitValue()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[SZ(), .removeAttribute()]
- "core_monogatari_sz_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[SZ(), .fill()]
- "core_monogatari_sz_setvalue": "._$setValue()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[SZ(), nH()]
- "core_monogatari_t0_isdevenvironment": ".isDevEnvironment()" | kind=code-symbol | source=engine/core/monogatari.js:L617 | neighbors=[t0, .pop()]
- "core_monogatari_t0_render": ".render()" | kind=code-symbol | source=engine/core/monogatari.js:L638 | neighbors=[t0, .capitalize()]
- "core_monogatari_t2": "T2()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, _2()]
- "core_monogatari_target": "target()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, H()]
- "core_monogatari_timestamp": "timeStamp()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, H()]
- "core_monogatari_tk": "TK" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor()]
- "core_monogatari_tq_particlecreated": ".particleCreated()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.init(), TQ()]
- "core_monogatari_tq_particledestroyed": ".particleDestroyed()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.destroy(), TQ()]
- "core_monogatari_tq_read": ".read()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[TQ(), .arrayBuffer()]
- "core_monogatari_tq_readremote": ".readRemote()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[TQ(), .blob()]
- "core_monogatari_tx_update": "._update()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[._commitTemplateResult(), TX]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-046.json

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
