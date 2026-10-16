#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FIXTURES_DIR = path.resolve(ROOT, 'eval', 'fixtures');

const STUB_SUPABASE_URL = 'https://stub-schoolshield.supabase.test';
const STUB_SUPABASE_KEY = 'stub-harness-publishable-key';
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
  const s = (f && f.session) ? f.session : f;
  const t = (f && f.teacher) ? f.teacher : {};
  const baseTeacher = {
    studentId: t.studentId || ('stub-student-' + (f.id || 0)),
    classId: t.classId || ('stub-class-' + (f.id || 0)),
    classRow: t.classRow || { name: 'Synthetic class stub', code: 'CODE-' + (f.id || 0) },
    headers: t.headers || {}
  };
  return {
    session: {
      playerName: s && s.playerName ? s.playerName : 'Synthetic learner',
      ending: (s && s.ending) ? s.ending : { name: 'Ending stub', description: 'synthetic' },
      stats: (s && s.stats) ? s.stats : [{ key: 'empathy', value: 50 }],
      route: (s && s.route) ? s.route : [{ choice: 'stub' }]
    },
    teacher: baseTeacher
  };
}

function makeStubFetch() {
  return async (urlIn) => {
    const url = String(urlIn);
    if (url.includes('/auth/v1/user')) {
      return { ok: true, status: 200, headers: { get: () => 'application/json' }, async text() { return '{}'; }, async json() { return { id: STUB_TEACHER_ID }; } };
    }
    if (url.includes('/rest/v1/')) {
      const body = JSON.stringify({ name: 'Synthetic Class', code: 'CODE-STUB', teacher_id: STUB_TEACHER_ID });
      return { ok: true, status: 200, headers: { get: () => 'application/json' }, async text() { return body; }, async json() { return JSON.parse(body); } };
    }
    const content = 'Pinned stub response text for deterministic scenarios.';
    const body = JSON.stringify({ model: 'stub/model-x', choices: [{ message: { content } }], note: 'stub (synthetic)' });
    return { ok: true, status: 200, headers: { get: () => 'application/json' }, async text() { return body; }, async json() { return JSON.parse(body); } };
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

const { loadHandlers, buildFlows, invokeHandler, withEnv } = await import('./lib/harness.mjs');
const handlers = await loadHandlers(ROOT);
const transcript = [];
let hasFailure = false;

for (const f of candidates) {
  let patched = Object.assign({}, f, { _derived: true });
  try {
    patched = JSON.parse(JSON.stringify(f));
  } catch {}
  const flows = buildFlows(normalizeFixture(patched));
  const node = { id: f.id || '(unnamed)', suite: f.suite || 'basic', endpoints: {}, status: 'OK' };
  for (const [name, flow] of Object.entries(flows)) {
    const savedFetch = globalThis.fetch;
    globalThis.fetch = makeStubFetch();
    try {
      const result = await withEnv(flow.env, () => invokeHandler(handlers[name], { method: 'POST', body: flow.body, headers: flow.headers }));
      const ok = result.statusCode === 200 || (!result.statusCode && !result.threw);
      node.endpoints[name] = { status: result.statusCode, thrown: !!(result.threw && result.threw.message) };
      if (!ok) { node.status = 'FAIL'; hasFailure = true; console.error('FAIL ' + (f.id || '?') + ' ' + name + ' status=' + result.statusCode); }
      else console.log('OK   ' + (f.id || '?') + ' ' + name);
    } catch (e) {
      node.endpoints[name] = { error: e.message };
      node.status = 'FAIL';
      hasFailure = true;
      console.error('EXC  ' + (f.id || '?') + ' ' + name + ' : ' + e.message);
    } finally {
      globalThis.fetch = savedFetch;
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