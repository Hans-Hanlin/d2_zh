# 暗黑2網頁板中文化（D2 Survivors 繁體中文）

D2 Survivors（https://d2survivors.lol/play/ ，Diablo II 同人 survivors 網頁遊戲）的繁體中文化＋書籤修改，
以及**整個遊戲搬到自己電腦上跑的本地版**。

## 🎮 玩（本地版，推薦）
1. 雙擊 **`本地伺服器.bat`** → 自動開 http://localhost:8790/
2. 畫面就是繁體中文，「選項」裡有「書籤修改」— **不用點書籤**。
3. 關掉黑色視窗＝關伺服器。

- 第一次玩：素材會邊玩邊從官方補抓；想完全離線，先跑一次 **`更新遊戲.bat`**（下載全部素材）。
- 完全不連網：`本地伺服器.bat --offline`（排行榜會顯示離線）。原版英文：`本地伺服器.bat --no-zh`。
- 存檔存在瀏覽器裡、跟網址綁定：**官方網站的存檔不會自動出現在 localhost**。用遊戲內建的存檔匯出／匯入（存檔轉移）搬過來。
- 只能用 `localhost` 開（遊戲需要瀏覽器的安全環境）；朋友要玩請在他自己電腦也放一份這個資料夾。

## 🔖 在官方網站用書籤
教學頁：**https://hans-hanlin.github.io/d2_zh/**，書籤網址：
```
javascript:import('https://hans-hanlin.github.io/d2_zh/d2_zh.js?v='+Date.now())
```
> 舊書籤（jtnhrbpvvm-spec.github.io/…）還能用，但停在 V62，之後的更新只在這裡。

## 🛠️ 維護
| 要做的事 | 怎麼做 |
|---|---|
| 改翻譯／修改器 | 直接改 `d2_zh.js`，重新整理遊戲頁 |
| 發新版 | `D2ZH_VERSION` +1、`D2ZH_NEWS` 加一段說明 → commit → `git push`（GitHub Pages 約 1～10 分鐘生效） |
| 試翻一句 | `node tools/try-translate.js "英文句子"` |
| 回覆玩家回報 | 改 `回應.txt` |
| 遊戲改版 | `更新遊戲.bat`（更新鏡像＋素材＋列出沒翻到的新字串） |
| 遊戲改版後出問題要退回 | `node tools/mirror_rollback.js` 列版本 → `node tools/mirror_rollback.js game-xxxx` |

細節：`docs/本地伺服器.md`、`CLAUDE.md`、`開發日誌.md`。

非官方玩家作品，與 D2 Survivors 作者及 Blizzard Entertainment 無關。
