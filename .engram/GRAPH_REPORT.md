# Graph Report - .  (2026-10-16)

## Corpus Check
- Large corpus: 113 files · ~1,690,474 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder, or use --no-semantic to run AST-only.

## Summary
- 3246 nodes · 6691 edges · 165 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: calls: 2952 · method: 1917 · contains: 1053 · MODIFIES: 272 · PARENT_OF: 259 · ON_BRANCH: 200 · imports: 32 · imports_from: 5 · cites: 1


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 113 · Candidates: 299
- Excluded: 59 untracked · 93 ignored · 0 sensitive · 130 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `3ed1f4a`
- Compare this hash to `git rev-parse HEAD` before trusting freshness-sensitive graph output.
## God Nodes (most connected - your core abstractions)
1. `L1` - 130 edges
2. `v8` - 119 edges
3. `NK` - 66 edges
4. `k()` - 62 edges
5. `H()` - 57 edges
6. `p()` - 55 edges
7. `KK` - 53 edges
8. `join()` - 51 edges
9. `S1` - 49 edges
10. `Hw()` - 42 edges

## Surprising Connections (you probably didn't know these)
- `0729ecc ok` --ON_BRANCH--> `main`  [EXTRACTED]
  git → git  _Bridges community 8 → community 3_
- `07912b9 Merge pull request #22 from henryba16/henry` --ON_BRANCH--> `main`  [EXTRACTED]
  git → git  _Bridges community 13 → community 3_
- `0acc958 Merge pull request #51 from henryba16/henry` --ON_BRANCH--> `main`  [EXTRACTED]
  git → git  _Bridges community 7 → community 3_
- `0f593dc fix bug` --ON_BRANCH--> `main`  [EXTRACTED]
  git → git  _Bridges community 37 → community 3_
- `0fb6229 Merge pull request #55 from henryba16/henry` --PARENT_OF--> `ebcbd82 feat(api): Phase 01 Step A - privacy pseudonymization layer + D13 log hygiene gate`  [EXTRACTED]
  git → git  _Bridges community 37 → community 7_

## Communities

### Community 0 - "Community 0"
Cohesion: 0.02
Nodes (68): _2(), AC(), B4(), BE(), Bk(), BR(), C1(), CD (+60 more)

### Community 1 - "Community 1"
Cohesion: 0.06
Nodes (71): $0(), A(), A0(), addEventListener(), B(), B0(), bubbles(), C() (+63 more)

### Community 2 - "Community 2"
Cohesion: 0.03
Nodes (4): gk(), L1, O2(), tL()

### Community 3 - "Community 3"
Cohesion: 0.07
Nodes (62): main, 02d3b7f Delete BG-11.png, 038a77f Merge pull request #7 from henryba16/son, 1a89aac background, 1b015b2 Delete BG-02.png, 1d36b20 Delete BG-06A.png, 1e057f1 Delete BG-06B.png, 238fa9b Merge pull request #14 from henryba16/vercel/install-vercel-speed-insights-w59139 (+54 more)

### Community 4 - "Community 4"
Cohesion: 0.05
Nodes (54): A6(), AE(), AP(), ArrayPrototypeJoin(), aX(), bI(), CM(), concat() (+46 more)

### Community 5 - "Community 5"
Cohesion: 0.06
Nodes (1): v8

### Community 6 - "Community 6"
Cohesion: 0.06
Nodes (40): 3ed1f4a feat(ai-eval): Phase 01 Step C+D - telemetry hooks, synthetic eval harness, probes, G16 gate, allFixtures, args, candidates, FIXTURES_DIR, report, ROOT, transcript (+32 more)

### Community 7 - "Community 7"
Cohesion: 0.08
Nodes (41): __ew(), handler(), __tags(), bodyErrorCode(), callOpenRouter(), DEFAULT_FALLBACKS, failureClassForCode(), failureClassForStatus() (+33 more)

### Community 8 - "Community 8"
Cohesion: 0.07
Nodes (35): 0729ecc ok, 1a71ccf nah, 20141cd add async function, fix scene 2 show character, 23f97b6 fix character choice 1, 2cf430f Merge pull request #18 from henryba16/henry, 2f2468f fix show character choice 2A, 49da244 idk too long to know, 4ef8297 idk too long to know (+27 more)

