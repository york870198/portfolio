# 03：接入全站翻譯、Navbar 切換與履歷列印

Status: ready-for-agent
Blocked by: 01, 02
Completed: 2026-10-01

依 ../spec.md 將所有在用頁面及共用元件接入 messages；陣列與衍生內容必須隨語言反應更新。新增 Navbar LanguageSwitcher，涵蓋桌機／行動、鍵盤及目前選取狀態。履歷 iframe 與備援採點擊當下語言，返回首頁也保留語言。

驗收：固定英文未改、中文基準保留、全站同頁切換有效；iframe 無重複自動列印，print／auto 直接載入與備援列印英文；所有提示及輔助文字隨語言更新。

實作與驗證紀錄：../03-acceptance.md。全站接入 messages、原生語言選單與點擊當下語言的列印流程完成；35 項測試、locale 檢查與 production build 通過。
