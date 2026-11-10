# 暗黑2網頁板中文化（D2 Survivors 繁中書籤＋本地版）— 專案脈絡

## 🎯 這是什麼
https://d2survivors.lol/play/ （D2 Survivors，framara 做的 Diablo II 同人 survivors-like 網頁遊戲，非開源）的：
- **d2_zh.js** — 繁體中文化＋「書籤修改」面板（V62 起從舊機搬來，**之後從這個專案持續更新**）
- **本地版**：整個網頁遊戲鏡像到本機，`本地伺服器.bat` → http://localhost:8790/ ，自動注入 d2_zh.js（不用點書籤）

來源：舊機的 GitHub repo `jtnhrbpvvm-spec/taiwan_game2` 的 `D2修改版/`（2026-11-10 搬來，複本在 `_research/src_repo/`）。
**這台電腦（gh 帳號 Hans-Hanlin）對舊 repo 沒有推送權限** → 舊書籤網址 `jtnhrbpvvm-spec.github.io/.../d2_zh.js` 不會再更新。
新的發佈點目前是本地伺服器 `http://localhost:8790/d2zh/d2_zh.js`；要不要另開公開 repo（像 RO 的 Hans-Hanlin/ro_zh）**先問使用者**。
姊妹專案：`C:\RO網頁版中文化\`（同樣做法：鏡像＋本地伺服器＋書籤）。

## 📖 Session Start：先讀
1. `開發日誌.md` — 進度與決策
2. `docs/本地伺服器.md` — 本地版架構、素材怎麼來
3. `回應.txt` — 玩家回報與回覆（書籤裡「回報內容」讀的就是這個檔）

## 🏗️ 架構速覽
```
d2_zh.js            ← 書籤本體＝唯一原始碼（手寫、6800 行，直接改；CRLF 換行）。D2ZH_VERSION 每次發布 +1，並在 D2ZH_NEWS 加更新說明
回應.txt            ← 玩家回報回覆（改了不用升版）
index.html / 安裝書籤.html / 書籤匯入檔.html ← 書籤教學頁（本地伺服器 /d2zh/ 提供，網址已改成 localhost:8790）
desktop/            ← 電腦安裝版（D2 Survivors.exe）注入器；d2zh-inject.cjs 的更新來源已改成 localhost:8790/d2zh/
                       （D2倖存者中文化.zip 還是舊的，改了要用 make-zip.ps1 重包）
tools/local_server/server.js ← 本地伺服器（零依賴）：靜態鏡像＋注入 d2_zh.js＋/api 轉送官方排行榜＋缺檔補抓
tools/mirror_assets.js       ← 遊戲網頁鏡像（html/js/css/wiki 頁…）→ _research/mirror/
tools/mirror_d2.js           ← 官方代管的 Diablo II 素材（/d2/）完整下載 → _research/mirror/d2/
tools/mirror_rollback.js     ← 遊戲版本回滾
tools/check-update.js        ← 官方新版有哪些字串書籤還沒翻（用韓文表當全字串清單）
本地伺服器.bat / 更新遊戲.bat / 開啟Claude.bat
```

## 🔑 遊戲內部關鍵（2026-11-10，build 20261105.3，入口 game-DQod_2Te）
- Vite 打包，`assets/*-HASH.js` 檔名帶雜湊；縮寫名每版都變 → **靠內容／形狀找，不靠名字**（d2_zh.js、d2zh-inject.cjs 都是這樣）。
- Diablo II 素材：網頁版 `site.json {"hostedFiles":true}` → 官方伺服器代管轉好的素材在 `/d2/`；
  `play/index.html` 的 `<script id="d2-files">` = `{hashes:{資料夾:雜湊}, webp:[改用 webp 的資料夾], recolors:[...]}`，網址帶 `?h=雜湊`。
  玩家也可選自己的 D2 檔（setup.html → 解到 OPFS，sw.js 攔 `/d2/` 從 OPFS 回）。OPFS／Service Worker 需要安全環境 → **只有 localhost 或 https 能玩，區網 IP 的 http 不行**。
- 排行榜：同網域 `/api/leaderboard`（POST /checks、/deaths、/runs；GET /tiers、/boards/x、/players…）。本地伺服器轉送官方；`--offline` 回 503。
- d2_zh.js 的旗標：`__D2ZH_DESKTOP`（電腦版注入）、`__D2ZH_LOCAL`（本地伺服器注入）→ `D2ZH_AUTO`＝不用點書籤、重新載入自動恢復中文；`__D2ZH_BASE` 附屬檔位置。
- 「書籤修改」要先在面板「啟用」，啟用時會自動關掉排行榜上傳（`leaderboard.off`）— 這是舊版就有的設計，保留。

## ⚠️ 約定
- `_research/` 是下載的遊戲檔／暴雪素材，**不可推上公開 repo**（已在 .gitignore）。
- commit 可以直接做；**push、建公開 repo、刪檔先問**。這個環境會靜默擋刪除（rm 顯示成功但檔案還在）。
- 用 bash 寫含反斜線／反引號的程式會被吃掉 → 用 Write／Edit 工具。
- 改 d2_zh.js 後：`node --check d2_zh.js`，重新整理本地遊戲頁就生效（伺服器不用重開）。