### Community 9 - "Community 9"
Cohesion: 0.04
Nodes (6): b7(), Cq, J4(), LZ, OQ(), Pq

### Community 10 - "Community 10"
Cohesion: 0.05
Nodes (20): _4(), BA(), CA(), DA(), dL(), dO(), GA(), gH (+12 more)

### Community 11 - "Community 11"
Cohesion: 0.05
Nodes (1): KK

### Community 12 - "Community 12"
Cohesion: 0.05
Nodes (1): NK

### Community 13 - "Community 13"
Cohesion: 0.08
Nodes (39): cleanedHtml, configPath, html, include, 07912b9 Merge pull request #22 from henryba16/henry, 0c1d54b fix sign in-sign up, 159e150 fix bug, 19b1ff8 oh man (+31 more)

### Community 14 - "Community 14"
Cohesion: 0.06
Nodes (3): b6(), kI(), US

### Community 15 - "Community 15"
Cohesion: 0.07
Nodes (16): B8(), D9(), E8(), EL(), F9(), FC(), Fw(), G8() (+8 more)

### Community 16 - "Community 16"
Cohesion: 0.11
Nodes (3): BD, FO(), XO()

### Community 17 - "Community 17"
Cohesion: 0.09
Nodes (6): e6(), FZ(), iF(), JX, QO(), RP()

### Community 18 - "Community 18"
Cohesion: 0.07
Nodes (4): C2(), J1(), NJ(), NL()

### Community 19 - "Community 19"
Cohesion: 0.08
Nodes (2): Hw(), S5()

### Community 20 - "Community 20"
Cohesion: 0.06
Nodes (4): JQ, K9(), y9(), yY()

### Community 21 - "Community 21"
Cohesion: 0.08
Nodes (14): AZ(), CE(), EE(), GE(), J0(), Mj(), NQ(), OZ() (+6 more)

### Community 22 - "Community 22"
Cohesion: 0.09
Nodes (6): BX, CX(), DZ(), nH(), TX, vX

### Community 23 - "Community 23"
Cohesion: 0.07
Nodes (3): iO(), k(), VP()

### Community 24 - "Community 24"
Cohesion: 0.12
Nodes (26): 113ac04 Merge branch 'main' into vercel/install-and-configure-vercel-s-kxk9mi, 18d068c fix landing page, 3f70adb Merge pull request #28 from henryba16/henry, 432cae5 Merge pull request #30 from henryba16/henry, 4344ba0 fix teacher bug, 58b0065 fix teacher bug, 5ebdaf3 implement ai, 66814b2 working on AI feedback (+18 more)

### Community 25 - "Community 25"
Cohesion: 0.14
Nodes (2): oS, XF()

### Community 26 - "Community 26"
Cohesion: 0.09
Nodes (2): iK, rf()

### Community 27 - "Community 27"
Cohesion: 0.11
Nodes (2): aD(), VS

### Community 28 - "Community 28"
Cohesion: 0.08
Nodes (7): cV, F2(), m4, PH, q7, W7, Y7

### Community 29 - "Community 29"
Cohesion: 0.10
Nodes (3): DS, LS, wS

### Community 30 - "Community 30"
Cohesion: 0.07
Nodes (1): S1

### Community 31 - "Community 31"
Cohesion: 0.09
Nodes (3): GC(), K5(), LV

### Community 32 - "Community 32"
Cohesion: 0.07
Nodes (1): QI

### Community 33 - "Community 33"
Cohesion: 0.21
Nodes (26): accessToken(), authFetch(), authHeaders(), baseUrl(), clearSession(), CloudError(), config(), configHost() (+18 more)

### Community 34 - "Community 34"
Cohesion: 0.12
Nodes (17): CK(), gY(), HL(), k4(), M1(), N4(), NY(), OC() (+9 more)

### Community 35 - "Community 35"
Cohesion: 0.14
Nodes (4): G4(), nw(), SK(), zC()

### Community 36 - "Community 36"
Cohesion: 0.09
Nodes (1): M2()

### Community 37 - "Community 37"
Cohesion: 0.17
Nodes (24): 0f593dc fix bug, 0fb6229 Merge pull request #55 from henryba16/henry, 2a8dcd7 fix bug, 7ddb35a final ver, 85a0971 final ver, 89bb72f fix bug, a7a0dcd Merge pull request #53 from henryba16/henry, afd1c79 Merge pull request #54 from henryba16/henry (+16 more)

