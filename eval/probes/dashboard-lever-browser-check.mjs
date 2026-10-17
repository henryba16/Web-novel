// eval/probes/dashboard-lever-browser-check.mjs — Phase 03 G7/G11 runtime DOM evidence.
//
// SCOPE: real headless browser (Edge/Chrome) renders the REAL dashboard.html +
// js/cloud-dashboard.js from a temporary copy, with the unauthenticated
// redirect neutralized and the auth/data flow short-circuited (probe shim) so
// the page reaches its end-of-body state offline. It proves, at runtime:
//   - OFF (repo default): #ai-class-block gains `hidden` via applyPilotLever.
//   - ON (temp copy flag=true): the pilot label element renders the
//     experimental label text and loses `hidden`; the block stays visible.
//   - zero load-time uncaught errors in both states (collector installed
//     before any script; reported at end of body).
// It does NOT prove: authenticated teacher data flows, per-student block
// rendering (needs auth + class data — code-level evidence only), cross-browser
// rendering, or live Supabase behavior. Browser UI automation for those
// remains the registered backlog (teacher-ui-automation_NOTE_16-10-26.md).
//
// Windows-only (probe machine has Edge/Chrome in standard locations).
// Usage: node eval/probes/dashboard-lever-browser-check.mjs
// Exit 0 = all pass; 1 = failures; 2 = no headless browser available.

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(SCRIPT_DIR, '..', '..');

const BROWSER_CANDIDATES = [
	'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
	'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
	'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
	'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
];

let failures = 0;
function pass(msg) { console.log('PASS ' + msg); }
function fail(msg) { failures += 1; console.error('FAIL ' + msg); }
function check(cond, msg) { if (cond) pass(msg); else fail(msg); }

// ---------------------------------------------------------------------------
// temp copy helpers

function copyDir(src, dest) {
	fs.mkdirSync(dest, { recursive: true });
	for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
		const s = path.join(src, entry.name);
		const d = path.join(dest, entry.name);
		if (entry.isDirectory()) copyDir(s, d);
		else fs.copyFileSync(s, d);
	}
}

function prepareTempCopy(dir) {
	fs.rmSync(dir, { recursive: true, force: true });
	fs.mkdirSync(dir, { recursive: true });
	fs.copyFileSync(path.join(ROOT, 'dashboard.html'), path.join(dir, 'dashboard.html'));
	copyDir(path.join(ROOT, 'js'), path.join(dir, 'js'));
	copyDir(path.join(ROOT, 'style'), path.join(dir, 'style'));

	const file = path.join(dir, 'dashboard.html');
	let html = fs.readFileSync(file, 'utf8');

	// 1) Neutralize the two unauthenticated redirects (auth gate is not under
	//    test here; the live gate + login flow are proven elsewhere).
	const redirect = "window.location.href = 'login.html';";
	const redirectCount = html.split(redirect).length - 1;
	if (redirectCount !== 2) {
		throw new Error('expected 2 auth redirects, found ' + redirectCount);
	}
	html = html.split(redirect).join('/* probe: auth redirect neutralized */;');

	// 2) Probe shim: short-circuit init() after the session check so the page
	//    reaches its end-of-body state offline (no network). Everything else
	//    (lever, label, markup) stays real.
	const shimAnchor = "                var session = window.CloudClient.getSession();";
	if (!html.includes(shimAnchor)) {
		throw new Error('probe shim anchor not found (init() changed?)');
	}
	html = html.replace(
		shimAnchor,
		'                /* probe shim: offline end-of-body state (auth/data excluded) */\n' +
		'                window.__probeShimmed = true;\n' +
		'                return;\n' +
		shimAnchor
	);

	// 3) Error collector — installed before every other script.
	const collector = [
		'<script>',
		'window.__probeErrors = [];',
		"window.addEventListener('error', function (e) { window.__probeErrors.push(String((e && e.message) || 'resource-error')); });",
		"window.addEventListener('unhandledrejection', function (e) { window.__probeErrors.push('unhandledrejection: ' + String((e && e.reason && (e.reason.message || e.reason)) || 'unknown')); });",
		'</script>',
		'</head>'
	].join('\n');
	html = html.replace('</head>', collector);

	// 4) Reporter — end of body (runs after the main inline script).
	const reporter = [
		'<script>',
		'(function () {',
		"  var d = document.createElement('div');",
		"  d.id = 'probe-error-count';",
		"  d.setAttribute('data-count', String((window.__probeErrors || []).length));",
		"  d.setAttribute('data-pilot', String(!!(window.CloudDashboard && window.CloudDashboard.TEACHER_PILOT_ENABLED)));",
		"  d.setAttribute('data-shim', String(!!window.__probeShimmed));",
		"  d.textContent = (window.__probeErrors || []).join(' || ').slice(0, 400);",
		'  document.body.appendChild(d);',
		'})();',
		'</script>',
		'</body>'
	].join('\n');
	html = html.replace('</body>', reporter);

	fs.writeFileSync(file, html);
}

