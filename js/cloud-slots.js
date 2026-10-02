/* global window, localStorage, navigator */
/* SchoolShield Phase 2 PoC — cross-device engine slot sync.
 *
 * Engine saves live in IndexedDB (any DB holding a 'GameData' store;
 * discovered at runtime, never hardcoded) as slot blobs
 * {name, date, image, game, screenshot, id} under keys like Save_1.
 * This module copies changed slots to the cloud save_slots table and
 * writes back cloud-newer slots, so device B's load screen shows device
 * A's manual saves. Runs alongside (never instead of) run-row sync.
 *
 * Safety: never deletes local slots; overwrites a local slot only when
 * the cloud copy parses strictly newer; screenshots included (PoC scale).
 * Guests: every entry point no-ops. Never throws into game code.
 */
'use strict';
(function () {
	var PUSHED_KEY = 'schoolshield-slots-pushed';
	var STORE = 'GameData';
	var dbNameCache = null;

	function onlineNow() {
		try {
			return typeof navigator === 'undefined' ? true : navigator.onLine !== false;
		} catch (e) {
			return true;
		}
	}

	function sessionToken() {
		try {
			if (!window.CloudClient || !window.CloudClient.isEnabled()) {
				return null;
			}
			var s = window.CloudClient.getSession();
			return (s && s.access_token) || null;
		} catch (e) {
			return null;
		}
	}

	function profileId() {
		try {
			var s = window.CloudClient.getSession();
			return (s && s.user && s.user.id) || null;
		} catch (e) {
			return null;
		}
	}

	/* Credentials with expired-token recovery. Prefers CloudSync.ensureSession
	 * (refresh-once-and-retry); falls back to the raw session token when
	 * CloudSync is absent (module load order). Returns
	 * { token, studentId } or null. Never throws. */
	async function credentials(profile) {
		if (profile && profile.id) {
			var direct = sessionToken();
			if (direct) {
				return { token: direct, studentId: profile.id };
			}
		}
		try {
			if (window.CloudSync && typeof window.CloudSync.ensureSession === 'function') {
				var s = await window.CloudSync.ensureSession();
				if (s && s.token && s.profile && s.profile.id) {
					return { token: s.token, studentId: s.profile.id };
				}
				return null;
			}
		} catch (e) {
			return null;
		}
		var token = sessionToken();
		var studentId = (profile && profile.id) || profileId();
		if (!token || !studentId) {
			return null;
		}
		return { token: token, studentId: studentId };
	}

	function loadPushed() {
		try {
			var raw = localStorage.getItem(PUSHED_KEY);
			var o = raw ? JSON.parse(raw) : {};
			return o && typeof o === 'object' ? o : {};
		} catch (e) {
			return {};
		}
	}

	function storePushed(map) {
		try {
			localStorage.setItem(PUSHED_KEY, JSON.stringify(map));
		} catch (e) {
			/* ignore */
		}
	}

	function openDb(name) {
		return new Promise(function (resolve, reject) {
			try {
				var req = window.indexedDB.open(name);
				req.onsuccess = function () {
					resolve(req.result);
				};
				req.onerror = function () {
					reject(new Error('idb-open'));
				};
				req.onblocked = function () {
					reject(new Error('idb-blocked'));
				};
			} catch (e) {
				reject(e);
			}
		});
	}

	/* Find the IndexedDB database holding the GameData store. */
	async function discoverDb() {
		if (dbNameCache) {
			return dbNameCache;
		}
		if (!window.indexedDB || typeof window.indexedDB.databases !== 'function') {
			return null;
		}
		var list = await window.indexedDB.databases();
		for (var i = 0; i < (list || []).length; i++) {
			var name = list[i] && list[i].name;
			if (!name) {
				continue;
			}
			try {
				var db = await openDb(name);
				var has = false;
				try {
					has = db.objectStoreNames.contains(STORE);
				} catch (e) {
					has = false;
				}
				db.close();
				if (has) {
					dbNameCache = name;
					return name;
				}
			} catch (e) {
				/* try next */
			}
		}
		return null;
	}

	function txPromise(db, mode, fn) {
		return new Promise(function (resolve, reject) {
			try {
				var tx = db.transaction(STORE, mode);
				var store = tx.objectStore(STORE);
				fn(store, resolve, reject);
				tx.onerror = function () {
					reject(new Error('idb-tx'));
				};
			} catch (e) {
				reject(e);
			}
		});
	}

	async function readLocalSlots() {
		var name = await discoverDb();
		if (!name) {
			return { db: null, slots: {} };
		}
		var db = await openDb(name);
		try {
			var out = await txPromise(db, 'readonly', function (store, resolve, reject) {
				var req = store.getAll();
				req.onsuccess = function () {
					resolve(req.result || []);
				};
				req.onerror = function () {
					reject(new Error('idb-read'));
				};
			});
			var keys = await txPromise(db, 'readonly', function (store, resolve, reject) {
				var req = store.getAllKeys();
				req.onsuccess = function () {
					resolve(req.result || []);
				};
				req.onerror = function () {
					reject(new Error('idb-read'));
				};
			});
			var slots = {};
			for (var i = 0; i < keys.length; i++) {
				var rec = out[i];
				if (keys[i] === 'Settings' || !rec || typeof rec !== 'object' || !rec.date) {
					continue;
				}
				slots[String(keys[i])] = rec;
			}
			return { db: name, slots: slots };
		} finally {
			try {
				db.close();
			} catch (e) {
				/* ignore */
			}
		}
	}

	async function writeLocalSlot(dbName, key, record) {
		var db = await openDb(dbName);
		try {
			await txPromise(db, 'readwrite', function (store, resolve, reject) {
				var req;
				try {
					/* Engine's GameData store uses in-line keys (keyPath):
					 * passing an explicit key throws DataError. With a
					 * keyPath, the record already carries its key — but
					 * older cloud rows may lack the field, so fill it from
					 * the slot key before a keyless put. */
					var kp = store.keyPath;
					if (kp && record && typeof record === 'object') {
						if (typeof kp === 'string' && (record[kp] === undefined || record[kp] === null)) {
							record[kp] = key;
						}
						req = store.put(record);
					} else {
						req = store.put(record, key);
					}
				} catch (e) {
					reject(e);
					return;
				}
				req.onsuccess = function () {
					resolve(true);
				};
				req.onerror = function () {
					reject(new Error('idb-write'));
				};
			});
		} finally {
			try {
				db.close();
			} catch (e) {
				/* ignore */
			}
		}
	}

	function ms(iso) {
		var t = Date.parse(String(iso || ''));
		return isFinite(t) ? t : -1;
	}

	/* Upload local slots whose date differs from the last push. */
	async function pushChanged(profile) {
		var pushed = loadPushed();
		var found = await readLocalSlots();
		var keys = Object.keys(found.slots);
		if (!found.db || !keys.length) {
			return { uploaded: 0 };
		}
		var creds = await credentials(profile);
		if (!creds) {
			return { uploaded: 0 };
		}
		var token = creds.token;
		var studentId = creds.studentId;
		var uploaded = 0;
		for (var i = 0; i < keys.length; i++) {
			var rec = found.slots[keys[i]];
			if (pushed[keys[i]] === rec.date) {
				continue;
			}
			await window.CloudClient.rest('save_slots', {
				method: 'POST',
				body: {
					student_id: studentId,
					slot_key: keys[i],
					data: rec,
					updated_at: new Date().toISOString()
				},
				prefer: 'resolution=merge-duplicates,return=minimal',
				token: token
			});
			pushed[keys[i]] = rec.date;
			uploaded += 1;
		}
		storePushed(pushed);
		return { uploaded: uploaded };
	}

	/* Download cloud slots strictly newer than local; never delete local. */
	async function pullNewer(profile) {
		var creds = await credentials(profile);
		if (!creds) {
			return { downloaded: 0 };
		}
		var token = creds.token;
		var studentId = creds.studentId;
		var rows = await window.CloudClient.rest('save_slots', {
			params: { student_id: 'eq.' + studentId, select: 'slot_key,data,updated_at' },
			token: token
		});
		if (!rows || !rows.length) {
			return { downloaded: 0 };
		}
		var found = await readLocalSlots();
		if (!found.db) {
			return { downloaded: 0 };
		}
		var pushed = loadPushed();
		var downloaded = 0;
		for (var i = 0; i < rows.length; i++) {
			var r = rows[i];
			if (!r || !r.slot_key || !r.data) {
				continue;
			}
			var local = found.slots[r.slot_key];
			var cloudMs = ms(r.updated_at);
			var localMs = local ? ms(local.date) : -1;
			if (!local || (cloudMs > 0 && cloudMs > localMs)) {
				await writeLocalSlot(found.db, r.slot_key, r.data);
				pushed[r.slot_key] = (r.data && r.data.date) || r.updated_at;
				downloaded += 1;
			}
		}
		storePushed(pushed);
		return { downloaded: downloaded };
	}

	window.CloudSlots = {
		pushChanged: pushChanged,
		pullNewer: pullNewer,
		discoverDb: discoverDb
	};
})();