### Community 38 - "Community 38"
Cohesion: 0.08
Nodes (3): ES, FS, nS

### Community 39 - "Community 39"
Cohesion: 0.12
Nodes (3): ND, U8, XD

### Community 40 - "Community 40"
Cohesion: 0.12
Nodes (16): aF(), C6(), cf(), eH(), Ej(), Gj(), HO(), I6() (+8 more)

### Community 41 - "Community 41"
Cohesion: 0.11
Nodes (1): eK()

### Community 42 - "Community 42"
Cohesion: 0.12
Nodes (21): EZ(), fH(), fL(), HC(), HG(), inspect(), IZ(), JL() (+13 more)

### Community 43 - "Community 43"
Cohesion: 0.09
Nodes (4): JD, KO(), OD, uD

### Community 44 - "Community 44"
Cohesion: 0.09
Nodes (6): B5(), dK, E5(), G5(), Qq, XK

### Community 45 - "Community 45"
Cohesion: 0.09
Nodes (6): DW, ew(), fU(), h4(), iw(), tw()

### Community 46 - "Community 46"
Cohesion: 0.09
Nodes (2): h8(), Lq

### Community 47 - "Community 47"
Cohesion: 0.09
Nodes (6): oA(), qX(), rK, Uf(), yf(), YX()

### Community 48 - "Community 48"
Cohesion: 0.15
Nodes (2): lK, OH

### Community 49 - "Community 49"
Cohesion: 0.09
Nodes (1): zD

### Community 50 - "Community 50"
Cohesion: 0.11
Nodes (5): Bq, DH(), Eq, f1(), SH()

### Community 51 - "Community 51"
Cohesion: 0.09
Nodes (3): B2, KZ, XU()

### Community 52 - "Community 52"
Cohesion: 0.10
Nodes (2): CS, MS

### Community 53 - "Community 53"
Cohesion: 0.13
Nodes (1): G6

### Community 54 - "Community 54"
Cohesion: 0.16
Nodes (19): choiceKey(), computeAggregates(), computeFlags(), displayNameFor(), endingsReached(), finishedCount(), finishedRuns(), hasMinimumData() (+11 more)

### Community 55 - "Community 55"
Cohesion: 0.13
Nodes (4): F8(), ML, P1, t0

### Community 56 - "Community 56"
Cohesion: 0.10
Nodes (1): i1()

### Community 57 - "Community 57"
Cohesion: 0.19
Nodes (16): _9(), C5(), C9(), g9(), H5(), h9(), J9(), jT() (+8 more)

### Community 58 - "Community 58"
Cohesion: 0.10
Nodes (6): IH(), QZ, sw(), UZ, VZ, WC()

### Community 59 - "Community 59"
Cohesion: 0.14
Nodes (7): Bj(), bV(), h7(), LJ(), p7(), uV(), z6()

### Community 60 - "Community 60"
Cohesion: 0.16
Nodes (6): bf(), DV, ER(), JF(), Kf(), zO()

### Community 61 - "Community 61"
Cohesion: 0.13
Nodes (2): CZ(), fV()

### Community 62 - "Community 62"
Cohesion: 0.12
Nodes (1): IS

### Community 63 - "Community 63"
Cohesion: 0.18
Nodes (12): g7(), iL(), iU, J2(), lA(), NU, Q6(), uA() (+4 more)

### Community 64 - "Community 64"
Cohesion: 0.20
Nodes (1): HI

### Community 65 - "Community 65"
Cohesion: 0.11
Nodes (1): MH

### Community 66 - "Community 66"
Cohesion: 0.13
Nodes (2): pY, YV()

### Community 67 - "Community 67"
Cohesion: 0.14
Nodes (5): AL(), L6(), rU(), V7(), ZX()

### Community 68 - "Community 68"
Cohesion: 0.11
Nodes (4): i8, PJ(), r8, U2()

### Community 69 - "Community 69"
Cohesion: 0.28
Nodes (16): ensureSession(), fetchCloudRun(), loadOutbox(), markCurrent(), mergeOnLogin(), nowIso(), offlineNow(), pendingCount() (+8 more)