function flipPilotOn(dir) {
	const file = path.join(dir, 'js', 'cloud-dashboard.js');
	let src = fs.readFileSync(file, 'utf8');
	const needle = 'var TEACHER_PILOT_ENABLED = false;';
	const count = src.split(needle).length - 1;
	if (count !== 1) throw new Error('pilot flag anchor count = ' + count);
	src = src.split(needle).join('var TEACHER_PILOT_ENABLED = true;');
	fs.writeFileSync(file, src);
}

function dumpDom(browser, dir, profileDir) {
	const url = pathToFileURL(path.join(dir, 'dashboard.html')).href;
	fs.rmSync(profileDir, { recursive: true, force: true });
	const args = [
		'--headless=new',
		'--disable-gpu',
		'--no-first-run',
		'--no-default-browser-check',
		'--user-data-dir=' + profileDir,
		'--dump-dom',
		url
	];
	return execFileSync(browser, args, { timeout: 120000, maxBuffer: 50 * 1024 * 1024, encoding: 'utf8' });
}

// ---------------------------------------------------------------------------

const browser = BROWSER_CANDIDATES.find((p) => fs.existsSync(p));
if (!browser) {
	console.error('NO HEADLESS BROWSER FOUND (Edge/Chrome standard paths) — probe UNAVAILABLE (exit 2).');
	process.exit(2);
}

const baseDir = path.join(os.tmpdir(), 'opencode', 'dash-lever-browser-probe');
const offDir = path.join(baseDir, 'off');
const onDir = path.join(baseDir, 'on');

prepareTempCopy(offDir);
prepareTempCopy(onDir);
flipPilotOn(onDir);

let offDom;
let onDom;
try {
	offDom = dumpDom(browser, offDir, path.join(baseDir, 'profile-off'));
} catch (e) {
	fail('OFF dump failed: ' + e.message);
}
try {
	onDom = dumpDom(browser, onDir, path.join(baseDir, 'profile-on'));
} catch (e) {
	fail('ON dump failed: ' + e.message);
}

if (typeof offDom === 'string') {
	console.log('--- Section A: pilot OFF (repo default) ---');
	const err = offDom.match(/id="probe-error-count"[^>]*data-count="(\d+)"/);
	const pilot = offDom.match(/id="probe-error-count"[^>]*data-pilot="(\w+)"/);
	check(err !== null, 'OFF: page reached end-of-body reporter');
	check(pilot !== null && pilot[1] === 'false', 'OFF: TEACHER_PILOT_ENABLED resolved false in browser');
	const block = offDom.match(/<div id="ai-class-block"([^>]*)>/);
	check(block !== null && /hidden/.test(block[1]), 'OFF: #ai-class-block gains the hidden attribute via the lever');
	const label = offDom.match(/<p class="sub pilot-note" id="ai-class-pilot"([^>]*)>([\s\S]*?)<\/p>/);
	check(label !== null && /hidden/.test(label[1]), 'OFF: pilot label element present and hidden');
	check(label !== null && label[2].trim() === '', 'OFF: pilot label carries no text while pilot off');
	check(err !== null && err[1] === '0', 'OFF: zero load-time uncaught errors (count=' + (err && err[1]) + ')');
}

if (typeof onDom === 'string') {
	console.log('--- Section B: pilot ON (temp copy flag flipped) ---');
	const err = onDom.match(/id="probe-error-count"[^>]*data-count="(\d+)"/);
	const pilot = onDom.match(/id="probe-error-count"[^>]*data-pilot="(\w+)"/);
	check(err !== null, 'ON: page reached end-of-body reporter');
	check(pilot !== null && pilot[1] === 'true', 'ON: TEACHER_PILOT_ENABLED resolved true in browser');
	const block = onDom.match(/<div id="ai-class-block"([^>]*)>/);
	check(block !== null && !/hidden/.test(block[1]), 'ON: #ai-class-block stays visible');
	const label = onDom.match(/<p class="sub pilot-note" id="ai-class-pilot"([^>]*)>([\s\S]*?)<\/p>/);
	check(label !== null && !/hidden/.test(label[1]), 'ON: pilot label element visible');
	check(label !== null && label[2].includes('Bản thử nghiệm do AI tạo'), 'ON: experimental label text rendered');
	check(label !== null && label[2].includes('không dùng để đánh giá'), 'ON: label carries the not-for-grading line');
	check(err !== null && err[1] === '0', 'ON: zero load-time uncaught errors (count=' + (err && err[1]) + ')');
}

console.log('');
console.log('artifacts: ' + baseDir);
if (failures > 0) {
	console.error('DASHBOARD LEVER BROWSER CHECK FAILED: ' + failures + ' failure(s)');
	process.exit(1);
}
console.log('DASHBOARD LEVER BROWSER CHECK OK — real headless render: lever off hides the class AI section; lever on renders the experimental label; zero load-time errors.');
process.exit(0);
