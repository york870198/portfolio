# 英文版網站實作計畫

Status: ready-for-agent

## 目標與邊界

在既有 Vue 3／Vue Router 網站新增英文版，以 i18n 管理可翻譯文字，以 Router Query 表示網站語言版本，讓招聘方從 Navbar 切換。此文件是實作計畫；本次不修改產品程式碼。

既有中文內容原樣保留。英文翻譯維持相同個人事實、語氣與六個面向，不增加資歷、績效或技術能力。完整履歷有自己的措辭，不強迫與分頁逐字共用。

中文版目前使用的英文一律視為固定設計文字，兩個版本都保留；不能因套用 i18n 而把 Home／Who 等改成中文，也不能改写原有英文。

## 已確認的現況

- package.json 只有 Vue 與 Vue Router，尚未引入 i18n 或測試框架。
- HomeView、六個面向、ResumeView、NotFoundView 與共用元件都有硬編碼中文；資料陣列也包含中文。
- AboutView 已不在路由使用，/about 重新導向 /who；不為未使用頁面建立另一套翻譯內容。
- NavigationLink 現在只接受字串，實際 href 與 router.push 都未加入語言。
- Navbar 透過 iframe 載入 /resume 列印，失敗時導向 /resume?print=true；ResumeView 也支援 auto=true，返回首頁目前直接 push('/')。
- Router 已有尾斜線正規化、頁面標題更新與捲動行為。App 只在 path 改變時轉移標題焦點。
- index.html 的 lang 與 description 是中文。build-pages.mjs 為 GitHub Pages 建立各路徑靜態入口，不依語言預渲染內容。

## 建議的語言契約

以下是本計畫的預設，可在實作前調整；i18n 與 Router Query 為使用者指定方向。

| 輸入／操作 | 預期結果 |
| --- | --- |
| 沒有 lang | 繁體中文版，舊網址仍可使用 |
| ?lang=zh-TW | 繁體中文版 |
| ?lang=en | 英文版 |
| 不支援、空值或重複 lang | 繁體中文版；以 replace 移除無效 lang，保留其他 query 與 hash |
| Navbar 切換 | push 更新 lang，保留目前 path、其他 query、hash；上一頁可回到前一語言 |
| 切換到中文 | 使用明確的 lang=zh-TW；無參數舊網址仍有效 |
| 英文版站內跳頁／另開分頁 | 目的頁 href 與 router.push 都帶 lang=en |
| 中文版站內跳頁 | 明確 lang=zh-TW 可延續；原本無 lang 的瀏覽保持無 lang |
| 外部連結、mailto | 不附加網站語言參數 |

URL 是語言狀態唯一來源。第一版不使用瀏覽器語言偵測或 localStorage 偏好，避免相同網址因讀者裝置而呈現不同版本。正常導航只延續語言；print／auto 等其他 query 不應無條件散播到其他頁。

切換同頁語言不重設捲動或觸發頁面切換動畫；保留既有 hash，其他跨頁與上一頁捲動規則照常。語言同步與 metadata 更新必須涵蓋初始載入、query 變更、上一頁／下一頁。首次 mount 前完成同步，避免英文網址先閃出中文。

## 文字管理

| 類別 | 處理 |
| --- | --- |
| 固定設計文字 | 保留目前模板或共用常數，建立逐項核對清單 |
| 可翻譯文字 | 抽為語意明確的 message key，繁中與英文一一對應 |
| 個人事實與結構 | email、URL、年份、圖示、route、色彩、技術名詞與順序維持共用 |

固定設計文字清單至少涵蓋 Navbar 的 Home／Who／When／What／Where／Why／How、Portfolio.、首页 Everything about、INDEX、章節 WHO 等、既有英文標籤與 footer。完整履歷中的 Senior Frontend Developer、Taipei, Taiwan 等原有英文也保留。

混合中英的段落仍以完整句意翻譯，技術名稱原樣保留；不能以「含英文」判定整句不翻譯。對中英並列職稱等情況，只翻譯中文部分、保留原英文節點，即使英文版產生相似表述也不自行刪掉固定文字。核對時另記錄這些版面情境供閱讀檢查。

採用 Vue I18n 的 Composition API（legacy: false、global scope）。建議新增 src/i18n/index.ts、src/i18n/locale.ts、src/i18n/locales/zh-TW.ts 與 en.ts；依 common／home／who／when／what／where／why／how／resume／notFound 分組。先同步載入兩份 messages，無需為兩個版本增加 lazy-loading 狀態。

翻譯陣列以穩定 ID／message key 對應結構，不在 setup 初始化時把 t() 結果存進固定陣列；在 template 或 computed 中求值，確保同頁切換立即生效。相同語意才共用 key，完整履歷與分頁的不同敘述分開保存。