### Community 70 - "Community 70"
Cohesion: 0.12
Nodes (7): AK(), LC(), OL, QC(), RY, sY, x8

### Community 71 - "Community 71"
Cohesion: 0.15
Nodes (2): Qf(), zK()

### Community 72 - "Community 72"
Cohesion: 0.16
Nodes (1): J6

### Community 73 - "Community 73"
Cohesion: 0.12
Nodes (3): Hq, j5(), Uq

### Community 74 - "Community 74"
Cohesion: 0.16
Nodes (1): Xw()

### Community 75 - "Community 75"
Cohesion: 0.26
Nodes (16): addEmailInvite(), claimFloatingRuns(), claimPendingInvites(), createClass(), getClassByCode(), isUniqueViolation(), joinByCode(), leaveClass() (+8 more)

### Community 76 - "Community 76"
Cohesion: 0.13
Nodes (4): Aq, e4(), WK(), YL()

### Community 77 - "Community 77"
Cohesion: 0.13
Nodes (1): Dq

### Community 78 - "Community 78"
Cohesion: 0.13
Nodes (7): FA(), I5(), Kq, MU(), ST(), UU(), vA()

### Community 79 - "Community 79"
Cohesion: 0.16
Nodes (6): Hf(), N2, Wf(), WO(), WX(), zf()

### Community 80 - "Community 80"
Cohesion: 0.13
Nodes (1): JU

### Community 81 - "Community 81"
Cohesion: 0.22
Nodes (5): BT(), CT(), ET(), fQ(), Xq

### Community 82 - "Community 82"
Cohesion: 0.13
Nodes (3): bw(), RL, Uw()

### Community 83 - "Community 83"
Cohesion: 0.13
Nodes (4): c7(), CH(), j7, u7()

### Community 85 - "Community 85"
Cohesion: 0.25
Nodes (11): afterLogin(), currentProfile(), ensureProfile(), fetchProfile(), getCachedUser(), getSession(), goToLanding(), landingFor() (+3 more)

### Community 86 - "Community 86"
Cohesion: 0.30
Nodes (13): credentials(), discoverDb(), loadPushed(), ms(), openDb(), profileId(), pullNewer(), pushChanged() (+5 more)

### Community 87 - "Community 87"
Cohesion: 0.23
Nodes (13): 1215825 dam, 179c5fa change readme, 18b5bde fix ux, 1e6e484 add more research paper, 24d591c Merge branch 'main' into henry, 5aeaec9 add more research paper, 5cab7fb Merge pull request #39 from henryba16/henry, 6e0ba7a Merge pull request #37 from henryba16/henry (+5 more)

### Community 88 - "Community 88"
Cohesion: 0.16
Nodes (14): 1e1641a fix bug, 29c7bc4 fix bug, 31c7947 fix bug, 43d4c21 fix bug, 43f02be fix user feedback, 48c1733 fix bug, 58aebe5 Update model in analyze-ending.js to use Gemma, 8620549 Merge pull request #47 from henryba16/henry (+6 more)

### Community 89 - "Community 89"
Cohesion: 0.20
Nodes (12): $5(), a9(), D5(), F5(), i9(), L5(), l9(), M5() (+4 more)

### Community 90 - "Community 90"
Cohesion: 0.15
Nodes (5): aH(), aw(), aY, tY, x1()

### Community 91 - "Community 91"
Cohesion: 0.19
Nodes (5): CO(), d6(), eO(), GO(), tO()

### Community 92 - "Community 92"
Cohesion: 0.14
Nodes (2): lD, ZS

### Community 93 - "Community 93"
Cohesion: 0.15
Nodes (4): df(), FF(), GW, removeEventListener()

### Community 94 - "Community 94"
Cohesion: 0.15
Nodes (2): eY, Kw()

### Community 95 - "Community 95"
Cohesion: 0.24
Nodes (2): pK(), Y6()

### Community 96 - "Community 96"
Cohesion: 0.35
Nodes (12): currentRunId(), ensureRun(), finishRun(), getChoices(), getItem(), logChoice(), mintId(), nowIso() (+4 more)

### Community 97 - "Community 97"
Cohesion: 0.18
Nodes (13): countSites(), DEFAULT_SCOPE, files, findHits(), fixtureProblems, lineOf(), NEGATIVE_FIXTURE, negResult (+5 more)

