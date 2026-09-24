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

	/* fetch with a hard timeout so a stalled request becomes a visible
	 * error instead of a forever-disabled button. 20s is generous for
	 * Supabase Auth/PostgREST over normal networks. */
	var REQUEST_TIMEOUT_MS = 20000;

	function fetchWithTimeout(url, init) {
		if (typeof AbortController === 'undefined') {
			return fetch(url, init);
		}
		var ctrl = new AbortController();
		var timer = setTimeout(function () {
			try {
				ctrl.abort();
			} catch (e) {
				/* ignore */
			}
		}, REQUEST_TIMEOUT_MS);
		return fetch(url, init).then(
			function (res) {
				clearTimeout(timer);
				return res;
			},
			function (err) {
				clearTimeout(timer);
				if (err && err.name === 'AbortError') {
					throw new CloudError('timeout', 'Hết thời gian chờ (20 giây). Kiểm tra mạng rồi thử lại.', false);
				}
				throw err;
			}
		);
	}

	async function readError(res) {
		var fallback = 'Request failed (HTTP ' + res.status + ').';
		var message = fallback;
		var code = 'http_' + res.status;
		var raw = '';
		try {
			raw = await res.text();
		} catch (e) {
			raw = '';
		}
		try {
			var body = raw ? JSON.parse(raw) : null;
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
			/* non-JSON body: fall through to raw snippet below */
		}
		if (message === fallback && raw) {
			message += ' ' + raw.slice(0, 200);
		}
		return new CloudError(code, message, res.status === 0);
	}

	async function authFetch(path, options) {
		requireEnabled();
		options = options || {};
		var url = baseUrl() + '/auth/v1/' + path;
		var res;
		try {
			res = await fetchWithTimeout(url, {
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
			res = await fetchWithTimeout(url, {
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

	/* Configured Supabase host (no key material) for diagnostics. */
	function configHost() {
		try {
			var u = baseUrl();
			var m = String(u).match(/^https?:\/\/([^/]+)/);
			return m ? m[1] : '';
		} catch (e) {
			return '';
		}
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
		accessToken: accessToken,
		configHost: configHost
	};
})();
