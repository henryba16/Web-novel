/* global window, fetch, localStorage, navigator */
/* SchoolShield Phase 2 PoC — zero-dependency Supabase thin REST client.
 *
 * Talks to Supabase Auth REST + PostgREST with fetch only. No CDN, no npm
 * package, same-origin script (CSP-safe). Uses the NEW-NAMING publishable
 * key (sb_publishable_*) ONLY. Legacy key names and server-side-only keys
 * are FORBIDDEN here (see plan section 0.4 for the key placement table).
 *
 * Public surface:
 *   CloudClient.isEnabled() -> bool
 *   CloudClient.signUp / signIn / signOut / getSession / getUser /
 *     sendPasswordReset / updatePassword / refreshSession
 *   CloudClient.rest(table, { method, body, params, token, prefer }) -> json
 * Throws CloudError { code, message, offline }.
 */
'use strict';
(function () {
	var SESSION_KEY = 'schoolshield-session';

	function CloudError(code, message, offline) {
		this.name = 'CloudError';
		this.code = code || 'unknown';
		this.message = message || 'Cloud request failed.';
		this.offline = !!offline;
	}
	CloudError.prototype = Object.create(Error.prototype);
	CloudError.prototype.constructor = CloudError;

	function config() {
		return window.SUPABASE_CONFIG || { CLOUD_DISABLED: true };
	}

	function isEnabled() {
		var c = config();
		return !c.CLOUD_DISABLED && !!c.SUPABASE_URL && !!c.SUPABASE_PUBLISHABLE_KEY;
	}

	function requireEnabled() {
		if (!isEnabled()) {
			throw new CloudError('cloud_disabled', 'Cloud sync is not configured on this build (guest mode).');
		}
	}

	function baseUrl() {
		return config().SUPABASE_URL.replace(/\/+$/, '');
	}

	function pubKey() {
		return config().SUPABASE_PUBLISHABLE_KEY;
	}

	function loadSession() {
		try {
			var raw = localStorage.getItem(SESSION_KEY);
			return raw ? JSON.parse(raw) : null;
		} catch (e) {
			return null;
		}
	}

	function saveSession(session) {
		try {
			if (session) {
				localStorage.setItem(SESSION_KEY, JSON.stringify(session));
			} else {
				localStorage.removeItem(SESSION_KEY);
			}
		} catch (e) {
			/* storage pressure: session stays in memory only */
		}
	}

	function clearSession() {
		saveSession(null);
	}

	function isOfflineError(err) {
		return (
			(typeof navigator !== 'undefined' && navigator.onLine === false) ||
			(err && (err.name === 'TypeError' || /fetch|network|Failed to fetch/i.test(err.message || '')))
		);
	}

	function authHeaders(token) {
		var h = { apikey: pubKey(), 'Content-Type': 'application/json' };
		if (token) {
			h.Authorization = 'Bearer ' + token;
		}
		return h;
	}

	async function readError(res) {
		var message = 'Request failed (HTTP ' + res.status + ').';
		var code = 'http_' + res.status;
		try {
			var body = await res.json();
			if (body) {
				if (typeof body.msg === 'string' && body.msg) {
					message = body.msg;
				} else if (typeof body.message === 'string' && body.message) {
					message = body.message;
				} else if (typeof body.error_description === 'string' && body.error_description) {
					message = body.error_description;
				} else if (typeof body.error === 'string' && body.error) {
					message = body.error;
				}
				if (typeof body.code === 'string' && body.code) {
					code = body.code;
				} else if (typeof body.error_code === 'string' && body.error_code) {
					code = body.error_code;
				}
			}
		} catch (e) {
			/* non-JSON error body: keep default message */
		}
		return new CloudError(code, message, res.status === 0);
	}

	async function authFetch(path, options) {
		requireEnabled();
		options = options || {};
		var url = baseUrl() + '/auth/v1/' + path;
		var res;
		try {
			res = await fetch(url, {
				method: options.method || 'GET',
				headers: authHeaders(options.token),
				body: options.body ? JSON.stringify(options.body) : undefined
			});
		} catch (err) {
			throw new CloudError('network', 'Network unavailable. Please check your connection.', isOfflineError(err));
		}
		if (!res.ok) {
			throw await readError(res);
		}
		if (res.status === 204) {
			return null;
		}
		return res.json();
	}

	/* ---- Auth REST (GoTrue) ---- */

	async function signUp(email, password, metadata) {
		/* metadata becomes user_metadata (SDK equivalent: options.data).
		 * The DB trigger reads role/display_name from it to create profiles. */
		var data = await authFetch('signup', {
			method: 'POST',
			body: { email: email, password: password, data: metadata || {} }
		});
		if (data && data.session) {
			saveSession(normalizeSession(data.session, data.user));
		} else if (data && data.user && !data.session) {
			/* Email confirmation ON: no session yet — caller shows "check inbox". */
		}
		return data;
	}

	async function signIn(email, password) {
		var data = await authFetch('token?grant_type=password', {
			method: 'POST',
			body: { email: email, password: password }
		});
		var session = normalizeSession(data, data.user);
		saveSession(session);
		return session;
	}

	async function signOut() {
		var s = loadSession();
		try {
			if (s && s.access_token) {
				await authFetch('logout', { method: 'POST', token: s.access_token });
			}
		} catch (e) {
			/* logout is best-effort: local session is cleared regardless */
		}
		clearSession();
	}

	function normalizeSession(data, user) {
		return {
			access_token: data.access_token,
			refresh_token: data.refresh_token || null,
			expires_at: data.expires_in ? Date.now() + data.expires_in * 1000 : null,
			token_type: data.token_type || 'bearer',
			user: user || data.user || null
		};
	}

	function getSession() {
		return loadSession();
	}

	async function getUser() {
		requireEnabled();
		var s = loadSession();
		if (!s || !s.access_token) {
			return null;
		}
		var user = await authFetch('user', { token: s.access_token });
		s.user = user;
		saveSession(s);
		return user;
	}

	async function refreshSession() {
		requireEnabled();
		var s = loadSession();
		if (!s || !s.refresh_token) {
			throw new CloudError('no_session', 'No saved session to refresh.');
		}
		var data = await authFetch('token?grant_type=refresh_token', {
			method: 'POST',
			body: { refresh_token: s.refresh_token }
		});
		var session = normalizeSession(data, data.user || s.user);
		if (!session.refresh_token) {
			session.refresh_token = s.refresh_token;
		}
		saveSession(session);
		return session;
	}

	async function sendPasswordReset(email, redirectTo) {
		return authFetch('recover', {
			method: 'POST',
			body: redirectTo ? { email: email, redirect_to: redirectTo } : { email: email }
		});
	}

	async function updatePassword(newPassword, token) {
		var s = token ? { access_token: token } : loadSession();
		if (!s || !s.access_token) {
			throw new CloudError('no_session', 'Recovery session missing. Open the link from your email first.');
		}
		return authFetch('user', {
			method: 'PUT',
			token: s.access_token,
			body: { password: newPassword }
		});
	}

	/* ---- PostgREST ---- */

	async function rest(table, options) {
		requireEnabled();
		options = options || {};
		var url = baseUrl() + '/rest/v1/' + table;
		if (options.params) {
			var qs = Object.keys(options.params)
				.map(function (k) {
					return encodeURIComponent(k) + '=' + encodeURIComponent(options.params[k]);
				})
				.join('&');
			if (qs) {
				url += '?' + qs;
			}
		}
		var headers = authHeaders(options.token);
		if (options.method === 'POST' || options.method === 'PATCH') {
			headers.Prefer = options.prefer || 'return=representation';
			headers['Content-Type'] = 'application/json';
		}
		var res;
		try {
			res = await fetch(url, {
				method: options.method || 'GET',
				headers: headers,
				body: options.body !== undefined ? JSON.stringify(options.body) : undefined
			});
		} catch (err) {
			throw new CloudError('network', 'Network unavailable. Please check your connection.', isOfflineError(err));
		}
		if (!res.ok) {
			throw await readError(res);
		}
		if (res.status === 204) {
			return null;
		}
		var text = await res.text();
		return text ? JSON.parse(text) : null;
	}

	function accessToken() {
		var s = loadSession();
		return s && s.access_token ? s.access_token : null;
	}

	window.CloudError = CloudError;
	window.CloudClient = {
		SESSION_KEY: SESSION_KEY,
		isEnabled: isEnabled,
		getSession: getSession,
		clearSession: clearSession,
		signUp: signUp,
		signIn: signIn,
		signOut: signOut,
		getUser: getUser,
		refreshSession: refreshSession,
		sendPasswordReset: sendPasswordReset,
		updatePassword: updatePassword,
		rest: rest,
		accessToken: accessToken
	};
})();
