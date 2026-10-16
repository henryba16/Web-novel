#!/usr/bin/env node
/**
 * scripts/check-ai-log-hygiene.mjs — D13 self-tested log-hygiene gate.
 *
 * Scope: repo `api/*.js` by default (filesystem enumeration, hard-scoped by
 * path — never via git-tracked lists, so a .gitignore'd file can never hide a
 * violation and the plan/contracted artifacts never self-match).
 *
 * Detects API-key-presence logging:
 *   P1 — a key-presence phrase: /\bAPI\s+KEY\b/i  (e.g. "API KEY:", "api key")
 *        NOTE: the plan text originally proposed /API\s*KEY/i; that literal
 *        pattern also matches the Supabase `apikey:` request header
 *        (case-insensitive + zero-width \s*), which would make the
 *        post-cleanup gate permanently red. Refined to an explicit
 *        whitespace separator so it matches the exact violation class only.
 *   P2 — any console call windowing the key variable:
 *        /console\.[a-z]+\([\s\S]{0,300}?OPENROUTER_API_KEY/
 *
 * Self-test: runs on EVERY invocation from in-memory fixtures.
 *   positive fixture = the exact on-disk key-presence log shape
 *   (multi-line console.log windowing process.env.OPENROUTER_API_KEY,
 *   as in api/analyze-ending.js L13–18 pre-cleanup) → MUST flag.
 *   negative fixture = handler code without the log → MUST pass.
 *   Fixture failure = exit 2 "detector broken".
 *
 * Usage:
 *   node scripts/check-ai-log-hygiene.mjs            # default scope: repo api/
 *   node scripts/check-ai-log-hygiene.mjs <dir>      # scope override (regression run)
 *
 * Exit codes: 0 = clean; 1 = violations found; 2 = detector broken / scope missing.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_SCOPE = path.resolve(SCRIPT_DIR, '..', 'api');

const P1 = /\bAPI\s+KEY\b/i;                                   // key-presence phrase
const P2 = /console\.[a-z]+\([\s\S]{0,300}?OPENROUTER_API_KEY/g; // console window on the key var

// --- in-memory fixtures -----------------------------------------------------

// Exact on-disk shape (api/analyze-ending.js L13–18, pre-cleanup). MUST flag.
const POSITIVE_FIXTURE = [
	'		console.log(',
	'			"API KEY:",',
	'			process.env.OPENROUTER_API_KEY',
	'				? "FOUND"',
	'				: "NOT FOUND"',
	'		);'
].join('\n');

// Handler-shaped code without any key-presence logging. MUST pass.
const NEGATIVE_FIXTURE = [
	'export default async function handler(req, res) {',
	'    if (req.method !== \'POST\') {',
	'        return res.status(405).json({ error: \'Method not allowed\' });',
	'    }',
	'    const apiKey = process.env.OPENROUTER_API_KEY;',
	'    const header = { apikey: process.env.SUPABASE_PUBLISHABLE_KEY, Authorization: \'Bearer x\' };',
	'    return res.status(200).json({ ok: Boolean(apiKey) && Boolean(header) });',
	'}'
].join('\n');

// --- detector ---------------------------------------------------------------

function lineOf(text, index) {
	return text.slice(0, index).split('\n').length;
}

// Returns a flat list of { pattern, line } hits.
function findHits(text) {
	const hits = [];
	const p1global = new RegExp(P1.source, P1.flags.includes('g') ? P1.flags : P1.flags + 'g');
	for (const m of text.matchAll(p1global)) {
		hits.push({ pattern: 'P1', line: lineOf(text, m.index) });
	}
	for (const m of text.matchAll(P2)) {
		hits.push({ pattern: 'P2', line: lineOf(text, m.index) });
	}
	return hits;
}

// Clusters hits into "violation sites": hits within 10 lines of each other in
// the same file are treated as one site (e.g. the P1 phrase on L14 inside the
// P2 console window starting on L13 = one offending statement).
function countSites(hits) {
	const lines = hits.map((h) => h.line).sort((a, b) => a - b);
	let sites = 0;
	let last = -Infinity;
	for (const line of lines) {
		if (line - last > 10) sites += 1;
		last = line;
	}
	return sites;
}

function scanText(text) {
	const hits = findHits(text);
	return { hits, sites: countSites(hits) };
}

// --- self-test --------------------------------------------------------------

const posResult = scanText(POSITIVE_FIXTURE);
const negResult = scanText(NEGATIVE_FIXTURE);
const fixtureProblems = [];
if (posResult.sites < 1) fixtureProblems.push('positive fixture NOT flagged');
if (negResult.sites !== 0) fixtureProblems.push('negative fixture incorrectly flagged (' + negResult.sites + ' sites)');
if (fixtureProblems.length > 0) {
	console.error('detector broken: ' + fixtureProblems.join('; '));
	console.error('→ fix the detector before trusting any scan result (exit 2)');
	process.exit(2);
}

// --- scan scope -------------------------------------------------------------

const scopeArg = process.argv[2];
const scope = scopeArg ? path.resolve(scopeArg) : DEFAULT_SCOPE;
const scopeLabel = scopeArg ? scope.replace(/\\/g, '/') + '/*.js' : 'api/*.js';

if (!fs.existsSync(scope) || !fs.statSync(scope).isDirectory()) {
	console.error('scope directory not found: ' + scope + ' (exit 2)');
	process.exit(2);
}

const files = fs.readdirSync(scope)
	.filter((f) => f.endsWith('.js'))
	.sort();

let totalSites = 0;
const violations = [];
for (const f of files) {
	const full = path.join(scope, f);
	if (!fs.statSync(full).isFile()) continue;
	const text = fs.readFileSync(full, 'utf8');
	const { hits, sites } = scanText(text);
	if (sites > 0) {
		totalSites += sites;
		violations.push({ file: full.replace(/\\/g, '/'), hits });
	}
}

if (totalSites > 0) {
	console.log('api-key-presence logging: ' + totalSites + ' matches in ' + scopeLabel);
	for (const v of violations) {
		const detail = v.hits
			.map((h) => h.pattern + ' @L' + h.line + (h.pattern === 'P1' ? ' (key-presence phrase)' : ' (console window on OPENROUTER_API_KEY)'))
			.join('; ');
		console.log('  - ' + v.file + ': ' + detail);
	}
	console.log('detector self-test OK');
	process.exit(1);
}

console.log('api-key-presence logging: 0 matches in ' + scopeLabel + '; detector self-test OK');
console.log('scan scope: ' + files.length + ' file(s) under ' + scope.replace(/\\/g, '/'));
process.exit(0);
