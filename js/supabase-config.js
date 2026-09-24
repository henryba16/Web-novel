/* global window */
/* SchoolShield Phase 2 PoC — Supabase client config.
 *
 * Publishable URL + key are hardcoded BY DESIGN (public values; RLS
 * enforces isolation — owner-accepted G4 + confirmed 24-09-26). No build
 * step needed. Rotate the key in the Supabase dashboard if ever exposed
 * somewhere unintended.
 * Server-side-only keys are forbidden in this file and everywhere
 * under js/ and *.html.
 */
'use strict';
(function () {
	var cfg = {
		SUPABASE_URL: 'https://zaroxemvvegegubnhsfj.supabase.co',
		SUPABASE_PUBLISHABLE_KEY: 'sb_publishable_djc-n8o4meNJKPmlkf3M9A_kkkH3V0E',
		CLOUD_DISABLED: false
	};

	if (
		!cfg.SUPABASE_URL ||
		!cfg.SUPABASE_PUBLISHABLE_KEY ||
		cfg.SUPABASE_URL.indexOf('__SUPABASE_') === 0 ||
		cfg.SUPABASE_PUBLISHABLE_KEY.indexOf('__SUPABASE_') === 0
	) {
		cfg.SUPABASE_URL = '';
		cfg.SUPABASE_PUBLISHABLE_KEY = '';
		cfg.CLOUD_DISABLED = true;
	}

	window.SUPABASE_CONFIG = cfg;

	/* DEBUG (safe: host only, never key material): shows in DevTools console
	 * whether this build carries injected config or is guest-only. */
	try {
		var hostMatch = String(cfg.SUPABASE_URL || '').match(/^https?:\/\/([^/]+)/);
		console.log(
			'[Cloud] config:',
			cfg.CLOUD_DISABLED
				? 'DISABLED — placeholders unreplaced (build env missing?)'
				: 'enabled, host=' + (hostMatch ? hostMatch[1] : '(bad URL)')
		);
	} catch (e) {
		/* logging must never break boot */
	}
})();
