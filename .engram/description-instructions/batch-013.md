# Node Description Batch 14 of 82

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

- "commit:repo:github.com/henryba16/Web-novel@2cf430f6b80f913866c21f03668fe287280145a4": "2cf430f Merge pull request #18 from henryba16/henry" | kind=Commit | source=git | neighbors=[main, b4585f2 Merge pull request #19 from hen…, script.js, 5c1019d Merge pull request #17 from hen…, eab66c8 change readme] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@4322a1c0249a932ecfb5c3bbb64edbb2da79786f": "4322a1c more patch" | kind=Commit | source=git | neighbors=[main, 8c81e90 more patch, bdf118a Merge branch 'main' into henry, service-worker.js, eab66c8 change readme] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@4e65e850e568e097d344f696a4ceb2b5c7de356b": "4e65e85 Merge pull request #42 from henryba16/henry" | kind=Commit | source=git | neighbors=[main, 702e3af Update issue templates, service-worker.js, 6f5a60a final update, c209247 Merge pull request #41 from hen…] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@65ba9886a642ec9e0d3f98fd8e1e6125979af492": "65ba988 so many bug" | kind=Commit | source=git | neighbors=[main, e8914f8 partial, script.js, serve.ts, 840e3db Merge branch 'main' into henry] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@6ec78d1e2eab5ab7efb56a026af3dc64437a2de6": "6ec78d1 fix ai" | kind=Commit | source=git | neighbors=[5ebdaf3 implement ai, analyze-ending.js, main, 18d068c fix landing page, 682832b Merge pull request #33 from hen…] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@71bf8388993bb6f22d115fcc1f220ebc9bbff444": "71bf838 Delete .gradio/flagged directory" | kind=Commit | source=git | neighbors=[682832b Merge pull request #33 from hen…, main, b892279 Merge pull request #34 from hen…, da02e6a partial, e377d17 Merge pull request #35 from hen…] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@74bd80181eaa43730c5b7c432eb02dfd70ff8172": "74bd801 Merge pull request #12 from henryba16/vercel/install-vercel-web-analyti…" | kind=Commit | source=git | neighbors=[74125de Merge pull request #11 from hen…, main, ab3eefa Merge pull request #13 from hen…, analytics.js, 92bb88a Install Vercel Web Analytics] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@7ddb35aef74c89253d036a64b15beadd778ace8e": "7ddb35a final ver" | kind=Commit | source=git | neighbors=[main, 85a0971 final ver, a7a0dcd Merge pull request #53 from hen…, cloud-slots.js, a3e0c22 final ver] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@840e3db00d9a8e67d2e2e85cafcb163bd6567407": "840e3db Merge branch 'main' into henry" | kind=Commit | source=git | neighbors=[3478489 12-9 12:57, main, 65ba988 so many bug, script.js, f7ca9ff Fix warning messages and improv…] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@84ebb9cb47ab48a36b3eeaa6b3dc94f65cfca337": "84ebb9c Merge pull request #31 from henryba16/vercel/install-vercel-web-analyti…" | kind=Commit | source=git | neighbors=[432cae5 Merge pull request #30 from hen…, main, 113ac04 Merge branch 'main' into vercel…, 858cd93 Merge pull request #32 from hen…, cc5cbae Install Vercel Web Analytics] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@85a0971d01cc1d9bc248a3d908e93eecc738f05e": "85a0971 final ver" | kind=Commit | source=git | neighbors=[7ddb35a final ver, main, afd1c79 Merge pull request #54 from hen…, df89786 final ver, cloud-hook.js] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@86205499091784741e6b1dc84562b4b58f8774ea": "8620549 Merge pull request #47 from henryba16/henry" | kind=Commit | source=git | neighbors=[main, 58aebe5 Update model in analyze-ending.…, options.js, 9e4c5b1 fix ending fetch, d9483a2 Merge pull request #46 from hen…] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@89bb72f06a505bb5b8e3a985ccf4d193ed83537c": "89bb72f fix bug" | kind=Commit | source=git | neighbors=[0f593dc fix bug, main, eb4d53d fix bug, cloud-hook.js, script.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@9588108701d106e4db241b28ce750e3358c84b51": "9588108 5/9 17:28" | kind=Commit | source=git | neighbors=[695cca2 4/9 11:04, main, ee4e576 finish scene 2, script.js, storage.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@a0cf8de611ece9536e302edf0b22815f3732ebba": "a0cf8de fix ending" | kind=Commit | source=git | neighbors=[9f4c1e3 Merge pull request #29 from hen…, main, bbf00a5 fix ending order, script.js, storage.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@a17569d4b79a9d54d93e3500c39b3a20c1ba26ab": "a17569d fix failback model" | kind=Commit | source=git | neighbors=[7816025 add failback model, _openrouter.js, main, a834a48 Merge branch 'main' into henry, service-worker.js] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@a3de414b7b1e973061c14fc9e2bff32d9003e7f7": "a3de414 3/9 10:04" | kind=Commit | source=git | neighbors=[main, 695cca2 4/9 11:04, script.js, storage.js, f17e4d8 Update script from desktop] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@a3f44d73e0f05e989aae7d91d023a08d8e662ec7": "a3f44d7 Change model to 'google/gemma-4-26b-a4b-it:free'" | kind=Commit | source=git | neighbors=[summarize-student.js, main, 7a27dd1 add failback model, ce6035f Merge pull request #48 from hen…, dfc31df Change model from 'openrouter/f…] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@a7a0dcd6b43b2e04f763e3e7798a498e516f5587": "a7a0dcd Merge pull request #53 from henryba16/henry" | kind=Commit | source=git | neighbors=[172eaff Merge pull request #52 from hen…, 7ddb35a final ver, main, afd1c79 Merge pull request #54 from hen…, cloud-slots.js] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@a834a487ab6c4e2b8b51d2128fbb8373ee2fdd08": "a834a48 Merge branch 'main' into henry" | kind=Commit | source=git | neighbors=[33e6dee Merge pull request #49 from hen…, a17569d fix failback model, main, 68318a1 Merge pull request #50 from hen…, 700e830 final ver] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@afd1c79bf5671780c4c772fa87d77c77f633e6ce": "afd1c79 Merge pull request #54 from henryba16/henry" | kind=Commit | source=git | neighbors=[85a0971 final ver, a7a0dcd Merge pull request #53 from hen…, main, 0fb6229 Merge pull request #55 from hen…, cloud-hook.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@b4585f2fabad71269824de7372b2c400dfb855b5": "b4585f2 Merge pull request #19 from henryba16/son" | kind=Commit | source=git | neighbors=[2cf430f Merge pull request #18 from hen…, 5a56aa3 anbatukam, main, 41a5e44 Merge pull request #20 from hen…, bdf118a Merge branch 'main' into henry] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@bbf00a56aa80f1ddcf200077ceb677e79d26efed": "bbf00a5 fix ending order" | kind=Commit | source=git | neighbors=[a0cf8de fix ending, main, 6ae4c6b done resize code, todo:standari…, script.js, storage.js] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@bedb1b6f2707c31edc13b3977a6da237caf10a4f": "bedb1b6 fix landing/ending page" | kind=Commit | source=git | neighbors=[18d068c fix landing page, analyze-ending.js, chat-ending.js, main, da02e6a partial] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@c209247ef7dd0e02c416690506a5cecf42005e8d": "c209247 Merge pull request #41 from henryba16/henry" | kind=Commit | source=git | neighbors=[7de5d7b Merge pull request #40 from hen…, main, build-web.ts, 4e65e85 Merge pull request #42 from hen…, caab724 add AI usage page] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@caab72474a30c13cea6473d4799be4b63b6780b8": "caab724 add AI usage page" | kind=Commit | source=git | neighbors=[1e6e484 add more research paper, main, build-web.ts, 6f5a60a final update, c209247 Merge pull request #41 from hen…] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@e7a20613f3c3a0dd75cdae83bde39008fa19b293": "e7a2061 bug" | kind=Commit | source=git | neighbors=[a2580a6 partial, main, 9f4c1e3 Merge pull request #29 from hen…, script.js, storage.js] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@eab66c839d9c128f60ff7e87c7ecaa6b06307eec": "eab66c8 change readme" | kind=Commit | source=git | neighbors=[74827fc index patch, main, 2cf430f Merge pull request #18 from hen…, 4322a1c more patch, script.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@ebd2b78b99ce2fb89be6986ad14cdf6a6e543259": "ebd2b78 Merge pull request #16 from henryba16/son" | kind=Commit | source=git | neighbors=[9a6c02a index page, main, 5c1019d Merge pull request #17 from hen…, af91365 Merge branch 'main' into henry, f7ca9ff Fix warning messages and improv…] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@ee4e5769a2185036e9b99a0c075f51fb83e08dcb": "ee4e576 finish scene 2" | kind=Commit | source=git | neighbors=[9588108 5/9 17:28, main, 3262ef8 Merge pull request #10 from hen…, a17ec14 Merge pull request #8 from henr…, script.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@ee648776b2e347577db2314e961211c01c162d3a": "ee64877 patch" | kind=Commit | source=git | neighbors=[8cde0bb patch, main, 74125de Merge pull request #11 from hen…, f6199ad update readme, script.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@f46d27ddf7efa4661fd65fbd140e8ed48b9b6e05": "f46d27d declare scene" | kind=Commit | source=git | neighbors=[0729ecc ok, main, 23f97b6 fix character choice 1, 9ba3350 Merge pull request #25 from hen…, script.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@f97c7a4a5c2fe39ac734a4629d87cf6b2d55a9ce": "f97c7a4 15-9 14:21" | kind=Commit | source=git | neighbors=[49da244 idk too long to know, main, 0729ecc ok, 7d15c2e Merge pull request #24 from hen…, script.js] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@fc0d806e0d5838fa2ac5f9770d80ee2c734050f8": "fc0d806 Merge pull request #15 from henryba16/phuoc" | kind=Commit | source=git | neighbors=[238fa9b Merge pull request #14 from hen…, be36127 characters, main, 3478489 12-9 12:57, f7ca9ff Fix warning messages and improv…] | lang=en
- "core_monogatari_2": "_2()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, T2(), Bk(), mA(), pK()] | lang=en
- "core_monogatari_4": "_4()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, eK(), V(), DH(), QL()] | lang=en
- "core_monogatari_al": "AL()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, L6(), ZX(), .init(), .constructor()] | lang=en
- "core_monogatari_az": "AZ()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, i9(), NQ(), XZ(), J0()] | lang=en
- "core_monogatari_ba": "BA()" | kind=code-symbol | source=engine/core/monogatari.js:L592 | neighbors=[monogatari.js, DA(), O(), W6(), .pick()] | lang=en
- "core_monogatari_be": "BE()" | kind=code-symbol | source=engine/core/monogatari.js:L1 | neighbors=[monogatari.js, _E(), e9(), NE(), yE()] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-013.json

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
