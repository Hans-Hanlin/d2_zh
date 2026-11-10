// D2ZH-INJECT：D2 Survivors 安裝版（桌面版）繁體中文。由 app.asar 裡 main.cjs 第一行載入（install.ps1 加上去的）。
// 遊戲頁面（app://game/）和設定頁（app://setup/：找 Diablo II、解壓縮、遊戲改版後更新檔案）
// 每次載入完成，就把 d2_zh.js（跟書籤同一份）注入頁面。
// 更新：遊戲會擋掉頁面的網路連線，所以由這裡（主程序）向 GitHub Pages 下載新版：
//   ・每次開遊戲在背景自動檢查（資料夾裡有 no-auto-update 檔就不自動）
//   ・「書籤修改」面板的「檢查更新」按鈕：頁面 console.log('__D2ZH__:update') → 這裡下載 → 把結果回傳給頁面
//   ・「回報內容」視窗同理：console.log('__D2ZH__:replies') → 這裡下載 回應.txt → 回傳給頁面
'use strict';
const { app, protocol } = require('electron');
const fs = require('fs');
const path = require('path');
const https = require('https');

const DIR = __dirname;
const TEST_BASE = process.env.D2ZH_UPDATE_BASE;   // 環境變數只給測試用
// 2026-11-11 起改由 Hans-Hanlin/d2_zh 提供更新；舊址 jtnhrbpvvm-spec.github.io/taiwan_game2/D2修改版/ 停在 V62 不再更新
const PAGES = 'https://hans-hanlin.github.io/d2_zh/';
const USE_GITHUB_COMMIT = true;
// GitHub Pages 的 CDN 會快取 10 分鐘（而且不看 ?v= 參數），剛推送的新版要等一陣子才拿得到。
// 所以先問 GitHub 最新一次提交的編號，直接從那次提交下載（網址每次提交都不同，不會拿到舊的）；問不到才用 Pages。
const REPO = 'Hans-Hanlin/d2_zh';
const http = require('http');
const LOG = path.join(DIR, 'last-run.log');
// 要更新的檔案；下載後先檢查內容像不像，不對就保留原本的
const FILES = [
  { name: 'd2_zh.js', path: 'd2_zh.js', ok: text => text.startsWith('void (function D2ZH()') && text.includes('D2ZH_FIX'), applies: 'reload' },
  { name: 'd2zh-inject.cjs', path: 'desktop/d2zh-inject.cjs', ok: text => text.includes('D2ZH-INJECT') && text.includes('web-contents-created'), applies: 'restart' },
  { name: 'install.ps1', path: 'desktop/install.ps1', ok: text => text.includes('D2ZH-PATCH-v1') && text.includes('Patch-Asar'), applies: 'restart' },
];
let lastCheck = null;   // 最近一次檢查的結果（給面板顯示）
let checking = null;

function log(message) {
  try { fs.appendFileSync(LOG, `${new Date().toISOString()} ${message}\n`); } catch (_) { /* 記錄失敗不影響遊戲 */ }
}

function download(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const req = (url.startsWith('http:') ? http : https).get(`${url}?v=${Date.now()}`, { timeout: 15000, headers: { 'Cache-Control': 'no-cache', 'User-Agent': 'D2ZH-updater', ...headers } }, res => {
      if (res.statusCode !== 200) { res.resume(); reject(new Error(`HTTP ${res.statusCode}`)); return; }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    });
    req.on('timeout', () => req.destroy(new Error('連線逾時')));
    req.on('error', reject);
  });
}

// 這次要從哪裡下載：最新提交的固定網址（沒有快取延遲），問不到就用 GitHub Pages
async function sourceBase() {
  if (TEST_BASE) return { base: TEST_BASE, from: 'test' };
  if (!USE_GITHUB_COMMIT) return { base: PAGES, from: 'local' };
  try {
    const sha = (await download(`https://api.github.com/repos/${REPO}/commits/main`, { Accept: 'application/vnd.github.sha' })).toString('utf8').trim();
    if (/^[0-9a-f]{40}$/.test(sha)) return { base: `https://raw.githubusercontent.com/${REPO}/${sha}/`, from: sha.slice(0, 7) };
  } catch (e) {
    log(`commit lookup: ${e.message}`);
  }
  return { base: PAGES, from: 'pages' };
}

