<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import QnACard from '@/components/QnACard.vue'
import ProjectCard from '@/components/ProjectCard.vue'

const sampleProjects = [
  {
    title: '現代化 5W1H 履歷作品集系統',
    role: '資深前端架構師',
    description: '基於 Vue 3 Composition API、TypeScript 與 Vite 建構的高效能 SPA 應用。採用 5W1H 六大維度架構，結合深淺色主題切換與模組化問答卡片設計。',
    tags: ['Vue 3', 'TypeScript', 'Vite', 'CSS Tokens', 'SPA'],
    metrics: [
      { label: 'Lighthouse 效能', value: '99+' },
      { label: '型別安全性', value: '100% TS' }
    ],
    githubUrl: 'https://github.com',
    liveUrl: '/'
  },
  {
    title: '企業級 Design System & UI 元件庫',
    role: '前端負責人',
    description: '與 UI/UX 設計師密切合作，從 Figma Tokens 銜接至前端 Web Components 與 Vue/React 封裝。提供超過 40+ 高覆蓋率原子元件與詳細文檔。',
    tags: ['Design System', 'Figma Tokens', 'Vue/React', 'Storybook', 'a11y'],
    metrics: [
      { label: '元件數量', value: '40+' },
      { label: '開發速度提升', value: '35%' }
    ],
    githubUrl: 'https://github.com'
  }
]

const skillCategories = [
  {
    name: '前端核心生態',
    skills: ['Vue 3 (Composition API / Pinia / Vue Router)', 'React 18+ (Hooks / Context / Next.js)', 'TypeScript (強型別安全)', 'Vite / Webpack / pnpm']
  },
  {
    name: '後端與資料協作',
    skills: ['Node.js / Express / Fastify', 'RESTful API & GraphQL 規格設計', 'PostgreSQL / Redis 基礎運作概念', 'API Mocking & Contract Testing']
  },
  {
    name: 'UI/UX 與工程品質',
    skills: ['Figma 協作 / Design Tokens 對齊', '響應式排版 (RWD) & 網頁無障礙 (a11y)', 'CI/CD (GitHub Actions / Pages)', 'Vitest / Jest / Playwright']
  }
]
</script>

<template>
  <div class="page what-page page-container">
    <div class="container">
      <PageHeader
        themeTag="WHAT"
        themeIndex="03"
        title="專案作品與技能棧"
        subtitle="我做過什麼？精選代表專案成果展示與全方位技術能力棧清單。"
        accentColor="var(--theme-what)"
      />

      <div class="page-content-flow">
        <!-- Q1: 精選專案 -->
        <QnACard
          :index="1"
          question="我的代表性專案有哪些？解決了什麼痛點與帶來哪些具體成效？"
          highlight="精準簡潔呈現專案架構、技術棧標籤、前後端與設計協作細節及關鍵成效指標。"
          :tags="['Case Studies', 'Key Deliverables', 'Impact']"
          accentColor="var(--theme-what)"
        >
          <div class="projects-list">
            <ProjectCard
              v-for="project in sampleProjects"
              :key="project.title"
              :title="project.title"
              :role="project.role"
              :description="project.description"
              :tags="project.tags"
              :metrics="project.metrics"
              :githubUrl="project.githubUrl"
              :liveUrl="project.liveUrl"
            />
          </div>
        </QnACard>

        <!-- Q2: 技能清單 -->
        <QnACard
          :index="2"
          question="我的完整技術能力矩陣清單為何？"
          highlight="以前端生態為基石，向外延伸至後端資料流與 UI/UX 設計系統，形成具備廣度與深度的 T 型技能樹。"
          :tags="['Tech Stack', 'Skill Matrix', 'T-Shaped Engineer']"
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
