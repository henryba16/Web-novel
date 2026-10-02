// Shared OpenRouter helper for all /api AI endpoints.
//
// Problem: every handler hardcoded a single model
// ('google/gemma-4-26b-a4b-it:free'). When OpenRouter rate-limits
// that model (HTTP 429 — free tier is 20 RPM / 50-1000 RPD), the
// endpoint immediately returned the error with no fallback.
//
// Fix: sequential client-side fallback across models + OpenRouter
// native `models` array on each attempt (server-side failover).
// Retryable statuses (404 retired model, 429, 5xx, 408) try the next
// model. Auth / quota / validation errors (400/401/402/403) return
// immediately — retrying those is useless.
//
// Override without redeploy-code change:
//   OPENROUTER_PRIMARY_MODEL  — single model id (default: gemma-4 free)
//   OPENROUTER_FALLBACK_MODELS — comma-separated model ids
//
// Vercel: files named api/_*.js are NOT routed as endpoints, so this
// module is import-only. Handlers import via:
//   import { callOpenRouter } from './_openrouter.js';

const DEFAULT_PRIMARY = 'google/gemma-4-26b-a4b-it:free';

// Verified free via GET /api/v1/models (pricing.prompt "0") on 2026-10-02.
// gemma-3-27b-it:free and llama-3.3-70b-instruct:free are GONE from the
// catalog (paid-only now) — do NOT re-add them without re-checking.
// Last entry is always the Free Models Router: it picks a random
// available free model, so the chain degrades gracefully even when
// every named model is rate-limited or retired.
const DEFAULT_FALLBACKS = [
	'google/gemma-4-31b-it:free',
	'qwen/qwen3.8-27b:free',
	'openrouter/free'
];

// Hard cap on total attempts: bounds serverless latency when every
// model is failing. NOTE: this is NOT limited to 3 — only each
// per-request native `models` array is capped at 3 (OpenRouter rejects
// longer arrays with 400). The client-side loop may walk more models
// across separate requests.
const MAX_ATTEMPTS = 6;

function modelList() {
	const primary = (
		process.env.OPENROUTER_PRIMARY_MODEL || DEFAULT_PRIMARY
	)
		.trim();

	const raw = process.env.OPENROUTER_FALLBACK_MODELS;

	const fallbacks = (
		raw === undefined || raw === null || String(raw).trim() === ''
			? DEFAULT_FALLBACKS
			: String(raw)
					.split(',')
					.map((s) => s.trim())
					.filter(Boolean)
	).filter((m) => m && m !== primary);

	// Client loop may exceed 3 models; each individual request's native
	// `models` array is sliced to 3 at send time (OpenRouter max).
	return [primary, ...fallbacks].slice(0, MAX_ATTEMPTS);
}

// Statuses worth trying the NEXT model for.
// 404 included: a retired/renamed `:free` variant returns "model not
// found" — that must fall through, not abort the chain. Everything
// else non-retryable (400 bad request, 401 bad key, 402 no credits,
// 403 guardrail/moderation) fails identically on every model.
const RETRYABLE_STATUS = new Set([404, 408, 429, 500, 502, 503, 504, 529]);

function isRetryableStatus(status) {
	return RETRYABLE_STATUS.has(Number(status));
}

// OpenRouter can return provider failures as HTTP 200 with an
// `{ error: { code, message } }` body (headers already sent before
// the provider failed). Detect that so we can fall through to the
// next model instead of returning an empty reply.
function bodyErrorCode(data) {
	const code = data && data.error && data.error.code;
	const n = Number(code);
	return Number.isFinite(n) ? n : null;
}

function hasUsableChoice(data) {
	const content =
		data && data.choices && data.choices[0] && data.choices[0].message
			? data.choices[0].message.content
			: null;
	return typeof content === 'string' && content.trim().length > 0;
}

export const OPENROUTER_MODELS = modelList();

export function getOpenRouterModels() {
	// Re-read env on each call so tests / runtime env changes apply.
	return modelList();
}

export async function callOpenRouter({ messages, maxTokens }) {
	const apiKey = process.env.OPENROUTER_API_KEY;

	if (!apiKey) {
		return {
			ok: false,
			status: 500,
			errorText: 'OPENROUTER_API_KEY chưa được cấu hình trên máy chủ.',
			tried: [],
			model: null
		};
	}

	const models = modelList();
	const tried = [];
	let lastError = 'Unknown error';
	let lastStatus = 502;

	for (let i = 0; i < models.length; i++) {
		const candidate = models[i];
		// Native server-side failover for the remaining list, plus our
		// client-side loop across attempts (defense in depth).
		// Slice to 3: OpenRouter rejects longer `models` arrays (400).
		const remaining = models.slice(i, i + 3);
		tried.push(candidate);

		console.log(
			`[openrouter] attempt ${i + 1}/${models.length}: ${candidate}`
		);

		let response;
		try {
			response = await fetch(
				'https://openrouter.ai/api/v1/chat/completions',
				{
					method: 'POST',
					headers: {
						Authorization: `Bearer ${apiKey}`,
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						model: candidate,
						models: remaining,
						messages,
						...(maxTokens ? { max_tokens: maxTokens } : {})
					})
				}
			);
		} catch (networkError) {
			// Network / DNS / timeout — try next model.
			lastStatus = 502;
			lastError =
				(networkError && networkError.message) ||
				'Network error reaching OpenRouter';
			console.error(
				`[openrouter] ${candidate} network error:`,
				lastError
			);
			continue;
		}

		const retryAfter = response.headers
			? response.headers.get('Retry-After')
			: null;

		let text = '';
		try {
			text = await response.text();
		} catch (e) {
			text = '';
		}

		let data = null;
		try {
			data = text ? JSON.parse(text) : null;
		} catch (e) {
			data = null;
		}

		if (response.ok) {
			const code = bodyErrorCode(data);
			if (code !== null) {
				lastStatus = code;
				lastError =
					(data.error && data.error.message) || text || `Model error ${code}`;
				console.error(
					`[openrouter] ${candidate} body error ${code}:`,
					String(lastError).slice(0, 300)
				);
				if (!isRetryableStatus(code)) {
					return {
						ok: false,
						status: code,
						errorText: lastError,
						tried,
						model: null
					};
				}
				continue;
			}

			if (hasUsableChoice(data)) {
				const used =
					(data && data.model) || candidate;
				console.log(`[openrouter] success via ${used}`);
				return { ok: true, data, model: used, tried };
			}

			// 200 but empty (cold-start / scaling) — try next model.
			lastStatus = 502;
			lastError = 'Model returned empty content';
			console.error(
				`[openrouter] ${candidate} empty content, trying next model`
			);
			continue;
		}

		// Non-2xx HTTP status.
		lastStatus = response.status;
		lastError = text || `OpenRouter HTTP ${response.status}`;
		console.error(
			`[openrouter] ${candidate} HTTP ${response.status}:`,
			String(lastError).slice(0, 300),
			retryAfter ? `(Retry-After: ${retryAfter})` : ''
		);

		if (!isRetryableStatus(response.status)) {
			return {
				ok: false,
				status: response.status,
				errorText: lastError,
				tried,
				model: null
			};
		}
		// Retryable → fall through to next model immediately (honoring
		// Retry-After with a sleep would exceed serverless timeouts;
		// a different model has a separate rate-limit bucket).
	}

	console.error(
		`[openrouter] all ${tried.length} models exhausted:`,
		String(lastError).slice(0, 300)
	);

	return {
		ok: false,
		status: lastStatus,
		errorText: lastError,
		tried,
		model: null
	};
}
