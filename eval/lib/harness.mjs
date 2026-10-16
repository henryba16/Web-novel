// eval/lib/harness.mjs — shared module-level handler harness for the SchoolShield eval
// runner + Phase 01 probes (A4 payload probe, B4 prompt-hash parity capture, G16
// telemetry capture, G11 failure paths).
//
// Mechanism (probe-proven, see phase-01-innovate-decision_REF_15-10-26.md probes 1–3):
// bare-Node ESM import of api/*.js works (MODULE_TYPELESS warning known-benign — do NOT
// add "type" to package.json); a globalThis.fetch stub fully intercepts callOpenRouter;
// a mocked req/res drives each handler end-to-end. Zero provider credits by default.
//
// Synthetic-only: no real learner data ever flows through this harness.

export const STUB_API_KEY = 'stub-harness-openrouter-key';
export const STUB_SUPABASE_URL = 'https://stub-schoolshield.supabase.test';
export const STUB_SUPABASE_KEY = 'stub-harness-publishable-key';
export const STUB_TEACHER_ID = 'stub-teacher-0001';
export const STUB_TEACHER_JWT = 'stub-teacher-jwt';
export const DEFAULT_STUB_CONTENT =
	'Phản hồi kiểm thử từ máy chủ stub. Nội dung này chỉ dùng cho kiểm thử tự động, không phải kết quả AI thật.';

export const MAX_TOKENS_BY_ENDPOINT = {
	'analyze-ending': 600,
	'chat-ending': 400,
	'summarize-student': 600,
	'summarize-class': 800
};

// ---------------------------------------------------------------------------
// fetch stub

export function makeHttpResponse({ status = 200, body = null, bodyText = null, headers = {} } = {}) {
	const text = bodyText !== null ? bodyText : body === null ? '' : JSON.stringify(body);
	const headerMap = {};
	for (const [k, v] of Object.entries(headers)) headerMap[String(k).toLowerCase()] = String(v);
	return {
		ok: status >= 200 && status < 300,
		status,
		headers: { get: (name) => (Object.prototype.hasOwnProperty.call(headerMap, String(name).toLowerCase()) ? headerMap[String(name).toLowerCase()] : null) },
		async text() {
			return text;
		},
		async json() {
			return JSON.parse(text);
		}
	};
}

function behaviorToResponse(behavior, defaultContent) {
	switch (behavior.type) {
		case 'ok':
			return makeHttpResponse({
				status: 200,
				headers: behavior.headers || {},
				body: {
					model: behavior.model || 'stub/model-x',
					choices: [{ message: { content: behavior.content !== undefined ? behavior.content : defaultContent } }]
				}
			});
		case 'http':
			return makeHttpResponse({
				status: behavior.status,
				headers: behavior.headers || {},
				bodyText:
					behavior.bodyText !== undefined
						? behavior.bodyText
						: JSON.stringify({ error: { code: behavior.status, message: behavior.message || 'stub HTTP ' + behavior.status } })
			});
		case 'bodyError':
			return makeHttpResponse({
				status: 200,
				headers: behavior.headers || {},
				body: { error: { code: behavior.code, message: behavior.message || 'stub body error ' + behavior.code } }
			});
		case 'empty':
			return makeHttpResponse({
				status: 200,
				headers: behavior.headers || {},
				body: { model: behavior.model || 'stub/model-x', choices: [{ message: { content: '   ' } }] }
			});
		case 'garbage':
			return makeHttpResponse({ status: 200, headers: behavior.headers || {}, bodyText: 'not-json-at-all' });
		case 'throw':
			throw new Error(behavior.message || 'stub network error');
		default:
			throw new Error('unknown provider behavior: ' + JSON.stringify(behavior));
	}
}

/**
 * Install a globalThis.fetch stub that intercepts:
 *  - OpenRouter completions  (provider: 'stub' replays `providerBehaviors`; 'live' passes through)
 *  - Supabase auth/REST      (synthetic rows only — used by the summarize handlers)
 * Returns { providerCalls, supabaseCalls, takeTelemetry?, restore }.
 */
