// scripts/check-ai-format-escape.mjs — Phase 02 G4-esc: citation formatter escape check.
//
// Loads js/ai-format.js in a Node vm with a window shim (no browser), then asserts:
//   1. window.AIFormat.renderCitations is exported (regression: it once was not,
//      which made ending.html throw at runtime).
//   2. escapeHtml escapes the HTML-significant characters.
//   3. renderCitations output is text-only — no raw < > " ' from any input field
//      (ids, titles, source titles, source URLs).
//   4. Robustness: unknown citation ids are omitted; non-array/null inputs return ''.
//   5. Legacy globals (window.escapeHtml) still present for ending.html.
//
// Usage: node scripts/check-ai-format-escape.mjs
// Exit 0 = all green; exit 1 = one or more failures.

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(SCRIPT_DIR, '..');
const FORMAT_PATH = path.join(REPO_ROOT, 'js', 'ai-format.js');

let failures = 0;
function fail(msg) { console.error('FAIL: ' + msg); failures += 1; }
function pass(msg) { console.log('PASS: ' + msg); }
function check(cond, okMsg, failMsg) { if (cond) pass(okMsg); else fail(failMsg); }

// --- 1. vm window-shim load ---
const sandbox = { window: {} };
vm.createContext(sandbox);
try {
  const code = fs.readFileSync(FORMAT_PATH, 'utf8');
  vm.runInContext(code, sandbox, { filename: 'js/ai-format.js' });
  pass('load: js/ai-format.js evaluated in vm window-shim');
} catch (e) {
  fail('load: js/ai-format.js threw in vm window-shim: ' + e.message);
}

const AIFormat = sandbox.window && sandbox.window.AIFormat;
if (!AIFormat) {
  fail('window.AIFormat missing after load');
} else {
  check(typeof AIFormat.renderCitations === 'function',
    'export: window.AIFormat.renderCitations present',
    'export: window.AIFormat.renderCitations missing (ending.html would throw)');
  check(typeof AIFormat.escapeHtml === 'function',
    'export: window.AIFormat.escapeHtml present',
    'export: window.AIFormat.escapeHtml missing');
}

if (!AIFormat || typeof AIFormat.renderCitations !== 'function' || typeof AIFormat.escapeHtml !== 'function') {
  console.error('CITATION ESCAPE CHECK FAILED: ' + failures + ' problem(s).');
  process.exitCode = 1;
} else {
  // --- 2. escapeHtml ---
  const esc = AIFormat.escapeHtml('<img src=x onerror=alert(1)> "q" \'a\' &');
  const escExpected = '&lt;img src=x onerror=alert(1)&gt; &quot;q&quot; &#39;a&#39; &amp;';
  check(esc === escExpected,
    'escapeHtml: escapes < > " \' &',
    'escapeHtml mismatch: got ' + JSON.stringify(esc));

  // --- 3. renderCitations text-only / escaping ---
  const hostile = AIFormat.renderCitations(
    ['<img src=x>'],
    [{
      id: '<img src=x>',
      title: '<script>alert("xss")</script>',
      sourceTitle: '<b>Review</b>',
      sourceUrl: '"><i>https://x</i>'
    }]
  );
  check(!/[<>]/.test(hostile),
    'renderCitations: no raw angle brackets in output',
    'renderCitations leaked raw angle brackets: ' + JSON.stringify(hostile));
  check(!/["']/.test(hostile),
    'renderCitations: no raw quotes in output',
    'renderCitations leaked raw quotes: ' + JSON.stringify(hostile));
  check(hostile.includes('&lt;script&gt;'),
    'renderCitations: script tag escaped as entity text',
    'renderCitations: escaped script tag not found in output: ' + JSON.stringify(hostile));

  const friendly = AIFormat.renderCitations(
    ['kb_bullying_prevention_reviewed'],
    [{
      id: 'kb_bullying_prevention_reviewed',
      title: 'Isolation signs',
      sourceTitle: 'StopBullying.gov',
      sourceUrl: 'https://www.stopbullying.gov/'
    }]
  );
  check(friendly.includes('[kb_bullying_prevention_reviewed]') && friendly.includes('Isolation signs'),
    'renderCitations: id + title rendered',
    'renderCitations friendly format missing id/title: ' + JSON.stringify(friendly));
  check(friendly.includes('StopBullying.gov') && friendly.includes('https://www.stopbullying.gov/'),
    'renderCitations: source title + url rendered',
    'renderCitations friendly format missing source title/url: ' + JSON.stringify(friendly));

  // --- 4. robustness ---
  check(AIFormat.renderCitations(['kb_missing'], [{ id: 'other', title: 't' }]) === '',
    'renderCitations: unknown id omitted',
    'renderCitations: unknown id should produce empty output');
  check(AIFormat.renderCitations(null, null) === '' && AIFormat.renderCitations(undefined, undefined) === '',
    'renderCitations: non-array inputs safe (return empty string)',
    'renderCitations: non-array inputs should return empty string');
  check(AIFormat.renderCitations(['x'], [null, { id: 'x', title: 'T' }]).includes('T'),
    'renderCitations: null source entries tolerated',
    'renderCitations: null source entry broke lookup');

  // --- 5. legacy globals ---
  check(sandbox.window.escapeHtml === AIFormat.escapeHtml,
    'legacy: window.escapeHtml wired to AIFormat.escapeHtml',
    'legacy: window.escapeHtml missing or mismatched');

  if (failures > 0) {
    console.error('CITATION ESCAPE CHECK FAILED: ' + failures + ' problem(s).');
    process.exitCode = 1;
  } else {
    console.log('CITATION ESCAPE CHECK PASSED: all assertions green.');
  }
}
