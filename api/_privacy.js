// api/_privacy.js — pseudonymization / payload-minimization helper (Phase 01, A2).
//
// Contract: process/features/ai-system/active/ai-upgrade-program_15-10-26/
//           ai-request-contract_REF_15-10-26.md §2.
//
// Rules applied by every handler BEFORE prompt assembly:
//   - NEUTRAL_PLAYER_LABEL: a learner-typed playerName is replaced by ONE
//     constant neutral label at every occurrence (the raw value is never
//     forwarded to the provider).
//   - classPromptLabel(): the class NAME is retained as the stable
//     non-secret class label (identical normalization to the previous inline
//     clamp(classRow.name || 'Lớp học', 120)); classes.code — the
//     rpc/join_class_by_code credential — is removed from prompt text
//     entirely by the handlers.
//
// Vercel: files named api/_*.js are NOT routed as endpoints (import-only).

// The single constant neutral label that replaces a learner-typed playerName
// at every prompt occurrence (analyze-ending + chat-ending).
export const NEUTRAL_PLAYER_LABEL = 'Học sinh';

// Class label for teacher-prompt fields. Output is byte-identical to the
// handlers' previous inline normalization for every input value.
export function classPromptLabel(name) {
	return String(name === null || name === undefined ? '' : name || 'Lớp học')
		.replace(/[\r\n]+/g, ' ')
		.trim()
		.slice(0, 120);
}
