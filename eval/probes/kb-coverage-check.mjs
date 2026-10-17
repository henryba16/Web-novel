#!/usr/bin/env node
// eval/probes/kb-coverage-check.mjs — offline checks for the 2026-10-17 KB
// resource expansion: metadata integrity, draft exclusion (G5), determinism,
// citation-subset, and topical coverage/relevance for the real game vocabulary.
//
// Note: source-URL resolution evidence (HTTP 200/403/404) is recorded separately
// in process/features/ai-system/active/ai-upgrade-program_15-10-26/
// phase-02-kb-expansion_NOTE_17-10-26.md — this probe is deterministic/offline
// and does not perform network calls.
import { KNOWLEDGE_RECORDS, retrieveKnowledge, KB_VERSION } from '../../api/_kb.js';

let pass = 0;
let fail = 0;
function check(name, cond, detail) {
	if (cond) { pass++; console.log('PASS ' + name); }
	else { fail++; console.error('FAIL ' + name + (detail ? ' — ' + detail : '')); }
}

const reviewed = KNOWLEDGE_RECORDS.filter(r => r.status === 'reviewed');
const ids = KNOWLEDGE_RECORDS.map(r => r.id);
const reviewedIds = new Set(reviewed.map(r => r.id));

// --- metadata integrity -------------------------------------------------
check('A1 kb version is a kb-* string', typeof KB_VERSION === 'string' && /^kb-/.test(KB_VERSION), String(KB_VERSION));
check('A2 record ids unique', new Set(ids).size === ids.length, 'n=' + ids.length);
check('A3 reviewed library has >= 12 entries', reviewed.length >= 12, 'reviewed=' + reviewed.length);
check('A4 exactly one non-reviewed (draft) entry', KNOWLEDGE_RECORDS.filter(r => r.status !== 'reviewed').length === 1);

const metaBad = [];
for (const r of KNOWLEDGE_RECORDS) {
	const baseOk = typeof r.id === 'string' && /^kb_/.test(r.id)
		&& (r.status === 'reviewed' || r.status === 'draft')
		&& Array.isArray(r.topics) && r.topics.length > 0
		&& r.topics.every(t => typeof t === 'string' && t.length > 0 && t === t.toLowerCase())
		&& typeof r.title === 'string' && r.title.length > 0
		&& typeof r.content === 'string' && r.content.length > 0 && r.content.length <= 500
		&& typeof r.scope === 'string' && r.scope.length > 0
		&& typeof r.limitations === 'string' && r.limitations.length > 0
		&& typeof r.reviewedBy === 'string' && r.reviewedBy.length > 0
		&& r.source && typeof r.source.title === 'string' && r.source.title.length > 0;
	const reviewedOk = r.status !== 'reviewed'
		|| (r.source.traceable === true && typeof r.source.url === 'string' && r.source.url.length > 0);
	if (!baseOk || !reviewedOk) metaBad.push(r.id);
}
check('A5 every record has complete metadata (reviewed => traceable source + url)', metaBad.length === 0, metaBad.join(','));

// --- tag derivation replicated from api/analyze-ending.js + api/chat-ending.js ---
const ew = (txt) => (txt || '').toString().split(/[\s,.;:!?]+/).map(w => w.trim().toLowerCase()).filter(w => w.length >= 3);
function deriveTags(ending, route, stats) {
	const s = new Set();
	s.add('analyze-ending');
	if (Array.isArray(stats)) for (const row of stats) if (typeof row?.key === 'string') s.add(row.key.toLowerCase());
	for (const w of ew(ending && ending.name).slice(0, 4)) s.add(w);
	for (const w of ew(ending && ending.description).slice(0, 8)) s.add(w);
	if (Array.isArray(route)) for (const it of route.slice(0, 6)) {
		for (const w of ew(it && it.context).slice(0, 4)) s.add(w);
		for (const w of ew(it && it.choice).slice(0, 4)) s.add(w);
	}
	return Array.from(s).slice(0, 48);
}
function deriveChatTags(ed, q, hist) {
	const s = new Set();
	s.add('chat-ending');
	for (const w of ew(q).slice(0, 12)) s.add(w);
	if (Array.isArray(ed?.stats)) for (const st of ed.stats) if (typeof st?.key === 'string') s.add(st.key.toLowerCase());
	for (const w of ew(ed?.ending?.name).slice(0, 4)) s.add(w);
	for (const w of ew(ed?.ending?.description).slice(0, 6)) s.add(w);
	if (Array.isArray(hist)) for (const t of (hist || []).slice(-3)) if (typeof t?.content === 'string') for (const w of ew(t.content).slice(0, 6)) s.add(w);
	return Array.from(s).slice(0, 32);
}
function routeTokens(route) {
	const out = [];
	if (Array.isArray(route)) for (const it of route.slice(0, 6)) out.push(...ew(it && it.context), ...ew(it && it.choice));
	return out;
}

