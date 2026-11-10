// 下載官方網頁版代管的 Diablo II 素材（https://d2survivors.lol/d2/...）到 _research/mirror/d2/，讓本地版完全離線也能玩。
//   用法：node tools/mirror_d2.js            已有且版本沒變的檔略過（可隨時中斷、重跑會接著抓）
//         node tools/mirror_d2.js --check    只算要抓幾個檔，不下載
// 不跑這支也能玩：本地伺服器遇到缺的檔會即時向官方補抓（只是第一次進新地圖會慢一點，而且要連網）。
//
// 素材清單怎麼來（照遊戲程式的規則，2026-11-10 版 game-DQod_2Te 查的）：
//   play/index.html 的 <script id="d2-files"> = { hashes: {資料夾: 版本雜湊}, webp: [改用 .webp 的資料夾], recolors: [怪物 id] }
//   sw.js 列的 17 個總表（ui.json、items.json…）→ 裡面寫死的 "xxx/yyy.png" 路徑
//   動態組出來的：sprites/monsters/<怪>.json、recolors/<怪>.json、gear/<職業>.json → sprites/gear/<職業>/<sheet>.bin
//   網址會帶 ?h=<資料夾雜湊>；官方更新素材時雜湊會變 → 記在 d2/.hashes.json，變了就重抓該資料夾。
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const MIRROR = path.join(ROOT, '_research', 'mirror');
const OUT = path.join(MIRROR, 'd2');
const SITE = 'https://d2survivors.lol/d2/';
const CHECK = process.argv.includes('--check');
const CONC = 12;

const html = fs.readFileSync(path.join(MIRROR, 'play', 'index.html'), 'utf8');
const files = JSON.parse(html.match(/id="d2-files"[^>]*>([\s\S]*?)<\/script>/)[1]);
const sw = fs.readFileSync(path.join(MIRROR, 'sw.js'), 'utf8');
const MANIFESTS = [...new Set([...sw.matchAll(/manifests:\[([^\]]*)\]/g)].flatMap(m => m[1].match(/[\w-]+\.json/g)))];
for (const extra of ['gear.json', 'classes.json', 'hirelings.json']) if (!MANIFESTS.includes(extra)) MANIFESTS.push(extra);

const HASHFILE = path.join(OUT, '.hashes.json');
let known = {};
try { known = JSON.parse(fs.readFileSync(HASHFILE, 'utf8')); } catch (_) { /* 第一次 */ }

const dirOf = p => p.includes('/') ? p.slice(0, p.lastIndexOf('/')) : '';
// 跟遊戲一樣：資料夾在 webp 清單裡、檔名是 .png 就改要 .webp
const actual = p => files.webp.includes(dirOf(p)) && p.endsWith('.png') ? p.slice(0, -4) + '.webp' : p;
const urlOf = p => { const h = files.hashes[dirOf(p)]; return SITE + encodeURI(p) + (h ? '?h=' + h : ''); };

async function get(url) {
  for (let i = 0; i < 4; i++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 D2ZH-mirror' } });
      if (res.status === 404) return null;
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return Buffer.from(await res.arrayBuffer());
    } catch (e) {
      if (i === 3) throw e;
      await new Promise(r => setTimeout(r, 1000 * (i + 1)));
    }
  }
}

const seen = new Set();
const queue = [];
const add = p => {
  if (!p || p.startsWith('/') || p.includes('..') || p.includes('${')) return;
  p = actual(p);
  if (!seen.has(p)) { seen.add(p); queue.push(p); }
};

// 從 JSON 內容找更多要抓的檔
function expand(rel, buf) {
  let j;
  try { j = JSON.parse(buf.toString('utf8')); } catch (_) { return; }
  const s = JSON.stringify(j);
  for (const m of s.matchAll(/"([\w][\w\/.-]*\/[\w.-]+\.(?:png|webp|m4a|ogg|wav|mp3|json|bin))"/g)) add(m[1]);
  if (rel === 'monsters.json') for (const id of Object.keys(j)) add(`sprites/monsters/${id}.json`);
  if (rel === 'gear.json' && Array.isArray(j.classes)) for (const c of j.classes) add(`gear/${c}.json`);
  const gm = rel.match(/^gear\/([\w-]+)\.json$/);
  if (gm && j.sheets) for (const v of Object.values(j.sheets)) if (typeof v === 'string') add(`sprites/gear/${gm[1]}/${v}.bin`);
}

async function main() {
  for (const m of MANIFESTS) add(m);
  for (const id of files.recolors || []) add(`recolors/${id}.json`);
  let done = 0, got = 0, skipped = 0, missing = 0, bytes = 0, failed = [];
  const changedDirs = new Set(Object.keys(files.hashes).filter(d => known[d] && known[d] !== files.hashes[d]));
  if (changedDirs.size) console.log('官方更新過的資料夾（會重抓）：' + [...changedDirs].join(', '));
  const t0 = Date.now();
  async function worker() {
    while (queue.length) {
      const rel = queue.shift();
      const file = path.join(OUT, rel);
      let buf = null;
      const fresh = fs.existsSync(file) && !changedDirs.has(dirOf(rel));
      if (fresh) { skipped++; if (rel.endsWith('.json')) buf = fs.readFileSync(file); }
      else if (CHECK) { got++; }
      else {
        try { buf = await get(urlOf(rel)); } catch (e) { failed.push(rel + '：' + e.message); }
        if (buf) {
          fs.mkdirSync(path.dirname(file), { recursive: true });
          fs.writeFileSync(file, buf);
          got++; bytes += buf.length;
        } else if (!failed.length || !failed[failed.length - 1].startsWith(rel)) missing++;
      }
      if (buf && rel.endsWith('.json')) expand(rel, buf);
      if (++done % 200 === 0) process.stdout.write(`\r  進度 ${done}／${seen.size}（新抓 ${got}，${(bytes / 1048576).toFixed(0)} MB）   `);
    }
  }
  // 佇列會在處理 JSON 時長大，worker 抓空就結束 → 外層重複直到真的沒東西
  while (queue.length) await Promise.all(Array.from({ length: CONC }, worker));
  if (!CHECK) {
    fs.mkdirSync(OUT, { recursive: true });
    fs.writeFileSync(HASHFILE, JSON.stringify(files.hashes, null, 1));
  }
  console.log(`\n完成：共 ${seen.size} 檔，新抓 ${got}（${(bytes / 1048576).toFixed(1)} MB）、已有 ${skipped}、官方沒有 ${missing}、失敗 ${failed.length}，${((Date.now() - t0) / 1000).toFixed(0)} 秒`);
  if (failed.length) console.log(failed.slice(0, 20).join('\n'));
}
main().catch(e => { console.error(e); process.exit(1); });
