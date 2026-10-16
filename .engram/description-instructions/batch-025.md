# Node Description Batch 26 of 82

Engram is running in assistant/skill mode (no API key). You are the host
assistant (Claude Code / Codex / Gemini CLI). Read the prompt below and write
your JSON answer to the answer file.

## Prompt

You are documenting nodes in a knowledge graph.
For each entry below, write ONE concise factual plain-language sentence
describing what it is or does. Use only the provided context.
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

- "commit:repo:github.com/henryba16/Web-novel@1215825a746efdab9d98cb326767aeff8bef3b2a": "1215825 dam" | kind=Commit | source=git | neighbors=[main, 24d591c Merge branch 'main' into henry, f901bbe Delete build/web directory] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@18d068ccd8b99a71feb3846653155dec0999e848": "18d068c fix landing page" | kind=Commit | source=git | neighbors=[main, bedb1b6 fix landing/ending page, 6ec78d1 fix ai] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@1b015b203c8f17f9f4f8fcfa09f16954c0291e9f": "1b015b2 Delete BG-02.png" | kind=Commit | source=git | neighbors=[main, 23998bd Delete BG-03B.png, ce62a67 Delete school_yard.png] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@1d36b20d2d431aeef5f2bfa3b159fafcf55e6588": "1d36b20 Delete BG-06A.png" | kind=Commit | source=git | neighbors=[main, 1e057f1 Delete BG-06B.png, 87671e9 Delete BG-05C.png] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@1e057f1632eb69186422d7e5a8bca708bb9f40ec": "1e057f1 Delete BG-06B.png" | kind=Commit | source=git | neighbors=[1d36b20 Delete BG-06A.png, main, d739131 Delete BG-07A.png] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@23998bd112fd7c15e7995d10949ee751655627e4": "23998bd Delete BG-03B.png" | kind=Commit | source=git | neighbors=[1b015b2 Delete BG-02.png, main, 24a06ff Delete BG-10.png] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@24a06ffff1120d434f9973184f42aa8ffa738676": "24a06ff Delete BG-10.png" | kind=Commit | source=git | neighbors=[23998bd Delete BG-03B.png, main, 24f620f Delete BG-09.png] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@24f620f0f3de229c1b369de8884bc03613019e0a": "24f620f Delete BG-09.png" | kind=Commit | source=git | neighbors=[24a06ff Delete BG-10.png, main, 4b3a731 Delete BG-08B.png] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@27395624f11d4aacfa0c26f0d89c449ecaa6bed9": "2739562 Delete classroom-02.png" | kind=Commit | source=git | neighbors=[02d3b7f Delete BG-11.png, main, caf80e1 Delete classroom-01.png] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@27a0513884eed269b8ec83e5ff1775f9cfb9f86e": "27a0513 Delete BG-05B.png" | kind=Commit | source=git | neighbors=[main, 87671e9 Delete BG-05C.png, fc2ae92 Delete BG-05A.png] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@29c7bc4a9598f6539615d8be1c5b5fe0304ecc96": "29c7bc4 fix bug" | kind=Commit | source=git | neighbors=[1e1641a fix bug, main, b61f3e3 fix bug] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@2cf962d9f621d4eee11af21cfe267c6b43736ebc": "2cf962d final" | kind=Commit | source=git | neighbors=[main, ee9c223 version 03, 86b1d2f finish background] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@3345b2d7f127374831e139a5fe23051de3220aa8": "3345b2d Delete BG-01C.png" | kind=Commit | source=git | neighbors=[main, 9df7ccf Delete .gitignore, 9bca9f7 Delete BG-01B.png] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@37fa2bfd5688a8427f9e090137fef2271767de48": "37fa2bf ok" | kind=Commit | source=git | neighbors=[main, f901bbe Delete build/web directory, 9605ff5 chore: stop tracking build outp…] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@4262135cde4cfbc19ee62281a3ef0057a78d208d": "4262135 Delete BG-04.png" | kind=Commit | source=git | neighbors=[main, fc2ae92 Delete BG-05A.png, 7d47c56 Delete BG-03C.png] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@4b3a7314531acc92a595a691fc4dd8d2268aee43": "4b3a731 Delete BG-08B.png" | kind=Commit | source=git | neighbors=[24f620f Delete BG-09.png, main, 7d47c56 Delete BG-03C.png] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@5484d9b84355a80e3808eeef5315944cf934a2ab": "5484d9b Update issue templates" | kind=Commit | source=git | neighbors=[main, e8b537e Merge pull request #23 from hen…, 87f0031 Update copyright owner in LICEN…] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@56d5bad4baa1669fe0c550089767e2e1182af626": "56d5bad fix" | kind=Commit | source=git | neighbors=[main, 74574f7 oh man, 8fabbd8 fix] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@5871a3cdc18f125749a2d1b90ddcc7a467e80615": "5871a3c Delete BG-07B.png" | kind=Commit | source=git | neighbors=[main, eda220d Delete BG-08A.png, d739131 Delete BG-07A.png] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@5a56aa39b24319186e8dd86ece4a04423eee0c25": "5a56aa3 anbatukam" | kind=Commit | source=git | neighbors=[main, b4585f2 Merge pull request #19 from hen…, 5c1019d Merge pull request #17 from hen…] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@702e3af93ab2931563a7a0244fcaec4d0e448b4f": "702e3af Update issue templates" | kind=Commit | source=git | neighbors=[4e65e85 Merge pull request #42 from hen…, main, 2e82db5 partial fix] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@74ea0cae1efc5b3e04acb47fcd799b487281610e": "74ea0ca final characters update" | kind=Commit | source=git | neighbors=[581f4b9 final characters, main, 815fef9 final characters] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@7d47c5613400652a0f488ec785b47a58383c4791": "7d47c56 Delete BG-03C.png" | kind=Commit | source=git | neighbors=[4b3a731 Delete BG-08B.png, main, 4262135 Delete BG-04.png] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@85799091a6822fa9031445bf655979463037d7de": "8579909 Install and Configure Vercel Speed Insights" | kind=Commit | source=git | neighbors=[432cae5 Merge pull request #30 from hen…, main, 113ac04 Merge branch 'main' into vercel…] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@87671e972461d6f38b6e96dfb95a3cfae2d8aa5a": "87671e9 Delete BG-05C.png" | kind=Commit | source=git | neighbors=[27a0513 Delete BG-05B.png, main, 1d36b20 Delete BG-06A.png] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@87f003158de8129c29f198cdcd295f241fabf717": "87f0031 Update copyright owner in LICENSE file" | kind=Commit | source=git | neighbors=[07912b9 Merge pull request #22 from hen…, main, 5484d9b Update issue templates] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@8adf6aa732ab6e31e29bff35edcece166a4aff93": "8adf6aa Delete BG-01A.png" | kind=Commit | source=git | neighbors=[main, 9bca9f7 Delete BG-01B.png, ee9c223 version 03] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@8c81e908c3c81fd9035354a837f80af19b6d1ad6": "8c81e90 more patch" | kind=Commit | source=git | neighbors=[4322a1c more patch, main, 7f9b57f Merge branch 'main' into henry] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@8fabbd8b101f39d89b87546429f2d4c0c04060d9": "8fabbd8 fix" | kind=Commit | source=git | neighbors=[159e150 fix bug, main, 56d5bad fix] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@9605ff500cc91e6aa1f49d9e545e9b27bf64c9e6": "9605ff5 chore: stop tracking build output" | kind=Commit | source=git | neighbors=[main, 37fa2bf ok, da02e6a partial] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@9a6c02a203bc77a34af87eae1caa1e4adeccb275": "9a6c02a index page" | kind=Commit | source=git | neighbors=[main, ebd2b78 Merge pull request #16 from hen…, f7ca9ff Fix warning messages and improv…] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@9bca9f7591f1562274e6a909768c83edeb493abf": "9bca9f7 Delete BG-01B.png" | kind=Commit | source=git | neighbors=[8adf6aa Delete BG-01A.png, main, 3345b2d Delete BG-01C.png] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@9df7ccfa97221d31dcc7661d387b293ca86715e8": "9df7ccf Delete .gitignore" | kind=Commit | source=git | neighbors=[3345b2d Delete BG-01C.png, main, d8d1acb Delete BG-01D.png] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@b61f3e3481dede577cfc5fe68e0503a5823868ef": "b61f3e3 fix bug" | kind=Commit | source=git | neighbors=[29c7bc4 fix bug, main, 31c7947 fix bug] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@be3612774d1c69e00c5cef8ec5e1b13656dd8725": "be36127 characters" | kind=Commit | source=git | neighbors=[main, fc0d806 Merge pull request #15 from hen…, f44aa90 version 04 - update scenes] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@caf80e127e2a195b2ce58fd7aef9b771f8eb1638": "caf80e1 Delete classroom-01.png" | kind=Commit | source=git | neighbors=[2739562 Delete classroom-02.png, main, ce62a67 Delete school_yard.png] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@cc5cbae8717ac29a6af486e5e4344b12b131c3fa": "cc5cbae Install Vercel Web Analytics" | kind=Commit | source=git | neighbors=[432cae5 Merge pull request #30 from hen…, main, 84ebb9c Merge pull request #31 from hen…] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@ce62a67d48242016b6a8147b2b42ff633df9c114": "ce62a67 Delete school_yard.png" | kind=Commit | source=git | neighbors=[caf80e1 Delete classroom-01.png, main, 1b015b2 Delete BG-02.png] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@d7391315c0ff3d6d4893b98525a9d0069471eee1": "d739131 Delete BG-07A.png" | kind=Commit | source=git | neighbors=[1e057f1 Delete BG-06B.png, main, 5871a3c Delete BG-07B.png] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@d8d1acbdcfcc8e9123007f30b7116ddd2fe5370a": "d8d1acb Delete BG-01D.png" | kind=Commit | source=git | neighbors=[9df7ccf Delete .gitignore, main, 02d3b7f Delete BG-11.png] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-025.json

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
