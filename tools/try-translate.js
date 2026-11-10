// 試翻：把遊戲畫面上實際出現的英文句子丟給 d2_zh.js 的翻譯，看結果。
//   用法：node tools/try-translate.js "Fire Resist" "75% / max 75%" ...
//         不帶參數 = 跑下面 SAMPLES（改版後抽查用）
'use strict';
const fs = require('fs');
const path = require('path');
const src = fs.readFileSync(path.join(__dirname, 'check-update.js'), 'utf8')
  .replace(/\nmain\(\)\.catch[\s\S]*$/, '\nmodule.exports = { loadTranslator };');
const m = { exports: {} };
new Function('require', 'module', '__dirname', 'process', src)(require, m, __dirname, process);
const { translate } = m.exports.loadTranslator();

const SAMPLES = [
  '50% / max 75%', '50% / max 75% / 80% in all',
  'Levels gear adds to every Combat skill', 'Levels gear adds to every Fire skill and passive',
  "A level past a skill or passive's maximum still adds to it, as in D2",
  '+8% damage per level of Fire Bolt', '+8% damage per level of Fire Bolt, +6% of Meteor',
  '+8% per level of Fire Bolt and Meteor', '+8% per level of Fire Bolt, Meteor and 2 more',
  '+8% per level of 4 skills', '+8% per level of 4 skills and passives',
  '+8% per level of Fire Bolt and 3 more', '+8% per level of Fire Bolt, Meteor, Blizzard and 2 more',
  '+8% damage per level of Fire Bolt and Meteor', '+8% damage per level of Fire Bolt, +6% of Meteor, +4% of Blizzard',
  'Levels gear adds to every Bow and Crossbow skill', 'Levels gear adds to every Elemental passive',
  'Combat Skills', 'Fire', 'Poison and Bone Skills',
  'max 3/8', 'Click to continue the run', 'or click to reload and continue the run',
];
for (const s of (process.argv.length > 2 ? process.argv.slice(2) : SAMPLES)) console.log(`${s}\n  → ${translate(s)}`);
