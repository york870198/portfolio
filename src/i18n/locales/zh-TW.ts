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
      "printFrameTitle": "完整履歷列印",
      "contact": "聯絡",
      "closeMenu": "關閉選單",
      "openMenu": "開啟選單"
    },
    "contact": {
      "label": "聯絡我",
      "copyEmail": "點擊複製 Email: {email}",
      "emailCopied": "已複製 Email 地址"
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
      "subtitle": "資深前端，以及除此以外。"
    },
    "when": {
      "title": "經歷",
      "subtitle": "成為工程師之後，以及之前。"
    },
    "what": {
      "title": "技術棧",
      "subtitle": "通常在寫網頁，偶爾寫不是網頁的東西。"
    },
    "where": {
      "title": "活動範圍",
      "subtitle": "在哪裡找得到我，或者我能跑多遠去找你。"
    },
    "why": {
      "title": "動機",
      "subtitle": "原因很重要，但結果有時會比原因更早到。"
    },
    "how": {
      "title": "實踐方法",
      "subtitle": "推薦你首先問問這個網站是怎麼做的。"
    }
  },
  "who": {
    "title": "個人資訊",
    "subtitle": "一名資深前端工程師，略懂後端。",
    "identity": {
      "question": "我是誰？",
      "highlight": "剛好趕在 AI 開始威脅要取代我們之前，從手工寫程式開始的資深前端工程師。",
      "workName": "我在工作場合自稱 Fay，另外在不同社群間有不同的暱稱。",
      "realName": "如果你是從 LinkedIn 等人才媒合平台過來，你會在那邊看到我的本名。",
      "architecture": "我專注於現代前端架構，慣於使用 {vue} 及 {react} 兩項前端生態系。",
      "backend": "後端技術方面我使用 NodeJS，並有長期與後端工程師協作的經驗",
      "design": "理解 Design System 與互動設計原則，能依據 Figma 設計稿完成高精準度的 UI 實作"
    },
    "interests": {
      "question": "我平常在關注誰？",
      "highlight": "公務上關注前端技術，私底下關注獨立遊戲。",
      "gameDevelopment": "在我成為前端工程師之前，我首先是在鑽研獨立遊戲開發。",
      "presentation": "當時跟 PM 一起天天跟畫面演出的細節大戰三百回合，做著做著回過神來發現我在寫的東西跟網頁前端有八成像。",
      "coincidence": "至於後來那個遊戲開發工具的下一代核心真的變成 HTML / CSS / JS，只能說是美麗的巧合。",
      "communities": "現在我平常追蹤 Hacker News 接收業界新聞，有空閒時則在獨立遊戲開發者的社群看看流行的新技術。"
    }
  },
  "when": {
    "employment": {
      "employer": "前公司（匿名）",
      "roles": "前端工程師 → 資深前端工程師",
      "promotion": "在職期間升遷"
    },
    "project": {
      "title": "既有產品版本升級與 Vue 3 重建",
      "summary": "作為三名前端工程師之一，沿用既有產品架構，參與 Vue 2 網站的 Vue 3 重建，實作設計師更新後的品牌視覺與互動。",
      "outcome": "新版依預定時程上線。",
      "labels": {
        "delivery": "功能模組交付：",
        "requirements": "規格釐清：",
        "api": "API 協作：",
        "verification": "交付驗證："
      },
      "delivery": "以功能為單位整合畫面、操作流程與 API 串接，交付可接入 Router 的模組化頁面，並維護跨頁共用元件。使用 Pinia 管理狀態、RxJS 處理後端非同步資料變化，以及 WebSocket 接收即時互動訊息。",
      "requirements": "核對既有文件、線上操作與新版設計的差異，與 PM、設計師確認新版流程及所需的新元件與 API，修正過時規格。",
      "api": "提出前端資料需求並定義預期接收的資料結構，與後端共同確認，由後端實作 API 後完成前端串接。",
      "verification": "親自比對 Figma 設計稿並檢查跨瀏覽器行為，再交由設計師與 QA 驗收。單元測試由前端團隊共同訂定。"
    },
    "title": "經歷",
    "subtitle": "AI 時代飛行速度有點太快，害我感覺過去那個手寫程式的自己比實際上更老。",
    "careerStart": {
      "question": "我何時成為前端工程師？",
      "highlight": "2021 年 12 月。",
      "hobby": "「寫程式」這件事從高中就開始了，但一直都停留在興趣階段，大學也不是讀資工本科。",
      "pandemic": "2020 年新冠疫情改變了很多事情，我當時工作的領域大受影響，我覺得這樣下去不是辦法。",
      "transition": "我提了離職、找了個系統化的課程把當時前端業界該學的東西複習一遍、成功應徵到前端職位，然後就這樣了。"
    },
    "previousRole": {
      "question": "上一份工作何時開始、何時結束？",
      "highlight": "2021.12–2026.05",
      "tenure": "上一份工作就是我入行的第一份工作，待了超過四年。",
      "company": "是一間成長速度很快的公司，團隊的技術領導是致力於開源社群的大神。",
      "studyGroups": "除了與工作直接相關的技術外，公司內也會定期舉辦讀書會、同事們一起持續溫故知新。",
      "family": "2026 年初時，家庭內發生需要我專注處理的問題，實在沒有心力蠟燭兩頭燒，故離職專心處理家裡的狀況。"
    }
  },
  "what": {
    "title": "技術棧",
    "subtitle": "說長不長、說短也不短的職涯中，那些簡單的、困難的、還有令人抓狂的事情。",
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
      "question": "除了前端以外我還會什麼？",
      "tauri": "基於 Rust 實現的跨平台軟體框架，最近正在用這個開發 side project。",
      "flutter": "Google 開發的跨平台開發套件，在上一份工作有一項專案以此開發。",
      "python": "大學時主要在寫的程式語言，開始專注在前端領域之後比較沒在碰了。"
    },
    "ai": {
      "question": "我對 AI 開發的看法？",
      "highlight": "非常強大的自動導航 ── 假如你知道你要去哪裡的話。",
      "bicycle": "如果將「軟體開發」想像成騎腳踏車出門，AI 就是把腳踏車裝上引擎、掛上導航、連龍頭都會自動轉彎。",
      "destination": "假如你對目的地沒有想法，它可能會載著你繞很多遠路；",
      "balance": "如果你不知道道路顛簸或下坡轉彎時，坐在車上的你該擺什麼姿勢，你大概會摔下車。",
      "benefit": "但只要你會騎腳踏車、也想好等等要去哪裡，那它會幫你比用腳踩踏板省下非常多力氣。"
    }
  },
  "where": {
    "title": "活動範圍",
    "subtitle": "扣掉不到一年的短暫高雄生活，我基本上是個沒見過世面的台北鄉巴佬。",
    "location": {
      "question": "我在哪裡？",
      "highlight": "台北，以及網路上。",
      "home": "我目前定居於台北，由於與家族同住，短期內沒有移居他地的規劃。",
      "socialIntro": "除了約出來面對面，你也能在以下地方找到我："
    },
    "social": {
      "github": "我個人開發時習慣本地操作，所以它有點空。",
      "plurk": "沒有演算法幫你決定你想看什麼的社群平台。",
      "linkedin": "平常只用來看 JS Developer 發的迷因。",
      "cake": "上面的資訊應該沒有比這裡多，但你往這裡發訊息我會收到通知。"
    },
    "work": {
      "question": "我能跑多遠去工作？",
      "highlight": "大台北地區，或者公司遠端網路速度夠快。",
      "rangeLabel": "移動範圍：",
      "range": "大台北地區中能夠靠捷運、公車與腳踏車抵達的地點。",
      "preferenceLabel": "偏好：",
      "preference": "混合式辦公。我有豐富的遠端協作經驗，能順暢與跨地點、跨時區的同事合作。"
    }
  },
  "why": {
    "title": "動機",
    "subtitle": "俗話說得好：JavaScript，從入門到放棄。我目前還在中間。",
    "frontend": {
      "question": "為什麼選擇前端領域？",
      "highlight": "其實一開始不是選這個，只是走著走著方向剛好朝這邊。",
      "interest": "最早只是因為個人興趣，為了開發遊戲所以開始寫程式。",
      "fullStack": "遊戲開發同時包含前端與後端，所以嚴格說來我一開始選擇的方向算是全端工程師。",
      "firstRole": "後來終於正式把寫程式當成工作，第一個的職位是前端，久而久之分配給前端的心力自然也壓倒性的多。"
    }
  },
  "how": {
    "title": "實踐方法",
    "subtitle": "方法總比問題多，而問題有夠多。",
    "website": {
      "question": "這個網站是怎麼做的？",
      "highlight": "我出一張嘴，Google Antigravity 出力。",
      "scope": "由我定義這個網頁的目的、要在什麼裝置上被閱覽、要用哪些框架與工具、要佈署在什麼平台。",
      "specification": "我按照以前工作時 PM 寫規格書的方式，把我預期的目標寫下來，開始指揮 Gemini 做事。",
      "timeSaved": "它做出來的東西跟我自己手動敲鍵盤基本上差不多，但它只需要我五分之一或更少的時間。",
      "technicalIntro": "如果你想知道的是技術面的細節：",
      "stack": "這個網站是以 Vue / Vue Router / Vite / TypeScript 實作的靜態網站，",
      "deployment": "透過 GitHub Actions 佈署至 GitHub Pages。"
    },
    "collaboration": {
      "question": "我如何與不同領域的協作者進行跨領域合作？",
      "highlight": "心有靈犀（誇飾）。",
      "experience": "在四年半職涯間，我密集地與後端工程師、設計師與產品經理合作。",
      "sharedPicture": "我們得出一個共識：協作順暢的關鍵可以簡化為一句話，「我知道你腦中的畫面是什麼。」。",
      "basicKnowledge": "即便只是一點入門級的知識，也能讓我更對於對方腦中想要傳達的想像有更準確的理解。",
      "lessFriction": "協作者之間共同的想像越明確，開發時的溝通摩擦便越少。",
      "backend": "我已具備常見後端架構的必要知識，並有與後端工程師長期合作的實務經驗；",
      "designCourse": "並且為了提升與設計師的協作能力，我正在修習 Google UX Design Certificate 課程，學習 UI/UX 設計的知識。"
    }
  },
  "resume": {
    "project": {
      "delivery": "整合畫面、操作流程與 API 串接為可接入 Router 的功能頁面，維護跨頁共用元件；使用 Pinia 管理狀態、RxJS 處理非同步資料變化、WebSocket 接收即時互動訊息。",
      "requirements": "釐清文件、線上操作與新設計的差異，與 PM、設計師確認新版流程並修正過時規格。",
      "api": "定義前端資料需求與預期結構，與後端共同確認；由後端實作 API，本人完成串接。",
      "verification": "親自比對 Figma 設計稿並檢查跨瀏覽器行為，交由設計師及 QA 驗收。"
    },
    "toolbar": {
      "print": "列印 / 儲存為 PDF"
    },
    "profile": {
      "title": "資深前端工程師",
      "summary": "專注於現代前端架構（Vue 3 / React / TypeScript），具備 4+ 年高強度產品開發與跨領域協作經驗，重視清晰的程式碼架構、使用者體驗與溝通效率。",
      "location": "台灣 台北 {location}"
    },
    "when": {
      "family": "2026 年初時，我的家庭內發生了需要我專注處理的問題，實在沒有心力蠟燭兩頭燒。",
      "handover": "正好當時由我主責開發的產品在遞交後進入穩定期，我便趁此時機處理完交接，離職專心處理家裡的狀況。"
    },
    "social": {
      "github": "個人開發與專案庫",
      "plurk": "技術交流與日常",
      "linkedin": "專業經歷與職業人脈",
      "cake": "線上履歷與聯絡管道"
    },
    "how": {
      "scope": "我想了很多，包含這個網頁的目的、要在什麼裝置上被閱覽、要用哪些框架與工具、要佈署在什麼平台。",
      "specification": "想完之後，我按照以前工作時 PM 寫規格書的方式，把我想好的事情寫下來，開始指揮 Gemini 做事。"
    }
  },
  "notFound": {
    "title": "找不到此頁面",
    "description": "抱歉，您所尋找的頁面不存在或已被移動。請檢查網址或點擊下方按鈕返回首頁。"
  }
}

export type MessageCatalog = typeof zhTW
export default zhTW