段落、列表、連結與強調保留語意 HTML，使用分段 key 或 i18n-t 的 slot interpolation；不以 v-html 注入整頁譯文，不以中文原文作 key。Email 等包含 @ 的內容用 interpolation，避免與 message 語法衝突。

fallbackLocale 使用 zh-TW 作執行期保護，但驗收必須檢查兩份 keys／插值一致，不能讓 fallback 掩蓋未完成英文翻譯。

## Router 與導覽接點

- 建立純函式解析 lang，以及組裝帶語言的內部 route location；i18n locale 由解析結果同步，Navbar 只修改 Router。
- 與既有尾斜線 guard 整合，避免重導向迴圈；確認 /about?lang=en 的 redirect 保留 query 與 hash。
- NavigationLink 讓 RouterLink href 與 follow() 使用同一個解析後目標，保留 Ctrl／Cmd 點擊、新分頁與既有 View Transition。
- 覆蓋首頁卡片、品牌、Navbar、PageHeader、ResumeView／NotFoundView 的返回首頁；保留 aria-current 的頁面判斷。
- 同步 document.documentElement.lang（zh-TW／en）、頁面 title 及 description。原有英文 title 片段不改，中文的履歷與 404 標題依語言翻譯。
- GitHub Pages 的同一路徑入口可以服務不同 query，不需要新增 /en 路徑或多一組靜態目錄。直接載入、重新整理與未知路徑仍需驗證 query 是否保留。

## Navbar 與完整履歷

新增 LanguageSwitcher，呈現固定自稱「繁體中文／English」，以鍵盤可操作控制與清楚的目前選取狀態放入 Navbar。桌機及行動版均可切換，檢查 320px／375px／440px／1100px 附近空間，確保不遮住聯絡與選單。

按鈕、準備中狀態、選單名稱、skip link、title、aria-label、sr-only 與複製 Email 成功提示都納入 i18n。固定設計英文維持原文，可視需要標註 lang=en 供輔助閱讀。

Navbar 列印 iframe 透過 router.resolve 取得符合 BASE_URL 的履歷網址，攜帶點擊當下語言，不帶 print／auto 以避免重複列印。失敗備援只加入 print=true 並保留同一語言。處於 /resume 時直接列印目前版本；英文網址直接開啟 print／auto 也必須列印英文。準備期間切換語言時，當次列印仍以點擊時語言為準。

## 實作順序

1. [01：文字盤點與翻譯資源](issues/01-content-and-catalogs.md)：先固定中文基準與固定設計文字清單，準備完整雙語 messages。
2. [02：語言路由與 i18n 初始化](issues/02-locale-routing.md)：建立語言契約與共用導覽目標，完成初始化及 metadata 同步。
3. [03：全站接入與切換控制](issues/03-localized-experience.md)：接入所有在用頁面與元件，新增 Navbar 切換及完整履歷列印。
4. [04：功能、版面與部署驗收](issues/04-acceptance.md)：驗證完整情境，修正翻譯長度造成的問題。

01 與 02 完成後進行 03；04 驗收 03。此順序不授權部署，也不要求修改既有其他功能。

## 驗收情境

- 中文版與目前基準一致，除了新增語言切換控制；既有英文逐項核對未改動。
- 所有實際路由的英文版可完整閱讀，沒有未翻譯的中文操作提示或 raw message key；中文缺 key fallback 不算通過。
- /who?lang=en#example 切中文後仍在 /who 且保留 hash；上一頁還原英文。
- /resume?lang=en&print=true 正確初始載入英文再列印；Navbar iframe 與失敗備援同樣遵守語言。
- /about?lang=en、/who/?lang=en、未知路徑?lang=en 正確處理；其他 query 不被正規化丟掉。
- 站內 href／新分頁保留語言，外部社群 URL 不變；print 參數不因普通跳頁造成再次列印。
- 桌機／行動 Navbar、六個面向卡片、長英文段落、深淺主題與英文列印沒有溢出、裁切或重疊。
- 鍵盤可切語言、選取狀態可辨識，輔助文字與 html lang 對應目前版本。
- npm run build 通過；在 production base /portfolio/ 的 preview 或等效靜態服務驗證直接載入和重新整理，記錄瀏覽器驗收結果。

為 locale 解析／route 組裝加入小型純函式測試，並覆蓋 query 切換、列印與 redirect 等真正容易回歸的整合情境；不為每段翻譯建立鏡像測試。既有專案沒有測試工具，實作時選最小需要的工具並記錄命令。

## 第一版限制

此計畫提供可分享的英文 query URL 和客戶端 metadata。現行靜態入口仍共用 index.html，因此不能保證社群預覽或不執行 JS 的搜尋器取得英文內容；多語預渲染與獨立社群預覽不納入本次。

## 官方參考

- Vue I18n Composition API：https://vue-i18n.intlify.dev/guide/advanced/composition
- Vue Router Redirect and Alias：https://router.vuejs.org/guide/essentials/redirect-and-alias.html
