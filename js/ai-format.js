/* global window */
/* SchoolShield shared AI-text formatting (loaded by ending.html,
 * dashboard.html — anywhere AI output renders).
 *
 * Rules: escape HTML first (XSS-safe), strip CJK characters the model
 * sometimes leaks (Vietnamese never legitimately contains them), then
 * render **bold**, *italic*, `code`. User-typed text must ALWAYS stay
 * plain textContent and never pass through here.
 */
'use strict';
(function () {
	function escapeHtml(text) {
		return String(text)
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#39;');
	}

	/* Remove Chinese/Japanese/Korean characters occasionally emitted by
	 * the model. Latin + Vietnamese diacritics pass through untouched. */
	function stripCJK(text) {
		return String(text).replace(
			/[\u3400-\u4DBF\u4E00-\u9FFF\u3040-\u30FF\uAC00-\uD7AF\uF900-\uFAFF]/g,
			''
		);
	}

	function renderMarkdown(text) {
		var clean = stripCJK(text);
		var tokens = clean.split(/(`[^`\n]+`)/g);
		var out = '';
		for (var i = 0; i < tokens.length; i++) {
			var t = tokens[i];
			if (t.charAt(0) === '`' && t.length > 1) {
				out += '<code>' + escapeHtml(t.slice(1, -1)) + '</code>';
			} else {
				out += escapeHtml(t)
					.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
					.replace(/(^|[^*\w])\*([^*\n]+)\*/g, '$1<em>$2</em>');
			}
		}
		return out;
	}

	function stripMarkdown(text) {
		return stripCJK(String(text))
			.replace(/`([^`\n]+)`/g, '$1')
			.replace(/\*\*([^*]+)\*\*/g, '$1')
			.replace(/(^|[^*\w])\*([^*\n]+)\*/g, '$1$2');
	}

	/* Overall 4-level rating from the three metrics (mean).
	 * Bad <45, Normal <60, OK <75, Good otherwise. */
	function overallLevel(empathy, awareness, safe) {
		var vals = [empathy, awareness, safe]
			.map(Number)
			.filter(function (v) {
				return isFinite(v);
			});
		if (!vals.length) {
			return { key: 'unknown', label: '—' };
		}
		var mean = vals.reduce(function (a, b) {
			return a + b;
		}, 0) / vals.length;
		if (mean < 45) {
			return { key: 'bad', label: 'Bad' };
		}
		if (mean < 60) {
			return { key: 'normal', label: 'Normal' };
		}
		if (mean < 75) {
			return { key: 'ok', label: 'OK' };
		}
		return { key: 'good', label: 'Good' };
	}

	window.AIFormat = {
		escapeHtml: escapeHtml,
		stripCJK: stripCJK,
		renderMarkdown: renderMarkdown,
		stripMarkdown: stripMarkdown,
		overallLevel: overallLevel
	};
	/* Legacy globals (ending.html originally defined these inline). */
	window.escapeHtml = escapeHtml;
	window.renderMarkdown = renderMarkdown;
	window.stripMarkdown = stripMarkdown;
})();