const STATS = [{ key: 'empathy', value: 62 }, { key: 'awareness', value: 58 }, { key: 'safe', value: 47 }];
const ENDINGS = [
	{
		label: 'True Ending',
		ending: { name: 'True Ending', description: 'Bạn đã chủ động tìm cách tạo ra một thay đổi tích cực mà vẫn đảm bảo an toàn cho bản thân và những người xung quanh. Bạn là người bạn tâm lý của mọi người xung quanh! Nhưng đừng quên bản thân, đôi lúc tựa vào ai đó cũng chính là cách bạn tự ôm lấy mình.' },
		route: [{ chapter: 1, scene: 'end', context: 'chỉ số đồng cảm, nhận diện, an toàn của người chơi ở mức xuất sắc', choice: 'true ending' }]
	},
	{
		label: 'Good Ending',
		ending: { name: 'Good Ending', description: 'Bạn đã biết quan sát, lắng nghe và lựa chọn cách hỗ trợ phù hợp. Đôi khi, một câu hỏi đơn giản như "Cậu ổn không?" cũng có thể tạo ra sự khác biệt!' },
		route: [{ chapter: 1, scene: 'end', context: 'chỉ số đồng cảm và nhận của người chơi ở tốt', choice: 'good ending' }]
	},
	{
		label: 'Normal Ending',
		ending: { name: 'Normal Ending', description: 'Bạn đã nhận ra một số vấn đề, nhưng đôi khi vẫn còn do dự trước khi hành động. Quan sát là bước đầu tiên. Bước tiếp theo là học cách lựa chọn một hành động phù hợp và an toàn!' },
		route: [{ chapter: 1, scene: 'end', context: 'chỉ số đồng cảm của người chơi ở mức trung bình', choice: 'normal ending' }]
	},
	{
		label: 'Bad Ending',
		ending: { name: 'Bad Ending', description: 'Bạn đã nhìn thấy nhiều dấu hiệu trong câu chuyện, nhưng thường lựa chọn đứng ngoài. Có thể bạn chưa biết phải làm gì hoặc lo rằng mình sẽ khiến tình hình tệ hơn.' },
		route: [{ chapter: 1, scene: 'end', context: 'chỉ số đồng cảm của người chơi quá thấp để vào ending', choice: 'bad ending' }]
	}
];

for (const e of ENDINGS) {
	const tags = deriveTags(e.ending, e.route, STATS);
	const r = retrieveKnowledge({ tags, maxK: 3, requireReviewed: true });
	const topical = tags.filter(t => t !== 'analyze-ending');
	const hits = r.snippets.filter(s => (s.topics || []).some(t => topical.includes(String(t).toLowerCase())));
	check('B coverage ' + e.label + ': >=1 topically-matching source for the real ending text', r.status === 'grounded' && hits.length >= 1,
		'topical=' + hits.map(h => h.id).join(',') + ' tags=' + JSON.stringify(tags));
	check('C subset ' + e.label + ': all citation ids are reviewed library ids', r.citationIds.every(id => reviewedIds.has(id)), r.citationIds.join(','));
}

// --- derivation ordering: no field starves another ----------------------
{
	// H: route (situation/choice) signals survive a long description.
	const e = ENDINGS[0];
	const tags = deriveTags(e.ending, e.route, STATS);
	const rt = routeTokens(e.route);
	check('H route signals retained in analyze tags for a long description', rt.some(t => tags.includes(t)), 'tags=' + JSON.stringify(tags));
}
{
	// I/J: the player question survives a long ending description (chat ordering).
	const q = 'Mình nên làm gì khi thấy bạn cùng lớp bị cô lập trong giờ ra chơi?';
	const ed = { ending: { name: 'Kết B - Bình thường', description: 'Bạn giữ được sự cân bằng cơ bản trong các tình huống và biết quan sát các bạn xung quanh mỗi ngày.' }, stats: STATS };
	const tags = deriveChatTags(ed, q, []);
	const qTokens = ew(q);
	check('I question tokens retained in chat tags under a long ending description', qTokens.some(t => tags.includes(t)), 'tags=' + JSON.stringify(tags));
	const r = retrieveKnowledge({ tags, maxK: 3, requireReviewed: true });
	const hits = r.snippets.filter(s => (s.topics || []).some(t => qTokens.includes(String(t).toLowerCase())));
	check('J chat question yields >=1 topically-matching source', hits.length >= 1, 'topical=' + hits.map(h => h.id).join(','));
}

// --- relevance ordering (specific record outranks the broad anchor) -----
{
	const tags = ['chat-ending', 'mạng', 'chia', 'sẻ', 'an', 'toàn', 'online'];
	const r = retrieveKnowledge({ tags, maxK: 3, requireReviewed: true });
	check('D relevance: cyberbullying/digital record ranks first for online-harm vocabulary', r.citationIds[0] === 'kb_cyberbullying', r.citationIds.join(','));
}
{
	const tags = ['chat-ending', 'bắt', 'nạt', 'lập', 'giúp', 'bạn'];
	const r = retrieveKnowledge({ tags, maxK: 3, requireReviewed: true });
	check('E relevance: bullying/help question yields a thematic top hit', ['kb_safe_bystander_action', 'kb_what_is_bullying', 'kb_help_seeking_trusted_adults'].includes(r.citationIds[0]), r.citationIds.join(','));
}

// --- draft exclusion (G5) ----------------------------------------------
{
	const allTags = Array.from(new Set(KNOWLEDGE_RECORDS.flatMap(r => r.topics.map(String))));
	const r = retrieveKnowledge({ tags: allTags, maxK: 50, requireReviewed: true });
	check('F1 draft record never served even with all topics as tags', !r.citationIds.includes('kb_placeholder_draft_1'), r.citationIds.join(','));
	check('F2 serverable count == reviewed count', r.citationIds.length === reviewed.length, 'served=' + r.citationIds.length + ' reviewed=' + reviewed.length);
}

// --- determinism --------------------------------------------------------
{
	const tags = ['chat-ending', 'bạn', 'giúp', 'mạng', 'an', 'toàn', 'empathy'];
	const a = retrieveKnowledge({ tags, maxK: 3, requireReviewed: true });
	const b = retrieveKnowledge({ tags, maxK: 3, requireReviewed: true });
	check('G deterministic ordering for identical tags', JSON.stringify(a.citationIds) === JSON.stringify(b.citationIds), a.citationIds.join(','));
}

console.log('SUMMARY: ' + pass + '/' + (pass + fail) + ' PASS (KB coverage ' + KB_VERSION + ')');
process.exit(fail === 0 ? 0 : 1);
