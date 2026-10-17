import { callOpenRouter } from './_openrouter.js';
import { classPromptLabel } from './_privacy.js';
import { buildClassPrompt, VERSION_CLASS } from './_prompts.js';
import { GUARDRAIL_BLOCK } from './_guardrails.js';

export default async function handler(req, res) {
    console.log("=== SUMMARIZE CLASS API CALLED ===");

    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }

    try {
        var SUPABASE_URL = process.env.SUPABASE_URL || '';
        var PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY || '';

        var body = req.body || {};
        var classId = String(body.classId === undefined ? '' : body.classId)
            .trim()
            .slice(0, 100);

        console.log("CLASS:", classId);

        if (!classId) {
            return res.status(400).json({
                error: 'Thiếu mã lớp. Hãy chọn lớp trước khi tạo tóm tắt.'
            });
        }

        var authHeader = (req.headers && (req.headers.authorization || req.headers.Authorization)) || '';
        var teacherJwt = String(authHeader).replace(/^Bearer\s+/i, '').trim();

        if (!teacherJwt) {
            return res.status(401).json({
                error: 'Thiếu phiên đăng nhập giáo viên. Hãy đăng nhập lại.'
            });
        }

        if (!SUPABASE_URL || !PUBLISHABLE_KEY) {
            return res.status(500).json({
                error: 'Cloud chưa được cấu hình trên máy chủ.'
            });
        }

        var base = String(SUPABASE_URL).replace(/\/+$/, '');

        // Teacher JWT verification before any OpenRouter call.
        var whoRes;
        try {
            whoRes = await fetch(base + '/auth/v1/user', {
                method: 'GET',
                headers: {
                    apikey: PUBLISHABLE_KEY,
                    Authorization: 'Bearer ' + teacherJwt
                }
            });
        } catch (e) {
            return res.status(502).json({
                error: 'Không xác minh được phiên đăng nhập. Thử lại sau.'
            });
        }

        if (!whoRes.ok) {
            return res.status(401).json({
                error: 'Phiên đăng nhập không hợp lệ. Hãy đăng nhập lại.'
            });
        }

        var teacherUser = await whoRes.json();
        var teacherId = teacherUser && (teacherUser.id || (teacherUser.user && teacherUser.user.id));

        console.log("TEACHER:", teacherId || '(unknown)');

        if (!teacherId) {
            return res.status(401).json({
                error: 'Phiên đăng nhập không hợp lệ. Hãy đăng nhập lại.'
            });
        }

        function sbGet(path, query) {
            var qs = Object.keys(query || {})
                .map(function (k) {
                    return encodeURIComponent(k) + '=' + encodeURIComponent(query[k]);
                })
                .join('&');
            return fetch(base + '/rest/v1/' + path + (qs ? '?' + qs : ''), {
                method: 'GET',
                headers: {
                    apikey: PUBLISHABLE_KEY,
                    Authorization: 'Bearer ' + teacherJwt,
                    Accept: 'application/json'
                }
            });
        }

        function clamp(s, n) {
            return String((s === null || s === undefined) ? '' : s)
                .replace(/[\r\n]+/g, ' ')
                .trim()
                .slice(0, n);
        }

        // Class must belong to this teacher (RLS also enforces; explicit
        // ownership check keeps the 403 message plain Vietnamese).
        var classRes = await sbGet('classes', {
            select: 'id,name,code,teacher_id',
            id: 'eq.' + classId,
            limit: '1'
        });

        if (!classRes.ok) {
            return res.status(403).json({
                error: 'Không đọc được lớp học. Lớp có thể không thuộc tài khoản này.'
            });
        }

        var classRows = await classRes.json();
        var classRow = (classRows && classRows[0]) || null;

        if (!classRow || classRow.teacher_id !== teacherId) {
            return res.status(403).json({
                error: 'Lớp học không thuộc tài khoản giáo viên này.'
            });
        }

        // A2 minimization (ai-request-contract §2.2): the class NAME is the
        // stable non-secret class label; classes.code (the
        // rpc/join_class_by_code credential) never enters the prompt.
        var className = classPromptLabel(classRow.name);

        var runsRes = await sbGet('runs', {
            select: '*',
            class_id: 'eq.' + classId,
            order: 'updated_at.desc',
            limit: '200'
        });

        if (!runsRes.ok) {
            return res.status(403).json({
                error: 'Không đọc được lượt chơi của lớp.'
            });
        }

        var allRuns = (await runsRes.json()) || [];

        var membersRes = await sbGet('memberships', {
            select: 'student_id,status',
            class_id: 'eq.' + classId,
            limit: '200'
        });

        var memberIds = [];
        if (membersRes.ok) {
            var members = (await membersRes.json()) || [];
            members.forEach(function (m) {
                if (m && m.student_id && memberIds.indexOf(m.student_id) < 0) {
                    memberIds.push(m.student_id);
                }
            });
        }

        var finished = allRuns.filter(function (r) {
            return r && r.status === 'finished';
        });

        console.log("FINISHED RUNS:", finished.length);

        // Minimum-data gate: no AI call under 1 finished run.
        if (finished.length < 1) {
            return res.status(400).json({
                error: 'chưa đủ dữ liệu — cần ít nhất 1 lượt chơi hoàn thành để tạo tóm tắt.'
            });
        }

        var sums = { awareness: 0, empathy: 0, safe: 0 };
        var counts = { awareness: 0, empathy: 0, safe: 0 };
        finished.forEach(function (r) {
            ['awareness', 'empathy', 'safe'].forEach(function (k) {
                var v = Number(r[k]);
                if (isFinite(v)) {
                    sums[k] += v;
                    counts[k] += 1;
                }
            });
        });

        function mean(k) {
            return counts[k] ? Math.round(sums[k] / counts[k]) : null;
        }

        var means = {
            awareness: mean('awareness'),
            empathy: mean('empathy'),
            safe: mean('safe')
        };

        var endingCounts = {};
        finished.forEach(function (r) {
            var name = (r.ending_name && String(r.ending_name)) || '(chưa đặt tên)';
            endingCounts[name] = (endingCounts[name] || 0) + 1;
        });

        var endingLines = Object.keys(endingCounts)
            .map(function (name) {
                return '- ' + clamp(name, 120) + ': ' + endingCounts[name] + ' lượt';
            })
            .slice(0, 10)
            .join('\n');

        var splits = {};
        finished.forEach(function (r) {
            var choices = Array.isArray(r.choices) ? r.choices : [];
            choices.forEach(function (c) {
                var scene = c && typeof c === 'object' ? (c.scene || '') : '';
                var pick = c && typeof c === 'object' ? (c.choice || '') : String(c || '');
                var key = clamp(scene || 'Không rõ', 120) + ' — ' + clamp(pick || 'Không rõ', 120);
                var skey = clamp(scene || 'Không rõ', 120);
                if (!splits[skey]) {
                    splits[skey] = {};
                }
                splits[skey][key] = (splits[skey][key] || 0) + 1;
            });
        });

        var splitLines = Object.keys(splits)
            .slice(0, 12)
            .map(function (scene) {
                var rows = Object.keys(splits[scene])
                    .map(function (key) {
                        return '  + ' + key + ': ' + splits[scene][key] + ' lượt';
                    })
                    .slice(0, 8)
                    .join('\n');
                return 'Cảnh ' + scene + ':\n' + rows;
            })
            .join('\n');

        var finishedIds = {};
        finished.forEach(function (r) {
            if (r.student_id) {
                finishedIds[r.student_id] = true;
            }
        });
        var notFinishedCount = memberIds.filter(function (id) {
            return id && !finishedIds[id];
        }).length;

        /* "Who to keep an eye on" for the class summary: per-student latest
         * finished run flagged for high empathy ("too empathy" — may signal the
         * student experienced something that made them more empathetic/withdrawn)
         * or a metric under 45. Labels use short student-id suffixes since the
         * class summary never receives student names. */
        var latestByStudent = {};
        finished.forEach(function (r) {
            if (!r || !r.student_id) {
                return;
            }
            var sid = r.student_id;
            var prev = latestByStudent[sid];
            if (!prev || String(r.updated_at || '') > String(prev.updated_at || '')) {
                latestByStudent[sid] = r;
            }
        });
        function shortIdSrv(id) {
            var raw = String(id === null || id === undefined ? '' : id).replace(/[^0-9a-z]/gi, '');
            if (!raw) {
                return '----';
            }
            return raw.slice(-4).toUpperCase();
        }
        var atRisk = [];
        Object.keys(latestByStudent).forEach(function (sid) {
            var r = latestByStudent[sid];
            var reasons = [];
            var emp = Number(r.empathy);
            if (isFinite(emp) && emp >= 90) {
                reasons.push('đồng cảm rất cao (' + Math.round(emp) + '/100) — cần quan sát thêm');
            }
            ['awareness', 'empathy', 'safe'].forEach(function (k) {
                var v = Number(r[k]);
                if (isFinite(v) && v < 45) {
                    reasons.push(k + ' thấp (' + Math.round(v) + '/100)');
                }
            });
            if (reasons.length) {
                atRisk.push('- Học sinh ' + shortIdSrv(sid) + ': ' + reasons.join('; ') + '.');
            }
        });
        var atRiskLines = atRisk.length ? atRisk.join('\n') : '(không có học sinh nào vượt ngưỡng cần theo dõi từ dữ liệu này)';

        // Guardrail SYNC (ai-request-contract §4): the shared guardrail block
        // lives in api/_guardrails.js and is imported by exactly 3 handlers —
        // chat-ending, summarize-student, this file. analyze-ending.js is a
        // named pinned-hash exception (intentional divergence, NOTE 26-09-26).
        const prompt = buildClassPrompt({ className, finished, notFinishedCount, means, endingLines, splitLines, atRiskLines: atRiskLines });

        const result = await callOpenRouter({
            messages: [
                {
                    role: 'user',
                    content: prompt
                }
            ],
            maxTokens: 800,
            endpoint: 'summarize-class'
        });

        if (!result.ok) {
            console.error(
                'OpenRouter error:',
                result.errorText
            );

            return res.status(result.status).json({
                error: result.errorText
            });
        }

        const data = result.data;

        const summary =
            data.choices?.[0]?.message?.content ||
            'AI không thể phân tích lúc này.';

        return res.status(200).json({
            summary,
            model: result.model || undefined
        });

    } catch (error) {
        console.error('Server error:', error);

        return res.status(500).json({
            error: 'Server error'
        });
    }
}