// 下載全部檔案，有變的才換掉。回傳 { changed: [...], applies: 'reload'|'restart'|null, errors: [...] }
function checkForUpdates(reason) {
  if (checking) return checking;
  checking = (async () => {
    const result = { at: Date.now(), reason, changed: [], errors: [], applies: null };
    const { base, from } = await sourceBase();
    result.from = from;
    for (const file of FILES) {
      try {
        let body = await download(base + file.path);
        if (!file.ok(body.toString('utf8').replace(/^﻿/, '')) && base !== PAGES && !TEST_BASE) body = await download(PAGES + file.path);
        const text = body.toString('utf8').replace(/^﻿/, '');
        if (!file.ok(text)) throw new Error('下載的內容不完整');
        const local = path.join(DIR, file.name);
        if (fs.existsSync(local) && fs.readFileSync(local).equals(body)) continue;
        fs.writeFileSync(local + '.tmp', body);
        fs.renameSync(local + '.tmp', local);
        result.changed.push(file.name);
        if (file.applies === 'reload' && result.applies !== 'restart') result.applies = 'reload';
        if (file.applies === 'restart') result.applies = 'restart';
      } catch (e) {
        result.errors.push(`${file.name}：${e.message}`);
      }
    }
    log(`update (${reason}, ${from}): changed [${result.changed.join(', ')}] errors [${result.errors.join('; ')}]`);
    lastCheck = result;
    return result;
  })().finally(() => { checking = null; });
  return checking;
}

function info() {
  let fileTime = null;
  try { fileTime = fs.statSync(path.join(DIR, 'd2_zh.js')).mtimeMs; } catch (_) { /* 沒有檔案 */ }
  return { updater: 1, replies: 1, ecExports: 4, fileTime, lastCheck, autoUpdate: !fs.existsSync(path.join(DIR, 'no-auto-update')) };
}

