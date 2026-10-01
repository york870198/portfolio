# #03 實作與驗證

日期：2026-10-01

- 全部在用頁面、Navbar、提示與輔助文字接入 messages；保留固定英文和使用者已調整的英文文案。新增網站語言的輔助標籤，共 143 個有效 message keys。
- 技能、社群和首頁導覽陣列保留穩定 ID，於模板翻譯，切換語言後立即更新。
- 原生 Navbar select 顯示目前語言，保留同頁 query/hash；桌機與手機均可操作。
- 下載履歷 iframe 和錯誤備援使用點擊時的語言，iframe 不帶 auto/print；直接 print/auto 入口等候內容與字型再列印。卸載取消備援，afterprint 清除 iframe。

## 自動驗證

`npm test`：5 個 test files、35 tests 通過（含 typecheck）。新增全站雙語切換、動態陣列、複製提示、手機選單、英文直接列印、iframe 成功／失敗／卸載流程。列印呼叫在 DOM 測試中模擬，不代表實際瀏覽器 PDF 分頁驗收。

`npm run check:locales`：143 keys 通過。

`npm run build`：vue-tsc 和 Vite production build 通過。

## 瀏覽器檢查

本機 Vite 頁面檢查 320、375、440、1100、1101、1280px 寬度，確認 Navbar 無水平溢位或控制重疊、行動控制保留 44px 觸控尺寸。驗證原生語言選单同頁中英切換、選取值、手機選單與英文內容。600px 以下使用兩列 Navbar。

截圖：03-navbar-desktop.jpg（本機驗證附件，未納入 Git）。完整實際 PDF 列印、跨瀏覽器與正式部署驗收留於 #04。

## Code review

固定比較點：3d5719f106c780003c68153e7d0f2fc2febe1248；實作提交：b195071。

Standards：0 項需修正；1 項可選 Duplicated Code 建議：What 和 Resume 的共用技能定義可集中，以 ID 挑選各自子集。此次保留既有內容差異，未擴大重構。

Spec：0 項問題；全站文字、語言切換、固定英文及點擊時語言列印符合 #03。審查者另行重跑 35 tests 和 143 messages 檢查皆通過。
