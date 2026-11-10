// D2 Survivors 本地伺服器（零依賴，只要 Node.js）
//   node tools/local_server/server.js [port] [--offline] [--no-zh]
//   預設 8790。http://localhost:8790/ → 遊戲（自動套用我們的繁中＋書籤修改）
//
//   /            → 轉到 /play/
//   /play/       → 鏡像的遊戲頁，插入自動載入 d2_zh.js 的 <script>（--no-zh 不插，等於原版英文）
//   /d2zh/...    → 專案根目錄的書籤檔（d2_zh.js、回應.txt、安裝書籤頁、desktop/…），給書籤／電腦版更新用，允許跨網域
//   /api/...     → 轉送到官方 https://d2survivors.lol/api/...（排行榜）；--offline 時回 503，遊戲會顯示離線
//   其他         → _research/mirror/ 的鏡像檔；沒有的話從官方補抓並存起來（--offline 時 404）
//
// Diablo II 的圖、音效不在網站上：遊戲第一次開會要你選自己電腦裡的 Diablo II／D2R 檔案，在瀏覽器裡解開存起來。
// 瀏覽器是依「網址」分開存的，所以 localhost:8790 要自己再選一次（官方網站上選過的不會共用）。
'use strict';
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const os = require('os');

const ROOT = path.join(__dirname, '..', '..');
const MIRROR = path.join(ROOT, '_research', 'mirror');
const SITE = 'https://d2survivors.lol';
const args = process.argv.slice(2);
const PORT = Number(args.find(a => /^\d+$/.test(a)) || process.env.PORT || 8790);
const OFFLINE = args.includes('--offline');
const NO_ZH = args.includes('--no-zh');

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.cjs': 'text/plain; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json', '.wasm': 'application/wasm', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.otf': 'font/otf', '.mp3': 'audio/mpeg',
  '.ogg': 'audio/ogg', '.wav': 'audio/wav', '.txt': 'text/plain; charset=utf-8', '.yml': 'text/yaml; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8', '.ps1': 'text/plain; charset=utf-8', '.cmd': 'text/plain; charset=utf-8',
  '.zip': 'application/zip',
};
const typeOf = f => TYPES[path.extname(f).toLowerCase()] || 'application/octet-stream';

// /d2zh/ 底下只開放這些（避免把整個專案目錄當網站）
const D2ZH_ALLOW = /^(d2_zh\.js|回應\.txt|index\.html|安裝書籤\.html|書籤匯入檔\.html|desktop\/[^/]+)$/;

// 插在遊戲頁 </head> 前：先標記本地模式，等頁面元素（#d2-files）出現後載入 d2_zh.js（跟電腦版開遊戲自動注入一樣）
const INJECT = `<script>
window.__D2ZH_LOCAL = 1; window.__D2ZH_BASE = '/d2zh/';
addEventListener('DOMContentLoaded', function () {
  var s = document.createElement('script');
  s.src = '/d2zh/d2_zh.js?v=' + Date.now();
  s.onerror = function () { console.warn('[d2zh] 載入 d2_zh.js 失敗'); };
  document.head.appendChild(s);
});
</script>
`;

function log(...a) { console.log(new Date().toLocaleTimeString('zh-TW', { hour12: false }), ...a); }

function send(res, status, body, headers = {}) {
  res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8', ...headers });
  res.end(body);
}

function cors(req) {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
    'Access-Control-Allow-Headers': req.headers['access-control-request-headers'] || '*',
    'Access-Control-Allow-Private-Network': 'true',   // 官方網站（公開網路）點書籤載入本機檔案時，Chrome 會先問這個
  };
}

function serveFile(req, res, file, extra = {}) {
  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) return send(res, 404, 'Not found');
    const headers = { 'Content-Type': typeOf(file), 'Content-Length': st.size, ...extra };
    if (req.method === 'HEAD') { res.writeHead(200, headers); return res.end(); }
    res.writeHead(200, headers);
    fs.createReadStream(file).pipe(res);
  });
}

