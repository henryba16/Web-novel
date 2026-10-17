// scripts/check-ai-prompt-integrity.mjs — Phase 02 B7 (field clamps) + B8
// (guardrail parity) evidence gate for the two player endpoints.
//
// B7: drives analyze-ending + chat-ending through the harness stub with OVERSIZED
//     client-controlled inputs and asserts the assembled prompts contain only
//     clamped values (tail sentinels never appear; clamped prefixes do):
//       analyze: ending.name <=160, ending.description <=400, route <=10 items
//                (scene <=160, context <=240, choice <=240), stats coerced to
//                finite numbers, null route items do not crash.
//       chat:    ending.name <=160, question <=500, history <=1000 chars x 10 turns.
// B8: asserts the assembled prompts carry the guardrail semantics —
//       chat:    the canonical GUARDRAIL_BLOCK (normalized) is present;
//       analyze: the owner-authored safety principles are present (Latin-only rule included).
//
// Usage: node scripts/check-ai-prompt-integrity.mjs
// Exit 0 = all green; exit 1 = one or more failures.

import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(SCRIPT_DIR, '..');

let failures = 0;
function fail(msg) { console.error('FAIL: ' + msg); failures += 1; }
function pass(msg) { console.log('PASS: ' + msg); }

const harnessUrl = pathToFileURL(path.resolve(REPO_ROOT, 'eval', 'lib', 'harness.mjs')).href;
const harness = await import(harnessUrl);
const guardrailsUrl = pathToFileURL(path.resolve(REPO_ROOT, 'api', '_guardrails.js')).href;
const { GUARDRAIL_BLOCK } = await import(guardrailsUrl);

const handlers = await harness.loadHandlers(REPO_ROOT);

// --- oversized fixture (cloned from CAPTURE_FIXTURE; sentinels beyond every bound) ---
const fx = JSON.parse(JSON.stringify(harness.CAPTURE_FIXTURE));
fx.session.ending = {
  name: 'N'.repeat(200) + '<<TAIL_NAME>>',
  description: 'D'.repeat(500) + '<<TAIL_DESC>>'
};
fx.session.stats = [
  { key: 'empathy', value: 'not-a-number' },
  { key: 'awareness', value: 58 },
  { key: 'safe', value: { nested: true } }
];
fx.session.route = [
  {
    chapter: 1,
    scene: 'S'.repeat(300) + '<<TAIL_SCENE>>',
    context: 'C'.repeat(400) + '<<TAIL_CTX>>',
    choice: 'H'.repeat(400) + '<<TAIL_CHOICE>>'
  },
  null,
  { chapter: 2, scene: 'Sân trường', context: 'Bối cảnh ngắn', choice: 'Lựa chọn ngắn' }
];
for (let i = 3; i <= 12; i += 1) {
  fx.session.route.push({ chapter: i, scene: 'scene-' + i, context: 'ctx-' + i, choice: 'choice-' + i });
}
fx.session.route[10] = { chapter: 11, scene: '<<TAIL_ROUTE11>>', context: 'x', choice: 'y' };
fx.session.route[11] = { chapter: 12, scene: '<<TAIL_ROUTE12>>', context: 'x', choice: 'y' };

fx.session.question = 'Q'.repeat(600) + '<<TAIL_Q>>';
fx.session.history = [];
for (let i = 0; i < 12; i += 1) {
  fx.session.history.push({
    role: i % 2 === 0 ? 'user' : 'assistant',
    content: i < 2 ? ('OLD-TURN-' + i + ' <<TAIL_OLD' + i + '>>') : ('H'.repeat(1100) + '<<TAIL_H' + i + '>>')
  });
}

const flows = harness.buildFlows(fx);

async function drive(name) {
  const flow = flows[name];
  const stub = harness.installFetchStub({ provider: 'stub', ...flow.stubOptions });
  let result = null;
  try {
    result = await harness.withEnv(flow.env, () => harness.invokeHandler(handlers[name], { body: flow.body, headers: flow.headers }));
  } finally {
    stub.restore();
  }
  return { result, stub };
}

function getPrompt(stub) {
  if (!stub.providerCalls || stub.providerCalls.length !== 1) return null;
  return stub.providerCalls[0].body.messages[0].content;
}