export function installFetchStub(options = {}) {
	const {
		provider = 'stub',
		providerBehaviors = null,
		defaultContent = DEFAULT_STUB_CONTENT,
		teacherId = STUB_TEACHER_ID,
		classRows = null,
		memberRows = null,
		runRows = null,
		onProviderCall = null
	} = options;

	const originalFetch = globalThis.fetch;
	const providerCalls = [];
	const supabaseCalls = [];
	const queue = providerBehaviors ? [...providerBehaviors] : null;

	globalThis.fetch = async (url, init = {}) => {
		const u = String(url);

		if (u.includes('openrouter.ai')) {
			let body = null;
			try {
				body = init.body ? JSON.parse(init.body) : null;
			} catch (e) {
				body = null;
			}
			const call = { url: u, method: init.method || 'GET', body };
			providerCalls.push(call);
			if (onProviderCall) onProviderCall(call);
			if (provider === 'live') {
				return originalFetch(url, init);
			}
			const behavior = queue && queue.length > 0 ? queue.shift() : { type: 'ok' };
			call.behavior = behavior;
			return behaviorToResponse(behavior, defaultContent);
		}

		if (u.includes('/auth/v1/user')) {
			supabaseCalls.push({ url: u, kind: 'auth' });
			return makeHttpResponse({ status: 200, body: { id: teacherId } });
		}
		if (u.includes('/rest/v1/classes')) {
			supabaseCalls.push({ url: u, kind: 'classes' });
			return makeHttpResponse({ status: 200, body: classRows || [] });
		}
		if (u.includes('/rest/v1/memberships')) {
			supabaseCalls.push({ url: u, kind: 'memberships' });
			return makeHttpResponse({ status: 200, body: memberRows || [] });
		}
		if (u.includes('/rest/v1/runs')) {
			supabaseCalls.push({ url: u, kind: 'runs' });
			return makeHttpResponse({ status: 200, body: runRows || [] });
		}

		throw new Error('fetch stub: unhandled URL (no real network allowed in stub mode): ' + u);
	};

	return {
		providerCalls,
		supabaseCalls,
		restore() {
			globalThis.fetch = originalFetch;
		}
	};
}

// ---------------------------------------------------------------------------
// handler invocation + env helpers

/** Drive one handler with a mocked req/res. Never throws — captures thrown errors. */
export async function invokeHandler(handler, { method = 'POST', body = {}, headers = {} } = {}) {
	const res = {
		statusCode: null,
		payload: null,
		status(code) {
			this.statusCode = code;
			return this;
		},
		json(obj) {
			this.payload = obj;
			return this;
		}
	};
	let threw = null;
	try {
		await handler({ method, body, headers }, res);
	} catch (error) {
		threw = error;
	}
	return { status: res.statusCode, payload: res.payload, threw };
}

/** Set env vars for the duration of fn (sync or async), then restore exactly. */
/**
 * Capture console.log/console.error output into an in-memory array of strings
 * (EXTEND-ONLY addition: no existing exports are changed). Used by the G16
 * telemetry gate and other probes that need to inspect structured telemetry
 * emitted by api/_openrouter.js without real I/O.
 *
 * Returns { lines, captured, logs, output, restore }. `lines` (and aliases) is
 * the same live array; each console call becomes one pushed string.
 */
export function makeTelemetryConsoleCapture() {
	const lines = [];
	const originalLog = console.log;
	const originalError = console.error;
	const stringify = (args) => args
		.map((a) => {
			if (typeof a === 'string') return a;
			if (a === null) return 'null';
			if (a === undefined) return 'undefined';
			try {
				return JSON.stringify(a);
			} catch (e) {
				return String(a);
			}
		})
		.join(' ');
	console.log = (...args) => {
		lines.push(stringify(args));
	};
	console.error = (...args) => {
		lines.push(stringify(args));
	};
	const restore = () => {
		console.log = originalLog;
		console.error = originalError;
	};
	const capture = { lines, captured: lines, logs: lines, output: lines, restore };
	return capture;
}

export function withEnv(env, fn) {
	const keys = Object.keys(env);
	const prev = {};
	for (const k of keys) {
		prev[k] = Object.prototype.hasOwnProperty.call(process.env, k) ? process.env[k] : undefined;
		if (env[k] === undefined) delete process.env[k];
		else process.env[k] = env[k];
	}
	const done = () => {
		for (const k of keys) {
			if (prev[k] === undefined) delete process.env[k];
			else process.env[k] = prev[k];
		}
	};
	try {
		const result = fn();
		if (result && typeof result.then === 'function') return result.finally(done);
		done();
		return result;
	} catch (error) {
		done();
		throw error;
	}
}

// ---------------------------------------------------------------------------
// fixed capture fixture (synthetic-only; used by prompt-hash parity + payload probe)

