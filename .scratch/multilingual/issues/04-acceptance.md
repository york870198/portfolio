# 04：完成雙語功能與版面驗收

Status: ready-for-human
Blocked by: 03

執行 ../spec.md 全部驗收情境與 npm run build；檢查語系 key／插值完整性、固定設計文字清單、路由／query／歷史／redirect、直接載入、production base、英文列印及行動版排版。加入必要的高風險整合測試，記錄測試命令與瀏覽器檢查結果於本功能目錄。

驗收：所有情境通過，無英文缺譯 fallback、raw key、文字溢出或語言遺失；明確記錄客戶端 metadata 的限制，不自動部署。

## Comments

2026-10-02：程式修正與可自動驗證項目通過（37 tests、143 messages、109 筆固定文字、production build）。157 筆本機瀏覽器檢查與修正見 [驗收紀錄](../04-acceptance.md)。內建瀏覽器無法擷取原生列印預覽；實際 PDF 分頁及取消後重試待人工確認，尚未標記 Completed。未部署。
