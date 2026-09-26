/* global window, localStorage, navigator */
/* SchoolShield Phase 2 PoC — auth flows (signup/login/logout/recovery).
 *
 * Signup passes user_metadata as `data: { role, display_name }` so the DB
 * trigger creates the profiles row. First-login ALSO upserts the own
 * profiles row client-side (G1 self-insert fallback) and claims pending
 * email invites. Role landing happens ONLY at the login moment
 * (student -> game.html, teacher -> dashboard.html); no route guards run
 * during play. Logout clears the session + in-memory user cache.
 */
'use strict';
(function () {
	var VALID_ROLES = ['student', 'teacher'];
	var LANDING = { student: 'game.html', teacher: 'dashboard.html' };

	var memoryUser = null;

	function normalizeRole(role) {
		return VALID_ROLES.indexOf(role) >= 0 ? role : 'student';
	}

	function landingFor(role) {
		return LANDING[normalizeRole(role)] || 'game.html';
	}

	function getSession() {
		return window.CloudClient.getSession();
	}

	function getCachedUser() {
		var s = getSession();
		return (s && s.user) || memoryUser || null;
	}

	async function fetchProfile(userId, token) {
		var rows = await window.CloudClient.rest('profiles', {
			params: { id: 'eq.' + userId, select: '*' },
			token: token
		});
		return rows && rows.length ? rows[0] : null;
	}

	/* G1 fallback: when the signup trigger has not created the row yet,
	 * the user inserts their OWN row (RLS self-insert). Never other rows. */
	async function ensureProfile(user, role, displayName, token) {
		var existing = await fetchProfile(user.id, token);
		if (existing) {
			return existing;
		}
		var row = {
			id: user.id,
			email: user.email,
			role: normalizeRole(role || (user.user_metadata && user.user_metadata.role)),
			display_name: displayName !== undefined
				? displayName
				: (user.user_metadata && user.user_metadata.display_name) || ''
		};
		var created = await window.CloudClient.rest('profiles', {
			method: 'POST',
			body: row,
			token: token
		});
		return (created && created.length ? created[0] : null) || row;
	}

	async function afterLogin(user, profile) {
		memoryUser = user;
		/* Persist role for session-aware entry points (index hero, nudge)
		 * without loading cloud scripts there. Cleared on sign-out. */
		try {
			if (profile && profile.role) {
				localStorage.setItem('schoolshield-role', profile.role);
			}
		} catch (e) {
			/* ignore */
		}
		/* Path-A invite claim: pending rows addressed to this email activate. */
		try {
			if (window.CloudClasses && typeof window.CloudClasses.claimPendingInvites === 'function') {
				await window.CloudClasses.claimPendingInvites(user.id, user.email);
			}
		} catch (e) {
			/* non-fatal: invites can be claimed on a later login */
		}
		/* Login-time merge: push outbox + local manual slots once. */
		try {
			if (window.CloudSync && typeof window.CloudSync.mergeOnLogin === 'function') {
				await window.CloudSync.mergeOnLogin(profile);
			}
		} catch (e) {
			/* non-fatal: pending runs stay queued for the sync button */
		}
	}

	async function signUp(email, password, role, displayName) {
		role = normalizeRole(role);
		var data = await window.CloudClient.signUp(email, password, {
			role: role,
			display_name: displayName || ''
		});
		if (data && data.session) {
			var user = data.user || (data.session && data.session.user);
			var profile = await ensureProfile(user, role, displayName || '', data.session.access_token);
			memoryUser = user;
			await afterLogin(user, profile);
			return { session: data.session, profile: profile, needsConfirmation: false };
		}
		/* Confirm-email ON: session arrives after the user clicks the link. */
		return { session: null, profile: null, needsConfirmation: true };
	}

	async function signIn(email, password) {
		var session = await window.CloudClient.signIn(email, password);
		var user = session.user || (await window.CloudClient.getUser());
		var profile = await ensureProfile(user, undefined, undefined, session.access_token);
		memoryUser = user;
		await afterLogin(user, profile);
		return { session: session, profile: profile };
	}

	/* Role landing — call ONLY at the login moment, never as a play guard. */
	function goToLanding(role) {
		window.location.href = landingFor(role);
	}

	async function signOut() {
		await window.CloudClient.signOut();
		memoryUser = null;
		try {
			localStorage.removeItem('schoolshield-role');
		} catch (e) {
			/* ignore */
		}
		try {
			if (window.CloudRun && typeof window.CloudRun.clearRun === 'function') {
				window.CloudRun.clearRun();
			}
		} catch (e) {
			/* ignore */
		}
		window.location.href = 'index.html';
	}

	/* Local-only sign out (no network): clears session + cache, goes home. */
	function signOutLocal() {
		try {
			localStorage.removeItem('schoolshield-role');
		} catch (e) {
			/* ignore */
		}
		try {
			window.CloudClient.clearSession();
		} catch (e) {
			try {
				localStorage.removeItem(window.CloudClient.SESSION_KEY);
			} catch (ignored) {
				/* ignore */
			}
		}
		memoryUser = null;
		window.location.href = 'index.html';
	}

	async function currentProfile() {
		var session = getSession();
		if (!session || !session.access_token) {
			return null;
		}
		try {
			var user = session.user || (await window.CloudClient.getUser());
			if (!user) {
				return null;
			}
			return fetchProfile(user.id, session.access_token);
		} catch (e) {
			return null;
		}
	}

	function isOnline() {
		return typeof navigator === 'undefined' ? true : navigator.onLine !== false;
	}

	window.CloudAuth = {
		VALID_ROLES: VALID_ROLES,
		normalizeRole: normalizeRole,
		landingFor: landingFor,
		goToLanding: goToLanding,
		getSession: getSession,
		getCachedUser: getCachedUser,
		signUp: signUp,
		signIn: signIn,
		signOut: signOut,
		signOutLocal: signOutLocal,
		ensureProfile: ensureProfile,
		fetchProfile: fetchProfile,
		currentProfile: currentProfile,
		sendPasswordReset: function (email, redirectTo) {
			return window.CloudClient.sendPasswordReset(email, redirectTo);
		},
		updatePassword: function (newPassword, token) {
			return window.CloudClient.updatePassword(newPassword, token);
		},
		isOnline: isOnline
	};
})();
