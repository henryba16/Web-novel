// eval/probes/payload-probe.mjs — A4 provider-payload privacy probe (G1 evidence).
//
// Drives all 4 handler flows through the fetch-stub harness with fixed synthetic
// inputs and asserts that the ASSEMBLED PROVIDER PAYLOADS contain:
//   - NO learner-identifying values: the fixture playerName value, studentId,
//     classId, and the class join code (classes.code) — plan A4 scope;
//   - a generic sweep: no 'stub-*' synthetic identifier token anywhere;
//   - a positive control: the pseudonymized replacements ARE present
//     (neutral label in player prompts; class name label in teacher prompts),
//     proving prompt assembly actually ran.
//
// Scope boundary (recorded in the A1 contract §7): learner-typed chat
// question/history text is the feature's designed input payload and is OUT of
// this assertion scope; game-content fields are checked only as duplicates of
// the structured identifiers above.
//
// Usage: node eval/probes/payload-probe.mjs [--out <file>]
// Exit 1 on any violation.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { installFetchStub, invokeHandler, withEnv, buildFlows, loadHandlers, CAPTURE_FIXTURE } from '../lib/harness.mjs';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(SCRIPT_DIR, '..', '..');

function parseArgs(argv) {
	const args = { out: null };
	for (const a of argv) if (a.startsWith('--out=')) args.out = a.slice('--out='.length);
	return args;
}

const fixture = CAPTURE_FIXTURE;
const banned = {
	'playerName value': fixture.session.playerName,
	'studentId': fixture.teacher.studentId,
	'classId': fixture.teacher.classId,
	'classes.code (join credential)': fixture.teacher.classRow.code
};
const expectedPresence = {
	'analyze-ending': 'Học sinh',
	'chat-ending': 'Học sinh',
	'summarize-student': fixture.teacher.classRow.name,
	'summarize-class': fixture.teacher.classRow.name
};

const handlers = await loadHandlers(REPO_ROOT);
const flows = buildFlows(fixture);
const evidence = {
	note: 'A4 payload probe — synthetic fixture only; scope boundary: learner-typed chat text is designed input (out of scope)',
	generatedAt: new Date().toISOString(),
	scopeBoundary: 'learner-identifying values = playerName field value, studentId, classId, classes.code; learner-typed question/history excluded by design',
	endpoints: {}
};
let violations = 0;

for (const [name, flow] of Object.entries(flows)) {
	const stub = installFetchStub({ provider: 'stub', ...flow.stubOptions });
	try {
		const result = await withEnv(flow.env, () => invokeHandler(handlers[name], { body: flow.body, headers: flow.headers }));
		if (result.threw || result.status !== 200) {
			throw new Error(name + ' did not complete: status=' + result.status + ' threw=' + (result.threw && result.threw.message));
		}
		const payloadText = stub.providerCalls.map((c) => JSON.stringify(c.body)).join('\n');
		const found = [];
		for (const [label, value] of Object.entries(banned)) {
			if (value && payloadText.includes(value)) found.push(label + ' (' + value + ')');
		}
		const stubTokenSweep = payloadText.match(/stub-[a-z0-9-]+/gi) || [];
		const presentNeedle = expectedPresence[name];
		const positiveControl = payloadText.includes(presentNeedle);

		const endpointOk = found.length === 0 && stubTokenSweep.length === 0 && positiveControl;
		if (!endpointOk) violations += 1;

		evidence.endpoints[name] = {
			providerCalls: stub.providerCalls.length,
			payloadChars: payloadText.length,
			bannedValuesFound: found,
			stubTokenSweepHits: stubTokenSweep,
			positiveControl: { needle: presentNeedle, present: positiveControl },
			ok: endpointOk
		};
		console.log(
			(endpointOk ? 'PASS' : 'FAIL') +
				' ' +
				name +
				' — banned:' +
				found.length +
				' stub-tokens:' +
				stubTokenSweep.length +
				' positive-control(' +
				presentNeedle +
				'):' +
				positiveControl
		);
		if (found.length > 0) console.log('  banned values found: ' + found.join('; '));
	} finally {
		stub.restore();
	}
}

evidence.violations = violations;

const args = parseArgs(process.argv.slice(2));
if (args.out) {
	fs.mkdirSync(path.dirname(path.resolve(args.out)), { recursive: true });
	fs.writeFileSync(path.resolve(args.out), JSON.stringify(evidence, null, 2));
	console.log('evidence written: ' + path.resolve(args.out));
}

if (violations > 0) {
	console.error('PAYLOAD PROBE FAILED: ' + violations + ' endpoint(s) with violations.');
	process.exit(1);
}
console.log('PAYLOAD PROBE OK: no learner-identifying values or class codes in any provider payload (4 endpoints).');
