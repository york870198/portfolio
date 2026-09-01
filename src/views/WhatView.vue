<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import QnACard from '@/components/QnACard.vue'

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
</script>

<template>
  <div class="page what-page page-container">
    <div class="container">
      <PageHeader
        themeTag="WHAT"
        themeIndex="03"
        title="技術棧"
        subtitle="說長不長、說短也不短的職涯中，那些簡單的、困難的、還有令人抓狂的事情。"
        accentColor="var(--theme-what)"
      />

      <div class="page-content-flow">
        <!-- Q1: 精選專案 -->
        <QnACard
          :index="1"
          question="最熟悉的開發項目？"
          highlight="跨平台/裝置/瀏覽器的網頁開發。"
          :tags="['Web Development', 'UI/UX', 'RWD' ]"
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
            假裝「軟體開發」像是騎腳踏車出門，AI 就如同把腳踏車裝上引擎、掛上導航、連龍頭都會自動轉彎。<br/>
            假如你對目的地沒有想法，它可能會載著你繞很多遠路；<br/>
            如果你不知道道路顛簸或下坡轉彎時，坐在車上的你該擺什麼姿勢，你大概會摔下車。
          </p>
          <p>
            但只要你會騎腳踏車、也想好等等要去哪裡，那它會幫你比用腳踩踏板省下非常多力氣。
          </p>
        </QnACard>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 0.5rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
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
</style>
