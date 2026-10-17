// eval/probes/telemetry-gate.mjs — G16 telemetry proving gate (Step C).
//
// Drives `analyze-ending` through the fetch-stub harness (one successful
// provider attempt) with console capture and proves:
//   - at least one JSON telemetry record per provider attempt
//   - exactly one terminal record (candidate_model === null)
//   - every record matches the Phase 01 C1 schema (all 13 fields)
//   - endpoint is payload-neutral (one of the contract labels)
//   - max_tokens matches the handler-passed value
//   - records are secret-safe (no learner identifiers, class codes, or keys)
//
// Endpoint event records (B4 `refusal_limitation`: event/ts/endpoint/request_id)
// also appear in this scenario via analyze-ending's insufficient-evidence path
// on the stub text; they are excluded from the C1 schema checks and flagged in
// the output — their schema is owned by scripts/check-ai-refusal-record.mjs.
//
// Usage: node eval/probes/telemetry-gate.mjs
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
	STUB_API_KEY,
	makeTelemetryConsoleCapture
} from '../lib/harness.mjs';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(SCRIPT_DIR, '..', '..');

const SCHEMA_FIELDS = [
	'ts',
	'endpoint',
	'request_id',
	'attempt',
	'candidate_model',
	'provider_model_used',
	'outcome',
	'http_status',
	'failure_class',
	'latency_ms',
	'max_tokens',
	'retry_after_s',
	'empty_content'
];

const flows = buildFlows();
const flow = flows['analyze-ending'];
const handlers = await loadHandlers(REPO_ROOT);

const capture = makeTelemetryConsoleCapture();
const stub = installFetchStub({ provider: 'stub', ...flow.stubOptions });
let violations = [];
let evidence = { endpoint: 'analyze-ending' };
try {
	const result = await withEnv(flow.env, () => invokeHandler(handlers['analyze-ending'], { body: flow.body, headers: flow.headers }));
	if (result.threw || result.status !== 200) {
		violations.push('handler did not complete: status=' + result.status + ' threw=' + (result.threw && result.threw.message));
	}

	// Parse JSON telemetry records (one JSON object per line). Endpoint event
	// records (e.g. the B4 `refusal_limitation` line) share the ts/request_id
	// keys but are NOT C1 telemetry — they carry an `event` tag and are
	// excluded from the schema gate below (their dedicated check is
	// scripts/check-ai-refusal-record.mjs). Secret-safety still applies to them.
	const records = [];
	const eventRecords = [];
	for (const line of capture.lines) {
		const trimmed = String(line).trim();
		if (!trimmed.startsWith('{')) continue;
		try {
			const obj = JSON.parse(trimmed);
			if (!obj || typeof obj !== 'object') continue;
			if ('event' in obj) { eventRecords.push(obj); continue; }
			if ('ts' in obj && 'request_id' in obj) records.push(obj);
		} catch (e) {
			// not a telemetry line
		}
	}

	evidence.records = records.length;
	evidence.eventRecords = eventRecords.length;
	evidence.providerCalls = stub.providerCalls.length;
	const attemptRecords = records.filter((r) => r.candidate_model !== null);
	const terminalRecords = records.filter((r) => r.candidate_model === null);

	// Gate 1: at least one record per provider attempt.
	if (records.length === 0) violations.push('no JSON telemetry records captured');
	if (attemptRecords.length < stub.providerCalls.length) {
		violations.push('attempt records (' + attemptRecords.length + ') < provider calls (' + stub.providerCalls.length + ')');
	}
	// Gate 2: exactly one terminal record.
	if (terminalRecords.length !== 1) {
		violations.push('expected exactly 1 terminal record, got ' + terminalRecords.length);
	}
	// Gate 3: schema completeness on every record.
	for (const r of records) {
		for (const f of SCHEMA_FIELDS) {
			if (!(f in r)) violations.push('record missing field ' + f);
		}
	}
	// Gate 4: endpoint label present & payload-neutral.
	for (const r of records) {
		if (r.endpoint !== 'analyze-ending') violations.push('unexpected endpoint label: ' + r.endpoint);
	}
	// Gate 5: max_tokens matches handler-passed value.
	for (const r of records) {
		if (r.max_tokens !== 600) violations.push('unexpected max_tokens: ' + r.max_tokens);
	}
	// Gate 6: terminal outcome success for the stub ok path.
	if (terminalRecords.length === 1 && terminalRecords[0].outcome !== 'success') {
		violations.push('terminal outcome not success: ' + terminalRecords[0].outcome);
	}
	// Gate 7: request_id present and non-empty on every record (shared correlation).
	for (const r of records) {
		if (typeof r.request_id !== 'string' || r.request_id.length === 0) violations.push('bad request_id');
	}
	// Gate 8: secret-safety — no learner identifiers / class codes / keys.
	const bannedValues = [
		flow.body.playerName || '',
		'stub-student-0001',
		'stub-class-0001',
		'KTHU1234',
		STUB_API_KEY
	];
	const serializedTelemetry = JSON.stringify(records) + JSON.stringify(eventRecords);
	for (const v of bannedValues) {
		if (v && serializedTelemetry.includes(v)) violations.push('secret-safety violation: telemetry contains ' + v);
	}

	capture.restore();
	if (violations.length > 0) {
		console.error('TELEMETRY GATE FAILURES:');
		for (const v of violations) console.error('  - ' + v);
		console.error('captured lines: ' + capture.lines.length + ', parsed records: ' + records.length);
	} else {
		console.log('TELEMETRY GATE OK: ' + records.length + ' record(s) (' + attemptRecords.length + ' attempt + ' + terminalRecords.length + ' terminal), secret-safe' + (eventRecords.length ? '; ' + eventRecords.length + ' endpoint event record(s) excluded from schema check' : '') + '.');
	}
} finally {
	stub.restore();
}

process.exit(violations.length > 0 ? 1 : 0);