// D2 Survivors 改版檢查：從官方伺服器抓最新版，列出書籤（d2_zh.js）還沒翻到的字串。
//   用法：node tools/check-update.js            （在 d2 資料夾執行）
//         node tools/check-update.js --all      （連以前就沒翻到的也列出來）
// 資料來源（都是公開網址，不用下載 115MB 的安裝檔）：
//   https://d2survivors.lol/download/latest.yml  桌面版自動更新用的版本資訊（electron-updater generic）
//   https://d2survivors.lol/changelog.json       更新紀錄（書籤不翻這些行）
//   https://d2survivors.lol/play/                網頁版遊戲；它載入的 ko-*.js 是完整的「英文 → 韓文」字串表
//   技能資料（含 evolution:{passive: 的檔，20261024 起在 itemArt-*.js，之前在 keepSave-*.js），用來比對書籤的進化表（EVO）
// 每次檢查會把字串表存在 tools/cache/，下次用來標出「這次新增」的字串。
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const SITE = 'https://d2survivors.lol/';
const HERE = __dirname;
const ROOT = path.join(HERE, '..');
const CACHE = path.join(HERE, 'cache');
const SHOW_ALL = process.argv.includes('--all');

async function get(url) {
  const res = await fetch(url, { headers: { 'Cache-Control': 'no-cache' } });
  if (!res.ok) throw new Error(`${url}：HTTP ${res.status}`);
  return res.text();
}

