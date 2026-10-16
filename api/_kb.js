// api/_kb.js — Phase 02 (fast demo) curated KB + deterministic tag/intersection retrieval.
// Rules per ai-request-contract_REF: JSON format, stable IDs, scope/limitations,
// source title+url/traceable ref, status (reviewed|draft), no embeddings/vector/DB.
export const KB_VERSION = 'kb-v1-draft-2026-10-16';

// Seed records are ALL `status: 'draft'` on purpose: no verified published
// source was supplied which grounds them. This keeps Phase 02's demo strictly
// honest (insufficient-evidence when no reviewed source qualifies to tags) and
// prevents fabrication of URLs/claims. A operator-verified key can be promoted
// to `reviewed` later (everything below is non-breaking addition).
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
    id: 'kb_placeholder_draft_1',
    status: 'draft',
    topics: ['analyze-ending', 'social-isolation', 'reflection', 'loneliness', 'help-seeking'],
    title: 'Placeholder draft — not verified, excluded from grounded demo answers',
    content: 'Synthetic draft record. Do not ground in production; exists only to prove the retrieval/plumbing path. Promote to reviewed only after verified sources.',
    source: { title: 'Internal draft note (unverified)', url: null, traceable: false },
    scope: 'demo placeholder only; not citable',
    limitations: 'Requires external approval to promote; content synthetic only.',
    reviewedBy: 'none'
  }
];

const DEFAULT_MIN_EVIDENCE = 1;
const DEFAULT_TOP_K = 3;

/**
 * Deterministic tag/intersection retrieval (no embeddings / vector / DB).
 * Always returns the same set for the same (tags, available, tuning).
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
    .map(rec => ({
      id: rec.id,
      topics: rec.topics,
      title: rec.title || rec.id,
      sourceTitle: rec.source && rec.source.title || null,
      sourceUrl: rec.source && rec.source.url || null,
      scope: rec.scope || '',
      limitations: rec.limitations || '',
      content: rec.content || ''
    }))
    .sort((a, b) => a.id < b.id ? -1 : (a.id > b.id ? 1 : 0));

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