### Community 98 - "Community 98"
Cohesion: 0.15
Nodes (4): bY, dY, lY, uY

### Community 99 - "Community 99"
Cohesion: 0.15
Nodes (2): SC(), vQ

### Community 100 - "Community 100"
Cohesion: 0.26
Nodes (10): RFC-4180, buildCsv(), choicesText(), csvEscape(), displayNameOf(), downloadCsv(), downloadFilename(), fetchFinishedRuns() (+2 more)

### Community 101 - "Community 101"
Cohesion: 0.24
Nodes (12): ALL_HANDLERS, captureAnalyzePromptSha(), fail(), main(), normalize(), parseArgs(), pass(), REPO_ROOT (+4 more)

### Community 102 - "Community 102"
Cohesion: 0.18
Nodes (7): A5(), BH(), f4(), ow(), QU(), R5(), x4()

### Community 103 - "Community 103"
Cohesion: 0.18
Nodes (2): MF(), SD

### Community 104 - "Community 104"
Cohesion: 0.22
Nodes (1): o4()

### Community 105 - "Community 105"
Cohesion: 0.22
Nodes (4): f7, JK(), K6(), R2()

### Community 106 - "Community 106"
Cohesion: 0.18
Nodes (2): Iq, Sq

### Community 107 - "Community 107"
Cohesion: 0.20
Nodes (1): jV()

### Community 108 - "Community 108"
Cohesion: 0.20
Nodes (1): VV()

### Community 109 - "Community 109"
Cohesion: 0.20
Nodes (7): AO(), gf(), Hj(), k7(), Uj(), Wj(), Yj()

### Community 110 - "Community 110"
Cohesion: 0.20
Nodes (1): aU

### Community 111 - "Community 111"
Cohesion: 0.20
Nodes (3): HX(), rA(), TA()

### Community 112 - "Community 112"
Cohesion: 0.20
Nodes (1): mK

### Community 113 - "Community 113"
Cohesion: 0.24
Nodes (1): zq

### Community 114 - "Community 114"
Cohesion: 0.22
Nodes (1): BS

### Community 115 - "Community 115"
Cohesion: 0.22
Nodes (4): cw(), Q5(), U5(), V5()

### Community 116 - "Community 116"
Cohesion: 0.33
Nodes (1): JO

### Community 117 - "Community 117"
Cohesion: 0.25
Nodes (7): LM(), mQ(), nI(), r6(), sI(), TP(), vU()

### Community 118 - "Community 118"
Cohesion: 0.22
Nodes (2): UO(), VO()

### Community 120 - "Community 120"
Cohesion: 0.25
Nodes (1): AS

### Community 121 - "Community 121"
Cohesion: 0.25
Nodes (6): consume(), format(), _getBuffer(), _getString(), shift(), Ww()

### Community 122 - "Community 122"
Cohesion: 0.25
Nodes (8): d0(), destroy(), N1(), n7(), P0(), QK(), u0(), VK()

### Community 123 - "Community 123"
Cohesion: 0.25
Nodes (1): GZ()

### Community 124 - "Community 124"
Cohesion: 0.25
Nodes (1): hS

### Community 126 - "Community 126"
Cohesion: 0.25
Nodes (1): RD

### Community 127 - "Community 127"
Cohesion: 0.25
Nodes (1): YD

### Community 128 - "Community 128"
Cohesion: 0.29
Nodes (4): MonogatariRPC, win, callbacks, rpc

### Community 129 - "Community 129"
Cohesion: 0.29
Nodes (2): e1, Pw()

### Community 130 - "Community 130"
Cohesion: 0.29
Nodes (2): J8, VW

### Community 131 - "Community 131"
Cohesion: 0.29
Nodes (1): lI()

### Community 132 - "Community 132"
Cohesion: 0.29
Nodes (1): PO()

### Community 133 - "Community 133"
Cohesion: 0.43
Nodes (1): qD

### Community 134 - "Community 134"
Cohesion: 0.33
Nodes (2): cY, w4()

### Community 135 - "Community 135"
Cohesion: 0.33
Nodes (1): ED

### Community 136 - "Community 136"
Cohesion: 0.33
Nodes (2): gq, Yq()