// 從 play/index.html 出發，順著 import 把會用到的 js 都找出來（找 ko-*.js、keepSave-*.js）
async function findAssets() {
  const seen = new Map();
  const queue = [];
  const add = name => { if (!seen.has(name)) { seen.set(name, null); queue.push(name); } };
  const html = await get(SITE + 'play/');
  for (const m of html.matchAll(/assets\/([\w.-]+\.js)/g)) add(m[1]);
  while (queue.length) {
    const name = queue.shift();
    if (/^ko-/.test(name)) continue;   // 字串表最後再抓
    let text;
    try { text = await get(SITE + 'assets/' + name); } catch (e) { console.warn(`  （略過 ${name}：${e.message}）`); seen.delete(name); continue; }
    seen.set(name, text);
    // 打包後的檔名結尾是 8 碼雜湊（含大寫或數字），例如 keepSave-1WoIjCSX.js
    for (const m of text.matchAll(/[/"'`]([\w.-]+-([\w-]{8})\.js)/g)) if (/[A-Z0-9_]/.test(m[2])) add(m[1]);
  }
  const pick = re => [...seen.keys()].find(n => re.test(n));
  // 技能資料所在的檔案會隨改版搬家：看內容找，不看檔名
  const skills = [...seen.keys()].find(n => !/^ko-/.test(n) && seen.get(n)?.includes('evolution:{passive:'));
  return { names: [...seen.keys()], text: seen, ko: pick(/^ko-/), keepSave: skills };
}

// 在假的瀏覽器環境裡執行 d2_zh.js，拿出 D2I18N.translate
function loadTranslator() {
  const any = (() => {
    const f = function () { return p; };
    const p = new Proxy(f, {
      get(_, k) {
        if (k === Symbol.toPrimitive) return () => '';
        if (k === Symbol.iterator) return function* () {};
        if (k === 'then') return undefined;
        if (k === 'readyState') return 'complete';
        if (k === 'length') return 0;
        return p;
      },
      apply: () => p, construct: () => p, set: () => true, has: () => true,
    });
    return p;
  })();
  const store = {};
  const win = {
    __D2ZH_DESKTOP: { updater: 1 }, document: any, navigator: any, console,
    localStorage: { getItem: k => store[k] ?? null, setItem: (k, v) => { store[k] = String(v); }, removeItem() {} },
    location: { href: 'app://game/', pathname: '/', search: '' },
    CanvasRenderingContext2D: function () {}, HTMLCanvasElement: function () {}, ImageData: function () {},
    Node: { TEXT_NODE: 3, ELEMENT_NODE: 1 }, NodeFilter: { SHOW_TEXT: 4 },
    MutationObserver: function () { return { observe() {}, disconnect() {} }; },
    ResizeObserver: function () { return { observe() {}, disconnect() {} }; },
    Storage: function () {}, fetch: () => Promise.reject(new Error('offline')), Response: function () {},
    CustomEvent: function () {}, Element: function () {}, HTMLElement: function () {},
    addEventListener() {}, removeEventListener() {}, dispatchEvent() {},
    setTimeout: () => 0, setInterval: () => 0, clearTimeout() {}, clearInterval() {},
    requestAnimationFrame: () => 0, performance: { now: () => 0 },
    alert: m => { throw new Error('alert: ' + m); }, getComputedStyle: () => any, matchMedia: () => any,
  };
  win.Storage.prototype = { setItem() {}, getItem() { return null; }, removeItem() {} };
  win.CanvasRenderingContext2D.prototype = { putImageData() {}, drawImage() {}, fillText() {} };
  win.window = win; win.self = win; win.globalThis = win;
  const source = fs.readFileSync(path.join(ROOT, 'd2_zh.js'), 'utf8');
  try { vm.runInContext(source, vm.createContext(win), { filename: 'd2_zh.js' }); }
  catch (e) {
    if (!win.D2I18N) throw e;
    // 書籤後半段沒跑完的話，有些翻譯會用到還沒初始化的變數；先警告，再看是不是這裡的假環境少了什麼
    console.warn(`  （警告：書籤在檢查環境裡沒有完整跑完：${e.message}）`);
  }
  return { translate: win.D2I18N.translate, source };
}

function parseKo(text) {
  const m = { exports: {} };
  new Function('module', text.replace(/export\s*\{\s*(\w+) as default\s*\};?\s*$/, 'module.exports=$1;'))(m);
  return m.exports;
}

// 翻譯結果裡還有英文單字（排除按鍵、縮寫、專有名詞）就算沒翻到
const KEEP = /^(D2|D2R|XP|MF|HP|ID|OK|Esc|Enter|Shift|Tab|Ctrl|Alt|LT|RT|LB|RB|Diablo|II|Resurrected|Survivors|Blizzard|Entertainment|Inc|Battle|net|Steam|Safari|Chrome|Edge|Firefox|Discord|Reddit|Windows|OneDrive|iCloud|Dropbox|Ko|fi)$/i;
function untranslated(zh) {
  const words = (zh.match(/[A-Za-z]{2,}/g) || []).filter(w => !KEEP.test(w));
  return words.length > 0 && (!/[㐀-鿿]/u.test(zh) || words.join('').length > 3);
}

// 書籤的進化表（EVO）和遊戲的技能資料比對
function checkEvolutions(keepSave, source, allText = keepSave) {
  const names = {};
  // 被動的名稱可能在別的檔（例如共用被動 frw、fcr），所以名稱從所有檔案找
  // 20261105.1 起技能寫成 xxx:{growth:…,name:`…`}，name 前面可能有 growth
  const HEAD = /(\w+):\{(?:growth:[^`]{0,40}(?:`[^`]*`[^`]{0,20})?,)?name:`([^`]+)`/g;
  for (const m of allText.matchAll(HEAD)) if (!(m[1] in names)) names[m[1]] = m[2];
  const heads = [...keepSave.matchAll(HEAD)].map(m => ({ at: m.index, name: m[2] }));
  const game = [];
  for (const m of keepSave.matchAll(/evolution:\{passive:`(\w+)`,into:`(\w+)`[^}]*\}/g)) {
    const head = heads.filter(h => h.at < m.index).pop();
    game.push([head.name, names[m[1]] || m[1], names[m[2]] || m[2]].join(' | '));
  }
  const start = source.indexOf('const EVO = {');
  const evo = new Function('return ' + source.slice(start + 12, source.indexOf('};', start) + 1))();
  const mine = Object.values(evo).flat().map(r => r.join(' | '));
  const norm = s => s.toLowerCase().replace(/\s+/g, '');
  const mineSet = new Set(mine.map(norm)), gameSet = new Set(game.map(norm));
  return {
    count: game.length,
    missing: game.filter(r => !mineSet.has(norm(r))),
    extra: mine.filter(r => !gameSet.has(norm(r))),
  };
}

async function main() {
  fs.mkdirSync(CACHE, { recursive: true });
  const latest = await get(SITE + 'download/latest.yml');
  const version = /^version:\s*(.+)$/m.exec(latest)?.[1].trim();
  const released = /^releaseDate:\s*'?([^'\n]+)/m.exec(latest)?.[1];
  console.log(`桌面版最新版本：${version}（發布 ${released}）`);

  const changelog = JSON.parse(await get(SITE + 'changelog.json'));
  const lastFile = path.join(CACHE, 'last-build.txt');
  const lastBuild = fs.existsSync(lastFile) ? fs.readFileSync(lastFile, 'utf8').trim() : null;
  const fresh = lastBuild ? changelog.filter(b => b.build > lastBuild) : changelog.slice(0, 1);
  console.log(`\n== 更新紀錄（${lastBuild ? `${lastBuild} 之後` : '最新一版'}）==`);
  for (const b of fresh) {
    console.log(`\n[${b.build}] ${b.date}`);
    for (const l of b.lines) console.log(`  ${l.kind === 'new' ? '新' : '修'}｜${l.text}`);
  }

  const assets = await findAssets();
  if (!assets.ko) throw new Error('找不到 ko-*.js（遊戲載入字串表的方式可能改了）');
  const koText = await get(SITE + 'assets/' + assets.ko);
  const ko = parseKo(koText);
  const prevFile = path.join(CACHE, 'ko-prev.json');
  const prev = fs.existsSync(prevFile) ? JSON.parse(fs.readFileSync(prevFile, 'utf8')) : null;

  const { translate, source } = loadTranslator();
  const skip = new Set(changelog.flatMap(b => b.lines.map(l => l.text)));
  const rows = [];
  for (const [en, kr] of Object.entries(ko)) {
    if (skip.has(en)) continue;
    // affix:、monster:、unique: 這類是韓文版自己用的名稱表；英文畫面只顯示冒號後面的名稱
    const shown = en.replace(/^[a-z]+:(?=\S)/, '');
    const zh = translate(shown.replace(/#/g, '12'));
    const isNew = !!prev && !(en in prev);
    if (untranslated(zh) && (SHOW_ALL || isNew || !prev)) rows.push({ en: shown, zh, kr, isNew });
  }
  const unique = [...new Map(rows.map(r => [r.en, r])).values()];
  console.log(`\n== 字串表 ${assets.ko}：共 ${Object.keys(ko).length} 句，${prev ? `新增 ${Object.keys(ko).filter(k => !(k in prev)).length} 句` : '第一次檢查'} ==`);
  console.log(`還沒翻到${SHOW_ALL || !prev ? '' : '（這次新增）'}：${unique.length} 句`);
  for (const r of unique) console.log(`  ${r.isNew ? '＋' : '　'} ${r.en}\n      現在：${r.zh}\n      韓文：${r.kr}`);

  if (assets.keepSave) {
    const evo = checkEvolutions(assets.text.get(assets.keepSave), source, [...assets.text.values()].filter(Boolean).join('\n'));
    console.log(`\n== 進化表：遊戲 ${evo.count} 組 ==`);
    if (!evo.missing.length && !evo.extra.length) console.log('  書籤的 EVO 表和遊戲一致');
    for (const r of evo.missing) console.log(`  遊戲有、書籤沒有：${r}`);
    for (const r of evo.extra) console.log(`  書籤有、遊戲沒有：${r}`);
  }

  const report = path.join(CACHE, `report-${changelog[0].build}.json`);
  fs.writeFileSync(report, JSON.stringify({ version, released, build: changelog[0].build, ko: assets.ko, untranslated: unique }, null, 1));
  fs.writeFileSync(prevFile, JSON.stringify(ko));
  fs.writeFileSync(lastFile, changelog[0].build);
  console.log(`\n報告：${path.relative(ROOT, report)}（下次檢查會以 ${changelog[0].build} 為基準）`);
}

main().catch(e => { console.error('檢查失敗：', e.message); process.exit(1); });
