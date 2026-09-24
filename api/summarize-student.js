export default async function handler(req, res) {
    console.log("=== SUMMARIZE STUDENT API CALLED ===");

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

        // SYNC: guardrail block mirrors api/chat-ending.js — any guardrail
        // edit must be mirrored in both files before the change is called done.
        const prompt = `
Bạn là AI ghi chú cho giáo viên SchoolShield,
một visual novel giáo dục về sự cô lập xã hội,
định kiến, bắt nạt học đường và vai trò của người chứng kiến.

Hãy mô tả QUÁ TRÌNH CHƠI của một học sinh từ số liệu dưới đây.
Chỉ mô tả lựa chọn trong game, không suy đoán ngoài game.

Lớp:
${clamp(classRow.name || 'Lớp học', 120)} (${clamp(classRow.code || '', 20)})

LỊCH SỬ LƯỢT CHƠI (đã hoàn thành: ${finished.length}, chưa xong: ${unfinishedCount}):
${historyLines || '(chưa có)'}

LƯỢT MỚI NHẤT:
- Đồng cảm: ${(latest && latest.empathy !== undefined ? latest.empathy : '—')}/100
- Nhận diện: ${(latest && latest.awareness !== undefined ? latest.awareness : '—')}/100
- An toàn: ${(latest && latest.safe !== undefined ? latest.safe : '—')}/100
- Kết: ${clamp((latest && latest.ending_name) || 'chưa có kết', 120)}

LỰA CHỌN TRONG LƯỢT MỚI NHẤT:
${latestChoices || '(chưa có)'}

Hãy viết một ghi chú bằng tiếng Việt,
khoảng 100-200 từ.

Tập trung vào:

1. Em thường chú ý đến điều gì trong các lựa chọn?
2. Em có xu hướng ưu tiên đồng cảm,
   nhận diện vấn đề hay an toàn?
3. Một vài lựa chọn đáng chú ý.
4. Một điều giáo viên có thể trò chuyện thêm cùng em.

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

        const note =
            data.choices?.[0]?.message?.content ||
            'AI không thể phân tích lúc này.';

        return res.status(200).json({
            note
        });

    } catch (error) {
        console.error('Server error:', error);

        return res.status(500).json({
            error: 'Server error'
        });
    }
}
