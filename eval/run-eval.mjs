#!/usr/bin/env node
// eval/run-eval.mjs — offline/stub eval runner.
//
// Phase 03 C3a hardening (2026-10-17):
//   - asserts the REAL handler status. The harness returns `{ status, payload,
//     threw }`; the runner previously checked `result.statusCode` (undefined),
//     so the OK test degenerated to "did not throw" — non-200 responses were
//     silently counted as clean.
//   - expects HTTP 200 per flow by default, with per-fixture `expect` overrides
//     for intended negative paths (e.g. min-data 400s).
//   - serves fixture-aware teacher rows via the harness fetch stub
//     (`installFetchStub` + per-flow `stubOptions`), so teacher flows actually
//     execute end-to-end. The previous local stub returned one synthetic
//     non-array object for every /rest/v1/* call, which made both teacher
//     handlers exit 403 before any provider call.
// "clean" now means: every flow returned its expected status and threw nothing.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { installFetchStub, buildFlows, invokeHandler, withEnv, loadHandlers } from './lib/harness.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FIXTURES_DIR = path.resolve(ROOT, 'eval', 'fixtures');
const STUB_TEACHER_ID = 'stub-teacher-0001';
const STUB_TEACHER_JWT = 'stub-teacher-jwt';

function parseArgs(argv) {
  const out = { list: false, run: false, help: false, provider: 'stub', out: null, suite: 'full' };
  for (const a of argv) {
    if (a === '--list') out.list = true;
    else if (a === '--run') out.run = true;
    else if (a === '--help' || a === '-h') out.help = true;
    else if (a.startsWith('--provider=')) out.provider = a.split('=')[1];
    else if (a.startsWith('--suite=')) out.suite = a.split('=')[1];
    else if (a.startsWith('--out=')) out.out = a.slice('--out='.length);
  }
  return out;
}

function loadFixtures() {
  const out = [];
  if (!fs.existsSync(FIXTURES_DIR)) return out;
  for (const f of fs.readdirSync(FIXTURES_DIR)) {
    if (!f.endsWith('.json')) continue;
    try { out.push(JSON.parse(fs.readFileSync(path.join(FIXTURES_DIR, f), 'utf8'))); } catch (e) { /* skip malformed */ }
  }
  return out;
}

function normalizeFixture(f) {
  // Merge both fixture shapes: `session` fields win, top-level fields fill gaps
  // (legacy fixtures keep playerName/ending/stats/route/question at top level).
  const s = (f && f.session) ? Object.assign({}, f, f.session) : f;
  const t = (f && f.teacher) ? f.teacher : {};
  const tag = (f && f.id) || 0;
  const studentId = t.studentId || ('stub-student-' + tag);
  const classId = t.classId || ('stub-class-' + tag);
  // Teacher rows: fixture-provided rows win; conservative synthetic defaults
  // make the happy path exercise real 200s under the stub.
  const classRow = Object.assign(
    { id: classId, name: 'Synthetic class stub', code: 'CODE-' + tag, teacher_id: STUB_TEACHER_ID },
    t.classRow || {}
  );
  const memberRows = Array.isArray(t.memberRows) ? t.memberRows : [{ student_id: studentId, status: 'active' }];
  const runRows = Array.isArray(t.runRows) ? t.runRows : [{
    id: 'stub-run-' + tag,
    student_id: studentId,
    class_id: classId,
    status: 'finished',
    empathy: 50,
    awareness: 50,
    safe: 50,
    ending_name: 'Ending stub',
    updated_at: '2026-10-01T08:00:00.000Z',
    finished_at: '2026-10-01T08:00:00.000Z',
    choices: []
  }];
  return {
    session: {
      playerName: s && s.playerName ? s.playerName : 'Synthetic learner',
      ending: (s && s.ending) ? s.ending : { name: 'Ending stub', description: 'synthetic' },
      stats: (s && s.stats) ? s.stats : [{ key: 'empathy', value: 50 }],
      route: (s && s.route) ? s.route : [{ choice: 'stub' }],
      // Chat flow inputs: without a question the handler correctly rejects with
      // 400; fixtures predate the chat endpoint and carry none, so supply a
      // neutral synthetic question (fixture-provided values always win).
      question: (s && typeof s.question === 'string') ? s.question : 'Mình có thể hiểu thêm gì về các lựa chọn của mình trong lượt chơi này?',
      history: (s && Array.isArray(s.history)) ? s.history : []
    },
    teacher: { studentId, classId, classRow, memberRows, runRows, headers: t.headers || {} }
  };
}

