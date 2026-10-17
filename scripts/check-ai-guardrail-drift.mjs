// scripts/check-ai-guardrail-drift.mjs — guardrail/prompt-version drift check (B3).
//
// Checks:
//   1. GUARDRAIL_BLOCK sha256 == pinned hash.
//   2. The 3 SYNC handlers (chat-ending, summarize-student, summarize-class) import
//      ./_guardrails.js, and NO api/*.js file (except the module) contains an inline
//      copy of the canonical block (normalized comparison).
//   3. analyze-ending: no guardrail import + GUARDRAIL-EXCEPTION marker + its
//      assembled-prompt sha256 (fixed synthetic input) == pinned hash.
//   4. Each handler references a prompt-version constant from _prompts.js, and
//      that version exists in CHANGE_NOTES.
//
// Usage:
//   node scripts/check-ai-guardrail-drift.mjs
//   node scripts/check-ai-guardrail-drift.mjs --scan-dir <dir> --module-dir <dir>
//
// Exit 0 = all green; exit 1 = one or more failures.

import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

// Re-pinned 2026-10-17 (owner directive): the shared GUARDRAIL_BLOCK was
// de-clinicalized — 'Không chẩn đoán tâm lý.' and 'Không gán nhãn tính cách.'
// removed, because the player-facing AI must not use mental-health terms. The
// teacher AI keeps its own clinical guardrails in buildStudentPrompt /
// buildClassPrompt. Evidence: api/_guardrails.js + check-ai-prompt-integrity B8.
const PINNED_GUARDRAIL_SHA256 = 'fb1d9005c402bca26833d6c47919c8bba83cd6d7b2419dece39f6d95f1577324';
// Re-pinned 2026-10-17 (Phase 02 KB expansion): analyze retrieval tags are now
// derived from the real ending/stats/route vocabulary instead of a fixed placeholder
// list, so the assembled grounding snippets (and therefore this sha) changed by
// design. Evidence: phase-02-kb-expansion_NOTE_17-10-26.md (prompt dump + 21/21
// KB probe). Any further change here must be deliberate and recorded the same way.
//
// Re-pinned 2026-10-17 (owner directive): the player-facing analyze prompt was
// de-clinicalized — no psychologist/diagnosis/personality-label wording; the AI is a
// companion that helps the student reflect on their game choices. The assembled
// prompt changed by design. Evidence: api/_prompts.js VERSION_ANALYZE_V2
// (analyze-ending-grounded-2026-10-17.4) + check-ai-prompt-integrity B8 (the
// NGUYEN TẮC AN TOÀN header and the Latin-only rule are still present).
// Re-pinned 2026-10-17 (owner directive): the player-facing prompts were
// restructured as a proper system instruction (VAI TRÒ / NHIỆM VỤ / NGUYÊN TẮC AN
// TOÀN / DỮ LIỆU / ĐỊNH DẠNG ĐẦU RA). The assembled prompt changed by design.
// Evidence: api/_prompts.js VERSION_ANALYZE_V2 (analyze-ending-grounded-2026-10-17.5)
// + check-ai-prompt-integrity B8 (header + Latin-only rule still present).
// Re-pinned 2026-10-17 (owner directive): citation-style fix — the output
// instruction now forbids inline source references (no kb_xxx IDs / source names
// in the text; citations go only in the citations field). Evidence:
// api/_prompts.js VERSION_ANALYZE_V2 (analyze-ending-grounded-2026-10-17.6).
const PINNED_ANALYZE_PROMPT_SHA256 = '51010ce7f6e691be28cba410cb13b837fc43375b4c8d3954c97ec5d5947baa45';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(SCRIPT_DIR, '..');

const SYNC_HANDLERS = ['chat-ending.js', 'summarize-student.js', 'summarize-class.js'];
const VERSION_REF = {
  'analyze-ending.js': 'VERSION_ANALYZE',
  'chat-ending.js': 'VERSION_CHAT',
  'summarize-student.js': 'VERSION_STUDENT',
  'summarize-class.js': 'VERSION_CLASS'
};
const ALL_HANDLERS = Object.keys(VERSION_REF);

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a.startsWith('--scan-dir=')) args.scanDir = a.slice('--scan-dir='.length);
    else if (a === '--scan-dir') { args.scanDir = argv[++i]; }
    else if (a.startsWith('--module-dir=')) args.moduleDir = a.slice('--module-dir='.length);
    else if (a === '--module-dir') { args.moduleDir = argv[++i]; }
  }
  return args;
}

