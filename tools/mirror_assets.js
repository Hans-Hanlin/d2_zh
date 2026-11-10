// D2 Survivors 網頁版完整鏡像：從 https://d2survivors.lol/play/ 出發，順著 html / js / css 裡的參照把所有檔案抓到 _research/mirror/
//   用法：node tools/mirror_assets.js            （已存在的檔案略過；入口 play/index.html 每次都重抓 → 等於更新到官方最新版）
//         node tools/mirror_assets.js --keep     （入口也不重抓，只補缺的檔）
// 打包後的 assets/*-HASH.* 檔名帶雜湊，內容不會變，所以新舊版可以共存；入口檔決定跑哪一版。
// 更新前舊入口自動備份到 _research/mirror_versions/<版本>/，回滾用 tools/mirror_rollback.js。
// 遊戲本身的 Diablo II 素材不在網站上（要玩家自己的 D2 / D2R 檔案，遊戲在瀏覽器裡讀），所以鏡像很小。
'use strict';
const fs = require('fs');
const path = require('path');

const SITE = 'https://d2survivors.lol/';
const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, '_research', 'mirror');
const VERSIONS = path.join(ROOT, '_research', 'mirror_versions');
const KEEP = process.argv.includes('--keep');
// 入口（每次重抓）：網頁 + 會變內容但檔名固定的小檔
const ENTRIES = ['play/', 'play/setup.html', 'import/worker.js', 'manifest.json', 'site.json', 'build.json', 'changelog.json', 'download/latest.yml', 'sw.js', 'robots.txt'];
const OPTIONAL = new Set(['site.json', 'build.json', 'changelog.json', 'download/latest.yml', 'sw.js', 'robots.txt']);

const fileOf = rel => path.join(OUT, rel.endsWith('/') ? rel + 'index.html' : rel);

async function get(url) {
  for (let i = 0; i < 3; i++) {
    try {
      const res = await fetch(url, { headers: { 'Cache-Control': 'no-cache', 'User-Agent': 'Mozilla/5.0 D2ZH-mirror' } });
      if (res.status === 404) return null;
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return Buffer.from(await res.arrayBuffer());
    } catch (e) {
      if (i === 2) throw e;
      await new Promise(r => setTimeout(r, 800 * (i + 1)));
    }
  }
}

// 從文字找出站內參照，回傳相對於網站根目錄的路徑
function refs(text, fromRel) {
  const out = new Set();
  const baseDir = fromRel.endsWith('/') ? fromRel : fromRel.replace(/[^/]*$/, '');
  const add = p => {
    if (!p || /^(data:|blob:|https?:|\/\/|#|mailto:|javascript:)/.test(p)) {
      if (p && p.startsWith(SITE)) p = p.slice(SITE.length - 1); else return;
    }
    p = p.split('#')[0].split('?')[0];
    if (!p || /[$*'"+\s()]/.test(p) || p.includes('cdn-cgi/')) return;
    let rel;
    if (p.startsWith('/')) rel = p.slice(1);
    else rel = path.posix.normalize(baseDir + p);
    if (rel.startsWith('..') || rel === '.' || rel === '') return;
    if (!/\.[a-z0-9]{1,5}$/i.test(rel) && !rel.endsWith('/')) return;   // 只抓看起來像檔案的
    out.add(rel);
  };
  // html 屬性
  for (const m of text.matchAll(/(?:src|href|content)\s*=\s*"([^"]+)"/g)) add(m[1]);
  // css url()
  for (const m of text.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g)) add(m[1]);
  // js 字串：assets/xxx.ext、./xxx.ext、/xxx.ext
  for (const m of text.matchAll(/["'`]((?:\.{1,2}\/|\/)?(?:assets\/)?[\w@.-]+(?:\/[\w@.-]+)*\.(?:js|mjs|css|json|wasm|png|jpe?g|webp|gif|svg|ico|woff2?|ttf|otf|mp3|ogg|wav|txt|webmanifest|yml))["'`]/g)) {
    const s = m[1];
    if (s.startsWith('./') || s.startsWith('../') || s.startsWith('/') || s.startsWith('assets/')) {
      // vite 把動態 import 寫成 "assets/xxx.js"（相對網站根）或 "./xxx.js"（相對自己）
      add(s.startsWith('assets/') ? '/' + s : s);
    }
  }
  return out;
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const playFile = fileOf('play/');
  // 更新前備份舊入口
  if (!KEEP && fs.existsSync(playFile)) {
    const old = fs.readFileSync(playFile, 'utf8');
    const ver = (old.match(/assets\/(game-[\w-]+)\.js/) || [])[1] || 'unknown';
    const dir = path.join(VERSIONS, ver);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      for (const e of ENTRIES) if (fs.existsSync(fileOf(e))) {
        const dst = path.join(dir, e.endsWith('/') ? e + 'index.html' : e);
        fs.mkdirSync(path.dirname(dst), { recursive: true });
        fs.copyFileSync(fileOf(e), dst);
      }
      console.log('舊版入口已備份：' + path.relative(ROOT, dir));
    }
  }
  const queue = [...ENTRIES];
  const seen = new Set(queue);
  const added = [];
  let fetched = 0, skipped = 0, missing = 0;
  while (queue.length) {
    const batch = queue.splice(0, 8);
    await Promise.all(batch.map(async rel => {
      const file = fileOf(rel);
      const isEntry = ENTRIES.includes(rel);
      let buf;
      if (fs.existsSync(file) && (KEEP || !isEntry)) { buf = fs.readFileSync(file); skipped++; }
      else {
        try { buf = await get(SITE + rel); } catch (e) { console.warn('  失敗 ' + rel + '：' + e.message); return; }
        if (!buf) { if (!OPTIONAL.has(rel)) console.warn('  404 ' + rel); missing++; return; }
        const existed = fs.existsSync(file);
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, buf);
        fetched++;
        if (!existed) added.push(rel);
      }
      if (/\.(html?|js|mjs|css|json|webmanifest)$/i.test(file)) {
        for (const r of refs(buf.toString('utf8'), rel)) if (!seen.has(r)) { seen.add(r); queue.push(r); }
      }
    }));
  }
  const ver = (fs.readFileSync(playFile, 'utf8').match(/assets\/(game-[\w-]+)\.js/) || [])[1];
  console.log(`完成：下載 ${fetched}、已有 ${skipped}、不存在 ${missing}。目前版本 ${ver}`);
  if (added.length) {
    const log = path.join(OUT, '更新紀錄.txt');
    fs.appendFileSync(log, `\n== ${new Date().toISOString()} 版本 ${ver}，新增 ${added.length} 檔 ==\n` + added.join('\n') + '\n');
    console.log(`新增 ${added.length} 檔（見 _research/mirror/更新紀錄.txt）`);
  }
}
main().catch(e => { console.error(e); process.exit(1); });
