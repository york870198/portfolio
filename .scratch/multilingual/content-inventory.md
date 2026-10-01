# #01 文字盤點與接入指引

基準 commit：`d7dfa69ac4472e7bb77df17fe9daf35d6fa87bea`。

雙語字典：`src/i18n/locales/zh-TW.ts`、`src/i18n/locales/en.ts`。本票只新增資源，不接入元件或安裝 Vue I18n；繁中資料是既有用字，英文維持相同事實與原有口吻。

## #02 更新：使用者編修與 Resume 對齊

使用者在 ef55a00 手動調整英文文化／禮儀及部分中文。這些編修優先於 #01 的逐字保留原則；[editorial-revisions.json](editorial-revisions.json) 記錄已確認的中文修訂、英文措辭例外與退休 keys。原始盤點保留歷史，不重新產生來源雜湊。

Resume Who 回答已由使用者改成與 WhoView 相同的後端／設計敘述，移除 Svelte／Angular 與協作列表。兩份字典移除不再使用的 resume.who keys，#03 接入時共用 who.identity.backend／design，保留其已人工潤飾的英文。完整履歷的離職交接、網站規劃與社群描述仍獨立保存。技能項目數量仍以 Resume 現有資料為準，不自動增加 What 頁面項目。

固定英文節點保留；中文段落中的用語依人工修訂對齊，例如 side project、JavaScript、GitHub Actions／GitHub Pages。HowView 的部署說明同步已編修字典的 GitHub 名稱；Resume 空白列表移除。Resume 的固定 Senior Frontend Developer 仍保留，人工編修的 profile.title 為 Senior Frontend Engineer。

Metadata messages 的 `|` 使用 Vue I18n literal interpolation `{'|'}`，實際標題維持原有分隔符，避免被當成 plural separator。

## 可翻譯文字清單

完整逐項清單在 [content-inventory.json](content-inventory.json)，每筆包含原始檔案、基準行號、原文、分類及對應 message key。基準行號只用於本次盤點；後續接入時可用 key 與原文查找。相同語意共用 key，首頁卡片與頁面標題保留各自上下文。

| 範圍 | key 分組 | 包含內容 |
| --- | --- | --- |
| App／共用導覽 | common | skip link、六個面向、更多細節、返回首頁 |
| Navbar | common.navbar | 桌機／行動導覽 aria-label、下載／準備狀態、聯絡、選單、iframe title |
| QuickContact | common.contact | 預設按鈕、Email tooltip、複製成功提示 |
| ThemeToggle | common.theme | 淺／深主題 title 與 aria-label |
| ProjectCard | common.project | GitHub／Live Demo 的中文 title；目前在用頁面未引用，仍盤點共用元件既有提示 |
| index.html／Router | common.metadata | description、完整履歷與 404 頁面標題中的中文部分 |
| 首頁 | home | 各面向卡片的中文 title／subtitle |
| 六個面向 | who／when／what／where／why／how | 標題、副標、提問、highlight、回答、列表與資料陣列 |
| 完整履歷 | resume，以及語意相同的六個面向 keys | 工具列、個人摘要、獨有回答、技能／社群描述 |
| 404 | notFound | 標題與說明，返回按鈕使用 common.backHome |

`/about` 已 redirect 到 `/who`，不盤點未使用的 AboutView。QnACard 只有傳入文字及固定 Q 編號，NavigationLink 沒有可翻譯內文。註解、selector、錯誤診斷與 CSS 不屬於閱讀內容。public/404.html 是既有舊 redirect 檔；建置的 404.html 由 build-pages.mjs 以應用入口產生，因此網站的 404 內文以 NotFoundView 為準。

## 固定設計文字清單

JSON 中 `category: fixed` 記錄每一個出現位置，以下按用途整理。後續票不能將這些字改寫或移除：