function sha256hex(s) { return crypto.createHash('sha256').update(s, 'utf8').digest('hex'); }
function normalize(s) { return (s || '').replace(/\r\n/g, '\n'); }

function fail(msg) { console.error('FAIL: ' + msg); }
function pass(msg) { console.log('PASS: ' + msg); }

async function captureAnalyzePromptSha() {
  const harnessUrl = pathToFileURL(path.resolve(REPO_ROOT, 'eval', 'lib', 'harness.mjs')).href;
  const harness = await import(harnessUrl);
  const { installFetchStub, invokeHandler, withEnv, buildFlows, loadHandlers, CAPTURE_FIXTURE } = harness;
  const handlers = await loadHandlers(REPO_ROOT);
  const flows = buildFlows(CAPTURE_FIXTURE);
  const flow = flows['analyze-ending'];
  const stub = installFetchStub({ provider: 'stub', ...flow.stubOptions });
  try {
    const result = await withEnv(flow.env, () => invokeHandler(handlers['analyze-ending'], { body: flow.body, headers: flow.headers }));
    if (result.threw) throw new Error('analyze handler threw: ' + result.threw.message);
    if (result.status !== 200) throw new Error('analyze handler status ' + result.status);
    if (!stub.providerCalls || stub.providerCalls.length !== 1) throw new Error('expected 1 provider call, got ' + (stub.providerCalls ? stub.providerCalls.length : 0));
    const prompt = stub.providerCalls[0].body.messages[0].content;
    return sha256hex(prompt);
  } finally {
    stub.restore();
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const scanDir = path.resolve(args.scanDir || path.join(REPO_ROOT, 'api'));
  const moduleDir = path.resolve(args.moduleDir || scanDir);

  const guardedPath = path.join(moduleDir, '_guardrails.js');
  const promptsPath = path.join(moduleDir, '_prompts.js');

  let failures = 0;

  // --- Check 1: GUARDRAIL_BLOCK sha256 == pinned hash ---
  let guardrailModule;
  try {
    guardrailModule = await import(pathToFileURL(guardedPath).href);
  } catch (e) {
    fail('check 1: cannot import _guardrails.js (' + e.message + ')');
    failures += 1;
    guardrailModule = null;
  }
  const block = guardrailModule && (guardrailModule.GUARDRAIL_BLOCK || guardrailModule.default);
  if (block == null) {
    if (!guardrailModule) { /* already counted */ } else { fail('check 1: GUARDRAIL_BLOCK not exported'); failures += 1; }
  } else {
    const sha = sha256hex(block);
    if (sha === PINNED_GUARDRAIL_SHA256) {
      pass('check 1: GUARDRAIL_BLOCK sha256 pinned (' + sha.slice(0, 12) + '...)');
    } else {
      fail('check 1: GUARDRAIL_BLOCK sha256 mismatch — expected ' + PINNED_GUARDRAIL_SHA256 + ', got ' + sha);
      failures += 1;
    }
  }

  const normalizedBlock = block != null ? normalize(block).trim() : null;

  // --- Check 2: SYNC handlers import module + no inline copy anywhere ---
  for (const h of SYNC_HANDLERS) {
    const p = path.join(scanDir, h);
    if (!fs.existsSync(p)) {
      fail('check 2: missing handler ' + h);
      failures += 1;
      continue;
    }
    const text = fs.readFileSync(p, 'utf8');
    const imports = /from\s+['"]\.\/_guardrails\.js['"]/.test(text);
    if (imports) {
      pass('check 2: ' + h + ' imports _guardrails.js');
    } else {
      fail('check 2: ' + h + ' does NOT import _guardrails.js');
      failures += 1;
    }
  }

  // banned inline-copy scan over api/*.js (module exempt)
  if (normalizedBlock) {
    let inlineFound = false;
    for (const name of fs.readdirSync(scanDir)) {
      if (!name.endsWith('.js')) continue;
      if (name === '_guardrails.js') continue;
      const p = path.join(scanDir, name);
      if (!fs.statSync(p).isFile()) continue;
      const text = normalize(fs.readFileSync(p, 'utf8'));
      if (text.includes(normalizedBlock)) {
        inlineFound = true;
        fail('check 2: inline copy of canonical block found in ' + name);
        failures += 1;
      }
    }
    if (!inlineFound) {
      pass('check 2: no inline canonical block copies in ' + scanDir);
    }
  }

  // --- Check 3: analyze-ending exception ---
  const analyzePath = path.join(scanDir, 'analyze-ending.js');
  if (!fs.existsSync(analyzePath)) {
    fail('check 3: missing analyze-ending.js');
    failures += 1;
  } else {
    const text = fs.readFileSync(analyzePath, 'utf8');
    const hasImport = /from\s+['"]\.\/_guardrails\.js['"]/.test(text);
    const hasMarker = text.includes('GUARDRAIL-EXCEPTION');
    if (hasImport) { fail('check 3: analyze-ending.js must NOT import _guardrails.js'); failures += 1; }
    else { pass('check 3: analyze-ending has no _guardrails import'); }
    if (!hasMarker) { fail('check 3: analyze-ending missing GUARDRAIL-EXCEPTION marker'); failures += 1; }
    else { pass('check 3: analyze-ending has GUARDRAIL-EXCEPTION marker'); }

    // assembled-prompt sha
    let currentSha = null;
    try {
      currentSha = await captureAnalyzePromptSha();
    } catch (e) {
      fail('check 3: could not capture analyze assembled prompt (' + e.message + ')');
      failures += 1;
    }
    if (currentSha != null) {
      if (currentSha === PINNED_ANALYZE_PROMPT_SHA256) {
        pass('check 3: analyze assembled-prompt sha pinned (' + currentSha.slice(0, 12) + '...)');
      } else {
        fail('check 3: analyze assembled-prompt sha mismatch — expected ' + PINNED_ANALYZE_PROMPT_SHA256 + ', got ' + currentSha);
        failures += 1;
      }
    }
  }

  // --- Check 4: version references ---
  let promptsModule;
  try {
    promptsModule = await import(pathToFileURL(promptsPath).href);
  } catch (e) {
    fail('check 4: cannot import _prompts.js (' + e.message + ')');
    failures += 1;
    promptsModule = null;
  }
  const noteVersions = new Set();
  if (promptsModule) {
    const notes = Array.isArray(promptsModule.CHANGE_NOTES) ? promptsModule.CHANGE_NOTES : [];
    for (const n of notes) {
      const v = (typeof n === 'string') ? n : (n && n.version);
      if (v) noteVersions.add(v);
    }
  }

  for (const handler of ALL_HANDLERS) {
    const p = path.join(scanDir, handler);
    const constName = VERSION_REF[handler];
    if (!fs.existsSync(p)) {
      fail('check 4: missing handler ' + handler);
      failures += 1;
      continue;
    }
    const text = fs.readFileSync(p, 'utf8');
    if (!text.includes(constName)) {
      fail('check 4: ' + handler + ' does not reference ' + constName);
      failures += 1;
      continue;
    }
    if (!promptsModule) continue;
    const val = promptsModule[constName];
    if (typeof val !== 'string' || !noteVersions.has(val)) {
      fail('check 4: ' + constName + ' value not found in CHANGE_NOTES (' + val + ')');
      failures += 1;
    } else {
      pass('check 4: ' + handler + ' -> ' + constName + ' in change notes');
    }
  }

  if (failures > 0) {
    console.error('GUARDRAIL DRIFT CHECK FAILED: ' + failures + ' problem(s).');
    process.exit(1);
  }
  console.log('GUARDRAIL DRIFT CHECK OK: imports in sync, block hash pinned, inline copies banned, analyze divergence pinned, version refs valid.');
  process.exit(0);
}

main().catch((e) => {
  console.error('UNHANDLED: ' + e.stack);
  process.exit(1);
});