### Community 137 - "Community 137"
Cohesion: 0.33
Nodes (1): JS

### Community 138 - "Community 138"
Cohesion: 0.40
Nodes (1): JW

### Community 139 - "Community 139"
Cohesion: 0.33
Nodes (1): Lw()

### Community 140 - "Community 140"
Cohesion: 0.53
Nodes (4): d(), e(), i(), r()

### Community 141 - "Community 141"
Cohesion: 0.53
Nodes (4): escapeHtml(), renderMarkdown(), stripCJK(), stripMarkdown()

### Community 142 - "Community 142"
Cohesion: 0.40
Nodes (1): BO

### Community 143 - "Community 143"
Cohesion: 0.40
Nodes (2): H6(), l7()

### Community 144 - "Community 144"
Cohesion: 0.40
Nodes (1): HH

### Community 146 - "Community 146"
Cohesion: 0.40
Nodes (2): HZ, N9()

### Community 147 - "Community 147"
Cohesion: 0.40
Nodes (1): MY

### Community 148 - "Community 148"
Cohesion: 0.40
Nodes (1): r1

### Community 149 - "Community 149"
Cohesion: 0.40
Nodes (3): { app, ipcMain, shell, BrowserWindow, Menu }, path, url

### Community 150 - "Community 150"
Cohesion: 0.50
Nodes (1): G2

### Community 151 - "Community 151"
Cohesion: 0.50
Nodes (1): QW

### Community 152 - "Community 152"
Cohesion: 0.50
Nodes (1): iY

### Community 153 - "Community 153"
Cohesion: 0.50
Nodes (2): LO(), vF()

### Community 154 - "Community 154"
Cohesion: 0.50
Nodes (1): pD

### Community 156 - "Community 156"
Cohesion: 0.50
Nodes (1): WV

### Community 157 - "Community 157"
Cohesion: 0.50
Nodes (1): YW

### Community 158 - "Community 158"
Cohesion: 0.67
Nodes (1): _8

### Community 159 - "Community 159"
Cohesion: 0.67
Nodes (1): EX

### Community 160 - "Community 160"
Cohesion: 0.67
Nodes (2): GT(), V9()

### Community 161 - "Community 161"
Cohesion: 0.67
Nodes (1): GX

### Community 162 - "Community 162"
Cohesion: 0.67
Nodes (1): k8

### Community 163 - "Community 163"
Cohesion: 0.67
Nodes (2): kE(), uE()

### Community 164 - "Community 164"
Cohesion: 0.67
Nodes (1): N8

### Community 165 - "Community 165"
Cohesion: 0.67
Nodes (1): OY

### Community 166 - "Community 166"
Cohesion: 0.67
Nodes (1): rw()

### Community 167 - "Community 167"
Cohesion: 0.67
Nodes (1): WU()

### Community 168 - "Community 168"
Cohesion: 0.67
Nodes (2): { build: { appId }}, { notarize }

### Community 169 - "Community 169"
Cohesion: 0.67
Nodes (2): allow, { contextBridge, ipcRenderer }