// 書籤修改面板用到遊戲的物品函式。網頁版它們分在不同檔案、有匯出；電腦版全打包在 moved-*.js，只有內部用的就不匯出，頁面拿不到。
// 所以遊戲註冊 app:// 時包一層，回傳那個檔案時在最後補上匯出（名稱每次改版都會變，用內容認）。
const EXPORT_PATTERNS = [
  /function ([\w$]+)\(\)\{return ([\w$]+)&&\{uniques:\2\.uniques,bases:\2\.bases/g,
  /function ([\w$]+)\([\w$]+,[\w$]+,[\w$]+,[\w$]+\)\{let [\w$]+=[\w$]+\?\.runewords\?\.\[[\w$]+\];if\(![^;]{0,60}\)return null;let [\w$]+=[\w$]+\.flatMap/g,
  /function ([\w$]+)\([\w$]+,[\w$]+,[\w$]+\)\{if\(![\w$]+\(\)\)return [\w$]+\([\w$]+,[\w$]+,[\w$]+\);let [^}]{0,80}\.roll=\[\d,/g,   // 20261103 起 roll 版本從 1 變 2
  /[,;\s]([\w$]+)=\[[\w$]+\(`Ancients' Pledge`,/g,
  // 20261102.2 起電腦版把物品程式併進 saveTransfer-*.js，下面這些也不再匯出
  /function ([\w$]+)\([\w$]+\)\{(?:(?!function ).){0,120}?\.size\?\?\[1,1\]/g,
  /function ([\w$]+)\([\w$]+,[\w$]+\)\{(?:(?!function ).){0,120}?\.equiv/g,
  /function ([\w$]+)\([\w$]+\)\{(?:(?!function ).){0,120}?Math\.max\([\w$]+\.lvl,41\)/g,
  /[,;\s]([\w$]+)=[\w$]+\(\),[\w$]+=\1\.flatMap\([\w$]+=>[\w$]+\.uniques\)/g,
  /function ([\w$]+)\([\w$]+\)\{(?:(?!function ).){0,120}?itype:[\w$]+\.itype(?:(?!function ).){0,120}?bothHands/g,
  // V56：掉落產生器（隨機稀有度、稀有），裝備創造用來收集符文之語底材的隨機職業技能和自帶屬性
  /function ([\w$]+)\([\w$]+,[\w$]+,[\w$]+,[\w$]+\)\{let [\w$]+=[\w$]+\.get\([\w$]+\.base\),[\w$]+=Math\.random\(\),[\w$]+=[\w$]+<[\d.e-]+\?`unique`/g,
  /function ([\w$]+)\([\w$]+,[\w$]+,[\w$]+,[\w$]+\)\{return [\w$]+\([\w$]+\.get\([\w$]+\.base\),`rare`,/g,
];
function addExports(text) {
  const names = new Set();
  for (const re of EXPORT_PATTERNS) for (const m of text.matchAll(re)) names.add(m[1]);
  const lines = /function ([\w$]+)\([^)]*\)\{/g;
  const at = text.indexOf('strModEnhancedDamage');
  if (at >= 0) { const m = lines.exec(text.slice(text.lastIndexOf('function ', at), at)); if (m) names.add(m[1]); }
  if (!names.size) return null;
  return `${text}\nexport{${[...names].map((name, i) => `${name} as __d2zh${i}`).join(',')}};\n`;
}
try {
  const handle = protocol.handle;
  protocol.handle = function (scheme, handler) {
    return handle.call(protocol, scheme, async request => {
      const response = await handler(request);
      try {
        if (scheme !== 'app' || !/^app:\/\/game\/assets\/[^/]+\.js$/.test(request.url) || /\/ko-/.test(request.url) || !response.ok) return response;
        const text = await response.clone().text();
        const patched = text.includes('strModEnhancedDamage') ? addExports(text) : null;
        if (!patched) return response;
        const headers = new Headers(response.headers);
        headers.delete('content-length');
        return new Response(patched, { status: response.status, headers });
      } catch (e) {
        log(`exports: ${e && e.message}`);
        return response;
      }
    });
  };
} catch (e) {
  log(`exports setup: ${e && e.message}`);
}

// 開遊戲時背景檢查。通常注入完才下載好，所以做完要告訴遊戲頁面（剛開遊戲還在選單就會自動重新載入用新版）
// 使用次數統計：每次開遊戲記一次到 GoatCounter（和網站同一個帳號，匿名）。連不上就算了，不影響遊戲
function countLaunch() {
  try {
    const url = 'https://taiwangame2.goatcounter.com/count?p=' + encodeURIComponent('/電腦版/D2修改版') + '&t=' + encodeURIComponent('電腦版：D2修改版') + '&e=true&rnd=' + Math.random().toString(36).slice(2);
    const req = https.get(url, { timeout: 10000, headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36 D2ZH-Desktop', 'Accept-Language': 'zh-TW,zh;q=0.9' } }, res => res.resume());
    req.on('timeout', () => req.destroy());
    req.on('error', e => log(`count: ${e.message}`));
  } catch (e) {
    log(`count: ${e && e.message}`);
  }
}

app.whenReady().then(() => {
  countLaunch();
  if (!info().autoUpdate) return;
  checkForUpdates('auto').then(result => {
    const { webContents } = require('electron');
    for (const contents of webContents.getAllWebContents()) {
      if (!/^app:\/\/game\//.test(contents.getURL())) continue;
      contents.executeJavaScript(`window.__d2zhAutoChecked && window.__d2zhAutoChecked(${JSON.stringify({ ...result, info: info() })});0`, true)
        .catch(e => log(`auto notify: ${e && e.message}`));
    }
  }).catch(() => {});
});

app.on('web-contents-created', (_event, contents) => {
  contents.on('did-finish-load', () => {
    if (!/^app:\/\/(game|setup)\//.test(contents.getURL())) return;
    let code;
    try { code = fs.readFileSync(path.join(DIR, 'd2_zh.js'), 'utf8'); } catch (e) { log(`inject: ${e.message}`); return; }
    contents.executeJavaScript(`window.__D2ZH_DESKTOP = ${JSON.stringify(info())};\n${code}\n;0`, true)
      .then(() => log(`inject: ok ${contents.getURL()}`))
      .catch(e => log(`inject: ${e && e.message}`));
  });
  // 面板的「檢查更新」按鈕（Electron 35 以後事件參數是一個物件，舊版是 (event, level, message)）
  contents.on('console-message', (event, _level, message) => {
    const text = typeof message === 'string' ? message : event && event.message;
    if (!/^app:\/\/game\//.test(contents.getURL())) return;
    // 面板的「回報內容」：頁面連不了網路，由這裡下載 回應.txt 回傳
    if (text === '__D2ZH__:replies') {
      download(`${TEST_BASE || PAGES}%E5%9B%9E%E6%87%89.txt`)
        .then(body => ({ ok: true, text: body.toString('utf8').replace(/^﻿/, '') }))
        .catch(e => { log(`replies: ${e.message}`); return { ok: false }; })
        .then(result => contents.executeJavaScript(`window.__d2zhRepliesDone && window.__d2zhRepliesDone(${JSON.stringify(result)});0`, true))
        .catch(e => log(`replies notify: ${e && e.message}`));
      return;
    }
    if (text !== '__D2ZH__:update') return;
    checkForUpdates('button')
      .then(result => contents.executeJavaScript(`window.__d2zhUpdateDone && window.__d2zhUpdateDone(${JSON.stringify({ ...result, info: info() })});0`, true))
      .catch(e => log(`update button: ${e && e.message}`));
  });
});
log(`loaded, app ${app.getVersion()}`);
