<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PageHeader from '@/components/PageHeader.vue'
import QnACard from '@/components/QnACard.vue'
import plurkIcon from '@/assets/icons/plurk.png'

const route = useRoute()
const router = useRouter()

const skillCategories = [
  {
    name: '前端核心生態',
    skills: ['Vue 3 (Pinia / Vue Router)', 'React 18+ (Functional component / Redux)', 'TypeScript (強型別安全)', 'Vite / pnpm']
  },
  {
    name: '後端與資料',
    skills: ['Node.js / Express', 'RxJS', 'RESTful API', 'MySQL', 'API Mocking']
  },
  {
    name: 'UI/UX 與 QA',
    skills: ['Figma 協作', '響應式排版 (RWD)', 'CI/CD (GitHub Actions / Pages)', 'Vitest']
  }
]

const socialLinks = [
  { name: 'GitHub', icon: '💻', url: 'https://github.com/york870198', desc: '個人開發與專案庫' },
  { name: 'Plurk', icon: plurkIcon, url: 'https://www.plurk.com/york870198', desc: '技術交流與日常' },
  { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/fay-chung-682698224/', desc: '專業經歷與職業人脈' },
  { name: 'Cake', icon: '🍰', url: 'https://www.cake.me/me/fayang', desc: '線上履歷與聯絡管道' }
]

const isImageIcon = (icon: string) => {
  return icon.startsWith('data:') || icon.startsWith('/') || icon.includes('.') || icon.includes('blob:')
}

const printResume = () => {
  window.print()
}

const goBack = () => {
  router.push('/')
}

onMounted(() => {
  // 若帶有 ?print=true 參數，則在載入後自動喚起列印對話框
  if (route.query.print === 'true' || route.query.auto === 'true') {
    setTimeout(() => {
      window.print()
    }, 450)
  }
})
</script>

<template>
  <div class="page resume-page page-container">
    <div class="container resume-container">
      <!-- 螢幕操作列 (列印時自動隱藏) -->
      <div class="resume-toolbar no-print">
        <button class="toolbar-btn back-btn" @click="goBack" id="resume-back-btn">
          <span>←</span> 返回首頁
        </button>
        <div class="toolbar-actions">
          <button class="toolbar-btn print-btn" @click="printResume" id="resume-print-action-btn">
            <span>🖨️</span> 列印 / 儲存為 PDF
          </button>
        </div>
      </div>

      <!-- 履歷頂部個人名片摘要 (Resume Header) -->
      <header class="resume-profile-header card">
        <div class="profile-main-info">
          <div class="profile-name-row">
            <span class="profile-badge">Fay</span>
            <div class="name-block">
              <h1 class="profile-name">Fay Chung</h1>
              <p class="profile-title">資深前端工程師 <span>Senior Frontend Developer</span></p>
            </div>
          </div>
          <p class="profile-summary">
            專注於現代前端架構（Vue 3 / React / TypeScript），具備 4+ 年高強度產品開發與跨領域協作經驗，重視清晰的程式碼架構、使用者體驗與溝通效率。
          </p>
        </div>

        <div class="profile-contact-grid">
          <div class="contact-item">
            <span class="contact-icon">📧</span>
            <a href="mailto:york870198@gmail.com" class="contact-link">york870198@gmail.com</a>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📍</span>
            <span>台灣 台北 (Taipei, Taiwan)</span>
          </div>
          <div class="contact-item">
            <span class="contact-icon">💻</span>
            <a href="https://github.com/york870198" target="_blank" rel="noopener noreferrer" class="contact-link">github.com/york870198</a>
          </div>
          <div class="contact-item">
            <span class="contact-icon">💼</span>
            <a href="https://www.linkedin.com/in/fay-chung-682698224/" target="_blank" rel="noopener noreferrer" class="contact-link">linkedin: Fay-Chung</a>
          </div>
        </div>
      </header>

      <!-- 5W1H 拼接區塊 -->
      <div class="resume-sections-flow">
        
        <!-- SECTION 1: WHO -->
        <section class="resume-section" id="section-who">
          <PageHeader
            themeTag="WHO"
            themeIndex="01"
            title="個人資訊"
            subtitle="一名資深前端工程師，略懂後端。"
            accentColor="var(--theme-who)"
          />
          <div class="section-content-flow">
            <QnACard
              :index="1"
              question="我是誰？"
              highlight="剛好趕在 AI 開始威脅要取代我們之前，從手工寫程式開始的資深前端工程師。"
              :tags="['Senior Frontend', 'React & Vue', 'Full-Stack Mindset']"
              accentColor="var(--theme-who)"
            >
              <p>
                我在工作場合自稱 Fay，另外在不同社群間有不同的暱稱。<br />
                如果你是從 LinkedIn 等人才媒合平台過來，你會在那邊看到我的本名。<br />
              </p>
              <p>
                我專注於現代前端架構，慣於使用 <strong>Vue 3</strong> 及 <strong>React</strong> 兩項前端生態系。<br/>稍微摸過一下 Svelte 跟 Angular，但僅止於小規模專案實作。
              </p>
              <ul>
                <li><strong>後端協作：</strong> 後端技術不是我的主要職能，不過我的知識至少充分到與後端工程師合作四年不會吵架。</li>
                <li><strong>UI/UX 協作：</strong> 理解 Design System 與互動設計原則，能依據 Figma 設計稿完成高精準度的 UI 實作。</li>
              </ul>
            </QnACard>

            <QnACard
              :index="2"
              question="我平常在關注誰？"
              highlight="公務上關注前端技術，私底下關注獨立遊戲。"
              :tags="[]"
              accentColor="var(--theme-who)"
            >
              <p>
                在我成為前端工程師之前，我首先是在鑽研獨立遊戲開發。<br/>
                當時跟 PM 一起天天跟畫面演出的細節大戰三百回合，做著做著回過神來發現我在寫的東西跟網頁前端有八成像。<br/>
                至於後來那個遊戲開發工具的下一代核心真的變成 HTML / CSS / JS，只能說是美麗的巧合。
              </p>
              <p>
                現在我平常追蹤 Hacker News 接收業界新聞，有空閒時則在獨立遊戲開發者的社群看看流行的新技術。
              </p>
            </QnACard>
          </div>
        </section>

        <!-- SECTION 2: WHEN -->
        <section class="resume-section" id="section-when">
          <PageHeader
            themeTag="WHEN"
            themeIndex="02"
            title="經歷"
            subtitle="AI 時代飛行速度有點太快，害我感覺過去那個手寫程式的自己比實際上更老。"
            accentColor="var(--theme-when)"
          />
          <div class="section-content-flow">
            <QnACard
              :index="1"
              question="我何時成為前端工程師？"
              highlight="2021 年末。"
              accentColor="var(--theme-when)"
            >
              <p>
                「寫程式」這件事從高中就開始了，但一直都停留在興趣階段，大學也不是讀資工本科。<br/>
                2020 年新冠疫情改變了很多事情，我當時工作的領域大受影響，我覺得這樣下去不是辦法。<br/>
                我提了離職、找了個系統化的課程把當時前端業界該學的東西複習一遍、成功應徵到前端職位，然後就這樣了。
              </p>
            </QnACard>

            <QnACard
              :index="2"
              question="上一份工作何時開始、何時結束？"
              highlight="2021 年末，2026 年中離職。"
              accentColor="var(--theme-when)"
            >
              <p>
                上一份工作就是我入行的第一份工作，待了超過四年。<br/>
                是一間成長速度很快的公司，團隊的技術領導是致力於開源社群的大神。<br/>
                除了與工作直接相關的技術外，公司內也會定期舉辦讀書會、同事們一起持續溫故知新。<br/>
              </p>
              <p>
                2026 年初時，我的家庭內發生了需要我專注處理的問題，實在沒有心力蠟燭兩頭燒。<br/>
                正好當時由我主責開發的產品在遞交後進入穩定期，我便趁此時機處理完交接，離職專心處理家裡的狀況。
              </p>
            </QnACard>
          </div>
        </section>

        <!-- SECTION 3: WHAT -->
        <section class="resume-section" id="section-what">
          <PageHeader
            themeTag="WHAT"
            themeIndex="03"
            title="技術棧"
            subtitle="說長不長、說短也不短的職涯中，那些簡單的、困難的、還有令人抓狂的事情。"
            accentColor="var(--theme-what)"
          />
          <div class="section-content-flow">
            <QnACard
              :index="1"
              question="最熟悉的開發項目？"
              highlight="跨平台/裝置/瀏覽器的網頁開發。"
              :tags="['Web Development', 'UI/UX', 'RWD']"
              accentColor="var(--theme-what)"
            >
              <div class="skills-grid">
                <div v-for="cat in skillCategories" :key="cat.name" class="skill-category-block">
                  <h4 class="category-title">{{ cat.name }}</h4>
                  <ul class="skills-sublist">
                    <li v-for="item in cat.skills" :key="item" class="skill-li">
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </QnACard>

            <QnACard
              :index="2"
              question="除了前端以外我還會什麼？"
              accentColor="var(--theme-what)"
            >
              <ul>
                <li><strong>Tauri：</strong>基於 Rust 實現的跨平台軟體框架，最近正在用這個開發 Side Project。</li>
                <li><strong>Flutter：</strong>Google 開發的跨平台開發套件，在上一份工作有一項專案以此開發，但我個人沒有特別喜歡。</li>
                <li><strong>Python：</strong>大學時主要在寫的程式語言，開始專注在前端領域之後比較沒在碰了。</li>
              </ul>
            </QnACard>

            <QnACard
              :index="3"
              question="我對 AI 開發的看法？"
              highlight="非常強大的自動導航 ── 假如你知道你要去哪裡的話。"
              accentColor="var(--theme-what)"
            >
              <p>
                如果將「軟體開發」想像成騎腳踏車出門，AI 就是把腳踏車裝上引擎、掛上導航、連龍頭都會自動轉彎。<br/>
                假如你對目的地沒有想法，它可能會載著你繞很多遠路；<br/>
                如果你不知道道路顛簸或下坡轉彎時，坐在車上的你該擺什麼姿勢，你大概會摔下車。
              </p>
              <p>
                但只要你會騎腳踏車、也想好等等要去哪裡，那它會幫你比用腳踩踏板省下非常多力氣。
              </p>
            </QnACard>
          </div>
        </section>

        <!-- SECTION 4: WHERE -->
        <section class="resume-section" id="section-where">
          <PageHeader
            themeTag="WHERE"
            themeIndex="04"
            title="活動範圍"
            subtitle="扣掉不到一年的短暫高雄生活，我基本上是個沒見過世面的台北鄉巴佬。"
            accentColor="var(--theme-where)"
          />
          <div class="section-content-flow">
            <QnACard
              :index="1"
              question="我在哪裡？"
              highlight="台北，以及網路上。"
              accentColor="var(--theme-where)"
            >
              <p>
                我目前定居於台北，由於與家族同住，短期內沒有移居他地的規劃。<br>
              </p>
              <p>除了約出來面對面，你也能在以下地方找到我：</p>
              <div class="footprint-grid">
                <a
                  v-for="link in socialLinks"
                  :key="link.name"
                  :href="link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="footprint-card"
                >
                  <span class="footprint-icon">
                    <img v-if="isImageIcon(link.icon)" :src="link.icon" :alt="link.name" class="footprint-img" />
                    <span v-else>{{ link.icon }}</span>
                  </span>
                  <div class="footprint-info">
                    <span class="footprint-name">{{ link.name }}</span>
                    <span class="footprint-desc">{{ link.desc }}</span>
                  </div>
                  <span class="footprint-arrow">↗</span>
                </a>
              </div>
            </QnACard>

            <QnACard
              :index="2"
              question="我能跑多遠去工作？"
              highlight="大台北地區，或者公司遠端網路速度夠快。"
              accentColor="var(--theme-where)"
            >
              <ul>
                <li><strong>移動範圍：</strong>大台北地區中能夠靠捷運、公車與腳踏車抵達的地點。</li>
                <li><strong>偏好：</strong>混合式辦公。我有豐富的遠端協作經驗，能順暢與跨地點、跨時區的同事合作。</li>
              </ul>
            </QnACard>
          </div>
        </section>

        <!-- SECTION 5: WHY -->
        <section class="resume-section" id="section-why">
          <PageHeader
            themeTag="WHY"
            themeIndex="05"
            title="動機"
            subtitle="俗話說得好：Javascript，從入門到放棄。我目前還在中間。"
            accentColor="var(--theme-why)"
          />
          <div class="section-content-flow">
            <QnACard
              :index="1"
              question="為什麼選擇前端領域？"
              highlight="其實一開始不是選這個，只是走著走著方向剛好朝這邊。"
              accentColor="var(--theme-why)"
            >
              <p>
                最早只是因為個人興趣，為了開發遊戲所以開始寫程式。<br />
                遊戲開發同時包含前端與後端，所以嚴格說來我一開始選擇的方向算是全端工程師。<br />
                後來終於正式把寫程式當成工作，第一個的職位是前端，久而久之分配給前端的心力自然也壓倒性的多。
              </p>
            </QnACard>
          </div>
        </section>

        <!-- SECTION 6: HOW -->
        <section class="resume-section" id="section-how">
          <PageHeader
            themeTag="HOW"
            themeIndex="06"
            title="實踐方法"
            subtitle="方法總比問題多，而問題有夠多。"
            accentColor="var(--theme-how)"
          />
          <div class="section-content-flow">
            <QnACard
              :index="1"
              question="這個網站是怎麼做的？"
              highlight="我出一張嘴，Google Antigravity 出力。"
              accentColor="var(--theme-how)"
            >
              <p>
                我想了很多，包含這個網頁的目的、要在什麼裝置上被閱覽、要用哪些框架與工具、要佈署在什麼平台。<br />
                想完之後，我按照以前工作時 PM 寫規格書的方式，把我想好的事情寫下來，開始指揮 Gemini 做事。<br />
                它做出來的東西跟我自己手動敲鍵盤基本上差不多，但它只需要我五分之一或更少的時間。
              </p>
            </QnACard>

            <QnACard
              :index="2"
              question="我如何與不同領域的協作者進行跨領域合作？"
              highlight="心有靈犀（誇飾）。"
              accentColor="var(--theme-how)"
            >
              <p>
                在四年半職涯間，我密集地與後端工程師、設計師與產品經理合作。<br />
                我們得出一個共識：協作順暢的關鍵可以簡化為一句話，「我知道你腦中的畫面是什麼。」。<br />
                即便只是一點入門級的知識，也能讓我更對於對方腦中想要傳達的想像有更準確的理解。<br />
                協作者之間共同的想像越明確，開發時的溝通摩擦便越少。
              </p>
              <p>
                我已具備常見後端架構的必要知識，並有與後端工程師長期合作的實務經驗；<br />
                並且為了提升與設計師的協作能力，我正在修習 Google UX Design Certificate 課程，學習 UI/UX 設計的知識。
              </p>
            </QnACard>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<style scoped>
.resume-container {
  max-width: 900px;
}

/* 螢幕工具列 */
.resume-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 0.75rem 1.25rem;
  background: var(--bg-card-subtle);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
}

