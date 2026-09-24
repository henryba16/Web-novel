/* global window, localStorage */
/* SchoolShield Phase 2 PoC — run instrumentation (timestamps + run IDs).
 *
 * Run lifecycle: startRun() at chapter start mints a UUID run_id into
 * sessionStorage 'schoolshield-run-id'; logChoice() records timestamped
 * choice entries; finishRun() snapshots ending + stats for upload.
 * All functions are safe no-ops when the game engine is absent (login /
 * dashboard pages) and NEVER throw into game code.
 */
'use strict';
(function () {
	var RUN_KEY = 'schoolshield-run-id';
	var RUN_START_KEY = 'schoolshield-run-started-at';
	var RUN_CHOICES_KEY = 'schoolshield-run-choices';
	var RUN_CLASS_KEY = 'schoolshield-class-id';

	function nowIso() {
		return new Date().toISOString();
	}

	function mintId() {
		try {
			if (window.crypto && typeof window.crypto.randomUUID === 'function') {
				return window.crypto.randomUUID();
			}
			var bytes = new Uint8Array(16);
			window.crypto.getRandomValues(bytes);
			bytes[6] = (bytes[6] & 0x0f) | 0x40;
			bytes[8] = (bytes[8] & 0x3f) | 0x80;
			var hex = Array.prototype.map
				.call(bytes, function (b) {
					return ('0' + b.toString(16)).slice(-2);
				})
				.join('');
			return (
				hex.slice(0, 8) + '-' + hex.slice(8, 12) + '-' + hex.slice(12, 16) +
				'-' + hex.slice(16, 20) + '-' + hex.slice(20)
			);
		} catch (e) {
			return 'run-' + Date.now().toString(36) + '-' + Math.floor(Math.random() * 1e9).toString(36);
		}
	}

	function getItem(key) {
		try {
			return window.sessionStorage.getItem(key);
		} catch (e) {
			return null;
		}
	}

	function setItem(key, value) {
		try {
			window.sessionStorage.setItem(key, value);
		} catch (e) {
			/* sessionStorage unavailable: instrumentation degrades silently */
		}
	}

	function startRun(classId) {
		var id = mintId();
		var startedAt = nowIso();
		setItem(RUN_KEY, id);
		setItem(RUN_START_KEY, startedAt);
		setItem(RUN_CHOICES_KEY, JSON.stringify([]));
		try {
			if (classId === null || classId === undefined) {
				window.sessionStorage.removeItem(RUN_CLASS_KEY);
			} else if (classId) {
				window.sessionStorage.setItem(RUN_CLASS_KEY, String(classId));
			}
		} catch (e) {
			/* ignore */
		}
		return { run_id: id, started_at: startedAt };
	}

	function currentRunId() {
		return getItem(RUN_KEY);
	}

	function ensureRun() {
		var id = currentRunId();
		if (!id) {
			return startRun(getItem(RUN_CLASS_KEY));
		}
		return { run_id: id, started_at: getItem(RUN_START_KEY) };
	}

	function getChoices() {
		try {
			var raw = getItem(RUN_CHOICES_KEY);
			var list = raw ? JSON.parse(raw) : [];
			return Array.isArray(list) ? list : [];
		} catch (e) {
			return [];
		}
	}

	/* Records one choice commit with an ISO timestamp. Safe no-op outside play. */
	function logChoice(entry) {
		try {
			ensureRun();
			var list = getChoices();
			list.push({
				scene: entry && entry.scene ? String(entry.scene) : '',
				context: entry && entry.context ? String(entry.context) : '',
				choice: entry && entry.choice ? String(entry.choice) : '',
				chapter: entry && entry.chapter !== undefined ? entry.chapter : 1,
				at: nowIso()
			});
			setItem(RUN_CHOICES_KEY, JSON.stringify(list));
		} catch (e) {
			/* never break gameplay */
		}
		return getChoices().length;
	}

	function readStats(storage) {
		var stats = (storage && storage.stats) || {};
		function num(v) {
			v = Number(v);
			if (!isFinite(v)) {
				return 50;
			}
			return Math.max(0, Math.min(100, Math.round(v)));
		}
		return { empathy: num(stats.empathy), awareness: num(stats.awareness), safe: num(stats.safe) };
	}

	/* Builds a runs-row snapshot from live Monogatari storage. */
	function snapshotFromStorage(storage, overrides) {
		overrides = overrides || {};
		var run = ensureRun();
		var stats = readStats(storage);
		var chap = (storage && storage.chap1_end) || {};
		var route = Array.isArray(storage && storage.route) ? storage.route : [];
		var choices = getChoices();
		var merged = choices.length ? choices : route;
		var classId = overrides.class_id !== undefined ? overrides.class_id : getItem(RUN_CLASS_KEY);
		return {
			id: run.run_id,
			student_id: overrides.student_id || null,
			class_id: classId || null,
			started_at: getItem(RUN_START_KEY) || run.started_at,
			finished_at: overrides.finished_at || null,
			ending_name: overrides.ending_name !== undefined ? overrides.ending_name : (chap.ending || ''),
			ending_description: overrides.ending_description !== undefined ? overrides.ending_description : (chap.description || ''),
			empathy: stats.empathy,
			awareness: stats.awareness,
			safe: stats.safe,
			choices: merged,
			status: overrides.status || 'in_progress',
			updated_at: nowIso()
		};
	}

	/* Called (append-only) around finishChapter(): stamps the run finished
	 * and hands the snapshot to CloudSync (queued offline, upserted online).
	 * Never throws into game code. */
	function finishRun(storage) {
		var snapshot = null;
		try {
			snapshot = snapshotFromStorage(storage, {
				finished_at: nowIso(),
				status: 'finished'
			});
			if (window.CloudSync && typeof window.CloudSync.saveFinished === 'function') {
				window.CloudSync.saveFinished(snapshot);
			} else if (window.CloudSync && typeof window.CloudSync.queueRun === 'function') {
				window.CloudSync.queueRun(snapshot);
			}
		} catch (e) {
			/* gameplay continues regardless */
		}
		return snapshot;
	}

	function clearRun() {
		try {
			window.sessionStorage.removeItem(RUN_KEY);
			window.sessionStorage.removeItem(RUN_START_KEY);
			window.sessionStorage.removeItem(RUN_CHOICES_KEY);
		} catch (e) {
			/* ignore */
		}
	}

	window.CloudRun = {
		RUN_KEY: RUN_KEY,
		startRun: startRun,
		currentRunId: currentRunId,
		ensureRun: ensureRun,
		logChoice: logChoice,
		getChoices: getChoices,
		snapshotFromStorage: snapshotFromStorage,
		finishRun: finishRun,
		clearRun: clearRun
	};
})();