const args = parseArgs(process.argv.slice(2));
const allFixtures = loadFixtures();

if (args.help) { console.log('usage: node eval/run-eval.mjs --list | --run [--provider=stub|live] [--suite=<name>] [--out=<file>]'); process.exit(0); }

if (args.list) {
  for (const f of allFixtures) console.log(f.id + '\t' + (f.title || f.id) + '\t' + (f.suite || '?'));
  console.log('total ' + allFixtures.length);
  process.exit(0);
}

if (!args.run) { console.error('missing --run (or --list)'); process.exit(2); }
if (args.provider === 'live') { console.error('BLOCKED: live provider run requires key + cost approval (G3 gate). Never-green-without-artifact.'); process.exit(2); }

const suite = args.suite || 'full';
const candidates = allFixtures.filter(f => suite === 'full' || f.suite === suite);
if (candidates.length === 0) { console.error('no fixtures matched suite: ' + suite); process.exit(1); }
console.log('[run-eval] suite=' + suite + ' provider=' + args.provider + ' sessions=' + candidates.length);

const handlers = await loadHandlers(ROOT);
const transcript = [];
let hasFailure = false;

for (const f of candidates) {
  let patched = f;
  try {
    patched = JSON.parse(JSON.stringify(f));
  } catch {}
  const flows = buildFlows(normalizeFixture(patched));
  const node = { id: f.id || '(unnamed)', suite: f.suite || 'basic', endpoints: {}, status: 'OK' };
  for (const [name, flow] of Object.entries(flows)) {
    const expected = (patched.expect && Number.isFinite(Number(patched.expect[name]))) ? Number(patched.expect[name]) : 200;
    const stub = installFetchStub({ provider: 'stub', ...(flow.stubOptions || {}) });
    try {
      const result = await withEnv(flow.env, () => invokeHandler(handlers[name], { method: 'POST', body: flow.body, headers: flow.headers }));
      const ok = !result.threw && result.status === expected;
      node.endpoints[name] = {
        status: result.status,
        expected,
        ok,
        providerCalls: stub.providerCalls.length,
        thrown: !!(result.threw && result.threw.message)
      };
      if (!ok) {
        node.status = 'FAIL';
        hasFailure = true;
        console.error('FAIL ' + (f.id || '?') + ' ' + name + ' status=' + result.status + ' expected=' + expected + (result.threw ? ' threw=' + result.threw.message : ''));
      } else {
        console.log('OK   ' + (f.id || '?') + ' ' + name + ' status=' + result.status);
      }
    } catch (e) {
      node.endpoints[name] = { error: e.message };
      node.status = 'FAIL';
      hasFailure = true;
      console.error('EXC  ' + (f.id || '?') + ' ' + name + ' : ' + e.message);
    } finally {
      stub.restore();
    }
  }
  transcript.push(node);
}

const report = { generatedAt: new Date().toISOString(), provider: args.provider, suite, count: transcript.length, sessions: transcript };
if (args.out) {
  fs.mkdirSync(path.dirname(path.resolve(ROOT, args.out)), { recursive: true });
  fs.writeFileSync(path.resolve(ROOT, args.out), JSON.stringify(report, null, 2));
  console.log('report written: ' + path.resolve(ROOT, args.out));
}
const okCount = transcript.filter(xs => xs.status === 'OK').length;
console.log('SUMMARY: ' + okCount + '/' + transcript.length + ' sessions clean; hasFailure=' + hasFailure);
if (hasFailure) process.exit(1);
process.exit(0);
