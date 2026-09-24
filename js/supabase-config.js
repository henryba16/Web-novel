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

})();
