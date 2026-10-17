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
//
// Telemetry (Phase 01 C1/C2): one structured JSON line per provider
// attempt plus one terminal line per call, emitted via console.log. Endpoint
// label is passed in by the caller and is payload-neutral (analyze-ending,
// chat-ending, summarize-student, summarize-class, or unknown). No secrets,
// names, free text, or IDs are ever logged — only request_id (random).
// Logging is fail-open: a telemetry error can never throw or change control.

import crypto from 'node:crypto';

const DEFAULT_PRIMARY = 'google/gemma-4-26b-a4b-it:free';

// Verified free via GET /api/v1/models (pricing.prompt "0") on 2026-10-02.
// gemma-3-27b-it:free and llama-3.3-70b-instruct:free are GONE from the
// catalog (paid-only now) — do NOT re-add them without re-checking.
// Last entry is always the Free Models Router: it picks a random
// available free model, so the chain degrades gracefully even when
// every named model is rate-limited or retired.
//
// Updated 2026-10-17 (owner directive): qwen/qwen3.8-27b:free is retired from
// the catalog (404) and was replaced by nvidia/nemotron-3-nano-omni-30b-a3b-
// reasoning:free. Live evidence (10 analyze calls on the henry preview): the
// three named models returned the output contract 4/4 times, while random
// router picks (content-safety / prose models) returned it 0/4 — so the named
// models are tried first and the router is only the last resort.
const DEFAULT_FALLBACKS = [
	'google/gemma-4-31b-it:free',
	'nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free',
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
	const code = data && data.error ? data.error.code : undefined;
	if (code === null || code === undefined) return null;
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

// Failure taxonomy classifiers used by telemetry (Phase 01 C2).
function failureClassForStatus(status) {
	const s = Number(status);
	if (s === 404) return 'retired_model';
	if (s === 408) return 'timeout';
	if (s === 429) return 'quota_rate';
	if (s >= 500) return 'provider_availability';
	return 'client_rejected';
}

function failureClassForCode(code) {
	const s = Number(code);
	if (s === 404) return 'retired_model';
	if (s === 408) return 'timeout';
	if (s === 429) return 'quota_rate';
	if (s >= 500) return 'provider_availability';
	if (s >= 400 && s <= 403) return 'client_rejected';
	return 'invalid_response';
}

// Parse Retry-After header into numeric seconds (Phase 04 cooldown math).
function parseRetryAfter(value) {
	if (value === null || value === undefined) return null;
	const direct = Number(value);
	if (Number.isFinite(direct)) return direct;
	const parsed = Date.parse(value);
	if (!Number.isNaN(parsed)) {
		const seconds = Math.round((parsed - Date.now()) / 1000);
		return seconds >= 0 ? seconds : 0;
	}
	return null;
}

// Random request id — the ONLY correlation id (no user/student data).
function newRequestId() {
	try {
		if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
			return crypto.randomUUID();
		}
	} catch (e) {
		// fall through
	}
	// Fallback (browser/old Node): not cryptographic, only for correlation.
	return 'req-' + Math.random().toString(36).slice(2) + '-' + Date.now().toString(36);
}

export const OPENROUTER_MODELS = modelList();

export function getOpenRouterModels() {
	// Re-read env on each call so tests / runtime env changes apply.
	return modelList();
}

