# 02：建立 Router Query 語言契約與 i18n 初始化

Status: ready-for-agent
Completed: 2026-10-01

依 ../spec.md 新增 Vue I18n Composition API，實作 lang 解析、無效值正規化、語言導覽目標與 URL 到全域 locale／metadata 的同步。調整 NavigationLink，使 href 與程式導航使用相同目標；保留既有動畫、特殊點擊與 redirect。

驗收：首次載入與 query／歷史變更正確；舊網址預設中文；尾斜線與 /about 不丟語言；普通導覽不延續 print／auto；同頁切換不重設捲動。locale／route 純函式有邊界情境測試。

## 完成結果

Vue I18n 11 Composition API 已安裝並於 router 啟動前註冊。locale.ts 提供語言解析、網址正規化、站內目標與同頁語言切換目標；URL 是語言唯一來源。Router 在成功導航後同步 locale、html lang、title 與 description，首次 mount 等待 router.isReady。NavigationLink 的 href／push 共用目標，保留特殊點擊與跨頁動畫；Resume／404 返回首頁沿用語言。同頁 query 更新保留捲動，歷史 savedPosition 仍恢復。

新增 Vitest 3／jsdom 26，與既有 Vite 6、Node 22.17 相容。npm test 先檢查測試型別，再執行純函式與實際 Vue／Router 的整合測試。2026-10-01：19 個測試通過；npm run check:locales 通過（142 messages）；npm run build 通過。

本次使用者追加要求：保留 ef55a00 的文化／禮儀修訂，將 Resume 已刪除的 Who 敘述從字典移除、共用現有 who.identity 詞彙，清除空列表；How 的部署名詞對齊人工修訂。保留 #01 原始 inventory，另存 editorial-revisions.json 記錄中文修訂、退休 keys 與必要的英文 token 例外。Metadata 的 literal | 已正確 escape，實際 title 維持原文分隔符。

全站內文接入、Navbar LanguageSwitcher 與列印 iframe 的語言傳遞屬 #03；目前 query 已同步 i18n 與 metadata，但尚未將既有硬編碼內文改為 t()。
