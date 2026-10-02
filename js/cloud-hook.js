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
			measureChoiceLines();
			startScreenObserver();
		} catch (e) {
			/* never break the game shell */
		}
		if (document.fonts && typeof document.fonts.ready.then === 'function') {
			document.fonts.ready.then(function () {
				try {
					var btns = document.querySelectorAll('[data-component="choice-container"] button[data-linew]');
					for (var i = 0; i < btns.length; i++) {
						btns[i].removeAttribute('data-linew');
					}
					measureChoiceLines();
				} catch (e) {
					/* ignore */
				}
			});
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
			} else if (res.authExpired) {
				note.textContent = 'Phiên đăng nhập hết hạn — hãy đăng nhập lại rồi bấm Đồng bộ.';
			} else {
				var parts = [];
				if (res.stillPending > 0) {
					parts.push('Còn ' + res.stillPending + ' lượt chờ. Thử lại sau.');
				} else {
					parts.push('Đã đồng bộ (' + res.uploaded + ' lượt chơi).');
				}
				if (res.slotsDownloaded > 0) {
					var live = remountSlotContainers();
					parts.push('Đã tải ' + res.slotsDownloaded + ' save từ thiết bị khác' +
						(live > 0 ? ' — danh sách đã cập nhật.' : ' — mở lại màn hình Load để xem.'));
				}
				note.textContent = parts.join(' ');
			}
		}).catch(function (e) {
			note.textContent = 'Đồng bộ thất bại: ' + ((e && e.message) || 'lỗi không xác định, thử lại sau');
		}).then(function () {
			syncBtn.textContent = 'Đồng bộ' + (pendingCount() ? ' (' + pendingCount() + ')' : '');
		});
	}

	/* Live slot refresh: the engine reads save slots from IndexedDB only
	 * when <slot-container> mounts (willMount), so a mid-session cloud pull
	 * is invisible on an already-open save/load screen. Swapping each
	 * container for a fresh element re-triggers mount → fresh IDB read, no
	 * page reload, no engine state lost. Only touches visible screens;
	 * hidden screens read fresh on their next open anyway. Never throws.
	 * Returns the number of containers remounted. */
	function remountSlotContainers() {
		var count = 0;
		saveScreens().forEach(function (screen) {
			if (!isShown(screen)) {
				return;
			}
			var slots = null;
			try {
				slots = screen.querySelectorAll('slot-container');
			} catch (e) {
				return;
			}
			for (var i = 0; i < slots.length; i++) {
				try {
					var old = slots[i];
					var fresh = document.createElement('slot-container');
					for (var a = 0; a < old.attributes.length; a++) {
						fresh.setAttribute(old.attributes[a].name, old.attributes[a].value);
					}
					old.parentNode.replaceChild(fresh, old);
					count++;
				} catch (e) {
					/* keep the old element on failure */
				}
			}
		});
		return count;
	}

	function renderSaveButtons() {		if (!enabled()) {
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
			label = 'Sign in'; href = 'login.html';
		} else if (role === 'teacher') {
			label = 'Dashboard'; href = 'dashboard.html';
		} else {
			label = 'Progress'; href = 'student-dashboard.html';
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

	/* Choice underline sizing: measure each option's text width once it
	 * renders, so the hover line spreads exactly text-wide while boxes
	 * stay uniform. Guarded + idempotent; fonts.ready re-pass included. */
	function measureChoiceLines() {
		var buttons = null;
		try {
			buttons = document.querySelectorAll('[data-component="choice-container"] button');
		} catch (e) {
			return;
		}
		for (var i = 0; i < buttons.length; i++) {
			var b = buttons[i];
			try {
				if (b.getAttribute('data-linew')) {
					continue;
				}
				var range = document.createRange();
				range.selectNodeContents(b);
				var w = Math.ceil(range.getBoundingClientRect().width);
				if (w > 0) {
					b.style.setProperty('--line-w', w + 'px');
					b.setAttribute('data-linew', '1');
				}
			} catch (e) {
				/* ignore */
			}
		}
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
			try {
				measureChoiceLines();
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
