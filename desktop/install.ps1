# D2 Survivors 安裝版 繁體中文 一鍵安裝／移除
#   安裝：  powershell -ExecutionPolicy Bypass -File install.ps1
#   移除：  powershell -ExecutionPolicy Bypass -File install.ps1 -Uninstall
#   啟動：  powershell -ExecutionPolicy Bypass -File install.ps1 -Launch   （桌面捷徑用：遊戲更新後自動重新套用）
# 做的事：
#   1. 把 d2zh-inject.cjs、d2_zh.js、本檔複製到 %APPDATA%\D2SurvivorsZH
#   2. 在遊戲 resources\app.asar 裡的 desktop\dist\main.cjs 加一行，載入上面的 d2zh-inject.cjs（需要系統管理員權限）
#   3. 在桌面建立「D2 Survivors 中文版」捷徑
param(
    [switch]$Uninstall,
    [switch]$Launch,
    [string]$PatchAsar,      # 內部用：以系統管理員身分只做 app.asar 修改
    [string]$UnpatchAsar,    # 內部用：以系統管理員身分只做 app.asar 還原
    [string]$GameDir,        # 遊戲裝在別的地方時指定（例如 -GameDir "D:\Games\D2 Survivors"）
    [switch]$ShortcutOnly,   # 只在桌面建立「D2 Survivors 中文版」捷徑（建立桌面捷徑.cmd 用）
    [switch]$Quiet
)
$ErrorActionPreference = 'Stop'
$Marker = '/*D2ZH-PATCH-v1*/'
$PatchLine = 'try{require(require("path").join(process.env.APPDATA||"","D2SurvivorsZH","d2zh-inject.cjs"))}catch(e){console.error("[D2ZH]",e)}' + $Marker
$ZhDir = Join-Path $env:APPDATA 'D2SurvivorsZH'
$ShortcutName = 'D2 Survivors 中文版.lnk'
$DesktopDir = if ($env:D2ZH_DESKTOP_DIR) { $env:D2ZH_DESKTOP_DIR } else { [Environment]::GetFolderPath('Desktop') }   # 環境變數只給測試用
$Utf8 = New-Object System.Text.UTF8Encoding($false)

function Say([string]$text, [string]$title = 'D2 Survivors 中文版') {
    if ($Quiet) { Write-Host $text; return }
    Add-Type -AssemblyName System.Windows.Forms
    [void][System.Windows.Forms.MessageBox]::Show($text, $title)
}

function Find-Game {
    if ($GameDir) { if (Test-Path (Join-Path $GameDir 'resources\app.asar')) { return $GameDir } else { return $null } }
    $remembered = Join-Path $ZhDir 'game-dir.txt'   # 安裝時記下的遊戲位置（捷徑啟動時用）
    if (Test-Path $remembered) {
        $dir = (Get-Content -LiteralPath $remembered -Encoding UTF8 -TotalCount 1).Trim()
        if ($dir -and (Test-Path (Join-Path $dir 'resources\app.asar'))) { return $dir }
    }
    # 安裝程式（electron-builder）把真正的安裝位置記在 HKLM／HKCU\SOFTWARE\<解除安裝項目名稱> 的 InstallLocation；
    # 解除安裝項目本身沒有 InstallLocation，只能從 DisplayIcon／UninstallString 取資料夾
    $candidates = @()
    foreach ($root in 'HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall', 'HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall',
                      'HKLM:\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall') {
        if (-not (Test-Path $root)) { continue }
        foreach ($key in Get-ChildItem $root -ErrorAction SilentlyContinue) {
            $p = Get-ItemProperty $key.PSPath -ErrorAction SilentlyContinue
            if ($p.DisplayName -notlike 'D2 Survivors*') { continue }
            foreach ($hive in 'HKLM', 'HKCU') {
                $loc = (Get-ItemProperty "${hive}:\SOFTWARE\$($key.PSChildName)" -ErrorAction SilentlyContinue).InstallLocation
                if ($loc) { $candidates += $loc.Trim('"') }
            }
            if ($p.InstallLocation) { $candidates += $p.InstallLocation.Trim('"') }
            foreach ($cmd in $p.DisplayIcon, $p.UninstallString) {
                if ($cmd -match '^\s*"([^"]+)"' -or $cmd -match '^\s*(.+?\.exe)') { $candidates += Split-Path $Matches[1] -Parent }
            }
        }
    }
    $candidates += @(
        (Join-Path $env:ProgramFiles 'D2 Survivors'),
        (Join-Path $env:LOCALAPPDATA 'Programs\D2 Survivors')
    )
    if (${env:ProgramFiles(x86)}) { $candidates += Join-Path ${env:ProgramFiles(x86)} 'D2 Survivors' }
    foreach ($dir in $candidates) {
        if ($dir -and (Test-GameDir $dir)) { return $dir }
    }
    return $null
}

