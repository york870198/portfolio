# 01：盤點文字並建立雙語資源

Status: ready-for-agent
Completed: 2026-10-01

依 ../spec.md 的文字邊界盤點所有在用頁面與元件，建立固定設計文字清單及繁中／英文 messages。中文原樣保留，英文保持相同履歷資訊與語氣。混合中英文字逐段判定，完整履歷不同敘述不強制共用 key。

驗收：覆蓋可見內文及 title／aria／sr-only／操作提示；雙語 key 和插值完整對應，固定英文與個人事實未改動。清單保存於本功能目錄，供 04 核對。

## 完成結果

新增 src/i18n/locales/zh-TW.ts、en.ts，共 147 組雙語 messages。逐項原文、來源位置與 key 對照見 ../content-inventory.json，固定設計文字與後續接入方式見 ../content-inventory.md。既有網站檔案保持原樣；完整履歷獨有的敘述分開保存。

2026-10-01：`node scripts/check-locales.mjs --source-baseline` 通過（雙語 key／插值一致、原文完整對應、109 個固定文字出現位置、既有網站來源雜湊未變）；`npm run build` 通過 TypeScript 檢查與 production build。專案尚無測試套件，本票使用字典驗證腳本，未新增框架或安裝 i18n。

## Review

依 implement 技能執行 code-review 的平行 Standards／Spec review，基準為實作前 commit d7dfa69ac4472e7bb77df17fe9daf35d6fa87bea。Spec 無缺漏或範圍擴張。Standards 發現一般實作票不能使用 Wayfinding 專用的 resolved，已改為 canonical triage role 加 Completed 日期；無其他規範違反或 heuristic smell。
