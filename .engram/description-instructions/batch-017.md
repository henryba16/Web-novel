# Node Description Batch 18 of 82

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

- "js_cloud_slots_credentials": "credentials()" | kind=code-symbol | source=js/cloud-slots.js:L54 | neighbors=[cloud-slots.js, profileId(), sessionToken(), pullNewer(), pushChanged()] | lang=en
- "js_cloud_slots_pushchanged": "pushChanged()" | kind=code-symbol | source=js/cloud-slots.js:L255 | neighbors=[cloud-slots.js, credentials(), loadPushed(), readLocalSlots(), storePushed()] | lang=en
- "js_cloud_sync_loadoutbox": "loadOutbox()" | kind=code-symbol | source=js/cloud-sync.js:L21 | neighbors=[cloud-sync.js, mergeOnLogin(), pendingCount(), queueRun(), saveFinished()] | lang=en
- "js_cloud_sync_pendingcount": "pendingCount()" | kind=code-symbol | source=js/cloud-sync.js:L39 | neighbors=[cloud-sync.js, mergeOnLogin(), loadOutbox(), queueRun(), saveFinished()] | lang=en
- "js_cloud_sync_resolveprofile": "resolveProfile()" | kind=code-symbol | source=js/cloud-sync.js:L140 | neighbors=[cloud-sync.js, ensureSession(), mergeOnLogin(), profileOf(), saveFinished()] | lang=en
- "js_cloud_sync_uploadone": "uploadOne()" | kind=code-symbol | source=js/cloud-sync.js:L117 | neighbors=[cloud-sync.js, mergeOnLogin(), saveFinished(), fetchCloudRun(), toRow()] | lang=en
- "js_supabase_config": "supabase-config.js" | kind=code-symbol | source=js/supabase-config.js:L1 | neighbors=[19b1ff8 oh man, 5884c88 oh man, 74574f7 oh man, ebab758 Merge pull request #43 from hen…, f5055e9 add more function] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@0f593dc7065a4b940d6c2751b15ad9536b4facb2": "0f593dc fix bug" | kind=Commit | source=git | neighbors=[main, 89bb72f fix bug, cloud-hook.js, 2a8dcd7 fix bug] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@0fb62297a02e77ef45a7b2a3f1260056ef698892": "0fb6229 Merge pull request #55 from henryba16/henry" | kind=Commit | source=git | neighbors=[main, ebcbd82 feat(api): Phase 01 Step A - pr…, afd1c79 Merge pull request #54 from hen…, df89786 final ver] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@113ac047f4eca77bb97b830521c1a3fb661ccdec": "113ac04 Merge branch 'main' into vercel/install-and-configure-vercel-s-kxk9mi" | kind=Commit | source=git | neighbors=[main, 858cd93 Merge pull request #32 from hen…, 84ebb9c Merge pull request #31 from hen…, 8579909 Install and Configure Vercel Sp…] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@159e15004bdfa9138648c653eaeb9e5ca338eb5b": "159e150 fix bug" | kind=Commit | source=git | neighbors=[main, 8fabbd8 fix, cloud-client.js, 8d305e5 fix more] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@179c5fa8569a7596aea2e7ba18120fe85c96ebd9": "179c5fa change readme" | kind=Commit | source=git | neighbors=[main, 5aeaec9 add more research paper, 9bb7d2c Merge pull request #38 from hen…, 18b5bde fix ux] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@1a71ccfe8fb64b8f069141a4d8be6a9da9111c1b": "1a71ccf nah" | kind=Commit | source=git | neighbors=[main, 581f4b9 final characters, script.js, f7ca9ff Fix warning messages and improv…] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@1e6e48417d0791e1e4c44a5f4a9abb8cd503f977": "1e6e484 add more research paper" | kind=Commit | source=git | neighbors=[main, 7de5d7b Merge pull request #40 from hen…, caab724 add AI usage page, 5aeaec9 add more research paper] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@20141cd60d59d3bf392accbd9aa87313c4f38ec7": "20141cd add async function, fix scene 2 show character" | kind=Commit | source=git | neighbors=[main, 2f2468f fix show character choice 2A, script.js, 8631638 Merge pull request #27 from hen…] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@28417c808f243252fc3d2f7e32dd16eb7522b37f": "28417c8 Install Vercel Speed Insights with docs" | kind=Commit | source=git | neighbors=[main, 238fa9b Merge pull request #14 from hen…, speed-insights.js, e84e69c Add website link to README] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@2f2468f34b4177f80133683b6a72dc1836481ee9": "2f2468f fix show character choice 2A" | kind=Commit | source=git | neighbors=[20141cd add async function, fix scene 2…, main, 57faa50 partial, script.js] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@31c7947fcb35f682539073282900b31a8a4ed546": "31c7947 fix bug" | kind=Commit | source=git | neighbors=[main, build-web.ts, 43d4c21 fix bug, b61f3e3 fix bug] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@3262ef86c6af30de4f5b3c34267095d8c9692876": "3262ef8 Merge pull request #10 from henryba16/main" | kind=Commit | source=git | neighbors=[main, 88d998f patch, 4ca2000 Merge pull request #9 from henr…, ee4e576 finish scene 2] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@347848980d9c295fe56e256c6f44a3267024210d": "3478489 12-9 12:57" | kind=Commit | source=git | neighbors=[main, 840e3db Merge branch 'main' into henry, script.js, fc0d806 Merge pull request #15 from hen…] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@3ece3b26020c6cb140aa3845b09cdd626c6c858b": "3ece3b2 3/9/26" | kind=Commit | source=git | neighbors=[038a77f Merge pull request #7 from henr…, main, f17e4d8 Update script from desktop, script.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@4344ba01eabfa4228739cb221fb9e2b3c1e503f6": "4344ba0 fix teacher bug" | kind=Commit | source=git | neighbors=[analyze-ending.js, main, 1e1641a fix bug, 58b0065 fix teacher bug] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@43d4c219adfd64fdc57e0ded134b95371694f1d8": "43d4c21 fix bug" | kind=Commit | source=git | neighbors=[31c7947 fix bug, main, 48c1733 fix bug, cloud-hook.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@49da24499f38b7e706cdd3e17d20c85353bcd20b": "49da244 idk too long to know" | kind=Commit | source=git | neighbors=[main, f97c7a4 15-9 14:21, script.js, 4ef8297 idk too long to know] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@57faa5001b016af78a9ceeb73fb2f42b7a1f295f": "57faa50 partial" | kind=Commit | source=git | neighbors=[2f2468f fix show character choice 2A, main, c7d43e8 partial, script.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@5884c88a8ce6cb4740e5797cc758a1d70c9c4cf1": "5884c88 oh man" | kind=Commit | source=git | neighbors=[main, 19b1ff8 oh man, supabase-config.js, 74574f7 oh man] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@58aebe52dcb74323579c0f232a037fbf3da448c0": "58aebe5 Update model in analyze-ending.js to use Gemma" | kind=Commit | source=git | neighbors=[analyze-ending.js, main, f5fbdf3 Change model from 'openrouter/f…, 8620549 Merge pull request #47 from hen…] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@58b006520f346174c53d2af5b413028f53e5137a": "58b0065 fix teacher bug" | kind=Commit | source=git | neighbors=[analyze-ending.js, main, 4344ba0 fix teacher bug, eb4d53d fix bug] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@5aeaec95f1d25aa34ec377ecc4ee34ec078b427c": "5aeaec9 add more research paper" | kind=Commit | source=git | neighbors=[179c5fa change readme, main, 1e6e484 add more research paper, 5cab7fb Merge pull request #39 from hen…] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@5cab7fb2ec946df411c29af08b639f409e776c99": "5cab7fb Merge pull request #39 from henryba16/henry" | kind=Commit | source=git | neighbors=[5aeaec9 add more research paper, main, 7de5d7b Merge pull request #40 from hen…, 9bb7d2c Merge pull request #38 from hen…] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@6416546e6720da50f2dd501f3d802941d725a4b6": "6416546 Merge branch 'main' into henry" | kind=Commit | source=git | neighbors=[main, 726b890 fix show character scene 2b int…, c7d43e8 partial, cceca74 Create ending page] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@6768136db621f0b044151219d37e8ac5659978d9": "6768136 patch" | kind=Commit | source=git | neighbors=[4ca2000 Merge pull request #9 from henr…, main, ef701d9 patch, script.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@695cca28ab7985897455c35b80992beca44274ac": "695cca2 4/9 11:04" | kind=Commit | source=git | neighbors=[main, 9588108 5/9 17:28, script.js, a3de414 3/9 10:04] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@6f5a60afe3b26d8c76d5110a31e1af1e8bab26b3": "6f5a60a final update" | kind=Commit | source=git | neighbors=[main, 4e65e85 Merge pull request #42 from hen…, service-worker.js, caab724 add AI usage page] | lang=pt
- "commit:repo:github.com/henryba16/Web-novel@726b8908d2209710c81bbbca7df4263d4ceb5cde": "726b890 fix show character scene 2b intro" | kind=Commit | source=git | neighbors=[6416546 Merge branch 'main' into henry, main, f78d9e9 fix most of the things, add end…, script.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@74574f7fb7c4b1788ad22c804bf4d671d1a6245b": "74574f7 oh man" | kind=Commit | source=git | neighbors=[56d5bad fix, main, 5884c88 oh man, supabase-config.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@7de5d7be03a3d3145c8d787f5f727f1bc7ebc8a6": "7de5d7b Merge pull request #40 from henryba16/henry" | kind=Commit | source=git | neighbors=[1e6e484 add more research paper, 5cab7fb Merge pull request #39 from hen…, main, c209247 Merge pull request #41 from hen…] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@7f9b57f8d066d09ea67f0526864e38112004ea41": "7f9b57f Merge branch 'main' into henry" | kind=Commit | source=git | neighbors=[41a5e44 Merge pull request #20 from hen…, main, 6ec5028 fix pwa, 8c81e90 more patch] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@83a4c964000835fd57d6f42f5770b4d2dd0e5d9d": "83a4c96 work in progress" | kind=Commit | source=git | neighbors=[07912b9 Merge pull request #22 from hen…, main, 4ef8297 idk too long to know, script.js] | lang=en
- "commit:repo:github.com/henryba16/Web-novel@858cd93ea1db5cbf5048f6fc7c550160e6468f81": "858cd93 Merge pull request #32 from henryba16/vercel/install-and-configure-verc…" | kind=Commit | source=git | neighbors=[113ac04 Merge branch 'main' into vercel…, 84ebb9c Merge pull request #31 from hen…, main, 682832b Merge pull request #33 from hen…] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\henry\Documents\project\Web-novel\.engram\description-instructions\batch-017.json

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
