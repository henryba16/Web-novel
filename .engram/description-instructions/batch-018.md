# Node Description Batch 19 of 82

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

- "commit:repo:github.com/henryba16/Web-novel@8631638752b8aeb65b456755d97d86bb7d9dbf19": "8631638 Merge pull request #27 from henryba16/main" | kind=Commit | source=git | neighbors=[23f97b6 fix character choice 1, main, 20141cd add async function, fix scene 2…, e520236 Merge pull request #26 from hen…] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@86b1d2f8dc76ae98fac9b12f29504f7640fa4d47": "86b1d2f finish background" | kind=Commit | source=git | neighbors=[main, 2cf962d final, 4ca2000 Merge pull request #9 from henr…, a17ec14 Merge pull request #8 from henr…] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@88d998f4dc61d0691b5d6e2102a39da57a816511": "88d998f patch" | kind=Commit | source=git | neighbors=[3262ef8 Merge pull request #10 from hen…, main, 8cde0bb patch, script.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@8cde0bb788692700cd811c9d14b4e8d7b6661cbb": "8cde0bb patch" | kind=Commit | source=git | neighbors=[88d998f patch, main, ee64877 patch, ef701d9 patch] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@8d305e5ed4c5e467896af917b92520718c96ca06": "8d305e5 fix more" | kind=Commit | source=git | neighbors=[0c1d54b fix sign in-sign up, main, 159e150 fix bug, cloud-client.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@92bb88a09620073026058379e88ec422ddf4fe5b": "92bb88a Install Vercel Web Analytics" | kind=Commit | source=git | neighbors=[74125de Merge pull request #11 from hen…, main, 74bd801 Merge pull request #12 from hen…, analytics.js] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@9bb7d2c08bc9d080d49d34a65de8c2ef41a68ece": "9bb7d2c Merge pull request #38 from henryba16/henry" | kind=Commit | source=git | neighbors=[179c5fa change readme, 6e0ba7a Merge pull request #37 from hen…, main, 5cab7fb Merge pull request #39 from hen…] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@9e4c5b184999315796c965cbc5c1c67eff3a1215": "9e4c5b1 fix ending fetch" | kind=Commit | source=git | neighbors=[43f02be fix user feedback, main, 8620549 Merge pull request #47 from hen…, options.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@9f4c1e3ddc9410b96bc6fa1da6b23d21ee5bf2c4": "9f4c1e3 Merge pull request #29 from henryba16/main" | kind=Commit | source=git | neighbors=[3f70adb Merge pull request #28 from hen…, main, a0cf8de fix ending, e7a2061 bug] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@a2580a61855f323c6ba52bda8ad772f2038a94fd": "a2580a6 partial" | kind=Commit | source=git | neighbors=[66814b2 working on AI feedback, main, e7a2061 bug, script.js] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@ab3eefa1f7dee453665f125c96ec19483295b548": "ab3eefa Merge pull request #13 from henryba16/henry" | kind=Commit | source=git | neighbors=[74bd801 Merge pull request #12 from hen…, main, e84e69c Add website link to README, f6199ad update readme] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@af91365b0eca7528b1bff090bf4660d32e9435c6": "af91365 Merge branch 'main' into henry" | kind=Commit | source=git | neighbors=[main, 74827fc index patch, e8914f8 partial, ebd2b78 Merge pull request #16 from hen…] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@bdf118abca530c056d0aaf19259299b3aac558b0": "bdf118a Merge branch 'main' into henry" | kind=Commit | source=git | neighbors=[4322a1c more patch, b4585f2 Merge pull request #19 from hen…, main, 41a5e44 Merge pull request #20 from hen…] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@c7d43e867b98d2b4e833df8ddebcb81298c98d7b": "c7d43e8 partial" | kind=Commit | source=git | neighbors=[57faa50 partial, main, 6416546 Merge branch 'main' into henry, script.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@cceca74760afc2191dad4208fe094c72632496fe": "cceca74 Create ending page" | kind=Commit | source=git | neighbors=[main, 3f70adb Merge pull request #28 from hen…, 6416546 Merge branch 'main' into henry, e520236 Merge pull request #26 from hen…] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@da02e6a29c33761e47cfbce89e14fbeafed12fac": "da02e6a partial" | kind=Commit | source=git | neighbors=[71bf838 Delete .gradio/flagged directory, bedb1b6 fix landing/ending page, main, 9605ff5 chore: stop tracking build outp…] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@dfc31df115c8e5174c8d0b2abe819fb0fd09c3c0": "dfc31df Change model from 'openrouter/free' to 'google/gemma-4-26b-a4b-it:free'" | kind=Commit | source=git | neighbors=[summarize-class.js, main, a3f44d7 Change model to 'google/gemma-4…, f5fbdf3 Change model from 'openrouter/f…] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@e84e69c77a350cd3ee8d5a9e8966b53794f35cb6": "e84e69c Add website link to README" | kind=Commit | source=git | neighbors=[ab3eefa Merge pull request #13 from hen…, main, 238fa9b Merge pull request #14 from hen…, 28417c8 Install Vercel Speed Insights w…] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@e8914f82372ae97fa65f844152faf0b973a8749b": "e8914f8 partial" | kind=Commit | source=git | neighbors=[65ba988 so many bug, main, af91365 Merge branch 'main' into henry, script.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@eb4d53d6463a8dca98a448a291d37b0646a9a328": "eb4d53d fix bug" | kind=Commit | source=git | neighbors=[89bb72f fix bug, main, 58b0065 fix teacher bug, d18b715 Merge pull request #44 from hen…] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@ef701d982f2e7c40231264740c2f0bdce5b2eeba": "ef701d9 patch" | kind=Commit | source=git | neighbors=[6768136 patch, main, 8cde0bb patch, script.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@f17e4d8742b98f34b51f3dc2c2da8a33e77ea17b": "f17e4d8 Update script from desktop" | kind=Commit | source=git | neighbors=[3ece3b2 3/9/26, main, a3de414 3/9 10:04, script.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@f5fbdf30425f6f6519069266c0b01fc1fb679b2f": "f5fbdf3 Change model from 'openrouter/free' to 'google/gemma-4-26b-a4b-it:free'" | kind=Commit | source=git | neighbors=[58aebe5 Update model in analyze-ending.…, chat-ending.js, main, dfc31df Change model from 'openrouter/f…] | lang=en
- "core_monogatari_5": "$5()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .addParticleUpdater(), .checkVersion(), D5()] | lang=en
- "core_monogatari_9": "_9()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .addParticleUpdater(), .checkVersion(), YZ()] | lang=en
- "core_monogatari_a9": "a9()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, .addInteractor(), .checkVersion(), l9()] | lang=en
- "core_monogatari_ae": "AE()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, join(), RE(), u9()] | lang=en
- "core_monogatari_ah": "aH()" | kind=code-symbol | source=engine/core/monogatari.js:L16 | neighbors=[monogatari.js, aw(), k(), nw()] | lang=en
- "core_monogatari_ay": "aY" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .load(), .load()] | lang=en
- "core_monogatari_b5": "B5()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, E5(), XK, .interact()] | lang=en
- "core_monogatari_bh": "BH()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, Z1(), R5(), V9()] | lang=en
- "core_monogatari_bx": "BX" | kind=code-symbol | source=engine/core/monogatari.js:L607 | neighbors=[monogatari.js, .constructor(), .handleEvent(), ._$setValue()] | lang=en
- "core_monogatari_by": "bY" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, .constructor(), .load(), .constructor()] | lang=en
- "core_monogatari_ce": "CE()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, .fill(), i9(), NQ()] | lang=en
- "core_monogatari_ci": "cI()" | kind=code-symbol | source=engine/core/monogatari.js:L589 | neighbors=[monogatari.js, join(), pI(), dI()] | lang=en
- "core_monogatari_cs_willrevert": ".willRevert()" | kind=code-symbol | source=engine/core/monogatari.js:L1076 | neighbors=[CS, .callAsync(), .history(), .prepareAction()] | lang=en
- "core_monogatari_cv_tomessage": ".toMessage()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[cV, .constructor(), .constructor(), .constructor()] | lang=en
- "core_monogatari_cz_computeid": ".computeId()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[CZ(), .configuration(), .constructor(), .rename()] | lang=en
- "core_monogatari_d9": "D9()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, EL(), .getRadius(), s9()] | lang=en
- "core_monogatari_dl": "dL()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, H(), .shuffle(), kA()] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-018.json

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
