// scripts/check-ai-refusal-record.mjs — Phase 02 B4: endpoint refusal-record check.
//
// Drives analyze-ending + chat-ending through the harness stub (CAPTURE_FIXTURE)
// and captures console output. The stub returns non-JSON model text, so both
// endpoints end in status=insufficient_evidence WITH sources retrieved — the
// limitation outcome must emit exactly one structured, secret-safe record:
//   {"event":"refusal_limitation","reason":"insufficient_support","ts":...,
//    "endpoint":"analyze-ending|chat-ending","request_id":"..."}
// (supplemented B4 schema: reason ∈ no_supported_snippet | insufficient_support)
//
// Usage: node scripts/check-ai-refusal-record.mjs
// Exit 0 = all green; exit 1 = one or more failures.

import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(SCRIPT_DIR, '..');

let failures = 0;
function fail(msg) { console.error('FAIL: ' + msg); failures += 1; }
function pass(msg) { console.log('PASS: ' + msg); }

const harnessUrl = pathToFileURL(path.resolve(REPO_ROOT, 'eval', 'lib', 'harness.mjs')).href;
const harness = await import(harnessUrl);

const handlers = await harness.loadHandlers(REPO_ROOT);
const flows = harness.buildFlows(harness.CAPTURE_FIXTURE);
const FIXTURE_PLAYER_NAME = harness.CAPTURE_FIXTURE.session.playerName;
const FIXTURE_CLASS_CODE = harness.CAPTURE_FIXTURE.teacher.classRow.code;

for (const name of ['analyze-ending', 'chat-ending']) {
  const flow = flows[name];
  const capture = harness.makeTelemetryConsoleCapture();
  const stub = harness.installFetchStub({ provider: 'stub', ...flow.stubOptions });
  let result = null;
  try {
    result = await harness.withEnv(flow.env, () => harness.invokeHandler(handlers[name], { body: flow.body, headers: flow.headers }));
  } catch (e) {
    fail(name + ': invoke threw: ' + e.message);
  } finally {
    stub.restore();
    capture.restore();
  }
  if (!result) continue;

  if (result.threw) { fail(name + ': handler threw: ' + result.threw.message); continue; }
  if (result.status !== 200) { fail(name + ': expected HTTP 200, got ' + result.status); continue; }

  const recordLines = capture.lines.filter((l) => l.includes('"event":"refusal_limitation"'));
  if (recordLines.length === 0) {
    fail(name + ': no refusal_limitation record emitted on the limitation path');
    continue;
  }
  if (recordLines.length > 1) {
    fail(name + ': expected exactly 1 refusal record per invocation, got ' + recordLines.length);
    continue;
  }
  const line = recordLines[0];
  let rec = null;
  try { rec = JSON.parse(line); } catch (e) { rec = null; }
  if (!rec || typeof rec !== 'object') { fail(name + ': record is not valid JSON: ' + line.slice(0, 140)); continue; }

  const shapeOk =
    rec.event === 'refusal_limitation' &&
    rec.endpoint === name &&
    (rec.reason === 'insufficient_support' || rec.reason === 'no_supported_snippet') &&
    typeof rec.ts === 'number' && rec.ts > 0 &&
    typeof rec.request_id === 'string' && rec.request_id.length > 0;
  if (!shapeOk) { fail(name + ': record field shape invalid: ' + line.slice(0, 140)); continue; }
  pass(name + ': refusal_limitation record emitted (reason=' + rec.reason + ', request_id=' + rec.request_id + ')');

  if (rec.reason !== 'insufficient_support') {
    fail(name + ': expected reason=insufficient_support on the sourced stub limitation path, got ' + rec.reason);
  } else {
    pass(name + ': reason=insufficient_support matches the sourced limitation path');
  }

  if (line.includes(FIXTURE_PLAYER_NAME)) fail(name + ': record leaked the fixture player name');
  else pass(name + ': record contains no player name');

  if (line.includes(FIXTURE_CLASS_CODE)) fail(name + ': record leaked the fixture class join code');
  else pass(name + ': record contains no class join code');
}

if (failures > 0) {
  console.error('REFUSAL RECORD CHECK FAILED: ' + failures + ' problem(s).');
  process.exitCode = 1;
} else {
  console.log('REFUSAL RECORD CHECK PASSED: refusal records verified on both endpoints.');
}
