/* global window, localStorage, navigator */
/* SchoolShield Phase 2 PoC — overwrite-per-run sync with pending outbox.
 *
 * Outbox: localStorage 'schoolshield-pending-runs' = array of run snapshots.
 * Upload paths ONLY: login-time merge (mergeOnLogin), explicit sync button
 * (syncNow), finished-run save (saveFinished). Autosaves are NEVER
 * auto-uploaded — no timers, no observers, no background sync here.
 * Conflict rule: most-recent-manual-save wins by updated_at; syncing never
 * deletes a cloud-newer row, and the current snapshot timestamp is visible
 * via describeCurrent().
 */
'use strict';
(function () {
	var OUTBOX_KEY = 'schoolshield-pending-runs';
	var CURRENT_KEY = 'schoolshield-current-run';

	function nowIso() {
		return new Date().toISOString();
	}

	function loadOutbox() {
		try {
			var raw = localStorage.getItem(OUTBOX_KEY);
			var list = raw ? JSON.parse(raw) : [];
			return Array.isArray(list) ? list : [];
		} catch (e) {
			return [];
		}
	}

	function storeOutbox(list) {
		try {
			localStorage.setItem(OUTBOX_KEY, JSON.stringify(list));
		} catch (e) {
			/* storage pressure: keep in-memory copy only */
		}
	}

	function pendingCount() {
		return loadOutbox().length;
	}

	function queueRun(snapshot) {
		if (!snapshot || !snapshot.id) {
			return pendingCount();
		}
		var list = loadOutbox().filter(function (s) {
			return s && s.id !== snapshot.id;
		});
		snapshot.updated_at = snapshot.updated_at || nowIso();
		snapshot.pending = true;
		list.push(snapshot);
		storeOutbox(list);
		markCurrent(snapshot);
		return list.length;
	}

	function markCurrent(snapshot) {
		try {
			localStorage.setItem(
				CURRENT_KEY,
				JSON.stringify({ id: snapshot.id, updated_at: snapshot.updated_at || nowIso(), status: snapshot.status || 'in_progress' })
			);
		} catch (e) {
			/* ignore */
		}
	}

	function describeCurrent() {
		try {
			var raw = localStorage.getItem(CURRENT_KEY);
			return raw ? JSON.parse(raw) : null;
		} catch (e) {
			return null;
		}
	}

	function offlineNow() {
		return typeof navigator !== 'undefined' && navigator.onLine === false;
	}

	function profileOf(profile) {
		if (profile && profile.id) {
			return profile;
		}
		return null;
	}

	async function fetchCloudRun(id, token) {
		var rows = await window.CloudClient.rest('runs', {
			params: { id: 'eq.' + id, select: 'id,updated_at,status' },
			token: token
		});
		return rows && rows.length ? rows[0] : null;
	}

	function toRow(snapshot, studentId) {
		return {
			id: snapshot.id,
			student_id: studentId,
			class_id: snapshot.class_id || null,
			started_at: snapshot.started_at || snapshot.updated_at || nowIso(),
			finished_at: snapshot.finished_at || null,
			ending_name: snapshot.ending_name || '',
			ending_description: snapshot.ending_description || '',
			empathy: snapshot.empathy !== undefined ? snapshot.empathy : 50,
			awareness: snapshot.awareness !== undefined ? snapshot.awareness : 50,
			safe: snapshot.safe !== undefined ? snapshot.safe : 50,
			choices: snapshot.choices || [],
			status: snapshot.status || 'in_progress',
			updated_at: snapshot.updated_at || nowIso()
		};
	}

	/* Upload one snapshot if local is newer than (or missing from) cloud.
	 * Returns 'uploaded' | 'skipped-cloud-newer' | 'offline'. */
	async function uploadOne(snapshot, profile, token) {
		var row = toRow(snapshot, profile.id);
		var cloud = null;
		try {
			cloud = await fetchCloudRun(row.id, token);
		} catch (e) {
			if (e && (e.offline || e.code === 'network')) {
				return 'offline';
			}
			throw e;
		}
		if (cloud && cloud.updated_at && row.updated_at && cloud.updated_at > row.updated_at) {
			return 'skipped-cloud-newer';
		}
		await window.CloudClient.rest('runs', {
			method: 'POST',
			body: row,
			token: token,
			prefer: 'resolution=merge-duplicates,return=representation'
		});
		return 'uploaded';
	}

	async function resolveProfile(profile) {
		if (profileOf(profile)) {
			return profile;
		}
		if (window.CloudAuth && typeof window.CloudAuth.currentProfile === 'function') {
			return window.CloudAuth.currentProfile();
		}
		return null;
	}

	/* Login-time merge: push each outbox snapshot once (newest-wins guarded),
	 * keep whatever could not upload. Never deletes cloud-newer rows. */
	async function mergeOnLogin(profile) {
		var result = { ok: false, uploaded: 0, stillPending: 0, offline: false, skipped: 0 };
		if (!window.CloudClient.isEnabled()) {
			result.stillPending = pendingCount();
			return result;
		}
		if (offlineNow()) {
			result.offline = true;
			result.stillPending = pendingCount();
			return result;
		}
		var who = await resolveProfile(profile);
		if (!who) {
			result.stillPending = pendingCount();
			return result;
		}
		var token = window.CloudClient.accessToken();
		if (!token) {
			result.stillPending = pendingCount();
			return result;
		}
		var remaining = [];
		var list = loadOutbox();
		for (var i = 0; i < list.length; i++) {
			var s = list[i];
			if (s && !s.student_id) {
				s.student_id = who.id;
			}
			try {
				var outcome = await uploadOne(s, who, token);
				if (outcome === 'uploaded') {
					result.uploaded += 1;
				} else if (outcome === 'skipped-cloud-newer') {
					result.skipped += 1;
				} else {
					result.offline = true;
					remaining.push(s);
				}
			} catch (e) {
				if (e && (e.offline || e.code === 'network')) {
					result.offline = true;
				}
				remaining.push(s);
			}
		}
		storeOutbox(remaining);
		result.stillPending = remaining.length;
		result.ok = remaining.length === 0;
		return result;
	}

	/* Explicit sync button handler. Same newest-wins rule as merge. */
	async function syncNow(profile) {
		var result = await mergeOnLogin(profile);
		return result;
	}

	/* Finished-run save: fires an upsert when online, queues when offline.
	 * This is the post-finish upload path (explicit progress event, NOT an
	 * autosave — autosave slots never reach this function on their own). */
	function saveFinished(snapshot) {
		queueRun(snapshot);
		if (!window.CloudClient.isEnabled() || offlineNow()) {
			return Promise.resolve({ ok: false, uploaded: 0, stillPending: pendingCount(), offline: true });
		}
		return (async function () {
			var who = await resolveProfile(null);
			if (!who) {
				return { ok: false, uploaded: 0, stillPending: pendingCount(), offline: false };
			}
			var token = window.CloudClient.accessToken();
			if (!token) {
				return { ok: false, uploaded: 0, stillPending: pendingCount(), offline: false };
			}
			var target = snapshot;
			if (!target.student_id) {
				target.student_id = who.id;
			}
			try {
				var outcome = await uploadOne(target, who, token);
				if (outcome === 'uploaded') {
					storeOutbox(loadOutbox().filter(function (s) {
						return !s || s.id !== target.id;
					}));
					return { ok: true, uploaded: 1, stillPending: pendingCount(), offline: false };
				}
				if (outcome === 'skipped-cloud-newer') {
					storeOutbox(loadOutbox().filter(function (s) {
						return !s || s.id !== target.id;
					}));
					return { ok: true, uploaded: 0, stillPending: pendingCount(), offline: false, skipped: 1 };
				}
				return { ok: false, uploaded: 0, stillPending: pendingCount(), offline: true };
			} catch (e) {
				return {
					ok: false,
					uploaded: 0,
					stillPending: pendingCount(),
					offline: !!(e && (e.offline || e.code === 'network'))
				};
			}
		})();
	}

	window.CloudSync = {
		OUTBOX_KEY: OUTBOX_KEY,
		pendingCount: pendingCount,
		queueRun: queueRun,
		mergeOnLogin: mergeOnLogin,
		syncNow: syncNow,
		saveFinished: saveFinished,
		describeCurrent: describeCurrent
	};
})();
