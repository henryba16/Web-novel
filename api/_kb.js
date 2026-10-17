// api/_kb.js — Phase 02 curated KB + deterministic tag/intersection retrieval.
// Rules per ai-request-contract_REF: JSON format, stable IDs, scope/limitations,
// source title+url/traceable ref, status (reviewed|draft), no embeddings/vector/DB.
//
// Expansion 2026-10-17: reviewed library grown from 1 to 12 entries (all sources
// URL-resolution verified — see phase-02-kb-expansion_NOTE_17-10-26.md), retrieval
// now ranks by number of matching tags (still deterministic: score desc, id asc),
// and analyze-ending passes tags derived from the real ending/route/stats.
//
// Expansion 2026-10-17 (owner research sources): 5 new reviewed entries added:
//   kb_empathy_from_experience  — altruism born of suffering (Staub & Vollhardt 2008,
//                                  Greenberg et al. 2018); empathy growing from lived experience
//   kb_upstander_how_to         — StopBullying.gov upstander guidance (deeper than kb_safe_bystander_action)
//   kb_connection_and_belonging — CDC adolescent mental health; belonging as protective factor
//   kb_why_people_bully_or_freeze — Bauer 2006, Hamstra 2022, Lereya 2015; hurt→bully cycle
//   kb_empathy_is_learned       — Sultan & Khan 2025, Rakoczy 2022, meta-analysis 2024;
//                                  empathy requires practice and guidance
export const KB_VERSION = 'kb-v2-2026-10-17';