- 品牌：`Fay`、`Fay Chung`、`Portfolio.`。
- Navbar：`Home`、`Who`、`When`、`What`、`Where`、`Why`、`How`。
- Router／章節／首頁圖案：`HOME`、`WHO`、`WHEN`、`WHAT`、`WHERE`、`WHY`、`HOW`；首頁 `WHO · WHEN · WHAT` 與 `WHERE · WHY · HOW`。
- 首頁：`Everything about `（包含尾端空白）、`INDEX ↓`。
- 標籤：`Senior Frontend`、`React & Vue`、`Full-Stack Mindset`、`Web Development`、`UI/UX`、`RWD`。
- 英文技能項：`Vue 3 (Pinia / Vue Router)`、`React 18+ (Functional component / Redux)`、`Vite / pnpm`、`PWA`、`Node.js / Express`、`RxJS`、`RESTful API`、`MySQL`、`API Mocking`、`CI/CD (GitHub Actions / Pages)`、`Vitest`。
- 原有強調節點：`Vue 3`、`React`、`Tauri：`、`Flutter：`、`Python：`。保留技術名稱與節點，不把強調移成整頁 HTML 字串。
- 社群／連結文字：`GitHub`、`Plurk`、`LinkedIn`、`Cake`、`Live Demo`；個人 Email、`github.com/york870198`、`linkedin: Fay-Chung`。
- 完整履歷：`Senior Frontend Developer`、`(Taipei, Taiwan)`。
- 頁面 title 的既有英文：`Home | Portfolio of Fay` 等七個面向入口 title、`Portfolio of Fay`；履歷 title 的 ` | Portfolio of Fay` 和 404 title 的 ` | Portfolio` 保留在對應 message 中。
- Footer：`Portfolio. Built with Vue 3 & TypeScript.`；年份、© 與其他章節數字／符號維持既有結構。

混合中文句子仍翻譯整句，原有英文技術與產品名原樣保留；例如 NodeJS、Design System、Figma、Hacker News、HTML / CSS / JS、JS Developer、Google Antigravity、Gemini、Google UX Design Certificate、Javascript、Github Action／Github Pages。原文大小寫不順手修正。技能中的 `TypeScript`、`WebSocket`、`UI/UX`、`QA` 與 `RWD` 保留，只翻譯中文部分。

## 插值與結構接入

| message | 插值 | 接入方式 |
| --- | --- | --- |
| who.identity.architecture | vue、react | 使用 i18n-t named slots，插入既有 strong 節點，分頁及履歷共用同一句 |
| common.contact.copyEmail | email | t() named interpolation；傳入 Email，避免字典內直接寫含 @ 的地址 |
| resume.profile.location | location | 插入固定 `(Taipei, Taiwan)`，只翻譯「台灣 台北」部分 |

每個原有 br 前的句子有自己的 key，保留段落／換行／列表／strong 與連結結構。字典不包含 HTML。i18n-t 的命名 slot 讓英文可以調整 Vue 3／React 的語序，避免把句子切成不自然的中英共用片段。source inventory 中三個原始 text fragment 因此對應同一個 architecture key。

完整履歷的中文職稱翻譯為 `Senior frontend engineer`，固定英文職稱 `Senior Frontend Developer` 仍保留；中文地點翻譯為 `Taipei, Taiwan`，原有 `(Taipei, Taiwan)` 也保留。英文版可能出現相似表述，#03／#04 應檢查排版，但不得自行刪掉固定節點。

技能與社群資料用穩定 ID 對應 keys，仍共用原有 icon／URL／技術名詞。Resume 的 skills 只有原有項目，不能因 What 有 PWA／瀏覽器差異／WebSocket 就新增到履歷。Resume 的離職交接敘述、Svelte／Angular、協作列表、網站製作說明與社群描述分開保存，不能直接拿分頁譯文覆蓋。

## 驗證

`node scripts/check-locales.mjs` 檢查雙語 leaf keys、非空字串、插值一致、HTML／@ 語法風險、英文缺譯、既有英文名詞／數字與原始文字對應完整性。

`node scripts/check-locales.mjs --source-baseline` 額外檢查既有網站檔案 SHA-256 全部未變；此旗標供 #01 驗收使用，#02／#03 合理修改元件後不再適用。盤點 JSON 是固定的原文基準，不應從改過的元件重新產生來掩蓋差異。

英文以閱讀自然、保留幽默與個人事實為準。技能年資、2021／2026 時點、4+ 年、四年半、不到一年、一比五時間等已逐段核對；catalog checker 的數字檢查不能取代這些語意核對。
