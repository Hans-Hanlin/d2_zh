// 遊戲版本回滾：mirror_assets.js 每次更新前會把舊入口（play/index.html、setup.html、sw.js…）備份到 _research/mirror_versions/<版本>/
//   node tools/mirror_rollback.js              列出可用版本
//   node tools/mirror_rollback.js game-xxxx    切回那個版本（重新整理遊戲頁面即可，本地伺服器不用重開）
// 原理：assets/*-HASH.js 檔名帶雜湊、只增不改，新舊版程式檔都留在鏡像裡，入口檔決定跑哪版。
// 注意：/d2/ 素材只保留最新版；舊版遊戲若需要不同的素材，要連網讓伺服器補抓。
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const MIRROR = path.join(ROOT, '_research', 'mirror');
const VERSIONS = path.join(ROOT, '_research', 'mirror_versions');

const current = () => (fs.readFileSync(path.join(MIRROR, 'play', 'index.html'), 'utf8').match(/assets\/(game-[\w-]+)\.js/) || [])[1];
const list = () => fs.existsSync(VERSIONS) ? fs.readdirSync(VERSIONS).filter(d => fs.statSync(path.join(VERSIONS, d)).isDirectory()) : [];

function copyTree(src, dst) {
  for (const name of fs.readdirSync(src)) {
    const s = path.join(src, name), d = path.join(dst, name);
    if (fs.statSync(s).isDirectory()) { fs.mkdirSync(d, { recursive: true }); copyTree(s, d); }
    else fs.copyFileSync(s, d);
  }
}

const want = process.argv[2];
const cur = current();
if (!want) {
  console.log('目前版本：' + cur);
  console.log('可回滾的版本：');
  for (const v of list()) console.log('  ' + v + (v === cur ? '（目前）' : ''));
  process.exit(0);
}
if (!list().includes(want)) { console.error('沒有這個版本：' + want); process.exit(1); }
// 切換前先把目前入口也備份（避免回不去）
const curDir = path.join(VERSIONS, cur);
if (!fs.existsSync(curDir)) {
  fs.mkdirSync(curDir, { recursive: true });
  for (const f of ['play/index.html', 'play/setup.html', 'import/worker.js', 'sw.js', 'manifest.json', 'build.json', 'changelog.json']) {
    const s = path.join(MIRROR, f);
    if (fs.existsSync(s)) { fs.mkdirSync(path.dirname(path.join(curDir, f)), { recursive: true }); fs.copyFileSync(s, path.join(curDir, f)); }
  }
}
copyTree(path.join(VERSIONS, want), MIRROR);
console.log(`已切換：${cur} → ${current()}。重新整理遊戲頁面即可。`);
