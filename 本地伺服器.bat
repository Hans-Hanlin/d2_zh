@echo off
chcp 65001 >nul
cd /d "%~dp0"
title D2 Survivors 本地伺服器
rem D2 Survivors 本地伺服器（http://localhost:8790/），自動套用 d2_zh.js 繁中＋書籤修改。
rem 參數：--offline 完全不連外網（排行榜離線、缺的素材不補抓）；--no-zh 原版英文；也可指定連接埠，例如 本地伺服器.bat 8791
where node >nul 2>nul || (echo 找不到 Node.js，請先安裝 https://nodejs.org/ & pause & exit /b 1)
if not exist "_research\mirror\play\index.html" (
  echo 第一次執行：下載遊戲網頁...
  node tools\mirror_assets.js || (pause & exit /b 1)
)
start "" http://localhost:8790/
node tools\local_server\server.js %*
pause