function Test-GameDir([string]$dir) {
    return ((Test-Path (Join-Path $dir 'resources\app.asar')) -and (Test-Path (Join-Path $dir 'D2 Survivors.exe')))
}

# 自動找不到時讓玩家自己選遊戲資料夾（選到 resources 子資料夾也接受）
function Select-GameDir {
    Add-Type -AssemblyName System.Windows.Forms
    $dlg = New-Object System.Windows.Forms.FolderBrowserDialog
    $dlg.Description = '找不到 D2 Survivors 的安裝位置，請選擇遊戲資料夾（裡面有「D2 Survivors.exe」的那個）'
    $dlg.ShowNewFolderButton = $false
    try {
        while ($dlg.ShowDialog() -eq [System.Windows.Forms.DialogResult]::OK) {
            foreach ($dir in $dlg.SelectedPath, (Split-Path $dlg.SelectedPath -Parent)) {
                if ($dir -and (Test-GameDir $dir)) { return $dir }
            }
            Say "這個資料夾裡沒有「D2 Survivors.exe」和「resources\app.asar」，請再選一次。`n`n$($dlg.SelectedPath)"
        }
    } finally { $dlg.Dispose() }
    return $null
}

# ---- app.asar 讀寫（格式：4 位元組 4、4 位元組標頭長度、標頭 pickle（長度+JSON+補齊）、檔案資料）----
function Read-Asar([string]$path) {
    $bytes = [IO.File]::ReadAllBytes($path)
    if ([BitConverter]::ToUInt32($bytes, 0) -ne 4) { throw "不是預期的 app.asar 格式" }
    $headerSize = [BitConverter]::ToUInt32($bytes, 4)
    $jsonLength = [BitConverter]::ToUInt32($bytes, 12)
    $json = [Text.Encoding]::UTF8.GetString($bytes, 16, $jsonLength)
    return @{ Bytes = $bytes; Json = $json; DataStart = 8 + $headerSize }
}

function Find-MainEntry($asar) {
    $dist = $asar.Json.IndexOf('"desktop":{"files":{"dist":{"files":{')
    if ($dist -lt 0) { throw "app.asar 裡找不到 desktop\dist（遊戲版本可能改了，請回報）" }
    $re = New-Object Text.RegularExpressions.Regex('"main\.cjs":\{"size":(\d+),"offset":"(\d+)","integrity":\{[^{}]*\}\}')
    $m = $re.Match($asar.Json, $dist)
    if (-not $m.Success) { throw "app.asar 裡找不到 main.cjs（遊戲版本可能改了，請回報）" }
    $size = [int64]$m.Groups[1].Value
    $offset = [int64]$m.Groups[2].Value
    $content = $Utf8.GetString($asar.Bytes, [int]($asar.DataStart + $offset), [int]$size)
    return @{ Match = $m; Content = $content }
}

function Sha256Hex([byte[]]$data, [int]$start = 0, [int]$count = -1) {
    if ($count -lt 0) { $count = $data.Length - $start }
    $sha = [Security.Cryptography.SHA256]::Create()
    try { return (($sha.ComputeHash($data, $start, $count) | ForEach-Object { $_.ToString('x2') }) -join '') } finally { $sha.Dispose() }
}

# 把新的 main.cjs 接在檔案資料最後面，標頭改指向它（舊的內容留著不用，不影響其他檔案的位置）
function Write-AsarWithMain($asar, $entry, [string]$newContent, [string]$path) {
    $newBytes = $Utf8.GetBytes($newContent)
    $dataLength = $asar.Bytes.Length - $asar.DataStart
    $block = 4194304
    $blocks = @()
    for ($i = 0; $i -lt $newBytes.Length; $i += $block) { $blocks += '"' + (Sha256Hex $newBytes $i ([Math]::Min($block, $newBytes.Length - $i))) + '"' }
    $newEntry = '"main.cjs":{"size":' + $newBytes.Length + ',"offset":"' + $dataLength + '","integrity":{"algorithm":"SHA256","hash":"' +
        (Sha256Hex $newBytes) + '","blockSize":' + $block + ',"blocks":[' + ($blocks -join ',') + ']}}'
    $m = $entry.Match
    $json = $asar.Json.Substring(0, $m.Index) + $newEntry + $asar.Json.Substring($m.Index + $m.Length)
    $jsonBytes = [Text.Encoding]::UTF8.GetBytes($json)
    $pad = (4 - ($jsonBytes.Length % 4)) % 4
    $payload = 4 + $jsonBytes.Length + $pad
    $ms = New-Object IO.MemoryStream
    $w = New-Object IO.BinaryWriter($ms)
    $w.Write([uint32]4); $w.Write([uint32](4 + $payload)); $w.Write([uint32]$payload); $w.Write([uint32]$jsonBytes.Length)
    $w.Write($jsonBytes); $w.Write((New-Object byte[] $pad))
    $w.Write($asar.Bytes, [int]$asar.DataStart, [int]$dataLength)
    $w.Write($newBytes)
    $w.Flush()
    $tmp = "$path.d2zh-tmp"
    [IO.File]::WriteAllBytes($tmp, $ms.ToArray())
    $w.Dispose()
    Move-Item -LiteralPath $tmp -Destination $path -Force
}

