# Node Description Batch 27 of 82

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
For an entity node (any other kind — e.g. a person, place, event, object),
describe what the entity is and its role, grounded in its type, its
relations (neighbors) and the provided citations/evidence — e.g.
"Lady Carfax, a wealthy heiress who disappears en route to Lausanne.".
Ground entity descriptions in the citations/evidence when present; do not
speculate beyond the context, so a node with no supporting context may be
left out of the reply.
Write every description in Portuguese (pt). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "commit:repo:github.com/henryba16/Web-novel@df897869c1aa0165b347a6ef4755606c6fe9a2f7": "df89786 final ver" | kind=Commit | source=git | neighbors=[85a0971 final ver, main, 0fb6229 Merge pull request #55 from hen…]
- "commit:repo:github.com/henryba16/Web-novel@eda220d8fc360e43afc16697c7fcc1657dd1d525": "eda220d Delete BG-08A.png" | kind=Commit | source=git | neighbors=[5871a3c Delete BG-07B.png, main, f44aa90 version 04 - update scenes]
- "commit:repo:github.com/henryba16/Web-novel@ee9c223f94d6d16caf870a081741463917093594": "ee9c223 version 03" | kind=Commit | source=git | neighbors=[2cf962d final, main, 8adf6aa Delete BG-01A.png]
- "commit:repo:github.com/henryba16/Web-novel@f1b7e56b29e29730b9094362e56a46419acc1ef6": "f1b7e56 moreeeeeeee patch" | kind=Commit | source=git | neighbors=[6ec5028 fix pwa, main, 07912b9 Merge pull request #22 from hen…]
- "commit:repo:github.com/henryba16/Web-novel@f44aa9065ef0761abd6ed39efd8a1c225e485ee6": "f44aa90 version 04 - update scenes" | kind=Commit | source=git | neighbors=[eda220d Delete BG-08A.png, main, be36127 characters]
- "commit:repo:github.com/henryba16/Web-novel@f6199adfeccf80a4c73be975aabb215a94bc7ef1": "f6199ad update readme" | kind=Commit | source=git | neighbors=[ee64877 patch, main, ab3eefa Merge pull request #13 from hen…]
- "commit:repo:github.com/henryba16/Web-novel@f901bbeaf54b5ad5c6f224be630c84a1b230c01d": "f901bbe Delete build/web directory" | kind=Commit | source=git | neighbors=[37fa2bf ok, main, 1215825 dam]
- "commit:repo:github.com/henryba16/Web-novel@fc2ae927f00d6b24bfe81b3ad486897baf15dab9": "fc2ae92 Delete BG-05A.png" | kind=Commit | source=git | neighbors=[4262135 Delete BG-04.png, main, 27a0513 Delete BG-05B.png]
- "core_monogatari_8": "_8" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .load()]
- "core_monogatari_a6": "A6()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[monogatari.js, .setStyle(), .setStyle()]
- "core_monogatari_af": "aF()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, A(), C6()]
- "core_monogatari_as_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[AS, join(), .asset()]
- "core_monogatari_aw_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[aw(), q1(), x1()]
- "core_monogatari_ax": "aX()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, U, zw()]
- "core_monogatari_b0": "B0()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, .end(), p()]
- "core_monogatari_b7": "b7()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .offsetName(), .offsetName()]
- "core_monogatari_bf": "bf()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, .warn(), zO()]
- "core_monogatari_bi": "bI()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, m6(), vM()]
- "core_monogatari_bq_isenabled": ".isEnabled()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Bq, DH(), f1()]
- "core_monogatari_br": "BR()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, fR(), IR()]
- "core_monogatari_bv_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[bV(), .setProps(), .append()]
- "core_monogatari_bv_objects": ".objects()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[bV(), .willApply(), .constructor()]
- "core_monogatari_bv_willapply": ".willApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[bV(), .objects(), .createElement()]
- "core_monogatari_bw_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[bw(), GW, RL]
- "core_monogatari_bw_load": ".load()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[bw(), AK(), x1()]
- "core_monogatari_c0": "c0()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, .emit(), p()]
- "core_monogatari_c7": "c7()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .features(), .constructor()]
- "core_monogatari_c9": "C9()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .addInteractor(), J9()]
- "core_monogatari_cf": "cf()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, HO(), pf()]
- "core_monogatari_ch_features": ".features()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CH(), c7(), u7()]
- "core_monogatari_cp": "CP()" | kind=code-symbol | source=engine/core/monogatari.js:L590 | neighbors=[monogatari.js, CM(), DM()]
- "core_monogatari_cq_move": ".move()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Cq, .getRadius(), OQ()]
- "core_monogatari_cs_revert": ".revert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[CS, .history(), .prepareAction()]
- "core_monogatari_cs_willapply": ".willApply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[CS, .callAsync(), .prepareAction()]
- "core_monogatari_cz_configuration": ".configuration()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CZ(), .computeId(), fV()]
- "core_monogatari_cz_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CZ(), .computeId(), fV()]
- "core_monogatari_d_setup": ".setup()" | kind=code-symbol | source=engine/core/monogatari.js:L755 | neighbors=[D(), .addButtonAfter(), .component()]
- "core_monogatari_d0": "d0()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, p(), P0()]
- "core_monogatari_di": "dI()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, cI(), $Z()]
- "core_monogatari_dp": "DP()" | kind=code-symbol | source=engine/core/monogatari.js:L590 | neighbors=[monogatari.js, LH(), PM()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-026.json

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
