void (function D2ZH() { // ⚠ 你現在看到的是書籤的原始碼，不能直接用。請複製這個網址貼到網址列，到教學頁面照步驟安裝書籤：https://ppt.cc/fmpTcx
// （第一行必須以「void (function D2ZH()」開頭，電腦版下載更新時會檢查，所以提示寫在同一行後面）
if (window.__D2ZH) return;
// 本地伺服器（tools/local_server）會先設 __D2ZH_LOCAL 再自動注入；跟電腦版一樣不用點書籤，重新載入後中文自動恢復
const D2ZH_AUTO = !!(window.__D2ZH_DESKTOP || window.__D2ZH_LOCAL);
// 書籤附屬檔（回應.txt 等）的位置：本地伺服器注入時會給 __D2ZH_BASE；從別的網站點書籤就去本機 8790 拿
const D2ZH_BASE = window.__D2ZH_BASE || 'https://hans-hanlin.github.io/d2_zh/';
// 桌面版（安裝版）由 desktop/d2zh-inject.cjs 注入，會先設 __D2ZH_DESKTOP；頁面上沒有 #d2-files
if (!document.getElementById('d2-files') && !D2ZH_AUTO) {
alert('請在 D2 Survivors 遊戲頁面（https://d2survivors.lol/）按這個書籤。');
return;
}
// 翻譯是對著英文字串做的，遊戲是韓文時蓋不上去。不是自己在電腦版選韓文的話，就換回英文底（畫面仍是繁中）再重新載入
// 網頁版按書籤就是要中文，所以不看記住的選擇；韓文要用書籤的語言按鈕切換，電腦版才會記住
{
let gameKo = false, chosenKo = false;
try {
const saved = localStorage.getItem('d2s:lang');
gameKo = saved === 'ko' || (saved === null && (navigator.languages || [navigator.language]).some(l => /^ko\b/i.test(l)));
chosenKo = D2ZH_AUTO && localStorage.getItem('d2-survivors-language') === 'ko';
if (gameKo && !chosenKo) {
localStorage.setItem('d2s:lang', 'en');
localStorage.setItem('d2-survivors-language', 'zh-Hant');
if (localStorage.getItem('d2s:lang') === 'en') {
if (!D2ZH_AUTO) alert('遊戲目前是韓文，已經幫你換回繁體中文。\n頁面會重新載入，載入後請再點一次書籤。');
location.reload();
return;
}
}
if (chosenKo && !gameKo) localStorage.setItem('d2-survivors-language', 'zh-Hant');
} catch (_) { /* Storage can be disabled. */ }
}
window.__D2ZH = true;
// V63 起停用：統計帳號 taiwangame2 是舊 repo 作者的，改由 Hans-Hanlin/d2_zh 發佈後不再送
if (false) {
// 使用次數統計（GoatCounter，和網站同一個帳號；匿名，只記「這個工具被執行一次」。網站擋掉也不影響工具）
try { if (!window.__tg2Count) { window.__tg2Count = 1; var __tg2u = 'https://taiwangame2.goatcounter.com/count?p=' + encodeURIComponent('/書籤/D2修改版') + '&t=' + encodeURIComponent('書籤：D2修改版') + '&e=true&rnd=' + Math.random().toString(36).slice(2); if (navigator.sendBeacon) navigator.sendBeacon(__tg2u); else new Image().src = __tg2u; } } catch (__tg2e) {}
}
// 中文化版本號：每次發布更新加一（顯示在「書籤修改」面板標題旁）
const D2ZH_VERSION = 'V63';
window.__D2ZH_VERSION = D2ZH_VERSION;
const D2_FONTS = {"font6":{"h":11,"lh":14,"adv":[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,5,5,4,7,6,9,7,2,3,3,5,6,3,4,3,4,7,4,5,5,6,5,5,5,5,6,3,3,6,7,6,6,9,6,6,7,7,6,6,7,7,4,5,7,5,8,7,7,6,7,7,5,6,7,7,9,6,6,6,3,4,3,6,6,3,7,6,5,6,6,5,6,7,4,5,7,4,8,6,6,6,6,5,6,5,6,6,9,6,7,5,4,2,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,2,2,7,7,7,7,7,7,7,7,7,7,7,7,7,5,5,6,6,6,6,2,5,5,8,5,5,5,5,8,4,4,6,4,4,3,7,5,5,4,3,5,5,9,8,9,6,7,7,7,7,7,7,9,7,6,6,6,6,4,4,4,4,7,7,7,7,7,7,7,6,7,7,7,7,7,7,6,8,6,6,6,6,6,6,9,5,6,6,6,6,3,3,3,5,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7]},"font8":{"h":14,"lh":18,"adv":[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,4,4,4,9,7,10,8,3,5,5,7,10,4,4,4,4,7,7,7,7,7,7,7,7,7,7,4,4,10,10,10,7,12,8,8,9,9,8,7,9,9,4,4,8,6,11,9,9,8,9,8,8,7,9,8,12,8,8,8,5,4,5,12,7,7,8,8,7,8,7,5,8,7,4,4,7,4,12,8,7,8,8,6,7,5,8,7,10,7,7,7,7,7,7,10,8,8,8,4,7,6,12,7,7,7,15,8,4,12,8,8,8,8,4,4,6,6,7,7,12,7,10,7,4,12,8,7,8,7,4,7,7,8,7,7,7,7,10,6,6,10,4,10,7,5,10,5,5,7,7,7,4,7,5,6,6,11,11,11,7,8,8,8,8,8,8,11,9,8,8,8,8,4,4,4,4,9,9,9,9,9,9,9,10,9,9,9,9,9,8,8,8,8,8,8,8,8,8,11,7,7,7,7,7,4,4,4,4,7,8,7,7,7,7,7,10,7,8,8,8,8,7,7,7]},"font16":{"h":16,"lh":20,"adv":[12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,8,8,7,8,8,13,12,4,5,5,6,8,5,5,5,9,12,5,9,8,9,9,8,8,7,8,5,5,6,7,6,8,11,12,7,9,10,8,8,10,9,5,5,9,8,12,10,11,9,12,10,7,11,12,13,16,12,12,10,5,9,5,5,9,5,10,7,8,8,7,7,9,7,4,4,8,7,10,9,10,7,10,9,7,9,10,10,13,10,10,7,6,3,6,6,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,5,6,12,12,12,12,12,12,12,12,12,12,12,12,12,8,8,7,8,7,12,3,6,6,11,9,7,10,4,11,9,7,9,7,7,5,13,9,7,7,3,8,8,11,13,12,8,12,12,12,12,12,12,11,10,8,7,8,8,5,5,5,7,11,11,11,11,11,12,11,10,11,13,13,13,12,12,8,9,11,10,10,10,10,10,10,8,7,6,7,7,4,5,4,5,8,9,10,9,9,10,10,8,10,10,10,10,10,10,7,10]},"font24":{"h":26,"lh":32,"adv":[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,12,12,11,11,11,18,17,6,8,7,8,10,6,8,6,12,17,8,12,12,13,12,12,12,11,12,6,8,9,9,9,12,17,18,12,15,15,12,12,14,14,7,7,14,11,17,15,17,12,17,15,11,16,18,18,24,18,18,13,7,12,7,8,10,7,14,11,11,13,9,10,11,11,6,6,11,10,15,13,13,10,14,13,9,14,15,15,20,14,14,12,9,4,10,9,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,7,7,17,17,17,17,17,17,17,17,17,17,17,17,17,12,12,10,12,11,17,4,10,9,16,12,11,15,8,17,8,9,11,9,9,7,19,11,11,12,5,11,11,16,16,18,12,18,18,17,17,18,17,17,14,11,11,11,11,8,7,7,8,16,16,17,17,17,16,17,12,16,18,18,18,19,17,12,13,15,15,14,14,15,15,14,12,9,9,9,9,6,6,7,7,11,13,15,14,14,14,14,11,14,15,15,15,15,15,10,15]},"font30":{"h":30,"lh":38,"adv":[22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,16,16,14,14,15,23,21,8,10,9,11,12,8,10,8,16,22,9,15,15,16,15,14,15,15,14,8,8,10,12,10,15,21,22,15,17,18,15,15,17,16,8,8,17,14,22,19,21,14,21,18,14,20,23,23,31,22,22,16,9,16,8,10,15,8,19,12,15,16,13,12,15,14,7,8,14,12,19,16,18,13,18,16,13,17,19,19,24,18,19,14,12,6,12,11,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,8,8,21,21,21,21,21,21,21,21,21,21,21,21,21,16,16,13,14,14,22,7,12,10,21,14,14,18,10,21,10,11,15,11,11,9,24,15,14,15,7,14,13,20,20,22,15,22,23,22,22,22,22,21,17,15,15,15,15,9,9,9,10,18,19,21,21,20,21,21,15,21,23,24,23,23,22,14,16,18,18,18,18,18,19,18,15,13,12,12,12,8,8,9,9,14,16,18,18,18,18,18,14,18,19,19,19,19,18,12,18]},"font42":{"h":41,"lh":51,"adv":[29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,21,21,18,19,19,31,28,10,12,12,14,16,11,13,10,21,29,12,21,20,22,20,19,20,19,20,10,11,13,15,13,19,28,30,20,23,24,20,19,23,22,11,11,23,19,30,26,28,20,28,25,19,28,31,31,41,29,29,22,11,21,11,12,21,12,26,17,20,21,17,17,20,19,10,10,19,17,24,21,23,17,24,21,16,23,25,26,33,24,24,18,16,7,15,13,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,12,11,29,29,29,29,29,29,29,29,29,29,29,29,29,21,21,18,20,19,29,6,16,14,28,19,17,24,13,28,13,14,20,15,14,11,32,20,20,19,9,18,18,27,25,30,19,29,30,30,30,30,30,29,23,19,18,19,19,13,13,13,14,25,26,28,28,29,29,29,20,28,30,31,31,32,30,19,22,26,25,25,25,25,25,24,20,16,16,16,15,11,11,11,11,18,22,24,24,24,24,24,18,24,25,25,26,26,24,16,24]},"fontexocet10":{"h":18,"lh":22,"adv":[13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,9,9,10,9,9,14,13,6,7,7,7,11,6,9,5,9,13,6,9,9,9,9,9,10,8,9,6,6,9,10,9,9,12,13,9,10,11,9,9,10,11,6,7,12,9,15,11,12,9,12,12,9,12,14,14,18,14,13,10,6,10,6,8,10,7,11,8,9,10,8,8,9,10,5,7,11,8,13,10,11,8,11,10,8,11,12,12,17,13,11,9,7,3,7,7,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,7,7,12,12,12,12,12,12,12,12,12,12,12,12,12,9,9,8,10,9,14,3,7,7,12,8,9,12,8,12,11,6,11,5,5,6,14,10,8,8,5,9,9,12,12,13,9,14,14,14,14,14,14,15,10,9,9,9,9,7,7,6,8,11,11,12,12,12,12,12,9,13,14,14,14,14,14,9,10,14,14,14,14,14,14,15,10,9,9,9,9,6,7,6,7,11,11,12,12,12,12,12,9,13,14,14,14,14,14,9,14]},"fontformal12":{"h":20,"lh":25,"adv":[11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,6,6,6,13,10,15,12,3,6,6,9,14,6,6,6,5,10,10,10,10,10,10,10,10,10,10,6,6,14,14,14,9,17,12,11,12,12,11,10,13,13,6,6,11,9,15,13,13,10,13,11,10,10,12,12,16,11,11,11,6,5,6,17,9,9,11,11,9,11,10,7,11,10,5,5,10,5,16,11,10,11,11,8,9,7,11,9,13,10,10,9,9,9,9,14,11,11,11,6,10,8,17,9,9,9,22,10,6,17,11,11,11,11,6,6,8,8,10,9,17,9,14,9,6,16,11,9,11,10,6,10,10,11,10,9,9,9,14,8,8,14,6,14,9,6,14,7,7,9,10,9,6,9,7,8,8,15,15,15,9,12,12,12,12,12,12,16,12,11,11,11,11,6,6,6,6,13,13,13,13,13,13,13,14,13,12,12,12,12,11,10,11,11,11,11,11,11,11,16,9,10,10,10,10,5,5,5,5,10,11,10,10,10,10,10,14,10,11,11,11,11,10,10,10]}};
const D2ZH_STATE = new WeakMap();
const D2ZH_CTX = CanvasRenderingContext2D.prototype;
const D2ZH_PUT = D2ZH_CTX.putImageData;
const D2ZH_DRAW = D2ZH_CTX.drawImage;
const D2ZH_FONT = '"Microsoft JhengHei UI", "Microsoft JhengHei", "Noto Sans TC", "PingFang TC", sans-serif';
const D2ZH_PUNCT = { 8208: 45, 8211: 45, 8212: 45, 8216: 39, 8217: 39, 8220: 34, 8221: 34, 8230: 46 };
const D2ZH_CJK = /[㐀-鿿]/u;
let d2zhBusy = false;
function d2zhLang() {
return window.D2I18N ? window.D2I18N.language : 'en';
}
function d2zhIsText(c) {
return c instanceof HTMLCanvasElement && c.classList.contains('d2-text') && !c.classList.contains('d2-local-font');
}
function d2zhReadable([r, g, b]) {
const lum = 0.3 * r + 0.59 * g + 0.11 * b;
if (lum >= 170) return [r, g, b];
if (lum < 8) return [232, 223, 204];
const k = 170 / lum;
const scaled = [r, g, b].map(v => v * k);
const over = Math.max(...scaled) - 255;
return scaled.map(v => Math.round(Math.min(255, over > 0 ? v + (255 - v) * Math.min(1, over / 255) : v)));
}
function d2zhWidth(font, line) {
let w = 0;
for (const ch of line) {
let code = ch.charCodeAt(0);
code = D2ZH_PUNCT[code] || code;
w += font.adv[code < 256 && font.adv[code] ? code : 63] || 0;
}
return w;
}
function d2zhAnalyze(img, src) {
const { width: W, height: H, data } = img;
const lit = [];
let black = 0, opaque = 0;
for (let i = 0; i < data.length; i += 4) {
if (!data[i + 3]) continue;
opaque++;
const r = data[i], g = data[i + 1], b = data[i + 2];
if (!r && !g && !b) { black++; continue; }
lit.push([0.3 * r + 0.59 * g + 0.11 * b, r, g, b]);
}
let color = [232, 223, 204];
if (lit.length) {
lit.sort((a, b) => b[0] - a[0]);
const top = lit.slice(0, Math.max(1, Math.ceil(lit.length * 0.2)));
color = [1, 2, 3].map(j => Math.round(top.reduce((s, p) => s + p[j], 0) / top.length));
}
color = d2zhReadable(color);
const looksShadow = opaque > 0 && black >= opaque * 0.15 ? 1 : 0;
const lines = src.split('\n');
let pick = null;
for (const name in D2_FONTS) {
const f = D2_FONTS[name];
for (const s of [looksShadow, 1 - looksShadow, 2]) {   // 大字型的陰影偏移 2px（例如營地提示 font24）
const h = H - s;
if (h < f.h || (h - f.h) % f.lh) continue;
const k = (h - f.h) / f.lh + 1;
const natural = Math.max(...lines.map(l => d2zhWidth(f, l)));
const exact = k === lines.length && natural + s === W;
const wrapped = k > lines.length && natural + s > W;
const score = (exact ? 4 : 0) + (wrapped ? 2 : 0) + (s === looksShadow ? 1 : 0);
if (!pick || score > pick.score) pick = { f, s, k, score };
}
}
// 認不出字型：至少在原本的寬度內換行，不要整行超出畫面
if (!pick) pick = { f: { h: H, lh: Math.round(H * 1.25) }, s: looksShadow, k: lines.length, guess: true };
// 第一行英文實際有筆畫的高度（大字型的字框比字母高很多，中文要照這個高度縮小）
let inkTop = -1, inkBottom = -1;
for (let y = 0; y < Math.min(H, pick.f.h); y++) {
for (let x = 0; x < W; x++) if (data[(y * W + x) * 4 + 3]) { if (inkTop < 0) inkTop = y; inkBottom = y; break; }
}
const ink = inkTop < 0 ? 0 : inkBottom - inkTop + 1 - pick.s;
let align = 'center';
if (pick.k > 1) {
let left = true, right = true, ragged = false;
for (let line = 0; line < pick.k; line++) {
const y0 = line * pick.f.lh, y1 = Math.min(H, y0 + pick.f.h);
let min = W, max = -1;
for (let y = y0; y < y1; y++) for (let x = 0; x < W; x++) {
if (data[(y * W + x) * 4 + 3]) { if (x < min) min = x; if (x > max) max = x; }
}
if (max < 0) continue;
if (min > 1) left = false;
if (max < W - 2 - pick.s) right = false;
if (min > 2 || max < W - 3 - pick.s) ragged = true;
}
if (ragged) align = left ? 'left' : right ? 'right' : 'center';
}
return {
src, en: img, w: W, h: H, lang: 'en',
size: pick.f.h, lh: pick.f.lh, shadow: pick.s, color, align, ink,
maxWidth: pick.k > lines.length || pick.guess ? W - pick.s : 0,
};
}
// 換行的最小單位：中文每個字一段、英文和數字整個字一段（「4 個」這種數字連單位不拆開）；句尾標點黏前一個字、左括號黏後一個字，行首不會出現「，」「）」
const D2ZH_TOKEN = /[（「『【〔(]*(?:[+\-]?\d[\d.,%]*\s[一-鿿]|[⺀-鿿豈-﫿　-〿！-｠]|[^\s⺀-鿿豈-﫿　-〿！-｠]+)[，。；：、！？）」』】〕,.;:!?)]*\s*/gu;
function d2zhWrapAt(ctx, tokens, maxWidth) {
const out = [];
let line = '';
for (const token of tokens) {
const next = line + token;
if (line && ctx.measureText(next.trimEnd()).width > maxWidth) { out.push(line.trimEnd()); line = token; }
else line = next;
}
if (line.trim()) out.push(line.trimEnd());
return out;
}
// balance：行數不變，把每行寬度拉平（跟遊戲說明框的 balance 一樣），不會變成一長行配最後一兩個字
function d2zhWrap(ctx, text, maxWidth, balance) {
if (!maxWidth || ctx.measureText(text).width <= maxWidth) return [text];
let tokens = text.match(D2ZH_TOKEN) || [];
if (tokens.join('') !== text) tokens = Array.from(text);
// 單一段比整行還寬（很長的英文字）：只好拆成字母
tokens = tokens.flatMap(t => ctx.measureText(t.trimEnd()).width > maxWidth ? Array.from(t) : [t]);
const out = d2zhWrapAt(ctx, tokens, maxWidth);
if (!balance || out.length < 2) return out;
let lo = 0, hi = maxWidth;
while (hi - lo > 1) {
const mid = (lo + hi) / 2;
if (d2zhWrapAt(ctx, tokens, mid).length <= out.length) hi = mid; else lo = mid;
}
return d2zhWrapAt(ctx, tokens, hi);
}
// 把一行中文拆成 n 行：挑最寬那行最窄的斷點，「和」之後、「技能／法術／靈氣…」之前優先
function d2zhSplit(ctx, text, n) {
const chars = Array.from(text);
if (n < 2 || chars.length < 3) return text;
const tail = /^(技能|法術|靈氣|精通|藝術|修行)$/;
let best = null;
for (let i = 1; i < chars.length; i++) {
const a = chars.slice(0, i).join(''), b = chars.slice(i).join('');
let cost = Math.max(ctx.measureText(a).width, ctx.measureText(b).width);
if (chars[i - 1] === '和' || chars[i - 1] === '與' || tail.test(b)) cost -= ctx.measureText('一').width * 1.2;
if (!best || cost < best.cost) best = { cost, text: a + '\n' + (n > 2 ? d2zhSplit(ctx, b, n - 1) : b) };
}
return best.text;
}
// 物品過濾新增的兩個選項：魔法以下用魔法物品的藍色、稀有以下用稀有物品的黃色（遊戲 ui 色表的 blue／yellow）
const D2ZH_FORCE_COLOR = { 'SELL MAGIC AND BELOW': [105, 105, 255], 'SELL RARE AND BELOW': [255, 255, 100] };
function d2zhPaint(c, st) {
const lang = d2zhLang();
st.lang = lang;
d2zhBusy = true;
try {
const ctx = c.getContext('2d');
if (!ctx) return;
const cjk = D2ZH_CJK.test(st.src) || st.src.includes('\u200b');
if (!cjk && (lang !== 'zh-Hant' || !window.D2I18N.shouldUseLocalFont(st.src))) {
if (c.width !== st.w || c.height !== st.h) { c.width = st.w; c.height = st.h; }
D2ZH_PUT.call(ctx, st.en, 0, 0);
return;
}
let text = cjk ? st.src.replace(/\u200b ?/g, '').replace(/\u00a0/g, ' ') : window.D2I18N.translate(st.src);
let size = Math.max(10, st.size);
// 大字型（選單用的 font24 以上）：中文高度對齊英文字母實際高度，不要用整個字框高度
if (st.size >= 24 && st.ink > 0) size = Math.max(14, Math.min(size, Math.round(st.ink * 1.1)));
let font = `bold ${size}px ${D2ZH_FONT}`;
ctx.font = font;
// 原文分成好幾行的短標籤（例如技能樹分頁 "Defensive\nAuras"）：中文也照行數拆開，太寬就縮小字，不要超出原本的框
const inTab = !!c.closest('.tree-tab');
const boxed = !cjk && (st.src.includes('\n') || inTab) && D2ZH_CJK.test(text);
if (boxed && !text.includes('\n')) {
const rows = Math.max(st.src.split('\n').length, inTab && ctx.measureText(text).width > st.w ? 2 : 1);
text = d2zhSplit(ctx, text, rows);
}
let lines = text.split('\n').flatMap(l => d2zhWrap(ctx, l, st.maxWidth, st.align === 'center'));
let widths = lines.map(l => ctx.measureText(l).width);
const widest = Math.max(0, ...widths);
if (boxed && widest > st.w) {
size = Math.max(10, Math.floor(size * st.w / widest));
font = `bold ${size}px ${D2ZH_FONT}`;
ctx.font = font;
widths = lines.map(l => ctx.measureText(l).width);
}
const lh = Math.max(size + 2, st.lh), s = st.shadow;
const stroke = size < 16 ? 1.5 : Math.max(2, Math.round(size / 9));
const pad = Math.ceil(stroke / 2);
c.width = Math.max(1, Math.ceil(Math.max(0, ...widths)) + s + pad * 2);
c.height = Math.max(1, Math.ceil(size + (lines.length - 1) * lh + s + pad * 2));
ctx.font = font;
ctx.textBaseline = 'middle';
ctx.lineJoin = 'round';
ctx.lineWidth = stroke;
ctx.strokeStyle = 'rgba(0, 0, 0, 0.9)';
const col = D2ZH_FORCE_COLOR[st.src] || st.color;   // 書籤自己加的選項，遊戲畫英文時沒有顏色，這裡補上
const fill = `rgb(${col[0]}, ${col[1]}, ${col[2]})`;
lines.forEach((line, i) => {
const w = widths[i];
const inner = c.width - pad * 2 - s;
const x = pad + (st.align === 'left' ? 0 : st.align === 'right' ? inner - w : (inner - w) / 2);
const y = pad + size / 2 + i * lh;
if (s) { ctx.fillStyle = '#000'; ctx.fillText(line, x + 1, y + 1); }
ctx.strokeText(line, x, y);
ctx.fillStyle = fill;
ctx.fillText(line, x, y);
});
c.setAttribute('aria-label', text);
} finally {
d2zhBusy = false;
}
}
function d2zhCapture(c, img, src) {
const st = d2zhAnalyze(img, src);
D2ZH_STATE.set(c, st);
if (d2zhLang() === 'zh-Hant' || D2ZH_CJK.test(src)) d2zhPaint(c, st);
return st;
}
function d2zhAdopt(c) {
if (!c.width || !c.height || !c.textContent) return null;
const ctx = c.getContext('2d');
if (!ctx) return null;
const st = d2zhAnalyze(ctx.getImageData(0, 0, c.width, c.height), c.textContent);
D2ZH_STATE.set(c, st);
return st;
}
function d2zhMergeParts(box) {
const kids = [...box.children].filter(c => D2ZH_STATE.has(c));
const states = kids.map(c => D2ZH_STATE.get(c));
kids.forEach((c, k) => {
const st = states[k];
if (st.orig === undefined) st.orig = st.src;
if (st.src !== st.orig || c.style.display === 'none') { st.src = st.orig; st.lang = null; c.style.display = ''; }
});
if (d2zhLang() === 'zh-Hant' && window.__d2zhKnown) {
// 技能進化的標題（「Into Impale:」「Cold Arrow into Freezing Arrow, needs:」）也是一個字一格：整段同色的標題合成一句翻
let start = 0;
while (start + 1 < states.length && states[start + 1].color.join() === states[0].color.join()) start++;
const head = states.slice(0, start + 1).map(st => st.orig).join(' ');
if (start > 0 && window.__d2zhHead && window.__d2zhHead(head)) {
states[0].src = head;
states[0].lang = null;
kids.slice(1, start + 1).forEach(c => { c.style.display = 'none'; });
} else start = -1;
for (let i = start + 1; i < kids.length; i++) {
for (let n = Math.min(4, kids.length - i); n >= 2; n--) {
const group = states.slice(i, i + n);
const color = group[0].color.join();
if (group.some(st => st.color.join() !== color)) continue;
const last = group[n - 1].orig;
const tail = /[:,.;!?]$/.test(last) ? last.slice(-1) : '';
const phrase = group.map(st => st.orig).join(' ');
const name = tail ? phrase.slice(0, -1) : phrase;
if (!window.__d2zhKnown(name)) continue;
group[0].src = phrase;
group[0].lang = null;
kids.slice(i + 1, i + n).forEach(c => { c.style.display = 'none'; });
i += n - 1;
break;
}
}
}
kids.forEach((c, k) => { if (states[k].lang !== d2zhLang()) d2zhPaint(c, states[k]); });
}
function d2zhMergeAll(root) {
if (!(root instanceof Element)) return;
if (root.classList.contains('d2-parts')) d2zhMergeParts(root);
for (const box of root.querySelectorAll('.d2-parts')) d2zhMergeParts(box);
}
// ====== 遊戲「最新消息」（changelog.json）======
// 遊戲用 font.balance → wrapLines 的 split(' ') 斷行，換行後才畫成一格一格，逐行翻會英中夾雜。
// 這裡在 split 時換成整句中文、切成一格一格讓遊戲照寬度斷行；d2zhPaint 再把格間的空白拿掉。沒翻到的句子維持原本的逐行翻譯。
// 新句子加在最前面（遊戲只顯示最近 14 天）
const D2ZH_CHANGELOG = {
// 20261105.3
"Magic and rare quivers drop with a bow's affixes, Arrows to wear beside a bow and Bolts beside a crossbow": "會掉落帶有弓類詞綴的魔法和稀有箭筒：箭矢配弓、彈矢配十字弓",
"Terror's end screens replay the same tier in one press (R), and a tier's portal waits for you rather than taking you past its loot": "恐懼層的結束畫面按一下（R）就能重玩同一層，而且該層的傳送門會等你，不會把你帶走而錯過掉落物",
"The character screen has three more pages of stats behind arrows at its bottom left, breakpoints and resistances before the cap among them": "角色畫面左下角新增箭頭，可以翻到另外三頁數值，包括速度門檻和上限前的抗性",
"The Uniques tab keeps a runeword once on each kind of base it comes on, so Spirit on a sword and Spirit on a shield are both kept": "獨特物品分頁的符文之語改成每種可用的底材各收藏一件，例如劍上的精神和盾牌上的精神都會保留",
"Larzuk's training ground adds a physical-immune dummy, the Death Berserker, for physical builds to measure against": "拉蘇克的訓練場新增物理免疫的木樁「死亡狂戰士」，讓物理型角色測試傷害",
"A new loot filter action, HIDE AND SELL, sells what you walk onto or click without ever showing it on the floor": "物品過濾新增「隱藏並出售」：走過去或點擊時直接賣掉，完全不會顯示在地上",
"The loot filter's new ETHEREAL ONLY switch picks up ethereal uniques and runewords while their line hides or sells the rest": "物品過濾新增「無形必撿」開關：一律撿起無形的獨特物品和符文之語，其他的照該行設定隱藏或出售",
"Gear, charms, jewels and essences are picked up from a few yards farther, so walking up beside one takes it": "裝備、護符、珠寶和精華的拾取距離加大幾碼，走到旁邊就會撿起",
"Gem shrines also drop a jewel for your sockets, rare one time in four, beside their experience": "寶石神殿除了經驗值，還會掉一顆可以鑲嵌的珠寶，每四次有一次是稀有珠寶",
"Magic items can no longer be tempered, and a tempered one goes back to how it rolled, its essences returned to your inventory": "魔法物品不能再淬鍊，已經淬鍊過的會回復成原本的數值，用掉的精華退回物品欄",
"Loading an older save after three or more Forge tries on an item now locks that item against further tries": "對一件物品使用熔爐三次以上後再讀取較舊的存檔，這件物品會被鎖住，不能再使用熔爐",
"An item's box in the inventory no longer covers the character sheet's stats, so you can read what the item would change while you hover it": "物品欄的物品說明框不會再擋住角色畫面的數值，滑鼠移到物品上時可以看到它會改變哪些數值",
"The High Council's members no longer walk off before they're slain, which left The High Council quest one member short": "最高議會的成員不會在被打倒前走掉，以前會讓「最高議會」任務少一個成員",
"The Secret Cow Level's moos stop once the herd is gone, where they went on and piled up after the Cow King fell": "秘密奶牛關的牛群消滅後哞叫聲會停止，以前奶牛之王倒下後還會一直叫、越疊越多",
"A Forge item changed on another device or copy of your save is brought up to date as each run starts, so its runs reach the Ladder": "在其他裝置或另一份存檔改過的熔爐物品，每局開始時會同步成最新狀態，這樣那一局才能上天梯",
// 20261105.2
"Telekinesis now has 5 levels like every passive, and its 5th reaches as far as its 3rd did": "心靈傳動改成和其他被動技能一樣有 5 級，第 5 級的距離等於以前的第 3 級",
"The map marks a Burning Essence of Terror or Larzuk's Essence on the ground with a small red triangle": "地圖會用紅色小三角形標出地上的燃燒的恐懼精華或拉蘇克的精華",
"Temper now stops at 10 tempers an item, and only the Hellforge raises one past 10": "每件物品最多淬鍊 10 次，只有地獄熔爐能超過 10 次",
"An item tempered past 10 is cut back to 10, or to 20 if it had 20 or more, each line keeping its share": "淬鍊超過 10 次的物品會降回 10 次（原本 20 次以上的降回 20 次），各行屬性照比例保留",
"The Hellforge now works once per item, and an item cut back to 20 counts as having used it": "地獄熔爐每件物品只能用一次，降回 20 次的物品視為已經用過",
"Terror drops other than the boss's bring a Burning Essence of Terror about a quarter as often": "恐懼層首領以外的掉落，附帶燃燒的恐懼精華的機率降為原本的約四分之一",
"An Annihilus, organ or Hellfire Torch from an uber you had to fight more than once no longer keeps your runs off the Ladder": "從打了不只一次的超級首領拿到的毀滅、器官或地獄火炬，不會再讓你的單局上不了天梯",
"Uber Tristram clears faster than 1:30 now reach the Ladder instead of being refused and piling up unsent": "1 分 30 秒內通過超級崔斯特姆的紀錄現在能上天梯，不會再被拒收、堆著送不出去",
"A re-draft offers Telekinesis again to a fully built hero of any class, so Dim Vision can evolve into Confuse": "任何職業練滿的英雄重新抽選時都會再出現心靈傳動，讓微暗靈視可以進化成迷亂",
"Charsi's Upgrade on an item already on its elite base says so and names the base, where it said no stronger base existed": "對已經是精英底材的物品使用恰西的升級，會說明並寫出底材名稱，以前會說沒有更強的底材",
// 20261105.1
"In the desktop app, Video Options has a Full Screen line to switch between full screen and a window": "電腦版的影像選項新增「全螢幕」，可以切換全螢幕和視窗",
"Click Charsi in the camp to Temper, Clean, Hellforge or Upgrade your items with Burning Essences of Terror": "在營地點恰西，可以用燃燒的恐懼精華替物品淬鍊、清除、送進地獄熔爐或升級",
"Temper raises a random line, a skill by 1 level and any other line by a fifth of its roll, with a lower chance each time": "淬鍊會隨機提升一行屬性：技能提升 1 級，其他屬性提升擲骰值的五分之一，每淬鍊一次成功機率就會降低",
"Clean removes every temper from an item": "清除會移除物品上所有的淬鍊",
"From 10 tempers, the Hellforge doubles them all (40%) or loses them all (60%)": "淬鍊達 10 次起可以用地獄熔爐：所有淬鍊加倍（40%）或全部失去（60%）",
"Upgrade moves a magic, rare or runeword weapon or armour to its exceptional, then elite base, keeping every line": "升級可以把魔法、稀有或符文之語的武器或防具換成擴展底材，再換成菁英底材，所有屬性都會保留",
"Every Terror tier boss drops a Burning Essence of Terror, and other Terror drops sometimes bring one": "每層恐懼層的首領都會掉落燃燒的恐懼精華，恐懼層的其他掉落有時也會帶一個",
"Essences, Larzuk's and Charsi's, now stack to 99": "精華（拉蘇克的和恰西的）現在可以堆疊到 99 個",
"Weapon skills strike with your weapon's own damage, so its Enhanced Damage, your Strength and every +% damage count in full, as in Diablo II": "武器技能改用武器本身的傷害攻擊，所以武器的增強傷害、你的力量和所有 +% 傷害都完整計算，和暗黑破壞神 II 一樣",
"Increased Attack Speed and a fast weapon now quicken your weapon attacks in full, and Faster Cast Rate on items speeds only your spells": "提高攻擊速度和快速武器現在會完整加快武器攻擊，物品上的施法速度加快只影響法術",
"Weapon skills' cards show their +% weapon damage instead of a fixed number": "武器技能卡片改顯示 +% 武器傷害，不再是固定數字",
"Your inventory shows the three uber keys beside the gold once your Terror tiers are open, each with how many you hold": "恐懼層開放後，物品欄的金幣旁邊會顯示三種超級鑰匙和各自持有的數量",
"Hover over the keys to see who drops each, the Countess, the Summoner or Nihlathak, and what a set of them opens": "滑鼠移到鑰匙上可以看到各由誰掉落（女伯爵、召喚者或尼拉塞克），以及集滿一組可以開啟什麼",
"In a Terror tier the Countess, the Summoner and Nihlathak say when they come, and the waypoint names who may drop each act's key": "恐懼層中女伯爵、召喚者和尼拉塞克出現時會有提示，傳送點也會標出每一幕可能掉鑰匙的首領",
"The loot filter has a RUNEWORDS line, so IN MY COLLECTION no longer sells a runeword's second copy before you see its base": "物品過濾新增「符文之語」項目，「已收藏」不會再在你看到底材前就賣掉符文之語的第二件",
"Turning down Skill Effects in Video Options now dims your skills' coloured light on the floor too, not only the spells": "在影像選項調低技能特效，現在也會調暗技能在地上的彩色光芒，不只法術",
"Holding SHOW ITEMS while walking up to a smith or the Training Ground's Larzuk no longer opens their window, so you can pick up loot there": "按住顯示物品走向鐵匠或訓練場的拉蘇克時，不會再打開他們的視窗，可以在那裡撿東西",
"Ethereal items are drawn see-through on the floor, in the inventory, the stash and on the hero, as in Diablo II": "無形物品在地上、物品欄、儲物箱和英雄身上都會畫成半透明，和暗黑破壞神 II 一樣",
"The Amazon's Decoy now takes Defiance, Prayer and Thorns from your side's auras, as your summons do": "亞馬遜的誘餌現在和召喚物一樣，會受到己方的反抗、祈禱和荊棘光環",
"Spirit of Barbs from items or the Druid now hurts monsters that strike your summons in melee, as in Diablo II": "物品或德魯伊的荊棘之靈，現在會傷害近戰攻擊你召喚物的怪物，和暗黑破壞神 II 一樣",
"Fire, cold and lightning damage on charms and gear no longer lowers the life and mana your weapon attacks steal": "護符和裝備上的火焰、冰寒、閃電傷害，不會再降低武器攻擊的生命和法力吸取",
"Wirt's Leg dropped on the ground in a run no longer lets Griswold leave a second one": "單局中把維特之腳丟在地上，格瑞斯華爾德不會再掉第二隻",
"Sockets lie as in Diablo II, so five make a die's five and a helm's three make a V, where they stood in columns": "凹槽的排列改成和暗黑破壞神 II 一樣：五個排成骰子的五點，頭盔的三個排成 V 字，不再排成直行",
"A charm's box now names the key that opens the Charms window, H unless you rebound it": "護符的說明框會寫出打開護符欄的按鍵，沒改過就是 H",
"Picking up a key or organ now says how many you hold and that they're in your inventory": "撿起鑰匙或器官時，會顯示持有數量，並說明放在物品欄",
"A Barbarian with Whirlwind and Leap Attack now uses both in turn, where a fast cast rate kept him spinning and he never leapt": "同時有旋風斬和跳躍攻擊的野蠻人現在會輪流使用，以前施法速度快時會一直旋轉、從來不跳",
"The Amazon's Valkyrie now takes Defiance, Prayer, Thorns and Fanaticism from your side's auras, as your summons do": "亞馬遜的女武神現在和召喚物一樣，會受到己方的反抗、祈禱、荊棘和狂熱光環",
"In a Terror tier the Countess, the Summoner and Nihlathak now stay until they fall, as in D2, instead of leaving with their keys": "恐懼層中的女伯爵、召喚者和尼拉塞克現在會一直留到被打倒，和 D2 一樣，不會再帶著鑰匙離開",
"Poison Skill Damage on Bramble and Trang-Oul's Claws now shows its number in the desktop app": "電腦版中荊棘（符文之語）和塔格奧之手上的毒素技能傷害，現在會顯示數字",
"With a controller, the item under the cursor now shows its sockets and the runes, gems or jewels in them, as with the mouse": "用手把時，游標下的物品現在也會顯示凹槽和鑲在裡面的符文、寶石或珠寶，和滑鼠一樣",
"Fade from items such as Treachery now shows on your hero and your mercenary while it lasts, so you can see it working": "背信等物品觸發的消逝，持續期間會顯示在英雄和傭兵身上，看得出來有在作用",
"Every class now holds any weapon as itself, where a Necromancer's bow or two-handed sword was drawn as his wand": "每個職業現在都會照實際的武器樣子拿著，以前死靈法師拿弓或雙手劍會被畫成法杖",
"Curses from items, such as Decrepify and Amplify Damage, now show over the monsters they curse, from any class or your mercenary": "物品觸發的詛咒（例如衰老和傷害加深）現在會顯示在被詛咒的怪物身上，不論是哪個職業或傭兵施放的",
"Uber keys and organs lying on the floor now have red names, as the Horadric Codex has, so they no longer look like uniques": "地上的超級鑰匙和器官名稱改成紅色，跟赫拉迪克法典一樣，不會再看起來像獨特物品",
"On a phone held upright, the Sell button with the stash open is now on the right, where it is beside Drop in a run": "手機直拿時，打開儲物箱的出售按鈕改到右邊，和單局中丟棄按鈕旁邊的位置一樣",
"Spirit of Barbs from items now hurts monsters that strike a Necromancer or a Sorceress, and stays on with Dodge or Weapon Block": "物品的荊棘之靈現在會傷害攻擊死靈法師或女巫的怪物，有閃躲或武器格檔時也會維持",
"A hero whose runs reached the Ladder hours late is no longer marked as played from an older copy of the save": "單局晚了幾個小時才上天梯的英雄，不會再被誤標成用舊的存檔遊玩",
"The damage meter's curses line is named for the Necromancer's Attract or Confuse when he holds one, not always Iron Maiden": "傷害統計的詛咒那一行，死靈法師有吸引或混亂時會照實際名稱顯示，不會一律寫攻擊反噬",
"A summon or revived monster raised before its art loaded is drawn at its own size once it appears, no longer as a giant": "圖像還沒載入就召喚出來的召喚物或復活怪物，出現後會照正常大小顯示，不會再變成巨人",
"The desktop setup says a disk a little short of room in MB, not \"1.8 GB\" twice, with how much more to free": "電腦版安裝程式在磁碟空間差一點不夠時會用 MB 顯示，不會再重複寫兩次「1.8 GB」，並說明還要清出多少",
// 20261104.2
"A Hardcore hero who clears many tiers in a row is no longer marked as played from an older copy of the save": "專家模式英雄連續通過很多層時，不會再被誤標成用舊的存檔遊玩",
"The ubers are fought at your open Terror tier up to Terror 100, so a hero past it fights them at 100": "超級首領照你目前開放的恐懼層出戰，最高到恐懼 100，超過 100 層的英雄一律打 100 層的超級首領",
// 20261104.1
"Selling a Stone of Jordan with your Terror tiers open calls the Diablo Clone into your next tier, and he drops Annihilus": "開放恐懼層後把喬丹之石賣給商人，會在你的下一層召來迪亞布羅分身，打倒他會掉落毀滅",
"The Hellfire Torch and Annihilus, Diablo II's uber charms, join the Uniques tab, and the Torch casts its Firestorm": "暗黑破壞神 II 的超級護符地獄火炬和毀滅加入獨特物品分頁，地獄火炬也會施放火風暴",
"In Terror tiers the Countess, the Summoner and Nihlathak drop Diablo II's three keys, likelier the deeper the tier": "恐懼層的女伯爵、召喚者和尼拉塞克會掉落暗黑破壞神 II 的三種鑰匙，層數越深越容易掉",
"Jewels on the floor get a blue asterisk on the automap, as charms get their orange ring": "地上的珠寶在自動地圖上會顯示藍色星號，就像護符有橘色圓圈一樣",
"With one of each key, a Terror offer opens Matron's Den, the Forgotten Sands or the Furnace of Pain, whose uber drops his organ": "三種鑰匙各有一把時，恐懼層的選項會開放女族長之巢、被遺忘的沙地或痛苦熔爐，打倒裡面的超級首領會掉落器官",
"Every stash tab is two rows taller, 10 by 12, and the items already stored stay where they lie": "每個儲物箱分頁都多兩排，變成 10×12，已經放著的物品位置不變",
"With Mephisto's Brain, Diablo's Horn and Baal's Eye, a Terror offer opens Uber Tristram, whose three Prime Evils drop the Hellfire Torch": "集齊墨菲斯托之腦、迪亞布羅之角和巴爾之眼時，恐懼層的選項會開放超級崔斯特姆，打倒裡面的三大魔王會掉落地獄火炬",
"Crowded fights full of missiles and glowing spells take a fifth of the drawing steps they did, easing the load on the graphics card": "滿是飛行物和發光法術的混戰，繪圖步驟減少到原本的五分之一，減輕顯示卡負擔",
"On a phone or tablet, a second tap on a skill now always opens its modifiers, as do second taps on the mercenary's choices and other buttons": "在手機或平板上，再點一次技能一定會打開技能改造；傭兵的選項和其他按鈕再點一次也一樣",
"Magic Absorb on Oath, Spirit and Crescent Moon shows its number, as in Diablo II": "誓約、精神和新月的魔法吸收會顯示數值，和暗黑破壞神 II 一樣",
"Monsters no longer keep attacking an unseen spot where a monster from Conversion stood after it turned back or fell": "被轉換的怪物恢復原狀或倒下後，其他怪物不會再一直攻擊牠原本站的空位",
"The stash's search now marks the Uniques tab when a unique it keeps matches, so one search tells you it's there": "儲物箱搜尋時，獨特物品分頁裡有符合的物品就會標示該分頁，搜一次就知道在那裡",
"The red portal no longer blinks while Blessed Hammers or other glowing missiles fill the screen around it": "周圍滿是祝福之鎚或其他發光飛行物時，紅色傳送門不會再閃爍",
"W on a Ladder hero's screen no longer swaps your own weapons and opens your own screen over theirs": "看天梯英雄的畫面時按 W，不會再切換你自己的武器並把你的畫面蓋在上面",
"With the Dark Reader extension on, the control panel, globes and menu backgrounds draw again": "開著 Dark Reader 擴充功能時，控制面板、生命球／法力球和選單背景會正常顯示了",
"XP gems, gold, potions, barrels and chests that failed to load at start now load once the connection is back": "開局時沒載入成功的經驗寶石、金幣、藥水、木桶和寶箱，網路恢復後會重新載入",
"Wirt's Leg is used up only when your hero walks into the cow portal, so a portal left unused no longer costs the leg": "只有英雄走進奶牛傳送門時才會用掉維特之腳，開了傳送門沒進去就不會消耗",
"A flight stick's throttle resting at its end no longer walks the hero once one of its buttons is pressed": "飛行搖桿的油門停在底端時，按下搖桿上的按鈕後英雄不會再自己走動",
"On a phone held upright, the inventory's I / II weapon tabs no longer show over the stash": "手機直立時，物品欄的 I / II 武器分頁不會再蓋在儲物箱上",
"Battle Orders, the Barbarian's or Call to Arms', raises maximum mana as well as life, so a Sorceress's Energy Shield holds more": "戰鬥體制（野蠻人的或戰爭召喚的）會同時提高生命和法力上限，所以女巫的能量護盾能吸收更多",
"On phones, the inventory, character and belt windows no longer stay small after the phone is turned": "手機轉向後，物品欄、角色和腰帶視窗不會再一直維持縮小",
"An item the Charms window won't take now lights its cells red when held over it, not green": "護符欄放不進去的物品拿到上面時，格子會變紅色而不是綠色",
"Curses your gear casts when struck, such as Brand's Amplify Damage, land on the monster that hit you, as in Diablo II": "裝備在被擊中時施放的詛咒（例如烙印的傷害加深）會落在打你的怪物身上，和暗黑破壞神 II 一樣",
"Curses your gear casts on striking land on the monster you hit, not the nearest one": "裝備在攻擊時施放的詛咒會落在你打中的怪物身上，而不是最近的那隻",
"Moving Larzuk's Essence onto an item swaps the two and no longer spends one, and only right-click or a long press uses it": "把拉蘇克的精華移到物品上只會互換位置，不會再消耗一個；只有右鍵或長按才會使用",
"A runeword shows its runes in its sockets when you point at it, where its sockets looked empty but took no jewel": "指著符文之語時凹槽會顯示它的符文；以前凹槽看起來是空的，卻放不進珠寶",
"Fortitude now drops as body armour half the time, and Spirit as a shield half the time": "剛毅現在有一半機率掉成盔甲，精神有一半機率掉成盾牌",
"A jewel put into gear your hero wears counts at once, where it waited for the next change of gear": "鑲進身上裝備的珠寶會立刻生效，以前要等到下次換裝備",
"Knockback from arrows and thrown weapons shoves a monster less each time it is hit again quickly, so it stays in reach": "箭和投擲武器的擊退，短時間內連續打中同一隻怪物時會越推越短，讓牠留在攻擊範圍內",
"Attract's Lure totem is a pillar of bone that rises and crumbles, no longer a flat pale bar": "吸引的引誘圖騰變成會升起又崩解的骨柱，不再是一條扁平的淡色長條",
"The gamble offers orbs, staves, wands and scepters again, each to the classes that wield them, so a Sorceress is offered weapons": "賭博又會出現法珠、法杖、魔杖和權杖，只給會用的職業，所以女巫也會看到武器",
"A Barbarian's own Battle Orders cast while he wears Call to Arms lasts as long as the item's, so it stays up after the swap": "野蠻人拿著戰爭召喚時施放自己的戰鬥體制，持續時間和物品的一樣，切換武器後仍然有效",
"Jewels and charms you keep no longer vanish from the floor when many hidden magic items fall after them": "之後掉了很多被隱藏的魔法物品時，地上會保留的珠寶和護符不會再消失",
"A Redemption aura from an item such as Phoenix now heals your hero when monsters die nearby, whatever your class": "物品給的救贖光環（例如鳳凰）現在附近怪物死亡時會治療英雄，不分職業",
// 20261103.2
"The wiki's Items page lists every jewel affix, with what each can roll and the item level it starts from": "百科的物品頁列出所有珠寶詞綴，以及每個詞綴的數值範圍和最低出現的物品等級",
"Put a jewel down on a filled socket to replace the jewel there, which comes back to your hand": "把珠寶放到已鑲嵌的凹槽上，就會換掉原本的珠寶，換下來的會回到你手上",
"Power Strike, Charged Strike and Lightning Strike now hurt lightning immunes, their thrust adding your weapon's damage as in Diablo II": "威力一擊、衝能一擊和閃電攻擊現在能傷害閃電免疫的怪物，刺擊會加上武器傷害，和暗黑破壞神 II 一樣",
"The desktop app's setup asks you to update or repair Diablo II when its monster tables are broken, rather than draw monsters as circles": "暗黑破壞神 II 的怪物資料損壞時，電腦版設定會請你更新或修復遊戲，不再把怪物畫成圓圈",
"The desktop app's setup no longer stops at Sounds and music when one of the files it just wrote has gone missing": "剛寫入的檔案不見時，電腦版設定不會再停在「音效和音樂」步驟",
"A controller no longer drives the game while another window has the focus, so it can be used in another game with the desktop app open": "其他視窗在前景時，手把不會再操作這個遊戲，所以開著電腦版也能用手把玩別的遊戲",
"Charged Strike's skill box says 8 hits a cast, its thrust and all 7 bolts, where it said 2": "衝能一擊的技能說明改成每次施放打 8 下（刺擊加 7 道電光），以前寫 2 下",
"Two items with the same aura, such as two Phoenixes, now add their levels past 20 as in Diablo II": "兩件有相同光環的物品（例如兩把鳳凰）等級會相加並超過 20 級，和暗黑破壞神 II 一樣",
"Right-clicking a jewel no longer wears it in a hidden slot, and a jewel lost that way comes back in your personal stash tab": "右鍵點珠寶不會再把它裝進看不見的欄位，這樣不見的珠寶會回到你的個人儲物箱分頁",
// 20261103.1
"The loot filter has a HORADRIC CODEX line, to hide or sell the books once your heroes have read all ten": "物品過濾新增「赫拉迪克法典」項目，英雄都讀完十本後可以隱藏或出售",
"Jewels drop a little more often than charms, with Diablo II's jewel affixes and new caster rows for skill damage and enemy resistance": "珠寶的掉落率比護符稍高，有暗黑破壞神 II 的珠寶詞綴，另外新增施法者用的技能傷害和降低敵人抗性詞綴",
"A Terror tier's boss can drop Larzuk's Essence, likelier with Magic Find, which stacks to 20 and gives an item sockets": "恐懼層的首領會掉落拉蘇克的精華（尋獲魔法物品越高越容易掉），最多疊 20 個，可以幫物品打凹槽",
"Uniques and set items with sockets of their own in Diablo II, such as Rune Master and Crown of Ages, have them, the ones you already own too": "暗黑破壞神 II 中本身有凹槽的獨特和套裝物品（例如符文大師、年紀之冠）現在也有凹槽，已經擁有的也一樣",
"Class items roll Diablo II's random +skills, like a Barbarian helm's +3 to Battle Orders, and runewords made in them keep them": "職業專屬物品會照暗黑破壞神 II 隨機出現 +技能（例如野蠻人頭盔的戰鬥體制 +3），做成符文之語也會保留",
"In Terror, Damage Reduced goes up to 75% and resistances up to 87.5%, or 97.5% with +% to Maximum Resist, at every tier": "恐懼層每一層的傷害減少上限都是 75%，抗性上限 87.5%，有最大抗性加成時可達 97.5%",
"In Terror, each point of Vitality gives twice its life": "恐懼層裡每點體力給的生命加倍",
"In Terror, Dodge, Avoid and Evade reach 82.5% and 87.5%, and Energy Shield takes up to 97.5% of a hit": "恐懼層裡閃避、躲避和迴避可達 82.5% 和 87.5%，能量護盾最多吸收每次攻擊的 97.5%",
"The Ladder now ranks the Terror tiers alone, and the Normal, Nightmare and Hell boards are gone": "天梯現在只排名恐懼層，普通、惡夢、地獄的排行榜取消了",
"High-level item spells hit harder, Death's Chain Lightning 2.3 times as hard, and low-level ones match D2": "物品施放的高等級法術傷害提高（死亡的連鎖閃電變成 2.3 倍），低等級的和 D2 一致",
"An item in hand that can't go back to its place when you close a window or press Esc says which bag or stash tab it went to": "關閉視窗或按 Esc 時，手上的物品放不回原位，會告訴你放到哪個背包或儲物箱分頁",
"Call to Arms' Battle Orders, Oak Sage, the Druid's forms and Increase Maximum Life now count your gear's +Life, often 3-4 times the life": "戰爭召喚的戰鬥體制、橡木智者、德魯伊的變身和增加生命上限現在會計入裝備的 +生命，通常是 3～4 倍的生命",
"Items' +skills raise the Druid's Lycanthropy and Oak Sage life one level each past their maximum, as in D2": "物品的 +技能會讓德魯伊的變形術和橡木智者生命超過上限繼續提高，每級一級，和 D2 一樣",
"Call to Arms' Battle Orders now lasts 30 seconds and 10 more a level, so it stays up after you swap back, as in D2": "戰爭召喚的戰鬥體制現在持續 30 秒，每級再加 10 秒，切換回武器後仍然有效，和 D2 一樣",
"Call to Arms' Battle Command and Battle Cry also last as long as in D2, and Battle Command's +1 to all skills now runs out": "戰爭召喚的戰鬥指揮和戰嗥持續時間也和 D2 一樣，戰鬥指揮的所有技能 +1 現在會到期",
"Weapon swap (W, or a click on the other set's tab) works with the stash or a vendor's window open, as in Diablo II": "開著儲物箱或商人視窗時也能切換武器（W，或點另一組的分頁），和暗黑破壞神 II 一樣",
"A runeword you already own in a class item gains the +skills its base rolled as your save loads": "已經擁有、做在職業專屬物品上的符文之語，讀檔時會加上底材骰出的 +技能",
"Curses, chills and freezes from items last as long as D2's, and Static Field from items takes 25% at every level": "物品造成的詛咒、冰冷和冰凍持續時間和 D2 一樣，物品施放的靜態立場每一級都削減 25%",
"Feral Rage from an item works only as a werewolf, as in D2, and Myth's Howl casts whenever it fires": "物品給的野性狂暴只有變成狼人時有效，和 D2 一樣；神話的嚎叫每次觸發都會施放",
"Six Evolutions also counts the skill an evolved skill came from, so a Barbarian's Berserk counts its Concentrate too": "六次進化也會計算進化前的技能，所以野蠻人的狂戰士也會算到專心",
"Your hero's life no longer gets stuck reading NaN, which also kept your hero from dying": "英雄的生命不會再卡在顯示 NaN（這也會讓英雄死不了）",
"Fires Explosive Arrows and Fires Magic Arrows change only your plain attack's arrow, as in Diablo II, not every arrow of every bow skill": "射出爆炸箭和射出魔法箭只改變普通攻擊的箭，和暗黑破壞神 II 一樣，不會改變每個弓技能的每支箭",
"Improved security for leaderboard runs": "加強排行榜紀錄的安全性",
"Leaderboard runs are no longer lost after a long server outage or a reload in Hardcore": "伺服器長時間中斷或在專家模式重新整理後，排行榜紀錄不會再遺失",
"PREVIOUS MENU stays on screen on Options' KEYBOARD page, so a phone held upright can leave it without scrolling to the bottom": "選項的「鍵盤」頁面裡，「返回上一個選單」會固定在畫面上，直拿手機時不用捲到最下面才能離開",
"Terror clears no longer go unverified after your device's clock corrects itself": "裝置時鐘自動校正後，恐懼層通關紀錄不會再變成未驗證",
"W no longer swaps to an empty weapon set in a run, the camp or by the stash, which left your hero empty-handed as if the weapon were lost": "在遊戲中、營地或儲物箱旁，W 不會再切換到空的武器組，以前會讓英雄空手，好像武器不見了",
"After Hell's Baal the camp's waypoint opens on the act with a Terror tier, and its notice points to the waypoint instead of the old campfire": "打倒地獄的巴爾後，營地的傳送點會開在有恐懼層的那一幕，提示也改成指向傳送點，不再是以前的營火",
"START OVER also clears your runs waiting for the leaderboard, so the new save starts with none waiting or refused": "「重新開始」也會清除等待上傳排行榜的紀錄，新存檔不會有等待或被拒收的紀錄",
// 20261102.2
"Runs the leaderboard refused no longer hold up your new runs, which are now sent first": "被排行榜拒收的紀錄不會再卡住新紀錄，新紀錄會優先傳送",
"Runs from before a Terror reset are dropped at once instead of waiting for days": "恐懼層重置之前的紀錄會立刻丟棄，不再等上好幾天",
"The leaderboard's You tab counts the runs it refused apart from those waiting to be sent": "排行榜的「你」分頁會把被拒收的紀錄和等待傳送的紀錄分開計算",
"Wisp Projector gives all three of its spirits at once, Oak Sage's life too, where only its Spirit of Barbs stayed": "鬼火投射者會同時給三種靈體，也包括橡木智者的生命，以前只會留下棘靈",
"Nature's Peace's Oak Sage life now counts beside Wisp Projector or a weaker Oak Sage of your own": "大自然的和平的橡木智者生命，現在和鬼火投射者或你自己較弱的橡木智者同時存在時也有效",
"A Druid's own spirit and those his items raise now count together, the stronger where both give the same bonus": "德魯伊自己召喚的靈體和物品召喚的靈體現在會一起生效，相同的加成取較強的",
"Item charges show the level their item names, so Nature's Peace's Oak Sage reads Level 5 with its +50% life, not Level 2": "物品充能會顯示物品標示的等級，所以大自然的和平的橡木智者顯示 5 級、生命 +50%，不再是 2 級",
"Normal, Nightmare and Hell clears by a strong hero, one Akara restarted at 99 among them, reach the leaderboard again": "強力英雄（包括在 99 級由阿卡拉重新開始的英雄）通關普通、惡夢、地獄的紀錄，又能上排行榜了",
"Terror tiers past tier 40 add +1% Magic Find a tier, down from +2%": "恐懼層第 40 層之後，每層尋獲魔法物品 +1%（原本 +2%）",
"Each hero has a second weapon set, as in Diablo II, and W swaps between them": "每位英雄都有第二組武器，和暗黑破壞神 II 一樣，按 W 切換",
"The inventory's I and II tabs swap weapon sets, and so does a tap on the new I / II button on phones and tablets": "物品欄的 I、II 分頁可以切換武器組，手機和平板也可以點新的 I／II 按鈕切換",
"Only the weapon set in your hands counts, so the other set gives no stats, skills or auras": "只有拿在手上的武器組有效，另一組不提供屬性、技能和光環",
"A controller swaps weapons with the left stick's click, which Options, CONTROLLER can change": "手把按下左搖桿切換武器，可以在 選項 → 手把 更改",
"Options has a KEYBOARD page that shows every key and lets you rebind it, with two keys for each action": "選項新增「鍵盤」頁面，可以查看並更改所有按鍵，每個動作可設兩個鍵",
"Your hero walks with the mouse and the arrow keys, and W, A, S and D no longer move, as in Diablo II": "英雄改用滑鼠和方向鍵移動，W、A、S、D 不再是移動，和暗黑破壞神 II 一樣",
"MOVE WITH WASD on the KEYBOARD page puts walking back on W, A, S and D": "「鍵盤」頁面的「用 WASD 移動」可以把移動改回 W、A、S、D",
"Every hint and hover that names a key names the one you bound": "所有提到按鍵的提示和說明框，都會顯示你設定的按鍵",
"Terror tiers past tier 40 add +1% gold a tier, down from +2%": "恐懼層第 40 層之後，每層金幣 +1%（原本 +2%）",
"Items found past Terror tier 100 sell for no more than tier 100's": "恐懼層第 100 層之後找到的物品，售價不會超過第 100 層的物品",
"On phones and tablets the game holds its art in about a third less memory, so it crashes less at Duriel and Diablo": "手機和平板上，遊戲圖片佔用的記憶體減少約三分之一，打都瑞爾和迪亞布羅時比較不會當掉",
"With Samsung Internet's dark mode on, the life and mana globes and the items' pictures are no longer drawn white": "開啟 Samsung Internet 的深色模式時，生命球、法力球和物品圖片不會再變成白色",
"The screen no longer garbles after the display comes back from a lost graphics connection": "顯示卡連線中斷又恢復後，畫面不會再變成亂碼",
"On Windows, extracting the game files again no longer stops at the end with \"D2 Survivors couldn’t save its copy of the game files\"": "Windows 上重新解壓縮遊戲檔案時，最後不會再因為「D2 Survivors 無法儲存遊戲檔案副本」而中斷",
"The Dark Wanderer walks away facing where he goes, no longer sideways": "黑暗流浪者離開時會面向前進方向，不再側著走",
"In older Chrome on a scaled Windows screen, an item put down in the inventory or stash lands under the cursor again": "舊版 Chrome 在有縮放的 Windows 螢幕上，物品放進物品欄或儲物箱時又會落在游標下方",
"On Windows, one graphics crash as the desktop app starts no longer leaves it on slower Direct3D 11 until the next update": "Windows 上桌面版啟動時發生一次顯示錯誤，不會再一直用較慢的 Direct3D 11 到下次更新",
"Items in the inventory no longer show only their names for the whole session after one piece of item art fails to load": "有一張物品圖片載入失敗時，物品欄不會再整段時間都只顯示物品名稱",
"Back from Tristram or the Secret Cow Level, the items you left on Act I's floor are still there": "從崔斯特姆或秘密母牛關回來後，留在第一幕地上的物品還會在",
"Bul-Kathos' Sacred Charge, Famine and Naj's Circlet no longer read as not legit when moved between Diablo II's and Resurrected's files": "布爾凱索的神聖代價、飢荒和娜吉的頭飾，在暗黑破壞神 II 和獄火重生的檔案之間轉移時，不會再被判定為不合規",
"Akara's re-draft keeps the modifier on Raise Skeleton once it has evolved into Revive, rather than freeing it every time": "復甦骷髏進化成重生後，阿卡拉重新抽選會保留它的改造，不再每次都釋放",
"An evolution you banish in Akara's re-draft stays banished until your next re-draft, rather than ending at Baal": "在阿卡拉重新抽選時放逐的進化技能，會維持放逐到下次重新抽選，不再到巴爾就結束",
"The loot filter warns in red on CHARMS when MAGIC ITEMS would sell or hide your magic charms, and KEEP on CHARMS keeps them": "「魔法物品」會出售或隱藏魔法護符時，物品過濾的「護符」會顯示紅色警告，把「護符」設為「保留」就會留下",
"A runeword on a class's own base keeps that base's property, like a Paladin shield's resistances or an Amazon bow's +skills, as in Diablo II": "符文之語做在職業專屬底材上，會保留底材的屬性，例如聖騎士盾牌的抗性、亞馬遜弓的 +技能，和暗黑破壞神 II 一樣",
"Runewords you already own on a class's own base gain that base's property when your save loads": "你已經擁有的職業專屬底材符文之語，在讀取存檔時會補上底材的屬性",
"On phones, a pinch on the level-up cards no longer zooms the game in and leaves it zoomed after your pick": "手機上在升級卡片用兩指縮放，不會再放大遊戲，選完後也不會維持放大",
"Taking off Wolfhowl or Beast ends the werewolf or werebear form, its look and its bonuses, as in Diablo II": "卸下狼嚎或野獸會結束狼人或熊人形態，外觀和加成都會消失，和暗黑破壞神 II 一樣",
"The NEWS page scrolls smoothly again, where its long list of changes made it lag": "「最新消息」頁面又能順暢捲動，之前更新項目太長造成卡頓",
"With a gamepad, tapping Y twice to open your inventory no longer sells an item, and Y never sells the gear you wear": "使用手把時，連按兩下 Y 打開物品欄不會再賣掉物品，Y 也絕不會賣掉身上的裝備",
"Call to Arms no longer makes heroes of other classes yell with the Barbarian's voice as it casts its shouts": "戰爭召喚施放吶喊技能時，其他職業的英雄不會再發出野蠻人的聲音",
"Act I's stone crosses stand one at a time, no longer packed into overlapping clumps": "第一幕的石十字架會分開擺放，不再重疊擠成一團",
"On tablets held sideways, a monster's enchantments under its life bar no longer run into the run's rows at the top right": "平板橫放時，怪物生命條下方的詞綴不會再和右上角的本局資訊重疊",
"Wraith Flight, Ethereal Edge, Ghostflame and Shadow Killer say Ethereal on their item box, as they always were": "死靈夜翔、永恆邊界、鬼火焰和影殺者的說明框會標示無形的，它們本來就是無形的",
"Trang-Oul's Claws give their missing +25% to Poison Skill Damage, worn alone or with the set, as in Diablo II": "塔格奧之手補上缺少的毒素技能傷害 +25%，單穿或穿套裝都有，和暗黑破壞神 II 一樣",
"Civerb's Cudgel gives its missing +1 Maximum Damage per character level, as in Diablo II": "希弗柏的短棍補上缺少的每角色等級 +1 最大傷害，和暗黑破壞神 II 一樣",
"The Ancients hold the Arreat Summit while you're on it, as in Diablo II, rather than walking off before Rite of Passage is done": "你在亞瑞特山頂時，遠古之靈會留在山頂，和暗黑破壞神 II 一樣，不會在成年禮完成前走掉",
"The mana globe no longer stays empty while it reads full, after a run where Energy Shield spent your mana": "在能量護盾耗掉法力的一局之後，法力球不會再明明顯示全滿卻是空的",
"Skills your items cast were your own fully evolved skills, with their extra bonuses, so some items gave far more than they should": "裝備施放的技能以前是用你自己完整進化的技能，連額外加成都有，所以有些裝備給的效果遠超過應有的數值",
"Most skills an item gives are now that skill alone at the item's level, with none of your skill modifiers or evolutions, as in Diablo II": "現在裝備給的技能大多是該技能本身、用裝備的等級，不含你的技能改造和進化，和暗黑破壞神 II 一樣",
"Wisp Projector was the biggest case, as its Heart of Wolverine and Spirit of Barbs added Oak Sage's life, about +125% on any hero": "鬼火投射者是最明顯的例子，它的狼獾之心和棘靈會加上橡木智者的生命，任何英雄都多約 +125%",
"If your hero leaned on such an item, expect less life or damage now, since it gives only what the item gives in Diablo II": "如果你的英雄很依賴這類裝備，生命或傷害會變少，因為現在只給暗黑破壞神 II 裡該裝備給的效果",
"Call to Arms' Battle Orders gives Diablo II's life at its level, and its Battle Command +1 to all skills alone": "戰爭召喚的戰鬥體制照暗黑破壞神 II 依等級給生命，戰鬥指揮只給所有技能 +1",
"Revive, Spirit Wolf, Dire Wolf and Grizzly cast by items raise only their own monster or beast": "裝備施放的重生、靈狼、恐狼和灰熊，只會召喚各自的怪物或野獸",
"Static Field no longer kills monsters in Normal, where it leaves them at 1 life, as in Diablo II": "靜態立場在普通難度不會再殺死怪物，只會留下 1 點生命，和暗黑破壞神 II 一樣",
"A hero reset at Akara or with a Token of Absolution re-drafts before the Training Ground, where it used to arrive with no skills": "在阿卡拉或用赦免徽記重置的英雄，會先重新抽選才進訓練場，以前會沒有技能就進去",
"With STAT RANGES on, items for sale in the stores read in Korean again, with each range after its line in grey": "開啟「屬性範圍」時，商店販售的物品又會顯示韓文，每行後面用灰字標示範圍",
"Fire, cold and lightning damage charms no longer lower your weapon skills' damage on monsters that resist those elements": "火焰、冰寒、閃電傷害護符，打有抗性的怪物時不會再降低武器技能的傷害",
"Fire Arrow's and Cold Arrow's hovers no longer show more damage before their first shot than after it": "火焰箭和冰箭的說明框，不會再在第一次射擊前顯示比射擊後更高的傷害",
"A charm right-clicked at the stash after switching heroes no longer opens the previous hero's Charms window": "換英雄後在儲物箱右鍵點護符，不會再打開上一位英雄的護符欄",
"Dragon Flight now takes you to its target while Whirlwind from Chaos spins you, instead of Whirlwind pulling you back": "混沌的炫風旋轉時，飛龍在天現在會帶你到目標，不再被炫風拉回去",
"When the desktop app's setup is stopped as it starts copying the game files, it says an antivirus may be the cause and what to do": "桌面版安裝在開始複製遊戲檔案時被停止，會提示可能是防毒軟體造成，並說明怎麼處理",
"One Terror tier the Ladder couldn't count no longer keeps every later run of your hero off it for good": "有一層恐懼層無法計入排行榜時，不會再讓這位英雄之後的紀錄永遠上不了榜",
"REPORT sends a contact typed as its box shows it, like @name (X), where it refused it before": "「回報」現在接受照輸入框範例填寫的聯絡方式，例如 @name (X)，以前會被拒絕",
"A charm moved at a vendor no longer leaves the store over the character and mercenary screens in later runs": "在商人那裡移動護符後，之後幾局商店不會再蓋在角色和傭兵畫面上",
"Gheed's gamble offers normal bases and, as in Diablo II, some exceptional or elite ones, so their uniques can be gambled": "吉黑得的賭博會出現普通底材，也和暗黑破壞神 II 一樣有部分擴展和精華底材，所以賭得到它們的獨特物品",
"Scepters, staves, wands, orbs and other classes' items are no longer gambled, as in Diablo II": "權杖、法杖、魔杖、法珠和其他職業的物品不再出現在賭博，和暗黑破壞神 II 一樣",
"Ethereal Edge, Stormshield, The Grandfather and the other indestructible items say Indestructible on their item box, as in Diablo II": "永恆邊界、暴風之盾、祖父等不可破壞的物品，說明框會標示「不可破壞」，和暗黑破壞神 II 一樣",
"On the website, one damaged backup copy no longer stops the browser from keeping new backups of your save": "網頁版上有一份備份損毀時，瀏覽器不會再因此無法保留新的存檔備份",
"Potions bought from Akara now go into your belt when you continue a saved run, not only in a new run": "向阿卡拉買的藥水，繼續已儲存的一局時也會放進腰帶，不再只有新的一局才會",
"Shieldmaidens bring each fallen Valkyrie back on the skill's next cast, where all three had to fall before any returned": "盾女會在下次施放技能時帶回每一位倒下的女武神，以前要三位都倒下才會回來",
"The hero select no longer asks for Lord of Destruction's files when the Amazon, Sorceress, Necromancer, Paladin or Barbarian is missing": "缺少亞馬遜、女巫、死靈法師、聖騎士或野蠻人時，選角畫面不會再要求毀滅之王的檔案",
"The Terror leaderboard starts over with this balance update, and your heroes keep every Terror tier they've unlocked": "這次平衡更新重置恐懼層排行榜，英雄已解鎖的恐懼層都會保留",
"The Amazon's Valkyrie gives your hero +6% to all resistances at level 1, up to +40% at level 8": "亞馬遜的女武神 1 級給英雄所有抗性 +6%，8 級最高 +40%",
"Defense now makes monsters' blows and arrows miss you more often the higher it is, instead of cutting their damage, as in Diablo II": "防禦越高，怪物的攻擊和箭矢越容易打不中你，不再是減少傷害，和暗黑破壞神 II 一樣",
"Each Terror tier pays +3% Magic Find and gold up to tier 40, then +2% a tier with no cap": "恐懼層每層給 +3% 尋獲魔法物品和金幣，到第 40 層為止，之後每層 +2%，沒有上限",
"Each Terror tier adds +1% experience and +2% items, so deeper tiers drop more instead of less": "恐懼層每層再給 +1% 經驗值和 +2% 物品，越深掉得越多，不再越掉越少",
"The Sorceress finds mana potions in barrels and urns, which fill Energy Shield or go to your belt when it's full": "女巫會在木桶和甕裡找到法力藥水，可以補充能量護盾，護盾滿了就放進腰帶",
"Akara sells mana potions to the Sorceress": "阿卡拉會賣法力藥水給女巫",
"Monsters now drop potions now and then, a quarter as often as in Diablo II": "怪物偶爾會掉藥水，機率是暗黑破壞神 II 的四分之一",
"The Discord link on the site and in the game points to the new invite": "網站和遊戲裡的 Discord 連結改成新的邀請",
"Regenerate Mana on gear refills the Sorceress's Energy Shield faster": "裝備上的法力恢復會讓女巫的能量護盾補得更快",
"Mana stolen per hit and mana per kill now refill the Sorceress's Energy Shield": "每次命中偷取法力和每次擊殺回復法力，現在都會補充女巫的能量護盾",
"The Assassin loses the flat ×2.7 damage bonus in Terror, and the Assassin's claws, Phoenix Strike and Shadows hit harder instead": "刺客取消恐懼層固定 ×2.7 傷害加成，改成強化爪類、鳳凰攻擊和影子",
"The Assassin's Venom adds 435 poison damage to each claw and blade hit at level 5 (was 80 over 2 seconds)": "刺客的毒牙 5 級時，爪和刀刃每次命中附加 435 毒素傷害（原本是 2 秒內 80）",
"The Barbarian loses the flat ×2.1 damage bonus in Terror": "野蠻人取消恐懼層固定 ×2.1 傷害加成",
"The Druid loses the flat ×2 damage bonus in Terror, and Fire Claws, the Druid's summons and spells hit harder instead": "德魯伊取消恐懼層固定 ×2 傷害加成，改成強化焰爪、召喚物和法術",
"The Druid's Fire Claws adds 254 fire damage to each hit at level 5, more with fire skills (was half the hit's damage)": "德魯伊的焰爪 5 級時每次命中附加 254 火焰傷害，火焰技能可再提高（原本是該次傷害的一半）",
"The Necromancer loses the flat ×3.2 damage bonus in Terror, and Corpse Explosion, Revive and Energy are stronger instead": "死靈法師取消恐懼層固定 ×3.2 傷害加成，改成強化屍體爆炸、重生和精力",
"The Paladin loses the flat ×1.7 damage bonus in Terror, and Might, Fanaticism, Zeal and Charge are stronger instead": "聖騎士取消恐懼層固定 ×1.7 傷害加成，改成強化力量、狂熱、白熱和突擊",
"The Sorceress loses the flat ×1.9 damage bonus in Terror, and Hydra, Frozen Orb and Fire Bolt are stronger instead": "女巫取消恐懼層固定 ×1.9 傷害加成，改成強化九頭火蛇、冰封球和火彈",
"The Necromancer's skeletons, mages and revived monsters can rise from any corpse in the skill's range, not just nearby ones": "死靈法師的骷髏、骷髏法師和重生的怪物，可以從技能範圍內任何屍體起身，不限附近的屍體",
"Monster auras like Holy Shock and Conviction no longer grow past their Diablo II maximum from Terror 12 on": "神聖衝擊、信念等怪物光環，從恐懼 12 層起不再超過暗黑破壞神 II 的上限",
"Monsters killed by the Necromancer's Corpse Explosion leave corpses you can explode again": "被死靈法師屍體爆炸炸死的怪物會留下屍體，可以再炸一次",
"Corpse Explosion's Chain option instantly explodes one of the corpses its blast leaves, for half damage": "屍體爆炸的連鎖選項會立刻引爆爆炸留下的一具屍體，傷害減半",
"Wells left behind in the last area no longer turn into black squares": "留在上一個區域的水井不會再變成黑色方塊",
"The Druid's Cyclone Armor absorbs up to 536 fire, cold and lightning damage at level 5 (was +42% resistance)": "德魯伊的颶風裝甲 5 級時最多吸收 536 火焰、冰寒和閃電傷害（原本是抗性 +42%）",
"The Paladin's Vengeance and Rusthandle hit the biggest pack in range, bosses first, instead of the nearest monster": "聖騎士的復仇和腐蝕的把手會打範圍內最大的一群怪，頭目優先，不再是最近的怪物",
"The Paladin's Vengeance and Rusthandle now add your weapon's damage to their fire, cold and lightning": "聖騎士的復仇和腐蝕的把手，現在會在火焰、冰寒和閃電之外加上武器傷害",
"Iron Skin, Shout, Defiance, Holy Shield and Werebear raise Defense, which the character screen now shows in its own box": "鐵布衫、大叫、反抗、神聖之盾和熊人變化會提高防禦，角色畫面現在有獨立的防禦欄位",
"Damage Reduced now comes only from items, Charsi, Fade and Bone Armor, up to 50%, and no longer from Battle Orders or Werewolf": "傷害減少現在只來自物品、恰西、能量消解和白骨裝甲，上限 50%，戰鬥體制和狼人變化不再提供",
"Deep Terror tiers no longer make monsters' aim better than Diablo II's toughest, and they still raise monsters' life and damage": "深層恐懼層的怪物命中不再超過暗黑破壞神 II 的最高值，但生命和傷害仍會繼續提高",
"Resurrecting clears monster missiles already in the air, so they can't kill your hero again right away": "復活時會清掉空中的怪物飛彈，英雄不會馬上又被打死",
"Resurrecting removes poison, curses, chill and freeze from your hero": "復活時會解除英雄身上的中毒、詛咒、冰冷和冰凍",
"Conviction from items reaches 2.5 times farther, on your hero or your mercenary": "物品給的信念範圍變成 2.5 倍，英雄和傭兵身上都一樣",
"Holy Fire, Holy Freeze and Holy Shock from items reach as far as the Paladin's own auras": "物品給的聖火、神聖冰凍和神聖衝擊，範圍和聖騎士自己的光環一樣遠",
"Monsters attack whatever is closest, your hero, your mercenary or your summons, Valkyrie and Decoy included": "怪物會攻擊最近的目標，不論是英雄、傭兵或召喚物，也包括女武神和誘餌",
"Summons' life now grows with the Terror tier, about 3 times at tier 30 and 12 times at tier 100": "召喚物的生命會隨恐懼層成長，第 30 層約 3 倍，第 100 層約 12 倍",
"The Necromancer's Bone Armor absorbs all physical damage until it breaks (was half of each hit)": "死靈法師的白骨裝甲會吸收全部物理傷害直到破裂（原本是每次攻擊的一半）",
"The Assassin's Shadow Warrior and Shadow Master have 55,819 life at level 99 (was 455 and 700)": "刺客的影子戰士和支配影子在 99 級時生命 55,819（原本是 455 和 700）",
"The Assassin's Fade makes curses on your hero last 82% less at level 5": "刺客的能量消解 5 級時，英雄身上的詛咒持續時間減少 82%",
"The Amazon's Inner Sight reaches 1.7 times farther": "亞馬遜的內視範圍變成 1.7 倍",
"The Paladin's Conviction reaches 2.2 times farther at level 5": "聖騎士的信念 5 級時範圍變成 2.2 倍",
"The Paladin's Holy Fire, Holy Freeze and Holy Shock reach 3 to 3.8 times farther at level 5": "聖騎士的聖火、神聖冰凍和神聖衝擊 5 級時範圍變成 3～3.8 倍",
"The Rogue Scout mercenary's Inner Sight reaches 1.7 times farther": "羅格斥候傭兵的內視範圍變成 1.7 倍",
"The Desert Mercenary's Holy Freeze reaches as far as the Paladin's": "沙漠傭兵的神聖冰凍範圍和聖騎士一樣遠",
"The Barbarian's Increased Stamina regenerates 1% of max life per second at level 5 (was +61% max life)": "野蠻人的增加耐力 5 級時每秒回復生命上限的 1%（原本是生命上限 +61%）",
"Max Stamina and Heal Stamina on items and charms now regenerate life (they did nothing before)": "物品和護符上的耐力上限與耐力恢復，現在會回復生命（以前沒有效果）",
"Terror tiers 4 to 39 pay less Magic Find and gold than before, since the pay now climbs all the way up": "恐懼第 4～39 層的尋獲魔法物品和金幣比以前少，因為獎勵現在會一路往上加",
"The Assassin's Claw Mastery gives +111% damage at level 5 (was +60%)": "刺客的支配利爪 5 級時傷害 +111%（原本 +60%）",
"The Druid's Twister gets +100% damage from each of Tornado and Hurricane (was +5%)": "德魯伊的鎌鼬風從龍捲風和暴風各得到 +100% 傷害（原本 +5%）",
"The Druid's Firestorm gets +230% damage from Molten Boulder (was +12%)": "德魯伊的火風暴從熔漿巨岩得到 +230% 傷害（原本 +12%）",
"+8 skills from items make the Druid's Fissure 3.9 times stronger (was 1.8 times)": "物品的 +8 技能讓德魯伊的火山爆強化為 3.9 倍（原本 1.8 倍）",
"The Necromancer's Iron Maiden returns 675% of melee damage at level 8 (was 275%)": "死靈法師的攻擊反噬 8 級時反彈 675% 近戰傷害（原本 275%）",
"The Necromancer's Iron Golem returns 435% of melee damage (was 200%)": "死靈法師的鋼鐵石魔反彈 435% 近戰傷害（原本 200%）",
"The Necromancer's revived monsters hit as hard as that monster would hit your hero": "死靈法師重生的怪物，傷害和那隻怪物打英雄時一樣高",
"The Necromancer's Teeth gets +150% damage from each of Bone Spear and Bone Spirit (was +8%)": "死靈法師的牙從骨矛和白骨之魂各得到 +150% 傷害（原本 +8%）",
"The Paladin's Sacrifice attacks every 0.6 seconds, as fast as a normal attack (was once a second at level 8)": "聖騎士的犧牲每 0.6 秒攻擊一次，和普通攻擊一樣快（原本 8 級時每秒一次）",
"The Sorceress's Fire Bolt gets +160% damage from each of Fire Ball and Meteor (was +8%)": "女巫的火彈從火球和隕石各得到 +160% 傷害（原本 +8%）",
"Zakarum priests and Fallen Shamans also target your nearest summon or mercenary": "撒卡蘭姆祭司和沉淪魔巫師也會瞄準最近的召喚物或傭兵",
"+12 skills from items make the finishing blow of Claws of Thunder and Blades of Ice 2 to 3 times stronger": "物品的 +12 技能讓雷電爪和寒冰刃的終結一擊強化為 2～3 倍",
"Phoenix Strike's meteor, lightning and ice charges each get only their own synergy, +100% to +130%": "鳳凰攻擊的隕石、閃電和寒冰充能，各自只吃自己的協同效果，+100%～+130%",
"The Druid's wolves, Grizzly, ravens and vines gain 1% damage per point of Energy, like the Druid's spells": "德魯伊的狼、灰熊、烏鴉和藤蔓每點精力 +1% 傷害，和德魯伊的法術一樣",
"The Sorceress's Hydra recharges in 1.6 seconds at level 8 (was 4.2)": "女巫的九頭火蛇 8 級時冷卻 1.6 秒（原本 4.2 秒）",
"Each of the Sorceress's Hydras lasts 10 seconds at every level, so up to six can be out at once": "女巫的九頭火蛇每一級都持續 10 秒，最多可以同時放六隻",
"The Sorceress's Frozen Orb shards fly nearly twice as far": "女巫的冰封球碎片飛行距離接近 2 倍",
"The Necromancer's golems hit 1.4 to 1.8 times harder in Hell and Terror": "死靈法師的石魔在地獄和恐懼層傷害變成 1.4～1.8 倍",
"The Necromancer's Corpse Explosion deals 70% to 120% of the corpse's life (was 36 + 46%)": "死靈法師的屍體爆炸造成屍體生命 70%～120% 的傷害（原本 36 + 46%）",
"The Necromancer's Corpse Explosion reaches 2.5 times farther": "死靈法師的屍體爆炸範圍變成 2.5 倍",
"The Necromancer's Corpse Explosion deals less from corpses of monsters above your hero's level": "怪物等級高於英雄時，死靈法師用牠的屍體爆炸傷害較低",
"The Sorceress's Energy Shield still uses at most 400 mana per hit": "女巫的能量護盾每次攻擊最多仍只消耗 400 法力",
"The Paladin's Might gives +230% damage at level 5 (was +115%)": "聖騎士的力量 5 級時傷害 +230%（原本 +115%）",
"The Paladin's Fanaticism gives +373% damage at level 5 (was +187%)": "聖騎士的狂熱 5 級時傷害 +373%（原本 +187%）",
"The Paladin's Concentration gives +345% damage at level 5 (was +173%)": "聖騎士的專注 5 級時傷害 +345%（原本 +173%）",
"The Paladin's Zeal deals 44 damage at level 8 (was 29)": "聖騎士的白熱 8 級時傷害 44（原本 29）",
"The Paladin's Zeal hits 4 times at level 1 and 5 times from level 2 (was 2, rising to 6)": "聖騎士的白熱 1 級打 4 次，2 級起打 5 次（原本 2 次，最多到 6 次）",
"The Paladin's Zeal gets +15% damage per level of Sacrifice (was +6%)": "聖騎士的白熱每級犧牲 +15% 傷害（原本 +6%）",
"The Paladin's Charge deals 152 damage at level 8 (was 83)": "聖騎士的突擊 8 級時傷害 152（原本 83）",
"The Paladin's Herald of Zakarum deals 110 damage (was 60)": "聖騎士的撒卡蘭姆使者傷害 110（原本 60）",
"The Paladin's Holy Bolt gets +500% from Fist of the Heavens and +63% per level of Blessed Hammer (was +25%)": "聖騎士的聖光彈從天堂之拳得到 +500%，每級祝福之鎚 +63%（原本 +25%）",
"The Paladin's Vengeance adds 41 fire, 41 cold and 41 lightning damage at level 8 (was 29 each)": "聖騎士的復仇 8 級時附加火焰、冰寒、閃電傷害各 41（原本各 29）",
"The Necromancer's revived monsters have their full life and damage again (was half)": "死靈法師重生的怪物恢復完整的生命和傷害（原本一半）",
"The Assassin's Fists of Fire, Claws of Thunder and Blades of Ice hit 1.5 times harder, like Phoenix Strike": "刺客的焰拳、雷電爪和寒冰刃傷害變成 1.5 倍，和鳳凰攻擊一樣",
"The Assassin's Shadow Warrior and Shadow Master gain 1% damage per point of Energy, like the Assassin's spells": "刺客的影子戰士和支配影子每點精力 +1% 傷害，和刺客的法術一樣",
"The Ladder refuses runs from heroes holding more of Charsi's ranks than play could pay for, every ware counted": "英雄持有的恰西等級超過正常遊玩賺得到的總量時（每一項都算），天梯會拒收該局",
"Each point of the Necromancer's Energy adds 1.5% spell damage (was 1%)": "死靈法師每點精力 +1.5% 法術傷害（原本 1%）",
"Each point of Energy still adds 1% spell damage for every other class": "其他職業每點精力仍是 +1% 法術傷害",
"The Assassin's traps now fire all their shots, instead of a new trap often replacing one that had barely fired": "刺客的陷阱現在會射完所有發射次數，不再常常沒射幾發就被新陷阱取代",
"Laying Death Sentry no longer removes the Assassin's Lightning Sentries": "放亡者守衛不會再移除刺客的雷光守衛",
"The Necromancer's Poison Nova reaches a third farther": "死靈法師的劇毒新星範圍增加三分之一",
"Monsters immune to chill and freeze in Diablo II, like Hell's wraiths, are immune here too once you extract the Monsters part again": "在暗黑破壞神 II 免疫冰冷和冰凍的怪物（例如地獄的幽靈），這裡也會免疫，要重新解壓縮怪物部分才生效",
"Chill slows monsters by half on Normal and by a third or a quarter in Hell, as in Diablo II": "冰冷在普通難度讓怪物減速一半，地獄難度是三分之一或四分之一，和暗黑破壞神 II 一樣",
"Spirit of Barbs from item charges, like Wisp Projector's, returns 110% of melee damage to the attacker only": "物品充能的棘靈（例如鬼火投射者）只把 110% 近戰傷害反彈給攻擊者",
"The Necromancer's Iron Maiden no longer gets stronger from Energy or magic damage on gear": "死靈法師的攻擊反噬不再因精力或裝備上的魔法傷害變強",
"Heroes restarted from level 99 wear their golden glow round the campfire too": "從 99 級重新開始的英雄，在營火旁也會帶著金色光芒",
"Runewords land with Diablo II's rune drop sound": "符文之語掉落時會發出暗黑破壞神 II 的符文掉落音效",
"Braziers and torches light the floor around them, and shrines light up as you use them": "火盆和火把會照亮周圍的地面，神殿使用時也會亮起來",
"Unique monsters carry a light around them, and so do a few others like Fallen Shamans": "獨特怪物身上會帶著光，沉淪魔巫師等少數怪物也是",
"Each area has its own light, darker in Act IV's City of the Damned and in dungeons like the Catacombs, as in Diablo II": "每個區域都有自己的光線，第四幕的苦痛之城和地下墓穴等地城比較暗，和暗黑破壞神 II 一樣",
"Rain falls over Act I and Act III and snow over Act V, in storms that come and go as in Diablo II": "第一幕和第三幕會下雨、第五幕會下雪，風暴來來去去，和暗黑破壞神 II 一樣",
"Rain is heard as it falls, louder as a storm builds": "下雨時聽得到雨聲，風暴越大聲音越大",
"VIDEO OPTIONS has a WEATHER switch that turns the rain and snow off": "影像選項新增「天氣」開關，可以關掉雨雪",
"The wilds of Acts I, II and V lie on one ground with Diablo II's own puddles, tree stands, stones and dunes": "第一、二、五幕的野外鋪上同一片地面，有暗黑破壞神 II 原本的水窪、樹叢、石頭和沙丘",
"Diablo II's dirt paths wind across Act I's wilds and the Secret Cow Level, joining the camps and cottages": "暗黑破壞神 II 的泥土小徑穿過第一幕野外和秘密母牛關，連接營地和小屋",
"The outdoors turn through Diablo II's day and night, a white day, a mauve dusk, a blue night and an orange dawn, 25 minutes a day": "戶外有暗黑破壞神 II 的日夜變化：白天、淡紫色黃昏、藍色夜晚、橘色黎明，一天 25 分鐘",
"Nights are lighter than Diablo II's so a horde stays in sight, and dungeons, Act IV and the camp keep their own light": "夜晚比暗黑破壞神 II 亮一些，才看得清怪物群；地城、第四幕和營地維持各自的光線",
"Worldstone Shards stand out in a crowded fight under a beam of silver light, with Diablo II's gleam twinkling on them": "世界之石碎片在混戰中也很顯眼：上方有銀色光柱，還有暗黑破壞神 II 的閃光",
"Ctrl-click a stat's + to spend 5 stat points at once, or press X on it with a controller": "Ctrl＋點擊屬性的 ＋ 一次加 5 點，手把則是在上面按 X",
"Monsters, missiles and objects are heard from where they are, from the left or the right and fainter farther off, as in Diablo II": "怪物、飛行物和物件的聲音會從實際位置傳來，分左右、越遠越小聲，和暗黑破壞神 II 一樣",
"Monsters call out now and then as they start to walk, and swarms hum as they come near, as in Diablo II": "怪物開始走動時偶爾會叫，蟲群靠近時會發出嗡嗡聲，和暗黑破壞神 II 一樣",
"Braziers and torches crackle as you pass them": "經過火盆和火把時會聽到劈啪聲",
"A Fallen screams as it flees": "沉淪魔逃跑時會尖叫",
"Each area plays its own Diablo II music, from the Catacombs and the Tomb to Kurast and the Worldstone Keep": "每個區域播放自己的暗黑破壞神 II 音樂，從地下墓穴、古墓到庫拉斯特和世界之石要塞",
"The outdoors sound of night from dusk to dawn, with Diablo II's crickets and howls": "戶外從黃昏到黎明都是夜晚的聲音，有暗黑破壞神 II 的蟋蟀聲和嚎叫聲",
"Your hero's footsteps are heard as in Diablo II, on dirt, stone, sand, snow or wood, heavier for the Barbarian": "英雄的腳步聲和暗黑破壞神 II 一樣，泥土、石頭、沙地、雪地、木頭各有不同，野蠻人比較重",
"Monsters flash with the fire, cold or lightning of the blow that makes them flinch or kills them, as in Diablo II": "怪物被打退或打死時，會閃現該次攻擊的火焰、冰寒或閃電效果，和暗黑破壞神 II 一樣",
"Monsters standing in a fire burn, and a Crushing Blow or thorns shows on the monster it strikes": "站在火裡的怪物會燃燒，壓碎性打擊和反傷會顯示在被打中的怪物身上",
"Monsters bleed as they're hit, some green, and skeletons and ghosts not at all, as in Diablo II": "怪物被打中會流血，有些是綠色的，骷髏和鬼魂則不會流血，和暗黑破壞神 II 一樣",
"One in five monsters that die chilled or frozen shatters into ice, and Cold Enchanted uniques always do, as in Diablo II": "受冰寒或被冰凍而死的怪物有五分之一會碎成冰塊，冰寒強化的獨特怪物一定會，和暗黑破壞神 II 一樣",
"A shattered monster's corpse is still there for corpse skills, though no body is drawn": "碎掉的怪物不會畫出屍體，但屍體還在，屍體類技能仍然可用",
"Undead Fetishes fall to bones, Doom Knights burn, frog demons burst and vultures shed feathers as they die, as in Diablo II": "不死妖人會散成白骨、末日騎士會燃燒、蛙魔會爆開、禿鷹會掉羽毛，和暗黑破壞神 II 一樣",
"A Fetish Shaman leaves a Fetish's body as it dies, as in Diablo II": "妖人薩滿死亡時會留下妖人的屍體，和暗黑破壞神 II 一樣",
"A pack's drops lie apart round the bodies, never on scenery or each other, so their names no longer pile up, as in Diablo II": "一群怪物的掉落物會散落在屍體周圍，不會落在場景物件上或互相重疊，名稱不再疊在一起，和暗黑破壞神 II 一樣",
"Diablo II's camps, cottages and ruins stand with their own torches, fires, chests and urns, and Act V's swinging heads": "暗黑破壞神 II 的營地、小屋和廢墟都有了自己的火把、火堆、寶箱和甕，第五幕還有搖晃的頭顱",
"The Cairn Stones rise on Diablo II's own stone circle": "石塊陣立在暗黑破壞神 II 原本的石圈上",
"Cocoons and evil urns let four small spiders loose as you kick them open, as in Diablo II": "蟲繭和邪惡之甕踢開時會跑出四隻小蜘蛛，和暗黑破壞神 II 一樣",
"Chests lie on the field in Acts I, II, III and V at Diablo II's chances, kicked open as you walk into them": "第一、二、三、五幕的場地上會有寶箱，機率和暗黑破壞神 II 相同，走過去就會踢開",
"Wells stand in Act III's jungle and Kurast and Act V's wilds, giving back half your life and mana and curing poison and curses": "第三幕叢林、庫拉斯特和第五幕野外有水井，可回復一半生命和法力，並解除中毒和詛咒",
"Hurricane is drawn as in Diablo II, a thick storm of wind, rocks and branches circling the Druid": "暴風的畫面和暗黑破壞神 II 一樣，是環繞德魯伊的濃密風暴，夾帶石頭和樹枝",
"Trees and rocks in the wilds block the way as in Diablo II, with a way always left through the Dark Wood": "野外的樹木和岩石會擋路，和暗黑破壞神 II 一樣，黑暗森林一定留有通道",
"A runeword never drops with only its runes' lines, and one that did gets its own back": "符文之語不會再掉落只有符文屬性的版本，已經掉到的也會補回自身屬性",
"Bows, crossbows and Phase Blades are never ethereal, as in Diablo II": "弓、十字弓和相位劍不會是無形的，和暗黑破壞神 II 一樣",
"Closing the blacksmith's window by the act's red portal no longer sends you through it a second later": "在該幕紅色傳送門旁關閉鐵匠視窗，不會再過一秒就被傳送過去",
"In a big fight the nearest monsters and your own sounds keep their voices, where the newest sounds used to be cut whatever they were": "大混戰時最近的怪物和你自己的聲音會保留，以前是不管什麼聲音，最新的都會被切掉",
"A run's page on the website shows your hero's Charsi ranks of Magic Find and Gold Find": "網站上的單局頁面會顯示英雄在恰西升級的尋獲魔法物品和尋獲金幣等級",
"Attract's Lure raises its totem by a pack a little way off, no longer by the monster beside you, so it draws the pack away from you": "吸引的引誘改成把圖騰立在稍遠的怪物群旁，不再立在你身邊的怪物旁，所以能把怪物群從你身邊引開",
"Right-clicking a charm into the Charms window opens it, so the charm no longer seems to vanish": "右鍵把護符放進護符欄時會打開護符欄，護符不會再像是憑空消失",
"A Barbarian with a dagger or a javelin in either hand is drawn holding it, not a hand axe, once the next update re-extracts your game files": "野蠻人任一手拿匕首或標槍時，會畫出手上實際的武器而不是手斧（要等下次更新重新解壓縮遊戲檔案）",
"Turning down Skill Effects in Video Options no longer fades your hero's golden glow": "調低影像選項的技能特效，不會再讓英雄的金色光芒變淡",
"A run you start on Nightmare or Hell with your kept hero starts its clock at 0:00, not at all the time your hero has played": "保留的英雄開新的惡夢或地獄局時，計時從 0:00 開始，不再是英雄的總遊玩時間",
"In the camp and in an item's preview, the character screen and skill hovers count gear's auras, Dream's Holy Shock among them": "在營地和物品預覽中，角色畫面和技能說明框會計入裝備的光環，包括夢境的神聖衝擊",
"Flat fire, cold and lightning damage on charms and gear no longer lowers a critical-strike build's damage": "護符和裝備上的固定火焰、冰寒、閃電傷害，不會再降低致命攻擊流派的傷害",
"Kashya's and Akara's menus stay on the screen, so a long hire list no longer hides the Rogue Scout past its top": "卡夏和阿卡拉的選單會留在畫面內，傭兵清單很長時不會再把羅格斥候擋在最上方外面",
"The loot filter's BETTER ONLY picks up a second copy whose chance to cast or charges roll a higher skill level": "物品過濾的「只撿更好的」會撿起觸發機率或充能骰出較高技能等級的第二件",
"The skill icons at the top left no longer run under the timer when your mercenary and several summons are out": "傭兵和多個召喚物同時出現時，左上角的技能圖示不會再跑到計時器底下",
"Starting Nightmare anew after Akara's re-draft no longer asks you to fill Hell's 10 skill and 10 passive slots": "阿卡拉重新抽選後重新開始惡夢，不會再要求填滿地獄的 10 個技能格和 10 個被動格",
"With 8 skill slots, your slots beside the skill tree no longer cover its bottom-left skills and their modifiers": "有 8 個技能格時，技能樹旁的技能格不會再蓋住左下方的技能和改造",
"Hardcore Terror runs in gear a fallen hero found no longer show as unverified on the ladder": "穿著已死英雄找到的裝備跑專家模式恐懼層，在天梯上不會再顯示未驗證",
"Reduces all Vendor Prices on worn gear, Edge's among it, now takes its share off Charsi's and Gheed's prices": "裝備上的「所有商人價格降低」（包括邊緣）現在會實際降低恰西和基德的價格",
"On the Ladder's Find tab, the count under the players found or a player's runs matches the rows on the page": "天梯的搜尋分頁上，找到的玩家或玩家單局數量，和頁面上的列數一致",
"Each heal a High Council member gives himself is half the last, so one who runs off to heal can always be worn down": "最高議會成員每次治療自己的量是上一次的一半，所以跑去治療的一定磨得死",
"Gear's +N to a skill gives N levels on every class, so Trang-Oul's +18 Fire Ball is level 18 instead of 1": "裝備的 ＋N 技能對所有職業都給 N 級，所以 Trang-Oul 的 ＋18 火球是 18 級而不是 1 級",
"Items for any class no longer hold your own class's skill to +3, so Dragonscale's +10 Hydra gives a Sorceress 10": "全職業物品不會再把你本職業的技能限制在 ＋3，所以龍鱗的 ＋10 九頭火蛇對女巫就是 10 級",
"Spells your gear casts grow with their levels as your own do, faster for casters than for a Barbarian, Amazon or Paladin": "裝備施放的法術會跟你自己的法術一樣隨等級成長，施法職業比野蠻人、亞馬遜、聖騎士成長快",
"Attack skills from gear, like Chaos's Whirlwind, hit as hard as the same levels learned, no longer harder": "來自裝備的攻擊技能（例如混沌的炫風）傷害和同等級學會的技能相同，不再比較高",
"The leaderboard no longer refuses a run whose Magic Find or Gold Find reads higher than your Charsi ranks and gear explain": "尋獲魔法物品或尋獲金幣高於恰西等級和裝備可解釋的數值時，排行榜不再拒收該局",
"The stash's Collect button sits in one gold frame instead of over three empty sockets": "儲物箱的「收集」按鈕改放在一個金色框內，不再蓋著三個空鑲孔",
"A run on the Ladder shows its mercenary's Charsi wares rounded, as the game does, not with long decimals": "天梯上的單局會把傭兵的恰西升級四捨五入顯示，和遊戲一樣，不再有一長串小數",
"Knockback stops what a monster was doing as it pushes it back": "擊退會在推開怪物時打斷牠正在做的動作",
"Knockback pushes monsters farther sideways and less far up or down the screen": "擊退把怪物往左右推得比較遠，往畫面上下推得比較近",
"Knockback pushes small monsters like Fallen on every hit, and never moves Izual, the Ancients or nests, as in Diablo II": "擊退每次命中都會推動沉淪魔等小型怪物，且絕不會推動衣卒爾、遠古之靈和巢穴，和暗黑破壞神 II 一樣",
"A Hardcore run's start that can't reach the leaderboard is sent again once it can, and no longer leaves the hero unranked": "專家模式單局開局時若連不上排行榜，連得上時會重新送出，英雄不再因此沒有排名",
"A resistance's hover on the character screen shows how far it goes past its cap, and your Absorb of that element": "角色畫面上抗性的說明框會顯示超過上限多少，以及你對該元素的吸收",
"Once your Terror tiers are open, the waypoint's Act V tab has a Training Ground, with dummies that never attack, to measure your damage": "開啟恐懼層後，傳送點的第五幕分頁會有訓練場，裡面有不會攻擊的假人，可以測傷害",
"In the Training Ground, Larzuk sets 1 to 50 dummies or a boss, changes what they're immune to, and opens your stash to try other gear": "訓練場裡拉蘇克可以設定 1～50 個假人或一隻頭目、更改免疫類型，還能開儲物箱試別的裝備",
"Gear's +N to one of your class's skills gives you that skill even before you learn it, as in Diablo II": "裝備的 ＋N 本職業技能，即使還沒學也能使用該技能，和暗黑破壞神 II 一樣",
"The skills your gear casts, like Enigma's Teleport, show in a row under your passives, and a right-click rests one as it rests your own": "裝備施放的技能（例如謎團的傳送）顯示在被動技能下方一排，右鍵可以暫停，跟自己的技能一樣",
"The desktop app no longer stops at the Items step while setting up some Diablo II copies": "電腦版在設定某些暗黑破壞神 II 版本時，不會再卡在物品步驟",
"Akara's re-draft offers +1 to your skill trees again, drawn like any other card, so the tree levels your hero had can go back on the trees": "阿卡拉重新抽選又會出現技能樹 ＋1，抽法跟其他卡片一樣，英雄原本的技能樹等級可以加回去",
"A Barbarian's Increased Stamina adds its share of a Vitality pick right away, so his life no longer changes after a reload": "野蠻人的增加耐力會立刻計入選體力時的加成，生命不會再因重新載入而改變",
"A run the leaderboard refuses is sent again for two days, so a wrong refusal no longer loses it": "被排行榜拒收的單局兩天內會重新送出，誤判不會再害你失去紀錄",
"Monsters your mercenary kills drop items with your Magic Find added to his, as in Diablo II, and favour your class's items": "傭兵擊殺的怪物掉落時，會把你的尋獲魔法物品機率加到他的上面，和暗黑破壞神 II 一樣，也偏向掉你職業的物品",
"Wolfhowl and other gear with Werewolf or Werebear keep your hero in that form, where it turned back at once": "狼嚎和其他附狼人或熊人變化的裝備會讓英雄維持變身，以前會立刻變回來",
"Teleport from gear (Enigma's) blinks every hero but the Sorceress into the pack nearby, no longer away from the monsters she fights": "裝備的傳送（謎團）讓女巫以外的英雄閃現到附近的怪物群裡，不再躲開正在戰鬥的怪物",
"On a phone, the stash's Collect button now asks first, and only a second tap puts the items in": "手機上儲物箱的「收集」按鈕會先詢問，再按一次才放入物品",
"After Collect, the Uniques tab opens on what went in, so the shared tabs it emptied no longer look like lost items": "收集之後，獨特物品分頁會打開到放入的物品，被清空的共用分頁不會再看起來像是物品不見",
"Standing still anywhere in a red portal takes your hero through after a second, where only its very foot counted": "站在紅色傳送門範圍內任何位置不動，一秒後就會傳送，以前只有門腳才算",
"Walking into a red portal and out again tells you once how to go through": "走進紅色傳送門又走出來時，會提示一次怎麼通過",
"With a weapon in each hand, the other weapon's leech, crushing blow and deadly strike no longer add to every blow, as in Diablo II": "雙持武器時，另一把武器的吸血、壓碎性打擊和致命攻擊不會再加到每一擊，和暗黑破壞神 II 一樣",
"With a weapon in each hand, each weapon's attack speed counts at half": "雙持武器時，每把武器的攻擊速度算一半",
"Whirlwind with a weapon in each hand now strikes with both on every hit": "雙持武器使用炫風時，現在每次命中都會用兩把武器攻擊",
"On a phone a Stash or Inventory button moves the item in your hand across in one tap, with the stash open": "手機上開著儲物箱時，按「儲物箱」或「物品欄」按鈕一下就能把手上的物品移過去",
"Until you first take the camp's waypoint, it pulses under an arrow, and a trail on the ground and an arrow at the screen's edge lead to it": "第一次使用營地傳送點之前，它會在箭頭下閃爍，地上的軌跡和畫面邊緣的箭頭會帶你過去",
"The stash's Collect button puts every unique, set item and runeword your collection lacks into the Uniques tab, from any tab": "儲物箱的「收集」按鈕會把任何分頁裡收藏還缺的獨特物品、套裝物品和符文之語放進獨特物品分頁",
"A kept card on the Uniques tab offers a Swap when a better roll of it lies in your inventory or stash, both boxes side by side": "獨特物品分頁保留的卡片，在物品欄或儲物箱有更好的同款時會出現「交換」，兩個說明框並排比較",
"Typing unique, set, runeword, rare or magic in the stash's searches finds the items of that rarity": "在儲物箱搜尋打 unique、set、runeword、rare 或 magic，可以找到該稀有度的物品",
"The skill tree marks each skill you banished with a red X, and its hover says it's banished for this hero": "技能樹會用紅色 X 標記你放逐的技能，說明框也會註明這個英雄已放逐",
"The wiki has a Runewords page with every runeword, its runes and properties, and how runewords drop": "維基新增符文之語頁面，列出所有符文之語、符文、屬性和掉落方式",
"The desktop app finishes extracting Diablo II: Resurrected on a PC short of memory, where its extractor ran out and stopped part way": "電腦版在記憶體不足的電腦上也能解壓縮完暗黑破壞神 II 獄火重生，以前解壓縮程式會用光記憶體停在半路",
"The desktop app says so when you pick a Diablo III or IV folder, and asks for Diablo II's, where it stopped with the wrong advice": "選到暗黑破壞神 III 或 IV 資料夾時，電腦版會明說並要求選暗黑破壞神 II 的，以前會給錯誤建議後停止",
"The desktop app says plainly when Diablo II: Resurrected is still updating in Battle.net, or the drive it's on can't be read": "暗黑破壞神 II 獄火重生還在 Battle.net 更新或所在硬碟讀不到時，電腦版會直接說明",
"The desktop app extracts a Diablo II: Resurrected install whose Battle.net files don't name their build, where setup stopped at once": "Battle.net 檔案沒有標明版本的暗黑破壞神 II 獄火重生，電腦版也能解壓縮，以前設定會立刻停止",
"Under a Holy Freeze with Cannot Be Frozen your hero no longer turns blue, and the slow's hover says it's an aura's, not a freeze": "在神聖冰凍下有「無法冰凍」時，英雄不會再變藍，緩速的說明框也會註明是光環而不是冰凍",
"The AUTO STATS hint in Options says it spends 3 points on damage for each on Vitality": "選項裡自動配點的提示會說明：每配 1 點體力，配 3 點到傷害",
"On a phone the sound and music play with its ring/silent switch on silent, as a video's do": "手機的響鈴／靜音開關切到靜音時，音效和音樂仍會播放，和影片一樣",
"Sound the phone stops mid-run comes back on your next tap, key or controller press, where a phone stayed silent entering Tristram": "手機在遊戲中停掉的聲音，下次點擊、按鍵或按手把時會恢復，以前進崔斯特姆時手機會一直沒聲音",
"Level-up cards fade in and take no tap, click or press for their first 1.2 seconds, so a tap meant for the run no longer picks one": "升級卡片會淡入，前 1.2 秒不接受點擊或按鍵，原本要點遊戲的動作不會再誤選卡片",
"A Terror tier's boss no longer waits forever on a last wave whose monsters can't come in": "恐懼層的頭目不會再一直等最後一波進不來的怪物",
"In a Terror tier's last wave a monster that stays out of sight, running or keeping its distance, is brought into view": "恐懼層最後一波中，躲在畫面外（逃跑或保持距離）的怪物會被帶進視野",
"Without your graphics card in use, Options says to turn on graphics acceleration in Chrome or Edge, where it said to update the driver": "沒有使用顯示卡時，選項會提示開啟 Chrome 或 Edge 的圖形加速，以前是叫你更新驅動程式",
"Every piece of a set drops by its own rarity, so Tal Rasha's armor no longer comes far more often than her helm, belt or orb": "套裝的每一件都按自己的稀有度掉落，塔拉夏的盔甲不會再比頭盔、腰帶、法球常見得多",
"On a small phone held upright the skill tree stands above your skill slots, so its third tab and a Book of Skill work again": "小手機直立時，技能樹會在技能格上方，第三個分頁和技能之書又能用了",
"On a phone held sideways the LOOT FILTER's lines stand in two columns, larger to tap and clear of the control panel": "手機橫向時，物品過濾分成兩欄，字比較大好點，也不會被控制面板擋住",
"On a phone held upright a Terror tier's affixes step aside while an elite's bar shows, so the bar no longer covers the field": "手機直立時，菁英血條出現期間恐懼層詞綴會讓開，血條不再蓋住場地",
"A red portal takes you only when you click or tap it, use the pad's interact, or stand in it a second as its ring fills": "紅色傳送門只有在你點擊、按手把互動，或站在裡面一秒讓光圈填滿時才會傳送",
"On a slow connection an act's monster and hero art no longer fails to load as the act starts, and what fails is asked for again": "連線慢時，該幕開始時怪物和英雄圖不會再載入失敗，失敗的也會重新要求",
"Monsters whose art can't load come as stand-ins rather than not at all, so the waves and the act boss still arrive": "圖載不到的怪物會用替代圖出現，不會直接消失，波次和該幕頭目還是會來",
"A second copy's box now says \"You have kept one already\", so it's never mistaken for the kept one headed \"In your collection\"": "第二件的說明框現在寫「你已經保留一件了」，不會跟標題為「在你的收藏中」的保留品搞混",
"On a phone a tap on the belt drinks while another finger steers, where it drank only with the hero standing still": "手機上點腰帶喝藥時，另一隻手指可以繼續操控移動，以前英雄要站著不動才喝得到",
"Enchant from gear such as Lava Gout adds its fire to any class's attacks, and Venom from gear its poison, as in Diablo II": "熔岩角羊等裝備的強化會把火焰加到任何職業的攻擊，裝備的毒牙也會加毒，和暗黑破壞神 II 一樣",
"A mercenary's Medusa's Gaze curses the monster that strikes him with Lower Resist, and his gear's Enchant and Venom go on his blows": "傭兵的梅杜莎的凝視會用降低抵抗詛咒打他的怪物，他裝備的強化和毒牙也會加到他的攻擊",
"An evolution you banish in Akara's re-draft stays banished until your next Baal, so no chest evolves that skill anyway": "在阿卡拉重新抽選時放逐的進化技能，到下次擊敗巴爾前都維持放逐，寶箱不會照樣進化",
"Dragon Flight's kick explodes in Dragon Tail's fire around what it kicks, where it dealt far less than the Dragon Tail it evolves from": "飛龍在天的踢擊會在目標周圍爆出神龍擺尾的火焰，以前傷害遠低於進化前的神龍擺尾",
"The HUD's labels and the menus' words come back with a display that went black, where they stayed blank": "螢幕黑掉又恢復後，介面標籤和選單文字也會回來，以前會留白",
"A run whose display came back after going black waits for your tap to go on, where it sat paused with no menu or no sound": "螢幕黑掉又恢復的單局會等你點一下才繼續，以前會停在沒有選單或沒有聲音的暫停狀態",
"While the display is lost, the black screen says it's waiting for the display to come back": "螢幕斷線期間，黑畫面會顯示正在等待畫面恢復",
"A runeword drops on any base it fits, each as likely, where a few strong bases took most of them and early Hell had one or two for each": "符文之語會以相同機率掉在任何符合的底材上，以前少數強力底材佔了大部分，地獄前期每種只有一兩個",
"High runewords such as Enigma and Call to Arms drop only on bases near the best of their kind, and low ones on any base": "謎團、戰爭召喚等高階符文之語只掉在同類最好的底材附近，低階的可以掉在任何底材上",
"A mercenary's Treachery casts Fade on him, as in Diablo II, and his gear's Bone Armor, Cyclone Armor and Slow Missiles work too": "傭兵的背信會對他施放能量消解，和暗黑破壞神 II 一樣，他裝備的白骨裝甲、颶風裝甲和慢速箭也有效",
"The Refilling Shrine fills your mana as well as your life, as in Diablo II, so Energy Shield's mana too": "補充神殿會補滿法力和生命，和暗黑破壞神 II 一樣，能量護盾的法力也會補",
"If the browser can't start the sound at your first key or click, the next one tries again, where it stayed silent until a reload": "如果瀏覽器在第一次按鍵或點擊時無法開始播放聲音，下一次會再試，以前要重新載入才有聲音",
"Runewords drop again when the game runs on Diablo II: Resurrected's files, and the Uniques tab pictures each on its own base": "以暗黑破壞神 II 獄火重生檔案執行時，符文之語又會掉落了，獨特物品分頁會把每個畫在各自的底材上",
"Fortitude gives 1 to 1.5 Life per level and Leaf 2 Defense per level, where both gave none, and ones you've found are fixed": "剛毅每級給 1～1.5 生命、葉子每級給 2 防禦，以前都沒有效果，已經找到的也會修正",
"Griswold's Valor absorbs cold damage based on your level instead of none": "格瑞斯華爾德的勇氣現在依你的等級吸收冰寒傷害，以前沒有效果",
"Items in the stash and shops outside the camp read their per-level lines at your hero's level instead of level 1": "營地外儲物箱和商店裡的物品，每級加成的屬性會用英雄的等級顯示，不再用 1 級",
"A caster's skill learned again beside its own evolutions gains their synergies, as Poison Dagger from Poison Explosion and Poison Nova": "施法職業再次學會已進化的原技能時，也會獲得它們的協同加成，例如淬毒匕首從毒爆和劇毒新星獲得加成",
"Famine's Enhanced Damage range reads 320-370% with stat ranges shown, where it left out Ohm's 50%": "顯示數值範圍時，飢荒的增強傷害範圍顯示為 320-370%，以前少算 Ohm 的 50%",
"In a run the inventory's gold box counts the run's gold too, so picked up gold and the LOOT FILTER's sales show there at once": "遊戲中物品欄的金幣框也會計入本局金幣，撿到的金幣和物品過濾的賣出會立刻顯示",
"A Full Rejuvenation Potion restores all your mana as well as your life, as in Diablo II, so Energy Shield's mana too": "全面回復藥水會回滿法力和生命，和暗黑破壞神 II 一樣，能量護盾的法力也會補",
"Runewords drop already made, all 78 of Diablo II's, with no runes, sockets or white bases to gather": "符文之語掉落時已經做好，暗黑破壞神 II 全部 78 個都有，不用收集符文、鑲孔或白色底材",
"Each comes on a base of its kind with the sockets its runes need, the good bases most often, and now and then ethereal": "每個都會掉在適合的底材上並有符文需要的鑲孔，好底材最常見，偶爾會是無形的",
"The top runes' runewords, Enigma, Grief and Infinity among them, drop only in Terror": "高階符文的符文之語（包括謎團、悔恨、無限）只在恐懼層掉落",
"The stash's Uniques tab keeps one of each runeword on a rune stone of its own": "儲物箱的獨特物品分頁每種符文之語保留一個，放在專屬的符文石上",
"Gear that gives another class's skill, like Enigma's Teleport, now casts it at a level your +all skills raise": "給其他職業技能的裝備（例如謎團的傳送），現在施放等級會受 ＋全部技能提高",
"Meteor falls on the thickest packs in reach instead of on random monsters": "隕石會落在範圍內最密集的怪物群上，不再隨機落在怪物身上",
"Phoenix Strike's blow and its meteor, lightning and ice deal 50% more damage": "鳳凰攻擊的打擊及其隕石、閃電、冰寒傷害提高 50%",
"Find a player by name on the website's Ladder and in the camp's book, on its new Find tab": "可以在網站天梯和營地的書裡，用新的搜尋分頁依名稱找玩家",
"Energy Shield never spends more than 400 mana on one hit, so it keeps taking its share of the hardest hits in Hell and Terror": "能量護盾單次攻擊最多消耗 400 法力，所以在地獄和恐懼層的重擊下仍會持續承擔它的比例",
"Bone Armor's bone takes half of every hit of any element until it breaks, and grows back whole in 30 seconds": "白骨裝甲的骨頭會承受任何元素每次攻擊的一半，直到破裂，30 秒後完整長回來",
"Sorceresses, Necromancers, Druids and Assassins get half of their Faster Cast Rate past the cap, so skills recharge up to 60% faster": "女巫、死靈法師、德魯伊和刺客的快速施法率超過上限後還有一半效果，技能最多可加快 60% 充能",
"Charsi's Faster Cast Rate ranks raise that limit too, to 67% faster with all five": "恰西的快速施法率等級也會提高這個上限，五級全滿可加快 67%",
"The character screen's Faster Cast Rate hover says where half begins and where your cast rate stops": "角色畫面的快速施法率說明框會顯示從哪裡開始減半，以及施法速度到哪裡為止",
"Items' +skills raise the Sorceress's, Necromancer's, Druid's and Assassin's spells, traps and summons more than before": "物品的 ＋技能對女巫、死靈法師、德魯伊和刺客的法術、陷阱和召喚提升比以前多",
"Lightning deals 25% more damage and Chain Lightning 50% more": "閃電傷害提高 25%，連鎖閃電提高 50%",
"Frozen Orb recharges in 1 second instead of 1.8, as in Diablo II": "冰封球充能時間從 1.8 秒改成 1 秒，和暗黑破壞神 II 一樣",
"Frozen Orb gains three times as much from Ice Bolt": "冰封球從冰彈獲得的加成變成三倍",
"Bone Spear and Bone Spirit gain much more from Teeth, Bone Prison and each other": "骨矛和白骨之魂從牙、骨牢和彼此獲得的加成大幅提高",
"Fury deals 50% more damage": "狂怒傷害提高 50%",
"Blade Fury and Blade Shield deal 50% more damage": "刃之怒和刀刃之盾傷害提高 50%",
"Death Sentry, Charged Bolt Sentry and Wake of Inferno fire more with the Assassin's other traps learned, as in Diablo II": "亡者守衛、電能守衛和復甦獄火學會刺客的其他陷阱後會發射更多次，和暗黑破壞神 II 一樣",
"The Assassin's traps deal 50% more damage": "刺客的陷阱傷害提高 50%",
"The Desert Mercenary's aura now reaches your summons near him too, as in Diablo II": "沙漠傭兵的光環現在也會影響他附近的召喚物，和暗黑破壞神 II 一樣",
"His Defiance hardens your summons, his Prayer heals them and his Thorns strikes back at what hits them": "他的反抗會強化你的召喚物，祈禱會治療牠們，針刺會反擊攻擊牠們的敵人",
"Death Sentry's corpse explosions grow with +skills and synergies, as its lightning does": "亡者守衛的屍爆會隨 ＋技能和協同加成成長，跟它的閃電一樣",
"An evolved skill now counts as its base maxed in the synergies of the Sorceress's, Necromancer's, Druid's and Assassin's skills": "進化後的技能現在算作原技能滿級，計入女巫、死靈法師、德魯伊和刺客技能的協同加成",
"Claws of Thunder and Blades of Ice gain 80% from Phoenix Strike instead of 4%, and Shock Wave 50% from Maul instead of 3%": "雷電爪和寒冰刃從鳳凰攻擊獲得 80% 加成（原本 4%），震波從撞槌獲得 50%（原本 3%）",
"The Assassin's claws and kicks strike a physical-immune monster when the charges they release can hurt it": "刺客的爪擊和踢擊在釋放的充能能傷害物理免疫怪物時，也能打中牠們",
"Dragon Tail's card and character screen count its fire around its target, so it no longer reads below Dragon Claw": "神龍擺尾的卡片和角色畫面會計入目標周圍的火焰，數值不會再低於雙龍爪",
"Critical strikes and Deadly Strike double a hit's physical damage alone, as in Diablo II, not the fire, cold or lightning added to it": "致命攻擊技能和裝備的致命攻擊都只讓物理傷害加倍，不含附加的火焰、冰寒或閃電，和暗黑破壞神 II 一樣",
"Spells of fire, cold, lightning or magic never critically strike, the Druid's fire spells and the Sorceress's Ice Blast included": "火焰、冰寒、閃電或魔法法術絕不會造成致命攻擊，包括德魯伊的火焰法術和女巫的冰風暴",
"The Valkyrie critically strikes only from the Amazon's Critical Strike, not from your items' Deadly Strike or Attack Rating": "女武神的致命攻擊只來自亞馬遜的致命攻擊技能，不來自你物品的致命攻擊或攻擊準確率",
"Super uniques that rise to your level, like Rakanishu, cast their Enchanted bolts, novas and blasts at their own level": "會升到你等級的超級獨特怪物（例如拉卡尼休）施放強化彈、新星和爆炸時使用自己的等級",
"Lightning Enchanted monsters let out charged bolts only when hit, as in Diablo II, not from fire or poison on the ground under them": "閃電強化的怪物只有被打中才會放出充能彈，和暗黑破壞神 II 一樣，地上的火或毒不會觸發",
"Elite mods no longer add resistance to an element the monster is already immune to, so -% to Enemy Resistance can break it": "菁英詞綴不會再對怪物已免疫的元素增加抗性，所以 -% 敵人抗性可以破除",
"The site has a wiki that explains the whole game, from every skill at every level to items, quests, mercenaries and the Terror tiers": "網站新增維基，說明整個遊戲，從每個技能每個等級到物品、任務、傭兵和恐懼層",
"The site's header is simpler, with one gold Play button, Wiki, Ladder and FAQ as plain links, and a menu on phones": "網站頁首簡化：一個金色的開始遊戲按鈕，維基、天梯和常見問題改成一般連結，手機上有選單",
"The leaderboards are now called the Ladder, on the website and on the camp's book, and Hardcore's tab of heroes by level is By level": "排行榜現在在網站和營地的書上都叫天梯，專家模式依等級排列的英雄分頁叫「依等級」",
"Dexterity from Lam Esen's Tome now raises your shield's chance to block, as Dexterity from gear does": "蘭姆·艾森之書給的敏捷現在會提高盾牌格擋機率，跟裝備給的敏捷一樣",
"The Amazon's freezes let an act boss stand free a while before freezing him again, as every other class's freezes do": "亞馬遜的冰凍會讓該幕頭目自由一段時間才能再次冰凍，和其他職業相同",
"The leaderboard's messages say in plain words why a hero doesn't rank, and what you can do about it": "排行榜訊息會用白話說明英雄為什麼不列入排名，以及你可以怎麼做",
"The leaderboard and the Ladder page no longer call every hero \"her\"": "排行榜和天梯頁面不再把所有英雄都稱為「她」",
"Holy Freeze no longer slows cold immune monsters, and slows those that resist cold for less, as every other chill does": "神聖冰凍不再緩速免疫冰寒的怪物，對抗冰寒的怪物緩速較少，和其他冰寒效果一樣",
"Gear's +skills now raise Shiver and Chilling Armor's miss chance up to 75%, the Carrion Vine's healing and the Solar Creeper's speed-up": "裝備的 ＋技能現在會提高碎冰甲和寒冰裝甲的落空機率（最高 75%）、食屍藤的治療和太陽藤的加速",
"The Amazon's spear thrusts and the Barbarian's blows aim past monsters immune to them, and Taunt calls out physical immunes too": "亞馬遜的矛刺和野蠻人的攻擊會略過對其免疫的怪物，嘲弄也會叫物理免疫的怪物過來",
"Vengeance's skill tree hover says Salvation raises its fire, cold and lightning damage, not fire alone": "復仇的技能樹說明框會註明救助提高的是火焰、冰寒和閃電傷害，不只是火焰",
"The Paladin's Resist auras keep the maximum resistance from his own levels when an item's or the mercenary's is as high or higher": "聖騎士的抗性光環在物品或傭兵的最大抗性相同或更高時，仍保留自身等級的最大抗性",
"Weapon Block's card no longer says it needs claws, as it blocks with any weapon": "武器格檔的卡片不再說需要爪，因為任何武器都能格檔",
"Burst of Speed, Increased Speed and Vigor say how far gear's +skills take them, up to +70%, +50% and +53% movement speed": "刺客的加速、野蠻人的加速和精力會說明裝備的 ＋技能最多能提高多少，移動速度分別達 ＋70%、＋50%、＋53%",
"The stats panel's Damage Taken hover names Thick Hide, the one skill that lowers it, where it named Energy Shield": "屬性面板受到的傷害說明框改為列出唯一能降低它的厚皮，以前寫的是能量護盾",
"The level-up's banish hint says a banished card stays out until the run ends or goes on past Baal": "升級時的放逐提示會說明，被放逐的卡片在本局結束或打完巴爾繼續前都不會出現",
"The critical strike hover says weapon skills and a few other skills can critically strike, not only spells": "致命攻擊的說明框會寫武器技能和少數其他技能也能造成致命攻擊，不只是法術",
"The High Council engages you as in Diablo II, nearly always once you're close, and heals nothing while it fights you": "最高議會和暗黑破壞神 II 一樣，幾乎只要你靠近就會開打，戰鬥中不會治療",
"The Smith has a quarter of the life he had, sized like Blood Raven and Griswold as was always meant": "鐵匠生命變成原本的四分之一，大小比照血鴉和格瑞斯華爾德，這才是原本的設計",
"A Desert Mercenary with Prayer heals you from the day you hire him, where he had no aura until level 41": "帶祈禱的沙漠傭兵從雇用當天就會治療你，以前要到 41 級才有光環",
"In Korean, Charsi's Dexterity rank and Buy Back's seller lines are translated, and the Cow Level and Charsi's ranks have one name each": "韓文版翻譯了恰西的敏捷等級和回購的賣家說明，母牛關和恰西等級也統一成一個名稱",
"The desktop app now tells you when a balance change is out, and that your Terror runs stop counting until you restart to update": "電腦版會通知你平衡性更新已推出，也會提醒重開更新前恐懼層的紀錄不會計入",
"Installing the Windows app by hand while something holds its files open no longer leaves your runs refused by the leaderboards": "在有東西佔用檔案時手動安裝 Windows 版，不會再害你的單局被排行榜拒收",
"Zakarum priests heal only Zealots and other priests, never themselves or other monsters, as in Diablo II": "撒卡蘭姆祭司只會治療狂熱者和其他祭司，不會治療自己或其他怪物，和暗黑破壞神 II 一樣",
"In Terror tiers the monsters left no longer jump back up while a wave comes in": "恐懼層中，波次進來時剩下的怪物不會再跳回來",
"Fire Arrow, Berserk, Vengeance and other elemental attacks now roll gear's Crushing Blow, Life Stolen and chance to cast on striking": "火焰箭、狂戰士、復仇和其他元素攻擊現在會判定裝備的壓碎性打擊、吸血和打擊時觸發機率",
"Monsters caged by Bone Prison, act bosses aside, no longer shoot or cast from inside it": "被骨牢關住的怪物（該幕頭目除外）不會再從裡面射擊或施法",
"Akara, the waypoint, the death screen, the FAQ and the wiki no longer call every hero \"her\"": "阿卡拉、傳送點、死亡畫面、常見問題和維基不再把所有英雄都稱為「她」",
"A Hardcore hero is no longer unranked as played offline when the leaderboard server was too busy to answer": "排行榜伺服器太忙沒回應時，專家模式英雄不會再被當成離線遊玩而沒有排名"
};
// 一個詞一格（瀏覽器沒有 Intl.Segmenter 就一字一格），讓遊戲照寬度斷行；標點黏前一格。每格尾端的 \u200b 讓 d2zhPaint 認得出遊戲加的空白，原文的空白用 \u00a0 保留。
function d2zhNewsUnits(zh) {
const parts = typeof Intl.Segmenter === 'function' ? Array.from(new Intl.Segmenter('zh-Hant', { granularity: 'word' }).segment(zh), s => s.segment) : Array.from(zh);
const units = [];
let open = '', ascii = false, space = false;
for (const s of parts) {
const last = units.length - 1;
if (!s.trim()) { if (last >= 0) units[last] += '\u00a0'; space = true; continue; }
const isAscii = /^[\x21-\x7e]+$/.test(s);
if (/^[，。、；：）」]+$/.test(s) && last >= 0) units[last] += s;
else if (/^[（「＋]+$/.test(s)) open += s;
else if (isAscii && ascii && !space && !open && last >= 0) units[last] += s;
else { units.push(open + s); open = ''; }
ascii = isAscii; space = false;
}
return units.join('\u0001').replace(/\u6697\u0001\u9ed1\u0001\u7834\u58de\u0001\u795e/g, '\u6697\u9ed1\u7834\u58de\u795e').split('\u0001').map(u => u + '\u200b');
}
function d2zhNewsInstall() {
const rawSplit = String.prototype.split;
String.prototype.split = function (sep, limit) {
if (sep === ' ' && this.length > 15 && d2zhLang() === 'zh-Hant') {
const zh = D2ZH_CHANGELOG[this];
if (typeof zh === 'string') return d2zhNewsUnits(zh);
}
return rawSplit.call(this, sep, limit);
};
}
function d2zhInstallHook() {
d2zhNewsInstall();
D2ZH_CTX.putImageData = function (img, dx, dy) {
const r = D2ZH_PUT.apply(this, arguments);
const c = this.canvas;
if (!d2zhBusy && arguments.length === 3 && dx === 0 && dy === 0 && d2zhIsText(c)
&& img.width === c.width && img.height === c.height) {
try { d2zhCapture(c, img, c.textContent || ''); } catch (e) { console.warn('[D2 中文]', e); }
}
return r;
};
D2ZH_CTX.drawImage = function (img) {
if (!d2zhBusy && img instanceof HTMLCanvasElement && img.classList.contains('d2-text')) {
try {
const st = D2ZH_STATE.get(img) || (d2zhIsText(img) ? d2zhAdopt(img) : null);
if (st && st.lang !== d2zhLang()) d2zhPaint(img, st);
if (st) d2edOnTextDraw(this, img, arguments, st.src === 'PREVIOUS MENU' || st.src === "이전 메뉴");
} catch (e) { console.warn('[D2 中文]', e); }
}
return D2ZH_DRAW.apply(this, arguments);
};
window.addEventListener('d2-language-changed', () => {
for (const c of document.querySelectorAll('canvas.d2-text')) {
const st = D2ZH_STATE.get(c);
if (st && st.lang !== d2zhLang()) d2zhPaint(c, st);
}
d2zhMergeAll(document.body);
});
new MutationObserver(records => {
for (const r of records) for (const node of r.addedNodes) d2zhMergeAll(node);
}).observe(document.body, { subtree: true, childList: true });
for (const c of document.querySelectorAll('canvas.d2-text')) if (d2zhIsText(c)) d2zhAdopt(c);
}
const D2ED = { player: null, extras: null, world: null, added: new WeakMap(), changed: new WeakMap(), kept: new WeakSet(), menuAt: 0, otherAt: 0, menuRect: null, button: null, panel: null, frame: 0 };
const D2ED_SAVE_KEY = 'd2-survivors/save/v1';
const D2ED_ELEMENTS = ['fire', 'cold', 'lightning', 'poison', 'magic'];
// 各職業的初始屬性（keepSave-*.js 的 Pr）：角色畫面顯示的是這個加 build.attributes
const D2ED_ATTR_BASE = {
amazon: { strength: 20, dexterity: 25, vitality: 20, energy: 15 }, assassin: { strength: 20, dexterity: 20, vitality: 20, energy: 25 },
barbarian: { strength: 30, dexterity: 20, vitality: 25, energy: 10 }, druid: { strength: 15, dexterity: 20, vitality: 25, energy: 20 },
necromancer: { strength: 15, dexterity: 25, vitality: 15, energy: 25 }, paladin: { strength: 25, dexterity: 20, vitality: 25, energy: 15 },
sorceress: { strength: 10, dexterity: 25, vitality: 10, energy: 35 },
};
const D2ED_LIFE_PER_VIT = { amazon: 6, assassin: 6, barbarian: 8, druid: 4, necromancer: 4, paladin: 6, sorceress: 4 };
// 恰西的永久升級（build 20261025.1）：[存檔鍵, 名稱, 上限, 可否超過上限]
// 可超過上限的項目，超過的級數存在 extraRanks（1～999），第 n 級超額只有 0.2/√n 級的效果（遊戲的遞減公式）。
// 不能超過的（重抽、略過、放逐、復活）遊戲讀檔時會砍回上限。
const D2ED_EXTRA_MAX = 999;
const D2ED_RANKS = [
['strength', '力量（每級起始 +5）', 10, true], ['dexterity', '敏捷（每級起始 +5）', 10, true],
['vitality', '體力（每級起始 +5）', 10, true], ['energy', '精力（每級起始 +5）', 10, true],
['goldFind', '尋獲金幣（每級 +10%）', 10, true], ['magicFind', '尋獲魔法物品（每級 +10%）', 10, true],
['damageReduced', '傷害減少（每級 2%）', 5, true], ['replenish', '補充生命（每級每秒 +0.25）', 5, true],
['frw', '跑步／行走速度（每級 +5%）', 5, true], ['fcr', '施法速度（每級 +4%）', 5, true],
['sellPrice', '出售價格（每級 +10%）', 5, true], ['potions', '藥水治療量（每級 +10%）', 5, true],
['experience', '經驗值獲得（每級 +2%）', 5, true],
['firePierce', '火焰穿透（每級敵人抗性 -2%）', 5, true], ['coldPierce', '冰寒穿透（每級敵人抗性 -2%）', 5, true],
['lightningPierce', '閃電穿透（每級敵人抗性 -2%）', 5, true], ['poisonPierce', '毒素穿透（每級敵人抗性 -2%）', 5, true],
['physicalPierce', '物理穿透（每級敵人抗性 -2%）', 5, true],
['mercLife', '傭兵生命（每級 +6%）', 5, true], ['mercResist', '傭兵抗性（每級 +5）', 5, true],
['mercDefense', '傭兵防禦（每級 +10%）', 5, true],
['rerolls', '重抽次數', 3, false], ['skips', '略過次數', 3, false], ['banishes', '放逐次數', 3, false], ['resurrect', '復活次數', 2, false],
];
// 超過上限 n 級實際等於幾級（遊戲公式：第 k 級超額 = 0.2/√k 級）
function d2edExtraWorth(n) {
let s = 0;
for (let k = 1; k <= n; k++) s += 0.2 / Math.sqrt(k);
return s;
}
const D2ED_FIELDS = [
['life', '目前生命', '', 0], ['maxLife', '生命上限', '', 0], ['regen', '每秒恢復生命', '', 1],
['speed', '移動速度', '一開始是 150', 0], ['pickupRadius', '拾取範圍', '一開始是 70', 0],
['might', '傷害倍率', '所有技能，1 = 原本', 2], ['weaponDamage', '攻擊傷害倍率', '武器技能，1 = 原本', 2],
['castSpeed', '技能冷卻倍率', '越小越快，0.5 = 冷卻減半', 2], ['damageTaken', '受到傷害倍率', '0 = 無敵', 2],
['crit', '致命一擊機率', '0.25 = 25%', 2], ['allSkills', '所有技能等級', '+N 級', 0],
['magicFind', '尋獲魔法物品', '%', 0], ['goldGain', '金幣獲得倍率', '1 = 原本', 2],
['mastery.physical', '物理加成', '力量每 5 點 +0.05', 2], ['mastery.fire', '火焰加成', '', 2],
['mastery.cold', '冰寒加成', '', 2], ['mastery.lightning', '閃電加成', '', 2],
['mastery.poison', '毒素加成', '', 2], ['mastery.magic', '魔法加成', '', 2],
];
function d2edInRun() {
return !!D2ED.player && !document.body.classList.contains('no-run');
}
function d2edGet(path) {
const p = D2ED.player;
if (path === 'crit') return D2ED.extras ? D2ED.extras.crit : NaN;
const [a, b] = path.split('.');
return b ? p[a][b] : p[a];
}
function d2edSet(path, v) {
const p = D2ED.player;
if (path === 'crit') { if (D2ED.extras) D2ED.extras.crit = v; return; }
const [a, b] = path.split('.');
if (b) p[a][b] = v; else p[a] = v;
}
// 這一局的 build（角色畫面的屬性點、升級紀錄 history 都在這裡）。遊戲沒有公開它，但每一格都會讀 build.unspent
// （沒有未分配點數時這個欄位不存在），所以在 Object.prototype 放一個不列舉的 unspent getter 認出它；寫入時改成物件自己的欄位。
function d2edBuildInstall() {
if (Object.prototype.hasOwnProperty('unspent')) return;
Object.defineProperty(Object.prototype, 'unspent', {
configurable: true, enumerable: false,
get() { if (this && this.attributes && this.banished instanceof Set && this.kit) D2ED.build = this; return undefined; },
set(v) { Object.defineProperty(this, 'unspent', { value: v, writable: true, enumerable: true, configurable: true }); },
});
}
// ====== 打洞（拉蘇克的精華）失敗原因 ======
// 遊戲打洞失敗只說「這件物品已經有凹槽了」或「這件物品不能打凹槽」，玩家不知道為什麼；把精華拖到物品上只會交換位置，什麼提示都沒有。
// 遊戲判斷能不能打洞時（itemArt-*.js 的 zMe）會讀物品的 sockets，物品沒有自己的 sockets 欄位時會查到 Object.prototype，
// 在那裡放不列舉的 getter 記下剛被檢查的物品（同一個工作內有效），接著畫拒絕訊息時就能說出原因。
// 拖曳時遊戲 socketWith 讀游標物件的 use（右鍵／長按使用時才有這個欄位），讀不到就是拖的，這時跳提示。
const D2SOCK = { item: null, fresh: false, hintAt: 0, toast: null, last: null };
const D2SOCK_ESSENCE = "Larzuk's Essence";
function d2sockIsItem(o) {
return !!o && typeof o.base === 'string' && typeof o.rarity === 'string' && typeof o.type === 'string';
}
function d2sockInstall() {
if (Object.prototype.hasOwnProperty('sockets') || Object.prototype.hasOwnProperty('use')) return;
const own = (o, k, v) => Object.defineProperty(o, k, { value: v, writable: true, enumerable: true, configurable: true });
Object.defineProperty(Object.prototype, 'sockets', {
configurable: true, enumerable: false,
get() {
if (d2sockIsItem(this)) {
D2SOCK.item = this;
if (!D2SOCK.fresh) { D2SOCK.fresh = true; queueMicrotask(() => { D2SOCK.fresh = false; D2SOCK.item = null; }); }
}
return undefined;
},
set(v) { own(this, 'sockets', v); },
});
Object.defineProperty(Object.prototype, 'use', {
configurable: true, enumerable: false,
get() {
const it = this && this.from && this.item;
if (it && it.type === 'essence' && it.base === D2SOCK_ESSENCE) d2sockDragHint();
return undefined;
},
set(v) { own(this, 'use', v); },
});
}
function d2sockDragHint() {
d2sockToast('拉蘇克的精華要按右鍵（手機長按）使用，再點要打洞的物品。拖到物品上只會交換位置，不會打洞');
}
// 畫面下方的提示框（遊戲角色畫面那一行很窄，詳細原因放這裡）
function d2sockToast(msg) {
const now = Date.now();
if (now - D2SOCK.hintAt < 1500 && D2SOCK.toast && D2SOCK.toast.textContent === msg) return;
D2SOCK.hintAt = now;
let t = D2SOCK.toast;
if (!t || !t.isConnected) {
t = D2SOCK.toast = document.createElement('div');
t.setAttribute('role', 'status');
t.style.cssText = `position: fixed; left: 50%; bottom: 18%; transform: translateX(-50%); z-index: 2147483000; pointer-events: none; max-width: min(92vw, 520px); padding: 8px 14px; background: rgba(0,0,0,.85); border: 1px solid #6b5a35; color: #e8dfcc; font: 15px/1.5 ${D2ZH_FONT}; text-align: center; transition: opacity .3s;`;
document.body.append(t);
}
t.textContent = msg;
t.style.opacity = '1';
clearTimeout(t._h);
t._h = setTimeout(() => { t.style.opacity = '0'; }, 4500);
}
// 遊戲的拒絕訊息 → 角色畫面那一行的短句（不是打洞的訊息回傳 null），同時在畫面下方提示詳細原因
// 可打洞的部位（20261105.3 實測遊戲判斷）：武器（投擲武器除外）、頭盔／頭環、身體護甲、盾牌
const D2SOCK_WHICH = '只有武器、頭盔、身體護甲和盾牌可以打洞；戒指、護身符、腰帶、手套、靴子、箭筒、護符、珠寶和投擲武器都不行';
function d2sockReason(source) {
const s = source.trim();
const already = s === 'That item has sockets already';
if (!already && s !== "That item can't hold sockets") return null;
const it = D2SOCK.fresh ? D2SOCK.item : null;
// 同一則訊息之後還會再被翻譯（屬性、重畫）：沒有剛檢查的物品時，3.5 秒內（遊戲顯示這行的時間）沿用第一次的結果
const last = D2SOCK.last;
if (!it && last && last.source === s && Date.now() - last.at < 3500) return last.short;
let short, long;
if (already) {
if (it && it.rarity === 'runeword') { short = '符文之語本身有洞'; long = '符文之語本身就有凹槽，不能再用拉蘇克的精華打洞'; }
else if (it && (it.rarity === 'unique' || it.rarity === 'set')) {
const kind = it.rarity === 'set' ? '套裝' : '獨特';
short = `這件${kind}本身有洞`; long = `這件${kind}物品本身就帶凹槽（例如符文大師、歲月之冠），不能再打洞`;
} else { short = '這件已經有洞了'; long = '這件物品已經有凹槽了（打過洞或掉落時就有洞），每件物品只能打一次洞'; }
} else if (it) {
const base = window.D2I18N ? window.D2I18N.translate(it.base) : it.base;
short = `${base}不能打洞`; long = `${base}不能打洞。${D2SOCK_WHICH}`;
} else { short = '這件不能打洞'; long = `任務物品不能打洞。${D2SOCK_WHICH}`; }
D2SOCK.last = { source: s, short, at: Date.now() };
try { d2sockToast(long); } catch (_) { /* 沒有畫面（例如檢查腳本）就只回傳短句 */ }
return short;
}
window.__d2zhSocketText = d2sockReason;
// ====== 箭筒（20261105.3 新增）：弓／十字弓不合時的提示 ======
// 遊戲規則：箭矢（Arrows）只能配弓（含亞馬遜弓），弩矢（Bolts）只能配十字弓。不合時遊戲會把另一件默默卸回物品欄，玩家以為壞掉。
// 存檔物件拿法：遊戲常讀 save.cursor（游標上沒東西時不存在，會查到 Object.prototype），在那裡認出有 equippedByClass 的物件。
// 每 0.4 秒比對裝備：換武器時箭筒被卸回物品欄、或裝上箭筒時武器被卸回物品欄，就跳提示。
const D2QUIV = { save: null, snap: null };
function d2quivInstall() {
if (Object.prototype.hasOwnProperty('cursor')) return;
Object.defineProperty(Object.prototype, 'cursor', {
configurable: true, enumerable: false,
get() { if (this && this.equippedByClass && this.inventoryByClass && D2QUIV.save !== this) { D2QUIV.save = this; D2QUIV.snap = null; } return undefined; },
set(v) { Object.defineProperty(this, 'cursor', { value: v, writable: true, enumerable: true, configurable: true }); },
});
setInterval(d2quivCheck, 400);
}
function d2quivState(save) {
const out = {};
for (const [cls, eq] of Object.entries(save.equippedByClass || {})) {
if (!eq) continue;
const w = eq.weapon, q = eq.shield && eq.shield.type === 'quiver' ? eq.shield : null;
out[cls] = { w: w && w.id, wb: w && w.base, q: q && q.id, qb: q && q.base };
}
return out;
}
function d2quivCheck() {
const save = D2QUIV.save;
if (!save) return;
let cur;
try { cur = d2quivState(save); } catch (_) { return; }
const prev = D2QUIV.snap;
D2QUIV.snap = cur;
if (!prev) return;
const tr = s => (window.D2I18N ? window.D2I18N.translate(s) : s);
for (const cls of Object.keys(cur)) {
const a = prev[cls], b = cur[cls];
if (!a) continue;
const inv = (save.inventoryByClass || {})[cls] || [];
// 被遊戲卸下的那件會放回物品欄，或拿在游標上（玩家手上同時只能拿一件，所以不會是自己拿下來的）
const held = save.cursor && save.cursor.item;
const where = id => !id ? '' : held && held.id === id ? '，現在拿在游標上' : inv.some(i => i && i.id === id) ? '，放回物品欄' : '';
const rule = qb => qb === 'Bolts' ? `${tr('Bolts')}只能配十字弓使用（弓要配${tr('Arrows')}）` : `${tr('Arrows')}只能配弓使用（十字弓要配${tr('Bolts')}）`;
if (a.q && !b.q && b.w && b.w !== a.w && where(a.q)) { d2sockToast(`${rule(a.qb)}，換上${tr(b.wb)}後已自動卸下${where(a.q)}`); return; }
if (b.q && b.q !== a.q && a.w && !b.w && where(a.w)) { d2sockToast(`${rule(b.qb)}，原本的${tr(a.wb)}已卸下${where(a.w)}`); return; }
}
}
function d2edBuildOf(p) {
const b = D2ED.build;
return b && b.kit && b.kit.id === p.cls && b.attributes && typeof b.attributes.strength === 'number' ? b : null;
}
// 跟遊戲升級時選屬性卡一樣：history 記一筆「attribute:屬性」、build.attributes +5，存檔驗證和繼續遊戲都認得。
// 減少時拿掉最後一筆同屬性的紀錄；沒有可拿的就不減（回傳 false）。
function d2edAttribute(attr, n) {
const p = D2ED.player;
const build = d2edBuildOf(p);
if (build) {
const h = build.history || (build.history = []);
if (n > 0) for (let i = 0; i < n; i++) { h.push('attribute:' + attr); build.attributes[attr] += 5; }
else for (let i = 0; i < -n; i++) {
const at = h.lastIndexOf('attribute:' + attr);
if (at < 0) { n = -i; break; }
h.splice(at, 1);
build.attributes[attr] -= 5;
}
if (!n) return false;
}
// 跟遊戲的屬性效果一樣（build 20261029：力量加 strDamage、敏捷加 dexDamage、精力加 energyDamage）
if (attr === 'strength') {
p.mastery.physical += 0.05 * n;
p.strDamage = (p.strDamage || 0) + 0.05 * n;
} else if (attr === 'dexterity') {
if (D2ED.extras) D2ED.extras.crit += 0.01 * n;
p.dexDamage = (p.dexDamage || 0) + 0.03 * n;
p.dexterity = (p.dexterity || 0) + 5 * n;
} else if (attr === 'vitality') {
const life = (D2ED_LIFE_PER_VIT[p.cls] || 6) * 5 * n;
p.maxLife = Math.max(1, p.maxLife + life);
p.life = Math.max(1, Math.min(p.maxLife, p.life + life));
} else if (attr === 'energy') {
for (const el of D2ED_ELEMENTS) p.mastery[el] += 0.05 * n;
p.energyDamage = (p.energyDamage || 0) + 0.05 * n;
}
const added = D2ED.added.get(p) || {};
added[attr] = (added[attr] || 0) + 5 * n;
D2ED.added.set(p, added);
return true;
}
// ====== 記住本局人物的修改 ======
// 本局人物的修改只改遊戲記憶體裡的人物，換一局、儲存並離開再繼續、重新開遊戲都會回到原本的數值。
// 勾選「記住」後，修改過的欄位（絕對值）和屬性加減點數存在 localStorage，之後每抓到新的人物就自動套用一次。
const D2ED_KEEP_KEY = 'd2zh:runKeep';
const D2ED_KEEP_SKIP = new Set(['life']);   // 目前生命每局不同，不記
function d2edKeepRead() {
try { const v = JSON.parse(localStorage.getItem(D2ED_KEEP_KEY)); return v && typeof v === 'object' ? { fields: v.fields || {}, attrs: v.attrs || {} } : null; } catch (_) { return null; }
}
function d2edKeepWrite(keep) {
try { keep ? localStorage.setItem(D2ED_KEEP_KEY, JSON.stringify(keep)) : localStorage.removeItem(D2ED_KEEP_KEY); } catch (e) { alert('無法儲存設定：' + e); }
}
// 具名的修改組合：[{ name, fields, attrs }]，格式跟「記住」一樣，最多 D2ED_PRESET_MAX 筆
const D2ED_PRESET_KEY = 'd2zh:runPresets';
const D2ED_PRESET_MAX = 20;
function d2edPresetsRead() {
try {
const v = JSON.parse(localStorage.getItem(D2ED_PRESET_KEY));
return Array.isArray(v) ? v.filter(x => x && typeof x.name === 'string').map(x => ({ name: x.name, fields: x.fields || {}, attrs: x.attrs || {} })) : [];
} catch (_) { return []; }
}
function d2edPresetsWrite(list) {
try { localStorage.setItem(D2ED_PRESET_KEY, JSON.stringify(list)); return true; } catch (e) { alert('無法儲存組合：' + e); return false; }
}
// 把組合套到目前人物：欄位直接設成組合的值，屬性加減到組合記的點數（跟目前書籤加的點數比差多少就加減多少）
function d2edPresetApply(p, preset) {
for (const [path] of D2ED_FIELDS) {
const v = preset.fields[path];
if (typeof v === 'number' && Number.isFinite(v)) { d2edSet(path, v); d2edChanged(p)[path] = v; }
}
if (typeof preset.fields.maxLife === 'number') p.life = Math.min(p.life, p.maxLife);
const added = D2ED.added.get(p) || {};
let short = false;
for (const attr of ['strength', 'dexterity', 'vitality', 'energy']) {
const n = Math.trunc(((preset.attrs[attr] || 0) - (added[attr] || 0)) / 5);
if (n && !d2edAttribute(attr, n)) short = true;
}
const now = D2ED.added.get(p) || {};
if (['strength', 'dexterity', 'vitality', 'energy'].some(a => (now[a] || 0) !== (preset.attrs[a] || 0))) short = true;
return !short;
}
// 這個人物用書籤改過的欄位（path → 值），勾選「記住」時一起存起來
function d2edChanged(p) {
let c = D2ED.changed.get(p);
if (!c) D2ED.changed.set(p, c = {});
return c;
}
function d2edKeepApply(p) {
const keep = d2edKeepRead();
if (!keep || D2ED.player !== p || D2ED.kept.has(p) || !d2edUnlocked() || !d2edInRun()) return;
D2ED.kept.add(p);
for (const [path] of D2ED_FIELDS) {
const v = keep.fields[path];
if (typeof v === 'number' && Number.isFinite(v)) { d2edSet(path, v); d2edChanged(p)[path] = v; }
}
if (typeof keep.fields.maxLife === 'number') p.life = p.maxLife;
// 屬性加減會寫進 build 的 history、跟著存檔走：繼續的那一局（history 已經有紀錄）早就加過了，只記下點數不再加
const build = d2edBuildOf(p);
if (build && (build.history || []).length) D2ED.added.set(p, { ...keep.attrs });
else for (const [attr, points] of Object.entries(keep.attrs)) {
const n = Math.trunc(points / 5);
if (n && ['strength', 'dexterity', 'vitality', 'energy'].includes(attr)) d2edAttribute(attr, n);
}
if (D2ED.panel) d2edRender();
}
// 勾選「記住」時提醒：目前生命不會記
function d2edKeepNotice() {
const card = D2ED.panel && D2ED.panel.querySelector('.d2ed-card');
if (!card || card.querySelector('.d2ed-modal')) return;
const modal = d2edEl('div', { class: 'd2ed-modal' });
modal.append(d2edEl('div', { class: 'd2ed-modal-box', role: 'alertdialog', 'aria-label': '記住修改的說明' },
d2edEl('b', {}, '已記住這些修改'),
d2edEl('ul', {}, d2edEl('li', {}, '「目前生命」不會記，因為每一局都不一樣。')),
d2edEl('div', { class: 'd2ed-row' }, d2edEl('button', { type: 'button', class: 'd2ed-main', onclick: () => modal.remove() }, '知道了'))));
card.append(modal);
}
// 遊戲建立新人物後還會照裝備、等級重算數值，等一下再套用
function d2edKeepSchedule(p) {
if (D2ED.kept.has(p)) return;
setTimeout(() => d2edKeepApply(p), 1500);
}
function d2edReadSave() {
try { return JSON.parse(localStorage.getItem(D2ED_SAVE_KEY) || '{}') || {}; } catch (_) { return {}; }
}
// 重抽、略過、放逐、復活的次數是開局時照恰西等級給的，存在每個職業「進行中那一局」的存檔（heroes.職業.run）裡，
// 繼續那一局時遊戲直接讀回舊次數，在主選單改恰西不會反映（玩家回報：儲存並離開再繼續就改不動，刪存檔才正常）。
// 所以改這四項時，把等級的差值也加到每一局的存檔裡（遊戲上限 99）。
const D2ED_RUN_COUNTS = [['rerolls', 'build'], ['skips', 'build'], ['banishes', 'build'], ['resurrect', 'hero', 'revives']];
function d2edSyncRunCounts(save, oldRanks, newRanks) {
for (const hero of Object.values(save.heroes || {})) {
const run = hero && hero.run;
if (!run || typeof run !== 'object') continue;
for (const [rank, part, field = rank] of D2ED_RUN_COUNTS) {
const box = run[part], diff = (newRanks[rank] || 0) - (oldRanks[rank] || 0);
if (!diff || !box || typeof box[field] !== 'number') continue;
box[field] = Math.max(0, Math.min(99, box[field] + diff));
}
}
}
function d2edWriteSaveAndReload(gold, ranks) {
const write = () => {
const save = d2edReadSave();
save.gold = gold;
save.ranks = save.ranks || {};
d2edSyncRunCounts(save, save.ranks, ranks);
const extra = { ...(save.extraRanks || {}) };
for (const [k, max] of D2ED_RANKS.map(r => [r[0], r[2]])) {
if (!(k in ranks)) continue;
const v = ranks[k];
if (v > 0) save.ranks[k] = Math.min(v, max); else delete save.ranks[k];
if (v > max) extra[k] = v - max; else delete extra[k];
}
if (Object.keys(extra).length) save.extraRanks = extra; else delete save.extraRanks;
try { localStorage.setItem(D2ED_SAVE_KEY, JSON.stringify(save)); } catch (e) { alert('存檔寫入失敗：' + e); }
};
write();
addEventListener('pagehide', write);
location.reload();
}
function d2edOnTextDraw(ctx, img, args, isMenu) {
const now = performance.now();
const box = d2edTextBox(ctx, img, args);
if (box) {
// 記下這一格畫的所有文字位置：按鈕要避開（手機的物品過濾選單很滿，右欄最後的護身符／護符會被蓋住）
if (D2ED.textFrame !== D2ED.frame) { D2ED.textFrame = D2ED.frame; D2ED.textRects = []; D2ED.textHasMenu = false; }
D2ED.textRects.push(box);
if (isMenu) D2ED.textHasMenu = true;
}
if (isMenu) {
if (box) { D2ED.menuAt = now; D2ED.menuRect = box; }
}
else if (now - D2ED.menuAt > 100) D2ED.otherAt = now;
}
function d2edTextBox(ctx, img, args) {
const canvas = ctx.canvas;
if (D2ED.boxCanvas !== canvas || D2ED.boxFrame !== D2ED.frame) { D2ED.boxCanvas = canvas; D2ED.boxFrame = D2ED.frame; D2ED.boxRect = canvas.getBoundingClientRect(); }
const rect = D2ED.boxRect;
if (!rect.width || !canvas.width) return null;   // 畫到畫面外的暫存畫布
const t = ctx.getTransform();
const full = args.length >= 9;
const x = full ? args[5] : args[1], y = full ? args[6] : args[2];
const w = full ? args[7] : args.length >= 5 ? args[3] : img.width, h = full ? args[8] : args.length >= 5 ? args[4] : img.height;
const sx = rect.width / canvas.width, sy = rect.height / canvas.height;
const px = (X, Y) => [rect.left + (t.a * X + t.c * Y + t.e) * sx, rect.top + (t.b * X + t.d * Y + t.f) * sy];
const [l, top] = px(x, y), [r, bottom] = px(x + w, y + h);
return { left: l, top, right: r, bottom, canvas: rect };
}
// 排手把、書籤修改、語言三個按鈕：先試原本的位置（返回上一個選單右邊），蓋到文字就沿畫面右緣、左緣由上往下找空位。
function d2edLayoutButtons(m, h, pad) {
const b = D2ED.button, sw = D2ED.switcher, texts = D2ED.menuTexts || [];
const c = m.canvas, minX = 0, maxX = innerWidth, minY = 0, maxY = innerHeight;   // 整個視窗都能放（選單畫布可能只佔中間）
const size = (e, w0, h0) => ({ e, w: e.offsetWidth || w0, h: e.offsetHeight || h0 });
const hits = (s, list) => list.some(r => s.x < r.right + 4 && s.x + s.w > r.left - 4 && s.y < r.bottom + 4 && s.y + s.h > r.top - 4);
const box = s => ({ left: s.x, right: s.x + s.w, top: s.y, bottom: s.y + s.h });
const fits = spots => spots.every((s, i) => s.x >= minX && s.x + s.w <= maxX && s.y >= minY && s.y + s.h <= maxY && !hits(s, texts) && !hits(s, spots.slice(0, i).map(box)));
const apply = spots => {
for (const s of spots) { s.e.style.left = Math.round(s.x) + 'px'; s.e.style.top = Math.round(s.y) + 'px'; }
D2ED.spots = spots;
};
if (sw) { sw.style.display = 'flex'; sw.style.flexDirection = ''; }
D2ED.swHidden = false;
const edSize = size(b, 140, h), padSize = pad ? size(pad, 90, 30) : null;
let swSize = sw ? size(sw, 180, 32) : null;
const width = Math.max(edSize.w, swSize ? swSize.w : 0);
const roomRight = c.right - m.right - 16;
const left = roomRight >= width ? m.right + 16 : Math.max(c.left + 8, c.right - width - 12);
const top = roomRight >= width ? (m.top + m.bottom) / 2 - h / 2 : m.top - h - 8;
const usual = [{ ...edSize, x: left, y: top }];
if (padSize) usual.push({ ...padSize, x: left, y: top - padSize.h - 8 });
if (swSize) usual.push({ ...swSize, x: Math.max(left, c.right - swSize.w - 12), y: Math.min(top + h + h * 0.9, c.bottom - swSize.h - 4) });
if (fits(usual)) { D2ED.swColumn = false; apply(usual); return; }
// 剛才的位置還空著就不動，免得選項說明一變按鈕就跳來跳去
if (sw && D2ED.swColumn) { sw.style.flexDirection = 'column'; swSize = size(sw, 100, 90); }
const old = (D2ED.spots || []).map(s => ({ ...size(s.e, s.w, s.h), x: s.x, y: s.y }));
if (old.length && old.length === usual.length && fits(old)) { apply(old); return; }
const spots = [];
const find = item => {
for (const x of [maxX - item.w - 8, minX + 8]) {
for (let y = minY + 8; y + item.h <= maxY - 4; y += 4) {
const s = { ...item, x, y };
if (fits([...spots, s])) { spots.push(s); return true; }
}
}
return false;
};
if (!find(edSize)) spots.push({ ...edSize, x: maxX - edSize.w - 8, y: minY + 8 });   // 書籤修改一定要按得到
if (padSize) find(padSize);
if (sw) {
sw.style.flexDirection = '';
swSize = size(sw, 180, 32);
D2ED.swColumn = false;
if (!find(swSize)) {
sw.style.flexDirection = 'column';
D2ED.swColumn = true;
if (!find(size(sw, 100, 90))) { D2ED.swHidden = true; sw.style.display = 'none'; }   // 真的放不下：語言按鈕不擋選項
}
}
apply(spots);
}
function d2edPlaceButton() {
D2ED.frame++;
const b = D2ED.button, sw = D2ED.switcher;
const show = D2ED.menuRect && D2ED.menuAt >= D2ED.otherAt && performance.now() - D2ED.menuAt < 4000 && !D2ED.panel;
b.style.display = show ? 'block' : 'none';
if (sw) sw.style.display = show && !D2ED.swHidden ? 'flex' : 'none';
if (D2ED.textHasMenu) D2ED.menuTexts = D2ED.textRects;   // 有畫到返回上一個選單才算完整的選單畫面
if (show) {
const m = D2ED.menuRect, h = Math.max(30, Math.min(48, (m.bottom - m.top) * 0.9));
b.style.fontSize = Math.round(h * 0.5) + 'px';
b.style.height = Math.round(h) + 'px';
const pad = document.getElementById('d2pad-btn');
const key = [innerWidth, innerHeight, Math.round(h), ...(D2ED.menuTexts || []).map(r => [r.left, r.top, r.right, r.bottom].map(Math.round))].join();
if (key !== D2ED.placeKey || !!pad !== D2ED.placePad) { D2ED.placeKey = key; D2ED.placePad = !!pad; d2edLayoutButtons(m, h, pad); }
}
requestAnimationFrame(d2edPlaceButton);
}
function d2edAdoptSwitcher() {
const sw = document.getElementById('d2-language-switch');
if (!sw) return;
if (!sw.querySelector('.d2ed-lang-label')) {
const label = document.createElement('span');
label.className = 'd2ed-lang-label';
label.textContent = '語言';
sw.prepend(label);
}
sw.style.right = 'auto';
sw.style.display = 'none';
D2ED.switcher = sw;
}
function d2edEl(tag, attrs, ...kids) {
const e = document.createElement(tag);
for (const [k, v] of Object.entries(attrs || {})) {
if (k === 'style') e.style.cssText = v;
else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
else e.setAttribute(k, v);
}
for (const k of kids) if (k != null) e.append(k);
return e;
}
function d2edRound(v, digits) {
return Number.isFinite(v) ? String(Number(v.toFixed(digits))) : '';
}
function d2edToast(msg) {
const t = D2ED.panel && D2ED.panel.querySelector('.d2ed-msg');
if (!t) return;
t.textContent = msg;
clearTimeout(t._h);
t._h = setTimeout(() => { t.textContent = ''; }, 2500);
}
function d2edRunSection() {
const box = d2edEl('section', { class: 'd2ed-sec' }, d2edEditTitle('本局人物'));
if (!d2edInRun()) {
box.append(d2edEl('p', { class: 'd2ed-note' },
D2ED.player ? '目前不在遊戲中。進入遊戲後，按 Esc 暫停 → 選項 → 書籤修改。'
: '還沒抓到人物資料：進入遊戲、打到第一隻怪物後就會出現（書籤要在進遊戲前或遊戲中按過一次）。'));
return box;
}
const p = D2ED.player;
const added = D2ED.added.get(p) || {};
// 勾了「記住」：每次修改後把這個人物目前的修改存起來
const remember = () => {
if (!d2edKeepRead()) return;
const fields = {};
for (const [path, v] of Object.entries(d2edChanged(p))) if (!D2ED_KEEP_SKIP.has(path)) fields[path] = v;
d2edKeepWrite({ fields, attrs: { ...(D2ED.added.get(p) || {}) } });
};
const attrs = d2edEl('div', { class: 'd2ed-attrs' });
const build = d2edBuildOf(p);
for (const [k, name] of [['strength', '力量'], ['dexterity', '敏捷'], ['vitality', '體力'], ['energy', '精力']]) {
const count = d2edEl('span', { class: 'd2ed-count' }, added[k] ? (added[k] > 0 ? '+' : '') + added[k] : '0');
const btn = (label, n) => d2edEl('button', { type: 'button', onclick: () => {
if (!d2edAttribute(k, n)) { d2edToast(`${name}沒有升級時加的點數可以減了`); return; }
remember(); d2edRender();
} }, label);
const now = build && D2ED_ATTR_BASE[p.cls] ? d2edEl('small', { class: 'd2ed-now' }, '目前 ' + (D2ED_ATTR_BASE[p.cls][k] + build.attributes[k])) : null;
attrs.append(d2edEl('div', { class: 'd2ed-attr' }, d2edEl('b', {}, name, now), btn('－5', -1), count, btn('＋5', 1)));
}
box.append(d2edEl('p', { class: 'd2ed-note' }, '屬性加減跟升級時選屬性卡一樣，按下就生效（不用按套用），角色畫面的數值也會跟著變；進到下一幕（遊戲存檔點）之後，「儲存並離開」再繼續也會保留。中間是用書籤加減的點數。'), attrs);
const grid = d2edEl('div', { class: 'd2ed-grid' });
const inputs = [];
for (const [path, name, hint, digits] of D2ED_FIELDS) {
const input = d2edEl('input', { type: 'number', step: digits ? String(1 / 10 ** digits) : '1', value: d2edRound(d2edGet(path), digits) });
input.dataset.shown = input.value;   // 顯示的是四捨五入的值：沒動過的欄位不要拿它蓋回去
inputs.push([path, input]);
grid.append(d2edEl('label', {}, d2edEl('span', {}, name, hint ? d2edEl('small', {}, hint) : ''), input));
}
const apply = () => {
let n = 0;
for (const [path, input] of inputs) {
const v = Number(input.value);
if (input.value === '' || !Number.isFinite(v) || input.value === input.dataset.shown) continue;
if (Math.abs(v - d2edGet(path)) > 1e-9) { d2edSet(path, v); d2edChanged(p)[path] = v; n++; }
}
if (p.life > p.maxLife) p.life = p.maxLife;
remember();
d2edRender();
d2edToast(n ? `已套用 ${n} 項` : '下面的欄位沒有變更（上方屬性 ±5 按下就已生效）');
};
const keep = d2edKeepRead();
const keepBox = d2edEl('input', { type: 'checkbox' });
keepBox.checked = !!keep;
keepBox.addEventListener('change', () => {
if (keepBox.checked) { d2edKeepWrite({ fields: {}, attrs: {} }); remember(); D2ED.kept.add(p); }
else d2edKeepWrite(null);
d2edRender();
d2edToast(keepBox.checked ? '已記住目前的修改' : '已取消記住');
if (keepBox.checked) d2edKeepNotice();
});
const keepCount = keep ? Object.keys(keep.fields).length + Object.values(keep.attrs).filter(Boolean).length : 0;
// 修改組合：下拉選單選一筆、名稱框可改名；「存成組合」用名稱框的名字（同名就覆蓋），沒打名字就用「組合 N」
const presets = d2edPresetsRead();
const pick = d2edEl('select', { class: 'd2ed-preset', 'aria-label': '修改組合' },
d2edEl('option', { value: '' }, presets.length ? `已存的組合（${presets.length}/${D2ED_PRESET_MAX}）` : '還沒有存組合'),
...presets.map((x, i) => d2edEl('option', { value: String(i) }, x.name)));
const nameBox = d2edEl('input', { type: 'text', class: 'd2ed-preset-name', maxlength: '20', placeholder: '組合名稱' });
const chosen = () => pick.value === '' ? -1 : Number(pick.value);
// 面板重畫後保留剛才選的那一筆（記名字，刪除或改名後找不到就回到未選）
const keepPick = name => { D2ED.presetName = name || ''; };
const was = presets.findIndex(x => x.name === D2ED.presetName);
if (was >= 0) { pick.value = String(was); nameBox.value = presets[was].name; }
pick.addEventListener('change', () => { nameBox.value = chosen() >= 0 ? presets[chosen()].name : ''; keepPick(nameBox.value); sync(); });
const current = () => {
const fields = {};
for (const [path, v] of Object.entries(d2edChanged(p))) if (!D2ED_KEEP_SKIP.has(path)) fields[path] = v;
const attrs = {};
for (const [k, v] of Object.entries(D2ED.added.get(p) || {})) if (v) attrs[k] = v;
return { fields, attrs };
};
const savePreset = () => {
const name = nameBox.value.trim().slice(0, 20);
const at = name ? presets.findIndex(x => x.name === name) : -1;
if (at < 0 && presets.length >= D2ED_PRESET_MAX) { d2edToast(`最多只能存 ${D2ED_PRESET_MAX} 筆，請先刪除或覆蓋舊的`); return; }
const cur = current();
if (!Object.keys(cur.fields).length && !Object.keys(cur.attrs).length) { d2edToast('目前沒有修改可以存'); return; }
let finalName = name;
for (let n = presets.length + 1; !finalName; n++) if (!presets.some(x => x.name === '組合 ' + n)) finalName = '組合 ' + n;
const list = presets.slice();
if (at >= 0) list[at] = { name: finalName, ...cur }; else list.push({ name: finalName, ...cur });
if (!d2edPresetsWrite(list)) return;
keepPick(finalName);
d2edRender();
d2edToast(at >= 0 ? `已覆蓋「${finalName}」` : `已存成「${finalName}」`);
};
const loadPreset = () => {
const x = presets[chosen()];
if (!x) return;
const all = d2edPresetApply(p, x);
remember();
d2edRender();
d2edToast(all ? `已套用「${x.name}」` : `已套用「${x.name}」（有屬性沒有升級時加的點數可以減，沒有全部減到）`);
};
const renamePreset = () => {
const i = chosen(), name = nameBox.value.trim().slice(0, 20);
if (i < 0 || !name) return;
if (presets.some((x, j) => j !== i && x.name === name)) { d2edToast('已經有同名的組合'); return; }
const list = presets.slice();
list[i] = { ...list[i], name };
if (d2edPresetsWrite(list)) { keepPick(name); d2edRender(); d2edToast(`已改名為「${name}」`); }
};
const deletePreset = () => {
const i = chosen();
if (i < 0 || !confirm(`刪除組合「${presets[i].name}」？`)) return;
const list = presets.slice();
list.splice(i, 1);
if (d2edPresetsWrite(list)) { keepPick(''); d2edRender(); d2edToast('已刪除'); }
};
const loadBtn = d2edEl('button', { type: 'button', onclick: loadPreset }, '套用組合');
const renameBtn = d2edEl('button', { type: 'button', onclick: renamePreset }, '改名');
const delBtn = d2edEl('button', { type: 'button', onclick: deletePreset }, '刪除');
const sync = () => { const none = chosen() < 0; loadBtn.disabled = none; renameBtn.disabled = none; delBtn.disabled = none; };
sync();
nameBox.addEventListener('keydown', e => e.stopPropagation());   // 別讓遊戲吃掉打字的按鍵
box.append(grid, d2edEl('div', { class: 'd2ed-row' },
d2edEl('button', { type: 'button', class: 'd2ed-main', onclick: apply }, '套用'),
d2edEl('button', { type: 'button', onclick: () => { p.life = p.maxLife; d2edRender(); d2edToast('生命已補滿'); } }, '生命補滿'),
d2edEl('button', { type: 'button', onclick: d2ecConfirm }, '裝備創造')),
d2edEl('div', { class: 'd2ed-keeprow' },
d2edEl('label', { class: 'd2ed-keep' }, keepBox, '記住這些修改，下次開遊戲、換一局或繼續存檔時自動套用'),
d2edEl('div', { class: 'd2ed-presets' },
d2edEl('div', {}, pick, loadBtn, delBtn),
d2edEl('div', {}, nameBox, d2edEl('button', { type: 'button', onclick: savePreset }, '存成組合'), renameBtn))),
d2edEl('p', { class: 'd2ed-note' }, keep
? `已記住 ${keepCount} 項（每個職業都會套用；之後的修改也會一起記住）。取消勾選就不再自動套用。`
: '沒勾選時下面的欄位只對這一局有效：「儲存並離開」後再繼續，會回到原本的數值（屬性加減跟升級選的一樣，進下一幕後會保留）。'));
return box;
}
function d2edSaveSection() {
const box = d2edEl('section', { class: 'd2ed-sec' }, d2edEditTitle('永久升級（存檔）'));
if (!document.body.classList.contains('no-run')) {
box.append(d2edEl('p', { class: 'd2ed-note' }, '遊戲中不能改存檔（遊戲會蓋回去）。請「儲存並離開遊戲」，在主選單的 選項 → 書籤修改 修改。'));
return box;
}
const save = d2edReadSave();
const ranks = save.ranks || {}, extraRanks = save.extraRanks || {};
const grid = d2edEl('div', { class: 'd2ed-grid' });
const gold = d2edEl('input', { type: 'number', min: '0', step: '1', value: String(save.gold || 0) });
grid.append(d2edEl('label', {}, d2edEl('span', {}, '金幣'), gold));
const inputs = [];
for (const [key, name, max, endless] of D2ED_RANKS) {
const top = endless ? max + D2ED_EXTRA_MAX : max;
const now = (ranks[key] || 0) + (endless && ranks[key] >= max ? extraRanks[key] || 0 : 0);
const input = d2edEl('input', { type: 'number', min: '0', max: String(top), step: '1', value: String(now) });
const hint = d2edEl('small', {});
// 可超過上限的項目：顯示超過後實際等於幾級，讓玩家知道會縮水
const showHint = () => {
const v = Math.max(0, Math.floor(Number(input.value) || 0));
hint.textContent = !endless ? `0～${max}（不能超過）`
: v > max ? `上限 ${max}，超過會遞減：實際約 ${d2edRound(max + d2edExtraWorth(Math.min(v, top) - max), 2)} 級`
: `上限 ${max}，可再加到 ${top}（效果遞減）`;
};
input.addEventListener('input', showHint);
showHint();
inputs.push([key, top, input]);
grid.append(d2edEl('label', {}, d2edEl('span', {}, name, hint), input));
}
const fill = () => {
for (const [key, , input] of inputs) {
input.value = String(D2ED_RANKS.find(r => r[0] === key)[2]);
input.dispatchEvent(new Event('input'));
}
};
const apply = () => {
const out = {};
for (const [key, top, input] of inputs) out[key] = Math.max(0, Math.min(top, Math.floor(Number(input.value) || 0)));
const g = Math.max(0, Math.floor(Number(gold.value) || 0));
if (confirm('要儲存並重新載入遊戲嗎？')) d2edWriteSaveAndReload(g, out);
};
box.append(d2edEl('p', { class: 'd2ed-note' }, '恰西賣的永久升級，每個英雄都適用。大部分項目可以超過上限（最多再加 999 級），但超過的部分效果會遞減；重抽、略過、放逐、復活不能超過上限。'), grid,
d2edEl('div', { class: 'd2ed-row' },
d2edEl('button', { type: 'button', class: 'd2ed-main', onclick: apply }, '儲存並重新載入'),
d2edEl('button', { type: 'button', onclick: fill }, '全部填滿')),
d2edEl('p', { class: 'd2ed-note' }, D2ZH_AUTO ? '儲存後遊戲會重新載入，中文會自動恢復。' : '儲存後頁面會重新載入，要再點一次書籤才會恢復中文。'));
return box;
}
// 電腦安裝版：從作者（我們）的 GitHub 更新中文化。頁面不能上網，由 d2zh-inject.cjs（主程序）下載，
// 這裡用 console.log('__D2ZH__:update') 通知它，下載完它會呼叫 window.__d2zhUpdateDone(結果)。
function d2edUpdateSection() {
const desk = window.__D2ZH_DESKTOP;
if (!desk) return null;
const box = d2edEl('section', { class: 'd2ed-sec' }, d2edEl('h3', {}, '中文化更新（電腦版）'));
if (typeof desk !== 'object' || !desk.updater) {
box.append(d2edEl('p', { class: 'd2ed-note' }, '這個版本還不能在遊戲裡更新：請重新下載「D2倖存者中文化.zip」，執行一次「建立桌面捷徑.cmd」或「安裝中文版.cmd」。'));
return box;
}
const when = t => t ? new Date(t).toLocaleString('zh-TW', { hour12: false }) : '—';
const loaded = desk.fileTime || 0;   // 這個頁面正在用的翻譯檔時間（注入時記下的）
// 硬碟上的翻譯檔比這個頁面用的新，就需要重新載入。
// 不能只看「這次檢查有沒有下載」：開遊戲時背景檢查常在注入之後才下載完，之後按檢查會顯示沒變，頁面卻還在用舊版。
const needReload = r => (desk.diskTime || 0) > loaded || (!!r && r.changed.includes('d2_zh.js') && loaded < r.at);
const status = d2edEl('p', { class: 'd2ed-note d2ed-update-status' });
const describe = r => {
if (!r) return `目前翻譯檔：${when(loaded)}`;
if (r.errors.length && !r.changed.length) return `更新失敗（${r.errors[0]}）。請確認網路連線後再試一次。`;
if (!needReload(r) && r.applies !== 'restart') return `已經是最新版（${when(r.at)} 檢查）。`;
if (!needReload(r)) return '已下載新版安裝程式，下次開遊戲時生效。';
if (r.applies === 'restart') return '已下載新版！翻譯按「重新載入」就會套用；安裝程式的部分在下次開遊戲時生效。';
return '已下載新版翻譯！按「重新載入」就會套用。';
};
const reload = d2edEl('button', { type: 'button', class: 'd2ed-main', style: 'display:none', onclick: () => {
if (!document.body.classList.contains('no-run') && !confirm('遊戲中重新載入，這一局沒存到的進度會不見。確定要重新載入嗎？\n（建議先「儲存並離開遊戲」，在主選單再按）')) return;
location.reload();
} }, '重新載入');
const show = r => {
status.textContent = describe(r);
reload.style.display = needReload(r) ? '' : 'none';
};
const check = d2edEl('button', { type: 'button', onclick: () => {
check.disabled = true;
status.textContent = '正在從 GitHub 檢查更新…';
window.__d2zhUpdateDone = result => {
check.disabled = false;
if (result.info) desk.diskTime = result.info.fileTime;
if (needReload(result) && !result.changed.includes('d2_zh.js')) result.changed.push('d2_zh.js');
desk.lastCheck = result;
show(result);
};
console.log('__D2ZH__:update');
} }, '檢查更新');
// 開遊戲時背景已經自動下載過新版、這個頁面還沒用到：直接提示可以重新載入
show(needReload(desk.lastCheck) ? (desk.lastCheck || { at: Date.now(), changed: ['d2_zh.js'], errors: [], applies: 'reload' }) : null);
box.append(d2edEl('p', { class: 'd2ed-note' }, '翻譯和修改功能會從 GitHub 下載最新版。每次開遊戲也會在背景自動檢查。'),
status, d2edEl('div', { class: 'd2ed-row' }, check, reload));
return box;
}
// ====== 修改功能的開關 ======
// 遊戲有排行榜，修改過的紀錄會被拒收。修改功能預設藏起來：玩家確認後，把存檔的 leaderboard.off 設成 true
// （等於遊戲排行榜書裡的「傳送我的紀錄：關」），之後遊戲每次寫存檔都維持關閉。
// 遊戲中啟用時不重新載入，遊戲記憶體裡的存檔還是「傳送：開」，所以另外擋住排行榜上傳：
// 等待傳送的紀錄（localStorage d2s:leaderboard-queue）不讓它寫入，直接送往 /api/leaderboard/ 的 POST 也擋掉。
const D2ED_UNLOCK_KEY = 'd2zh:editUnlocked';
const D2ED_LB_QUEUE_KEY = 'd2s:leaderboard-queue';
function d2edUnlocked() {
try { return localStorage.getItem(D2ED_UNLOCK_KEY) === '1'; } catch (_) { return false; }
}
function d2edKeepLeaderboardOff() {
const rawSet = Storage.prototype.setItem;
Storage.prototype.setItem = function (key, value) {
if (this === window.localStorage && key === D2ED_SAVE_KEY && d2edUnlocked()) {
try {
const save = JSON.parse(value);
if (save && typeof save === 'object' && !(save.leaderboard && save.leaderboard.off)) {
save.leaderboard = { ...save.leaderboard, off: true };
value = JSON.stringify(save);
}
} catch (_) { /* 不是 JSON 就照原樣寫 */ }
}
if (this === window.localStorage && key === D2ED_LB_QUEUE_KEY && d2edUnlocked()) {
this.removeItem(key);
return;
}
return rawSet.call(this, key, value);
};
// 恰西的鐵砧（淬鍊／清除／地獄熔爐／升級）也走同一個網址：POST /api/leaderboard/forge，那不是排行榜紀錄，不能擋（擋了遊戲會說「沒有連線」）
const D2ED_LB_ALLOW = /^\/?forge(?:[/?#]|$)/;
const isLeaderboardPost = (url, init) => {
const m = /\/api\/leaderboard(\/.*)?$/.exec(String(url && url.url || url));
return !!m && !D2ED_LB_ALLOW.test(m[1] || '') && /^post$/i.test((init && init.method) || (url && url.method) || 'GET');
};
const rawFetch = window.fetch;
window.fetch = function (url, init) {
if (d2edUnlocked() && isLeaderboardPost(url, init)) return Promise.resolve(new Response('', { status: 403 }));
return rawFetch.apply(this, arguments);
};
// 電腦版經由 d2app.leaderboard(方法, 路徑, 內容) 送出；物件被鎖住就改不了，至少上面的佇列還擋得住紀錄
try {
const app = window.d2app, raw = app && app.leaderboard;
if (typeof raw === 'function') {
app.leaderboard = function (method, path) {
if (d2edUnlocked() && /^post$/i.test(method) && !D2ED_LB_ALLOW.test(String(path || ''))) return Promise.resolve({ status: 403, body: null });
return raw.apply(this, arguments);
};
}
} catch (_) { /* contextBridge 的物件唯讀 */ }
}
function d2edLockSection() {
return d2edEl('section', { class: 'd2ed-sec' }, d2edEl('h3', {}, '修改功能'),
d2edEl('p', { class: 'd2ed-note' }, '遊戲中可以修改這一局的人物；在主選單可以修改恰西的永久升級。修改後遊戲的排行榜會拒收你的紀錄。'),
d2edEl('div', { class: 'd2ed-row' }, d2edEl('button', { type: 'button', class: 'd2ed-main', onclick: d2edConfirmUnlock }, '啟用修改功能')));
}
function d2edConfirmUnlock() {
const card = D2ED.panel && D2ED.panel.querySelector('.d2ed-card');
if (!card || card.querySelector('.d2ed-modal')) return;
const inMenu = document.body.classList.contains('no-run');
const modal = d2edEl('div', { class: 'd2ed-modal' });
const close = () => modal.remove();
const ok = () => {
try { localStorage.setItem(D2ED_UNLOCK_KEY, '1'); } catch (e) { alert('無法啟用：' + e); return; }
// 遊戲中：不重新載入，直接打開修改頁面（排行榜上傳由 d2edKeepLeaderboardOff 擋住，遊戲下次存檔就會寫成關閉）
// 確認窗掛在 .d2ed-card 上，d2edRender 只重畫 .d2ed-body，要自己關掉
if (!inMenu) { close(); d2edRender(); return; }
try {
const write = () => { const save = d2edReadSave(); save.leaderboard = { ...save.leaderboard, off: true }; localStorage.setItem(D2ED_SAVE_KEY, JSON.stringify(save)); };
write();
addEventListener('pagehide', write);   // 遊戲關頁前若再寫一次存檔，這裡最後再蓋回關閉
} catch (e) { alert('存檔寫入失敗：' + e); return; }
location.reload();
};
modal.append(d2edEl('div', { class: 'd2ed-modal-box', role: 'alertdialog', 'aria-label': '確認啟用修改功能' },
d2edEl('b', {}, '修改後無法上排行榜！確認使用嗎？'),
d2edEl('ul', {},
d2edEl('li', {}, '會自動關閉遊戲的「傳送我的紀錄」（排行榜上傳），之後維持關閉。'),
d2edEl('li', {}, '已經在排行榜上的紀錄不受影響。'),
d2edEl('li', {}, !inMenu ? '確認後馬上可以修改這一局的人物（不用離開遊戲）。'
: D2ZH_AUTO ? '確認後遊戲會重新載入，中文會自動恢復。' : '確認後頁面會重新載入，要再點一次書籤才會恢復中文。')),
d2edEl('div', { class: 'd2ed-row' },
d2edEl('button', { type: 'button', class: 'd2ed-main', onclick: ok }, '確認'),
d2edEl('button', { type: 'button', onclick: close }, '取消'))));
card.append(modal);
}
function d2edConfirmRelock() {
const card = D2ED.panel && D2ED.panel.querySelector('.d2ed-card');
if (!card || card.querySelector('.d2ed-modal')) return;
const modal = d2edEl('div', { class: 'd2ed-modal' });
const close = () => modal.remove();
const relock = () => { try { localStorage.removeItem(D2ED_UNLOCK_KEY); } catch (_) { /* 無痕視窗 */ } close(); d2edRender(); };
modal.append(d2edEl('div', { class: 'd2ed-modal-box', role: 'alertdialog', 'aria-label': '確認關閉修改功能' },
d2edEl('b', {}, '關閉修改功能？'),
d2edEl('p', { style: 'margin: 6px 0; color: #d8d0c0' }, '隱藏修改功能，書籤不再強制關閉排行榜上傳。要恢復上傳，請到營地儲物箱旁的排行榜書自行開啟「傳送我的紀錄」（改過的存檔仍可能被排行榜拒收）。'),
d2edEl('div', { class: 'd2ed-row' },
d2edEl('button', { type: 'button', class: 'd2ed-main', onclick: relock }, '確認'),
d2edEl('button', { type: 'button', onclick: close }, '取消'))));
card.append(modal);
}
// 修改功能區塊的標題：右邊放「關閉修改功能」
function d2edEditTitle(title) {
return d2edEl('h3', { style: 'display: flex; align-items: center; justify-content: space-between; gap: 8px' }, title,
d2edEl('button', { type: 'button', style: 'flex: none; font-size: 13px; font-weight: normal', onclick: d2edConfirmRelock }, '關閉修改功能'));
}
// ====== 低效能模式 ======
// 遊戲每格都用 devicePixelRatio 決定畫面解析度（build 20261026：render scale 的 tick），V59 以前壓到 0.5（最省但文字會糊），V60 起壓到 1。
// 另外把遊戲「影像選項 → 技能特效」（localStorage d2s:skill-effects，0～1）調到 0；遊戲只在開頁時讀一次，重新載入後才生效。
const D2ED_PERF_KEY = 'd2zh:perf';
// V60：解析度不再降到 0.5（地上物品名稱、介面文字會糊掉），改成最多 1 倍（高解析度手機／螢幕省最多，文字照樣清楚），
// 省下的效能改從特效拿：技能特效最淡、天氣（雪、雨）關閉、光源和陰影關閉。
const D2ED_PERF_DPR = 1;
const D2ED_FX_KEY = 'd2s:skill-effects';
const D2ED_FX_BACKUP_KEY = 'd2zh:perfSkillEffects';
const D2ED_WEATHER_KEY = 'd2s:weather';            // 遊戲：沒有這個鍵＝天氣開、'0'＝關（開頁讀一次）
const D2ED_WEATHER_BACKUP_KEY = 'd2zh:perfWeather';
// 遊戲的網址參數設定物件（itemArt-*.js 的 tn，?nolights／?noshadows 會把 lights／shadows 設成 false）。
// 光源（mx）和陰影（$S）每局開始建立時才讀，所以改了從下一局（或下一幕）生效。找不到（例如電腦版打包不同）就略過。
const D2ED_PERF_GAME = { settings: undefined, orig: null };
async function d2edPerfGameSettings() {
if (D2ED_PERF_GAME.settings !== undefined) return D2ED_PERF_GAME.settings;
D2ED_PERF_GAME.settings = null;
const urls = [...new Set([...performance.getEntriesByType('resource').map(e => e.name), ...[...document.querySelectorAll('script[src]')].map(e => e.src), ...[...document.querySelectorAll('link[rel=modulepreload]')].map(e => e.href)])]
.filter(n => /\/assets\/[^/]+\.js(\?|$)/.test(n) && !/\/ko-/.test(n) && !/\/game-[^/]+\.js/.test(n));   // 遊戲入口有頂層 await，不要等它
// 先找最可能的 itemArt-*.js，找不到再看其他檔
urls.sort((a, b) => (/\/itemArt-/.test(b) ? 1 : 0) - (/\/itemArt-/.test(a) ? 1 : 0));
for (const url of urls) {
let m = null;
try { m = await Promise.race([import(url), new Promise((_, no) => setTimeout(no, 3000))]); } catch (_) { continue; }
const hit = m && Object.values(m).find(v => v && typeof v === 'object' && typeof v.lights === 'boolean' && typeof v.shadows === 'boolean' && 'res' in v && 'smoke' in v);
if (hit) { D2ED_PERF_GAME.settings = hit; break; }
}
return D2ED_PERF_GAME.settings;
}
async function d2edPerfApplyGame() {
try {
const s = await d2edPerfGameSettings();
if (!s) return;
if (d2edPerfOn()) {
if (!D2ED_PERF_GAME.orig) D2ED_PERF_GAME.orig = { lights: s.lights, shadows: s.shadows };
s.lights = false;
s.shadows = false;
} else if (D2ED_PERF_GAME.orig) {
s.lights = D2ED_PERF_GAME.orig.lights;
s.shadows = D2ED_PERF_GAME.orig.shadows;
D2ED_PERF_GAME.orig = null;
}
} catch (e) { console.warn('[D2 中文] 低效能模式（光源／陰影）', e); }
}
function d2edPerfOn() {
try { return localStorage.getItem(D2ED_PERF_KEY) === '1'; } catch (_) { return false; }
}
// window.devicePixelRatio 是 window 自己的屬性：記下原本的寫法，關閉時整個放回去
const D2ED_DPR_DESC = Object.getOwnPropertyDescriptor(window, 'devicePixelRatio');
function d2edPerfApplyDpr() {
try {
if (d2edPerfOn()) Object.defineProperty(window, 'devicePixelRatio', { configurable: true, enumerable: true, get: () => D2ED_PERF_DPR, set() {} });
else if (D2ED_DPR_DESC) Object.defineProperty(window, 'devicePixelRatio', D2ED_DPR_DESC);
else delete window.devicePixelRatio;   // 原本在 Window.prototype 上：刪掉自己蓋的就會回到原本的值
} catch (e) { console.warn('[D2 中文] 低效能模式', e); }
}
function d2edPerfSet(on) {
try {
if (on) {
const fx = localStorage.getItem(D2ED_FX_KEY);
localStorage.setItem(D2ED_FX_BACKUP_KEY, fx === null ? '' : fx);
localStorage.setItem(D2ED_FX_KEY, '0');
const weather = localStorage.getItem(D2ED_WEATHER_KEY);
localStorage.setItem(D2ED_WEATHER_BACKUP_KEY, weather === null ? '' : weather);
localStorage.setItem(D2ED_WEATHER_KEY, '0');
localStorage.setItem(D2ED_PERF_KEY, '1');
} else {
const fx = localStorage.getItem(D2ED_FX_BACKUP_KEY);
if (fx) localStorage.setItem(D2ED_FX_KEY, fx); else localStorage.removeItem(D2ED_FX_KEY);
localStorage.removeItem(D2ED_FX_BACKUP_KEY);
const weather = localStorage.getItem(D2ED_WEATHER_BACKUP_KEY);
if (weather) localStorage.setItem(D2ED_WEATHER_KEY, weather); else localStorage.removeItem(D2ED_WEATHER_KEY);
localStorage.removeItem(D2ED_WEATHER_BACKUP_KEY);
localStorage.removeItem(D2ED_PERF_KEY);
}
} catch (e) { alert('無法儲存設定：' + e); return; }
d2edPerfApplyDpr();
d2edPerfApplyGame();
}
// V59 以前開啟的人：補上天氣關閉（舊版只備份了技能特效）
function d2edPerfMigrate() {
try {
if (!d2edPerfOn() || localStorage.getItem(D2ED_WEATHER_BACKUP_KEY) !== null) return;
const weather = localStorage.getItem(D2ED_WEATHER_KEY);
localStorage.setItem(D2ED_WEATHER_BACKUP_KEY, weather === null ? '' : weather);
localStorage.setItem(D2ED_WEATHER_KEY, '0');
} catch (_) { /* 存不了就算了 */ }
}
function d2edPerfSection() {
const on = d2edPerfOn();
const toggle = () => { d2edPerfSet(!on); d2edRender(); d2edToast(on ? '低效能模式已關閉' : '低效能模式已開啟'); };
return d2edEl('section', { class: 'd2ed-sec' }, d2edEl('h3', {}, '低效能模式'),
d2edEl('p', { class: 'd2ed-note' }, '電腦或手機跑不動時開啟：技能特效調到最淡，關閉天氣（雪、雨）、光源和陰影；高解析度螢幕改用 1 倍解析度。物品名稱和文字維持清楚。'),
d2edEl('p', { class: 'd2ed-note' }, '解析度馬上生效；光源和陰影從下一局（或下一幕）開始；技能特效和天氣要重新載入遊戲後才會生效。'),
d2edEl('div', { class: 'd2ed-row' }, d2edEl('button', { type: 'button', class: on ? '' : 'd2ed-main', onclick: toggle }, on ? '關閉低效能模式' : '開啟低效能模式'),
d2edEl('span', { class: 'd2ed-note', style: 'align-self: center' }, on ? '目前：開啟' : '目前：關閉')));
}
// ====== 背景靜音（預設開啟） ======
// 遊戲換到其他分頁、被其他視窗完全蓋住或縮小時（document.hidden）立刻靜音，遊戲照常執行；回來時恢復。
// 遊戲的音效和音樂都接到同一個 AudioContext（build 20261028.1，ui-*.js 的 T；音樂是 <audio> 經 MediaElementAudioSourceNode 接進去），
// 它在模組裡拿不到，所以攔 currentTime（遊戲排音效時一直在讀）記下它，背景時 suspend()、回來時 resume()。
// 電腦版視窗設了 backgroundThrottling:false（main.cjs），被蓋住時 document.hidden 還是 false，所以改看視窗有沒有焦點。
// 這時遊戲會以為聲音沒開而一直 resume（document.hidden 才會停），要攔下來。
const D2ED_BGMUTE_KEY = 'd2zh:bgMute';
function d2edBgMuteOn() {
try { return localStorage.getItem(D2ED_BGMUTE_KEY) !== '0'; } catch (_) { return true; }
}
(function d2edBgMuteInstall() {
const contexts = new Set();
const proto = window.BaseAudioContext?.prototype ?? window.AudioContext?.prototype;
const desc = proto && Object.getOwnPropertyDescriptor(proto, 'currentTime');
if (desc?.get && desc.configurable) {
Object.defineProperty(proto, 'currentTime', { ...desc, get() { contexts.add(this); return desc.get.call(this); } });
}
let muted = new Set();   // 我們暫停的 context，回來時只恢復這些
const inBackground = () => (document.hidden || (window.__D2ZH_DESKTOP && !document.hasFocus())) && d2edBgMuteOn();
const acProto = window.AudioContext?.prototype;
const acResume = acProto && Object.getOwnPropertyDescriptor(acProto, 'resume');
if (acResume?.value && acResume.configurable) {
Object.defineProperty(acProto, 'resume', { ...acResume, value() { if (!inBackground()) return acResume.value.call(this); contexts.add(this); muted.add(this); return Promise.resolve(); } });
}
const apply = () => {
try {
if (inBackground()) {
for (const c of contexts) if (c.state === 'running') { c.suspend().catch(() => {}); muted.add(c); }
} else if (muted.size) {
for (const c of muted) if (c.state === 'suspended') c.resume().catch(() => {});
muted = new Set();
}
} catch (e) { /* 遊戲結構改了就不管，不影響遊戲 */ }
};
document.addEventListener('visibilitychange', apply);
window.addEventListener('blur', apply);
window.addEventListener('focus', apply);
setInterval(apply, 1000);   // 背景時才出現的 context 也要壓住；回來時若漏了事件也會恢復
D2ED.bgMuteApply = apply;
})();
const D2ED_BGMUTE_DESC = window.__D2ZH_DESKTOP ? '切到其他視窗或縮小到工具列時立刻靜音，遊戲照常執行；回到遊戲就恢復聲音。' : '遊戲換到其他分頁、被其他視窗完全蓋住或縮小到工具列時立刻靜音，遊戲照常執行；回到遊戲就恢復聲音。';
const D2ED_BGMUTE_LIMIT = window.__D2ZH_DESKTOP ? '遊戲還看得到、只是點到別的視窗（例如兩個視窗並排）也會靜音。' : '只蓋住一部分，或只是點到別的視窗、遊戲還看得到時，瀏覽器不會把遊戲當成在背景，所以不會靜音。';
function d2edBgMuteSet(on) {
try { localStorage.setItem(D2ED_BGMUTE_KEY, on ? '1' : '0'); } catch (e) { alert('無法儲存設定：' + e); return; }
D2ED.bgMuteApply?.();
d2edRender(); d2edToast(on ? '背景靜音已開啟' : '背景靜音已關閉');
}
// 手動開啟時提醒什麼情況才會靜音
function d2edConfirmBgMute() {
const card = D2ED.panel && D2ED.panel.querySelector('.d2ed-card');
if (!card || card.querySelector('.d2ed-modal')) return;
const modal = d2edEl('div', { class: 'd2ed-modal' });
const close = () => modal.remove();
modal.append(d2edEl('div', { class: 'd2ed-modal-box', role: 'alertdialog', 'aria-label': '確認開啟背景靜音' },
d2edEl('b', {}, '開啟背景靜音？'),
d2edEl('ul', {},
d2edEl('li', {}, D2ED_BGMUTE_DESC),
d2edEl('li', {}, D2ED_BGMUTE_LIMIT)),
d2edEl('div', { class: 'd2ed-row' },
d2edEl('button', { type: 'button', class: 'd2ed-main', onclick: () => { close(); d2edBgMuteSet(true); } }, '確認'),
d2edEl('button', { type: 'button', onclick: close }, '取消'))));
card.append(modal);
}
function d2edBgMuteSection() {
const on = d2edBgMuteOn();
const toggle = () => { if (on) d2edBgMuteSet(false); else d2edConfirmBgMute(); };
return d2edEl('section', { class: 'd2ed-sec' }, d2edEl('h3', {}, '背景靜音'),
d2edEl('p', { class: 'd2ed-note' }, D2ED_BGMUTE_DESC),
d2edEl('p', { class: 'd2ed-note' }, D2ED_BGMUTE_LIMIT),
d2edEl('div', { class: 'd2ed-row' }, d2edEl('button', { type: 'button', class: on ? '' : 'd2ed-main', onclick: toggle }, on ? '關閉背景靜音' : '開啟背景靜音'),
d2edEl('span', { class: 'd2ed-note', style: 'align-self: center' }, on ? '目前：開啟' : '目前：關閉')));
}
// ====== 碎片感應 ======
// 隱藏任務「破碎之光」的碎片：開啟後，碎片出現時畫面邊緣朝它的方向會有微弱的光暈（越近越亮），不給箭頭或文字。
const D2ED_SHARD_KEY = 'd2zh:shardSense';
function d2edShardOn() {
try { return localStorage.getItem(D2ED_SHARD_KEY) === '1'; } catch (_) { return false; }
}
function d2edShardSection() {
const on = d2edShardOn();
const toggle = () => {
try { on ? localStorage.removeItem(D2ED_SHARD_KEY) : localStorage.setItem(D2ED_SHARD_KEY, '1'); } catch (e) { alert('無法儲存設定：' + e); return; }
d2edRender(); d2edToast(on ? '碎片感應已關閉' : '碎片感應已開啟');
};
return d2edEl('section', { class: 'd2ed-sec' }, d2edEl('h3', {}, '碎片感應'),
d2edEl('p', { class: 'd2ed-note' }, '隱藏任務「破碎之光」：碎片出現後，畫面邊緣朝它的方向會有微弱的光暈，越接近越亮，看得到碎片時就消失。'),
d2edEl('div', { class: 'd2ed-row' }, d2edEl('button', { type: 'button', class: on ? '' : 'd2ed-main', onclick: toggle }, on ? '關閉碎片感應' : '開啟碎片感應'),
d2edEl('span', { class: 'd2ed-note', style: 'align-self: center' }, on ? '目前：開啟' : '目前：關閉')),
on && D2ED.shardStatus ? d2edEl('p', { class: 'd2ed-note' }, '狀態：' + D2ED.shardStatus()) : null,
d2edEl('p', { class: 'd2ed-note' }, `已找到 ${d2shardCount() ?? '?'}／10 塊。` + d2shardNextText(d2shardCount())));
}
function d2edEndPullSection() {
const on = d2edEndPullOn();
const toggle = () => {
try { localStorage.setItem(D2ED_ENDPULL_KEY, on ? '0' : '1'); } catch (e) { alert('無法儲存設定：' + e); return; }
d2edRender(); d2edToast(on ? '過關吸取物品已關閉' : '過關吸取物品已開啟');
};
return d2edEl('section', { class: 'd2ed-sec' }, d2edEl('h3', {}, '過關吸取物品'),
d2edEl('p', { class: 'd2ed-note' }, '打完這一幕、遊戲把經驗寶石吸到身邊時，地上的裝備和物品（鑰匙、精華、器官等）也一起飛過來撿起。不會吸你自己丟下的、或物品過濾設成隱藏的；物品欄滿了會留在腳邊。'),
d2edEl('div', { class: 'd2ed-row' }, d2edEl('button', { type: 'button', class: on ? '' : 'd2ed-main', onclick: toggle }, on ? '關閉過關吸取物品' : '開啟過關吸取物品'),
d2edEl('span', { class: 'd2ed-note', style: 'align-self: center' }, on ? '目前：開啟' : '目前：關閉')));
}
// ====== 技能格調整大小（預設關閉） ======
const D2ED_SKILLZOOM_KEY = 'd2zh:skillZoom';
function d2edSkillZoomOn() {
try { return localStorage.getItem(D2ED_SKILLZOOM_KEY) === '1'; } catch (_) { return false; }
}
function d2edSkillZoomSection() {
const on = d2edSkillZoomOn();
const toggle = () => {
try { on ? localStorage.removeItem(D2ED_SKILLZOOM_KEY) : localStorage.setItem(D2ED_SKILLZOOM_KEY, '1'); } catch (e) { alert('無法儲存設定：' + e); return; }
d2edRender(); d2edToast(on ? '技能格調整大小已關閉' : '技能格調整大小已開啟');
};
return d2edEl('section', { class: 'd2ed-sec' }, d2edEl('h3', {}, '技能格調整大小'),
d2edEl('p', { class: 'd2ed-note' }, '開啟後，技能樹開著時技能選單旁邊會出現 ＋／－ 和鎖定比例按鈕，可以把選單調成 0～200%。關閉時選單維持遊戲原本的大小。'),
d2edEl('div', { class: 'd2ed-row' }, d2edEl('button', { type: 'button', class: on ? '' : 'd2ed-main', onclick: toggle }, on ? '關閉技能格調整大小' : '開啟技能格調整大小'),
d2edEl('span', { class: 'd2ed-note', style: 'align-self: center' }, on ? '目前：開啟' : '目前：關閉')));
}
// ====== 裝備創造（只在遊戲中出現）：獨特、套裝、符文之語，能力數值由玩家在上下限內指定 ======
// 遊戲的物品表、產生與驗證函式都在已載入的模組裡，但匯出名稱每次改版都會變，所以用函式內容認。
// 表裡的每一列（props）依序對應物品 stats 的欄位，規則照遊戲 B6：func 15／16／11／19 和有 par 的 17 是固定值，其他在 min～max 骰一個數。
const D2EC = { api: null, overlay: null, sel: null, cat: 'head' };
const D2EC_GRID = { columns: 10, rows: 4 };
const D2EC_FIXED_FUNCS = new Set([15, 16, 11, 19]);
const D2EC_RARITY = { unique: '獨特', set: '套裝', runeword: '符文之語', misc: '道具', base: '底材' };
// 鑰匙和器官是任務物品（base＝代碼），放進物品欄時遊戲自己登記到存檔 pandemonium（itemArt 的 Kv，物品欄金幣旁的數量就是看這裡），一把一個 id；
// 精華是一般物品，一疊最多 99 個，carry 會自動疊在一起
const D2EC_MISC = [
{ name: 'Key of Terror', base: 'pk1', kind: 'quest', max: 50 }, { name: 'Key of Hate', base: 'pk2', kind: 'quest', max: 50 }, { name: 'Key of Destruction', base: 'pk3', kind: 'quest', max: 50 },
{ name: 'Mephisto\'s Brain', base: 'mbr', kind: 'quest', max: 50 }, { name: 'Diablo\'s Horn', base: 'dhn', kind: 'quest', max: 50 }, { name: 'Baal\'s Eye', base: 'bey', kind: 'quest', max: 50 },
{ name: 'Burning Essence of Terror', base: 'Burning Essence of Terror', kind: 'essence', max: 99 },
];
const d2ecBaseLabel = def => def.rarity === 'misc' ? (def.kind === 'essence' ? '精華' : '鑰匙／器官') : def.rarity === 'base' ? '無能力底材' : d2ecTr(def.base);
// 「底材」分頁只列這些部位（戒指、護身符、護符、珠寶不會有普通品質）
const D2EC_PLAIN_TYPES = ['weapon', 'shield', 'head', 'body', 'gloves', 'belt', 'boots'];
// 普通品質的底材：用遊戲的掉落產生器做一件同底材的物品，只留底材本身的固有能力（implicit，例如武器傷害），拿掉詞綴和底材附加能力
function d2ecPlainItem(base) {
let src = null;
for (const roll of D2EC.api.rollers || []) {
for (let i = 0; i < 40 && !src; i++) {
let it;
try { it = roll({ base }, 99, 99, undefined); } catch (_) { break; }
if (it && it.base === base && (it.rarity === 'magic' || it.rarity === 'rare')) src = it;
}
if (src) break;
}
const id = Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
const type = src ? src.type : undefined;
const mods = src ? (src.mods || []).filter(m => m.implicit && !m.auto && !m.staff).map(m => ({ ...m })) : [];
return { id, base, type, rarity: 'normal', name: base, level: 1, mods };
}
function d2ecMiscItem(def, count) {
const id = Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
if (def.kind === 'quest') return { id, base: def.base, type: 'quest', rarity: 'unique', name: def.name, level: 0, mods: [] };
return { id, base: def.base, type: 'essence', rarity: 'normal', name: def.name, level: 85, mods: [], ...(count > 1 && { count }) };
}
// 營地裡下面 WeakMap 的攔截抓不到世界（裝備放進物品欄要用 world.carry），但遊戲每秒都會讀 world.tristram（沒進崔斯特姆時這個欄位不存在），
// 所以跟 unspent 一樣在 Object.prototype 放不列舉的 getter 認出它；寫入時改成物件自己的欄位。
function d2ecWorldInstall() {
if (Object.prototype.hasOwnProperty('tristram')) return;
Object.defineProperty(Object.prototype, 'tristram', {
configurable: true, enumerable: false,
get() { if (this && Array.isArray(this.pickups) && typeof this.carry === 'function') { D2ED.world = this; d2lootWrap(this); } return undefined; },
set(v) { Object.defineProperty(this, 'tristram', { value: v, writable: true, enumerable: true, configurable: true }); },
});
}
// ====== 物品過濾：每一行都能選「撿取並出售魔法以下」「撿取並出售稀有以下」，赫拉迪克法典也能選「保留」 ======
// 遊戲（saveTransfer-*.js）每行可選的值放在模組常數陣列：一般行 [pick, keep, hide, sell, hidesell]、法典 [pick, hide, sell, hidesell]，
// 已收藏／符文之語是一般行再加 better。選單切換（匯出的 cycle 函式）和讀檔驗證都照這兩個陣列，所以把新值直接加進陣列，
// 選單就能選、存檔也會留著。陣列拿不到，用 cycle 函式跑一次、攔它呼叫的 indexOf 認出來。
// 遊戲判斷只認得原本的值（新值在它的嚴格度表裡沒有分數，等於「拿起」），真正的出售由書籤包住 world.loot 決定。
// 網頁版點書籤前遊戲已經讀過檔，新值會被當成不認得的值丟掉：書籤把新值另存一份（d2zh:lootExt），之後補回遊戲記憶體裡的設定，
// 由遊戲自己寫檔（存檔封印照常，不會被標成修改過）。
const D2LOOT_CAP = { zhSellMagic: 1, zhSellRare: 2 };   // 出售到哪個稀有度為止：白色 0、魔法 1、稀有 2
const D2LOOT_LABEL = { zhSellMagic: 'SELL MAGIC AND BELOW', zhSellRare: 'SELL RARE AND BELOW' };
const D2LOOT_GEAR = new Set(['weapon', 'shield', 'quiver', 'head', 'body', 'gloves', 'belt', 'boots', 'ring', 'amulet', 'charm', 'jewel']);
const D2LOOT_KEY = 'd2zh:lootExt';
const D2LOOT = { ready: false, forClass: null, mode: 'sc', mirror: { sc: {}, hc: {} }, done: {}, live: {}, pending: null };
const d2lootIsExt = (rule, v) => D2LOOT_CAP[v] !== undefined || (rule === 'codex' && v === 'keep');
const d2lootIsSave = o => !!o && typeof o === 'object' && Object.prototype.hasOwnProperty.call(o, 'inventoryByClass') && Object.prototype.hasOwnProperty.call(o, 'gold');
const d2lootModeOf = save => save && save.mode === 'hc' ? 'hc' : 'sc';
function d2lootExtRows(filter) {
const out = {};
if (filter && typeof filter === 'object') for (const [rule, v] of Object.entries(filter)) if (d2lootIsExt(rule, v)) out[rule] = v;
return out;
}
function d2lootSaveMirror() {
try { localStorage.setItem(D2LOOT_KEY, JSON.stringify(D2LOOT.mirror)); } catch (_) { /* 存不了：只是重開後要重選 */ }
}
// 補回新值：只補還是預設值（沒有這個欄位）的行；玩家已經改成別的值的行不動
function d2lootRestore(filter, mode) {
for (const [rule, v] of Object.entries(D2LOOT.mirror[mode] || {})) if (filter[rule] === undefined) filter[rule] = v;
D2LOOT.done[mode] = true;
D2LOOT.live[mode] = filter;
}
function d2lootSync(mode, filter) {
const rows = d2lootExtRows(filter);
if (JSON.stringify(rows) !== JSON.stringify(D2LOOT.mirror[mode] || {})) { D2LOOT.mirror[mode] = rows; d2lootSaveMirror(); }
}
function d2lootValue(filter, rule) {
const v = filter && filter[rule];
return v !== undefined ? v : rule === 'charm' || rule === 'jewel' ? 'keep' : 'pick';
}
// 遊戲判斷完再加上新選項：遊戲已經隱藏／出售的照遊戲；有「保留」的行就不賣（跟遊戲「保留優先」一樣）
function d2lootDecide(world, item, r) {
if (d2lootIsExt('codex', r)) r = 'pick';   // 已收藏／符文之語／法典那幾行，遊戲會把新值原樣傳回來：它們都比稀有高，等於拿起
if (r !== 'pick' || !item || item.type === 'essence' || !D2LOOT_GEAR.has(item.type)) return r;
const rank = { normal: 0, magic: 1, rare: 2 }[item.rarity];
if (rank === undefined) return r;
const filter = D2LOOT.live[D2LOOT.mode] !== undefined ? D2LOOT.live[D2LOOT.mode] : D2LOOT.mirror[D2LOOT.mode];
const rows = rank > 0 ? [item.rarity, item.type] : [item.type];
let forClass = true;
const cls = world && world.player && world.player.cls;
if (D2LOOT.forClass && cls) { try { forClass = !!D2LOOT.forClass(item, cls); } catch (_) { /* 判斷不了就當本職業 */ } }
if (!forClass) rows.push('other');
const vals = rows.map(row => d2lootValue(filter, row));
if (vals.includes('keep')) return r;
return vals.some(v => D2LOOT_CAP[v] !== undefined && rank <= D2LOOT_CAP[v]) ? 'sell' : r;
}
function d2lootWrap(world) {
if (!world || typeof world.loot !== 'function' || world.loot.__d2zhLoot) return;
const orig = world.loot;
const wrapped = function (item) {
const r = orig.apply(this, arguments);
if (!D2LOOT.ready) return r;
try { return d2lootDecide(world, item, r); } catch (_) { return r; }
};
wrapped.__d2zhLoot = true;
world.loot = wrapped;
}
function d2lootInstall() {
try { const m = JSON.parse(localStorage.getItem(D2LOOT_KEY) || 'null'); if (m && typeof m === 'object') D2LOOT.mirror = { sc: m.sc || {}, hc: m.hc || {} }; } catch (_) { /* 沒有就從空的開始 */ }
try { D2LOOT.mode = localStorage.getItem('d2-survivors/mode/v1') === 'hardcore' ? 'hc' : 'sc'; } catch (_) { /* 預設一般模式 */ }
// 存檔沒有 lootFilter（全部預設）時遊戲讀到的是這裡：要補新值就幫它建一個；遊戲寫入時照一般欄位寫在物件自己身上
if (!Object.prototype.hasOwnProperty('lootFilter')) {
Object.defineProperty(Object.prototype, 'lootFilter', {
configurable: true, enumerable: false,
get() {
if (!D2LOOT.ready || !d2lootIsSave(this)) return undefined;
const mode = d2lootModeOf(this);
if (D2LOOT.done[mode] || mode !== D2LOOT.mode || !Object.keys(D2LOOT.mirror[mode] || {}).length) return undefined;
const filter = {};
Object.defineProperty(this, 'lootFilter', { value: filter, writable: true, enumerable: true, configurable: true });
d2lootRestore(filter, mode);
return filter;
},
set(v) { Object.defineProperty(this, 'lootFilter', { value: v, writable: true, enumerable: true, configurable: true }); },
});
}
// 遊戲寫檔：先 JSON.stringify({...存檔, seal: undefined})，接著寫進 localStorage。讀檔驗證封印也會 stringify 同樣的東西但不寫入，
// 所以 stringify 時只記下來，等真的寫入存檔才處理（驗證時改內容會讓封印對不上）。這裡不能讀 v.lootFilter（會觸發上面的 getter）。
const rawStringify = JSON.stringify;
JSON.stringify = function (v) {
if (v && typeof v === 'object' && Object.prototype.hasOwnProperty.call(v, 'seal') && v.seal === undefined && d2lootIsSave(v)) {
D2LOOT.pending = { mode: d2lootModeOf(v), filter: Object.prototype.hasOwnProperty.call(v, 'lootFilter') ? v.lootFilter : null };
}
return rawStringify.apply(this, arguments);
};
const rawSet = Storage.prototype.setItem;
Storage.prototype.setItem = function (key, value) {
const p = D2LOOT.pending;
if (p && this === window.localStorage && /^d2-survivors\/(save|hc)\/v1$/.test(key)) {
D2LOOT.pending = null;
if (D2LOOT.ready) {
D2LOOT.mode = p.mode;
const filter = p.filter && typeof p.filter === 'object' ? p.filter : null;
if (!D2LOOT.done[p.mode]) {
if (filter) d2lootRestore(filter, p.mode);   // 寫完後補進記憶體裡的設定，遊戲下次寫檔就會存進去
else if (!Object.keys(D2LOOT.mirror[p.mode] || {}).length) D2LOOT.done[p.mode] = true;
} else {
D2LOOT.live[p.mode] = filter;
d2lootSync(p.mode, filter);
}
}
}
return rawSet.apply(this, arguments);
};
d2lootSetup().catch(() => { /* 認不出遊戲程式：維持遊戲原本的選項 */ });
}
async function d2lootSetup() {
const urls = [...new Set([...performance.getEntriesByType('resource').map(e => e.name), ...[...document.querySelectorAll('script[src]')].map(e => e.src), ...[...document.querySelectorAll('link[rel=modulepreload]')].map(e => e.href)])].filter(n => /\/assets\/[^/]+\.js(\?|$)/.test(n) && !/\/ko-/.test(n));
const mods = await Promise.all(urls.map(url => Promise.race([import(url), new Promise((_, no) => setTimeout(no, 3000))]).catch(() => null)));
let cycle = null, labels = null;
for (const m of mods) for (const v of m ? Object.values(m) : []) {
if (typeof v === 'function') {
const s = Function.prototype.toString.call(v);
if (/\.indexOf\(\w+\(e,t\)\)\+n\+(\w+)\.length\)%\1\.length\]/.test(s)) cycle = v;
// 「是不是本職業的裝備」：底材表查得到、職業能用、物品上的職業技能都屬於這個職業
else if (/^function \w+\(e,t\)\{let n=\w+\.get\(e\.base\);return!!n&&\w+\(t,n\)&&\w+\(e\)\.every\(e=>e===t\)\}$/.test(s)) D2LOOT.forClass = v;
} else if (v && typeof v === 'object' && !Array.isArray(v) && typeof v.pick === 'string' && typeof v.keep === 'string' && typeof v.hidesell === 'string') labels = v;
}
if (!cycle || !labels) throw new Error('loot filter not found');
const grab = rule => {
const seen = [], rawIndexOf = Array.prototype.indexOf;
Array.prototype.indexOf = function () { if (rawIndexOf.call(this, 'hidesell') >= 0) seen.push(this); return rawIndexOf.apply(this, arguments); };
try { cycle({}, rule, 1); } finally { Array.prototype.indexOf = rawIndexOf; }
return seen[0];
};
const common = grab('magic'), codex = grab('codex');
if (!common || !codex || common === codex || Object.isFrozen(common) || Object.isFrozen(codex)) throw new Error('loot filter lists not found');
for (const v of Object.keys(D2LOOT_CAP)) { if (!common.includes(v)) common.push(v); if (!codex.includes(v)) codex.push(v); }
if (!codex.includes('keep')) codex.splice(1, 0, 'keep');
Object.assign(labels, D2LOOT_LABEL);
D2LOOT.ready = true;
if (D2ED.world) d2lootWrap(D2ED.world);
}
function d2ecTr(s) {
try { return (window.D2I18N && window.D2I18N.translate(s)) || s; } catch (_) { return s; }
}
async function d2ecLoad() {
if (D2EC.api && D2EC.api.ready) return D2EC.api;
// 電腦版（app://）的 performance 可能沒有資源紀錄，所以也看頁面上的 script 和 modulepreload
const urls = [...new Set([...performance.getEntriesByType('resource').map(e => e.name), ...[...document.querySelectorAll('script[src]')].map(e => e.src), ...[...document.querySelectorAll('link[rel=modulepreload]')].map(e => e.href)])].filter(n => /\/assets\/[^/]+\.js(\?|$)/.test(n) && !/\/ko-/.test(n));
const exportsAll = [];
// 遊戲入口檔（20261103 起）有頂層 await，遊戲開著時 import 永遠不會完成：每個檔最多等 3 秒，同時載入
const mods = await Promise.all(urls.map(url => Promise.race([import(url), new Promise((_, no) => setTimeout(no, 3000))])
.catch(() => null)));   // 這個檔案不能載入就跳過
for (const m of mods) if (m) exportsAll.push(...Object.values(m));
const fns = exportsAll.filter(v => typeof v === 'function').map(f => [f, Function.prototype.toString.call(f)]);
const find = test => (fns.find(([f, src]) => test(src, f)) || [])[0];
const api = D2EC.api = {
tables: find(s => /uniques:\w+\.uniques,bases:\w+\.bases/.test(s)),
normalize: find(s => s.includes("Wirt's Leg") && s.includes('`quest`') && s.includes('stats:')),
lines: find(s => s.includes('strModEnhancedDamage') && s.includes('priority')),
runewordStats: find((s, f) => f.length === 4 && /\.runewords\?\.\[/.test(s) && /\.runes\[/.test(s) && s.includes('flatMap') && !s.includes('reduce')),
size: find(s => /\.size\?\?\[1,1\]/.test(s)),
baseInfo: find(s => /itype:\w+\.itype/.test(s) && s.includes('bothHands')),
isType: find((s, f) => f.length === 2 && s.includes('.equiv')),
makers: fns.filter(([f, s]) => f.length === 3 && /\.roll=\[\d,/.test(s)).map(([f]) => f),   // 20261103 起 roll 版本從 1 變 2
cats: exportsAll.find(v => Array.isArray(v) && v[0] && Array.isArray(v[0].uniques) && v[0].label),
make: {},
// 掉落產生器（物品表、等級、…）：用來收集底材可能出現的隨機職業技能（staff）和底材自帶屬性（auto）。找不到就不提供這兩個選項
rollers: fns.filter(([f, s]) => f.length === 4 && (/\?`rare`:`magic`/.test(s) || /\.get\(\w+\.base\),`rare`,/.test(s))).map(([f]) => f),
};
const runewords = exportsAll.find(v => Array.isArray(v) && v[0] && Array.isArray(v[0].runes) && Array.isArray(v[0].types));
const bestBase = find((s, f) => f.length === 1 && /Math\.max\(\w+\.lvl,41\)/.test(s));
if (!api.tables || !api.normalize || !api.lines || !api.runewordStats || !api.size || !api.baseInfo || !api.isType || !api.cats || !runewords || !bestBase || !api.tables()) return null;
// 分類表是遊戲倉庫在用的物件，複製一份再加欄位
api.cats = api.cats.map(c => ({ ...c, uniques: c.uniques.map(d => ({ ...d })) }));
// 三把鑰匙、三個器官、燃燒的恐懼精華放在「護符」分頁最後（遊戲倉庫沒有這幾樣）
const misc = D2EC_MISC.map(m => ({ ...m, rarity: 'misc', lvl: 0 }));
const charmCat = api.cats.find(c => c.id === 'charm');
if (charmCat) charmCat.uniques.push(...misc); else api.cats.push({ id: 'misc', label: 'Charms', uniques: misc });
// 「底材」分頁：沒有任何能力的普通裝備，給玩家自己打洞或拿去做符文之語（放在護符分頁後面）
const tbl = api.tables();
const typeOf = {};
for (const d of api.cats.flatMap(c => c.uniques)) {
if (d.rarity !== 'unique' && d.rarity !== 'set') continue;
const info = api.baseInfo({ base: d.base });
if (info) typeOf[info.itype] = d.type;
}
const plain = Object.keys(tbl.bases).filter(name => {
const info = api.baseInfo({ base: name });
return info && D2EC_PLAIN_TYPES.includes(typeOf[info.itype]);
}).map(name => ({ name, base: name, rarity: 'base', type: typeOf[api.baseInfo({ base: name }).itype], lvl: 0 }));
if (plain.length) api.cats.splice(charmCat ? api.cats.indexOf(charmCat) + 1 : api.cats.length, 0, { id: 'bases', label: '底材', uniques: plain });
api.all = api.cats.flatMap(c => c.uniques);
for (const rarity of ['unique', 'set']) {
const def = api.all.find(d => d.rarity === rarity);
api.make[rarity] = api.makers.find(f => { try { return f(def, def.lvl, 99).rarity === rarity; } catch (_) { return false; } });
if (!api.make[rarity]) return null;
}
// 符文之語可以做在很多底材上：遊戲沒有匯出底材表，用 itype 認類型，從獨特和套裝的底材查裝備欄位
api.typeOfItype = {};
for (const d of api.all) {
if (d.rarity === 'runeword' || d.rarity === 'misc') continue;
const info = api.baseInfo({ base: d.base });
if (info) api.typeOfItype[info.itype] = d.type;
}
for (const d of api.all) {
if (d.rarity !== 'runeword') continue;
const row = runewords.find(x => x.name === d.name);
d.types = row ? row.types : [];
d.excluded = row && row.excluded;
// 分類表在表格載入前就建好，符文之語的預設底材不可靠，這裡重新問一次
d.base = bestBase(d.name) || d2ecRunewordBases(d)[0] || d.base;
d.type = api.typeOfItype[(api.baseInfo({ base: d.base }) || {}).itype] || d.type;
}
for (const d of api.all) {
d.zh = d2ecTr(d.name);
d.hay = [d.name, d.zh, d.base, d2ecTr(d.base), d.set || '', d.set ? d2ecTr(d.set) : '', D2EC_RARITY[d.rarity], ...(d.runes || [])].join(' ').toLowerCase();
}
api.ready = true;
return api;
}
function d2ecRunewordBases(def) {
const { api } = D2EC;
const t = api.tables();
const list = Object.keys(t.bases).filter(name => {
const info = api.baseInfo({ base: name });
if (!info || !api.typeOfItype[info.itype]) return false;
const sockets = t.bases[name].sockets;
if (!sockets || sockets[sockets.length - 1] < def.runes.length) return false;
return def.types.some(x => api.isType(info.itype, x)) && !(def.excluded || []).some(x => api.isType(info.itype, x));
});
return list.includes(def.base) ? list : [def.base, ...list];
}
// 符文之語做在職業底材上時，遊戲會照底材加「隨機職業技能」（最多 3 個，各 1～3 級，staff）和「底材自帶屬性」（一組，auto），
// 這兩張表沒有匯出，所以用遊戲的掉落產生器對同一種底材產生一批物品，收集出現過的項目和數值範圍（每種底材只收一次）
const D2EC_BASEMODS = new Map();
function d2ecBaseMods(base) {
if (D2EC_BASEMODS.has(base)) return D2EC_BASEMODS.get(base);
const staff = new Map(), auto = new Map();
for (const roll of D2EC.api.rollers || []) {
for (let n = 0; n < 700; n++) {
let item;
try { item = roll({ base }, 1 + (n % 99), 99, undefined); } catch (_) { break; }
const mods = (item && item.mods) || [];
for (const m of mods) if (m.staff && typeof m.stat === 'string') staff.set(m.stat, Math.max(staff.get(m.stat) || 0, m.value));
const row = mods.filter(m => m.auto && typeof m.stat === 'string');
if (!row.length) continue;
const key = row.map(m => m.stat).join('|');
// 同一組裡各項的範圍可能不同（例如攻擊準確率和增強傷害），各自記錄；same：這一組每次都同一個數值（例如所有抗性）
// mods 留完整的一份當樣板（毒素傷害還有 length 欄位，少了遊戲不收）
const r = auto.get(key) || { stats: row.map(m => m.stat), mods: row.map(m => ({ ...m })), lo: row.map(() => Infinity), hi: row.map(() => -Infinity), same: true };
row.forEach((m, k) => { r.lo[k] = Math.min(r.lo[k], m.value); r.hi[k] = Math.max(r.hi[k], m.value); });
if (row.some(m => m.value !== row[0].value)) r.same = false;
auto.set(key, r);
}
}
const out = { staff: [...staff.keys()].sort(), auto: [...auto.values()] };
D2EC_BASEMODS.set(base, out);
return out;
}
function d2ecBaseItem(def, base) {
const { api } = D2EC;
if (def.rarity !== 'runeword') {
const item = api.make[def.rarity](def, def.lvl, 99);
delete item.roll;   // 有 roll 的物品讀檔時會照種子重骰
return item;
}
const type = api.typeOfItype[(api.baseInfo({ base }) || {}).itype] || def.type;
const slot = type === 'weapon' ? 'weapon' : type === 'shield' ? 'shield' : 'helm';
const stats = api.runewordStats(def.name, def.runes, slot, 99);
const item = { id: Math.random().toString(36).slice(2, 10) + Date.now().toString(36), base, type, rarity: 'runeword', name: def.name, level: def.lvl, mods: [], stats: stats || [] };
const range = api.tables().bases[base].defense;
if (range) item.defense = item.stats.some(s => s.stat === 'item_armor_percent') ? range[1] + 1 : range[1];
return item;
}
// 把物品表的每一列整理成 [{ tag, stats, rows:[可調整的列], fixed:[固定的 stat] }]，stats 是對應到物品上的那個陣列
function d2ecGroups(def, base, item) {
const t = D2EC.api.tables();
const groups = [];
const walk = (tag, rows, stats, at) => {
const g = { tag, at, rows: [], fixed: [] };
let i = 0;
for (const row of rows) {
const lo = row.min, hi = Math.max(row.min, row.max);
const idxs = [], slots = [];
for (const { stat, func } of row.stats) {
if (!stats[i] || stats[i].stat !== stat) throw new Error('物品表和物品對不起來：' + stat);
idxs.push(i);
// func 12：骰的是技能編號；func 36（例如地獄火炬的隨機職業技能）：骰的是職業 0～6，技能等級是固定的 val。兩種都寫進 param
if (!D2EC_FIXED_FUNCS.has(func) && !(func === 17 && row.par)) slots.push({ i, field: func === 12 || func === 36 ? 'param' : 'value' });
i++;
}
if (hi > lo && slots.length) g.rows.push({ lo, hi, idxs, slots, def: Math.trunc((lo + hi) / 2) });
else g.fixed.push(...idxs.map(k => stats[k]));
}
groups.push(g);
};
if (def.rarity === 'unique') walk('', t.uniques[def.name].props, item.stats, 'stats');
else if (def.rarity === 'set') {
const row = t.setItems[def.name];
walk('', row.props, item.stats, 'stats');
(row.bonus || []).forEach((rows, n) => walk(`套裝加成 ${n + 1}`, rows, item.bonus[n], n));
} else {
const slot = item.type === 'weapon' ? 'weapon' : item.type === 'shield' ? 'shield' : 'helm';
walk('', [...t.runewords[def.name].props, ...def.runes.flatMap(r => (t.runes[r] || {})[slot] || [])], item.stats, 'stats');
}
return groups;
}
function d2ecLineTexts(stats) {
const level = (D2ED.player && D2ED.player.level) || 1;
let lines = [];
try { lines = D2EC.api.lines(stats, level) || []; } catch (_) { /* 顯示不出來就用下面的欄位名稱 */ }
return lines.map(x => d2ecTr(x.text));
}
function d2ecRowText(row, stats, v) {
const part = row.idxs.map(i => ({ ...stats[i] }));
for (const s of row.slots) part[row.idxs.indexOf(s.i)][s.field] = v;
return d2ecLineTexts(part).join('、');
}
function d2ecIconUrl(rarity, name, base) {
const art = D2ED.world && D2ED.world.art && D2ED.world.art.items;
if (!art) return '';
const one = x => (Array.isArray(x) ? x[0] : x);
const icon = (rarity === 'unique' && one((art.uniqueIcons || {})[name])) || (rarity === 'set' && one((art.setIcons || {})[name])) || one((art.icons || {})[base]);
return (icon && icon.url) || '';
}
function d2ecIcon(rarity, name, base) {
const url = d2ecIconUrl(rarity, name, base);
return url ? d2edEl('img', { src: url, alt: '', draggable: 'false' }) : null;
}
function d2ecNotice(msg) {
const box = D2EC.overlay;
if (!box) return;
const modal = d2edEl('div', { class: 'd2ec-modal' });
modal.append(d2edEl('div', { class: 'd2ec-modal-box', role: 'alertdialog' },
d2edEl('p', {}, msg),
d2edEl('button', { type: 'button', class: 'd2ec-ok', onclick: () => modal.remove() }, '確定')));
box.append(modal);
}
function d2ecInventory() {
const box = D2EC.overlay && D2EC.overlay.querySelector('.d2ec-inv');
if (!box) return;
const cls = D2ED.player && D2ED.player.cls;
const items = (d2edReadSave().inventoryByClass || {})[cls] || [];
const { size } = D2EC.api;
let used = 0;
const info = d2edEl('span', { class: 'd2ec-invinfo' });
const grid = d2edEl('div', { class: 'd2ec-grid' });
for (const item of items) {
if (!item.at) continue;
const [w, h] = size(item);
used += w * h;
const name = d2ecTr(item.name);
const show = () => { info.textContent = name; };
const cell = d2edEl('div', { class: 'd2ec-item d2ec-r-' + item.rarity, title: name, style: `grid-column:${item.at.x + 1}/span ${w};grid-row:${item.at.y + 1}/span ${h}`, onmouseenter: show, onclick: show },
d2ecIcon(item.rarity, item.name, item.base));
if (!cell.firstChild) cell.textContent = name;
grid.append(cell);
}
const total = D2EC_GRID.columns * D2EC_GRID.rows;
box.replaceChildren(d2edEl('div', { class: 'd2ec-invhead' }, d2edEl('b', {}, `${d2ecTr(cls ? cls[0].toUpperCase() + cls.slice(1) : '')} 物品欄`), d2edEl('span', {}, `已用 ${used} / ${total} 格`), info), grid);
}
function d2ecCreate() {
const sel = D2EC.sel;
if (!sel) return;
const world = D2ED.world;
if (!world || typeof world.carry !== 'function') { d2ecNotice('還沒抓到遊戲世界，請進入地圖後再試一次。'); return; }
if (sel.plain) {
const item = d2ecPlainItem(sel.base);
if (!item.type) item.type = sel.def.type;   // 沒有掉落產生器（舊版電腦版主程序）時用分類表的部位
if (sel.defense) item.defense = sel.defense.read(); else if (sel.fixedDefense !== undefined) item.defense = sel.fixedDefense;
if (sel.sockets) { const n = sel.sockets(); if (n > 0) item.sockets = n; }
const ready = item.type ? D2EC.api.normalize(JSON.parse(JSON.stringify(item))) : null;
if (!ready) { d2ecNotice('遊戲不接受這件底材的資料，沒有建立。'); return; }
if (!world.carry(ready)) { d2ecNotice('物品欄已滿，請整理背包。'); return; }
d2ecInventory();
const msg = D2EC.overlay.querySelector('.d2ec-msg');
msg.textContent = `已放入物品欄：${d2ecTr(sel.base)}${ready.sockets ? `（${ready.sockets} 洞）` : ''}`;
clearTimeout(msg._h);
msg._h = setTimeout(() => { msg.textContent = ''; }, 3000);
return;
}
if (sel.misc) {
const count = sel.count ? sel.count() : 1;
const items = sel.def.kind === 'quest' ? Array.from({ length: count }, () => d2ecMiscItem(sel.def, 1)) : [d2ecMiscItem(sel.def, count)];
let done = 0;
for (const it of items) {
const ready = D2EC.api.normalize(JSON.parse(JSON.stringify(it)));
if (!ready) { d2ecNotice('遊戲不接受這個道具的資料，沒有建立。'); break; }
if (!world.carry(ready)) { d2ecNotice('物品欄已滿，請整理背包。'); break; }
done++;
}
if (!done) return;
d2ecInventory();
const msg = D2EC.overlay.querySelector('.d2ec-msg');
msg.textContent = `已放入物品欄：${sel.def.zh} ×${sel.def.kind === 'quest' ? done : count}`;
clearTimeout(msg._h);
msg._h = setTimeout(() => { msg.textContent = ''; }, 3000);
return;
}
const item = d2ecBaseItem(sel.def, sel.base);
for (const g of sel.groups) {
const stats = g.at === 'stats' ? item.stats : item.bonus[g.at];
for (const row of g.rows) if (row.read) for (const s of row.slots) stats[s.i][s.field] = row.read();
}
if (sel.defense) item.defense = sel.defense.read();
if (sel.ethereal && sel.ethereal()) {   // 跟遊戲做無形符文之語一樣：防禦 ×1.5 取整數，武器傷害由遊戲照 ethereal 自己算
item.ethereal = true;
if (item.defense !== undefined) item.defense = Math.floor(item.defense * 3 / 2);
}
if (sel.def.rarity === 'runeword') {
const staff = (sel.staff || []).map(f => f()).filter(Boolean).filter((m, i, a) => a.findIndex(x => x.stat === m.stat) === i);
item.mods = [...(sel.auto ? sel.auto() : []), ...staff];
}
if (sel.sockets) { const n = sel.sockets(); if (n > 0) item.sockets = n; }
const ready = D2EC.api.normalize(JSON.parse(JSON.stringify(item)));
if (!ready) { d2ecNotice('遊戲不接受這件裝備的資料，沒有建立。'); return; }
if (!world.carry(ready)) { d2ecNotice('物品欄已滿，請整理背包。'); return; }
d2ecInventory();
const msg = D2EC.overlay.querySelector('.d2ec-msg');
msg.textContent = `已放入物品欄：${sel.def.zh}`;
clearTimeout(msg._h);
msg._h = setTimeout(() => { msg.textContent = ''; }, 3000);
}
function d2ecNumberRow(label, lo, hi, def, onValue) {
const text = d2edEl('span', { class: 'd2ec-label' }, label(def));
const input = d2edEl('input', { type: 'number', min: String(lo), max: String(hi), step: '1', value: String(def) });
const read = () => {
const v = Math.trunc(Number(input.value));
return input.value === '' || !Number.isFinite(v) ? def : Math.min(hi, Math.max(lo, v));
};
input.addEventListener('input', () => { text.textContent = label(read()); });
input.addEventListener('change', () => { input.value = String(read()); text.textContent = label(read()); });
onValue(read);
return d2edEl('label', { class: 'd2ec-row' }, text, d2edEl('span', { class: 'd2ec-range' }, `${lo} ～ ${hi}`), input);
}
// 底材附加能力（mods）的名稱：遊戲的說明文字函式只吃物品表格式（stats），這幾種 mods 自己對照
const D2EC_MOD_ZH = { life: '生命', mana: '法力', fireResist: '火焰抗性', coldResist: '冰寒抗性', lightningResist: '閃電抗性', poisonResist: '毒素抗性', attackRatingPoints: '攻擊準確率', enhancedDamage: '增強傷害 %', poisonMinDamage: '最小毒素傷害', poisonMaxDamage: '最大毒素傷害' };
const D2EC_CLASSES = ['Amazon', 'Sorceress', 'Necromancer', 'Paladin', 'Barbarian', 'Druid', 'Assassin'];
function d2ecModName(stat) {
if (D2EC_MOD_ZH[stat]) return D2EC_MOD_ZH[stat];
let m = /^skilltab(\d+)$/.exec(stat);
if (m) { const n = Number(m[1]); return `${d2ecTr(D2EC_CLASSES[Math.floor(n / 3)] || '')}技能（第 ${n % 3 + 1} 類）`; }
m = /^skill:(\w+)$/.exec(stat);
if (m) return d2ecTr(m[1].replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, c => c.toUpperCase())).replace(/（[^）]*）$/, '');   // 拿掉技能名稱後的元素標記
return d2ecTr(stat);
}
// 無形、洞數、符文之語底材的隨機職業技能和自帶屬性。遊戲讀檔規則：無形只收符文之語（而且底材要有耐久度）；
// 洞數只收獨特和套裝（上限照底材，本身有「插槽」能力的由那一列決定）；符文之語的 mods 只留 auto（一組）和 staff（最多 3 個）
function d2ecExtras(def, base, item, sel) {
const out = [];
const row = D2EC.api.tables().bases[base] || {};
if (def.rarity === 'runeword') {
if (!row.noDurability) {
const cb = d2edEl('input', { type: 'checkbox' });
sel.ethereal = () => cb.checked;
out.push(d2edEl('label', { class: 'd2ec-row' }, d2edEl('span', { class: 'd2ec-label' }, '無形（防禦和武器傷害 ×1.5，無法修理）'), cb));
}
const bm = d2ecBaseMods(base);
if (bm.staff.length) {
out.push(d2edEl('h4', {}, '底材隨機職業技能（最多 3 個）'));
const opts = bm.staff.map(s => [s, d2ecModName(s)]).sort((a, b) => a[1].localeCompare(b[1], 'zh-Hant'));
sel.staff = [];
for (let k = 0; k < 3; k++) {
const pick = d2edEl('select', {}, d2edEl('option', { value: '' }, '（無）'), ...opts.map(([v, t]) => d2edEl('option', { value: v }, t)));
const lv = d2edEl('input', { type: 'number', min: '1', max: '3', step: '1', value: '3' });
lv.addEventListener('change', () => { lv.value = String(Math.min(3, Math.max(1, Math.trunc(Number(lv.value)) || 1))); });
sel.staff.push(() => pick.value ? { stat: pick.value, value: Math.min(3, Math.max(1, Math.trunc(Number(lv.value)) || 1)), staff: true } : null);
out.push(d2edEl('label', { class: 'd2ec-row' }, pick, d2edEl('span', { class: 'd2ec-range' }, '+1 ～ 3 級'), lv));
}
}
if (bm.auto.length) {
out.push(d2edEl('h4', {}, '底材自帶屬性'));
const vals = d2edEl('div', {});
const pick = d2edEl('select', {}, d2edEl('option', { value: '' }, '（無）'), ...bm.auto.map((r, k) => d2edEl('option', { value: String(k) }, r.stats.map(d2ecModName).join('、'))));
const build = () => {
const r = bm.auto[pick.value];
vals.replaceChildren();
sel.auto = null;
if (!r) return;
const reads = [];
if (r.same) {
const lo = Math.min(...r.lo), hi = Math.max(...r.hi);
vals.append(d2ecNumberRow(v => `${r.stats.map(d2ecModName).join('、')} ${v}`, lo, hi, hi, read => { for (const _ of r.stats) reads.push(read); }));
} else r.stats.forEach((s, k) => vals.append(d2ecNumberRow(v => `${d2ecModName(s)} ${v}`, r.lo[k], r.hi[k], r.hi[k], read => reads.push(read))));
sel.auto = () => {
const mods = r.mods.map((m, k) => ({ ...m, value: reads[k](), auto: true }));
const min = mods.find(m => m.stat === 'poisonMinDamage'), max = mods.find(m => m.stat === 'poisonMaxDamage');
if (min && max && max.value < min.value) max.value = min.value;
return mods;
};
};
pick.addEventListener('change', build);
out.push(d2edEl('label', { class: 'd2ec-row' }, pick), vals);
}
} else {
const sockets = Array.isArray(row.sockets) ? (row.sockets[2] ?? row.sockets[row.sockets.length - 1]) : 0;
if (sockets > 0 && !item.stats.some(s => s.stat === 'item_numsockets')) out.push(d2ecNumberRow(v => v ? `洞數 ${v}` : '洞數 0（不打洞）', 0, sockets, 0, read => { sel.sockets = read; }));
}
return out;
}
function d2ecSelect(def, base = def.base) {
const box = D2EC.overlay.querySelector('.d2ec-editor');
if (def.rarity === 'base') {   // 無能力底材：只調防禦和洞數
const sel = D2EC.sel = { def, base: def.base, plain: true };
for (const b of D2EC.overlay.querySelectorAll('.d2ec-result')) b.classList.toggle('on', b._def === def);
const row = D2EC.api.tables().bases[def.base] || {};
const head = d2edEl('div', { class: 'd2ec-title' }, d2ecIcon('base', def.name, def.base), d2edEl('div', {}, d2edEl('b', {}, d2ecTr(def.base)), d2edEl('small', {}, '底材・普通品質')));
const body = d2edEl('div', {},
d2edEl('p', { class: 'd2ec-fixed' }, '僅為底材：不帶任何能力（沒有魔法、稀有、獨特屬性），只有底材本身的基本數值。可以調整防禦和洞數，拿去鑲嵌寶石、珠寶或符文之語。'),
d2edEl('p', { class: 'd2ec-fixed' }, '無形：遊戲規定只有符文之語可以是無形，底材設成無形讀檔時會被遊戲刪除，所以這裡不提供。要無形請直接建立符文之語並勾選無形。'));
const range = row.defense;
if (range && range[1] > range[0]) body.append(d2ecNumberRow(v => `底材防禦 ${v}`, range[0], range[1], range[1], read => { sel.defense = { read }; }));
else if (range) sel.fixedDefense = range[1];
const sockets = Array.isArray(row.sockets) ? (row.sockets[2] ?? row.sockets[row.sockets.length - 1]) : 0;
if (sockets > 0) body.append(d2ecNumberRow(v => v ? `洞數 ${v}` : '洞數 0（不打洞）', 0, sockets, sockets, read => { sel.sockets = read; }));
else body.append(d2edEl('p', { class: 'd2ec-fixed' }, '這種底材不能打洞'));
box.replaceChildren(head, body, d2edEl('div', { class: 'd2ec-actions' },
d2edEl('button', { type: 'button', class: 'd2ec-ok', onclick: d2ecCreate }, '確定'), d2edEl('span', { class: 'd2ec-msg' })));
return;
}
if (def.rarity === 'misc') {   // 鑰匙、器官、精華：只選數量
const sel = D2EC.sel = { def, misc: true };
for (const b of D2EC.overlay.querySelectorAll('.d2ec-result')) b.classList.toggle('on', b._def === def);
const head = d2edEl('div', { class: 'd2ec-title d2ec-r-unique' }, d2ecIcon('misc', def.name, def.base), d2edEl('div', {}, d2edEl('b', {}, def.zh), d2edEl('small', {}, `道具・${d2ecBaseLabel(def)}`)));
const note = def.kind === 'quest' ? '每一個都會算進物品欄金幣旁邊的數量（每次最多 ' + def.max + ' 個）' : '一疊最多 99 個，會自動疊到物品欄裡現有的精華上';
box.replaceChildren(head, d2edEl('p', { class: 'd2ec-fixed' }, note),
d2ecNumberRow(v => `數量 ${v}`, 1, def.max, 1, read => { sel.count = read; }),
d2edEl('div', { class: 'd2ec-actions' }, d2edEl('button', { type: 'button', class: 'd2ec-ok', onclick: d2ecCreate }, '確定'), d2edEl('span', { class: 'd2ec-msg' })));
return;
}
let item, groups;
try {
item = d2ecBaseItem(def, base);
groups = d2ecGroups(def, base, item);
} catch (e) {
box.replaceChildren(d2edEl('p', { class: 'd2ec-hint' }, '這件裝備讀不到能力資料，可能是遊戲更新了。'));
return;
}
const sel = D2EC.sel = { def, base, groups };
for (const b of D2EC.overlay.querySelectorAll('.d2ec-result')) b.classList.toggle('on', b._def === def);
const baseLine = def.rarity === 'runeword'
? d2edEl('label', { class: 'd2ec-row' }, d2edEl('span', { class: 'd2ec-label' }, '底材'),
d2edEl('select', { onchange: e => d2ecSelect(def, e.target.value) }, ...d2ecRunewordBases(def).map(name => {
const o = d2edEl('option', { value: name }, d2ecTr(name));
if (name === base) o.selected = true;
return o;
})))
: d2edEl('p', { class: 'd2ec-base' }, d2ecTr(base));
const head = d2edEl('div', { class: 'd2ec-title d2ec-r-' + def.rarity }, d2ecIcon(def.rarity, def.name, base), d2edEl('div', {}, d2edEl('b', {}, def.zh), d2edEl('small', {}, `${D2EC_RARITY[def.rarity]}${def.set ? '・' + d2ecTr(def.set) : ''}${def.runes ? '・' + def.runes.map(r => d2ecTr(r + ' Rune').replace(/符文$/, '')).join('・') : ''}`)));
const body = d2edEl('div', {});
const range = D2EC.api.tables().bases[base] && D2EC.api.tables().bases[base].defense;
if (range && item.defense !== undefined && !item.stats.some(s => s.stat === 'item_armor_percent') && range[1] > range[0]) {
const lo = range[0], hi = range[1];
body.append(d2ecNumberRow(v => `底材防禦 ${v}`, lo, hi, Math.trunc((lo + hi) / 2), read => { sel.defense = { read }; }));
} else if (item.defense !== undefined) body.append(d2edEl('p', { class: 'd2ec-fixed' }, `底材防禦 ${item.defense}`));
body.append(...d2ecExtras(def, base, item, sel));
for (const g of groups) {
const stats = g.at === 'stats' ? item.stats : item.bonus[g.at];
if (g.tag) body.append(d2edEl('h4', {}, g.tag));
for (const row of g.rows) {
// 插槽、耐久度這類遊戲不顯示也沒有作用的能力不列出來，照骰出來的值
if (d2ecLineTexts(row.idxs.map(i => ({ ...stats[i] }))).length) body.append(d2ecNumberRow(v => d2ecRowText(row, stats, v), row.lo, row.hi, row.def, read => { row.read = read; }));
}
for (const line of d2ecLineTexts(g.fixed.map(s => ({ ...s })))) body.append(d2edEl('p', { class: 'd2ec-fixed' }, line));
}
box.replaceChildren(head, baseLine, body, d2edEl('div', { class: 'd2ec-actions' },
d2edEl('button', { type: 'button', class: 'd2ec-ok', onclick: d2ecCreate }, '確定'), d2edEl('span', { class: 'd2ec-msg' })));
}
function d2ecSearch() {
const { overlay, api } = D2EC;
const list = overlay.querySelector('.d2ec-results');
const words = overlay.querySelector('.d2ec-search').value.toLowerCase().split(/\s+/).filter(Boolean);
if (!words.length) { list.replaceChildren(d2edEl('p', { class: 'd2ec-hint' }, '輸入裝備名稱、底材或套裝關鍵字，或按「自行挑選」。')); return; }
const found = api.all.filter(d => words.every(w => d.hay.includes(w)));
if (!found.length) { list.replaceChildren(d2edEl('p', { class: 'd2ec-hint' }, '找不到符合的裝備。')); return; }
list.replaceChildren(...found.map(def => {
const b = d2edEl('button', { type: 'button', class: 'd2ec-result d2ec-r-' + def.rarity, onclick: () => d2ecSelect(def) }, d2ecIcon(def.rarity, def.name, def.base), d2edEl('span', {}, def.zh, d2edEl('small', {}, `${D2EC_RARITY[def.rarity]}・${d2ecBaseLabel(def)}`)));
b._def = def;
b.classList.toggle('on', !!D2EC.sel && D2EC.sel.def === def);
return b;
}));
if (found.length === 1 && !(D2EC.sel && D2EC.sel.def === found[0])) d2ecSelect(found[0]);
}
// 自行挑選：跟倉庫「獨特物品」分頁一樣的分類和清單，點一件就填進搜尋並開始建立
function d2ecPicker() {
const { overlay, api } = D2EC;
if (overlay.querySelector('.d2ec-picker')) return;
const kept = new Set((d2edReadSave().uniques || []).map(x => x.name));
const tabs = d2edEl('div', { class: 'd2ec-tabs' });
const slots = d2edEl('div', { class: 'd2ec-slots' });
const picker = d2edEl('div', { class: 'd2ec-picker' });
const show = () => {
const cat = api.cats.find(c => c.id === D2EC.cat) || api.cats[0];
for (const t of tabs.children) t.classList.toggle('on', t._id === cat.id);
slots.replaceChildren(...cat.uniques.map(def => d2edEl('button', { type: 'button', class: `d2ec-slot d2ec-r-${def.rarity}${kept.has(def.name) ? ' kept' : ''}`, onclick: () => {
picker.remove();
overlay.querySelector('.d2ec-search').value = def.zh;
D2EC.sel = null;
d2ecSearch();
d2ecSelect(def);
} }, d2ecIcon(def.rarity, def.name, def.base), d2edEl('span', {}, def.zh), d2edEl('small', {}, d2ecBaseLabel(def)))));
slots.scrollTop = 0;
};
for (const c of api.cats) {
const t = d2edEl('button', { type: 'button', onclick: () => { D2EC.cat = c.id; show(); } }, d2ecTr(c.label));
t._id = c.id;
tabs.append(t);
}
picker.append(d2edEl('div', { class: 'd2ec-head' }, d2edEl('b', {}, '獨特物品'), d2edEl('span', { class: 'd2ec-grow' }), d2edEl('button', { type: 'button', class: 'd2ec-x', 'aria-label': '關閉', onclick: () => picker.remove() }, '×')), tabs, slots);
overlay.append(picker);
show();
}
// 電腦版的裝備函式要靠新版主程序（d2zh-inject.cjs）補匯出，主程序更新後要重開遊戲才生效
function d2ecFailText() {
return d2ecNeedRestart() ? '電腦版剛更新，請完全關閉遊戲再重開一次，就能使用裝備創造。' : '讀不到遊戲的裝備資料，可能是資料還沒載入，或遊戲更新了。';
}
function d2ecClose() {
if (!D2EC.overlay) return;
D2EC.overlay.remove();
D2EC.overlay = null;
D2EC.sel = null;
}
async function d2ecShow() {
if (D2EC.overlay) return;
const search = d2edEl('input', { type: 'search', class: 'd2ec-search', placeholder: '搜尋裝備，例如：謎團', autocomplete: 'off', spellcheck: 'false', 'aria-label': '搜尋裝備' });
const results = d2edEl('div', { class: 'd2ec-results' }, d2edEl('p', { class: 'd2ec-hint' }, '讀取裝備資料中…'));
const overlay = D2EC.overlay = d2edEl('div', { id: 'd2ec-overlay', role: 'dialog', 'aria-label': '裝備創造' },
d2edEl('div', { class: 'd2ec-head' }, d2edEl('b', {}, '裝備創造'), search,
d2edEl('button', { type: 'button', class: 'd2ec-pick', onclick: () => { if (D2EC.api && D2EC.api.ready) d2ecPicker(); else d2ecNotice(D2EC.failed ? d2ecFailText() : '裝備資料還在讀取，請稍候再按一次。'); } }, '自行挑選'),
d2edEl('button', { type: 'button', class: 'd2ec-x', 'aria-label': '關閉', onclick: d2ecClose }, '×')),
d2edEl('div', { class: 'd2ec-main' }, results, d2edEl('div', { class: 'd2ec-editor' })),
d2edEl('div', { class: 'd2ec-inv' }));
for (const type of ['keydown', 'keyup', 'keypress']) overlay.addEventListener(type, e => {
e.stopPropagation();
if (type !== 'keydown' || e.key !== 'Escape') return;
const top = overlay.querySelector('.d2ec-modal') || overlay.querySelector('.d2ec-picker');
if (top) top.remove(); else d2ecClose();
});
document.body.append(overlay);
const api = await d2ecLoad();
if (D2EC.overlay !== overlay) return;
D2EC.failed = !api;
if (!api) { results.replaceChildren(d2edEl('p', { class: 'd2ec-hint' }, d2ecFailText())); return; }
search.addEventListener('input', d2ecSearch);
d2ecSearch();
d2ecInventory();
search.focus();
}
// 電腦版主程序更新後還沒重開：玩家常略過文字提示，所以直接幫他關遊戲（d2app.quit 是遊戲自己「離開遊戲」用的，會先存檔）
function d2ecNeedRestart() {
const desk = window.__D2ZH_DESKTOP;
return !!desk && (desk.ecExports || 0) < 3;
}
function d2ecQuitGame(card) {
const quit = () => {
const app = window.d2app;
if (app && typeof app.quit === 'function') app.quit().catch(() => window.close());
else window.close();
};
try { localStorage.setItem('d2zh:ecQuitAt', String(Date.now())); } catch (e) {}
let left = 5;
const count = d2edEl('b', { style: 'display: inline; color: #e8c060' }, String(left));
const modal = d2edEl('div', { class: 'd2ed-modal' });
modal.append(d2edEl('div', { class: 'd2ed-modal-box', role: 'alertdialog', 'aria-label': '需要重新啟動遊戲' },
d2edEl('p', { style: 'margin: 6px 0; color: #d8d0c0' }, '電腦版剛更新，要重新啟動遊戲才能使用裝備創造。遊戲會自動存檔並關閉，請再從桌面重新打開遊戲。'),
d2edEl('p', { style: 'margin: 6px 0; color: #d8d0c0' }, count, ' 秒後自動關閉遊戲'),
d2edEl('div', { class: 'd2ed-row' },
d2edEl('button', { type: 'button', class: 'd2ed-main', onclick: () => { clearInterval(timer); quit(); } }, '立即關閉遊戲'))));
card.append(modal);
const timer = setInterval(() => {
left--;
count.textContent = String(Math.max(left, 0));
if (left > 0) return;
clearInterval(timer);
quit();
}, 1000);
}
function d2ecConfirm() {
const card = D2ED.panel && D2ED.panel.querySelector('.d2ed-card');
if (!card || card.querySelector('.d2ed-modal')) return;
if (d2ecNeedRestart()) {
// 只在自動更新開著、而且還沒幫他關過時才強制關遊戲；關過一次重開還是舊版（更新沒下載成功或被關掉），再關也沒用，改成說明
let quitBefore = false;
try { quitBefore = !!localStorage.getItem('d2zh:ecQuitAt'); } catch (e) {}
if (window.__D2ZH_DESKTOP.autoUpdate !== false && !quitBefore) { d2ecQuitGame(card); return; }
const tip = d2edEl('div', { class: 'd2ed-modal' });
tip.append(d2edEl('div', { class: 'd2ed-modal-box', role: 'alertdialog', 'aria-label': '需要更新電腦版' },
d2edEl('p', { style: 'margin: 6px 0; color: #d8d0c0' }, quitBefore
? '遊戲重開後，電腦版中文化的主程序還是舊版（可能更新沒有下載成功），所以裝備創造還不能用。請在面板下方按「檢查更新」，更新完成後再完全關閉遊戲重開一次。'
: '你關掉了電腦版中文化的自動更新，主程序還是舊版，所以裝備創造還不能用。請在面板下方按「檢查更新」，更新完成後再完全關閉遊戲重開一次。'),
d2edEl('div', { class: 'd2ed-row' }, d2edEl('button', { type: 'button', class: 'd2ed-main', onclick: () => tip.remove() }, '確定'))));
card.append(tip);
return;
}
try { localStorage.removeItem('d2zh:ecQuitAt'); } catch (e) {}
const modal = d2edEl('div', { class: 'd2ed-modal' });
const close = () => modal.remove();
modal.append(d2edEl('div', { class: 'd2ed-modal-box', role: 'alertdialog', 'aria-label': '裝備創造提醒' },
d2edEl('p', { style: 'margin: 6px 0; color: #d8d0c0' }, '請小心使用此功能，會影響遊戲終局體驗！建議適度使用以免沒東西可玩。'),
d2edEl('div', { class: 'd2ed-row' },
d2edEl('button', { type: 'button', class: 'd2ed-main', onclick: () => { close(); d2ecShow(); } }, '確定'),
d2edEl('button', { type: 'button', onclick: close }, '取消'))));
card.append(modal);
}
function d2edRender() {
const body = D2ED.panel.querySelector('.d2ed-body');
// 遊戲中改這一局的人物；在主選單（不在一局裡）改恰西的永久升級
const inRun = !document.body.classList.contains('no-run');
const sections = d2edUnlocked() ? [inRun ? d2edRunSection() : d2edSaveSection(), d2edPerfSection(), d2edBgMuteSection(), d2edShardSection(), d2edEndPullSection(), d2edSkillZoomSection(), d2edUpdateSection()] : [d2edLockSection(), d2edPerfSection(), d2edBgMuteSection(), d2edShardSection(), d2edEndPullSection(), d2edSkillZoomSection(), d2edUpdateSection()];
body.replaceChildren(...sections.filter(Boolean));
}
// ====== 問題回報（Google 表單，不需登入、不收集信箱） ======
// 用「預先填入」連結帶入書籤版本和遊戲版本（entry 編號是這份表單各題的代號）
const D2ZH_REPORT_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSeHqwwgP7b3KU3nbM_oUorpG0V4Ue0NFvsDxs-SkVKkwZiZxA/viewform';
const D2ZH_REPORT_ENTRY = { bookmark: 'entry.2138449509', game: 'entry.1834001059' };
// 遊戲版本：正在跑的版本寫在 moved-*.js（`Build 20261027.4 ·bf1a451d`）；讀不到就用網站上的 build.json（最新版）
let d2zhGameBuild = '';
(async () => {
try {
const src = performance.getEntriesByType('resource').map(e => e.name).find(n => /\/moved-[\w-]+\.js(\?|$)/.test(n));
if (src) d2zhGameBuild = (await (await fetch(src)).text()).match(/`Build ([^`]+)`/)?.[1] || '';
if (!d2zhGameBuild) d2zhGameBuild = String((await (await fetch(new URL('../build.json', document.baseURI), { cache: 'no-store' })).json())?.build || '').trim();
} catch (_) { /* 讀不到就讓玩家自己填 */ }
})();
function d2zhReportOpen() {
const url = new URL(D2ZH_REPORT_FORM);
url.searchParams.set('usp', 'pp_url');
url.searchParams.set(D2ZH_REPORT_ENTRY.bookmark, D2ZH_VERSION);
if (d2zhGameBuild) url.searchParams.set(D2ZH_REPORT_ENTRY.game, d2zhGameBuild);
window.open(url.href, '_blank', 'noopener');
}
function d2edOpen() {
if (D2ED.panel) return;
const close = () => { D2ED.panel.remove(); D2ED.panel = null; };
D2ED.panel = d2edEl('div', { id: 'd2ed-overlay', onclick: e => { if (e.target.id === 'd2ed-overlay') close(); } },
d2edEl('div', { class: 'd2ed-card', role: 'dialog', 'aria-label': '書籤修改' },
d2edEl('div', { class: 'd2ed-head' }, d2edEl('b', {}, '書籤修改'), d2edEl('span', { class: 'd2ed-ver', title: '中文化版本' }, D2ZH_VERSION), d2edEl('span', { class: 'd2ed-msg' }),
d2edEl('button', { type: 'button', title: '看玩家回報的回覆', onclick: d2zhReplyOpen }, '回報內容'),
d2edEl('button', { type: 'button', onclick: () => { close(); d2zhNewsOpen(true); } }, '更新說明'),
d2edEl('button', { type: 'button', title: '開啟問題回報表單（不需登入，會自動帶入版本）', onclick: d2zhReportOpen }, '問題回報'),
d2edEl('button', { type: 'button', class: 'd2ed-x', onclick: close, 'aria-label': '關閉' }, '×')),
d2edEl('div', { class: 'd2ed-body' })));
D2ED.panel.addEventListener('keydown', e => { e.stopPropagation(); if (e.key === 'Escape') close(); });
document.body.append(D2ED.panel);
d2edRender();
}
// ====== 中文化更新說明 ======
// 每次中文化版本更新後第一次開啟，跳出這次（以及上次看過之後）的改版內容；「書籤修改」面板的「更新說明」可以重看。
// 新版本加在最前面。note：作者的話（照原本分行顯示）；perf：作者的話後面加「開啟低效能模式」按鈕；report：最後加「問題回報」按鈕。
const D2ZH_NEWS = [
{ ver: 'V63', date: '2026-11-11', game: '遊戲 20261105.3', items: [
'書籤改由新網址更新：javascript:import(\'https://hans-hanlin.github.io/d2_zh/d2_zh.js?v=\'+Date.now())（舊網址停在 V62，請重新加一次書籤；教學頁 https://hans-hanlin.github.io/d2_zh/ ）',
'補翻角色畫面技能樹的提示（「裝備加的技能等級會套用到某系的每個技能」「超過最高等級仍有效」）',
'補翻技能說明裡「每級加成」的清單寫法（「火彈和隕石每級 +8%」「火彈、隕石等另 2 項每級 +8%」），清單裡的技能名稱不再帶（魔法）標記'] },
{ ver: 'V62', date: '2026-11-09', game: '遊戲 20261105.3', items: [
'修正手機網頁版更新說明視窗太高、超出畫面，按不到 × 和「知道了」關不掉的問題（書籤修改面板也一起修正）',
'更新說明的「知道了」固定在視窗底部，不用捲到最下面才按得到'] },
{ ver: 'V61', date: '2026-11-09', game: '遊戲 20261105.3', items: [
'物品過濾每一行都多了兩個選項：「撿取並出售魔法以下」（藍字）會把這一類的白色和魔法物品撿起來直接賣掉、稀有物品留著；「撿取並出售稀有以下」（黃字）連稀有物品也一起賣。有一行設成「保留」的物品不會被賣（跟遊戲原本一樣保留優先）；獨特、套裝和符文之語不受影響',
'物品過濾的赫拉迪克法典也可以選「保留」',
'修正物品過濾「已收藏」和「符文之語」底下的開關看起來像重複的兩行：改成「└ 無形必撿」，表示是上面那一行的附屬開關'] },
{ ver: 'V60', date: '2026-11-08', game: '遊戲 20261105.3', items: [
'用拉蘇克的精華打洞失敗時會說出原因：哪一種物品不能打洞（只有武器、頭盔、身體護甲和盾牌可以；戒指、護身符、腰帶、手套、靴子、箭筒、護符、珠寶和投擲武器都不行）、符文之語或獨特／套裝本身就有洞、或這件已經打過洞',
'把拉蘇克的精華拖到物品上時，提示要按右鍵（手機長按）使用；拖過去只會交換位置，不會打洞',
'箭筒提示：箭矢只能配弓、彈矢只能配十字弓。換上不合的武器時，遊戲會把另一件自動卸下，現在會說明原因',
'作者在「回報內容」新增或修改回覆時，開遊戲會先跳出來給你看（新的回覆標成金色），按「我知道了」後才會跳更新說明',
'低效能模式改版：不再把畫面降成低解析度，地上的物品名稱和文字保持清楚（高解析度螢幕改用 1 倍解析度）；改成關閉天氣（雪、雨）、光源和陰影，技能特效一樣調到最淡。已經開著的人重新載入遊戲就會套用',
'修正翻譯錯誤：物品過濾的方案「隱藏魔法物品」原本顯示成「皮魔法」，「出售魔法物品」「出售魔法和稀有物品」也一併修正；「預設」改為「方案」'] },
{ ver: 'V59', date: '2026-11-07', game: '遊戲 20261105.3', items: [
'修正啟用修改功能後，恰西的鐵砧（淬鍊、清除淬鍊、地獄熔爐、升級）都顯示「沒有連線：沒有花費任何東西」而無法使用：鐵砧和排行榜用同一個伺服器網址，被擋排行榜上傳的功能一起擋掉了。現在只擋排行榜紀錄，鐵砧可以正常使用'] },
{ ver: 'V58', date: '2026-11-07', game: '遊戲 20261105.3', items: [
'修正翻譯：手機版選項說明「點一下其他選項切換過去，點已開啟的選項則關閉」原本沒有翻到，顯示成英文'] },
{ ver: 'V57', date: '2026-11-06', game: '遊戲 20261105.3', items: [
'新增「過關吸取物品」（預設開啟，可在書籤修改裡關閉）：打完這一幕、遊戲把經驗寶石吸到身邊時，地上的裝備和物品（鑰匙、精華、器官等）也會一起飛過來撿起，不會再因為進傳送門而留在地上。自己丟下的和物品過濾設成隱藏的不會吸；物品欄滿了會留在腳邊'] },
{ ver: 'V56', date: '2026-11-06', game: '遊戲 20261105.3', items: [
'任務欄「破碎之光」會寫出下一塊碎片出現在哪裡：第 1 塊在第一幕、第 2～5 塊各在第二～五幕（任何難度）、第 6～10 塊在惡夢或地獄難度的任何一幕且有怪物守護；恐懼層的任何一幕都會出現碎片。書籤修改的「碎片感應」也會顯示已找到幾塊和下一塊的位置',
'修正碎片感應：恐懼層「儲存並離開」後按「繼續」重開同一層時，常被誤判成「碎片在書籤開始偵測前就出現了」，結果魔力球顯示碎片已出現、畫面邊緣卻沒有引導光暈。現在重開這一幕會重新偵測',
'碎片感應新增「重新偵測位置」：中途才點書籤、或中途才打開碎片感應而錯過碎片出現的那一刻時，不再放棄這一幕，會在英雄移動時重新找出碎片的正確位置（約 3 秒），找到後照常顯示引導光暈；偵測中魔力球顯示「碎片已出現　偵測位置中」。另修正中途關掉再打開碎片感應時光暈會指錯方向',
'功能優化'] },
{ ver: 'V55', date: '2026-11-06', game: '遊戲 20261105.3', items: [
'配合遊戲更新翻譯新增的文字：角色畫面新增的三頁數值（速度門檻、敵人抗性、反傷、遠程／近戰傷害減少等）、箭筒、物品過濾的「隱藏並出售」與「無形必撿」、淬鍊上限與地獄熔爐限一次、恐懼層結束畫面的重玩、儲物箱的單手／雙手武器',
'修正翻譯錯誤：「隱藏並出售」原本顯示成「皮 AND 出售」、恰西退回精華的提示原本顯示成「恰西歸來者」',
'翻譯遊戲主選單「最新消息」裡這次改版的更新公告'] },
{ ver: 'V54', date: '2026-11-05', game: '遊戲 20261105.1', items: [
'配合遊戲更新翻譯新增的文字：恰西的鐵砧（淬鍊、清除、地獄熔爐、升級）、燃燒的恐懼精華、鑰匙說明與首領出現的提示、武器技能的新說明、電腦版的全螢幕選項',
'翻譯遊戲主選單「最新消息」裡這次改版的更新公告',
'【燃燒的恐懼精華取得方式】只在恐懼層掉落：① 每一幕的首領必定掉 1 個，尋獲魔法物品越高越有機會掉 2 個（基本 12%，例如尋獲魔法物品 250% 時約 27%）；② 恐懼層掉落的每件裝備另有約 0.7% 機率多帶 1 個。精華在營地點恰西使用，最多可以堆疊 99 個'] },
{ ver: 'V53', date: '2026-11-05', game: '遊戲 20261104.2', items: [
'配合遊戲更新翻譯新增的文字：三種鑰匙（恐懼之鑰／憎恨之鑰／毀滅之鑰）與三個器官（墨菲斯托之腦／迪亞布羅之角／巴爾之眼）、超級首領的地圖（女族長之巢、被遺忘的沙地、痛苦熔爐、超級崔斯特姆）、地獄火炬、毀滅、迪亞布羅分身與賣出喬丹之石的提示、戰鬥體制的新說明',
'翻譯遊戲主選單「最新消息」裡這次改版的更新公告',
'【地獄火炬取得方式】① 鑰匙：在恐懼層打倒女伯爵（掉恐懼之鑰）、召喚者（掉憎恨之鑰）、尼拉塞克（掉毀滅之鑰），基本機率約 10%、13%、11%，層數越深越高：機率乘上（1＋層數×2%），例如恐懼 50 層是兩倍，約 20%、26%、23%。② 器官：三種鑰匙各一把時，營地傳送點的恐懼層選項會出現女族長之巢／被遺忘的沙地／痛苦熔爐其中一個，每次用掉三種鑰匙各一把，打倒裡面的超級首領必掉器官：莉莉絲→迪亞布羅之角、督瑞爾→巴爾之眼、衣卒爾→墨菲斯托之腦（三個都打過之前不會重複，要集齊需要三組鑰匙）。③ 超級崔斯特姆：三個器官集齊後，恐懼層選項會出現「超級崔斯特姆」，打倒裡面同時出現的墨菲斯托、迪亞布羅、巴爾三大魔王，最後一隻倒下時必掉地獄火炬（另附一面英雄旗幟）。超級首領最高只到恐懼 100 層的強度',
'【毀滅取得方式】開放恐懼層後把喬丹之石賣給商人，畫面會出現「迪亞布羅降臨人世」，下一層會出現迪亞布羅分身，打倒他必掉毀滅'] },
{ ver: 'V52', date: '2026-11-04', game: '遊戲 20261103.2', items: [
'功能優化（電腦版若還需要重開遊戲，會自動存檔並關閉遊戲，請再從桌面重新打開；重開後還是不行，會改成說明怎麼手動更新）'] },
{ ver: 'V51', date: '2026-11-04', game: '遊戲 20261103.2', items: [
'功能優化（電腦版更新後要完全關閉遊戲再重開一次才會生效）',
'配合遊戲更新翻譯新增的文字：珠寶與珠寶詞綴、拉蘇克的精華與打凹槽、物品過濾的赫拉迪克法典與珠寶項目、恐懼層的抗性／傷害減少／體力說明、裝備施放的技能說明、物品放不回原位時的提示、新版本提示',
'翻譯遊戲主選單「最新消息」裡這次改版的更新公告'] },
{ ver: 'V50', date: '2026-11-04', game: '遊戲 20261103.2', items: [
'碎片感應新增倒數：進入地圖 5 秒後，藍色魔力球裡會顯示「距離碎片出現 1:01」倒數（照遊戲時間，選技能時也會暫停），碎片出現後改成「碎片已出現!」；這一幕沒有碎片、已經撿到或十塊都找到就不顯示',
'碎片感應修正：在營地裡不再被當成第一幕而誤判',
'碎片感應修正：玩到一半才點書籤（或重新整理、讀檔繼續）時，碎片其實早就出現了，書籤卻在 15 秒後才提示，而且方向會指錯，害人在附近繞圈；現在只有書籤親自偵測到碎片出現的那一刻才提示，方向跟遊戲完全一致，錯過的那一幕面板會說明原因'] },
{ ver: 'V48', date: '2026-11-02', game: '遊戲 20261102.2', items: [
'配合遊戲更新翻譯新增的文字：排行榜「你」分頁的拒收紀錄說明',
'翻譯遊戲主選單「最新消息」裡這次改版的更新公告',
'功能優化（電腦版更新後要完全關閉遊戲再重開一次才會生效）'] },
{ ver: 'V47', date: '2026-11-02', game: '遊戲 20261102.1', items: [
'配合遊戲更新翻譯新增的文字：第二組武器與切換提示、選項裡新的「鍵盤」頁面（所有動作、方向鍵與數字鍵名稱）、按鍵提示會跟著你設定的按鍵顯示、阿卡拉重新抽選的放逐說明、物品過濾的護符警告、裝備施放的技能說明、「不可破壞」、線上檔案版結束的說明',
'翻譯遊戲主選單「最新消息」裡這次改版的更新公告',
'修正：不小心把遊戲語言按成韓文後回不來。現在按書籤就會自動換回繁體中文，遊戲選項的「遊戲語言」也不會再變成韓文',
'語言按鈕改成「繁體中文／韓文」（拿掉 English），選韓文前會先確認'] },
{ ver: 'V46', date: '2026-11-01', game: '遊戲 20261101.1', items: [
'修正電腦版「背景靜音」沒有作用：現在切到其他視窗或縮小到工具列時就會靜音，回到遊戲恢復（網頁版不變）'] },
{ ver: 'V45', date: '2026-11-01', game: '遊戲 20261101.1', items: [
'功能優化（電腦版更新後要完全關閉遊戲再重開一次才會生效）'] },
{ ver: 'V44', date: '2026-11-01', game: '遊戲 20261101.1', items: [
'配合遊戲更新翻譯新增的文字：防禦的新說明、法力藥水、耐力回復生命、各職業改動過的技能說明、恐懼層獎勵',
'翻譯遊戲主選單「最新消息」裡這次改版的更新公告'] },
{ ver: 'V43', date: '2026-11-01', game: '遊戲 20261030.2', items: [
'功能優化'] },
{ ver: 'V42', date: '2026-10-31', game: '遊戲 20261030.2', items: [
'翻譯遊戲主選單「最新消息」裡作者的更新公告（先翻 10/28 之後的內容，舊的之後補）'] },
{ ver: 'V41', date: '2026-10-31', game: '遊戲 20261030.2', items: [
'修正：電腦安裝版的「回報內容」讀取失敗（第一次更新後要重開遊戲一次才會生效）'] },
{ ver: 'V40', date: '2026-10-31', game: '遊戲 20261030.2', items: [
'修正：手機上物品過濾的護身符、護符選項被「手把」「書籤修改」「語言」按鈕擋住不能改；這些按鈕現在會避開選單文字',
'更新說明和書籤修改面板的頂部新增「回報內容」按鈕，點開可以看問題回報的回覆',
'修正：影像選項的開關（天氣、數值範圍等）開啟時只翻譯一半'] },
{ ver: 'V39', date: '2026-10-31', game: '遊戲 20261030.2', items: [
'配合遊戲更新翻譯新增的文字：影像選項的「天氣」開關與說明、Ctrl＋點擊屬性 ＋ 一次加 5 點的提示',
'修正：吉黑得的運氣（大型護符）「所有商人價格降低」那一行沒有翻譯',
'修正：撒卡蘭姆使者、撒卡蘭姆之手、戮夫刃、撕裂者、熱情、流放者、狂怒、撞槌這些裝備名稱，因為和技能同名而多出（物理）（魔法）這類標記；現在只有技能說明框才會顯示',
'「關閉修改功能」移到書籤修改面板的「永久升級」和「本局人物」標題右邊，按下後會先跳出說明，確認才關閉'] },
{ ver: 'V38', date: '2026-10-30', game: '遊戲 20261030.1', items: [
'修正：手機直立時，技能選單一排有 7、8 格會超出畫面左邊；現在放不下就自動換行',
'技能格調整大小（＋／－、鎖定比例）改成預設關閉，要用請到 選項 → 書籤修改 開啟；以前鎖定的比例開啟後還在'] },
{ ver: 'V37', date: '2026-10-30', game: '遊戲 20261030.1', items: [
'配合遊戲更新翻譯新增的文字：第五幕傳送點的新地點「訓練場」（入口說明、拉祖克的假人數量／目標／重設傷害統計／回到營地選單、免疫說明）、裝備施放的技能提示、紅色傳送門的操作提示、抗性超過上限的提示、護符移到護符欄的提示、瞬移與骨頭圖騰的新說明',
'修正：「+% 格擋怪物攻擊的機率」原本翻譯到一半'] },
{ ver: 'V36', date: '2026-10-30', game: '遊戲 20261029.2', items: [
'修正：本局人物的力量／敏捷／體力／精力 ±5 只改了效果、角色畫面的屬性不會變，按「套用」還顯示沒有變更。現在跟升級時選屬性卡一樣寫進人物資料：角色畫面的數值會跟著變，旁邊也會顯示目前數值；進到下一幕（存檔點）後，「儲存並離開」再繼續也會保留。屬性 ±5 按下就生效，不用按套用',
'精力加點的效果補齊（以前少算遊戲的其中一項傷害加成）',
'新功能「修改組合」：在「記住這些修改」旁邊，可以把目前的修改（欄位和屬性加減）取名存起來，最多 20 筆；之後從下拉選單選一筆按「套用組合」就能一次改好，也可以改名、刪除，同名會覆蓋'] },
{ ver: 'V35', date: '2026-10-30', game: '遊戲 20261029.2', items: [
'儲物箱和獨特物品分頁的搜尋可以打中文了：物品名稱、底材、套裝名稱、屬性都能用中文找（例如「謎團」「諧角」「塔.拉夏」），也可以打「獨特／暗金」「套裝」「符文之語」「稀有」「魔法」找同一種稀有度；英文照樣能搜',
'修正：在遊戲中按「啟用修改功能」，確認後提示窗沒有關掉（後面的面板其實已經打開）'] },
{ ver: 'V34', date: '2026-10-29', game: '遊戲 20261029.2', items: [
'配合遊戲更新翻譯新增的文字：儲物箱的「收集」按鈕、獨特物品分頁的「交換」、技能樹的放逐標記與阿卡拉重新抽選的放逐說明、神聖冰凍「緩速，但沒有冰凍」、飛龍在天的新說明、畫面中斷／恢復的提示、自動配點說明，以及電腦版讀取暗黑破壞神 II：獄火重生檔案時的錯誤訊息'] },
{ ver: 'V33', date: '2026-10-29', game: '遊戲 20261029.1', items: [
'修正：在主選單改恰西的重抽、略過、放逐、復活次數後，「儲存並離開」過的那一局繼續時次數沒變（以前要刪存檔才會生效）。現在儲存時會一起改到每個職業進行中的那一局',
'書籤修改的「本局人物」新增「記住這些修改」勾選框：勾選後改過的數值和屬性點會記在瀏覽器裡，下次開遊戲、換一局或繼續存檔時自動套用（每個職業都適用），取消勾選就停止',
'修正：按「套用」時，沒改過的欄位（例如每秒恢復生命 1.25 顯示成 1.3）也會被四捨五入後的數字蓋掉',
'配合遊戲更新：角色畫面金幣說明「恰西保管的金幣；在一局中也包含這局目前撿到的金幣」；舊版選角畫面野蠻人介紹的翻譯修正'] },
{ ver: 'V32', date: '2026-10-29', game: '遊戲 20261028.2', items: [
'角色畫面快速施法率說明：超過上限那行改成「其中 +43% 超過上限，目前已達 60% 上限」，直接標出目前的上限（已含恰西等級）'] },
{ ver: 'V31', date: '2026-10-29', game: '遊戲 20261028.2', items: [
'技能說明框補翻譯：進化技能有裝備加成時的「由聖光彈進化（裝備 +8）」、傷害行的單位（例如天堂之拳的「每道閃電」、每次命中、每個攻擊者），以及「每次施放命中 1 次」'] },
{ ver: 'V30', date: '2026-10-29', game: '遊戲 20261028.2', items: [
'配合遊戲更新：78 個符文之語的名稱（照易牙居譯名，例如謎團、悔恨、無限、戰爭召喚）與符文組合（例如「拉爾・歐特・塔爾」）、有凹槽、無形的',
'排行榜新的「搜尋」玩家分頁、快速施法率超過上限只算一半的說明、刺客陷阱、骨甲、能量護盾與沙漠傭兵靈氣的新說明，共 166 句翻譯'] },
{ ver: 'V29', date: '2026-10-29', game: '遊戲 20261028.1', items: [
'技能選單旁的 ＋／－ 前面新增「鎖定比例」：按下後記住目前大小，之後打開技能樹（包括重新開遊戲）都用這個大小；鎖定時按鈕金框發光、顯示「已鎖定」，再按一次解開',
'＋／－ 按鈕改成和技能格相同的樣式'] },
{ ver: 'V28', date: '2026-10-28', game: '遊戲 20261028.1', items: [
'開著技能樹時，技能選單改回原本的兩排並縮小到 50%，避免擋到技能樹',
'技能選單旁新增 ＋／－ 按鈕可調整圖示大小（最大 200%，最小可完全關閉）；每次打開技能樹（按 T 或點按鈕）都會重設為 50%'] },
{ ver: 'V27', date: '2026-10-28', game: '遊戲 20261028.1', items: [
'新增「背景靜音」（選項 → 書籤修改，預設開啟）：遊戲換到其他分頁、被其他視窗完全蓋住或縮小到工具列時立刻靜音，遊戲照常執行，回來就恢復聲音',
'注意：背景靜音要遊戲視窗被「完全」蓋住才會生效；只蓋住一部分，或只是點到別的視窗、遊戲還看得到時，瀏覽器不會把遊戲當成在背景，所以不會靜音'] },
{ ver: 'V26', date: '2026-10-28', game: '遊戲 20261028.1', items: [
'配合遊戲更新：排行榜的不合規說明（紅框裝備、屬性／技能點數太多、存檔在遊戲外被修改）、阿卡拉重新抽選與重新開始、專家模式刪除警告等 75 句翻譯',
'碎片感應改成進入地圖 15 秒後開始偵測（原本 30 秒）'] },
{ ver: 'V25', date: '2026-10-28', game: '遊戲 20261027.4', items: [
'碎片感應改成進入地圖 30 秒後才開始偵測，避免恐懼層開局先閃一下第一幕造成誤判；這 30 秒內出現的碎片也會照實際位置提示'] },
{ ver: 'V24', date: '2026-10-28', game: '遊戲 20261027.4', items: [
'碎片感應的邊緣光暈調亮：在熔岩、沙地等明亮的地面上也看得到，碎片出現時會先明顯亮一下'] },
{ ver: 'V23', date: '2026-10-28', game: '遊戲 20261027.4', note: [
'有收到玩家回報玩到一半閃退的問題\n請至 選項 → 書籤修改 → 開啟低效能模式\n開啟低效能模式後，可以大幅降低顯示動畫，或許可以緩解'], perf: true, items: [
'技能選單改成四排（主動兩排在上、被動兩排在下），手機開著技能樹選技能時不會再擋住技能樹；直向小螢幕放不下時會自動縮小或改成兩排',
'開寶箱拿到「+1 技能」時的「第幾次（最多 3 次）」翻譯',
'「效能模式」改名為「低效能模式」'] },
{ ver: 'V22', date: '2026-10-28', game: '遊戲 20261027.4', note: [
'發現許多人有在分享書籤\n歡迎大家任意使用\n不過『嚴禁』收費歐！',
'也請不要直接複製文字到你的網站中\n畢竟書籤設置有點小複雜\n只有文字實在不好理解\n如果你能提供更好的教學讓玩家快速上手沒關係\n不然我連結中有影片可以觀看',
'總之～　希望大家好好享受遊戲拉'], items: [
'新增問題回報表單（書籤修改 → 問題回報）：有時候遊戲更新，翻譯可能沒有那麼即時，不過我發現後會用最快速度幫忙大家的！',
'小地圖碎片提示：「碎片感應」開啟時，小地圖上碎片的大概位置會有光點閃爍，越靠近閃得越快',
'翻譯優化'], report: true },
{ ver: 'V21', date: '2026-10-28', game: '遊戲 20261027.4', items: [
'碎片提示：「碎片感應」開啟時，碎片出現的那一刻畫面上會淡淡浮出一句話，邊緣光暈也會先亮一下；面板會顯示這一幕有沒有碎片',
'翻譯優化'] },
{ ver: 'V20', date: '2026-10-28', game: '遊戲 20261027.4', items: [
'翻譯優化：護身符（Charm）改稱小型／中型／大型護符，避免跟項鍊（護身符）混淆',
'地上的護符會閃爍，比較不會漏撿',
'新增「碎片感應」（選項 → 書籤修改）：隱藏任務「破碎之光」的碎片出現後，畫面邊緣會有微弱光暈指出方向'] },
{ ver: 'V19', date: '2026-10-28', game: '遊戲 20261027.4', items: [
'翻譯優化'] },
{ ver: 'V18', date: '2026-10-28', game: '遊戲 20261027.4', items: [
'生命球旁的負面狀態（中毒、無法移動、減慢、蛛網、技能冷卻變長）和剩餘秒數、剩餘復活次數',
'阿卡拉的藥水交易：解毒藥水、解凍藥水、下一局放進腰帶的說明',
'離開遊戲的確認、平衡改動後要重新載入的提示'] },
{ ver: 'V17', date: '2026-10-27', game: '遊戲 20261027.2', items: [
'專家模式（Hardcore）：營火旁的黑暗流浪者、死亡警告、墓地、毀滅者／征服者稱號、專家模式排行榜與天梯',
'排行榜的不排名原因、「傳送我的紀錄」關閉或連不上時的提示',
'物品過濾「只撿更好的」、腰帶自動喝藥水說明、技能冷卻秒數與命中次數',
'存檔代碼來自較新版本時的提示、阿卡拉可重新開始、護身符要放進護身符欄才有效果'] },
{ ver: 'V16', date: '2026-10-27', game: '遊戲 20261026.4', items: [
'選項 → 書籤修改：可以修改這一局的人物和恰西的永久升級。預設鎖住，確認關閉排行榜上傳後才能使用',
'恐懼層的波數（剩餘精英）、首領 10 分鐘時限和時間到的提示',
'改寫的技能改造說明（一半傷害轉為其他元素、能打免疫怪物等 85 項）',
'快速施法率的總和、上限和超過上限的說明，裝備擊殺觸發技能的冷卻時間',
'升級選技能時的進化條件改成通順的一句（例如「進化為刺爆：滿級 1/8、閃避、等級 24」）'] },
{ ver: 'V14', date: '2026-10-26', game: '遊戲 20261026.2', items: [
'新增「低效能模式」（選項 → 書籤修改）：開啟後畫面改用低解析度、技能特效調到最淡，電腦或手機跑不動時使用',
'恐懼層九波怪物、跳層開放、波數顯示，以及恐懼層重新開始的說明',
'隱藏任務「破碎之光」的碎片文字、泰瑞爾之翼和泰瑞爾的台詞',
'物品過濾的「保留」、獨特物品收藏標示、屬性範圍（STAT RANGES）、儲物箱搜尋',
'赦免徽記、阿卡拉重新抽選歸還典籍、排行榜的驗證原因、德魯伊變身說明'] },
{ ver: 'V13', date: '2026-10-26', game: '遊戲 20261025.1', items: [
'「書籤修改」的永久升級跟上恰西的新項目：跑步／行走速度、施法速度、出售價格、藥水治療量、經驗值、五種穿透、傭兵生命／抗性／防禦',
'永久升級可以改到上限以上（最多再加 999 級，跟遊戲一樣超過的部分效果遞減，旁邊會顯示實際約幾級）；重抽、略過、放逐、復活仍不能超過上限',
'補充生命的說明更正為每級每秒 +0.25',
'「書籤修改」分成兩種：遊戲中直接改這一局的人物，在主選單改恰西的永久升級；遊戲中也能直接啟用修改功能，不用先離開遊戲'] },
{ ver: 'V12', date: '2026-10-26', game: '遊戲 20261025.1', items: [
'維特的腳說明改寫：放在身上（不須裝備），第一章打倒格瑞斯華爾德會開奶牛關，恐懼層必出奶牛關',
'「書籤修改」的修改功能預設隱藏：按「啟用修改功能」並確認後，會自動關閉遊戲的排行榜上傳（修改過的紀錄排行榜不收），才會出現修改頁面'] },
{ ver: 'V11', date: '2026-10-25', game: '遊戲 20261025.1', items: [
'套裝物品：32 套、127 件套裝與套裝名稱，譯名採用易牙居（修正少數明顯錯譯，例如「米拉伯佳的雪茄」改成「王權」）',
'護身符：小型／大型／超大型護身符、吉黑得的運氣、護身符欄（H）和護身符詞綴',
'儲物箱的「獨特物品」分頁：武器分類、搜尋、已保留／未取得',
'傭兵技能說明（寫明對他自己還是對英雄有效）、排行榜的驗證訊息',
'補上漏翻的物品屬性：對不死生物／惡魔的攻擊準確率、依角色等級的最大元素傷害、生命上限增加 %',
'新增這個「更新說明」視窗，之後每次更新都會列在這裡',
'書籤的按鈕（書籤修改、手把、語言切換）改用遊戲的 D2 石質按鈕圖，跟遊戲畫面一致'] },
{ ver: 'V10', date: '2026-10-24', game: '遊戲 20261024.1／.2', items: [
'技能改造（Skill Modifiers）：所有改造的名稱和說明、改造點數、赫拉迪克法典',
'遊戲重寫的所有技能、被動說明',
'物品過濾、排行榜、每秒傷害顯示（顯示傷害）、寶物盜賊',
'稀有物品改用 D2 的兩組字表命名：照易牙居譯名自動組合（例如「野薔薇毛皮」）',
'錯誤訊息：D2R 檔案無法讀取、磁碟空間不足、遊戲檔損壞'] },
{ ver: 'V9', date: '2026-10-24', game: '遊戲 20261023.3', items: [
'自動出售（魔法／稀有／魔法和稀有）、裝備比較',
'基德賭博的免費重抽、恰西的傭兵生命／抗性／防禦等級與等級分頁',
'赫拉迪克之錘的灌注提示、任務道具不能用時的說明',
'D2R 檔案沒下載完時的說明'] }
];
const D2ZH_NEWS_KEY = 'd2zh:newsSeen';
const d2zhVerNum = v => parseInt(String(v || '').replace(/\D/g, ''), 10) || 0;
// 更新說明裡的「開啟低效能模式」：按下直接開啟（解析度馬上變低；技能特效要重新載入才變淡），已開啟就只顯示狀態
function d2zhNewsPerfButton() {
const note = d2edEl('span', { class: 'd2ed-note', style: 'align-self: center' });
const btn = d2edEl('button', { type: 'button', class: 'd2ed-main' }, '開啟低效能模式');
const shown = () => { btn.disabled = true; btn.className = ''; btn.textContent = '低效能模式已開啟'; note.textContent = '技能特效重新載入遊戲後才會變淡'; };
btn.onclick = () => { d2edPerfSet(true); if (d2edPerfOn()) shown(); };
if (d2edPerfOn()) shown();
return d2edEl('div', { class: 'd2ed-row' }, btn, note);
}
// 回報內容：更新說明和書籤修改頂部的按鈕，點了才跳窗並讀 GitHub 上的 回應.txt，照檔案原本的分行顯示；改檔案不用升版本（Pages 快取約 10 分鐘）
const D2ZH_REPLY_URL = D2ZH_BASE + '%E5%9B%9E%E6%87%89.txt';   // 2026-11-10 起由本地專案維護（舊址 jtnhrbpvvm-spec.github.io/taiwan_game2/D2修改版/）
// 電腦版遊戲會擋頁面連線，要請主程序（d2zh-inject.cjs）下載；舊的主程序沒有這功能，重開遊戲才會換新
function d2zhReplyLoad() {
const desk = window.__D2ZH_DESKTOP;
if (!desk) {
return fetch(D2ZH_REPLY_URL, { cache: 'no-cache' }).then(r => r.ok ? r.text() : r.status === 404 ? '' : Promise.reject(new Error(r.status)));
}
if (!desk.replies) return Promise.reject(new Error('請重開遊戲一次才能看回報內容（更新已自動下載）'));
return new Promise((resolve, reject) => {
const timer = setTimeout(() => reject(new Error('')), 20000);
window.__d2zhRepliesDone = r => { clearTimeout(timer); if (r && r.ok) resolve(r.text); else reject(new Error('')); };
console.log('__D2ZH__:replies');
});
}
function d2zhReplyOpen(e) {
const card = e.target.closest('.d2ed-card');
if (!card || card.querySelector('.d2ed-modal')) return;
const modal = d2edEl('div', { class: 'd2ed-modal', style: 'grid-template-rows: minmax(0, 1fr)', onclick: ev => { if (ev.target === modal) close(); } });   // 列高固定，內容太長才會在視窗裡捲動
const close = () => modal.remove();
const body = d2edEl('div', { class: 'd2zh-reply-body', style: 'margin: 6px 0 12px; min-height: 0; overflow-y: auto; white-space: pre-wrap; overflow-wrap: anywhere; line-height: 1.6; color: #e8e2d0;' }, '讀取中…');
const done = d2edEl('button', { type: 'button', class: 'd2ed-main', onclick: close }, '關閉');
modal.append(d2edEl('div', { class: 'd2ed-modal-box', role: 'dialog', 'aria-label': '玩家回報內容', style: 'display: flex; flex-direction: column; max-height: 100%; border-color: #8f743e; background: linear-gradient(180deg, #221a10, #120d07);' },
d2edEl('b', { style: 'color: #f0c94a' }, '玩家回報內容'), body,
d2edEl('div', { class: 'd2ed-row', style: 'flex: none' }, done)));
modal.addEventListener('keydown', ev => { if (ev.key === 'Escape') { ev.stopPropagation(); close(); } });
card.append(modal);
done.focus();
d2zhReplyLoad()
.then(t => { body.textContent = t.trim() || '目前沒有回報內容'; })
.catch(err => { body.textContent = /[^\x00-\x7f]/.test(err.message) ? err.message : '回報內容讀取失敗，請確認網路連線後再開一次'; });
}
// 開遊戲時：回應.txt 跟玩家上次看過的不一樣（作者新增或修改了回覆）就先跳出來，新的行標成金色並捲到第一行新內容；
// 玩家按「我知道了」才記成看過。讀不到（離線、電腦版舊主程序）就略過，直接跳更新說明。
const D2ZH_REPLY_SEEN_KEY = 'd2zh:replySeen';
function d2zhStartupPopups() {
const news = () => d2zhNewsOpen(false);
let seen = null;
try { seen = localStorage.getItem(D2ZH_REPLY_SEEN_KEY); } catch (_) { /* 存不了就每次比對都當新的 */ }
let finished = false;
const giveUp = setTimeout(() => { finished = true; news(); }, 10000);   // 讀太久就不等了
d2zhReplyLoad().then(raw => {
if (finished) return;
finished = true; clearTimeout(giveUp);
const text = String(raw || '').replace(/\r\n?/g, '\n').trim();
if (!text || text === seen) { news(); return; }
d2zhReplyPopup(text, seen, news);
}).catch(() => { if (!finished) { finished = true; clearTimeout(giveUp); news(); } });
}
function d2zhReplyPopup(text, seen, after) {
if (D2ED.panel || document.getElementById('d2ed-overlay')) { after(); return; }
const old = new Set(seen ? seen.split('\n').map(l => l.trim()).filter(Boolean) : []);
const isNew = l => !!seen && !!l.trim() && !old.has(l.trim());
const body = d2edEl('div', { class: 'd2ed-body d2zh-reply-body', style: 'white-space: pre-wrap; overflow-wrap: anywhere; line-height: 1.6; color: #e8e2d0;' });
let first = null;
for (const line of text.split('\n')) {
const fresh = isNew(line);
const el = d2edEl('div', fresh ? { style: 'color: #f0c94a; font-weight: bold;' } : {}, line || ' ');
if (fresh && !first) first = el;
body.append(el);
}
let box;
const close = () => {
try { localStorage.setItem(D2ZH_REPLY_SEEN_KEY, text); } catch (_) { /* 存不了：下次再顯示 */ }
box.remove();
after();
};
box = d2edEl('div', { id: 'd2ed-overlay' },
d2edEl('div', { class: 'd2ed-card', role: 'dialog', 'aria-label': '玩家回報內容' },
d2edEl('div', { class: 'd2ed-head' }, d2edEl('b', {}, '玩家回報內容有更新'), d2edEl('span', { class: 'd2ed-ver', title: '中文化版本' }, D2ZH_VERSION)),
seen ? d2edEl('p', { class: 'd2ed-note', style: 'margin: 6px 12px 0;' }, '金色是這次新增或修改的回覆') : null,
body,
d2edEl('div', { class: 'd2ed-row' }, d2edEl('button', { type: 'button', class: 'd2ed-main', onclick: close }, '我知道了'))));
box.addEventListener('keydown', e => { e.stopPropagation(); if (e.key === 'Escape') close(); });
document.body.append(box);
const btn = box.querySelector('.d2ed-main');
if (btn) btn.focus();
if (first) requestAnimationFrame(() => { body.scrollTop = Math.max(0, first.offsetTop - body.offsetTop - 8); });
}
function d2zhNewsOpen(all) {
if (D2ED.panel || document.getElementById('d2ed-overlay')) return;
let seen = 0;
try { seen = d2zhVerNum(localStorage.getItem(D2ZH_NEWS_KEY)); } catch (_) { /* 讀不到就全部顯示 */ }
const list = all ? D2ZH_NEWS : D2ZH_NEWS.filter(n => d2zhVerNum(n.ver) > seen);
if (!list.length) return;
const markSeen = () => { try { localStorage.setItem(D2ZH_NEWS_KEY, D2ZH_VERSION); } catch (_) { /* 無痕視窗等存不了：下次再顯示 */ } };
let box;
const close = () => { markSeen(); box.remove(); };
box = d2edEl('div', { id: 'd2ed-overlay', onclick: e => { if (e.target.id === 'd2ed-overlay') close(); } },
d2edEl('div', { class: 'd2ed-card', role: 'dialog', 'aria-label': '中文化更新說明' },
d2edEl('div', { class: 'd2ed-head' }, d2edEl('b', {}, '中文化更新說明'), d2edEl('span', { class: 'd2ed-ver', title: '中文化版本' }, D2ZH_VERSION), d2edEl('span', { class: 'd2ed-msg' }),
d2edEl('button', { type: 'button', title: '看玩家回報的回覆', onclick: d2zhReplyOpen }, '回報內容'),
d2edEl('button', { type: 'button', class: 'd2ed-x', onclick: close, 'aria-label': '關閉' }, '×')),
d2edEl('div', { class: 'd2ed-body' },
...list.map(n => d2edEl('section', { class: 'd2ed-sec' },
d2edEl('h3', {}, `${n.ver}　${n.date}`), d2edEl('p', { class: 'd2ed-note' }, `對應${n.game}`),
...(n.note || []).map(t => d2edEl('p', { style: 'margin: 6px 0; white-space: pre-line; line-height: 1.6;' }, t)),
n.perf ? d2zhNewsPerfButton() : null,
d2edEl('ul', { style: 'margin: 4px 0 8px; padding-left: 20px;' }, ...n.items.map(t => d2edEl('li', {}, t))),
n.report ? d2edEl('div', { class: 'd2ed-row' }, d2edEl('button', { type: 'button', onclick: d2zhReportOpen }, '問題回報')) : null))),
// 「知道了」放在捲動內文外面，手機畫面矮也一直看得到
d2edEl('div', { class: 'd2ed-row', style: 'flex: none; margin: 0; padding: 8px 14px 12px; border-top: 1px solid #4a3418;' }, d2edEl('button', { type: 'button', class: 'd2ed-main', onclick: close }, '知道了'))));
box.addEventListener('keydown', e => { e.stopPropagation(); if (e.key === 'Escape') close(); });
document.body.append(box);
}
function d2edInstall() {
window.__D2ED = D2ED; // 除錯用（在主控台看抓到的人物、選單位置）
D2ED.ec = { load: d2ecLoad, baseItem: d2ecBaseItem, groups: d2ecGroups, bases: d2ecRunewordBases, lines: d2ecLineTexts, baseMods: d2ecBaseMods, show: d2ecShow, select: d2ecSelect, create: d2ecCreate };
d2edBuildInstall();
d2sockInstall();
d2quivInstall();
d2ecWorldInstall();
d2edKeepLeaderboardOff();
d2lootInstall();
D2ED.loot = D2LOOT;   // 除錯用：ready、mirror、live
d2edPerfApplyDpr();
d2edPerfMigrate();
setTimeout(d2edPerfApplyGame, 1500);   // 等遊戲模組載完
// 電腦版：開遊戲時的背景檢查做完會呼叫這裡（d2zh-inject.cjs）。下載到比這個頁面新的翻譯檔時：
// 剛開遊戲、還在選單（不在一局裡）就直接重新載入用新版；否則記下來，「書籤修改」面板會出現「重新載入」按鈕。
window.__d2zhAutoChecked = result => {
const desk = window.__D2ZH_DESKTOP;
if (!desk || typeof desk !== 'object') return;
desk.lastCheck = result;
if (result.info) desk.diskTime = result.info.fileTime;
const newer = (desk.diskTime || 0) > (desk.fileTime || 0);
const c = document.body.classList;   // 跟遊戲判斷「不在一局裡」的方式一樣
const idle = !c.contains('frontend-over-run') && (c.contains('frontend-open') || c.contains('no-run') || c.contains('in-camp'));
if (newer && performance.now() < 30000 && idle) { location.reload(); return; }
if (D2ED.panel) d2edRender();
};
const rawGet = WeakMap.prototype.get;
WeakMap.prototype.get = function (key) {
const v = rawGet.call(this, key);
if (v && key && typeof key === 'object' && key.mastery && key.cls && key.weaponDamage !== undefined && typeof v.crit === 'number') {
if (D2ED.player !== key) d2edKeepSchedule(key);
D2ED.player = key;
D2ED.extras = v;
}
// 遊戲也拿「這一輪的世界」（地上物品 pickups、舞台 stage）當 WeakMap 的鍵：記下來給小地圖標記任務道具用
if (key && typeof key === 'object' && key !== D2ED.world && Array.isArray(key.pickups) && key.player && key.stage) { D2ED.world = key; d2lootWrap(key); }
return v;
};
const style = document.createElement('style');
style.textContent = `
/* 書籤的按鈕用遊戲自己的 D2 石質按鈕圖（--d2-button／--d2-button-down，遊戲載入 D2 素材後才有；沒有時退回漸層） */
#d2ed-btn, #d2pad-btn, #d2-language-switch button {
background: var(--d2-button, linear-gradient(180deg, #3a2e1c, #1a140c)) center / 100% 100% no-repeat; border: 0; border-radius: 0; box-shadow: none;
color: #e8dcc0; text-shadow: 1px 1px 0 #000, -1px 0 #000, 0 -1px #000, 0 0 3px #000; cursor: pointer; }
#d2ed-btn:hover, #d2pad-btn:hover, #d2-language-switch button:hover { color: #fff; }
#d2ed-btn:active, #d2pad-btn:active, #d2-language-switch button:active, #d2-language-switch button.active {
background-image: var(--d2-button-down, linear-gradient(180deg, #1a140c, #3a2e1c)); }
#d2ed-btn:active, #d2pad-btn:active { padding-top: 2px; }
#d2ed-btn { position: fixed; z-index: 2147483646; display: none; min-width: 128px; padding: 0 14px;
font: bold 18px ${D2ZH_FONT}; letter-spacing: 1px; white-space: nowrap; }
#d2-language-switch { align-items: center; font-size: 14px; }
#d2-language-switch .d2ed-lang-label { padding: 0 6px; color: #c7a45f; font-size: 13px; white-space: nowrap; text-shadow: 1px 1px 0 #000, 0 0 3px #000; }
#d2ed-overlay { position: fixed; inset: 0; z-index: 2147483647; display: grid; grid-template-rows: minmax(0, 1fr); place-items: center; padding: 12px;
background: rgba(0,0,0,.6); font: 14px/1.5 ${D2ZH_FONT}; color: #e8e2d0; }
#d2ed-overlay .d2ed-card { width: min(560px, 100%); max-height: 100%; min-height: 0; display: flex; flex-direction: column;   /* 不用 100vh：手機有網址列時 100vh 比看得到的畫面高，× 和「知道了」會被推到畫面外 */
background: linear-gradient(180deg, #221a12, #120d08); border: 2px solid #8f743e; border-radius: 8px; box-shadow: 0 10px 40px #000; }
#d2ed-overlay .d2ed-head { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 10px; padding: 10px 14px; border-bottom: 1px solid #4a3418; }
#d2ed-overlay .d2ed-head b { color: #f0c94a; font-size: 18px; white-space: nowrap; }
#d2ed-overlay .d2ed-head button { white-space: nowrap; }
#d2ed-overlay .d2ed-ver { padding: 0 6px; border: 1px solid #8f743e; border-radius: 4px; color: #c7a45f; font-size: 12px; line-height: 18px; }
#d2ed-overlay .d2ed-msg { flex: 1; color: #9fd38a; font-size: 13px; }
#d2ed-overlay .d2ed-x { background: none; border: 0; color: #d8d0c0; font-size: 24px; line-height: 1; cursor: pointer; }
#d2ed-overlay .d2ed-body { overflow: auto; padding: 4px 14px 14px; }
#d2ed-overlay h3 { margin: 12px 0 4px; color: #c7a45f; font-size: 16px; }
#d2ed-overlay .d2ed-note { margin: 4px 0; color: #a39a82; font-size: 12px; }
#d2ed-overlay .d2ed-keep { display: flex; align-items: center; justify-content: flex-start; gap: 6px; margin: 8px 0 0; color: #e8dcc0; font-size: 13px; cursor: pointer; }
#d2ed-overlay .d2ed-keeprow { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 12px; margin-top: 8px; }
#d2ed-overlay .d2ed-keeprow .d2ed-keep { margin: 0; }
#d2ed-overlay .d2ed-presets { display: flex; flex-direction: column; gap: 6px; width: 100%; }
#d2ed-overlay .d2ed-presets > div { display: flex; align-items: center; gap: 6px; }
#d2ed-overlay .d2ed-presets button { flex: none; padding: 3px 8px; font-size: 13px; }
#d2ed-overlay select.d2ed-preset { flex: 1; min-width: 0; padding: 4px 6px; color: #f3e3b0; background: #000; border: 1px solid #5a4a2a; border-radius: 4px; font: 13px ${D2ZH_FONT}; }
#d2ed-overlay input.d2ed-preset-name { flex: 1; min-width: 0; width: auto; font: 13px ${D2ZH_FONT}; }
#d2ed-overlay .d2ed-keep input { flex: none; width: 16px; height: 16px; margin: 0; padding: 0; accent-color: #c7a45f; cursor: pointer; }
#d2ed-overlay .d2ed-attrs { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 6px; margin: 6px 0; }
#d2ed-overlay .d2ed-attr { display: flex; align-items: center; gap: 6px; padding: 4px 8px; background: rgba(0,0,0,.35); border: 1px solid #2e2216; border-radius: 6px; }
#d2ed-overlay .d2ed-attr b { flex: 1; color: #f3e3b0; }
#d2ed-overlay .d2ed-attr .d2ed-now { margin-left: 6px; color: #a89a7c; font-weight: normal; font-size: 12px; }
#d2ed-overlay .d2ed-count { min-width: 3em; text-align: center; color: #9fd38a; }
#d2ed-overlay .d2ed-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 6px 12px; margin: 6px 0; }
#d2ed-overlay label { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
#d2ed-overlay label span { display: flex; flex-direction: column; }
#d2ed-overlay small { color: #7d7462; font-size: 11px; }
#d2ed-overlay input { width: 96px; padding: 4px 6px; color: #f3e3b0; background: #000; border: 1px solid #5a4a2a; border-radius: 4px; font: 14px ui-monospace, Consolas, monospace; }
#d2ed-overlay button:not(.d2ed-x) { padding: 4px 12px; cursor: pointer; color: #f3e3b0; background: #2c2014; border: 1px solid #8f743e; border-radius: 4px; font: inherit; }
#d2ed-overlay button.d2ed-main { color: #17120b; background: #c7a45f; font-weight: bold; }
#d2ed-overlay .d2ed-row { display: flex; gap: 8px; margin-top: 8px; }
#d2ed-overlay .d2ed-card { position: relative; }
#d2ed-overlay .d2ed-modal { position: absolute; inset: 0; display: grid; place-items: center; padding: 16px; background: rgba(0,0,0,.75); border-radius: 6px; }
#d2ed-overlay .d2ed-modal-box { width: min(420px, 100%); padding: 16px 18px; background: linear-gradient(180deg, #2a1610, #140a06); border: 2px solid #b8402e; border-radius: 8px; box-shadow: 0 8px 30px #000; }
#d2ed-overlay .d2ed-modal-box b { display: block; margin-bottom: 8px; color: #ff8a66; font-size: 18px; }
#d2ed-overlay .d2ed-modal-box ul { margin: 6px 0; padding-left: 20px; color: #d8d0c0; }
#d2ed-overlay .d2ed-warn { margin: 8px 0 0; color: #ffb080; font-size: 13px; }
#d2ed-overlay button:disabled { opacity: .45; cursor: not-allowed; }
#d2ec-overlay { position: fixed; inset: 0; z-index: 2147483647; display: flex; flex-direction: column; background: #120d08; font: 14px/1.4 ${D2ZH_FONT}; color: #e8e2d0; }
#d2ec-overlay button { padding: 4px 12px; cursor: pointer; color: #f3e3b0; background: #2c2014; border: 1px solid #8f743e; border-radius: 4px; font: inherit; }
#d2ec-overlay input, #d2ec-overlay select { padding: 4px 6px; color: #f3e3b0; background: #000; border: 1px solid #5a4a2a; border-radius: 4px; font: 14px ${D2ZH_FONT}; }
#d2ec-overlay .d2ec-head { flex: none; display: flex; align-items: center; gap: 8px; padding: 8px 12px; border-bottom: 1px solid #4a3418; }
#d2ec-overlay .d2ec-head b { color: #f0c94a; font-size: 17px; white-space: nowrap; }
#d2ec-overlay .d2ec-search { flex: 1; min-width: 0; font-size: 15px; }
#d2ec-overlay .d2ec-pick { flex: none; white-space: nowrap; }
#d2ec-overlay .d2ec-grow { flex: 1; }
#d2ec-overlay button.d2ec-x { flex: none; padding: 0 6px; background: none; border: 0; color: #d8d0c0; font-size: 26px; line-height: 1; }
#d2ec-overlay .d2ec-main { flex: 1; min-height: 0; display: grid; grid-template-columns: minmax(180px, 2fr) 5fr; }
#d2ec-overlay .d2ec-results { overflow-y: auto; padding: 6px; border-right: 1px solid #4a3418; }
#d2ec-overlay .d2ec-editor { overflow-y: auto; padding: 8px 14px; }
#d2ec-overlay .d2ec-hint { margin: 8px 4px; color: #a39a82; }
#d2ec-overlay button.d2ec-result { display: flex; align-items: center; gap: 8px; width: 100%; margin-bottom: 4px; padding: 3px 6px; text-align: left; background: rgba(0,0,0,.35); border-color: #2e2216; }
#d2ec-overlay button.d2ec-result.on { border-color: #f0c94a; background: rgba(150,120,50,.24); }
#d2ec-overlay .d2ec-result img { flex: none; width: 28px; height: 28px; object-fit: contain; image-rendering: pixelated; }
#d2ec-overlay .d2ec-result span { min-width: 0; }
#d2ec-overlay small { display: block; color: #a89a7c; font-size: 12px; }
#d2ec-overlay .d2ec-r-unique, #d2ec-overlay .d2ec-r-runeword { color: #d9c27e; }
#d2ec-overlay .d2ec-r-set { color: #4bd04b; }
#d2ec-overlay .d2ec-r-rare { color: #ffe86a; }
#d2ec-overlay .d2ec-r-magic { color: #8f9cff; }
#d2ec-overlay .d2ec-title { display: flex; align-items: center; gap: 10px; margin-bottom: 4px; }
#d2ec-overlay .d2ec-title img { max-height: 64px; image-rendering: pixelated; }
#d2ec-overlay .d2ec-title b { font-size: 18px; }
#d2ec-overlay .d2ec-base { margin: 2px 0 6px; color: #d8d0c0; }
#d2ec-overlay h4 { margin: 10px 0 2px; color: #4bd04b; font-size: 13px; font-weight: normal; }
#d2ec-overlay .d2ec-row { display: flex; align-items: center; gap: 10px; padding: 3px 0; border-bottom: 1px solid #2e2216; }
#d2ec-overlay .d2ec-label { flex: 1; min-width: 0; color: #8f9cff; }
#d2ec-overlay .d2ec-range { flex: none; color: #a89a7c; font-size: 12px; white-space: nowrap; }
#d2ec-overlay .d2ec-row input { flex: none; width: 76px; font-family: ui-monospace, Consolas, monospace; }
#d2ec-overlay .d2ec-row select { flex: 1; min-width: 0; max-width: 60%; }
#d2ec-overlay .d2ec-fixed { margin: 0; padding: 3px 0; color: #8f9cff; }
#d2ec-overlay .d2ec-actions { position: sticky; bottom: -8px; display: flex; align-items: center; gap: 12px; margin-top: 8px; padding: 6px 0 8px; background: #120d08; }
#d2ec-overlay button.d2ec-ok { padding: 5px 28px; color: #17120b; background: #c7a45f; font-weight: bold; }
#d2ec-overlay .d2ec-msg { color: #9fd38a; }
#d2ec-overlay .d2ec-inv { flex: none; padding: 6px 12px 8px; border-top: 1px solid #4a3418; background: #0b0805; --d2ec-cell: min(34px, 7.4vh, calc((100vw - 24px) / 10)); }
#d2ec-overlay .d2ec-invhead { display: flex; align-items: center; gap: 12px; margin-bottom: 4px; font-size: 13px; color: #a89a7c; }
#d2ec-overlay .d2ec-invhead b { color: #c7a45f; font-weight: normal; }
#d2ec-overlay .d2ec-invinfo { color: #e8e2d0; }
#d2ec-overlay .d2ec-grid { display: grid; grid-template-columns: repeat(10, var(--d2ec-cell)); grid-template-rows: repeat(4, var(--d2ec-cell)); width: max-content; background-color: #000;
background-image: linear-gradient(#2e2216 1px, transparent 1px), linear-gradient(90deg, #2e2216 1px, transparent 1px); background-size: var(--d2ec-cell) var(--d2ec-cell); outline: 1px solid #4a3418; }
#d2ec-overlay .d2ec-item { display: grid; place-items: center; overflow: hidden; background: rgba(90,90,180,.22); font-size: 10px; line-height: 1.1; text-align: center; }
#d2ec-overlay .d2ec-item img { max-width: 100%; max-height: 100%; image-rendering: pixelated; pointer-events: none; }
#d2ec-overlay .d2ec-picker { position: absolute; inset: 0; display: flex; flex-direction: column; background: #120d08; }
#d2ec-overlay .d2ec-tabs { flex: none; display: flex; flex-wrap: wrap; gap: 3px; padding: 6px 12px; border-bottom: 1px solid #4a3418; }
#d2ec-overlay .d2ec-tabs button { padding: 2px 7px; font-size: 13px; }
#d2ec-overlay .d2ec-tabs button.on { color: #17120b; background: #c7a45f; }
#d2ec-overlay .d2ec-slots { flex: 1; min-height: 0; overflow-y: auto; display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); grid-auto-rows: 118px; gap: 4px; padding: 8px 12px; }
#d2ec-overlay button.d2ec-slot { display: flex; flex-direction: column; align-items: center; gap: 2px; padding: 4px 2px; overflow: hidden; background: rgba(0,0,0,.55); border-color: transparent; text-align: center; }
#d2ec-overlay button.d2ec-slot:hover { border-color: #7a6a3a; }
#d2ec-overlay button.d2ec-slot.kept { background: rgba(150,120,50,.24); }
#d2ec-overlay .d2ec-slot img { flex: 1; min-height: 0; max-width: 100%; object-fit: contain; image-rendering: pixelated; }
#d2ec-overlay .d2ec-slot span { flex: none; font-size: 13px; line-height: 1.15; }
#d2ec-overlay .d2ec-modal { position: absolute; inset: 0; display: grid; place-items: center; padding: 16px; background: rgba(0,0,0,.75); }
#d2ec-overlay .d2ec-modal-box { width: min(380px, 100%); padding: 16px 18px; background: linear-gradient(180deg, #2a1610, #140a06); border: 2px solid #b8402e; border-radius: 8px; }
#d2ec-overlay .d2ec-modal-box p { margin: 0 0 12px; }
@media (max-width: 620px) { #d2ec-overlay .d2ec-main { grid-template-columns: 1fr; grid-template-rows: minmax(70px, 2fr) 5fr; } #d2ec-overlay .d2ec-results { border-right: 0; border-bottom: 1px solid #4a3418; } }
`;
document.head.append(style);
D2ED.button = d2edEl('button', { id: 'd2ed-btn', type: 'button', onclick: e => { e.preventDefault(); e.stopPropagation(); d2edOpen(); } }, '書籤修改');
document.body.append(D2ED.button);
for (const type of ['pointerdown', 'pointerup', 'mousedown', 'mouseup', 'click', 'touchstart', 'touchend']) {
window.addEventListener(type, e => {
if (e.target instanceof Element && (e.target.closest('#d2ed-btn') || e.target.closest('#d2ed-overlay') || e.target.closest('#d2ec-overlay'))) {
if (type === 'click') return;
e.stopImmediatePropagation();
}
}, true);
}
d2edAdoptSwitcher();
requestAnimationFrame(d2edPlaceButton);
// 等遊戲畫面出來再跳更新說明，不要蓋在載入畫面上；回應.txt 有新內容時先跳回報內容，關掉後才跳更新說明
setTimeout(d2zhStartupPopups, 2500);
}
d2zhInstallHook();
const D2ZH_EXTRA = {"labels":{"Cap":"帽子","Skull Cap":"骷髏帽","Helm":"頭盔","Full Helm":"全盔","Great Helm":"卓越頭盔","Mask":"面具","Crown":"皇冠","Bone Helm":"骨盔","War Hat":"戰帽","Sallet":"輕便頭盔","Casque":"無頰頭盔","Basinet":"圓頂盔","Winged Helm":"翼盔","Grim Helm":"陰森頭盔","Grand Crown":"巨皇冠","Death Mask":"死亡面具","Shako":"軍帽","Hydraskull":"九頭蛇頭蓋骨圓帽","Armet":"活動頭盔","Giant Conch":"巨型海螺","Spired Helm":"螺旋頭盔","Corona":"頭冠","Demonhead":"惡魔頭顱","Bone Visage":"骨面","Circlet":"頭飾","Coronet":"寶冠","Tiara":"三重冠","Diadem":"權冠","Wolf Head":"狼頭","Hawk Helm":"飛鷹頭盔","Antlers":"鹿角","Falcon Mask":"獵鷹面具","Spirit Mask":"靈魂狼頭面具","Alpha Helm":"阿爾發頭盔","Griffon Headdress":"獅鷲獸頭帶","Hunter's Guise":"獵人的偽裝","Sacred Feathers":"神聖羽毛頭帶","Totemic Mask":"圖騰面具狼盔","Blood Spirit":"血腥之靈","Sun Spirit":"太陽之靈","Earth Spirit":"大地之靈","Sky Spirit":"天空之靈","Dream Spirit":"幽夢之靈","Jawbone Cap":"顎骨帽","Fanged Helm":"尖牙盔","Horned Helm":"角盔","Assault Helmet":"突擊頭盔","Avenger Guard":"復仇者之盔","Jawbone Visor":"顎骨面甲","Lion Helm":"獅頭尖盔","Rage Mask":"狂怒面具","Savage Helmet":"野蠻頭盔","Slayer Guard":"殺手防護面甲","Carnage Helm":"屠殺頭盔","Fury Visor":"暴怒面甲","Destroyer Helm":"毀滅者頭盔","Conqueror Crown":"征服者皇冠面甲","Guardian Crown":"守護者皇冠","Quilted Armor":"布甲","Leather Armor":"皮甲","Hard Leather Armor":"硬皮甲","Studded Leather":"鑲嵌甲","Ring Mail":"環甲","Scale Mail":"鱗甲","Chain Mail":"鎖子甲","Breast Plate":"胸甲","Splint Mail":"板甲","Plate Mail":"板甲","Field Plate":"實戰鎧甲","Gothic Plate":"哥德鎧甲","Full Plate Mail":"全身鎧甲","Ancient Armor":"古代盔甲","Light Plate":"輕型裝甲","Ghost Armor":"鬼魂戰甲","Serpentskin Armor":"海蛇皮甲","Demonhide Armor":"惡魔皮甲","Trellised Armor":"攀繞戰甲","Linked Mail":"連環甲","Tigulated Mail":"鱗片甲","Mesh Armor":"織網戰甲","Cuirass":"胸鎧","Russet Armor":"羅瑟戰甲","Templar Coat":"聖殿外衣","Sharktooth Armor":"鯊齒戰甲","Embossed Plate":"浮雕鎧甲","Chaos Armor":"混沌盔甲","Ornate Plate":"華麗鎧甲","Mage Plate":"法師鎧甲","Dusk Shroud":"灰暮壽衣","Wyrmhide":"龍皮甲","Scarab Husk":"聖甲蟲殼","Wire Fleece":"線羊毛皮甲","Diamond Mail":"鑽石甲","Loricated Mail":"鎖片甲","Boneweave":"骸骨鏈甲","Great Hauberk":"巨型鎖甲","Balrog Skin":"炎魔皮板甲","Hellforge Plate":"地獄熔爐鎧甲","Kraken Shell":"海妖殼甲","Lacquered Plate":"漆鎧","Shadow Plate":"暗影鎧甲","Sacred Armor":"神聖盔甲","Archon Plate":"執政官鎧甲","Buckler":"圓盾","Small Shield":"小盾牌","Large Shield":"大盾牌","Kite Shield":"輕盾","Tower Shield":"塔盾","Gothic Shield":"哥德盾牌","Bone Shield":"白骨盾牌","Spiked Shield":"尖刺盾","Defender":"防禦者盾","Round Shield":"圓型盾","Scutum":"長方盾","Dragon Shield":"龍盾","Pavise":"大型立盾","Ancient Shield":"古代之盾","Grim Shield":"冷酷之盾","Barbed Shield":"倒鉤盾","Heater":"加熱盾","Luna":"月盾","Hyperion":"亥伯龍盾","Monarch":"統治者大盾","Aegis":"神盾","Ward":"保護盾牌","Troll Nest":"洞穴巨魔巢穴骨盾","Blade Barrier":"刀刃屏障","Targe":"小盾","Rondache":"圓盾牌","Heraldic Shield":"紋章盾","Aerin Shield":"艾林盾","Crown Shield":"皇冠盾","Akaran Targe":"阿卡蘭輕圓盾","Akaran Rondache":"阿卡蘭圓盾","Protector Shield":"保護者之盾","Gilded Shield":"飾金盾牌","Royal Shield":"皇家盾","Sacred Targe":"神聖小盾","Sacred Rondache":"神聖輕圓盾","Kurast Shield":"庫拉斯特盾","Zakarum Shield":"撒卡蘭姆盾牌","Vortex Shield":"旋風盾","Preserved Head":"保存頭顱","Zombie Head":"殭屍頭顱","Unraveller Head":"解縛者頭顱","Gargoyle Head":"石像鬼頭顱","Demon Head":"惡魔之首","Mummified Trophy":"木乃伊獎章","Fetish Trophy":"妖人獎章","Sexton Trophy":"助祭獎章","Cantor Trophy":"領唱者印記","Hierophant Trophy":"祭司印記","Minion Skull":"僕從骷髏","Hellspawn Skull":"地獄之子骷髏","Overseer Skull":"督軍骷髏","Succubus Skull":"女妖之骨","Bloodlord Skull":"血王之骨","Leather Gloves":"皮手套","Heavy Gloves":"重手套","Chain Gloves":"鎖鍊手套","Light Gauntlets":"輕型鐵手套","Gauntlets":"鐵手套","Demonhide Gloves":"魔皮手套","Sharkskin Gloves":"鯊魚皮套","Heavy Bracers":"重型手鐲","Battle Gauntlets":"戰場手套","War Gauntlets":"巨戰手套","Bramble Mitts":"荊棘連指手套","Vampirebone Gloves":"吸血鬼骸骨手套","Vambraces":"吸血鬼手套","Crusader Gauntlets":"十字軍鐵手套","Ogre Gauntlets":"食人魔鐵手套","Boots":"靴子","Heavy Boots":"重靴","Chain Boots":"鎖鍊靴","Light Plated Boots":"輕型金屬靴","Greaves":"護脛","Demonhide Boots":"魔皮靴","Sharkskin Boots":"鯊皮之靴","Mesh Boots":"織網之靴","Battle Boots":"戰場之靴","War Boots":"巨戰之靴","Wyrmhide Boots":"龍皮靴","Scarabshell Boots":"聖甲蟲殼靴","Boneweave Boots":"骸骨靴","Mirrored Boots":"鏡面靴","Myrmidon Greaves":"極速靴","Sash":"飾帶","Light Belt":"輕扣帶","Belt":"腰帶","Heavy Belt":"重扣帶","Plated Belt":"金屬扣帶","Demonhide Sash":"魔皮勳帶","Sharkskin Belt":"鯊皮腰帶","Mesh Belt":"織網腰帶","Battle Belt":"戰場腰帶","War Belt":"巨戰腰帶","Spiderweb Sash":"蛛網腰帶","Vampirefang Belt":"吸血鬼燎牙腰帶","Mithril Coil":"秘銀腰帶","Troll Belt":"洞穴巨魔腰帶","Colossus Girdle":"巨神腰帶","Hand Axe":"手斧","Axe":"斧","Double Axe":"雙刃斧","Military Pick":"軍用鎬","War Axe":"巨戰斧","Large Axe":"巨斧","Broad Axe":"闊斧","Battle Axe":"戰鬥斧","Great Axe":"卓越之斧","Giant Axe":"大斧","Hatchet":"小斧","Cleaver":"切肉斧","Twin Axe":"強化雙斧","Crowbill":"鴉喙斧","Naga":"納卡","Military Axe":"軍斧","Bearded Axe":"鬚斧","Tabar":"戰鬥斧","Gothic Axe":"哥德之斧","Ancient Axe":"古代之斧","Tomahawk":"戰鉞","Small Crescent":"小新月斧","Ettin Axe":"雙頭斧","War Spike":"戰刺","Berserker Axe":"狂戰士斧","Feral Axe":"猛禽斧","Silver-edged Axe":"銀刃斧","Decapitator":"斬首斧","Champion Axe":"豪傑斧","Glorious Axe":"榮光之斧","Wand":"法杖","Yew Wand":"紫杉之杖","Bone Wand":"骨杖","Grim Wand":"殘酷之杖","Burnt Wand":"燒焦之杖","Petrified Wand":"淨化之杖","Tomb Wand":"古墓之杖","Grave Wand":"墓地之杖","Polished Wand":"拋光魔杖","Ghost Wand":"鬼魂法杖","Lich Wand":"巫妖法杖","Unearthed Wand":"破隱法杖","Club":"木棒","Spiked Club":"尖刺棍棒","Mace":"釘頭錘","Morning Star":"流星鎚","Flail":"連枷","War Hammer":"巨戰鐵鎚","Maul":"撞槌","Great Maul":"巨槌","Cudgel":"棍棒","Barbed Club":"倒鉤棍","Flanged Mace":"凸緣釘頭錘","Jagged Star":"鋸齒流星鎚","Knout":"鐵皮鞭","Battle Hammer":"戰鬥鐵鎚","War Club":"戰棍","Martel de Fer":"鐵錘","Truncheon":"戰儀杖","Tyrant Club":"暴君棍","Reinforced Mace":"強化釘頭錘","Devil Star":"惡魔流星錘","Scourge":"天罰之錘","Legendary Mallet":"傳說之鎚","Ogre Maul":"食人魔大槌","Thunder Maul":"雷霆大槌","Scepter":"權杖","Grand Scepter":"雄偉權杖","War Scepter":"巨戰權杖","Rune Scepter":"符文權杖","Holy Water Sprinkler":"聖水噴杖","Divine Scepter":"神屬權杖","Mighty Scepter":"強威權杖","Seraph Rod":"熾天使之杖","Caduceus":"神使之杖","Short Sword":"短劍","Scimitar":"彎刀","Sabre":"軍刀","Falchion":"彎劍","Crystal Sword":"水晶劍","Broad Sword":"闊劍","Long Sword":"長劍","War Sword":"巨戰之劍","Two-Handed Sword":"雙手劍","Claymore":"雙刃大刀","Giant Sword":"大劍","Bastard Sword":"雜種劍","Flamberge":"焰形劍","Great Sword":"卓越之劍","Gladius":"羅馬短劍","Cutlass":"微彎劍","Shamshir":"波斯彎刀","Tulwar":"印度彎刀","Dimensional Blade":"空間之刃","Battle Sword":"戰鬥劍","Rune Sword":"符文劍","Ancient Sword":"古代之劍","Espandon":"斬鐵劍","Dacian Falx":"雙刃鐮","Tusk Sword":"長牙劍","Gothic Sword":"哥德劍","Zweihander":"雙手巨劍","Executioner Sword":"死刑之劍","Falcata":"短劍","Ataghan":"土耳其劍","Elegant Blade":"優雅之刃","Hydra Edge":"九頭蛇之刃","Phase Blade":"幻化之刃","Conquest Sword":"征服之劍","Cryptic Sword":"神秘之劍","Mythical Sword":"秘儀之劍","Legend Sword":"傳奇之劍","Highland Blade":"高地之刃","Balrog Blade":"炎魔之刃","Champion Sword":"冠軍之劍","Colossus Sword":"巨神之劍","Colossus Blade":"巨神之刃","Dagger":"匕首","Dirk":"短刀","Kris":"波刃短劍","Blade":"短刀","Poignard":"銳匕","Rondel":"圓盤匕首","Cinquedeas":"五指劍","Stiletto":"細劍","Bone Knife":"骸骨小刀","Mithril Point":"秘銀尖刺","Fanged Knife":"尖牙刀","Legend Spike":"傳說尖刺","Throwing Knife":"飛刀","Throwing Axe":"飛斧","Balanced Knife":"平衡飛刀","Balanced Axe":"平衡斧","Battle Dart":"戰鬥飛鏢","Francisca":"法蘭飛斧","War Dart":"戰爭飛鏢","Hurlbat":"短戰戟","Flying Knife":"飛刀","Flying Axe":"飛斧","Winged Knife":"翼形刀","Winged Axe":"翼斧","Javelin":"標槍","Pilum":"短鏢槍","Short Spear":"短矛","Glaive":"大長刀","Throwing Spear":"飛矛","War Javelin":"戰爭標槍","Great Pilum":"卓越標槍","Simbilan":"銳矛","Spiculum":"尖頭標槍","Harpoon":"魚叉","Hyperion Javelin":"亥伯龍標槍","Stygian Pilum":"冥河標槍","Balrog Spear":"炎魔長矛","Ghost Glaive":"鬼魂尖槍","Winged Harpoon":"翼魚叉","Spear":"長矛","Trident":"三叉戟","Brandistock":"藏刃矛","Spetum":"三刃矛","Pike":"矛","War Spear":"巨戰長矛","Fuscina":"海神叉","War Fork":"戰叉","Yari":"日本槍","Lance":"長槍","Hyperion Spear":"亥伯龍之矛","Stygian Pike":"冥河長槍","Mancatcher":"捕人叉","Ghost Spear":"幽靈長矛","War Pike":"戰槍","Bardiche":"大砍刀","Voulge":"鉤鐮","Scythe":"鐮刀","Poleaxe":"長柄戰斧","Halberd":"長戟","War Scythe":"戰爭鐮刀","Lochaber Axe":"羅佳伯斧","Bill":"鉤刀","Battle Scythe":"戰鬥鐮刀","Partizan":"闊頭槍","Bec-de-Corbin":"雙鋒戰戟","Grim Scythe":"陰森鐮刀","Ogre Axe":"食人魔之斧","Colossus Voulge":"巨神鉤鐮","Thresher":"打穀者","Cryptic Axe":"神秘之斧","Great Poleaxe":"巨長斧","Giant Thresher":"巨型打穀者","Short Staff":"短棍","Long Staff":"長棍","Gnarled Staff":"多節棍","Battle Staff":"戰鬥法杖","War Staff":"巨戰法杖","Jo Staff":"喬木棒","Quarterstaff":"長棍","Cedar Staff":"杉木棍","Gothic Staff":"哥德之棍","Rune Staff":"符文之棍","Walking Stick":"手杖","Stalagmite":"鐘乳石之杖","Elder Staff":"長老之杖","Shillelagh":"樹皮之杖","Archon Staff":"執政官之杖","Short Bow":"短弓","Hunter's Bow":"獵弓","Long Bow":"長弓","Composite Bow":"組合弓","Short Battle Bow":"短戰鬥弓","Long Battle Bow":"長戰鬥弓","Short War Bow":"短巨戰弓","Long War Bow":"長巨戰弓","Edge Bow":"鋒銳之弓","Razor Bow":"剃刀之弓","Cedar Bow":"杉木弓","Double Bow":"雙弓","Short Siege Bow":"短攻城弓","Large Siege Bow":"長攻城弓","Rune Bow":"符文之弓","Gothic Bow":"哥德弓","Spider Bow":"蜘蛛弓","Blade Bow":"刀鋒弓","Shadow Bow":"陰影弓","Great Bow":"巨弓","Diamond Bow":"鑽石弓","Crusader Bow":"十字軍弓","Ward Bow":"庇護之弓","Hydra Bow":"九頭蛇弓","Light Crossbow":"輕十字弓","Crossbow":"十字弓","Heavy Crossbow":"重十字弓","Repeating Crossbow":"連發十字弓","Arbalest":"石弓","Siege Crossbow":"攻城十字弓","Ballista":"弩弓","Chu-Ko-Nu":"諸葛連弩","Pellet Bow":"彈丸弓","Gorgon Crossbow":"蛇髮女妖十字弓","Colossus Crossbow":"巨神十字弓","Demon Crossbow":"惡魔十字弓","Katar":"拳劍","Wrist Blade":"腕刃","Hatchet Hands":"斧手","Cestus":"腰刀","Claws":"爪","Blade Talons":"刃爪","Scissors Katar":"剪咬刃","Quhab":"格鬥刃","Wrist Spike":"腕刺","Fascia":"格鬥爪","Hand Scythe":"手鐮","Greater Claws":"巨爪","Greater Talons":"巨鷹爪","Scissors Quhab":"剪刃庫哈布","Suwayyah":"近身刃","Wrist Sword":"腕劍","War Fist":"戰拳","Battle Cestus":"鬥腰刀","Feral Claws":"猛禽爪","Runic Talons":"符紋爪","Scissors Suwayyah":"近身剪","Eagle Orb":"鷹之法珠","Sacred Globe":"神聖法球","Smoked Sphere":"煙霧法珠","Clasped Orb":"扣環法珠","Jared's Stone":"傑瑞德之石","Glowing Orb":"發光法珠","Crystalline Globe":"水晶法球","Cloudy Sphere":"雲霧法珠","Sparkling Ball":"閃耀水晶球","Swirling Crystal":"渦流水晶","Heavenly Stone":"天堂之石","Eldritch Orb":"怪異之球","Demon Heart":"惡魔之心","Vortex Orb":"漩渦球","Dimensional Shard":"次元碎片","Stag Bow":"男性之弓","Reflex Bow":"反射之弓","Maiden Spear":"少女之矛","Maiden Pike":"少女長槍","Maiden Javelin":"女士標槍","Ashwood Bow":"灰木之弓","Ceremonial Bow":"祭典之弓","Ceremonial Spear":"儀式之矛","Ceremonial Pike":"祭典之長矛","Ceremonial Javelin":"祭典之 標 槍","Matriarchal Bow":"女族長之弓","Grand Matron Bow":"大院長之弓","Matriarchal Spear":"女族長之矛","Matriarchal Pike":"族長長槍","Matriarchal Javelin":"女族長之 標 槍","Rogue's Bow":"蘿格之弓","Valkyrie Wing":"女神之翼","Undead Crown":"不死皇冠","Arch-Angel's Wing":"大天使之翼","Healing Potion":"治療藥水","Mana Potion":"法力藥水","Rejuvenation Potion":"回復藥水","Full Rejuvenation Potion":"全面回復藥水","Scroll of Town Portal":"城鎮傳送卷軸","Tome of Town Portal":"城鎮傳送之書","Gold":"金幣","Small Charm":"小型護符","Chipped":"碎裂的","Flawed":"瑕疵的","Flawless":"無瑕的","Perfect":"完美的","Amethyst":"紫寶石","Topaz":"黃寶石","Sapphire":"蔚藍","Emerald":"祖母綠","Ruby":"紅寶石","Diamond":"鑽石","Skull":"骷髏","Azurewrath":"蒼怒","Bladebone":"刃骨","Bloodfist":"血拳","Bloodrise":"血湧","Boneflame":"骨焰","Bonehew":"砍骨","Boneshade":"骨影","Brainhew":"碎腦","Crushflange":"碎骨錘","Culwen's Point":"庫爾溫的尖端","Deathbit":"死亡之刺","Deathspade":"死亡之鏟","Axe of Fechmar":"費屈瑪之斧","Felloak":"倒橡","Frostburn":"霜燒","Ghostflame":"鬼焰","Goldwrap":"金色包裹","Gorefoot":"血足","Gravenspine":"墳脊","Greyform":"灰形","Griswold's Edge":"格里斯瓦得的銳利","Hellcast":"地獄鑄","Hellclap":"地獄霹靂","Hellplague":"地獄瘟疫","Hellrack":"地獄架","Hotspur":"馬刺","Howltusk":"嚎牙","Iceblink":"冰眨","Ironstone":"鐵石","Lightsabre":"光劍","Magefist":"法師之拳","Nagelring":"納格戒指","Nightsmoke":"夜煙","Ormus' Robes":"奧瑪斯的長袍","Pluckeye":"挖眼","Rakescar":"耙疤","Ravenlore":"鴉之傳說","Razortail":"剃刀之尾","Rockfleece":"岩羊毛","Rusthandle":"鏽柄","Saracen's Chance":"薩拉森的機會","Shadowfang":"影牙","Snakecord":"蛇索","Soulflay":"剝魂","Spineripper":"裂脊","Stealskull":"竊顱","Steelclash":"鋼擊","Steelrend":"裂鋼","Stoneraven":"石鴉","Stormeye":"風暴之眼","Stormguild":"風暴之會","Stormspike":"風暴之刺","Stormstrike":"風暴之擊","Stormtree":"風暴之樹","Tearhaunch":"撕腿","Thunderstroke":"雷擊","Toothrow":"齒列","Twitchthroe":"抽搐","Witherstring":"枯弦","Wizardspike":"巫師之刺","Woestave":"悲哀之杖","Wolfhowl":"狼嚎","Blastbark":"爆樹皮","Beetleburst":"甲蟲爆裂","Bladebuckle":"刃扣","Metalgrid":"金屬網格","Leadcrow":"鉛鴉","Hellmouth":"地獄之口","Maelstrom":"大漩渦","Lacerator":"撕裂者","Widowmaker":"寡婦製造者","Chance Guards":"運氣守護","Hand of Blessed Light":"祝福之光之手","Amber":"琥珀","Arcing":"彎曲","Azure":"天青","Bahamut's":"巴哈姆特的","Beryl":"海藍","Blessed":"祝福的","Boreal":"北風","Bronze":"青銅","Brutal":"野蠻的","Buzzing":"嗡鳴的","Chromatic":"彩色的","Cobalt":"鈷","Coral":"珊瑚","Corosive":"腐蝕的","Crimson":"棗紅","Cruel":"殘酷的","Deadly":"致命的","Dragon's":"龍的","Drake's":"飛龍的","Ember":"餘燼的","Envenomed":"淬毒的","Felicitous":"幸運的","Ferocious":"殘暴的","Fine":"精良","Flaming":"燃燒","Fortuitous":"偶然的","Garnet":"深紅","Glimmering":"微光的","Glorious":"光榮的","Glowing":"發光","Godly":"如神的","Grandmaster's":"大宗師的","Great Wyrm's":"巨龍的","Hibernal":"冬季的","Holy":"神聖的","Iron":"鐵","Jade":"翠綠","Jagged":"鋸齒","King's":"國王的","Knight's":"騎士的","Lapis":"天藍","Lizard's":"蜥蜴","Lord's":"領主的","Massive":"巨大的","Master's":"大師","Merciless":"無情的","Meteoric":"流星的","Mnemonic":"記憶的","Ocher":"赭色的","Pestilent":"瘟疫","Platinum":"白金","Prismatic":"稜鏡的","Rainbow":"彩虹的","Russet":"赤褐","Saintly":"聖潔的","Savage":"凶猛的","Scintillating":"閃爍的","Scorching":"灼熱的","Septic":"腐敗","Serpent's":"海蛇","Sharp":"尖銳","Shimmering":"閃耀","Shivering":"顫抖","Shocking":"震撼","Silver":"白銀的","Smoking":"煙霧","Smoldering":"悶燒","Snake's":"蛇","Snowflake":"雪花的","Soldier's":"士兵的","Static":"靜態","Steel":"鋼","Strange":"奇異的","Strong":"強壯的","Sturdy":"堅固的","Tangerine":"紅柑","Toxic":"劇毒","Vicious":"惡毒的","Viridian":"銘綠","Warrior's":"戰士的","Weird":"怪異的","Wyrm's":"巨龍的","of Chance":"機運之","of Dexterity":"敏捷之","of Energy":"精力之","of Fire":"火焰之","of Health":"健康之","of Life":"生命之","of Life Everlasting":"永生之","of Lightning":"閃電之","of Skill":"技巧之","of Speed":"速度之","of Strength":"力量之","Gloom":"陰鬱","Gray":"灰色","Dire":"恐怖","Black":"黑色","Shadow":"暗影","Haze":"迷霧","Wind":"疾風","Storm":"風暴","Warp":"扭曲","Night":"暗夜","Moon":"月亮","Star":"星辰","Pit":"深坑","Flame":"火焰","Ice":"寒冰","Seethe":"沸騰","Ash":"灰燼","Stone":"岩石","Rust":"鐵鏽","Mold":"黴菌","Blight":"枯萎","Plague":"瘟疫","Rot":"腐爛","Ooze":"軟泥","Puke":"嘔吐","Snot":"鼻涕","Bile":"膽汁","Blood":"鮮血","Pulse":"脈動","Gut":"腸","Gore":"血腥","Flesh":"血肉","Bone":"骨","Spine":"脊椎","Mind":"心智","Spirit":"靈魂","Soul":"魂","Wrath":"憤怒","Grief":"悲傷","Foul":"污穢","Vile":"邪惡","Sin":"罪","Chaos":"混沌","Dread":"恐懼","Doom":"末日","Bane":"災禍","Death":"死亡","Viper":"毒蛇","Dragon":"龍","Devil":"惡魔","Touch":"之觸","Spell":"咒語","Feast":"盛宴","Wound":"創傷","Grin":"獰笑","Maim":"致殘","Hack":"劈砍","Bite":"之咬","Rend":"撕裂","Burn":"灼燒","Ripper":"撕裂者","Kill":"殺戮","Call":"呼喚","Vex":"煩擾","Web":"之網","Killer":"殺手","Razor":"剃刀","Drinker":"飲者","Shifter":"變形者","Crawler":"爬行者","Dancer":"舞者","Bender":"扭曲者","Weaver":"編織者","Eater":"吞噬者","Widow":"寡婦","Maggot":"蛆","Spawn":"之子","Wight":"屍妖","Grumble":"咕噥","Growler":"咆哮者","Snarl":"咆哮","Wolf":"狼","Crow":"烏鴉","Hawk":"鷹","Cloud":"雲","Bang":"轟","Head":"頭","Brow":"眉","Eye":"之眼","Maw":"巨口","Tongue":"舌","Fang":"尖牙","Horn":"號角","Thorn":"荊棘","Claw":"爪","Fist":"拳","Heart":"之心","Shank":"脛","Skin":"之皮","Wing":"之翼","Pox":"痘","Fester":"潰爛","Blister":"水泡","Pus":"膿","Slime":"黏液","Drool":"口水","Froth":"泡沫","Sludge":"淤泥","Poison":"毒","Break":"破碎","Shard":"碎片","Thirst":"之渴","Lust":"慾望","Beast":"野獸","Eagle":"鷹","Ghoul":"食屍鬼","Grim":"陰森","Rune":"符文","Wraith":"幽魂","Pain":"痛苦","Havoc":"浩劫","Gale":"狂風","Brimstone":"硫磺","Vengeance":"復仇","Badge":"徽章","Band":"指環","Beads":"念珠","Branch":"枝","Buckle":"扣環","Carapace":"甲殼","Clasp":"扣","Clutches":"爪握","Coat":"外衣","Coil":"盤繞","Collar":"項圈","Cord":"繩","Cowl":"兜帽","Crack":"裂痕","Crest":"頂飾","Cry":"哭號","Dart":"飛鏢","Edge":"之刃","Emblem":"紋章","Finger":"指","Fletch":"箭羽","Flight":"飛翔","Gnarl":"節瘤","Goad":"刺棒","Gorget":"護頸","Grip":"握","Guard":"守衛","Gutter":"溝","Gyre":"旋轉","Hand":"之手","Hew":"砍","Hide":"皮","Hold":"掌握","Hood":"兜帽","Jack":"夾克","Knell":"喪鐘","Knot":"結","Knuckle":"指節","Lash":"鞭","Lock":"鎖","Loop":"環","Mallet":"木槌","Mangler":"絞肉者","Mantle":"披風","Mark":"印記","Nails":"之釘","Necklace":"項鍊","Needle":"針","Nock":"箭扣","Noose":"絞索","Pelt":"毛皮","Prod":"戳刺","Quarrel":"弩箭","Quill":"羽刺","Road":"之路","Saw":"鋸","Scalpel":"手術刀","Scarab":"聖甲蟲","Scratch":"抓痕","Shroud":"裹屍布","Slippers":"拖鞋","Smasher":"粉碎者","Song":"之歌","Sphere":"球","Spike":"尖刺","Spiral":"螺旋","Spire":"尖塔","Splitter":"劈裂者","Spur":"馬刺","Stake":"木樁","Stalk":"莖","Stinger":"螫刺","Strap":"皮帶","Suit":"套裝","Sunder":"分裂","Talisman":"護符","Torc":"金屬項圈","Tower":"高塔","Track":"足跡","Trample":"踐踏","Turn":"轉折","Veil":"面紗","Visage":"面容","Wrack":"毀滅","Chant":"頌歌","Blazer":"烈焰","Abaddon":"亞巴頓","Abominable":"可憎雪人","Abyss Knight":"深淵騎士","Afflicted":"受折磨者","Apparition":"幻影","Arach":"阿拉克蛛","Arcane":"秘法","Assailant":"襲擊者","Axe Dweller":"斧居者","Balrog":"炎魔","Barracks":"兵營","Bishibosh":"比西博什","Black Archer":"黑暗弓箭手","Black Lancer":"黑暗槍兵","Black Locusts":"黑蝗蟲","Black Raptor":"黑猛禽","Black Raptor Nest":"黑猛禽巢","Black Rogue":"黑暗羅格","Black Soul":"黑魂","Blaze Ripper":"烈焰撕裂者","Blood Boss":"血頭目","Blood Bringer":"帶血者","Blood Clan":"血族","Blood Diver":"血潛者","Blood Hawk Nest":"血鷹巢","Blood Lord":"血王","Blood Maggot":"血蛆","Blood Maggot Egg":"血蛆卵","Blood Maggot Young":"幼血蛆","Blood Temptress":"血之誘惑者","Blood Wing":"血翼","Blunderbore":"笨熊巨人","Bog Creature":"沼澤生物","Bone Archer":"骷髏弓箭手","Bone Ash":"骨灰","Bone Mage":"骷髏法師","Bone Scarab":"骨甲蟲","Bone Warrior":"骷髏戰士","Bonebreaker":"碎骨者","Bramble Hulk":"荊棘巨人","Brute":"野獸人","Burning Dead":"燃燒亡者","Burning Dead Archer":"燃燒亡者弓箭手","Burning Dead Mage":"燃燒亡者法師","Burning Soul":"燃燒之魂","Cadaver":"屍體","Cantor":"吟唱者","Carrion Bird":"腐肉鳥","Carver":"雕刻者","Carver Shaman":"雕刻者薩滿","Cave Leaper":"洞穴跳躍者","Claw Viper":"利爪蝮蛇","Cliff Lurker":"懸崖潛伏者","Cloud Stalker":"雲中追蹤者","Coldcrow":"寒鴉","Corpse Spitter":"屍體噴吐者","Corpsefire":"屍火","Corpulent":"肥胖者","Council Member":"議會成員","Crush Beast":"粉碎獸","Crusher":"粉碎者","Damned":"被詛咒者","Dark Archer":"黑暗弓箭手","Dark Familiar":"黑暗使魔","Dark Hunter":"黑暗獵手","Dark Lancer":"黑暗槍兵","Dark Lord":"黑暗領主","Dark One":"黑暗者","Dark Ranger":"黑暗遊俠","Dark Shaman":"黑暗薩滿","Dark Shape":"黑暗之形","Dark Spearwoman":"黑暗女槍兵","Dark Stalker":"黑暗追蹤者","Darkwing":"暗翼","Death Beetle":"死亡甲蟲","Death Berserker":"死亡狂戰士","Death Brawler":"死亡鬥士","Death Brigadier":"死亡准將","Death Clan":"死亡氏族","Death Lord":"死亡領主","Death Mauler":"死亡重擊者","Death Slasher":"死亡斬擊者","Decayed":"腐朽者","Defiled Warrior":"褻瀆戰士","Demon Gremlin":"惡魔小鬼","Demon Imp":"惡魔小惡魔","Demon Rascal":"惡魔搗蛋鬼","Demon Sprite":"惡魔精靈","Demon Trickster":"惡魔騙子","Desert Wing":"沙漠之翼","Devilkin":"小惡魔","Devilkin Shaman":"小惡魔薩滿","Devourer":"吞噬者","Devourer Egg":"吞噬者卵","Devourer Young":"幼吞噬者","Disfigured":"毀容者","Doom Ape":"末日猿","Doom Caster":"末日施法者","Doom Knight":"末日騎士","Dried Corpse":"乾屍","Drowned Carcass":"溺斃的屍骸","Dune Beast":"沙丘獸","Dung Soldier":"糞甲蟲戰士","Embalmed":"防腐屍","Enslaved":"被奴役者","Faithful":"信徒","Fallen":"沉淪魔","Fallen Shaman":"沉淪魔巫師","Fangskin":"牙皮","Feeder":"進食者","Fetid Defiler":"惡臭褻瀆者","Fetish":"妖人","Fetish Shaman":"妖人薩滿","Fiend":"惡魔","Fire Boar":"火焰野豬","Flame Spider":"火焰蜘蛛","Flamespike the Crawler":"爬行者焰刺","Flayer":"剝皮者","Flayer Shaman":"剝皮者薩滿","Flesh Archer":"血肉弓箭手","Flesh Beast":"血肉獸","Flesh Hunter":"血肉獵手","Flesh Spawner":"血肉產卵者","Foul Crow":"污穢烏鴉","Foul Crow Nest":"污穢烏鴉巢","Frenzied Ice Spawn":"狂暴冰之子","Frozen Creeper":"冰凍爬行者","Frozen Scourge":"冰凍天譴","Frozen Terror":"冰凍恐懼","Frozenstein":"冰凍怪","Gargantuan Beast":"巨型野獸","Ghost":"鬼魂","Ghoul Lord":"食屍鬼領主","Giant Lamprey":"巨型七鰓鰻","Giant Lamprey Egg":"巨型七鰓鰻卵","Giant Lamprey Young":"幼巨型七鰓鰻","Gloam":"暮光","Gloombat":"陰鬱蝙蝠","Grotesque":"怪誕者","Grotesque Wyrm":"怪誕巨蟲","Guardian":"守衛者","Gull":"海鷗","Greater Hell Spawn":"大地獄之子","Heirophant":"祭司長","Hell Bovine":"地獄牛","Hell Buzzard":"地獄禿鷹","Hell Cat":"地獄貓","Hell Clan":"地獄氏族","Hell Lord":"地獄領主","Hell Slinger":"地獄投石者","Hell Spawn":"地獄之子","Hell Swarm":"地獄蟲群","Hell Temptress":"地獄誘惑者","Hell Whip":"地獄之鞭","Hell Witch":"地獄女巫","Hell's Belle":"地獄美人","Hollow One":"空洞者","Homunculus":"人造人","Horadrim Ancient":"赫拉迪姆先祖","Horror":"恐怖骷髏","Horror Archer":"恐怖弓箭手","Horror Mage":"恐怖法師","Humongous":"龐然巨人","Hungry Dead":"飢餓亡者","Huntress":"女獵手","Ice Boar":"冰霜野豬","Ice Spawn":"冰之子","Infidel":"異教徒","Invader":"入侵者","Itchies":"癢蟲","Jungle Hunter":"叢林獵手","Korlic":"科力克","Lasher":"鞭打者","Leaper":"跳躍者","Leviathan":"利維坦","Madawc":"馬道克","Marauder":"掠奪者","Mauler":"重擊者","Maw Fiend":"巨口惡魔","Minion of Destruction":"毀滅之僕","Misshapen":"畸形者","Moon Clan":"月之氏族","Moon Lord":"月之領主","Night Clan":"夜之氏族","Night Lord":"夜之領主","Night Marauder":"夜之掠奪者","Night Slinger":"夜之投石者","Night Tiger":"夜虎","Oblivion Knight":"遺忘騎士","Overlord":"霸主","Overseer":"督軍","Pindleskin":"暴躁外皮","Pit Lord":"深坑領主","Pit Viper":"深坑毒蛇","Pitspawn Fouldog":"深坑污犬","Plague Bearer":"疫病帶原者","Poison Spinner":"毒紡者","Preserved Dead":"保存的亡者","Prowling Dead":"徘徊亡者","Putrid Defiler":"腐爛褻瀆者","Radament":"拉達曼特","Rakanishu":"拉卡尼休","Rancid Defiler":"腐臭褻瀆者","Rat Man":"鼠人","Razor Spine":"剃刀脊","Reanimated Horde":"復甦部眾","Returned":"歸來者","Returned Archer":"歸來弓箭手","Returned Mage":"歸來法師","Riftwraith the Cannibal":"食人者裂隙幽魂","Rock Worm":"岩蟲","Rock Worm Egg":"岩蟲卵","Rock Worm Young":"幼岩蟲","Rot Walker":"腐行者","Saber Cat":"劍齒貓","Salamander":"火蜥蜴","Sand Leaper":"沙地跳躍者","Sand Maggot":"沙蛆","Sand Maggot Egg":"沙蛆卵","Sand Maggot Queen":"沙蛆女王","Sand Maggot Young":"幼沙蛆","Sand Raider":"沙漠掠奪者","Serpent Magus":"巨蛇法師","Sexton":"教堂司事","Siege Beast":"攻城獸","Siren":"海妖","Skeleton":"骷髏","Skeleton Archer":"骷髏弓箭手","Slayer":"殺戮者","Slime Prince":"黏液王子","Slinger":"投石者","Snow Drifter":"雪中漂泊者","Soul Killer":"靈魂殺手","Soul Killer Shaman":"靈魂殺手薩滿","Spear Cat":"標槍貓","Specter":"幽靈","Spider Magus":"蜘蛛法師","Spike Fiend":"尖刺惡魔","Steel Scarab":"鋼鐵甲蟲","Storm Caster":"風暴施法者","Strangler":"絞殺者","Stygian Dog":"冥河犬","Stygian Doll":"冥河玩偶","Stygian Fury":"冥河狂怒","Stygian Hag":"冥河女巫","Stygian Harlot":"冥河娼婦","Succubus":"魅魔","Sucker":"吸血者","Swamp Dweller":"沼澤居民","Taintbreeder":"污染繁殖者","Tainted":"受污染者","Talic":"塔力克","Temple Guard":"神殿守衛","The Banished":"被放逐者","The Tormentor":"折磨者","Thorn Beast":"荊棘獸","Thorned Hulk":"荊棘巨人","Thrasher":"鞭打者","Tomb Creeper":"墓穴爬行者","Tomb Viper":"墓穴毒蛇","Tree Lurker":"樹林潛伏者","Undead Flayer":"不死剝皮者","Undead Scavenger":"不死食腐者","Undead Soul Killer":"不死靈魂殺手","Undead Stygian Doll":"不死冥河玩偶","Unholy Corpse":"邪惡屍體","Unraveler":"解縛者","Urdar":"烏達","Venom Lord":"毒液領主","Vile Archer":"邪惡弓箭手","Vile Hunter":"邪惡獵手","Vile Lancer":"邪惡槍兵","Vile Temptress":"邪惡誘惑者","Vile Witch":"邪惡女巫","Vinvear Molech":"文維爾·莫洛克","Wailing Beast":"哀嚎獸","Warped One":"扭曲者","Warped Shaman":"扭曲薩滿","Winged Nightmare":"有翼夢魘","Wretched Defiler":"可悲褻瀆者","Yeti":"雪人","Zakarumite":"撒卡蘭姆信徒","Zealot":"狂熱者","Zombie":"殭屍","Goatman":"山羊人","Quill Rat":"刺鼠","Corrupt Rogue":"墮落羅格","Megademon":"巨型惡魔","Regurgitator":"反芻者","Succubus Witch":"魅魔女巫","Minion":"僕從","Ancient Tunnels":"古代通道","Arachnid Lair":"蜘蛛巢穴","Burial Grounds":"墓地","Canyon of the Magi":"眾法師之谷","Catacombs Level 1":"地下墓穴第 1 層","Catacombs Level 2":"地下墓穴第 2 層","Catacombs Level 3":"地下墓穴第 3 層","Cathedral":"大教堂","Causeway":"堤道","Cave Level 1":"洞穴第 1 層","Cave Level 2":"洞穴第 2 層","Claw Viper Temple Level 1":"利爪蝮蛇神殿第 1 層","Claw Viper Temple Level 2":"利爪蝮蛇神殿第 2 層","Crypt":"地穴","Desert":"沙漠","Disused Fane":"廢棄神廟","Disused Reliquary":"廢棄聖骨箱","Drifter Cavern":"漂流者洞穴","Durance":"囚牢","Durance of Hate Level 1":"憎恨囚牢第 1 層","Durance of Hate Level 2":"憎恨囚牢第 2 層","Flayer Dungeon Level 1":"剝皮者地牢第 1 層","Flayer Dungeon Level 2":"剝皮者地牢第 2 層","Flayer Dungeon Level 3":"剝皮者地牢第 3 層","Forgotten Reliquary":"被遺忘的聖骨箱","Forgotten Sands":"被遺忘的沙地","Forgotten Temple":"被遺忘的神殿","Frozen Abyss":"冰凍深淵","Furnace of Pain":"痛苦熔爐","Halls of Anguish":"苦惱大廳","Halls of Pain":"痛苦大廳","Halls of the Dead Level 1":"死亡大廳第 1 層","Halls of the Dead Level 2":"死亡大廳第 2 層","Halls of the Dead Level 3":"死亡大廳第 3 層","Harem Level 2":"後宮第 2 層","Hole Level 1":"地洞第 1 層","Hole Level 2":"地洞第 2 層","Icy Cellar":"冰冷地窖","Infernal Pit":"地獄深坑","Inner Cloister":"內修道院","Jail Level 1":"監獄第 1 層","Jail Level 2":"監獄第 2 層","Jail Level 3":"監獄第 3 層","Kurast":"庫拉斯特","Maggot Lair Level 1":"蛆蟲巢穴第 1 層","Maggot Lair Level 2":"蛆蟲巢穴第 2 層","Maggot Lair Level 3":"蛆蟲巢穴第 3 層","Matron's Den":"女族長之巢","Mausoleum":"陵墓","Monastery":"修道院","Moo Moo Farm":"哞哞農場","Nihlathak Temple":"尼拉塞克神殿","Outer Cloister":"外修道院","Palace Cellar Level 1":"宮殿地窖第 1 層","Palace Cellar Level 2":"宮殿地窖第 2 層","Palace Cellar Level 3":"宮殿地窖第 3 層","Pit Level 1":"地坑第 1 層","Pit Level 2":"地坑第 2 層","Pit of Acheron":"冥河之坑","Ruined Fane":"毀壞的神廟","Ruined Temple":"毀壞的神殿","Sewers Level 1":"下水道第 1 層","Sewers Level 2":"下水道第 2 層","Sewers Level 3":"下水道第 3 層","Spider Cavern":"蜘蛛洞穴","Stony Tomb Level 1":"石墓第 1 層","Stony Tomb Level 2":"石墓第 2 層","Swampy Pit Level 1":"沼澤地坑第 1 層","Swampy Pit Level 2":"沼澤地坑第 2 層","Swampy Pit Level 3":"沼澤地坑第 3 層","Tal Rasha's Chamber":"塔拉夏之室","The Ancients' Way":"先祖之路","The Chaos Sanctuary":"混沌避難所","Tomb":"古墓","Tower Cellar Level 1":"高塔地窖第 1 層","Tower Cellar Level 2":"高塔地窖第 2 層","Tower Cellar Level 3":"高塔地窖第 3 層","Tower Cellar Level 4":"高塔地窖第 4 層","Tower Cellar Level 5":"高塔地窖第 5 層","Tristram":"崔斯特姆","Underground Passage Level 1":"地下通道第 1 層","Underground Passage Level 2":"地下通道第 2 層","Worldstone Keep Level 1":"世界之石要塞第 1 層","Worldstone Keep Level 2":"世界之石要塞第 2 層","Worldstone Keep Level 3":"世界之石要塞第 3 層","Blood Moor":"鮮血荒地","Cold Plains":"冰冷之原","Stony Field":"石塊曠野","Dark Wood":"黑暗森林","Black Marsh":"黑色荒地","Tamoe Highland":"泰摩高地","Rocky Waste":"岩石荒地","Dry Hills":"乾燥高地","Far Oasis":"遙遠綠洲","Lost City":"遺忘之城","Valley of Snakes":"蛇谷","Absorbs Fire Damage":"吸收火焰傷害","Attacker Takes Damage of":"攻擊者受到傷害","Attacker Takes Lightning Damage of":"攻擊者受到閃電傷害","Better Chance of Getting Magic Items":"尋獲魔法物品機率提高","Bonus to Attack Rating":"攻擊準確率加成","Chance of Crushing Blow":"壓碎性打擊機率","Chance of Open Wounds":"撕裂傷口機率","Cold Absorb":"冰寒吸收","Fire Absorb":"火焰吸收","Lightning Absorb":"閃電吸收","Damage Reduced by":"傷害減少","Damage Taken Goes To Mana":"受到的傷害轉為法力","Damage to Demons":"對惡魔的傷害","Damage to Undead":"對不死生物的傷害","Defense vs. Missile":"對飛射物防禦","Drain Life":"吸取生命","Enhanced Maximum Damage":"增強最大傷害","Enhanced Minimum Damage":"增強最小傷害","Extra Gold from Monsters":"從怪物身上獲得額外金幣","Freezes target":"冰凍目標","Half Freeze Duration":"冰凍時間減半","Heal Stamina Plus":"耐力恢復加成","Hit Causes Monster to Flee":"擊中使怪物逃跑","Increase Maximum Mana":"提高法力上限","Increased Chance of Blocking":"提高格擋機率","Increased Stack Size":"提高堆疊數量","Life after each Demon Kill":"每殺死一隻惡魔恢復生命","Life after each Kill":"每次擊殺恢復生命","Magic Damage Reduced by":"魔法傷害減少","Maximum Stamina":"耐力上限","Piercing Attack":"穿透攻擊","Poison Length Reduced by":"中毒時間減少","Regenerate Mana":"法力恢復","Replenishes quantity":"補充數量","Slower Stamina Drain":"耐力消耗減緩","Slows Target by":"目標緩速","Target Defense":"目標防禦","to Amazon Skill Levels":"亞馬遜技能等級","to Attack Rating":"攻擊準確率","to Attack Rating against Demons":"對惡魔的攻擊準確率","to Attack Rating against Undead":"對不死生物的攻擊準確率","to Cold Skill Damage":"冰寒技能傷害","to Dexterity":"敏捷","to Enemy Fire Resistance":"敵人火焰抗性","to Enemy Lightning Resistance":"敵人閃電抗性","to Enemy Poison Resistance":"敵人毒素抗性","to Energy":"精力","to Fire Skill Damage":"火焰技能傷害","to Fire Skills":"火焰技能","to Life":"生命","to Light Radius":"照亮範圍","to Lightning Skill Damage":"閃電技能傷害","to Mana":"法力","to Mana after each Kill":"每次擊殺恢復法力","to Maximum Cold Damage":"最大冰寒傷害","to Maximum Damage":"最大傷害","to Maximum Fire Damage":"最大火焰傷害","to Maximum Fire Resist":"最大火焰抗性","to Maximum Lightning Damage":"最大閃電傷害","to Maximum Lightning Resist":"最大閃電抗性","to Maximum Poison Damage":"最大毒素傷害","to Maximum Poison Resist":"最大毒素抗性","to Minimum Cold Damage":"最小冰寒傷害","to Minimum Damage":"最小傷害","to Minimum Fire Damage":"最小火焰傷害","to Minimum Lightning Damage":"最小閃電傷害","to Minimum Poison Damage":"最小毒素傷害","to Monster Defense Per Hit":"每次擊中降低怪物防禦","to Strength":"力量","to Vitality":"體力","(Based on Character Level)":"（依角色等級）","Repairs %d durability per second":"每秒修復 %d 耐久度","Act I":"第一幕","ACT I":"第一幕","Act II":"第二幕","ACT II":"第二幕","Act III":"第三幕","ACT III":"第三幕","Act IV":"第四幕","ACT IV":"第四幕","Act V":"第五幕","ACT V":"第五幕","casts":"施放","cast":"施放","chills":"冰冷","chill":"冰冷","crawls":"爬行","crawl":"爬行","explodes":"爆炸","explode":"爆炸","hunts down its":"追擊","hunt down their":"追擊","it hits":"命中處","they hit":"命中處","it passes":"經過處","they pass":"經過處","pecks":"啄擊","peck":"啄擊","pierces":"穿透","pierce":"穿透","spirals":"盤旋","spiral":"盤旋","a bolt":"彈矢","a spark":"一道火花","an arrow":"箭矢","a fire arrow":"一支火焰箭","a magic arrow":"一支魔法箭","a hammer":"戰鎚","a javelin":"標槍","a kick":"一次踢擊","a skeleton":"一具骷髏","a swift blow":"一次快速攻擊","a twister":"一道扭曲旋風","a web":"一張網","a monster":"一隻怪物","Evolves":"進化","into":"為","also":"還","needs:":"需要：","Spells":"法術","Chain":"連鎖","Frozen":"冰封","Glacial":"冰河","Cold Spells":"冰寒法術","Lightning Spells":"閃電法術","Fire Spells":"火焰法術","Exit":"離開","EXIT":"離開","OK":"確定","Back":"返回","BACK":"返回","CANCEL":"取消","CONTINUE":"繼續","COPIED":"已複製","Copied":"已複製","Export":"匯出","Import":"匯入","Replace":"取代","UPDATES":"更新","LINK":"連結","OFF":"關","ON":"開","MUSIC":"音樂","SOUND":"音效","MUTE":"靜音","PREVIOUS HERO":"上一位英雄","INVENTORY":"物品欄","Inventory":"物品欄","Stash":"儲物箱","Shared Stash":"共用儲物箱","Skills":"技能","Passives":"被動技能","Upgrades":"升級","Items":"物品","Experience":"經驗值","Requirements":"需求","Repair":"修理","Sell":"出售","Buy":"購買","Reroll":"重抽","Skip":"略過","Banish":"放逐","Maxed":"已達上限","Choose":"選擇","Click":"點擊","Tap":"點一下","Enter":"Enter","Space":"空白鍵","Boss":"首領","Champion":"精英","Regular":"一般","Survivor":"倖存者","Strength":"力量","Dexterity":"敏捷","Vitality":"體力","Energy":"精力","Weapon":"武器","Armor":"盔甲","Shield":"盾牌","Gloves":"手套","Ring":"戒指","Amulet":"護身符","Damage":"傷害","Attack":"攻擊","Knockback":"擊退","Masteries":"專精","Warcries":"戰嚎","Curses":"詛咒","Traps":"陷阱","Barrel":"木桶","Urn":"甕","Brazier":"火盆","Corpse":"屍體","One hit":"一擊","Coming soon":"即將推出","Build complete":"建置完成","Not learned":"尚未習得","New skill":"新技能","New passive":"新被動技能","Empty skill slot":"空的技能欄","Empty passive slot":"空的被動欄","Skill Tree":"技能樹","Everything is maxed":"全部都已達上限","Nothing sold to buy back":"沒有可回購的物品","Put an item down on this panel":"把物品放到這個面板上","Shift-click an item, or put it down here":"Shift＋點擊物品，或放到這裡","Click a ware to buy it":"點擊貨品即可購買","Tap again for every skill":"再點一次檢視所有技能","Tap again to drop":"再點一次丟棄","Tap an item, then tap it again":"點選物品後再點一次","You do not have enough gold":"你的金幣不足","Your inventory is full":"你的物品欄已滿","Your inventory is full (C to make room)":"你的物品欄已滿（按 C 整理空間）","Your inventory is full (tap Character to make room)":"你的物品欄已滿（點「角色」整理空間）","Your stash is full":"你的儲物箱已滿","Slay the act boss to reach the next act":"擊敗本幕首領才能前往下一幕","Pick a card to banish it for this run":"選一張卡片，本輪將它放逐","Pick with 1–3 or click":"按 1～3 或點擊選擇","Arrows or drag to adjust - Esc to go back":"方向鍵或拖曳調整 - Esc 返回","Enter: play again - T: Charsi's wares - Esc: main menu":"Enter：再玩一次 - T：恰西的貨品 - Esc：主選單","← → to choose · Enter to continue · N for a new run":"← → 選擇 · Enter 繼續 · N 開始新的一輪","← → to choose · Enter to play":"← → 選擇 · Enter 開始遊戲","Charsi's wares (B)":"恰西的貨品（B）","Charsi's wares (G)":"恰西的貨品（G）","Making the code…":"正在產生代碼…","The highest level a hero can reach":"英雄能達到的最高等級","Taken: ":"已取得：",": stash it":"：放進儲物箱",": stash it at Charsi's":"：到恰西那裡放進儲物箱",", needs:":"，需要："," - ready to evolve":" - 可以進化","A hit, and a second:":"一擊，再一擊：","Heals 30 Life":"恢復 30 生命","Restores all Life":"恢復全部生命","Restores all life":"恢復全部生命","Regenerate 1 life per second":"每秒恢復 1 生命","Wirt's Leg + Tome of Town Portal":"維特之腳 ＋ 城鎮傳送之書","This browser's gold, upgrades and gear give way to the code's. Export them first to keep a copy.":"此瀏覽器的金幣、升級與裝備會被代碼內容取代。請先匯出保留一份。","Unofficial fan project. Not affiliated with or endorsed by Blizzard Entertainment. Diablo® is a trademark of Blizzard Entertainment, Inc.":"非官方粉絲作品，與 Blizzard Entertainment 無關，亦未獲其認可。Diablo® 為 Blizzard Entertainment, Inc. 的商標。","Unofficial fan project. Not affiliated with or endorsed by Blizzard Entertainment.":"非官方粉絲作品，與 Blizzard Entertainment 無關，亦未獲其認可。","Diablo® is a trademark of Blizzard Entertainment, Inc.":"Diablo® 為 Blizzard Entertainment, Inc. 的商標。","Blizzard Entertainment":"Blizzard Entertainment","Blizzard Entertainment, Inc":"Blizzard Entertainment, Inc","Diablo®":"Diablo®","Diablo®, Diablo II®, Lord of Destruction® and Blizzard Entertainment® are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries. All Diablo II game content (graphics, sounds, music, fonts, text and data) is © Blizzard Entertainment, Inc. and remains their property.":"Diablo®、Diablo II®、Lord of Destruction® 與 Blizzard Entertainment® 為 Blizzard Entertainment, Inc. 在美國及／或其他國家的商標或註冊商標。所有 Diablo II 遊戲內容（圖像、音效、音樂、字型、文字與資料）版權歸 Blizzard Entertainment, Inc. 所有。","If you represent Blizzard Entertainment and want anything changed or removed, contact the maintainer through the repository and it will be addressed promptly, including taking the project down.":"若您代表 Blizzard Entertainment 並希望修改或移除任何內容，請透過程式庫聯絡維護者，我們會儘速處理，包括下架本專案。","This notice describes the project’s intent and policies. It is not legal advice.":"本聲明說明本專案的目的與政策，並非法律意見。","No Blizzard files are distributed":"不散布任何 Blizzard 的檔案","Bring your own Diablo II: nothing is downloaded from Blizzard, and the app holds no Blizzard file. On first launch it finds your Diablo II and Lord of Destruction and extracts their art and sound once, in about a minute and a half. From then on it plays offline.":"請使用你自己的 Diablo II：程式不會從 Blizzard 下載任何東西，也不含任何 Blizzard 檔案。第一次啟動時會找到你的 Diablo II 與毀滅之王，花約一分半鐘擷取一次圖像與音效，之後即可離線遊玩。","Diablo II and Lord of Destruction, patched to 1.14, installed\nmacOS on Apple silicon, or Windows 10 or 11 (x64)\nAbout 1.5 GB of free disk space":"已安裝 Diablo II 與毀滅之王，並更新至 1.14\nApple 晶片的 macOS，或 Windows 10／11（x64）\n約 1.5 GB 可用磁碟空間","If it can’t find Diablo II, point it at the folder that holds d2data.mpq.":"如果找不到 Diablo II，請指定含有 d2data.mpq 的資料夾。","Run the installer. It isn’t signed, so SmartScreen warns about it: click More info, then Run anyway. This build is new and not yet tested on a real PC.":"執行安裝程式。程式沒有數位簽章，SmartScreen 會跳出警告：請按「其他資訊」再按「仍要執行」。此版本是新版，尚未在實體電腦上測試過。","Made by framara - @framara on X":"製作：framara - X 上的 @framara","D2 SURVIVORS":"D2 SURVIVORS","Slain Monsters Rest in Peace":"被殺的怪物安息","on attack":"攻擊時","Armor Shrine":"護甲神殿","Combat Shrine":"戰鬥神殿","Experience Shrine":"經驗神殿","Exploding Shrine":"爆炸神殿","Fire Shrine":"火焰神殿","Gem Shrine":"寶石神殿","Monster Shrine":"怪物神殿","Refilling Shrine":"補充神殿","Skill Shrine":"技能神殿","Mana Recharge Shrine":"法力充能神殿","Stamina Shrine":"耐力神殿","Resist Fire Shrine":"火焰抗性神殿","Resist Cold Shrine":"冰寒抗性神殿","Resist Lightning Shrine":"閃電抗性神殿","Resist Poison Shrine":"毒素抗性神殿","Poison Shrine":"毒素神殿","Portal Shrine":"傳送門神殿","Shrine":"神殿","You feel more skillful.":"你覺得技巧更純熟了。","You feel ready for battle.":"你覺得已經準備好戰鬥了。","You feel refreshed.":"你覺得精神煥發。","Your experience teaches you well.":"你的經驗讓你學到很多。","Your skin hardens.":"你的皮膚變硬了。","A circle of flame...":"一圈火焰……","A fiery death...":"火熱的死亡……","A marvelous gem...":"一顆神奇的寶石……","Death's advocate approaches.":"死亡的代言人逼近了。","Bow and\nCrossbow\nSkills":"弓與\n十字弓\n技能","Javelin\nand Spear\nSkills":"標槍與\n長矛\n技能","Passive\nand Magic\nSkills":"被動與\n魔法\n技能","Poison\nand Bone\nSpells":"毒素與\n白骨\n法術","Poison and Bone Spells":"毒素與白骨法術","Close Mini Panel":"關閉迷你面板","Open Mini Panel":"開啟迷你面板","Game Menu (Esc)":"遊戲選單（Esc）","Message Log":"訊息紀錄","Party Screen":"隊伍畫面","Quest Log":"任務紀錄","Skilled with the spear and the bow, she is a very versatile fighter.":"擅長使用長矛與弓，是一位非常全能的戰士。","Schooled in the Martial Arts, her mind and body are deadly weapons.":"受過武學訓練，她的心靈與身體都是致命的武器。","Summoning undead minions and cursing his enemies are his specialties.":"召喚不死僕從與詛咒敵人是他的專長。","He is unequaled in close-quarters combat and mastery of weapons.":"他在近身肉搏與武器運用上無人能及。","He is a natural party leader, holy man, and blessed warrior.":"他是天生的隊伍領袖、聖職者，也是受祝福的戰士。","She has mastered the elemental magicks -- fire, lightning, and ice.":"她精通元素魔法——火焰、閃電與冰霜。","Commanding the forces of nature, he summons wild beasts and raging storms to his side.":"他號令自然之力，召喚野獸與狂暴的風暴相助。","the Axe":"斧頭","the Cold":"冰冷者","the Hammer":"戰鎚","Dragonscale":"龍鱗","Festering Appendages":"潰爛附肢","Gorebelly":"血腹","Magma Torquer":"熔岩扭轉者","Tarnhelm":"隱身盔","Charsi":"恰西","Amazon":"亞馬遜","Assassin":"刺客","Barbarian":"野蠻人","Druid":"德魯伊","Necromancer":"死靈法師","Paladin":"聖騎士","Sorceress":"女巫","(Amazon Only)":"（亞馬遜專用）","(Assassin Only)":"（刺客專用）","(Barbarian Only)":"（野蠻人專用）","(Druid Only)":"（德魯伊專用）","(Necromancer Only)":"（死靈法師專用）","(Paladin Only)":"（聖騎士專用）","(Sorceress Only)":"（女巫專用）","Bows, javelins and a warrior’s reflexes":"弓、標槍與戰士的反應","Bone, poison, curses and the raised dead":"白骨、毒素、詛咒與復甦的亡者","Elemental storms, summoned beasts and shape shifting":"元素風暴、召喚野獸與變形","Fire, cold and lightning":"火焰、冰寒與閃電","Holy auras, combat skills and the Blessed Hammer":"神聖靈氣、戰鬥技能與祝福之錘","Weapon masteries, war cries and Whirlwind":"武器專精、戰嚎與旋風斬","Bow and Crossbow Skills":"弓與十字弓技能","Passive and Magic Skills":"被動與魔法技能","Javelin and Spear Skills":"標槍與長矛技能","Fire Skills":"火焰技能","Cold Skills":"冰寒技能","Combat Skills":"戰鬥技能","Elemental Skills":"元素技能","Poison and Bone Skills":"毒素與白骨技能","Shape Shifting Skills":"變形技能","Summoning Skills":"召喚技能","Damage Reduced":"傷害減少","Maximum Damage":"最大傷害","Minimum Damage":"最小傷害","Spells, auras and summons don't use it":"法術、靈氣與召喚物不會用到","More damage from every skill: gear's +% Damage and shrines":"提高所有技能傷害：裝備的 +% 傷害與神殿","More damage from weapon skills (arrows, javelins, blows, throws): the weapon's damage, Dexterity, gear's +% Attack Damage":"提高武器技能傷害（箭矢、標槍、近戰、投擲）：武器傷害、敏捷、裝備的 +% 攻擊傷害","More gold from what monsters drop":"怪物掉落更多金幣","Every blow lands here: Attack Rating is critical strike chance instead":"此處攻擊必定命中：攻擊準確率改為致命一擊機率","Chance of a critical strike: double damage":"致命一擊機率：雙倍傷害","Chance a physical hit makes the monster bleed for 8 seconds":"物理命中使怪物流血 8 秒的機率","Physical hits heal you by a share of their damage, less from monsters D2 drains less":"物理命中依傷害比例治療你；在 D2 中吸取較少的怪物效果也較低","Raises each armour's own Damage Reduction: counted in Damage Reduced":"提高每件護甲自身的傷害減免：計入傷害減少","Added to every weapon blow: its average goes to Attack Damage":"加到每次武器攻擊：平均值計入攻擊傷害","Added to every weapon blow: its share of the average goes to Attack Damage":"加到每次武器攻擊：其平均值比例計入攻擊傷害","Adds 0.4% Attack Damage a percent":"每 1% 增加 0.4% 攻擊傷害","Each point past the class's: +0.2% critical strike chance, +0.6% Attack Damage":"超過職業初始值的每一點：+0.2% 致命一擊機率、+0.6% 攻擊傷害","Each point past the class's: +1% physical damage":"超過職業初始值的每一點：+1% 物理傷害","No mana here: Faster Cast Rate, a quarter of a percent a point":"這裡沒有法力：改為快速施法率，每點 0.25%","No mana here: Faster Cast Rate, as what fighting pours in":"這裡沒有法力：改為快速施法率，隨戰鬥累積","No mana here: each point past the class's is +1% fire, cold, lightning, poison and magic damage":"這裡沒有法力：超過職業初始值的每一點為 +1% 火焰、冰寒、閃電、毒素與魔法傷害","Come back at half life\nonce more per run, per rank":"以一半生命復活\n每級每輪多一次","One more level-up banish per run, per rank":"每級每輪多一次升級放逐","One more level-up reroll per run, per rank":"每級每輪多一次升級重抽","One more level-up skip per run, per rank":"每級每輪多一次升級略過","+0.5 life per second per rank":"每級每秒 +0.5 生命","+1% chance of a critical strike, +3% Attack Damage":"+1% 致命一擊機率、+3% 攻擊傷害","+10% better chance of magic items per rank":"每級 +10% 尋獲魔法物品機率","+10% cold damage":"+10% 冰寒傷害","+10% fire damage":"+10% 火焰傷害","+10% gold per rank":"每級 +10% 金幣","+10% lightning damage":"+10% 閃電傷害","+10% magic damage (Teeth, Bone Spear, Bone Spirit)":"+10% 魔法傷害（骨牙、骨矛、骨魂）","+10% movement speed":"+10% 移動速度","+10% poison damage":"+10% 毒素傷害","+20 maximum life":"+20 生命上限","+20 to 40 maximum life, by class":"+20～40 生命上限，依職業而定","+5 points":"+5 點","+5% fire, cold, lightning, poison and magic damage":"+5% 火焰、冰寒、閃電、毒素與魔法傷害","+5% physical damage":"+5% 物理傷害","+7% movement speed and 4% shorter cooldowns":"+7% 移動速度，冷卻時間縮短 4%","+8% movement speed":"+8% 移動速度","2% less damage taken per rank":"每級受到的傷害減少 2%","Skills recharge 8% faster":"技能冷卻快 8%","Take 7% less damage":"受到的傷害減少 7%","Take 8% less damage":"受到的傷害減少 8%","You take 30% less damage and have 35% more life, renewed every 12s":"受到的傷害減少 30%、生命增加 35%，每 12 秒重新生效","Every few seconds a double of you appears nearby, drawing monsters (more often, for longer)":"每隔幾秒在附近出現你的分身吸引怪物（更頻繁、更持久）","Battle Orders, and +1 to all your skills":"戰鬥命令，並使所有技能 +1","Aura: +10% magic damage (Blessed Hammer, Holy Bolt, Holy Shield)":"靈氣：+10% 魔法傷害（祝福之槌、聖光彈、神聖之盾）","Aura: +10% physical damage (Zeal, Smite, Charge)":"靈氣：+10% 物理傷害（熱誠、重擊、衝鋒）","Aura: burns every monster around you each second":"靈氣：每秒灼燒你周圍的所有怪物","Aura: lightning jolts every monster around you each second":"靈氣：每秒以閃電電擊你周圍的所有怪物","Aura: monsters around you are slowed by half and chilled each second":"靈氣：你周圍的怪物每秒被緩速一半並冰冷","Aura: monsters around you take 10% more damage from everything, +5% a level":"靈氣：你周圍的怪物受到的所有傷害增加 10%，每級 +5%","Aura: skills recharge 5% faster, +4% physical damage":"靈氣：技能冷卻快 5%，+4% 物理傷害","Aura: take 6% less damage":"靈氣：受到的傷害減少 6%","2 bolts that jump between up to 8 monsters, 45 damage each":"2 道在最多 8 隻怪物間跳躍的彈矢，各 45 傷害","2 molten boulders roll through all in their path, 95 damage, knockback, leaving fire":"2 顆熔岩巨石輾過路徑上的一切，95 傷害並擊退，留下火焰","3 fire balls at the nearest monsters, bursting on impact for 55 damage around":"向最近的怪物發射 3 顆火球，命中時爆炸對周圍造成 55 傷害","6 axes thrown at the monsters around you, 55 damage each, passing through 3":"向周圍怪物投擲 6 把斧頭，各 55 傷害，可穿透 3 隻","6 blades thrown at the monsters around you, 36 damage each, passing through one":"向周圍怪物投擲 6 把刀刃，各 36 傷害，可穿透 1 隻","6 frenzied blows over the monsters in a wide reach (every other at a boss), 26 damage each":"對大範圍內的怪物狂亂攻擊 6 次（每隔一次打首領），各 26 傷害","A blast of the mind over the nearest pack, 90 damage and a 2s stun to all in it":"對最近的怪物群釋放心靈衝擊，90 傷害並暈眩 2 秒","A focused blow at the toughest monster in reach, 200 damage, splashing 60 to those beside it":"集中攻擊範圍內最強的怪物，200 傷害，對旁邊的怪物濺射 60","A wall of fire across the path ahead that burns for 4s":"在前方路徑上築起火牆，燃燒 4 秒","An orb that sprays chilling ice shards in every direction, 22 damage each":"向四面八方噴射冰冷碎片的法球，每片 22 傷害","Blades spin around you, 32 damage to all beside you 3 times a second, and fly off at monsters for 28":"刀刃環繞你旋轉，每秒 3 次對身旁所有怪物造成 32 傷害，並飛向怪物造成 28 傷害","Charge 3 times along your path, 60 damage in the way, a holy burst at each stop":"沿路徑衝鋒 3 次，對路上怪物造成 60 傷害，每次停下時神聖爆發","Leap where you run (at a foe when still) and strike: 320 damage, 100 around":"往奔跑方向跳躍（靜止時跳向敵人）並攻擊：320 傷害，周圍 100","Lightning keeps striking monsters around you, 70 damage":"閃電持續打擊你周圍的怪物，70 傷害","Meteors crash onto 3 monsters, 90 damage, and leave the ground burning":"隕石砸向 3 隻怪物，90 傷害，並使地面燃燒","The Hammerdin: 4 blessed hammers at once, whirling faster and wider, 40 damage to all they pass":"錘丁：一次 4 把祝福之槌，旋轉得更快更廣，對經過的怪物造成 40 傷害","a bash":"猛擊","a blade":"刀刃","a bolt from the sky":"天降彈矢","a bolt or blow back":"彈矢或反擊","a burst of fire, cold or lightning":"火焰、冰寒或閃電爆發","a cut or a thrown blade":"斬擊或飛刃","a fire ball":"火球","a kick or its fire":"踢擊或其火焰","a mage's bolt":"法師的彈矢","a meteor":"隕石","a monster around you":"你周圍的怪物","a monster in it":"其中的怪物","a monster in the blast":"爆炸中的怪物","a monster in the ring":"環內的怪物","a monster it lands among":"落點處的怪物","a second of a bite's poison":"撕咬毒素的一秒","a second of its poison":"其毒素的一秒","a spear":"長矛","a spear thrust":"長矛刺擊","a thrust at each monster around":"刺擊周圍每隻怪物","a tick of a fire":"火焰每次造成傷害時","a tornado":"龍捲風","an arrow or its blast":"箭矢或其爆炸","an arrow or its burst":"箭矢或其爆發","an axe":"斧頭","to Life (Based on Character Level)":"生命（依角色等級）","to Mana (Based on Character Level)":"法力（依角色等級）","Magic Arrow":"魔法箭","Fire Arrow":"火焰箭","Inner Sight":"內視","Critical Strike":"致命攻擊","Jab":"搓刺","Cold Arrow":"冰箭","Multiple Shot":"多重箭","Dodge":"閃躲","Power Strike":"威力一擊","Poison Javelin":"毒槍","Exploding Arrow":"爆裂箭","Slow Missiles":"慢速箭","Avoid":"躲避","Impale":"刺爆","Lightning Bolt":"閃電球","Ice Arrow":"急凍箭","Guided Arrow":"導引箭","Penetrate":"刺入","Charged Strike":"衝能一擊","Plague Javelin":"瘟疫標槍","Strafe":"掃射","Immolation Arrow":"犧牲之箭","Dopplezon":"分身","Decoy":"誘餌","Evade":"迴避","Fend":"擊退","Freezing Arrow":"凍結之箭","Valkyrie":"女武神","Pierce":"穿刺","Lightning Strike":"閃電攻擊","Lightning Fury":"閃電之怒","Fire Bolt":"火彈","Warmth":"溫暖","Charged Bolt":"衝能彈","Ice Bolt":"冰彈","Frozen Armor":"冰封裝甲","Inferno":"地獄火","Static Field":"靜態立場","Telekinesis":"心靈傳動","Frost Nova":"霜之新星","Ice Blast":"冰風暴","Blaze":"火焰之路","Fire Ball":"火球","Nova":"新星","Lightning":"閃電","Shiver Armor":"碎 冰甲","Fire Wall":"火牆","Enchant":"附魔","Chain Lightning":"連鎖閃電","Teleport":"傳送","Glacial Spike":"冰尖柱","Meteor":"隕石","Thunder Storm":"雷雲風暴","Energy Shield":"能量護盾","Blizzard":"暴風雪","Chilling Armor":"寒冰裝甲","Fire Mastery":"支配火燄","Hydra":"九頭蛇","Lightning Mastery":"支配閃電","Frozen Orb":"冰封球","Cold Mastery":"支配冰冷","Amplify Damage":"傷害加深","Teeth":"牙","Bone Armor":"白骨裝甲","Skeleton Mastery":"支配骷髏","Raise Skeleton":"復甦骷髏","Dim Vision":"微暗靈視","Weaken":"虛弱","Poison Dagger":"淬 毒匕首","Corpse Explosion":"屍體爆炸","Clay Golem":"黏 土石模","Iron Maiden":"攻擊反噬","Terror":"恐懼","Bone Wall":"骨牆","Golem Mastery":"支配石魔","Raise Skeletal Mage":"復甦骷髏法師","Confuse":"混亂","Life Tap":"偷取生命","Poison Explosion":"毒爆","Bone Spear":"骨矛","Blood Golem":"鮮血石魔","Attract":"吸引","Decrepify":"衰老","Bone Prison":"骨牢","Summon Resist":"召喚反抗","Iron Golem":"鋼鐵石魔","Lower Resist":"降低抵抗","Poison Nova":"劇毒新星","Bone Spirit":"白骨之魂","Fire Golem":"火焰石魔","Revive":"復活","Bash":"猛擊","Sword Mastery":"支配長劍","Axe Mastery":"支配斧頭","Mace Mastery":"支配釘頭錘","Howl":"嚎叫","Find Potion":"找尋葯劑","Leap":"跳躍","Double Swing":"雙手揮擊","Pole Arm Mastery":"長柄武器專精","Throwing Mastery":"支配飛擲","Spear Mastery":"支配長矛","Taunt":"嘲弄","Shout":"吶喊","Stun":"擊暈","Double Throw":"雙手投擲","Increased Stamina":"增加耐力","Find Item":"找尋物品","Leap Attack":"跳躍攻擊","Concentrate":"專心","Iron Skin":"鐵布衫","Battle Cry":"戰嗥","Frenzy":"狂亂","Increased Speed":"加速","Battle Orders":"戰鬥體制","Grim Ward":"殘酷嚇阻","Whirlwind":"旋風斬","Berserk":"狂戰士","Natural Resistance":"自然抵抗","War Cry":"戰鬥狂嗥","Battle Command":"戰鬥指揮","Sacrifice":"犧牲","Smite":"重擊","Might":"威能","Prayer":"祈禱","Resist Fire":"抗火","Holy Bolt":"聖光彈","Holy Fire":"聖火","Thorns":"荊棘","Defiance":"反抗","Resist Cold":"抗冰冷","Zeal":"熱誠","Charge":"衝鋒","Blessed Aim":"祝福瞄準","Cleansing":"淨化","Resist Lightning":"抵抗閃電","Blessed Hammer":"祝福之鎚","Concentration":"專注","Holy Freeze":"神聖冰凍","Vigor":"活力","Conversion":"轉化","Holy Shield":"神聖之盾","Holy Shock":"神聖衝擊","Sanctuary":"庇護所","Meditation":"冥想","Fist of the Heavens":"天堂之拳","Fanaticism":"狂熱","Conviction":"信念","Redemption":"救贖","Salvation":"救援","Raven":"烏鴉","Poison Creeper":"猛毒花藤","Werewolf":"狼人","Lycanthropy":"變狼術","Firestorm":"火風暴","Oak Sage":"橡木智者","Summon Spirit Wolf":"召喚鬼狼","Werebear":"熊人","Molten Boulder":"熔 漿巨岩","Arctic Blast":"極地風暴","Carrion Vine":"食屍藤","Feral Rage":"野性狂暴","Fissure":"火山裂隙","Cyclone Armor":"颶風裝甲","Heart of Wolverine":"狼獾之心","Summon Dire Wolf":"召喚狂狼","Summon Fenris":"召喚芬里爾","Rabies":"狂犬病","Fire Claws":"火焰之爪","Twister":"扭曲旋風","Solar Creeper":"太陽藤","Hunger":"飢餓","Shock Wave":"震波","Volcano":"火山","Tornado":"龍捲風","Spirit of Barbs":"荊棘之靈","Summon Grizzly":"召喚灰熊","Fury":"狂怒","Armageddon":"末日浩劫","Hurricane":"颶風","Cycle of Life":"生命循環","Claw Mastery":"支配利爪","Psychic Hammer":"心靈戰錘","Tiger Strike":"猛虎擊","Dragon Talon":"龍爪","Fire Blast":"火焰爆震","Burst of Speed":"速度爆發","Fists of Fire":"火焰之拳","Dragon Claw":"雙龍爪","Charged Bolt Sentry":"電能守衛","Wake of Fire":"火焰復甦","Wake of Fire Sentry":"火焰復甦守衛","Weapon Block":"武器格檔","Cloak of Shadows":"魔影斗篷","Cobra Strike":"眼鏡蛇攻擊","Blade Fury":"刃之怒","Fade":"消逝","Shadow Warrior":"影子戰士","Claws of Thunder":"雷電爪","Dragon Tail":"神龍擺尾","Lightning Sentry":"雷光守衛","Wake of Inferno":"復甦獄火","Mind Blast":"心靈爆震","Blades of Ice":"寒冰刃","Dragon Flight":"飛龍在天","Death Sentry":"亡者守衛","Blade Shield":"刀刃之盾","Blade Sentinel":"刃之守衛","Venom":"毒牙","Shadow Master":"支配影子","Phoenix Strike":"鳳凰攻擊","Aura Enchanted":"靈氣附魔","Cold Enchanted":"冰寒強化","Fire Enchanted":"火焰強化","Magic Resistant":"魔法抗性","Mana Burn":"燃燒法力","Teleportation":"瞬間移動","Cursed":"被詛咒","Possessed":"被附身","Fire Trauma":"火焰創傷","Fire Eye":"火眼","Prevent Monster Heal":"阻止怪物恢復","Replenish Life":"補充生命","Fires Explosive Arrows or Bolts":"射出爆裂箭或彈矢","Fires Magic Arrows":"射出魔法箭","Horror Arctic Blast":"恐怖極地寒風","Baal Inferno":"巴爾地獄火","Catacombs Level 4":"地下墓穴第 4 層","Durance of Hate Level 3":"憎恨囚牢第 3 層","Duriel's Lair":"督瑞爾之巢","Nihlathak's Temple":"尼拉塞克神殿","The Secret Cow Level":"秘密奶牛關","The Countess":"女伯爵","The Summoner":"召喚者","assassin upkeep":"刺客維持","barbarian upkeep":"野蠻人維持","druid upkeep":"德魯伊維持","sorceress upkeep":"女巫維持","Acrobat's":"特技","Alma Negra":"阿爾瑪 尼格拉","Arachnid Mesh":"蜘蛛之網","Arioc's Needle":"愛理歐克之針","Arkaine's Valor":"阿凱尼的榮耀","Arm of King Leoric":"李奧瑞克王的武器","Arreat's Face":"亞瑞特的面容","Astreon's Iron Ward":"愛斯特龍之鐵的保護區","Bane Ash":"禍根之灰","Baranar's Star":"巴拉那之星","Bartuc's Cut-Throat":"巴特克的猛擊","Biggin's Bonnet":"畢格因的軟帽","Blackhand Key":"黑手之鑰","Blinkbat's Form":"眨眼蝙蝠的外觀","Blood Crescent":"血紅新月","Blood Raven's Charge":"血鳥的襲擊","Bul-Kathos' Wedding Band":"布爾凱索之戒","Buriza-Do Kyanon":"布里撒 多 凱南","Burning":"燃燒","Bverrit Keep":"貝弗提的紀念","Captain's":"隊長","Carin Shard":"凱恩碎片","Cerebus' Bite":"地獄之吻","Chilling":"寒意","Crown of Ages":"年紀之冠","Crown of Thieves":"盜賊皇冠","Darkforce Spawn":"魔力肇生","Death Cleaver":"死亡之刀","Death's Web":"死亡之網","Demonhorn's Edge":"惡魔號角的邊緣","Dimoak's Hew":"迪馬克之劈砍","Dwarf Star":"矮人之星","Entrapping":"誘騙","Eschuta's Temper":"艾斯屈塔的脾氣","Expert's":"專家","Fanatic":"狂信者","Fletcher's":"製箭者","Fungal":"黴菌","Gargoyle's Bite":"石像鬼之噬","Gerke's Sanctuary":"基爾克的聖堂","Gloom's Trap":"陰影陷阱","Gore Rider":"蝕肉騎士","Graverobber's":"盜墓者","Griffon's Eye":"格利風之眼","Halaberd's Reign":"海拉柏得的國度","Harlequin Crest":"諧角之冠","Harpoonist's":"魚叉手","Hawk Branded":"老鷹烙印","Herald of Zakarum":"撒卡蘭姆使者","Hexing":"詛咒","Highlord's Wrath":"大君之怒","Husoldal Evo":"胡索丹 依弗","Iron Pelt":"擲鐵","Jade Talon":"碧玉爪","Jalal's Mane":"加爾的長髮","Kinemil's Awl":"金麥爾的錐子","Kira's Guardian":"奇拉的守護","Knell Striker":"敲擊喪鐘者","Langer Briser":"蘭格 布里瑟","Lidless Wall":"警戒之牆","Life":"生命","Lion Branded":"獅子烙印","Lycander's Aim":"雷山德的指標","Lycander's Flank":"雷山德的側腹","Mara's Kaleidoscope":"馬拉的萬花筒","Medusa's Gaze":"梅杜莎的凝視","Mentalist's":"心智","Nature's":"自然","Nature's Peace":"大自然的和平","Nightwing's Veil":"夜翼面紗","Nosferatu's Coil":"吸血聖王之圈","Passion":"熱情","Pelta Lunata":"新月小盾","Preserver's":"保護者","Que-Hegan's Wisdom":"魁黑剛的智慧","Radament's Sphere":"達羅門特之球體","Raven Claw":"渡鳥之爪","Raven Frost":"烏鴉之霜","Rixot's Keen":"瑞克撒特的輓歌","Rose Branded":"玫瑰烙印","Seraph's Hymn":"熾天使之韻","Shadow Dancer":"影舞者","Shadow Killer":"影殺者","Shock Web":"雷電網","Shogukusha's":"將軍","Skin of the Vipermagi":"蛇魔法師之皮","Skullder's Ire":"詩寇蒂的憤怒","Sounding":"鳴響","Sparking":"火光","Sparking Mail":"火花之甲","Spectral Shard":"妖怪碎片","Spire of Honor":"榮耀的尖塔","Spire of Lazarus":"拉撒羅斯之螺旋","Spirit Keeper":"靈魂看守者","Spirit Ward":"魂系結界","Spiritual":"精神","Steel Pillar":"鐵柱","Suicide Branch":"自殺支系","The Cat's Eye":"貓眼","The Chieftain":"族長","The Dragon Chang":"張龍","The Eye of Etlich":"艾利屈之眼","The Face of Horror":"恐懼之臉","The Fetid Sprinkler":"惡臭散佈者","The Gladiator's Bane":"鬥士的禍根","The Gnasher":"牙齒","The Hand of Broc":"柏克之手","the Impaler":"穿刺者","The Iron Jang Bong":"鐵檢棒","The Meat Scraper":"刮肉者","The Oculus":"眼球","The Patriarch":"族長","The Rising Sun":"旭日東昇","The Salamander":"火精靈","The Scalper":"圓鑿","The Tannr Gorerod":"坦之血杖","The Ward":"囚房","Thundergod's Vigor":"雷神之力","Titan's Revenge":"泰坦的復仇","Torch of Iro":"衣洛的火炬","Trainer's":"訓練師","Treads of Cthon":"凱松的征服","Umbral Disk":"陰影圓盤","Ume's Lament":"烏米的慟哭","Veil of Steel":"鋼鐵面紗","Verdungo's Hearty Cord":"維爾登戈的心結","Volcanic":"火山","War Traveler":"戰爭旅者","Wisp Projector":"鬼火投射者","Zakarum's Hand":"撒卡蘭姆之手"},"patterns":[["Holy Shield at its height for good, +{}% Chance to Block, smiting back; a holy blast every 4s throws monsters back, 50 damage","神聖之盾永遠維持最強，+{1}% 格擋機率並反擊；每 4 秒神聖爆發擊退怪物，50 傷害"],["A heavy blow at the toughest monster in reach, {} damage; each costs you {}% of your life, held back below {}% life","重擊範圍內最強的怪物，{1} 傷害；每次消耗你 {2}% 生命，生命低於 {3}% 時暫停"],["A sentry fires lightning 5 times, {} damage, and blows up a corpse near it each time for {} plus {}% of its life","守衛發射 5 次閃電，{1} 傷害，每次並引爆附近屍體造成 {2} 加上屍體生命的 {3}%"],["A Tome of Town Portal, transmuted with Wirt's Leg\nin the Horadric Cube: a portal to {}\nopens after Mephisto {}","城鎮傳送之書與維特之腳\n放進赫拉迪克方塊合成：通往{1}的傳送門\n會在擊敗墨菲斯托後開啟{2}"],["A trap near the nearest pack breathes fire at monsters 10 times, 5 flames of {} damage to all in their path","最近怪物群附近的陷阱向怪物噴火 10 次，每次 5 道火焰，對路徑上所有敵人造成 {1} 傷害"],["Bless your shield for {}s: +{}% Chance to Block, +{}% Defense; smite what you block for {}, and Smite hits harder","祝福你的盾牌 {1} 秒：+{2}% 格擋機率、+{3}% 防禦；格擋時重擊對方 {4}，重擊威力更強"],["A grizzly, {} damage a swipe, and the pack +{}% damage; with 3 dire wolves, 5 spirit wolves and {} ravens","一隻灰熊，每次揮擊 {1} 傷害，獸群傷害 +{2}%；另有 3 隻恐狼、5 隻狼靈與 {3} 隻烏鴉"],["Heart of Wolverine: +{}% damage to your blows and your summons', +{}% Attack Rating; Oak Sage's +{}% life","狼獾之心：你與召喚物的攻擊傷害 +{1}%、攻擊準確率 +{2}%；橡木智者 +{3}% 生命"],["Curse, {}s: monsters within {} of the nearest turn on each other with their own blows (not act bosses)","詛咒 {1} 秒：最近目標 {2} 範圍內的怪物會互相攻擊（幕首領除外）"],["A thrust at the toughest monster in reach, 120 damage; lightning chains on through {} more, 110 each","刺擊範圍內最強的怪物，120 傷害；閃電再連鎖 {1} 隻，各 110"],["The Worldstone is safe. You cleared all five acts{} in {}, at level {#}, having slain {#} monsters. +{#} gold.{}","世界之石已安全。你以 {2} 通過了全部五幕{1}，等級 {3}，共擊殺 {4} 隻怪物。+{5} 金幣。{6}"],["A charged thrust at the toughest monster in reach, 100 damage; {} bolts crackle on from it, 50 each","對範圍內最強的怪物充能刺擊，100 傷害；並迸出 {1} 道電彈，各 50"],["A solar creeper eats corpses: each speeds recharge {}% for {}s, up to {}%; the vine and {} creepers stay","日光藤吞食屍體：每具使技能冷卻加快 {1}%，持續 {2} 秒，最多 {3}%；藤蔓與 {4} 株毒藤會留下"],["Curse, {}s: monsters within {} of a target, ranged first, only see you beside them (not act bosses)","詛咒 {1} 秒：目標 {2} 範圍內的怪物（優先遠程）只看得到身邊的你（幕首領除外）"],["Blow up a corpse near monsters: {} damage plus {}% of its life, radius {}. Its own dead don't blow up","引爆怪物附近的屍體：{1} 傷害加上屍體生命的 {2}%，範圍 {3}。它造成的屍體不會連鎖引爆"],["Ice shards rain on the nearest pack for 2.4s, 24 shards of {} damage each, chilling what they hit","冰碎片落在最近的怪物群 2.4 秒，共 24 片，各 {1} 傷害並冰冷"],["When monsters crowd you, those around you flee in terror for {}s (bosses less, act bosses never)","被怪物包圍時，周圍的怪物會恐懼逃跑 {1} 秒（首領較短，幕首領不受影響）"],["A kick at the toughest in reach, {} damage, exploding in fire for {} around, releasing all charges","踢擊範圍內最強的敵人，{1} 傷害，爆炸對周圍造成 {2} 火焰傷害，釋放所有蓄能"],["Curse the toughest of the nearest pack, {}s: those within {} turn on it, passing on when it falls","詛咒最近怪物群中最強的一隻，{1} 秒：{2} 範圍內的怪物會攻擊它，它倒下後轉移"],["A blow at the toughest monster in reach: {} fire, cold and lightning each, half to those beside","攻擊範圍內最強的怪物：火焰、冰寒、閃電各 {1}，旁邊的怪物受一半"],["A golem of iron, {} life, {} damage, with a Thorns aura: what strikes it takes back {}% of the blow","鋼鐵石魔，{1} 生命，{2} 傷害，帶有荊棘靈氣：攻擊它的敵人承受 {3}% 反傷"],["{} javelins trailing poison that burst into a spreading cloud, 240 poison over {}s to all within {}","{1} 支拖曳毒素的標槍，爆出擴散毒雲，{3} 範圍內所有敵人 {2} 秒內受到 240 毒素傷害"],["Near a crowd or boss, blind all around you {}s: they take {}% more damage (act bosses unblinded)","靠近怪物群或首領時，使周圍敵人目盲 {1} 秒：受到的傷害增加 {2}%（幕首領不會目盲）"],["Werebear for {}s near monsters: 25% less damage taken, +{}% life, splashing blows of {}; no spells","靠近怪物時變身熊人 {1} 秒：受到的傷害減少 25%、+{2}% 生命，濺射攻擊 {3}；無法施法"],["Spirit of Barbs: monsters that strike you take back {}% of the damage, plus Wolverine's boons","荊棘之靈：攻擊你的怪物承受 {1}% 的反傷，並獲得狼獾之心的增益"],["Aura: +{}% chance of a critical strike (double damage) with Zeal, Smite, Charge and Sacrifice","靈氣：熱誠、重擊、衝鋒與犧牲 +{1}% 致命一擊機率（雙倍傷害）"],["Plant a totem among the nearest pack, and howl: for {}s monsters within {} of it flee in terror","在最近的怪物群中插下圖騰並嚎叫：{1} 秒內 {2} 範圍內的怪物恐懼逃跑"],["The strongest monster near you fights for you for {}s, harder; up to {}, no champions or bosses","你附近最強的怪物為你作戰 {1} 秒並更強；最多 {2} 隻，精英與首領除外"],["Up to 3 dire wolves, {} damage a bite, and the pack +{}% life; with 5 spirit wolves and {} ravens","最多 3 隻恐狼，每次撕咬 {1} 傷害，獸群生命 +{2}%；另有 5 隻狼靈與 {3} 隻烏鴉"],["Monsters near her take {}% more damage (except those with an immunity, which it can't break)","她附近的怪物受到的傷害增加 {1}%（無法破除免疫）"],["Summons take {}% less damage from monsters whose blows carry fire, cold, lightning or poison","召喚物受到帶有火焰、冰寒、閃電或毒素的怪物攻擊時，傷害減少 {1}%"],["A sentry near the nearest pack fires lightning through monsters in line 10 times, {} damage","最近怪物群附近的守衛發射 10 次貫穿直線怪物的閃電，{1} 傷害"],["A carrion vine eats corpses near you, each healing {} life + {}% of maximum; {} poison creepers","腐屍藤吞食你附近的屍體，每具恢復 {1} 生命 + 上限的 {2}%；{3} 株毒藤"],["Two blows in a wide reach, 45 damage each; hits speed your swings and steps, up to {} times","大範圍攻擊兩次，各 45 傷害；命中會加快揮擊與移動，最多疊加 {1} 次"],["The toughest monster nearby charges you for {}s, blows {}% weaker (act bosses only weakened)","附近最強的怪物向你衝來 {1} 秒，攻擊減弱 {2}%（幕首領只會被削弱）"],["Claws at the toughest in reach, {} damage; every fourth blow drains {} more, healing {}% of it","爪擊範圍內最強的敵人，{1} 傷害；每第四擊額外吸取 {2}，並恢復其中 {3}%"],["Curse, {}s: monsters within {} of a target slow by half, deal {}% less damage and take {}% more","詛咒 {1} 秒：目標 {2} 範圍內的怪物緩速一半，造成的傷害減少 {3}%、受到的傷害增加 {4}%"],["Curse, {}s: monsters within {} of the nearest take back {}% of their blows on you and summons","詛咒 {1} 秒：最近目標 {2} 範圍內的怪物攻擊你與召喚物時承受 {3}% 反傷"],["A jet of flame at the nearest monster within {}: {} flames, {} damage each to all in its path","向 {1} 範圍內最近的怪物噴出火焰：{2} 道火焰，對路徑上所有敵人各造成 {3} 傷害"],["Aura: +{}% cold resistance, and +{}% to its maximum (75%) a level; chill wears off {}% faster","靈氣：+{1}% 冰寒抗性，每級 +{2}% 抗性上限（75%）；冰冷效果消退快 {3}%"],["Aura: monsters close to you are hurt and thrown out, {} damage twice a second, +{} a level","靈氣：靠近你的怪物受到傷害並被彈開，每秒兩次 {1} 傷害，每級 +{2}"],["Bash the toughest monster in reach with your shield, {} damage, knocked back and stunned","用盾牌猛擊範圍內最強的怪物，{1} 傷害，擊退並暈眩"],["2 spikes at the nearest monsters burst for {} damage, freezing all in the burst for 1.5s","向最近的怪物射出 2 根冰刺，爆炸造成 {1} 傷害並冰凍範圍內敵人 1.5 秒"],["Claws at the toughest in reach, {} damage; every fourth blow releases 3 charges, +{}% each","爪擊範圍內最強的敵人，{1} 傷害；每第四擊釋放 3 層蓄能，每層 +{2}%"],["Claws at the toughest in reach, {} damage; every fourth blow bursts in fire, {} around it","爪擊範圍內最強的敵人，{1} 傷害；每第四擊爆出火焰，對周圍造成 {2}"],["Wereform blows add 32 poison over {}s; a bitten monster that dies passes it to {} near it","變身後的攻擊附加 {1} 秒 32 毒素傷害；被咬的怪物死亡時傳染給附近 {2}"],["Slain monsters have a {}% chance to leave gold (champions {}%), and now and then an item","被殺的怪物有 {1}% 機率掉落金幣（精英 {2}%），偶爾掉落物品"],["A golem of fire, {} life, {} damage, with a Holy Fire aura that burns everything near it","火焰石魔，{1} 生命，{2} 傷害，帶有灼燒周圍一切的聖火靈氣"],["A three-headed hydra near the nearest pack for {}s, spitting fire bolts, {} damage each","在最近的怪物群附近召喚三頭九頭蛇 {1} 秒，噴出火彈，各 {2} 傷害"],["{} arrows that burst into freezing ice, 90 damage around what they hit and a 3s chill","{1} 支爆出冰霜的箭，對命中處周圍造成 90 傷害並冰冷 3 秒"],["Werebear for {}s: blows of {}, each {} more a charge up to 13 (the last stuns); no spells","變身熊人 {1} 秒：攻擊 {2}，每層蓄能多 {3}，最多 13 層（最後一擊暈眩）；無法施法"],["{} trailing poison clouds, {} damage and {} poison over {}s to every monster in the clouds","拖曳毒雲的{1}，對雲中每隻怪物造成 {2} 傷害並在 {4} 秒內造成 {3} 毒素傷害"],["Thrown axes deal {}% more damage and have +{}% chance to fly on through what they hit","投擲的斧頭傷害增加 {1}%，並有 +{2}% 機率穿透目標"],["Curse, {}s: damage you and summons deal monsters within {} of the nearest heals you {}%","詛咒 {1} 秒：你與召喚物對最近目標 {2} 範圍內怪物造成的傷害，會恢復你 {3}%"],["A blow at the toughest monster in reach, {} damage, stunning it for {}s (bosses less)","攻擊範圍內最強的怪物，{1} 傷害，暈眩 {2} 秒（首領較短）"],["Claws, 36 damage; every fourth blow shatters ice, {} damage around and a long chill","爪擊，36 傷害；每第四擊震碎寒冰，對周圍造成 {1} 傷害並長時間冰冷"],["Maul as a werebear for {}s; every {}rd swing a stomp, {} damage within {} yards, stunning","以熊人形態重擊 {1} 秒；每第 {2} 次揮擊會踐踏，{4} 碼內 {3} 傷害並暈眩"],["Curse, {}s: monsters within {} of the nearest flee and don't attack (not act bosses)","詛咒 {1} 秒：最近目標 {2} 範圍內的怪物逃跑且不攻擊（幕首領除外）"],["A trap near the nearest pack sends out 5 waves of fire, {} damage to all they pass","最近怪物群附近的陷阱發出 5 波火焰，對經過的一切造成 {1} 傷害"],["When monsters close in, blink on ahead where they're fewest; ready again after {}s","怪物逼近時瞬移到前方怪物最少處；{1} 秒後可再次使用"],["Your shadow fights beside you, {} damage a blow, {} life; every third blow is a kick","你的影子在身旁作戰，每次攻擊 {1} 傷害，{2} 生命；每第三擊是踢擊"],["A spear thrust charged with lightning at the toughest monster in reach, {} damage","對範圍內最強的怪物發出帶電刺擊，{1} 傷害"],["A spinning blade shuttles between you and the nearest pack for {}s, {} damage a cut","旋轉的刀刃在你與最近的怪物群之間來回 {1} 秒，每次斬擊 {2} 傷害"],["An army: up to {} skeletons, and slain monsters rise to fight for you (up to {}, {}s)","大軍：最多 {1} 具骷髏，被殺的怪物會復活為你作戰（最多 {2} 隻，{3} 秒）"],["Blink to the toughest monster ahead and kick it, {} damage, releasing all charges","瞬移到前方最強的怪物並踢擊，{1} 傷害，釋放所有蓄能"],["For {}s burning rocks fall around you, the toughest monsters most, 90 damage each","{1} 秒內燃燒岩石落在你周圍（最強的怪物最多），各 90 傷害"],["A sentry near the nearest pack fires 5 bursts of 5 charged bolts, {} damage each","最近怪物群附近的守衛發射 5 輪、每輪 5 道充能彈，各 {1} 傷害"],["For {}s a storm rages within {} yards: 45 cold damage 2.5 times a second, chilling","{1} 秒內，{2} 碼範圍內颳起風暴：每秒 2.5 次 45 冰寒傷害並冰冷"],["The ground erupts under the nearest pack for {}s, across {} yards, {} damage a burst","最近的怪物群下方地面爆發 {1} 秒，範圍 {2} 碼，每次爆發 {3} 傷害"],["Two blasts of cold in a fan before you, {} damage each, chilling what they touch","向前方扇形噴出兩道寒氣，各 {1} 傷害並冰冷"],["{} fire trails, {} yards, at the nearest monster, burning {} damage 4 times a second","向最近的怪物放出 {1} 道 {2} 碼的火焰路徑，每秒 4 次造成 {3} 傷害"],["Claws, 32 damage; every fourth blow a thunder nova, {} damage, and charged bolts","爪擊，32 傷害；每第四擊發出雷霆新星，{1} 傷害，並放出充能彈"],["A rapid volley of {} arrows spread over the monsters around you, 40 damage each","對周圍怪物快速連射 {1} 支箭，各 40 傷害"],["A volcano under the nearest pack for {}s, raining burning rocks, 65 damage each","在最近的怪物群下方召喚火山 {1} 秒，降下燃燒岩石，各 65 傷害"],["Dash through the monsters in your path, {} damage to each and a blow at the end","衝過路徑上的怪物，各造成 {1} 傷害，最後再攻擊一次"],["Leap the way you run (at a pack when still); the landing knocks back, {} damage","往奔跑方向跳躍（靜止時跳向怪物群）；落地時擊退，{1} 傷害"],["Two claw blows at the toughest in reach, {} damage each, releasing all charges","對範圍內最強的敵人揮爪兩次，各 {1} 傷害，釋放所有蓄能"],["Werewolf for {}s near monsters: +{}% life, claws of {} every {}s, +{}% crit; no spells","靠近怪物時變身狼人 {1} 秒：+{2}% 生命，每 {4} 秒爪擊 {3}，+{5}% 致命一擊；無法施法"],["Aura: monsters that strike you in melee take back {}% of the blow, +{}% a level","靈氣：近戰攻擊你的怪物承受 {1}% 的反傷，每級 +{2}%"],["A crushing blow at the toughest monster in reach, {} damage, knocking it back","對範圍內最強的怪物壓碎性打擊，{1} 傷害並擊退"],["A golem of clay holds the horde back and slows what it hits, {} life, {} damage","黏土石魔擋住怪物群並緩速被擊中的目標，{1} 生命，{2} 傷害"],["A spear thrust at every monster around you in turn (up to {}), 60 damage each","依序刺擊你周圍的每隻怪物（最多 {1} 隻），各 60 傷害"],["A golem of blood, {} life, {} damage; every blow it lands heals you for {}% of it","血石魔，{1} 生命，{2} 傷害；它的每次攻擊會以傷害的 {3}% 治療你"],["Wereforms last {}s longer, {}s more a level, and give +{}% more life, +{}% a level","變身持續時間延長 {1} 秒（每級再加 {2} 秒），並增加 +{3}% 生命（每級 +{4}%）"],["A corpse by the nearest monster bursts into poison: {} over {}s to all within {}","最近怪物旁的屍體爆出毒素：{3} 範圍內所有怪物 {2} 秒內受到 {1}"],["A heavy spear thrust at the toughest monster in reach, {} damage, {} to a boss","對範圍內最強的怪物重重刺擊，{1} 傷害，對首領 {2}"],["3 tornadoes wander the horde, {} damage and a stun to each monster they pass","3 道龍捲風在怪物群中遊蕩，對經過的怪物造成 {1} 傷害並暈眩"],["Werewolf for {}s: a flurry of {} blows at all in reach, {} damage each, every {}s","變身狼人 {1} 秒：每 {4} 秒對範圍內所有敵人連續攻擊 {2} 次，各 {3} 傷害"],["A bomb thrown at the nearest monster, bursting for {} fire damage around it","向最近的怪物投擲炸彈，爆炸對周圍造成 {1} 火焰傷害"],["Bone walls cage the {} near you for {}s, bosses too (act bosses half as long)","白骨之牆將你附近的{1}囚禁 {2} 秒，首領也會（幕首領時間減半）"],["You fell in {} after {}, at level {#}, having slain {#} monsters. +{#} gold (best: {}).","你在{1}倒下，歷時 {2}，等級 {3}，共擊殺 {4} 隻怪物。+{5} 金幣（最佳：{6}）。"],["Whirl {} yards through the horde, {} damage to each monster 5 times a second","在怪物群中旋轉 {1} 碼，每秒 5 次對每隻怪物造成 {2} 傷害"],["{} javelins that burst into lightning forking to {} monsters, 70 damage each","{1} 支爆出閃電的標槍，分岔擊中 {2} 隻怪物，各 70 傷害"],["Frozen Armor for {}s: melee attackers get a {}s chill; {}% of their blows miss","冰封裝甲 {1} 秒：近戰攻擊者被冰冷 {2} 秒；他們的攻擊有 {3}% 落空"],["You have {} gold · What a hero sells stays here until that hero's next run","你有 {1} 金幣 · 英雄出售的物品會留在這裡，直到該英雄開始下一輪"],["Aura: monsters slain near you heal you {} life, {}% of the time, +{}% a level","靈氣：在你附近被殺的怪物有 {2}% 機率為你恢復 {1} 生命，每級 +{3}%"],["A ring of poison out to 230: 180 poison over {}s to everything it touches","向外擴散至 230 的毒環：碰到的一切 {1} 秒內受到 180 毒素傷害"],["{} arrows that explode for 90 damage and leave the ground burning for 3s","{1} 支爆炸的箭，造成 90 傷害並使地面燃燒 3 秒"],["Aura: +{}% fire, cold and lightning resistance; chill wears off {}% faster","靈氣：+{1}% 火焰、冰寒與閃電抗性；冰冷效果消退快 {2}%"],["A ring of frost out to {} range, {} damage, chilling all it touches for {}s","向外擴散至 {1} 距離的冰霜環，{2} 傷害，冰冷碰到的一切 {3} 秒"],["{} bone spirits, each hunting down one of the nearest monsters, {} damage","{1} 道骨魂，各自追擊一隻最近的怪物，{2} 傷害"],["Spirits' boons and vines' meals are {}% stronger, creepers' poison too","靈體的增益與藤蔓的吞食效果強 {1}%，藤蔓的毒素也是"],["+{}% chance for her attacks (and the Valkyrie's) to deal double damage","她（與女武神）的攻擊 +{1}% 機率造成雙倍傷害"],["Up to 5 spirit wolves fight beside you, {} damage a bite; and {} ravens","最多 5 隻狼靈在你身旁作戰，每次撕咬 {1} 傷害；另有 {2} 隻烏鴉"],["Monsters within {} lose {}% of their life (a third of that for elites)","{1} 範圍內的怪物失去 {2}% 生命（精英為三分之一）"],["Aura: +{}% lightning resistance, and +{}% to its maximum (75%) a level","靈氣：+{1}% 閃電抗性，每級 +{2}% 抗性上限（75%）"],["{} quick spear thrusts at the nearest monster in reach, {} damage each","對範圍內最近的怪物快速刺擊 {1} 次，各 {2} 傷害"],["+{}% chance for arrows and javelins to fly on through what they hit","箭矢與標槍 +{1}% 機率穿透目標"],["{} at the toughest in reach, {} damage; the last releases all charges","對範圍內最強的敵人{1}，{2} 傷害；最後一擊釋放所有蓄能"],["{} that seek monsters, {} damage and a stun to each they pass through","追蹤怪物的{1}，對經過的每隻怪物造成 {2} 傷害並暈眩"],["{} spears of bone that pierce every monster in their path, {} damage","{1} 支貫穿路徑上所有怪物的骨矛，{2} 傷害"],["{} of sparks over the nearest pack for {}s, {} damage 4 times a second","{1}火花籠罩最近的怪物群 {2} 秒，每秒 4 次 {3} 傷害"],["Hurts every monster around you for {} damage and stuns them for {}s","對你周圍所有怪物造成 {1} 傷害並暈眩 {2} 秒"],["Ravens, wolves, the grizzly and creepers get +{}% life and damage","烏鴉、狼、灰熊與藤蔓獲得 +{1}% 生命與傷害"],["+{}% chance to sidestep a monster's hit while you're on the move","移動時 +{1}% 機率閃開怪物的攻擊"],["Aura: +{}% fire resistance, and +{}% to its maximum (75%) a level","靈氣：+{1}% 火焰抗性，每級 +{2}% 抗性上限（75%）"],["{} guided arrows that hunt through 6 monsters each, 65 damage","{1} 支導引箭，各追擊穿過 6 隻怪物，65 傷害"],["Monsters around you, bosses too, take {}% more damage for {}s","你周圍的怪物（包括首領）受到的傷害增加 {1}%，持續 {2} 秒"],["Curse, {}s: monsters within {} of a target deal {}% less damage","詛咒 {1} 秒：目標 {2} 範圍內的怪物造成的傷害減少 {3}%"],["Curse, {}s: monsters within {} of a target take {}% more damage","詛咒 {1} 秒：目標 {2} 範圍內的怪物受到的傷害增加 {3}%"],["+{}% physical damage; as a werewolf, {}% faster run (up to {}%)","+{1}% 物理傷害；狼人形態跑速快 {2}%（最多 {3}%）"],["Aura: +{}% movement speed, up to +{}%; Charge reaches further","靈氣：+{1}% 移動速度，最多 +{2}%；衝鋒距離更遠"],["Slain monsters have a {}% chance to leave a healing potion","被殺的怪物有 {1}% 機率掉落治療藥水"],["Leave a trail of fire behind you for {}s, {} damage per tick","在身後留下火焰路徑 {1} 秒，每次 {2} 傷害"],["Take 4% less damage; poison and chill wear off {}% faster","受到的傷害減少 4%；中毒與冰冷消退快 {1}%"],["Take 6% less damage; poison and chill wear off {}% faster","受到的傷害減少 6%；中毒與冰冷消退快 {1}%"],["A Valkyrie fights at your side, {} damage a spear thrust","女武神在你身旁作戰，每次刺擊 {1} 傷害"],["Two swift blows at the monsters in reach, {} damage each","對範圍內的怪物快速攻擊兩次，各 {1} 傷害"],["{} arrows that freeze what they hit solid for {}s, {} damage","{1} 支箭，將命中目標冰凍 {2} 秒，{3} 傷害"],["+{}% physical damage and +{}% chance of a critical strike","+{1}% 物理傷害與 +{2}% 致命一擊機率"],["{} of holy light that {} {}, {} damage (double to the undead)","{1}聖光，{2}{3}，{4} 傷害（對不死生物加倍）"],["Your claws and blades poison, {} damage a second for {}s","你的爪與刀刃附帶毒素，每秒 {1} 傷害，持續 {2} 秒"],["A fan of {} teeth at the nearest monster, {} damage each","向最近的怪物扇形射出 {1} 顆骨牙，各 {2} 傷害"],["{} of lightning through every monster in line, {} damage","{1}閃電貫穿直線上所有怪物，{2} 傷害"],["Skeletons, mages and revives get +{}% life and damage","骷髏、骷髏法師與復活怪物獲得 +{1}% 生命與傷害"],["Your fire skills burn {}% harder, the Hydra's bolts {}%","你的火焰技能傷害提高 {1}%，九頭蛇的火彈提高 {2}%"],["A blow of the mind at {}, {} damage, knocking them back","對{1}發出心靈衝擊，{2} 傷害並擊退"],["Werewolf and werebear blows heal {}% of their damage","狼人與熊人的攻擊會恢復傷害的 {1}%"],["+{}% chance to block a monster's hit with your claws","+{1}% 機率用爪格擋怪物的攻擊"],["+{}% chance to sidestep a monster's missile entirely","+{1}% 機率完全閃開怪物的飛射物"],["Absorbs Lightning Damage (+{} per Character Level)","吸收閃電傷害（每角色等級 +{1}）"],["{} that jump between up to {} monsters, {} damage each","{1}，在最多 {2} 隻怪物間跳躍，各 {3} 傷害"],["{} {} fire, cold, lightning or poison bolts, {} damage","{1}{2}火焰、冰寒、閃電或毒素彈，{3} 傷害"],["+{}% chance to sidestep a monster's hit entirely","+{1}% 機率完全閃開怪物的攻擊"],["Transmuted: a portal to {}\nopens after Mephisto {}","已合成：通往{1}的傳送門\n會在擊敗墨菲斯托後開啟{2}"],["Stab {} within reach, {} damage and {} poison over {}s","刺擊範圍內的{1}，{2} 傷害並在 {4} 秒內造成 {3} 毒素傷害"],["{} {} after monsters, {} poison over {}s a bite, {} life","{1}{2}怪物，每次撕咬在 {4} 秒內造成 {3} 毒素傷害，{5} 生命"],["{}% chance of a critical strike: double damage","{1}% 致命一擊機率：雙倍傷害"],["The cow portal will open after Mephisto, on {}","奶牛關傳送門會在擊敗墨菲斯托後開啟（{1}）"],["Only the {} can use that: stash it at Charsi's","只有{1}能使用：到恰西那裡放進儲物箱"],["Absorbs Cold Damage (+{} per Character Level)","吸收冰寒傷害（每角色等級 +{1}）"],["Absorbs Fire Damage (+{} per Character Level)","吸收火焰傷害（每角色等級 +{1}）"],["Each point past the class's: +{} maximum life","超過職業初始值的每一點：+{1} 生命上限"],["+{}% fire damage; wereform claws burn with it","+{1}% 火焰傷害；變身後的爪擊也會帶火焰"],["No room for that with the {} or in the stash","{1}身上和儲物箱都沒有空間"],["A ring of lightning out to {} range, {} damage","向外擴散至 {1} 距離的閃電環，{2} 傷害"],["{} from the class, {} from level-ups and gear","職業 {1}，升級與裝備 {2}"],["You cleared all five acts{} in {}, at level {#}.","你以 {2} 通過了全部五幕{1}，等級 {3}。"],["The Oak Sage follows you: +{}% maximum life","橡木智者跟隨你：+{1}% 生命上限"],["Aura: poison and chill wear off {}% faster","靈氣：中毒與冰冷效果消退快 {1}%"],["a javelin, or its burst's poison over {}s","標槍，或其爆炸毒素（{1} 秒）"],["Up to {} fight beside you, {} life, {} damage","最多{1}在你身旁作戰，{2} 生命，{3} 傷害"],["{}% Better Chance of Getting Magic Items","尋獲魔法物品機率提高 {1}%"],["Your {} one level higher, past their max","你的{1}提高一級，可超過上限"],["+{}% cold damage and take 5% less damage","+{1}% 冰寒傷害，受到的傷害減少 5%"],["{}% Chance to cast level {} {} when you Die","死亡時有 {1}% 機率施放等級 {2} 的{3}"],["Every skill recharges in {} of its time","所有技能冷卻時間變為原本的 {1}"],["{}% Chance to cast level {} {} on striking","擊中時有 {1}% 機率施放等級 {2} 的{3}"],["{}% Chance to cast level {} {} when struck","被擊中時有 {1}% 機率施放等級 {2} 的{3}"],["+{}% per level of {} skills and passives","{2}技能與被動每級 +{1}%"],["Throw an axe from each hand, {} damage{}","雙手各投擲一把斧頭，{1} 傷害{2}"],["Attacker Takes Lightning Damage of {}","攻擊者受到 {1} 閃電傷害"],["{} at monsters in reach, {} damage each","對範圍內的怪物{1}，各 {2} 傷害"],["{} that crackle forward, {} damage each","向前劈啪竄出的{1}，各 {2} 傷害"],["{} {} at monsters, {} damage, {} times each","{1}向怪物{2}，{3} 傷害，各 {4} 次"],["Adds {}-{} Poison Damage over {} Seconds","增加 {1}-{2} 毒素傷害，持續 {3} 秒"],["{}% Chance to cast level {} {} on attack","攻擊時有 {1}% 機率施放等級 {2} 的{3}"],["Build {} is ready: see the main menu","版本 {1} 已就緒：請到主選單查看"],["{} that pierces {} and chills, {} damage","{1}，穿透 {2} 隻並冰冷，{3} 傷害"],["Aura: heal {} life a second, up to {}","靈氣：每秒恢復 {1} 生命，最多 {2}"],["{} at the nearest monsters, {} damage","向最近的怪物發射{1}，{2} 傷害"],["{} {} out around you, {} damage to all {}","{1}向你周圍{2}，對所有{4}造成 {3} 傷害"],["{} at the nearest monster, {} damage","向最近的怪物發射{1}，{2} 傷害"],["Only the {} can use that: stash it","只有{1}能使用：放進儲物箱"],["Levels gear adds to every {} skill","裝備增加的等級套用到每個{1}技能"],["{} that pierce {} and chill, {} damage","{1}，穿透 {2} 隻並冰冷，{3} 傷害"],["+{}% Attack Rating against Demons","+{1}% 對惡魔的攻擊準確率"],["+{}% Attack Rating against Undead","+{1}% 對不死生物的攻擊準確率"],["Ready: a chest evolves it into {}","就緒：寶箱會將它進化為{1}"],["You fell in {} after {}, at level {#}.","你在{1}倒下，歷時 {2}，等級 {3}。"],["Monsters' missiles fly {}% slower","怪物的飛射物速度減慢 {1}%"],["a javelin, or its poison over {}s","標槍，或其毒素（{1} 秒）"],["{} that {} for {} damage around what {}","{1}，在{4}{2}，造成 {3} 範圍傷害"],["{}% Increased Chance of Blocking","格擋機率提高 {1}%"],["Her attacks deal {}% more damage","她的攻擊造成的傷害增加 {1}%"],["Aura: skills recharge {}% faster","靈氣：技能冷卻快 {1}%"],["A fan of {} arrows, {} damage each","扇形射出 {1} 支箭，各 {2} 傷害"],["+{} Poison Damage over {} Seconds","+{1} 毒素傷害，持續 {2} 秒"],["Ready: a chest evolves {} into {}","就緒：寶箱會將{1}進化為{2}"],["Hit Causes Monster to Flee {}%","擊中使怪物逃跑 {1}%"],["For {}s you take {}% less damage","{1} 秒內受到的傷害減少 {2}%"],["{} comes when the bar runs out","量條用完時{1}就會出現"],["Missile Damage Reduced by {}%","飛射物傷害減少 {1}%"],["Level {} when the globe fills","球體填滿時升到等級 {1}"],["Evolves {} into {}, also needs:","將{1}進化為{2}，還需要："],["A portal to Act {} has opened","通往第 {1} 幕的傳送門已開啟"],["{}% Extra Gold from Monsters","從怪物身上多獲得 {1}% 金幣"],["Level {} {} Aura When Equipped","裝備時獲得等級 {1} 的{2}靈氣"],["Poison Length Reduced by {}%","中毒時間減少 {1}%"],["+{}% Bonus to Attack Rating","+{1}% 攻擊準確率加成"],["+{}% Increased Attack Speed","+{1}% 提高攻擊速度"],["{}% Chance of Crushing Blow","{1}% 機率造成壓碎性打擊"],["{}% Deadly Strike per Level","每級 {1}% 致命攻擊"],["Attacker Takes Damage of {}","攻擊者受到 {1} 傷害"],["Level {} now and {} at level {}","目前等級 {1}，在等級 {3} 時為 {2}"],["Next {} at character level {}","角色等級 {2} 時獲得下一個{1}"],["The portal takes you in {}…","傳送門將在 {1} 後帶你離開…"],["{}% Chance to cast level {} {} {}","{4}有 {1}% 機率施放等級 {2} 的{3}"],["Magic Damage Reduced by {}","魔法傷害減少 {1}"],["Base Damage Reduction: {}%","基礎傷害減免：{1}%"],["Skills recharge {}% faster","技能冷卻快 {1}%"],["Press {} or click to drink","按 {1} 或點擊飲用"],["{}% Chance of Open Wounds","{1}% 機率造成撕裂傷口"],["{} Receives Bonuses From:","{1} 從以下技能獲得加成："],["+{}% damage per level of {}","{2}每級 +{1}% 傷害"],["+{}% per level of {} skills","{2}技能每級 +{1}%"],["A portal to {} has opened","通往{1}的傳送門已開啟"],["+{} Life after each Kill","每次擊殺 +{1} 生命"],["+{}% Faster Hit Recovery","+{1}% 快速打擊恢復"],["{}: {} at character level {}","{1}：角色等級 {3} 時 {2}"],["+5 starting {} per rank\n{}","每級起始 {1} +5\n{2}"],["Only the {} can use that{}","只有{1}能使用{2}"],["{}% Life Stolen Per Hit","擊中偷取 {1}% 生命"],["{}% Mana Stolen Per Hit","擊中偷取 {1}% 法力"],["One-Hand Damage: {} to {}","單手傷害：{1} 至 {2}"],["Two-Hand Damage: {} to {}","雙手傷害：{1} 至 {2}"],["+{}% Faster Block Rate","+{1}% 快速格擋率"],["Synergies: +{}% damage","協同加成：+{1}% 傷害"],["in your next run on {}","在你下一輪的{1}難度"],["+{} to Life per Level","每級 +{1} 生命"],["+{} to Mana per Level","每級 +{1} 法力"],["+{}% Damage to Demons","+{1}% 對惡魔的傷害"],["+{}% Damage to Undead","+{1}% 對不死生物的傷害"],["+{}% Enhanced Defense","+{1}% 增強防禦"],["+{}% Faster Cast Rate","+{1}% 快速施法率"],["Level {} {} ({}/{} Charges)","等級 {1} {2}（{3}/{4} 次）"],["Lightning Resist +{}%","閃電抗性 +{1}%"],["Damage Reduced by {}%","傷害減少 {1}%"],["Evolves from {} with {}","由{1}搭配{2}進化而來"],["Another run as the {}","以{1}再玩一輪"],["Slay Baal on {} first","請先在{1}難度擊敗巴爾"],["The {} is coming soon","{1}即將推出"],["+{} to {} Skill Levels","+{1} {2}技能等級"],["+{} Lightning Absorb","+{1} 閃電吸收"],["+{}% Enhanced Damage","+{1}% 增強傷害"],["+{}% Faster Run/Walk","+{1}% 移動速度加乘"],["Lightning Absorb {}%","閃電吸收 {1}%"],["Damage Reduced by {}","傷害減少 {1}"],["{} shorter cooldowns","冷卻時間縮短 {1}"],["The portal to Act {}","通往第 {1} 幕的傳送門"],["Less {} damage taken{}","受到的{1}傷害減少{2}"],["{} · Level {#} · {#} kills","{1} · 等級 {2} · {3} 擊殺"],["-{}% Target Defense","-{1}% 目標防禦"],["{}% Piercing Attack","{1}% 穿透攻擊"],["All Resistances +{}","所有抗性 +{1}"],["Slows Target by {}%","目標緩速 {1}%"],["Attack Damage: +{}%","攻擊傷害：+{1}%"],["{#} Damage per Level","每級 {1} 傷害"],["{} is open to the {}.","{1}已向{2}開放。"],["+{} Average Damage","+{1} 平均傷害"],["+{}% Attack Damage","+{1}% 攻擊傷害"],["+{}% Pickup Radius","+{1}% 拾取範圍"],["Poison Resist +{}%","毒素抗性 +{1}%"],["Freezes Target +{}","冰凍目標 +{1}"],["Replenish Life +{}","補充生命 +{1}"],["Required Level: {}","需要等級：{1}"],["+{}% per level of {}","{2}每級 +{1}%"],["Monsters slain: {}","擊殺怪物：{1}"],["Up to {#} skeletons","最多 {1} 具骷髏"],["+{} to All Skills","+{1} 所有技能"],["+{}% maximum life","+{1}% 生命上限"],["{}% Deadly Strike","{1}% 致命攻擊"],["Base Damage: +{}%","基礎傷害：+{1}%"],["Sells for {} gold","售價 {1} 金幣"],["Sold {} for {} gold","以 {2} 金幣賣出{1}"],["Experience: {} / {}","經驗值：{1} / {2}"],["{} evolved into {}!","{1}已進化為{2}！"],["Build {} is ready","版本 {1} 已就緒"],["Adds {}-{} {} Damage","增加 {1}-{2} {3}傷害"],["+{} magic damage","+{1} 魔法傷害"],["Cold Resist +{}%","冰寒抗性 +{1}%"],["Fire Resist +{}%","火焰抗性 +{1}%"],["{} over {} seconds","{1}，持續 {2} 秒"],["You have {} gold","你有 {1} 金幣"],["Evolves into {}:","進化為{1}："],["{#} hits a second","每秒 {1} 次"],["{#} charged bolts","{1} 道充能彈"],[" (+{} from gear)","（裝備 +{1}）"],["Adds {}-{} Damage","增加 {1}-{2} 傷害"],["+{} Cold Absorb","+{1} 冰寒吸收"],["+{} Fire Absorb","+{1} 火焰吸收"],["Cold Absorb {}%","冰寒吸收 {1}%"],["Fire Absorb {}%","火焰吸收 {1}%"],["Now +{}% damage","目前 +{1}% 傷害"],["Loading the {}…","正在載入{1}…"],["{} on Nightmare","{1}（惡夢）"],[" on Nightmare","（惡夢）"],["{#} magic arrows","{1} 支魔法箭"],["Evolved from {}","由{1}進化而來"],["+{} to {} Skills","+{1} {2}技能"],["Sold by the {}","由{1}出售"],["Per second: {}","每秒：{1}"],["Keeps level {}","保留等級 {1}"],["{}: {} at level {}","{1}：等級 {3} 時 {2}"],["Back to the {}","回到{1}"],["{#} fire arrows","{1} 支火焰箭"],["{#} magic arrow","{1} 支魔法箭"],["{#} swift blows","{1} 次快速攻擊"],["when you Die","死亡時"],["{#} {} per Level","每級 {1} {2}"],["Best time: {}","最佳紀錄：{1}"],["Passives {}/6","被動技能 {1}/6"],["from level {}","從等級 {1} 起"],["{} approaches","{1}逼近了"],["{#} fire bolts","{1} 道火彈"],["{#} fire balls","{1} 顆火球"],["{#} fire arrow","{1} 支火焰箭"],["{#} swift blow","{1} 次快速攻擊"],["when struck","被擊中時"],["on striking","擊中時"],["{#} per Level","每級 {1}"],["{#} per level","每級 {1}"],["and {} more.","還有 {1} 個。"],["{#} ice bolts","{1} 道冰彈"],["{#} skeletons","{1} 具骷髏"],["Level {#} to {#}","等級 {1} → {2}"],["+{#} {} Damage","+{1} {2}傷害"],["+{}% Damage","+{1}% 傷害"],["If worn: {}","裝備時：{1}"],["Level {} / {}","等級 {1} / {2}"],["Life: {} / {}","生命：{1} / {2}"],["Skills {}/6","技能 {1}/6"],["Replaces {}","取代{1}"],["{} has come","{1}來了"],["{#} javelins","{1} 支標槍"],["{#} monsters","{1} 隻怪物"],["{#} javelins","{1} 支標槍"],["{#} monsters","{1} 隻怪物"],["{#} skeleton","{1} 具骷髏"],["{#} twisters","{1} 道扭曲旋風"],["Saved in {}","儲存於{1}"],["Rank {} / {}","等級 {1} / {2}"],["Act {}: {}. {}","第 {1} 幕：{2}。{3}"],["{} weakens","{1}變弱了"],["{#} Regular","{1} 一般"],["{#} hammers","{1} 把戰鎚"],["{#} meteors","{1} 顆隕石"],["{} on Hell","{1}（地獄）"],[" on Hell","（地獄）"],["{#} hammers","{1} 把祝福之槌"],["{#} javelin","{1} 支標槍"],["{#} monster","{1} 隻怪物"],["{#} twister","{1} 道扭曲旋風"],["{} Level {#}","{1}第 {2} 層"],["{} upkeep","{1}維持"],["{#} arrows","{1} 支箭"],["{#} spears","{1} 支矛"],["{#} blades","{1} 把刀刃"],["{#} arrows","{1} 支箭"],["{#} hammer","{1} 把祝福之槌"],["{#} sparks","{1} 道火花"],["+{#}% to {}","+{1}% {2}"],["+{} gold","+{1} 金幣"],["Cost: {}","價格：{1}"],["Level {#}","等級 {1}"],["level {#}","等級 {1}"],["Up to {#}","最多 {1}"],["New {} {}/{}","新{1} {2}/{3}"],["Drop {}?","丟棄{1}？"],["Act {}: {}","第 {1} 幕：{2}"],["{} (Esc)","{1}（Esc）"],["{#} bolts","{1} 道彈矢"],["{#} kills","{1} 擊殺"],["{#} arrow","{1} 支箭"],["{#} bolts","{1} 道彈矢"],["{#} kicks","{1} 次踢擊"],["{#} spark","{1} 道火花"],["Up to {}","最多 {1}"],["max {#}/{#},","上限 {1}/{2}，"],["max {#}/{#}.","上限 {1}/{2}。"],["+{#} to {}","+{1} {2}"],["-{#} to {}","-{1} {2}"],["{#}% to {}","{1}% {2}"],["{#} gold","{1} 金幣"],["best {}","最佳 {1}"],["{} trap","{1}陷阱"],["{#} of 3","{1} / 3"],["{}: OFF","{1}：關"],["{#} axes","{1} 把斧頭"],["{#} bolt","{1} 道彈矢"],["{#} kick","{1} 次踢擊"],["{#} webs","{1} 張網"],["max {#}/{#}","上限 {1}/{2}"],["ACT {#}","第 {1} 幕"],["Act {#}","第 {1} 幕"],["{#} web","{1} 張網"]],"skillTags":{"Magic Arrow":"魔法","Fire Arrow":"魔法","Cold Arrow":"魔法","Exploding Arrow":"魔法","Multiple Shot":"物理","Guided Arrow":"物理","Jab":"物理","Power Strike":"魔法","Poison Javelin":"魔法","Impale":"物理","Lightning Bolt":"魔法","Valkyrie":"物理","Ice Arrow":"魔法","Strafe":"物理","Fend":"物理","Charged Strike":"魔法","Lightning Strike":"魔法","Plague Javelin":"魔法","Lightning Fury":"魔法","Freezing Arrow":"魔法","Immolation Arrow":"魔法","Widowmaker":"物理","Fire Bolt":"魔法","Ice Bolt":"魔法","Charged Bolt":"魔法","Nova":"魔法","Blaze":"魔法","Inferno":"魔法","Hydra":"魔法","Frost Nova":"魔法","Ice Blast":"魔法","Fire Ball":"魔法","Meteor":"魔法","Frozen Orb":"魔法","Chain Lightning":"魔法","Thunder Storm":"魔法","Fire Wall":"魔法","Glacial Spike":"魔法","Blizzard":"魔法","Shiver Armor":"魔法","Chilling Armor":"魔法","Teeth":"魔法","Poison Dagger":"魔法","Raise Skeleton":"物理","Raise Skeletal Mage":"魔法","Clay Golem":"物理","Bone Spear":"魔法","Bone Spirit":"魔法","Poison Explosion":"魔法","Poison Nova":"魔法","Revive":"物理","Blood Golem":"物理","Iron Golem":"物理","Fire Golem":"魔法","Fire Blast":"魔法","Shock Web":"魔法","Charged Bolt Sentry":"魔法","Blade Sentinel":"物理","Tiger Strike":"物理","Cobra Strike":"物理","Fists of Fire":"魔法","Dragon Talon":"物理","Psychic Hammer":"魔法","Shadow Warrior":"物理","Wake of Fire":"魔法","Wake of Inferno":"魔法","Lightning Sentry":"魔法","Death Sentry":"魔法","Blade Fury":"物理","Blade Shield":"物理","Phoenix Strike":"魔法","Claws of Thunder":"魔法","Blades of Ice":"魔法","Dragon Claw":"物理","Dragon Tail":"魔法","Dragon Flight":"物理","Mind Blast":"魔法","Shadow Master":"物理","Double Swing":"物理","Bash":"物理","Stun":"物理","Leap":"物理","Double Throw":"物理","Whirlwind":"物理","War Cry":"物理","Frenzy":"物理","Concentrate":"物理","Berserk":"魔法","Leap Attack":"物理","Lacerator":"物理","Blessed Hammer":"魔法","Holy Bolt":"魔法","Zeal":"物理","Charge":"物理","Holy Shield":"魔法","Smite":"物理","Sacrifice":"物理","Vengeance":"魔法","Zakarum's Hand":"魔法","Fist of the Heavens":"魔法","Passion":"物理","Herald of Zakarum":"物理","Exile":"魔法","Firestorm":"魔法","Arctic Blast":"魔法","Fissure":"魔法","Twister":"物理","Raven":"物理","Poison Creeper":"魔法","Werewolf":"物理","Werebear":"物理","Molten Boulder":"魔法","Volcano":"魔法","Armageddon":"魔法","Tornado":"物理","Hurricane":"魔法","Summon Spirit Wolf":"物理","Summon Dire Wolf":"物理","Summon Grizzly":"物理","Fury":"物理","Maul":"物理","Shock Wave":"物理"}};
// 這些技能名稱同時是裝備名稱（獨特、符文之語、底材）。翻譯只看文字分不出來，所以預設不加元素標記，只有技能說明框才加（d2tagInstall）。
const D2ZH_ITEM_SKILL_TAGS = {};
for (const name of ['Widowmaker', 'Lacerator', "Zakarum's Hand", 'Herald of Zakarum', 'Passion', 'Exile', 'Fury', 'Maul']) {
D2ZH_ITEM_SKILL_TAGS[name] = D2ZH_EXTRA.skillTags[name];
delete D2ZH_EXTRA.skillTags[name];
}
// 2026-10 遊戲改版（build 20261020）新增／改寫的字串。鍵的寫法跟遊戲內建的韓文翻譯一樣：
// # = 數字、* = 任意文字，{0}{1}… 依序代入（* 代入的文字會再翻譯一次）。words 也會拿來翻句子裡的單字（例如稀有物品名稱的前後綴）。
const D2ZH_FIX = {
words: {
'Barb': '倒鉤', 'Bludgeon': '重棍', 'Glare': '怒視', 'Impaler': '穿刺者', 'Gem': '寶石',
'January': '一月', 'February': '二月', 'March': '三月', 'April': '四月', 'May': '五月', 'June': '六月', 'July': '七月',
'August': '八月', 'September': '九月', 'October': '十月', 'November': '十一月', 'December': '十二月', "Angel's": '天使', 'Antimagic': '反魔法', "Arch-Angel's": '大天使', "Archer's": '弓箭手',
"Athlete's": '運動員', 'Berserker': '狂戰士', "Berserker's": '狂戰士', 'Blighting': '枯萎',
'Bloody': '血腥', "Bowyer's": '製弓匠', 'Calling': '呼喚', "Caretaker's": '看護者', 'Charged': '充能', "Commander's": '指揮官', 'Communal': '共有', 'Devious': '狡猾', 'Eagleeye': '鷹眼', 'Elysian': '極樂', 'Eocene': '始新世',
'Exile': '流放者', 'Falconeye': '隼眼', 'Forked': '分叉', 'Fortified': '強化', 'Freezing': '冰凍', 'Furious': '狂怒',
"Gaea's": '蓋亞', 'Ghostly': '幽靈', "Golemlord's": '魔像領主', 'Gritty': '堅毅', "Gymnast's": '體操家',
"Hierophant's": '祭司', "Jester's": '弄臣', "Joker's": '小丑',
"Keeper's": '守護者', "Kenshi's": '劍士', "Knave's": '惡棍', "Lancer's": '槍騎兵', 'Loud': '響亮', "Magekiller's": '法師殺手',
"Maiden's": '少女', "Marshal's": '元帥', 'Miocene': '中新世', "Monk's": '僧侶', 'Null': '無效', 'Oligocene': '漸新世',
'Paleocene': '古新世', 'Paradox': '悖論', "Priest's": '牧師',
'Red': '紅色', 'Robineye': '知更鳥眼', 'Screaming': '尖叫',
"Sensei's": '師範', 'Serrated': '鋸齒', "Shaman's": '薩滿', 'Shouting': '吶喊', 'Sparroweye': '麻雀眼', "Spearmaiden's": '長矛少女',
"Terra's": '大地', "Trickster's": '詐欺師', 'Trump': '王牌', 'Venomous': '劇毒',
"Veteran's": '老兵', 'Vodoun': '巫毒', "Warder's": '看守者',
"Witch-hunter's": '獵巫者', 'Yelling': '叫喊',
'of Balance': '平衡之', 'of Bliss': '至福之', 'of Ennui': '倦怠之', 'of Envy': '嫉妒之', 'of Frigidity': '嚴寒之', 'of Grace': '優雅之',
'of Grace and Power': '優雅與力量之', 'of Icebolt': '冰彈之', 'of Joyfulness': '喜悅之', 'of Power': '力量之', 'of Stability': '穩定之',
'of the Cobra': '眼鏡蛇之', 'of the Efreeti': '火精之', 'of the Elements': '元素之', 'of the Phoenix': '鳳凰之', 'of the Yeti': '雪人之',
'creeper': '爬行者', 'kick': '踢擊', 'skeletal mage': '骷髏法師', 'spark': '電花', 'swift blow': '迅捷一擊', 'wearwolf': '狼人',
'dire wolves': '恐狼', 'spirit wolves': '靈狼', 'ravens': '烏鴉', 'tier': '層',
// 20261103.1 珠寶與 D2 珠寶詞綴
'Jewel': '珠寶', 'Brown': '棕色之', 'Chestnut': '栗色之', 'Maroon': '褐紅之', 'Nickel': '鎳之', 'Tin': '錫之', 'Argent': '銀白之', 'Bright': '明亮之',
'Rimed': '霜覆之', 'Thundering': '雷鳴之', 'Corroding': '腐蝕之',
'of Malice': '惡意之', 'of Fervor': '熱忱之', 'of Ire': '怒氣之', 'of Wrath': '憤怒之', 'of Daring': '大膽之', 'of Truth': '真理之', 'of Honor': '榮譽之',
'of Avarice': '貪財之', 'of Prosperity': '繁榮之', 'of Knowledge': '知識之', 'of Hope': '希望之', 'of Virility': '雄健之', 'of Vigor': '精力之', 'of Spirit': '靈魂之'
},
// 稀有物品名稱（20261024.1 起照 D2 的兩組字表組成「前字 後字」）：譯名取自易牙居，明顯錯的改掉
rare: {
prefix: { Beast: '野獸', Eagle: '老鷹', Raven: '渡鴉', Viper: '蝮蛇', Ghoul: '食屍鬼', Skull: '骷髏', Blood: '鮮血', Dread: '恐懼', Doom: '末日', Grim: '冷酷', Bone: '白骨', Death: '死亡', Shadow: '陰影', Storm: '暴風', Rune: '符文', Plague: '瘟疫', Stone: '岩石', Wraith: '怨靈', Spirit: '精神', Demon: '惡魔', Cruel: '殘忍', Empyrian: '天國', Bramble: '野薔薇', Pain: '痛苦', Loath: '憎惡', Glyph: '符紋', Imp: '小惡魔', Fiend: '魔鬼', Hailstone: '冰雹', Gale: '狂風', Dire: '悲慘', Soul: '靈魂', Brimstone: '硫磺', Corpse: '屍體', Carrion: '腐屍', Armageddon: '世界末日', Havoc: '浩劫', Bitter: '受難', Entropy: '幽冥', Chaos: '混沌', Order: '秩序', Rule: '統治', Corruption: '腐化' },
suffix: { Bite: '咬', Scratch: '抓', Scalpel: '小刀', Fang: '尖牙', Gutter: '血槽', Thirst: '渴望', Razor: '剃刀', Scythe: '鐮刀', Edge: '刃', Saw: '鋸', Splitter: '劈裂者', Cleaver: '切肉刀', Sever: '斷裂者', Sunder: '撕碎者', Rend: '撕裂', Mangler: '亂砍者', Slayer: '屠殺者', Reaver: '強奪者', Spawn: '子嗣', Gnash: '咬牙', Star: '星', Blow: '重擊', Smasher: '擊碎者', Bane: '剋星', Crusher: '壓碎者', Breaker: '破壞者', Grinder: '研磨者', Crack: '破裂', Mallet: '木槌', Knell: '喪鐘', Lance: '長槍', Spike: '釘', Impaler: '刺穿者', Skewer: '串列者', Prod: '戳刺', Scourge: '鞭', Wand: '魔杖', Wrack: '摧殘', Barb: '倒鉤', Needle: '針', Dart: '鏢', Bolt: '箭矢', Quarrel: '弩箭', Fletch: '箭雨', Flight: '翔', Nock: '箭尾', Horn: '角', Stinger: '有刺者', Quill: '羽', Goad: '刺棒', Branch: '枝', Spire: '尖塔', Song: '歌', Call: '呼喚', Cry: '哭號', Spell: '法術', Chant: '吟唱', Weaver: '編織者', Gnarl: '樹瘤', Visage: '臉', Crest: '頂飾', Circlet: '飾環', Veil: '面紗', Hood: '兜帽', Mask: '面具', Brow: '額頭', Casque: '盔', Visor: '面甲', Cowl: '蒙頭斗蓬', Hide: '獸皮', Pelt: '毛皮', Carapace: '甲殼', Coat: '外衣', Wrap: '包裹', Suit: '套裝', Cloak: '斗蓬', Shroud: '壽衣', Jack: '皮甲', Mantle: '披風', Guard: '守衛', Badge: '徽章', Rock: '磐石', Aegis: '庇護', Ward: '保護', Tower: '高塔', Shield: '盾護', Wing: '翼', Mark: '標記', Emblem: '象徵', Hand: '手', Fist: '拳', Claw: '爪', Clutches: '手爪', Grip: '緊握', Grasp: '抓取', Hold: '掌握', Touch: '觸碰', Finger: '手指', Knuckle: '指節', Shank: '脛', Spur: '馬刺', Tread: '踏步', Stalker: '潛行者', Greaves: '脛甲', Blazer: '烈焰', Nails: '釘', Trample: '蹂躪', Brogues: '粗皮鞋', Track: '足跡', Slippers: '便鞋', Clasp: '扣鉤', Buckle: '釦帶', Harness: '挽具', Lock: '鎖', Fringe: '邊飾', Winding: '捲繞', Chain: '鏈條', Strap: '皮帶', Lash: '鞭笞', Cord: '繩索', Knot: '繩結', Circle: '環', Loop: '圈', Eye: '之眼', Turn: '迴旋', Spiral: '螺旋', Coil: '盤繞', Gyre: '旋迴', Band: '箍', Whorl: '螺層', Talisman: '護符', Heart: '心', Noose: '套索', Necklace: '項鍊', Collar: '項圈', Beads: '串珠', Torc: '金絲項圈', Gorget: '頸甲', Scarab: '聖甲蟲', Wood: '木', Brand: '烙印', Bludgeon: '棍棒', Cudgel: '木棒', Loom: '織布機', Harp: '豎琴', Master: '專家', Bar: '鐵棒', Hew: '劈砍', Crook: '鉤', Mar: '損毀', Shell: '甲殼', Stake: '棍子', Picket: '尖木', Pale: '尖樁', Flange: '凸緣' }
},
text: {
// V63 補翻（check-update 掃出來、畫面實際會出現的）：角色畫面技能樹提示、每級加成清單、技能樹名稱單獨出現時
"Levels gear adds to every * skill and passive": "裝備加的技能等級會套用到「{0}」系的每個技能和被動",
"Levels gear adds to every * skill": "裝備加的技能等級會套用到「{0}」系的每個技能",
"Levels gear adds to every * passive": "裝備加的技能等級會套用到「{0}」系的每個被動",
"A level past a skill or passive's maximum still adds to it, as in D2": "技能或被動超過最高等級後仍會繼續增加效果，如同 D2",
"A level past a passive's maximum still adds to it, as in D2": "被動超過最高等級後仍會繼續增加效果，如同 D2",
"+#% damage per level of *, +#% of *, +#% of *": "{1}每級 +{0}% 傷害、{3}每級 +{2}%、{5}每級 +{4}%",
"+#% damage per level of *, +#% of *": "{1}每級 +{0}% 傷害、{3}每級 +{2}%",
"+#% damage per level of * and *": "{1}和{2}每級 +{0}% 傷害",
"+#% per level of *, * and # more": "{1}、{2}等另 {3} 項每級 +{0}%",
"+#% per level of * and # more": "{1}等另 {2} 項每級 +{0}%",
"+#% per level of # skills and passives": "{1} 個技能與被動每級 +{0}%",
"+#% per level of # skills": "{1} 個技能每級 +{0}%",
"+#% per level of * and *": "{1}和{2}每級 +{0}%",
"Levels gear adds to every Elemental skill and passive": "裝備加的技能等級會套用到「元素」系的每個技能和被動",
"Levels gear adds to every Elemental skill": "裝備加的技能等級會套用到「元素」系的每個技能",
"Levels gear adds to every Elemental passive": "裝備加的技能等級會套用到「元素」系的每個被動",
"Combat": "戰鬥", "Bow and Crossbow": "弓和十字弓", "Javelin and Spear": "標槍和長矛", "Passive and Magic": "被動和魔法", "Poison and Bone": "毒素和白骨",
// 遊戲 20261105.2／.3：箭筒、物品過濾「隱藏並出售」「無形必撿」、淬鍊上限、恐懼層重玩、角色畫面多 3 頁數值、獨特物品分頁的符文之語底材
"QUIVERS": "箭筒",
"HIDE AND SELL": "隱藏並出售",
// 物品過濾的預設方案（V60 修正：HIDE 被逐字翻成「皮」）
"HIDE MAGIC": "隱藏魔法物品",
"SELL MAGIC": "出售魔法物品",
"SELL MAGIC AND RARE": "出售魔法和稀有物品",
// 「已收藏」和「符文之語」底下各有一行開關，英文兩行都叫 ETHEREAL ONLY：加「└」表示是上面那一行的附屬開關（V61）
"ETHEREAL ONLY": "└ 無形必撿",
// 書籤加的兩個選項（d2lootInstall）
"SELL MAGIC AND BELOW": "撿取並出售魔法以下",
"SELL RARE AND BELOW": "撿取並出售稀有以下",
"At ON, ethereal copies are always picked up and the line above acts on the rest": "開啟時一律撿起無形的物品，上面那一行的設定只套用在其他物品",
"Not shown on the floor. Sold when you walk onto it or click where it lies": "不會顯示在地上。走過去或點擊它所在的位置就會直接賣掉",
"Once: double or lose all tempers": "限一次：淬鍊全部加倍或全部失去",
"Already on its elite base: *": "已經是精英底材：{0}",
"Up to 10 tempers an item": "每件物品最多淬鍊 10 次",
"Temper stops at 10: use the Hellforge": "淬鍊最多 10 次：請改用地獄熔爐",
"Temper stops at 10": "淬鍊最多 10 次",
"This item has used its Hellforge": "這件物品已經用過地獄熔爐",
"Once per item": "每件物品限一次",
"Magic items can't be tempered": "魔法物品不能淬鍊",
"Charsi returned a Burning Essence of Terror": "恰西退回了 1 個燃燒的恐懼精華",
"Charsi returned # Burning Essences of Terror": "恰西退回了 {0} 個燃燒的恐懼精華",
"This item is locked: an older save was loaded": "這件物品已鎖住：曾讀取較舊的存檔",
"Bases # / #": "底材 {0} / {1}",
"One-Hand Weapons": "單手武器",
"Two-Hand Weapons": "雙手武器",
"REPLAY TERROR #": "重玩恐懼第 {0} 層",
"Enter: next tier - R: replay * - T: Charsi's wares - Esc: end the run": "Enter：下一層 - R：重玩{0} - T：恰西的貨品 - Esc：結束這一輪",
"Enter: replay * - T: Charsi's wares - Esc: end the run": "Enter：重玩{0} - T：恰西的貨品 - Esc：結束這一輪",
"Enter: replay * - T: Charsi's wares - Esc: main menu": "Enter：重玩{0} - T：恰西的貨品 - Esc：主選單",
"Enter: * - R: replay * - T: Charsi's wares - Esc: main menu": "Enter：{0} - R：重玩{1} - T：恰西的貨品 - Esc：主選單",
"Enter: * - T: Charsi's wares - Esc: main menu": "Enter：{0} - T：恰西的貨品 - Esc：主選單",
"Enter: * - T: Charsi's wares - Esc: end the run": "Enter：{0} - T：恰西的貨品 - Esc：結束這一輪",
"Previous Page: *": "上一頁：{0}",
"Next Page: *": "下一頁：{0}",
"Offense": "攻擊",
"Finds and Breakpoints": "尋獲與速度門檻",
"Finds": "尋獲",
"Casting": "施法",
"Hits": "擊中效果",
"Hit Recovery": "打擊恢復",
"Frames": "影格",
"Breakpoints: *": "門檻：{0}",
"Next: *% for * frames": "下一個：{0}% 時 {1} 影格",
"At the last breakpoint": "已達最後一個門檻",
"Faster Cast Rate has no breakpoints here:": "這個遊戲的快速施法率沒有門檻：",
"every point shortens cooldowns": "每一點都會縮短冷卻時間",
"* of their time": "原本時間的 {0}",
"Enemy Resistances": "敵人抗性",
"Enemy Resistances but Magic": "敵人抗性（魔法除外）",
"Enemy * Resistance": "敵人{0}抗性",
"Enemy Fire Resistance": "敵人火焰抗性",
"Enemy Cold Resistance": "敵人冰寒抗性",
"Enemy Lightning Resistance": "敵人閃電抗性",
"Enemy Poison Resistance": "敵人毒素抗性",
"Enemy Magic Resistance": "敵人魔法抗性",
"Enemy Physical Resistance": "敵人物理抗性",
"Slows Target": "目標緩速",
"Attacker Takes * Damage": "攻擊者受到{0}傷害",
"Attacker Takes Fire Damage": "攻擊者受到火焰傷害",
"Attacker Takes Cold Damage": "攻擊者受到冰寒傷害",
"Attacker Takes Lightning Damage": "攻擊者受到閃電傷害",
"Attacker Takes Poison Damage": "攻擊者受到毒素傷害",
"Attacker Takes Magic Damage": "攻擊者受到魔法傷害",
"Missile Damage Reduced": "遠程傷害減少",
"Melee Damage Reduced": "近戰傷害減少",
"* (* running)": "{0}（跑步時 {1}）",
"*% / max *% / *% in all": "{0}% / 上限 {1}% / 總計 {2}%",
"*% / max *%": "{0}% / 上限 {1}%",
"Curse Length Reduced by": "詛咒時間減少",
"Experience Gained": "獲得經驗值",
"Light Radius": "照亮範圍",
// 遊戲 20261105.1：恰西的鐵砧（淬鍊／清除／地獄熔爐／升級）、燃燒的恐懼精華、鑰匙說明、武器技能新說明
"Quantity: #": "數量：{0}",
"Keep in the Charms Window to Gain Bonus (*)": "放在護符欄（{0}）才有效果",
"Gives nothing until it lies in the Charms Window": "放進護符欄之前沒有任何效果",
"Gives nothing until it lies in the Charms Window (*)": "放進護符欄（{0}）之前沒有任何效果",
"Dropped by the Countess, Act I": "第一幕的女伯爵掉落",
"Dropped by the Summoner, Act II": "第二幕的召喚者掉落",
"Dropped by Nihlathak, Act V": "第五幕的尼拉塞克掉落",
"The Countess may drop a Key of Terror": "女伯爵可能掉落恐懼之鑰",
"The Summoner may drop a Key of Hate": "召喚者可能掉落憎恨之鑰",
"Nihlathak may drop a Key of Destruction": "尼拉塞克可能掉落毀滅之鑰",
"The Countess is here": "女伯爵出現了",
"The Summoner is here": "召喚者出現了",
"Nihlathak is here": "尼拉塞克出現了",
"They drop in Terror tiers only, more often the higher the tier": "只在恐懼層掉落，層數越高越常掉",
"One of each turns a Terror offer into a Pandemonium level": "三種各一把，可以把一個恐懼層選項變成混沌關卡",
"Mephisto's Brain, Diablo's Horn and Baal's Eye: one of each opens Uber Tristram": "墨菲斯托之腦、迪亞布羅之角和巴爾之眼：各一個可以開啟超級崔斯特姆",
"A second copy may come on a better base than the one kept": "第二件可能出在比收藏那件更好的底材上",
"D2 Survivors needs about * free on * to copy the game files, and it has *: free * more.": "D2 Survivors 需要 {1} 上約 {0} 的可用空間來複製遊戲檔案，目前只有 {2}：請再清出 {3}。",
"FULL SCREEN": "全螢幕",
"Fires * guided arrows that each hunt through * monsters, dealing * weapon damage to each.": "射出 {0} 支導向箭，每支追擊穿過 {1} 隻怪物，各造成 {2} 武器傷害。",
"Strikes the toughest monster in reach with your weapon's damage and stuns it for # seconds, bosses for less.": "以武器傷害攻擊範圍內最強的怪物，並使牠暈眩 {0} 秒，首領的時間較短。",
"Strikes the toughest in reach with a heavy blow of * weapon damage, sweeping *% through those beside it. Each blow costs *% of your life, none below *%.": "對範圍內最強的怪物重擊，造成 {0} 武器傷害，並橫掃旁邊的怪物 {1}%。每次攻擊消耗 {2}% 生命，生命低於 {3}% 時不使用。",
"Splits one arrow into a fan of #, each with three quarters of your weapon's damage.": "將一支箭分裂成扇形的 {0} 支，每支造成武器傷害的四分之三。",
"Attacks the nearest monster in reach with * rapid thrusts of * weapon damage.": "以 {0} 次快速刺擊攻擊範圍內最近的怪物，每次造成 {1} 武器傷害。",
"Adds lightning to a thrust of your weapon at the toughest monster in reach.": "用武器刺擊範圍內最強的怪物，並附加閃電傷害。",
"Throws * of your weapon's damage trailing poison clouds that deal * over *s.": "投擲 {0}，造成武器傷害，沿途留下毒雲，在 {2} 秒內造成 {1} 毒素傷害。",
"# javelins": "{0} 支標槍",
"Thrusts hard at the toughest monster in reach for * weapon damage, * times that to a boss.": "用力刺擊範圍內最強的怪物，造成 {0} 武器傷害，對首領造成 {1} 倍。",
"Splits one arrow into * at the monsters around you, each with three quarters of your weapon's damage at *.": "將一支箭分裂成 {0} 支射向周圍的怪物，每支造成 {1} 武器傷害的四分之三。",
"Attacks every monster around you in turn, up to *, for * weapon damage each.": "依序攻擊周圍的每一隻怪物，最多 {0} 隻，各造成 {1} 武器傷害。",
"Thrusts at the toughest monster in reach with your weapon, releasing # charged bolts of #.": "用武器刺擊範圍內最強的怪物，放出 {0} 道 {1} 傷害的充能彈。",
"Thrusts at the toughest monster in reach with your weapon, and chain lightning jumps # times for #.": "用武器刺擊範圍內最強的怪物，連鎖閃電跳躍 {0} 次，每次造成 {1} 傷害。",
"Claws the toughest in reach with your weapon. Every fourth blow releases # charges of +#%.": "用武器爪擊範圍內最強的怪物。每第四擊釋放 {0} 層 +{1}% 的充能。",
"Claws the toughest in reach with your weapon. Every fourth blow drains #% of it more, healing #%.": "用武器爪擊範圍內最強的怪物。每第四擊額外吸取 {0}%，並回復其中 {1}% 生命。",
"Claws the toughest in reach with your weapon. Every fourth blow bursts in fire for # around it.": "用武器爪擊範圍內最強的怪物。每第四擊在周圍爆出 {0} 火焰傷害。",
"Claws with your weapon, letting go a meteor (#), chain lightning (#), chaos ice (#), then the ice again.": "用武器爪擊，依序放出隕石（{0}）、連鎖閃電（{1}）、混沌寒冰（{2}），再放一次寒冰。",
"Claws with your weapon. Every fourth blow deals # lightning, a nova of # and # charged bolts of #.": "用武器爪擊。每第四擊造成 {0} 閃電傷害、{1} 傷害的新星，以及 {2} 道 {3} 傷害的充能彈。",
"Claws with your weapon. Every fourth blow deals # cold, shatters ice for as much around and leaves freezing cubes.": "用武器爪擊。每第四擊造成 {0} 冰寒傷害，碎冰對周圍造成同樣的傷害，並留下冰凍方塊。",
"Both claws slice the toughest in reach for * weapon damage each, releasing all charges.": "雙爪劈砍範圍內最強的怪物，各造成 {0} 武器傷害，並釋放所有充能。",
"Attacks two monsters in reach, or one twice, with your weapon's damage each time.": "攻擊範圍內的兩隻怪物，或對一隻攻擊兩次，每次造成武器傷害。",
"Strikes the toughest monster in reach for * weapon damage and knocks it back.": "攻擊範圍內最強的怪物，造成 {0} 武器傷害並擊退。",
"Throws an axe from each hand with your weapon's damage*.": "雙手各擲出一把斧頭，造成武器傷害{0}。",
"Throws an axe from each hand with your weapon's damage.": "雙手各擲出一把斧頭，造成武器傷害。",
"Throws an axe from each hand with your weapon's damage, passing through # monster.": "雙手各擲出一把斧頭，造成武器傷害，可穿透 {0} 隻怪物。",
"Throws an axe from each hand with your weapon's damage, passing through # monsters.": "雙手各擲出一把斧頭，造成武器傷害，可穿透 {0} 隻怪物。",
"Whirls * yards through your enemies, hitting each 5 times a second for * weapon damage.": "在敵人之間旋轉移動 {0} 碼，每秒擊中每隻怪物 5 次，每次造成 {1} 武器傷害。",
"Swings twice in a wide reach for * weapon damage each. Each hit makes you faster, up to * times.": "在大範圍內揮擊兩次，各造成 {0} 武器傷害。每次命中都會加快速度，最多疊加 {1} 次。",
"Strikes the toughest monster in reach for * weapon damage, splashing *% of it on those beside it.": "攻擊範圍內最強的怪物，造成 {0} 武器傷害，並對旁邊的怪物濺射 {1}%。",
"Strikes the toughest monster in reach for * weapon damage as magic. You take *% more physical damage for 1 second after.": "攻擊範圍內最強的怪物，造成 {0} 武器傷害（轉為魔法傷害）。之後 1 秒內你受到的物理傷害增加 {1}%。",
"Strikes the toughest monster in reach for * weapon damage as magic. You take *% more physical damage for * seconds after.": "攻擊範圍內最強的怪物，造成 {0} 武器傷害（轉為魔法傷害）。之後 {2} 秒內你受到的物理傷害增加 {1}%。",
"Leaps where you run, or at a foe, striking for * weapon damage and *% of it to those around.": "往奔跑方向或朝敵人跳躍，造成 {0} 武器傷害，並對周圍造成其中的 {1}%。",
"Throws # axes at the monsters around you with your weapon's damage each, passing through #.": "向周圍的怪物擲出 {0} 把斧頭，各造成武器傷害，可穿透 {1} 隻。",
"Charges through the monsters in your path for * weapon damage each, then attacks.": "衝過路徑上的怪物，各造成 {0} 武器傷害，然後發動攻擊。",
"Strikes the toughest in reach for * weapon damage, costing *% of your life (none below *%).": "攻擊範圍內最強的怪物，造成 {0} 武器傷害，消耗 {1}% 生命（生命低於 {2}% 時不使用）。",
"6 frenzied blows of * weapon damage hit the toughest monster in a wide reach until it falls, each sweeping *% through those beside it.": "6 次狂熱打擊攻擊大範圍內最強的怪物直到牠倒下，每次造成 {0} 武器傷害，並橫掃旁邊的怪物 {1}%。",
"Charges 3 times along your path, dealing * weapon damage, with a holy burst at each stop.": "沿路衝鋒 3 次，造成 {0} 武器傷害，每次停下時引發神聖爆發。",
"Fires * arrow of * weapon damage that hunts down its target.": "射出 {0} 支追蹤目標的箭，造成 {1} 武器傷害。",
"Fires * arrows of * weapon damage that hunt down their target.": "射出 {0} 支追蹤目標的箭，各造成 {1} 武器傷害。",
"A werewolf with +#% life, you claw with your weapon's damage every #s, +#% Critical Strike.": "變成生命 +{0}% 的狼人，每 {1} 秒用武器傷害爪擊，致命攻擊 +{2}%。",
"As a werewolf, you strike all in reach * times every *s for * weapon damage each.": "變成狼人，每 {1} 秒攻擊範圍內所有怪物 {0} 次，各造成 {2} 武器傷害。",
"As a werebear you hit for * weapon damage, +*% a charge up to *. Full charges stun.": "變成熊人，攻擊造成 {0} 武器傷害，每層充能 +{1}%，最多 {2} 層。充能全滿時會暈眩。",
"As a werebear you hit for * weapon damage, +*% a charge up to *. Each charged blow stuns, *s at one charge.": "變成熊人，攻擊造成 {0} 武器傷害，每層充能 +{1}%，最多 {2} 層。每次充能攻擊都會暈眩，1 層時暈眩 {3} 秒。",
"A werebear with +*% life and +*% Defense, striking for * weapon damage and splashing it.": "變成生命 +{0}%、防禦 +{1}% 的熊人，攻擊造成 {2} 武器傷害並濺射。",
"Burning Essence of Terror": "燃燒的恐懼精華",
"Burning Essences of Terror": "燃燒的恐懼精華",
"Burning Essences of Terror: #": "燃燒的恐懼精華：{0}",
"Cost: # Burning Essence of Terror": "花費：{0} 個燃燒的恐懼精華",
"Cost: # Burning Essences of Terror": "花費：{0} 個燃燒的恐懼精華",
"You need a Burning Essence of Terror": "需要 1 個燃燒的恐懼精華",
"You need # Burning Essences of Terror": "需要 {0} 個燃燒的恐懼精華",
"Temper": "淬鍊",
"Clean": "清除",
"Hellforge": "地獄熔爐",
"Upgrade": "升級",
"Tempered (#)": "已淬鍊 ({0})",
"Raise one line at random": "隨機提升一行屬性",
"Raises a random blue or orange line": "隨機提升一行藍色或橘色屬性",
"Ranks, buy and sell": "等級、購買與出售",
"Remove all tempers": "移除所有淬鍊",
"Removes every temper": "移除所有淬鍊",
"Removes # tempers": "移除 {0} 次淬鍊",
"Double or lose all tempers": "淬鍊全部加倍或全部失去",
"Move to a stronger base": "換成更強的底材",
"Upgrades to": "升級為",
"Put an item on the anvil to temper it": "把要淬鍊的物品放上鐵砧",
"Put an item on the anvil to clean it": "把要清除的物品放上鐵砧",
"Put an item on the anvil for the Hellforge": "把要送進地獄熔爐的物品放上鐵砧",
"Put an item on the anvil to upgrade it": "把要升級的物品放上鐵砧",
"No reply yet: your essence is held, not lost": "尚未收到回應：你的精華先保留，不會遺失",
"No connection: nothing spent": "沒有連線：沒有花費任何東西",
"Item updated to its last Forge result": "物品已更新為熔爐上一次的結果",
"Base upgraded": "底材已升級",
"No stronger base for this item": "這件物品沒有更強的底材",
"Uniques and set items can't be upgraded": "獨特和套裝物品不能升級",
"Keeps every line and temper": "保留所有屬性和淬鍊",
"#%: lose every temper": "{0}%：失去所有淬鍊",
"#%: double every temper": "{0}%：所有淬鍊加倍",
"#% every temper comes off": "{0}% 所有淬鍊消失",
"#% nothing changes": "{0}% 沒有變化",
"#% every temper doubles": "{0}% 所有淬鍊加倍",
"Temper chance: #%": "淬鍊機率：{0}%",
"Temper chance back to #%": "淬鍊機率回到 {0}%",
"Each temper lowers the chance": "每次淬鍊都會降低機率",
"# tempers at stake": "賭上 {0} 次淬鍊",
"Press again to remove # tempers": "再按一次移除 {0} 次淬鍊",
"Press again to risk # tempers": "再按一次賭上 {0} 次淬鍊",
"Raised:": "提升：",
"The temper failed": "淬鍊失敗",
"All tempers removed": "已移除所有淬鍊",
"All tempers lost": "失去了所有淬鍊",
"All tempers doubled": "所有淬鍊加倍了",
"Nothing on this item can be tempered": "這件物品沒有可以淬鍊的屬性",
"This item has no tempers": "這件物品沒有淬鍊",
"The Hellforge needs 10 tempers": "地獄熔爐需要 10 次淬鍊",
"The Forge refused this item": "熔爐拒絕了這件物品",
"That can't go on the anvil": "這個不能放上鐵砧",
"Click to pick up · Shift-click to put on the anvil · Esc to close": "點擊拿起 · Shift＋點擊放上鐵砧 · Esc 關閉",
"Tap an item, then tap To the anvil": "點一下物品，再點「放上鐵砧」",
"To the anvil": "放上鐵砧",
"Tap again to take it off the anvil": "再點一下從鐵砧拿下",
"Tap again": "再點一下",
// 遊戲 20261104.1／.2：迪亞布羅分身、三種鑰匙與器官、超級首領、地獄火炬與毀滅
"* Stones of Jordan Sold to Merchants": "已有 {0} 個喬丹之石賣給商人",
"Diablo Walks the Earth": "迪亞布羅降臨人世",
"Keys": "鑰匙", "Organs": "器官",
"Key of Terror": "恐懼之鑰", "Key of Hate": "憎恨之鑰", "Key of Destruction": "毀滅之鑰",
"Mephisto's Brain": "墨菲斯托之腦", "Diablo's Horn": "迪亞布羅之角", "Baal's Eye": "巴爾之眼",
"Key of Terror: #": "恐懼之鑰：{0}", "Key of Hate: #": "憎恨之鑰：{0}", "Key of Destruction: #": "毀滅之鑰：{0}",
"Mephisto's Brain: #": "墨菲斯托之腦：{0}", "Diablo's Horn: #": "迪亞布羅之角：{0}", "Baal's Eye: #": "巴爾之眼：{0}",
"Keys # · # · #": "鑰匙 {0} · {1} · {2}", "Organs # · # · #": "器官 {0} · {1} · {2}",
"Lilith": "莉莉絲", "Uber Tristram": "超級崔斯特姆", "Diablo Clone": "迪亞布羅分身",
"Takes a Key of Terror, a Key of Hate and a Key of Destruction": "需要恐懼之鑰、憎恨之鑰和毀滅之鑰各一把",
"Takes Mephisto's Brain, Diablo's Horn and Baal's Eye": "需要墨菲斯托之腦、迪亞布羅之角和巴爾之眼各一個",
"Terror * stays open.": "恐懼第 {0} 層維持開放。",
"an evil force": "一股邪惡力量",
"Hellfire Torch": "地獄火炬", "Annihilus": "毀滅",
"Standard of Heroes": "英雄旗幟",
"Wears or used an uber item the leaderboard never saw found": "穿戴或使用過排行榜沒看到掉落過程的超級物品",
"You have #% more life and mana, renewed every # seconds.": "生命和法力增加 {0}%，每 {1} 秒重新施放。",
"You have #% more life and mana for # seconds.": "{1} 秒內生命和法力增加 {0}%。",
// 2026-11 遊戲 20261103.1／.2：珠寶、拉蘇克的精華、恐懼層上限、物品施放的技能說明
"The camp's waypoint now lists Terror tier 1 for your level-* *, under the act it starts in: one act of Hell at monster level *. Clear it to open the next.": "營地的傳送點現在會為你的 {0} 級{1}列出恐懼層 1，放在它開始的那一幕底下：一幕怪物等級 {2} 的地獄。通關後開啟下一層。",
"a blow or a burst of fire, cold or lightning": "每次攻擊或火焰、冰寒、閃電爆發",
"A new build is ready: click to reload, or your Terror runs won't rank": "新版本已就緒：點擊重新載入，否則你的恐懼層紀錄不會列入排名",
"A new build is ready: tap to reload, or your Terror runs won't rank": "新版本已就緒：點一下重新載入，否則你的恐懼層紀錄不會列入排名",
"Update ready: click to restart, or your Terror runs won't rank": "更新已就緒：點擊重新啟動，否則你的恐懼層紀錄不會列入排名",
"Gives +# to all your skills for # seconds.": "{1} 秒內所有技能 +{0}。",
"Not seen as it was played": "遊玩過程未經確認",
"Restores all Life and Mana": "完全回復生命和法力",
"Dummies: *": "木樁：{0}",
"Next: *": "下一個：{0}",
"Immune to *": "{0}免疫",
"You have #% more life for # seconds.": "{1} 秒內生命增加 {0}%。",
"At most 75% in Terror, 50% elsewhere as in D2; fire, cold, lightning, magic and poison go by resistances": "恐懼層最多 75%，其他地方和 D2 一樣最多 50%；火焰、冰寒、閃電、魔法和毒素傷害看抗性",
"At most 50%, as in D2, and 75% in Terror; fire, cold, lightning, magic and poison go by resistances": "和 D2 一樣最多 50%，恐懼層最多 75%；火焰、冰寒、閃電、魔法和毒素傷害看抗性",
"Each point past the class's: +# maximum life in Terror, +# elsewhere": "超過職業初始值的每一點：恐懼層生命上限 +{0}，其他地方 +{1}",
"In Terror, twice as much": "恐懼層加倍",
"At most #% in Terror, more with +% to Maximum Resist": "恐懼層最多 {0}%，有最大抗性加成時更高",
"For #s, a monster that shoots you takes a # ice bolt, and #% of blows and missiles miss you.": "{0} 秒內，射擊你的怪物會受到 {1} 傷害的冰彈反擊，近戰和遠程攻擊有 {2}% 會落空。",
"For #s, a monster that shoots you takes a # ice bolt that chills it for #s, and #% of blows and missiles miss you.": "{0} 秒內，射擊你的怪物會受到 {1} 傷害的冰彈反擊並被冰冷 {2} 秒，近戰和遠程攻擊有 {3}% 會落空。",
"Strikes the toughest monster in reach for # magic damage. You take #% more physical damage for # seconds after.": "攻擊範圍內最強的怪物，造成 {0} 魔法傷害。之後 {2} 秒內你受到的物理傷害增加 {1}%。",
"Leaps where you run, or into a pack when still. The landing knocks back.": "往你奔跑的方向跳躍，站著不動時跳進怪物群中。落地時擊退怪物。",
"As a werebear you hit for # plus # a charge, up to #. Each charged blow stuns, #s at one charge.": "變成熊人後攻擊造成 {0} 傷害，每層充能再加 {1}，最多 {2} 層。每次充能攻擊都會擊暈，1 層充能時 {3} 秒。",
"A bone spear pierces every monster in its path for # damage.": "一支骨矛貫穿路徑上所有怪物，造成 {0} 傷害。",
"A bone spirit tracks down one of the nearest monsters for # damage.": "一個白骨之魂追蹤最近的一隻怪物，造成 {0} 傷害。",
"Fires a bolt of holy light at the undead for # damage.": "對不死生物射出一道聖光彈，造成 {0} 傷害。",
"Lightning strikes the toughest monster for #, as holy bolts burst out for # each to the undead.": "閃電打中最強的怪物，造成 {0} 傷害，同時迸出聖光彈，對不死生物各造成 {1} 傷害。",
"Lightning strikes the toughest monster and one more for #, as holy bolts burst out for # each to the undead.": "閃電打中最強的怪物和另一隻，造成 {0} 傷害，同時迸出聖光彈，對不死生物各造成 {1} 傷害。",
"Monsters around you lose #% of their life, elites and bosses too.": "你周圍的怪物失去 {0}% 生命，菁英和首領也一樣。",
"Monsters within # lose #% of their life, elites and bosses too.": "{0} 範圍內的怪物失去 {1}% 生命，菁英和首領也一樣。",
"Fires a fire ball at the nearest monster that bursts on impact for # damage.": "對最近的怪物射出一顆火球，命中時爆炸，造成 {0} 傷害。",
"A meteor crashes onto monsters nearby for # damage and leaves the ground burning.": "一顆隕石砸向附近的怪物，造成 {0} 傷害，並讓地面燃燒。",
"A bolt jumps between up to # monsters for # damage each.": "一道閃電在最多 {0} 隻怪物間跳躍，各造成 {1} 傷害。",
"Fires an ice spike that bursts for # damage and freezes all in the burst for # seconds.": "射出一根寒冰尖刺，爆炸造成 {0} 傷害，並把爆炸範圍內的怪物冰凍 {1} 秒。",
"Blinds all but act bosses within # of you for #s, their Defense #% lower.": "讓你周圍 {0} 內除了幕首領以外的怪物目盲 {1} 秒，牠們的防禦降低 {2}%。",
"Your other weapon set is empty. Fill it from your character screen": "你的另一組武器是空的。請在角色畫面裝上武器",
"It never hides or sells new uniques, other quest items or what you drop. Charsi's Buy Back keeps what's sold": "不會隱藏或出售新的獨特物品、其他任務物品或你自己丟下的物品。賣掉的東西可以在恰西的回購找回",
"Set it to SELL once every hero has read all ten": "每位英雄都讀完十本後，可以設成「出售」",
"Larzuk's Essence": "拉蘇克的精華",
"Quantity:": "數量：",
"Choose the item to which you wish to add sockets.": "按右鍵（手機長按）使用，再點要加上凹槽的物品",
"That item has sockets already": "這件物品已經有凹槽了",
"That item can't hold sockets": "這件物品不能打凹槽",
"JEWELS": "珠寶",
"Magic and rare jewels. At KEEP no other line hides or sells them": "魔法和稀有珠寶。設成「保留」時，其他項目都不會隱藏或出售它們",
"Sockets and jewels": "凹槽與珠寶",
"* went to your inventory": "{0}已放進物品欄",
"* went to the Charms window": "{0}已放進護符視窗",
"* went to the stash, tab *": "{0}已放進儲物箱第 {1} 頁",
"No room anywhere for *: it shows up once there's room": "沒有地方放 {0}：有空位時就會出現",
// 2026-11 遊戲 20261102.2：排行榜拒收的紀錄
"1 run refused by the leaderboard": "1 筆紀錄被排行榜拒收",
"* runs refused by the leaderboard": "{0} 筆紀錄被排行榜拒收",
"Tried again for two days, then dropped": "會重試兩天，之後丟棄",
"COPY DIAGNOSTICS in Options says why": "到選項的「複製診斷資訊」可以看原因",
// 2026-11 遊戲 20261102.1：第二組武器、鍵盤設定；提示裡的按鍵可以自訂，所以用 * 代入
"The hosted version is no longer available": "線上檔案版已不再提供",
"D2 Survivors now plays from your own Diablo II or Diablo II: Resurrected files, in this browser or in the desktop app.": "D2 Survivors 現在要用你自己的 Diablo II 或 Diablo II：獄火重生檔案來玩，可以在這個瀏覽器或桌面版遊玩。",
"Your Softcore heroes are safe in this browser. Download your save to import it in the desktop app or another browser.": "你的一般模式英雄安全地存在這個瀏覽器裡。下載存檔後，可以匯入桌面版或其他瀏覽器。",
"DOWNLOAD MY SAVE": "下載我的存檔",
"COPY AS A CODE": "複製成代碼",
"MAGIC ITEMS hides magic charms too. Set CHARMS to KEEP to keep them": "「魔法物品」也會隱藏魔法護符。要留下護符，請把「護符」設為「保留」",
"MAGIC ITEMS sells magic charms too. Set CHARMS to KEEP to keep them": "「魔法物品」也會出售魔法護符。要留下護符，請把「護符」設為「保留」",
"Gives +# to all your skills.": "所有技能 +{0}。",
"Up to # slain monsters rise for #s to fight for you.": "最多 {0} 隻被殺死的怪物復活 {1} 秒，為你戰鬥。",
"Up to # spirit wolves fight beside you, each sweeping bite dealing #.": "最多 {0} 隻靈狼在你身邊戰鬥，每次橫掃撕咬造成 {1} 傷害。",
"Up to # dire wolves fight beside you, each sweeping bite dealing #.": "最多 {0} 隻恐狼在你身邊戰鬥，每次橫掃撕咬造成 {1} 傷害。",
"A grizzly fights beside you, each splashing swipe dealing #.": "一隻灰熊在你身邊戰鬥，每次範圍揮擊造成 {0} 傷害。",
"It adds +#% damage to your and your summons' blows and +#% Attack Rating.": "你和召喚物的攻擊傷害 +{0}%，攻擊準確率 +{1}%。",
"Monsters whose blows land on you take #% of the damage back.": "打中你的怪物會受到 {0}% 的反彈傷害。",
"Repair Diablo II and extract again (d2char.mpq and d2data.mpq hold these heroes)": "修復 Diablo II 後再解壓縮一次（這些英雄在 d2char.mpq 和 d2data.mpq 裡）",
"Repair Diablo II and Lord of Destruction and extract again (d2char.mpq, d2data.mpq, d2exp.mpq)": "修復 Diablo II 和毀滅之王後再解壓縮一次（d2char.mpq、d2data.mpq、d2exp.mpq）",
"Pick a card to banish it: an evolution until your next re-draft, any other for this re-draft": "選一張卡片放逐：進化會放逐到下次重新抽選，其他卡片只在這次重新抽選有效",
"Banished until your next re-draft": "已放逐，直到下次重新抽選",
"Banished until this run ends or goes on past Baal": "已放逐，直到這一局結束或打過巴爾繼續玩",
"The part of D2 Survivors that copies the game files was stopped as it started.": "D2 Survivors 複製遊戲檔案的程式一啟動就被停止了。",
"An antivirus may be stopping it: allow D2 Survivors in it, then try again.": "可能是防毒軟體擋住了：請在防毒軟體裡允許 D2 Survivors，再試一次。",
"Or play in your browser at d2survivors.lol, which needs no copy of the game files.": "或到 d2survivors.lol 用瀏覽器玩，不需要複製遊戲檔案。",
"Indestructible": "不可破壞",
"KEYBOARD": "鍵盤",
"MOVE UP": "向上移動",
"MOVE DOWN": "向下移動",
"MOVE LEFT": "向左移動",
"MOVE RIGHT": "向右移動",
"CHARACTER SCREEN": "角色畫面",
"CLEAR SCREEN": "關閉畫面",
"CARD #": "卡片 {0}",
"MOVE WITH WASD": "用 WASD 移動",
"PRESS A KEY": "請按鍵",
"Press the key for it - Esc to cancel": "請按下要設定的鍵 - Esc 取消",
"Taken from *": "這個鍵原本是「{0}」，已改到這裡",
"Moves with W, A, S and D as well as the arrows": "除了方向鍵，也能用 W、A、S、D 移動",
"Moves with W, A, S and D as well as the arrows, and swaps weapons with E": "除了方向鍵，也能用 W、A、S、D 移動，並改用 E 切換武器",
"Tap a key, then press the new one": "點一下按鍵，再按新的鍵",
"Enter to change a key, Delete to clear it - Esc to go back": "Enter 更改按鍵，Delete 清除按鍵 - Esc 返回",
"Lines in red have no key": "紅色的項目沒有設定按鍵",
"Esc always opens the game menu and goes back": "Esc 一律是開啟遊戲選單和返回",
"Up Arrow": "上方向鍵",
"Down Arrow": "下方向鍵",
"Left Arrow": "左方向鍵",
"Right Arrow": "右方向鍵",
"Numpad *": "數字鍵 {0}",
"Caps Lock": "Caps Lock",
"Click for the skill tree": "點擊開啟技能樹",
"Click for the skill tree (*)": "點擊開啟技能樹（{0}）",
"Pick with * or click": "按 {0} 或點擊選擇",
"Pick with a click": "點擊選擇",
"Click to drink": "點擊飲用",
"Press * or click to drink": "按 {0} 或點擊飲用",
"Names every item, as * does": "顯示所有物品名稱，跟按住 {0} 一樣",
"Names every item on the floor": "顯示地上所有物品的名稱",
"Shows roll ranges, as * does": "顯示屬性可能的數值範圍，跟按住 {0} 一樣",
"Shows roll ranges in item boxes": "在物品說明框顯示屬性可能的數值範圍",
"Damage a second, by skill*": "各技能每秒傷害{0}",
"Spend it in the skill tree*": "到技能樹{0}使用",
"Open the character screen* in a run or the camp to read it": "在遊戲中或營地開啟角色畫面{0}來閱讀",
"Open the character screen* in a run or the camp to use it": "在一局中或營地打開角色畫面{0}使用",
"* stat points to place on the character screen*": "{0} 屬性點數可在角色畫面{1}分配",
"Moved to the Charms window*": "已移到護符欄{0}",
"+1 Skill Modifier Point. Click a skill in the skill tree*": "+1 技能改造點數。到技能樹{0}點擊技能",
"Your hero moves with the arrow keys now. For W, A, S and D, choose MOVE WITH WASD in Options, KEYBOARD": "英雄現在改用方向鍵移動。要用 W、A、S、D，請到 選項 → 鍵盤 選「用 WASD 移動」",
"W swaps weapons now. To move with W, A, S and D, choose MOVE WITH WASD in Options, KEYBOARD": "W 現在是切換武器。要用 W、A、S、D 移動，請到 選項 → 鍵盤 選「用 WASD 移動」",
"SWAP WEAPONS": "切換武器",
"Swap weapons": "切換武器",
"Swap weapons (*)": "切換武器（{0}）",
"Weapon set I": "武器組 I",
"Weapon set II": "武器組 II",
"Charms (*)": "護符（{0}）",
"This hero's skill tree (*)": "這位英雄的技能樹（{0}）",
"This hero's mercenary (*)": "這位英雄的傭兵（{0}）",
// 遊戲 20261101.1：防禦改成閃避、法力藥水、耐力回復生命、技能說明改寫（技能說明裡的數字有些寫死，例如 56、40%、1.5）
'Iron Maiden and the Iron Golem\'s Thorns send back Diablo II\'s share of a blow, and a revived monster strikes as hard as it hit you': '攻擊反噬和鋼鐵石魔的針刺會照暗黑破壞神 II 的比例反彈傷害，重生的怪物打得和牠打你時一樣重',
'The Assassin\'s Claw Mastery gives Diablo II\'s damage, about twice what it gave': '刺客的支配利爪提供暗黑破壞神 II 的傷害加成，約為之前的兩倍',
'Sacrifice strikes as often as the Paladin\'s Attack, as in Diablo II': '犧牲的揮擊頻率和聖騎士的攻擊一樣，和暗黑破壞神 II 相同',
'Caster synergies count Diablo II\'s points, so Fire Bolt, Twister, Teeth and Firestorm grow with the skills beside them': '施法者的協同效果按暗黑破壞神 II 的點數計算，火彈、鎌鼬風、牙和火風暴會隨相關技能變強',
'The Paladin\'s synergies count Diablo II\'s points, so Holy Bolt and Zeal grow with the skills beside them': '聖騎士的協同效果按暗黑破壞神 II 的點數計算，聖光彈和白熱會隨相關技能變強',
'The Druid\'s wolves, Grizzly, ravens and creepers take his Energy as his spells do': '德魯伊的狼、灰熊、烏鴉和藤蔓和他的法術一樣吃精力加成',
'Might, Fanaticism and Concentration give the Paladin Diablo II\'s whole damage bonus, twice what they gave': '力量、狂熱和專注給聖騎士暗黑破壞神 II 的完整傷害加成，是之前的兩倍',
'Zeal strikes up to 5 times with Diablo II\'s blows, and Charge hits as hard as Diablo II\'s': '白熱最多打 5 次，每次傷害同暗黑破壞神 II，突擊也和暗黑破壞神 II 一樣重',
'What the Assassin\'s charges release grows with +skills from items as Diablo II\'s skill damage does': '刺客釋放充能的傷害，會像暗黑破壞神 II 的技能傷害一樣隨物品的 +技能成長',
'Phoenix Strike\'s meteor, chain lightning and chaos ice each take their own synergy, as in Diablo II': '鳳凰攻擊的隕石、連鎖閃電和混沌寒冰各自吃自己的協同效果，和暗黑破壞神 II 一樣',
'Fissure grows with +skills from items as Diablo II\'s does': '火山爆會像暗黑破壞神 II 一樣隨物品的 +技能成長',
'+#% fire, cold, lightning, poison and magic damage': '+{0}% 火焰、冰寒、閃電、毒素與魔法傷害',
'+# to # mana by class': '依職業 +{0}～{1} 法力',
'+#% fire, cold, lightning, poison and magic damage, +# to # mana by class': '+{0}% 火焰、冰寒、閃電、毒素與魔法傷害，依職業 +{1}～{2} 法力',
'+# to #% fire, cold, lightning, poison and magic damage by class': '依職業 +{0}～{1}% 火焰、冰寒、閃電、毒素與魔法傷害',
'+# to #% fire, cold, lightning, poison and magic damage by class, +# to # mana by class': '依職業 +{0}～{1}% 火焰、冰寒、閃電、毒素與魔法傷害，依職業 +{2}～{3} 法力',
'+# to #% spell damage': '+{0}～{1}% 元素／魔法傷害',
'Regenerates #% of maximum life per second': '每秒回復生命上限的 {0}%',
'Regenerates #% of maximum life per second (+#%)': '每秒回復生命上限的 {0}%（+{1}%）',
'+#% Heal Stamina per Level': '每級 +{0}% 耐力恢復',
'Minor Mana Potion': '輕微法力藥水',
'Light Mana Potion': '輕型法力藥水',
'Greater Mana Potion': '強效法力藥水',
'Super Mana Potion': '超級法力藥水',
'Restores * Mana': '回復 {0} 法力',
'Fills your Energy Shield; one picked up with it full goes into the belt': '補充能量護盾；護盾全滿時撿到的會放進腰帶',
'When its blast kills, the most crowded of the corpses it leaves blows up at once, for half the damage.': '爆炸擊殺怪物時，留下的屍體中周圍怪物最多的一具會立刻爆炸，傷害減半。',
'Summons a Valkyrie whose spear thrusts deal # damage. The Valkyrie lends you +#% to all resistances.': '召喚女武神，長矛每次突刺造成 {0} 傷害。女武神給你所有抗性 +{1}%。',
'Summons your shadow, with # damage a blow, every third a kick. # life at level #.': '召喚你的影子，每擊 {0} 傷害，每第三擊是踢擊。{2} 級時生命 {1}。',
'Your shadow master has # life at level # and # a blow. Every third is a fire, lightning or ice kick.': '支配影子在 {1} 級時生命 {0}，每擊 {2}。每第三擊是火焰、閃電或寒冰踢擊。',
'+#% to all resistances, #% Damage Reduced. Curses #% shorter, poison and chill #%.': '所有抗性 +{0}%，傷害減少 {1}%。詛咒時間縮短 {2}%，中毒和冰冷縮短 {3}%。',
'Claws and blades poison each monster struck for # damage over #s.': '爪和刀刃讓命中的每隻怪物中毒，{1} 秒內造成 {0} 傷害。',
'A corpse explodes, dealing #-#% of its life within #.': '屍體爆炸，在 {2} 範圍內造成屍體生命 {0}-{1}% 的傷害。',
'Bone takes all physical damage, up to #, regrowing in #s. #% less physical damage': '白骨吸收全部物理傷害，最多 {0}，{1} 秒後重新長回。受到的物理傷害減少 {2}%',
'Summons take #% less fire, cold, lightning and poison damage': '召喚物受到的火焰、冰寒、閃電和毒素傷害減少 {0}%',
'+#% fire damage, and claw and paw blows add # fire, more with fire skills.': '+{0}% 火焰傷害，爪擊和熊掌攻擊附加 {1} 火焰傷害，火焰技能可再提高。',
'+#% cold damage. Winds take #% of fire, cold and lightning hits, up to #, regrowing in #s': '+{0}% 冰寒傷害。旋風吸收火焰、冰寒和閃電攻擊的 {1}%，最多 {2}，{3} 秒後恢復',
'Strikes the thickest pack in reach with # fire, cold and lightning damage added, half to those beside.': '攻擊範圍內最密集的怪群，附加火焰、冰寒和閃電傷害各 {0}，旁邊的怪物受一半。',
'Strikes up to # monsters in reach, the thickest packs first, with # fire, cold and lightning added, and half to those beside.': '攻擊範圍內最多 {0} 隻怪物，最密集的怪群優先，附加火焰、冰寒和閃電各 {1}，旁邊的怪物受一半。',
'Pays +#% MF · +#% XP · +#% gold · +#% items': '獎勵：魔法尋獲 +{0}% · 經驗值 +{1}% · 金幣 +{2}% · 物品 +{3}%',
'For # seconds your Defense is #% higher, so monsters\' blows and arrows miss you more.': '{0} 秒內防禦提高 {1}%，怪物的攻擊和箭矢更容易打不中你。',
'You have #% more life, renewed every # seconds.': '生命增加 {0}%，每 {1} 秒更新一次。',
'Improves Defense, so monsters\' blows and arrows miss you more.': '提升防禦，怪物的攻擊和箭矢更容易打不中你。',
'Adds Defense, so monsters\' blows and arrows miss you more.': '增加防禦，怪物的攻擊和箭矢更容易打不中你。',
'A werebear with +#% life and +#% Defense, splashing #.': '變成熊人，+{0}% 生命、+{1}% 防禦，濺射 {2}。',
'It raises your Defense twice as much below 40% life, and half as much above.': '生命低於 40% 時防禦提升加倍，高於 40% 時只有一半。',
'It raises your Defense half as much alone, rising to 1.5 times with 10 monsters around you.': '獨自一人時防禦提升只有一半，周圍有 10 隻怪物時提高到 1.5 倍。',
'It raises your Defense half as much, but each melee blow on you strikes back for 56 damage.': '防禦提升只有一半，但每次受到近戰攻擊都會反擊 56 傷害。',
'It works only near where you cast it, with 50% more added life. Stepping away loses that life.': '只在施放地點附近有效，增加的生命多 50%。離開就會失去這些生命。',
'Raises each armour\'s own Defense': '提高每件防具本身的防禦',
'Monsters\' blows and arrows miss more: they hit by their Attack Rating against it, and their level against yours': '怪物的攻擊和箭矢更容易打不中：命中率取決於牠們的攻擊準確率對上這個數值，以及牠們的等級對上你的等級',
'At least 5% of them hit, at most 95%, as in D2': '和 D2 一樣，至少 5%、至多 95% 會命中',
'From armour, a quarter of Dexterity, and skills\' +% Defense: Iron Skin, Shout, Defiance, Holy Shield, Werebear': '來自防具、四分之一的敏捷，以及技能的 +% 防禦：鐵布衫、大叫、反抗、神聖之盾、熊人變化',
'Less damage from physical hits: gear\'s Damage Reduced, Charsi\'s ranks, Fade, Bone Armor': '物理攻擊傷害減少：裝備的傷害減少、恰西的等級、能量消解、白骨裝甲',
// 遊戲 20261030.2：影像選項的天氣開關、屬性 ＋ 的提示（寫死在 saveTransfer-*.js、screens-*.js）
'WEATHER': '天氣', 'Rain and snow, as in Diablo II': '和暗黑破壞神 II 一樣會下雨、下雪',
// 選項開關：韓文表只有「*: OFF」，開的時候要自己補（STAT RANGES、WEATHER、AUTO STATS 開啟時才不會只翻半句）
'*: ON': '{0}：開',
'Ctrl-click: 5 points': 'Ctrl＋點擊：加 5 點', '5 points': '加 5 點', 'All points': '全部點數',
// 吉黑得的運氣：物品用 D2 原始屬性表顯示時這行沒有數字（itemArt-*.js 的 s8），字典只有帶 % 的那句
'Reduces all Vendor Prices': '所有商人價格降低',
// 字典裡有這句，但會先被「* of *」規則搶走翻成「第…筆，共…筆」（?campfire 舊版選角畫面的野蠻人介紹）
'He is unequaled in close-quarters combat and mastery of weapons.': '他在近身肉搏與武器運用上無人能及。',
// 20261029.2：神聖冰凍＋無法冰凍、電腦版解壓 D2R 的錯誤訊息、畫面中斷、儲物箱「收集」與獨特物品分頁的「交換」、放逐標記
'3 on damage for 1 on Vitality': '每點體力配 3 點到傷害屬性',
'Slowed, not frozen': '緩速，但沒有冰凍', '#% slower, not frozen': '慢 {0}%，但沒有冰凍', 'Cannot Be Frozen doesn\'t stop an aura': '無法冰凍擋不住靈氣',
'Diablo II: Resurrected is still updating in Battle.net.': '暗黑破壞神 II：獄火重生還在 Battle.net 更新中。',
'Let Battle.net finish the update, until its button says Play, then try again. If it already says Play, choose Options, then Scan and Repair.': '請等 Battle.net 更新完、按鈕變成「開始遊戲」後再試一次。如果已經是「開始遊戲」，請選「選項」→「掃描與修復」。',
'Your computer can’t read the drive the game is on.': '你的電腦讀不到遊戲所在的磁碟。',
'If it’s a Windows drive mounted on Linux, shut Windows down fully (with Fast Startup off), mount the drive again, then try again. Or copy the game to another drive.': '如果這是掛載在 Linux 上的 Windows 磁碟，請把 Windows 完全關機（關閉「快速啟動」），重新掛載磁碟後再試一次。或是把遊戲複製到其他磁碟。',
'Your computer can’t read the drive that folder is on. If it’s a Windows drive mounted on Linux, shut Windows down fully (with Fast Startup off) and mount it again, or copy the game to another drive.': '你的電腦讀不到那個資料夾所在的磁碟。如果這是掛載在 Linux 上的 Windows 磁碟，請把 Windows 完全關機（關閉「快速啟動」）再重新掛載，或是把遊戲複製到其他磁碟。',
'This is Diablo III’s folder. Choose Diablo II: Resurrected’s or Diablo II’s (1.14).': '這是暗黑破壞神 III 的資料夾。請選擇暗黑破壞神 II：獄火重生或暗黑破壞神 II（1.14）的資料夾。',
'This is Diablo IV’s folder. Choose Diablo II: Resurrected’s or Diablo II’s (1.14).': '這是暗黑破壞神 IV 的資料夾。請選擇暗黑破壞神 II：獄火重生或暗黑破壞神 II（1.14）的資料夾。',
'Your browser isn\'t using your graphics card. In Chrome or Edge, turn on graphics acceleration in Settings, System, then restart it': '你的瀏覽器沒有使用顯示卡。請在 Chrome 或 Edge 的「設定」→「系統」開啟圖形加速，然後重新啟動瀏覽器',
'Teleports to the toughest ahead and kicks it for # damage, exploding in fire for # around, releasing all charges.': '瞬移到前方最強的敵人並踢擊，造成 {0} 傷害，再爆炸對周圍造成 {1} 火焰傷害，釋放所有蓄能。',
'Banished: * won\'t evolve into *': '已放逐：{0}不會進化成{1}',
'Pick a card to banish it: an evolution until Baal, any other for this re-draft': '選一張卡片放逐：進化會放逐到打倒巴爾為止，其他卡片只在這次重新抽選有效',
'Banished for this hero': '這個英雄已放逐',
'Waiting for it to come back': '正在等待畫面恢復', 'It keeps going and coming back': '畫面一直中斷又恢復', 'The display is back': '畫面已恢復',
'Click to reload': '點擊重新載入', 'Tap to reload': '點一下重新載入', 'or click to reload': '或點擊重新載入', 'or tap to reload': '或點一下重新載入',
'Click to reload and continue the run': '點擊重新載入並繼續這一局', 'Tap to reload and continue the run': '點一下重新載入並繼續這一局',
'or click to reload and continue the run': '或點擊重新載入並繼續這一局', 'or tap to reload and continue the run': '或點一下重新載入並繼續這一局',
'Click to continue the run': '點擊繼續這一局', 'Tap to continue the run': '點一下繼續這一局',
'Collect': '收集', 'COLLECT': '收集', 'Put every missing one in your collection': '把收藏裡還沒有的全部放進去', 'Nothing to put in your collection': '沒有可以放進收藏的物品',
'# item to put in': '可放進 {0} 件', '# items to put in': '可放進 {0} 件',
'# item put in your collection': '已放進收藏 {0} 件', '# items put in your collection': '已放進收藏 {0} 件',
'Swapped: the old one lies where the new one was': '已交換：舊的放在新的原本的位置', 'Swapped: the old one is in your hand': '已交換：舊的在你手上',
'Swap': '交換', 'Click to swap it in': '點擊換進收藏', 'Tap here to swap it in': '點這裡換進收藏',
'In your inventory': '在物品欄', 'In your stash': '在儲物箱',
// 20261027.1：物品過濾、腰帶、存檔代碼版本、技能冷卻與命中次數、護身符、阿卡拉重新開始
'BETTER ONLY': '只撿更好的', 'Picks up a copy that rolls higher than yours on any stat, and sells the rest': '任何一項數值比你收藏的那件高就撿起來，其餘的賣掉',
'A potion picked up at full life goes into the belt; below it, it\'s drunk at once': '生命全滿時撿到的藥水會放進腰帶；生命沒滿時會立刻喝掉',
'No Potions in the Belt: none can be drunk in this tier': '腰帶不能放藥水：這一層不能喝藥水',
'Clear a tier with No Potions in the Belt among its affixes (from tier *).': '通關一個帶有「腰帶不能放藥水」詞綴的層（第 {0} 層起才會出現）。',
'An item in Diablo II, not a skill: gear\'s +skills don\'t raise it': '在暗黑破壞神 II 裡是物品而不是技能：裝備的 +技能不會提升它',
'Poisons the monster a weapon blow hits for its length: a stronger poison replaces it, a second never adds': '武器擊中的怪物會在持續時間內中毒：較強的毒會取代原本的毒，第二次中毒不會疊加',
'In all': '合計', 'In all:': '合計：', 'Shift-click or hold: all points': 'Shift＋點擊或長按：全部點數', 'Search by name or set': '依名稱或套裝搜尋',
'That code comes from a newer version of D2 Survivors. Update the app, then try again.': '這段代碼來自較新版本的 D2 Survivors。請更新應用程式後再試一次。',
'That code holds gear this version of D2 Survivors doesn\'t know. Update the app, then try again.': '這段代碼裡有這個版本的 D2 Survivors 不認得的裝備。請更新應用程式後再試一次。',
'That code comes from build *, newer than this one (*). Update the app, then try again.': '這段代碼來自版本 {0}，比目前的版本（{1}）新。請更新應用程式後再試一次。',
'That code comes from build *, newer than this one (*). Reload this page to update, then try again.': '這段代碼來自版本 {0}，比目前的版本（{1}）新。請重新整理頁面更新後再試一次。',
'This code comes from build *, newer than this app. Update the app first: what this build doesn\'t know is left out.': '這段代碼來自版本 {0}，比這個應用程式新。請先更新應用程式：這個版本不認得的內容會被略過。',
'This code comes from build *, newer than this page. Reload the page first: what this build doesn\'t know is left out.': '這段代碼來自版本 {0}，比這個頁面新。請先重新整理頁面：這個版本不認得的內容會被略過。',
'Learned again, beside *': '再次習得（與{0}並存）', '* won\'t come back as a new skill': '{0}不會再以新技能出現',
'Hold * evolved skills, from any of your trees, as an act boss falls.': '幕首領倒下時擁有 {0} 個已進化技能（任何技能樹都可以）。',
'An * kept aside by an older version is back now: your hero, or retired at Akara.': '之前被舊版本另外保存的{0}回來了：成為你的英雄，或在阿卡拉那裡退役。',
'Recharge: * seconds': '冷卻：{0} 秒', '* hits a cast': '每次施放命中 {0} 次',
'Gives nothing until it lies in the Charms Window': '放進護符欄之前沒有任何效果',
'Gear\'s mana, Damage Taken Goes To Mana too, is Faster Cast Rate here: there\'s no mana pool to fill': '這裡裝備的法力（包含受到的傷害轉為法力）會變成快速施法率：沒有法力值可以補充',
'Akara can start her over at level 1': '阿卡拉可以讓她從等級 1 重新開始', 'Akara can start him over at level 1': '阿卡拉可以讓他從等級 1 重新開始',
'Evolved: Revive\'s skeletons take this option': '已進化：重生的骷髏也套用這個改造',
// 20261027.2：專家模式（Hardcore）
'Hardcore': '專家模式', 'Softcore': '一般模式', 'Dark Wanderer': '黑暗流浪者', 'Destroyer': '毀滅者', 'Conqueror': '征服者',
'Hardcore needs this browser to keep its save.': '專家模式需要這個瀏覽器能保存存檔。', 'Hardcore needs this browser to keep its save': '專家模式需要這個瀏覽器能保存存檔',
'Its storage is turned off or full, or it can\'t keep the game to one tab. Softcore opens instead, and your Hardcore heroes stay as they were.': '瀏覽器的儲存空間被關閉或已滿，或無法讓遊戲只在一個分頁執行。改為開啟一般模式，你的專家模式英雄維持原狀。',
'Safari deletes this site\'s data after 7 days without a visit, and your Hardcore heroes with it. Add the game to your Home Screen, or play Hardcore in the desktop app.': 'Safari 會刪除 7 天沒造訪的網站資料，你的專家模式英雄也會一起被刪除。請把遊戲加到主畫面，或在電腦版應用程式玩專家模式。',
'Hardcore saves stay where they\'re played: they can\'t be exported or imported.': '專家模式的存檔只留在遊玩的地方：不能匯出或匯入。',
'That code says it\'s a Hardcore save. Hardcore saves stay where they\'re played: they can\'t be exported or imported.': '這段代碼是專家模式的存檔。專家模式的存檔只留在遊玩的地方：不能匯出或匯入。',
'Every living Hardcore hero dies, with all she wears and carries, and every item, gold piece, Charsi\'s rank, Terror tier and best time is deleted. Your fallen are remembered, and your Softcore save stays as it is.': '所有活著的專家模式英雄都會死亡，連同身上穿戴和攜帶的一切；所有物品、金幣、恰西的等級、恐懼層和最佳紀錄都會刪除。陣亡的英雄會被紀念，一般模式的存檔維持原狀。',
'Your deeds of valor will be remembered': '你的英勇事蹟將永遠被銘記', 'Not in Hardcore': '專家模式不販售',
'Your level-* * rests for good. A new one starts at level 1.': '你等級 {0} 的{1}永遠安息了。新的英雄從等級 1 開始。',
'Hardcore: a hero who dies is dead for good,': '專家模式：英雄死亡就永遠死去，', 'with all she wears and carries.': '連同身上穿戴和攜帶的一切。',
'Your Softcore heroes, gold and stash stay as they are.': '一般模式的英雄、金幣和儲物箱維持原狀。', 'Nothing crosses between the two.': '兩種模式之間不互通。',
'Click again to go': '再點擊一次前往', 'Tap again to go': '再點一下前往',
'The Dark Wanderer by the bonfire leads to Hardcore': '營火旁的黑暗流浪者會帶你前往專家模式', 'The Dark Wanderer by the bonfire leads back to Softcore': '營火旁的黑暗流浪者會帶你回到一般模式',
'Fell in *, *': '倒在{0}，{1}', 'Slain by *': '被{0}殺死', 'Laid to rest by START OVER': '因「重新開始」而安息', 'Fell': '陣亡', 'Dead': '死亡',
'In Hardcore it stays with her: a new hero starts clean': '專家模式中這會一直跟著她：新的英雄從頭開始',
'She lived in a save edited outside the game': '她所在的存檔曾在遊戲外被修改', 'She lived in a save copied back over a newer one': '她所在的存檔曾被舊存檔蓋回去',
'Save copied back': '存檔被舊存檔蓋回', 'Her save was copied back over a newer one': '她的存檔曾被舊存檔蓋回去',
'Hardcore runs don\'t start on a test page': '專家模式不能在測試頁面開始',
'The leaderboard can\'t be reached. Played now, your * won\'t be ranked again.': '連不上排行榜。現在遊玩的話，你的{0}將不會再列入排名。',
'Send my runs is off. Played now, your * won\'t be ranked again.': '「傳送我的紀錄」已關閉。現在遊玩的話，你的{0}將不會再列入排名。',
'The leaderboard can\'t be reached: played now, your * won\'t be ranked again': '連不上排行榜：現在遊玩的話，你的{0}將不會再列入排名',
'Send my runs is off: played now, your * won\'t be ranked again': '「傳送我的紀錄」已關閉：現在遊玩的話，你的{0}將不會再列入排名',
'Turn Send my runs on before she plays': '請在她遊玩前打開「傳送我的紀錄」', 'Play once the leaderboard can be reached': '請等連上排行榜再玩',
'A run of hers went unseen by the leaderboard': '她有一局沒被排行榜看到', 'Her life record was changed outside the game': '她的生涯紀錄曾在遊戲外被修改',
'Played after her death': '死亡後還被遊玩', 'Played unseen by the leaderboard': '在排行榜沒看到的情況下遊玩',
'A Hardcore hero who plays now won\'t be ranked again': '現在遊玩的專家模式英雄將不會再列入排名',
'The leaderboard holds her life changed or ended': '排行榜認定她的生涯已被改動或已結束', 'Not ranked by the leaderboard': '不列入排行榜排名',
'Each run of yours goes to the leaderboard as it starts and ends': '每一局開始和結束時都會傳送到排行榜',
'In Hardcore, each run\'s start, its acts and its end too, under your hero\'s key': '專家模式還會用英雄的金鑰傳送每一局的開始、各幕和結束',
'She won\'t be ranked again. Tap again': '她將不會再列入排名。再點一下', 'She won\'t be ranked again. Click again': '她將不會再列入排名。再點擊一次',
'Ladder': '天梯', 'Not ranked': '不排名', 'Unranked runs': '不排名的紀錄', 'Unranked heroes': '不排名的英雄', 'Possibly odd': '可能異常',
'Not ranked: her life or climb not seen whole': '不排名：沒看到她完整的生涯或爬層', 'Her life or her climb wasn\'t seen whole: not ranked': '沒看到她完整的生涯或爬層：不排名',
'Her level is past what her seen acts give': '她的等級超過已看到的遊玩能得到的', 'Deepest: Terror *': '最深：恐懼第 {0} 層',
'No clear yet to open': '還沒有可以打開的通關紀錄', 'The leaderboard didn\'t see every run of theirs': '排行榜沒看到他們的每一局',
'No living hero yet': '還沒有活著的英雄', 'No hero yet': '還沒有英雄', 'The first Hardcore run comes here': '第一筆專家模式紀錄會出現在這裡',
'Living only': '只看活著的', 'Show the dead too': '也顯示陣亡的', 'Show the living alone': '只顯示活著的',
'Your runs don\'t rank': '你的紀錄不會列入排名', 'Your runs won\'t rank': '你的紀錄將不會列入排名', 'Your runs rank': '你的紀錄會列入排名',
'Your * ranks while the leaderboard sees her every run': '只要排行榜看到每一局，你的{0}就會列入排名',
'Each run checks in as it starts and out as it ends': '每一局開始時登記、結束時回報',
// 20261027.3：身上的負面狀態、剩餘復活次數、離開確認、阿卡拉賣藥水、平衡改動提示
'Poisoned': '中毒', 'You cannot move': '你無法移動',
'# poison damage a second': '每秒 {0} 毒素傷害', 'Slowed by the cold': '因寒冷而緩速', 'Damage Reduced -#%, and slowed': '傷害減少 -{0}%，並且緩速', '#% slower': '減慢 {0}%', 'Caught in a web': '被蛛網困住',
'Your skills recharge later': '你的技能冷卻時間變長', '# seconds left': '剩餘 {0} 秒', 'Resurrects left: #': '剩餘復活：{0}',
'Exit the game?': '要離開遊戲嗎？', 'Your heroes, items and gold are saved.': '你的英雄、物品和金幣都已保存。', 'Press again to exit': '再按一次離開',
'Trade': '交易', 'Potions': '藥水', 'Potions for your next run\'s belt': '下一局放進腰帶的藥水',
'Click a potion to buy it': '點擊藥水購買', 'Tap a potion to see it': '點一下藥水查看', 'Tap a potion, then tap it again': '點一下藥水，再點一下購買',
'Antidote Potion': '解毒藥水', 'Thawing Potion': '解凍藥水', 'Cures poison': '解除中毒', 'Cures freezing and chill': '解除冰凍和冰冷',
// 解毒／解凍藥水說明的另外三行不在字串表裡（遊戲寫死英文）
'For # seconds': '持續時間 {0} 秒', 'Poison Resist +#%': '毒素抗性 +{0}%', 'Cold Resist +#%': '冰寒抗性 +{0}%',
'+#% to Maximum Poison Resist': '+{0}% 最大毒素抗性',
'No room in your belt for that': '腰帶沒有空位放這個', 'In your belt next run': '下一局放進腰帶', 'In your belt next run: # of #': '下一局放進腰帶：{0}／{1}',
'On Normal a Healing Potion, on Nightmare a Greater, on Hell and Terror a Super': '普通難度是治療藥水，惡夢是強效治療藥水，地獄和恐懼層是超級治療藥水',
'One of your Terror tiers has No Potions in the Belt: they wait for a run that can drink them': '你有一個恐懼層帶有「腰帶不能放藥水」：藥水會留到能喝的那一局',
'Nothing more until your next run': '下一局之前不能再買了',
'Balance changed: click to reload, or your Terror runs stop counting': '平衡已改動：點擊重新載入，否則你的恐懼層紀錄不會列入計算',
'Balance changed: tap to reload, or your Terror runs stop counting': '平衡已改動：點一下重新載入，否則你的恐懼層紀錄不會列入計算',
// 2026-10-26 遊戲改版（build 20261026.1／.2）新增的字串
// 恐懼層波數、跳層
'Cleared in *': '{0} 內通關', 'Terror * is open.': '恐懼第 {0} 層已開放。', 'Terror * is open, * tiers ahead.': '恐懼第 {0} 層已開放，跳過 {1} 層。',
'A replay opens no tier. Terror * stays open.': '重玩不會開放新的層。恐懼第 {0} 層維持開放。', '+* under *': '{1} 內 +{0}', '+1 slower': '較慢 +1',
'All five acts in *': '五幕全部在 {0} 內完成', 'Terror starts again': '恐懼層重新開始',
'Terror tiers now come in nine waves of monsters, then the boss. Every hero climbs again from tier 1, and the Terror leaderboard starts empty. Your heroes keep their levels, builds and gear.': '恐懼層現在是九波怪物，最後才是首領。每位英雄都從第 1 層重新攀升，恐懼層排行榜也清空重來。英雄的等級、技能配置和裝備都會保留。',
'Wave # of # · # left': '第 {0}／{1} 波 · 剩 {2} 隻',
// 20261026.3／.4：恐懼層波數與時限
'Wave # of # · # left · # elite': '第 {0}／{1} 波 · 剩 {2} 隻 · 精英 {3}', 'Wave # of # · # left · # elites': '第 {0}／{1} 波 · 剩 {2} 隻 · 精英 {3}',
'Wave # of # · # elite left': '第 {0}／{1} 波 · 剩精英 {2}', 'Wave # of # · # elites left': '第 {0}／{1} 波 · 剩精英 {2}',
'Time ran out': '時間到了', 'One minute left to clear the tier': '只剩一分鐘可以通關這一層', 'A Terror tier\'s boss must fall within 10 minutes': '恐懼層的首領必須在 10 分鐘內打倒',
// 20261026.4：改寫的技能改造說明
'It fires 2 more arrows, but each deals 73% of the damage.': '多射出 2 支箭，但每支只造成 73% 的傷害。',
'Half its damage is cold damage, which chills and hurts monsters immune to fire.': '一半傷害轉為冰寒傷害，會造成冰凍，也能傷害火焰免疫的怪物。',
'Half its damage is cold damage, which chills and hurts monsters immune to lightning.': '一半傷害轉為冰寒傷害，會造成冰凍，也能傷害閃電免疫的怪物。',
'Half its damage is cold, which chills and hits fire immunes, and it deals 8% more damage.': '一半傷害轉為冰寒，會造成冰凍、能打火焰免疫的怪物，傷害增加 8%。',
'Each arrow deals 40% more damage to a chilled monster and 20% less to the rest.': '每支箭對被冰凍的怪物傷害增加 40%，對其他怪物減少 20%。',
'Each arrow leaves a trail of frost that chills monsters as long as the arrow does. It deals 5% less damage.': '每支箭留下一道冰霜軌跡，冰凍怪物的時間和箭本身一樣長。傷害減少 5%。',
'Half her damage is cold damage, which chills and hurts monsters immune to physical damage. She deals 45% more.': '她的一半傷害轉為冰寒傷害，會造成冰凍，也能傷害物理免疫的怪物。她的傷害增加 45%。',
'Half its damage is fire damage, which hurts monsters immune to cold. Its freeze is 40% shorter.': '一半傷害轉為火焰傷害，也能傷害冰寒免疫的怪物。凍結時間縮短 40%。',
'Half its damage is cold damage, which chills and hurts monsters immune to physical damage. It deals 45% more damage.': '一半傷害轉為冰寒傷害，會造成冰凍，也能傷害物理免疫的怪物。傷害增加 45%。',
'Its trail and burst burn with fire damage instead of poisoning, which hurts monsters immune to poison.': '軌跡和爆炸改為造成火焰傷害而不是毒素，也能傷害毒素免疫的怪物。',
'Half its damage is fire damage, which hurts monsters immune to cold.': '一半傷害轉為火焰傷害，也能傷害冰寒免疫的怪物。',
'Half its damage is fire damage, which hurts monsters immune to lightning.': '一半傷害轉為火焰傷害，也能傷害閃電免疫的怪物。',
'It leaves burning ground twice the size for 4 seconds instead of 3. The blast deals 30% less damage.': '留下兩倍大的燃燒地面，持續 4 秒而不是 3 秒。爆炸傷害減少 30%。',
'Each web crawls onto the nearest monster, stays with the pack and deals 20% more damage.': '每張網爬到最近的怪物身上，跟著怪物群移動，傷害增加 20%。',
'Half its damage is lightning damage, which hurts monsters immune to physical damage. It deals 22% less.': '一半傷害轉為閃電傷害，也能傷害物理免疫的怪物。傷害減少 22%。',
'It drains every third blow instead of every fourth, each drain as hard and healing as much.': '每第 3 擊就吸取一次，而不是第 4 擊，每次吸取的傷害和回復量不變。',
'Each of the first 3 blows bursts in fire for 35% of the burst. The fourth sets the ground burning without a burst.': '前 3 擊各引發一次火焰爆炸，造成爆炸傷害的 35%。第 4 擊讓地面燃燒，不會爆炸。',
'It fires 4 times instead of 5. As it ends, it blows up a corpse and bursts in a lightning nova for 60% of a shot.': '發射 4 次而不是 5 次。結束時引爆一具屍體，並放出閃電新星，造成一發的 60%。',
'It throws 4 blades that fly about a third as far and back, cutting both ways, for 18% less damage.': '擲出 4 把刀刃，飛出約三分之一的距離後飛回來，來回都會切割，傷害減少 18%。',
'The first 3 blows let go nothing, and the fourth lets go all four blows\' meteor, lightning and ice at once, at 110%.': '前 3 擊不釋放任何東西，第 4 擊一次釋放四擊份的隕石、閃電和寒冰，威力 110%。',
'Each of the first 3 blows zaps the nearest other monster for 20% of the release.': '前 3 擊各電擊最近的另一隻怪物，造成釋放傷害的 20%。',
'The release deals at least 22% more to its target and 35% less to the monsters around it. It makes no ice cubes.': '釋放時對目標傷害至少增加 22%，對周圍怪物減少 35%。不會產生冰塊。',
'Half its damage is fire damage, which hurts monsters immune to cold. It deals 10% less.': '一半傷害轉為火焰傷害，也能傷害冰寒免疫的怪物。傷害減少 10%。',
'Half its damage is lightning damage, which hurts monsters immune to physical damage. It deals 25% less.': '一半傷害轉為閃電傷害，也能傷害物理免疫的怪物。傷害減少 25%。',
'Its fire also burns on its target for 2 seconds, for 25% more damage.': '火焰還會在目標身上燃燒 2 秒，多造成 25% 的傷害。',
'It kicks twice, each kick dealing 55% of the damage.': '踢擊兩次，每次造成 55% 的傷害。',
'It blasts twice, a second apart, for 66% then 33% of the damage. Each blast stuns for 1 second.': '間隔 1 秒爆炸兩次，分別造成 66% 和 33% 的傷害。每次爆炸暈眩 1 秒。',
'When slain, your shadow master lets go its fire, lightning and ice bursts at once.': '你的支配影子被殺時，一次釋放火焰、閃電和寒冰爆炸。',
'It knocks its target 4 times as far. If it survives, up to 3 monsters it lands beside take 60% of the blow.': '把目標擊退 4 倍遠。如果目標沒死，落點旁最多 3 隻怪物承受這一擊的 60%。',
'It howls again 2 seconds later, and monsters flee as long as from the first. It takes 20% longer to recharge.': '2 秒後再嚎叫一次，怪物逃跑的時間和第一次一樣長。冷卻時間增加 20%。',
'It reaches 80% farther, but the extra damage monsters take is 15% lower.': '範圍遠 80%，但怪物額外承受的傷害降低 15%。',
'As it falls, it bursts for 168 damage, more with Attack Damage, out to twice its reach. It stands for 40% less time.': '倒下時在兩倍範圍內爆炸，造成 168 傷害（攻擊傷害越高越多）。存在時間縮短 40%。',
'It deals 50% more damage below 40% life, and 5% less above.': '生命低於 40% 時傷害增加 50%，高於時減少 5%。',
'The axes fly a third as far, through every monster and back, but each hit deals 42% of the damage.': '斧頭只飛三分之一的距離，穿過所有怪物後飛回來，但每次命中只造成 42% 的傷害。',
'It works only near where you cast it, with 50% more damage reduction and added life. Stepping away loses that life.': '只在施放地點附近有效，傷害減免和增加的生命多 50%。離開那裡就會失去增加的生命。',
'It adds no life, but your blows steal 4% of their damage as life, less on Nightmare and Hell.': '不增加生命，但你的攻擊會偷取 4% 的傷害轉為生命，惡夢和地獄難度偷得較少。',
'Each time it renews it heals 25% of your life, but its added life is halved.': '每次重新生效時回復你 25% 的生命，但增加的生命減半。',
'Half its damage is fire damage, which hurts monsters immune to cold. Each shard leaves a small fire where it ends.': '一半傷害轉為火焰傷害，也能傷害冰寒免疫的怪物。每片碎片在停下的地方留下一小團火。',
'Each boulder rolls 40% as far, then back toward you, hitting again. It deals 48% less damage and doesn\'t burst.': '每顆巨石只滾 40% 的距離，再滾回你這邊，再命中一次。傷害減少 48%，也不會爆炸。',
'Each rock leaves burning ground for 2 seconds, but deals 25% less damage.': '每顆岩石留下燃燒地面 2 秒，但傷害減少 25%。',
'The storm strikes every 2 seconds for 2 seconds\' damage, knocking monsters back, those near its edge out of it.': '風暴每 2 秒打擊一次，造成 2 秒份的傷害並擊退怪物，邊緣附近的怪物會被推出風暴外。',
'It returns 2.5 times the damage while you are below 40% life, and 20% less above.': '你的生命低於 40% 時反彈 2.5 倍傷害，高於時減少 20%。',
'It returns damage to up to 6 monsters in reach instead of 3, each taking three quarters.': '把傷害反彈給範圍內最多 6 隻怪物而不是 3 隻，每隻承受四分之三。',
'Half its damage is lightning, which physical immunes take and most monsters resist less. It deals 18% less damage.': '一半傷害轉為閃電，物理免疫的怪物也會受傷，大多數怪物對閃電的抗性也較低。傷害減少 18%。',
'Its fire half is cold instead, which chills and hits fire immunes. Its physical half stays.': '火焰的那一半改為冰寒，會造成冰凍、能打火焰免疫的怪物。物理的那一半不變。',
'As a cage crumbles, the monster still inside takes a level 1 Bone Spear hit. Cages hold 30% less time.': '牢籠崩塌時，還在裡面的怪物會受到一次等級 1 骨矛的傷害。牢籠持續時間縮短 30%。',
'Bone walls ring you for 2 seconds instead once a monster comes near, and no monster can come through them.': '改為在怪物靠近時，用骨牆圍住你 2 秒，任何怪物都無法穿過。',
'It also heals you a quarter of what it takes off their blows on you.': '還會回復你生命，回復量是它從怪物攻擊中減掉的傷害的四分之一。',
'It curses only the toughest monster nearby, which takes back 2.5 times as much of its melee blows.': '只詛咒附近最強的一隻怪物，牠的近戰攻擊會反彈 2.5 倍給自己。',
'Its blow deals 25% more to its target and the same around it, and it has 50% more life.': '攻擊對目標傷害增加 25%，對周圍不變，生命增加 50%。',
'It bursts half as wide, for 60% more poison, and needs a corpse twice as close to a monster.': '爆炸範圍只有一半，毒素增加 60%，屍體要離怪物近一倍才行。',
'The curse stays on the ground for 6 seconds and curses monsters that walk in. Its radius is 15% smaller.': '詛咒留在地面 6 秒，走進來的怪物都會被詛咒。半徑縮小 15%。',
'It raises a bone totem by the nearest pack instead, drawing the pack in for 4 seconds. No monster turns on another.': '改為在最近的怪物群旁立起骨頭圖騰，把怪物群吸引過去 4 秒。怪物不會互相攻擊。',
// 遊戲 20261030.1：訓練場、裝備施放的技能、傳送門、抗性上限提示
'It raises a bone totem by a pack a little way off instead, drawing it in for 4 seconds. No monster turns on another.': '改為在稍遠的怪物群旁立起骨頭圖騰，把牠們吸引過去 4 秒。怪物不會互相攻擊。',
'#% before the cap: #% over it': '未計上限 {0}%：超過上限 {1}%',
'Tap again to put them in': '再點一下放入收藏',
'Cast by your gear': '由裝備施放', 'Level # (+# from gear)': '等級 {0}（裝備 +{1}）',
'With no monster beside you, you blink to the nearby pack. It recharges in #s.': '身旁沒有怪物時，你會瞬移到附近的怪物群。冷卻 {0} 秒。',
'Training Ground': '訓練場', "Beat Hell's Baal to open": '擊敗地獄難度的巴爾後開放',
'Target dummies that never attack, to measure your damage': '不會攻擊的訓練假人，用來測量你的傷害',
'No experience, drops or deaths, and nothing for the ladder': '沒有經驗值、掉落和死亡，也不計入天梯',
'Dummies: #': '假人數量：{0}', 'Dummies: A boss': '假人數量：一隻首領', 'Next: #': '下一個：{0}', 'Next: A boss': '下一個：一隻首領', 'Target: *': '目標：{0}', 'A boss': '一隻首領',
'Reset the meter': '重設傷害統計', 'Since reset': '重設以來', 'Back to the camp': '回到營地',
'Back to the camp. Your gear stays as you left it; nothing else here is kept.': '回到營地。裝備會維持你換好的樣子，這裡的其他東西都不會保留。',
'Immune to nothing': '沒有免疫', 'Immune to * and *': '免疫{0}和{1}', 'Immune to *, * and *': '免疫{0}、{1}和{2}', 'Immune to *, *, * and *': '免疫{0}、{1}、{2}和{3}',
'Stand still in the portal a moment, or click it, to go through': '在傳送門裡站著不動一下，或點擊傳送門，就能通過',
'Stand still in the portal a moment, or tap it, to go through': '在傳送門裡站著不動一下，或點一下傳送門，就能通過',
'Stand still in the portal a moment, or press interact, to go through': '在傳送門裡站著不動一下，或按互動鍵，就能通過',
'Moved to the Charms window (H)': '已移到護符欄（H）',
"+#% chance to block a monster's hit": '格擋怪物攻擊的機率 +{0}%',
'Revived monsters deal 20% less damage. Each bursts as it dies, hitting the 4 nearest for 22% of its kind\'s life.': '復活的怪物傷害減少 20%。每隻死亡時會爆炸，對最近的 4 隻怪物造成同種怪物生命 22% 的傷害。',
'It costs 3% of your life and is used down to 20% life. It deals 0.8% more damage for each 1% of life you\'re missing.': '消耗你 3% 的生命，生命降到 20% 前都能使用。每損失 1% 生命，傷害增加 0.8%。',
'It can convert a champion too, one at a time beside the others. It takes 25% longer to recharge.': '也能轉換冠軍怪物，一次一隻，和其他轉換的怪物並存。冷卻時間增加 25%。',
'Each lightning strikes twice, a moment apart, for 60% each, 20% more in all. Each strike sends out 4 holy bolts.': '每道閃電間隔片刻打擊兩次，每次 60%，合計多 20%。每次打擊射出 4 發神聖彈矢。',
'It charges 5 times, each blow dealing 25% less damage. The holy burst at each stop keeps its full damage.': '衝鋒 5 次，每次攻擊傷害減少 25%。每次停下時的神聖爆裂維持完整傷害。',
'Half its damage is lightning damage, and it deals 22% less damage.': '一半傷害轉為閃電傷害，傷害減少 22%。',
'The blast comes each time you block, at most every 0.8 seconds instead of 4, each for 45% of the damage.': '每次格擋都會引發爆炸，最多每 0.8 秒一次而不是 4 秒，每次造成 45% 的傷害。',
'An elite or a boss in reach takes two blows of 60% each, in place of the other targets. Those beside still take half.': '範圍內有精英或首領時，改為對牠打兩下，每下 60%，取代其他目標。旁邊的怪物仍承受一半。',
'Each blow is wholly the element its target resists least. It deals 5% less damage.': '每次攻擊全部轉為目標抗性最低的元素。傷害減少 5%。',
'The shockwave runs in a line behind the monster instead, for 50% instead of 20%.': '震波改為在怪物後方沿直線延伸，造成 50% 而不是 20%。',
'Half its bash and shockwave damage is lightning damage, and it deals 22% less damage.': '重擊和震波的一半傷害轉為閃電傷害，傷害減少 22%。',
'The sweep opens wounds that deal 60% of the blow over 3 seconds, instead of 30% at once.': '橫掃造成傷口，在 3 秒內造成這一擊的 60%，而不是一次造成 30%。',
'Your monsters from Conversion also get its full bonus, but yours is 10% lower.': '轉換來的怪物也得到完整加成，但你的加成降低 10%。',
'It reaches half as far, but the ground you walk on burns at its full damage for 2 seconds, and the burns add up.': '範圍只有一半，但你走過的地面會以完整傷害燃燒 2 秒，燃燒效果可以疊加。',
'It is 10% weaker, but you can\'t be chilled or frozen while you have it.': '效果減弱 10%，但開著時你不會被冰凍或凍結。',
'It is twice as strong below 50% life, and 15% weaker above.': '生命低於 50% 時效果加倍，高於時減弱 15%。',
'Monsters keep it for 3 seconds after leaving it, but it lowers resistances 10% less.': '怪物離開後效果仍持續 3 秒，但降低的抗性少 10%。',
'Monsters that hit you with physical missiles also take back half as much.': '用物理投射物打你的怪物也會被反彈一半的傷害。',
'Its chance is 10% lower, but its critical strikes stun for 0.4 seconds.': '機率降低 10%，但致命一擊會暈眩 0.4 秒。',
'It is twice as strong below 40% life, and 15% weaker above.': '生命低於 40% 時效果加倍，高於時減弱 15%。',
'It is 25% weaker, but each melee blow on you knocks its attacker back.': '效果減弱 25%，但近戰攻擊你的怪物都會被擊退。',
'It also heals your monsters from Conversion 4% of their life each second, but heals you 10% less.': '也會每秒回復轉換來的怪物 4% 的生命，但你的回復量減少 10%。',
'It gives 20 points less resistance, but 10% of the fire damage you take heals you.': '抗性少 20 點，但你受到的火焰傷害有 10% 會轉為回復生命。',
'It gives 20 points less resistance, but 10% of the cold damage you take heals you.': '抗性少 20 點，但你受到的冰寒傷害有 10% 會轉為回復生命。',
'It gives 20 points less resistance, but 10% of the lightning damage you take heals you.': '抗性少 20 點，但你受到的閃電傷害有 10% 會轉為回復生命。',
'It gives 50% more resistance below 40% life.': '生命低於 40% 時抗性增加 50%。',
'The sparks circle you for 1.5 seconds, striking monsters that come near, then fly off. They deal 12% less damage.': '電花繞著你轉 1.5 秒，打擊靠近的怪物，然後飛出去。傷害減少 12%。',
'The field stays on you for 3 seconds, and each monster that walks in loses life too. It takes 30% longer to recharge.': '力場跟著你 3 秒，走進來的怪物也會損失生命。冷卻時間增加 30%。',
'Monsters near the spot you leave freeze for 0.25 seconds in Hell and Terror. It takes 30% longer to recharge.': '在地獄和恐懼層，你離開的位置附近的怪物會凍結 0.25 秒。冷卻時間增加 30%。',
'One bolt strikes the toughest monster 5 times, the next once it dies, each chaining to 4 more. It deals 50% less damage.': '一道閃電打擊最強的怪物 5 次，牠死了就換下一隻，每次再連鎖 4 隻。傷害減少 50%。',
'Its first strike always hits the toughest monster in reach. Its strikes cover 61% less ground but deal 40% more damage.': '第一擊一定打中範圍內最強的怪物。打擊範圍縮小 61%，但傷害增加 40%。',
'A second wall crosses the first, and each deals 55% of the damage.': '第二道牆和第一道交叉，每道造成 55% 的傷害。',
// 20261026.3：快速施法率總和與上限
'+#% Faster Cast Rate: skills recharge #% faster for you now': '+{0}% 快速施法率：目前技能冷卻快 {1}%', '+#% Faster Cast Rate: nothing for you now, at your cast rate cap': '+{0}% 快速施法率：已達施法速度上限，目前沒有效果',
'Adds +#% mana regeneration as Faster Cast Rate: skills recharge #% faster for you now': '法力恢復 +{0}%，等同快速施法率：目前技能冷卻快 {1}%',
'Adds +#% mana regeneration as Faster Cast Rate: nothing for you now, at your cast rate cap': '法力恢復 +{0}%，等同快速施法率：已達施法速度上限，目前沒有效果',
'From gear, half its Increased Attack Speed, its mana and the card': '來自裝備、裝備攻擊速度的一半、裝備的法力和卡片', 'From gear, half its Increased Attack Speed, its mana and the card, and Meditation': '來自裝備、裝備攻擊速度的一半、裝備的法力和卡片，以及冥思',
'Every skill and attack recharges in * of its time': '所有技能和攻擊的冷卻時間為原本的 {0}', 'Your skills\' hastes: ×# on top, under the same cap': '技能的加速效果：再 ×{0}，同一個上限',
'Charsi\'s ranks: +#% on top, and on the cap': '恰西的等級：再 +{0}%，上限也提高同樣的量', 'Your cap: * shorter, reached at +*% Faster Cast Rate': '你的上限：縮短 {0}，在 +{1}% 快速施法率時達到',
'Your cap: * shorter, reached by your skills\' hastes alone': '你的上限：縮短 {0}，光靠技能的加速效果就能達到', '+#% of it is past your cap and does nothing now': '其中 +{0}% 超過上限，目前已達上限',
'Adds +#% Faster Cast Rate: half as much, in the same total': '快速施法率 +{0}%：效果一半，計入同一個總和', 'Skills and attacks share that one speed and one cap': '技能和攻擊共用同一個速度和同一個上限',
'Adds +#% mana regeneration as Faster Cast Rate': '法力恢復 +{0}%，等同快速施法率', '*: skills recharge *% faster for you now': '{0}：目前技能冷卻快 {1}%', '*: nothing for you now, at your cast rate cap': '{0}：已達施法速度上限，目前沒有效果',
'*% Chance to cast level * * when you Kill an Enemy (*s cooldown)': '擊殺敵人時有 {0}% 機率施放等級 {1} 的{2}（冷卻 {3} 秒）',
'*% Chance to cast level * * when struck (*s cooldown)': '被擊中時有 {0}% 機率施放等級 {1} 的{2}（冷卻 {3} 秒）',
'*% Chance to cast level * * on striking (*s cooldown)': '擊中時有 {0}% 機率施放等級 {1} 的{2}（冷卻 {3} 秒）',
'*% Chance to cast level * * on attack (*s cooldown)': '攻擊時有 {0}% 機率施放等級 {1} 的{2}（冷卻 {3} 秒）',
// 物品過濾、收藏
'KEEP': '保留', 'Leaves magic items except charms on the floor, unnamed': '護符以外的魔法物品留在地上，不顯示名稱',
'Sells magic items except charms as you pick them up': '撿起護符以外的魔法物品時直接賣掉', 'Sells magic and rare items except charms as you pick them up': '撿起護符以外的魔法和稀有物品時直接賣掉',
'Sells what isn\'t for your class, except charms': '賣掉不是你職業用的物品（護符除外）', 'Keeps only charms and the rares your class can use': '只保留護符和你職業能用的稀有物品',
'Magic charms. At KEEP no other line hides or sells them': '魔法護符。設成「保留」時，其他規則不會隱藏或賣掉它們',
'KEEP wins over HIDDEN and SELL. Otherwise the strictest line wins': '「保留」優先於「隱藏」和「出售」。其他情況以最嚴格的規則為準',
'IN MY COLLECTION': '已收藏', 'A second copy may roll better than the one kept': '第二件的數值可能比收藏的那件更好',
'Not in your collection': '尚未收藏', 'In your collection': '已收藏', 'Magic and rare items of this kind': '這類的魔法和稀有物品',
'It never hides or sells new uniques, quest items or what you drop. Charsi\'s Buy Back keeps what\'s sold': '不會隱藏或賣掉新的獨特物品、任務道具或你自己丟下的東西。賣掉的物品可以在恰西的「回購」買回來',
'STAT RANGES': '屬性範圍', 'Shows roll ranges, as Alt does': '顯示屬性可能的數值範圍，跟按住 Alt 一樣', 'Search the stash': '搜尋儲物箱',
// 排行榜驗證
'Akara\'s re-draft gives back a legit hero\'s, free': '在阿卡拉免費重新抽選，會還原成合規英雄的點數',
'Sent without its climb history': '傳送時沒有附帶攀升紀錄', 'The tier below was never recorded': '下面一層從來沒有紀錄', 'Climb history edited': '攀升紀錄被修改過',
'Play time doesn\'t match the climb': '遊玩時間跟攀升紀錄對不上', 'Clear times don\'t match the climb': '通關時間跟攀升紀錄對不上',
'Far stronger than any other of its class': '遠比同職業的其他紀錄強', 'Wears an item her save couldn\'t have had then': '穿著當時存檔裡不可能有的物品',
'Loaded from a save made before a death': '從死亡前的存檔讀取', 'Not ranked: climb not verified': '不列入排名：攀升未經驗證',
'Wearing a not legit item': '穿著不合規的物品', 'Too many stat points': '屬性點數太多', 'Too many skill points': '技能點數太多',
'An earlier hero is not legit': '先前的英雄不合規', 'Another hero is not legit': '另一位英雄不合規', 'Save edited outside the game': '存檔在遊戲外被修改過',
'Runs not sent to the leaderboard': '紀錄不會傳送到排行榜',
// 遊戲檔案、存檔
'Missing from your files: *': '你的檔案裡沒有：{0}', 'Extract again from a Diablo II with Lord of Destruction\'s files (d2exp.mpq)': '請從有毀滅之王檔案（d2exp.mpq）的暗黑破壞神 II 重新擷取',
'An older version played your save for a while and could not keep everything on your items or Charsi\'s wares. It was kept aside, and is back now.': '舊版遊戲曾經讀過你的存檔一段時間，沒辦法保留物品和恰西貨品上的所有內容。那些內容先另外保存起來，現在已經恢復了。',
'The *\'s art didn\'t load. Try again in a moment': '{0}的圖像沒有載入。請稍後再試一次',
// 德魯伊變身
'A werewolf with +#% life, you claw # every #s, +#% Critical Strike.': '變成狼人，+{0}% 生命，每 {2} 秒爪擊 {1}，+{3}% 致命一擊。',
'A werebear with +#% life, you take #% less physical damage, splashing #.': '變成熊人，+{0}% 生命，受到的物理傷害減少 {1}%，濺射 {2}。',
'As a werewolf, you strike all in reach # times every #s for # each.': '以狼人形態每 {1} 秒攻擊範圍內所有目標 {0} 次，每次 {2}。',
'As a werebear you hit for # plus # a charge, up to #. Full charges stun.': '以熊人形態攻擊 {0}，每層充能多 {1}，最多 {2} 層。充能滿時會暈眩。',
'You Maul as a werebear, every #rd swing stomping the blow out to all within # yards, stunning.': '以熊人形態槌擊，每第 {0} 次揮擊踐踏地面，把這一擊傳給 {1} 碼內所有怪物並暈眩。',
'Your wereforms have +#% more life, +#% a level.': '變身形態生命 +{0}%，每級再 +{1}%。', 'Your wereforms have +#% more life.': '變身形態生命 +{0}%。',
// 隱藏任務「破碎之光」
'The Shattered Light': '破碎之光', 'Tyrael\'s Wings': '泰瑞爾之翼', 'Tyrael': '泰瑞爾', 'Shards found: * of 10': '已找到碎片：{0}／10',
'A shard of light found. Others lie scattered across the world, off the beaten path.': '找到一塊光之碎片。其他碎片散落在世界各地，人跡罕至的地方。',
'Bring the Shattered Light to the Worldstone Chamber, and defeat the Lord of Destruction there.': '把破碎之光帶到世界之石大殿，在那裡打敗毀滅之王。',
'A shard of pale light, warm as a living thing. It hums of something vast, and broken. There are others; you can feel them, far across Sanctuary.': '一塊蒼白的光之碎片，溫暖得像活物。它低鳴著某種巨大而破碎的東西。還有其他碎片，你能感覺到它們，遠在庇護所的另一端。',
'The two shards sing to each other, faintly.': '兩塊碎片微弱地互相吟唱。',
'Three. The light within them stirs, restless, as if it remembers a shape.': '三塊。其中的光不安地翻動，彷彿記得某個形體。',
'Four shards. In their glow, for a moment, you glimpse a mountain crowned in fire.': '四塊碎片。在它們的光芒中，你一瞬間瞥見一座頂著烈焰之冠的山。',
'Half the light is gathered. It grows heavier in your hands, longing for its home.': '光已聚集了一半。它在你手中越來越沉，渴望回到它的歸處。',
'The shards whisper of Arreat, of a stone that held the world\'s heart.': '碎片低語著亞瑞特，低語著那塊曾承載世界之心的石頭。',
'Seven. Something watches from beyond the Heavens.': '七塊。有什麼東西正從天堂之外注視著。',
'The light burns brighter in the dark places. It does not fear them.': '光在黑暗之處燃得更亮。它不畏懼黑暗。',
'Nine. One shard more; the others tremble at its absence.': '九塊。還差一塊；其他碎片因它的缺席而顫動。',
'The ten shards blaze as one. They would return to the place where the world\'s heart was broken.': '十塊碎片合而為一地燃燒。它們想回到世界之心破碎的地方。',
'You have gathered what was scattered, nephalem. This light was mine before it was the world\'s. Wear it, and let the darkness see you coming.': '奈非天，你把散落的東西聚集起來了。這道光在屬於世界之前，原本屬於我。戴上它，讓黑暗看見你的到來。',
// 阿卡拉重新抽選、赦免徽記
'Cain\'s Tomes and Books come back to read again': '凱恩的典籍和技能之書會還給你，可以再讀一次', 'Each paid re-draft costs * more, up to * gold': '每次付費重新抽選貴 {0}，最多 {1} 金幣',
'A free re-draft, Tomes and Books too, in a run or the camp': '免費重新抽選一次（連典籍和技能之書也還給你），一局中或營地都能用',
'Open the character screen (C) in a run or the camp to use it': '在一局中或營地打開角色畫面（C）使用', 'Tap Character in a run or the camp to use it': '在一局中或營地點一下「角色」使用',
'Use it after your first Baal kill': '第一次打倒巴爾之後才能使用', 'Use it in your hero\'s own run or in the camp': '在這位英雄自己的一局中或營地使用',
// 選單、按鈕
'PLAY': '開始遊戲', 'Play': '開始遊戲', 'RESUME': '繼續遊戲', 'SAVES': '存檔', 'Your saves': '你的存檔', 'SAVE AND EXIT': '儲存並離開',
'EXIT ANYWAY': '仍要離開', 'VIDEO OPTIONS': '影像選項', 'SHOW ITEMS': '顯示物品', 'SHOW ITEMS: *': '顯示物品：{0}', 'SKILL EFFECTS': '技能特效',
'WEBSITE': '官方網站', 'CREDITS': '製作群', 'NEXT TIER': '下一層', 'CREATE NEW HERO': '建立新英雄', 'SELECT HERO': '選擇英雄',
'DELETE': '刪除', 'YES': '是', 'NO': '否', 'START OVER': '重新開始', 'Start over?': '要重新開始嗎？', 'A fresh start?': '要全新開始嗎？',
'GET THE DESKTOP APP': '下載桌面版', 'Back to game': '回到遊戲', 'Back in your save': '已回到你的存檔',
'Enter to choose': 'Enter 選擇', 'Esc to go back': 'Esc 返回', 'Enter to choose, then press a button - Esc to go back': 'Enter 選擇，然後按下按鍵 - Esc 返回',
'Enter: next tier - T: Charsi\'s wares - Esc: end the run': 'Enter：下一層 - T：恰西的貨品 - Esc：結束這一輪',
'Tap a line to choose': '點一下要選的項目', 'Click for the skill tree (T)': '點擊開啟技能樹（T）', 'Tap again for the skill tree': '再點一下開啟技能樹',
'Shift: all points': 'Shift：全部點數', 'Stat Points': '屬性點數', 'New Stats': '新屬性點', 'Spends new stat points for you': '自動幫你分配新的屬性點',
'+# stat points': '+{0} 屬性點數', '+# stat points to spend': '+{0} 屬性點數可分配', 'Stat points remaining: *': '剩餘屬性點數：{0}', 'Add a point to *': '在{0}加一點',
// 技能等級（舊規則 "{} Level {#}" 會翻成「第 N 層」，那是地圖區域用的）
'Level # to #': '升級至等級 {1}', 'Level # to # (max)': '升級至等級 {1}（最高）', 'Level #': '等級 {0}', 'next level': '下一級',
'Level # / #': '等級 {0} / {1}', 'Level # / # (+# from gear)': '等級 {0} / {1}（裝備 +{2}）', 'Keeps level #': '保持等級 {0}',
'Level # now and # at level #': '現在等級 {0}，角色等級 {2} 時為 {1}', 'from level #': '從等級 {0} 起', 'Evolved from *': '由{0}進化',
'Level # * (#/# Charges)': '等級 {0} {1}（{2}/{3} 次充能）', 'Level # * Aura When Equipped': '裝備時有等級 {0} 的{1}靈氣',
'*: * at level *': '{0}：等級 {2} 時 {1}', '*: * at character level *': '{0}：角色等級 {2} 時 {1}', 'Next * at character level *': '下一個{0}：角色等級 {1}',
'Next rank': '下一級', 'Next rank:': '下一級：', 'Rank *': '第 {0} 級', 'Past rank *': '超過第 {0} 級', 'Past rank *:': '超過第 {0} 級：',
'Remaining': '剩餘', 'Resurrect': '復活', 'Earlier': '更早', 'Latest': '最新', 'Loading…': '載入中…', 'Chest': '寶箱',
'From the chests:': '來自寶箱：', 'Into the stash:': '放進儲物箱：', 'Personal': '個人', 'Shared': '共用', 'No room in this tab': '這個分頁沒有空間',
'Only this hero can reach it': '只有這個英雄拿得到', 'Healing -40%': '治療 -40%', '- ready to evolve': '－可以進化', 'Evolves from *:': '由{0}進化：',
'A note from the developer': '開發者的話', 'Korean translation': '韓文翻譯', 'It takes you when the bar runs out': '量表用完時就會把你帶走',
'Nothing new since your last visit': '上次來訪後沒有新內容', 'Since your last visit': '自上次來訪以來', 'Your hero is saved': '你的英雄已儲存',
'Press the button for it': '請按下要設定的按鍵', 'Button *': '按鍵 {0}', 'Circle': '○', 'Cross': '✕', 'Square': '□', 'Triangle': '△', 'Minus': '−', 'Plus': '＋',
'Units': '單位', 'Floor tiles': '地板', 'Missiles': '投射物', 'Heroes': '英雄', 'Gear': '裝備', 'Interface': '介面', 'Scenery': '場景', 'Title and menus': '標題與選單',
'Sounds and music': '音效與音樂', 'and': '和', 'or': '或', 'Demon': '惡魔', 'max #/#': '滿級 {0}/{1}', 'max #/#,': '滿級 {0}/{1}、', 'Into *:': '進化為{0}：', 'Build *': '版本 {0}',
'Harrogath': '哈洛加斯', 'Harem Level 1': '後宮第 1 層', 'Hratli': '赫拉特利', 'Larzuk': '拉蘇克', 'Patriarch': '族長', 'Matriarch': '女族長',
'toughest monster': '最強的怪物', '# toughest monsters': '{0} 隻最強的怪物', 'monster level #': '怪物等級 {0}', 'One blow took more than half your life': '一擊就打掉你超過一半的生命',
// 恐懼層、營火、一輪的結算
'The Terror tiers are open': '恐懼層已開放', 'the Terror tiers': '恐懼層', 'No tier cleared yet': '還沒有通過任何一層', 'Best tier: #': '最佳層數：{0}',
'TERROR TIER #': '恐懼第 {0} 層', 'Terror tier # cleared': '恐懼第 {0} 層已通過', 'Terror tier #: monster level #': '恐懼第 {0} 層：怪物等級 {1}',
'Tier # is open.': '第 {0} 層已開放。', 'on Terror tier #': '恐懼第 {0} 層', '* on Terror tier *': '{0}，恐懼第 {1} 層',
'Each pays +#% MF · +#% XP · +#% gold': '每項獎勵：尋獲魔法物品 +{0}% · 經驗值 +{1}% · 金幣 +{2}%',
'Each pays ×# drops · +#% MF · +#% XP · +#% gold': '每項獎勵：掉落 ×{0} · 尋獲魔法物品 +{1}% · 經驗值 +{2}% · 金幣 +{3}%',
'More Elite Packs': '更多精英怪群', 'No Potions in the Belt': '腰帶不能放藥水', 'Possessed Champions': '被附身的冠軍怪物', 'Skills never run out of mana here': '在這裡技能永遠不會耗盡法力',
'CONTINUE starts Terror tier * over, at level *. Leaving any other way counts as a death.': '「繼續」會從恐懼第 {0} 層重新開始，等級 {1}。用其他方式離開會算作死亡。',
'From the campfire, TERROR starts your level-* * on tier 1: one act of Hell at monster level *. Clear it to open the next.': '在營火選「恐懼」，會讓你等級 {0} 的{1}從第 1 層開始：一幕地獄，怪物等級 {2}。通過後開放下一層。',
'CONTINUE starts * over from its start, at level *. Your items and gold are kept.': '「繼續」會從{0}的開頭重新開始，等級 {1}。物品和金幣會保留。',
'Act I is not saved: your next run starts anew. Your items and gold are kept.': '第一幕不會存檔：下一輪會重新開始。物品和金幣會保留。',
'and continue the run': '並繼續這一輪', 'Could not start as the hero who beat Baal': '無法以擊敗巴爾的英雄開始', 'Bring it back to Tristram, in a harder world.': '身上持有此物品（不須裝備）：下次進入第一章打倒格瑞斯華爾德會自動開啟奶牛關，恐懼層則必出奶牛關。',
'Saved at the start of *': '{0}開始時存檔', 'Saved at the start of *, level *': '{0}開始時存檔，等級 {1}', 'Saved at the start of * on *': '{1}{0}開始時存檔',
'Saved at the start of * on *, level *': '{1}{0}開始時存檔，等級 {2}', 'Saved at the start of * on Terror *': '恐懼第 {1} 層{0}開始時存檔',
'Saved at the start of * on Terror *, level *': '恐懼第 {1} 層{0}開始時存檔，等級 {2}', 'As *, level *, from Act I': '以{0}，等級 {1}，從第一幕開始',
'Your level-* *': '你等級 {0} 的{1}', '*: your level-* *': '{0}：你等級 {1} 的{2}', '*: a new hero at level 1': '{0}：等級 1 的新英雄',
'Your level-* * can now enter the Terror tiers.': '你等級 {0} 的{1}現在可以進入恐懼層了。', 'Your level-* * can now enter *.': '你等級 {0} 的{1}現在可以進入{2}。',
'From the campfire, * now starts as your level-* *.': '從營火開始，{0}現在會以你等級 {1} 的{2}開始。',
'A new hero starts at level 1. Beat Baal on * to carry your hero into *.': '新英雄從等級 1 開始。在{0}擊敗巴爾，就能把英雄帶進{1}。',
'You cleared * in *, at level *.': '你在 {1} 內通過{0}，等級 {2}。', 'You cleared all five acts* in *, at level *.': '你{0}在 {1} 內通過全部五幕，等級 {2}。',
'The Worldstone is safe. You cleared all five acts* in *, at level *, having slain * monsters. +* gold.**': '世界之石安全了。你{0}在 {1} 內通過全部五幕，等級 {2}，擊殺 {3} 隻怪物。+{4} 金幣。{5}{6}',
'You fell in ** after *, at level *.': '你在{0}{1}倒下，撐了 {2}，等級 {3}。',
'You fell in ** after *, at level *, having slain * monsters. +* gold. *.': '你在{0}{1}倒下，撐了 {2}，等級 {3}，擊殺 {4} 隻怪物。+{5} 金幣。{6}。',
'You fell in ** after *, at level *, having slain * monsters. +* gold (best: *).': '你在{0}{1}倒下，撐了 {2}，等級 {3}，擊殺 {4} 隻怪物。+{5} 金幣（最佳：{6}）。',
'Slain by *\'s *: * * damage': '被{0}的{1}殺死：{2} {3}傷害', 'Slain by *: * * damage': '被{0}殺死：{1} {2}傷害',
'# damage in the last second': '最近 1 秒 {0} 傷害', '# damage in the last # seconds': '最近 {1} 秒 {0} 傷害', '# monsters slain': '擊殺 {0} 隻怪物', 'New best time: *': '新的最佳紀錄：{0}',
'Walk into the portal to *': '走進傳送門前往{0}', 'Walk into the portal to Act #': '走進傳送門前往第 {0} 幕',
// 商店、物品
'Charsi won\'t buy that': '恰西不收購這個', '* won\'t buy that': '{0}不收購這個', '*\'s Wares': '{0}的貨品', '*\'s wares (B)': '{0}的貨品（B）', '*\'s wares (G)': '{0}的貨品（G）',
'Imbue it into a rare': '把它灌注成稀有物品', 'Chipped Gem': '碎裂的寶石', 'Flawed Gem': '瑕疵的寶石', 'Flawless Gem': '無瑕的寶石',
'Minor Healing Potion': '輕微治療藥水', 'Light Healing Potion': '輕型治療藥水', 'Greater Healing Potion': '強效治療藥水', 'Super Healing Potion': '超級治療藥水',
'Required Dexterity:': '需要敏捷：', 'Required Level:': '需要等級：', 'Required Strength:': '需要力量：', 'One-Hand Damage:': '單手傷害：', 'Two-Hand Damage:': '雙手傷害：',
'Average Damage': '平均傷害', 'Absorbs Cold Damage': '吸收冰寒傷害', 'Absorbs Lightning Damage': '吸收閃電傷害', 'all Attributes': '所有屬性',
'Defense vs. Melee': '對近戰防禦', 'Increase Maximum Life': '增加生命上限', 'Heals * Life': '恢復 {0} 生命', 'Regenerate # life per second': '每秒恢復 {0} 生命',
'Repairs # durability per second': '每秒修復 {0} 耐久度', 'Pick things up from #% farther away': '拾取範圍增加 {0}%', '(#/# Charges)': '（{0}/{1} 次充能）', '(+* from gear)': '（裝備 +{0}）',
'to Barbarian Skill Levels': '野蠻人技能等級', 'to Necromancer Skill Levels': '死靈法師技能等級', 'to Paladin Skill Levels': '聖騎士技能等級', 'to Sorceress Skill Levels': '女巫技能等級',
'to Enemy Cold Resistance': '敵人冰寒抗性', 'to Maximum Magic Damage': '最大魔法傷害', 'to Minimum Magic Damage': '最小魔法傷害', 'to Experience Gained': '獲得經驗值',
// 物品屬性：最小／最大傷害、照亮範圍、最大抗性、敵人抗性（照易牙居的說法）
'# to Light Radius': '{0} 照亮範圍', 'to Light Radius': '照亮範圍', 'to Minimum Damage': '最小傷害值', 'to Maximum Damage': '最大傷害值',
'to Minimum Fire Damage': '最小火焰傷害', 'to Maximum Fire Damage': '最大火焰傷害', 'to Minimum Cold Damage': '最小冰寒傷害', 'to Maximum Cold Damage': '最大冰寒傷害',
'to Minimum Lightning Damage': '最小閃電傷害', 'to Maximum Lightning Damage': '最大閃電傷害', 'to Minimum Poison Damage': '最小毒素傷害', 'to Maximum Poison Damage': '最大毒素傷害',
'to Maximum Fire Resist': '最大火焰抗性', 'to Maximum Cold Resist': '最大冰寒抗性', 'to Maximum Lightning Resist': '最大閃電抗性', 'to Maximum Poison Resist': '最大毒素抗性',
'to Enemy Fire Resistance': '敵人火焰抗性', 'to Enemy Lightning Resistance': '敵人閃電抗性', 'to Enemy Poison Resistance': '敵人毒素抗性',
'Bone walls cage the # toughest monsters': '骨牆困住 {0} 隻最強的怪物',
'+# to Bow and Crossbow Skills': '+{0} 弓和十字弓技能', '+# to Combat Skills': '+{0} 戰鬥技能', '+# to Javelin and Spear Skills': '+{0} 標槍和長矛技能',
'+# to Passive and Magic Skills': '+{0} 被動和魔法技能', '+#% to Maximum Cold Resist': '+{0}% 最大冰寒抗性',
// 死靈法師技能樹（照易牙居技能頁：召喚技能／毒素和白骨技能／詛咒技能）
'Poison and Bone Skills': '毒素和白骨技能', '+# to Poison and Bone Skills': '+{0} 毒素和白骨技能',
'Summoning Skills': '召喚技能', '+# to Summoning Skills': '+{0} 召喚技能', 'Curses': '詛咒技能', '+# to Curses': '+{0} 詛咒技能',
'Shape Shifting Skills': '外形變形技能', '+# to Shape Shifting Skills': '+{0} 外形變形技能', '+# to Elemental Skills': '+{0} 元素技能',
'+* to * (* Only)': '+{0} {1}（限{2}）', '*% Chance to cast level * * when you Kill an Enemy': '擊殺敵人時有 {0}% 機率施放等級 {1} 的{2}',
'*% Chance to cast level * * when you Level-Up': '升級時有 {0}% 機率施放等級 {1} 的{2}',
'+#% better chance of magic items per rank': '每級尋獲魔法物品機率 +{0}%', 'Come back at half life once more per run, per rank': '每級：每一輪多一次以一半生命復活',
'+* starting * per rank *': '每級起始{1} +{0}\n{2}', '+#% damage with a bow or claws': '弓或爪 +{0}% 傷害',
'+5% physical damage, none with a bow': '+5% 物理傷害（弓除外）', '+5% physical damage none with a bow': '+5% 物理傷害（弓除外）', 'none with a bow': '弓除外',
'+1% critical strike chance +3% damage with a bow or claws': '+1% 致命一擊機率，弓或爪 +3% 傷害', '+1% chance of a critical strike, +3% damage with a bow or claws': '+1% 致命一擊機率，弓或爪 +3% 傷害',
'Each point past the class\'s: +#% critical strike chance, +#% weapon damage': '超過職業初始值的每一點：+{0}% 致命一擊機率，+{1}% 武器傷害',
'Each point past the class\'s: +#% physical damage': '超過職業初始值的每一點：+{0}% 物理傷害',
'Each point past the class\'s is +#% fire, cold, lightning, poison and magic damage': '超過職業初始值的每一點：+{0}% 火焰、冰寒、閃電、毒素與魔法傷害',
'With this weapon, +#% a point on its blows, as D2\'s weapons give': '使用這把武器時，每點讓攻擊 +{0}%，跟 D2 的武器一樣',
'Its weapon damage goes by the weapon, as D2\'s: all with a bow, none with an axe or a sword': '武器傷害依武器而定，跟 D2 一樣：弓全部適用，斧和劍不適用',
'Adds #% Attack Damage a percent': '每 1% 增加 {0}% 攻擊傷害', 'A level past a #\'s maximum still adds to it, as in D2': '超過{0}上限的等級仍然有效，跟 D2 一樣',
'Two-weapon skills swing or throw with both in turn': '雙武器技能會輪流用兩把武器揮擊或投擲', 'Right hand / left hand: each weapon strikes with its own damage': '右手／左手：每把武器用各自的傷害攻擊',
// 角色畫面說明
'More Defense: less damage from physical hits': '更多防禦：減少物理攻擊的傷害', 'Less damage from physical hits': '減少物理攻擊的傷害',
'Aura: more Defense, less damage from physical hits': '靈氣：更多防禦，減少物理攻擊的傷害', 'Every skill\'s damage a second, all together': '所有技能每秒傷害總和',
'Gear\'s +% Damage and shrines': '裝備的 +% 傷害與神殿', 'Mana from items, leech and kills speeds up casting:': '來自物品、吸取與擊殺的法力會加快施法：',
'Chance a physical hit takes a quarter of the monster\'s life, an eighth of a boss\'s; half that for missiles': '物理攻擊打掉怪物四分之一生命的機率（首領為八分之一；投射物減半）',
'Less damage from physical hits: gear\'s Damage Reduced and Defense, Charsi\'s ranks, skills\' Defense': '減少物理攻擊的傷害：裝備的傷害減少與防禦、恰西的升級、技能的防禦',
'At most 50%, as in D2; fire, cold, lightning, magic and poison go by resistances': '最多 50%，跟 D2 一樣；火焰、冰寒、閃電、魔法和毒素看抗性',
'Of every hit, after skills that take a share off them all (Energy Shield)': '每次受到攻擊時計算，在分攤傷害的技能（能量護盾）之後',
'More damage from weapon skills (arrows, javelins, blows, throws): the weapon\'s damage and gear\'s +% Attack Damage': '武器技能（箭矢、標槍、近戰、投擲）傷害更高：武器的傷害加上裝備的 +% 攻擊傷害',
'On a physical hit it adds with Strength\'s and Dexterity\'s bonus': '物理攻擊時跟力量與敏捷的加成相加',
'On a physical blow it adds with Strength and gear\'s +% Damage, as D2\'s bonuses do': '物理攻擊時跟力量和裝備的 +% 傷害相加，跟 D2 的加成方式一樣',
'Speeds up casting: a quarter of a percent Faster Cast Rate a point': '加快施法：每點 0.25% 快速施法率', 'Speeds up casting: Faster Cast Rate, as what fighting pours in': '加快施法：快速施法率，以及戰鬥中補充的法力',
'Weapon skills and some spells can critically strike: a skill\'s hover shows its chance': '武器技能和部分法術可以致命一擊：滑鼠移到技能上會顯示機率',
'Less fire damage taken': '受到的火焰傷害減少', 'Less cold damage taken': '受到的冰寒傷害減少',
'Less lightning damage taken': '受到的閃電傷害減少', 'Less poison damage taken': '受到的毒素傷害減少',
// 魔法護符（Charm）名稱「前綴 底材 後綴」：前後綴各自翻（後綴的譯名本來就帶「之」）
'* Small Charm *': '{1}{0}小型護符', '* Small Charm': '{0}小型護符', 'Small Charm *': '{0}小型護符',
'* Large Charm *': '{1}{0}中型護符', '* Large Charm': '{0}中型護符', 'Large Charm *': '{0}中型護符',
'* Grand Charm *': '{1}{0}大型護符', '* Grand Charm': '{0}大型護符', 'Grand Charm *': '{0}大型護符',
'Gear\'s +% Damage and shrines: *': '裝備的 +% 傷害與神殿：{0}', 'How much faster the hero runs': '英雄的移動速度加快多少',
'+#% Faster Run/Walk per rank': '每級移動速度加乘 +{0}%',
// 恰西屬性升級：超過上限的級數會把數字乘上去（+20 to 40 → +232 to 464）
'+# to # maximum life': '+{0}～{1} 生命上限', '+#% spell damage': '+{0}% 元素／魔法傷害',
'At most #%, more with +% to Maximum Resist': '最多 {0}%，有 +% 最大抗性時更高', ', after this difficulty\'s #': '，已計入此難度的 {0}', '#% less damage taken': '受到的傷害減少 {0}%',
'-#% to Enemy Resistance: +#% damage, +#% at #% resistance': '-{0}% 敵人抗性：+{1}% 傷害，對 {3}% 抗性時 +{2}%',
'Drops roll their quality by D2\'s own formula: the item first, then its chance to be unique, rare or magic, so uniques and rares are far scarcer and Magic Find counts for more': '掉落物品的品質照 D2 原本的公式決定：先決定物品，再判定是獨特、稀有或魔法，所以獨特和稀有少很多，尋獲魔法物品機率更有價值',
'Terror tiers drop far fewer items: about Hell\'s count, paying instead in better finds through their Magic Find and item level': '恐懼層掉落的物品少很多：大約跟地獄一樣，改成透過尋獲魔法物品機率和物品等級掉出更好的東西',
// 技能說明
'freeze what they hit': '凍結命中的目標', 'freezes what it hits': '凍結命中的目標', ', passing through #': '，穿透 {0} 隻', '# hits': '命中 {0} 次', '* hits a second': '每秒命中 {0} 次',
'* a cast, every * s': '每次施放 {0}，每 {1} 秒', '*: active': '{0}：啟用中', 'Chance a physical hit makes the monster bleed for # seconds': '物理攻擊使怪物流血 {0} 秒的機率',
'A wall of fire across the monsters nearby that burns for #s': '在附近怪物之間燃起一道火牆，持續 {0} 秒', 'A wall of fire across the path ahead that burns for #s': '在前方路上燃起一道火牆，持續 {0} 秒',
'# arrows that burst into freezing ice, # damage around what they hit and a #s chill': '{0} 支箭矢爆成冰凍寒冰，在命中處周圍造成 {1} 傷害並冰冷 {2} 秒',
'# arrows that explode for # damage and leave the ground burning for #s': '{0} 支箭矢爆炸造成 {1} 傷害，地面燃燒 {2} 秒',
'# axes thrown at the monsters around you, # damage each, passing through #': '向周圍怪物投擲 {0} 把斧頭，每把 {1} 傷害，穿透 {2} 隻',
'# blades thrown at the monsters around you, # damage each, passing through one': '向周圍怪物投擲 {0} 把刀刃，每把 {1} 傷害，穿透 1 隻',
'# fire balls at the nearest monsters, bursting on impact for # damage around': '向最近的怪物發射 {0} 顆火球，命中時爆炸對周圍造成 {1} 傷害',
'# fire trails, # yards, at the nearest monster, burning # damage # times a second': '向最近的怪物放出 {0} 道火焰軌跡，長 {1} 碼，每秒燃燒 {3} 次，每次 {2} 傷害',
'# frenzied blows over the monsters in a wide reach (every other at a boss), # damage each': '對大範圍內的怪物狂亂攻擊 {0} 次（首領每隔一次），每次 {1} 傷害',
'# frenzied blows in a wide reach, # damage each, on one monster until it falls; each sweeps #% through those beside it': '在大範圍內狂亂攻擊 {0} 次，每次 {1} 傷害，集中攻擊一隻怪物直到倒下；每擊對旁邊的怪物造成 {2}% 掃擊',
'# guided arrows that hunt through # monsters each, # damage': '{0} 支導引箭矢，每支追擊 {1} 隻怪物，{2} 傷害',
'# javelins that burst into lightning forking to # monsters, # damage each': '{0} 支標槍爆成閃電，分叉擊中 {1} 隻怪物，每道 {2} 傷害',
'# javelins trailing poison that burst into a spreading cloud, # poison over #s to all within #': '{0} 支拖著毒素的標槍爆成擴散毒雲，{3} 範圍內所有目標在 {2} 秒內受到 {1} 毒素傷害',
'# molten boulders roll through all in their path, # damage, knockback, leaving fire': '{0} 顆熔岩巨石滾過路徑上所有目標，{1} 傷害並擊退，留下火焰',
'# of sparks over the nearest pack for #s, # damage # times a second': '在最近的怪群上方放出 {0} 電花，持續 {1} 秒，每秒 {3} 次，每次 {2} 傷害',
'# spikes at the nearest monsters burst for # damage, freezing all in the burst for #s': '向最近的怪物射出 {0} 根冰刺，爆炸造成 {1} 傷害，並冰凍範圍內所有目標 {2} 秒',
'# tornadoes wander the horde, # damage and a stun to each monster they pass': '{0} 道龍捲風在怪群中遊走，對經過的每隻怪物造成 {1} 傷害並暈眩',
'+#% chance to sidestep a monster\'s blow while you stand still': '站著不動時 +{0}% 機率閃避怪物的近戰攻擊',
'+#% chance to sidestep a monster\'s missile while you stand still': '站著不動時 +{0}% 機率閃避怪物的投射物',
'+#% cold damage and take #% less damage': '+{0}% 冰寒傷害，受到的傷害減少 {1}%', '+#% cold damage and +#% to fire, cold and lightning resistance': '+{0}% 冰寒傷害，火焰、冰寒與閃電抗性 +{1}%',
'+#% to all resistances; poison and chill wear off #% faster': '所有抗性 +{0}%；中毒和冰冷持續時間縮短 {1}%',
'+#% to all resistances, #% Damage Reduced; poison and chill wear off #% faster': '所有抗性 +{0}%，傷害減少 {1}%；中毒和冰冷持續時間縮短 {2}%',
'+#% movement speed (up to +#%) and #% shorter cooldowns': '+{0}% 移動速度（最多 +{1}%），冷卻時間縮短 {2}%',
'A blast of the mind over the nearest pack, # damage and a #s stun to all in it': '對最近的怪群發出心靈衝擊，範圍內全部 {0} 傷害並暈眩 {1} 秒',
'A charged thrust at the toughest monster in reach, # damage; # bolts crackle on from it, # each': '對範圍內最強的怪物充能刺擊，{0} 傷害；再迸出 {1} 道電彈，每道 {2}',
'A focused blow at the toughest monster in reach, # damage, splashing # to those beside it': '對範圍內最強的怪物集中一擊，{0} 傷害，旁邊的怪物受到 {1} 濺射',
'A grizzly, # damage a swipe, and the pack +#% damage; with # dire wolves, # spirit wolves and # ravens': '一隻灰熊，每爪 {0} 傷害，同伴傷害 +{1}%；另有 {2} 隻恐狼、{3} 隻靈狼和 {4} 隻烏鴉',
'A rapid volley of # arrows spread over the monsters around you, # damage each': '快速射出 {0} 支箭矢分散射向周圍怪物，每支 {1} 傷害',
'A reckless magic blow at the toughest in reach, # damage; you take #% more for a moment': '對範圍內最強的怪物魯莽魔法一擊，{0} 傷害；短時間內你受到的傷害增加 {1}%',
'A reckless magic blow at the toughest in reach, # damage; you take #% more physical damage while you swing': '對範圍內最強的怪物魯莽魔法一擊，{0} 傷害；揮擊時你受到的物理傷害增加 {1}%',
'A ring of poison out to #: # poison over #s to everything it touches': '向外擴散到 {0} 的毒環：碰到的目標在 {2} 秒內受到 {1} 毒素傷害',
'A sentry fires lightning # times, # damage, and blows up a corpse near it each time for # plus #% of its life': '哨塔發射閃電 {0} 次，{1} 傷害，每次引爆附近一具屍體，造成 {2} 加上屍體生命 {3}% 的傷害',
'A sentry near the nearest pack fires # bursts of # charged bolts, # damage each': '在最近的怪群附近設置哨塔，發射 {0} 輪、每輪 {1} 道充能彈，每道 {2} 傷害',
'A sentry near the nearest pack fires lightning through monsters in line # times, # damage': '在最近的怪群附近設置哨塔，發射直線貫穿怪物的閃電 {0} 次，{1} 傷害',
'A spear thrust at every monster around you in turn (up to #), # damage each': '依序刺擊周圍每隻怪物（最多 {0} 隻），每次 {1} 傷害',
'A thrust at the toughest monster in reach, # damage; lightning chains on through # more, # each': '刺擊範圍內最強的怪物，{0} 傷害；閃電再連鎖 {1} 隻，每隻 {2}',
'A trap near the nearest pack breathes fire at monsters # times, # flames of # damage to all in their path': '在最近的怪群附近設置陷阱，向怪物噴火 {0} 次，{1} 道火焰對路徑上所有目標造成 {2} 傷害',
'A trap near the nearest pack sends out # waves of fire, # damage to all they pass': '在最近的怪群附近設置陷阱，放出 {0} 波火焰，對經過的所有目標造成 {1} 傷害',
'A volcano under the nearest pack for #s, raining burning rocks, # damage each': '在最近的怪群下方召喚火山 {0} 秒，落下燃燒的岩石，每顆 {1} 傷害',
'An orb that sprays chilling ice shards in every direction, # damage each': '向四面八方噴出寒冰碎片的法球，每片 {0} 傷害',
'Aura: +#% cold resistance, and +#% to its maximum (#%) a level learned; chill wears off #% faster': '靈氣：+{0}% 冰寒抗性，每學一級最大值 +{1}%（{2}%）；冰冷持續時間縮短 {3}%',
'Aura: +#% fire resistance, and +#% to its maximum (#%) a level learned': '靈氣：+{0}% 火焰抗性，每學一級最大值 +{1}%（{2}%）',
'Aura: +#% lightning resistance, and +#% to its maximum (#%) a level learned': '靈氣：+{0}% 閃電抗性，每學一級最大值 +{1}%（{2}%）',
'Aura: monsters around you resist fire, cold and lightning #% less, +#% a level (a fifth of it if immune)': '靈氣：周圍怪物的火焰、冰寒與閃電抗性降低 {0}%，每級 +{1}%（免疫的怪物只有五分之一）',
'Aura: monsters around you resist fire, cold and lightning #% less (a fifth of it if immune)': '靈氣：周圍怪物的火焰、冰寒與閃電抗性降低 {0}%（免疫的怪物只有五分之一）',
'Aura: skills recharge #% faster, +#% physical damage': '靈氣：技能冷卻加快 {0}%，+{1}% 物理傷害', 'Aura: skills recharge #% faster, +#% physical damage, +#% a level': '靈氣：技能冷卻加快 {0}%，+{1}% 物理傷害，每級 +{2}%',
'Aura: take #% less damage': '靈氣：受到的傷害減少 {0}%', 'Aura: monsters that strike you in melee take back #% of the blow': '靈氣：近戰攻擊你的怪物會承受 {0}% 的反傷',
'Aura: monsters slain near you heal you # life, #% of the time': '靈氣：在你附近被殺的怪物有 {1}% 機率為你恢復 {0} 生命',
'Aura: monsters close to you are hurt and thrown out, # damage twice a second': '靈氣：靠近你的怪物會受傷並被彈開，每秒兩次 {0} 傷害',
'Banish* · *': '放逐{0} · {1}', 'Reroll* · *': '重抽{0} · {1}', 'Skip* · *': '略過{0} · {1}', 'Battle Orders, and +# to all your skills': '戰鬥體制，並且所有技能 +{0}',
'Blades spin around you, # damage to all beside you # times a second, and fly off at monsters for #': '刀刃環繞你旋轉，每秒 {1} 次對身旁所有目標造成 {0} 傷害，並飛向怪物造成 {2}',
'Charge # times along your path, # damage in the way, a holy burst at each stop': '沿路衝鋒 {0} 次，路上造成 {1} 傷害，每次停下時發出神聖爆發',
'Chilling Armor, #s: melee attackers take # cold, chilled #s; shooters a # ice bolt; #% miss': '寒冰裝甲 {0} 秒：近戰攻擊者受到 {1} 冰寒傷害並冰冷 {2} 秒；遠程攻擊者被 {3} 冰彈反擊；{4}% 攻擊落空',
'Claws at the toughest in reach, # damage; every fourth blow releases # charges, +#% each': '用爪攻擊範圍內最強的怪物，{0} 傷害；每第四擊釋放 {1} 層充能，每層 +{2}%',
'Claws, # damage; every fourth blow a thunder nova, # damage, and charged bolts': '爪擊 {0} 傷害；每第四擊發出雷霆新星，{1} 傷害，並放出充能彈',
'Claws, # damage; every fourth blow shatters ice, # damage around and a long chill': '爪擊 {0} 傷害；每第四擊震碎寒冰，周圍 {1} 傷害並長時間冰冷',
'Claws, # damage; every fourth blow shatters ice, # damage around, ice cubes and a long chill': '爪擊 {0} 傷害；每第四擊震碎寒冰，周圍 {1} 傷害，冰塊並長時間冰冷',
'Claws, # damage: a meteor (#), chain lightning (#), then chaos ice; every fourth all three': '爪擊 {0} 傷害：隕石（{1}）、連鎖閃電（{2}），然後混沌寒冰；每第四擊三種一起',
'Curse, #s: monsters within # of a target slow by half, deal #% less damage and lose #% physical resistance (a fifth of it if immune)': '詛咒 {0} 秒：目標 {1} 範圍內的怪物減速一半，傷害減少 {2}%，物理抗性降低 {3}%（免疫的怪物只有五分之一）',
'Curse, #s: monsters within # of a target lose #% physical resistance (a fifth of it if immune)': '詛咒 {0} 秒：目標 {1} 範圍內的怪物物理抗性降低 {2}%（免疫的怪物只有五分之一）',
'For #s a storm rages within # yards: # cold damage # times a second, chilling': '{0} 秒內 {1} 碼範圍颳起風暴：每秒 {3} 次 {2} 冰寒傷害，並造成冰冷',
'For #s burning rocks fall around you, the toughest monsters most, # damage each': '{0} 秒內燃燒的岩石落在你周圍，最常砸向最強的怪物，每顆 {1} 傷害',
'For #s you take #% less physical damage': '{0} 秒內受到的物理傷害減少 {1}%',
'Frozen Armor for #s: melee attackers get a #s chill; #% of blows and missiles miss her': '冰封裝甲 {0} 秒：近戰攻擊者冰冷 {1} 秒；{2}% 的近戰和投射物打不中她',
'Golems get +#% life, +#% damage and +#% speed': '魔像 +{0}% 生命、+{1}% 傷害、+{2}% 速度',
'Holy Shield at its height for good, +#% Chance to Block, smiting back; a holy blast every #s throws monsters back, # damage': '神聖之盾永久處於最強狀態，+{0}% 格擋機率並反擊；每 {1} 秒發出神聖衝擊擊退怪物，{2} 傷害',
'Ice shards rain on the nearest pack for #s, # shards of # damage each, chilling what they hit': '寒冰碎片落在最近的怪群上 {0} 秒，共 {1} 片，每片 {2} 傷害，並冰冷命中的目標',
'Leap where you run (at a foe when still) and strike: # damage, # around': '跳向你移動的方向（站著不動時跳向敵人）並攻擊：{0} 傷害，周圍 {1}',
'Lightning keeps striking monsters around you, # damage': '閃電持續打擊你周圍的怪物，{0} 傷害', 'Lightning keeps striking # monsters at a time around you, # damage': '閃電持續打擊你周圍的怪物，每次 {0} 隻，{1} 傷害',
'Lightning strikes the toughest monster nearby and one more, # damage; holy bolts burst, # each': '閃電打擊附近最強的怪物和另一隻，{0} 傷害；迸出神聖彈，每道 {1}',
'Maul as a werebear for #s; every #rd swing also stomps its blow out to all within # yards, stunning': '變成熊人重擊 {0} 秒；每第 {1} 次揮擊會把攻擊震向 {2} 碼內所有目標並暈眩',
'Meteors crash onto # monsters, # damage, and leave the ground burning': '隕石砸向 {0} 隻怪物，{1} 傷害，並讓地面燃燒',
'Monsters near her take #% more damage (it breaks no immunity)': '她附近的怪物受到的傷害增加 {0}%（不會破除免疫）',
'Monsters resist fire, cold, lightning and poison #% less, up to #% (a fifth of it if immune)': '怪物的火焰、冰寒、閃電與毒素抗性降低 {0}%，最多 {1}%（免疫的怪物只有五分之一）',
'Shiver Armor for #s: melee attackers take # cold and a #s chill; #% of blows and missiles miss her': '碎冰甲 {0} 秒：近戰攻擊者受到 {1} 冰寒傷害並冰冷 {2} 秒；{3}% 的近戰和投射物打不中她',
'Take #% less damage': '受到的傷害減少 {0}%', 'Take #% less damage; poison and chill wear off #% faster': '受到的傷害減少 {0}%；中毒和冰冷持續時間縮短 {1}%',
'The Hammerdin: # blessed hammers at once, whirling faster and wider, # damage to all they pass': '鎚丁：一次 {0} 把祝福之鎚，轉得更快更廣，對經過的所有目標造成 {1} 傷害',
'Two blows in a wide reach, # damage each; hits speed your swings and steps, up to # times': '大範圍兩次攻擊，每次 {0} 傷害；命中會加快你的揮擊和移動，最多疊加 {1} 次',
'Up to # dire wolves, # damage a bite, and the pack +#% life; with # spirit wolves and # ravens': '最多 {0} 隻恐狼，每咬 {1} 傷害，同伴生命 +{2}%；另有 {3} 隻靈狼和 {4} 隻烏鴉',
'Up to # spirit wolves fight beside you, # damage a bite; and # ravens': '最多 {0} 隻靈狼在你身邊戰鬥，每咬 {1} 傷害；另有 {2} 隻烏鴉',
'Werebear for #s near monsters: #% less damage taken, +#% life, splashing blows of #': '怪物在附近時變成熊人 {0} 秒：受到的傷害減少 {1}%，+{2}% 生命，濺射攻擊 {3}',
'Werebear for #s: #% less physical damage taken, +#% life, splashing blows of #': '變成熊人 {0} 秒：受到的物理傷害減少 {1}%，+{2}% 生命，濺射攻擊 {3}',
'Werebear for #s: blows of #, each # more a charge up to # (the last stuns)': '變成熊人 {0} 秒：攻擊 {1}，每層充能多 {2}，最多 {3} 層（最後一擊暈眩）',
'Wereform blows add # poison over #s; a bitten monster that dies passes it to # near it': '變身後的攻擊在 {1} 秒內附加 {0} 毒素傷害；被咬的怪物死亡時會傳染給附近 {2} 隻',
'Wereforms last #s longer and give +#% more life': '變身持續時間增加 {0} 秒，生命額外 +{1}%',
'Werewolf for #s near monsters: +#% life, claws of # every #s, +#% crit': '怪物在附近時變成狼人 {0} 秒：+{1}% 生命，每 {3} 秒爪擊 {2}，+{4}% 致命一擊',
'When monsters crowd and hurt you, those around you flee in terror for #s (bosses less, act bosses never)': '被怪物包圍並受傷時，周圍的怪物會恐懼逃跑 {0} 秒（首領較短，幕首領不受影響）',
'Whirl # yards through the horde, # damage to each monster # times a second': '在怪群中旋風斬 {0} 碼，每秒 {2} 次對每隻怪物造成 {1} 傷害',
'You take #% less damage and have #% more life, renewed every #s': '受到的傷害減少 {0}%，生命增加 {1}%，每 {2} 秒更新',
'You take #% less physical damage and have #% more life, renewed every #s': '受到的物理傷害減少 {0}%，生命增加 {1}%，每 {2} 秒更新',
'Your shadow master, # damage, # life; every third blow a fire, lightning or ice kick': '你的影子大師，{0} 傷害，{1} 生命；每第三擊施展火焰、閃電或寒冰踢擊',
// 存檔、回報問題、更新
'Open a save file': '開啟存檔檔案', 'Save as a file': '儲存成檔案', 'That file couldn\'t be read.': '無法讀取這個檔案。', 'That file is too big to be a save.': '這個檔案太大，不是存檔。',
'Your game could not be saved': '無法儲存遊戲', 'Your save could not be read': '無法讀取你的存檔', 'A saved run could not be read': '無法讀取已儲存的這一輪',
'Your saved run could not be started': '無法開始已儲存的這一輪', 'This run is not saved': '這一輪不會儲存', 'A kept hero could not be read': '無法讀取保留的英雄',
'Your game could not be saved: this browser\'s storage is full or turned off': '無法儲存遊戲：這個瀏覽器的儲存空間已滿或被關閉',
'This browser would not store it: its storage is full, or turned off (a private window, or site data blocked). CONTINUE still works until this page is closed. Allow this site to keep data, or free up space, then save again.': '這個瀏覽器無法儲存：儲存空間已滿或被關閉（無痕視窗，或封鎖了網站資料）。在關閉這個頁面之前「繼續」仍然有效。請允許這個網站儲存資料或清出空間，再存一次。',
'It is kept aside in this browser, untouched, and a new save starts now. Send a REPORT and it can be looked at.': '它已原封不動地另外保存在這個瀏覽器裡，現在開始新的存檔。送出「回報問題」就能幫你查看。',
'This browser would not keep it aside either, so a new save starts now. Send a REPORT, please.': '這個瀏覽器也無法另外保存，所以現在開始新的存檔。請送出「回報問題」。',
'Something went wrong as it loaded. It is still saved: try CONTINUE again. If it fails again, send a REPORT.': '載入時發生錯誤。存檔還在：請再按一次「繼續」。如果又失敗，請送出「回報問題」。',
'The *\'s saved run is not one this version can start, so CONTINUE does not offer it for now. It is kept aside, untouched, and comes back once a version can read it.': '{0}的已儲存進度無法用這個版本開始，所以「繼續」暫時不會出現。它會原封不動地另外保存，等到有版本能讀取時就會回來。',
'The *\'s saved run is not one this version can start, and this browser would not keep it aside. Send a REPORT, please.': '{0}的已儲存進度無法用這個版本開始，這個瀏覽器也無法另外保存。請送出「回報問題」。',
'The *\'s saved run was kept aside by an older version, and is back now: CONTINUE plays it.': '{0}的已儲存進度之前被舊版本另外保存，現在回來了：按「繼續」就能玩。',
'The * kept for * is not one this version can start, so * starts at level 1 for now. It is kept aside, untouched, and comes back once a version can read it.': '為{1}保留的{0}無法用這個版本開始，所以{2}暫時從等級 1 開始。它會原封不動地另外保存，等到有版本能讀取時就會回來。',
'The * kept for * is not one this version can start, and storage would not keep it aside. Send a REPORT, please.': '為{1}保留的{0}無法用這個版本開始，儲存空間也無法另外保存。請送出「回報問題」。',
'The * kept for * was kept aside by an older version, and is back now.': '為{1}保留的{0}之前被舊版本另外保存，現在回來了。',
'A save file or code from the desktop app or another browser replaces this browser\'s save.': '來自桌面版或其他瀏覽器的存檔檔案或代碼，會取代這個瀏覽器的存檔。',
'That code comes from a newer version of D2 Survivors. Reload this page to update, then try again.': '這個代碼來自較新版本的 D2 Survivors。請重新整理頁面更新後再試一次。',
'Keep your gold, Charsi\'s upgrades and gear, or carry them to the desktop app, another browser or another device.': '保留你的金幣、恰西的升級和裝備，或帶到桌面版、其他瀏覽器或其他裝置。',
'Carry your gold, Charsi\'s upgrades and gear to D2 Survivors in another browser or on another device.': '把你的金幣、恰西的升級和裝備帶到其他瀏覽器或裝置上的 D2 Survivors。',
'SAVES on the main menu keeps your progress as a file or a code, and brings it into the desktop app or another browser.': '主選單的「存檔」可以把進度存成檔案或代碼，再帶進桌面版或其他瀏覽器。',
'The game has evolved a lot since its release. As it\'s still in beta, the developer encourages a wipe and a fresh start: a new taste of the game as it is now, and feedback based on that. Would you like to start over?': '遊戲從推出以來已經改變很多。因為還在測試階段，開發者鼓勵清空存檔重新開始：體驗遊戲現在的樣子，並根據這個給予意見。要重新開始嗎？',
'Every hero, item, gold piece, Charsi\'s rank and Terror tier is deleted, for good. Your settings stay.': '所有英雄、物品、金幣、恰西的升級和恐懼層都會永久刪除。設定會保留。',
'Bug': '錯誤', 'Balance': '平衡', 'Idea': '建議', 'Send': '送出', 'Sending…': '送出中…', 'Thanks, sent.': '謝謝，已送出。', 'Screenshot': '螢幕截圖',
'Include the screenshot': '附上螢幕截圖', 'What\'s sent': '會送出的內容', 'Write a few words first.': '請先寫幾個字。',
'Couldn\'t reach the server: it will be sent the next time the game opens.': '連不上伺服器：下次開啟遊戲時會再送出。',
'Couldn\'t send it, and there\'s no room to keep it for later.': '無法送出，也沒有空間留著稍後再送。',
'X (@name) or Reddit (u/name), only if you want a reply': 'X（@名稱）或 Reddit（u/名稱），想收到回覆再填',
'A bug, a balance note or an idea, with your run attached.': '回報錯誤、平衡意見或建議，會附上這一輪的資料。',
'A contact is @name (X) or u/name (Reddit).': '聯絡方式請填 @名稱（X）或 u/名稱（Reddit）。',
'The report was refused. Shorten the text, or leave the screenshot out, and try again.': '回報被拒絕了。請縮短文字或不要附上截圖，再試一次。',
'What happened, or what would you change? Any language is fine.': '發生了什麼事，或你想改變什麼？任何語言都可以。',
'D2 Survivors is still a beta, and it changes all the time. I read your feedback and keep improving the game, so now and then something may break: please bear with me. It\'s made by one person, in spare time, doing my best to make something you enjoy.': 'D2 Survivors 還在測試階段，而且一直在改變。我會閱讀你的意見並持續改進遊戲，所以偶爾可能會出問題：請多包涵。這是一個人利用空閒時間製作的，我盡力做出你會喜歡的遊戲。',
// 20261022.3：英雄合併、退役（阿卡拉保管）、重新開始、99 級金色光芒
'A hero could not be read': '無法讀取英雄', 'A retired hero could not be read': '無法讀取退役的英雄', 'Not while a run is saved': '有已儲存的這一輪時不能這麼做',
'Retired · swap her in': '已退役 · 換她上場', 'Earns the golden glow': '獲得金色光芒', 'Keeps her golden glow': '保留她的金色光芒', 'Restarted at 99': '在 99 級重新開始過',
'Counts as a death: click again': '會算作一次死亡：再點擊一次', 'Counts as a death: tap again': '會算作一次死亡：再點一下',
'Back to level 1 · free': '回到等級 1 · 免費', 'Re-draft your skills': '重新抽選你的技能', 'Start over at level 1': '從等級 1 重新開始',
'Normal, Act I · keeps gear and Cain\'s gifts · free': '普通、第一幕 · 保留裝備和凱恩的禮物 · 免費', 'Reach level 99 first to earn the golden glow': '先達到等級 99 才能獲得金色光芒',
'Click again to start over': '再點擊一次以重新開始', 'Tap again to start over': '再點一下以重新開始', 'Click again to swap': '再點擊一次以交換', 'Tap again to swap': '再點一下以交換',
'Bring it to Charsi: she takes it to imbue an item': '拿去給恰西：她會用它為物品灌注', 'Pick a tree: click its tab twice, not a skill': '選一個技能樹：點兩下它的分頁，不是點技能',
'+1 to all skills of one tree of your choice': '你選擇的一個技能樹所有技能 +1', 'Right Click, then click the tree’s tab twice': '右鍵點擊，然後點兩下技能樹的分頁',
'CONTINUE starts Terror tier * over, at level *.': '「繼續」會從恐懼第 {0} 層重新開始，等級 {1}。',
'Your * is now one hero, level *. Your other copies are kept at Akara.': '你的{0}現在合併成一個英雄，等級 {1}。其他的複本由阿卡拉保管。',
'Your * is not one this version can start, so she starts at level 1 for now. She is kept aside, untouched, and comes back once a version can read her.': '你的{0}無法用這個版本開始，所以暫時從等級 1 開始。原本的她會原封不動地另外保存，等到有版本能讀取時就會回來。',
'Your * is not one this version can start, and storage would not keep her aside. Send a REPORT, please.': '你的{0}無法用這個版本開始，儲存空間也無法另外保存。請送出「回報問題」。',
'A retired * is not one this version can read, so Akara does not list her for now. She is kept aside, untouched, and comes back once a version can read her.': '退役的{0}無法用這個版本讀取，所以阿卡拉暫時不會列出她。她會原封不動地另外保存，等到有版本能讀取時就會回來。',
'A retired * is not one this version can read, and storage would not keep her aside. Send a REPORT, please.': '退役的{0}無法用這個版本讀取，儲存空間也無法另外保存。請送出「回報問題」。',
'A * kept aside by an older version is back now: your hero, or retired at Akara.': '之前被舊版本另外保存的{0}回來了：成為你的英雄，或在阿卡拉那裡退役。',
'Your other *, level *, once': '你的另一個{0}，等級 {1}，一次', 'Re-draft your *': '重新抽選你的{0}', 'Reset your *': '重置你的{0}', 'Restart your *': '重新開始你的{0}',
'Lost: what she gained since Baal last fell. Your * is level * again.': '失去：上次擊敗巴爾之後獲得的一切。你的{0}回到等級 {1}。',
'Lost: this climb. Your * starts again at level 1.': '失去：這次的攀升。你的{0}從等級 1 重新開始。',
'Lost: Terror * and 10% of a level\'s experience. Terror * is open.': '失去：恐懼第 {0} 層和一級經驗值的 10%。恐懼第 {1} 層開放中。',
'Lost: 10% of a level\'s experience. Terror * stays open.': '失去：一級經驗值的 10%。恐懼第 {0} 層仍然開放。',
'Back to level *: click again': '回到等級 {0}：再點擊一次', 'Back to level *: tap again': '回到等級 {0}：再點一下', 'Your * starts again at level 1': '你的{0}從等級 1 重新開始',
'Your level-* * is your hero again': '你等級 {0} 的{1}又是你的英雄了', 'Keeps your level * and gear · free': '保留你的等級 {0} 和裝備 · 免費',
'Keeps your level * and gear · * gold': '保留你的等級 {0} 和裝備 · {1} 金幣', 'Your level-* * starts over and keeps the golden glow for good.': '你等級 {0} 的{1}重新開始，並永久保留金色光芒。',
'Your level-* * starts over at level 1; she\'s kept at Akara.': '你等級 {0} 的{1}從等級 1 重新開始；原本的她由阿卡拉保管。', 'Earlier heroes (*)': '以前的英雄（{0}）',
'Level * · * · swap her in': '等級 {0} · {1} · 換她上場', 'Your level-* * is kept at Akara.': '你等級 {0} 的{1}由阿卡拉保管。',
'Evolve * into *': '把{0}進化成{1}', 'Done': '完成', 'Done*': '完成{0}',
'A blow at up to # monsters in reach: # fire, cold and lightning each, half to those beside': '攻擊範圍內最多 {0} 隻怪物：火焰、冰寒與閃電各 {1}，旁邊的怪物受到一半',
'A heavy blow at the toughest monster in reach, # damage, for #% of your life (none below #%)': '對範圍內最強的怪物沉重一擊，{0} 傷害，消耗你 {1}% 的生命（生命低於 {2}% 時不消耗）',
'A heavy blow at the toughest monster in reach, # damage, sweeping #% of it through those beside; each costs you #% of your life, held back below #% life': '對範圍內最強的怪物沉重一擊，{0} 傷害，對旁邊的怪物造成 {1}% 掃擊；每擊消耗你 {2}% 的生命，生命低於 {3}% 時停手',
'Aura: the undead close to you are hurt and thrown out, # damage twice a second, +# a level': '靈氣：靠近你的不死生物會受傷並被彈開，每秒兩次 {0} 傷害，每級 +{1}',
'Aura: the undead close to you are hurt and thrown out, # damage twice a second': '靈氣：靠近你的不死生物會受傷並被彈開，每秒兩次 {0} 傷害',
'Bash the toughest monster in reach, # damage, knocked back and stunned; a shockwave deals #% of it to all around it, stunned': '猛擊範圍內最強的怪物，{0} 傷害，擊退並暈眩；衝擊波對周圍所有怪物造成 {1}% 的傷害並暈眩',
'Absorbs #% of every hit with mana instead of life': '每次受到攻擊時以法力代替生命吸收 {0}%',
'Slay Mephisto holding at least * skills, all of one tree, and auras all of one tree.': '擊敗墨菲斯托時至少持有 {0} 個技能，技能和靈氣都各自來自同一個技能樹。',
'Slay Baal holding at least * skills, all of one tree, and auras all of one tree.': '擊敗巴爾時至少持有 {0} 個技能，技能和靈氣都各自來自同一個技能樹。',
'Frozen Armor for #s: melee attackers are frozen #s; #% of blows and missiles miss her': '冰封裝甲 {0} 秒：近戰攻擊者被冰凍 {1} 秒；{2}% 的近戰和投射物打不中她',
'Arrows or drag to adjust': '方向鍵或拖曳來調整', 'Build complete': '建置完成', '# upgrade': '{0} 項升級',
'Build # is ready': '版本 {0} 已就緒', 'Build # is ready: see the main menu': '版本 {0} 已就緒：請看主選單',
'Checking for updates...': '正在檢查更新...', 'Preparing update...': '正在準備更新...', 'Up to date': '已是最新版本', 'Update ready: click to restart': '更新已就緒：點擊重新啟動',
'Downloading update *%': '正在下載更新 {0}%', 'Open the .dmg and drag D2 Survivors into Applications. It keeps itself up to date.': '打開 .dmg，把 D2 Survivors 拖進「應用程式」。它會自動保持最新版本。',
'The official game is at d2survivors.lol': '官方遊戲在 d2survivors.lol',
// 遊戲檔案（使用自己的 Diablo II 檔案）
'USE YOUR OWN FILES': '使用自己的遊戲檔案', 'Use my own files…': '使用我自己的檔案…', 'Hosted files': '線上檔案', 'The game plays with the hosted files.': '遊戲使用線上檔案進行。',
'The game now uses your own files': '遊戲現在使用你自己的檔案', 'Your own Diablo II files': '你自己的 Diablo II 檔案', 'Play with your own Diablo II': '用你自己的 Diablo II 玩',
'Play with your own Diablo II files: faster, no download.': '用你自己的 Diablo II 檔案玩：更快，不用下載。', 'D2 Survivors now needs your own Diablo II files': 'D2 Survivors 現在需要你自己的 Diablo II 檔案',
'Your Diablo II: Resurrected files don’t match each other.': '你的 Diablo II: Resurrected 檔案彼此不相符。', 'That folder won’t do': '這個資料夾不行',
'Extract': '解壓縮', 'Change folder': '更換資料夾', 'Opening the archives': '正在開啟封存檔', 'Extracting': '解壓縮中', 'The extraction stopped': '解壓縮中斷了',
// 安裝版的設定頁（app://setup/：找 Diablo II、解壓縮、遊戲改版後更新檔案）
'Ready': '準備完成', 'Done in *': '花了 {0} 完成', '# of #': '{0}／{1}', 'Getting ready': '準備中', 'Copied': '已複製', 'Automap': '自動地圖',
// 原本完成後只寫一行小字、沒提示要按按鈕：加上提示
'Your game files are in place, and stay on this computer.': '✔ 遊戲檔案已經下載完成，會一直留在這台電腦上。請按下方的「開始遊戲」按鈕進入遊戲。',
'Where is Diablo II?': 'Diablo II 在哪裡？', 'It isn’t a Diablo II install.': '這不是 Diablo II 的安裝資料夾。', 'Locate Diablo II…': '選擇 Diablo II 資料夾…',
'Extract the game files again': '重新解壓縮遊戲檔案', 'Updating game files…': '正在更新遊戲檔案…（遊戲改版，完成後會自動開始）',
'Copying your game files. This takes a minute or so, once.': '正在複製你的遊戲檔案，只需要一次，大約一分鐘。',
'This version reads some of your game files differently, so those are copied again. The game starts once they’re in place.': '遊戲改版了，新版讀取部分檔案的方式不同，所以會重新複製這些檔案。完成後遊戲會自動開始，請稍候。',
'Some of the game files are missing. Extract them again to play.': '缺少部分遊戲檔案，請按「解壓縮」重新複製才能玩。',
'This version of D2 Survivors reads the game files differently. Extract them again to play.': '遊戲改版了：這個版本讀取遊戲檔案的方式不同，請按「解壓縮」重新複製才能玩。',
'This version of D2 Survivors reads some of the game files differently. Extract them again to play.': '遊戲改版了：這個版本讀取部分遊戲檔案的方式不同，請按「解壓縮」重新複製才能玩。',
'The art and sound are copied again, from this install or another, over the ones the game has now.': '會從這個或另一個安裝資料夾重新複製圖像和音效，覆蓋目前的檔案。',
'Try again': '再試一次', 'The game plays with them.': '遊戲會使用這些檔案。', 'Play with my files': '用我的檔案玩', 'Extract again…': '重新解壓縮…', 'How it works': '運作方式',
'Copy details': '複製詳細資訊', 'Choose another folder…': '選擇其他資料夾…', 'Reading Diablo II…': '正在讀取 Diablo II…', 'A few seconds': '幾秒鐘', 'Diablo II found': '找到 Diablo II',
'Diablo II: Resurrected found': '找到 Diablo II: Resurrected', 'Your game files': '你的遊戲檔案', 'Update your game files': '更新你的遊戲檔案', 'Update game files': '更新遊戲檔案',
'Remove from this browser': '從這個瀏覽器移除', 'Your game files are in this browser, and stay here.': '你的遊戲檔案存在這個瀏覽器裡，並會留在這裡。',
'Only those are copied again, from your Diablo II folder.': '只會從你的 Diablo II 資料夾重新複製這些檔案。', 'They’re copied again from your Diablo II folder.': '會從你的 Diablo II 資料夾重新複製。',
'Pick your Diablo II folder again.': '請重新選擇你的 Diablo II 資料夾。', 'This browser can’t remember folders: pick yours again.': '這個瀏覽器無法記住資料夾：請重新選擇。',
'Sounds and music from Diablo II: Resurrected': '音效與音樂來自 Diablo II: Resurrected', 'Sounds and music from Diablo II: Resurrected.': '音效與音樂來自 Diablo II: Resurrected。',
'Your computer couldn’t read a game file.': '你的電腦無法讀取遊戲檔案。', 'D2 Survivors wasn’t allowed to read a game file.': 'D2 Survivors 沒有權限讀取遊戲檔案。',
'A game file is missing.': '缺少一個遊戲檔案。', 'This computer’s disk is full.': '這台電腦的磁碟已滿。', 'Free some space, then try again.': '清出一些空間後再試一次。',
'On an external or network drive? Keep it connected.': '在外接或網路磁碟上？請保持連線。', 'Something went wrong while copying the game files.': '複製遊戲檔案時發生錯誤。',
'Try again. If it stops again, copy the details for a report.': '再試一次。如果又中斷，請複製詳細資訊來回報。',
'Close the game. In Battle.net choose Options, then Scan and Repair (in Steam: Verify integrity of game files), let any update finish, then try again.': '關閉遊戲。在 Battle.net 選「選項」→「掃描與修復」（Steam：驗證遊戲檔案完整性），等更新完成後再試一次。',
'Soon D2 Survivors will run only on your own Diablo II or Diablo II: Resurrected files, out of respect for Blizzard\'s work. Get the desktop app, or point the game at your install. Your saves come with you.': '出於對 Blizzard 作品的尊重，D2 Survivors 很快只能使用你自己的 Diablo II 或 Diablo II: Resurrected 檔案執行。請下載桌面版，或讓遊戲指向你的安裝資料夾。存檔會一起保留。',
'It works in desktop Chrome, Edge, Firefox and Safari. On a phone the game plays with the hosted files.': '支援電腦版 Chrome、Edge、Firefox 和 Safari。手機上會使用線上檔案。',
'With the hosted files, the game downloads its art and sound from this site as you play, as before. Switch any time in Options, GAME FILES.': '使用線上檔案時，遊戲會像以前一樣邊玩邊從本站下載圖像與音效。隨時可以在「選項 → 遊戲檔案」切換。',
'Hosted files are going away very soon: D2 Survivors will only run on your own Diablo II or D2R files.': '線上檔案很快就會停止提供：D2 Survivors 之後只能使用你自己的 Diablo II 或 D2R 檔案執行。',
'Your heroes are safe in this browser, and SAVES works without game files.': '你的英雄安全地存在這個瀏覽器裡，沒有遊戲檔案也能使用「存檔」。',
'D2 Survivors now plays from your own Diablo II or Diablo II: Resurrected files.': 'D2 Survivors 現在使用你自己的 Diablo II 或 Diablo II: Resurrected 檔案執行。',
'A phone can\'t read a Diablo II install. Play on a computer: here on the website, or in the desktop app.': '手機無法讀取 Diablo II 安裝檔。請在電腦上玩：用這個網站或桌面版。',
'This browser can\'t read a Diablo II install. Play in a recent Chrome, Edge, Firefox or Safari, or in the desktop app.': '這個瀏覽器無法讀取 Diablo II 安裝檔。請使用新版 Chrome、Edge、Firefox、Safari 或桌面版。',
'Your heroes are safe in this browser. SAVES exports them, to carry to your computer.': '你的英雄安全地存在這個瀏覽器裡。用「存檔」匯出，就能帶到電腦上。',
'Your heroes stay in this browser, with or without game files. Export them to keep a copy, or to carry them to the desktop app or another browser.': '不論有沒有遊戲檔案，你的英雄都會留在這個瀏覽器。匯出可以保留備份，或帶到桌面版、其他瀏覽器。',
'It works in desktop Chrome, Edge, Firefox and Safari. A phone can’t read an install: play on a computer.': '支援電腦版 Chrome、Edge、Firefox 和 Safari。手機無法讀取安裝檔：請在電腦上玩。',
'Your heroes stay in this browser, with or without game files: SAVES exports them. The desktop app plays from your install too.': '不論有沒有遊戲檔案，你的英雄都會留在這個瀏覽器：用「存檔」匯出。桌面版也是使用你的安裝檔執行。',
'Plays from your own Diablo II or Diablo II: Resurrected files.': '使用你自己的 Diablo II 或 Diablo II: Resurrected 檔案執行。',
'Lord of Destruction isn’t installed there (d2exp.mpq is missing). D2 Survivors needs Diablo II and its expansion.': '那裡沒有安裝毀滅之王（缺少 d2exp.mpq）。D2 Survivors 需要 Diablo II 和它的資料片。',
'patch_d2.mpq is missing: update Diablo II to patch 1.14 first.': '缺少 patch_d2.mpq：請先把 Diablo II 更新到 1.14 版。',
'D2 Survivors reads the art and sound of your Diablo II and Lord of Destruction (1.14) once, in this browser, and keeps them here. Nothing is uploaded.': 'D2 Survivors 會在這個瀏覽器裡讀取一次你的 Diablo II 與毀滅之王（1.14）的圖像和音效，並保存在這裡。不會上傳任何東西。',
'Copying your game files into this browser. This takes a few minutes, once.': '正在把你的遊戲檔案複製到這個瀏覽器。只需要一次，大約幾分鐘。',
'This version of D2 Survivors reads some of your game files differently. Extract them again to play with them.': '這個版本的 D2 Survivors 讀取部分遊戲檔案的方式不同。請重新解壓縮才能使用。',
'That folder isn’t a Diablo II install, and none was found inside it: no d2data.mpq, nor Diablo II: Resurrected’s Data folder. Pick the folder that holds Diablo II’s .mpq files, or Diablo II: Resurrected’s (from Steam, in steamapps/common).': '那個資料夾不是 Diablo II 的安裝資料夾，裡面也找不到：沒有 d2data.mpq，也沒有 Diablo II: Resurrected 的 Data 資料夾。請選擇放有 Diablo II .mpq 檔案的資料夾，或 Diablo II: Resurrected 的資料夾（Steam 版在 steamapps/common 裡）。',
'A Diablo II: Resurrected install works too, from Battle.net or Steam: pick its folder, or the Steam library it’s in. Its sounds and music are D2R’s own.': 'Battle.net 或 Steam 的 Diablo II: Resurrected 安裝也可以：選擇它的資料夾，或它所在的 Steam 遊戲庫。音效和音樂會使用 D2R 的版本。',
'D2 Survivors plays with the art and sound of your own Diablo II and Lord of Destruction, or Diablo II: Resurrected. It copies them once, into its own folder on this computer. Nothing is sent anywhere; it only asks d2survivors.lol for newer builds.': 'D2 Survivors 使用你自己的 Diablo II 與毀滅之王，或 Diablo II: Resurrected 的圖像和音效。它只會複製一次到這台電腦上自己的資料夾。不會傳送到任何地方；只會向 d2survivors.lol 詢問新版本。',
'Point D2 Survivors at the folder that holds Diablo II’s .mpq files, or Diablo II: Resurrected’s.': '請讓 D2 Survivors 指向放有 Diablo II .mpq 檔案的資料夾，或 Diablo II: Resurrected 的資料夾。',
'In OneDrive, iCloud or Dropbox? Set it to always keep on this device.': '放在 OneDrive、iCloud 或 Dropbox？請設定成「一律保留在此裝置上」。',
'Close Diablo II and let Battle.net finish updating, then try again.': '關閉 Diablo II，等 Battle.net 更新完成後再試一次。',
'An antivirus may be blocking it: allow D2 Survivors, or move the game to a normal folder, then try again.': '可能被防毒軟體擋住了：請允許 D2 Survivors，或把遊戲移到一般資料夾，再試一次。',
'Repair the game in Battle.net (Options, then Scan and Repair), then try again.': '請在 Battle.net 修復遊戲（選項 → 掃描與修復），再試一次。',
'Diablo II’s game data is missing or out of date: update or repair it, or pick a copy without mods.': 'Diablo II 的遊戲資料缺少或過舊：請更新或修復，或選擇沒有裝模組的版本。',
'Some of your game files are missing. Copy them again to play.': '缺少部分遊戲檔案。請重新複製後再玩。',
'Copying your game files again, from your Diablo II folder. The game starts once they’re in place.': '正在從你的 Diablo II 資料夾重新複製遊戲檔案。完成後遊戲就會開始。',
'Pick the folder that holds Diablo II’s .mpq files: *.': '請選擇放有 Diablo II .mpq 檔案的資料夾：{0}。', 'Music and speech are optional: *.': '音樂和語音可有可無：{0}。',
'This browser has only * free for the site.': '這個瀏覽器只剩 {0} 可給這個網站使用。', 'Done in * · *': '{0} 完成 · {1}', 'Extracted on * · *': '解壓縮於 {0} · {1}',
'Diablo II’s * are missing from that folder.': '那個資料夾缺少 Diablo II 的 {0}。', 'Diablo II’s * is missing from that folder.': '那個資料夾缺少 Diablo II 的 {0}。',
'* are missing: the game plays without that music or speech.': '缺少 {0}：遊戲會在沒有這些音樂或語音的情況下進行。', '* is missing: the game plays without that music or speech.': '缺少 {0}：遊戲會在沒有這些音樂或語音的情況下進行。',
'It keeps about * in this browser, and asks the browser to keep it for good.': '它會在這個瀏覽器保存大約 {0}，並要求瀏覽器永久保留。',
// 2026-10-22 改版：遊戲選項頁、羅格營地、阿卡拉重新抽選、存檔版本、桌面版更新與解壓縮回報
'GAME OPTIONS': '遊戲選項', 'AUTO UPDATE': '自動更新', 'AUTO UPDATE: *': '自動更新：{0}', 'Auto stats, language and more': '自動配點、語言等設定',
'Fades your own skills only': '只淡化你自己的技能特效', 'Every item named, as Alt does': '顯示每件物品的名稱，就像按住 Alt', 'Spends stat points on damage': '把屬性點數分配到傷害',
'Spends new stat points on your damage stat': '把新的屬性點數分配到你的傷害屬性', 'Downloads each new build of the app': '自動下載每個新版本的應用程式',
'Where art and sound come from': '圖像和音效的來源', 'Wipes your progress for good': '永久清除你的進度', 'Are you sure?': '確定嗎？', 'This can\'t be undone. Your settings stay.': '這個動作無法復原。設定會保留。',
'Every hero, item, gold piece, Charsi\'s rank, Terror tier and best time is deleted. To keep a copy, export a save code from SAVES first.': '所有英雄、物品、金幣、恰西的升級、恐懼層和最佳紀錄都會刪除。想保留備份，請先在「存檔」匯出存檔代碼。',
'With the hosted files, the game downloads its art and sound from this site as you play, as before. Switch any time in Options, GAME OPTIONS, GAME FILES.': '使用線上檔案時，遊戲會像以前一樣邊玩邊從本站下載圖像與音效。隨時可以在「選項 → 遊戲選項 → 遊戲檔案」切換。',
'Safari may delete this save after a week away: save it as a file in SAVES': 'Safari 可能會在一週沒開遊戲後刪除這個存檔：請在「存檔」把它存成檔案',
'Safari deletes a website\'s saved data after 7 days without a visit, and a private tab\'s when it closes. Save this as a file to keep it, or add the game to your Home Screen (Share, then Add to Home Screen), where Safari keeps it.': 'Safari 會在 7 天沒造訪後刪除網站儲存的資料，無痕分頁則在關閉時刪除。請把存檔存成檔案保留，或把遊戲加入主畫面（分享 → 加入主畫面），Safari 就會保留它。',
'Town': '城鎮', 'Waypoint': '傳送點', 'Mercenaries: Soon™': '傭兵：即將推出™', 'A new hero at level 1': '等級 1 的新英雄',
'Click the waypoint to start a run, or a hero by the fire to play as her': '點擊傳送點開始新的一輪，或點擊營火旁的英雄改用該英雄',
'Tap the waypoint to start a run, or a hero by the fire to play as her': '點一下傳送點開始新的一輪，或點一下營火旁的英雄改用該英雄',
'Ends your saved run: click again': '會結束你已儲存的這一輪：再點擊一次', 'Ends your saved run: tap again': '會結束你已儲存的這一輪：再點一下',
'Reset your * hero': '重置你的{0}英雄', 'Re-draft your * hero': '重新抽選你的{0}英雄', 'Click again to reset': '再點擊一次以重置', 'Tap again to reset': '再點一下以重置',
'Your hero is drafted anew': '你的英雄已重新抽選', 'Re-draft: * levels to place': '重新抽選：還有 {0} 級要分配', 'Level * · * levels to place': '等級 {0} · 還有 {1} 級要分配',
'Level * · free': '等級 {0} · 免費', 'Level * · * levels waiting · free': '等級 {0} · {1} 級等待中 · 免費', 'Level * · * levels waiting · * gold': '等級 {0} · {1} 級等待中 · {2} 金幣',
'* levels wait for a free slot': '還有 {0} 級在等空的欄位', 'Pick a card to banish it for this difficulty': '選一張卡片，在這個難度中放逐它',
'+* stat points: * +*, * +*': '+{0} 屬性點數：{1} +{2}、{3} +{4}', 'Stat points at the cap for level #': '屬性點數已達等級 {0} 的上限',
'Tap to pick up or put down · Hold to equip or take off': '點一下拿起或放下 · 長按穿上或卸下',
'Your save is from a newer version': '你的存檔來自較新的版本',
'This version plays it as far as it can. The save as the newer version left it is kept aside, untouched, and the newer version brings back what this one can not keep.': '這個版本會盡量讀取它。較新版本留下的存檔會原封不動地另外保存，回到較新版本時就能找回這個版本無法保留的內容。',
'This version plays it as far as it can, and this browser would not keep the newer copy aside: what only the newer version knows may be lost. Send a REPORT, please.': '這個版本會盡量讀取它，但這個瀏覽器無法另外保存較新版本的存檔：只有較新版本認得的內容可能會遺失。請送出「回報問題」。',
'An older version played your save for a while and could not keep everything on your items. It was kept aside, and is back now.': '舊版本玩過你的存檔一段時間，無法保留物品上的所有內容。原本的資料已另外保存，現在回來了。',
'Something went wrong. SAVE AND EXIT keeps your run: please send a REPORT': '發生錯誤。「儲存並離開」會保留這一輪：請送出「回報問題」',
'The game could not start': '遊戲無法啟動', 'RELOAD': '重新載入', 'Reload to try again. If it happens again, copy the diagnostics and send them on Discord.': '請重新載入再試一次。如果又發生，請複製診斷資訊並在 Discord 上傳送。',
'The game closed unexpectedly last time: lighter graphics for now': '上次遊戲意外關閉：暫時使用較簡化的畫面',
'On a phone the game holds its art in half the memory again, with the map, heroes and monsters drawn whole': '手機上遊戲的圖像再次只佔一半記憶體，地圖、英雄和怪物都完整繪製',
'Update didn\'t install: click to retry': '更新沒有安裝成功：點擊重試', 'Updating: the game opens again by itself': '正在更新：完成後遊戲會自動重新開啟',
'©2000, 2001, 2021 Blizzard Entertainment, Inc. All rights reserved.': '©2000, 2001, 2021 Blizzard Entertainment, Inc. 版權所有。',
'D2 Survivors couldn’t save its copy of the game files.': 'D2 Survivors 無法儲存它複製的遊戲檔案。',
'Your Diablo II is fine. An antivirus may be blocking D2 Survivors’ own folder: allow D2 Survivors, then try again.': '你的 Diablo II 沒有問題。可能是防毒軟體擋住了 D2 Survivors 自己的資料夾：請允許 D2 Survivors，再試一次。',
'FAQ': '常見問題', 'Support on Ko-fi': '在 Ko-fi 贊助', 'Set up your files': '設定你的檔案', 'Privacy': '隱私權', 'Legal': '法律聲明',
'@framara on X': 'X 上的 @framara', 'Made by framara (@framara on X)': '製作：framara（X 上的 @framara）',
'Free to play, with no ads. Diablo®, Diablo II®, Lord of Destruction® and Blizzard Entertainment® are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.': '免費遊玩，沒有廣告。Diablo®、Diablo II®、Lord of Destruction®（毀滅之王）和 Blizzard Entertainment® 是 Blizzard Entertainment, Inc. 在美國及／或其他國家的商標或註冊商標。',
'Diablo II ©2000, Diablo II: Lord of Destruction ©2001 and Diablo II: Resurrected ©2021 Blizzard Entertainment, Inc. All rights reserved.': 'Diablo II ©2000、Diablo II: 毀滅之王 ©2001 與 Diablo II: Resurrected ©2021 Blizzard Entertainment, Inc. 版權所有。',
'Try again. If it stops again, send a report.': '再試一次。如果又中斷，請送出回報。', 'Stopped at': '中斷的步驟', 'Send report': '送出回報', 'Report sent': '回報已送出', 'Send again': '再送一次',
// 2026-10-22 改版：技能、被動與裝備說明
'# blades thrown at the monsters around you, # damage and #% of your weapon\'s each, passing through three': '向周圍怪物投擲 {0} 把刀刃，每把造成 {1} 傷害加武器傷害的 {2}%，可穿透三隻怪物',
'Blades spin around you, # damage and #% of your weapon\'s to all beside you # times a second, and fly off at monsters for #': '刀刃繞著你旋轉，每秒 {2} 次對身邊所有敵人造成 {0} 傷害加武器傷害的 {1}%，並飛向怪物造成 {3} 傷害',
'Claws, # damage; every fourth blow # lightning, a thunder nova of # and # charged bolts of #': '爪擊 {0} 傷害；每第四擊造成 {1} 閃電傷害、{2} 的雷電新星，以及 {3} 道 {4} 的充能彈',
'Claws, # damage: a meteor (#), chain lightning (#), then chaos ice (#); every fourth the ice again': '爪擊 {0} 傷害：隕石（{1}）、連鎖閃電（{2}），接著混沌寒冰（{3}）；每第四擊再次釋放寒冰',
'Claws, # damage; every fourth blow # cold, shattering ice for as much around and ice cubes that freeze': '爪擊 {0} 傷害；每第四擊造成 {1} 冰寒傷害，碎冰對周圍造成同樣傷害，並散落會凍結敵人的冰塊',
'+#% chance to sidestep a monster\'s blow while you attack or stand still': '攻擊或站立不動時，+{0}% 機率閃開怪物的近戰攻擊',
'+#% chance to sidestep a monster\'s hit while you walk or run': '行走或奔跑時，+{0}% 機率閃開怪物的攻擊',
'+#% chance to sidestep a monster\'s missile while you attack or stand still': '攻擊或站立不動時，+{0}% 機率閃開怪物的投射物',
'the thrust or a bolt': '刺擊或彈矢',
'Aura: burns monsters around you each second, and adds #× that to your attacks': '靈氣：每秒燃燒周圍怪物，並在你的攻擊附加 {0} 倍的傷害',
'Aura: jolts monsters around you each second, and adds #× that to your attacks': '靈氣：每秒電擊周圍怪物，並在你的攻擊附加 {0} 倍的傷害',
'Aura: monsters around you are slowed by half and chilled; #× its cold on your attacks': '靈氣：周圍怪物減速一半並被冰冷；你的攻擊附加 {0} 倍的冰寒傷害',
'Aura: +#% mana regeneration, as Faster Cast Rate: skills recharge #% faster': '靈氣：法力恢復 +{0}%，等同快速施法率：技能冷卻快 {1}%',
'Aura: +#% damage to your attacks and Blessed Hammer': '靈氣：你的攻擊和祝福之鎚傷害 +{0}%', 'Now +*% *': '目前{1} +{0}%',
'At most # shorter: gear\'s, the card\'s and every skill\'s haste together': '最多縮短 {0}：裝備、卡片與所有技能的加速合計',
'Holy Shield at its height for good, +#% Chance to Block, smiting back; a holy blast every #s, # damage to all around you': '神聖之盾永久維持最強狀態，格擋機率 +{0}%，格擋時反擊；每 {1} 秒一次神聖爆炸，對周圍所有敵人造成 {2} 傷害',
'Wereform blows add # poison over #s; while it lasts, a bitten monster spreads it to those around it': '變身形態的攻擊在 {1} 秒內附加 {0} 毒素傷害；持續期間，被咬的怪物會傳染給周圍的怪物',
'With an axe: +#% physical damage and +#% chance of a critical strike': '使用斧頭時：物理傷害 +{0}%，致命攻擊機率 +{1}%',
'With a sword: +#% physical damage and +#% chance of a critical strike': '使用劍時：物理傷害 +{0}%，致命攻擊機率 +{1}%',
'With a blunt weapon: +#% physical damage and +#% chance of a critical strike': '使用鈍器時：物理傷害 +{0}%，致命攻擊機率 +{1}%',
'With a polearm: +#% physical damage and +#% chance of a critical strike': '使用長柄武器時：物理傷害 +{0}%，致命攻擊機率 +{1}%',
'With a spear or javelin: +#% physical damage and +#% chance of a critical strike': '使用長矛或標槍時：物理傷害 +{0}%，致命攻擊機率 +{1}%',
// 2026-10-22 第二次改版（20261022.1）：傭兵、尋找凱恩、任務紀錄、恐懼挑戰、特殊物品
'A new build is ready: click to reload': '新版本已就緒：點擊重新載入',
'Mercenary': '傭兵', 'MERCENARY': '傭兵', 'Hire': '雇用', 'Click again to hire': '再點擊一次以雇用', 'Tap again to hire': '再點一下以雇用',
'Rogue Scout': '羅格斥候', 'Desert Mercenary': '沙漠傭兵', 'Greiz': '葛列茲', 'Qual-Kehk': '夸爾－凱克',
'Kashya will lend you a Rogue Scout, free': '卡夏會免費借你一名羅格斥候', 'Sent by *': '由{0}派來', '* · yours · free': '{0} · 你的傭兵 · 免費',
'* will fight for you': '{0} 會為你作戰', '* fights for you again': '{0} 再次為你作戰', '*: * leaves': '{0}：{1} 離開了', '* has fallen': '{0} 倒下了',
'Fallen: resurrect at Kashya': '已倒下：請到卡夏那裡復活', 'Joins at level *': '等級 {0}\n可使用', 'Opens at level *': '等級 {0} 開放',
'Click to choose': '點擊選擇', 'Tap again to choose': '再點一下以選擇',
'The Horadric Malus pays for it': '用赫拉迪克之錘支付', 'Only this hero can keep that': '只有這個英雄能保留它', 'I can\'t carry anymore.': '我拿不下了。',
'Click the + of the attribute to raise': '點擊要提升的屬性旁的＋', 'Charsi takes it to imbue an item': '恰西用它來為物品灌注', 'Charsi imbued an item': '恰西為物品灌注了魔法',
'Read it in a run or the camp': '在一輪遊戲中或營地裡閱讀', 'Click a tree\'s tab, then click it again': '點擊技能樹的分頁，再點擊一次', 'Books and Tomes to read again': '可以再次閱讀的書與典籍',
'Book of Skill': '技能之書', 'Right Click to learn skill of your choice': '右鍵點擊學習你選擇的技能', 'Lam Esen\'s Tome': '蘭姆·艾森之書',
'+5 to an Attribute of your choice': '你選擇的一項屬性 +5', 'Right Click to Read': '右鍵點擊閱讀', 'Potion of Life': '生命藥劑',
'Right Click to permanently add 20 to Life': '右鍵點擊永久增加 20 點生命', 'Scroll of Resistance': '抗性卷軸', 'Right Click to Cast': '右鍵點擊施放',
'Token of Absolution': '赦免徽記', 'Right-click to reset Stat/Skill Points': '右鍵點擊重置屬性／技能點數',
'Horadric Malus': '赫拉迪克之錘', 'Horadric Scroll': '赫拉迪克卷軸', 'Scroll of Inifuss': '英尼弗斯卷軸', 'Tree of Inifuss': '英尼弗斯之樹',
'Key to the Cairn Stones': '石塊陣之鑰', 'Cairn Stones': '石塊陣', 'Cow King': '奶牛之王', 'High Council': '最高議會',
'Quests': '任務', 'Quest completed.': '任務完成。', 'Quest completed: *': '任務完成：{0}', 'Reward: *': '獎勵：{0}', 'Reward: Akara\'s Ring': '獎勵：阿卡拉的戒指',
'The Search for Cain': '尋找凱恩', 'Search for Cain': '尋找凱恩', 'The portal back': '回程的傳送門',
'Treehead WoodFist guards the Tree of Inifuss. Bring me its scroll.': '木拳樹頭守護著英尼弗斯之樹。把它的卷軸帶來給我。',
'Take this to the Cairn Stones, where Rakanishu stands guard.': '把這個帶到拉卡尼休看守的石塊陣。',
'Thank you for rescuing Deckard Cain. Take this ring.': '謝謝你救出迪卡·凱恩。收下這枚戒指吧。', 'I thank you, friend, for coming to my aid.': '朋友，謝謝你來救我。',
'Return to Deckard Cain for your reward.': '回去找迪卡·凱恩領取獎勵。', 'Talk to Akara for a reward.': '去找阿卡拉領取獎勵。',
'Slay Treehead WoodFist at the Tree of Inifuss, and recover the Scroll.': '在英尼弗斯之樹擊殺木拳樹頭，取回卷軸。',
'Take the Scroll of Inifuss to Akara.': '把英尼弗斯卷軸交給阿卡拉。',
'Touch the Cairn Stones where Rakanishu falls, and enter the portal to Tristram.': '在拉卡尼休倒下的地方觸碰石塊陣，進入通往崔斯特姆的傳送門。',
'Find and rescue Deckard Cain.': '找到並救出迪卡·凱恩。', 'Cain has been rescued and is now at the Rogue Encampment.': '凱恩已獲救，現在在羅格營地。',
// 恐懼挑戰（任務紀錄的恐懼分頁）
'Act I by Name': '第一幕點名', 'Andariel at Full Strength': '全盛的安達莉爾', 'Untouched by Duriel': '督瑞爾碰不到你', 'One Tree': '單一技能樹',
'The High Council': '最高議會', 'Duriel in Thirty': '三十秒內的督瑞爾', 'Untouched by Mephisto': '墨菲斯托碰不到你', 'Six Evolutions': '六次進化',
'Rite of Passage': '成年禮', 'One Tree in Hell': '地獄的單一技能樹', 'Untouched by Diablo': '迪亞布羅碰不到你', 'Baal in a Minute': '一分鐘內的巴爾',
'The Cow Tier': '奶牛層', 'Every Act': '每一幕', 'Three in a Row': '連續三層', 'No Potions': '不用藥水',
'Slay all ten of Act I\'s named monsters in one Act I.': '在同一次第一幕中擊殺第一幕全部十隻有名字的怪物。', 'Slay the Cow King in the Moo Moo Farm.': '在哞哞農場擊殺奶牛之王。',
'Slay Andariel before she weakens.': '在安達莉爾變弱之前擊殺她。', 'Slay Duriel with none of his blows landing.': '擊殺督瑞爾，且沒有被他打中任何一擊。',
'Slay Mephisto holding at least * skills, all of one tree.': '擊殺墨菲斯托時至少擁有 {0} 個技能，而且全部來自同一個技能樹。',
'Slay all six of the High Council in one Act III.': '在同一次第三幕中擊殺最高議會全部六人。', 'Slay Duriel within * seconds of his coming.': '督瑞爾出現後 {0} 秒內擊殺他。',
'Slay Mephisto with none of his blows or missiles landing.': '擊殺墨菲斯托，且沒有被他的攻擊或投射物打中。',
'Slay the three seal bosses, then Diablo before he weakens.': '擊殺三個封印首領，再在迪亞布羅變弱之前擊殺他。',
'Hold * evolved skills as an act boss falls.': '幕首領倒下時擁有 {0} 個已進化技能。', 'Slay Pindleskin before Nihlathak comes.': '在尼拉塞克出現之前擊殺暴躁外皮。',
'Slay Talic, Madawc and Korlic within * seconds of their awakening.': '塔力克、馬道克和科力克甦醒後 {0} 秒內擊殺他們。',
'Slay Baal holding at least * skills, all of one tree.': '擊殺巴爾時至少擁有 {0} 個技能，而且全部來自同一個技能樹。',
'Slay Diablo with none of his blows, missiles or novas landing.': '擊殺迪亞布羅，且沒有被他的攻擊、投射物或新星打中。', 'Slay Baal within * seconds of his coming.': '巴爾出現後 {0} 秒內擊殺他。',
'Clear the Cow tier.': '通過奶牛層。', 'Clear a tier in each of the five acts.': '在五幕中各通過一層。', 'Clear tier * or higher.': '通過第 {0} 層或更高。',
'Clear * tiers with none lost between.': '連續通過 {0} 層，中間沒有失敗。', 'Clear a tier with No Potions in the Belt.': '在「腰帶不能放藥水」的層中通過一層。',
'Named monsters left: *': '剩下有名字的怪物：{0}', 'Acts: *': '幕：{0}', 'Tiers in a row: *': '連續層數：{0}',
// 20261022.2
'Turn your phone upright': '請把手機轉成直向', 'Your level-* * stays your * hero.': '你等級 {0} 的{1}仍是你的{2}英雄。',
// 20261023.1／.2
'A grizzly, # damage a splashing swipe, and the pack +#% damage; with # dire wolves, # spirit wolves and # ravens': '一隻灰熊，每次範圍揮擊 {0} 傷害，狼群傷害 +{1}%；另有 {2} 隻恐狼、{3} 隻靈狼和 {4} 隻烏鴉',
'Up to # spirit wolves fight beside you, # damage a sweeping bite; and # ravens': '最多 {0} 隻靈狼在你身旁作戰，每次橫掃撕咬 {1} 傷害；另有 {2} 隻烏鴉',
'At most # shorter: gear\'s, the card\'s, Charsi\'s and every skill\'s haste together': '最多縮短 {0}：裝備、卡片、恰西與所有技能的加速合計',
'-#% to Enemy Fire Resistance (a fifth of it if immune)': '敵人火焰抗性 -{0}%（免疫的怪物只有五分之一）', '-#% to Enemy Cold Resistance (a fifth of it if immune)': '敵人冰寒抗性 -{0}%（免疫的怪物只有五分之一）',
'-#% to Enemy Lightning Resistance (a fifth of it if immune)': '敵人閃電抗性 -{0}%（免疫的怪物只有五分之一）',
'to Enemy Physical Resistance': '敵人物理抗性', 'to Enemy Magic Resistance': '敵人魔法抗性', 'A fifth of it if immune': '免疫的怪物只有五分之一',
'-#% to Enemy Fire Resistance per rank': '每級敵人火焰抗性 -{0}%', '-#% to Enemy Cold Resistance per rank': '每級敵人冰寒抗性 -{0}%',
'-#% to Enemy Lightning Resistance per rank': '每級敵人閃電抗性 -{0}%', '-#% to Enemy Poison Resistance per rank': '每級敵人毒素抗性 -{0}%',
'-#% to Enemy Physical Resistance per rank': '每級敵人物理抗性 -{0}%', '-#% to Enemy Physical Resistance': '敵人物理抗性 -{0}%',
'Raises the cast rate cap as much': '施法速度上限也提高同樣的量', 'Sell Price': '出售價格', '+#% gold for what you sell, per rank': '每級出售物品的金幣 +{0}%', '+#% gold for what you sell': '出售物品的金幣 +{0}%',
'Potion Healing': '藥水治療量', 'Healing potions heal #% more per rank': '每級治療藥水回復量增加 {0}%', 'Healing potions heal #% more': '治療藥水回復量增加 {0}%',
'+#% to Experience Gained per rank': '每級獲得經驗值 +{0}%',
'Tap: pick up or put down · Hold: equip, take off, use': '點一下：拿起或放下 · 長按：穿上、卸下、使用', 'A new build is ready: tap to reload': '新版本已準備好：點一下重新載入',
'Tap the + of the attribute to raise': '點一下要提升的屬性旁的 +',
'Rested: hold to take it up again': '休息中：長按重新使用', 'Rested: right-click to take it up again': '休息中：按右鍵重新使用', 'Hold to rest it': '長按讓它休息', 'Right-click to rest it': '按右鍵讓它休息',
'Hold to Read': '長按閱讀', 'Hold to permanently add 20 to Life': '長按以永久增加 20 點生命', 'Hold to reset Stat/Skill Points': '長按以重置屬性／技能點數',
'Hold, then tap the tree’s tab twice': '長按後，在技能樹的分頁上點兩下', 'Pick a tree: tap its tab twice, not a skill': '選擇技能樹：在它的分頁上點兩下，不是點技能',
'On Linux it’s inside a Wine or Proton prefix: pick the prefix, its drive_c or the game’s folder. Ctrl+H shows hidden folders.': '在 Linux 上它位於 Wine 或 Proton 的 prefix 裡：請選擇 prefix、裡面的 drive_c 或遊戲資料夾。按 Ctrl+H 可顯示隱藏資料夾。',
'Your levels in this act are lost': '你在這一幕獲得的等級會失去', 'Your levels in this tier are lost': '你在這一層獲得的等級會失去',
'CONTINUE starts Act * over at level *; you\'re level * now. Your items and gold are kept.': '「繼續」會從第 {0} 幕重新開始，等級 {1}；你現在是等級 {2}。物品和金幣會保留。',
'CONTINUE starts Terror tier * over at level *; you\'re level * now. Your items and gold are kept.': '「繼續」會從恐懼第 {0} 層重新開始，等級 {1}；你現在是等級 {2}。物品和金幣會保留。',
'Your save is back': '你的存檔回來了', 'This computer\'s storage came up empty. The app\'s own copy of your save was there, and your heroes are back from it.': '這台電腦的儲存空間是空的。應用程式另外保留了一份你的存檔，已從那份存檔把你的英雄找回來。',
'Slay Mephisto holding only skills of one tree, at least * of them.': '擊殺墨菲斯托時，主動技能至少 {0} 個，而且全部來自同一個技能樹（被動不算）。', 'Slay Baal holding only skills of one tree, at least * of them.': '擊殺巴爾時，主動技能至少 {0} 個，而且全部來自同一個技能樹（被動不算）。',
'Slay Mephisto holding at least * skills, and only auras of one tree.': '擊殺墨菲斯托時，主動技能至少 {0} 個，而且靈氣全部來自同一個技能樹（攻擊或防禦靈氣擇一）。', 'Slay Baal holding at least * skills, and only auras of one tree.': '擊殺巴爾時，主動技能至少 {0} 個，而且靈氣全部來自同一個技能樹（攻擊或防禦靈氣擇一）。',
'* held: * of *': '{0}：已有 {1} / {2} 個', 'Skills from * trees': '主動技能來自 {0} 個技能樹（只能有一個）', 'Auras from * trees': '靈氣來自 {0} 個技能樹（只能有一個）', 'an undead monster in it': '範圍內每隻不死怪物', 'Evolution': '進化',
'Ends your saved run (*, *) · free': '會結束你已儲存的這一輪（{0}，{1}）· 免費', 'Ends your saved run (*, *)': '會結束你已儲存的這一輪（{0}，{1}）', 'This ends your saved run in *.': '這會結束你在{0}已儲存的這一輪。',
'Re-draft or start over after your first Baal kill': '第一次擊殺巴爾後才能重新抽選或重新開始',
'Nightmare, Hell and Terror close until she beats Baal on each again.': '惡夢、地獄和恐懼會關閉，直到在各難度再次擊敗巴爾。', 'Nightmare and Hell close until she beats Baal on each again.': '惡夢和地獄會關閉，直到在各難度再次擊敗巴爾。',
'Nightmare closes until she beats Normal\'s Baal again.': '惡夢會關閉，直到再次擊敗普通難度的巴爾。', 'Terror reopens at tier 1.': '恐懼從第 1 層重新開放。',
'Beat Normal\'s Baal to open': '擊敗普通難度的巴爾後開放', 'Beat Nightmare\'s Baal to open': '擊敗惡夢難度的巴爾後開放',
'* leaves': '{0}會離開', '* leaves and returns the gear': '{0}會離開並歸還裝備', '*\'s gear is in your inventory': '{0}的裝備在你的物品欄', '*\'s gear is in your stash': '{0}的裝備在你的儲物箱', '*\'s gear is in your inventory and stash': '{0}的裝備在你的物品欄和儲物箱',
'Replay a cleared tier': '重玩已通過的層', 'replay': '重玩', 'Pays +#% MF · +#% XP · +#% gold': '獎勵：魔法尋獲 +{0}% · 經驗值 +{1}% · 金幣 +{2}%', 'New affixes each time': '每次都有新的詞綴',
'Terror # stays open': '恐懼 {0} 維持開放', 'Older tiers': '較前面的層', 'Newer tiers': '較後面的層',
// 20261023.3
'Does nothing: its gift is already yours': '沒有作用：這份獎勵你已經拿過了', 'Does nothing: Cain didn\'t give you this one': '沒有作用：這不是凱恩給你的',
'You\'ve read a Book for that tree': '這個技能樹已經讀過技能之書了', 'Open C in a run or the camp to read it': '在遊戲中或營地按 C 開啟角色畫面來閱讀',
'Tap Character in a run or the camp to read it': '在遊戲中或營地點一下「角色」來閱讀',
'Other items to gamble on, free': '免費換一批可以賭博的物品', 'The Malus pays for an Imbue': '赫拉迪克之錘可以支付一次灌注', 'Charsi\'s Imbue is free while you carry it': '帶著它時，恰西的灌注免費',
'A report of this was sent to us, without your name.': '已自動把這個問題的回報傳給我們，不含你的名字。',
'Part of your Diablo II: Resurrected hasn’t finished downloading.': '你的 Diablo II: Resurrected 有一部分還沒下載完成。',
'Open Battle.net and let the game finish installing or updating. If it says it’s up to date, choose Options, then Scan and Repair. Then try again.': '請開啟 Battle.net，讓遊戲完成安裝或更新。如果顯示已是最新版本，請選擇「選項」→「掃描與修復」，然後再試一次。',
'Compare': '比較', 'Tap to compare': '點一下比較',
'AUTO SELL': '自動出售', 'AUTO SELL: *': '自動出售：{0}', 'AUTO SELL: MAGIC AND RARE': '自動出售：魔法和稀有','Sells gear as you pick it up': '撿起裝備時立刻賣掉',
'Mercenary Life': '傭兵生命', 'Mercenary Resistances': '傭兵抗性', 'Mercenary Defense': '傭兵防禦',
'+#% to your mercenary\'s life per rank': '每級傭兵生命 +{0}%', '+#% to your mercenary\'s life': '傭兵生命 +{0}%',
'+# to your mercenary\'s resistances per rank': '每級傭兵所有抗性 +{0}', '+# to your mercenary\'s resistances': '傭兵所有抗性 +{0}', 'All four, up to his maximum': '四種抗性都加，最多到他的抗性上限',
'+#% to your mercenary\'s Defense per rank': '每級傭兵防禦 +{0}%', '+#% to your mercenary\'s Defense': '傭兵防禦 +{0}%', 'His own, not his gear': '加在傭兵本身，不含裝備',
'Ranks': '等級', 'Click a rank to buy it': '點擊等級來購買', 'Tap a rank to see it': '點一下等級查看', 'Tap a rank, then tap it again': '點一下等級，再點一下購買',
// 20261024.1／.2：技能改造、物品過濾、排行榜、每秒傷害、改寫的技能說明
'SHOW DAMAGE': '顯示傷害', 'SHOW DAMAGE: #': '顯示傷害：{0}', 'SIMPLE': '簡易', 'DETAILED': '詳細', 'DPS': '每秒傷害', 'Attacker Takes Damage': '攻擊者受到傷害', 'Other': '其他', 'This run': '這一輪', 'Share': '占比', 'Slay Mephisto with skills of one tree dealing at least *% of the damage he takes.': '擊殺墨菲斯托，且他受到的傷害至少 {0}% 來自同一個技能樹的技能。',
'Slay Baal with skills of one tree dealing at least *% of the damage he takes.': '擊殺巴爾，且他受到的傷害至少 {0}% 來自同一個技能樹的技能。', '*: *% of the damage': '{0}：占傷害的 {1}%', 'A thief flees with stolen treasure!': '有個盜賊帶著偷來的寶物逃跑了！', 'The thief got away.': '盜賊逃走了。', 'Treasure Thief': '寶物盜賊', 'Split': '分裂', 'Frostfire': '霜火', 'Half its damage is cold': '一半傷害轉為冰寒', 'Wider': '更寬', 'Focused': '集中',
'Flames of radius 30, -40% damage': '火焰範圍 30，傷害 -40%', 'Frost Breath': '冰霜吐息', 'Firebrand': '火印', 'Half its damage is fire': '一半傷害轉為火焰', 'Ricochet': '彈射', 'Hellfrost': '地獄寒霜', 'Frost Storm': '冰霜風暴', 'Avalanche': '雪崩', 'Icicle': '冰錐', 'Splits into 3 bolts on hit, each at 40%; -30% damage': '命中時分裂成 3 道，每道 40%；傷害 -30%', 'Better against packs': '適合對付怪群', 'Better against bosses': '適合對付首領', 'Modifiers': '技能改造',
'Skill Modifier Points': '技能改造點數', '* free of *': '可用 {0} / {1}', 'Click a skill to turn on one of its options': '點擊技能來開啟它的其中一個改造', 'Tap a skill to turn on one of its options': '點一下技能來開啟它的其中一個改造', 'A Horadric Codex gives one more': '赫拉迪克法典可再多給一點', 'Modifier: *': '改造：{0}', 'Click to see its modifiers': '點擊查看它的改造', 'Tap again to see its modifiers': '再點一下查看它的改造', 'Points free: * of *': '可用點數：{0} / {1}',
'Click one to turn it on': '點擊其中一個來開啟', 'Tap one to turn it on': '點一下其中一個來開啟', 'Horadric Codex': '赫拉迪克法典', '+1 Skill Modifier Point': '+1 技能改造點數', 'Spend it in the skill tree (T)': '到技能樹（T）使用', 'Heavy': '沉重', 'Return': '回旋', 'Frost Lance': '冰霜長槍', 'Shatter': '粉碎', 'Orbit': '環繞', 'Echo': '回響', 'Cold Snap': '驟寒', 'Frost Trail': '冰霜軌跡', 'Half its damage is cold, and chills what chases her': '一半傷害轉為冰寒，並冰凍追趕她的怪物', 'Fan': '扇形',
'Napalm': '燃燒彈', 'Legion': '軍團', 'Frost Hydra': '冰霜九頭蛇', 'Half of each spit is cold, and chills': '每次噴吐一半是冰寒傷害，並造成冰凍', 'Fork': '分岔', 'Thunderbolt': '雷霆', 'Arrival Nova': '抵達新星', 'Frost Step': '冰霜步', 'Deep Freeze': '深度冰凍', 'Glacier': '冰河', 'Cluster': '集束', 'Great Ball': '巨球', 'Shower': '流星雨', 'Comet': '彗星', 'Tether': '牽引', 'Pyre': '火葬堆', 'Hailstorm': '冰雹風暴', 'The flames sweep an 85° cone': '火焰掃過 85° 的錐形範圍', 'Static Ground': '靜電地面',
'Ride the Bolt': '乘雷而行', 'Reactive': '反應', 'Last Stand': '背水一戰', 'Brittle': '脆弱', 'Duel': '決鬥', 'Frost Barrage': '冰霜彈幕', 'Crossfire': '交叉火力', 'Vortex': '漩渦', 'Volley': '齊射', 'Trail': '軌跡', 'Kindle': '點燃', 'Frostbite': '凍傷', 'Rime Trail': '霧凇軌跡', 'Narrow': '收窄', 'Flock': '成群', 'Bounty': '賞金', 'Cleave': '順劈', 'Half its damage is lightning': '一半傷害轉為閃電', 'Arc': '電弧', 'Frost Edge': '冰霜之刃', 'Overcharge': '超載充能', 'Lob': '拋擲', 'Skewer': '串刺',
'Frost Javelin': '冰霜標槍', 'Shieldmaidens': '盾女', 'Frost Maiden': '冰霜少女', 'Hail': '冰雹', 'Bullseye': '正中紅心', 'Frost Volley': '冰霜齊射', 'Spearwind': '矛風', 'Onslaught': '猛攻', 'Grounded': '接地', 'Frost Charge': '冰霜充能', 'Branching': '分枝', 'Grounding': '導地', 'Lingering': '滯留', 'Concentrated': '濃縮', 'Thunderstrike': '雷擊', 'Frost Fury': '冰霜之怒', 'Frost Field': '冰霜力場', 'Swarm': '蜂擁', 'Fixation': '鎖定', 'Sticky': '黏附', 'Wide Net': '大網', 'Creeping': '蔓延',
'Snare': '陷阱', 'Overload': '過載', 'Twin': '雙生', 'Keen Edge': '鋒利之刃', 'Shockwave': '衝擊波', 'Pounce': '撲擊', 'Patience': '耐心', 'Spit': '噴吐', 'Quick Drain': '快速吸取', 'Flare': '閃焰', 'Embers': '餘燼', 'Sear': '灼燒', 'Sweep': '橫掃', 'Ember Heel': '餘燼之踵', 'Quake': '震地', 'Martyr': '殉道者', 'Stalker': '潛行者', 'Tight Wave': '緊密波', 'The trap rides at your shoulder': '陷阱跟在你肩旁', 'Blowtorch': '噴燈', 'Hunter': '獵人', 'Chain Blast': '連鎖爆炸', 'Burst': '爆發', 'Hunt': '狩獵',
'Tempest': '暴風雨', 'Rebirth': '重生', 'Thunderclap': '雷鳴', 'Shards': '碎片', 'Deep Cold': '極寒', 'Wide Tail': '寬尾', 'Searing': '灼熱', 'Focused Tail': '集中尾擊', 'Arrival': '抵達', 'Twin Kick': '雙踢', 'Wide Mind': '廣域心靈', 'Focus': '專注', 'Earthsplit': '裂地', 'Headsman': '劊子手', 'Hurl': '猛擲', 'Pin': '釘住', 'Charged Blow': '充能重擊', 'Concussion': '腦震盪', 'Aftershock': '餘震', 'Gather': '聚集', 'Hammerfall': '鎚落', 'Cyclone': '旋風', 'Dervish': '旋舞者',
'Blazing Path': '燃燒之路', 'Cower': '畏縮', 'Rabble': '烏合之眾', 'Challenge': '挑戰', 'Rally': '集結', 'Spikes': '尖刺', 'Rolling Cry': '連綿吶喊', 'Contagion': '傳染', 'Roar': '咆哮', 'Bellow': '怒吼', 'Thunder Cry': '雷霆吶喊', 'Lure': '引誘', 'Martyr Totem': '殉道圖騰', 'Round Swing': '迴旋揮擊', 'Crush': '壓碎', 'Overhead': '過頂劈', 'Blood Rage': '血之狂暴', 'Storm Landing': '風暴著陸', 'Storm Axes': '風暴之斧', 'War Banner': '戰旗', 'Bloodlust': '嗜血', 'Wildfire': '野火', 'Firewall': '火牆',
'Wide Blast': '廣域爆炸', 'Dragon Breath': '龍息', 'Wide Fissure': '寬裂縫', 'Rift': '裂隙', 'Dust Devil': '塵捲風', 'Murder': '鴉群', 'Nightwing': '夜翼', 'Blinding': '致盲', 'Thicket': '灌木叢', 'Spores': '孢子', 'Deep Roots': '深根', 'Sap': '樹液', 'Heartwood': '心材', 'Jugular': '咽喉', 'Wide Swipe': '大範圍揮擊', 'Crushing': '粉碎', 'Thick Hide': '厚皮', 'Magma Core': '熔岩核心', 'Rebound': '反彈', 'Lava Bombs': '熔岩炸彈', 'Caldera': '火山口', 'Lava Flow': '熔岩流', 'Scorched Earth': '焦土',
'Eye of the Storm': '風暴之眼', 'Firenado': '火焰龍捲', 'Gale Force': '強風', 'Eye Wall': '眼牆', 'Squall': '颮風', 'Frost Wolves': '冰霜狼', 'Fenris': '芬里爾', 'Frenzied': '狂亂', 'Wild Pack': '野性狼群', 'Alpha': '頭狼', 'Rabid Pack': '狂犬狼群', 'Corpse Bloom': '屍花', 'Nourish': '滋養', 'Hoard': '囤積', 'Sunburst': '日爆', 'Long Day': '長日', 'Stillness': '靜止', 'Pack Heart': '狼群之心', 'Hunter\'s Heart': '獵人之心', 'Lone Wolf': '孤狼', 'Bramble': '荊棘', 'Rampage': '暴走',
'Lacerate': '撕裂', 'Storm Fangs': '風暴之牙', 'Quake Paw': '震地熊掌', 'Grudge': '積怨', 'Retaliate': '報復', 'Earthquake': '地震', 'Tremor': '顫動', 'Molten Stomp': '熔岩踐踏', 'Barbed': '倒刺', 'Clench': '緊握', 'Splinter': '碎裂', 'Grave Chill': '墓寒', 'Venom Puff': '毒霧', 'Pen': '囚籠', 'Bulwark': '堡壘', 'Hunter\'s Mark': '獵人印記', 'Cursed Ground': '詛咒之地', 'Siphon': '汲取', 'Fog': '迷霧', 'Spite': '怨恨', 'Judas': '猶大', 'Blood Pact': '血之契約', 'Leech': '吸取', 'Attuned': '協調',
'Twins': '雙子', 'Mire': '泥沼', 'Hulk': '巨像', 'Boomerang': '迴力鏢', 'Ossuary': '藏骨堂', 'Restless': '不安', 'Reaper': '死神', 'Spectral Fire': '幽靈之火', 'Miasma': '瘴氣', 'Vile Burst': '邪惡爆發', 'Plague Wave': '瘟疫之波', 'Withering Ground': '枯萎之地', 'Madding Ground': '瘋狂之地', 'Bedlam': '混亂', 'Regicide': '弒君', 'Bloodbond': '血之羈絆', 'Grapple': '擒抱', 'Anvil': '鐵砧', 'Forge': '鍛爐', 'Storm Golem': '風暴石魔', 'Half its blow is lightning': '攻擊的一半轉為閃電',
'Tight Orbit': '緊密環繞', 'Retribution': '懲罰', 'Bloodletting': '放血', 'Atonement': '贖罪', 'Fealty': '忠誠', 'Redeemed': '得贖', 'Judgement': '審判', 'Twin Strike': '雙重打擊', 'Fervor': '熱忱', 'Crusade': '十字軍', 'Cascade': '瀑流', 'Wide Wave': '寬波', 'Fault Line': '斷層線', 'Whirl': '迴旋', 'Hemorrhage': '大出血', 'Crowd': '人群', 'Thunderhead': '雷雲', 'Bloodrush': '血潮', 'Momentum': '動能', 'Steadfast': '堅定', 'Brand': '烙印', 'Sundering': '破甲', 'Executioner': '處刑者',
'Stunning': '暈眩', 'Stride': '大步', 'Rebuke': '斥責', 'Vigil': '守夜', 'Reserve': '儲備', 'Benediction': '祝禱', 'Absorb': '吸收', 'Retort': '反擊', 'Purge': '淨化', 'Rapture': '狂喜', 'Contemplation': '沉思', 'Ascension': '升天', 'Sacrament': '聖禮', 'Hallowed': '神聖', 'Consecrate': '奉獻', 'LOOT FILTER': '物品過濾', 'PRESET': '方案', 'CUSTOM': '自訂', 'NOT FOR MY CLASS': '非本職業', 'WEAPONS': '武器', 'SHIELDS': '盾牌', 'HELMS': '頭盔', 'BELTS': '腰帶', 'RINGS': '戒指', 'AMULETS': '護身符',
'HIDDEN': '隱藏', 'MY CLASS ONLY': '只要本職業', 'RARES FOR MY CLASS': '本職業的稀有物品', 'Picks up everything, as D2 does': '全部撿起，跟 D2 一樣', 'Leaves magic items on the floor, unnamed': '魔法物品留在地上，不顯示名稱', 'Sells magic items as you pick them up': '撿起魔法物品時立刻賣掉', 'Sells magic and rare items as you pick them up': '撿起魔法和稀有物品時立刻賣掉', 'Sells what isn\'t for your class': '賣掉不是本職業用的物品',
'Keeps only rares your class can use': '只留本職業能用的稀有物品', 'What you pick up, hide or sell': '要撿起、隱藏或賣掉的物品', 'Blue items of every kind': '所有種類的藍色物品', 'Yellow items of every kind': '所有種類的黃色物品', 'Another class\'s gear, or a weapon yours doesn\'t use': '其他職業的裝備，或本職業不用的武器', 'Tap a line to change it': '點一下項目來變更', 'Enter or arrows to change - Esc to go back': 'Enter 或方向鍵變更 - Esc 返回',
'D2 Survivors can’t find its way into your Diablo II: Resurrected files.': 'D2 Survivors 無法讀取你的 Diablo II: Resurrected 檔案。', 'In Steam, right-click Diablo II: Resurrected, choose Properties, Installed Files, then Verify integrity of game files. Start the game once, then try again.': '請在 Steam 對 Diablo II: Resurrected 按右鍵，選「內容」→「已安裝檔案」→「驗證遊戲檔案完整性」。先啟動一次遊戲，再試一次。',
'Start Diablo II: Resurrected once from Battle.net and let any update finish. If this stops again, choose Options, then Scan and Repair, then try again.': '請從 Battle.net 啟動一次 Diablo II: Resurrected，等更新完成。如果又停住，請選「選項」→「掃描與修復」，然後再試一次。', 'One of your Diablo II game files is damaged.': '你有一個 Diablo II 遊戲檔案損壞了。',
'Reinstall Diablo II, or copy its .mpq files again from a working install, then try again.': '請重新安裝 Diablo II，或從正常的安裝重新複製 .mpq 檔案，然後再試一次。', 'The disk D2 Survivors copies the game files to is full.': 'D2 Survivors 要複製遊戲檔案的磁碟已滿。',
'Free some space on it, then try again. The copy goes in D2 Survivors’ own folder, shown above, whichever disk the game is on.': '請清出一些空間後再試一次。不管遊戲裝在哪個磁碟，都會複製到上面顯示的 D2 Survivors 資料夾。', 'D2 Survivors needs about * free on * to copy the game files, and it has *.': 'D2 Survivors 需要 {1} 上約 {0} 的空間來複製遊戲檔案，目前只有 {2}。', 'Leaderboard': '排行榜', 'You': '你', 'Your name': '你的名字',
'2 to 15 letters, one - or _ inside': '2 到 15 個字母，中間可有一個 - 或 _', '2 to 15 letters': '2 到 15 個字母', 'Letters only, and one - or _ inside': '只能用字母，中間可有一個 - 或 _', 'That name can\'t be used': '這個名字不能使用', 'Send my runs: On': '傳送我的紀錄：開', 'Send my runs: Off': '傳送我的紀錄：關', 'Each clear of a difficulty or a tier goes to the leaderboard': '每次通過難度或恐懼層都會上傳到排行榜', 'Your clears stay on this device': '你的通關紀錄只留在這台裝置',
'A run sends your hero: her class, level, build, gear and stats, and your name': '上傳的內容是你的英雄：職業、等級、技能配置、裝備、屬性，以及你的名字', 'Nothing else: no account, no address': '沒有其他資料：沒有帳號，沒有地址', 'Edited or modded runs don\'t count': '修改過存檔或改過遊戲的紀錄不算', 'The leaderboard refuses them': '排行榜會拒收', 'Marked runs: Shown': '有標記的紀錄：顯示', 'Marked runs: Hidden': '有標記的紀錄：隱藏', 'Shown with D2\'s red mark': '以 D2 的紅色標記顯示',
'Left off the boards': '不列入排行榜', '1 run waiting to be sent': '1 筆紀錄等待傳送', '* runs waiting to be sent': '{0} 筆紀錄等待傳送', 'A dev build sends nothing': '開發版不會傳送任何資料', 'More stat points than D2 gives at her level': '屬性點數超過 D2 在她這個等級給的', 'Attributes that don\'t add up': '屬性數值對不上', 'A level no hero can have': '英雄不可能有的等級', 'Faster than the bosses come': '比首領出現還快', 'Gear she can\'t wear': '她無法穿戴的裝備',
'Skills she can\'t have': '她不可能有的技能', 'Higher ranks': '較高名次', 'Lower ranks': '較低名次', 'A replay of a cleared tier': '重玩已通過的層', '1 run': '1 筆紀錄', '* runs': '{0} 筆紀錄', 'The first clear comes here': '第一筆通關紀錄會出現在這裡', 'Can\'t reach the leaderboard': '無法連線到排行榜', 'Click to try again': '點擊重試', 'No runs yet': '還沒有紀錄', '#-# of #': '第 {0}-{1} 筆，共 {2} 筆', '*-* of *': '第 {0}-{1} 筆，共 {2} 筆', '* · best * · *': '{0} · 最佳 {1} · {2}',
'Her mercenary': '她的傭兵', 'Her mercenary (O)': '她的傭兵（O）', 'A mercenary no hire can be': '不可能僱用到的傭兵', 'Lower tiers': '較低層', 'Higher tiers': '較高層', 'Name': '名字', 'Class': '職業', 'Build': '配置', 'Time': '時間', 'Date': '日期', '1 hero': '1 位英雄', '* heroes': '{0} 位英雄', 'Loath': '憎惡', 'Glyph': '符紋', 'Imp': '小惡魔', 'Hailstone': '冰雹', 'Carrion': '腐屍', 'Bitter': '受難', 'Visor': '面甲', 'Shell': '甲殼', 'Wrap': '包裹', 'Cloak': '斗蓬', 'Flange': '凸緣', 'Whorl': '螺層',
'Empyrian': '天國', 'Rule': '統治', 'Wood': '木', 'Bar': '鐵棒', 'Crook': '鉤', 'Loom': '織布機', 'Harp': '豎琴', 'Mar': '損毀', 'Picket': '尖木', 'Pale': '尖樁', 'Order': '秩序', 'Blow': '重擊', 'Breaker': '破壞者', 'Grinder': '研磨者', 'Gnash': '咬牙', 'Sever': '斷裂者', 'Reaver': '強奪者', 'Rock': '磐石', 'Grasp': '抓取', 'Harness': '挽具', 'Fringe': '邊飾', 'Winding': '捲繞', 'Tread': '踏步', 'Brogues': '粗皮鞋', 'Entropy': '幽冥', 'Corruption': '腐化', 'Master': '專家',
'Keep a copy of your save: save it as a file in SAVES': '請備份存檔：在「存檔」把它存成檔案', 'Your save is kept only in this browser. A crash or clearing its data can lose it. Save it as a file now and then, and keep the file somewhere safe.': '你的存檔只放在這個瀏覽器裡，當機或清除瀏覽器資料都可能讓它不見。請不時把它存成檔案，放在安全的地方。',
'This browser\'s storage came up empty. The game\'s backup copy of your save was there, and your heroes are back from it.': '這個瀏覽器的儲存空間是空的。遊戲另外保留了一份你的存檔，已從那份存檔把你的英雄找回來。', 'Not legit: a stat its base can\'t roll': '不合規：底材不可能出現的屬性', 'Not legit: a value past what it rolls': '不合規：數值超過可能的範圍', 'Not legit: more affixes than it can hold': '不合規：詞綴數量超過上限',
'Not legit: stats outside its unique\'s': '不合規：屬性不在這件獨特物品的範圍內', 'Not legit: not what its roll made': '不合規：跟它擲出的結果不符', 'Not legit: an item the game no longer makes': '不合規：遊戲已不再產生的物品', 'Your *\'s clears go to the leaderboard': '你的{0}的通關紀錄會上傳到排行榜', 'Her mercenary wears *: not legit': '她的傭兵穿著{0}：不合規', 'She wears *: not legit': '她穿著{0}：不合規', 'Take it off: a red border marks it': '請卸下：有紅框的就是',
'Gear not legit': '裝備不合規', '* stat points: D2 gives * at level *': '{0} 屬性點數：D2 在等級 {2} 給 {1} 點', 'Akara\'s re-draft gives back a legit hero\'s': '在阿卡拉重新抽選，會還原成合規英雄的點數', 'Stat points over': '屬性點數超出', 'Her skills or passives: past what play gives': '她的技能或被動：超過正常遊玩能得到的', 'Skills over': '技能超出', 'An earlier *\'s build is not legit': '先前的{0}的配置不合規', 'Swap her back in and re-draft her at Akara': '把她換回來，到阿卡拉那裡重新抽選',
'Earlier hero': '先前的英雄', 'Your *\'s build or gear is not legit': '你的{0}的配置或裝備不合規', 'Re-draft her at Akara, or take off her red-bordered gear': '到阿卡拉那裡重新抽選，或卸下她有紅框的裝備', 'Another hero': '另一位英雄', 'The save is marked edited': '存檔已被標記為修改過', 'A re-draft at Akara, or a change of gear, checks it again': '在阿卡拉重新抽選或更換裝備時會重新檢查', 'Save edited': '存檔已修改', 'Runs don\'t count': '紀錄不算', 'Your runs count': '你的紀錄有效',
'Your runs don\'t count': '你的紀錄不算', 'Nothing in the save breaks the rules': '存檔裡沒有違規的地方', 'Each arrow bounces to 2 more monsters instead of flying on, each bounce dealing 80% of the last.': '每支箭不再直飛，而是再彈向 2 隻怪物，每次彈射造成上一次 80% 的傷害。', 'It fires 2 more arrows, but each deals 70% of the damage.': '多射出 2 支箭，但每支只造成 70% 的傷害。',
'Its arrows fly as one big arrow at the toughest monster in range, for 90% of their total damage.': '所有箭合成一支巨箭射向範圍內最強的怪物，造成總傷害的 90%。', 'Each arrow leaves burning ground along its flight for 1 second. It deals 40% less damage.': '每支箭沿飛行路線留下燃燒地面 1 秒。傷害減少 40%。', 'Half its damage is cold damage, which chills.': '一半傷害轉為冰寒傷害，並造成冰凍。',
'Each hit on the same monster within 2 seconds adds 10% to the next, up to 50%. It deals 20% less damage.': '2 秒內每次命中同一隻怪物，下一次傷害 +10%，最多 +50%。傷害減少 20%。', 'Each arrow splits into 3 chilling shards on hit, each for 30% of its damage. It deals 10% less damage.': '每支箭命中時分裂成 3 片冰凍碎片，每片造成 30% 的傷害。傷害減少 10%。',
'Each arrow deals 5% more damage to a chilled monster and 20% less to the rest.': '每支箭對被冰凍的怪物傷害增加 5%，對其他怪物減少 20%。', 'Each arrow leaves a trail of frost that chills monsters for 1 second. It deals 15% less damage.': '每支箭留下一道冰霜軌跡，冰凍怪物 1 秒。傷害減少 15%。', 'Each blast throws 3 bomblets that burst a moment later for 45% of its damage. The blast deals 20% less.': '每次爆炸拋出 3 顆小炸彈，稍後各造成 45% 的傷害。爆炸本身傷害減少 20%。',
'Its blast is 40% narrower, and it deals 35% more damage.': '爆炸範圍縮小 40%，傷害增加 35%。', 'Its arrows fly out in a full circle around you and deal 85% more damage.': '箭朝你四周射出一整圈，傷害增加 85%。', 'Full Circle': '全圓', 'Its arrows fly in a tight fan, most of them into the target. It deals 5% less damage.': '箭以窄扇形射出，大多射中目標。傷害減少 5%。',
'Each arrow flies out through every monster and back, hitting again. It deals 35% less damage.': '每支箭穿過所有怪物後飛回來，再命中一次。傷害減少 35%。', 'It fires 3 more arrows, but each deals 55% of the damage.': '多射出 3 支箭，但每支只造成 55% 的傷害。', 'Its arrows hunt the toughest monsters in range instead of the nearest. It deals 12% more damage.': '箭追蹤範圍內最強的怪物，而不是最近的。傷害增加 12%。',
'Half its damage is poison damage. It deals 45% more damage.': '一半傷害轉為毒素傷害。傷害增加 45%。', 'Each thrust also strikes the monsters beside its target for 20% of its damage. It deals 20% less damage.': '每次刺擊也會打中目標旁邊的怪物，造成 20% 的傷害。傷害減少 20%。', 'Half its damage is lightning damage.': '一半傷害轉為閃電傷害。', 'It thrusts twice instead of 3 times, but each thrust deals 50% more damage.': '刺擊 2 次而不是 3 次，但每次傷害增加 50%。',
'Its lightning also leaps to the nearest other monster for half the damage. The thrust deals 25% less damage.': '閃電也會跳到最近的另一隻怪物，造成一半傷害。刺擊傷害減少 25%。', 'Each strike on the same monster within 2 seconds adds 10% to the next, up to 50%. It deals 20% less damage.': '2 秒內每次打擊同一隻怪物，下一次傷害 +10%，最多 +50%。傷害減少 20%。',
'Each javelin leaves a cloud 3 times as wide where it lands, for 3 seconds, with 30% more poison. It leaves no trail.': '每支標槍在落點留下 3 倍寬的毒雲 3 秒，毒素增加 30%。不會留下軌跡。', 'Each javelin deals 40% more poison to the monster it strikes. It leaves no trail.': '每支標槍對命中的怪物毒素傷害增加 40%。不會留下軌跡。', 'Its clouds burn with fire damage instead of poisoning.': '雲造成火焰傷害，而不是毒素。',
'The thrust also strikes the monsters just behind its target for 6% of its damage. It deals 15% less damage.': '刺擊也會打中目標正後方的怪物，造成 6% 的傷害。傷害減少 15%。', 'Half its damage is poison damage. It deals 8% more damage.': '一半傷害轉為毒素傷害。傷害增加 8%。', 'It deals 40% more damage to elites and bosses, and 30% less to the rest.': '對精英和首領傷害增加 40%，對其他怪物減少 30%。',
'It forks into 3 bolts at the first monster it hits, each for 25% of its damage. It deals 10% less damage.': '命中第一隻怪物時分岔成 3 道，每道造成 25% 的傷害。傷害減少 10%。', 'Its lightning strikes the toughest monsters in range from the sky and bursts around them. It deals 30% more damage.': '閃電從天而降打在範圍內最強的怪物身上，並在周圍爆開。傷害增加 30%。', '3 Valkyries fight at your side, each dealing 40% of the damage.': '3 位女武神在你身旁作戰，每位造成 40% 的傷害。',
'She hunts the toughest monster near you and deals 30% more damage.': '她追擊你附近最強的怪物，傷害增加 30%。', 'Half her damage is cold damage, which chills.': '她的一半傷害轉為冰寒傷害，並造成冰凍。', 'A monster it kills or that dies frozen bursts into 4 ice shards, each for 38% of its damage. It freezes for 0.8s.': '被它擊殺或冰凍時死亡的怪物會爆成 4 片冰碎片，每片造成 38% 的傷害。冰凍 0.8 秒。',
'Its arrows go for the toughest monsters first and freeze them for 2.4 seconds. It deals 15% more damage.': '箭優先射向最強的怪物，並冰凍 2.4 秒。傷害增加 15%。', 'Half its damage is fire damage. It freezes for 0.72 seconds.': '一半傷害轉為火焰傷害。冰凍 0.72 秒。', 'It fires 18 arrows instead of 12, but each deals 75% of the damage.': '射出 18 支箭而不是 12 支，但每支只造成 75% 的傷害。',
'When an elite or boss is in range, all 12 arrows fly at it. It deals 12% more damage.': '範圍內有精英或首領時，12 支箭全部射向它。傷害增加 12%。', 'Half its damage is cold damage, which chills. It deals 45% more damage.': '一半傷害轉為冰寒傷害，並造成冰凍。傷害增加 45%。', 'Each thrust deals 25% less damage, but also strikes the monsters just behind its target for 7%.': '每次刺擊傷害減少 25%，但也會打中目標正後方的怪物，造成 7%。',
'It ends with one more thrust at the toughest monster in reach. The other thrusts deal 10% less damage.': '最後再對攻擊範圍內最強的怪物刺一次。其他刺擊傷害減少 10%。', 'Its lightning also leaps to the 2 nearest other monsters for 30% of the thrust\'s damage.': '閃電也會跳到最近的另外 2 隻怪物，造成刺擊 30% 的傷害。', 'The monster it strikes takes 12% of its 7 bolts\' damage again 0.5 seconds later.': '被打中的怪物 0.5 秒後再受到 7 道閃電傷害的 12%。',
'Its lightning splits in two at every jump, 3 times, up to 14 monsters, but each jump deals 60% of the damage.': '閃電每次跳躍都一分為二，共 3 次，最多 14 隻怪物，但每次跳躍只造成 60% 的傷害。', 'With no monster to jump to, its lightning strikes the same one 3 times for 12% each. It deals 10% less damage.': '沒有怪物可跳時，閃電對同一隻怪物打 3 次，每次 12%。傷害減少 10%。',
'Each burst leaves a cloud as wide as itself for 4 seconds, with 30% more poison.': '每次爆開都留下同樣大小的毒雲 4 秒，毒素增加 30%。', 'Each burst is half as wide with 80% more poison. It leaves no trail.': '每次爆開範圍減半，毒素增加 80%。不會留下軌跡。', 'Its trail and burst burn with fire damage instead of poisoning.': '軌跡和爆開造成火焰傷害，而不是毒素。',
'Its lightning chains from monster to monster instead of forking out from where the javelin strikes.': '閃電在怪物之間連鎖跳躍，而不是從標槍落點分岔出去。', 'Its lightning forks to 5 monsters instead of 10, but each javelin deals 50% more damage.': '閃電分岔到 5 隻怪物而不是 10 隻，但每支標槍傷害增加 50%。', 'Each burst leaves frost on the ground for 2 seconds, dealing 40% of the burst\'s damage a second.': '每次爆開在地上留下冰霜 2 秒，每秒造成爆開傷害的 40%。',
'Each burst is 30% narrower and freezes monsters solid for 1 second. It deals 25% more damage.': '每次爆開範圍縮小 30%，並把怪物凍結 1 秒。傷害增加 25%。', 'Half its damage is fire damage.': '一半傷害轉為火焰傷害。', 'It leaves burning ground twice the size for 4 seconds instead of 3. The blast deals 45% less damage.': '留下兩倍大的燃燒地面，持續 4 秒而不是 3 秒。爆炸傷害減少 45%。',
'Fire clings to the monster it strikes for 3 seconds, burning for 25% of the ground\'s damage.': '火焰附著在被打中的怪物身上 3 秒，造成地面傷害的 25%。', 'It fires 8 arrows instead of 4, but each deals 57% of the damage.': '射出 8 支箭而不是 4 支，但每支只造成 57% 的傷害。', 'Each arrow comes back round to strike its first target once more. It deals 30% less damage.': '每支箭繞回來再打一次第一個目標。傷害減少 30%。',
'Half its damage is magic damage. It deals 15% more damage.': '一半傷害轉為魔法傷害。傷害增加 15%。', 'Each bomb bursts for 70% and scatters 3 bomblets around it that burst for 45% each.': '每顆炸彈爆炸造成 70%，並在周圍散出 3 顆小炸彈，各造成 45%。', 'Each bomb bursts for 60% and leaves the ground burning for 50% more over 2 seconds.': '每顆炸彈爆炸造成 60%，並讓地面燃燒 2 秒，再造成 50%。',
'The bomb sticks to the toughest monster and bursts on it a moment later for 200%. It takes 80% longer to recharge.': '炸彈黏在最強的怪物身上，稍後爆炸造成 200%。冷卻時間增加 80%。', 'It throws 2 more webs, spread wider, but each deals 80% of the damage.': '多丟出 2 張網，散得更開，但每張只造成 80% 的傷害。', 'Each web crawls toward the nearest monster and deals 50% more damage.': '每張網爬向最近的怪物，傷害增加 50%。',
'One wider web lands under the toughest monster. It deals 10% more than all the webs together and chills.': '一張更大的網落在最強的怪物腳下，傷害比所有網加起來多 10%，並造成冰凍。', 'Each throw sets 2 sentries, but each bolt deals 80% of the damage.': '每次投擲設下 2 個哨兵，但每道電擊只造成 80% 的傷害。', 'When the sentry ends, it fires a ring of 16 charged bolts, each for 10% of a bolt\'s damage.': '哨兵結束時射出一圈 16 道充能彈，每道造成一道電擊 10% 的傷害。',
'Each burst is one straight charged bolt with 4 times the damage.': '每次發射改為一道直線充能彈，傷害 4 倍。', 'It sends out 2 blades, each dealing 95% of the damage and each counting as one of your traps.': '放出 2 把刀刃，每把造成 95% 的傷害，各算一個陷阱。', 'The blade circles you instead of going to the pack, and deals 20% more damage.': '刀刃繞著你轉，而不是飛向怪群，傷害增加 20%。',
'Each cut deals 20% more to elites and bosses and 40% less to other monsters.': '每次切割對精英和首領傷害增加 20%，對其他怪物減少 40%。', 'The release deals 70% to its target and 42% to the 4 nearest monsters around it.': '釋放時對目標造成 70%，對周圍最近的 4 隻怪物造成 42%。', 'Half its damage is lightning damage, and it deals 22% less.': '一半傷害轉為閃電傷害，傷害減少 22%。',
'It holds up to 6 charges and releases them on the seventh blow.': '最多累積 6 層充能，在第七擊釋放。', 'The drain also hits the 4 nearest monsters around its target, for 25% each.': '吸取也會打中目標周圍最近的 4 隻怪物，各造成 25%。', 'It drains every third blow instead of every fourth. Each drain deals a third less, and heals a third less of it.': '每三擊吸取一次，而不是每四擊。每次吸取傷害少三分之一，回復量也少三分之一。',
'The drain deals 80% more to elites and bosses and 40% less to other monsters.': '吸取對精英和首領傷害增加 80%，對其他怪物減少 40%。', 'The fire burst is twice as wide, but deals 20% less damage.': '火焰爆發範圍加倍，但傷害減少 20%。', 'Each of the first 3 blows bursts in fire for 55% of the burst, and the fourth blow bursts in none.': '前 3 擊每擊都爆出火焰，造成爆發的 55%，第四擊不爆。',
'The fourth blow sets the ground under its target burning 2.6 times as hard, instead of bursting in fire.': '第四擊不爆出火焰，改為讓目標腳下的地面燃燒，強度 2.6 倍。', 'Each kick also hits the 2 nearest monsters beside its target for 12%.': '每次踢擊也會打中目標旁邊最近的 2 隻怪物，造成 12%。', 'Half its damage is fire damage, and it deals 25% less.': '一半傷害轉為火焰傷害，傷害減少 25%。',
'Each kick makes its target take 8% more damage for 4 seconds, up to 40%. Kicks deal 15% less.': '每次踢擊讓目標 4 秒內受到的傷害增加 8%，最多 40%。踢擊傷害減少 15%。', 'Each blow also hits the 2 nearest monsters around its target for 15%.': '每一擊也會打中目標周圍最近的 2 隻怪物，造成 15%。', 'Each blow lands again a moment later for 40% of it. It deals 30% less damage.': '每一擊稍後再打一次，造成 40%。傷害減少 30%。',
'One blow hits the toughest monster for 110% of all the blows together, without knocking it back.': '改為一擊打在最強的怪物身上，造成所有攻擊加總的 110%，不會擊退。', 'It reaches 60% farther, but lasts 40% less time.': '範圍增加 60%，但持續時間減少 40%。', 'It reaches half as far but moves with you, blinding each monster that walks in.': '範圍減半，但會跟著你移動，走進來的怪物都會失明。',
'It blinds only the toughest monster, for twice as long, and doubles the extra damage it takes.': '只讓最強的怪物失明，持續時間加倍，它額外受到的傷害也加倍。', 'Two shadows fight beside you, each with 60% of the damage and 60% of the life.': '兩個影子在你身旁作戰，各有 60% 的傷害和 60% 的生命。', 'Your shadow has 30% less life. When slain, it deals 4 blows\' damage to all monsters around it.': '你的影子生命減少 30%。被擊殺時，對周圍所有怪物造成 4 擊的傷害。',
'Your shadow hunts the toughest monster near you and deals 35% more damage.': '你的影子追擊你附近最強的怪物，傷害增加 35%。', 'Each wave is a full circle of 14 flames, but deals 35% less damage.': '每波是一整圈 14 道火焰，但傷害減少 35%。', 'It sends out 4 waves instead of 5, then bursts in a fire nova for half a wave as it ends.': '放出 4 波而不是 5 波，結束時爆出火焰新星，造成半波的傷害。',
'Each wave is 3 flames in a narrow line, each burning for 45% of the damage.': '每波是一條窄線上的 3 道火焰，每道造成 45% 的傷害。', 'It breathes 3 streams of fire in a narrow fan, each dealing 37% of the damage.': '以窄扇形噴出 3 道火焰，每道造成 37% 的傷害。', 'The trap rides at your shoulder instead of standing near the pack.': '陷阱跟在你肩旁，而不是放在怪群附近。',
'The trap lands at the toughest monster\'s feet, and its fire reaches half as far.': '陷阱落在最強的怪物腳下，火焰範圍減半。', 'Each shot is 3 lines of lightning in a 40° fan, each dealing 31% of the damage.': '每次射擊是 40° 扇形的 3 道閃電，每道造成 31% 的傷害。', 'When the sentry ends, it bursts in a lightning nova for 30% of a shot.': '哨兵結束時爆出閃電新星，造成一次射擊的 30%。',
'Each shot goes at the toughest monster in range, but deals 5% less damage.': '每次射擊打向範圍內最強的怪物，但傷害減少 5%。', 'It blows up 2 corpses each shot, each for 60% of the damage.': '每次射擊引爆 2 具屍體，每具造成 60% 的傷害。', 'It fires 4 times instead of 5, then bursts in a lightning nova for 60% of a shot as it ends.': '射擊 4 次而不是 5 次，結束時爆出閃電新星，造成一次射擊的 60%。',
'It blows up no corpses, but each shot goes at the toughest monster in range for 15% more.': '不引爆屍體，但每次射擊打向範圍內最強的怪物，傷害增加 15%。', 'It throws 10 blades instead of 6, each dealing 62% of the damage.': '丟出 10 把刀刃而不是 6 把，每把造成 62% 的傷害。', 'It throws 4 blades that fly out and back, cutting both ways, for 18% less damage.': '丟出 4 把飛出去再飛回來的刀刃，來回都會切割，傷害減少 18%。',
'All 6 blades fly at an elite or boss in range when there is one, and deal 12% more damage.': '範圍內有精英或首領時，6 把刀刃全部飛向它，傷害增加 12%。', 'The spinning blades reach twice as far, but cut for 45% less damage.': '旋轉刀刃範圍加倍，但傷害減少 45%。', 'It lasts 7 seconds. As it ends or is cast again, 24 blades fly out in a ring, each for 120% of a thrown blade.': '持續 7 秒。結束或再次施放時，24 把刀刃環狀飛出，每把造成一把飛刃的 120%。',
'Its thrown blades fly at the toughest monster near you and deal 20% more damage.': '飛刃射向你附近最強的怪物，傷害增加 20%。', 'Its blows let go chain lightning and chaos ice in turn, and every fourth a meteor. Each deals 15% less.': '攻擊輪流釋放連鎖閃電和混沌冰，每四擊放一次隕石。各自傷害減少 15%。',
'The first 3 blows let go nothing, and the fourth lets go the meteor, chain lightning and chaos ice at 110%.': '前 3 擊什麼都不放，第四擊同時放出隕石、連鎖閃電和混沌冰，造成 110%。', 'Every blow lets go a meteor, at 40% of its damage.': '每一擊都放出隕石，造成 40% 的傷害。', 'The release\'s lightning arcs on to 6 more monsters at 90%, and its nova deals 20% less.': '釋放的閃電再跳到 6 隻怪物，造成 90%，新星傷害減少 20%。',
'Each of the first 3 blows zaps the nearest other monster for 20% of the release, which deals 10% less.': '前 3 擊每擊都電擊最近的另一隻怪物，造成釋放的 20%，釋放傷害減少 10%。', 'The release\'s lightning and charged bolts deal twice the damage, and its nova half.': '釋放的閃電和充能彈傷害加倍，新星傷害減半。', 'The release also throws 8 ice shards out of its target, each dealing 70% as physical damage.': '釋放時也從目標身上射出 8 片冰碎片，每片造成 70% 的物理傷害。',
'Half its damage is fire damage, and it deals 10% less.': '一半傷害轉為火焰傷害，傷害減少 10%。', 'The release deals 80% more to its target and the shatter 35% less. It makes no ice cubes.': '釋放對目標傷害增加 80%，碎裂傷害減少 35%。不會產生冰塊。', 'Both blows also hit the 2 nearest monsters beside its target for 1.5%.': '兩擊都會打中目標旁邊最近的 2 隻怪物，造成 1.5%。', 'Half its damage is lightning damage, and it deals 25% less.': '一半傷害轉為閃電傷害，傷害減少 25%。',
'Its blows deal 20% more to elites and bosses and 40% less to other monsters.': '攻擊對精英和首領傷害增加 20%，對其他怪物減少 40%。', 'Its fire bursts 80% wider, but deals 5% less damage.': '火焰爆發範圍增加 80%，但傷害減少 5%。', 'Its fire bursts for 70%, then burns on its target for 2 seconds for 60% more.': '火焰爆發造成 70%，接著在目標身上燃燒 2 秒，再造成 60%。', 'Its fire bursts half as wide, but deals 70% more damage.': '火焰爆發範圍減半，但傷害增加 70%。',
'The kick deals 20% less, but also hits the 4 nearest monsters around its target for 9%.': '踢擊傷害減少 20%，但也會打中目標周圍最近的 4 隻怪物，造成 9%。', 'It kicks twice, each kick dealing 49% of the damage.': '踢兩次，每次造成 49% 的傷害。', 'It flies first to an elite or boss in a wider range, kicking for 30% more. Its other kicks deal 10% less.': '優先在更大範圍內飛向精英或首領，踢擊傷害增加 30%。其他踢擊傷害減少 10%。',
'The blast is nearly twice as wide, but deals 25% less damage and stuns for 1 second.': '衝擊範圍將近兩倍，但傷害減少 25%，暈眩 1 秒。', 'It blasts again 1 second later for half as much. It deals 34% less damage and stuns for 1 second.': '1 秒後再衝擊一次，傷害減半。傷害減少 34%，暈眩 1 秒。', 'A tight blast on the toughest monster deals 70% more damage and stuns for 3 seconds.': '對最強的怪物集中衝擊，傷害增加 70%，暈眩 3 秒。',
'Two shadow masters fight beside you, each with 60% of the damage and 50% of the life.': '兩個暗影大師在你身旁作戰，各有 60% 的傷害和 50% 的生命。', 'Your shadow master has 30% less life. When slain, it lets go its fire, lightning and ice bursts at once.': '你的暗影大師生命減少 30%。被擊殺時，一次放出火焰、閃電和冰的爆發。', 'Your shadow master hunts the toughest monster near you and deals 35% more damage.': '你的暗影大師追擊你附近最強的怪物，傷害增加 35%。',
'Every third swing cracks the ground ahead, hitting 4 monsters along it for a full blow. Its blows deal 15% less.': '每第三次揮擊震裂前方地面，沿線打中 4 隻怪物，造成一擊完整傷害。攻擊傷害減少 15%。', 'It deals 35% more damage to elites and bosses, and 25% less to other monsters.': '對精英和首領傷害增加 35%，對其他怪物減少 25%。', 'Half its damage is lightning, and it deals 35% more damage.': '一半傷害轉為閃電，傷害增加 35%。',
'It knocks its target 4 times as far, and up to 3 monsters it lands beside take 60% of the blow.': '把目標擊退 4 倍遠，落點旁最多 3 隻怪物受到這一擊 60% 的傷害。', 'Its target is not knocked back and takes 20% more damage for 3 seconds. It deals 15% less damage.': '目標不會被擊退，且 3 秒內受到的傷害增加 20%。傷害減少 15%。',
'It also hits the 3 monsters nearest its target for 40% and stuns them half as long. It deals 20% less damage.': '也會打中目標最近的 3 隻怪物，造成 40%，暈眩時間減半。傷害減少 20%。', 'Its target takes 12% more damage while stunned and for 2 seconds after. The stun is 40% shorter.': '目標暈眩期間及之後 2 秒受到的傷害增加 12%。暈眩時間縮短 40%。',
'When the stun ends, the 4 monsters nearest its target take 8% of the blow. The stun is 25% shorter.': '暈眩結束時，目標最近的 4 隻怪物受到這一擊 8% 的傷害。暈眩時間縮短 25%。', 'The landing pulls in monsters from 50% farther instead of knocking them back. It deals 5% less damage.': '落地時從遠 50% 的範圍把怪物拉過來，而不是擊退。傷害減少 5%。',
'The landing strikes again 0.4 seconds later, but each landing deals half the damage.': '落地 0.4 秒後再衝擊一次，但每次只造成一半傷害。', 'The landing reaches half as far but deals 50% more damage, and stuns for 0.5 seconds instead of knocking back.': '落地範圍減半但傷害增加 50%，改為暈眩 0.5 秒而不是擊退。', 'Each axe flies out through every monster and comes back, but each hit deals 40% of the damage.': '每把斧頭穿過所有怪物後飛回來，但每次命中只造成 40% 的傷害。',
'It throws one axe instead of two, with 120% more damage. The axe passes through 2 monsters and knocks them back.': '只丟一把斧頭而不是兩把，傷害增加 120%。斧頭穿過 2 隻怪物並擊退牠們。', 'Half its damage is poison, and it deals 40% more damage.': '一半傷害轉為毒素，傷害增加 40%。', 'It hits monsters 71% farther around you, but deals 28% less damage.': '打中你周圍遠 71% 的怪物，但傷害減少 28%。',
'It whirls onto the toughest monster nearby and spins on it for 2 seconds. It deals 7% less damage.': '旋轉衝向附近最強的怪物，在它身上轉 2 秒。傷害減少 7%。', 'Half its damage is fire, and the ground you whirl over burns for 1.5 seconds. It deals 10% more damage.': '一半傷害轉為火焰，旋轉經過的地面燃燒 1.5 秒。傷害增加 10%。', 'Monsters are stunned in place instead of fleeing, for half as long.': '怪物原地暈眩而不是逃跑，時間減半。',
'It howls again 2 seconds later, and monsters flee 60% as long. It takes 40% longer to recharge.': '2 秒後再嚎叫一次，怪物逃跑時間為 60%。冷卻時間增加 40%。', 'It howls whenever monsters crowd you, hurt or not, but they flee half as long.': '只要怪物圍住你，不管有沒有受傷都會嚎叫，但怪物逃跑時間減半。', 'The 5 toughest monsters nearby charge you, each for half as long and with its blows weakened half as much.': '附近最強的 5 隻怪物衝向你，持續時間減半，攻擊削弱的程度也減半。',
'It taunts only elites and bosses, which take 20% more damage while taunted. It takes 30% longer to recharge.': '只嘲諷精英和首領，被嘲諷時受到的傷害增加 20%。冷卻時間增加 30%。', 'It cuts twice as much physical damage below 40% life, and half as much above.': '生命低於 40% 時減少兩倍的物理傷害，高於時只減少一半。', 'It cuts half as much physical damage alone, rising to 1.5 times with 10 monsters around you.': '單獨時只減少一半的物理傷害，周圍有 10 隻怪物時提高到 1.5 倍。',
'It cuts half as much physical damage, but each melee blow on you strikes back for 56 damage.': '只減少一半的物理傷害，但每次被近戰攻擊都會反擊 56 點傷害。', 'Only the toughest monster around you takes more damage, but twice as much and for 50% longer.': '只有你周圍最強的怪物受到更多傷害，但效果加倍，持續時間增加 50%。', 'It reaches 80% farther, but the extra damage monsters take is 40% lower.': '範圍增加 80%，但怪物額外受到的傷害降低 40%。',
'When a monster it affects dies, the monsters near it are affected for the time left. Its reach is 40% shorter.': '受影響的怪物死亡時，附近的怪物會受到影響，持續剩下的時間。範圍縮短 40%。', 'It rings again 0.5 seconds later. Each deals half the damage and stuns half as long.': '0.5 秒後再響一次。每次傷害減半，暈眩時間也減半。',
'It hits a cone toward the toughest monster, 60% farther, for 70% more damage and 50% longer stuns.': '朝最強的怪物打出錐形範圍，遠 60%，傷害增加 70%，暈眩時間增加 50%。', 'Half its damage is lightning, and it deals 40% more damage.': '一半傷害轉為閃電，傷害增加 40%。', 'The totem draws monsters to it instead of making them flee. It stands for 30% less time.': '圖騰把怪物吸引過來，而不是讓牠們逃跑。存在時間減少 30%。',
'Monsters near the totem take 25% more damage instead of fleeing in terror.': '圖騰附近的怪物受到的傷害增加 25%，而不是驚恐逃跑。', 'The totem bursts for 168 damage around it as it falls. It stands for 40% less time.': '圖騰倒下時在周圍爆炸，造成 168 點傷害。存在時間減少 40%。', 'Each blow also hits every monster in reach around you for 25%, instead of 50% in front. Blows deal 15% less.': '每一擊也會打中你周圍攻擊範圍內所有怪物，造成 25%，而不是前方的 50%。攻擊傷害減少 15%。',
'Each swing in a row at the same monster deals 4% more to it, up to 20%. Switching monsters resets it.': '連續揮向同一隻怪物，每次傷害增加 4%，最多 20%。換目標就重新計算。', 'Half its damage is fire, and it deals 35% more damage.': '一半傷害轉為火焰，傷害增加 35%。', 'The splash deals 100 instead of 60, but the blow deals 20% less.': '濺射造成 100 而不是 60，但這一擊傷害減少 20%。',
'Each blow makes its target take 4.5% more damage for 3 seconds, adding up to 22.5%.': '每一擊讓目標 3 秒內受到的傷害增加 4.5%，最多疊加到 22.5%。', 'Half its damage is lightning, and the splash also arcs to the 3 nearest monsters. It deals 35% more damage.': '一半傷害轉為閃電，濺射也會電到最近的 3 隻怪物。傷害增加 35%。',
'A killing blow bursts the body, dealing 30% of the blow to the 4 nearest monsters. It deals 15% less damage.': '致命一擊讓屍體爆開，對最近的 4 隻怪物造成這一擊 30% 的傷害。傷害減少 15%。', 'It deals 90% more damage and stuns for 0.6 seconds. It takes 67% longer to recharge.': '傷害增加 90%，暈眩 0.6 秒。冷卻時間增加 67%。', 'It deals 50% more damage below 40% life, and 15% less above.': '生命低於 40% 時傷害增加 50%，高於時減少 15%。',
'The ground where you land cracks for 2 seconds, dealing 16% of the landing\'s damage a second. The strike deals 25% less.': '落地處的地面龜裂 2 秒，每秒造成落地傷害的 16%。打擊傷害減少 25%。', 'The strike deals 30% more damage and stuns for 1 second.': '打擊傷害增加 30%，暈眩 1 秒。', 'The axes fly out through every monster and come back, but each hit deals 42% of the damage.': '斧頭穿過所有怪物後飛回來，但每次命中只造成 42% 的傷害。',
'All 6 axes fly at the toughest elite or boss in range, when there is one. They deal 12% more damage.': '範圍內有精英或首領時，6 把斧頭全部飛向最強的那隻。傷害增加 12%。', 'It works only near where you cast it, but its damage reduction and added life are 50% higher.': '只在施放處附近有效，但減傷和增加的生命提高 50%。', 'It adds no life, but your blows steal 4% of their damage as life.': '不增加生命，但你的攻擊會偷取 4% 傷害作為生命。',
'Each time it renews it heals 25% of your life, but its damage reduction and added life are halved.': '每次重新施放時回復你 25% 的生命，但減傷和增加的生命減半。', 'It sends 5 fire trails instead of 3 in a wider fan, each dealing 30% less damage.': '以更寬的扇形放出 5 道火焰軌跡而不是 3 道，每道傷害減少 30%。',
'It sends one fire trail instead of 3, at the toughest monster, twice as wide and dealing 65% more damage.': '只放出一道火焰軌跡而不是 3 道，朝向最強的怪物，寬度加倍，傷害增加 65%。', 'Each blast has 7 shards instead of 5, in a fan twice as wide, each dealing 20% less damage.': '每次噴發 7 片碎片而不是 5 片，扇形寬度加倍，每片傷害減少 20%。',
'Each blast is one lance that flies twice as far, deals 4.6 times a shard\'s damage and stuns for 0.4 seconds.': '每次噴發改為一支飛兩倍遠的冰槍，造成一片碎片 4.6 倍的傷害，暈眩 0.4 秒。', 'Half its damage is fire damage, and each shard leaves a small fire where it ends.': '一半傷害轉為火焰傷害，每片碎片在終點留下一小團火。', 'It erupts over twice the ground, with 75% more bursts.': '噴發範圍兩倍大，爆發次數增加 75%。',
'It erupts under the toughest monster, a little tighter, each burst dealing 10% more damage.': '在最強的怪物腳下噴發，範圍稍微縮小，每次爆發傷害增加 10%。', 'It erupts around you as you move, for 3 seconds instead of 1.6, each burst dealing 45% less damage.': '跟著你移動時在你周圍噴發，持續 3 秒而不是 1.6 秒，每次爆發傷害減少 45%。', 'It sends twice as many faster twisters that don\'t stun, each dealing 45% less damage.': '放出兩倍數量、速度更快的旋風，但不會暈眩，每道傷害減少 45%。',
'It sends one large twister that deals 3.7 times the damage and stuns for 1 second instead of 0.5.': '放出一道大旋風，傷害 3.7 倍，暈眩 1 秒而不是 0.5 秒。', 'Each twister pulls nearby monsters toward it instead of stunning, and deals 38% less damage.': '每道旋風把附近的怪物拉過來而不是暈眩，傷害減少 38%。', 'It keeps up to 9 ravens, each pecking for 42% less damage.': '最多 9 隻烏鴉，每隻啄擊傷害減少 42%。',
'It keeps one raven with 3 times the life and 4.6 times the damage, which pecks until it dies.': '只有一隻烏鴉，生命 3 倍、傷害 4.6 倍，會一直啄到死亡。', 'Each peck stops the monster attacking for 2 seconds, and the ravens deal 3% less damage.': '每次啄擊讓怪物 2 秒內無法攻擊，烏鴉傷害減少 3%。', 'It raises 50% more creepers, each with 30% of the poison and life.': '召喚多 50% 的藤蔓，每株只有 30% 的毒素和生命。',
'It raises one creeper with 4.5 times the poison, whose bite stuns for 1 second.': '召喚一株毒素 4.5 倍的藤蔓，咬擊會暈眩 1 秒。', 'Each bite also poisons up to 3 monsters near its target at 3% of its poison, but its own poison is 15% less.': '每次咬擊也會讓目標附近最多 3 隻怪物中毒，造成 3% 的毒素，但本身毒素減少 15%。', 'Its life bonus is twice as much while you are below half life, and half as much above.': '生命低於一半時生命加成加倍，高於時減半。',
'It adds no maximum life, but heals you 2% of your maximum life each second.': '不增加生命上限，但每秒回復你生命上限的 2%。', 'Your summons get its life bonus in full, and you get half.': '你的召喚物得到全部的生命加成，你自己只得到一半。', 'The claw sweeps all around you instead of to one side, and deals 35% less damage.': '爪擊掃過你四周而不是單側，傷害減少 35%。',
'Each claw deals 20% more damage and its target takes twice the Rabies poison, but the sweep is halved.': '每次爪擊傷害增加 20%，目標受到兩倍的狂犬病毒素，但橫掃範圍減半。', 'Half its damage is lightning damage, and it deals 5% more damage.': '一半傷害轉為閃電傷害，傷害增加 5%。', 'Each blow splashes twice as wide at 50% of its damage instead of 60%, and deals 10% less.': '每一擊的濺射範圍加倍，但只造成 50% 而不是 60%，傷害減少 10%。',
'Each blow deals 20% more damage, stuns for 0.3 seconds and doubles its target\'s Rabies, but its splash is halved.': '每一擊傷害增加 20%，暈眩 0.3 秒，目標的狂犬病加倍，但濺射範圍減半。', 'You take 40% less damage, but each swing takes 25% longer.': '受到的傷害減少 40%，但每次揮擊時間增加 25%。', 'It rolls 4 smaller boulders in a fan, each dealing 40% less damage, and they don\'t burst.': '以扇形滾出 4 顆較小的巨石，每顆傷害減少 40%，而且不會爆開。',
'It rolls one huge boulder at half speed that bursts twice as wide and deals 5% more damage.': '以一半速度滾出一顆超大巨石，爆開範圍加倍，傷害增加 5%。', 'Each boulder rolls back toward you, hitting again, but deals 48% less damage and doesn\'t burst.': '每顆巨石會滾回你這邊再打一次，但傷害減少 48%，而且不會爆開。', 'Its rocks burst over nearly twice the area, each dealing 20% less damage.': '岩石爆開範圍將近兩倍，每顆傷害減少 20%。',
'It rises under the toughest monster, its rocks falling close around it, each dealing 15% less damage.': '在最強的怪物腳下升起，岩石落在它周圍，每顆傷害減少 15%。', 'Each rock leaves burning ground for 2 seconds, but deals 40% less damage.': '每顆岩石留下燃燒地面 2 秒，但傷害減少 40%。', 'Its rocks fall on any monster nearby and each leaves fire, but they deal 20% less damage.': '岩石落在附近任何怪物身上，每顆都留下火焰，但傷害減少 20%。',
'Every rock falls on an elite or boss when one is near, and the rocks deal 12% more damage.': '附近有精英或首領時，所有岩石都落在它身上，傷害增加 12%。', 'Each tornado pulls nearby monsters toward it instead of stunning, and deals 40% less damage.': '每道龍捲風把附近的怪物拉過來而不是暈眩，傷害減少 40%。', 'A tornado that reaches an elite or boss stays on it, striking for 5% of its damage every 0.4 seconds.': '碰到精英或首領的龍捲風會停在它身上，每 0.4 秒造成 5% 的傷害。',
'Half its damage is fire damage, and each tornado leaves flames behind it for 1 second.': '一半傷害轉為火焰傷害，每道龍捲風在身後留下火焰 1 秒。', 'The storm reaches 50% farther, but deals 10% less damage.': '風暴範圍增加 50%，但傷害減少 10%。', 'The storm reaches about half as far, but deals 20% more damage.': '風暴範圍約減半，但傷害增加 20%。',
'The storm strikes once every 2 seconds for the same damage in all, knocking monsters back.': '風暴每 2 秒打一次，總傷害不變，並擊退怪物。', 'It raises up to 9 spirit wolves instead of 5, each with 38% less damage and life.': '最多召喚 9 隻靈狼而不是 5 隻，每隻傷害和生命減少 38%。', 'It raises 2 spirit wolves instead of 5, each with 2.5 times the damage and life.': '召喚 2 隻靈狼而不是 5 隻，每隻傷害和生命 2.5 倍。',
'Half the wolves\' damage is cold damage, which chills, and they deal 35% more.': '狼的一半傷害轉為冰寒傷害並造成冰凍，傷害增加 35%。', 'It raises up to 6 dire wolves instead of 3, each biting for half the damage.': '最多召喚 6 隻恐狼而不是 3 隻，每隻咬擊傷害減半。', 'It raises one dire wolf with 3.4 times the damage and life, whose bites stun for 0.3 seconds.': '召喚一隻傷害和生命 3.4 倍的恐狼，咬擊會暈眩 0.3 秒。',
'The dire wolves bite 30% faster, each bite dealing 25% less damage.': '恐狼咬擊速度快 30%，每次咬擊傷害減少 25%。', '5 more spirit wolves and 3 more dire wolves come instead of the grizzly, and the pack keeps its damage bonus.': '不召喚灰熊，改為多 5 隻靈狼和 3 隻恐狼，狼群保留傷害加成。', 'Only the grizzly and ravens come, and its swipe deals 2.5 times the damage and stuns for 0.5 seconds.': '只召喚灰熊和烏鴉，灰熊揮擊傷害 2.5 倍，暈眩 0.5 秒。',
'Each wolf bite and grizzly swipe also poisons, spreading as Rabies does, but deals 20% less damage.': '每次狼咬和灰熊揮擊也會造成中毒，會像狂犬病一樣傳染，但傷害減少 20%。', 'Each corpse it eats also poisons the monsters around it, but heals you half as much.': '每吃一具屍體也會讓周圍的怪物中毒，但回復你的量減半。', 'Each corpse it eats also heals your summons 4% of their maximum life.': '每吃一具屍體也會回復你的召喚物 4% 的生命上限。',
'Above 35% life, it saves each corpse\'s heal, up to 5, and gives them all at once below 35%.': '生命高於 35% 時把每具屍體的回復存起來，最多 5 次，低於 35% 時一次全部給你。', 'Each corpse it eats also bursts in fire around it, but speeds recharge 3% instead of 6%.': '每吃一具屍體也會在周圍爆出火焰，但冷卻加速 3% 而不是 6%。',
'Each corpse it eats speeds recharge for 15 seconds instead of 5, up to 18% instead of 30%.': '每吃一具屍體冷卻加速持續 15 秒而不是 5 秒，最多 18% 而不是 30%。', 'Each second you stand still speeds recharge 6%, up to 30%, until you move. The Solar Creeper eats no corpses.': '每站著不動 1 秒冷卻加速 6%，最多 30%，移動後消失。太陽藤蔓不吃屍體。',
'Its damage bonus grows with the monsters near you, from half alone to 1.5 times at 15 or more.': '傷害加成隨你附近的怪物數增加，單獨時一半，15 隻以上時 1.5 倍。', 'Its damage bonus is 1.6 times with an elite or boss near you, and 0.6 times without.': '附近有精英或首領時傷害加成 1.6 倍，沒有時 0.6 倍。', 'Its damage bonus is 1.8 times on your blows, and none on your summons.': '對你自己的攻擊傷害加成 1.8 倍，對召喚物沒有加成。',
'The damage it returns is saved and let out every 2 seconds in a nova around you.': '反彈的傷害會累積起來，每 2 秒在你周圍以新星放出。', 'It returns 2.5 times the damage while you are below 40% life, and half above.': '生命低於 40% 時反彈 2.5 倍的傷害，高於時減半。', 'It returns damage to up to 6 monsters in reach instead of 3, each taking half.': '反彈傷害給範圍內最多 6 隻怪物而不是 3 隻，每隻受到一半。',
'Each kill in a flurry adds a blow, up to 3 more, and each blow deals 10% less damage.': '連擊中每擊殺一隻就多一擊，最多再多 3 擊，每擊傷害減少 10%。', 'Each blow in a row on the same monster deals 8% more, up to 40% more. All blows deal 15% less damage.': '連續攻擊同一隻怪物，每擊傷害增加 8%，最多 40%。所有攻擊傷害減少 15%。', 'Half its damage is lightning damage, and it deals 18% less damage.': '一半傷害轉為閃電傷害，傷害減少 18%。',
'Its splash grows with its charges, up to twice as wide, but its blows deal 15% less damage.': '濺射範圍隨充能變大，最多兩倍，但攻擊傷害減少 15%。', 'Charges build on one monster only and reset when you switch, but each adds 60% more damage.': '充能只累積在同一隻怪物上，換目標就重置，但每層增加 60% 的傷害。', 'Charges come from blows you take instead of blows you deal.': '充能改為來自你受到的攻擊，而不是你打出的攻擊。',
'The stomp reaches 58% farther, but deals 10% less damage.': '踐踏範圍增加 58%，但傷害減少 10%。', 'The stomp reaches half as far, deals 80% more damage and stuns for 2.5 seconds instead of 1.5.': '踐踏範圍減半，傷害增加 80%，暈眩 2.5 秒而不是 1.5 秒。', 'Half its damage is fire damage, and the stomp deals 42% more and leaves a ring of burning ground.': '一半傷害轉為火焰傷害，踐踏傷害增加 42%，並留下一圈燃燒地面。',
'Each tooth pierces 2 monsters, but deals 38% less damage.': '每顆牙齒穿透 2 隻怪物，但傷害減少 38%。', 'The teeth fly close together at one monster and deal 12% more damage.': '牙齒集中射向一隻怪物，傷害增加 12%。', 'Each tooth splits in two on a hit, each for 40% of its damage. Teeth deal 20% less damage.': '每顆牙齒命中時一分為二，各造成 40% 的傷害。牙齒傷害減少 20%。',
'Monsters its blast kills can be blown up once more, for half the damage.': '被爆炸炸死的怪物可以再炸一次，傷害減半。', 'Its blast covers half the area and deals 60% more damage.': '爆炸範圍減半，傷害增加 60%。', 'Half its damage is cold instead of physical, and it chills.': '一半傷害由物理轉為冰寒，並造成冰凍。',
'Each stab also poisons the 3 monsters nearest its target for half, but the stabbed take 30% less poison.': '每次刺擊也讓目標最近的 3 隻怪物中毒，造成一半毒素，但被刺的怪物毒素減少 30%。', 'Of the monsters it stabs, the toughest takes 15% more poison and the rest 10% less.': '被刺的怪物中最強的毒素增加 15%，其他減少 10%。', 'The dagger flies more than twice as far, but deals 5% less damage.': '匕首飛行距離超過兩倍，但傷害減少 5%。',
'It cages up to 8 monsters of the nearest pack, each in its own prison, for half as long.': '把最近怪群中最多 8 隻怪物各自關進牢籠，時間減半。', 'As a cage crumbles, the monster still inside takes a Bone Spear hit. Cages hold 30% less time.': '牢籠崩塌時，還在裡面的怪物受到一次骨矛攻擊。牢籠時間減少 30%。',
'Bone walls ring you for 1.5 seconds instead, and no monster can come near. It takes 50% longer to recharge.': '改為骨牆圍住你 1.5 秒，任何怪物都無法靠近。冷卻時間增加 50%。', 'When a cursed monster dies, its curse passes to the monsters near it. The curse lasts 40% less time.': '被詛咒的怪物死亡時，詛咒會傳給附近的怪物。詛咒時間減少 40%。', 'It curses only the toughest monster nearby, for 3 times as long.': '只詛咒附近最強的怪物，時間 3 倍。',
'The curse stays on the ground for 4 seconds and curses monsters that walk in, but its radius is 40% smaller.': '詛咒留在地上 4 秒，走進來的怪物都會被詛咒，但半徑縮小 40%。', 'What it takes off their blows on you heals you, but it takes off half as much.': '從牠們對你的攻擊中減去的部分會回復你，但減去的量減半。', 'The curse falls on the monsters around you instead of around a target.': '詛咒落在你周圍的怪物身上，而不是目標周圍。',
'The curse stays on the ground for 4 seconds and curses monsters that walk in.': '詛咒留在地上 4 秒，走進來的怪物都會被詛咒。', 'Their missiles that hit you also come back on them, for 60% of what their blows send back.': '牠們打中你的投射物也會反彈回去，反彈量是近戰攻擊的 60%。', 'It curses only the toughest monster nearby, which takes back 2.5 times as much.': '只詛咒附近最強的怪物，它受到的反彈傷害是 2.5 倍。',
'Cursed monsters stand still and don\'t attack instead of fleeing. The curse lasts 30% less time.': '被詛咒的怪物站著不動也不攻擊，而不是逃跑。詛咒時間減少 30%。', 'It casts itself only when you are struck, around you and 50% wider, at most once every 4 seconds.': '只有在你被打中時自動在你周圍施放，範圍大 50%，最多每 4 秒一次。', 'It heals your summons instead of you, twice as much, shared among them.': '改為回復你的召喚物而不是你，回復量加倍，由牠們平分。',
'Each cursed monster that dies heals you 6% of its life, instead of the damage dealt to it.': '每隻被詛咒的怪物死亡時回復你牠生命的 6%，而不是對牠造成的傷害。', 'It curses only the toughest monster nearby, which heals you 3 times as much.': '只詛咒附近最強的怪物，回復你的量是 3 倍。', '50% more skeletons rise, each with 70% of the life and damage.': '多召喚 50% 的骷髏，每隻有 70% 的生命和傷害。',
'At most 3 skeletons rise, each with 3 times the life and damage.': '最多召喚 3 隻骷髏，每隻生命和傷害 3 倍。', 'Half of each skeleton\'s blow is fire damage, but they deal 8% less damage.': '每隻骷髏攻擊的一半是火焰傷害，但傷害減少 8%。', '50% more mages rise, each with 66% of the life and damage.': '多召喚 50% 的骷髏法師，每隻有 66% 的生命和傷害。', 'At most 3 mages rise, each with 185% more life and damage.': '最多召喚 3 隻骷髏法師，每隻生命和傷害增加 185%。',
'Each bolt is the fire, cold or lightning its target resists least, but deals 8% less damage.': '每道法術是目標抗性最低的火焰、冰寒或閃電，但傷害減少 8%。', 'Two golems rise, each with 55% of the life and damage.': '召喚兩隻石魔，每隻有 55% 的生命和傷害。', 'Its blow also slows the monsters around its target, but deals 5% less damage.': '攻擊也會減緩目標周圍的怪物，但傷害減少 5%。',
'Its blow deals 25% more to its target but not around it, and it has 50% more life.': '攻擊對目標傷害增加 25% 但不影響周圍，生命增加 50%。', 'Each spear flies back along its line and hits again, but deals half the damage.': '每支骨矛沿原路飛回再打一次，但傷害減半。', 'It throws 1 spear instead of 3, which deals 240% more damage.': '只射出 1 支骨矛而不是 3 支，傷害增加 240%。',
'Each spear\'s trail stays for 1.5 seconds, dealing 16% of its damage a second. Spears deal 30% less damage.': '每支骨矛的軌跡停留 1.5 秒，每秒造成 16% 的傷害。骨矛傷害減少 30%。', 'A spirit whose target dies hunts the nearest monster instead, but each deals 10% less damage.': '目標死亡的骨靈會改追最近的怪物，但每個傷害減少 10%。',
'Each spirit deals 30% more damage to elites and bosses, and 25% less to other monsters.': '每個骨靈對精英和首領傷害增加 30%，對其他怪物減少 25%。', 'Half its damage is fire instead of magic, and it deals 33% more damage.': '一半傷害由魔法轉為火焰，傷害增加 33%。', 'The cloud stays for 3 seconds and poisons monsters that walk in, but deals 40% less poison.': '毒雲停留 3 秒，走進來的怪物都會中毒，但毒素減少 40%。',
'It bursts half as wide, for 60% more poison.': '爆開範圍減半，毒素增加 60%。', 'With no corpse to burst, it bursts from the toughest monster nearby. It deals 30% less poison.': '沒有屍體可爆時，從附近最強的怪物身上爆開。毒素減少 30%。', 'The ring reaches 48% farther, but deals 5% less poison.': '毒環範圍增加 48%，但毒素減少 5%。', 'The ring reaches 60% as far, for 13% more poison.': '毒環範圍為 60%，毒素增加 13%。',
'It deals half the poison, plus a magic damage hit worth 35% of its full poison.': '毒素減半，另外造成一次魔法傷害，等於完整毒素的 35%。', 'The curse stays on the ground for 6 seconds and curses monsters that walk in. Its radius is 40% smaller.': '詛咒留在地上 6 秒，走進來的怪物都會被詛咒。半徑縮小 40%。', 'It curses only the toughest monster nearby, slowed by 70% and dealing 60% less damage.': '只詛咒附近最強的怪物，使它減速 70%，傷害減少 60%。',
'The curse stays on the ground for 4 seconds and curses monsters that walk in. Its radius is 40% smaller.': '詛咒留在地上 4 秒，走進來的怪物都會被詛咒。半徑縮小 40%。', 'The curse falls around you instead of around the nearest monster. Its radius is 28% smaller.': '詛咒落在你周圍，而不是最近的怪物周圍。半徑縮小 28%。',
'It raises a bone totem by the nearest pack instead, and draws the pack in around it for 4 seconds.': '改為在最近的怪群旁立起骨頭圖騰，把怪群吸引到它周圍 4 秒。', 'When the cursed monster dies, it bursts for 25% of its life on those that turned on it, and the curse ends.': '被詛咒的怪物死亡時爆開，對攻擊牠的怪物造成牠生命 25% 的傷害，詛咒結束。',
'It can curse an act boss too, for 40% as long. Each blow on him deals at most 1% of his life.': '也能詛咒幕首領，時間為 40%。每次打他最多造成他生命的 1%。', 'Up to 30 monsters rise instead of 20, each with 70% of the life and damage.': '最多復活 30 隻怪物而不是 20 隻，每隻有 70% 的生命和傷害。', 'Up to 8 monsters rise instead of 20, champions first, each with 120% more life and damage.': '最多復活 8 隻怪物而不是 20 隻，優先選冠軍怪，每隻生命和傷害增加 120%。',
'Revived monsters deal 20% less damage, and each bursts as it dies for 15% of its life on the 4 nearest.': '復活的怪物傷害減少 20%，死亡時爆開，對最近的 4 隻怪物造成牠生命 15% 的傷害。', 'Half the damage you take goes to the golem instead, but its blows no longer heal you.': '你受到的傷害有一半轉給石魔承受，但它的攻擊不再回復你。',
'Its blow deals 15% more to its target and stuns it for 1 second, at most every 2 seconds (not act bosses).': '攻擊對目標傷害增加 15% 並暈眩 1 秒，最多每 2 秒一次（幕首領除外）。', 'Monsters near it go for it instead of you (not act bosses), but its blow deals 5% less damage.': '它附近的怪物改打它而不是你（幕首領除外），但它的攻擊傷害減少 5%。', 'Half its blow is lightning damage, but it deals 10% less damage.': '攻擊的一半是閃電傷害，但傷害減少 10%。',
'It strikes every 1.6 seconds, 90% harder on its target, and stuns it for 0.5 seconds (not act bosses).': '每 1.6 秒攻擊一次，對目標傷害增加 90%，並暈眩 0.5 秒（幕首領除外）。', 'Its Holy Fire deals 53% more damage, but its blow deals 45% less.': '它的聖火傷害增加 53%，但攻擊傷害減少 45%。', 'Its blow deals 50% more damage, but its Holy Fire deals half as much.': '攻擊傷害增加 50%，但聖火傷害減半。',
'Half its blow is lightning damage instead of fire.': '攻擊的一半由火焰轉為閃電傷害。', 'It throws 2 more hammers, but each deals 72% of the damage.': '多丟出 2 把鎚子，但每把只造成 72% 的傷害。', 'The hammers circle close around you twice as fast, hitting again each turn. They deal 65% less damage.': '鎚子以兩倍速度貼著你繞圈，每圈都再打一次。傷害減少 65%。',
'Each hammer flies back through you after its spiral, hitting again. Each pass deals 62% of the damage.': '每把鎚子繞完螺旋後穿過你飛回來，再打一次。每次經過造成 62% 的傷害。', 'It fires 5 bolts in a 40° fan, each dealing 67% of the damage.': '以 40° 扇形射出 5 道聖光彈，每道造成 67% 的傷害。',
'It fires one slow bolt at the toughest monster with 95% of all its bolts\' damage. It bursts on hit but never pierces.': '對最強的怪物射出一道慢速聖光彈，傷害是所有聖光彈的 95%。命中時爆開，但不會穿透。', 'Each bolt bounces to the nearest monster each time it would pierce.': '每道聖光彈原本要穿透時，改為彈向最近的怪物。',
'Each blow also hits the 2 nearest monsters beside its target for 40%. Blows deal 20% less damage.': '每一擊也會打中目標旁邊最近的 2 隻怪物，造成 40%。攻擊傷害減少 20%。', 'Every blow strikes the toughest monster in reach until it falls, with 15% more damage.': '每一擊都打攻擊範圍內最強的怪物直到牠倒下，傷害增加 15%。', 'Half its damage is magic damage, and it deals 10% more damage.': '一半傷害轉為魔法傷害，傷害增加 10%。',
'The blow at the end also sets off a holy blast around you for 15% of it. It takes 40% longer to recharge.': '最後一擊也會在你周圍引發神聖爆炸，造成這一擊的 15%。冷卻時間增加 40%。', 'The blow at the end stuns, and deals 60% more damage to elites and bosses.': '最後一擊會暈眩，對精英和首領傷害增加 60%。', 'Your path burns for 2.5 seconds. Hits on the dash deal 15% less damage.': '你衝過的路徑燃燒 2.5 秒。衝刺途中的攻擊傷害減少 15%。',
'Each block also sets off a holy nova for 7% of the smite, at most once a second. Its Chance to Block is a third lower.': '每次格擋也會引發神聖新星，造成懲擊的 7%，最多每秒一次。格擋機率降低三分之一。', 'Each missile it blocks flies back and smites its shooter instead of the nearest monster.': '每個被格擋的投射物飛回去懲擊發射者，而不是最近的怪物。',
'The monster knocked back hits the 3 nearest monsters for 30% of the bash. It deals 15% less damage.': '被擊退的怪物撞到最近的 3 隻怪物，造成猛擊的 30%。傷害減少 15%。', 'It stuns twice as long instead of knocking back, and the monster takes 5% more damage for 2 seconds.': '改為暈眩兩倍時間而不是擊退，怪物 2 秒內受到的傷害增加 5%。',
'Each blow also hits the 3 nearest monsters around its target for 15%. It deals 20% less damage.': '每一擊也會打中目標周圍最近的 3 隻怪物，造成 15%。傷害減少 20%。', 'It costs 3% of your life, none below 20%. It deals 0.8% more damage for each 1% of life you\'re missing.': '消耗你 3% 的生命，低於 20% 時不消耗。你每少 1% 生命，傷害增加 0.8%。', 'It costs no life and is used even below 40% life. It deals 5% less damage.': '不消耗生命，生命低於 40% 也會使用。傷害減少 5%。',
'Its splash reaches over twice as far, but deals 20% instead of half.': '濺射範圍超過兩倍，但只造成 20% 而不是一半。', 'Its target takes 25% more damage, and those beside take 30% less.': '目標受到的傷害增加 25%，旁邊的怪物減少 30%。', 'The whole blow is the element each monster resists least. It deals 15% less damage.': '整擊都轉為每隻怪物抗性最低的元素。傷害減少 15%。', 'It converts twice as many monsters, each for half as long.': '改宗的怪物數量加倍，每隻時間減半。',
'It can convert a champion too, but only one monster at a time.': '也能改宗冠軍怪，但一次只能一隻。', 'Each converted monster fights 25% shorter, then dies in a holy blast instead of turning back.': '每隻被改宗的怪物作戰時間縮短 25%，結束時在神聖爆炸中死亡，而不是變回敵人。', 'It throws 2 more hammers, but each deals 70% of the damage.': '多丟出 2 把鎚子，但每把只造成 70% 的傷害。',
'Each hammer crashes at the end of its spiral, hitting monsters nearby for 80% of its damage.': '每把鎚子在螺旋結束時砸下，對附近的怪物造成 80% 的傷害。', 'Lightning strikes 4 random monsters instead, each for 70%, and 6 holy bolts burst from each.': '改為閃電隨機打 4 隻怪物，每隻 70%，每處爆出 6 道聖光彈。', 'Lightning strikes only the toughest monster, for 230% of the damage.': '閃電只打最強的怪物，造成 230% 的傷害。',
'Each lightning strikes again a moment later. Each strike deals 60%, with 4 holy bolts instead of 8.': '每道閃電稍後再打一次。每次造成 60%，聖光彈 4 道而不是 8 道。', 'Each blow sweeps 18% instead of 15% through a wider arc. Blows deal 20% less damage.': '每一擊以更寬的弧度橫掃，造成 18% 而不是 15%。攻擊傷害減少 20%。', 'Each blow on the same monster deals 2.5% more, up to 25%, until you switch target.': '攻擊同一隻怪物時每擊傷害增加 2.5%，最多 25%，換目標就重置。',
'Half its damage is lightning damage, and it deals 8% less damage.': '一半傷害轉為閃電傷害，傷害減少 8%。', 'It charges 5 times, but each blow deals 25% less damage.': '衝鋒 5 次，但每擊傷害減少 25%。', 'Each charge\'s blow stuns, and deals 60% more damage to elites and bosses.': '每次衝鋒的攻擊都會暈眩，對精英和首領傷害增加 60%。',
'Each dash leaves burning blessed ground for 2.5 seconds. It sets off no holy bursts at the stops.': '每次衝刺留下燃燒的神聖地面 2.5 秒。停下時不會引發神聖爆發。', 'The blast strikes again 1 second later, but each deals 52% of the damage.': '1 秒後再爆炸一次，但每次只造成 52% 的傷害。', 'The blast comes every 2 seconds instead of 4, about half as wide, for 60% of the damage.': '每 2 秒爆炸一次而不是 4 秒，範圍約減半，造成 60% 的傷害。',
'The blast comes only when you block, for 45% of the damage, at most every 0.8 seconds.': '只在你格擋時爆炸，造成 45% 的傷害，最多每 0.8 秒一次。', 'Each burst also leaps to the 2 nearest monsters beyond its splash, for the full damage.': '每次爆發也會跳到濺射範圍外最近的 2 隻怪物，造成完整傷害。', 'An elite or a boss in reach takes two blows of 60% each, and no other monster is struck.': '攻擊範圍內的精英或首領受到兩擊，每擊 60%，其他怪物不受攻擊。',
'Each blow is wholly the element its target resists least. It deals 15% less damage.': '每一擊都完全轉為目標抗性最低的元素。傷害減少 15%。', 'The shockwave reaches 70% farther, but deals 19% instead of 20%.': '衝擊波範圍增加 70%，但造成 19% 而不是 20%。', 'The shockwave runs in a line behind the monster instead, for 35% instead of 20%.': '衝擊波改為在怪物後方呈直線，造成 35% 而不是 20%。',
'Half its bash and shockwave damage is lightning damage, and it deals 8% less damage.': '猛擊和衝擊波傷害的一半轉為閃電傷害，傷害減少 8%。', 'The sweep goes all around you, but deals 12% instead of 30%.': '橫掃範圍包含你四周，但只造成 12% 而不是 30%。', 'It costs 3% of your life, held back below 20% life. It deals 0.8% more damage for each 1% of life you\'re missing.': '消耗你 3% 的生命，生命低於 20% 時暫停消耗。你每少 1% 生命，傷害增加 0.8%。',
'The sweep opens wounds that deal 45% of the blow over 3 seconds, instead of 30% at once.': '橫掃造成傷口，3 秒內造成這一擊 45% 的傷害，而不是立刻造成 30%。', 'It is half as strong alone, and up to 1.5 times as strong with 10 monsters nearby.': '單獨時效果減半，附近有 10 隻怪物時最多 1.5 倍。', 'It is 40% stronger while an elite or a boss is nearby, and 40% weaker otherwise.': '附近有精英或首領時效果增加 40%，沒有時減少 40%。',
'Your converted monsters also get its full bonus, but yours is 30% lower.': '你改宗的怪物也得到完整加成，但你自己的減少 30%。', 'Each monster slain in it bursts on the 3 nearest for 70% of its damage. It deals 30% less damage.': '在範圍內被擊殺的怪物會爆開，對最近的 3 隻造成 70% 的傷害。傷害減少 30%。', 'It reaches half as far but deals 70% more damage.': '範圍減半，但傷害增加 70%。',
'It reaches half as far, and the ground you walk on burns for 2 seconds.': '範圍減半，你走過的地面燃燒 2 秒。', 'It hits 70% farther, for 40% less damage. Its slow keeps its reach.': '範圍增加 70%，傷害減少 40%。減速範圍不變。', 'It no longer slows. Every 3 seconds it freezes monsters around you for 0.6 seconds, dealing 3 times the damage.': '不再減速。每 3 秒冰凍你周圍的怪物 0.6 秒，造成 3 倍傷害。',
'It reaches half as far, slow included, but deals 60% more damage.': '範圍減半（包括減速），但傷害增加 60%。', 'Instead of a ring, each jolt chains from you through up to 8 monsters, for 50% more damage.': '不再是環狀，每次電擊從你身上連鎖最多 8 隻怪物，傷害增加 50%。', 'It reaches 70% farther, but deals 40% less damage.': '範圍增加 70%，但傷害減少 40%。',
'It jolts every 3 seconds instead of every second, for 3 times the damage, stunning for 0.3 seconds.': '每 3 秒電擊一次而不是每秒，傷害 3 倍，暈眩 0.3 秒。', 'It starts at half strength and gains 5% per kill nearby, up to 1.5 times. It resets 3 seconds after the last kill.': '一開始效果減半，附近每擊殺一隻增加 5%，最多 1.5 倍。最後一次擊殺 3 秒後重置。',
'It starts at half strength, reaching 1.5 times after 6 seconds of fighting. It resets 2 seconds after a fight ends.': '一開始效果減半，戰鬥 6 秒後達到 1.5 倍。戰鬥結束 2 秒後重置。', 'It is half as strong, but you can\'t be chilled or frozen while you have it.': '效果減半，但開著時你不會被冰緩或冰凍。', 'It is twice as strong below 50% life, and half as strong above.': '生命低於 50% 時效果加倍，高於時減半。',
'It is full strength while an elite or a boss is nearby, and half as strong otherwise.': '附近有精英或首領時是完整效果，沒有時減半。', 'It reaches 80% farther, but lowers resistances 40% less.': '範圍增加 80%，但降低抗性的效果減少 40%。', 'It affects only the toughest monster, from much farther away, and lowers its resistances 50% more.': '只影響最強的怪物，可在遠得多的距離生效，降低抗性的效果增加 50%。',
'Monsters keep it for 3 seconds after leaving it, but it lowers resistances 25% less.': '怪物離開範圍後效果還會保留 3 秒，但降低抗性的效果減少 25%。', 'What it sends back also hits the 3 nearest monsters for half. It sends back 20% less.': '反彈的傷害也會以一半打中最近的 3 隻怪物。反彈量減少 20%。', 'Monsters that hit you with missiles also take back half as much.': '用投射物打中你的怪物也會受到一半的反彈傷害。',
'It sends back twice as much to elites and bosses, and half as much to the rest.': '對精英和首領反彈兩倍，對其他怪物減半。', 'Its chance is 30% lower, but its critical strikes also hit the 3 nearest monsters for half.': '機率降低 30%，但致命一擊也會以一半傷害打中最近的 3 隻怪物。', 'Its chance works only on elites and bosses, but is 60% higher.': '機率只對精英和首領有效，但提高 60%。',
'Its chance is 25% lower, but its critical strikes stun for 0.4 seconds.': '機率降低 25%，但致命一擊會暈眩 0.4 秒。', 'It is twice as strong while no monster is near you, and gives nothing when one is.': '附近沒有怪物時效果加倍，有怪物時沒有效果。', 'It is twice as strong below 40% life, and half as strong above.': '生命低於 40% 時效果加倍，高於時減半。',
'Your converted monsters also move faster with its full bonus, but yours is 30% lower.': '你改宗的怪物也以完整加成加快移動，但你自己的減少 30%。', 'It is 40% as strong, plus 15% for each monster in reach.': '效果為 40%，攻擊範圍內每有一隻怪物再加 15%。', 'It is half as strong, but each melee blow on you knocks its attacker back.': '效果減半，但每次被近戰攻擊都會擊退攻擊者。',
'It heals 2.5 times as much below 40% life, and half as much above.': '生命低於 40% 時回復 2.5 倍，高於時減半。', 'Above 60% life it stores its healing, up to 8 seconds\' worth, and heals it all at once below.': '生命高於 60% 時把回復量存起來，最多 8 秒份，低於時一次全部回復。', 'It also heals your converted monsters, but heals you 30% less.': '也會回復你改宗的怪物，但回復你的量減少 30%。',
'It gives half the resistance, but 10% of the fire damage you take heals you.': '抗性減半，但你受到的火焰傷害有 10% 會回復你。', 'It gives 20 points less resistance. A fire hit on you deals as much to monsters nearby, at most every 2 seconds.': '抗性少 20 點。你被火焰打中時，對附近的怪物造成同樣的傷害，最多每 2 秒一次。', 'It gives half the resistance, but 10% of the cold damage you take heals you.': '抗性減半，但你受到的冰寒傷害有 10% 會回復你。',
'It gives 20 points less resistance. A cold hit on you deals as much to monsters nearby, at most every 2 seconds.': '抗性少 20 點。你被冰寒打中時，對附近的怪物造成同樣的傷害，最多每 2 秒一次。', 'It gives half the resistance, but 10% of the lightning damage you take heals you.': '抗性減半，但你受到的閃電傷害有 10% 會回復你。',
'It gives 20 points less resistance. A lightning hit on you deals as much to monsters nearby, at most every 2 seconds.': '抗性少 20 點。你被閃電打中時，對附近的怪物造成同樣的傷害，最多每 2 秒一次。', 'It gives 50% more resistance below 40% life, and 40% less above.': '生命低於 40% 時抗性增加 50%，高於時減少 40%。', '6% of the fire, cold and lightning damage you take heals you.': '你受到的火焰、冰寒和閃電傷害有 6% 會回復你。',
'poison and chill no longer wear off faster. Every 4 seconds it clears poison, chill and curses at once.': '中毒和冰緩不再加快消退。改為每 4 秒一次清除中毒、冰緩和詛咒。', 'It also heals your converted monsters a little, but is 40% weaker on you.': '也會稍微回復你改宗的怪物，但對你的效果減少 40%。', 'It is twice as strong for 5 seconds after an elite or a boss dies nearby, and half as strong otherwise.': '附近有精英或首領死亡後 5 秒內效果加倍，其他時候減半。',
'Skills no longer recharge faster. It heals 0.4% of your life each second instead.': '不再加快技能冷卻，改為每秒回復你 0.4% 的生命。', 'It heals nothing. Every 12th time it would, a holy blast deals 40 damage a level to monsters around you.': '不再回復。原本每回復 12 次，改為發出一次神聖爆炸，對你周圍的怪物造成每級 40 點傷害。', 'Only slain elites and bosses heal you, every time, for 8 times as much.': '只有擊殺精英和首領時回復你，每次都有，回復量 8 倍。',
'It no longer throws the undead out, and deals twice the damage.': '不再把不死生物推出去，傷害加倍。', 'It reaches 60% farther, but deals 35% less damage.': '範圍增加 60%，但傷害減少 35%。', 'It hurts every monster in it, not only the undead, for 35% of the damage, and throws none out.': '對範圍內所有怪物造成 35% 的傷害（不只不死生物），而且不推出任何怪物。',
'Each bolt splits into 3 when it hits, each with 28% of its damage. It deals 30% less damage.': '每道法術命中時分裂成 3 道，各有 28% 的傷害。傷害減少 30%。', 'Its bolts fly as one slow bolt with all their damage and 15% more.': '所有法術合成一道慢速法術，傷害是全部加總再加 15%。', 'Each bolt flies out and back through every monster, dealing 35% of its damage with each hit.': '每道法術飛出去再飛回來，穿過所有怪物，每次命中造成 35% 的傷害。',
'Each bolt no longer pierces, but freezes what it hits for 0.6 seconds and deals 10% more damage.': '每道法術不再穿透，但會冰凍命中的目標 0.6 秒，傷害增加 10%。', 'What each bolt hits sheds 3 ice shards, each dealing 10% of its damage. It deals 10% less damage.': '每道法術命中的目標會散出 3 片冰碎片，各造成 10% 的傷害。傷害減少 10%。', 'The sparks fly in a tight straight line and never wander. They deal 10% less damage.': '電花以窄直線飛行，不會亂竄。傷害減少 10%。',
'Each spark splits in two when it hits, each with 50% of its damage. It deals 20% less damage.': '每個電花命中時一分為二，各有 50% 的傷害。傷害減少 20%。', 'The sparks circle you for 1.5 seconds, then fly off. They deal 12% less damage.': '電花先繞你轉 1.5 秒再飛出去。傷害減少 12%。', 'A second ring follows 0.8 seconds later with 60% of the damage. It takes 60% longer to recharge.': '0.8 秒後再放出第二圈，造成 60% 的傷害。冷卻時間增加 60%。',
'Its fires are 67% wider, but deal 47% less damage.': '火焰範圍增加 67%，但傷害減少 47%。', 'Half its damage is cold damage, and it chills what it burns and deals 15% more damage.': '一半傷害轉為冰寒傷害，被燒到的怪物會冰緩，傷害增加 15%。', 'A ring of fire follows you for its duration, in place of the trail.': '持續期間改為一圈火焰跟著你，取代軌跡。', 'It reaches 60% farther, but monsters lose a third less life.': '範圍增加 60%，但怪物失去的生命少三分之一。',
'Elites and bosses lose twice as much life, normal monsters half as much.': '精英和首領失去兩倍生命，一般怪物減半。', 'The field stays for 3 seconds, and each monster that walks in loses life too. It takes 50% longer to recharge.': '力場停留 3 秒，走進來的怪物也會失去生命。冷卻時間增加 50%。', 'The flames sweep an 85° cone.': '火焰掃過 85° 的錐形範圍。',
'Each cast raises 2 hydras, up to 10, at half damage. Each bolt flies on past its first hit at 25%.': '每次施放召喚 2 隻九頭蛇，最多 10 隻，傷害減半。每道火彈命中第一個目標後繼續飛，造成 25%。', 'Up to 3 hydras stand at once, each spitting at the toughest monster for 70% more damage.': '同時最多 3 隻九頭蛇，每隻都朝最強的怪物噴吐，傷害增加 70%。',
'Its three heads spit fire, cold and lightning bolts in turn. The cold and lightning bolts deal 65% more damage.': '三個頭輪流噴出火焰、冰寒和閃電彈。冰寒和閃電彈傷害增加 65%。', 'Each bolt forks in two at its target, each branch dealing 45% of its damage. It deals 20% less damage.': '每道閃電在目標處分成兩道，每道造成 45% 的傷害。傷害減少 20%。',
'Its bolts strike the toughest monster in reach from the sky, not in a line, and deal 15% more damage.': '閃電從天而降打在攻擊範圍內最強的怪物身上，不是直線，傷害增加 15%。', 'A ring of lightning bursts where you land, a Nova at Teleport\'s level. It takes 30% longer to recharge.': '在你落地處爆出一圈閃電，等於傳送等級的新星。冷卻時間增加 30%。',
'Monsters near the spot you leave freeze for 1 second. It takes 30% longer to recharge.': '你離開的位置附近的怪物冰凍 1 秒。冷卻時間增加 30%。', 'Monsters along your path take Lightning\'s damage at Teleport\'s level. It takes 30% longer to recharge.': '你路徑上的怪物受到傳送等級的閃電傷害。冷卻時間增加 30%。',
'A hit on you sets off a frost nova that freezes for 0.5s, at most every 3s. Half as many blows and missiles miss.': '你被打中時引發霜之新星，冰凍 0.5 秒，最多每 3 秒一次。攻擊和投射物落空的次數減半。', 'Three times as many blows and missiles miss you below 35% life, and none above it.': '生命低於 35% 時攻擊和投射物落空的次數 3 倍，高於時不會落空。',
'Monsters it freezes take 25% more damage while frozen, but stay frozen half as long.': '被冰凍的怪物在冰凍期間受到的傷害增加 25%，但冰凍時間減半。', 'A hit on you sets off a frost nova of 20% of its cold, at most every 1.5s, instead of hitting back. Half as many miss.': '你被打中時不反擊，改為引發霜之新星，造成 20% 的冰寒傷害，最多每 1.5 秒一次。落空次數減半。',
'Elites and bosses that hit you take 2.5 times its cold, other monsters half.': '打中你的精英和首領受到 2.5 倍冰寒傷害，其他怪物減半。', 'Each ice bolt it shoots back is 3 bolts in a fan, each dealing 45% of the damage.': '每次反擊的冰彈改為扇形 3 道，每道造成 45% 的傷害。', 'Elites and bosses that hit or shoot you take 2.5 times its cold, other monsters half.': '打中或射中你的精英和首領受到 2.5 倍冰寒傷害，其他怪物減半。',
'A second ring follows 0.8 seconds later with 60% of the damage, chilling again. It takes 60% longer to recharge.': '0.8 秒後再放出第二圈，造成 60% 的傷害並再次冰緩。冷卻時間增加 60%。', 'It freezes what it reaches for as long as it would chill, but its ring is 10% smaller.': '改為冰凍碰到的怪物，時間跟原本冰緩一樣，但範圍縮小 10%。',
'Each bolt bounces on to 2 more monsters, each bounce at half the last. It deals 35% less damage.': '每道冰彈再彈向 2 隻怪物，每次彈射是上一次的一半。傷害減少 35%。', 'Its bolts fly as one slow bolt with all their damage and 15% more, freezing twice as long.': '所有冰彈合成一道慢速冰彈，傷害是全部加總再加 15%，冰凍時間加倍。',
'Each burst throws 3 bomblets at the monsters around it, each dealing 45%. The burst deals 20% less damage.': '每次爆炸向周圍的怪物拋出 3 顆小炸彈，各造成 45%。爆炸傷害減少 20%。', 'Its 3 balls fly as one slow ball with all their damage and 15% more.': '3 顆火球合成一顆慢速火球，傷害是全部加總再加 15%。', 'Up to 12 smaller meteors fall, one on each monster, each dealing 62% of the damage.': '最多落下 12 顆較小的隕石，每隻怪物一顆，各造成 62% 的傷害。',
'All 3 meteors fall on the toughest monster in reach, in a wider crash, each dealing 55%.': '3 顆隕石全部落在攻擊範圍內最強的怪物身上，撞擊範圍更大，各造成 55%。', 'Each shard splits in two when it hits, each with 50% of its damage. It deals 20% less damage.': '每片碎片命中時一分為二，各有 50% 的傷害。傷害減少 20%。', 'Halfway, the orb turns back to you, spraying shards all the way. Its shards deal 25% less damage.': '冰球飛到一半會轉回你這邊，一路噴出碎片。碎片傷害減少 25%。',
'Each bolt jumps 16 times instead of 8, farther, never to the same monster twice. It deals 32% less damage.': '每道閃電跳 16 次而不是 8 次，距離更遠，且不會跳到同一隻怪物兩次。傷害減少 32%。', 'One bolt strikes the nearest monster 5 times, each strike chaining on to 4 more. It deals 50% less damage.': '一道閃電打最近的怪物 5 次，每次再連鎖到 4 隻。傷害減少 50%。', 'Each strike bursts twice as wide, but deals 35% less damage.': '每次落雷爆開範圍加倍，但傷害減少 35%。',
'Its first strike always hits the toughest monster in reach. Its strikes burst tighter and deal 40% more damage.': '第一道落雷一定打攻擊範圍內最強的怪物。落雷爆開範圍縮小，傷害增加 40%。', 'A second wall crosses the first, and each deals half the damage.': '第二道火牆與第一道交叉，每道傷害減半。', 'A short wall of 5 flames rises on the toughest monster near you, with 50% more damage.': '在你附近最強的怪物身上升起 5 道火焰的短火牆，傷害增加 50%。',
'Each burst throws 8 ice shards from its edge, each dealing 60% of the damage.': '每次爆開從邊緣射出 8 片冰碎片，各造成 60% 的傷害。', 'Its burst is 25% narrower, but deals 15% more damage.': '爆開範圍縮小 25%，但傷害增加 15%。', 'The storm follows the toughest monster of the pack in a tighter circle. It deals 15% less damage.': '暴風雪以更小的圓圈跟著怪群中最強的怪物。傷害減少 15%。',
'The storm falls around you as you move. It deals 7% less damage.': '暴風雪隨你移動落在你周圍。傷害減少 7%。', 'Each shard pulls what it hits toward the storm\'s middle. It deals 8% less damage.': '每片冰碎片把命中的怪物拉向暴風雪中央。傷害減少 8%。', 'a hit': '每次命中', 'Creates a wall of flame across the monsters nearby that burns them for # seconds.': '在附近的怪物身上築起一道火牆，燃燒牠們 {0} 秒。', 'a melee attacker': '每個近戰攻擊者', 'an attacker': '每個攻擊者',
'Fires # guided arrows that each hunt through # monsters, dealing # damage to each.': '射出 {0} 支導引箭，每支追蹤穿過 {1} 隻怪物，各造成 {2} 傷害。', 'Your attacks and the Valkyrie\'s have a #% chance to do double damage.': '你和女武神的攻擊有 {0}% 機率造成雙倍傷害。', 'Your attacks deal #% more damage.': '你的攻擊傷害增加 {0}%。', 'Your arrows and javelins have a #% chance to pass through the monsters they hit.': '你的箭和標槍有 {0}% 機率穿過命中的怪物。',
'You have a #% chance to dodge a melee attack when attacking or standing still.': '攻擊或站著不動時有 {0}% 機率閃避近戰攻擊。', 'You have a #% chance to dodge monster missiles when attacking or standing still.': '攻擊或站著不動時有 {0}% 機率閃避怪物的投射物。', 'You have a #% chance to dodge a melee or missile attack when walking or running.': '走路或跑步時有 {0}% 機率閃避近戰或投射物攻擊。', 'Monsters\' missiles fly #% slower.': '怪物的投射物飛行速度減慢 {0}%。',
'Throws a fire bomb at the nearest monster. It bursts for # fire damage around it.': '向最近的怪物丟出火焰炸彈，在周圍爆炸造成 {0} 火焰傷害。', 'a hit of a web': '每張網每次命中', 'a quarter second in a flame': '在火焰中每 0.25 秒', 'It gives +#% physical damage, and as a werewolf you run #% faster, up to #%.': '物理傷害 +{0}%，狼人形態時跑速加快 {1}%，最多 {2}%。',
'Your ravens, wolves, grizzly and creepers get +#% life and damage.': '你的烏鴉、狼、灰熊和藤蔓生命和傷害 +{0}%。', 'Strikes the toughest monster in reach for # damage and stuns it for # seconds, bosses for less.': '打擊攻擊範圍內最強的怪物，造成 {0} 傷害並暈眩 {1} 秒，首領時間較短。', 'a monster at the landing': '落點的每隻怪物', 'a hit of your spin': '旋轉每次命中', 'a hit or the end blow': '每次命中或最後一擊',
'Strikes the toughest monster in reach with a heavy blow for # damage, sweeping #% through the monsters beside it. Each blow costs #% of your life, none below #%.': '對攻擊範圍內最強的怪物重擊，造成 {0} 傷害，並對旁邊的怪物橫掃 {1}%。每擊消耗 {2}% 生命，低於 {3}% 時不消耗。', 'A chest now evolves * into *': '現在寶箱會把{0}進化為{1}', 'A chest now evolves it into *': '現在寶箱會把它進化為{0}',
'All your * go up one level, even past their maximum': '所有{0}的等級 +1，可以超過等級上限',
// 技能樹 +1 卡片的副標（這一系最多加 3 次）
'# of 3': '第 {0} 次（最多 3 次）', '+# to * # of 3': '+{0} {1}（第 {2} 次，最多 3 次）', 'Tap another option to switch to it, or the one on to turn it off': '點一下其他選項切換過去，點已開啟的選項則關閉', 'Click another option to switch to it, or the one on to turn it off': '點擊其他選項切換過去，點已開啟的選項則關閉', 'No points are free. Turn off another skill\'s option to free one.': '沒有可用點數。關掉其他技能的改造來空出一點。', '* every * seconds': '每 {1} 秒{0}',
'#% chance of a critical strike, which deals double damage': '{0}% 機率致命一擊，造成雙倍傷害', 'Each skill\'s hit, and its damage a second:': '每個技能的單次傷害和每秒傷害：', 'It casts 1.7 times as often, but each ring deals 55% of its damage.': '施放頻率 1.7 倍，但每圈只造成 55% 的傷害。', 'Only physical hits are reduced': '只減少物理攻擊', 'Raises the cast rate cap by the same amount': '施法速度上限也提高同樣的量',
'Adds to all four, up to his maximum': '四種抗性都加，最多到他的上限', 'Raises his own Defense, not his gear\'s': '提高傭兵本身的防禦，不含裝備', 'Only a fifth of it works on an immune monster': '對免疫的怪物只有五分之一的效果', 'Your level-* * starts over at level 1. A copy of her is kept at Akara.': '你等級 {0} 的{1}從等級 1 重新開始。阿卡拉會保留她的一份副本。', 'Its gift is already yours, so it does nothing': '這份獎勵你已經拿過了，所以沒有作用',
'Cain didn\'t give you this one, so it does nothing': '這不是凱恩給你的，所以沒有作用', 'Open the character screen (C) in a run or the camp to read it': '在遊戲中或營地開啟角色畫面（C）來閱讀', 'This ends your saved run. Click again': '這會結束你已儲存的這一輪。再點擊一次', 'This ends your saved run. Tap again': '這會結束你已儲存的這一輪。再點一下', 'This counts as a death. Click again': '這會算作死亡。再點擊一次', 'This counts as a death. Tap again': '這會算作死亡。再點一下',
'She goes back to level *. Click again': '等級將會回到 {0} 等，再次點擊後進入關卡', 'She goes back to level *. Tap again': '等級將會回到 {0} 等，再點一下後進入關卡', 'Clear * tiers in a row without losing one.': '連續通過 {0} 層，中間沒有失敗。', 'Your Books and Tomes can be read again': '你的技能之書和屬性之書可以重新閱讀', 'Tap a skill button to spend it in the skill tree': '點一下技能按鈕，到技能樹使用', 'Build # is ready to install from the main menu': '版本 {0} 已可從主選單安裝',
'Kashya will lend you a Rogue Scout for free': '卡夏會免費借你一名羅格斥候', '* is active': '{0}已啟用', 'You have all # Skill Modifier Points. Keep it for another hero': '你已有全部 {0} 點技能改造點數。留給其他英雄吧', '+1 Skill Modifier Point. Tap a skill button, then a skill': '+1 技能改造點數。點一下技能按鈕，再點技能', '+1 Skill Modifier Point. Click a skill in the skill tree (T)': '+1 技能改造點數。到技能樹（T）點擊技能',
'To pick a tree, tap its tab twice, not a skill': '要選技能樹，請在分頁上點兩下，不是點技能', 'To pick a tree, click its tab twice, not a skill': '要選技能樹，請在分頁上點擊兩下，不是點技能', 'Stash it at Charsi\'s': '放到恰西那裡的儲物箱', 'You took # damage in the last second': '你在最後 1 秒受到 {0} 傷害', 'You took # damage in the last # seconds': '你在最後 {1} 秒受到 {0} 傷害', 'The game is drawn without your graphics card. Update its driver': '遊戲沒有使用顯示卡繪製。請更新顯示卡驅動程式',
'Magic and rare items of this kind. The strictest line wins': '這類的魔法和稀有物品。以最嚴格的設定為準', 'You set each line below': '下面每一項由你設定', 'It never hides or sells uniques, quest items or what you drop. Charsi\'s Buy Back keeps what\'s sold': '不會隱藏或賣掉獨特物品、任務物品或你自己丟下的東西。賣掉的可以在恰西的「買回」找到', 'None, so your rows show your class': '無，所以你的列會顯示你的職業', 'It sends nothing else, no account and no address': '不會傳送其他資料，沒有帳號也沒有地址',
'They are sent once the leaderboard can be reached': '連得上排行榜時就會傳送', 'Her save was imported': '她的存檔是匯入的', 'A run is marked when its hero predates the chest cap, or has an altered save, impossible gear or impossible times': '英雄來自寶箱上限之前的版本，或存檔被修改、有不可能的裝備或不可能的時間，紀錄就會被標記', 'Names every item, as Alt does': '顯示所有物品名稱，跟按住 Alt 一樣',
'Each flame leaves a fire that burns for 40% of its damage a second for 1.5 seconds. It deals 20% less damage.': '每道火焰留下一團火，1.5 秒內每秒造成 40% 的傷害。傷害減少 20%。', 'Creates * of # damage.': '產生 {0}，每支造成 {1} 傷害。', 'Fires * of # fire damage.': '射出 {0}，每支造成 {1} 火焰傷害。', 'Fires * of # damage that * for #s.': '射出 {0}，每支造成 {1} 傷害，並冰緩 {3} 秒。', '* * for # damage around what *.': '{0}在命中處周圍爆炸，造成 {2} 傷害。',
'Splits one arrow into a fan of #, each dealing # damage.': '把一支箭分成 {0} 支扇形射出，每支造成 {1} 傷害。', 'Fires * of # damage that * target.': '射出 {0}，追蹤目標，每支造成 {1} 傷害。', 'Attacks the nearest monster in reach with # rapid thrusts of # damage.': '對攻擊範圍內最近的怪物快速刺擊 {0} 次，每次 {1} 傷害。', 'Adds lightning to a thrust at the toughest monster in reach, dealing # damage.': '對攻擊範圍內最強的怪物刺出帶閃電的一擊，造成 {0} 傷害。',
'Throws * of # damage trailing poison clouds that deal # over #s.': '投出 {0}，每支造成 {1} 傷害，並留下毒雲，{3} 秒內造成 {2} 毒素傷害。', 'Thrusts hard at the toughest monster in reach for # damage, or # to a boss.': '對攻擊範圍內最強的怪物重刺，造成 {0} 傷害，對首領 {1}。', 'Throws * of # damage through every monster in line.': '投出 {0}，穿過直線上所有怪物，每支造成 {1} 傷害。', 'Summons a Valkyrie whose spear thrusts deal # damage.': '召喚一位女武神，她的長矛刺擊造成 {0} 傷害。',
'Fires # arrows of # damage that freeze what they hit for #s.': '射出 {0} 支箭，每支造成 {1} 傷害，並冰凍命中的目標 {2} 秒。', 'Splits one arrow into # at the monsters around you, each dealing # damage.': '把一支箭分成 {0} 支射向你周圍的怪物，每支造成 {1} 傷害。', 'Attacks every monster around you in turn, up to #, for # damage each.': '依序攻擊你周圍的每隻怪物，最多 {0} 隻，各造成 {1} 傷害。',
'Thrusts at the toughest monster in reach for # damage, releasing # charged bolts of #.': '刺擊攻擊範圍內最強的怪物，造成 {0} 傷害，並放出 {1} 道 {2} 傷害的充能彈。', 'Thrusts at the toughest monster in reach for # damage, and chain lightning jumps # times for #.': '刺擊攻擊範圍內最強的怪物，造成 {0} 傷害，連鎖閃電跳 {1} 次，每次 {2}。',
'Throws # javelins trailing poison that release an expanding cloud of # poison over #s.': '投出 {0} 支帶毒的標槍，放出擴散的毒雲，{2} 秒內造成 {1} 毒素傷害。', 'Throws # javelins that split into lightning on # monsters for # damage each.': '投出 {0} 支標槍，分裂成閃電打中 {1} 隻怪物，各造成 {2} 傷害。', 'Fires # arrows that burst into freezing ice for # damage and a #s chill.': '射出 {0} 支箭，爆成冰凍的冰，造成 {1} 傷害並冰緩 {2} 秒。',
'Fires # arrows that explode for # damage and leave a pyre burning for #s.': '射出 {0} 支箭，爆炸造成 {1} 傷害，並留下燃燒 {2} 秒的火堆。', 'A duplicate of you appears every few seconds to draw monsters, more often and longer by level.': '每隔幾秒出現一個你的分身來吸引怪物，等級越高出現越頻繁、持續越久。', 'Nearby monsters take #% more damage. It breaks no immunity.': '附近的怪物受到的傷害增加 {0}%。不會打破免疫。',
'# webs of lightning shock the nearest pack for # damage # times a second for #s.': '{0} 張閃電網電擊最近的怪群，{3} 秒內每秒 {2} 次，每次 {1} 傷害。', '* of lightning shock the nearest pack for # damage # times a second for #s.': '{0}閃電電擊最近的怪群，{3} 秒內每秒 {2} 次，每次 {1} 傷害。', 'A sentry near the nearest pack fires # bursts of # charged bolts of # damage.': '在最近的怪群附近設下哨兵，發射 {0} 輪，每輪 {1} 道 {2} 傷害的充能彈。',
'A spinning blade patrols between you and the nearest pack for #s, # damage a cut.': '一把旋轉刀刃在你和最近的怪群之間巡邏 {0} 秒，每次切割 {1} 傷害。', 'Claws the toughest in reach for # damage. Every fourth blow releases # charges of +#%.': '爪擊攻擊範圍內最強的怪物，造成 {0} 傷害。每第四擊釋放 {1} 層充能，每層 +{2}%。', 'Claws the toughest in reach for # damage. Every fourth blow drains # more, healing #%.': '爪擊攻擊範圍內最強的怪物，造成 {0} 傷害。每第四擊再吸取 {1}，回復其中 {2}%。',
'Claws the toughest in reach for # damage. Every fourth blow bursts in fire for # around it.': '爪擊攻擊範圍內最強的怪物，造成 {0} 傷害。每第四擊在周圍爆出火焰，造成 {1}。', 'Delivers # kick of # damage to the toughest in reach. The last releases all charges.': '對攻擊範圍內最強的怪物踢 {0} 下，每下 {1} 傷害。最後一下釋放所有充能。', 'Delivers # kicks of # damage to the toughest in reach. The last releases all charges.': '對攻擊範圍內最強的怪物踢 {0} 下，每下 {1} 傷害。最後一下釋放所有充能。',
'Delivers * of # damage to the toughest in reach. The last releases all charges.': '對攻擊範圍內最強的怪物打出{0}，每下 {1} 傷害。最後一下釋放所有充能。', 'Crushes # monster for # damage and knocks them back.': '壓制 {0} 隻怪物，造成 {1} 傷害並擊退。', 'Crushes # monsters for # damage and knocks them back.': '壓制 {0} 隻怪物，造成 {1} 傷害並擊退。', 'Crushes * for # damage and knocks them back.': '壓制 {0}，造成 {1} 傷害並擊退。',
'Near a crowd or boss, blinds all but act bosses around you for #s. They take #% more damage.': '被怪群包圍或遇到首領時，讓你周圍的怪物（幕首領除外）失明 {0} 秒，牠們受到的傷害增加 {1}%。', 'Summons your shadow, with # life and # damage a blow. Every third is a kick.': '召喚你的影子，生命 {0}，每擊 {1} 傷害。每第三擊是踢擊。', 'A trap near the nearest pack emits # waves of fire that burn all they pass for #.': '在最近的怪群附近設下陷阱，放出 {0} 波火焰，燒傷經過的所有怪物，造成 {1}。',
'A trap near the nearest pack sprays fire # times, each # flames that deal # to all in their path.': '在最近的怪群附近設下陷阱，噴火 {0} 次，每次 {1} 道火焰，對路徑上的所有怪物造成 {2}。', 'A sentry near the nearest pack shoots lightning # times for # damage through all in line.': '在最近的怪群附近設下哨兵，射出閃電 {0} 次，穿過直線上所有怪物，造成 {1} 傷害。',
'A sentry shoots lightning # times for # damage, each shot exploding a nearby corpse for # plus #% of its life.': '哨兵射出閃電 {0} 次，造成 {1} 傷害，每次射擊引爆附近一具屍體，造成 {2} 加上屍體生命的 {3}%。', 'Throws # spinning blades at the monsters around you. Each deals # plus #% of your weapon\'s and pierces three.': '向你周圍的怪物丟出 {0} 把旋轉刀刃。每把造成 {1} 加上武器傷害的 {2}%，並穿透三隻。',
'Spinning blades slice all beside you for # plus #% of your weapon\'s # times a second and fly off at monsters for #.': '旋轉刀刃每秒 {2} 次切割你身旁所有怪物，造成 {0} 加上武器傷害的 {1}%，並飛向怪物造成 {3}。', 'Claws for # damage, letting go a meteor (#), chain lightning (#), chaos ice (#), then the ice again.': '爪擊造成 {0} 傷害，依序放出隕石（{1}）、連鎖閃電（{2}）、混沌冰（{3}），再放一次冰。',
'Claws for # damage. Every fourth blow deals # lightning, a nova of # and # charged bolts of #.': '爪擊造成 {0} 傷害。每第四擊造成 {1} 閃電、{2} 的新星，以及 {3} 道 {4} 的充能彈。', 'Claws for # damage. Every fourth blow deals # cold, shatters ice for as much around and leaves freezing cubes.': '爪擊造成 {0} 傷害。每第四擊造成 {1} 冰寒，在周圍碎冰造成同樣傷害，並留下冰凍的冰塊。',
'Both claws slice the toughest in reach for # damage each, releasing all charges.': '雙爪切割攻擊範圍內最強的怪物，每爪 {0} 傷害，並釋放所有充能。', 'Kicks the toughest in reach for # damage and explodes in fire for # around, releasing all charges.': '踢擊攻擊範圍內最強的怪物，造成 {0} 傷害，並在周圍爆出火焰造成 {1}，釋放所有充能。', 'Teleports to the toughest ahead and kicks it for # damage, releasing all charges.': '傳送到前方最強的怪物身邊踢擊，造成 {0} 傷害，並釋放所有充能。',
'Stuns the nearest pack for # seconds and deals # damage to each monster in it.': '暈眩最近的怪群 {0} 秒，並對其中每隻怪物造成 {1} 傷害。', 'Your shadow master has # life and # a blow. Every third is a fire, lightning or ice kick.': '你的暗影大師生命 {0}，每擊 {1}。每第三擊是火焰、閃電或冰的踢擊。', '+#% movement speed (up to +#%) and #% shorter recharge': '移動速度 +{0}%（最多 +{1}%），冷卻縮短 {2}%',
'+#% to all resistances, #% Damage Reduced. Poison and chill wear off #% faster.': '所有抗性 +{0}%，傷害減少 {1}%。中毒和冰緩消退快 {2}%。', 'Claws and blades deal # poison damage a second for #s.': '爪和刀刃在 {1} 秒內每秒造成 {0} 毒素傷害。', 'Attacks two monsters in reach, or one twice, for # damage each.': '攻擊範圍內的兩隻怪物，或對一隻攻擊兩次，各造成 {0} 傷害。',
'Strikes the toughest monster in reach for # damage and knocks it back.': '打擊攻擊範圍內最強的怪物，造成 {0} 傷害並擊退。', 'Leaps where you run, or into a pack when still. The landing knocks back for # damage.': '往你跑的方向跳躍，站著不動時跳進怪群。落地擊退怪物，造成 {0} 傷害。', 'Throws an axe from each hand for # damage*.': '雙手各丟出一把斧頭，每把造成 {0} 傷害{1}。',
'Whirls # yards through your enemies, hitting each # times a second for # damage.': '在敵人之間旋轉 {0} 碼，每秒打中每隻 {1} 次，每次 {2} 傷害。', 'When monsters crowd you while you are hurt, they flee in fear for # seconds. Bosses flee less, act bosses never.': '你受傷時被怪物圍住，牠們會驚恐逃跑 {0} 秒。首領逃跑時間較短，幕首領不會逃。',
'Enrages the toughest monster nearby to charge you for # seconds, its blows #% weaker.': '激怒附近最強的怪物，讓它衝向你 {0} 秒，它的攻擊減弱 {1}%。', 'For # seconds you take #% less physical damage.': '{0} 秒內你受到的物理傷害減少 {1}%。', 'Monsters around you, bosses too, take #% more damage for #s.': '你周圍的怪物（包括首領）{1} 秒內受到的傷害增加 {0}%。',
'Injures all nearby monsters for # damage and stuns them for # seconds.': '傷害附近所有怪物，造成 {0} 傷害並暈眩 {1} 秒。', 'Creates a frightening totem in the nearest pack. Monsters within # of it flee for # seconds.': '在最近的怪群中立起恐怖圖騰。範圍 {0} 內的怪物逃跑 {1} 秒。', 'Swings twice in a wide reach for # damage each. Each hit makes you faster, up to # times.': '在大範圍內揮擊兩次，每次 {0} 傷害。每次命中都讓你更快，最多 {1} 次。',
'Strikes the toughest monster in reach for # damage, splashing # on those beside it.': '打擊攻擊範圍內最強的怪物，造成 {0} 傷害，並濺射旁邊的怪物 {1}。', 'Strikes the toughest monster in reach for # magic damage. You take #% more physical damage for # second after.': '打擊攻擊範圍內最強的怪物，造成 {0} 魔法傷害。之後 {2} 秒你受到的物理傷害增加 {1}%。',
'Leaps where you run, or at a foe, striking for # damage and # to those around.': '往你跑的方向或敵人跳躍，打擊造成 {0} 傷害，周圍怪物受到 {1}。', 'Throws # axes at the monsters around you for # damage each, passing through #.': '向你周圍的怪物丟出 {0} 把斧頭，各造成 {1} 傷害，穿透 {2} 隻。', 'You take #% less physical damage and have #% more life, renewed every # seconds.': '你受到的物理傷害減少 {0}%，生命增加 {1}%，每 {2} 秒重新施放。',
'Gives Battle Orders and +# to all your skills.': '給予戰鬥命令，並讓你所有技能 +{0}。', 'An axe gives +#% physical damage and +#% chance of a critical strike.': '使用斧頭時物理傷害 +{0}%，致命一擊機率 +{1}%。', 'A sword gives +#% physical damage and +#% chance of a critical strike.': '使用劍時物理傷害 +{0}%，致命一擊機率 +{1}%。', 'A blunt weapon gives +#% physical damage and +#% chance of a critical strike.': '使用鈍器時物理傷害 +{0}%，致命一擊機率 +{1}%。',
'A polearm gives +#% physical damage and +#% chance of a critical strike.': '使用長柄武器時物理傷害 +{0}%，致命一擊機率 +{1}%。', 'A spear or javelin gives +#% physical damage and +#% chance of a critical strike.': '使用長矛或標槍時物理傷害 +{0}%，致命一擊機率 +{1}%。', 'Thrown axes deal #% more damage and have +#% chance to pierce what they hit.': '投擲斧傷害增加 {0}%，穿透命中目標的機率 +{1}%。',
'Improves Defense, so physical hits hurt you less.': '提高防禦，讓物理攻擊對你的傷害降低。', '+#% to all resistances. Poison and chill wear off #% faster.': '所有抗性 +{0}%。中毒和冰緩消退快 {1}%。', 'Slain monsters have a #% chance to leave gold, champions #%, and a small chance of an item.': '被擊殺的怪物有 {0}% 機率留下金幣，冠軍怪 {1}%，還有小機率留下物品。', 'Fires # teeth at the nearest monster for # damage each.': '向最近的怪物射出 {0} 顆牙齒，各造成 {1} 傷害。',
'A corpse explodes, dealing # damage plus #% of its life within #. Its kills don\'t explode.': '一具屍體爆炸，在範圍 {2} 內造成 {0} 傷害加上屍體生命的 {1}%。被它炸死的怪物不會再爆。', 'Stabs * for * damage and * poison over * seconds.': '刺擊 {0}，造成 {1} 傷害，並在 {3} 秒內造成 {2} 毒素傷害。', 'Stabs # monsters for # damage and # poison over # seconds.': '刺擊 {0} 隻怪物，造成 {1} 傷害，並在 {3} 秒內造成 {2} 毒素傷害。',
'Stabs # monster for # damage and # poison over # seconds.': '刺擊 {0} 隻怪物，造成 {1} 傷害，並在 {3} 秒內造成 {2} 毒素傷害。', 'Bone walls cage the * near you for * seconds (act bosses half as long).': '骨牆把你附近的{0}關住 {1} 秒（幕首領時間減半）。', 'Monsters within # of a target lose #% physical resistance for # seconds (a fifth if immune).': '目標 {0} 範圍內的怪物 {2} 秒內物理抗性降低 {1}%（免疫的只有五分之一）。',
'Monsters within # of a target deal #% less damage for #s.': '目標 {0} 範圍內的怪物 {2} 秒內傷害減少 {1}%。', 'Monsters within # of a target, ranged first, see you only up close for #s (not act bosses).': '目標 {0} 範圍內的怪物（優先遠程怪）{1} 秒內只看得到近距離的你（幕首領除外）。', 'For #s, monsters within # of the nearest take back #% of their blows on you and summons.': '{0} 秒內，最近的怪物 {1} 範圍內的怪物攻擊你和召喚物時，會受到 {2}% 的反彈傷害。',
'Monsters within # of the nearest flee for #s and don\'t attack (not act bosses).': '最近的怪物 {0} 範圍內的怪物逃跑 {1} 秒且不攻擊（幕首領除外）。', 'For #s, #% of the damage you and summons deal monsters within # of the nearest heals you.': '{0} 秒內，你和召喚物對最近的怪物 {2} 範圍內的怪物造成的傷害有 {1}% 會回復你。', 'Up to * of * life and * damage fight for you.': '最多{0}為你作戰，生命 {1}，傷害 {2}。',
'Up to # skeletons of # life and # damage fight for you.': '最多 {0} 隻骷髏為你作戰，生命 {1}，傷害 {2}。', '* * fire, cold, lightning or poison bolts for * damage each.': '{0}施放火焰、冰寒、閃電或毒素法術，每道造成 {2} 傷害。', 'Up to # skeletal mages cast fire, cold, lightning or poison bolts for # damage each.': '最多 {0} 隻骷髏法師施放火焰、冰寒、閃電或毒素法術，每道造成 {1} 傷害。',
'# skeletal mage casts fire, cold, lightning or poison bolts for # damage each.': '{0} 隻骷髏法師施放火焰、冰寒、閃電或毒素法術，每道造成 {1} 傷害。', 'A golem of clay with # life and # damage fights for you and slows what it hits.': '一隻生命 {0}、傷害 {1} 的黏土石魔為你作戰，並減緩被它打中的怪物。', '# bone spears pierce every monster in their path for # damage.': '{0} 支骨矛穿透路徑上的每隻怪物，造成 {1} 傷害。',
'# bone spirits each track down one of the nearest monsters for # damage.': '{0} 個骨靈各自追蹤最近的一隻怪物，造成 {1} 傷害。', 'A corpse by the nearest monster bursts and poisons all within # for # over #s.': '最近怪物旁的一具屍體爆開，讓範圍 {0} 內所有怪物中毒，{2} 秒內造成 {1}。', 'An expanding ring of poison deals # poison damage over # seconds to all it touches.': '擴散的毒環對碰到的所有怪物在 {1} 秒內造成 {0} 毒素傷害。',
'For #s, monsters within # of a target slow by half, deal #% less damage and lose #% physical resistance (a fifth if immune).': '{0} 秒內，目標 {1} 範圍內的怪物減速一半，傷害減少 {2}%，物理抗性降低 {3}%（免疫的只有五分之一）。', 'Monsters within # of the nearest attack each other with their own blows for # seconds (not act bosses).': '最近的怪物 {0} 範圍內的怪物 {1} 秒內用自己的攻擊互相攻擊（幕首領除外）。',
'Monsters within # attack the toughest of the nearest pack for #s, then the next when it dies.': '範圍 {0} 內的怪物 {1} 秒內攻擊最近怪群中最強的怪物，牠死後再攻擊下一隻。', 'Up to # slain monsters rise for #s to fight for you, beside up to # skeletons.': '最多 {0} 隻被擊殺的怪物復活 {1} 秒為你作戰，另外還有最多 {2} 隻骷髏。', 'A golem of blood with # life and # damage heals you #% of each blow it lands.': '一隻生命 {0}、傷害 {1} 的血魔，每次攻擊命中都回復你傷害的 {2}%。',
'Creates a golem of iron with # life and # damage. Its Thorns aura returns #% of each blow to its striker.': '產生一隻生命 {0}、傷害 {1} 的鐵魔。它的荊棘靈氣把每次攻擊的 {2}% 反彈給攻擊者。', 'A golem of fire with # life and # damage burns all near it with Holy Fire.': '一隻生命 {0}、傷害 {1} 的火焰石魔，以聖火燃燒它附近的所有怪物。', 'Bone absorbs physical damage': '白骨吸收物理傷害',
'Bone walls cage the toughest monster near you for # seconds (act bosses half as long).': '骨牆把你附近最強的怪物關住 {0} 秒（幕首領時間減半）。', 'Bone walls cage the # toughest monsters near you for # seconds (act bosses half as long).': '骨牆把你附近最強的 {0} 隻怪物關住 {1} 秒（幕首領時間減半）。', '# fire trails run # yards at monsters, burning # damage # times a second.': '{0} 道火焰軌跡朝怪物延伸 {1} 碼，每秒燃燒 {3} 次，每次 {2} 傷害。',
'Two jets of ice blast in a fan before you, each shard dealing # damage and chilling.': '兩道冰流在你前方扇形噴出，每片碎片造成 {0} 傷害並冰緩。', 'Vents erupt under the nearest pack for #s across # yards, each burst dealing # damage.': '最近的怪群腳下 {1} 碼範圍噴發 {0} 秒，每次爆發造成 {2} 傷害。', '* seek monsters, dealing * damage to each they pass and stunning it.': '{0}追蹤怪物，對經過的每隻怪物造成 {1} 傷害並暈眩。',
'# raven pecks at monsters # times each, for # damage.': '{0} 隻烏鴉每隻啄怪物 {1} 次，造成 {2} 傷害。', 'Up to # ravens peck at monsters # times each, for # damage.': '最多 {0} 隻烏鴉，每隻啄怪物 {1} 次，造成 {2} 傷害。', '* * at monsters * times each, for * damage.': '{0} {1}每隻對怪物攻擊 {2} 次，造成 {3} 傷害。', '# creeper crawls after monsters, each bite poisoning # over #s. Each has # life.': '{0} 株藤蔓爬向怪物，每次咬擊在 {2} 秒內造成 {1} 毒素。每株生命 {3}。',
'Up to # creepers crawl after monsters, each bite poisoning # over #s. Each has # life.': '最多 {0} 株藤蔓爬向怪物，每次咬擊在 {2} 秒內造成 {1} 毒素。每株生命 {3}。', '* * after monsters, each bite poisoning * over *s. Each has * life.': '{0} {1}追著怪物，每次咬擊在 {3} 秒內造成 {2} 毒素。每株生命 {4}。', 'The Oak Sage follows you, adding #% maximum life.': '橡木智者跟著你，增加 {0}% 生命上限。',
'For #s a werewolf with +#% life, you claw # every #s, +#% Critical Strike.': '{0} 秒內變成狼人，生命 +{1}%，每 {3} 秒爪擊 {2}，致命一擊 +{4}%。', 'For #s a werebear with +#% life, you take #% less physical damage, splashing #.': '{0} 秒內變成熊人，生命 +{1}%，受到的物理傷害減少 {2}%，濺射 {3}。', '# molten boulders knock back all in their path for # damage, leaving fire.': '{0} 顆熔岩巨石擊退路徑上的所有怪物，造成 {1} 傷害，並留下火焰。',
'A volcano rises under the nearest pack for #s, raining rocks of # damage each.': '最近的怪群腳下升起火山 {0} 秒，落下的岩石每顆造成 {1} 傷害。', 'For #s burning rocks rain around you, on the toughest most, each dealing # damage.': '{0} 秒內燃燒的岩石落在你周圍，最強的怪物被砸最多，每顆造成 {1} 傷害。', '# tornadoes wander the monsters, dealing # damage to each they pass and stunning it.': '{0} 道龍捲風在怪物間遊走，對經過的每隻怪物造成 {1} 傷害並暈眩。',
'For #s a storm within # yards deals # cold damage # times a second, chilling.': '{0} 秒內，{1} 碼內的風暴每秒 {3} 次造成 {2} 冰寒傷害並冰緩。', 'Up to # spirit wolves fight beside you with # ravens, each sweeping bite dealing #.': '最多 {0} 隻靈狼和 {1} 隻烏鴉在你身旁作戰，每次橫掃咬擊造成 {2}。', 'Up to # dire wolves bite for #, the pack gets +#% life, and # spirit wolves and # ravens stay.': '最多 {0} 隻恐狼，咬擊造成 {1}，狼群生命 +{2}%，{3} 隻靈狼和 {4} 隻烏鴉留下。',
'A grizzly swipes for # damage, splashing, and gives the pack +#% damage, with # dire wolves, # spirit wolves and # ravens.': '一隻灰熊揮擊造成 {0} 範圍傷害，狼群傷害 +{1}%，另有 {2} 隻恐狼、{3} 隻靈狼和 {4} 隻烏鴉。', 'A vine eats corpses near you, each healing # life plus #% of maximum, with # poison creepers.': '藤蔓吃掉你附近的屍體，每具回復 {0} 生命加上生命上限的 {1}%，另有 {2} 株毒藤。',
'Each corpse eaten speeds recharge #% for #s, up to #%. The Carrion Vine and # creepers stay.': '每吃一具屍體冷卻加速 {0}%，持續 {1} 秒，最多 {2}%。腐肉藤和 {3} 株藤蔓留下。', 'It adds +#% damage to your and your summons\' blows, +#% Attack Rating and the Oak Sage\'s +#% life.': '你和召喚物的攻擊傷害 +{0}%，準確率 +{1}%，並保留橡木智者的生命 +{2}%。',
'Monsters that strike you take #% of the damage back, and Wolverine\'s bonuses stay.': '攻擊你的怪物受到 {0}% 的反彈傷害，狼獾之心的加成保留。', 'For #s a werewolf, you strike all in reach # times every #s for # each.': '{0} 秒內變成狼人，每 {2} 秒對攻擊範圍內所有怪物打 {1} 次，每次 {3}。', 'As a werebear for #s you hit for # plus # a charge, up to #. Full charges stun.': '{0} 秒內變成熊人，攻擊造成 {1} 加上每層充能 {2}，最多 {3}。滿充能時會暈眩。',
'For #s you Maul as a werebear, every #rd swing stomping the blow out to all within # yards, stunning.': '{0} 秒內以熊人形態槌擊，每第 {1} 次揮擊踐踏地面，把這一擊傳給 {2} 碼內所有怪物並暈眩。', 'Your wereforms last #s longer, #s a level, with +#% more life, +#% a level.': '變形持續時間延長 {0} 秒，每級 {1} 秒，生命 +{2}%，每級 +{3}%。', 'Your wereforms last #s longer, with +#% more life.': '變形持續時間延長 {0} 秒，生命 +{1}%。',
'Your wereform blows add # poison over #s, and a bitten monster spreads it to those around it.': '變形時的攻擊在 {1} 秒內附加 {0} 毒素，被咬的怪物會傳染給周圍的怪物。', 'Your wereform blows heal you #% of their damage.': '變形時的攻擊回復你造成傷害的 {0}%。', '+#% fire damage, and wereform claws burn with it.': '火焰傷害 +{0}%，變形時的爪擊附帶火焰。', 'Your spirits\' bonuses, vines\' gifts and creepers\' poison are #% stronger.': '你的精靈加成、藤蔓的效果和藤蔓毒素增強 {0}%。',
'Fires * of holy light that * *, for * damage (double to the undead).': '射出 {0}聖光，{1}{2}，造成 {3} 傷害（對不死生物加倍）。', '* hit the monsters in reach for * damage each.': '{0}打中攻擊範圍內的怪物，各造成 {1} 傷害。', 'Charges through the monsters in your path for # damage each, then attacks.': '衝過路徑上的怪物，各造成 {0} 傷害，然後攻擊。',
'For #s your shield has +#% Chance to Block and +#% Defense, and smites what you block for #. Smite hits harder.': '{0} 秒內盾牌格擋機率 +{1}%，防禦 +{2}%，並懲擊被你格擋的怪物造成 {3}。懲擊傷害更高。', 'Your shield bashes the toughest monster in reach for # damage, stunning and knocking it back.': '用盾牌重擊攻擊範圍內最強的怪物，造成 {0} 傷害，並暈眩擊退。',
'Strikes the toughest monster in reach for # damage, costing #% of your life (none below #%).': '打擊攻擊範圍內最強的怪物，造成 {0} 傷害，消耗你 {1}% 生命（低於 {2}% 時不消耗）。', 'Hits the toughest monster in reach for # fire, cold and lightning damage each, half to those beside.': '打擊攻擊範圍內最強的怪物，火焰、冰寒和閃電傷害各 {0}，旁邊的怪物受到一半。',
'The strongest monster near you, never an elite or a boss, fights for you for #s, up to # at once.': '你附近最強的怪物（不含精英和首領）為你作戰 {0} 秒，同時最多 {1} 隻。', '# blessed hammers whirl around you, faster and wider, for # damage to all they pass.': '{0} 把祝福之鎚在你周圍旋轉，更快更廣，對經過的所有怪物造成 {1} 傷害。',
'Lightning strikes the toughest monster and one more for #, as holy bolts burst out for # each.': '閃電打中最強的怪物和另一隻，造成 {0}，並爆出聖光彈，每道 {1}。', '# frenzied blows of # damage hit the toughest monster in a wide reach until it falls, each sweeping #% through those beside it.': '{0} 次狂熱攻擊，每次 {1} 傷害，在大範圍內打最強的怪物直到牠倒下，每擊對旁邊的怪物橫掃 {2}%。',
'Charges # times along your path, dealing # damage, with a holy burst at each stop.': '沿著你的路徑衝鋒 {0} 次，造成 {1} 傷害，每次停下時發出神聖爆發。', 'Holy Shield at its height lasts for good, with +#% Chance to Block. A holy blast deals # damage around you every #s.': '神聖之盾在最高時永久持續，格擋機率 +{0}%。每 {2} 秒在你周圍發出神聖爆炸，造成 {1} 傷害。',
'Strikes up to # monsters in reach for # fire, cold and lightning each, and half to those beside.': '打擊攻擊範圍內最多 {0} 隻怪物，火焰、冰寒和閃電各 {1}，旁邊的怪物受到一半。', 'Bashes the toughest monster in reach for # damage, stunning and knocking it back. A shockwave stuns all around it for #% of that.': '重擊攻擊範圍內最強的怪物，造成 {0} 傷害並暈眩擊退。衝擊波暈眩牠周圍所有怪物，造成其中 {1}%。',
'Adds +#% physical damage (Zeal, Smite, Charge).': '物理傷害 +{0}%（熱誠、懲擊、衝鋒）。', 'Burns monsters around you each second, and adds # times that to your attacks.': '每秒燃燒你周圍的怪物，並把 {0} 倍的傷害加到你的攻擊上。', 'Slows monsters around you by half and chills them, and adds # times its cold to attacks.': '讓你周圍的怪物減速一半並冰緩，並把 {0} 倍的冰寒傷害加到攻擊上。',
'Jolts monsters around you each second, and adds # times that to your attacks.': '每秒電擊你周圍的怪物，並把 {0} 倍的傷害加到你的攻擊上。', 'Adds +#% damage to your attacks and Blessed Hammer.': '你的攻擊和祝福之鎚傷害 +{0}%。', 'Skills recharge #% faster and gain +#% physical damage.': '技能冷卻快 {0}%，物理傷害 +{1}%。',
'Monsters around you resist fire, cold and lightning #% less, +#% a level (a fifth of that if immune).': '你周圍怪物的火焰、冰寒和閃電抗性降低 {0}%，每級 +{1}%（免疫的只有五分之一）。', 'Monsters around you resist fire, cold and lightning #% less (a fifth of that if immune).': '你周圍怪物的火焰、冰寒和閃電抗性降低 {0}%（免疫的只有五分之一）。', 'Monsters that strike you in melee take back #% of the blow, +#% a level.': '近戰攻擊你的怪物受到這一擊 {0}% 的反彈傷害，每級 +{1}%。',
'Monsters that strike you in melee take back #% of the blow.': '近戰攻擊你的怪物受到這一擊 {0}% 的反彈傷害。', 'Gives Zeal, Smite, Charge and Sacrifice +#% chance of a critical strike (double damage).': '熱誠、懲擊、衝鋒和犧牲的致命一擊機率 +{0}%（雙倍傷害）。', 'Adds +#% movement speed, up to +#%, and Charge reaches further.': '移動速度 +{0}%，最多 +{1}%，衝鋒距離更遠。', 'Adds Defense, so physical hits deal less damage.': '增加防禦，讓物理攻擊造成的傷害降低。',
'Heals you # life a second, up to #.': '每秒回復你 {0} 生命，最多 {1}。', 'Adds +#% fire resistance, and +#% to its maximum (#%) a level learned.': '火焰抗性 +{0}%，每學一級上限（{2}%）+{1}%。', 'Adds +#% cold resistance, and +#% to its maximum (#%) a level learned. Chill wears off #% faster.': '冰寒抗性 +{0}%，每學一級上限（{2}%）+{1}%。冰緩消退快 {3}%。',
'Adds +#% lightning resistance, and +#% to its maximum (#%) a level learned.': '閃電抗性 +{0}%，每學一級上限（{2}%）+{1}%。', 'Adds +#% fire, cold and lightning resistance, and chill wears off #% faster.': '火焰、冰寒和閃電抗性 +{0}%，冰緩消退快 {1}%。', 'Poison and chill wear off #% faster on you.': '你身上的中毒和冰緩消退快 {0}%。', 'Adds +#% mana regeneration as Faster Cast Rate, so skills recharge #% faster.': '法力恢復 +{0}%，等同快速施法率，技能冷卻快 {1}%。',
'Monsters slain near you heal you # life #% of the time, +#% a level.': '你附近被擊殺的怪物有 {1}% 機率回復你 {0} 生命，每級 +{2}%。', 'Monsters slain near you heal you # life #% of the time.': '你附近被擊殺的怪物有 {1}% 機率回復你 {0} 生命。', 'Hurts the undead near you for # damage twice a second, +# a level, and knocks them back.': '每秒兩次傷害你附近的不死生物，造成 {0} 傷害，每級 +{1}，並擊退牠們。',
'Hurts the undead near you for # damage twice a second, and knocks them back.': '每秒兩次傷害你附近的不死生物，造成 {0} 傷害，並擊退牠們。', '* out around you for * damage to all *.': '{0}在你周圍向外旋出，對經過的所有怪物造成 {1} 傷害。', '* hammers spiral': '{0} 把鎚子旋出', 'Fires * at the nearest monsters for * damage.': '向最近的怪物射出 {0}，造成 {1} 傷害。', 'Fires * of ice that * * and *, for * damage.': '射出 {0} 冰彈，穿透 {2} 並冰緩，造成 {4} 傷害。',
'Fires # bolt of ice that pierces # and chills, for # damage.': '射出 {0} 道冰彈，穿透 {1} 隻並冰緩，造成 {2} 傷害。', 'Fires # bolts of ice that pierce # and chill, for # damage.': '射出 {0} 道冰彈，穿透 {1} 隻並冰緩，造成 {2} 傷害。', 'Fires * of lightning for * damage each.': '射出 {0} 閃電，每道造成 {1} 傷害。', 'A ring of lightning deals # damage to all within #.': '一圈閃電對範圍 {1} 內所有怪物造成 {0} 傷害。',
'Fire trails you for #s, dealing # damage # times a second.': '火焰跟著你 {0} 秒，每秒 {2} 次造成 {1} 傷害。', 'Monsters within # lose #% of their life, and elites and bosses a third of that.': '範圍 {0} 內的怪物失去 {1}% 的生命，精英和首領為三分之一。', 'A jet of # flames at the nearest monster within # burns all in its path for # damage each.': '向範圍 {1} 內最近的怪物噴出 {0} 道火焰，燒傷路徑上的所有怪物，各造成 {2} 傷害。',
'Summons a hydra by the nearest pack for #s that spits # damage fire bolts.': '在最近的怪群旁召喚九頭蛇 {0} 秒，噴出 {1} 傷害的火彈。', 'Fires * of lightning through all in line for * damage.': '射出 {0} 閃電，穿過直線上所有怪物，造成 {1} 傷害。', 'When monsters close in, you blink ahead where they are fewest. It recharges in #s.': '怪物逼近時，你瞬移到前方怪物最少的地方。冷卻 {0} 秒。',
'A ring of ice within # deals # damage and chills all it reaches for # seconds.': '範圍 {0} 內的冰環造成 {1} 傷害，並冰緩碰到的所有怪物 {2} 秒。', '* of * damage * for *s.': '{0}，每道 {1} 傷害，冰凍 {3} 秒。', '# bolt of # damage freezes what it hits for #s.': '{0} 道 {1} 傷害的冰彈，冰凍命中的目標 {2} 秒。', '# bolts of # damage freeze what they hit for #s.': '{0} 道 {1} 傷害的冰彈，冰凍命中的目標 {2} 秒。',
'For #s, melee attackers freeze for #s, and #% of blows and missiles miss you.': '{0} 秒內，近戰攻擊者被冰凍 {1} 秒，{2}% 的攻擊和投射物打不中你。', 'Fires # fire balls at the nearest monsters that burst on impact for # damage.': '向最近的怪物射出 {0} 顆火球，命中時爆炸造成 {1} 傷害。', '# meteors crash onto monsters nearby for # damage each and leave the ground burning.': '{0} 顆隕石砸向附近的怪物，各造成 {1} 傷害，並讓地面燃燒。',
'Creates an orb that sprays chilling ice shards in every direction for # damage each.': '產生一顆冰球，向四面八方噴出冰緩的冰碎片，每片造成 {0} 傷害。', '# bolts jump between up to # monsters for # damage each.': '{0} 道閃電在最多 {1} 隻怪物間跳躍，各造成 {2} 傷害。', 'Lightning strikes # monsters at a time around you for # damage.': '閃電一次打中你周圍 {0} 隻怪物，造成 {1} 傷害。',
'Fires # ice spikes that burst for # damage and freeze all in the burst for # seconds.': '射出 {0} 根冰刺，爆開造成 {1} 傷害，並冰凍爆開範圍內所有怪物 {2} 秒。', '# ice shards rain on the nearest pack over # seconds, each dealing # damage and chilling.': '{1} 秒內 {0} 片冰碎片落在最近的怪群上，每片造成 {2} 傷害並冰緩。',
'For # seconds, melee attackers take # cold damage and a # second chill, and #% of blows and missiles miss you.': '{0} 秒內，近戰攻擊者受到 {1} 冰寒傷害並冰緩 {2} 秒，{3}% 的攻擊和投射物打不中你。', 'For #s, melee attackers take # cold damage and a #s chill, ranged ones a # ice bolt. #% miss.': '{0} 秒內，近戰攻擊者受到 {1} 冰寒傷害並冰緩 {2} 秒，遠程攻擊者受到 {3} 的冰彈。{4}% 打不中。',
'Your mana takes #% of every hit instead of your life.': '每次受到攻擊時有 {0}% 由法力代替生命承受。', 'Lowers enemy fire resistance #%, a fifth of that if immune.': '敵人火焰抗性降低 {0}%，免疫的只有五分之一。', 'Lowers enemy cold resistance #%, a fifth of that if immune.': '敵人冰寒抗性降低 {0}%，免疫的只有五分之一。', 'Lowers enemy lightning resistance #%, a fifth of that if immune.': '敵人閃電抗性降低 {0}%，免疫的只有五分之一。',
'Fire skills deal #% more, the Hydra\'s bolts #% more.': '火焰技能傷害增加 {0}%，九頭蛇的火彈增加 {1}%。', 'Fires # arrow of # damage that chills for #s.': '射出 {0} 支箭，每支造成 {1} 傷害，並冰緩 {2} 秒。', 'Fires # arrows of # damage that chill for #s.': '射出 {0} 支箭，每支造成 {1} 傷害，並冰緩 {2} 秒。', '# arrow explodes for # damage around what it hits.': '{0} 支箭在命中處周圍爆炸，造成 {1} 傷害。',
'# arrows explode for # damage around what they hit.': '{0} 支箭在命中處周圍爆炸，造成 {1} 傷害。', 'Fires # arrow of # damage that hunts down its target.': '射出 {0} 支箭，追蹤目標，每支造成 {1} 傷害。', 'Fires # arrows of # damage that hunt down their target.': '射出 {0} 支箭，追蹤目標，每支造成 {1} 傷害。', 'Throws an axe from each hand for # damage, passing through # monster.': '雙手各丟出一把斧頭，每把造成 {0} 傷害，穿透 {1} 隻怪物。',
'Throws an axe from each hand for # damage, passing through # monsters.': '雙手各丟出一把斧頭，每把造成 {0} 傷害，穿透 {1} 隻怪物。', 'Lowers every monster\'s fire, cold, lightning and poison resistance by #%, up to #% (a fifth if immune).': '降低所有怪物的火焰、冰寒、閃電和毒素抗性 {0}%，最多 {1}%（免疫的只有五分之一）。', '# hammer spirals out around you for # damage to all it passes.': '{0} 把鎚子在你周圍向外旋出，對經過的所有怪物造成 {1} 傷害。',
'# hammers spiral out around you for # damage to all they pass.': '{0} 把鎚子在你周圍向外旋出，對經過的所有怪物造成 {1} 傷害。',
'SHOW DAMAGE: *': '顯示傷害：{0}', 'Fires # spark of lightning for # damage each.': '射出 {0} 道閃電火花，每道造成 {1} 傷害。', 'Fires # sparks of lightning for # damage each.': '射出 {0} 道閃電火花，每道造成 {1} 傷害。', 'Fires # bolt of lightning through all in line for # damage.': '射出 {0} 道閃電，穿過直線上所有怪物，造成 {1} 傷害。', 'Fires # bolts of lightning through all in line for # damage.': '射出 {0} 道閃電，穿過直線上所有怪物，造成 {1} 傷害。', 'Fires # bolt at the nearest monsters for # damage.': '向最近的怪物射出 {0} 道法術彈，造成 {1} 傷害。', 'Fires # bolts at the nearest monsters for # damage.': '向最近的怪物射出 {0} 道法術彈，造成 {1} 傷害。', 'Fires # bolt of holy light that pierces #, for # damage (double to the undead).': '射出 {0} 道聖光彈，穿透 {1} 隻，造成 {2} 傷害（對不死生物加倍）。', 'Fires # bolts of holy light that pierce #, for # damage (double to the undead).': '射出 {0} 道聖光彈，穿透 {1} 隻，造成 {2} 傷害（對不死生物加倍）。',
'Increase Maximum Life #%': '生命上限增加 {0}%', '+# to Attack Rating against Undead (Based on Character Level)': '+{0} 對不死生物的攻擊準確率（依角色等級）', '+# to Attack Rating against Demons (Based on Character Level)': '+{0} 對惡魔的攻擊準確率（依角色等級）',
'+# to Attack Rating against Undead': '+{0} 對不死生物的攻擊準確率', '+# to Attack Rating against Demons': '+{0} 對惡魔的攻擊準確率', '+# to Attack Rating against Undead per Level': '每級 +{0} 對不死生物的攻擊準確率', '+# to Attack Rating against Demons per Level': '每級 +{0} 對惡魔的攻擊準確率',
'+# to Maximum Fire Damage (Based on Character Level)': '+{0} 最大火焰傷害（依角色等級）', '+# to Maximum Cold Damage (Based on Character Level)': '+{0} 最大冰寒傷害（依角色等級）', '+# to Maximum Lightning Damage (Based on Character Level)': '+{0} 最大閃電傷害（依角色等級）',
// 20261025.1：套裝物品（易牙居譯名）、護身符、獨特物品分頁、傭兵技能說明、排行榜驗證
'Civerb\'s Vestments': '希弗柏的法衣', 'Cleglaw\'s Brace': '克雷得勞的支柱', 'Iratha\'s Finery': '依雷撒的華服', 'Isenhart\'s Armory': '依森哈德的武器室', 'Vidala\'s Rig': '維達拉的配備', 'Milabrega\'s Regalia': '米拉伯佳的王權', 'Cathan\'s Traps': '卡珊的陷阱', 'Tancred\'s Battlegear': '坦克雷的戰鬥工具', 'Sigon\'s Complete Steel': '西剛的全套刀劍', 'Infernal Tools': '地獄的工具', 'Berserker\'s Arsenal': '狂戰士的軍火庫', 'Death\'s Disguise': '死亡的偽裝', 'Angelic Raiment': '天上的衣服',
'Arctic Gear': '北極裝置', 'Arcanna\'s Tricks': '阿卡娜的詭計', 'Natalya\'s Odium': '娜塔亞的非難', 'Aldur\'s Watchtower': '艾爾多的守衛', 'Immortal King': '不朽之王', 'Tal Rasha\'s Wrappings': '塔.拉夏的外袍', 'Griswold\'s Legacy': '格瑞斯華爾德的傳奇', 'M\'avina\'s Battle Hymn': '馬維娜之戰鬥詩歌', 'The Disciple': '門徒', 'Heaven\'s Brethren': '天堂的信徒', 'Orphan\'s Call': '孤兒的呼喚', 'Hwanin\'s Majesty': '華寧的威嚴', 'Sazabi\'s Grand Tribute': '沙撒璧的雄偉貢品',
'Bul-Kathos\' Children': '布爾凱索的孩子', 'Cow King\'s Leathers': '牛魔王之皮甲', 'Naj\'s Ancient Vestige': '娜吉的古代遺跡', 'Sander\'s Folly': '山德的愚行', 'Civerb\'s Ward': '希弗柏的防護', 'Civerb\'s Icon': '希弗柏的圖案', 'Civerb\'s Cudgel': '希弗柏的短棍', 'Hsarus\' Iron Heel': '哈斯拉柏的鐵後跟', 'Hsarus\' Iron Fist': '哈斯拉柏的鐵拳', 'Hsarus\' Iron Stay': '哈斯拉柏的鐵胸衣', 'Cleglaw\'s Tooth': '克雷得勞之牙', 'Cleglaw\'s Claw': '克雷得勞之爪', 'Cleglaw\'s Pincers': '克雷得勞之鉗',
'Iratha\'s Collar': '依雷撒的項圈', 'Iratha\'s Cuff': '依雷撒的袖口', 'Iratha\'s Coil': '依雷撒的線圈', 'Iratha\'s Cord': '依雷撒之繩', 'Isenhart\'s Lightbrand': '依森哈德的光之烙鐵', 'Isenhart\'s Parry': '依森哈德的閃避', 'Isenhart\'s Case': '依森哈德的外殼', 'Isenhart\'s Horns': '依森哈德的號角', 'Vidala\'s Barb': '維達拉之倒刺', 'Vidala\'s Fetlock': '維達拉的距毛', 'Vidala\'s Ambush': '維達拉的突襲', 'Vidala\'s Snare': '維達拉的陷阱', 'Milabrega\'s Orb': '米拉伯佳之球', 'Milabrega\'s Rod': '米拉伯佳之杖',
'Milabrega\'s Diadem': '米拉伯佳的王冠', 'Milabrega\'s Robe': '米拉伯佳之袍', 'Cathan\'s Rule': '卡珊之尺', 'Cathan\'s Mesh': '卡珊之網', 'Cathan\'s Visage': '卡珊的容貌', 'Cathan\'s Sigil': '卡珊的魔咒', 'Cathan\'s Seal': '卡珊的封印', 'Tancred\'s Crowbill': '坦克雷的鴉嘴鉗', 'Tancred\'s Spine': '坦克雷的脊柱', 'Tancred\'s Hobnails': '坦克雷的平頭釘', 'Tancred\'s Weird': '坦克雷的怪誕', 'Tancred\'s Skull': '坦克雷之骷髏', 'Sigon\'s Gage': '西剛的挑戰', 'Sigon\'s Visor': '西剛之面甲',
'Sigon\'s Shelter': '西剛的遮蔽', 'Sigon\'s Sabot': '西剛的木鞋', 'Sigon\'s Wrap': '西剛的披肩', 'Sigon\'s Guard': '西剛的守護', 'Infernal Cranium': '地獄頭骨', 'Infernal Torch': '地獄火炬', 'Infernal Sign': '地獄符號', 'Berserker\'s Headgear': '狂戰士的頭戴', 'Berserker\'s Hauberk': '狂戰士的鎖子甲', 'Angelic Sickle': '天使的鐮刀', 'Angelic Mantle': '天使的披風', 'Angelic Halo': '天使之光', 'Angelic Wings': '天使之翼', 'Arctic Horn': '北極號角', 'Arctic Furs': '北極毛皮',
'Arctic Binding': '北極捆縛', 'Arctic Mitts': '北極手套', 'Arcanna\'s Sign': '阿卡娜的符號', 'Arcanna\'s Deathwand': '阿卡娜的死亡之杖', 'Arcanna\'s Head': '阿卡娜的頭', 'Arcanna\'s Flesh': '阿卡娜的血肉', 'Natalya\'s Totem': '娜塔亞的圖騰', 'Natalya\'s Mark': '娜塔亞的記號', 'Natalya\'s Shadow': '娜塔亞的影子', 'Natalya\'s Soul': '娜塔亞的靈魂', 'Aldur\'s Stony Gaze': '艾爾多的冷酷凝視', 'Aldur\'s Deception': '艾爾多的欺瞞', 'Aldur\'s Rhythm': '艾爾多的律動', 'Aldur\'s Advance': '艾爾多的成長',
'Immortal King\'s Will': '不朽之王的意志', 'Immortal King\'s Soul Cage': '不朽之王的靈魂牢籠', 'Immortal King\'s Detail': '不朽之王的瑣事', 'Immortal King\'s Forge': '不朽之王的融爐', 'Immortal King\'s Pillar': '不朽之王之柱', 'Immortal King\'s Stone Crusher': '不朽之王的碎魂者', 'Tal Rasha\'s Fine-Spun Cloth': '塔.拉夏的纖細衣服', 'Tal Rasha\'s Adjudication': '塔.拉夏的判決', 'Tal Rasha\'s Lidless Eye': '塔.拉夏的無瞼之眼', 'Tal Rasha\'s Guardianship': '塔.拉夏的守護',
'Tal Rasha\'s Horadric Crest': '塔.拉夏的赫拉迪克紋章', 'Griswold\'s Valor': '格瑞斯華爾德的勇氣', 'Griswold\'s Honor': '格瑞斯華爾德的榮耀', 'Trang-Oul\'s Guise': '塔格奧之外裝', 'Trang-Oul\'s Scales': '塔格奧之鱗', 'Trang-Oul\'s Wing': '塔格奧之翼', 'Trang-Oul\'s Claws': '塔格奧之手', 'Trang-Oul\'s Girth': '塔格奧之束帶', 'M\'avina\'s True Sight': '馬維娜的真實之眼', 'M\'avina\'s Embrace': '馬維娜的擁抱', 'M\'avina\'s Icy Clutch': '馬維娜的冰握', 'M\'avina\'s Tenet': '馬維娜的教義',
'M\'avina\'s Caster': '馬維娜的施展', 'Telling of Beads': '述說之珠', 'Laying of Hands': '按手禮', 'Dark Adherent': '黑暗信徒', 'Credendum': '信條', 'Dangoon\'s Teaching': '丹弓的教導', 'Taebaek\'s Glory': '泰比克的光榮', 'Haemosu\'s Adamant': '黑摩蘇的堅決', 'Ondal\'s Almighty': '安戴爾的全靈', 'Guillaume\'s Face': '吉永的臉', 'Wilhelm\'s Pride': '威廉的自尊', 'Magnus\' Skin': '馬格納斯之皮', 'Whitstan\'s Guard': '惠斯坦的武裝', 'Hwanin\'s Splendor': '華寧的光輝',
'Hwanin\'s Refuge': '華寧的保護', 'Hwanin\'s Blessing': '華寧的祝福', 'Hwanin\'s Justice': '華寧的正義', 'Sazabi\'s Cobalt Redeemer': '沙撒璧的懺悔之鈷', 'Sazabi\'s Ghost Liberator': '沙撒璧的鬼魂釋放者', 'Sazabi\'s Mental Sheath': '沙撒璧的精神之鞘', 'Bul-Kathos\' Sacred Charge': '布爾凱索的神聖代價', 'Bul-Kathos\' Tribal Guardian': '布爾凱索的部族守護', 'Cow King\'s Horns': '牛魔王之角', 'Cow King\'s Hide': '牛魔王之皮', 'Cow King\'s Hooves': '牛魔王之蹄',
'Trang-Oul\'s Avatar': '塔格奧的化身', 'Naj\'s Light Plate': '娜吉的輕型鎧甲', 'Naj\'s Circlet': '娜吉的頭飾', 'Death\'s Hand': '死亡之手', 'Death\'s Guard': '死亡守衛', 'Death\'s Touch': '死亡之觸', 'Griswold\'s Heart': '格瑞斯華爾德之心', 'Griswold\'s Redemption': '格瑞斯華爾德的救贖','Naj\'s Puzzler': '娜吉解謎杖', 'Sander\'s Paragon': '山德的模範',
'Sander\'s Riprap': '山德的碎石', 'Sander\'s Taboo': '山德的禁忌', 'Sander\'s Superstition': '山德的迷信', 'Hsarus\' Defense': '哈斯拉柏的防禦', 'Burly': '魁梧', 'Lucky': '好運', 'of Good Luck': '幸運之', 'of Inertia': '慣性之', 'of Sustenance': '維生之', 'of Vita': '活力之', 'Rugged': '凹凸', 'Stalwart': '健壯', 'Stout': '堅固', 'The Necromancer\'s summons strike harder too': '死靈法師的召喚物也會打得更重', '# stat points to place on the character screen': '{0} 屬性點數可在角色畫面分配',
'# stat points to place on the character screen (C)': '{0} 屬性點數可在角色畫面（C）分配', 'Charms (H)': '護符（H）', '# Skill Modifier Points on skills no longer drafted are free again': '沒抽到的技能上的 {0} 點技能改造點數已釋放', 'To take a tree, tap one of its skills or its tab twice': '要選技能樹，點一下它的技能，或在分頁上點兩下', 'To take a tree, click one of its skills or its tab twice': '要選技能樹，點擊它的技能，或在分頁上點擊兩下', 'Click to take this tree': '點擊選擇這個技能樹',
'Tap again to take this tree': '再點一下選擇這個技能樹', '# creeper crawls after monsters, each bite poisoning # over #s.': '{0} 株藤蔓爬向怪物，每次咬擊在 {2} 秒內造成 {1} 毒素。', 'Up to # creepers crawl after monsters, each bite poisoning # over #s.': '最多 {0} 株藤蔓爬向怪物，每次咬擊在 {2} 秒內造成 {1} 毒素。', '* * after monsters, each bite poisoning # over #s.': '{0}追著怪物，每次咬擊在 {3} 秒內造成 {2} 毒素。', 'Uniques': '獨特物品',
'Only unique and set items go there': '只能放獨特和套裝物品', 'You have kept one already': '你已經保留一件了', 'Axes': '斧', 'Swords': '劍', 'Maces': '錘', 'Scepters': '權杖', 'Daggers': '匕首', 'Throwing Weapons': '投擲武器', 'Javelins': '標槍', 'Spears': '長矛', 'Polearms': '長柄武器', 'Bows': '弓', 'Crossbows': '十字弓', 'Staves': '法杖', 'Wands': '魔杖', 'Orbs': '法珠', 'Katars': '拳刃', 'All': '全部', 'Kept': '已保留', 'Missing': '未取得', 'Search uniques': '搜尋獨特物品', 'Found': '找到',
'No unique by that name': '沒有這個名稱的獨特物品', 'None kept yet': '還沒有保留任何物品', 'Every one is kept': '全部都已保留', 'Not legit: stats outside its set item\'s': '不合規：屬性不在這件套裝物品的範圍內', 'They are sent once you turn it back on': '重新開啟後就會傳送', 'Adds #-# fire damage to the hero\'s attacks, not her spells': '英雄的攻擊（不含法術）增加 {0}-{1} 火焰傷害', 'Adds fire damage to the hero\'s attacks, not her spells': '英雄的攻擊（不含法術）增加火焰傷害',
'Monsters near her take #% more damage, cast again as it runs out': '她附近的怪物受到的傷害增加 {0}%，效果結束時再次施放', 'Heals the hero # life a second while she\'s near him': '英雄在他附近時，每秒回復她 {0} 生命', 'Adds Defense to the hero while she\'s near him, so physical hits deal her less damage': '英雄在他附近時增加她的防禦，讓物理攻擊對她的傷害降低',
'Gives the hero +#% chance of a critical strike (double damage) while she\'s near him': '英雄在他附近時，她的致命一擊機率 +{0}%（雙倍傷害）', 'Monsters that strike the hero in melee while she\'s near him take back #% of the blow': '英雄在他附近時，近戰攻擊她的怪物受到這一擊 {0}% 的反彈傷害', 'Slows monsters around him by half, chills them and strikes them with cold. It adds no cold to the hero\'s attacks': '讓他周圍的怪物減速一半、冰緩並受到冰寒傷害。不會讓英雄的攻擊附加冰寒',
'Adds +#% physical damage to the hero while she\'s near him': '英雄在他附近時，她的物理傷害 +{0}%', 'Armors him, not the hero. His melee attackers freeze, and some blows and missiles miss him': '只保護他，不保護英雄。近戰攻擊他的怪物會被冰凍，部分攻擊和投射物打不中他', 'Armors him, not the hero. His melee attackers take cold and a chill, ranged ones an ice bolt, and some blows miss him': '只保護他，不保護英雄。近戰攻擊他的怪物受到冰寒傷害並冰緩，遠程攻擊者受到冰彈，部分攻擊打不中他',
'Monsters around him, bosses too, take #% more damage for #s': '他周圍的怪物（包括首領）{1} 秒內受到的傷害增加 {0}%', 'Enrages the toughest monster near him to charge him, not the hero, its blows weaker': '激怒他附近最強的怪物衝向他而不是英雄，牠的攻擊減弱', 'Swings both his swords at his monster, each hit making his swings faster, up to # times': '用雙劍攻擊他的目標，每次命中都讓他揮得更快，最多 {0} 次',
'Improves his Defense, not the hero\'s, so physical hits hurt him less': '提高他的防禦（不是英雄的），讓物理攻擊對他的傷害降低', 'Large Charm': '中型護符', 'Grand Charm': '大型護符', 'Gheed\'s Fortune': '吉黑得的運氣', 'Keep in the Charms Window to Gain Bonus': '放在護符欄才有效果', 'CHARMS': '護符', 'Reduces all Vendor Prices #%': '所有商人價格降低 {0}%', 'Only charms go there': '只能放護符', 'You can only carry one of these': '這種物品只能帶一個',
'No room in the Charms window': '護符欄沒有空間', 'Her Charms window holds *: not legit': '她的護符欄裡有{0}：不合規', 'Take it out of the Charms window: a red border marks it': '請從護符欄拿出來：有紅框的就是', 'A charm counts only while it lies here': '護符要放在這裡才有效果', 'No climb record came with it': '沒有附帶爬層紀錄', 'Her climb doesn\'t hold the tier below': '她的爬層紀錄裡沒有下一層', 'Her climb record doesn\'t add up': '她的爬層紀錄對不上',
'Her clock doesn\'t fit the tiers': '她的遊戲時間跟層數不符', 'Her clears\' dates don\'t fit the tiers': '她的通關日期跟層數不符', 'Far past her class on these tiers': '遠超過她的職業在這些層的表現', 'Gear her save couldn\'t have had then': '她的存檔當時不可能有的裝備', 'Unverified: not on the board': '未驗證：不列入排行榜', 'Unverified runs': '未驗證的紀錄', 'Her climb record doesn\'t earn the tier: not ranked': '她的爬層紀錄不足以取得這一層：不排名', 'Restored from before a death': '從死亡前還原',
// 進化條件（升級卡片與技能樹）：遊戲另外還有縮短版（Into …, needs:），技能名稱含 of 時不要被逗號規則切開
'Evolves * into *, also needs:': '把{0}進化為{1}，還需要：', 'Evolves * into *, also needs: *': '把{0}進化為{1}，還需要：{2}',
'* into *, needs:': '{0} → {1}，需要：', '* into *, needs: *': '{0} → {1}，需要：{2}', 'Into *, needs:': '進化為{0}，需要：', 'Into *, needs: *': '進化為{0}，需要：{1}',
'Evolves into *: *': '進化為{0}：{1}',
'Melee Damage Reduced by *%': '近戰傷害減少 {0}%', 'Physical hits only': '只對物理攻擊有效', '#% Reanimate as:': '{0}% 機率復活為：', 'when you Kill an Enemy': '擊殺敵人時',
// 新的獨特物品（易牙居有的放在下面 iya 區）
'Bonesnap': '碎骨', 'The Centurion': '百夫長', 'Hawkmail': '鷹甲', 'Boneflesh': '骨肉',
'Earthshaker': '撼地者',
'Swordguard': '劍衛', 'Soulfeast Tine': '噬魂叉', 'Warpspear': '扭曲之矛', 'Skystrike': '天擊', 'Demon Machine': '惡魔機器', 'The Grandfather': '祖父', 'Windforce': '風之力', 'Bloodmoon': '血月', 'The Reaper\'s Toll': '死神的喪鐘', 'Windhammer': '風之鎚', 'Cranebeak': '鶴嘴',
'Pompeii\'s Wrath': '龐貝之怒', 'The Gavel of Pain': '痛苦之槌',
'Blade of Ali Baba': '阿里巴巴之刃', 'Blackbog\'s Sharp': '黑沼之鋒', 'Skin of the Flayed One': '剝皮者之皮',
'Guardian Angel': '守護天使',
'Crescent Moon': '新月', 'Steel Shade': '鋼影', 'Tyrael\'s Might': '泰瑞爾的力量', 'Rune Master': '符文大師', 'Carrion Wind': '腐肉之風',
// 20261028.1：英雄不再稱「她」、排行榜的合規檢查、營地提示、傭兵靈氣說明
'Of every hit, whatever its element: the Werebear\'s Thick Hide': '不論元素，每次攻擊都適用：熊人變化的厚皮',
'Pick a card to banish it until this run ends or goes on past Baal': '選一張卡放逐，直到這一局結束或打完巴爾繼續前進',
'Weapon skills and a few other skills can critically strike: a skill\'s hover shows its chance': '武器技能和少數其他技能可以致命攻擊：技能說明會顯示機率',
'Click the waypoint to start a run, or a hero by the fire to play that hero': '點擊傳送點開始一局，或點擊營火旁的英雄改玩那位英雄',
'Tap the waypoint to start a run, or a hero by the fire to play that hero': '點一下傳送點開始一局，或點一下營火旁的英雄改玩那位英雄',
'Your * is not one this version can start, so the class starts at level 1 for now. The saved hero is kept aside, untouched, and comes back once a version can read it.': '這個版本無法開始你的{0}，所以這個職業暫時從等級 1 開始。存檔裡的英雄原封不動另外保存，等有版本能讀取時就會回來。',
'Your * is not one this version can start, and storage would not keep a copy aside. Send a REPORT, please.': '這個版本無法開始你的{0}，儲存空間也無法另外保存一份。請送出「回報問題」。',
'A retired * is not one this version can read, so Akara does not list that hero for now. The hero is kept aside, untouched, and comes back once a version can read it.': '這個版本無法讀取已退役的{0}，所以阿卡拉暫時不會列出這位英雄。英雄原封不動另外保存，等有版本能讀取時就會回來。',
'A retired * is not one this version can read, and storage would not keep a copy aside. Send a REPORT, please.': '這個版本無法讀取已退役的{0}，儲存空間也無法另外保存一份。請送出「回報問題」。',
'Lost: what you gained since Baal last fell. Your * is level * again.': '失去：上次擊敗巴爾之後得到的一切。你的{0}回到等級 {1}。',
'Keeps the golden glow': '保留金色光芒', 'Level * · * · swap this hero in': '等級 {0} · {1} · 換這位英雄上場',
'Nightmare, Hell and Terror close until your hero beats Baal on each again.': '惡夢、地獄和恐懼層會關閉，直到你的英雄在各難度再次擊敗巴爾。',
'Nightmare and Hell close until your hero beats Baal on each again.': '惡夢和地獄會關閉，直到你的英雄在各難度再次擊敗巴爾。',
'Nightmare closes until your hero beats Normal\'s Baal again.': '惡夢會關閉，直到你的英雄再次擊敗普通難度的巴爾。',
'A run sends your hero\'s class, level, build, gear and stats, and your name': '每一局會傳送英雄的職業、等級、配點、裝備、屬性和你的名字',
'More stat points than D2 gives at the hero\'s level': '屬性點數比暗黑二在這個等級給的還多',
'Gear this hero can\'t wear': '這位英雄不能穿的裝備', 'Skills this hero can\'t have': '這位英雄不能有的技能',
'This hero\'s skill tree': '這位英雄的技能樹', 'This hero\'s skill tree (T)': '這位英雄的技能樹 (T)',
'This hero\'s mercenary': '這位英雄的傭兵', 'This hero\'s mercenary (O)': '這位英雄的傭兵 (O)',
'Your mercenary\'s * is not legit': '傭兵的{0}不合規', 'Your * is not legit': '你穿的{0}不合規',
'Take off the red-bordered item': '脫下紅框的物品', '* stat points, where D2 gives * at level *': '屬性點數 {0}，暗黑二在等級 {2} 最多給 {1}',
'A re-draft at Akara makes this hero legit': '在阿卡拉重新抽選，這位英雄就會合規', 'A free re-draft at Akara makes this hero legit': '在阿卡拉免費重新抽選，這位英雄就會合規',
'More skill and passive levels than play gives': '技能和被動技能等級比正常遊玩能得到的還多',
'Swap the earlier hero back in, then re-draft at Akara': '把之前的英雄換回來，再到阿卡拉重新抽選',
'Re-draft your * at Akara, or take off the red-bordered gear': '到阿卡拉重新抽選你的{0}，或脫下紅框的裝備',
'This save was changed outside the game': '這個存檔在遊戲外被修改過',
'Your level-* * starts over at level 1. A copy is kept at Akara.': '你等級 {0} 的{1}從等級 1 重新開始。原本的複本由阿卡拉保管。',
'Your hero goes back to level *. Click again': '你的英雄會回到等級 {0}。再點擊一次', 'Your hero goes back to level *. Tap again': '你的英雄會回到等級 {0}。再點一下',
'This hero\'s save was imported': '這位英雄的存檔是匯入的',
'Adds #-# fire damage to the hero\'s attacks, not to spells': '英雄的攻擊（不含法術）增加 {0}-{1} 火焰傷害', 'Adds fire damage to the hero\'s attacks, not to spells': '英雄的攻擊（不含法術）增加火焰傷害',
'Heals the hero # life a second while near him': '英雄在他附近時，每秒回復 {0} 生命',
'Adds Defense to the hero while near him, so physical hits deal less damage': '英雄在他附近時增加防禦，讓物理攻擊造成的傷害降低',
'Gives the hero +#% chance of a critical strike (double damage) while near him': '英雄在他附近時，+{0}% 致命攻擊機率（雙倍傷害）',
'Monsters that strike the hero in melee while near him take back #% of the blow': '英雄在他附近時，近戰攻擊英雄的怪物會受到 {0}% 的反傷',
'Adds +#% physical damage to the hero while near him': '英雄在他附近時，+{0}% 物理傷害',
'The * in your Charms window is not legit': '護符欄裡的{0}不合規', 'Take the red-bordered charm out of the Charms window': '把紅框的護符從護符欄拿出來',
'Sent without its climb record': '傳送時沒有附上爬層紀錄', 'Climb record changed outside the game': '爬層紀錄在遊戲外被修改過',
'Cleared faster than the tiers can be played': '通關速度比實際能打完的還快', 'Wears an item the save couldn\'t have had yet': '穿著存檔當時還不可能有的物品',
'Played from an older copy of the save': '用較舊的存檔複本遊玩', 'Not ranked on this tier': '這一層不排名', 'This hero\'s runs don\'t rank': '這位英雄的紀錄不排名',
'Akara can start this hero over at level 1': '阿卡拉可以讓這位英雄從等級 1 重新開始',
'Every living Hardcore hero dies, with everything worn and carried, and every item, gold piece, Charsi\'s rank, Terror tier and best time is deleted. Your fallen are remembered, and your Softcore save stays as it is.': '所有活著的專家模式英雄都會死亡，連同身上穿戴和攜帶的一切；所有物品、金幣、恰西的等級、恐懼層和最佳紀錄都會刪除。陣亡的英雄會被紀念，一般模式的存檔維持原狀。',
'with everything worn and carried.': '連同身上穿戴和攜帶的一切。',
'This hero can never rank again, but a new Hardcore hero can': '這位英雄再也不能排名，但新的專家模式英雄可以',
'This hero was played from an older copy of the save': '這位英雄是用較舊的存檔複本遊玩的', 'A run started without reaching the leaderboard': '有一局開始時沒有連上排行榜',
'This hero\'s save was changed outside the game': '這位英雄的存檔在遊戲外被修改過', 'Played after this hero died': '在這位英雄死亡後還繼續遊玩',
'A run never reached the leaderboard': '有一局沒有傳到排行榜',
'A run started offline or with Send my runs off, so the leaderboard missed it': '有一局是離線或關閉「傳送我的紀錄」時開始的，排行榜沒有收到',
'The leaderboard knows this hero died, so this copy never ranks': '排行榜知道這位英雄已經死亡，所以這份複本永遠不會排名',
'Already dead on the leaderboard': '排行榜上已經死亡',
'This hero will never rank again. Tap again': '這位英雄再也不會排名。再點一下', 'This hero will never rank again. Click again': '這位英雄再也不會排名。再點擊一次',
'Each one\'s mark says why': '每個標記會說明原因', 'A higher level than the runs the leaderboard saw can give': '等級比排行榜看到的紀錄能達到的還高',
'Send my runs is off, and a run now means your * never ranks again': '「傳送我的紀錄」已關閉，現在遊玩的話，你的{0}將再也不會排名',
'Turn Send my runs on before you play': '遊玩前請開啟「傳送我的紀錄」',
'The leaderboard can\'t be reached, and a run now means your * never ranks again': '連不上排行榜，現在遊玩的話，你的{0}將再也不會排名',
'Your * ranks as long as the leaderboard sees every run': '只要排行榜收到每一局，你的{0}就會排名',
'Each run tells the leaderboard as it starts and as it ends': '每一局開始和結束時都會通知排行榜',
'Balance changed: click to restart, or your Terror runs stop counting': '平衡已改動：點擊重新啟動，否則恐懼層紀錄不會計入',
// 20261028.2：符文之語（譯名取自易牙居）、排行榜找玩家、快速施法率超過上限算一半、刺客陷阱、骨甲、能量護盾、沙漠傭兵靈氣
'Runewords': '符文之語', 'Not legit: stats outside its runeword\'s': '不合規：屬性超出符文之語的範圍',
'Socketed': '有凹槽', 'Socketed (#)': '有凹槽 ({0})', 'Ethereal (Cannot be Repaired)': '無形的（無法修理）', 'Ethereal (Cannot be Repaired), Socketed (#)': '無形的（無法修理），有凹槽 ({0})',
'Ancients\' Pledge': '古代人的誓約', 'Breath of the Dying': '死亡呼吸', 'Call to Arms': '戰爭召喚', 'Chains of Honor': '榮耀之鍊', 'Delirium': '迪勒瑞姆',
'Destruction': '毀滅', 'Dream': '夢境', 'Duress': '強制', 'Enigma': '謎團', 'Enlightenment': '教化', 'Eternity': '永恆', 'Faith': '信心', 'Famine': '飢荒',
'Fortitude': '剛毅', 'Hand of Justice': '正義之手', 'Harmony': '和諧', 'Heart of the Oak': '橡樹之心', 'Holy Thunder': '神聖雷擊', 'Honor': '榮耀',
'Infinity': '無限', 'Insight': '眼光', 'King\'s Grace': '王者的慈悲', 'Kingslayer': '弒君者', 'Last Wish': '最後希望', 'Lawbringer': '執法者', 'Leaf': '葉子',
'Lionheart': '獅子心', 'Lore': '知識', 'Malice': '怨恨', 'Melody': '旋律', 'Memory': '記憶', 'Myth': '神話', 'Nadir': '天底', 'Oath': '誓約', 'Obedience': '遵從',
'Peace': '和平', 'Voice of Reason': '思考之聲', 'Phoenix': '鳳凰', 'Pride': '驕傲', 'Principle': '原理', 'Prudence': '慎重', 'Radiance': '光輝', 'Rain': '降雨',
'Rhyme': '押韻', 'Silence': '寂靜', 'Smoke': '煙霧', 'Splendor': '燦爛', 'Stealth': '隱密', 'Treachery': '背信', 'Wealth': '財富', 'White': '白色', 'Zephyr': '和風',
// 單字名稱以前走通用字典（之刃、悲傷…），改成易牙居譯名；和稀有物品前後綴表一致
'Black': '黑色', 'Bone': '白骨', 'Bramble': '野薔薇', 'Edge': '邊緣', 'Grief': '悔恨', 'Rift': '裂縫', 'Spirit': '精神', 'Steel': '鋼鐵',
// 符文組合：照上面符文表的譯名，用「・」隔開
"'RalOrtTal'": "'拉爾・歐特・塔爾'", "'BerTirUmMalLum'": "'貝・特爾・烏姆・馬爾・盧姆'", "'ThulIoNef'": "'書爾・伊歐・內夫'", "'SolUmUm'": "'索爾・烏姆・烏姆'", "'RalOhmSurEth'": "'拉爾・歐姆・瑟・艾斯'", "'JahLoMalGul'": "'喬・羅・馬爾・古爾'",
"'VexHelElEldZodEth'": "'伐克斯・海爾・艾爾・艾德・薩德・艾斯'", "'AmnRalMalIstOhm'": "'安姆・拉爾・馬爾・伊斯特・歐姆'", "'DolUmBerIst'": "'多爾・烏姆・貝・伊斯特'", "'FalOhmUm'": "'法爾・歐姆・烏姆'", "'ShaelUmTir'": "'夏・烏姆・特爾'", "'HelElVexOrtGul'": "'海爾・艾爾・伐克斯・歐特・古爾'",
"'LemIstIo'": "'藍姆・伊斯特・伊歐'", "'VexLoBerJahKo'": "'伐克斯・羅・貝・喬・科'", "'HelOhmUmLoCham'": "'海爾・歐姆・烏姆・羅・查姆'", "'SurLoSol'": "'瑟・羅・索爾'", "'IoJahPul'": "'伊歐・喬・普爾'", "'ShaelUmThul'": "'夏・烏姆・書爾'",
"'TirTalAmn'": "'特爾・塔爾・安姆'", "'JahIthBer'": "'喬・伊司・貝'", "'PulRalSol'": "'普爾・拉爾・索爾'", "'AmnBerIstSolSur'": "'安姆・貝・伊斯特・索爾・瑟'", "'VexOhmIstDol'": "'伐克斯・歐姆・伊斯特・多爾'", "'OhmJahLemEld'": "'歐姆・喬・藍姆・艾德'",
"'FalOhmOrtJah'": "'法爾・歐姆・歐特・喬'", "'ElSolDolLo'": "'艾爾・索爾・多爾・羅'", "'JahGulEth'": "'喬・古爾・艾斯'", "'FalUmPul'": "'法爾・烏姆・普爾'", "'EthTirLoMalRal'": "'艾斯・特爾・羅・馬爾・拉爾'", "'SurChamAmnLo'": "'瑟・查姆・安姆・羅'",
"'TirIthSolKo'": "'特爾・伊司・索爾・科'", "'KoVexPulThul'": "'科・伐克斯・普爾・書爾'", "'EthRalOrtTal'": "'艾斯・拉爾・歐特・塔爾'", "'AmnElIthTirSol'": "'安姆・艾爾・伊司・特爾・索爾'", "'AmnShaelJahLo'": "'安姆・夏・喬・羅'", "'BerMalBerIst'": "'貝・馬爾・貝・伊斯特'",
"'RalTirTalSol'": "'拉爾・特爾・塔爾・索爾'", "'AmnRalThul'": "'安姆・拉爾・書爾'", "'MalUmGulFal'": "'馬爾・烏姆・古爾・法爾'", "'JahMalJahSurJahBer'": "'喬・馬爾・喬・瑟・喬・貝'", "'AmnLemKo'": "'安姆・藍姆・科'", "'TirRal'": "'特爾・拉爾'",
"'HelLumFal'": "'海爾・盧姆・法爾'", "'OrtSol'": "'歐特・索爾'", "'IthElEth'": "'伊司・艾爾・艾斯'", "'ShaelKoNef'": "'夏・科・內夫'", "'LumIoSolEth'": "'盧姆・伊歐・索爾・艾斯'", "'HelAmnNef'": "'海爾・安姆・內夫'",
"'NefTir'": "'內夫・特爾'", "'ShaelPulMalLum'": "'夏・普爾・馬爾・盧姆'", "'HelKoThulEthFal'": "'海爾・科・書爾・艾斯・法爾'", "'DolOrtEldLem'": "'多爾・歐特・艾德・藍姆'", "'ShaelThulAmn'": "'夏・書爾・安姆'", "'LemKoElEld'": "'藍姆・科・艾爾・艾德'",
"'VexVexLoJah'": "'伐克斯・伐克斯・羅・喬'", "'ChamSurIoLo'": "'查姆・瑟・伊歐・羅'", "'RalGulEld'": "'拉爾・古爾・艾德'", "'MalTir'": "'馬爾・特爾'", "'NefSolIth'": "'內夫・索爾・伊司'", "'OrtMalIth'": "'歐特・馬爾・伊司'",
"'ShaelEth'": "'夏・艾斯'", "'HelKoLemGul'": "'海爾・科・藍姆・古爾'", "'KoKoMal'": "'科・科・馬爾'", "'DolEldHelIstTirVex'": "'多爾・艾德・海爾・伊斯特・特爾・伐克斯'", "'NefLum'": "'內夫・盧姆'", "'TalThulOrtAmn'": "'塔爾・書爾・歐特・安姆'",
"'EthLum'": "'艾斯・盧姆'", "'TalEth'": "'塔爾・艾斯'", "'TirEl'": "'特爾・艾爾'", "'ShaelUmPulLum'": "'夏・烏姆・普爾・盧姆'", "'AmnTir'": "'安姆・特爾'", "'ShaelThulLem'": "'夏・書爾・藍姆'",
"'TalDolMal'": "'塔爾・多爾・馬爾'", "'LemKoTir'": "'藍姆・科・特爾'", "'DolIo'": "'多爾・伊歐'", "'SurEl'": "'瑟・艾爾'", "'PulLumBerMal'": "'普爾・盧姆・貝・馬爾'", "'OrtEth'": "'歐特・艾斯'",
'Find': '搜尋', 'Find a player': '搜尋玩家', '2 letters or more': '至少 2 個字', 'Type a name': '輸入名字', 'A name or part of one, 2 letters or more': '名字或名字的一部分，至少 2 個字',
'Click to see this player\'s runs': '點擊查看這位玩家的紀錄', 'Back to the players found': '回到搜尋到的玩家', 'No player found': '找不到玩家', 'Try fewer letters': '試試少打幾個字',
'1 player': '1 位玩家', '* players': '{0} 位玩家',
'Chance of a critical strike: double physical damage': '致命攻擊機率：物理傷害加倍', '#% chance of a critical strike, which doubles its physical damage': '{0}% 致命攻擊機率，使物理傷害加倍',
'Hastes count at half past #% shorter, reached at +#% Faster Cast Rate': '加速超過縮短 {0}% 的部分只算一半，在 +{1}% 快速施法率時達到',
'Hastes count at half past #% shorter, reached by your skills\' hastes alone': '加速超過縮短 {0}% 的部分只算一半，光靠技能的加速效果就能達到',
'Your cap: * shorter, more than Faster Cast Rate reaches alone': '你的上限：縮短 {0}，只靠快速施法率達不到', '+#% of it counts at half': '其中 +{0}% 只算一半',
'*: skills recharge less than *% faster for you now': '{0}：目前技能冷卻快不到 {1}%', '+#% Faster Cast Rate: skills recharge less than #% faster for you now': '+{0}% 快速施法率：目前技能冷卻快不到 {1}%',
'Magic Absorb': '魔法吸收',
'It fires one shot fewer. As it ends, it blows up a corpse and bursts in a lightning nova for 60% of a shot.': '少發射一次。結束時引爆一具屍體，並放出閃電新星，傷害為一發的 60%。',
'A sentry near the nearest pack fires # or more bursts of # or more bolts of # damage.': '在最近的怪物群旁放置哨兵，發射至少 {0} 輪、每輪至少 {1} 道的閃電，每道造成 {2} 傷害。',
'A trap near the nearest pack sprays fire # times, each # flames that deal # to all in their path, longer and further with Wake of Fire.': '在最近的怪物群旁放置陷阱，噴火 {0} 次，每次 {1} 道火焰，對路徑上所有怪物造成 {2}；學會火焰復甦時噴得更久更遠。',
'A sentry shoots lightning # times, more with Fire Blast, for # damage, each shot exploding a nearby corpse for # plus #% of its life.': '哨兵發射閃電 {0} 次（學會火焰爆震時更多），造成 {1} 傷害，每發都會引爆附近一具屍體，造成 {2} 加上屍體生命 {3}% 的傷害。',
'Bone takes #% of each hit, up to #, regrowing in #s. #% less physical damage': '骨頭承受每次攻擊的 {0}%，最多 {1}，打破後 {2} 秒重新長回。物理傷害減少 {3}%',
'Your mana takes #% of every hit instead of your life, at most # mana a hit.': '每次受到的攻擊有 {0}% 由法力代替生命承受，每次最多消耗 {1} 法力。',
'Heals the hero and summons # life a second while near him': '英雄和召喚物在他附近時，每秒回復 {0} 生命',
'Adds Defense to the hero and summons while near him, so physical hits deal less damage': '英雄和召喚物在他附近時增加防禦，讓物理攻擊造成的傷害降低',
'Monsters that strike the hero or summons in melee while near him take back #% of the blow': '英雄和召喚物在他附近時，近戰攻擊他們的怪物會受到 {0}% 的反傷',
'Adds +#% physical damage to the hero and summons while near him': '英雄和召喚物在他附近時，+{0}% 物理傷害',
// 技能說明框（slotLines）：進化技能的裝備加成接在技能名後面
'Evolved from * (+# from gear)': '由{0}進化（裝備 +{1}）', 'Evolved from a skill': '由某個技能進化', 'Evolved from a skill (+# from gear)': '由某個技能進化（裝備 +{0}）',
'One hit a cast': '每次施放命中 1 次'
},
// 易牙居（iya-backup）譯名：物品、套裝、底材、魔法前後綴，比對網站後統一；優先於上面兩區
iya: {
'Accursed': '詛咒', 'Ambergris': '龍涎香之', 'Ancient Armor': '古代裝甲', 'Andariel\'s Visage': '安達利爾的面貌', 'Athena\'s Wrath': '雅典娜的忿怒', 'Athlete\'s': '競賽',
'Atma\'s Scarab': '亞特瑪的聖甲蟲', 'Atma\'s Wail': '亞特瑪的哭喊', 'Avenger Guard': '復仇者之盔', 'Baezil\'s Vortex': '貝西爾的漩渦', 'Bahamut\'s': '巴哈姆特',
'Barbed Club': '倒鉤錘', 'Barbed Shield': '倒刺護盾', 'Basinet': '輕鋼盔', 'Bastard Sword': '巨劍', 'Battle Gauntlets': '戰場手套', 'Bearded Axe': '鉤斧',
'Bill': '比爾長刀', 'Bing Sz Wang': '兵之王', 'Black Hades': '黑色黑帝斯', 'Blackhorn\'s Face': '黑角面具', 'Blackleach Blade': '黑水之刃', 'Blackoak Shield': '黑橡樹盾',
'Blacktongue': '黑色之舌', 'Blade Barrier': '刀刃刺盾', 'Blanched': '白化之', 'Blazing': '炎熱', 'Bloodletter': '血書', 'Bloodthief': '血之偷',
'Bloodtree Stump': '血樹殘株', 'Bone Helm': '白骨頭盔', 'Bone Visage': '骸骨面罩', 'Boneslayer Blade': '碎骨者之刃', 'Bramble Mitts': '荊棘連指手套', 'Brandistock': '叉',
'Buriza-Do Kyanon': '布里撒 多 凱南', 'Butcher\'s Pupil': '屠夫之瞳', 'Buzzing': '嗡叫', 'Camphor': '樟腦之', 'Cantor Trophy': '領唱者印記', 'Carbuncle': '紅玉之',
'Caretaker\'s': '看守人', 'Carmine': '胭脂之', 'Celestial': '天體', 'Chaos Armor': '混沌戰甲', 'Chromatic': '多彩', 'Chromatic Ire': '五彩的怒氣', 'Chu-Ko-Nu': '巧工弩',
'Cinnabar': '朱紅之', 'Cinquedeas': '強波刀', 'Cliffkiller': '岩壁殺手', 'Cloudcrack': '雲裂', 'Coif of Glory': '光榮布帽', 'Coldkill': '冷殺',
'Coldsteel Eye': '冰鋼之眼', 'Corpsemourn': '屍體的哀傷', 'Crainte Vomir': '克林 鐵弗姆', 'Crow Caw': '鴉鳴', 'Crowbill': '喙鉗', 'Crusader Bow': '十字軍之弓',
'Cuirass': '護胸甲', 'Cunning': '冷靜', 'Dacian Falx': '雙刃鐮', 'Dark Clan Crusher': '闇族毀滅者', 'Darkglow': '擴散黑暗', 'Darksight Helm': '暗視之盔',
'Defender': '防禦盾', 'Demon Limb': '惡魔爪牙', 'Demon\'s Arch': '惡魔之王', 'Demonhead': '惡魔頭蓋骨面具', 'Demonhide Armor': '魔皮戰甲', 'Demonhide Sash': '魔皮勳帶',
'Dirk': '長匕首', 'Djinn Slayer': '魔靈殺手', 'Doombringer': '末日毀滅者', 'Doomslinger': '毀滅投石者', 'Dracul\'s Grasp': '卓古拉之握', 'Dragon\'s': '龍',
'Drake\'s': '德爾克', 'Duriel\'s Shell': '都瑞爾的殼', 'Duskdeep': '黃昏深處', 'Eaglehorn': '鷹號角', 'Earth Shifter': '大地變形者', 'Eburin': '類象牙之', 'Echoing': '回音',
'Elegant Blade': '優雅之劍', 'Ember': '烈火', 'Embossed Plate': '凸紋戰甲', 'Endlesshail': '無休止的冰雹', 'Ethereal Edge': '永恆邊界',
'Executioner\'s Justice': '劊子手的裁決', 'Falchion': '彎形大刀', 'Fanged Knife': '齒緣小刀', 'Felicitous': '得體', 'Feral': '猛禽', 'Ferocious': '凶暴',
'Flamberge': '雙手飾劍', 'Flamebellow': '火焰號叫', 'Flanged Mace': '凸緣釘頭錘', 'Fleshrender': '血肉裁決者', 'Fleshripper': '裂肉者', 'Fortuitous': '偶然', 'Foul': '險惡',
'Frostwind': '冰霜之風', 'Full Helm': '高級頭盔', 'Full Plate Mail': '高級戰甲', 'Fuscina': '魔鬼之叉', 'Ghost Glaive': '鬼魂尖槍', 'Ghoulhide': '食屍鬼之外皮',
'Giant Skull': '巨骷髏', 'Giant Thresher': '鮫尾巨斧', 'Gimmershred': '碎片貪婪者', 'Ginther\'s Rift': '金瑟的裂縫', 'Glacial': '冰冷', 'Gleamscythe': '閃耀的鐮刀',
'Glimmering': '微光', 'Glorious Axe': '榮光之斧', 'Gnarled Staff': '多節棍', 'Goblin Toe': '小妖精腳趾', 'Goldskin': '黃金之皮', 'Goldstrike Arch': '金擊圓弧',
'Golemlord\'s': '石魔之王', 'Goreshovel': '血塊之鏟', 'Gothic Plate': '哥德戰甲', 'Grandmaster\'s': '宗師', 'Gravepalm': '墓穴的撫弄', 'Great Maul': '卓越巨棍',
'Great Wyrm\'s': '巨飛龍', 'Grim Helm': '殘酷頭盔', 'Grim Scythe': '殘酷鐮刀', 'Grim\'s Burning Dead': '驚怖焰亡靈', 'Guardian Naga': '蛇神守護者', 'Guardian\'s': '守護者',
'Gut Siphon': '內臟吸管', 'Gymnast\'s': '體技', 'Hawk Branded': '老鷹烙印', 'Hawkeye': '目光銳利', 'Head Hunter\'s Glory': '獵頭人的榮耀', 'Headstriker': '擊頭者',
'Heart Carver': '刻心者', 'Heavenly Garb': '天堂裝束', 'Heavy Bracers': '重型手鐲', 'Hellforge Plate': '地獄鍛甲', 'Hellslayer': '地獄毀滅者', 'Hexfire': '六角之火',
'Hibernal': '寒冬', 'Hierophant\'s': '祭師', 'Hone Sundan': '宏 森丹', 'Horizon\'s Tornado': '地平線的颱風', 'Howling': '咆哮', 'Ichorsting': '靈液之刺',
'Infernostride': '地獄闊步', 'Islestrike': '島擊', 'Ivory': '象牙之', 'Jacinth': '紅鋯石之', 'Jagged Star': '鋸齒流星鎚', 'Keeper\'s': '管理者', 'Kelpie Snare': '水魔陷阱',
'Kenshi\'s': '劍聖', 'King\'s': '國王', 'Knight\'s': '騎士', 'Kris': '波形刀', 'Kuko Shakaku': '社角久子', 'Lance of Yaggai': '雅該長矛', 'Lancer\'s': '長槍兵',
'Lapis Lazuli': '青金石之', 'Lava Gout': '熔岩角羊', 'Legendary Mallet': '傳說之鎚', 'Lenymo': '雷摩尼', 'Light Plate': '輕型裝甲', 'Linked Mail': '連扣戰甲',
'Lion Branded': '獅子烙印', 'Lord\'s': '君王', 'Loricated Mail': '甲殼鎧鱗甲', 'Luna': '月精靈護盾', 'Magewrath': '巫師之怒', 'Maiden\'s': '處女', 'Mancatcher': '刺人槍',
'Mang Song\'s Lesson': '梅格之歌的教訓', 'Marrowwalk': '骨隨行走', 'Martel de Fer': '戰鎚', 'Merciless': '絕情', 'Messerschmidt\'s Reaver': '希梅斯特的掠奪',
'Meteoric': '隕鐵', 'Military Pick': '軍用鍬', 'Mnemonic': '記憶', 'Monk\'s': '僧人', 'Moonfall': '落月', 'Moser\'s Blessed Circle': '摩西祝福之環',
'Necromancer\'s': '死靈法師', 'Nokozan Relic': '諾科藍遺物', 'Nord\'s Tenderizer': '諾德的蝕肉藥', 'Noxious': '有害', 'Ocher': '赭黃', 'Ogre Maul': '食人魔之錘',
'Ondal\'s Wisdom': '安戴爾的智慧', 'Ornate Plate': '華麗戰甲', 'Partizan': '戰戟', 'Peasant Crown': '粗野之冠', 'Pierre Tombale Couant': '皮爾 通把 考恩特',
'Plate Mail': '鎧甲', 'Powered': '力量十足', 'Prismatic': '棱鏡', 'Psychic': '心靈', 'Pus Spitter': '毒液怪', 'Quarterstaff': '六呎棍', 'Raging': '猛烈',
'Rattlecage': '作響之籠', 'Razor\'s Edge': '刀鋒邊緣', 'Razorswitch': '擺動剃刀', 'Razortine': '剃刀之叉', 'Realgar': '雄黃之', 'Reinforced Mace': '強化釘頭錘',
'Repeating Crossbow': '連射十字弓', 'Resonant': '迴響', 'Ribcracker': '肋骨粉碎者', 'Ring Mail': '鎖環甲', 'Riphook': '撕裂之鉤', 'Ripsaw': '粗齒大鋸',
'Rockstopper': '岩石制動器', 'Rondel': '詩歌匕首', 'Rose Branded': '玫瑰烙印', 'Rusty': '鐵鏽之', 'Saintly': '崇高', 'Sandstorm Trek': '沙暴之旅', 'Sanguinary': '噬殺',
'Scarlet': '猩紅之', 'Schaefer\'s Hammer': '史恰佛之鎚', 'Scintillating': '閃閃發光', 'Scissors Suwayyah': '近身剪', 'Scutum': '鱗盾', 'Sensei\'s': '劍士',
'Serpent Lord': '海蛇之王', 'Shadow Plate': '陰影鎧甲', 'Shaftstop': '謝夫特斯坦布', 'Shaman\'s': '巫師', 'Shamshir': '虛偽之刃', 'Silks of the Victor': '勝利者之絲綢',
'Silkweave': '沙織', 'Skewer of Krintiz': '格林提斯的肉叉', 'Skull Collector': '骷髏收集者', 'Skull Splitter': '切開骷髏', 'Small Charm': '小型護符', 'Snowclash': '雪之衝突',
'Snowflake': '雪白', 'Soldier\'s': '士兵', 'Soul Drainer': '吸魂者', 'Soul Harvest': '靈魂採集者', 'Spearmaiden\'s': '女矛手', 'Spellsteel': '鋼鐵魔咒',
'Spetum': '大戰戟', 'Spike Thorn': '尖刺根源', 'Spiked Club': '狼牙棒', 'Spiked Shield': '尖刺盾牌', 'Spirit Forge': '靈魂鎔爐', 'Steel Carapace': '鋼鐵鎧甲',
'Steeldriver': '鐵製大槌', 'Steelgoad': '鐵刺棒', 'Stone Crusher': '碎石者', 'Stormchaser': '風暴追逐者', 'Stormlash': '暴風之結', 'Stormrider': '暴風騎士',
'Stormshield': '暴風之盾', 'Stormspire': '暴風尖塔', 'Stoutnail': '堅硬的指甲', 'String of Ears': '長串之耳', 'Sturdy': '結實', 'Summoner\'s': '召喚者',
'Sureshrill Frost': '尖嘯冰霜', 'Swirling Crystal': '渦流水晶', 'Swordback Hold': '劍背之架', 'Templar Coat': '聖堂武士外袍', 'Templar\'s Might': '聖堂武士的力量',
'Terra\'s': '祭司', 'The Atlantean': '亞特拉斯', 'The Battlebranch': '戰鬥支系', 'The Cranium Basher': '碎腦錘', 'The Diggler': '迪格勒',
'The Gavel Of Pain': '痛苦木槌', 'The Grim Reaper': '冷酷開膛手', 'The Jade Tan Do': '坦社之玉', 'The Minotaur': '牛頭怪', 'The Spirit Shroud': '靈魂帷幕',
'The Vile Husk': '卑劣軀殼', 'Thresher': '銳利之斧', 'Thunder Maul': '雷錘', 'Tiamat\'s Rebuke': '魔龍的非難', 'Tigulated Mail': '提格萊特戰甲',
'Todesfaelle Flamme': '特迪斯法雷 芙米法', 'Tomb Reaver': '盜墓者', 'Trickster\'s': '欺詐', 'Troll Nest': '洞穴巨魔巢穴骨盾', 'Tulwar': '圓月彎刀', 'Turquoise': '綠松石之',
'Tyrant Club': '暴君之棒', 'Valkyrie\'s': '女武神', 'Vampire Gaze': '吸血鬼的凝視', 'Venom Grip': '劇毒之抓', 'Venom Ward': '毒液牢房', 'Vermillion': '朱砂之',
'Veteran\'s': '老手', 'Vicious': '惡毒', 'Viperfork': '蝮蛇叉', 'Visceratuant': '維斯爾坦特', 'Visionary': '幻影', 'Voulge': '鉤鐮槍', 'Vulpine': '奸詐',
'Wailing': '哭號', 'Wake Of Inferno': '復甦獄火', 'Wall of the Eyeless': '無眼之牆', 'Wand': '法杖', 'War Club': '巨戰木棍', 'War Fork': '巨戰之叉',
'War Scythe': '巨戰鐮刀', 'Warder\'s': '主管', 'Warlord\'s Trust': '戰爵之證', 'Warrior\'s': '戰士', 'Warshrike': '戰爭之鳥', 'Waterwalk': '水上飄',
'Widowmaker': '戮夫刃', 'Winged Knife': '翼刀', 'Witch-hunter\'s': '女巫獵人', 'Witchwild String': '狂野之弦', 'Wizendraw': '凋謝之畫', 'Wormskull': '溫暖骷髏',
'Wraith Flight': '死靈夜翔', 'Wyrm\'s': '維特', 'Yari': '三叉長槍', 'Zircon': '鋯石之', 'Zweihander': '韓瑞德之劍'
}
};
// 技能說明框的傷害行「Lightning Damage: 785 a lightning strike」（遊戲 of() 的 e.per）：一般單字表翻不好的單位
for (const [unit, zh] of Object.entries({
'a lightning strike': '每道閃電', 'a hit': '每次命中', 'a melee attacker': '每個近戰攻擊者', 'an attacker': '每個攻擊者',
'the thrust or a bolt': '刺擊或彈矢', 'a hit of a web': '每張網每次命中', 'a monster at the landing': '落點的每隻怪物',
'a hit of your spin': '旋轉每次命中', 'a hit or the end blow': '每次命中或最後一擊',
'a burst of fire, cold or lightning': '火焰、冰寒或閃電爆發', 'a blow or a burst of fire, cold or lightning': '每次攻擊或火焰、冰寒、閃電爆發', 'a quarter second in a flame': '在火焰中每 0.25 秒'
})) D2ZH_FIX.text['*Damage: * ' + unit] = '{0}傷害: {1} ' + zh;
/* Traditional Chinese layer for the local D2 Survivors copy. */
(function () {
'use strict';
const STORAGE_KEY = 'd2-survivors-language';
const FONT_STACK = '"Cinzel", "Microsoft JhengHei UI", "Microsoft JhengHei", "Noto Sans TC", "PingFang TC", sans-serif';
const labels = {
'Level Up': '升級',
'LEVEL UP': '升級',
'Paused': '已暫停',
'OPTIONS': '選項',
'Options': '選項',
'SAVE AND EXIT GAME': '儲存並離開遊戲',
'Save and exit game': '儲存並離開遊戲',
'RETURN TO GAME': '返回遊戲',
'Return to game (Esc)': '返回遊戲（Esc）',
'Previous menu (Esc)': '返回上一個選單（Esc）',
'Sound': '音效',
'Music': '音樂',
'Mute': '靜音',
'Play again (Enter)': '再玩一次（Enter）',
'PLAY AGAIN': '再玩一次',
"CHARSI'S WARES": '恰西的貨品',
"Charsi's Wares": '恰西的貨品',
"Charsi's wares": '恰西的貨品',
'Visit Charsi (T)': '拜訪恰西（T）',
'MAIN MENU': '主選單',
'Main menu': '主選單',
'Main menu (Esc)': '主選單（Esc）',
'Main menu (Enter)': '主選單（Enter）',
'Inventory (I)': '物品欄（I）',
'Buy back (B)': '回購（B）',
'Buy Back': '回購',
'Gamble (G)': '賭博（G）',
'New Run': '新的一輪',
'NEW RUN': '新的一輪',
'New run': '新的一輪',
'New Run (Enter)': '開始新的一輪（Enter）',
'Start a new run (Enter)': '開始新的一輪（Enter）',
'Automap': '自動地圖',
'Character': '角色',
'Pause': '暫停',
'Close': '關閉',
'Close (Esc)': '關閉（Esc）',
'Drop': '丟棄',
'Leave': '離開',
'Continue': '繼續',
'Continue (Enter)': '繼續（Enter）',
'Choose class': '選擇職業',
'Choose Class': '選擇職業',
'NEXT HERO': '下一位英雄',
'Previous hero': '上一位英雄',
'Next hero': '下一位英雄',
'Cancel (Esc)': '取消（Esc）',
'Cancel': '取消',
'Transfer save': '轉移存檔',
'Transfer Save': '轉移存檔',
'TRANSFER SAVE': '轉移存檔',
'Copy code': '複製代碼',
'COPY DIAGNOSTICS': '複製診斷資訊',
'Save imported.': '存檔已匯入。',
'Save too large': '存檔太大',
'Click or press any key': '點擊或按下任意按鍵',
'Click or press any key to continue': '點擊或按下任意按鍵以繼續',
'Click to pick up · Right-click to equip · Shift-click to sell · Esc to close': '左鍵拾取 · 右鍵裝備 · Shift＋左鍵出售 · Esc 關閉',
'Click to pick up · Ctrl-click to move across · Right-click to equip': '左鍵拾取 · Ctrl＋左鍵移動 · 右鍵裝備',
'Tap to pick up an item, tap again to put it down · Hold to equip or take off': '點一下拾取物品，再點一下放下 · 長按以裝備或卸下',
'Tap to pick up an item, tap the stash or inventory to put it down': '點一下拾取物品，再點儲物箱或物品欄放下',
'Tap an item to see it': '點選物品查看',
'Tap a ware to see it': '點選貨品查看',
'Tap a ware to buy it': '點選貨品購買',
'Tap an item to see it': '點選物品查看',
'Tap again to buy': '再點一次購買',
'Tap again to buy it back': '再點一次回購',
'Tap again to gamble': '再點一次賭博',
'Click an item to buy it back': '點擊物品即可回購',
'Click an item to gamble': '點擊物品即可賭博',
'Tap a card to pick it': '點選卡片以選擇',
'Tap to continue': '點一下繼續',
'Click for every skill (T)': '按 T 檢視所有技能',
'A code from another browser replaces this browser\'s save.': '來自另一個瀏覽器的代碼會取代此瀏覽器的存檔。',
'The Smith': '鐵匠',
'Baal has been slain': '巴爾已被擊殺',
'Unofficial fan project, not affiliated with or endorsed by Blizzard Entertainment. Diablo® is a trademark of Blizzard Entertainment, Inc.': '非官方粉絲作品，與 Blizzard Entertainment 無關，亦未獲其認可或背書。Diablo® 為 Blizzard Entertainment, Inc. 的商標。',
'Unofficial fan project, not affiliated with or endorsed by Blizzard Entertainment. Diablo® is a trademark of Blizzard Entertainment, Inc': '非官方粉絲作品，與 Blizzard Entertainment 無關，亦未獲其認可或背書。Diablo® 為 Blizzard Entertainment, Inc. 的商標。',
'The Secret of the Vizjerei': '維茲傑雷的祕密',
'A Vampire Survivors-style tribute to Diablo II: Lord of Destruction': '向《暗黑破壞神 II：毀滅之王》致敬的倖存者類型遊戲',
'D2 Survivors in its own window, offline': '在獨立視窗中遊玩 D2 Survivors',
'Better chance that items dropped are magic, rare or unique': '提高掉落物品為魔法、稀有或獨特品質的機率',
'Life now, and its maximum': '目前生命值與生命上限',
'Life regained every second': '每秒恢復的生命值',
'Gold banked for Charsi': '恰西保管的金幣',
'Gold banked for Charsi, and in a run the gold found so far': '恰西保管的金幣；在一局中也包含這局目前撿到的金幣',
'At most 75%, more with +% to Maximum Resist': '最高 75%；提高抗性上限可再增加',
'Blocking with a shield goes by it too': '使用盾牌格擋時也會套用',
'A level past a skill\'s maximum still adds to it, as in D2': '技能超過最高等級後仍會繼續增加效果，如同 D2',
'Carry your gold, Charsi\'s upgrades and gear to D2 Survivors in another browser or on another device.': '將金幣、恰西的升級與裝備轉移到其他瀏覽器或裝置上的 D2 Survivors。',
'Best time': '最佳紀錄',
'Coming soon': '即將推出',
'Could not resume the saved run': '無法繼續已儲存的遊戲進度',
'No one can use that': '沒有角色能使用此物品',
'No room to swap that': '沒有空間交換此物品',
'Nothing of yours needs repair': '你的裝備不需要修理',
'You gambled': '你購得賭博物品',
'You have died': '你已死亡',
'You have no room for that': '沒有空間放置此物品',
'Your class can\'t use this': '你的職業無法使用此物品',
'What a hero sells stays here': '英雄出售的物品會留在這裡',
'The portal is open already': '傳送門已經開啟',
'Replace Your Save?': '要取代目前的存檔嗎？',
'Paste a save code first.': '請先貼上存檔代碼。',
'Paste a save code here': '在此貼上存檔代碼',
'Select the code and copy it': '選取代碼並複製',
'That code comes from a newer version of D2 Survivors. Reload this page to update, then try again.': '此代碼來自較新版本的 D2 Survivors。請重新載入頁面更新後再試一次。',
'That code holds gear this version of D2 Survivors doesn\'t know. Reload this page to update, then try again.': '此代碼包含目前版本不支援的裝備。請重新載入頁面更新後再試一次。',
'That code is damaged. Copy all of it again and paste it here.': '此代碼已損毀。請重新完整複製後再貼上。',
'That code doesn\'t hold a save D2 Survivors can use.': '此代碼不包含 D2 Survivors 可讀取的存檔。',
'That isn\'t a D2 Survivors save code.': '這不是 D2 Survivors 的存檔代碼。',
'That\'s too long to be a save code.': '此內容過長，無法作為存檔代碼。',
'This browser can\'t make a save code.': '此瀏覽器無法產生存檔代碼。',
'SINGLE PLAYER': '單人遊戲',
'Sound on': '音效開啟',
'Sound off': '音效關閉',
'PREVIOUS MENU': '返回上一個選單',
'RESTART TO UPDATE': '重新啟動以套用更新',
'CREDITS / LEGAL': '製作人員／法律聲明',
'D2 Survivors diagnostics': 'D2 Survivors 診斷資訊',
'D2 Survivors is open in another tab': 'D2 Survivors 已在另一個分頁中開啟',
'D2 Survivors is an unofficial, free fan project. It is not affiliated with, endorsed, sponsored or approved by Blizzard Entertainment, Inc.': 'D2 Survivors 是免費的非官方粉絲作品，與 Blizzard Entertainment, Inc. 無關，亦未獲其認可、贊助或核准。',
'Diminishing for rares and uniques, as in D2': '如同 D2，對稀有與獨特物品的效果會遞減。',
'Golems get +25% life, +10% damage and +8% speed': '石魔獲得 +25% 生命、+10% 傷害與 +8% 速度',
'Half as much Faster Cast Rate: attacks here recharge as spells do': '此處快速施法率效果減半：攻擊的冷卻速度比照法術。',
'How much faster the hero runs': '英雄跑步速度的提升幅度',
'Its dose added to every weapon blow: its average goes to Attack Damage': '此效果會加到每次武器攻擊；平均值計入攻擊傷害。',
'Its hits come as monsters strike you': '怪物攻擊你時觸發命中效果。',
'Less damage from every hit taken': '每次受到攻擊時減少傷害',
'Pick things up from 40% farther away': '拾取物品的距離增加 40%',
'Tap a ware, then tap it again': '點選一件貨品，再點一次以確認',
'Tap again to pick it': '再點一次即可拾取',
'The Ancients awaken': '先祖甦醒了',
'The Worldstone is safe.': '世界之石已安全。',
'You don\'t have Wirt\'s Leg': '你沒有維特之腳',
'travel: cow portal': '傳送：奶牛關入口',
'WINDOWS (BETA)': 'Windows（測試版）',
'COPY FAILED': '複製失敗',
'Select Hero Class': '選擇英雄職業',
'TIP THE DEV': '贊助開發者',
'Every hero can reach it': '每位英雄都能達到此處',
'The display was lost': '顯示畫面已中斷',
'The display was lost: reload notice shown': '顯示畫面已中斷：已顯示重新載入提示',
'This browser': '此瀏覽器',
'The code': '代碼',
'The Cow King': '奶牛之王',
'No errors or warnings.': '沒有錯誤或警告。',
'none in play yet': '目前尚無遊戲資料',
'no best time': '暫無最佳紀錄',
'Software rendering: update your graphics driver': '目前使用軟體繪圖，請更新顯示卡驅動程式',
'On a Mac': '在 Mac 上',
'An error occurred': '發生錯誤',
'Campfire (Enter)': '營火（Enter）',
'Build complete': '建置完成',
'Drag a slider to adjust': '拖曳滑桿調整',
'First launch on Windows (beta)': 'Windows 首次啟動（測試版）',
'Lord of Destruction': '毀滅之王',
'DESKTOP APP': '桌面版應用程式',
'Last errors and warnings:': '最近的錯誤與警告：',
'Taken:': '已取得：',
'Open the .dmg and drag D2 Survivors into Applications. It keeps itself up to date.': '打開 .dmg，將 D2 Survivors 拖入「應用程式」資料夾。程式會自動保持更新。',
'display lost': '畫面中斷',
'display lost: reload notice shown': '畫面中斷：已顯示重新載入提示',
'display reloading': '正在重新載入畫面',
'display restored': '畫面已恢復',
'display resumable': '遊戲進度可繼續',
'no WebGL context': '沒有可用的 WebGL 繪圖環境',
'No available renderer for the current environment': '目前環境沒有可用的繪圖方式',
'D2\'s Exocet didn\'t build': 'D2 Exocet 標題無法正確載入',
'thorns (gear)': '荊棘（裝備效果）',
'Lion Branded': '獅印之',
'until that hero\'s next run': '直到該英雄開始下一輪遊戲為止',
'CONTROLLER': '手把',
'RUMBLE': '震動',
'STICK DEAD ZONE': '搖桿死區',
'PRESS A BUTTON': '請按下按鍵',
'RESET TO DEFAULTS': '恢復預設值',
'BELT 1': '腰帶 1',
'BELT 2': '腰帶 2',
'BELT 3': '腰帶 3',
'BELT 4': '腰帶 4',
'INTERACT': '互動',
'SKILL LIST': '技能列表',
'GAME MENU': '遊戲選單',
'PICK SKILL LEFT': '選擇左邊技能',
'PICK SKILL RIGHT': '選擇右邊技能',
'REST SKILL': '休息技能',
'D-pad Up': '十字鍵上',
'D-pad Down': '十字鍵下',
'D-pad Left': '十字鍵左',
'D-pad Right': '十字鍵右',
'ON': '開',
'OFF': '關',
'AUTO STATS': '自動配點',
'END THE RUN': '結束這一輪',
'GAME FILES': '遊戲檔案',
'UPDATES': '更新',
'NEWS': '最新消息',
'REPORT': '回報問題',
'Pick': '選擇',
'Pick up': '拿起',
'Put back': '放回',
'Put down': '放下',
'Select': '選擇',
'START': '開始',
'LANGUAGE': '遊戲語言', 'LANGUAGE: ENGLISH': '遊戲語言：繁體中文', 'LANGUAGE: 한국어': '遊戲語言：繁體中文',
'Unofficial fan project, not affiliated with Blizzard Entertainment. Diablo II® is a trademark of Blizzard Entertainment, Inc.': '非官方粉絲作品，與 Blizzard Entertainment 無關。Diablo II® 為 Blizzard Entertainment, Inc. 的商標。'
};
const vocabulary = [
['Maximum Life', '生命上限'], ['maximum life', '生命上限'], ['Maximum Mana', '法力上限'],
['Attack Damage', '攻擊傷害'], ['Physical Damage', '物理傷害'], ['Fire Damage', '火焰傷害'],
['Cold Damage', '冰寒傷害'], ['Lightning Damage', '閃電傷害'], ['Poison Damage', '毒素傷害'],
['Magic Damage', '魔法傷害'], ['Area Damage', '範圍傷害'], ['Attack Rating', '攻擊準確率'],
['Enhanced Damage', '增強傷害'], ['Enhanced Defense', '增強防禦'], ['Critical Strike', '致命攻擊'],
['Faster Cast Rate', '快速施法率'], ['Faster Hit Recovery', '快速打擊恢復'],
['Faster Block Rate', '快速格擋率'], ['Life Stolen Per Hit', '擊中偷取生命'],
['Mana Stolen Per Hit', '擊中偷取法力'], ['Magic Find', '尋獲魔法物品機率'],
['Gold Find', '尋獲金幣機率'], ['Chance to Block', '格擋機率'], ['Damage Taken', '受到的傷害'],
['damage taken', '受到的傷害'], ['life per second', '每秒生命值'], ['per second', '每秒'],
['per rank', '每級'], ['per level', '每級'], ['per kill', '每次擊殺'], ['on kill', '擊殺時'],
['when struck', '受到攻擊時'], ['on striking', '攻擊時'], ['when equipped', '裝備時'],
['while equipped', '裝備時'], ['chance of', '機率'], ['chance to', '機率'],
['movement speed', '移動速度'], ['attack speed', '攻擊速度'], ['cooldowns', '冷卻時間'],
['cooldown', '冷卻時間'], ['critical strike', '致命攻擊'], ['crit', '暴擊'],
['maximum life', '生命上限'], ['maximum mana', '法力上限'], ['life regeneration', '生命恢復'],
['mana regeneration', '法力恢復'], ['life stolen', '偷取生命'], ['mana stolen', '偷取法力'],
['resistance', '抗性'], ['resistances', '抗性'], ['resist', '抗性'], ['damage', '傷害'],
['defense', '防禦'], ['armor', '護甲'], ['block', '格擋'], ['strength', '力量'],
['dexterity', '敏捷'], ['vitality', '體力'], ['energy', '精力'], ['experience', '經驗值'],
['gold', '金幣'], ['kills', '擊殺'], ['kill', '擊殺'], ['level', '等級'], ['life', '生命'],
['mana', '法力'], ['health', '生命'], ['fire', '火焰'], ['cold', '冰寒'],
['lightning', '閃電'], ['poison', '毒素'], ['physical', '物理'], ['magic', '魔法'],
['normal', '普通'], ['nightmare', '惡夢'], ['hell', '地獄'], ['unique', '獨特'],
['rare', '稀有'], ['magic item', '魔法物品'], ['items', '物品'], ['item', '物品'],
['monsters', '怪物'], ['monster', '怪物'], ['bosses', '首領'], ['boss', '首領'],
['skills', '技能'], ['skill', '技能'], ['passives', '被動技能'], ['passive', '被動技能'],
['attributes', '屬性'], ['attribute', '屬性'], ['weapon', '武器'], ['shield', '盾牌'],
['helmet', '頭盔'], ['helm', '頭盔'], ['body armor', '盔甲'], ['boots', '靴子'],
['gloves', '手套'], ['belt', '腰帶'], ['ring', '戒指'], ['amulet', '護身符'],
['inventory', '物品欄'], ['stash', '儲物箱'], ['equip', '裝備'], ['equipped', '已裝備'],
['unequip', '卸下'], ['sell', '出售'], ['buy', '購買'], ['buy back', '回購'],
['gamble', '賭博'], ['gold per rank', '每級金幣'], ['points', '點數'], ['point', '點數'],
['chance', '機率'], ['duration', '持續時間'], ['seconds', '秒'], ['second', '秒'],
['radius', '範圍'], ['area', '範圍'], ['range', '距離'], ['speed', '速度'],
['summon', '召喚'], ['summons', '召喚物'], ['pierce', '穿透'], ['knockback', '擊退'],
['stun', '暈眩'], ['burns', '燃燒'], ['burn', '燃燒'], ['chilled', '冰冷'],
['slowed', '緩速'], ['damage per second', '每秒傷害'], ['more damage', '額外傷害'],
['less damage', '減少傷害'], ['all skills', '所有技能'], ['to all skills', '所有技能'],
['per hit', '每次命中'], ['per strike', '每次攻擊'], ['per projectile', '每枚飛射物'],
['chance of a critical strike', '致命攻擊機率'], ['critical damage', '致命傷害'],
['cold resistance', '冰寒抗性'], ['fire resistance', '火焰抗性'],
['lightning resistance', '閃電抗性'], ['poison resistance', '毒素抗性'],
['cold resist', '冰寒抗性'], ['fire resist', '火焰抗性'],
['lightning resist', '閃電抗性'], ['poison resist', '毒素抗性'],
['all resistances', '所有抗性'], ['all resist', '所有抗性'],
['open wounds', '撕裂傷口'], ['crushing blow', '壓碎性打擊'], ['deadly strike', '致命攻擊'],
['life tap', '生命偷取詛咒'], ['amplify damage', '傷害加深'], ['decrepify', '衰老'],
['aura', '靈氣'], ['holy', '神聖'], ['summoned', '召喚的'], ['undead', '不死生物'],
['elite', '精英'], ['champion', '冠軍怪物'], ['frenzy', '狂亂'], ['blessed', '祝福'],
['attack', '攻擊'], ['attacks', '攻擊'], ['cast', '施放'], ['casts', '施放'],
['throw', '投擲'], ['thrown', '投擲'], ['arrow', '箭矢'], ['arrows', '箭矢'],
['bolt', '彈矢'], ['bolts', '彈矢'], ['blade', '刀刃'], ['blades', '刀刃'],
['hammer', '戰鎚'], ['spear', '長矛'], ['javelin', '標槍'], ['axe', '斧'],
['sword', '劍'], ['staff', '法杖'], ['wand', '魔杖'], ['bow', '弓'],
['orb', '法珠'], ['skull', '頭骨'], ['ring', '戒指'], ['amulet', '護身符'],
['amazon', '亞馬遜'], ['assassin', '刺客'], ['barbarian', '野蠻人'],
['druid', '德魯伊'], ['necromancer', '死靈法師'], ['paladin', '聖騎士'],
['sorceress', '女巫'], ['act', '幕'], ['level up', '升級'], ['paused', '已暫停'],
['options', '選項'], ['main menu', '主選單'], ['new run', '新的一輪'],
['play again', '再玩一次'], ['return to game', '返回遊戲'], ['save and exit game', '儲存並離開遊戲'],
['character', '角色'], ['automap', '自動地圖'], ['close', '關閉'], ['drop', '丟棄'],
['reroll', '重抽'], ['skip', '略過'], ['banish', '放逐'], ['maxed', '已達上限'],
['learned', '已習得'], ['evolved', '已進化'], ['next level', '下一級'], ['level ', '等級 ']
];
const names = [
['Andariel', '安達莉爾'], ['Duriel', '督瑞爾'], ['Mephisto', '墨菲斯托'],
['Diablo', '迪亞布羅'], ['Baal', '巴爾'], ['Blood Raven', '血鴉'],
['The Smith', '鐵匠'], ['Countess', '女伯爵'], ['Summoner', '召喚者'],
['Nihlathak', '尼拉塞克'], ['Izual', '衣卒爾'], ['Hephasto', '海法斯特'],
['Rakanishu', '拉卡尼休'], ['Griswold', '格瑞斯華爾德'], ['Charsi', '恰西'],
['Akara', '阿卡拉'], ['Kashya', '卡夏'], ['Warriv', '瓦瑞夫'], ['Gheed', '基德'],
['Deckard Cain', '迪卡·凱恩'], ['Fara', '法拉'], ['Drognan', '卓格南'],
['Ormus', '奧瑪斯'], ['Asheara', '艾席拉'], ['Jamella', '潔梅拉'],
['Halbu', '哈爾布'], ['Malah', '瑪拉'], ['Anya', '安雅'],
['Rogue Encampment', '羅格營地'], ['Blood Moor', '鮮血荒地'], ['Cold Plains', '冰冷之原'],
['Stony Field', '石塊曠野'], ['Dark Wood', '黑暗森林'], ['Black Marsh', '黑色荒地'],
['Catacombs', '地下墓穴'], ['Lut Gholein', '魯·高因'], ['Rocky Waste', '岩石荒地'],
['Dry Hills', '乾燥高地'], ['Far Oasis', '遙遠綠洲'], ['Lost City', '遺忘之城'],
['Arcane Sanctuary', '秘法聖所'], ['Kurast Docks', '庫拉斯特港口'],
['Spider Forest', '蜘蛛森林'], ['Great Marsh', '龐大濕地'], ['Flayer Jungle', '剝皮叢林'],
['Lower Kurast', '庫拉斯特下層'], ['Upper Kurast', '庫拉斯特上層'],
['Travincal', '崔凡克'], ['Pandemonium Fortress', '混沌避難所'],
['Den of Evil', '邪惡洞窟'], ['Normal', '普通'], ['Nightmare', '惡夢'], ['Hell', '地獄'],
['Magic Arrow', '魔法箭'], ['Fire Arrow', '火焰箭'], ['Cold Arrow', '冰箭'],
['Multiple Shot', '多重箭'], ['Exploding Arrow', '爆裂箭'], ['Guided Arrow', '導引箭'],
['Strafe', '掃射'], ['Valkyrie', '女武神'], ['Lightning Fury', '閃電之怒'],
['Fire Blast', '火焰爆震'], ['Wake of Fire', '火焰復甦'], ['Blade Fury', '刀刃之怒'],
['Lightning Sentry', '閃電守衛'], ['Death Sentry', '亡者守衛'], ['Dragon Talon', '龍爪'],
['Bash', '猛擊'], ['Double Swing', '雙手揮擊'], ['Frenzy', '狂亂'], ['Whirlwind', '旋風'],
['Leap Attack', '跳躍攻擊'], ['Battle Orders', '戰鬥命令'], ['Battle Cry', '戰鬥吶喊'],
['Berserk', '狂戰士'], ['Firestorm', '火風暴'], ['Molten Boulder', '熔岩巨石'],
['Fissure', '火山裂隙'], ['Volcano', '火山爆'], ['Armageddon', '毀天滅地'],
['Tornado', '龍捲風'], ['Hurricane', '颶風'], ['Cyclone Armor', '旋風裝甲'],
['Bone Spear', '骨矛'], ['Bone Spirit', '骨魂'], ['Corpse Explosion', '屍體爆炸'],
['Raise Skeleton', '復甦骷髏'], ['Poison Nova', '毒爆'], ['Clay Golem', '黏土石魔'],
['Iron Golem', '鋼鐵石魔'], ['Blessed Hammer', '祝福之槌'], ['Holy Bolt', '聖光彈'],
['Fist of the Heavens', '天堂之拳'], ['Zeal', '熱誠'], ['Holy Fire', '聖火'],
['Holy Freeze', '神聖冰凍'], ['Holy Shock', '神聖電擊'], ['Fanaticism', '狂熱'],
['Fire Bolt', '火彈'], ['Fire Ball', '火球'], ['Meteor', '隕石'], ['Frozen Orb', '冰封球'],
['Blizzard', '暴風雪'], ['Chain Lightning', '連鎖閃電'], ['Charged Bolt', '充能彈'],
['Teleport', '傳送'], ['Static Field', '靜態力場'], ['Hydra', '九頭海蛇'],
['Short Sword', '短劍'], ['Long Sword', '長劍'], ['Broad Sword', '闊劍'],
['Crystal Sword', '水晶劍'], ['Phase Blade', '幻化之刃'], ['Berserker Axe', '狂戰士斧'],
['War Pike', '戰槍'], ['Colossus Blade', '巨神之刃'], ['Ring Mail', '環甲'],
['Chain Mail', '鎖子甲'], ['Archon Plate', '執政官鎧甲'], ['Monarch', '統治者大盾'],
['El Rune', '艾爾符文'], ['Eld Rune', '艾德符文'], ['Tir Rune', '特爾符文'],
['Nef Rune', '內夫符文'], ['Eth Rune', '艾斯符文'], ['Ith Rune', '伊司符文'],
['Tal Rune', '塔爾符文'], ['Ral Rune', '拉爾符文'], ['Ort Rune', '歐特符文'],
['Thul Rune', '書爾符文'], ['Amn Rune', '安姆符文'], ['Sol Rune', '索爾符文'],
['Shael Rune', '夏符文'], ['Dol Rune', '多爾符文'], ['Hel Rune', '海爾符文'],
['Io Rune', '伊歐符文'], ['Lum Rune', '盧姆符文'], ['Ko Rune', '科符文'],
['Fal Rune', '法爾符文'], ['Lem Rune', '藍姆符文'], ['Pul Rune', '普爾符文'],
['Um Rune', '烏姆符文'], ['Mal Rune', '馬爾符文'], ['Ist Rune', '伊斯特符文'],
['Gul Rune', '古爾符文'], ['Vex Rune', '伐克斯符文'], ['Ohm Rune', '歐姆符文'],
['Lo Rune', '羅符文'], ['Sur Rune', '瑟符文'], ['Ber Rune', '貝符文'],
['Jah Rune', '喬符文'], ['Cham Rune', '查姆符文'], ['Zod Rune', '薩德符文']
];
const extraNames = [
['Achmel the Cursed', '詛咒者亞克姆'], ['Ancient Kaa the Soulless', '無魂者古代卡'],
['Bartuc the Bloody', '血腥巴特克'], ['Battlemaid Sarina', '戰鬥女僕莎蓮娜'],
['Bremm Sparkfist', '電拳布瑞姆'], ['Coldworm the Burrower', '掘地者寒蟲'],
['Colenzo the Annihilator', '毀滅者科倫索'], ['Eldritch the Rectifier', '懲戒者艾德瑞奇'],
['Eyeback the Unleashed', '解放者眼背'], ['Geleb Flamefinger', '火指吉列布'],
['Grand Vizier of Chaos', '混沌大臣'], ['Hephasto the Armorer', '盔甲匠海法斯特'],
['Ismail Vilehand', '邪惡之手伊斯梅爾'], ['Korlic the Protector', '守護者科力克'],
['Lister the Tormentor', '折磨者利斯特'], ['Lord De Seis', '西希之王'],
['Madawc the Guardian', '守衛者馬道克'], ['Maffer Dragonhand', '龍手馬弗'],
['Shenk the Overseer', '督軍申克'], ['Snapchip Shatter', '碎片粉碎者'],
['Sszark the Burning', '燃燒者斯札克'], ['Talic the Defender', '防禦者塔力克'],
['Toorc Icefist', '冰拳圖克'], ['Ventar the Unholy', '邪惡者文特'],
['Witch Doctor Endugu', '巫醫恩杜古'], ['Wyand Voidbringer', '虛空使者懷安'],
['Arreat Plateau', '亞瑞特高原'], ['Arreat Summit', '亞瑞特山頂'],
['Arreat\'s Face', '亞瑞特之面'], ['Bloody Foothills', '血腥丘陵'],
['Chaos Sanctuary', '混沌避難所'], ['City of the Damned', '苦痛之城'],
['Claw Viper Temple', '利爪蝮蛇神殿'], ['Crystalline Passage', '水晶通道'],
['Durance of Hate', '憎恨囚牢'], ['Frigid Highlands', '冰凍高地'],
['Frozen River', '冰凍之河'], ['Frozen Tundra', '冰凍苔原'],
['Glacial Trail', '冰河路徑'], ['Halls of Vaught', '瓦特大廳'],
['Kurast Bazaar', '庫拉斯特市集'], ['Kurast Causeway', '庫拉斯特堤道'],
['Monastery Gate', '修道院大門'], ['Outer Steppes', '外側草原'],
['Plains of Despair', '絕望平原'], ['River of Flame', '火焰之河'],
['Tal Rasha\'s Tomb', '塔拉夏古墓'], ['Tamoe Highland', '泰摩高地'],
['Throne of Destruction', '毀滅王座'], ['Valley of Snakes', '蛇谷'],
['Worldstone Chamber', '世界之石大殿'], ['Worldstone Keep', '世界之石要塞'],
['Akaran Rondache', '阿卡蘭圓盾'], ['Akaran Targe', '阿卡蘭輕圓盾'],
['Avenger Guard', '復仇者頭盔'], ['Balrog Skin', '巴爾洛格之皮'],
['Battle Cestus', '戰鬥拳刃'], ['Battle Dart', '戰鬥飛鏢'],
['Battle Gauntlets', '戰鬥手套'], ['Cantor Trophy', '吟唱者獎章'],
['Ceremonial Pike', '儀式長矛'], ['Cloudy Sphere', '雲霧法珠'],
['Colossus Crossbow', '巨神十字弓'], ['Colossus Girdle', '巨神腰帶'],
['Conqueror Crown', '征服者皇冠'], ['Crusader Gauntlets', '十字軍手套'],
['Crystalline Globe', '水晶法球'], ['Dacian Falx', '達契亞長刀'],
['Demon Head', '惡魔頭骨'], ['Demon Heart', '惡魔之心'],
['Demonhide Sash', '惡魔皮腰帶'], ['Dimensional Shard', '次元碎片'],
['Divine Scepter', '神聖權杖'], ['Dusk Shroud', '灰暮罩衣'],
['Falcon Mask', '獵鷹面具'], ['Feral Claws', '狂暴之爪'],
['Fetish Trophy', '妖人獎章'], ['Field Plate', '戰場鎧甲'],
['Flanged Mace', '凸緣錘'], ['Flying Knife', '飛刀'], ['Fury Visor', '狂怒面甲'],
['Gargoyle Head', '石像鬼頭骨'], ['Ghost Glaive', '幽靈戰戟'],
['Glorious Axe', '榮耀之斧'], ['Glowing Orb', '發光法珠'],
['Gnarled Staff', '扭曲法杖'], ['Grand Crown', '巨型皇冠'],
['Grand Scepter', '巨型權杖'], ['Great Pilum', '巨型標槍'],
['Great Poleaxe', '巨型長柄斧'], ['Greater Claws', '巨型爪'],
['Greater Talons', '巨型利爪'], ['Griffon Headdress', '獅鷲頭飾'],
['Grim Ward', '陰森圖騰'], ['Guardian Crown', '守護者皇冠'],
['Hand Scythe', '手鐮'], ['Harlequin Crest', '諧角之冠'],
['Hatchet Hands', '手斧爪'], ['Heavy Bracers', '重型護腕'],
['Heavy Crossbow', '重型十字弓'], ['Hierophant Trophy', '祭司長獎章'],
['Hunter\'s Guise', '獵人的偽裝'], ['Jade Talon', '翡翠爪'],
['Jagged Star', '鋸齒之星'], ['Jawbone Cap', '顎骨頭盔'],
['Jawbone Visor', '顎骨面甲'], ['Kraken Shell', '海妖殼甲'],
['Legend Spike', '傳奇尖刺'], ['Legendary Mallet', '傳奇巨槌'],
['Light Crossbow', '輕型十字弓'], ['Light Gauntlets', '輕型鐵手套'],
['Light Plate', '輕型鎧甲'], ['Lion Helm', '獅首頭盔'],
['Lochaber Axe', '洛哈伯斧'], ['Mithril Coil', '秘銀腰帶'],
['Myrmidon Greaves', '米特律之靴'], ['Ogre Gauntlets', '食人魔鐵手套'],
['Sacred Feathers', '神聖羽飾'], ['Sacred Globe', '神聖法球'],
['Sacred Rondache', '神聖圓盾'], ['Sacred Targe', '神聖輕圓盾'],
['Scissors Katar', '剪刃卡塔爾'], ['Scissors Quhab', '剪刃庫哈布'],
['Scissors Suwayyah', '剪刃蘇瓦雅'], ['Seraph Rod', '熾天使之杖'],
['Sexton Trophy', '助祭獎章'], ['Smoked Sphere', '煙霧法珠'],
['Sparkling Ball', '閃耀水晶球'], ['Spectral Shard', '幽靈碎片'],
['Stygian Pilum', '冥河標槍'], ['Swirling Crystal', '旋渦水晶'],
['Totemic Mask', '圖騰面具'], ['Troll Nest', '巨魔巢穴盾'],
['Umbral Disk', '暗影圓盤'], ['War Fist', '戰拳'],
['War Gauntlets', '戰鬥鐵手套'], ['War Hat', '戰帽'],
['Winged Harpoon', '翼形魚叉'], ['Wire Fleece', '線毛甲'],
['Wrist Spike', '腕刺'], ['Zombie Head', '殭屍頭骨'],
['Alma Negra', '阿瑪·內格拉'], ['Arachnid Mesh', '蜘蛛網腰帶'],
['Arioc\'s Needle', '艾瑞歐克之針'], ['Arkaine\'s Valor', '阿凱尼的榮耀'],
['Arm of King Leoric', '李奧瑞克王之臂'], ['Astreon\'s Iron Ward', '阿斯特龍的鐵守衛'],
['Bane Ash', '痛苦烏木'], ['Baranar\'s Star', '巴拉那之星'],
['Bartuc\'s Cut-Throat', '巴特克的屠殺之刃'], ['Biggin\'s Bonnet', '比格因的軟帽'],
['Blackhand Key', '黑手之匙'], ['Blinkbat\'s Form', '蝙蝠之形'],
['Blood Crescent', '血月'], ['Blood Raven\'s Charge', '血鴉之爪'],
['Bonesaw Breaker', '碎骨鋸'], ['Bul-Kathos\' Wedding Band', '布爾凱索的婚戒'],
['Buriza-Do Kyanon', '布理撒多凱南'], ['Bverrit Keep', '貝弗提的堡壘'],
['Carin Shard', '凱恩碎片'], ['Cerebus\' Bite', '刻耳柏洛斯之咬'],
['Crown of Ages', '年紀之冠'], ['Crown of Thieves', '竊盜之王皇冠'],
['Death Cleaver', '死神之擊'], ['Death\'s Fathom', '死亡深度'],
['Death\'s Web', '死亡之網'], ['Dimoak\'s Hew', '迪莫克之劈'],
['Dwarf Star', '矮人之星'], ['Eschuta\'s Temper', '艾斯屈塔的脾氣'],
['Gargoyle\'s Bite', '石像鬼之咬'], ['Gerke\'s Sanctuary', '吉永的庇護'],
['Gloom\'s Trap', '陰影陷阱'], ['Gore Rider', '蝕肉騎士'],
['Griffon\'s Eye', '獅鷲之眼'], ['Halaberd\'s Reign', '哈拉伯德的統治'],
['Heaven\'s Light', '天堂之光'], ['Highlord\'s Wrath', '大君之怒'],
['Husoldal Evo', '胡索達爾艾沃'], ['Icehawk Riftwing', '冰鷹裂翼'],
['Jalal\'s Mane', '加爾的長髮'], ['Jared\'s Stone', '傑瑞德之石'],
['Kinemil\'s Awl', '基米爾的錐子'], ['Kira\'s Guardian', '奇拉的守護'],
['Knell Striker', '喪鐘敲擊者'], ['Langer Briser', '蘭格布萊瑟'],
['Lidless Wall', '無眼之牆'], ['Lycander\'s Aim', '萊坎德的準星'],
['Lycander\'s Flank', '萊坎德的側翼'], ['Mara\'s Kaleidoscope', '馬拉的萬花筒'],
['Manald Heal', '瑪納德的治療'], ['Medusa\'s Gaze', '美杜莎之凝視'],
['Nature\'s Peace', '自然之和平'], ['Nightwing\'s Veil', '夜翼面紗'],
['Nosferatu\'s Coil', '諾斯費拉圖的線圈'], ['Pelta Lunata', '佩爾塔月牙'],
['Que-Hegan\'s Wisdom', '魁黑剛的智慧'], ['Radament\'s Sphere', '拉達曼特之球'],
['Raven Claw', '渡鴉之爪'], ['Raven Frost', '烏鴉之霜'],
['Rixot\'s Keen', '瑞克撒特的銳利'], ['Seraph\'s Hymn', '熾天使的頌歌'],
['Shadow Dancer', '影舞者'], ['Shadow Killer', '影殺者'],
['Skin of the Vipermagi', '蛇魔法師之皮'], ['Skullder\'s Ire', '斯寇德的憤怒'],
['Spiderweb Sash', '蜘蛛網腰帶'], ['Spire of Honor', '榮耀尖塔'],
['Spire of Lazarus', '拉撒路尖塔'], ['Suicide Branch', '自殺枝芽'],
['The Cat\'s Eye', '貓眼'], ['The Chieftain', '酋長'], ['The Eye of Etlich', '艾利屈之眼'],
['The Face of Horror', '恐懼之臉'], ['The Gladiator\'s Bane', '鬥士的禍根'],
['The Hand of Broc', '布洛克之手'], ['The Oculus', '眼球'],
['The Stone of Jordan', '喬丹之石'], ['Thundergod\'s Vigor', '雷神之力'],
['Titan\'s Revenge', '泰坦的復仇'], ['Treads of Cthon', '克松之足'],
['Ume\'s Lament', '烏姆之哀嘆'], ['Verdungo\'s Hearty Cord', '維爾登戈的強健之索'],
['Wirt\'s Leg', '維特之腳'], ['Wisp Projector', '鬼火投射器'],
['Arctic Blast', '寒冰氣流'], ['Battle Command', '戰鬥指揮'],
['Charged Strike', '充能一擊'], ['Claw Mastery', '爪類精通'],
['Claws of Thunder', '雷電爪'], ['Cloak of Shadows', '暗影斗篷'],
['Cobra Strike', '眼鏡蛇攻擊'], ['Defensive Auras', '防禦靈氣'],
['Dragon Claw', '龍爪'], ['Dragon Flight', '飛龍在天'], ['Dragon Tail', '神龍擺尾'],
['Faster Run/Walk', '移動速度加乘'], ['Feral Rage', '狂怒'],
['Find Potion', '尋找藥水'], ['Frost Nova', '霜之新星'], ['Golem Mastery', '石魔精通'],
['Heart of Wolverine', '狼獾之心'], ['Holy Shield', '神聖之盾'],
['Ice Blast', '冰彈'], ['Increased Attack Speed', '提高攻擊速度'],
['Increased Speed', '加速'], ['Increased Stamina', '提高耐力'],
['Inferno Sentry', '地獄火守衛'], ['Inner Sight', '內視'],
['Iron Maiden', '攻擊反噬'], ['Iron Skin', '鋼鐵之膚'], ['Mace Mastery', '錘類精通'],
['Martial Arts', '武學'], ['Mind Blast', '心靈爆震'], ['Multiple Shots', '多重射擊'],
['Oak Sage', '橡木智者'], ['Offensive Auras', '攻擊靈氣'],
['Phoenix Strike', '鳳凰擊'], ['Pole Arm Mastery', '長柄武器精通'],
['Power Strike', '威力一擊'], ['Raise Skeletal Mage', '復甦骷髏法師'],
['Royal Strike', '皇家一擊'], ['Shadow Disciplines', '暗影修行'],
['Shadow Master', '影子大師'], ['Shadow Warrior', '影子戰士'],
['Shape Shifting', '變形'], ['Shock Field', '電能場'], ['Shock Wave', '震波'],
['Shock Web', '電網'], ['Skeleton Mastery', '骷髏精通'], ['Slow Missiles', '緩速飛射'],
['Solar Creeper', '太陽藤蔓'], ['Spirit of Barbs', '荊棘靈'],
['Throwing Mastery', '投擲精通'], ['Thunder Storm', '雷暴'],
['Tiger Strike', '虎擊'], ['Wake of Inferno', '地獄火復甦'], ['War Cry', '戰嗥'],
['Cannot Be Frozen', '無法冰凍'], ['Extra Fast', '特別快速'],
['Extra Strong', '特別強壯'], ['Hit Blinds Target', '擊中使目標目盲'],
['Immune to Cold', '冰寒免疫'], ['Immune to Fire', '火焰免疫'],
['Immune to Lightning', '閃電免疫'], ['Immune to Magic', '魔法免疫'],
['Immune to Physical', '物理免疫'], ['Immune to Poison', '毒素免疫'],
['Ignore Target\'s Defense', '無視目標防禦'], ['Lightning Enchanted', '閃電強化'],
['Lightning Mastery', '閃電支配'], ['Lightning Skills', '閃電技能'],
['Lower Resist', '降低抗性'], ['Martial arts, traps and shadow disciplines', '武學、陷阱與暗影修行'],
['of the Apprentice', '學徒之'], ['of the Bat', '蝙蝠之'], ['of the Colosuss', '巨像之'],
['of the Elephant', '猛獁之'], ['of the Fox', '狐狸之'], ['of the Giant', '巨人之'],
['of the Glacier', '冰河之'], ['of the Icicle', '冰柱之'], ['of the Jackal', '豺狼之'],
['of the Kraken', '海妖之'], ['of the Lamprey', '七鰓鰻之'], ['of the Leech', '水蛭之'],
['of the Locust', '蝗蟲之'], ['of the Magus', '大法師之'], ['of the Mammoth', '猛獁之'],
['of the Mind', '心智之'], ['of the Ox', '公牛之'], ['of the Sentinel', '守衛之'],
['of the Squid', '烏賊之'], ['of the Sun', '太陽之'], ['of the Tiger', '猛虎之'],
['of the Titan', '泰坦之'], ['of the Vampire', '吸血鬼之'], ['of the Whale', '巨鯨之'],
['of the Wolf', '狼之'], ['of the Wraith', '幽靈之'], ['of Absorption', '吸收之'],
['of Acceleration', '加速之'], ['of Accuracy', '準確之'], ['of Alacrity', '敏捷之'],
['of Amelioration', '改善之'], ['of Anthrax', '劇毒之'], ['of Attraction', '吸引之'],
['of Blight', '枯萎之'], ['of Blocking', '格擋之'], ['of Brilliance', '光輝之'],
['of Burning', '燃燒之'], ['of Butchery', '屠戮之'], ['of Carnage', '屠殺之'],
['of Craftsmanship', '工藝之'], ['of Defiance', '抗禦之'], ['of Deflecting', '偏斜之'],
['of Enlightenment', '啟迪之'], ['of Evisceration', '剖腹之'], ['of Excellence', '卓越之'],
['of Flame', '烈焰之'], ['of Fortune', '財運之'], ['of Frost', '冰霜之'],
['of Gore', '血腥之'], ['of Greed', '貪婪之'], ['of Guarding', '守護之'],
['of Haste', '急速之'], ['of Incineration', '焚化之'], ['of Light', '光明之'],
['of Luck', '幸運之'], ['of Maiming', '致殘之'], ['of Might', '威力之'],
['of Negation', '消除之'], ['of Nirvana', '涅槃之'], ['of Pacing', '步伐之'],
['of Perfection', '完美之'], ['of Pestilence', '瘟疫之'], ['of Precision', '精準之'],
['of Protection', '防護之'], ['of Quickness', '迅捷之'], ['of Radiance', '光芒之'],
['of Regeneration', '再生之'], ['of Regrowth', '復甦之'], ['of Remedy', '療癒之'],
['of Revivification', '復活之'], ['of Shock', '電擊之'], ['of Slaughter', '屠殺之'],
['of Slaying', '屠戮之'], ['of Sorcery', '巫術之'], ['of Spikes', '尖刺之'],
['of Storms', '風暴之'], ['of Swiftness', '迅速之'], ['of Swords', '劍術之'],
['of Thorns', '荊棘之'], ['of Thunder', '雷霆之'], ['of Transcendence', '超凡之'],
['of Traveling', '旅行之'], ['of Venom', '毒液之'], ['of Warding', '防衛之'],
['of Wealth', '財富之'], ['of Winter', '寒冬之'], ['of Wizardry', '法術之'],
['of Worth', '價值之'],
['Ancients\' Way', '先祖之路'], ['Blood Golem', '血肉石魔'],
['Blood Hawk', '血鷹'], ['Blood Spirit', '血靈'], ['Bloodwitch the Wild', '野性血巫'],
['Bone Knife', '骨刀'], ['Bone Prison', '骨牢'], ['Bone Wall', '骨牆'],
['Bramble Mitts', '荊棘手套'], ['Carrion Vine', '屍體藤蔓'], ['Corrupt Rogue', '墮落羅格'],
['Creeping Feature', '爬行異物'], ['Dac Farren', '達克·法倫'], ['Dark Elder', '黑暗長老'],
['Darkforce Spawn', '黑暗力量之卵'], ['Death Mask', '死亡面具'],
['Demonhorn\'s Edge', '惡魔號角之刃'], ['Devil Star', '惡魔之星'],
['Dim Vision', '微暗視力'], ['Dream Spirit', '夢境之靈'], ['Earth Spirit', '大地之靈'],
['Firelizard\'s Talons', '火蜥蜴之爪'], ['Full Rejuvenation Potion', '全面回復藥水'],
['Glacial Spike', '冰尖柱'], ['Great Wyrm\'s', '巨龍之'], ['Hawk Branded', '鷹印之'],
['Healing Potion', '治療藥水'], ['Heavenly Stone', '天堂之石'],
['Herald of Zakarum', '撒卡蘭姆使者'], ['Infector of Souls', '靈魂傳染者'],
['Iron Pelt', '鐵皮'], ['Mage Plate', '法師鎧甲'], ['Maiden Pike', '少女長矛'],
['Matriarchal Pike', '族長長矛'], ['Mighty Scepter', '強威權杖'],
['Morning Star', '晨星'], ['Mummified Trophy', '木乃伊獎章'],
['Plague Poppy', '瘟疫罌粟'], ['Preserved Head', '保存頭顱'], ['Quill Rat', '刺鼠'],
['Rage Mask', '狂怒面具'], ['Reinforced Mace', '強化釘錘'],
['Rose Branded', '玫瑰印記之'], ['Rune Scepter', '符文權杖'],
['Runic Talons', '符文利爪'], ['Scroll of Town Portal', '城鎮傳送卷軸'],
['Sharptooth Slayer', '鋒齒殺手'], ['Sky Spirit', '天空之靈'],
['Slayer Guard', '屠殺者守衛'], ['Small Charm', '小型護符'],
['Small Crescent', '小型新月斧'], ['Sparking Mail', '電光鎧甲'],
['Spectral Hit', '幽靈打擊'], ['Spirit Keeper', '靈魂守護者'],
['Spirit Mask', '靈魂面具'], ['Spirit Ward', '靈魂守衛'], ['Splint Mail', '板甲'],
['Steel Pillar', '鋼鐵之柱'], ['Stone Skin', '石膚'], ['Studded Leather', '鑲嵌皮甲'],
['Sun Spirit', '太陽之靈'], ['The Dragon Chang', '長龍'],
['The Fetid Sprinkler', '惡臭灑水器'], ['The General\'s Tan Do Li Ga', '將軍的譚多里加'],
['The Gnasher', '咬骨'], ['The Harrowing', '恐懼'], ['The Howler', '嚎叫者'],
['The Hungry', '飢餓者'], ['The Hunter', '獵人'], ['The Impaler', '穿刺者'],
['The Infernal Gate', '地獄之門'], ['The Iron Jang Bong', '鐵長棍'],
['The Mahim-Oak Curio', '馬希姆橡木古物'], ['The Mauler', '重擊者'],
['The Meat Scraper', '剝肉者'], ['The Patriarch', '族長'], ['The Redeemer', '救贖者'],
['The Rising Sun', '旭日'], ['The Salamander', '火蜥蜴'], ['The Scalper', '剝頭皮者'],
['The Sightless Eye', '無眼者'], ['The Tannr Gorerod', '坦恩戈瑞德'],
['The Ward', '守護者'], ['Thresh Socket', '碎顱者'], ['Throwing Knife', '投擲飛刀'],
['Torch of Iro', '伊羅火炬'], ['Treehead WoodFist', '木拳樹頭'],
['Unraveller Head', '解縛者頭顱'], ['Veil of Steel', '鋼鐵面紗'],
['Walking Stick', '手杖'], ['War Scepter', '戰鬥權杖'], ['War Traveler', '戰爭旅者'],
['Wolf Head', '狼頭'], ['Zakarum\'s Hand', '撒卡蘭姆之手'],
['of Anima', '靈性之'], ['of Atlus', '巨人之'], ['of Measure', '衡量之'],
['of Memory', '記憶之'], ['of Performance', '精湛之'], ['of Quality', '品質之'],
['of Razors', '利刃之'], ['of Readiness', '備戰之'],
['a blow', '攻擊'], ['a blow back', '擊退'], ['a blow of the mind', '精神衝擊'],
['a blow, on the dash or at its end', '衝刺途中或結束時發動攻擊'], ['a bomb', '炸彈'],
['a boulder', '巨石'], ['a burst', '爆裂'], ['a claw', '爪擊'], ['a claw blow', '爪擊'],
['a cut', '斬擊'], ['a dire wolf\'s bite', '恐狼撕咬'], ['a flame', '火焰'],
['a gust', '疾風'], ['a hit of his spin', '旋轉攻擊命中時'], ['a kick', '踢擊'],
['a paw', '揮爪'], ['a raven\'s peck', '烏鴉啄擊'], ['a rock', '岩石'],
['a shard', '碎片'], ['a skeleton\'s blow', '骷髏重擊'], ['a smite at what it blocks', '格擋時施展重擊'],
['a spark', '火花'], ['a spike', '尖刺'], ['a spirit', '靈體'],
['a spirit wolf\'s bite', '幽靈狼撕咬'], ['a spit', '噴吐'],
['a stomp or a blow', '踐踏或重擊'], ['a strike', '打擊'], ['a thrust', '刺擊'],
['a tick of a flame', '火焰每次造成傷害時'], ['a tick of a web', '蛛網每次造成傷害時'],
['a tick of the wall', '牆壁每次造成傷害時'], ['a tooth', '尖牙'], ['a twister', '旋風'],
['a wave', '波動'], ['the Dark', '暗黑者'], ['the Dead', '亡者'],
['the Destroyer', '毀滅者'], ['the Flayer', '剝皮者'], ['the golem\'s blow', '石魔重擊'],
['the Grim', '陰森者'], ['the grizzly\'s swipe', '灰熊揮擊'], ['the Jagged', '鋸齒者'],
['the landing or the strike', '落地或攻擊時'], ['the Mad', '狂亂者'], ['the Quick', '迅捷者'],
['the Shade', '暗影者'], ['the Sharp', '銳利者'], ['the Slasher', '斬擊者'],
['the Slayer', '殺戮者'], ['the Tainted', '污染者'], ['the Unclean', '污穢者'],
['the Unholy', '邪惡者'], ['the Witch', '女巫'], ['the Wraith', '幽魂'],
['wake of destruction', '毀滅之焰']
];
// 易牙居譯名（技能、技能樹分頁、獨特物品、底材）：優先於上面所有譯名。
// 從易牙居備份的「中文 English」對照抽出，只列跟原本譯名不同的；同一詞易牙居有多種寫法時取最常用的。
const iyaNames = {
// 技能樹分頁
'Bow and Crossbow Skills': '弓和十字弓技能', 'Passive and Magic Skills': '被動和魔法技能', 'Javelin and Spear Skills': '標槍和長矛技能',
'Fire Spells': '火焰法術技能', 'Lightning Spells': '閃電法術技能', 'Cold Spells': '冰凍法術技能',
'Curses': '詛咒技能', 'Poison and Bone Spells': '毒素和白骨技能', 'Summoning Spells': '召喚技能',
'Offensive Auras': '攻擊性靈氣技能', 'Defensive Auras': '防禦性靈氣技能',
'Combat Masteries': '戰鬥專家技能', 'Warcries': '吶喊技能',
'Summoning': '召喚技能', 'Shape Shifting': '外型變形技能', 'Elemental': '元素技能',
'Traps': '陷阱技能', 'Shadow Disciplines': '影子訓練技能', 'Martial Arts': '武學藝術技能',
// 技能
'Strafe': '砲轟', 'Charged Strike': '衝能一擊', 'Pierce': '穿刺', 'Dodge': '閃避', 'Slow Missiles': '慢速箭',
'Charged Bolt': '衝能彈', 'Blaze': '熾烈之徑', 'Static Field': '靜態立場', 'Inferno': '地獄之火', 'Hydra': '九頭火蛇',
'Ice Blast': '冰風暴', 'Thunder Storm': '雷雲風暴', 'Shiver Armor': '碎冰甲', 'Lightning Mastery': '支配閃電',
'Warmth': '暖氣', 'Enchant': '強化', 'Poison Dagger': '淬毒匕首', 'Weaken': '削弱', 'Dim Vision': '微暗靈視',
'Life Tap': '偷取生命', 'Bone Spirit': '白骨之魂', 'Poison Nova': '劇毒新星', 'Confuse': '迷亂', 'Revive': '重生',
'Blood Golem': '鮮血石魔', 'Lower Resist': '降低抵抗', 'Skeleton Mastery': '支配骷髏', 'Golem Mastery': '支配石魔',
'Shock Web': '雷電網', 'Fists of Fire': '焰拳', 'Cloak of Shadows': '魔影斗篷', 'Lightning Sentry': '雷光守衛',
'Blade Fury': '刃之怒', 'Phoenix Strike': '鳳凰攻擊', 'Dragon Claw': '雙龍爪', 'Shadow Master': '支配影子',
'Claw Mastery': '支配利爪', 'Burst of Speed': '加速', 'Fade': '能量消解', 'Bash': '重擊', 'Stun': '擊暈',
'Whirlwind': '炫風', 'Howl': '狂嗥', 'Shout': '大叫', 'Battle Cry': '戰嗥', 'War Cry': '戰鬥狂嗥',
'Grim Ward': '殘酷嚇阻', 'Battle Orders': '戰鬥體制', 'Mace Mastery': '支配釘頭錘', 'Throwing Mastery': '支配飛擲',
'Iron Skin': '鐵布衫', 'Increased Stamina': '增加耐力', 'Find Potion': '找尋葯劑', 'Blessed Hammer': '祝福之鎚',
'Zeal': '白熱', 'Charge': '突擊', 'Conversion': '轉換', 'Might': '力量', 'Holy Shock': '神聖衝擊', 'Thorns': '針刺',
'Vigor': '精力', 'Salvation': '救助', 'Meditation': '冥思', 'Arctic Blast': '極地風暴', 'Fissure': '火山爆',
'Twister': '鎌鼬風', 'Werewolf': '狼人變化', 'Werebear': '熊人變化', 'Molten Boulder': '熔漿巨岩', 'Volcano': '火山',
'Hurricane': '暴風', 'Carrion Vine': '食屍藤', 'Solar Creeper': '太陽藤', 'Spirit of Barbs': '棘靈',
'Lycanthropy': '變形術', 'Feral Rage': '野性狂暴', 'Fire Claws': '焰爪', 'Cyclone Armor': '颶風裝甲',
// 獨特物品
'Pelta Lunata': '新月小盾', 'Biggin\'s Bonnet': '畢格因的軟帽', 'Hotspur': '熱靴刺', 'The Hand of Broc': '柏克之手',
'Nagelring': '拿各的戒指', 'Greyform': '薄暮外觀', 'Gorefoot': '血腳', 'Umbral Disk': '陰影圓盤',
'Blinkbat\'s Form': '眨眼蝙蝠的外觀', 'Stormguild': '暴風公會', 'Treads of Cthon': '凱松的征服', 'Tarnhelm': '塔因頭盔',
'Manald Heal': '瑪那得的治療', 'Sparking Mail': '火花之甲', 'Steelclash': '作響的金屬', 'The Mahim-Oak Curio': '瑪哈姆橡木古董',
'Goldwrap': '金色包袱', 'Stealskull': '偷取骷髏', 'Lidless Wall': '警戒之牆', 'Bul-Kathos\' Wedding Band': '布爾凱索之戒',
'The Rising Sun': '旭日東昇', 'Seraph\'s Hymn': '熾天使之韻', 'Nature\'s Peace': '大自然的和平', 'Wisp Projector': '鬼火投射者',
'Arachnid Mesh': '蜘蛛之網', 'Griffon\'s Eye': '格利風之眼', 'Bane Ash': '禍根之灰', 'Spire of Lazarus': '拉撒羅斯之螺旋',
'The Salamander': '火精靈', 'The Iron Jang Bong': '鐵檢棒', 'Pluckeye': '勇氣之眼', 'Witherstring': '凋謝之戒',
'Raven Claw': '渡鳥之爪', 'Stormstrike': '暴風之擊', 'Hellclap': '作響的地獄', 'Blastbark': '爆裂的吠叫',
'Lycander\'s Aim': '雷山德的指標', 'Lycander\'s Flank': '雷山德的側腹', 'Stoneraven': '石烏鴉', 'Blood Raven\'s Charge': '血鳥的襲擊',
'Torch of Iro': '衣洛的火炬', 'Maelstrom': '漩渦', 'Gravenspine': '墓穴之脊', 'Ume\'s Lament': '烏米的慟哭',
'Blackhand Key': '黑手之鑰', 'Homunculus': '侏儒', 'Suicide Branch': '自殺支系', 'Arm of King Leoric': '李奧瑞克王的武器',
'Darkforce Spawn': '魔力肇生', 'Boneshade': '白骨陰影', 'Felloak': '兇猛橡樹', 'Knell Striker': '敲擊喪鐘者',
'Crushflange': '壓碎的凸邊', 'Bloodrise': '血昇', 'Rusthandle': '腐蝕的把手', 'The General\'s Tan Do Li Ga': '坦-杜-裡-嘎-將軍',
'Stormeye': '暴風眼', 'The Fetid Sprinkler': '惡臭散佈者', 'Astreon\'s Iron Ward': '愛斯特龍之鐵的保護區', 'The Redeemer': '懺悔者',
'Alma Negra': '阿爾瑪 尼格拉', 'Rixot\'s Keen': '瑞克撒特的輓歌', 'The Gnasher': '牙齒', 'Blood Crescent': '血紅新月',
'Shadowfang': '影之牙', 'Bladebone': '肩胛骨', 'Soulflay': '剝皮靈魂', 'The Chieftain': '族長', 'Kinemil\'s Awl': '金麥爾的錐子',
'Brainhew': '腦袋', 'Rakescar': '火鉤之傷', 'Humongous': '巨大無比', 'Arreat\'s Face': '亞瑞特的面容', 'The Scalper': '圓鑿',
'Lightsabre': '光之軍刀', 'Death Cleaver': '死亡之刀', 'Azurewrath': '青色忿怒', 'Demonhorn\'s Edge': '惡魔號角的邊緣',
'Halaberd\'s Reign': '海拉柏得的國度', 'Ravenlore': '烏鴉之王', 'Cerebus\' Bite': '地獄之吻', 'Spirit Keeper': '靈魂看守者',
'Bartuc\'s Cut-Throat': '巴特克的猛擊', 'Jade Talon': '碧玉爪', 'Twitchthroe': '抽動的掙扎', 'Iceblink': '冰雪眨眼',
'Rockfleece': '石之毛', 'Iron Pelt': '擲鐵', 'Skullder\'s Ire': '詩寇蒂的憤怒', 'Toothrow': '排齒', 'Leviathan': '海王利維亞桑',
'Howltusk': '怒號長牙', 'Crown of Thieves': '盜賊皇冠', 'Bverrit Keep': '貝弗提的紀念', 'The Ward': '囚房',
'Gerke\'s Sanctuary': '基爾克的聖堂', 'Radament\'s Sphere': '達羅門特之球體', 'Spirit Ward': '魂系結界', 'Medusa\'s Gaze': '梅杜莎的凝視',
'Frostburn': '霜燃', 'Hellmouth': '地獄之嘴', 'Steelrend': '碎鋼', 'Bladebuckle': '鋒利扣帶', 'Nosferatu\'s Coil': '吸血聖王之圈',
'Verdungo\'s Hearty Cord': '維爾登戈的心結', 'Tearhaunch': '淚之臀', 'Leadcrow': '引導烏鴉', 'Hellcast': '投擲地獄',
'Langer Briser': '蘭格 布里瑟', 'Buriza-Do Kyanon': '布里撒-多 凱南', 'Hellrack': '地獄拷問', 'The Dragon Chang': '張龍',
'The Tannr Gorerod': '坦之血杖', 'Spire of Honor': '榮耀的尖塔', 'Steel Pillar': '鐵柱', 'Arioc\'s Needle': '愛理歐克之針',
'Gargoyle\'s Bite': '石像鬼之噬', 'Dimoak\'s Hew': '迪馬克之劈砍', 'Woestave': '煩惱詩集', 'The Meat Scraper': '刮肉者',
'Husoldal Evo': '胡索丹 依弗', 'Bonehew': '破骨', 'Spectral Shard': '妖怪碎片', 'Spineripper': '裂脊者',
'Stormspike': '暴風尖刺', 'Deathbit': '死亡碎片', 'Ghostflame': '鬼火焰',
// 底材（Belt、Boots、Blade 也是介面常用字，保留「腰帶／靴子／刀刃」）
'Slayer Guard': '殺手防護面甲', 'Fury Visor': '暴怒面甲', 'Conqueror Crown': '征服者皇冠面甲', 'Totemic Mask': '圖騰面具狼盔',
'Blood Spirit': '血腥之靈', 'Dusk Shroud': '灰暮壽衣', 'Ceremonial Javelin': '祭典之標槍', 'Matriarchal Javelin': '女族長之標槍',
'Ceremonial Pike': '祭典之長矛', 'Grand Scepter': '雄偉權杖', 'War Scepter': '巨戰權杖', 'Divine Scepter': '神屬權杖',
'Morning Star': '流星鎚', 'Devil Star': '惡魔流星錘', 'Greater Talons': '巨鷹爪', 'Battle Cestus': '鬥腰刀', 'Feral Claws': '猛禽爪',
'Hierophant Trophy': '祭司印記', 'Sacred Rondache': '神聖輕圓盾', 'Spiderweb Sash': '蛛網腰帶', 'Light Crossbow': '輕十字弓',
'Heavy Crossbow': '重十字弓', 'Winged Harpoon': '翼魚叉', 'Stiletto': '小劍', 'Bone Knife': '骸骨小刀', 'Legend Spike': '傳說尖刺',
'Lochaber Axe': '羅佳伯斧', 'Studded Leather': '鑲嵌甲', 'Field Plate': '實戰鎧甲', 'Wire Fleece': '線羊毛皮甲',
'Balrog Skin': '炎魔皮板甲', 'Grand Crown': '巨皇冠', 'Pavise': '大盾', 'Aegis': '塔盾', 'War Gauntlets': '巨戰手套',
'Myrmidon Greaves': '極速靴'
};
const d2zhKnown = new Set([...Object.keys(labels), ...[...names, ...extraNames, ...vocabulary].map(e => e[0])].map(s => s.toLowerCase()));
for (const [en, zh] of Object.entries(D2ZH_EXTRA.labels)) if (!d2zhKnown.has(en.toLowerCase())) labels[en] = zh;
const d2zhPatterns = D2ZH_EXTRA.patterns.map(([en, zh]) => [new RegExp('^' + en.split(/(\{#?\})/).map(part =>
part === '{}' ? '(.+?)' : part === '{#}' ? '([-+]?\\d[\\d.,]*)' : part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('') + '$', 'i'), zh]);
window.__d2zhKnown = s => lookup.has(String(s).toLowerCase());
// 技能名稱放在句子裡時不要帶「（魔法）」這類元素標記（例如「+3 骨矛（限死靈法師）」「牙每級 +7%」）
function d2zhPlain(value) {
// 逗號列出的多個技能（「+8% per level of Fire Bolt, Meteor and 2 more」）：每個名稱各自去掉標記
if (value.includes(', ') && value.split(', ').every(p => D2ZH_EXTRA.skillTags[p.trim()])) return value.split(', ').map(p => d2zhPlain(p.trim())).join('、');
const text = translate(value);
return D2ZH_EXTRA.skillTags[value] ? text.replace(/（[^）]*）$/, '') : text;
}
function d2zhPattern(source) {
for (const [re, zh] of d2zhPatterns) {
const m = re.exec(source);
if (m) return zh.replace(/\{(\d)\}/g, (_, i) => d2zhPlain(m[i]));
}
const m = /^(.+) (of (?:the )?[A-Z][\w']*(?: [A-Z][\w']*)?)$/.exec(source);
if (m && lookup.has(m[2].toLowerCase())) return translate(m[2]) + translate(m[1]);
return null;
}
const lookup = new Map();
for (const [english, chinese] of [...Object.entries(labels), ...names, ...extraNames]) {
lookup.set(english.toLowerCase(), chinese);
}
const wordMap = new Map();
const wordEntries = [...Object.entries(labels), ...extraNames, ...names, ...vocabulary];
for (const [english, chinese] of wordEntries) wordMap.set(english.toLowerCase(), chinese);
// 易牙居譯名放最後蓋過舊譯名；句子裡的單字（stun、charge、thorns…）若是一般用語就維持原本的翻譯
const genericWords = new Set(vocabulary.map(([english]) => english.toLowerCase()));
const iyaFlat = new Map(Object.entries(iyaNames).map(([english, chinese]) => [english.toLowerCase(), chinese]));
for (const key of [...lookup.keys()]) {
// 舊表裡分行的寫法（例如 "bow and\ncrossbow\nskills"）也換成易牙居譯名
if (/\n/.test(key) && iyaFlat.has(key.replace(/\s+/g, ' '))) lookup.delete(key);
}
for (const [english, chinese] of Object.entries(iyaNames)) {
lookup.set(english.toLowerCase(), chinese);
if (!genericWords.has(english.toLowerCase())) { wordMap.set(english.toLowerCase(), chinese); wordEntries.push([english, chinese]); }
}
for (const [english, chinese] of [...Object.entries(D2ZH_FIX.words), ...Object.entries(D2ZH_FIX.iya)]) {
lookup.set(english.toLowerCase(), chinese);
if (genericWords.has(english.toLowerCase())) continue;
wordMap.set(english.toLowerCase(), chinese);
wordEntries.push([english, chinese]);
}
// 改版後的字串（D2ZH_FIX.text）：完全相同的直接查，含 # 或 * 的照遊戲韓文翻譯的規則比對
const fixNorm = s => String(s).replace(/\s+/g, ' ').trim().toLowerCase();
const fixExact = new Map(), fixWild = [];
for (const [english, chinese] of Object.entries(D2ZH_FIX.text)) {
if (!/[#*]/.test(english)) { fixExact.set(fixNorm(english), chinese); continue; }
const parts = english.split(/([#*])/);
fixWild.push({
re: new RegExp('^' + parts.map(p => p === '*' ? '(.*?)' : p === '#' ? '([-+]?\\d[\\d.,]*)'
: p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/ /g, '\\s+')).join('') + '$', 'is'),
kinds: parts.filter(p => p === '#' || p === '*'),
fixed: english.replace(/[#*\s]/g, '').length,
chinese
});
}
fixWild.sort((a, b) => b.fixed - a.fixed);
for (const [english, chinese] of Object.entries(D2ZH_FIX.iya)) fixExact.set(fixNorm(english), chinese);
function d2zhFix(source, depth = 0) {
const text = source.trim();
const exact = fixExact.get(fixNorm(text));
if (exact !== undefined) return exact;
// 稀有物品名稱：字典裡已有同名的（例如獨特物品 Rune Master）照字典
const rare = /^(\S+) (\S+)$/.exec(text);
if (rare && D2ZH_FIX.rare.prefix[rare[1]] && D2ZH_FIX.rare.suffix[rare[2]] && !lookup.has(text.toLowerCase())) return D2ZH_FIX.rare.prefix[rare[1]] + D2ZH_FIX.rare.suffix[rare[2]];
for (const w of fixWild) {
const m = w.re.exec(text);
if (!m) continue;
return w.chinese.replace(/\{(\d+)\}/g, (_, i) => {
const v = (m[+i + 1] || '').trim();
return w.kinds[i] === '#' ? v : d2zhPlain(v.replace(/^the\s+/i, ''));
});
}
// 名稱後面接標點（進化條件逐項列出：「max 3/8,」「Pierce,」）：照名稱翻，不要落到一般單字（pierce＝穿透）
const tailMark = /^(.+?)\s*([,:;])$/s.exec(text);
if (tailMark && (lookup.has(tailMark[1].toLowerCase()) || fixExact.has(fixNorm(tailMark[1])))) return d2zhPlain(tailMark[1]) + ({ ',': '、', ':': '：', ';': '；' })[tailMark[2]];
if (depth > 2) return null;
// 遊戲常把好幾句用「 · 」或「 - 」接起來，或在前後加數字（例如 "-12% to Enemy Cold Resistance"）
for (const sep of [' · ', ' - ']) {
if (!text.includes(sep)) continue;
const pieces = text.split(sep).map(p => p.trim()), done = pieces.map(p => d2zhFix(p, depth + 1));
if (done.some(p => p !== null)) return pieces.map((p, i) => done[i] ?? translate(p)).join(sep);
}
// 用逗號列出的名稱（例如解壓縮進度「Units, floor tiles」）：每一段都認得才翻
if (text.includes(', ')) {
const whole = s => { const t = translate(s); return /[㐀-鿿]/u.test(t) && !/[A-Za-z]{3,}/.test(t) ? t : null; };
const pieces = text.split(', '), done = pieces.map(p => d2zhFix(p, depth + 1) ?? whole(p));
if (done.every(p => p !== null)) return done.join('、');
}
const lead = /^([-+]?\d[\d.,]*%?)\s+(.+)$/s.exec(text);
if (lead) { const rest = d2zhFix(lead[2], depth + 1); if (rest !== null) return lead[1] + ' ' + rest; }
return null;
}
window.__d2zhKnown = s => lookup.has(String(s).toLowerCase()) || fixExact.has(fixNorm(s));
window.__d2zhHead = s => /^(Into .+:|.+ into .+, needs:|Evolves from .+:|A chest now evolves .+)$/s.test(s) && d2zhFix(s) !== null;
// 有分層的地圖區域名稱（字典裡有 "Catacombs Level 1" 就記下 "catacombs"）
const d2zhAreas = new Set([...lookup.keys()].map(k => /^(.+) level \d+$/.exec(k)?.[1]).filter(Boolean));
const wordAlternatives = wordEntries
.map(([english]) => english)
.sort((a, b) => b.length - a.length)
.map(english => english.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
.join('|');
const wordPattern = new RegExp(`(^|[^A-Za-z])(${wordAlternatives})(?=$|[^A-Za-z])`, 'gi');
const translatedTexts = new Map();
// 角色畫面快速施法率說明：「Your cap: 60% shorter …」的上限（已含恰西等級）記下來，下一行超過上限時顯示
let d2zhFcrCap = '';
function translate(value) {
const source = String(value ?? '');
if (language !== 'zh-Hant' || !source) return source;
const fcrCap = /^Your cap: ([\d.]+%) shorter/.exec(source);
if (fcrCap) d2zhFcrCap = fcrCap[1];
const fcrPast = /^\+(\d+)% of it is past your cap and does nothing now$/.exec(source.trim());
if (fcrPast && d2zhFcrCap) return `其中 +${fcrPast[1]}% 超過上限，目前已達 ${d2zhFcrCap} 上限`;
// 任務欄「破碎之光」的說明：接上下一塊碎片在哪裡出現（照存檔的塊數，不存進快取）
if (source.trim() === 'A shard of light found. Others lie scattered across the world, off the beaten path.') {
return '找到一塊光之碎片。' + d2shardNextText(d2shardCount(), true);   // 任務欄的框不大，用精簡版
}
// 打洞失敗：照剛被檢查的物品說出原因（不存進快取）
const socketReason = window.__d2zhSocketText ? window.__d2zhSocketText(source) : null;
if (socketReason) return socketReason;
if (translatedTexts.has(source)) return translatedTexts.get(source);
const fixed = /[A-Za-z]/.test(source) ? d2zhFix(source) : null;
if (fixed !== null) { translatedTexts.set(source, fixed); return fixed; }
// 「骨矛 Level 3」這種技能等級：翻成「骨矛 升級至等級 3」；地圖區域（地下墓穴 Level 1）仍是「第 N 層」
const skillLevel = /^(.+?)\s+Level\s+(\d+)$/i.exec(source.trim());
if (skillLevel && !lookup.has(source.trim().toLowerCase()) && !d2zhAreas.has(skillLevel[1].toLowerCase())) {
const result = (lookup.get(skillLevel[1].toLowerCase()) || translate(skillLevel[1])) + ' 升級至等級 ' + skillLevel[2];
translatedTexts.set(source, result);
return result;
}
const direct = lookup.get(source.toLowerCase());
if (direct) return D2ZH_EXTRA.skillTags[source] ? direct + '（' + D2ZH_EXTRA.skillTags[source] + '）' : direct;
// 遊戲把短標籤拆成兩行（例如技能樹分頁 "Combat\nSkills"）：先當成一整句查
if (/\s/.test(source.trim())) {
const flat = lookup.get(source.replace(/\s+/g, ' ').trim().toLowerCase());
if (flat) return flat;
}
// 好幾行接在一起的說明（例如恰西屬性的「每級起始敏捷 +5\n+1% …\n+3% damage with a bow or claws」）：整段查不到就一行一行翻
if (source.includes('\n')) {
const result = source.split('\n').map(line => translate(line)).join('\n');
translatedTexts.set(source, result);
return result;
}
const d2zhViaPattern = d2zhPattern(source);
if (d2zhViaPattern !== null) { translatedTexts.set(source, d2zhViaPattern); return d2zhViaPattern; }
const result = source.replace(wordPattern, (_match, lead, word) => lead + wordMap.get(word.toLowerCase())).replace(/([㐀-鿿])\s+(?=[㐀-鿿])/gu, '$1');
if (translatedTexts.size >= 12000) translatedTexts.delete(translatedTexts.keys().next().value);
translatedTexts.set(source, result);
return result;
}
function shouldUseLocalFont(value) {
return language === 'zh-Hant' && /[\u3400-\u9fff]/u.test(translate(value));
}
function cacheLanguage(value) {
const source = String(value ?? '');
return language === 'zh-Hant' && translate(source) !== source ? language : 'en';
}
function colorValue(value) {
if (Array.isArray(value) && value.length >= 3) {
return `rgb(${Math.max(0, Math.min(255, value[0]))}, ${Math.max(0, Math.min(255, value[1]))}, ${Math.max(0, Math.min(255, value[2]))})`;
}
return typeof value === 'string' ? value : '#e8dfcc';
}
function wrapLine(context, text, maxWidth) {
if (!maxWidth || context.measureText(text).width <= maxWidth) return [text];
const result = [];
for (const sourceLine of text.split('\n')) {
const tokens = sourceLine.includes(' ') ? sourceLine.split(/(?<=\s)/u) : Array.from(sourceLine);
let line = '';
for (const token of tokens) {
const next = line + token;
if (line && context.measureText(next).width > maxWidth) {
result.push(line.trimEnd());
line = token.trimStart();
if (context.measureText(line).width > maxWidth) {
let part = '';
for (const char of Array.from(line)) {
if (part && context.measureText(part + char).width > maxWidth) {
result.push(part);
part = char;
} else part += char;
}
line = part;
}
} else line = next;
}
if (line || !sourceLine) result.push(line.trimEnd());
}
return result;
}
function renderBitmapText(bitmapFont, source, options) {
options = options || {};
const text = translate(source);
const size = Math.max(10, Math.round(Number(bitmapFont?.info?.height || bitmapFont?.lineHeight || 16)));
const lineHeight = Math.max(size + 2, Math.round(Number(bitmapFont?.lineHeight || size * 1.24)));
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
if (!context) return canvas;
context.font = `${size}px ${FONT_STACK}`;
context.textBaseline = 'middle';
const maxWidth = Number(options.maxWidth) > 0 ? Number(options.maxWidth) : 0;
const lines = text.split('\n').flatMap(line => wrapLine(context, line, maxWidth));
const widths = lines.map(line => context.measureText(line).width);
const shadow = options.shadow ? 2 : 0;
canvas.width = Math.max(1, Math.ceil(Math.max(0, ...widths)) + shadow);
canvas.height = Math.max(1, Math.ceil(size + (lines.length - 1) * lineHeight + shadow));
context.font = `${size}px ${FONT_STACK}`;
context.textBaseline = 'middle';
context.fillStyle = colorValue(options.color);
const align = options.align || 'center';
lines.forEach((line, index) => {
const width = context.measureText(line).width;
const x = align === 'left' ? 0 : align === 'right' ? canvas.width - width - shadow : (canvas.width - width - shadow) / 2;
const y = size / 2 + index * lineHeight;
if (options.shadow) {
context.fillStyle = '#000';
context.fillText(line, x + 1, y + 1);
context.fillStyle = colorValue(options.color);
}
context.fillText(line, x, y, maxWidth || undefined);
});
canvas.className = 'd2-text d2-local-font';
canvas.setAttribute('aria-label', text);
return canvas;
}
let language = 'zh-Hant';
try {
// 'en' 是「不翻譯、照遊戲原文」：現在只有選韓文才會用到（存成 'ko'，開頭已確認遊戲真的是韓文）；舊版存的 'en' 回到繁中
const saved = localStorage.getItem(STORAGE_KEY);
if (saved === 'ko' && D2ZH_AUTO) language = 'en';
else if (saved === 'en') localStorage.setItem(STORAGE_KEY, language);
} catch (_) { /* Storage can be disabled; Traditional Chinese remains the default. */ }
const textRecords = new WeakMap();
const attributeRecords = new WeakMap();
let switcher;
function shouldSkipText(node) {
return !node.parentElement || !!node.parentElement.closest('#d2-language-switch, .d2pad-key, .d2zh-reply-body');   // 回報內容是作者親自寫的，不翻譯
}
function processTextNode(node) {
if (shouldSkipText(node)) return;
const current = node.nodeValue;
let record = textRecords.get(node);
if (!record) {
record = { source: current, last: null };
textRecords.set(node, record);
} else if (current !== record.last) {
record.source = current;
}
const translated = translate(record.source);
record.last = translated;
if (node.nodeValue !== translated) node.nodeValue = translated;
}
function processAttributes(element) {
if (element.id === 'd2-language-switch' || element.closest?.('#d2-language-switch')) return;
const keys = ['title', 'aria-label', 'placeholder', 'alt'];
let records = attributeRecords.get(element);
if (!records) {
records = new Map();
attributeRecords.set(element, records);
}
for (const key of keys) {
if (!element.hasAttribute(key)) continue;
const current = element.getAttribute(key);
let record = records.get(key);
if (!record) record = { source: current, last: null };
else if (current !== record.last) record.source = current;
const next = translate(record.source);
record.last = next;
records.set(key, record);
if (current !== next) element.setAttribute(key, next);
}
}
function scan(root) {
if (!root) return;
if (root.nodeType === Node.TEXT_NODE) {
processTextNode(root);
return;
}
if (root.nodeType === Node.ELEMENT_NODE) processAttributes(root);
const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
let node;
while ((node = walker.nextNode())) processTextNode(node);
if (root.querySelectorAll) root.querySelectorAll('*').forEach(processAttributes);
}
function applyLanguage() {
document.documentElement.lang = language === 'zh-Hant' ? 'zh-Hant' : 'ko';
if (document.body) {
document.body.classList.toggle('d2zh-hant', language === 'zh-Hant');
scan(document.body);
}
if (switcher) {
switcher.querySelectorAll('button[data-language]').forEach(button => {
const active = button.dataset.language === (language === 'zh-Hant' ? 'zh-Hant' : 'ko');
button.setAttribute('aria-pressed', String(active));
button.classList.toggle('active', active);
});
}
window.dispatchEvent(new CustomEvent('d2-language-changed', { detail: { language } }));
}
// 切換都要重新載入，遊戲只在開頁時載入韓文字串表
const setItemRaw = window.Storage ? Storage.prototype.setItem : null;
function setLanguage(next) {
if (next !== 'ko' && next !== 'zh-Hant') return;
if (next === (language === 'zh-Hant' ? 'zh-Hant' : 'ko')) return;
const desk = window.__D2ZH_DESKTOP;
if (next === 'ko' && !confirm('要換成遊戲原本的韓文嗎？\n\n換回繁體中文的方法：' + (desk || window.__D2ZH_LOCAL ? '到「選項」選單按語言的「繁體中文」。' : '再點一次書籤。'))) return;
try {
setItemRaw.call(localStorage, STORAGE_KEY, next);
setItemRaw.call(localStorage, 'd2s:lang', next === 'ko' ? 'ko' : 'en');
} catch (_) { return; }
location.reload();
}
// 遊戲自己的語言選項：繁中時擋下來（遊戲存不了就不會切換、也不會重新載入），玩家不會再不小心變成韓文；
// 韓文時選回英文就是要回繁中
if (setItemRaw) Storage.prototype.setItem = function (key, value) {
if (this === localStorage && key === 'd2s:lang') {
if (language === 'zh-Hant') throw new Error('d2zh: language is fixed');
if (value !== 'ko') setItemRaw.call(this, STORAGE_KEY, 'zh-Hant');
}
return setItemRaw.call(this, key, value);
};
function addSwitcher() {
if (!document.body || document.getElementById('d2-language-switch')) return;
const style = document.createElement('style');
style.textContent = `
:root { --d2-local-fonts: ${FONT_STACK}; }
body.d2zh-hant button, body.d2zh-hant .overlay, body.d2zh-hant .hint,
body.d2zh-hant .legal, body.d2zh-hant #hud, body.d2zh-hant #touch,
body.d2zh-hant #character, body.d2zh-hant #tooltip, body.d2zh-hant .panel {
font-family: var(--d2-local-fonts) !important;
}
#d2-language-switch {
position: fixed; z-index: 2147483647;
top: calc(8px + env(safe-area-inset-top, 0px));
right: calc(10px + env(safe-area-inset-right, 0px));
display: flex; gap: 4px; padding: 0;
border: 0; background: transparent;
font: 12px/1.1 ${FONT_STACK}; pointer-events: auto;
}
#d2-language-switch button {
min-height: 28px; min-width: 76px; padding: 4px 10px;
font: inherit; letter-spacing: .01em;
}
#d2-language-switch button.active { color: #f0d896; font-weight: 700; }
#d2-language-switch button:focus-visible { outline: 2px solid #f0d896; outline-offset: 1px; }
`;
document.head.appendChild(style);
switcher = document.createElement('div');
switcher.id = 'd2-language-switch';
switcher.setAttribute('role', 'group');
switcher.setAttribute('aria-label', 'Language / 語言');
for (const [locale, title] of [['zh-Hant', '繁體中文'], ['ko', '韓文']]) {
const button = document.createElement('button');
button.type = 'button';
button.dataset.language = locale;
button.textContent = title;
button.addEventListener('click', event => {
event.preventDefault();
event.stopPropagation();
setLanguage(locale);
});
switcher.appendChild(button);
}
document.body.appendChild(switcher);
window.addEventListener('pointerdown', event => {
if (event.target instanceof Element && event.target.closest('#d2-language-switch')) event.stopImmediatePropagation();
}, true);
applyLanguage();
new MutationObserver(records => {
for (const record of records) {
if (record.type === 'characterData') processTextNode(record.target);
else {
if (record.target.nodeType === Node.ELEMENT_NODE) processAttributes(record.target);
record.addedNodes.forEach(node => scan(node));
}
}
}).observe(document.body, { subtree: true, childList: true, characterData: true });
}
window.D2I18N = {
get active() { return language === 'zh-Hant'; },
get language() { return language; },
translate,
shouldUseLocalFont,
cacheLanguage,
renderBitmapText,
setLanguage
};
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addSwitcher, { once: true });
else addSwitcher();
})();
d2edInstall();
// ====== 遊戲手把（只偵測連線） ======
// 遊戲已內建手把操作，按鍵配置與震動請在遊戲「選項 → 手把」調整；書籤不再模擬按鍵，只顯示連線狀態：
// 偵測到手把時在畫面上方提示，遊戲「選項」選單出現 🎮 狀態按鈕，手把斷線時自動跳出提醒。
function d2padInstall() {
const style = document.createElement('style');
style.textContent = `#d2pad-toast { position: fixed; top: 14px; left: 50%; transform: translateX(-50%); z-index: 2147483647; padding: 6px 14px;
border: 1px solid #8f743e; border-radius: 6px; background: rgba(10,8,6,.94); color: #f3e3b0;
font: 14px/1.5 "Microsoft JhengHei", system-ui, sans-serif; pointer-events: none; transition: opacity .4s; }`;
document.head.append(style);
function toast(text) {
document.getElementById('d2pad-toast')?.remove();
const el = document.createElement('div');
el.id = 'd2pad-toast'; el.textContent = text;
document.body.append(el);
setTimeout(() => { el.style.opacity = '0'; }, 2200);
setTimeout(() => el.remove(), 2800);
}
const find = () => [...(navigator.getGamepads ? navigator.getGamepads() : [])].find(p => p && p.connected) || null;
const padCheck = d2padCheck(toast, find);
// 腰帶按鍵：有手把時在腰帶 1～4 格左上角標出遊戲綁定的手把按鍵（讀遊戲的手把設定，玩家在遊戲裡改綁也會跟著變）
const BELT_DEFAULT = [14, 12, 15, 13]; // 遊戲預設：十字鍵 左／上／右／下
const PAD_NAMES = {
xbox: ['A', 'B', 'X', 'Y', 'LB', 'RB', 'LT', 'RT', 'View', 'Menu', 'LS', 'RS', '↑', '↓', '←', '→'],
playstation: ['✕', '○', '□', '△', 'L1', 'R1', 'L2', 'R2', 'Create', 'Options', 'L3', 'R3', '↑', '↓', '←', '→'],
switch: ['B', 'A', 'Y', 'X', 'L', 'R', 'ZL', 'ZR', '−', '+', 'LS', 'RS', '↑', '↓', '←', '→']
};
const padKind = id => /054c|playstation|dualshock|dualsense/i.test(id) ? 'playstation' : /057e|nintendo|pro controller|joy-con/i.test(id) ? 'switch' : 'xbox';
function beltButtons() {
let saved = null;
try { saved = JSON.parse(localStorage.getItem('d2s:pad') || 'null'); } catch (_) { /* 沒有設定就用預設 */ }
return BELT_DEFAULT.map((d, i) => {
const v = saved && saved.bindings && saved.bindings['potion' + (i + 1)];
return Number.isInteger(v) && v >= 0 && v < 16 ? v : d;
});
}
style.textContent += `#belt-slots .d2pad-key { position: absolute; left: 1px; top: 0; z-index: 2; pointer-events: none;
font: bold 10px/1.1 Arial, sans-serif; color: #f3e3b0; text-shadow: -1px 0 #000, 1px 0 #000, 0 -1px #000, 0 1px #000, 0 0 3px #000; }`;
let beltAt = 0, beltSig = '';
function updateBelt(pad, now) {
if (now - beltAt < 300) return;
beltAt = now;
const slots = document.querySelectorAll('#belt-slots .belt-slot');
const names = pad ? PAD_NAMES[padKind(pad.id)] : null;
const keys = names ? beltButtons().map(b => names[b]) : [];
const sig = slots.length + '|' + keys.join(',');
if (sig === beltSig && [...slots].every(s => !!s.querySelector('.d2pad-key') === !!names)) return;
beltSig = sig;
slots.forEach((slot, i) => {
let el = slot.querySelector('.d2pad-key');
if (!names || !keys[i]) { el?.remove(); return; }
if (!el) { el = document.createElement('span'); el.className = 'd2pad-key'; slot.append(el); }
el.textContent = keys[i];
});
}
let announced = false, prev = [];
(function poll(now) {
requestAnimationFrame(poll);
const pad = find();
padCheck.update(pad);
updateBelt(pad, now || 0);
if (!pad) { prev = []; return; }
if (!announced) { announced = true; toast('已偵測到遊戲手把'); }
// 面板開著時按 A 或 B 關閉面板
const hit = i => !!(pad.buttons[i] && pad.buttons[i].pressed) && !prev[i];
if (padCheck.isOpen() && (hit(0) || hit(1))) padCheck.close();
prev = pad.buttons.map(b => b.pressed);
})();
addEventListener('gamepadconnected', e => toast('已連接遊戲手把：' + e.gamepad.id.replace(/\s*\(.*$/, '')));
addEventListener('gamepaddisconnected', () => { if (!find()) padCheck.open(true); });
}
// 手把狀態按鈕：在遊戲「選項」選單（書籤修改旁）出現 🎮，綠點＝已連接、紅點＝未連接。
// 點開檢查面板；沒連接時提示重新連接，並持續等待，偵測到就顯示成功。
function d2padCheck(toast, find) {
const css = document.createElement('style');
css.textContent = `#d2pad-btn { position: fixed; z-index: 2147483646; display: none; align-items: center; gap: 6px; min-height: 28px; min-width: 84px; padding: 4px 14px;
justify-content: center; font: bold 13px/1.2 "Microsoft JhengHei", system-ui, sans-serif; }
#d2pad-btn i { box-shadow: 0 0 0 1px #000; }
#d2pad-btn i { width: 9px; height: 9px; border-radius: 50%; background: #e5534b; }
#d2pad-btn.on i { background: #6fd18b; }
#d2pad-dlg { position: fixed; inset: 0; z-index: 2147483647; display: grid; place-items: center; background: rgba(0,0,0,.6); }
#d2pad-dlg > div { width: min(360px, calc(100vw - 32px)); padding: 18px; border: 1px solid #8f743e; border-radius: 10px;
background: #17120b; color: #e8e2d0; font: 14px/1.6 "Microsoft JhengHei", system-ui, sans-serif; box-shadow: 0 6px 24px #000c; }
#d2pad-dlg h3 { margin: 0 0 8px; color: #c7a45f; font-size: 18px; }
#d2pad-dlg .st { padding: 8px 10px; border-radius: 6px; font-weight: bold; }
#d2pad-dlg .st.on { background: #1e3a24; color: #a8efb8; }
#d2pad-dlg .st.off { background: #4a1e18; color: #ffc4b8; }
#d2pad-dlg ol { margin: 10px 0 0; padding-left: 20px; color: #bfb39a; }
#d2pad-dlg .note { margin: 12px 0 0; padding-top: 10px; border-top: 1px solid #3a2c18; color: #bfb39a; font-size: 13px; }
#d2pad-dlg .row { display: flex; gap: 8px; justify-content: flex-end; margin-top: 14px; }
#d2pad-dlg button { padding: 5px 14px; border: 1px solid #8f743e; border-radius: 4px; font: inherit; cursor: pointer; background: #2c2014; color: #f3e3b0; }
#d2pad-dlg button.main { background: #c7a45f; color: #17120b; font-weight: bold; }`;
document.head.append(css);
const btn = document.createElement('button');
btn.id = 'd2pad-btn'; btn.type = 'button'; btn.title = '檢查遊戲手把連線';
btn.innerHTML = '<i></i><span>🎮 手把</span>';
document.body.append(btn);
let dlg = null, current = null, lost = false;
const name = pad => pad.id.replace(/\s*\(.*$/, '') || '遊戲手把';
function render() {
if (!dlg) return;
const st = dlg.querySelector('.st');
st.className = 'st ' + (current ? 'on' : 'off');
st.textContent = current ? '✔ 已連接：' + name(current) : (lost ? '✖ 手把已斷線，請重新連接' : '✖ 沒有偵測到手把，請重新連接');
dlg.querySelector('ol').hidden = !!current;
}
function close() { if (dlg) dlg.remove(); dlg = null; }
function open(disconnected) {
close();
lost = !!disconnected;
current = find();
dlg = document.createElement('div');
dlg.id = 'd2pad-dlg';
dlg.innerHTML = `<div><h3>🎮 遊戲手把</h3><div class="st"></div>
<ol><li>用 USB 線或藍牙連接手把（手機請到「設定 → 藍牙」配對）。</li>
<li>連好後<b>按一下手把上的任何鍵</b>，瀏覽器才會讓網頁讀到手把。</li>
<li>偵測到之後這裡會自動變成「已連接」。</li></ol>
<p class="note">按鍵配置、搖桿死區和震動開關，請到遊戲的「選項 → 手把」調整。</p>
<div class="row"><button type="button" data-a="retry">重新偵測</button><button type="button" class="main" data-a="close">關閉</button></div></div>`;
dlg.addEventListener('click', e => {
const b = e.target.closest('button'), a = b && b.dataset.a;
if (a === 'close' || e.target === dlg) close();
else if (a === 'retry') { current = find(); render(); }
});
document.body.append(dlg);
render();
}
// 遊戲的畫布會搶滑鼠事件，按鈕與面板上的操作不要傳給遊戲。
for (const type of ['pointerdown', 'pointerup', 'mousedown', 'mouseup', 'touchstart', 'touchend']) {
window.addEventListener(type, e => {
if (e.target instanceof Element && (e.target.closest('#d2pad-btn') || e.target.closest('#d2pad-dlg'))) e.stopImmediatePropagation();
}, true);
}
btn.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); open(false); });
(function place() {
const ed = document.getElementById('d2ed-btn');
const show = ed && ed.style.display === 'block';
btn.style.display = show ? 'flex' : 'none';   // 位置由 d2edLayoutButtons 跟書籤修改一起排
requestAnimationFrame(place);
})();
return {
isOpen: () => !!dlg,
close,
open,
update(pad) {
const was = !!current;
current = pad || null;
btn.classList.toggle('on', !!pad);
if (pad) lost = false;
if (was !== !!pad) { render(); if (pad && dlg) toast('已連接遊戲手把：' + name(pad)); }
}
};
}
d2padInstall();
// ====== 技能進化提示補全 ======
// 遊戲規則：技能練滿＋持有某個被動（＋角色等級）→ 寶箱把技能進化成新技能（遊戲自己的設定，build 20261020）。
// 遊戲只在「技能」那一邊一定寫出要哪個被動；「被動」那一邊：
//   ・升級卡片只寫一個技能（同職業幾個技能共用一個被動時，其他的不提）
//   ・技能樹的被動說明框完全不提
// 還沒學的技能，技能樹說明框也不提要搭配哪個被動。這裡在卡片和說明框最後補一行。
function d2evoInstall() {
const EVO = {
amazon: [["Cold Arrow", "Dodge", "Ice Arrow"], ["Exploding Arrow", "Decoy", "Immolation Arrow"], ["Multiple Shot", "Critical Strike", "Strafe"], ["Guided Arrow", "Pierce", "Widowmaker"], ["Jab", "Evade", "Fend"], ["Power Strike", "Inner Sight", "Charged Strike"], ["Poison Javelin", "Avoid", "Plague Javelin"], ["Ice Arrow", "Slow Missiles", "Freezing Arrow"], ["Lightning Bolt", "Penetrate", "Lightning Fury"], ["Charged Strike", "Penetrate", "Lightning Strike"]],
sorceress: [["Fire Bolt", "Warmth", "Fire Ball"], ["Charged Bolt", "Energy Shield", "Chain Lightning"], ["Nova", "Lightning Mastery", "Thunder Storm"], ["Fire Ball", "Enchant", "Meteor"], ["Ice Bolt", "Cold Mastery", "Frozen Orb"], ["Shiver Armor", "Cold Mastery", "Chilling Armor"], ["Ice Blast", "Faster Cast Rate", "Glacial Spike"], ["Glacial Spike", "Replenish Life", "Blizzard"], ["Blaze", "Faster Run/Walk", "Fire Wall"], ["Frozen Armor", "Vitality", "Shiver Armor"]],
necromancer: [["Poison Dagger", "Faster Cast Rate", "Poison Explosion"], ["Amplify Damage", "Faster Run/Walk", "Decrepify"], ["Confuse", "Vitality", "Attract"], ["Clay Golem", "Golem Mastery", "Blood Golem"], ["Iron Golem", "Golem Mastery", "Fire Golem"], ["Teeth", "Bone Wall", "Bone Spear"], ["Dim Vision", "Telekinesis", "Confuse"], ["Raise Skeleton", "Skeleton Mastery", "Revive"], ["Bone Spear", "Bone Armor", "Bone Spirit"], ["Poison Explosion", "Lower Resist", "Poison Nova"], ["Blood Golem", "Summon Resist", "Iron Golem"]],
assassin: [["Fire Blast", "Faster Cast Rate", "Wake of Fire"], ["Charged Bolt Sentry", "Faster Cast Rate", "Lightning Sentry"], ["Lightning Sentry", "Faster Cast Rate", "Death Sentry"], ["Dragon Talon", "Faster Run/Walk", "Dragon Claw"], ["Blade Fury", "Vitality", "Blade Shield"], ["Blade Sentinel", "Burst of Speed", "Blade Fury"], ["Dragon Tail", "Burst of Speed", "Dragon Flight"], ["Fists of Fire", "Claw Mastery", "Claws of Thunder"], ["Dragon Claw", "Claw Mastery", "Dragon Tail"], ["Psychic Hammer", "Fade", "Mind Blast"], ["Wake of Fire", "Fade", "Wake of Inferno"], ["Shadow Warrior", "Weapon Block", "Shadow Master"], ["Claws of Thunder", "Weapon Block", "Blades of Ice"], ["Tiger Strike", "Venom", "Phoenix Strike"]],
barbarian: [["Leap", "Faster Run/Walk", "Leap Attack"], ["Shout", "Vitality", "Battle Orders"], ["Double Swing", "Increased Speed", "Frenzy"], ["Bash", "Axe Mastery", "Concentrate"], ["Double Throw", "Throwing Mastery", "Lacerator"], ["Concentrate", "Iron Skin", "Berserk"], ["Battle Orders", "Find Item", "Battle Command"]],
druid: [["Fissure", "Faster Cast Rate", "Volcano"], ["Carrion Vine", "Faster Cast Rate", "Solar Creeper"], ["Twister", "Faster Run/Walk", "Tornado"], ["Summon Dire Wolf", "Vitality", "Summon Grizzly"], ["Poison Creeper", "Replenish Life", "Carrion Vine"], ["Heart of Wolverine", "Replenish Life", "Spirit of Barbs"], ["Firestorm", "Cyclone Armor", "Molten Boulder"], ["Tornado", "Cyclone Armor", "Hurricane"], ["Raven", "Ravenlore", "Summon Spirit Wolf"], ["Summon Spirit Wolf", "Ravenlore", "Summon Dire Wolf"], ["Werebear", "Lycanthropy", "Maul"], ["Maul", "Lycanthropy", "Shock Wave"], ["Oak Sage", "Spirit Keeper", "Heart of Wolverine"], ["Werewolf", "Feral Rage", "Fury"], ["Volcano", "Fire Claws", "Armageddon"]],
paladin: [["Blessed Hammer", "Concentration", "Zakarum's Hand"], ["Holy Bolt", "Holy Shock", "Fist of the Heavens"], ["Zeal", "Might", "Passion"], ["Charge", "Vigor", "Herald of Zakarum"], ["Holy Shield", "Defiance", "Exile"], ["Vengeance", "Conviction", "Rusthandle"], ["Smite", "Fanaticism", "Alma Negra"], ["Sacrifice", "Redemption", "Bloodrise"]]
};
const classOf = new Map(), passives = new Set();
for (const [cls, rows] of Object.entries(EVO)) for (const [skill, passive] of rows) { classOf.set(skill, cls); passives.add(passive); }
const zh = () => d2zhLang() === 'zh-Hant';
const name = s => zh() ? window.D2I18N.translate(s).replace(/（[^）]*）$/, '') : s;
// 卡片或說明框每一行的英文原文：中文模式下畫布的 textContent 會被翻成中文，所以用 D2ZH_STATE 記下的原文；分段的行把每段接起來
const original = c => { const st = D2ZH_STATE.get(c); return st ? (st.orig ?? st.src) : c.textContent; };
const lineTexts = box => [...box.children].filter(el => !el.classList.contains('d2zh-evo'))
.map(el => (el.tagName === 'CANVAS' ? [el] : [...el.querySelectorAll('canvas')]).map(original).join(' ').replace(/\s+/g, ' ').trim())
.filter(Boolean);
function rowsFor(passive, text) {
const all = Object.entries(EVO).flatMap(([cls, rows]) => rows.filter(r => r[1] === passive).map(r => [cls, ...r]));
let cls = window.__D2ED && D2ED.player && D2ED.player.cls;
if (!cls) { const seen = all.find(([, skill]) => text.includes(skill)); cls = seen && seen[0]; }   // 沒抓到人物：用卡片上已出現的技能判斷職業
return cls ? all.filter(r => r[0] === cls) : all;
}
function hintFor(box) {
const lines = lineTexts(box);
if (lines.length < 2) return null;
const [first, second] = lines[0].includes(' - ') ? lines[0].split(' - ') : [lines[0], lines[1]];
const text = lines.join(' ');
// 被動：升級卡片（New passive／Level a to b）或技能樹說明框（Level a / b、Required Level）
if (passives.has(first) && /^(New passive|Level \d+ (to|\/) \d+|Required Level:)/.test(second)) {
const rows = rowsFor(first, text);
const missing = rows.filter(([, skill, , into]) => !text.includes(`${skill} into ${into}`));
if (!missing.length) return null;
const also = missing.length < rows.length;   // 遊戲自己已經寫了其中一個
return zh()
? `此被動${also ? '也' : '可'}讓：${missing.map(([, s, , c]) => `${name(s)} → ${name(c)}`).join('、')}（技能練滿後由寶箱進化）`
: `${also ? 'Also evolves' : 'Evolves'}: ${missing.map(([, s, , c]) => `${s} → ${c}`).join(', ')} (skill at max, from a chest)`;
}
// 還沒學的技能（技能樹說明框）：遊戲沒寫要搭配哪個被動
if (classOf.has(first) && /^Required Level:/.test(second)) {
const row = EVO[classOf.get(first)].find(r => r[0] === first);
if (text.includes(`into ${row[2]}`)) return null;
return zh() ? `進化：練滿＋被動「${name(row[1])}」→ ${name(row[2])}` : `Evolves into ${row[2]}: at max, with ${row[1]}`;
}
return null;
}
function augment(box) {
const old = box.querySelector(':scope > .d2zh-evo');
let hint = null;
try { hint = hintFor(box); } catch (e) { console.warn('[D2 中文] 進化提示', e); }
if (!hint) { old?.remove(); return; }
if (old && old.textContent === hint) return;
const el = old || document.createElement('div');
el.className = 'd2zh-evo';
el.textContent = hint;
// 字的大小照這個框裡第一行字型畫布的高度
const ref = box.querySelector('canvas');
const h = ref ? ref.offsetHeight : 16;
// 不要把說明框撐寬：最寬只到框裡原本最寬的那一行，超過就換行
const widest = Math.max(200, ...[...box.children].filter(c => c !== el).map(c => c.offsetWidth));
el.style.cssText = `font: bold ${Math.max(11, Math.round(h * 0.8))}px ${D2ZH_FONT}; line-height: 1.35; color: #e0bd6a; max-width: ${widest}px; align-self: center;` +
' text-shadow: -1px 0 #000, 1px 0 #000, 0 -1px #000, 0 1px #000; margin-top: 2px; white-space: normal; text-align: center; pointer-events: none;';
if (!old) box.append(el);
}
const boxes = () => document.querySelectorAll('#hoverbox, .d2-choice > .lines');
let queued = false;
const run = () => { queued = false; boxes().forEach(augment); };
const schedule = () => { if (!queued) { queued = true; setTimeout(run, 0); } };
new MutationObserver(records => {
for (const r of records) {
if ([...r.addedNodes, ...r.removedNodes].every(n => n.nodeType === 1 && n.classList.contains('d2zh-evo'))) continue;
const t = r.target;
if (t.nodeType === 1 && (t.matches('#hoverbox, .d2-choice > .lines, .d2-choice') || t.closest('#hoverbox, .d2-choice'))) { schedule(); return; }
for (const n of r.addedNodes) if (n.nodeType === 1 && (n.matches('#hoverbox, .d2-choice') || n.querySelector?.('.d2-choice'))) { schedule(); return; }
}
}).observe(document.body, { subtree: true, childList: true });
window.addEventListener('d2-language-changed', schedule);
}
d2evoInstall();
// ====== 生命血球裡：可重生次數 ======
// 恰西賣的「復活」每級每輪多一次半血復活（最多 2 級）：遊戲把剩下的次數放在 player.revives，上限是存檔的 ranks.resurrect。
// 放在血球（#d2-life）的同一層、玻璃反光之上，位置每次照血球重算（直向手機血球會換位置）。
function d2revivesInstall() {
const el = document.createElement('div');
el.id = 'd2zh-revives';
el.style.cssText = `position: absolute; display: none; white-space: pre; text-align: center; line-height: 1.15; transform: translate(-50%, -50%); z-index: 1; pointer-events: none; font: bold 12px ${D2ZH_FONT}; color: #e8dfcc;` +
' text-shadow: -1px 0 #000, 1px 0 #000, 0 -1px #000, 0 1px #000, 1px 1px #000;';
let shown = '', bought = 0, readAt = -Infinity;
setInterval(() => {
const globe = document.getElementById('d2-life'), p = D2ED.player;
let text = '';
if (globe && p && typeof p.revives === 'number' && d2edInRun() && globe.offsetParent) {
// 存檔很大，不要每次都解析：幾秒讀一次就夠（只有在恰西買了才會變）
if (performance.now() - readAt > 5000) { bought = (d2edReadSave().ranks || {}).resurrect || 0; readAt = performance.now(); }
const max = Math.max(bought, p.revives);
if (max > 0) text = `${d2zhLang() === 'zh-Hant' ? '可重生次數' : 'Revives'}\n${p.revives}/${max}`;
}
if (!text) { if (shown) { el.style.display = 'none'; shown = ''; } return; }
if (el.parentNode !== globe.parentNode) globe.parentNode.append(el);
if (text !== shown) { el.textContent = text; shown = text; }
el.style.display = '';
el.style.left = `${globe.offsetLeft + globe.offsetWidth / 2}px`;
el.style.top = `${globe.offsetTop + globe.offsetHeight / 2}px`;
el.style.color = p.revives > 0 ? '#e8dfcc' : '#ff5c5c';
}, 250);
}
d2revivesInstall();
// ====== 說明框不要超出視窗 ======
// 遊戲在說明框出現時，用當下的高度決定位置（框在圖示上方時是「底邊對齊」）；之後中文合併字詞、補上「進化：…」那一行，
// 框變高就往上長，最上面的技能名稱被視窗切掉。框的大小或位置一變，就把它推回視窗裡。
function d2fitInstall() {
const MARGIN = 4;
const own = new WeakMap();   // 每個框：遊戲自己設的位置（base）和這裡改過的值（mine）
const fit = box => {
if (box.classList.contains('hidden') || !box.style.top) return;
const o = own.get(box) || {};
if (box.style.top !== o.mine) o.base = parseFloat(box.style.top);   // 遊戲重新定位了
own.set(box, o);
const r = box.getBoundingClientRect();
if (!r.height) return;
// 照遊戲原本的位置算，框變矮時就回到原位
const shift = parseFloat(box.style.top) - o.base, top = r.top - shift, bottom = r.bottom - shift;
let dy = 0;
if (top < MARGIN || r.height > innerHeight - MARGIN * 2) dy = MARGIN - top;   // 放不下時至少讓最上面的名稱看得到
else if (bottom > innerHeight - MARGIN) dy = innerHeight - MARGIN - bottom;
if (Math.abs(dy - shift) < 0.5) return;
o.mine = `${o.base + dy}px`;
box.style.top = o.mine;
o.mine = box.style.top;   // 瀏覽器可能改寫數字格式
};
const watched = new WeakSet();
const watch = () => {
for (const box of document.querySelectorAll('#hoverbox, #tooltip')) {
if (watched.has(box)) continue;
watched.add(box);
new ResizeObserver(() => fit(box)).observe(box);
new MutationObserver(() => fit(box)).observe(box, { attributes: true, attributeFilter: ['style', 'class'] });
}
};
watch();
new MutationObserver(watch).observe(document.body, { childList: true });
}
d2fitInstall();
// ====== 技能和裝備同名時，說明框補上元素標記 ======
// 技能說明框第二行是「Evolved from…／Required Level…／Level…」，裝備說明框第二行是底材或收藏狀態，用這個分辨。
function d2tagInstall() {
const SKILL_LINE = /^(Evolved from|Required Level|Level \d)/;
const apply = box => {
// 畫完之後 textContent 已經是中文，英文原文要從 D2ZH_STATE 拿
const [c, c2] = [...box.children].slice(0, 2).map(line => line.matches('canvas') ? line : line.querySelector('canvas'));
const st = c && D2ZH_STATE.get(c), next = c2 && D2ZH_STATE.get(c2);
if (!st || !next || d2zhLang() !== 'zh-Hant') return;
if (st.orig === undefined) st.orig = st.src;
const tag = D2ZH_ITEM_SKILL_TAGS[st.orig];
if (!tag || !SKILL_LINE.test(next.src)) return;
st.src = `${window.D2I18N.translate(st.orig)}（${tag}）`;
st.lang = null;
d2zhPaint(c, st);
};
const watched = new WeakSet();
const watch = () => {
const box = document.getElementById('hoverbox');
if (!box || watched.has(box)) return;
watched.add(box);
new MutationObserver(() => apply(box)).observe(box, { childList: true });
};
watch();
new MutationObserver(watch).observe(document.body, { childList: true });
}
d2tagInstall();
// ====== 技能選單大小 ======
// 點技能按鈕跳出的選單（#skill-popup）是「被動一排、主動一排」，各 8 格排很寬，開著技能樹時會蓋住技能樹。
// 技能樹開著時用 transform 縮放選單（不影響遊戲算的位置；往選單靠螢幕邊的那個下角縮），旁邊放 ＋／－ 按鈕讓玩家自己調：
// 0（完全關閉）～200%，每次打開技能樹（按 T 或點按鈕）都重設為 50%。技能樹關著時選單維持原尺寸。
// 最前面的「鎖定比例」按下後記住當下大小（localStorage d2zh:skillZoomLock＝STEPS 的索引），之後打開技能樹都用這個大小，鎖定中 ＋／－ 不能按。
// 預設關閉（遊戲直立時會自己縮技能樹讓開選單），要到「書籤修改」開啟才有縮放和按鈕，見 d2edSkillZoomSection。
// 直立修正（不管開關都有）：遊戲每排超過 8 格才換行，7、8 格（48px 寬＋1px 間距）在窄螢幕會超出畫面左邊；改成放不下才換行。
function d2skillPopupInstall() {
const fix = document.createElement('style');
fix.textContent = `html.portrait #skill-popup .slot-row.long:not(.wide) { display: flex; flex-wrap: wrap; justify-content: flex-end; }
html.portrait #skill-popup .slot-row.gear-row.long:not(.wide) { justify-content: flex-start; }
html.portrait #skill-popup:not(:has(.slot-row.wide)) { max-width: calc(100vw - 16px - env(safe-area-inset-left) - env(safe-area-inset-right)); }`;
document.head.append(fix);
const STEPS = [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2], RESET = 2, LOCK_KEY = 'd2zh:skillZoomLock';
let locked = null;
try { const v = localStorage.getItem(LOCK_KEY); if (v !== null && STEPS[+v] !== undefined) locked = +v; } catch (_) {}
let level = locked ?? RESET, treeWasOpen = false, applied = '';
const ctl = document.createElement('div');
ctl.id = 'd2zh-skillzoom';
ctl.style.cssText = 'position:fixed;z-index:99990;display:none;gap:3px;pointer-events:auto;font:12px/1 ' + D2ZH_FONT + ';color:#c7b377';
// 外觀照技能選單的格子（.slot）：半透明黑底、深棕框、內圈暗金邊，文字用暗金色
const SLOT = 'padding:0;background:rgba(0,0,0,.55);border:1px solid #3a3020;box-shadow:inset 0 0 0 2px rgba(110,96,70,.7);text-shadow:1px 1px 0 #000;cursor:pointer;';
const btn = (txt, d) => {
const b = document.createElement('button');
b.textContent = txt;
b.style.cssText = SLOT + 'width:26px;height:26px;color:#c7b377;font:bold 16px/1 sans-serif';
b.addEventListener('click', () => { if (locked !== null) return; level = Math.max(0, Math.min(STEPS.length - 1, level + d)); update(); });
return b;
};
const label = document.createElement('span');
label.style.cssText = 'min-width:30px;text-align:center;white-space:nowrap;text-shadow:1px 1px 0 #000,0 0 3px #000';
const plus = btn('＋', 1), minus = btn('－', -1);
// 鎖頭圖示：闔上（鎖定）／打開（解開，左腳抬起）
const padlock = (shut, size) => `<svg viewBox="0 0 16 18" width="${size}" height="${size * 1.125}" style="display:block;flex:none"><path d="${shut ? 'M4 8V5a4 4 0 0 1 8 0v3' : 'M12 8V5a4 4 0 0 0-8 0v0.5'}" fill="none" stroke="currentColor" stroke-width="2"/><rect x="2" y="8" width="12" height="9" rx="1.5" fill="currentColor"/><rect x="7" y="11" width="2" height="3.5" fill="#000" opacity=".6"/></svg>`;
// 直立長方形的鎖定鈕，高度跟右邊 ＋、－ 那一欄一樣；鎖定時金框發光、鎖頭闔上、字改「已鎖定」
const lock = document.createElement('button');
lock.style.cssText = SLOT + 'width:26px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;font:bold 11px/1 ' + D2ZH_FONT;
lock.addEventListener('click', () => {
locked = locked === null ? level : null;
try { if (locked === null) localStorage.removeItem(LOCK_KEY); else localStorage.setItem(LOCK_KEY, String(locked)); } catch (_) {}
update();
});
const stack = document.createElement('div');
stack.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:3px';
stack.append(plus, label, minus);
ctl.append(lock, stack);
// 別讓點按鈕的事件傳到遊戲（遊戲點選單外面會把選單關掉）
for (const ev of ['pointerdown', 'pointerup', 'mousedown', 'mouseup', 'touchstart', 'touchend', 'click']) ctl.addEventListener(ev, e => e.stopPropagation());
document.body.append(ctl);
function update() {
const popup = document.getElementById('skill-popup');
const treeOpen = d2edSkillZoomOn() && !!document.querySelector('#skill-tree:not(.hidden) .tree');
if (treeOpen && !treeWasOpen) level = locked ?? RESET;
treeWasOpen = treeOpen;
const show = !!(popup && treeOpen && !popup.classList.contains('hidden') && popup.offsetParent);
const s = treeOpen ? STEPS[level] : 1;
if (popup) {
const want = s === 1 ? '' : `scale(${s})`;
if (applied !== want || popup.style.transform !== want) {
// 縮放原點：選單（原尺寸）在畫面右半邊就往右下角縮，否則往左下角縮；要先拿掉縮放再量，不然放大後會誤判
popup.style.transform = '';
const r = popup.getBoundingClientRect();
popup.style.transformOrigin = (r.left + r.right) / 2 > innerWidth / 2 ? '100% 100%' : '0 100%';
popup.style.transform = want;
popup.style.visibility = s === 0 ? 'hidden' : '';
applied = want;
}
}
ctl.style.display = show ? 'flex' : 'none';
if (!show) return;
const isLocked = locked !== null;
label.innerHTML = (isLocked ? `<span style="display:inline-block;vertical-align:-1px;margin-right:1px;color:#f0c850">${padlock(true, 8)}</span>` : '') + (s === 0 ? '關' : Math.round(s * 100) + '%');
if (lock.dataset.on !== String(isLocked)) {
lock.dataset.on = String(isLocked);
lock.innerHTML = padlock(isLocked, 13) + `<span style="writing-mode:vertical-rl;letter-spacing:1px">${isLocked ? '已鎖定' : '鎖定比例'}</span>`;
lock.title = isLocked ? '已鎖定：之後打開技能樹都用這個大小，再按一次解開' : '鎖定目前大小，之後打開技能樹都用這個大小';
lock.style.color = isLocked ? '#f0c850' : '#8a8070';
lock.style.background = isLocked ? 'rgba(70,48,8,.8)' : 'rgba(0,0,0,.55)';
lock.style.borderColor = isLocked ? '#c9a23a' : '#3a3020';
lock.style.boxShadow = isLocked ? 'inset 0 0 0 2px rgba(201,162,58,.8),0 0 6px rgba(255,200,80,.65)' : 'inset 0 0 0 2px rgba(110,96,70,.7)';
}
plus.disabled = locked !== null || level === STEPS.length - 1; minus.disabled = locked !== null || level === 0;
plus.style.opacity = plus.disabled ? .4 : 1; minus.style.opacity = minus.disabled ? .4 : 1;
// 按鈕放在縮放原點外側，選單變大變小時按鈕不會跑掉；外側放不下（直向窄螢幕）就放在原點下方
const r = popup.getBoundingClientRect(), right = popup.style.transformOrigin.startsWith('100%');
const x = right ? r.right : r.left;
const cw = ctl.offsetWidth, ch = ctl.offsetHeight;
const side = right ? x + 4 + cw <= innerWidth - 2 : x - cw - 4 >= 2;
let left = side ? (right ? x + 4 : x - cw - 4) : (right ? x - cw : x);
let top = side ? r.bottom - ch : r.bottom + 4;
left = Math.max(2, Math.min(innerWidth - cw - 2, left));
top = Math.max(2, Math.min(innerHeight - ch - 2, top));
ctl.style.left = left + 'px'; ctl.style.top = top + 'px';
}
setInterval(update, 200);
}
d2skillPopupInstall();
// ====== 儲物箱／獨特物品分頁的搜尋可以打中文 ======
// 遊戲把物品的英文名稱、底材、屬性和稀有度（英文＋韓文，例如「unique 고유」）接成一串再 toLowerCase() 拿來比對，
// 儲物箱用換行接（每行一項）、獨特物品分頁用空格接。這裡攔 toLowerCase，認出這種字串就把中文譯名接在後面，
// 玩家打的中文就比對得到。韓文稀有度只出現在這兩種搜尋字串裡，其他字串照原本的 toLowerCase。
function d2zhSearchInstall() {
const rawLower = String.prototype.toLowerCase;
const RARITY = /(?:^|[\n ])(normal|magic|rare|set|runeword|unique)[\n ](보통|마법|희귀|세트|룬어|고유)(?=[\n ]|$)/;
const RARITY_ZH = { normal: '普通', magic: '魔法', rare: '稀有', set: '套裝', runeword: '符文之語', unique: '獨特 暗金' };
const cache = new Map();
const zh = s => { const t = window.D2I18N.translate(s); return t !== s && /[㐀-鿿]/u.test(t) ? t : ''; };
// 空格接的：從頭找最長的已知名稱（最多 8 個字），找到就翻，找不到跳過一個字
const words = text => {
const w = text.split(' '), out = [];
for (let i = 0; i < w.length;) {
let hit = 0;
for (let k = Math.min(8, w.length - i); k > 0 && !hit; k--) if (window.__d2zhKnown(w.slice(i, i + k).join(' '))) hit = k;
if (hit) { out.push(zh(w.slice(i, i + hit).join(' '))); i += hit; } else i++;
}
return out;
};
let busy = false;   // 翻譯時自己也會呼叫 toLowerCase，不要再進來
String.prototype.toLowerCase = function () {
const s = rawLower.call(this);
if (busy || this.length < 8) return s;
const m = RARITY.exec(this);
if (!m) return s;
const key = String(this);
let extra = cache.get(key);
if (extra === undefined) {
busy = true;
try {
const parts = key.includes('\n') ? key.split('\n').map(zh) : words(key);
extra = [...new Set([...parts, RARITY_ZH[m[1]]].filter(Boolean))].join('\n');
} catch (_) { extra = ''; } finally { busy = false; }
if (cache.size > 5000) cache.clear();
cache.set(key, extra);
}
return extra ? s + '\n' + rawLower.call(extra) : s;
};
}
d2zhSearchInstall();
// ====== 小地圖：任務道具醒目標記 ======
// 遊戲的小地圖（Tab）只用小金點標出獨特物品，任務道具（維特的腳、英尼弗斯卷軸、赫拉迪克之錘…）也是同樣的小點，很難找。
// 這裡在小地圖上替地上的任務道具加一個會閃動的綠色圓圈。
// 小地圖的結構（PixiJS）：stage 最後的 automap.view = [map（cels、lines、marks）, 英雄十字, 遮罩]；
// map 每格畫在「世界座標 × drawScale」，map 本身跟著英雄移動，所以標記放在 map 裡就會跟著捲動。
function d2questInstall() {
const isQuest = p => !p.dead && p.kind === 'item' && p.item && (p.item.type === 'quest' || p.item.base === 'Wirt\'s Leg');
let mark = null, full = 0.1, tick = 0;   // full：大地圖模式的 drawScale（有遊戲圖像時約 0.1；角落小地圖是一半）
const automapOf = world => world.stage.children.find(v => v.children.length === 3 && v.children[0].children.length >= 3 && v.children[0].children[2].context);
setInterval(() => {
try {
const world = D2ED.world;
if (!world || !world.stage) return;
const am = automapOf(world);
if (!am) return;
const map = am.children[0], hero = am.children[1];
if (!mark || mark.destroyed || mark.parent !== map) {
if (mark && !mark.destroyed) mark.destroy();
mark = new (map.children[2].constructor)();   // 跟遊戲標記同一種 Graphics
map.addChild(mark);
}
mark.clear();
const items = world.pickups.filter(isQuest);
if (!am.visible || !items.length) return;
// drawScale：英雄十字在畫面中心，map.position = 中心 − 玩家座標 × map.scale × drawScale。
// 遊戲會把位置取整數，玩家離起點夠遠才量得準；量不到時沿用上次的值。角落模式（map 有遮罩）是一半。
const corner = !!map.mask ? 0.5 : 1;
const p = world.player, ax = Math.abs(p.x) > Math.abs(p.y) ? 'x' : 'y';
if (Math.abs(p[ax]) > 200) {
const measured = (hero[ax] - map[ax]) / (p[ax] * map.scale[ax]) / corner;
if (measured > 0.01 && measured < 1) full = measured;
}
const ds = full * corner;
const k = 1 / map.scale.x;   // 圓圈在螢幕上的大小固定，不跟著小地圖縮放
const pulse = 1 + 0.35 * Math.sin(tick++ * 0.9);
for (const it of items) {
const x = it.x * ds, y = it.y * ds;
mark.circle(x, y, 10 * pulse * k).stroke({ width: 5 * k, color: 0x000000, alpha: 0.6 })
.circle(x, y, 10 * pulse * k).stroke({ width: 2.5 * k, color: 0x3dff6e })
.circle(x, y, 3.5 * k).fill({ color: 0x3dff6e }).stroke({ width: 1 * k, color: 0x000000 });
}
} catch (e) { /* 遊戲結構改了就不畫，不影響遊戲 */ }
}, 100);
}
d2questInstall();
// ====== 地上的護符：閃爍 ======
// 護符沒有掉落圖，遊戲用一個依稀有度上色的圓點（art.pickups.item）代替，很容易漏看。這裡讓地上護符的圓點一閃一閃、微微放大縮小。
function d2charmBlinkInstall() {
const base = new WeakMap();   // 每個圓點原本的大小
setInterval(() => {
try {
const world = D2ED.world;
if (!world || !Array.isArray(world.pickups)) return;
const t = performance.now() / 1000;
const wave = (Math.sin(t * 2 * Math.PI * 1.2) + 1) / 2;   // 每秒約 1.2 次
for (const p of world.pickups) {
const s = p.sprite;
if (p.dead || !p.item || p.item.type !== 'charm' || !s || s.destroyed) continue;
if (!base.has(s)) base.set(s, { x: s.scale.x, y: s.scale.y });
const b = base.get(s), k = 1 + 0.25 * wave;
s.alpha = 0.45 + 0.55 * wave;
s.scale.set(b.x * k, b.y * k);
}
} catch (e) { /* 遊戲結構改了就不閃，不影響遊戲 */ }
}, 50);
}
d2charmBlinkInstall();
// ====== 過關吸取物品：打完這一幕時，地上的裝備和物品（鑰匙、精華、器官…）也一起飛到英雄身邊 ======
// 遊戲過關後等傳送門時（Game-*.js 的 waitForPortal），每格呼叫 itemArt 的 Pb()：只把經驗寶石和金幣設成 magnet 飛過來，
// 裝備類（pickup 有 item）不管，進傳送門時 travel→sweepFloor 只收寶石和寶箱，地上的裝備就消失了。
// 判斷「正在等傳送門」：waitForPortal 每格呼叫 hud.noticesClearOf('above'|'below')，#notices 會掛 under-hero／from-top；
// 離開這一幕或重開時遊戲傳 null 拿掉。物品移動照遊戲吸寶石的速度：min(距離, max(380, 距離×2.5)×經過的遊戲時間)，
// 遊戲時間不走（升級選單、暫停）就不動。飛到英雄腳邊後交給遊戲自己撿（物品欄滿了照樣顯示遊戲的提示，留在腳邊不再拖著走）。
// 不吸：自己丟下的（dropped）、物品過濾設成隱藏的（hide，hidesell 在不能賣時也算）、還在掉落翻轉動畫中的（flippy）。
const D2ED_ENDPULL_KEY = 'd2zh:endPull';
function d2edEndPullOn() {
try { return localStorage.getItem(D2ED_ENDPULL_KEY) !== '0'; } catch (_) { return true; }
}
function d2endPullInstall() {
const arrived = new WeakSet();   // 已經送到腳邊的（物品欄滿了撿不起來），之後不再拖著走
let lastTime = null, lastWorld = null;
const clearing = () => {
const n = document.getElementById('notices');
return !!n && (n.classList.contains('under-hero') || n.classList.contains('from-top'));
};
const step = () => {
requestAnimationFrame(step);
try {
const world = D2ED.world;
if (!world || !world.player || !Array.isArray(world.pickups) || !d2edEndPullOn() || !clearing()
|| document.body.classList.contains('in-camp') || document.body.classList.contains('no-run')) { lastTime = null; return; }
if (world !== lastWorld) { lastWorld = world; lastTime = null; }
const t = world.time;
const dt = lastTime === null || typeof t !== 'number' ? 0 : Math.min(0.1, Math.max(0, t - lastTime));
lastTime = t;
if (!dt) return;
const pl = world.player, reach = (pl.radius || 16) + 16;
for (const p of world.pickups) {
if (p.dead || !p.item || p.flippy || p.dropped || p.discarded || arrived.has(p)) continue;
if (p.loot === 'hide' || (p.loot === 'hidesell' && !world.sell)) continue;
const s = p.sprite;
if (!s || s.destroyed) continue;
const ox = pl.x - p.x, oy = pl.y - p.y, c = Math.hypot(ox, oy) || 1;
if (c <= reach) { arrived.add(p); continue; }
const l = Math.min(c - reach * 0.5, Math.max(380, c * 2.5) * dt);
const dx = ox / c * l, dy = oy / c * l;
p.x += dx; p.y += dy;
s.position.set(p.x, p.y);
if (p.label && !p.label.destroyed) { p.label.x += dx; p.label.y += dy; if (typeof p.labelY === 'number') p.labelY += dy; }
}
} catch (e) { /* 遊戲結構改了就不吸，不影響遊戲 */ }
};
requestAnimationFrame(step);
}
d2endPullInstall();
// ====== 碎片感應：破碎之光的碎片位置 ======
// 跟遊戲算碎片的方式一樣（build 20261027.4，keepSave-*.js 的 gc／cc／uc／_c）：
// 每一幕最多一塊，下一塊是「已找到 + 1」。第 1 塊在第一幕，第 2～5 塊在第二～五幕，第 6～10 塊在惡夢／地獄任何一幕；恐懼層每層都可能有。
// 用 world.light（這一局的種子）、幕、恐懼層、塊數、難度算出亂數：進入這一幕 at 秒後，碎片出現在「當下英雄位置」往 angle 方向 screens 個畫面（800×600）遠。
// 已找到幾塊（讀存檔，兩秒內重複問用上次的值；讀不到回 null）
let d2shardCountCache = { at: -Infinity, n: null };
function d2shardCount() {
const now = performance.now();
if (now - d2shardCountCache.at < 2000) return d2shardCountCache.n;
let n = null;
try {
const hc = /hard/i.test(localStorage.getItem('d2-survivors/mode/v1') || '');
const save = JSON.parse(localStorage.getItem(hc ? 'd2-survivors/hc/v1' : 'd2-survivors/save/v1') || '{}');
n = save?.light?.shards ?? 0;
} catch (_) { /* 讀不到就不提示 */ }
d2shardCountCache = { at: now, n };
return n;
}
// 下一塊碎片在哪裡出現（照遊戲 saveTransfer 的 lx／sx：第 1 塊第一幕、第 2～5 塊第二～五幕、第 6～10 塊惡夢以上任何一幕且有怪物守護；恐懼層每一幕都可能）
function d2shardNextText(n, short = false) {
if (n === null || n === undefined) return '';
if (n >= 10) return '十塊碎片都找到了。';
const r = Math.max(0, Math.floor(n)) + 1;
const where = r <= 5 ? `第${'一二三四五'[r - 1]}幕（任何難度）` : '惡夢或地獄難度的任何一幕';
if (short) return `下一塊（第 ${r} 塊）在${where}${r >= 6 ? '，有怪物守護' : ''}。備註：恐懼層任何一幕都會出現碎片。`;
const extra = r === 1 ? '，位置離你很近（約 1.5 個畫面）' : r >= 6 ? '，離你 3～5 個畫面，接近時會有怪物守護' : '，離你 3～5 個畫面';
return `下一塊是第 ${r} 塊，會出現在${where}，進入那一幕後 25～200 秒（遊戲時間）出現${extra}。備註：恐懼層的任何一幕都會出現碎片。`;
}
function d2shardInstall() {
const mix = (...v) => { let t = 2166136261; for (const n of v) { t ^= n >>> 0; t = Math.imul(t, 16777619); t ^= t >>> 13; t = Math.imul(t, 1540483477); t ^= t >>> 15; } return t >>> 0; };
const rng = seed => { let t = seed >>> 0; return () => { t = t + 1831565813 >>> 0; let e = t; e = Math.imul(e ^ e >>> 15, e | 1); e ^= e + Math.imul(e ^ e >>> 7, e | 61); return ((e ^ e >>> 14) >>> 0) / 2 ** 32; }; };
const found = () => {
try {
const hc = /hard/i.test(localStorage.getItem('d2-survivors/mode/v1') || '');
const save = JSON.parse(localStorage.getItem(hc ? 'd2-survivors/hc/v1' : 'd2-survivors/save/v1') || '{}');
return save?.light?.shards ?? 0;
} catch (_) { return null; }
};
const plan = (world, n) => {
const r = n >= 10 ? null : Math.max(0, Math.floor(n)) + 1;
const tier = world.terror?.tier ?? 0;
if (r === null || !(tier > 0 || (r === 1 ? world.act === 0 : r <= 5 ? world.act === r - 1 : world.difficulty !== 'normal'))) return null;
const [min, max] = r <= 1 ? [1.3, 1.7] : [3, 5];
const a = rng(mix(world.light ?? 0, world.act, tier, r, world.difficulty === 'normal' ? 0 : world.difficulty === 'nightmare' ? 1 : 2));
a();   // 遊戲先抽一次決定會不會出現（目前必定出現）
return { shard: r, at: 25 + a() * 175, angle: a() * Math.PI * 2, screens: min + a() * (max - min) };
};
const glow = document.createElement('div');
glow.id = 'd2zh-shard-sense';
// 不用 mix-blend-mode:screen：地面一亮（熔岩、沙地）淡米色就看不出來；漸變也要短，不然出現時的閃亮還沒亮起來就退了
glow.style.cssText = 'position:fixed;z-index:2147483000;pointer-events:none;border-radius:50%;opacity:0;transition:opacity .3s;'
+ 'background:radial-gradient(circle,rgba(255,252,232,.95) 0,rgba(255,218,125,.6) 28%,rgba(255,196,80,.2) 52%,rgba(255,190,70,0) 70%);';
// 碎片出現那一刻：畫面上方淡淡浮出一句話，幾秒後消失（遊戲本身這時沒有任何提示）
const whisper = document.createElement('div');
whisper.id = 'd2zh-shard-whisper';
whisper.textContent = '遠方似乎有什麼在微微發光……';
whisper.style.cssText = `position:fixed;z-index:2147483001;pointer-events:none;opacity:0;transition:opacity 1.2s;transform:translateX(-50%);white-space:nowrap;`
+ `font:20px ${D2ZH_FONT};letter-spacing:2px;color:#efe4c2;text-shadow:0 0 6px rgba(255,236,180,.8),1px 1px 0 #000,-1px -1px 0 #000;`;
let whisperTimer = 0;
const murmur = rc => {
if (!whisper.isConnected && document.body) document.body.append(whisper);
whisper.style.left = (rc.left + rc.width / 2) + 'px';
whisper.style.top = (rc.top + rc.height * 0.26) + 'px';
whisper.style.opacity = '0.85';
clearTimeout(whisperTimer);
whisperTimer = setTimeout(() => { whisper.style.opacity = '0'; }, 3500);
};
const FLASH = 4000;   // 出現時光暈先亮起，再花幾秒退回平常的亮度
// 進入地圖後先等 15 秒才判斷（恐懼層開局會先閃一下第一幕再跳到選的那一幕，剛進來讀到的不一定準）。
// 等待時只記錄英雄位置，計畫算出來後，用遊戲「進入這一幕 at 秒」那一刻的位置算碎片在哪。
const SETTLE = 15000;
let state = { key: '', plan: null, spot: null, count: 0, checkedAt: 0, enteredAt: 0, log: [], ready: false };
// 重新偵測位置：遊戲的碎片程式（Game-*.js 的 Lw.update）在碎片出現後每一格都算 Md(英雄, 碎片)＝Math.hypot((英雄x−碎片x)/800, (英雄y−碎片y)/600)。
// 短暫包住 Math.hypot，把每次兩個參數的呼叫用當下英雄位置反推成「被量的那一點」：碎片那一點每格都一樣、英雄走動也不變，
// 其他量測（怪物、技能）不是這個比例或會跟著動。量 3～10 秒取次數最多又不隨英雄移動的點，量完立刻還原 Math.hypot；找不到 10 秒後再試。
const rawHypot = Math.hypot;
let probe = null, probeRetryAt = 0;
const shardProbe = now => {
if (!probe) {
if (now < probeRetryAt) return null;
probe = { start: now, counts: new Map() };
Math.hypot = function (a, b) {
const r = rawHypot.apply(Math, arguments);
const pb = probe;
if (pb && arguments.length === 2) {
try {
const pl = D2ED.world && D2ED.world.player;
if (pl && Number.isFinite(a) && Number.isFinite(b)) {
const x = pl.x - a * 800, y = pl.y - b * 600;
const k = Math.round(x / 4) + ',' + Math.round(y / 4);
const c = pb.counts.get(k);
if (c) {
c.n++; c.x = x; c.y = y;
const mx = pl.x - c.px, my = pl.y - c.py, m2 = mx * mx + my * my;
if (m2 > c.moved) c.moved = m2;
} else if (pb.counts.size < 20000) pb.counts.set(k, { n: 1, x, y, px: pl.x, py: pl.y, moved: 0 });
}
} catch (_) { /* 只是觀察，出錯就略過 */ }
}
return r;
};
return null;
}
const age = now - probe.start;
if (age < 3000) return null;
const pl = D2ED.world && D2ED.world.player;
const near = c => pl && rawHypot((c.x - pl.x) / 800, (c.y - pl.y) / 600) < 12;
const list = [...probe.counts.values()].filter(c => c.n >= 20 && c.moved >= 30 * 30 && near(c)).sort((a, b) => b.n - a.n);
const best = list[0];
// 英雄完全沒動時分不出來，再多量一會兒（最多 10 秒）
if (!best && age < 10000) return null;
Math.hypot = rawHypot;
probe = null;
if (!best) { probeRetryAt = now + 10000; return null; }
return { x: best.x, y: best.y };
};
D2ED.shardDebug = () => ({ spot: state.spot, missed: !!state.missed, ready: state.ready, probing: !!probe });   // 測試用：看書籤算出的碎片位置
// 給「書籤修改」面板顯示目前狀態（不透露方向），方便判斷為什麼沒有光暈
D2ED.shardStatus = () => {
const world = D2ED.world;
if (document.body.classList.contains('no-run') || !world || !world.player) return '不在遊戲中';
if (world.farm || world.tristram || document.body.classList.contains('in-camp')) return '這裡不會出現碎片';
const n = found();
if (n === null) return '讀不到存檔';
if (n >= 10) return '十塊碎片都找到了';
const key = `${world.light}:${world.act}:${world.difficulty}:${world.terror?.tier ?? 0}`;
if (key === state.key && !state.ready) return `已找到 ${n} 塊：剛進入這一幕，${Math.max(1, Math.ceil((SETTLE - (performance.now() - state.enteredAt)) / 1000))} 秒後開始偵測`;
if (key === state.key && n > state.count) return `已找到 ${n} 塊：這一幕的碎片已經撿到了`;
if (!plan(world, n)) return `已找到 ${n} 塊：這一幕沒有碎片`;
if (key === state.key && state.missed) return `已找到 ${n} 塊：這一幕的碎片在書籤開始偵測前就出現了，正在重新偵測位置（英雄要移動才量得出來）`;
if (key === state.key && state.spot) return `已找到 ${n} 塊：這一幕的碎片已經出現`;
return `已找到 ${n} 塊：這一幕的碎片還沒出現`;
};
setInterval(() => {
let show = 0;
try {
const world = D2ED.world;
// 重新偵測進行中卻已經不需要了（換了一幕、撿到了、關掉碎片感應、離開遊戲）：馬上還原 Math.hypot
if (probe && (!d2edShardOn() || !state.missed || !world || document.body.classList.contains('no-run') || (d2shardCount() ?? 0) > state.count)) { Math.hypot = rawHypot; probe = null; }
// 關掉碎片感應就忘掉這一幕：中途再打開時重新偵測（以前會沿用關掉前的紀錄，用「現在的位置」推算而指錯方向）
if (!d2edShardOn()) state.key = '';
if (!d2edShardOn() || !world || !world.player || document.body.classList.contains('no-run') || world.farm || world.tristram || document.body.classList.contains('in-camp')) return;
const key = `${world.light}:${world.act}:${world.difficulty}:${world.terror?.tier ?? 0}`;
const now = performance.now();
const pl = world.player;
const elapsed = world.time - world.actStart;
// 「進入這一幕經過的時間」往回跳＝遊戲重新開始了這一幕。恐懼層按「繼續」會用同一個種子、同一幕、同一層重開，
// 識別值跟上一局一模一樣，剛換局的那一下還會讀到上一局停住的時間（例如 80 秒），以前就被誤判成「開始偵測前就出現了」而整幕沒有光暈（玩家回報 V54）
if (key !== state.key || elapsed < state.lastE - 3) state = { key, plan: null, spot: null, count: found(), checkedAt: now, enteredAt: now, log: [], ready: false };
state.lastE = elapsed;
if (!state.ready) {
state.log.push({ e: elapsed, x: pl.x, y: pl.y });
if (now - state.enteredAt < SETTLE) return;
state.ready = true;
state.plan = state.count === null ? null : plan(world, state.count);
// 開始偵測時這一幕已經過了碎片出現的時間（玩到一半才點書籤、重新整理、讀檔繼續、中途才打開碎片感應）：
// 遊戲是用「出現那一刻」的英雄位置算碎片，書籤沒看到那一刻，用現在的位置推算會指錯地方，所以這一幕不提示
if (state.plan && state.log.length && state.log[0].e >= state.plan.at) { state.missedPlan = state.plan; state.plan = null; state.missed = true; }
}
// 錯過了也不放棄：從遊戲自己的距離量測反推碎片真正的位置（見下面 shardProbe），找到就照常顯示光暈
if (state.missed && state.missedPlan && elapsed >= state.missedPlan.at && (d2shardCount() ?? 0) <= state.count) {
const spot = shardProbe(now);
if (spot) {
state.plan = state.missedPlan; state.missedPlan = null; state.missed = false;
state.spot = spot; state.spawnAt = now; state.log = [];
}
}
const p = state.plan;
if (!p) return;
if (now - state.checkedAt > 2000) {   // 撿到了（存檔的塊數變多）就不再提示
state.checkedAt = now;
const n = found();
if (n !== null && n > state.count) { state.plan = null; return; }
}
if (!state.spot) {
if (world.time - world.actStart < p.at) return;
// 等待的 30 秒裡碎片可能已經出現了：用那一刻記下的位置（跟遊戲一樣，第一個到達 at 秒的畫面）
const from = state.log.find(s => s.e >= p.at) ?? pl;
state.spot = { x: from.x + Math.cos(p.angle) * p.screens * 800, y: from.y + Math.sin(p.angle) * p.screens * 600 };
state.spawnAt = now;   // 出現（或等待結束才知道已經出現）時亮一下、浮出提示
}
state.log = [];
const dx = state.spot.x - pl.x, dy = state.spot.y - pl.y;
const far = Math.hypot(dx / 800, dy / 600);   // 跟遊戲一樣以「畫面」為單位
if (far < 0.9) return;                          // 已經在畫面上看得到碎片
const canvas = [...document.querySelectorAll('canvas')].reduce((a, c) => (c.clientWidth * c.clientHeight > (a ? a.clientWidth * a.clientHeight : 0) ? c : a), null);
if (!canvas) return;
const rc = canvas.getBoundingClientRect();
const cx = rc.left + rc.width / 2, cy = rc.top + rc.height / 2;
const len = Math.hypot(dx, dy) || 1, ux = dx / len, uy = dy / len;
// 從畫面中心往碎片方向，碰到畫面邊緣（往內縮一點）的位置
const hw = rc.width / 2 * 0.92, hh = rc.height / 2 * 0.9;
const t = Math.min(ux ? hw / Math.abs(ux) : Infinity, uy ? hh / Math.abs(uy) : Infinity);
const size = Math.min(rc.width, rc.height) * 0.42;
glow.style.width = glow.style.height = size + 'px';
glow.style.left = (cx + ux * t - size / 2) + 'px';
glow.style.top = (cy + uy * t - size / 2) + 'px';
const near = Math.max(0, Math.min(1, (5.5 - far) / 4.5));   // 5.5 個畫面外最淡（約 0.4～0.55），1 個畫面內最亮（約 0.7～0.95）
const breathe = (Math.sin(now / 1000 * 1.6 * Math.PI) + 1) / 2;
show = (0.55 + 0.4 * near) * (0.75 + 0.25 * breathe);
const since = now - (state.spawnAt ?? -Infinity);
if (since < FLASH) {
if (!state.murmured) { state.murmured = true; murmur(rc); }
show = Math.max(show, 1 - since / FLASH);
}
} catch (e) { /* 遊戲結構改了就不提示，不影響遊戲 */ }
finally {
if (!glow.isConnected && document.body) document.body.append(glow);
glow.style.opacity = String(show);
}
}, 100);
// 魔力球（#d2-mana）裡：碎片出現倒數。進入這一幕 5 秒後才顯示；這一幕沒有碎片、已經撿到、十塊都找到就不顯示。
// 倒數用遊戲時間（升級選單暫停時也跟著停），跟遊戲判斷出現的時間完全一樣；中途才開始偵測的也照樣準（只是位置推不出來）。
const orb = document.createElement('div');
orb.id = 'd2zh-shard-timer';
orb.style.cssText = `position: absolute; display: none; white-space: pre; text-align: center; line-height: 1.15; transform: translate(-50%, -50%); z-index: 1; pointer-events: none; font: bold 12px ${D2ZH_FONT}; color: #e8dfcc;` +
' text-shadow: -1px 0 #000, 1px 0 #000, 0 -1px #000, 0 1px #000, 1px 1px #000;';
let orbShown = '', orbFound = null, orbReadAt = -Infinity;
setInterval(() => {
let text = '', ready = false;
const globe = document.getElementById('d2-mana');
try {
const world = D2ED.world;
if (globe && globe.offsetParent && d2edShardOn() && d2edInRun() && world && world.player && !world.farm && !world.tristram && !document.body.classList.contains('in-camp') && !document.body.classList.contains('no-run')) {
const key = `${world.light}:${world.act}:${world.difficulty}:${world.terror?.tier ?? 0}`;
const now = performance.now();
if (key === state.key && state.count !== null && now - state.enteredAt >= 5000) {
if (now - orbReadAt > 2000) { orbFound = found(); orbReadAt = now; }   // 存檔很大，兩秒讀一次
const p = orbFound !== null && orbFound <= state.count ? plan(world, state.count) : null;
if (p) {
const zh = d2zhLang() === 'zh-Hant';
const left = Math.ceil(p.at - (world.time - world.actStart));
if (left > 0) text = `${zh ? '距離碎片出現' : 'Shard appears in'}\n${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`;
else if (state.missed) text = zh ? '碎片已出現\n偵測位置中' : 'Shard is out\nlocating…';   // 沒看到出現那一刻，正在用 shardProbe 重新找位置
else text = zh ? '碎片已出現!' : 'Shard is out!';
ready = true;
}
}
}
} catch (e) { /* 遊戲結構改了就不顯示 */ }
if (!ready || !text) { if (orbShown) { orb.style.display = 'none'; orbShown = ''; } return; }
if (orb.parentNode !== globe.parentNode) globe.parentNode.append(orb);
if (text !== orbShown) { orb.textContent = text; orbShown = text; }
orb.style.display = '';
orb.style.left = `${globe.offsetLeft + globe.offsetWidth / 2}px`;
orb.style.top = `${globe.offsetTop + globe.offsetHeight / 2}px`;
}, 250);
// 小地圖（Tab）上碎片的大略位置：一團柔光閃爍，越近閃得越快；不在小地圖範圍內就貼在邊緣指方向
// 小地圖的結構（build 20261027.4，Game-*.js 的 OC）：app.stage 底下的 view = [map, hero, clip]，map = [celLayer, lineLayer, marks, glints]
// hero 永遠在小地圖中心；map 的位置 = 中心 - 英雄座標 × 縮放，所以縮放 = (hero - map) / 英雄座標
let mapDot = null, phase = 0, lastTick = performance.now();
const findAutomap = stage => (stage?.children || []).find(c => {
const k = c.children;
return k && k.length >= 3 && k[0].children?.length === 4 && k[1].constructor === k[0].children[2].constructor && k[2].constructor === k[1].constructor;
});
setInterval(() => {
const now = performance.now(), dt = Math.min(0.2, (now - lastTick) / 1000);
lastTick = now;
let visible = false;
try {
const world = D2ED.world, spot = state.spot;
if (!d2edShardOn() || !world || !world.player || !state.plan || !spot || document.body.classList.contains('no-run') || world.farm || world.tristram || document.body.classList.contains('in-camp')) return;
const view = findAutomap(world.stage);
if (!view || !view.visible) return;
const [map, hero, clip] = view.children;
const pl = world.player;
const sx = Math.abs(pl.x) > Math.abs(pl.y) ? (hero.position.x - map.position.x) / pl.x : (hero.position.y - map.position.y) / pl.y;
if (!(sx > 0) || !isFinite(sx)) return;
if (!mapDot || mapDot.destroyed) {
mapDot = new hero.constructor();
mapDot.eventMode = 'none';
}
if (mapDot.parent !== view) view.addChild(mapDot);   // 放在最後，前三個 [map, hero, clip] 的順序不變
// 小地圖的範圍：角落模式有 clip 遮罩，全畫面模式就是整個畫面（英雄在正中央）
const b = map.mask ? clip.getBounds() : { x: 0, y: 0, width: hero.position.x * 2, height: hero.position.y * 2 };
const pad = 7;
let x = hero.position.x + (spot.x - pl.x) * sx, y = hero.position.y + (spot.y - pl.y) * sx;
const minX = b.x + pad, maxX = b.x + b.width - pad, minY = b.y + pad, maxY = b.y + b.height - pad;
if (x < minX || x > maxX || y < minY || y > maxY) {   // 超出範圍：沿著英雄→碎片的方向貼到邊上
const ox = hero.position.x, oy = hero.position.y, dx = x - ox, dy = y - oy;
const t = Math.min(dx > 0 ? (maxX - ox) / dx : dx < 0 ? (minX - ox) / dx : Infinity, dy > 0 ? (maxY - oy) / dy : dy < 0 ? (minY - oy) / dy : Infinity);
x = ox + dx * t; y = oy + dy * t;
}
const far = Math.hypot((spot.x - pl.x) / 800, (spot.y - pl.y) / 600);
const near = Math.max(0, Math.min(1, (5.5 - far) / 4.5));
phase += dt * (0.6 + 2.6 * near);                      // 遠：0.6 下／秒，近：3.2 下／秒
const wave = (1 + Math.cos(phase * Math.PI * 2)) / 2;
const k = map.scale.x || 1;
mapDot.clear()
.circle(x, y, 8 * k).fill({ color: 0xffe9b0, alpha: 0.18 * wave })
.circle(x, y, 4.5 * k).fill({ color: 0xfff2cc, alpha: 0.45 * wave })
.circle(x, y, 2 * k).fill({ color: 0xffffff, alpha: 0.25 + 0.75 * wave });
visible = true;
} catch (e) { /* 遊戲結構改了就不畫，不影響遊戲 */ }
finally {
if (mapDot && !mapDot.destroyed) mapDot.visible = visible;
}
}, 33);
}
d2shardInstall();
})();