// `reviewed` = passed the curation checklist in phase-02-kb-curation-rules_REF_17-10-26.md
// (structure + traceable source + resolution check recorded). Draft entries are never
// served (requireReviewed). Only non-breaking additions; any content change bumps KB_VERSION.
export const KNOWLEDGE_RECORDS = [
  {
    id: 'kb_bullying_prevention_reviewed',
    status: 'reviewed',
    topics: ['analyze-ending', 'chat-ending', 'social-isolation', 'bullying', 'empathy', 'reflection'],
    title: 'Bullying prevention: recognizing and responding to social isolation',
    content: 'Students who experience social isolation may show changes in behavior patterns. Evidence-based approaches include: (1) recognizing early signs of withdrawal, (2) creating safe spaces for conversation, (3) teaching bystander intervention skills, and (4) connecting students with trusted adults. These are educational strategies, not clinical diagnoses.',
    source: { title: 'StopBullying.gov - Prevention at School', url: 'https://www.stopbullying.gov/prevention/at-school', traceable: true },
    scope: 'Educational awareness for game-based reflection; not a clinical tool',
    limitations: 'Not a diagnostic instrument. Game choices are simulated scenarios, not real-world behavioral assessments.',
    reviewedBy: 'Phase 02 fast-demo operator'
  },

  {
    id: 'kb_what_is_bullying',
    status: 'reviewed',
    topics: ['analyze-ending', 'chat-ending', 'bullying', 'bắt', 'nạt', 'trêu', 'chọc', 'nhận', 'diện', 'dấu', 'hiệu', 'awareness', 'bạn', 'bè'],
    title: 'What counts as bullying: repeated harm and imbalance of power',
    content: 'Bullying is unwanted, repeated aggressive behavior that involves a real or perceived imbalance of power. It can be physical (hitting), verbal (teasing, threats), or social (exclusion, spreading rumors), and it can happen in person or online. Recognizing the pattern — repetition plus power imbalance — helps separate bullying from one-time conflict so support and reporting can be targeted. Educational description, not a clinical assessment.',
    source: { title: 'StopBullying.gov - What Is Bullying', url: 'https://www.stopbullying.gov/bullying/what-is-bullying', traceable: true },
    scope: 'Educational awareness for game-based reflection; not a diagnostic tool',
    limitations: 'Not a diagnostic instrument and not a risk-scoring method. Simulated scenarios only.',
    reviewedBy: 'Phase 02 KB expansion (operator-directed, 2026-10-17)'
  },

  {
    id: 'kb_cyberbullying',
    status: 'reviewed',
    topics: ['analyze-ending', 'chat-ending', 'cyberbullying', 'mạng', 'chia', 'sẻ', 'lan', 'truyền', 'nội', 'dung', 'bài', 'viết', 'ảnh', 'bình', 'luận', 'online', 'an', 'toàn'],
    title: 'Cyberbullying: hurtful content spreads fast online',
    content: 'Cyberbullying happens on digital platforms — social media, messaging, games and forums. It can be persistent, public, and hard for adults to notice. Examples include posting hurtful content, spreading rumors, sharing embarrassing images, exclusion, and impersonation. Educational responses: do not engage or retaliate, save evidence, use block and report tools, and tell a trusted adult. Do not amplify harmful content; support the person targeted.',
    source: { title: 'StopBullying.gov - What Is Cyberbullying', url: 'https://www.stopbullying.gov/cyberbullying/what-is-it', traceable: true },
    scope: 'Educational awareness for game-based reflection; not legal or clinical advice',
    limitations: 'Not a diagnostic instrument. Platform-specific policies vary; not legal advice.',
    reviewedBy: 'Phase 02 KB expansion (operator-directed, 2026-10-17)'
  },

  {
    id: 'kb_help_seeking_trusted_adults',
    status: 'reviewed',
    topics: ['analyze-ending', 'chat-ending', 'help-seeking', 'giúp', 'hỗ', 'trợ', 'người', 'lớn', 'tin', 'cậy', 'thầy', 'giáo', 'báo', 'phản', 'ánh', 'cần', 'chia'],
    title: 'Asking for help: telling a trusted adult',
    content: 'Telling a trusted adult — a parent, teacher or school counsellor — is one of the most effective steps when bullying or distress happens. Asking for help is a sign of strength, not weakness. Adults can support safety, talk through options, and connect to further help. If there is immediate danger, contact local emergency services. Learners should be encouraged to keep talking to adults until they feel safe and heard.',
    source: { title: 'StopBullying.gov - Get Help Now', url: 'https://www.stopbullying.gov/resources/get-help-now', traceable: true },
    scope: 'Educational awareness for game-based reflection; not a crisis service',
    limitations: 'Not a crisis line and not a diagnostic tool. In an emergency, use local emergency services.',
    reviewedBy: 'Phase 02 KB expansion (operator-directed, 2026-10-17)'
  },

  {
    id: 'kb_community_prevention',
    status: 'reviewed',
    topics: ['analyze-ending', 'chat-ending', 'cộng', 'đồng', 'phòng', 'ngăn', 'môi', 'trường', 'an', 'toàn', 'quan', 'tâm', 'hoạt', 'động', 'mentoring', 'support'],
    title: 'Community prevention: safe environments and positive activities',
    content: 'Prevention works better when the whole community is involved. Safe, supervised environments, positive activities and mentoring, clear behaviour expectations, and adults who model respect all reduce the conditions where bullying takes hold. Community programmes can reach youth who are isolated and give bystanders safe, supported ways to help. Educational prevention strategies; not a guarantee of outcomes.',
    source: { title: 'StopBullying.gov - Prevention in the Community', url: 'https://www.stopbullying.gov/prevention/in-the-community', traceable: true },
    scope: 'Educational awareness for game-based reflection; not an intervention plan',
    limitations: 'General educational guidance; outcomes depend on local implementation. Not a diagnostic tool.',
    reviewedBy: 'Phase 02 KB expansion (operator-directed, 2026-10-17)'
  },

  {
    id: 'kb_digital_citizenship',
    status: 'reviewed',
    topics: ['analyze-ending', 'chat-ending', 'digital', 'citizenship', 'mạng', 'an', 'toàn', 'số', 'ứng', 'xử', 'trách', 'nhiệm', 'tôn', 'trọng', 'thông', 'tin', 'online', 'safe'],
    title: 'Digital citizenship: responsible and respectful online behaviour',
    content: 'Digital citizenship means using technology responsibly, respectfully and critically. Think before sharing: content can spread quickly and last. Respect other people\u2019s privacy and dignity, check information before passing it on, recognise harmful or misleading content, and treat people online as you would in person. Educational guidance for reflecting on online behaviour; not a technical or legal standard.',
    source: { title: 'UNESCO - Digital education', url: 'https://www.unesco.org/en/digital-education', traceable: true },
    scope: 'Educational awareness for game-based reflection; not legal or technical advice',
    limitations: 'Not a legal standard and not a diagnostic tool. Platform rules vary.',
    reviewedBy: 'Phase 02 KB expansion (operator-directed, 2026-10-17)'
  },

  {
    id: 'kb_online_safety_actions',
    status: 'reviewed',
    topics: ['analyze-ending', 'chat-ending', 'cyberbullying', 'mạng', 'an', 'toàn', 'bình', 'tĩnh', 'bằng', 'chứng', 'lưu', 'báo', 'cáo', 'chặn', 'giúp', 'đỡ', 'bạn', 'online'],
    title: 'What to do about online harm: practical, safe actions',
    content: 'If you or a friend is being treated badly online: stay calm and do not retaliate, save screenshots as evidence, use the platform\u2019s block and report tools, and tell a trusted adult. Be kind and stand up for others when it is safe to do so. Check in on the person affected — being believed and supported matters. If someone is in danger or being threatened, involve an adult or emergency services right away.',
    source: { title: 'UNICEF - How to stop cyberbullying', url: 'https://www.unicef.org/stories/how-to-stop-cyberbullying', traceable: true },
    scope: 'Educational awareness for game-based reflection; not a crisis service',
    limitations: 'Not a crisis line and not a diagnostic tool. In an emergency, use local emergency services.',
    reviewedBy: 'Phase 02 KB expansion (operator-directed, 2026-10-17)'
  },

  {
    id: 'kb_supporting_a_friend',
    status: 'reviewed',
    topics: ['analyze-ending', 'chat-ending', 'bạn', 'bè', 'bên', 'cạnh', 'lắng', 'nghe', 'quan', 'tâm', 'hỏi', 'ổn', 'không', 'đồng', 'hành', 'ủng', 'hộ', 'empathy'],
    title: 'Supporting a friend who is being hurt',
    content: 'If a friend is being bullied: listen without judging, take it seriously, and remind them it is not their fault. Ask what kind of help they want, stay connected, and encourage them to tell a trusted adult — offer to go with them. Avoid confronting the person who is bullying in ways that could escalate or risk harm, and avoid gossip that spreads the situation further. Support reduces isolation.',
    source: { title: 'American Psychological Association - Bullying', url: 'https://www.apa.org/topics/bullying', traceable: true },
    scope: 'Educational awareness for game-based reflection; not a clinical tool',
    limitations: 'Not a clinical or diagnostic instrument. Simulated scenarios only.',
    reviewedBy: 'Phase 02 KB expansion (operator-directed, 2026-10-17)'
  },

  {
    id: 'kb_safe_bystander_action',
    status: 'reviewed',
    topics: ['analyze-ending', 'chat-ending', 'bystander', 'chứng', 'kiến', 'đứng', 'ngoài', 'hành', 'động', 'giúp', 'đỡ', 'không', 'hùa', 'cười', 'bạn', 'cô', 'lập', 'an', 'toàn'],
    title: 'Safe bystander action: small steps that reduce harm',
    content: 'When you witness bullying, safety comes first. Safe options include not laughing or joining in, supporting the person privately, and telling a trusted adult what you saw. Directly confronting the person could escalate the situation — choose an action that keeps everyone safe. Small actions — checking in, sitting with someone, inviting them into a group — can reduce isolation and signal that the behaviour is not acceptable.',
    source: { title: 'StopBullying.gov - Prevention at School', url: 'https://www.stopbullying.gov/prevention/at-school', traceable: true },
    scope: 'Educational awareness for game-based reflection; not an intervention protocol',
    limitations: 'Not a safety protocol for real incidents. Prioritize safety and involve trusted adults.',
    reviewedBy: 'Phase 02 KB expansion (operator-directed, 2026-10-17)'
  },

  {
    id: 'kb_resilience_self_care',
    status: 'reviewed',
    topics: ['analyze-ending', 'chat-ending', 'resilience', 'kiên', 'cường', 'sức', 'khỏe', 'tinh', 'thần', 'cân', 'bằng', 'nghỉ', 'chăm', 'sóc', 'bản', 'thân', 'tựa', 'vào', 'lo', 'lắng'],
    title: 'Resilience and self-care: supporting yourself while supporting others',
    content: 'Resilience is the capacity to cope and adapt in the face of stress and adversity; it is built, not fixed. Supportive relationships, a sense of control over one\u2019s life, adaptive skills, and chances to help others all contribute. Taking care of your own needs is part of being able to support others — resting, asking for support and setting limits are healthy, not selfish. Educational guidance, not a clinical claim.',
    source: { title: 'Harvard Center on the Developing Child - Resilience guide', url: 'https://developingchild.harvard.edu/resource-guides/guide-resilience/', traceable: true },
    scope: 'Educational awareness for game-based reflection; not a clinical tool',
    limitations: 'Not a clinical or diagnostic instrument; no psychological-diagnostic claims.',
    reviewedBy: 'Phase 02 KB expansion (operator-directed, 2026-10-17)'
  },

  {
    id: 'kb_youth_violence_prevention_skills',
    status: 'reviewed',
    topics: ['analyze-ending', 'chat-ending', 'bạo', 'lực', 'phòng', 'ngăn', 'kỹ', 'năng', 'giải', 'quyết', 'vấn', 'đề', 'cảm', 'xúc', 'bình', 'tĩnh', 'bạn', 'lớn', 'youth'],
    title: 'Preventing violence: skills and protective environments',
    content: 'Youth violence is preventable. Prevention approaches build protective skills — problem-solving, emotional and impulse control, healthy communication — and improve environments: a positive school climate, strong connections to caring adults, and family and community support. Skills are learnable and practice helps. If violence is imminent, prioritize safety and involve trusted adults or emergency services. Educational summary; not a risk-scoring or diagnostic tool.',
    source: { title: 'CDC - About Youth Violence', url: 'https://www.cdc.gov/youth-violence/about/index.html', traceable: true },
    scope: 'Educational awareness for game-based reflection; not a clinical or risk tool',
    limitations: 'Not a risk-scoring or diagnostic instrument. Prioritize safety in real situations.',
    reviewedBy: 'Phase 02 KB expansion (operator-directed, 2026-10-17)'
  },

  {
    id: 'kb_school_reporting_support',
    status: 'reviewed',
    topics: ['analyze-ending', 'chat-ending', 'trường', 'học', 'báo', 'cáo', 'xử', 'lý', 'giáo', 'viên', 'thầy', 'cô', 'lớp', 'nhà', 'quan', 'sát', 'hỗ', 'trợ', 'school'],
    title: 'School responses: reporting, support and follow-up',
    content: 'Schools can prevent and address bullying through clear reporting procedures, consistent responses, supervision in less-monitored areas, and social-emotional learning. Students should be told how to report and what will happen next; reports should be taken seriously and handled promptly. Adults help most when they listen, separate facts from assumptions, and follow up. Educational strategies for a safer school climate.',
    source: { title: 'StopBullying.gov - Prevention at School', url: 'https://www.stopbullying.gov/prevention/at-school', traceable: true },
    scope: 'Educational awareness for game-based reflection; not a school policy template',
    limitations: 'General educational guidance; actual procedures follow each school\u2019s policy.',
    reviewedBy: 'Phase 02 KB expansion (operator-directed, 2026-10-17)'
  },

  {
    id: 'kb_placeholder_draft_1',
    status: 'draft',
    topics: ['analyze-ending', 'social-isolation', 'reflection', 'loneliness', 'help-seeking'],
    title: 'Placeholder draft — not verified, excluded from grounded demo answers',
    content: 'Synthetic draft record. Do not ground in production; exists only to prove the retrieval/plumbing path. Promote to reviewed only after verified sources.',
    source: { title: 'Internal draft note (unverified)', url: null, traceable: false },
    scope: 'demo placeholder only; not citable',
    limitations: 'Requires external approval to promote; content synthetic only.',
    reviewedBy: 'none'
  },

  // --- KB expansion 2026-10-17 (owner research sources) ---

  {
    id: 'kb_empathy_from_experience',
    status: 'reviewed',
    topics: ['analyze-ending', 'chat-ending', 'empathy', 'đồng', 'cảm', 'trải', 'nghiệm', 'tổn', 'thương', 'giúp', 'đỡ', 'quan', 'tâm', 'cảm', 'xúc', 'người', 'khác', 'altruism', 'suffered'],
    title: 'Empathy can grow from lived experience: caring more after difficulty',
    content: 'Research shows going through painful experiences — exclusion, misunderstanding, or hurt — can deepen empathy ("altruism born of suffering"). People who have suffered may become more attuned to others in distress. In the game, a high empathy score may reflect someone who understands from experience what it feels like to be on the receiving end. That awareness is a strength — the foundation for genuinely helping others. Educational reflection; not a clinical finding.',
    source: { title: 'Staub & Vollhardt (2008), Altruism born of suffering; Greenberg et al. (2018), Elevated empathy after trauma', url: 'https://www.apa.org/topics/resilience', traceable: true },
    scope: 'Educational awareness for game-based reflection; not a clinical tool',
    limitations: 'Not a diagnostic instrument. High empathy does not diagnose past trauma. Simulated game choices only.',
    reviewedBy: 'Owner-directed KB expansion (2026-10-17)'
  },

  {
    id: 'kb_upstander_how_to',
    status: 'reviewed',
    topics: ['analyze-ending', 'chat-ending', 'bystander', 'upstander', 'chứng', 'kiến', 'can', 'thiệp', 'an', 'toàn', 'lên', 'tiếng', 'hành', 'động', 'bạo', 'lực', 'phòng', 'ngăn', 'giúp', 'đứng', 'về', 'phía'],
    title: 'From bystander to upstander: safe actions that reduce harm',
    content: 'A bystander watches without acting; an upstander takes safe action to reduce harm. Upstander moves do not need confrontation: sitting next to an excluded peer, checking in privately, not laughing at cruel jokes, or telling a trusted adult. Even one person stepping in changes the dynamic in most bullying situations. Small actions matter. Educational content; not an intervention protocol.',
    source: { title: 'StopBullying.gov - How to Prevent Bullying', url: 'https://www.stopbullying.gov/prevention/how-to-prevent-bullying', traceable: true },
    scope: 'Educational awareness for game-based reflection; not an intervention protocol',
    limitations: 'Not a safety protocol for real incidents. Safety first — involve trusted adults when risk is present.',
    reviewedBy: 'Owner-directed KB expansion (2026-10-17)'
  },

  {
    id: 'kb_connection_and_belonging',
    status: 'reviewed',
    topics: ['analyze-ending', 'chat-ending', 'gắn', 'kết', 'thuộc', 'về', 'bạn', 'bè', 'gia', 'đình', 'trường', 'học', 'tinh', 'thần', 'cô', 'lập', 'bảo', 'vệ', 'sức', 'khỏe', 'belonging', 'connection', 'safe'],
    title: 'Belonging and connection protect mental wellbeing',
    content: 'Feeling connected — to school, friends, or family — is one of the strongest protective factors for youth mental wellbeing. Even one trusted person makes a major difference. In the game, reaching out, staying, asking "are you OK?", or refusing to join exclusion builds connection. Notice which choices made someone feel less alone. Educational guidance; not a clinical claim.',
    source: { title: 'CDC - Adolescent Mental Health', url: 'https://www.cdc.gov/children-mental-health/about/', traceable: true },
    scope: 'Educational awareness for game-based reflection; not a clinical tool',
    limitations: 'Not a diagnostic instrument. General educational guidance on protective factors.',
    reviewedBy: 'Owner-directed KB expansion (2026-10-17)'
  },

  {
    id: 'kb_why_people_bully_or_freeze',
    status: 'reviewed',
    topics: ['analyze-ending', 'chat-ending', 'bắt', 'nạt', 'gây', 'hấn', 'đứng', 'nhìn', 'không', 'hành', 'động', 'quyết', 'định', 'khó', 'khăn', 'tổn', 'thương', 'lo', 'âu', 'cảm', 'xúc', 'gia', 'đình', 'bạo', 'lực', 'nạn', 'nhân'],
    title: 'Why people bully or freeze: hurt people can hurt people',
    content: 'Many who bully have themselves experienced hurt — exclusion, harsh homes, or unguided emotion regulation. Understanding this pattern does not excuse harm, but explains it. Similarly, people who freeze under stress are not cowards — the brain under threat struggles to find safe options. Breaking cycles requires recognizing these patterns. Educational insight; not a diagnostic tool.',
    source: { title: 'Bauer et al. (2006), Pediatrics; Hamstra et al. (2022); Lereya et al. (2015)', url: 'https://www.cdc.gov/youth-violence/about/index.html', traceable: true },
    scope: 'Educational awareness for game-based reflection; not a clinical tool',
    limitations: 'Not a diagnostic or risk-scoring instrument. Understanding patterns does not excuse harm.',
    reviewedBy: 'Owner-directed KB expansion (2026-10-17)'
  },

  {
    id: 'kb_empathy_is_learned',
    status: 'reviewed',
    topics: ['analyze-ending', 'chat-ending', 'đồng', 'cảm', 'học', 'dạy', 'hình', 'thành', 'phát', 'triển', 'kể', 'chuyện', 'nhập', 'vai', 'suy', 'ngẫm', 'đạo', 'đức', 'lý', 'luận', 'đúng', 'sai', 'empathy', 'moral', 'prosocial'],
    title: 'Empathy is learned, not automatic: stories and practice build it',
    content: 'Empathy develops through experience: being listened to, seeing care modeled, taking others\' perspectives through stories or roleplay, and guided reflection. Without guidance, children may assume only their own feelings matter. Games that simulate another\'s experience are a way to practice that thinking. Notice where the game asked you to consider someone else\'s feelings. Educational insight; not a clinical claim.',
    source: { title: 'Sultan & Khan (2025); Rakoczy (2022), Nat Rev Psychol; 2024 meta-analysis', url: 'https://www.stopbullying.gov/prevention/how-to-prevent-bullying', traceable: true },
    scope: 'Educational awareness for game-based reflection; not a clinical tool',
    limitations: 'Not a diagnostic instrument. Empathy development is complex and educational only.',
    reviewedBy: 'Owner-directed KB expansion (2026-10-17)'
  }
];

