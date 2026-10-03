// Original Traditional Chinese wording. Keep message keys aligned with en.ts.
const zhTW = {
  "common": {
    "language": { "label": "網站語言" },
    "skipToContent": "跳至主要內容",
    "dimensions": "六個面向",
    "moreDetails": "更多細節",
    "backHome": "返回首頁",
    "navbar": {
      "mainNavigation": "主要導覽選單",
      "mobileNavigation": "行動版導覽選單",
      "downloadResume": "下載履歷",
      "downloadResumePdf": "下載履歷 PDF",
      "mobileDownloadResume": "下載履歷 (PDF)",
      "preparing": "準備中…",
      "preparingResume": "準備履歷中…",
      "printFrameTitle": "完整履歷列印預覽",
      "contact": "聯絡",
      "closeMenu": "關閉選單",
      "openMenu": "開啟選單"
    },
    "contact": {
      "label": "聯絡我",
      "copyEmail": "複製電子郵件地址：{email}",
      "emailCopied": "已複製電子郵件地址"
    },
    "theme": {
      "switchToLight": "切換為淺色主題",
      "switchToDark": "切換為深色主題"
    },
    "project": {
      "viewSource": "查看 GitHub 原始碼",
      "viewDemo": "前往 Live Demo 預覽"
    },
    "metadata": {
      "description": "Portfolio - 個人簡介",
      "resumeTitle": "完整履歷 {'|'} Portfolio of Fay",
      "notFoundTitle": "404 找不到頁面 {'|'} Portfolio"
    }
  },
  "home": {
    "who": {
      "title": "個人資訊",
      "subtitle": "資深前端工程師，具備後端基礎知識。"
    },
    "when": {
      "title": "經歷",
      "subtitle": "工作經歷與代表案例。"
    },
    "what": {
      "title": "技術棧",
      "subtitle": "技能與專案中的實際用途。"
    },
    "where": {
      "title": "活動範圍",
      "subtitle": "聯絡方式與工作條件。"
    },
    "why": {
      "title": "動機",
      "subtitle": "持續學習，讓想法成為看得見的成果。"
    },
    "how": {
      "title": "實踐方法",
      "subtitle": "協作案例與網站實作方式。"
    }
  },
  "who": {
    "title": "個人資訊",
    "subtitle": "一名具備後端基礎知識的資深前端工程師。",
    "identity": {
      "question": "我是誰？",
      "highlight": "具備四年以上前端開發經驗，目前職級為資深前端工程師。",
      "workName": "我在工作場合使用 Fay 這個名字。",
      "architecture": "我專注於現代前端架構，慣於使用 {vue} 及 {react} 兩項前端生態系。",
      "backend": "後端技術方面使用 Node.js，並有長期與後端工程師協作的經驗。",
      "design": "理解設計系統與互動設計原則，能依據 Figma 設計稿精準實作 UI。"
    },
  },
  "when": {
    "employment": {
      "employer": "前公司（名稱不公開）",
      "roles": "前端工程師 → 資深前端工程師",
      "promotion": "在職期間升遷"
    },
    "project": {
      "title": "既有產品版本升級與 Vue 3 重建",
      "summary": "作為三名前端工程師之一，沿用既有產品架構，參與將 Vue 2 網站以 Vue 3 重建，並實作設計師更新後的品牌視覺與互動。",
      "outcome": "新版依預定時程上線。",
      "labels": {
        "delivery": "功能模組交付：",
        "requirements": "規格釐清：",
        "api": "API 協作：",
        "verification": "交付驗證："
      },
      "delivery": "以功能為單位整合畫面、操作流程與 API 串接，交付可整合至網站路由的模組化頁面，並維護跨頁共用元件。使用 Pinia 管理狀態、RxJS 處理後端非同步資料變化，以及 WebSocket 接收即時互動訊息。",
      "requirements": "核對既有文件、線上操作與新版設計的差異，與 PM、設計師共同確認新版流程及所需的新元件與 API，並修正過時規格。",
      "api": "提出前端資料需求並定義預期接收的資料結構，與後端共同確認；由後端實作 API，再由我完成前端串接。",
      "verification": "親自比對 Figma 設計稿並檢查跨瀏覽器行為，再交由設計師與 QA 驗收。單元測試由前端團隊共同訂定。"
    },
    "title": "經歷",
    "subtitle": "任職、升遷與產品交付經驗。",
    "previousRole": {
      "highlight": "2021 年 12 月–2026 年 5 月",
    }
  },
  "what": {
    "evidence": {
      "title": "技術在專案中的應用",
      "vue": "實作畫面與操作流程，組成可整合至網站路由的功能頁面。",
      "pinia": "管理頁面狀態。",
      "rxjs": "處理後端非同步資料變化。",
      "websocket": "接收即時互動訊息。",
      "readCase": "閱讀工作經歷與案例"
    },
    "title": "技術棧",
    "subtitle": "技能與專案中的實際用途。",
    "web": {
      "question": "最熟悉的開發項目？",
      "highlight": "跨平台/裝置/瀏覽器的網頁開發。"
    },
    "skills": {
      "frontend": {
        "title": "前端核心生態",
        "typescript": "TypeScript (強型別安全)",
        "browserCompatibility": "瀏覽器差異對策"
      },
      "backend": {
        "title": "後端與資料",
        "websocket": "WebSocket 即時通訊"
      },
      "design": {
        "title": "UI/UX 與 QA",
        "figma": "Figma 協作",
        "responsive": "響應式排版 (RWD)"
      }
    },
    "beyondFrontend": {
      "question": "還使用過哪些技術？",
      "tauri": "目前用於開發中的個人專案。",
      "flutter": "曾用於前一份工作的專案。",
      "python": "大學時主要使用，近年較少接觸。"
    },
  },
  "where": {
    "title": "活動範圍",
    "subtitle": "聯絡方式與工作條件。",
    "location": {
      "question": "我在哪裡？",
      "highlight": "台北，以及網路上。",
      "home": "目前定居台北，短期無搬遷規劃。",
    },
    "social": {
      "github": "個人專案與程式碼",
      "plurk": "社群與日常",
      "linkedin": "專業經歷與職業人脈",
      "cake": "線上履歷與聯絡"
    },
    "work": {
      "question": "工作地點與方式？",
      "highlight": "偏好混合式辦公。",
      "rangeLabel": "通勤範圍：",
      "range": "大台北地區大眾運輸與自行車可達的地點。",
      "preferenceLabel": "協作經驗：",
      "preference": "有跨地點、跨時區的遠端協作經驗。"
    }
  },
  "why": {
    "title": "動機",
    "subtitle": "持續學習，讓想法成為看得見的成果。",
    "frontend": {
      "question": "為什麼持續投入前端？",
      "highlight": "我喜歡學習新工具，並用它們創造使用者看得到的成果。",
      "interest": "有了 AI 協助，我能更快將新學的工具用於實作、看見成效，讓探索更有回饋。前端是使用者最先接觸的部分，能直接看到想法如何呈現在畫面與互動中，這讓我持續想投入其中。",
    }
  },
  "how": {
    "case": {
      "summary": "先釐清差異，再共同確認流程、資料需求與驗收分工。",
      "labels": {
        "differences": "核對差異：",
        "agreement": "共同確認：",
        "api": "資料需求與實作分工：",
        "verification": "交付驗證："
      },
      "differences": "版本升級時，新版設計的操作流程與舊版不同，而舊版線上行為又與既有文件有落差。我核對文件與實際操作，釐清需要確認的差異。",
      "agreement": "我與 PM、設計師討論後，共同確認按新版設計實作流程、修正過時規格，並釐清需要新增的元件與 API。",
      "api": "我提出前端資料需求並定義預期接收的資料結構，與後端共同確認。後端實作 API 後，由我完成前端串接。",
      "verification": "我親自比對 Figma 設計稿並檢查跨瀏覽器行為，再交由設計師與 QA 驗收。單元測試由前端團隊共同訂定。"
    },
    "title": "實踐方法",
    "subtitle": "協作案例與網站實作方式。",
    "website": {
      "question": "這個網站是怎麼做的？",
      "scope": "由我定義網站目的、閱覽裝置、技術與部署方式，並以規格引導 AI 協助實作。",
      "stack": "網站使用 Vue／Vue Router／Vite／TypeScript，經 GitHub Actions 部署到 GitHub Pages。",
    },
    "collaboration": {
      "question": "我如何與不同領域的協作者進行跨領域合作？",
      "designCourse": "Google UX Design Certificate：修習中，學習 UI/UX 設計以提升與設計師協作的能力。"
    }
  },
  "resume": {
    "concise": {
      "location": "台灣 台北",
      "developmentTitle": "進修與補充經驗",
      "uxCourse": "Google UX Design Certificate：修習中，學習 UI/UX 設計以提升與設計師協作的能力。",
      "tauri": "目前用於開發中的個人專案。",
      "flutter": "曾用於前一份工作的專案。",
      "workTitle": "工作條件",
      "work": "短期無搬遷規劃，偏好混合式辦公。通勤範圍為大台北地區大眾運輸與自行車可達的地點。",
      "remoteExperience": "具備遠端協作經驗，能與跨地點、跨時區的同事合作。"
    },
    "project": {
      "delivery": "整合畫面、操作流程與 API 串接為可整合至網站路由的功能頁面，維護跨頁共用元件；使用 Pinia 管理狀態、RxJS 處理後端非同步資料變化、WebSocket 接收即時互動訊息。",
      "requirements": "釐清文件、線上操作與新版設計的差異，與 PM、設計師共同確認新版流程並修正過時規格。",
      "api": "定義前端資料需求與預期結構，與後端共同確認；由後端實作 API，本人完成串接。",
      "verification": "親自比對 Figma 設計稿並檢查跨瀏覽器行為，再交由設計師及 QA 驗收。"
    },
    "toolbar": {
      "print": "列印 / 儲存為 PDF"
    },
    "profile": {
      "title": "資深前端工程師",
      "summary": "專注於現代前端架構（Vue 3 / React / TypeScript），具備四年以上產品開發與跨領域協作經驗，重視清晰的程式碼架構、使用者體驗與溝通效率。",
    },
  },
  "notFound": {
    "title": "找不到此頁面",
    "description": "抱歉，您所尋找的頁面不存在或已被移動。請檢查網址或點擊下方按鈕返回首頁。"
  }
}

export type MessageCatalog = typeof zhTW
export default zhTW
