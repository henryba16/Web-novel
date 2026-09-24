/* global window, fetch */
/* SchoolShield Phase 2 PoC — teacher dashboard views (Phase 3).
 *
 * Direct RLS reads with the teacher JWT (no read proxy, no realtime —
 * refresh happens on load and on the refresh button only). All wording is
 * plain Vietnamese, no medical labels of any kind (gated by grep, see plan
 * Phase 3: allowed "chưa bắt đầu", "điểm thấp", "nên trò chuyện").
 *
 * Pure helpers (no DOM, no network — unit-testable in node):
 *   statTag, shortId, displayNameFor, runsForStudent, latestRun,
 *   progressFor, computeFlags, computeAggregates
 * Data loaders (teacher JWT via CloudClient):
 *   loadClassRuns, loadStudentRuns
 * Phase 4 AI summaries (on-demand, teacher JWT forwarded, minimum-data
 * gate client-side — no AI call under 1 finished run):
 *   finishedCount, hasMinimumData, MIN_DATA_TEXT,
 *   summarizeClass, summarizeStudent
 */
'use strict';
(function () {
	var LOW_BAND = 45;

	function token() {
		return window.CloudClient.accessToken();
	}

	/* Qualitative tag per metric, same thresholds as ending.html. */
	function statTag(value) {
		var v = Number(value);
		if (!isFinite(v)) {
			return '';
		}
		if (v >= 75) {
			return 'Cao';
		}
		if (v >= 60) {
			return 'Tốt';
		}
		if (v >= 45) {
			return 'Trung bình';
		}
		return 'Cần chú ý thêm';
	}

	function shortId(id) {
		var raw = String(id === null || id === undefined ? '' : id).replace(/[^0-9a-z]/gi, '');
		if (!raw) {
			return '----';
		}
		return raw.slice(-4).toUpperCase();
	}

	/* Roster display name — never blank (SPEC Open Q5). */
	function displayNameFor(member) {
		if (member && member.profiles) {
			if (member.profiles.display_name) {
				return String(member.profiles.display_name);
			}
			if (member.profiles.email) {
				return String(member.profiles.email);
			}
		}
		if (member && member.invited_email) {
			return String(member.invited_email);
		}
		var raw = member && (member.student_id || member.id);
		return 'Học sinh #' + shortId(raw);
	}

	function runsForStudent(allRuns, studentId) {
		if (!studentId) {
			return [];
		}
		return (allRuns || []).filter(function (r) {
			return r && r.student_id === studentId;
		});
	}

	function latestRun(runs) {
		var best = null;
		(runs || []).forEach(function (r) {
			if (!r) {
				return;
			}
			if (!best || String(r.updated_at || '') >= String(best.updated_at || '')) {
				best = r;
			}
		});
		return best;
	}

	function finishedRuns(runs) {
		return (runs || []).filter(function (r) {
			return r && r.status === 'finished';
		});
	}

	/* Progress state for one roster entry.
	 * Returns { state, runs, latest } where state is one of:
	 * invited | not_started | in_progress | finished. */
	function progressFor(member, allRuns) {
		if (!member || !member.student_id || member.status === 'pending') {
			return { state: 'invited', runs: [], latest: null };
		}
		var rs = runsForStudent(allRuns, member.student_id);
		if (!rs.length) {
			return { state: 'not_started', runs: rs, latest: null };
		}
		var fin = finishedRuns(rs);
		if (fin.length) {
			return { state: 'finished', runs: rs, latest: latestRun(fin) };
		}
		return { state: 'in_progress', runs: rs, latest: latestRun(rs) };
	}

	function progressLabel(state) {
		if (state === 'finished') {
			return 'Đã hoàn thành';
		}
		if (state === 'in_progress') {
			return 'Đang chơi';
		}
		if (state === 'invited') {
			return 'Chờ đăng ký';
		}
		return 'Chưa bắt đầu';
	}

	function lowestMetric(run) {
		if (!run) {
			return null;
		}
		var metrics = [
			{ key: 'awareness', label: 'Nhận thức', value: Number(run.awareness) },
			{ key: 'empathy', label: 'Đồng cảm', value: Number(run.empathy) },
			{ key: 'safe', label: 'An toàn', value: Number(run.safe) }
		].filter(function (m) {
			return isFinite(m.value);
		});
		if (!metrics.length) {
			return null;
		}
		metrics.sort(function (a, b) {
			return a.value - b.value;
		});
		return metrics[0];
	}

	/* Needs-attention flags. Plain wording only: describes in-game progress
	 * and suggests a conversation — never labels the student. */
	function computeFlags(entries) {
		var out = [];
		var list = entries || [];
		var anyFinished = list.some(function (e) {
			return e && e.state === 'finished';
		});
		list.forEach(function (e) {
			if (!e) {
				return;
			}
			var flags = [];
			if ((e.state === 'not_started' || e.state === 'invited') && anyFinished) {
				flags.push({
					kind: 'not_started',
					text: 'Chưa bắt đầu — các bạn khác trong lớp đã hoàn thành lượt chơi. Nên trò chuyện với em để tìm hiểu thêm.'
				});
			}
			var low = lowestMetric(e.latest);
			if (low && low.value < LOW_BAND) {
				flags.push({
					kind: 'low_band',
					text: 'Điểm thấp trong lượt chơi mới nhất (' + low.label + ': ' + low.value + '/100, dưới 45). Nên trò chuyện với em để tìm hiểu thêm.'
				});
			}
			var unfinished = (e.runs || []).filter(function (r) {
				return r && r.status !== 'finished';
			}).length;
			var done = finishedRuns(e.runs).length;
			if (unfinished >= 2 && done === 0) {
				flags.push({
					kind: 'unfinished',
					text: 'Có ' + unfinished + ' lượt chơi chưa hoàn thành và chưa có lượt nào xong. Nên trò chuyện với em để tìm hiểu thêm.'
				});
			}
			if (flags.length) {
				out.push({ name: e.name, member: e.member, flags: flags });
			}
		});
		return out;
	}

	function choiceKey(scene, choice) {
		return String(scene || 'Không rõ') + ' — ' + String(choice || 'Không rõ');
	}

	/* Class aggregates over finished runs: metric means, ending distribution
	 * (including the not-finished count), and per-scene choice splits. */
	function computeAggregates(allRuns, memberStudentIds) {
		var fin = finishedRuns(allRuns);
		var result = {
			finishedCount: fin.length,
			means: null,
			endingDist: [],
			notFinishedCount: 0,
			choiceSplits: []
		};
		if (fin.length) {
			var sums = { awareness: 0, empathy: 0, safe: 0 };
			var counts = { awareness: 0, empathy: 0, safe: 0 };
			fin.forEach(function (r) {
				['awareness', 'empathy', 'safe'].forEach(function (k) {
					var v = Number(r[k]);
					if (isFinite(v)) {
						sums[k] += v;
						counts[k] += 1;
					}
				});
			});
			result.means = {
				awareness: counts.awareness ? Math.round(sums.awareness / counts.awareness) : null,
				empathy: counts.empathy ? Math.round(sums.empathy / counts.empathy) : null,
				safe: counts.safe ? Math.round(sums.safe / counts.safe) : null
			};
			var endings = {};
			fin.forEach(function (r) {
				var name = (r.ending_name && String(r.ending_name)) || '(chưa đặt tên)';
				endings[name] = (endings[name] || 0) + 1;
			});
			result.endingDist = Object.keys(endings).map(function (name) {
				return { ending: name, count: endings[name] };
			}).sort(function (a, b) {
				return b.count - a.count;
			});
			var splits = {};
			fin.forEach(function (r) {
				var choices = Array.isArray(r.choices) ? r.choices : [];
				choices.forEach(function (c) {
					var scene = c && typeof c === 'object' ? (c.scene || '') : '';
					var pick = c && typeof c === 'object' ? (c.choice || '') : String(c || '');
					var key = choiceKey(scene, pick);
					if (!splits[scene]) {
						splits[scene] = {};
					}
					splits[scene][key] = (splits[scene][key] || 0) + 1;
				});
			});
			result.choiceSplits = Object.keys(splits).map(function (scene) {
				var rows = Object.keys(splits[scene]).map(function (key) {
					return { choice: key, count: splits[scene][key] };
				}).sort(function (a, b) {
					return b.count - a.count;
				});
				return { scene: scene || 'Không rõ', rows: rows };
			});
		}
		var finishedIds = {};
		fin.forEach(function (r) {
			if (r.student_id) {
				finishedIds[r.student_id] = true;
			}
		});
		result.notFinishedCount = (memberStudentIds || []).filter(function (id) {
			return id && !finishedIds[id];
		}).length;
		return result;
	}

	function endingsReached(runs) {
		var seen = {};
		var out = [];
		finishedRuns(runs).forEach(function (r) {
			var name = (r.ending_name && String(r.ending_name)) || '(chưa đặt tên)';
			if (!seen[name]) {
				seen[name] = true;
				out.push({ ending: name, at: r.finished_at || r.updated_at || '' });
			}
		});
		return out;
	}

	/* ---- Data loaders (direct RLS reads with the teacher JWT) ---- */

	async function loadClassRuns(classId) {
		if (!classId) {
			return [];
		}
		return window.CloudClient.rest('runs', {
			params: { class_id: 'eq.' + classId, select: '*', order: 'updated_at.desc' },
			token: token()
		});
	}

	/* Full history for one student (includes runs outside this class, e.g.
	 * class_id null) — the teacher-read policy covers own-class students. */
	async function loadStudentRuns(studentId) {
		if (!studentId) {
			return [];
		}
		return window.CloudClient.rest('runs', {
			params: { student_id: 'eq.' + studentId, select: '*', order: 'updated_at.desc' },
			token: token()
		});
	}

	/* ---- Phase 4: AI pattern summaries (on-demand, guarded, Vietnamese) ----
	 *
	 * Minimum-data gate lives on BOTH sides: the client checks before
	 * sending (shows MIN_DATA_TEXT, no fetch), and the server re-checks
	 * (<1 finished run → 400, no OpenRouter call). AI strings are rendered
	 * with textContent only (never innerHTML) at the call site. */

	var MIN_FINISHED = 1;
	var MIN_DATA_TEXT = 'chưa đủ dữ liệu — cần ít nhất 1 lượt chơi hoàn thành để tạo tóm tắt.';

	function finishedCount(runs) {
		return finishedRuns(runs).length;
	}

	/* Accepts a finished-run count or a runs array; true when an AI call
	 * is allowed (1+ finished runs). */
	function hasMinimumData(runsOrCount) {
		if (typeof runsOrCount === 'number') {
			return runsOrCount >= MIN_FINISHED;
		}
		return finishedCount(runsOrCount) >= MIN_FINISHED;
	}

	async function postSummary(path, payload) {
		var t = token();
		if (!t) {
			throw new Error('Thiếu phiên đăng nhập giáo viên. Hãy đăng nhập lại.');
		}
		var res = await fetch(path, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + t
			},
			body: JSON.stringify(payload || {})
		});
		var data = null;
		try {
			data = await res.json();
		} catch (e) {
			data = null;
		}
		if (!res.ok) {
			throw new Error((data && data.error) || ('Tạo tóm tắt thất bại (HTTP ' + res.status + ').'));
		}
		return data || {};
	}

	/* Class summary: aggregates are recomputed server-side from RLS reads;
	 * the client sends only the class id (AI input contract = the aggregate
	 * JSON shape computeAggregates already produces). */
	async function summarizeClass(classId) {
		var id = String(classId || '').trim().slice(0, 100);
		if (!id) {
			throw new Error('Hãy chọn lớp trước khi tạo tóm tắt.');
		}
		var data = await postSummary('/api/summarize-class', { classId: id });
		if (!data.summary) {
			throw new Error('AI không trả về tóm tắt lúc này.');
		}
		return String(data.summary);
	}

	async function summarizeStudent(studentId, classId) {
		var sid = String(studentId || '').trim().slice(0, 100);
		var cid = String(classId || '').trim().slice(0, 100);
		if (!sid) {
			throw new Error('Hãy chọn học sinh trước khi tạo ghi chú.');
		}
		if (!cid) {
			throw new Error('Hãy chọn lớp trước khi tạo ghi chú.');
		}
		var data = await postSummary('/api/summarize-student', { studentId: sid, classId: cid });
		if (!data.note) {
			throw new Error('AI không trả về ghi chú lúc này.');
		}
		return String(data.note);
	}

	window.CloudDashboard = {
		LOW_BAND: LOW_BAND,
		MIN_FINISHED: MIN_FINISHED,
		MIN_DATA_TEXT: MIN_DATA_TEXT,
		statTag: statTag,
		shortId: shortId,
		displayNameFor: displayNameFor,
		runsForStudent: runsForStudent,
		latestRun: latestRun,
		finishedCount: finishedCount,
		hasMinimumData: hasMinimumData,
		progressFor: progressFor,
		progressLabel: progressLabel,
		computeFlags: computeFlags,
		computeAggregates: computeAggregates,
		endingsReached: endingsReached,
		loadClassRuns: loadClassRuns,
		loadStudentRuns: loadStudentRuns,
		summarizeClass: summarizeClass,
		summarizeStudent: summarizeStudent
	};
})();
