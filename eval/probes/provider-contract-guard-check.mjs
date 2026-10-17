// eval/probes/provider-contract-guard-check.mjs — provider-contract display guard probe.
//
// Regression evidence for the 17-10-26 fix, prompted by a live report: the
// ending-page AI displayed free-model meta-commentary verbatim
// ("Không có câu hỏi cụ thể để trả lời dựa trên nội dung cung cấp.") — a JSON
// contract failure that the handlers used to echo to the player as-is.
//
// Contract guard now required on BOTH player endpoints (analyze-ending,
// chat-ending):
//   A. non-JSON model output       → insufficient_evidence + safe Vietnamese
//      fallback copy displayed; raw kept only in limitationNote (not rendered);
//      refusal_limitation telemetry still fires
//   B. JSON with grounded text     → displayed verbatim (control; the guard
//      must not over-block a well-formed answer)
//   C. JSON without a usable text  → same safe-copy behavior as A
//   D. valid JSON whose `text` is the reported model meta-commentary
//      ("no specific question...") → never displayed either; same safe copy
//      (second sighting, 17-10-26); suppressed text kept in limitationNote
//
// Usage: node eval/probes/provider-contract-guard-check.mjs [--out=<file>]
// Exit 1 on any violation.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
	installFetchStub,
	invokeHandler,
	withEnv,
	buildFlows,
	loadHandlers,
	CAPTURE_FIXTURE,
	makeTelemetryConsoleCapture
} from '../lib/harness.mjs';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(SCRIPT_DIR, '..', '..');

const META_COMMENTARY = 'Không có câu hỏi cụ thể để trả lời dựa trên nội dung cung cấp.';
const GROUNDED_MARKER = 'Nội dung tổng hợp có căn cứ từ nguồn đã xem xét (kiểm thử).';
const SAFE_COPY = {
	'analyze-ending': 'Chưa thể tạo nhận xét có căn cứ từ dữ liệu hiện có. Một câu hỏi trung lập để bạn tự suy ngẫm: lựa chọn nào trong câu chuyện khiến bạn nhớ nhất, và vì sao?',
	'chat-ending': 'Chưa đủ nguồn để trả lời có căn cứ. Một câu hỏi gợi mở trung lập: phần nào của nhận xét này bạn thấy liên quan nhất đến các lựa chọn của mình?'
};

function parseArgs(argv) {
	const args = { out: null };
	for (const a of argv) if (a.startsWith('--out=')) args.out = a.slice('--out='.length);
	return args;
}

const args = parseArgs(process.argv.slice(2));
const checks = [];
function check(name, ok, detail) {
	checks.push({ name, ok: !!ok });
	if (ok) console.log('PASS ' + name);
	else console.error('FAIL ' + name + (detail ? ' — ' + detail : ''));
}

function displayedOf(payload) {
	if (typeof payload.analysis === 'string') return payload.analysis;
	if (typeof payload.reply === 'string') return payload.reply;
	return '';
}

const handlers = await loadHandlers(REPO_ROOT);
const flows = buildFlows(CAPTURE_FIXTURE);

async function drive(flowKey, providerBehavior) {
	const flow = flows[flowKey];
	const capture = makeTelemetryConsoleCapture();
	const stub = installFetchStub({ provider: 'stub', providerBehaviors: [providerBehavior] });
	let result;
	try {
		result = await withEnv(flow.env, () => invokeHandler(handlers[flowKey], { method: 'POST', body: flow.body, headers: flow.headers }));
	} finally {
		capture.restore();
		stub.restore();
	}
	const payload = result.payload && typeof result.payload === 'object' ? result.payload : {};
	return { result, payload, displayed: displayedOf(payload), providerCalls: stub.providerCalls.length, lines: capture.lines };
}

