/* global window */
/* SchoolShield Phase 2 PoC — classes + memberships (both join paths).
 *
 * Teacher: createClass (name -> code), addEmailInvite (Path A, pending row),
 * removeMembership, regenerateCode (replace, old code stops working).
 * Student: joinByCode (Path B), myMemberships, leaveClass (G2 self-delete).
 * First login: claimPendingInvites activates Path-A rows whose invited_email
 * matches the caller's login email (G3 policy). Codes: 6 chars from an
 * unambiguous alphabet; wrong code -> inline error, no partial join.
 */
'use strict';
(function () {
	var ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
	var CODE_LEN = 6;

	function teacherIdOf(profile) {
		return profile && profile.id ? profile.id : null;
	}

	function token() {
		return window.CloudClient.accessToken();
	}

	function mintCode() {
		var out = '';
		try {
			var bytes = new Uint8Array(CODE_LEN);
			window.crypto.getRandomValues(bytes);
			for (var i = 0; i < CODE_LEN; i++) {
				out += ALPHABET[bytes[i] % ALPHABET.length];
			}
		} catch (e) {
			for (var j = 0; j < CODE_LEN; j++) {
				out += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
			}
		}
		return out;
	}

	function isUniqueViolation(err) {
		return !!err && (err.code === '23505' || /duplicate|unique/i.test(err.message || '') || /409/.test(String(err.code || '')));
	}

	async function createClass(name, profile) {
		var teacherId = teacherIdOf(profile);
		if (!teacherId) {
			throw new Error('Teacher profile required to create a class.');
		}
		var clean = String(name || '').trim();
		if (!clean) {
			throw new Error('Class name is required.');
		}
		var t = token();
		var lastErr = null;
		for (var attempt = 0; attempt < 5; attempt++) {
			try {
				var created = await window.CloudClient.rest('classes', {
					method: 'POST',
					body: { teacher_id: teacherId, name: clean, code: mintCode() },
					token: t
				});
				return created && created.length ? created[0] : created;
			} catch (err) {
				lastErr = err;
				if (!isUniqueViolation(err)) {
					throw err;
				}
				/* code collision: mint a fresh code and retry */
			}
		}
		throw lastErr || new Error('Could not mint a unique class code. Please retry.');
	}

	async function listTeacherClasses(profile) {
		var teacherId = teacherIdOf(profile);
		if (!teacherId) {
			return [];
		}
		return window.CloudClient.rest('classes', {
			params: { teacher_id: 'eq.' + teacherId, select: '*', order: 'created_at.desc' },
			token: token()
		});
	}

	async function getClassByCode(code) {
		var clean = String(code || '').trim().toUpperCase();
		if (!clean) {
			throw new Error('Class code is required.');
		}
		var rows = await window.CloudClient.rest('classes', {
			params: { code: 'eq.' + clean, select: 'id,name,code,teacher_id' },
			token: token()
		});
		if (!rows || !rows.length) {
			var err = new Error('Wrong code — no class uses this code. Check and retry.');
			err.code = 'wrong_code';
			throw err;
		}
		return rows[0];
	}

	/* Path A: teacher types a student email -> pending membership row.
	 * Mistyped emails stay removable via removeMembership. */
	async function addEmailInvite(classId, email) {
		var clean = String(email || '').trim().toLowerCase();
		if (!classId || !clean || clean.indexOf('@') < 0) {
			throw new Error('A valid student email is required.');
		}
		var created = await window.CloudClient.rest('memberships', {
			method: 'POST',
			body: { class_id: classId, invited_email: clean, status: 'pending' },
			token: token()
		});
		return created && created.length ? created[0] : created;
	}

	/* Path B: student enters code -> active self-membership (no partial join:
	 * single RPC does lookup + insert atomically. Direct class lookup by
	 * code is impossible under RLS (classes_student_read needs an existing
	 * membership), hence the SECURITY DEFINER join_class_by_code function.
	 * Wrong code -> inline error, no partial join. */
	async function joinByCode(code, profile) {
		if (!profile || !profile.id) {
			throw new Error('Login required to join a class.');
		}
		var clean = String(code || '').trim().toUpperCase();
		if (!clean) {
			throw new Error('Class code is required.');
		}
		var res;
		try {
			res = await window.CloudClient.rest('rpc/join_class_by_code', {
				method: 'POST',
				body: { _code: clean },
				token: token()
			});
		} catch (e) {
			var msg = String((e && e.message) || '');
			if (/wrong_code/i.test(msg)) {
				var err = new Error('Wrong code — no class uses this code. Check and retry.');
				err.code = 'wrong_code';
				throw err;
			}
			throw e;
		}
		if (!res || !res.id) {
			throw new Error('Wrong code — no class uses this code. Check and retry.');
		}
		return { class: res, membership: null };
	}

	async function myMemberships(profile) {
		if (!profile || !profile.id) {
			return [];
		}
		return window.CloudClient.rest('memberships', {
			params: { student_id: 'eq.' + profile.id, select: '*,classes(id,name,code)' },
			token: token()
		});
	}

	async function listClassMembers(classId) {
		if (!classId) {
			return [];
		}
		var t = token();
		try {
			return await window.CloudClient.rest('memberships', {
				params: { class_id: 'eq.' + classId, select: '*,profiles!memberships_student_id_fkey(id,email,display_name)' },
				token: t
			});
		} catch (err) {
			/* FK hint name mismatch across environments: fall back to bare
			 * rows (callers already fall back to invited_email labels). */
			if (err && (err.code === 'network' || err.offline)) {
				throw err;
			}
			return window.CloudClient.rest('memberships', {
				params: { class_id: 'eq.' + classId, select: '*' },
				token: t
			});
		}
	}

	/* Student leaves a class (own row only — G2 self-delete policy). */
	async function leaveClass(membershipId, profile) {
		if (!membershipId || !profile || !profile.id) {
			throw new Error('Membership and login required to leave a class.');
		}
		await window.CloudClient.rest('memberships', {
			method: 'DELETE',
			params: { id: 'eq.' + membershipId, student_id: 'eq.' + profile.id },
			token: token()
		});
		return true;
	}

	/* Teacher removes any membership row in their own class. */
	async function removeMembership(membershipId) {
		if (!membershipId) {
			throw new Error('Membership id required.');
		}
		await window.CloudClient.rest('memberships', {
			method: 'DELETE',
			params: { id: 'eq.' + membershipId },
			token: token()
		});
		return true;
	}

	/* Regenerate = replace: the old code stops working immediately. */
	async function regenerateCode(classId) {
		if (!classId) {
			throw new Error('Class id required.');
		}
		var t = token();
		var lastErr = null;
		for (var attempt = 0; attempt < 5; attempt++) {
			try {
				var updated = await window.CloudClient.rest('classes', {
					method: 'PATCH',
					params: { id: 'eq.' + classId },
					body: { code: mintCode() },
					token: t
				});
				return updated && updated.length ? updated[0] : updated;
			} catch (err) {
				lastErr = err;
				if (!isUniqueViolation(err)) {
					throw err;
				}
			}
		}
		throw lastErr || new Error('Could not mint a unique class code. Please retry.');
	}

	/* G3 claim: activate pending rows addressed to this login email.
	 * The RLS policy allows the update only when the pending row's
	 * invited_email matches the caller's own JWT email. */
	async function claimPendingInvites(studentId, email) {
		if (!studentId || !email) {
			return [];
		}
		var t = token();
		var pending = await window.CloudClient.rest('memberships', {
			params: {
				invited_email: 'eq.' + String(email).trim().toLowerCase(),
				status: 'eq.pending',
				select: '*'
			},
			token: t
		});
		var claimed = [];
		for (var i = 0; i < (pending || []).length; i++) {
			var row = pending[i];
			if (row.student_id) {
				continue;
			}
			try {
				var updated = await window.CloudClient.rest('memberships', {
					method: 'PATCH',
					params: { id: 'eq.' + row.id },
					body: { student_id: studentId, status: 'active' },
					token: t
				});
				claimed.push(updated && updated.length ? updated[0] : row);
			} catch (e) {
				/* stranger-claim 403 or race: skip, teacher can re-invite */
			}
		}
		return claimed;
	}

	window.CloudClasses = {
		CODE_LEN: CODE_LEN,
		mintCode: mintCode,
		createClass: createClass,
		listTeacherClasses: listTeacherClasses,
		getClassByCode: getClassByCode,
		addEmailInvite: addEmailInvite,
		joinByCode: joinByCode,
		myMemberships: myMemberships,
		listClassMembers: listClassMembers,
		leaveClass: leaveClass,
		removeMembership: removeMembership,
		regenerateCode: regenerateCode,
		claimPendingInvites: claimPendingInvites
	};
})();
