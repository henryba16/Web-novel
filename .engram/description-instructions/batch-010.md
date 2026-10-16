# Node Description Batch 11 of 82

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
LANGUAGE: each entry has a `lang=` marker giving the language of its source.
Write that entry's description in EXACTLY that language. Do not translate to
a single common language — match each node's source language individually.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "commit:repo:github.com/henryba16/Web-novel@68318a1f6aba1a83cc8c5bfac21694040f6f63f0": "68318a1 Merge pull request #50 from henryba16/henry" | kind=Commit | source=git | neighbors=[33e6dee Merge pull request #49 from hen…, _openrouter.js, main, 0acc958 Merge pull request #51 from hen…, service-worker.js, a834a48 Merge branch 'main' into henry] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@6ae4c6b6024f33375529df84415f3e4abb912ebc": "6ae4c6b done resize code, todo:standarise the sprites size" | kind=Commit | source=git | neighbors=[main, 432cae5 Merge pull request #30 from hen…, 5ebdaf3 implement ai, script.js, storage.js, bbf00a5 fix ending order] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@6ec502848838540b703302ed83e5b6f77d2b3798": "6ec5028 fix pwa" | kind=Commit | source=git | neighbors=[main, build-web.ts, 42a5545 Merge pull request #21 from hen…, f1b7e56 moreeeeeeee patch, service-worker.js, 7f9b57f Merge branch 'main' into henry] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@74125de800f1b218953c48287925e2cca10629a9": "74125de Merge pull request #11 from henryba16/henry" | kind=Commit | source=git | neighbors=[4ca2000 Merge pull request #9 from henr…, main, 74bd801 Merge pull request #12 from hen…, 92bb88a Install Vercel Web Analytics, script.js, ee64877 patch] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@74827fc1a322dc34556c7efb501c0beece2df8ba": "74827fc index patch" | kind=Commit | source=git | neighbors=[main, 5c1019d Merge pull request #17 from hen…, eab66c8 change readme, script.js, storage.js, af91365 Merge branch 'main' into henry] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@7816025980e9c5e92bbf3a738e79114e7f174d5f": "7816025 add failback model" | kind=Commit | source=git | neighbors=[_openrouter.js, main, 33e6dee Merge pull request #49 from hen…, a17569d fix failback model, service-worker.js, 7a27dd1 add failback model] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@7d15c2eed9906882c18b648dd8d010f4df003973": "7d15c2e Merge pull request #24 from henryba16/henry" | kind=Commit | source=git | neighbors=[main, 581f4b9 final characters, 9ba3350 Merge pull request #25 from hen…, script.js, e8b537e Merge pull request #23 from hen…, f97c7a4 15-9 14:21] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@9ba3350a43cefe05995da80cbfdddb17719b7e43": "9ba3350 Merge pull request #25 from henryba16/henry" | kind=Commit | source=git | neighbors=[7d15c2e Merge pull request #24 from hen…, main, e520236 Merge pull request #26 from hen…, script.js, serve.ts, f46d27d declare scene] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@a3e0c22f94681ad80d68c776885641f01e7873ff": "a3e0c22 final ver" | kind=Commit | source=git | neighbors=[700e830 final ver, main, 172eaff Merge pull request #52 from hen…, 7ddb35a final ver, cloud-auth.js, cloud-sync.js] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@e377d17cc9c4b26b740d742158498983bf18691e": "e377d17 Merge pull request #35 from henryba16/phuoc" | kind=Commit | source=git | neighbors=[71bf838 Delete .gradio/flagged directory, 815fef9 final characters, main, 24d591c Merge branch 'main' into henry, 9150bc7 Merge pull request #36 from hen…, script.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@e520236c3f47e4078fa60ddf0bbb349740fba404": "e520236 Merge pull request #26 from henryba16/henry" | kind=Commit | source=git | neighbors=[23f97b6 fix character choice 1, 9ba3350 Merge pull request #25 from hen…, main, 8631638 Merge pull request #27 from hen…, cceca74 Create ending page, script.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@e8b537eb3d512f9ab335283203b2bf1373545192": "e8b537e Merge pull request #23 from henryba16/henry" | kind=Commit | source=git | neighbors=[4ef8297 idk too long to know, 5484d9b Update issue templates, main, 7d15c2e Merge pull request #24 from hen…, main.js, script.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@f0f54ea6badac39555bdc19e40aec458f7a959c2": "f0f54ea fix many things" | kind=Commit | source=git | neighbors=[24d591c Merge branch 'main' into henry, main, 18b5bde fix ux, 9150bc7 Merge pull request #36 from hen…, options.js, script.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@f78d9e9c74c4b10bdafc36a293de1fee95f5f332": "f78d9e9 fix most of the things, add ending page, still wotking on AI implementa…" | kind=Commit | source=git | neighbors=[726b890 fix show character scene 2b int…, main, build-web.ts, 66814b2 working on AI feedback, script.js, service-worker.js] | lang=en
- "core_monogatari_a0": "A0()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, .emit(), N(), rV(), yK(), R()] | lang=en
- "core_monogatari_bj": "Bj()" | kind=code-symbol | source=engine/core/monogatari.js:L29 | neighbors=[monogatari.js, bV(), eH(), TQ(), uV(), z6()] | lang=en
- "core_monogatari_bq_interact": ".interact()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Bq, f1(), .getPosition(), .getRadius(), SH(), .queryCircle()] | lang=en
- "core_monogatari_cs_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[CS, .addClass(), .data(), .removeClass(), .style(), .match()] | lang=en
- "core_monogatari_cw_move": ".move()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[cw(), e4(), .getRadius(), K5(), Q5(), V5()] | lang=en
- "core_monogatari_dz_commitnode": "._commitNode()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[DZ(), ._$clear(), ._insert(), ._commitTemplateResult(), ._commitText(), ._$setValue()] | lang=en
- "core_monogatari_e8": "E8()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .getMass(), .getPosition(), .getRadius(), EL(), F5()] | lang=en
- "core_monogatari_e9": "e9()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, BE(), .fill(), lT(), xE(), YV()] | lang=en
- "core_monogatari_ek_cleanup": ".cleanup()" | kind=code-symbol | source=engine/core/monogatari.js:L711 | neighbors=[eK(), .error(), .createSourceNode(), .currentTime(), .pause(), .stop()] | lang=en
- "core_monogatari_eo": "eO()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, d6(), .error(), .groupCollapsed(), .components(), .global()] | lang=en
- "core_monogatari_eq": "Eq" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .loadModeOptions(), .constructor(), .getCenter(), .getSidesData(), .load()] | lang=en
- "core_monogatari_fw_getfillcolor": ".getFillColor()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[B8(), Fw(), .particleInit(), .init(), nC(), .drawParticle()] | lang=en
- "core_monogatari_fz_constructor": ".constructor()" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[FZ(), .createElement(), join(), .append(), .removeAttribute(), .replaceWith()] | lang=en
- "core_monogatari_g5": "G5()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, E5(), .addInteractor(), .checkVersion(), XK, .interact()] | lang=en
- "core_monogatari_ge": "GE()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, .copy(), NQ(), XZ(), ZZ(), r9()] | lang=en
- "core_monogatari_go": "GO()" | kind=code-symbol | source=engine/core/monogatari.js:L726 | neighbors=[monogatari.js, .error(), .groupCollapsed(), .components(), H(), .willRollback()] | lang=en
- "core_monogatari_h0": "H0()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, H(), I(), m(), N0(), p()] | lang=en
- "core_monogatari_hi_unloadcharacter": ".unloadCharacter()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[HI, .apply(), .unloadBlock(), .getLoader(), .warn(), .delete()] | lang=en
- "core_monogatari_hl": "HL()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .init(), M1(), XH(), yK(), .init()] | lang=en
- "core_monogatari_hw_item": ".item()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[Hw(), .domItem(), .load(), _L(), Uj(), Y()] | lang=en
- "core_monogatari_hz": "HZ" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, g9(), .constructor(), .draw(), .getSidesCount(), JK()] | lang=en
- "core_monogatari_i0": "I0()" | kind=code-symbol | source=engine/core/monogatari.js:L11 | neighbors=[monogatari.js, G0(), i1(), .end(), p(), M0()] | lang=en
- "core_monogatari_i1_mobile": ".mobile()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[i1(), .values(), .isIpadOS(), .didMount(), .bind(), .init()] | lang=en
- "core_monogatari_ik_apply": ".apply()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[iK, .hasLoader(), .preloadAsset(), .preloadBlock(), .preloadCharacterSprite(), .warn()] | lang=en
- "core_monogatari_ik_getloadertype": ".getLoaderType()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[.isAudioCategory(), .unloadAsset(), .unloadCategoryAssets(), iK, .preloadAsset(), .preload()] | lang=en
- "core_monogatari_ik_hasloader": ".hasLoader()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[.apply(), .unloadBlock(), iK, .apply(), .has(), .preloadBlock()] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-010.json

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
