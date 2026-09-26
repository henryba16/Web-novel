/* global window, document, localStorage */
/* SchoolShield Phase 2 PoC — game-flow hook. Injects sync-or-signin
 * buttons into the engine save/load screens plus a role-aware dashboard
 * entry in the main menu, and starts the instrumented run for Chapter 1.
 * No bottom bar: entry points live only where the player already acts.
 *
 * Guest-first: when cloud is unconfigured (CLOUD_DISABLED) or any cloud
 * module is missing, the hook does nothing — guest play continues exactly
 * as today. Never throws into game code.
 */
'use strict';
(function () {
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
			renderSaveButtons();
			renderMenuEntry();
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
			note.textContent = 'Đồng bộ thất bại: ' + ((e && e.message) || 'lỗi không xác định, thử lại sau');
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
				login.target = '_blank';
				login.rel = 'noopener';
				login.title = 'Mở trong tab mới — tiến trình máy này được giữ';
				slot.appendChild(login);
				return;
			}
			var syncBtn = el('button', '', 'Đồng bộ' + (pendingCount() ? ' (' + pendingCount() + ')' : ''));
			syncBtn.type = 'button';
			var note = el('span', 'cloud-save-note', '');
				note.setAttribute('role', 'status');
				note.setAttribute('aria-live', 'polite');
			syncBtn.addEventListener('click', function () {
				doSync(note, syncBtn);
			});
			slot.appendChild(syncBtn);
			slot.appendChild(note);
		});
	}

	function renderMenuEntry() {
		if (!enabled()) {
			return;
		}
		var menu = null;
		try {
			menu = document.querySelector('main-menu');
		} catch (e) {
			return;
		}
		if (!menu) {
			return;
		}
		var slot = null;
		try {
			slot = menu.querySelector(':scope > .cloud-menu-entry');
		} catch (e) {
			return;
		}
		if (!isShown(menu)) {
			if (slot) {
				slot.remove();
			}
			return;
		}
		var logged = hasSession();
		var role = null;
		try {
			role = localStorage.getItem('schoolshield-role');
		} catch (e) {
			/* ignore */
		}
		var label, href;
		if (!logged) {
			label = '\u0110\u0103ng nh\u1eadp'; href = 'login.html';
		} else if (role === 'teacher') {
			label = 'B\u1ea3ng \u0111i\u1ec1u khi\u1ec3n'; href = 'dashboard.html';
		} else {
			label = 'Ti\u1eben tr\u00ecnh'; href = 'student-dashboard.html';
		}
		var stamp = label + '/' + href;
		if (slot && slot.getAttribute('data-rendered-for') === stamp) {
			return;
		}
		if (!slot) {
			slot = el('div', 'cloud-menu-entry');
			menu.appendChild(slot);
		}
		slot.setAttribute('data-rendered-for', stamp);
		slot.innerHTML = '';
		var btn = document.createElement('button');
		btn.type = 'button';
		try {
			var model = menu.querySelector('button');
			if (model && model.className) {
				btn.className = model.className;
			}
		} catch (e) {
			/* ignore */
		}
		btn.textContent = label;
		btn.addEventListener('click', function () {
			window.location.href = href;
		});
		slot.appendChild(btn);
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
			try {
				renderMenuEntry();
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

	window.CloudHook = { renderSaveButtons: renderSaveButtons, renderMenuEntry: renderMenuEntry };
})();
