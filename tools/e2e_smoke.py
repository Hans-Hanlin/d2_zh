# 本地版冒煙測試：開 http://localhost:8790/ → 關掉更新說明 → 開始遊戲 → 選第一個英雄 → 進入一局，截圖到 _research/shots/
#   用法：先開本地伺服器（可加 --offline），再 python tools/e2e_smoke.py
#   會用 Playwright 自帶的 Chromium（全新設定檔，等於第一次玩的玩家）
import os, sys, time, json
from playwright.sync_api import sync_playwright

URL = os.environ.get('D2_URL', 'http://localhost:8790/')
OUT = os.path.join(os.path.dirname(__file__), '..', '_research', 'shots')
os.makedirs(OUT, exist_ok=True)

def shot(page, name):
    p = os.path.join(OUT, name + '.png')
    page.screenshot(path=p)
    print('截圖', os.path.abspath(p))

with sync_playwright() as pw:
    b = pw.chromium.launch(headless=True, args=['--use-angle=d3d11', '--enable-gpu'])
    page = b.new_page(viewport={'width': 1280, 'height': 800})
    bad = []
    page.on('response', lambda r: bad.append(f'{r.status} {r.url}') if r.status >= 400 else None)
    errors = []
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.goto(URL, wait_until='load')
    time.sleep(8)
    for label in ['我知道了', '知道了']:
        btn = page.get_by_role('button', name=label, exact=True)
        if btn.count():
            btn.first.click(); time.sleep(1)
    shot(page, '01_title')
    page.mouse.click(640, 400); time.sleep(3)          # 點擊任意鍵
    shot(page, '02_menu')
    page.mouse.click(640, 410); time.sleep(4)          # 開始遊戲
    shot(page, '03_start')
    for step in sys.argv[1:]:                           # 額外步驟：x,y 或 key:Enter 或 wait:秒
        if step.startswith('key:'): page.keyboard.press(step[4:])
        elif step.startswith('wait:'): time.sleep(float(step[5:]))
        else:
            x, y = map(int, step.split(',')); page.mouse.click(x, y)
        time.sleep(2)
    shot(page, '04_after')
    info = page.evaluate('({zh: window.__D2ZH_VERSION, local: window.__D2ZH_LOCAL})')
    print('書籤', json.dumps(info))
    print('HTTP 錯誤', len(bad)); [print(' ', x) for x in bad[:20]]
    print('頁面錯誤', len(errors)); [print(' ', x[:200]) for x in errors[:10]]
    b.close()