function Test-Patched([string]$asarPath) {
    $asar = Read-Asar $asarPath
    return (Find-MainEntry $asar).Content.Contains($Marker)
}

function Patch-Asar([string]$asarPath) {
    $asar = Read-Asar $asarPath
    $entry = Find-MainEntry $asar
    if ($entry.Content.Contains($Marker)) { return 'already' }
    $backup = "$asarPath.d2zh-backup"
    Copy-Item -LiteralPath $asarPath -Destination $backup -Force
    $content = $entry.Content
    # 插在 "use strict"; 後面，main.cjs 才會維持嚴格模式
    if ($content.StartsWith('"use strict";')) {
        $nl = $content.IndexOf("`n")
        $content = $content.Substring(0, $nl + 1) + $PatchLine + "`n" + $content.Substring($nl + 1)
    } else {
        $content = $PatchLine + "`n" + $content
    }
    Write-AsarWithMain $asar $entry $content $asarPath
    if (-not (Test-Patched $asarPath)) { Copy-Item -LiteralPath $backup -Destination $asarPath -Force; throw "寫入後檢查失敗，已還原 app.asar" }
    return 'patched'
}

function Unpatch-Asar([string]$asarPath) {
    $asar = Read-Asar $asarPath
    $entry = Find-MainEntry $asar
    if (-not $entry.Content.Contains($Marker)) { return 'clean' }
    $lines = $entry.Content -split "(?<=`n)"
    $content = ($lines | Where-Object { -not $_.Contains($Marker) }) -join ''
    Write-AsarWithMain $asar $entry $content $asarPath
    Remove-Item -LiteralPath "$asarPath.d2zh-backup" -Force -ErrorAction SilentlyContinue
    return 'unpatched'
}

function Test-GameRunning([string]$gameDir) {
    $exe = Join-Path $gameDir 'D2 Survivors.exe'
    return [bool](Get-Process -ErrorAction SilentlyContinue | Where-Object { $_.Path -eq $exe })
}

# 需要時以系統管理員身分執行同一支腳本，只做 app.asar 那一步
function Test-Writable([string]$dir) {
    $probe = Join-Path $dir ".d2zh-probe-$PID"
    try { [IO.File]::WriteAllText($probe, 'x'); Remove-Item -LiteralPath $probe -Force; return $true } catch { return $false }
}

