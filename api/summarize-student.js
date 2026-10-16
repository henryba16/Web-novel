import { callOpenRouter } from './_openrouter.js';
import { classPromptLabel } from './_privacy.js';
import { buildStudentPrompt, VERSION_STUDENT } from './_prompts.js';
import { GUARDRAIL_BLOCK } from './_guardrails.js';

export default async function handler(req, res) {
    console.log("=== SUMMARIZE STUDENT API CALLED ===");

    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }

    try {
        var SUPABASE_URL = process.env.SUPABASE_URL || '';
        var PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY || '';

        var body = req.body || {};
        var studentId = String(body.studentId === undefined ? '' : body.studentId)
            .trim()
            .slice(0, 100);
        var classId = String(body.classId === undefined ? '' : body.classId)
            .trim()
            .slice(0, 100);

        console.log("STUDENT:", studentId);
        console.log("CLASS:", classId);

        if (!studentId) {
            return res.status(400).json({
                error: 'Thiếu mã học sinh. Hãy chọn học sinh trước khi tạo ghi chú.'
            });
        }

        if (!classId) {
            return res.status(400).json({
                error: 'Thiếu mã lớp. Hãy chọn lớp trước khi tạo ghi chú.'
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

        // Class must belong to this teacher.
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

        // Student must be an active member of this class.
        var memberRes = await sbGet('memberships', {
            select: 'student_id,status',
            class_id: 'eq.' + classId,
            student_id: 'eq.' + studentId,
            limit: '5'
        });

        if (!memberRes.ok) {
            return res.status(403).json({
                error: 'Không đọc được danh sách lớp.'
            });
        }

        var memberRows = (await memberRes.json()) || [];
        var isMember = memberRows.some(function (m) {
            return m && m.student_id === studentId;
        });

        if (!isMember) {
            return res.status(403).json({
                error: 'Học sinh này không thuộc lớp đã chọn.'
            });
        }

        var runsRes = await sbGet('runs', {
            select: '*',
            student_id: 'eq.' + studentId,
            order: 'updated_at.desc',
            limit: '100'
        });

        if (!runsRes.ok) {
            return res.status(403).json({
                error: 'Không đọc được lượt chơi của học sinh.'
            });
        }

        var runs = (await runsRes.json()) || [];

        var finished = runs.filter(function (r) {
            return r && r.status === 'finished';
        });

        console.log("RUNS:", runs.length);
        console.log("FINISHED RUNS:", finished.length);

        // Minimum-data gate: no AI call under 1 finished run.
        if (finished.length < 1) {
            return res.status(400).json({
                error: 'chưa đủ dữ liệu — cần ít nhất 1 lượt chơi hoàn thành để tạo ghi chú.'
            });
        }

        var latest = finished.slice().sort(function (a, b) {
            return String(a.updated_at || '') < String(b.updated_at || '') ? 1 : -1;
        })[0] || finished[0];

        var latestChoices = (latest && Array.isArray(latest.choices) ? latest.choices : [])
            .slice(0, 30)
            .map(function (c, i) {
                var scene = c && typeof c === 'object' ? (c.scene || '') : '';
                var pick = c && typeof c === 'object' ? (c.choice || '') : String(c || '');
                return 'Lựa chọn ' + (i + 1) + ':\n'
                    + '- Tình huống: ' + (clamp(scene, 200) || 'Không rõ') + '\n'
                    + '- Lựa chọn: ' + (clamp(pick, 200) || 'Không rõ');
            })
            .join('\n');

        var historyLines = finished
            .slice(0, 20)
            .map(function (r) {
                return '- Ngày: ' + clamp(r.finished_at || r.updated_at || 'không rõ', 60)
                    + ' · Nhận diện ' + (r.awareness !== undefined ? r.awareness : '—')
                    + ' · Đồng cảm ' + (r.empathy !== undefined ? r.empathy : '—')
                    + ' · An toàn ' + (r.safe !== undefined ? r.safe : '—')
                    + ' · Kết: ' + clamp(r.ending_name || 'chưa có kết', 120);
            })
            .join('\n');

        var unfinishedCount = runs.filter(function (r) {
            return r && r.status !== 'finished';
        }).length;

        // Guardrail SYNC (ai-request-contract §4): the shared guardrail block
        // lives in api/_guardrails.js and is imported by exactly 3 handlers —
        // chat-ending, this file, summarize-class. analyze-ending.js is a
        // named pinned-hash exception (intentional divergence, NOTE 26-09-26).
        const prompt = buildStudentPrompt({ className, finished, unfinishedCount, historyLines, latest, latestChoices });

        const result = await callOpenRouter({
            messages: [
                {
                    role: 'user',
                    content: prompt
                }
            ],
            maxTokens: 600,
            endpoint: 'summarize-student'
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

        const note =
            data.choices?.[0]?.message?.content ||
            'AI không thể phân tích lúc này.';

        return res.status(200).json({
            note,
            model: result.model || undefined
        });

    } catch (error) {
        console.error('Server error:', error);

        return res.status(500).json({
            error: 'Server error'
        });
    }
}
