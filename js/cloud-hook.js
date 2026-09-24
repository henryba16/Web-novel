/* global window, document, localStorage */
/* SchoolShield Phase 2 PoC — game-flow hook (the ONE cloud script game.html
 * loads). Renders the dismissible login-nudge bar + home + sync affordances
 * into #cloud-nudge, and starts the instrumented run for Chapter 1.
 *
 * Guest-first: when cloud is unconfigured (CLOUD_DISABLED) or any cloud
 * module is missing, the hook hides the nudge and does nothing else — guest
 * play continues exactly as today. Never throws into game code.
 */
'use strict';
(function () {
	var NUDGE_KEY = 'schoolshield-nudge-dismissed';

	function enabled() {
		try {
			return !!(
				window.CloudClient &&
				typeof window.CloudClient.isEnabled === 'function' &&
				window.CloudClient.isEnabled()
			);
		} catch (e) {
			return false;
		}
	}

	function hasSession() {
		try {
			return !!(window.CloudClient && window.CloudClient.getSession());
		} catch (e) {
			return false;
		}
	}

	function sessionEmail() {
		try {
			var s = window.CloudClient.getSession();
			return (s && s.user && s.user.email) || '';
		} catch (e) {
			return '';
		}
	}

	function dismissed() {
		try {
			return localStorage.getItem(NUDGE_KEY) === '1';
		} catch (e) {
			return false;
		}
	}

	function el(tag, cls, text) {
		var n = document.createElement(tag);
		if (cls) {
			n.className = cls;
		}
		if (text !== undefined) {
			n.textContent = text;
		}
		return n;
	}

	function pendingCount() {
		try {
			return window.CloudSync && typeof window.CloudSync.pendingCount === 'function'
				? window.CloudSync.pendingCount()
				: 0;
		} catch (e) {
			return 0;
		}
	}

	function render() {
		var bar = document.getElementById('cloud-nudge');
		if (!bar) {
			return;
		}
		bar.innerHTML = '';
		if (!enabled() || dismissed()) {
			bar.hidden = true;
			return;
		}
		bar.hidden = false;

		var home = el('a', 'cloud-nudge-home', '⌂ Trang chủ');
		home.href = 'index.html';

		if (!hasSession()) {
			var msg = el('span', 'cloud-nudge-msg', 'Chơi khách — đăng nhập để lưu tiến trình đám mây và tham gia lớp học.');
			var login = el('a', 'cloud-nudge-login', 'Đăng nhập');
			login.href = 'login.html';
			var hide = el('button', 'cloud-nudge-hide', 'Để sau');
			hide.type = 'button';
			hide.addEventListener('click', function () {
				try {
					localStorage.setItem(NUDGE_KEY, '1');
				} catch (e) {
					/* ignore */
				}
				bar.hidden = true;
			});
			bar.appendChild(home);
			bar.appendChild(msg);
			bar.appendChild(login);
			bar.appendChild(hide);
			return;
		}

		var who = el('span', 'cloud-nudge-msg', 'Đã đăng nhập' + (sessionEmail() ? ' · ' + sessionEmail() : ''));
		var sync = el('button', 'cloud-nudge-login', 'Đồng bộ' + (pendingCount() ? ' (' + pendingCount() + ')' : ''));
		sync.type = 'button';
		var note = el('span', 'cloud-nudge-msg', '');
		sync.addEventListener('click', async function () {
			note.textContent = 'Đang đồng bộ…';
			try {
				var res = await window.CloudSync.syncNow(null);
				if (res.offline) {
					note.textContent = 'Ngoại tuyến — sẽ thử lại khi có mạng.';
				} else if (res.stillPending > 0) {
					note.textContent = 'Còn ' + res.stillPending + ' lượt chờ. Thử lại sau.';
				} else {
					note.textContent = 'Đã đồng bộ (' + res.uploaded + ' lượt chơi).';
				}
			} catch (e) {
				note.textContent = 'Đồng bộ thất bại: ' + ((e && e.message) || 'lỗi không rõ');
			}
			sync.textContent = 'Đồng bộ' + (pendingCount() ? ' (' + pendingCount() + ')' : '');
		});
		bar.appendChild(home);
		bar.appendChild(who);
		bar.appendChild(sync);
		bar.appendChild(note);
	}

	function init() {
		try {
			/* Chapter-start instrumentation for the Chapter-1-only PoC. */
			if (window.CloudRun && typeof window.CloudRun.ensureRun === 'function') {
				window.CloudRun.ensureRun();
			}
		} catch (e) {
			/* ignore */
		}
		try {
			render();
		} catch (e) {
			/* never break the game shell */
		}
		try {
			renderSaveButtons();
			startScreenObserver();
		} catch (e) {
			/* never break the game shell */
		}
	}

	/* ============================================================
	 * Đồng bộ / Đăng nhập ngay trong màn hình Save & Load.
	 * Engine tự render các màn hình này nên hook dùng MutationObserver:
	 * màn hình nào đang hiển thị (có layout) thì gắn nút, ẩn thì gỡ.
	 * Đã đăng nhập → nút "Đồng bộ"; chưa → nút "Đăng nhập".
	 * Guard _renderedFor tránh vòng lặp observer (sửa DOM → observer
	 * bắn → bỏ qua khi trạng thái không đổi).
	 * ============================================================ */
	function saveScreens() {
		var out = [];
		['save-screen', 'load-screen'].forEach(function (tag) {
			try {
				var s = document.querySelector(tag);
				if (s) {
					out.push(s);
				}
			} catch (e) {
				/* ignore */
			}
		});
		return out;
	}

	function isShown(elm) {
		try {
			return !!(
				elm.offsetWidth ||
				elm.offsetHeight ||
				(elm.getClientRects && elm.getClientRects().length)
			);
		} catch (e) {
			return false;
		}
	}

	function doSync(note, syncBtn) {
		note.textContent = 'Đang đồng bộ…';
		window.CloudSync.syncNow(null).then(function (res) {
			if (res.offline) {
				note.textContent = 'Ngoại tuyến — sẽ thử lại khi có mạng.';
			} else if (res.stillPending > 0) {
				note.textContent = 'Còn ' + res.stillPending + ' lượt chờ. Thử lại sau.';
			} else {
				note.textContent = 'Đã đồng bộ (' + res.uploaded + ' lượt chơi).';
			}
		}).catch(function (e) {
			note.textContent = 'Đồng bộ thất bại: ' + ((e && e.message) || 'lỗi không rõ');
		}).then(function () {
			syncBtn.textContent = 'Đồng bộ' + (pendingCount() ? ' (' + pendingCount() + ')' : '');
		});
	}

	function renderSaveButtons() {
		if (!enabled()) {
			return;
		}
		var session = hasSession() ? '1' : '0';
		saveScreens().forEach(function (screen) {
			var slot = screen.querySelector(':scope > .cloud-save-sync');
			if (!isShown(screen)) {
				if (slot) {
					slot.remove();
				}
				return;
			}
			var stamp = session + '/' + pendingCount();
			if (slot && slot.getAttribute('data-rendered-for') === stamp) {
				return;
			}
			if (!slot) {
				slot = el('div', 'cloud-save-sync');
				screen.appendChild(slot);
			}
			slot.setAttribute('data-rendered-for', stamp);
			slot.innerHTML = '';
			if (!hasSession()) {
				var login = el('a', '', 'Đăng nhập để đồng bộ');
				login.href = 'login.html';
				slot.appendChild(login);
				return;
			}
			var syncBtn = el('button', '', 'Đồng bộ' + (pendingCount() ? ' (' + pendingCount() + ')' : ''));
			syncBtn.type = 'button';
			var note = el('span', 'cloud-save-note', '');
			syncBtn.addEventListener('click', function () {
				doSync(note, syncBtn);
			});
			slot.appendChild(syncBtn);
			slot.appendChild(note);
		});
	}

	var observerStarted = false;

	function startScreenObserver() {
		if (observerStarted || typeof MutationObserver !== 'function') {
			return;
		}
		observerStarted = true;
		var root = document.getElementById('monogatari') || document.body;
		var obs = new MutationObserver(function () {
			try {
				renderSaveButtons();
			} catch (e) {
				/* never break the game shell */
			}
		});
		obs.observe(root, {
			childList: true,
			subtree: true,
			attributes: true,
			attributeFilter: ['hidden', 'style', 'class']
		});
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}

	window.CloudHook = { render: render, renderSaveButtons: renderSaveButtons };
})();