for (const endpoint of ['analyze-ending', 'chat-ending']) {
	// A. Non-JSON meta-commentary (the reported live case).
	{
		const d = await drive(endpoint, { type: 'ok', content: META_COMMENTARY });
		check(endpoint + ' A1 http 200, no throw', !d.result.threw && d.result.status === 200, 'status=' + d.result.status + (d.result.threw ? ' threw=' + d.result.threw.message : ''));
		check(endpoint + ' A2 status classed insufficient_evidence', d.payload.status === 'insufficient_evidence', 'status=' + d.payload.status);
		check(endpoint + ' A3 provider call was actually made', d.providerCalls === 1, 'calls=' + d.providerCalls);
		check(endpoint + ' A4 raw meta text NOT displayed', d.displayed.length > 0 && !d.displayed.includes(META_COMMENTARY), JSON.stringify(d.displayed));
		check(endpoint + ' A5 exact safe fallback copy displayed', d.displayed === SAFE_COPY[endpoint], JSON.stringify(d.displayed));
		check(endpoint + ' A6 raw retained in limitationNote (debug only)', typeof d.payload.limitationNote === 'string' && d.payload.limitationNote.includes('Không có câu hỏi cụ thể'), JSON.stringify(d.payload.limitationNote));
		check(endpoint + ' A7 refusal_limitation record fired', d.lines.some((l) => l.includes('refusal_limitation') && l.includes(endpoint)), 'no matching telemetry line');
	}

	// B. Valid JSON with grounded text — control; the guard must not over-block.
	{
		const content = JSON.stringify({ status: 'grounded', text: GROUNDED_MARKER, citations: [] });
		const d = await drive(endpoint, { type: 'ok', content });
		check(endpoint + ' B1 http 200, no throw', !d.result.threw && d.result.status === 200, 'status=' + d.result.status + (d.result.threw ? ' threw=' + d.result.threw.message : ''));
		check(endpoint + ' B2 status grounded', d.payload.status === 'grounded', 'status=' + d.payload.status);
		check(endpoint + ' B3 grounded text displayed verbatim', d.displayed === GROUNDED_MARKER, JSON.stringify(d.displayed));
	}

	// C. Valid JSON without a usable text field.
	{
		const d = await drive(endpoint, { type: 'ok', content: '{"status":"grounded"}' });
		check(endpoint + ' C1 http 200, no throw', !d.result.threw && d.result.status === 200, 'status=' + d.result.status + (d.result.threw ? ' threw=' + d.result.threw.message : ''));
		check(endpoint + ' C2 status classed insufficient_evidence', d.payload.status === 'insufficient_evidence', 'status=' + d.payload.status);
		check(endpoint + ' C3 raw JSON NOT displayed', d.displayed.length > 0 && !d.displayed.includes('"status"'), JSON.stringify(d.displayed));
		check(endpoint + ' C4 exact safe fallback copy displayed', d.displayed === SAFE_COPY[endpoint], JSON.stringify(d.displayed));
	}

	// D. Valid JSON whose text IS the reported meta-commentary (second sighting).
	{
		const content = JSON.stringify({ status: 'insufficient_evidence', text: META_COMMENTARY, citations: [] });
		const d = await drive(endpoint, { type: 'ok', content });
		check(endpoint + ' D1 http 200, no throw', !d.result.threw && d.result.status === 200, 'status=' + d.result.status + (d.result.threw ? ' threw=' + d.result.threw.message : ''));
		check(endpoint + ' D2 status classed insufficient_evidence', d.payload.status === 'insufficient_evidence', 'status=' + d.payload.status);
		check(endpoint + ' D3 meta commentary NOT displayed', d.displayed.length > 0 && !d.displayed.includes(META_COMMENTARY), JSON.stringify(d.displayed));
		check(endpoint + ' D4 exact safe fallback copy displayed', d.displayed === SAFE_COPY[endpoint], JSON.stringify(d.displayed));
		check(endpoint + ' D5 suppressed text retained in limitationNote (debug only)', typeof d.payload.limitationNote === 'string' && d.payload.limitationNote.includes('Không có câu hỏi cụ thể'), JSON.stringify(d.payload.limitationNote));
	}

	// E. Reasoning prose WRAPPING a valid contract object (live 17-10-26: free-model
	//    routing returned "The user wants me to ..." followed by the JSON object). The
	//    recovery must extract the object and display the grounded text, NOT degrade.
	{
		const content = 'The user wants me to act as an AI companion for SchoolShield.\n' + JSON.stringify({ status: 'grounded', text: GROUNDED_MARKER, citations: [] });
		const d = await drive(endpoint, { type: 'ok', content });
		check(endpoint + ' E1 http 200, no throw', !d.result.threw && d.result.status === 200, 'status=' + d.result.status + (d.result.threw ? ' threw=' + d.result.threw.message : ''));
		check(endpoint + ' E2 contract object recovered from prose (status grounded)', d.payload.status === 'grounded', 'status=' + d.payload.status);
		check(endpoint + ' E3 grounded text displayed verbatim', d.displayed === GROUNDED_MARKER, JSON.stringify(d.displayed));
	}

	// F. Reasoning prose with NO contract object → still the safe fallback (the
	//    recovery must never invent a contract).
	{
		const content = 'The user wants me to act as an AI companion. I will not comply.';
		const d = await drive(endpoint, { type: 'ok', content });
		check(endpoint + ' F1 status classed insufficient_evidence', d.payload.status === 'insufficient_evidence', 'status=' + d.payload.status);
		check(endpoint + ' F2 exact safe fallback copy displayed', d.displayed === SAFE_COPY[endpoint], JSON.stringify(d.displayed));
	}
}

const pass = checks.filter((c) => c.ok).length;
const fail = checks.length - pass;
console.log('SUMMARY: ' + pass + '/' + checks.length + ' PASS (provider-contract display guard)');
if (args.out) {
	const outPath = path.resolve(REPO_ROOT, args.out);
	fs.mkdirSync(path.dirname(outPath), { recursive: true });
	fs.writeFileSync(outPath, JSON.stringify({ generatedAt: new Date().toISOString(), pass, fail, checks }, null, 2));
	console.log('report written: ' + outPath);
}
process.exit(fail > 0 ? 1 : 0);