export async function callOpenRouter({ messages, maxTokens, endpoint } = {}) {
	const callStart = Date.now();
	const requestId = newRequestId();
	const label =
		typeof endpoint === 'string' && endpoint.trim() !== ''
			? endpoint.trim()
			: 'unknown';
	const maxTokensNorm =
		maxTokens === null || maxTokens === undefined ? null : Number(maxTokens);

	// Look up the key before defining any console-based helper (log-hygiene P2).
	const apiKey = process.env.OPENROUTER_API_KEY;

	const telemetryFields = (extra) => ({
		ts: new Date().toISOString(),
		endpoint: label,
		request_id: requestId,
		max_tokens: maxTokensNorm,
		...extra
	});

	// Fail-open telemetry emitter: never throws, never alters control flow.
	const emitTelemetry = (record) => {
		try {
			console.log(JSON.stringify(record));
		} catch (e) {
			// intentional: telemetry must never throw
		}
	};

	if (!apiKey) {
		// Config gap: terminal-only record, 0 attempts, no provider call.
		emitTelemetry(
			telemetryFields({
				attempt: 0,
				candidate_model: null,
				provider_model_used: null,
				outcome: 'failed_early',
				http_status: null,
				failure_class: 'config_missing',
				latency_ms: Date.now() - callStart,
				retry_after_s: null,
				empty_content: false
			})
		);
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
	let lastFailureClass = 'provider_availability';

	for (let i = 0; i < models.length; i++) {
		const candidate = models[i];
		const remaining = models.slice(i, i + 3);
		tried.push(candidate);

		console.log(
			`[openrouter] attempt ${i + 1}/${models.length}: ${candidate}`
		);

		const attemptStart = Date.now();
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
			const latency = Date.now() - attemptStart;
			lastStatus = 502;
			lastError =
				(networkError && networkError.message) ||
				'Network error reaching OpenRouter';
			lastFailureClass = 'net_transport';
			console.error(
				`[openrouter] ${candidate} network error:`,
				lastError
			);
			emitTelemetry(
				telemetryFields({
					attempt: i + 1,
					candidate_model: candidate,
					provider_model_used: null,
					outcome: 'failed_chain',
					http_status: null,
					failure_class: 'net_transport',
					latency_ms: latency,
					retry_after_s: null,
					empty_content: false
				})
			);
			continue;
		}

		const retryAfter = response.headers
			? response.headers.get('Retry-After')
			: null;
		const retryAfterSec = parseRetryAfter(retryAfter);

		let text = '';
		try {
			text = await response.text();
		} catch (e) {
			text = '';
		}

		let data = null;
		let unparseable = false;
		try {
			data = text ? JSON.parse(text) : null;
		} catch (e) {
			data = null;
			unparseable = text.length > 0;
		}

		if (response.ok) {
			const code = bodyErrorCode(data);
			if (code !== null) {
				const cls = failureClassForCode(code);
				const retryable = isRetryableStatus(code);
				const latency = Date.now() - attemptStart;
				lastStatus = code;
				lastError =
					(data && data.error && data.error.message) || text || `Model error ${code}`;
				console.error(
					`[openrouter] ${candidate} body error ${code}:`,
					String(lastError).slice(0, 300)
				);
				lastFailureClass = cls;
				emitTelemetry(
					telemetryFields({
						attempt: i + 1,
						candidate_model: candidate,
						provider_model_used: null,
						outcome: retryable ? 'failed_chain' : 'failed_early',
						http_status: response.status,
						failure_class: cls,
						latency_ms: latency,
						retry_after_s: retryAfterSec,
						empty_content: false
					})
				);
				if (!retryable) {
					emitTelemetry(
						telemetryFields({
							attempt: i + 1,
							candidate_model: null,
							provider_model_used: null,
							outcome: 'failed_early',
							http_status: lastStatus,
							failure_class: cls,
							latency_ms: Date.now() - callStart,
							retry_after_s: null,
							empty_content: false
						})
					);
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

			if (unparseable) {
				const latency = Date.now() - attemptStart;
				lastStatus = 502;
				lastError = 'Unparseable provider response';
				lastFailureClass = 'invalid_response';
				console.error(
					`[openrouter] ${candidate} unparseable response`
				);
				emitTelemetry(
					telemetryFields({
						attempt: i + 1,
						candidate_model: candidate,
						provider_model_used: null,
						outcome: 'failed_early',
						http_status: response.status,
						failure_class: 'invalid_response',
						latency_ms: latency,
						retry_after_s: retryAfterSec,
						empty_content: false
					})
				);
				emitTelemetry(
					telemetryFields({
						attempt: i + 1,
						candidate_model: null,
						provider_model_used: null,
						outcome: 'failed_early',
						http_status: lastStatus,
						failure_class: 'invalid_response',
						latency_ms: Date.now() - callStart,
						retry_after_s: null,
						empty_content: false
					})
				);
				return {
					ok: false,
					status: 502,
					errorText: lastError,
					tried,
					model: null
				};
			}

			if (hasUsableChoice(data)) {
				const used =
					(data && data.model) || candidate;
				const latency = Date.now() - attemptStart;
				console.log(`[openrouter] success via ${used}`);
				emitTelemetry(
					telemetryFields({
						attempt: i + 1,
						candidate_model: candidate,
						provider_model_used: used,
						outcome: 'success',
						http_status: response.status,
						failure_class: null,
						latency_ms: latency,
						retry_after_s: retryAfterSec,
						empty_content: false
					})
				);
				emitTelemetry(
					telemetryFields({
						attempt: i + 1,
						candidate_model: null,
						provider_model_used: used,
						outcome: 'success',
						http_status: response.status,
						failure_class: null,
						latency_ms: Date.now() - callStart,
						retry_after_s: null,
						empty_content: false
					})
				);
				return { ok: true, data, model: used, tried };
			}

			// 200 but empty (cold-start / scaling) — try next model.
			const emptyLatency = Date.now() - attemptStart;
			lastStatus = 502;
			lastError = 'Model returned empty content';
			lastFailureClass = 'empty_content';
			console.error(
				`[openrouter] ${candidate} empty content, trying next model`
			);
			emitTelemetry(
				telemetryFields({
					attempt: i + 1,
					candidate_model: candidate,
					provider_model_used: null,
					outcome: 'failed_chain',
					http_status: response.status,
					failure_class: 'empty_content',
					latency_ms: emptyLatency,
					retry_after_s: retryAfterSec,
					empty_content: true
				})
			);
			continue;
		}

		// Non-2xx HTTP status.
		const retryable = isRetryableStatus(response.status);
		const cls = retryable
			? failureClassForStatus(response.status)
			: failureClassForStatus(response.status);
		const non2xxLatency = Date.now() - attemptStart;
		lastStatus = response.status;
		lastError = text || `OpenRouter HTTP ${response.status}`;
		lastFailureClass = cls;
		console.error(
			`[openrouter] ${candidate} HTTP ${response.status}:`,
			String(lastError).slice(0, 300),
			retryAfter ? `(Retry-After: ${retryAfter})` : ''
		);

		emitTelemetry(
			telemetryFields({
				attempt: i + 1,
				candidate_model: candidate,
				provider_model_used: null,
				outcome: retryable ? 'failed_chain' : 'failed_early',
				http_status: response.status,
				failure_class: cls,
				latency_ms: non2xxLatency,
				retry_after_s: retryAfterSec,
				empty_content: false
			})
		);

		if (!retryable) {
			emitTelemetry(
				telemetryFields({
					attempt: i + 1,
					candidate_model: null,
					provider_model_used: null,
					outcome: 'failed_early',
					http_status: lastStatus,
					failure_class: cls,
					latency_ms: Date.now() - callStart,
					retry_after_s: null,
					empty_content: false
				})
			);
			return {
				ok: false,
				status: response.status,
				errorText: lastError,
				tried,
				model: null
			};
		}
		// Retryable → fall through to next model immediately.
	}

	// Exhausted all models.
	const finalClass = lastFailureClass;
	console.error(
		`[openrouter] all ${tried.length} models exhausted:`,
		String(lastError).slice(0, 300)
	);

	emitTelemetry(
		telemetryFields({
			attempt: tried.length,
			candidate_model: null,
			provider_model_used: null,
			outcome: 'failed_chain',
			http_status: lastStatus,
			failure_class: finalClass,
			latency_ms: Date.now() - callStart,
			retry_after_s: null,
			empty_content: false
		})
	);

	return {
		ok: false,
		status: lastStatus,
		errorText: lastError,
		tried,
		model: null
	};
}