// 向官方抓一個檔（鏡像缺檔時）
function fetchOfficial(urlPath) {
  return new Promise((resolve, reject) => {
    https.get(SITE + urlPath, { headers: { 'User-Agent': 'Mozilla/5.0 D2ZH-local' }, timeout: 20000 }, r => {
      if (r.statusCode !== 200) { r.resume(); return reject(new Error('HTTP ' + r.statusCode)); }
      const chunks = [];
      r.on('data', c => chunks.push(c));
      r.on('end', () => resolve(Buffer.concat(chunks)));
      r.on('error', reject);
    }).on('timeout', function () { this.destroy(new Error('逾時')); }).on('error', reject);
  });
}

// /api/* 轉送官方
function proxyApi(req, res, urlPath) {
  if (OFFLINE) return send(res, 503, JSON.stringify({ error: 'offline' }), { 'Content-Type': 'application/json' });
  const headers = { ...req.headers, host: 'd2survivors.lol' };
  delete headers.origin; delete headers.referer; delete headers.cookie;
  const up = https.request(SITE + urlPath, { method: req.method, headers, timeout: 20000 }, r => {
    const h = { ...r.headers };
    delete h['set-cookie'];
    res.writeHead(r.statusCode, h);
    r.pipe(res);
  });
  up.on('timeout', () => up.destroy(new Error('逾時')));
  up.on('error', e => { if (!res.headersSent) send(res, 502, JSON.stringify({ error: e.message }), { 'Content-Type': 'application/json' }); else res.end(); });
  req.pipe(up);
}

const pageCache = new Map();   // 檔案 → { mtime, html }
// 遊戲頁和設定頁（選 Diablo II 檔案）都插入中文化，跟電腦版一樣
function servePlay(req, res, name = 'index.html') {
  const file = path.join(MIRROR, 'play', name);
  let playCache = pageCache.get(name);
  let st;
  try { st = fs.statSync(file); } catch (_) { return send(res, 500, '還沒有鏡像：先執行 node tools/mirror_assets.js'); }
  if (!playCache || playCache.mtime !== st.mtimeMs) {
    let html = fs.readFileSync(file, 'utf8');
    if (!NO_ZH) html = html.replace(/<\/head>/i, INJECT + '</head>');
    playCache = { mtime: st.mtimeMs, html: Buffer.from(html) };
    pageCache.set(name, playCache);
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-cache', 'Content-Length': playCache.html.length });
  res.end(req.method === 'HEAD' ? undefined : playCache.html);
}

const server = http.createServer(async (req, res) => {
  let urlPath;
  try { urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname); } catch (_) { return send(res, 400, 'Bad request'); }
  const rawPath = new URL(req.url, 'http://x');
  try {
    if (urlPath.startsWith('/api/')) return proxyApi(req, res, rawPath.pathname + rawPath.search);
    if (urlPath === '/') { res.writeHead(302, { Location: '/play/' }); return res.end(); }
    if (urlPath === '/play' ) { res.writeHead(301, { Location: '/play/' }); return res.end(); }
    if (urlPath === '/play/' || urlPath === '/play/index.html') return servePlay(req, res);
    if (urlPath === '/play/setup.html') return servePlay(req, res, 'setup.html');
    if (urlPath === '/setup.html') { res.writeHead(308, { Location: '/play/setup.html' }); return res.end(); }

    if (urlPath === '/d2zh' || urlPath === '/d2zh/') { res.writeHead(302, { Location: '/d2zh/index.html' }); return res.end(); }
    if (urlPath.startsWith('/d2zh/')) {
      const h = cors(req);
      if (req.method === 'OPTIONS') { res.writeHead(204, h); return res.end(); }
      const rel = urlPath.slice('/d2zh/'.length);
      if (!D2ZH_ALLOW.test(rel) || rel.includes('..')) return send(res, 404, 'Not found', h);
      return serveFile(req, res, path.join(ROOT, rel), { ...h, 'Cache-Control': 'no-cache' });
    }

    if (req.method !== 'GET' && req.method !== 'HEAD') return send(res, 405, 'Method not allowed');
    const rel = path.posix.normalize(urlPath).replace(/^\/+/, '');
    if (rel.startsWith('..')) return send(res, 400, 'Bad path');
    let file = path.join(MIRROR, rel.endsWith('/') || rel === '' ? rel + 'index.html' : rel);
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
    if (fs.existsSync(file)) {
      // 帶雜湊的打包檔內容不會變，可以長快取；其他每次確認
      const immutable = /^assets\/.+-[\w-]{8}\.\w+$/.test(rel);
      const extra = { 'Cache-Control': immutable ? 'public, max-age=31536000, immutable' : 'no-cache' };
      if (rel === 'sw.js') extra['Service-Worker-Allowed'] = '/';
      return serveFile(req, res, file, extra);
    }
    // 素材 png／webp 互通：遊戲偵測瀏覽器支援 webp 之前（或不支援時）會要 .png，鏡像只存了官方給的其中一種。
    // 圖片解碼看內容不看副檔名，直接送另一種就能用（不用連網、也不用存兩份）
    const alt = /\.png$/i.test(file) ? file.replace(/\.png$/i, '.webp') : /\.webp$/i.test(file) ? file.replace(/\.webp$/i, '.png') : null;
    if (alt && rel.startsWith('d2/') && fs.existsSync(alt)) return serveFile(req, res, alt, { 'Cache-Control': 'no-cache' });
    if (OFFLINE) return send(res, 404, 'Not found (offline)');
    try {
      const buf = await fetchOfficial(rawPath.pathname);
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, buf);
      log('補抓', rel, buf.length + 'B');
      fs.appendFileSync(path.join(MIRROR, '更新紀錄.txt'), `${new Date().toISOString()} 執行中補抓 ${rel}\n`);
      return serveFile(req, res, file);
    } catch (e) {
      return send(res, 404, 'Not found');
    }
  } catch (e) {
    log('錯誤', req.url, e && e.message);
    if (!res.headersSent) send(res, 500, 'Server error');
  }
});

