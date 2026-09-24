/* global window */
/* SchoolShield Phase 2 PoC — Supabase client config.
 *
 * Build-time placeholders (the SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY
 * tokens below) are replaced by build-web.ts from Vercel env. When
 * unreplaced (local dev without env),
 * CLOUD_DISABLED is true and the game runs guest-only — guest play must
 * NEVER break when unconfigured.
 *
 * Only the publishable key lives here BY DESIGN (public key, RLS enforces
 * isolation — owner-accepted G4). Server-side-only keys are
 * forbidden in this file and everywhere under js/ and *.html.
 */
'use strict';
(function () {
	var cfg = {
		SUPABASE_URL: '__SUPABASE_URL__',
		SUPABASE_PUBLISHABLE_KEY: '__SUPABASE_PUBLISHABLE_KEY__',
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