.toolbar-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: 0.92rem;
  transition: all var(--transition-fast);
}

.back-btn {
  color: var(--text-secondary);
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
}

.back-btn:hover {
  color: var(--text-primary);
  background: var(--bg-card-hover);
  transform: translateX(-2px);
}

.print-btn {
  background: var(--accent-gradient);
  color: #ffffff;
  box-shadow: 0 4px 12px var(--accent-glow);
}

.print-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(99, 102, 241, 0.4);
}

/* 履歷頭部名片 */
.resume-profile-header {
  margin-bottom: 3.5rem;
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  border: 1px solid var(--border-card);
}

.profile-main-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.profile-name-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.profile-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  background: var(--accent-gradient);
  color: #ffffff;
  font-weight: 800;
  font-size: 1.25rem;
  font-family: var(--font-mono);
  box-shadow: 0 4px 14px var(--accent-glow);
  flex-shrink: 0;
}

.name-block {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.profile-name {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

.profile-title {
  font-size: 1.05rem;
  color: var(--accent-primary);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.profile-title span {
  color: var(--text-muted);
  font-size: 0.88rem;
  font-weight: normal;
}

.profile-summary {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.profile-contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.85rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-subtle);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.contact-icon {
  font-size: 1.1rem;
}

.contact-link {
  color: var(--text-primary);
  font-weight: 500;
  transition: color var(--transition-fast);
}

.contact-link:hover {
  color: var(--accent-primary);
  text-decoration: underline;
}

/* 5W1H 區塊排列 */
.resume-sections-flow {
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
}

.resume-section {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.section-content-flow {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

/* Skills 網格 (來自 WhatView) */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
  margin-top: 0.5rem;
}

.skill-category-block {
  padding: 1.25rem;
  background: var(--bg-card-subtle);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-subtle);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.category-title {
  font-size: 1.05rem;
  color: var(--theme-what, #10b981);
  font-weight: 600;
  border-bottom: 1px solid var(--border-subtle);
  padding-bottom: 0.45rem;
}

.skills-sublist {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-li {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Footprint 網格 (來自 WhereView) */
.footprint-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
  margin-top: 0.5rem;
}

.footprint-card {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 1rem;
  background: var(--bg-card-subtle);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.footprint-card:hover {
  background: var(--bg-card-hover);
  border-color: var(--theme-where, #f59e0b);
  transform: translateY(-2px);
}

.footprint-icon {
  font-size: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  flex-shrink: 0;
}

.footprint-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.footprint-info {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.footprint-name {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.95rem;
}

.footprint-desc {
  font-size: 0.78rem;
  color: var(--text-muted);
}

.footprint-arrow {
  color: var(--text-muted);
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .resume-profile-header {
    padding: 1.5rem;
    gap: 1.25rem;
  }

  .profile-name {
    font-size: 1.6rem;
  }

  .profile-title {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.1rem;
  }

  .resume-sections-flow {
    gap: 3.5rem;
  }
}
</style>