## Knowledge Gaps
- **64 isolated node(s):** `DEFAULT_FALLBACKS`, `RETRYABLE_STATUS`, `OPENROUTER_MODELS`, `CHANGE_NOTES`, `CHANGE_NOTES_V2` (+59 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 5`** (1 nodes): `v8`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 11`** (1 nodes): `KK`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 12`** (1 nodes): `NK`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 19`** (2 nodes): `Hw()`, `S5()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 25`** (2 nodes): `oS`, `XF()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 26`** (2 nodes): `iK`, `rf()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 27`** (2 nodes): `aD()`, `VS`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 30`** (1 nodes): `S1`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 32`** (1 nodes): `QI`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 36`** (1 nodes): `M2()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 41`** (1 nodes): `eK()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 46`** (2 nodes): `h8()`, `Lq`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 48`** (2 nodes): `lK`, `OH`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 49`** (1 nodes): `zD`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 52`** (2 nodes): `CS`, `MS`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 53`** (1 nodes): `G6`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 56`** (1 nodes): `i1()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 61`** (2 nodes): `CZ()`, `fV()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 62`** (1 nodes): `IS`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 64`** (1 nodes): `HI`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 65`** (1 nodes): `MH`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 66`** (2 nodes): `pY`, `YV()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 71`** (2 nodes): `Qf()`, `zK()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 72`** (1 nodes): `J6`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 74`** (1 nodes): `Xw()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 77`** (1 nodes): `Dq`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 80`** (1 nodes): `JU`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 92`** (2 nodes): `lD`, `ZS`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 94`** (2 nodes): `eY`, `Kw()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 95`** (2 nodes): `pK()`, `Y6()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 99`** (2 nodes): `SC()`, `vQ`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 103`** (2 nodes): `MF()`, `SD`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 104`** (1 nodes): `o4()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 106`** (2 nodes): `Iq`, `Sq`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 107`** (1 nodes): `jV()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 108`** (1 nodes): `VV()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 110`** (1 nodes): `aU`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 112`** (1 nodes): `mK`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 113`** (1 nodes): `zq`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 114`** (1 nodes): `BS`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 116`** (1 nodes): `JO`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 118`** (2 nodes): `UO()`, `VO()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 120`** (1 nodes): `AS`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 123`** (1 nodes): `GZ()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 124`** (1 nodes): `hS`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 126`** (1 nodes): `RD`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 127`** (1 nodes): `YD`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 129`** (2 nodes): `e1`, `Pw()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 130`** (2 nodes): `J8`, `VW`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 131`** (1 nodes): `lI()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 132`** (1 nodes): `PO()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 133`** (1 nodes): `qD`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 134`** (2 nodes): `cY`, `w4()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 135`** (1 nodes): `ED`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 136`** (2 nodes): `gq`, `Yq()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 137`** (1 nodes): `JS`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 138`** (1 nodes): `JW`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 139`** (1 nodes): `Lw()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 142`** (1 nodes): `BO`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 143`** (2 nodes): `H6()`, `l7()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 144`** (1 nodes): `HH`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 146`** (2 nodes): `HZ`, `N9()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 147`** (1 nodes): `MY`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 148`** (1 nodes): `r1`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 150`** (1 nodes): `G2`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 151`** (1 nodes): `QW`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 152`** (1 nodes): `iY`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 153`** (2 nodes): `LO()`, `vF()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 154`** (1 nodes): `pD`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 156`** (1 nodes): `WV`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 157`** (1 nodes): `YW`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 158`** (1 nodes): `_8`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 159`** (1 nodes): `EX`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 160`** (2 nodes): `GT()`, `V9()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 161`** (1 nodes): `GX`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 162`** (1 nodes): `k8`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 163`** (2 nodes): `kE()`, `uE()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 164`** (1 nodes): `N8`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 165`** (1 nodes): `OY`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 166`** (1 nodes): `rw()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 167`** (1 nodes): `WU()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 168`** (2 nodes): `{ build: { appId }}`, `{ notarize }`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 169`** (2 nodes): `allow`, `{ contextBridge, ipcRenderer }`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `L1` connect `Community 2` to `Community 0`, `Community 59`, `Community 79`, `Community 63`, `Community 67`, `Community 47`, `Community 51`, `Community 28`, `Community 18`, `Community 36`, `Community 105`, `Community 84`, `Community 109`?**
  _High betweenness centrality (0.053) - this node is a cross-community bridge._
- **Why does `v8` connect `Community 5` to `Community 0`, `Community 15`, `Community 98`, `Community 16`, `Community 119`, `Community 71`, `Community 103`, `Community 132`, `Community 155`, `Community 62`, `Community 64`, `Community 52`, `Community 91`, `Community 152`, `Community 153`, `Community 46`, `Community 92`, `Community 29`, `Community 25`, `Community 1`, `Community 145`, `Community 38`, `Community 118`, `Community 10`, `Community 72`, `Community 17`, `Community 60`, `Community 104`, `Community 55`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._
- **Why does `NK` connect `Community 12` to `Community 0`, `Community 1`, `Community 25`, `Community 17`, `Community 163`, `Community 104`, `Community 43`, `Community 16`, `Community 117`?**
  _High betweenness centrality (0.027) - this node is a cross-community bridge._
- **What connects `DEFAULT_FALLBACKS`, `RETRYABLE_STATUS`, `OPENROUTER_MODELS` to the rest of the system?**
  _64 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.017311775273558712 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.0629076372817168 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.025444596443228454 - nodes in this community are weakly interconnected._