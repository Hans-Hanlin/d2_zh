@echo off
chcp 65001 >nul
cd /d "%~dp0"
title 更新 D2 Survivors 本地鏡像
rem 1) 遊戲網頁換成官方最新版（舊版自動備份，可用 node tools\mirror_rollback.js 切回）
rem 2) Diablo II 素材補齊／官方更新過的重抓（第一次約數百 MB，可中斷，重跑會接著抓）
rem 3) 檢查官方新版有沒有書籤還沒翻到的字串
echo [1/3] 更新遊戲網頁...
node tools\mirror_assets.js || goto :err
echo.
echo [2/3] 下載 Diablo II 素材...
node tools\mirror_d2.js || goto :err
echo.
echo [3/3] 檢查新字串（書籤沒翻到的）...
node tools\check-update.js
echo.
echo 完成。本地伺服器開著的話，重新整理遊戲頁面就是新版。
pause
exit /b 0
:err
echo 失敗，請看上面的錯誤訊息。
pause
exit /b 1
