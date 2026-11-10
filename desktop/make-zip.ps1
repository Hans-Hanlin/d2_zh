# 重新打包電腦安裝版下載檔 desktop\D2倖存者中文化.zip（改過 d2_zh.js 或安裝程式後執行一次）
#   powershell -ExecutionPolicy Bypass -File make-zip.ps1
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem
$here = $PSScriptRoot
$folder = 'D2繁體中文-電腦安裝版'
$files = [ordered]@{}
foreach ($name in '使用說明.txt', '建立桌面捷徑.cmd', '安裝中文版.cmd', '移除中文版.cmd', 'install.ps1', 'd2zh-inject.cjs') { $files[$name] = Join-Path $here $name }
$files['d2_zh.js'] = Join-Path (Split-Path $here -Parent) 'd2_zh.js'

$zip = Join-Path $here 'D2倖存者中文化.zip'
if (Test-Path $zip) { Remove-Item -LiteralPath $zip -Force }
$stream = [IO.File]::Open($zip, [IO.FileMode]::CreateNew)
# 檔名用 UTF-8、資料夾分隔用 /，Windows、Mac 解壓縮中文檔名都正確
$archive = New-Object IO.Compression.ZipArchive($stream, [IO.Compression.ZipArchiveMode]::Create, $false, [Text.Encoding]::UTF8)
try {
    foreach ($name in $files.Keys) {
        $bytes = [IO.File]::ReadAllBytes($files[$name])
        if ($name -like '*.txt' -and -not ($bytes.Length -ge 3 -and $bytes[0] -eq 0xEF)) {
            $bytes = [byte[]](0xEF, 0xBB, 0xBF) + $bytes   # 說明檔加 BOM，Windows 記事本才不會亂碼
        }
        $entry = $archive.CreateEntry("$folder/$name", [IO.Compression.CompressionLevel]::Optimal)
        $out = $entry.Open()
        try { $out.Write($bytes, 0, $bytes.Length) } finally { $out.Dispose() }
    }
} finally { $archive.Dispose(); $stream.Dispose() }
Write-Host "已建立 $zip ($([math]::Round((Get-Item $zip).Length / 1KB)) KB)"
