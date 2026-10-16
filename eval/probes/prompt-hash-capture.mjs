// eval/probes/prompt-hash-capture.mjs — B4 assembled-prompt sha256 parity capture.
//
// Runs the 4 handler flows end-to-end through the fetch-stub harness with fixed
// synthetic inputs and captures the FINAL assembled prompt string per endpoint
// (plus max_tokens / model chain from the provider request body).
//
// Usage:
//   node eval/probes/prompt-hash-capture.mjs --out <snapshot.json>
//   node eval/probes/prompt-hash-capture.mjs --compare <snapshot.json>
//
// --compare exits 1 on ANY byte/hash/config difference and prints the first
// differing window per endpoint (extraction whitespace drift halt rule, E4).
// Snapshots are local-only evidence; they contain synthetic fixture data only.

import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
	installFetchStub,
	invokeHandler,
	withEnv,
	buildFlows,
	loadHandlers,
	MAX_TOKENS_BY_ENDPOINT,
	CAPTURE_FIXTURE
} from '../lib/harness.mjs';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(SCRIPT_DIR, '..', '..');

function sha256hex(s) {
	return crypto.createHash('sha256').update(s, 'utf8').digest('hex');
}

function parseArgs(argv) {
	const args = { out: null, compare: null };
	for (const a of argv) {
		if (a.startsWith('--out=')) args.out = a.slice('--out='.length);
		else if (a.startsWith('--compare=')) args.compare = a.slice('--compare='.length);
	}
	return args;
}

async function captureAll() {
	const handlers = await loadHandlers(REPO_ROOT);
	const flows = buildFlows(CAPTURE_FIXTURE);
	const snapshot = {
		note: 'B4 assembled-prompt parity capture (synthetic fixture inputs; local-only evidence)',
		generatedAt: new Date().toISOString(),
		endpoints: {}
	};

	for (const [name, flow] of Object.entries(flows)) {
		const stub = installFetchStub({ provider: 'stub', ...flow.stubOptions });
		try {
			const result = await withEnv(flow.env, () => invokeHandler(handlers[name], { body: flow.body, headers: flow.headers }));
			if (result.threw) throw new Error(name + ' threw: ' + result.threw.message);
			if (result.status !== 200) throw new Error(name + ' status ' + result.status + ' payload ' + JSON.stringify(result.payload));
			const calls = stub.providerCalls;
			if (calls.length !== 1) throw new Error(name + ': expected exactly 1 provider call, got ' + calls.length);
			const body = calls[0].body;
			const prompt = body.messages[0].content;
			if (body.max_tokens !== MAX_TOKENS_BY_ENDPOINT[name]) {
				throw new Error(name + ': unexpected max_tokens ' + body.max_tokens + ' (expected ' + MAX_TOKENS_BY_ENDPOINT[name] + ')');
			}
			snapshot.endpoints[name] = {
				sha256: sha256hex(prompt),
				length: prompt.length,
				maxTokens: body.max_tokens,
				model: body.model,
				models: body.models,
				text: prompt
			};
			console.log('CAPTURED ' + name + ' sha256=' + snapshot.endpoints[name].sha256.slice(0, 16) + '… len=' + prompt.length);
		} finally {
			stub.restore();
		}
	}
	return snapshot;
}

function firstDiffWindow(a, b) {
	const n = Math.min(a.length, b.length);
	let i = 0;
	while (i < n && a[i] === b[i]) i += 1;
	const from = Math.max(0, i - 40);
	return {
		at: i,
		expected: JSON.stringify(a.slice(from, i + 40)),
		actual: JSON.stringify(b.slice(from, i + 40))
	};
}

function compareSnapshots(expected, actual) {
	let failures = 0;
	for (const name of Object.keys(expected.endpoints)) {
		const e = expected.endpoints[name];
		const a = actual.endpoints[name];
		if (!a) {
			console.log('MISMATCH ' + name + ': missing in current capture');
			failures += 1;
			continue;
		}
		const problems = [];
		if (e.sha256 !== a.sha256) problems.push('sha256');
		if (e.text !== a.text) problems.push('bytes');
		if (e.maxTokens !== a.maxTokens) problems.push('max_tokens');
		if (e.model !== a.model) problems.push('model');
		if (JSON.stringify(e.models) !== JSON.stringify(a.models)) problems.push('models-array');
		if (problems.length === 0) {
			console.log('PARITY OK ' + name + ' sha256=' + a.sha256.slice(0, 16) + '… len=' + a.length);
		} else {
			failures += 1;
			console.log('MISMATCH ' + name + ': ' + problems.join(', '));
			if (e.text !== a.text) {
				const d = firstDiffWindow(e.text, a.text);
				console.log('  first diff at index ' + d.at);
				console.log('  expected window: ' + d.expected);
				console.log('  actual   window: ' + d.actual);
			}
		}
	}
	return failures;
}

const args = parseArgs(process.argv.slice(2));

if (!args.out && !args.compare) {
	console.error('usage: node eval/probes/prompt-hash-capture.mjs --out <file> | --compare <file>');
	process.exit(2);
}

const snapshot = await captureAll();

if (args.out) {
	fs.mkdirSync(path.dirname(path.resolve(args.out)), { recursive: true });
	fs.writeFileSync(path.resolve(args.out), JSON.stringify(snapshot, null, 2));
	console.log('snapshot written: ' + path.resolve(args.out));
}

if (args.compare) {
	const expected = JSON.parse(fs.readFileSync(path.resolve(args.compare), 'utf8'));
	const failures = compareSnapshots(expected, snapshot);
	if (failures > 0) {
		console.error('PARITY FAILED: ' + failures + ' endpoint(s) differ — HALT before baseline (E4).');
		process.exit(1);
	}
	console.log('PARITY OK: all ' + Object.keys(expected.endpoints).length + ' endpoints byte-identical (sha256 + bytes + maxTokens + model chain).');
}