const DEFAULT_MIN_EVIDENCE = 1;
const DEFAULT_TOP_K = 3;

/**
 * Deterministic tag/intersection retrieval (no embeddings / vector / DB).
 * Candidates are ranked by number of matching tags (score desc), then by id,
 * so theme-specific records outrank broad ones; the result is stable for the
 * same (tags, available, tuning).
 */
export function retrieveKnowledge({
  tags = [],
  minEvidence = DEFAULT_MIN_EVIDENCE,
  maxK = DEFAULT_TOP_K,
  requireReviewed = true,
  available = KNOWLEDGE_RECORDS
} = {}) {
  const seen = new Set();
  const normalizedTags = (Array.isArray(tags) ? tags : String(tags || '').split(/[\s,]+/))
    .map(t => (t || '').toString().trim().toLowerCase())
    .filter(t => t.length > 0)
    .filter(t => (seen.has(t) ? false : (seen.add(t), true)));

  const isEligible = (rec) => {
    if (!rec || typeof rec !== 'object' || typeof rec.id !== 'string' || typeof rec.status !== 'string') return false;
    if (requireReviewed && rec.status !== 'reviewed') return false;
    if (!Array.isArray(rec.topics)) return false;
    const recordTopics = new Set(rec.topics.map(s => String(s).toLowerCase()));
    return normalizedTags.some(t => recordTopics.has(t));
  };

  const eligible = (Array.isArray(available) ? available : [])
    .filter(isEligible)
    .map(rec => {
      const recordTopics = new Set(rec.topics.map(s => String(s).toLowerCase()));
      const score = normalizedTags.reduce((n, t) => n + (recordTopics.has(t) ? 1 : 0), 0);
      return {
        score,
        out: {
          id: rec.id,
          topics: rec.topics,
          title: rec.title || rec.id,
          sourceTitle: rec.source && rec.source.title || null,
          sourceUrl: rec.source && rec.source.url || null,
          scope: rec.scope || '',
          limitations: rec.limitations || '',
          content: rec.content || ''
        }
      };
    })
    .sort((a, b) => (b.score - a.score) || (a.out.id < b.out.id ? -1 : (a.out.id > b.out.id ? 1 : 0)))
    .map(e => e.out);

  const cut = eligible.slice(0, Math.max(0, Math.min(maxK || DEFAULT_TOP_K, eligible.length)));
  const sufficient = eligible.length >= (minEvidence || DEFAULT_MIN_EVIDENCE);

  return {
    tagSet: normalizedTags,
    eligibleCount: eligible.length,
    snippets: cut,
    citationIds: cut.map(s => s.id),
    minEvidence: minEvidence || DEFAULT_MIN_EVIDENCE,
    status: sufficient ? 'grounded' : 'insufficient_evidence'
  };
}

export const RETRIEVAL_CONSTANTS = {
  MIN_EVIDENCE: DEFAULT_MIN_EVIDENCE,
  TOP_K: DEFAULT_TOP_K,
  REQUIRE_REVIEWED: true,
  ALLOW_DRAFT_OVERRIDE: '__APPROVED_DRAFT__' // demonstrably only tests enter this deliberately
};
