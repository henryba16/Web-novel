# Node Description Batch 1 of 82

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
Write every description in English (en). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "core_monogatari": "monogatari.js" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, $0(), _2(), _4(), $5(), _8]
- "branch:repo:github.com/henryba16/Web-novel#main": "main" | kind=Branch | source=git | neighbors=[02d3b7f Delete BG-11.png, 038a77f Merge pull request #7 from henr…, 0729ecc ok, 07912b9 Merge pull request #22 from hen…, 0acc958 Merge pull request #51 from hen…, 0c1d54b fix sign in-sign up]
- "core_monogatari_l1": "L1" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, h7(), .buildFormatParser(), .constructor(), .DATE_FULL(), .DATE_HUGE()]
- "core_monogatari_v8": "v8" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .init(), .constructor(), v8, .action(), .actions()]
- "js_script": "script.js" | kind=code-symbol | source=js/script.js:L1 | neighbors=[0729ecc ok, 0acc958 Merge pull request #51 from hen…, 18b5bde fix ux, 1a71ccf nah, 1e1641a fix bug, 20141cd add async function, fix scene 2…]
- "core_monogatari_nk": "NK" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, M0(), .addClass(), .after(), .animate(), .append()]
- "core_monogatari_v8_asengine": ".asEngine()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[v8, .alert(), .assertAsync(), .asset(), .assets(), .audioBufferCache()]
- "core_monogatari_v8_history": ".history()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[.didApply(), .didRevert(), .setup(), .didApply(), .didRevert(), .reset()]
- "core_monogatari_k": "k()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, AO(), _E(), FP(), J(), aH()]
- "core_monogatari_h": "H()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, A(), B(), b6(), bubbles(), cancelable()]
- "core_monogatari_p": "p()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, $0(), addEventListener(), B(), B0(), c0()]
- "core_monogatari_v8_global": ".global()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[monogatari.js, CO(), .apply(), .didApply(), .revert(), .setup()]
- "core_monogatari_kk": "KK" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .attributeChangedCallback(), .connectedCallback(), .constructor(), .defaultLocale(), .defaultNumberingSystem()]
- "core_monogatari_join": "join()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, A(), AE(), ArrayPrototypeJoin(), .constructor(), .render()]
- "core_monogatari_s1": "S1" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, Pq, .as(), .constructor(), .days(), .equals()]
- "core_monogatari_v8_setting": ".setting()" | kind=code-symbol | source=engine/core/monogatari.js:L728 | neighbors=[.apply(), .render(), .didApply(), e6(), .didMount(), .render()]
- "core_monogatari_hw": "Hw()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, .addColorManager(), .addConfig(), .addEasing(), .addEffect(), .addEventListener()]
- "core_monogatari_m2": "M2()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .localWeekday(), .localWeekNumber(), .localWeekYear(), .getMinDaysInFirstWeek(), .alias()]
- "core_monogatari_mh_warn": ".warn()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[aw(), bf(), dO(), .fill(), .isValid(), .reportValidity()]
- "core_monogatari_fz_createelement": ".createElement()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[.apply(), aw(), .willApply(), cw(), D(), dO()]
- "core_monogatari_jq": "JQ" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, F(), gf(), IH(), .addImage(), .addTransformation()]
- "core_monogatari_u": "U" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, A(), AO(), aX(), CT(), .open()]
- "core_monogatari_w": "W()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, F(), _getBuffer(), J(), J1(), L0()]
- "core_monogatari_dv_values": ".values()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[DV, .formSelector(), .parseValue(), .warn(), .effects(), .destroy()]
- "core_monogatari_vs": "VS" | kind=code-symbol | source=engine/core/monogatari.js:L1073 | neighbors=[monogatari.js, .action(), .actions(), ._animationLoop(), ._buildActionPatterns(), .checkVoidTags()]
- "core_monogatari_ek": "eK()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, _4(), AK(), .create(), .cleanup(), .constructor()]
- "core_monogatari_lv": "LV" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .add(), .addTo(), .afterRevert(), .angle(), .apply()]
- "core_monogatari_o": "O()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, $0(), A(), AO(), BA(), D()]
- "service_worker": "service-worker.js" | kind=code-symbol | source=service-worker.js:L1 | neighbors=[0acc958 Merge pull request #51 from hen…, 18b5bde fix ux, 1e1641a fix bug, 2a8dcd7 fix bug, 2e82db5 partial fix, 33e6dee Merge pull request #49 from hen…]
- "core_monogatari_ik": "iK" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .apply(), .blocks(), .constructor(), .didApply(), .didRevert()]
- "core_monogatari_us": "US" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[monogatari.js, .afterRevert(), .afterRun(), .apply(), .beforeRevert(), .beforeRun()]
- "core_monogatari_concat": "concat()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, A(), AP(), H(), e6(), F()]
- "core_monogatari_d": "D()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, $0(), .bind(), .constructor(), .onReset(), .onStateUpdate()]
- "core_monogatari_hw_checkversion": ".checkVersion()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[$5(), _9(), a9(), C5(), D5(), F5()]
- "core_monogatari_v": "V()" | kind=code-symbol | source=engine/core/monogatari.js:L10 | neighbors=[monogatari.js, _4(), AK(), D(), .revert(), .remove()]
- "core_monogatari_mh_error": ".error()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CO(), D(), dispatchEvent(), .constructor(), .stop(), .cleanup()]
- "core_monogatari_nw": "nw()" | kind=code-symbol | source=engine/core/monogatari.js:L21 | neighbors=[monogatari.js, C6(), aH(), .time(), .timeEnd(), .addClickHandler()]
- "core_monogatari_qi": "QI" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[monogatari.js, .all(), .apply(), .bind(), .configuration(), .connectedCallback()]
- "js_cloud_client": "cloud-client.js" | kind=code-symbol | source=js/cloud-client.js:L1 | neighbors=[159e150 fix bug, 8d305e5 fix more, ebab758 Merge pull request #43 from hen…, f5055e9 add more function, accessToken(), authFetch()]
- "core_monogatari_lv_add": ".add()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[.willMount(), .willMount(), .checkUnread(), .onStateUpdate(), .apply(), JM()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-000.json

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