function Invoke-Asar([string]$mode, [string]$asarPath) {
    if (Test-Writable (Split-Path $asarPath -Parent)) {
        if ($mode -eq 'patch') { return Patch-Asar $asarPath } else { return Unpatch-Asar $asarPath }
    }
    $arg = if ($mode -eq 'patch') { '-PatchAsar' } else { '-UnpatchAsar' }
    try {
        $p = Start-Process powershell.exe -Verb RunAs -Wait -PassThru -WindowStyle Hidden -ArgumentList @(
            '-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', "`"$PSCommandPath`"", $arg, "`"$asarPath`"", '-Quiet')
    } catch { throw '需要系統管理員權限才能修改遊戲檔案（系統管理員確認視窗被取消了）。' }
    if ($p.ExitCode -ne 0) { throw "系統管理員步驟失敗（代碼 $($p.ExitCode)）" }
    return 'elevated'
}

function New-Shortcut([string]$gameDir) {
    $desktop = $DesktopDir
    $sh = New-Object -ComObject WScript.Shell
    $lnk = $sh.CreateShortcut((Join-Path $desktop $ShortcutName))
    $lnk.TargetPath = Join-Path $env:SystemRoot 'System32\WindowsPowerShell\v1.0\powershell.exe'
    $lnk.Arguments = "-NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File `"$(Join-Path $ZhDir 'install.ps1')`" -Launch"
    $lnk.IconLocation = (Join-Path $gameDir 'D2 Survivors.exe') + ',0'
    $lnk.WorkingDirectory = $gameDir
    $lnk.Description = 'D2 Survivors 繁體中文（遊戲更新後會自動重新套用）'
    $lnk.Save()
}

# 中文檔放到使用者自己的 AppData（不需要系統管理員）
function Copy-ZhFiles([string]$game) {
    $src = $PSScriptRoot
    $zhSource = @((Join-Path $src 'd2_zh.js'), (Join-Path (Split-Path $src -Parent) 'd2_zh.js')) | Where-Object { Test-Path $_ } | Select-Object -First 1
    if (-not $zhSource) { throw '找不到 d2_zh.js（應該跟這個檔案放在同一個資料夾，或上一層）。' }
    New-Item -ItemType Directory -Force -Path $ZhDir | Out-Null
    Copy-Item -LiteralPath (Join-Path $src 'd2zh-inject.cjs') -Destination $ZhDir -Force
    Copy-Item -LiteralPath $zhSource -Destination (Join-Path $ZhDir 'd2_zh.js') -Force
    if ($PSCommandPath -ne (Join-Path $ZhDir 'install.ps1')) { Copy-Item -LiteralPath $PSCommandPath -Destination $ZhDir -Force }
    [IO.File]::WriteAllText((Join-Path $ZhDir 'game-dir.txt'), $game, $Utf8)
}

# ---------------- 主流程 ----------------
try {
    if ($PatchAsar) { [void](Patch-Asar $PatchAsar); exit 0 }
    if ($UnpatchAsar) { [void](Unpatch-Asar $UnpatchAsar); exit 0 }

    $game = Find-Game
    if (-not $game -and -not $Quiet) { $game = Select-GameDir }
    if (-not $game) { Say '找不到 D2 Survivors 安裝版。請先從 d2survivors.lol 下載安裝遊戲，再執行這個檔案。'; exit 1 }
    $asarPath = Join-Path $game 'resources\app.asar'
    $exe = Join-Path $game 'D2 Survivors.exe'

    if ($Launch) {
        if (-not (Test-Path (Join-Path $ZhDir 'd2_zh.js'))) { Start-Process -FilePath $exe; exit 0 }
        if (-not (Test-Patched $asarPath)) {
            if (Test-GameRunning $game) { Start-Process -FilePath $exe; exit 0 }   # 遊戲已開著就只切到前面
            try { [void](Invoke-Asar 'patch' $asarPath) } catch { Say "遊戲更新後重新套用中文失敗，這次先以英文開啟。`n`n$($_.Exception.Message)" }
        }
        Start-Process -FilePath $exe
        exit 0
    }

    if ($ShortcutOnly) {
        # 只放桌面捷徑：複製中文檔，不改遊戲；第一次用捷徑開遊戲時才套用（-Launch 會處理）
        Copy-ZhFiles $game
        New-Shortcut $game
        Say ("已在桌面建立「D2 Survivors 中文版」捷徑。`n`n" +
             "用這個捷徑開遊戲就是中文：第一次開（以及每次遊戲更新後）會跳出一次系統管理員確認，按「是」即可。")
        exit 0
    }

    if (Test-GameRunning $game) { Say '請先關閉 D2 Survivors 遊戲，再執行一次。'; exit 1 }

    if ($Uninstall) {
        $r = Invoke-Asar 'unpatch' $asarPath
        Remove-Item -LiteralPath (Join-Path $DesktopDir $ShortcutName) -Force -ErrorAction SilentlyContinue
        Remove-Item -LiteralPath $ZhDir -Recurse -Force -ErrorAction SilentlyContinue
        Say '已移除繁體中文，遊戲恢復原本的英文版。'
        exit 0
    }

    Copy-ZhFiles $game
    $r = Invoke-Asar 'patch' $asarPath
    if (-not (Test-Patched $asarPath)) { throw '沒有成功修改 app.asar' }
    New-Shortcut $game
    Say ("繁體中文安裝完成！`n`n" +
         "・直接開遊戲就是中文（原本的捷徑也可以）。`n" +
         "・遊戲自動更新後中文會被蓋掉：請用桌面上的「D2 Survivors 中文版」捷徑開遊戲，它會自動重新套用（會跳出一次系統管理員確認）。`n" +
         "・選項選單裡有「語言」切換和「書籤修改」按鈕，跟書籤版一樣。")
    exit 0
} catch {
    Say "發生錯誤：$($_.Exception.Message)"
    exit 1
}
