// eval/probes/teacher-pilot-check.mjs — Phase 03 offline teacher-pilot evidence probe.
//
// SCOPE: handler-level, stub-driven evidence only. The live Supabase access
// matrix + RLS dashboard read remain the gating evidence for Phase 03 exit
// (A3/A4); this probe never replaces them and makes no live calls.
//
// Sections (single process; exit 0 = all pass, 1 = any failure):
//   1) Teacher v2 prompt markers + pseudonymization assertions
//      (assembled prompts captured from the provider request bodies)
//   2) Min-data gate: no runs at all -> both teacher endpoints 400, no provider call
//   3) Access-control matrix: 6 personas x 2 endpoints
//      (anonymous 401 / invalid JWT 401 / student JWT 403 / non-owner teacher 403 /
//       class-read denied 403 / owning teacher 200)
//   4) Pilot rollback lever + experimental label (vm + static checks)
//
// Usage: node eval/probes/teacher-pilot-check.mjs

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import {
	installFetchStub,
	buildFlows,
	invokeHandler,
	withEnv,
	loadHandlers,
	CAPTURE_FIXTURE,
	STUB_TEACHER_JWT
} from '../lib/harness.mjs';
import { GUARDRAIL_BLOCK } from '../../api/_guardrails.js';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(SCRIPT_DIR, '..', '..');

let failures = 0;
function pass(msg) { console.log('PASS ' + msg); }
function fail(msg) { failures += 1; console.error('FAIL ' + msg); }
function check(cond, msg) { if (cond) pass(msg); else fail(msg); }

function httpJson(status, body) {
	return {
		ok: status >= 200 && status < 300,
		status,
		headers: { get: (k) => (String(k).toLowerCase() === 'content-type' ? 'application/json' : null) },
		async text() { return JSON.stringify(body); },
		async json() { return body; }
	};
}

const handlers = await loadHandlers(ROOT);
const flows = buildFlows(CAPTURE_FIXTURE);

// ---------------------------------------------------------------------------
// Section 1 — teacher v2 prompt markers + pseudonymization

const MARKERS = [
	'THỬ NGHIỆM',
	'QUAN SÁT TỪ DỮ LIỆU',
	'ĐIỂM CẦN LƯU Ý',
	'GIỚI HẠN',
	'GỢI Ý TRÒ CHUYỆN',
	'không chẩn đoán',
	'không dùng để đánh giá, xếp loại, kỷ luật'
];

async function capturePrompt(name) {
	let prompt = null;
	const stub = installFetchStub({
		provider: 'stub',
		...(flows[name].stubOptions || {}),
		onProviderCall: (call) => {
			prompt = call.body && call.body.messages && call.body.messages[0]
				? call.body.messages[0].content
				: null;
		}
	});
	try {
		const result = await withEnv(flows[name].env, () => invokeHandler(handlers[name], { body: flows[name].body, headers: flows[name].headers }));
		if (result.threw) throw new Error(name + ' threw: ' + result.threw.message);
		if (result.status !== 200) throw new Error(name + ' status ' + result.status + ' payload ' + JSON.stringify(result.payload));
		return prompt;
	} finally {
		stub.restore();
	}
}

console.log('--- Section 1: teacher v2 prompt markers ---');
for (const name of ['summarize-student', 'summarize-class']) {
	const prompt = await capturePrompt(name);
	if (typeof prompt !== 'string' || !prompt.length) {
		fail(name + ': no assembled prompt captured');
		continue;
	}
	for (const m of MARKERS) {
		check(prompt.includes(m), name + ': marker "' + m + '"');
	}
	check(prompt.includes(GUARDRAIL_BLOCK), name + ': canonical GUARDRAIL_BLOCK embedded');
	check(prompt.includes('Lớp:'), name + ': class label block present');
	check(!prompt.includes('KTHU1234'), name + ': class code never enters the prompt');
	check(!prompt.includes('stub-student-0001'), name + ': student id never enters the prompt');
}

// ---------------------------------------------------------------------------
// Section 2 — min-data gate (no runs at all)

console.log('--- Section 2: min-data gate ---');
for (const name of ['summarize-student', 'summarize-class']) {
	const stub = installFetchStub({
		provider: 'stub',
		...(flows[name].stubOptions || {}),
		runRows: []
	});
	try {
		const result = await withEnv(flows[name].env, () => invokeHandler(handlers[name], { body: flows[name].body, headers: flows[name].headers }));
		check(!result.threw && result.status === 400, name + ': min-data gate returns 400 (got ' + result.status + (result.threw ? ', threw ' + result.threw.message : '') + ')');
		check(stub.providerCalls.length === 0, name + ': min-data gate makes no provider call');
	} finally {
		stub.restore();
	}
}

// ---------------------------------------------------------------------------
// Section 3 — access-control matrix (handler-level personas)

console.log('--- Section 3: access-control matrix ---');
const base = {
	classRows: [CAPTURE_FIXTURE.teacher.classRow],
	memberRows: CAPTURE_FIXTURE.teacher.memberRows,
	runRows: CAPTURE_FIXTURE.teacher.runRows
};

