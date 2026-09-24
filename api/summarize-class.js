export default async function handler(req, res) {
    console.log("=== SUMMARIZE CLASS API CALLED ===");

    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }

    try {
        console.log(
            "API KEY:",
            process.env.OPENROUTER_API_KEY
                ? "FOUND"
                : "NOT FOUND"
        );

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

        // SYNC: guardrail block mirrors api/chat-ending.js — any guardrail
        // edit must be mirrored in both files before the change is called done.
        const prompt = `
Bạn là AI tóm tắt cho giáo viên SchoolShield,
một visual novel giáo dục về sự cô lập xã hội,
định kiến, bắt nạt học đường và vai trò của người chứng kiến.

Hãy tóm tắt XU HƯỚNG CHUNG của cả lớp từ số liệu dưới đây.
Chỉ mô tả lựa chọn trong game, không suy đoán ngoài game.

Lớp:
${clamp(classRow.name || 'Lớp học', 120)} (${clamp(classRow.code || '', 20)})

SỐ LIỆU TỔNG HỢP:
- Lượt chơi hoàn thành: ${finished.length}
- Học sinh chưa hoàn thành: ${notFinishedCount}
- Trung bình Nhận diện: ${means.awareness === null ? 'chưa có' : means.awareness + '/100'}
- Trung bình Đồng cảm: ${means.empathy === null ? 'chưa có' : means.empathy + '/100'}
- Trung bình An toàn: ${means.safe === null ? 'chưa có' : means.safe + '/100'}

PHÂN BỐ KẾT:
${endingLines || '(chưa có)'}

LỰA CHỌN THEO CẢNH:
${splitLines || '(chưa có)'}

Hãy viết một tóm tắt bằng tiếng Việt,
khoảng 200-300 từ.

Tập trung vào:

1. Xu hướng lựa chọn nổi bật của cả lớp.
2. Xu hướng điểm số (nhận diện, đồng cảm, an toàn).
3. Phân bố kết đã đạt.
4. Một vài điểm giáo viên có thể trò chuyện thêm cùng lớp.

YÊU CẦU:

- Không chẩn đoán tâm lý.
- Không gán nhãn tính cách.
- Không phán xét người chơi.
- Không gọi người chơi là "tốt" hoặc "xấu".
- Không thay đổi hoặc phủ nhận ending của game.
- Không nói rằng một lựa chọn duy nhất quyết định con người của người chơi.
- Phản hồi mang tính giáo dục và khuyến khích tự suy ngẫm.
`;

        const response = await fetch(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                method: 'POST',

                headers: {
                    'Authorization':
                        `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    model: 'openrouter/free',

                    messages: [
                        {
                            role: 'user',
                            content: prompt
                        }
                    ]
                })
            }
        );

        if (!response.ok) {
            const errorText = await response.text();

            console.error(
                'OpenRouter error:',
                errorText
            );

            return res.status(response.status).json({
                error: errorText
            });
        }

        const data = await response.json();

        const summary =
            data.choices?.[0]?.message?.content ||
            'AI không thể phân tích lúc này.';

        return res.status(200).json({
            summary
        });

    } catch (error) {
        console.error('Server error:', error);

        return res.status(500).json({
            error: 'Server error'
        });
    }
}