export const CAPTURE_FIXTURE = {
	session: {
		playerName: 'Nguyễn Văn Kiểm Thử',
		ending: { name: 'Kết B — Bình thường', description: 'Bạn giữ được sự cân bằng cơ bản trong các tình huống.' },
		stats: [
			{ key: 'empathy', value: 62 },
			{ key: 'awareness', value: 58 },
			{ key: 'safe', value: 47 }
		],
		route: [
			{ chapter: 1, scene: 'Khu vườn sau giờ học', context: 'Một bạn trong nhóm bị trêu chọc', choice: 'Đứng lại hỏi thăm bạn' },
			{ chapter: 2, scene: 'Hành lang lớp', context: 'Tin đồn lan nhanh trong lớp', choice: 'Không chia sẻ tin đồn' }
		],
		question: 'Mình nên làm gì khi thấy bạn cùng lớp bị cô lập trong giờ ra chơi?',
		history: [
			{ role: 'user', content: 'Phản hồi này giúp mình hiểu gì về lựa chọn của mình?' },
			{ role: 'assistant', content: 'Bạn đã chú ý đến cảm xúc của người khác trong nhiều tình huống.' }
		]
	},
	teacher: {
		studentId: 'stub-student-0001',
		classId: 'stub-class-0001',
		classRow: { id: 'stub-class-0001', name: 'Lớp 9A kiểm thử', code: 'KTHU1234', teacher_id: 'stub-teacher-0001' },
		memberRows: [
			{ student_id: 'stub-student-0001', status: 'active' },
			{ student_id: 'stub-student-0002', status: 'active' }
		],
		runRows: [
			{
				id: 'stub-run-0001',
				student_id: 'stub-student-0001',
				class_id: 'stub-class-0001',
				status: 'finished',
				empathy: 62,
				awareness: 58,
				safe: 47,
				ending_name: 'Kết B — Bình thường',
				updated_at: '2026-10-01T08:30:00.000Z',
				finished_at: '2026-10-01T08:30:00.000Z',
				choices: [
					{ scene: 'Khu vườn sau giờ học', choice: 'Đứng lại hỏi thăm bạn' },
					{ scene: 'Hành lang lớp', choice: 'Không chia sẻ tin đồn' }
				]
			},
			{
				id: 'stub-run-0002',
				student_id: 'stub-student-0002',
				class_id: 'stub-class-0001',
				status: 'finished',
				empathy: 40,
				awareness: 35,
				safe: 30,
				ending_name: 'Kết A — Khó khăn',
				updated_at: '2026-10-02T09:00:00.000Z',
				finished_at: '2026-10-02T09:00:00.000Z',
				choices: [{ scene: 'Sân trường', choice: 'Im lặng bỏ đi' }]
			},
			{
				id: 'stub-run-0003',
				student_id: 'stub-student-0001',
				class_id: 'stub-class-0001',
				status: 'in_progress',
				empathy: 10,
				awareness: 10,
				safe: 10,
				ending_name: null,
				updated_at: '2026-10-03T10:00:00.000Z',
				finished_at: null,
				choices: []
			}
		]
	}
};

/** Build standard request bodies for the 4 handler flows from the fixture. */
export function buildFlows(fixture = CAPTURE_FIXTURE) {
	const s = fixture.session;
	const t = fixture.teacher;
	return {
		'analyze-ending': {
			env: { OPENROUTER_API_KEY: STUB_API_KEY },
			body: { playerName: s.playerName, ending: s.ending, stats: s.stats, route: s.route },
			headers: {},
			stubOptions: {}
		},
		'chat-ending': {
			env: { OPENROUTER_API_KEY: STUB_API_KEY },
			body: {
				endingData: { playerName: s.playerName, ending: s.ending, stats: s.stats, route: s.route },
				history: s.history,
				question: s.question
			},
			headers: {},
			stubOptions: {}
		},
		'summarize-student': {
			env: {
				OPENROUTER_API_KEY: STUB_API_KEY,
				SUPABASE_URL: STUB_SUPABASE_URL,
				SUPABASE_PUBLISHABLE_KEY: STUB_SUPABASE_KEY
			},
			body: { studentId: t.studentId, classId: t.classId },
			headers: { authorization: 'Bearer ' + STUB_TEACHER_JWT },
			stubOptions: { classRows: [t.classRow], memberRows: t.memberRows, runRows: t.runRows }
		},
		'summarize-class': {
			env: {
				OPENROUTER_API_KEY: STUB_API_KEY,
				SUPABASE_URL: STUB_SUPABASE_URL,
				SUPABASE_PUBLISHABLE_KEY: STUB_SUPABASE_KEY
			},
			body: { classId: t.classId },
			headers: { authorization: 'Bearer ' + STUB_TEACHER_JWT },
			stubOptions: { classRows: [t.classRow], memberRows: t.memberRows, runRows: t.runRows }
		}
	};
}

/** Import the 4 handler modules from a repo root. */
export async function loadHandlers(repoRoot) {
	const url = (p) => new URL(p, 'file:///' + repoRoot.replace(/\\/g, '/') + '/').href;
	const [analyze, chat, student, klass] = await Promise.all([
		import(url('api/analyze-ending.js')),
		import(url('api/chat-ending.js')),
		import(url('api/summarize-student.js')),
		import(url('api/summarize-class.js'))
	]);
	return {
		'analyze-ending': analyze.default,
		'chat-ending': chat.default,
		'summarize-student': student.default,
		'summarize-class': klass.default
	};
}