const CASES = [
	{ id: 'anonymous', headers: {}, auth: null, expected: 401 },
	{ id: 'invalid-jwt', auth: 'invalid', expected: 401 },
	{ id: 'student-jwt', auth: 'student', expected: 403 },
	{ id: 'non-owner-teacher', auth: 'other-teacher', expected: 403 },
	{ id: 'class-read-denied', auth: 'owner', classRead: 403, expected: 403 },
	{ id: 'owning-teacher', auth: 'owner', expected: 200 }
];

for (const name of ['summarize-student', 'summarize-class']) {
	const flow = flows[name];
	for (const c of CASES) {
		const savedFetch = globalThis.fetch;
		globalThis.fetch = async (urlIn) => {
			const u = String(urlIn);
			if (u.includes('/auth/v1/user')) {
				if (c.auth === 'invalid') return httpJson(401, { error: 'Invalid token' });
				if (c.auth === 'student') return httpJson(200, { id: 'stub-student-user' });
				if (c.auth === 'other-teacher') return httpJson(200, { id: 'stub-teacher-9999' });
				return httpJson(200, { id: 'stub-teacher-0001' });
			}
			if (u.includes('/rest/v1/classes')) {
				if (c.classRead) return httpJson(c.classRead, { error: 'permission denied' });
				return httpJson(200, base.classRows);
			}
			if (u.includes('/rest/v1/memberships')) return httpJson(200, base.memberRows);
			if (u.includes('/rest/v1/runs')) return httpJson(200, base.runRows);
			if (u.includes('openrouter.ai')) {
				return httpJson(200, { model: 'stub/model-x', choices: [{ message: { content: 'Pinned stub response text for deterministic scenarios.' } }] });
			}
			throw new Error('unexpected fetch: ' + u);
		};
		try {
			const headers = c.headers !== undefined ? c.headers : { authorization: 'Bearer ' + STUB_TEACHER_JWT };
			const result = await withEnv(flow.env, () => invokeHandler(handlers[name], { body: flow.body, headers }));
			check(
				!result.threw && result.status === c.expected,
				name + ' / ' + c.id + ': expected ' + c.expected + ', got ' + result.status + (result.threw ? ' (threw ' + result.threw.message + ')' : '')
			);
		} finally {
			globalThis.fetch = savedFetch;
		}
	}
}

// ---------------------------------------------------------------------------
// Section 4 — pilot rollback lever + experimental label

console.log('--- Section 4: pilot lever + label ---');
const dashSrc = fs.readFileSync(path.join(ROOT, 'js', 'cloud-dashboard.js'), 'utf8');
const sandbox = { window: {} };
vm.runInNewContext(dashSrc, sandbox, { filename: 'js/cloud-dashboard.js' });
const cd = sandbox.window.CloudDashboard || {};
check(cd.TEACHER_PILOT_ENABLED === false, 'lever: TEACHER_PILOT_ENABLED default is false (pilot disabled)');
check(typeof cd.PILOT_LABEL_TEXT === 'string' && cd.PILOT_LABEL_TEXT.includes('Bản thử nghiệm'), 'lever: PILOT_LABEL_TEXT present (experimental framing)');
check(typeof cd.PILOT_LABEL_TEXT === 'string' && cd.PILOT_LABEL_TEXT.includes('không dùng để đánh giá'), 'lever: label carries the not-for-grading line');

const dashHtml = fs.readFileSync(path.join(ROOT, 'dashboard.html'), 'utf8');
check(dashHtml.includes('id="ai-class-block"'), 'wiring: class AI block has a gating wrapper id');
check(dashHtml.includes('id="ai-class-pilot"'), 'wiring: class pilot label element present');
check(dashHtml.includes('applyPilotLever'), 'wiring: class-block lever applied on load');
check((dashHtml.match(/TEACHER_PILOT_ENABLED/g) || []).length >= 2, 'wiring: per-student + class gates reference the flag');
check(dashHtml.includes('block.hidden = true'), 'wiring: lever-off hides the class AI section');
check((dashHtml.match(/pilot-note/g) || []).length >= 2, 'wiring: pilot label class used in class + per-student labels');

const css = fs.readFileSync(path.join(ROOT, 'style', 'cloud.css'), 'utf8');
const printBlock = css.match(/@media print\s*\{[\s\S]*?\n\}/);
check(printBlock !== null && !/pilot-note/.test(printBlock[0]), 'print: pilot label not hidden by @media print');

const reportHtml = fs.readFileSync(path.join(ROOT, 'report.html'), 'utf8');
check(!/summarize|cloud-dashboard|Ghi chú AI|Tóm tắt AI/.test(reportHtml), 'report.html: remains AI-free (no label needed)');

// ---------------------------------------------------------------------------

console.log('');
if (failures > 0) {
	console.error('TEACHER PILOT CHECK FAILED: ' + failures + ' failure(s)');
	process.exit(1);
}
console.log('TEACHER PILOT CHECK OK — v2 prompts, min-data gate, access matrix (handler-level), lever/label.');
process.exit(0);