server.on('error', e => {
  if (e.code === 'EADDRINUSE') console.error(`連接埠 ${PORT} 已被占用：可能伺服器已經開著了（直接開 http://localhost:${PORT}/ ），或換一個：server.js 8791`);
  else console.error(e);
  process.exit(1);
});

server.listen(PORT, '0.0.0.0', () => {
  const ips = Object.values(os.networkInterfaces()).flat().filter(i => i && i.family === 'IPv4' && !i.internal).map(i => i.address);
  let ver = '?';
  try { ver = (fs.readFileSync(path.join(MIRROR, 'play', 'index.html'), 'utf8').match(/assets\/(game-[\w-]+)\.js/) || [])[1]; } catch (_) {}
  let zhVer = '?';
  try { zhVer = (fs.readFileSync(path.join(ROOT, 'd2_zh.js'), 'utf8').match(/D2ZH_VERSION = '([^']+)'/) || [])[1]; } catch (_) {}
  console.log('');
  console.log('  D2 Survivors 本地伺服器');
  console.log(`  遊戲：      http://localhost:${PORT}/        （遊戲版本 ${ver}）`);
  console.log(`  繁中＋修改：${NO_ZH ? '關閉（--no-zh）' : '自動套用 d2_zh.js ' + zhVer}`);
  console.log(`  排行榜：    ${OFFLINE ? '離線（--offline）' : '轉送官方伺服器'}`);
  console.log(`  書籤教學：  http://localhost:${PORT}/d2zh/`);
  for (const ip of ips) console.log(`  區網：      http://${ip}:${PORT}/`);
  // D2 素材：完整下載過沒有、版本跟目前遊戲對不對得上
  try {
    const html = fs.readFileSync(path.join(MIRROR, 'play', 'index.html'), 'utf8');
    const want = JSON.parse(html.match(/id="d2-files"[^>]*>([\s\S]*?)<\/script>/)[1]).hashes;
    let have = null;
    try { have = JSON.parse(fs.readFileSync(path.join(MIRROR, 'd2', '.hashes.json'), 'utf8')); } catch (_) { /* 沒跑過 */ }
    if (!have) console.log(`  D2 素材：  還沒完整下載，${OFFLINE ? '離線模式會缺圖！' : '邊玩邊向官方補抓'}（完整下載：更新遊戲.bat）`);
    else {
      const diff = Object.keys(want).filter(d => have[d] !== want[d]);
      console.log(diff.length ? `  D2 素材：  有 ${diff.length} 個資料夾官方已更新，請跑 更新遊戲.bat` : '  D2 素材：  已完整下載（可離線）');
    }
  } catch (_) { /* 讀不到就不提示 */ }
  console.log('  關閉：直接關掉這個視窗（或 Ctrl+C）');
  console.log('');
});
