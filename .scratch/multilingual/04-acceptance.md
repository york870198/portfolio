# #04 雙語功能與版面驗收

日期：2026-10-02（Asia/Taipei）
比較起點：8383f3e53a52335243f76d54ca94714691eed7e2
結果：程式修正與可自動驗證項目通過；原生 PDF 分頁／取消後重試仍待人工驗收，尚未宣告本票全部完成。未部署。

## 修改

- 440px 以下的完整履歷工具列改為上下排列，避免英文按鈕文字擠成多行；中文亦可正常操作。
- check:locales 現在逐項確認固定英文仍存在於原始來源，避免僅顯示歷史盤點數量而未檢查。
- 既有全站切換整合測試加入兩種語言的固定文字呈現核對；新增歷史返回的實際內容／選取值，以及 iframe 15 秒逾時後仍使用點擊當下英文的測試。
- 新增本機靜態驗收服務 preview-static.mjs，僅綁定 127.0.0.1，以 dist 目錄入口、保留 query 的目錄 301 及真正 HTTP 404 模擬 Pages，不使用 SPA rewrite。

## 自動驗證

| 命令／檢查 | 結果 |
| --- | --- |
| node node_modules/vitest/vitest.mjs run tests/localized-experience.test.ts | 18 tests 通過 |
| npm test | 含 test typecheck；5 files、37 tests 通過 |
| npm run check:locales | 143 messages 的 keys／插值／中文核准基準／英文無缺譯及 109 筆固定文字來源核對通過 |
| npm run build | vue-tsc、Vite production build、build-pages 通過 |
| dist 入口核對 | 8 個路徑入口及 404.html 與 index.html 相同，assets 使用 /portfolio/ base |
| HTTP 檢查 | 根目錄與既有入口 200；about 目錄 301 保留 lang/source；未知路徑回 404 並提供應用 shell |
| git diff --check | 通過 |

列印整合測試涵蓋直接 print／auto、iframe 成功／失敗／逾時／卸載、無重複列印與語言快照。print() 在 DOM 測試中模擬；不能取代原生 PDF 分頁確認。

## 瀏覽器驗收

瀏覽器：Codex In-app Browser（本機 Chromium）。URL：http://127.0.0.1:4180/portfolio/；執行 `npm run build` 後以 `node .scratch/multilingual/preview-static.mjs` 啟動。

機器可讀結果：04-browser-results.json（157 筆）。144 組版面檢查：英文 9 個頁面 × 6 種寬度 × 深淺主題，共 108；中文 9 頁 × 320/1280px × 深淺主題，共 36。另記錄 9 頁重新整理與 4 組正規化。

| 情境 | 結果 |
| --- | --- |
| 首頁、六個面向、完整履歷、404 英文直接載入 | html lang=en；內文無中文、raw key；metadata 正確 |
| 英文上述 9 頁重新整理 | 保留英文 query，完整呈現；未知路徑仍是 HTTP 404 |
| 英文 320/375/440/1100/1101/1280px，深淺主題 | 無水平溢位或文字容器溢出；深色版逐寬度核對 Navbar 控制矩形無重疊，另檢視桌機／手機截圖 |
| 中文 320/1280px，深淺主題 | 中文內文與固定英文可閱讀，無水平或文字容器溢出 |
| 鍵盤 ArrowUp 切中文、Tab 移焦、上一頁返回 | 原生 select 選取值與輔助標籤更新；path、source query、hash 保留；返回英文 |
| 同頁切換 | Router scrollBehavior 測試確認不重設；瀏覽器選單焦點保留。位於頁尾時翻譯後內容縮短，瀏覽器依法夾限可用最大捲動位置 |
| /about?lang=en&source=cv#intro 及重新整理 | 轉到 /who，query/hash 保留且英文正確 |
| /who/?lang=en、lang=fr、重複 lang | 尾斜線移除；無效／重複 lang 移除且保留 source/hash，回到繁中 |
| /who 無 lang | 保持無 lang、繁中 |
| Ctrl 點擊 When 另開分頁 | 新分頁 /portfolio/when?lang=en；標題 Experience、html lang=en |
| 外部 URL 與 mailto | 保持原網址，不加入 lang |
| 複製 Email | English 顯示 Email address copied；DOM 測試亦涵蓋同頁切換的中文提示 |
| 手機完整履歷工具列與長英文頁尾 | 320px 按鈕各占一列，文字正常閱讀；最後 How 段落與 footer 無裁切 |

畫面附件（本機，未納入 Git）：04-desktop-en.jpg、04-mobile-resume-en.jpg。

## 尚待人工驗收

內建瀏覽器點擊完整履歷列印按鈕及 Navbar 下載時，原生 print() 使瀏覽器控制命令無法完成；目前可用工具沒有原生列印預覽／PDF 匯出與桌面控制能力。已驗證入口和程式呼叫，未取得實際 PDF，也未把模擬 print 測試當成 PDF 通過。沒有可用的第二種瀏覽器連線。

請用 Chrome／Edge 完成以下檢查，回報後才能標記本票 Completed：

1. 開啟 /portfolio/resume?lang=en&print=true 及 auto=true，確認首次列印內容是英文，各只開啟一次對話框。
2. 從英文六個面向頁的 Navbar 使用 Download resume，確認列印英文、只開啟一次，取消後可再次下載；列印準備中切換語言時當次仍為英文。
3. 以 A4 儲存 PDF，確認所有六個面向、固定英文、長段落和技能欄均完整，沒有裁切、異常空白頁或隱藏 Navbar／工具列出現在紙本。
4. 中文版也列印一次，確認原有內文正常；如需跨瀏覽器驗收，在另一個瀏覽器重複 1–3。

## 客戶端 metadata 限制

英文網址提供可分享的 query 與執行 JavaScript 後的 html lang、title、description。各語言仍使用同一份靜態 HTML，初始 source 是繁中；不執行 JavaScript 的搜尋器或社群預覽機器人不保證取得英文 metadata。本次未新增多語預渲染、獨立社群預覽或 /en 目錄。