// --- B7/B8 analyze ---
{
  const { result, stub } = await drive('analyze-ending');
  if (result.threw) fail('analyze-ending threw on oversized/null-route input: ' + result.threw.message);
  else if (result.status !== 200) fail('analyze-ending expected HTTP 200, got ' + result.status);
  else pass('analyze-ending: oversized + null-item route handled without crash (HTTP 200)');

  const prompt = getPrompt(stub);
  if (!prompt) {
    fail('analyze-ending: expected exactly 1 provider call, got ' + (stub.providerCalls ? stub.providerCalls.length : 0));
  } else {
    const checks = [
      ['ending.name tail absent', !prompt.includes('<<TAIL_NAME>>')],
      ['ending.name clamped at 160', prompt.includes('N'.repeat(160)) && !prompt.includes('N'.repeat(161))],
      ['ending.description tail absent', !prompt.includes('<<TAIL_DESC>>')],
      ['ending.description clamped at 400', prompt.includes('D'.repeat(400)) && !prompt.includes('D'.repeat(401))],
      ['route item count is exactly 10', (prompt.match(/Lựa chọn \d+:/g) || []).length === 10],
      ['route item 11 dropped (>10 items)', !prompt.includes('<<TAIL_ROUTE11>>')],
      ['route item 12 dropped (>10 items)', !prompt.includes('<<TAIL_ROUTE12>>')],
      ['route scene tail absent', !prompt.includes('<<TAIL_SCENE>>')],
      ['route scene clamped at 160', prompt.includes('S'.repeat(160)) && !prompt.includes('S'.repeat(161))],
      ['route context tail absent', !prompt.includes('<<TAIL_CTX>>')],
      ['route context clamped at 240', prompt.includes('C'.repeat(240)) && !prompt.includes('C'.repeat(241))],
      ['route choice tail absent', !prompt.includes('<<TAIL_CHOICE>>')],
      ['route choice clamped at 240', prompt.includes('H'.repeat(240)) && !prompt.includes('H'.repeat(241))],
      ['null route item rendered as fallback (no crash)', prompt.includes('Không rõ')],
      ['stats: non-numeric empathy coerced to 0', prompt.includes('đồng cảm 0/100')],
      ['stats: numeric awareness preserved', prompt.includes('nhận diện 58/100')],
      ['stats: non-scalar safe coerced to 0', prompt.includes('an toàn 0/100')],
      ['B8 analyze: safety principles present', prompt.includes('NGUYÊN TẮC AN TOÀN')],
      ['B8 analyze: Latin-only rule present', prompt.includes('không dùng ký tự Trung/Nhật/Hàn')]
    ];
    for (const [label, ok] of checks) {
      if (ok) pass('analyze-ending prompt: ' + label);
      else fail('analyze-ending prompt: ' + label);
    }
  }
}

// --- B7/B8 chat ---
{
  const { result, stub } = await drive('chat-ending');
  if (result.threw) fail('chat-ending threw on oversized input: ' + result.threw.message);
  else if (result.status !== 200) fail('chat-ending expected HTTP 200, got ' + result.status);
  else pass('chat-ending: oversized input handled without crash (HTTP 200)');

  const prompt = getPrompt(stub);
  if (!prompt) {
    fail('chat-ending: expected exactly 1 provider call, got ' + (stub.providerCalls ? stub.providerCalls.length : 0));
  } else {
    const normalizedBlock = String(GUARDRAIL_BLOCK || '').replace(/\r\n/g, '\n').trim();
    const checks = [
      ['question tail absent', !prompt.includes('<<TAIL_Q>>')],
      ['question clamped at 500', prompt.includes('Q'.repeat(500)) && !prompt.includes('Q'.repeat(501))],
      ['ending.name tail absent', !prompt.includes('<<TAIL_NAME>>')],
      ['ending.name clamped at 160', prompt.includes('N'.repeat(160)) && !prompt.includes('N'.repeat(161))],
      ['history turn 1 dropped (10-turn window)', !prompt.includes('<<TAIL_OLD0>>')],
      ['history turn 2 dropped (10-turn window)', !prompt.includes('<<TAIL_OLD1>>')],
      ['history content tail absent', !prompt.includes('<<TAIL_H11>>')],
      ['history content clamped at 1000', prompt.includes('H'.repeat(1000)) && !prompt.includes('H'.repeat(1001))],
      ['B8 chat: canonical GUARDRAIL_BLOCK present', prompt.includes(normalizedBlock)],
      ['B8 chat: transcript label fixed', prompt.includes('Người chơi hỏi:') && !prompt.includes('Ngưi')]
    ];
    for (const [label, ok] of checks) {
      if (ok) pass('chat-ending prompt: ' + label);
      else fail('chat-ending prompt: ' + label);
    }
  }
}

if (failures > 0) {
  console.error('PROMPT INTEGRITY CHECK FAILED: ' + failures + ' problem(s).');
  process.exitCode = 1;
} else {
  console.log('PROMPT INTEGRITY CHECK PASSED: clamps enforced + guardrail parity on both player prompts.');
}
