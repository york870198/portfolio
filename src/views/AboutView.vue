<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToHome = () => {
  router.push('/')
}

const skills = [
  { category: '前端技術', items: ['Vue 3 (Composition API)', 'TypeScript', 'HTML5 / CSS3', 'Vite'] },
  { category: '架構設計', items: ['Single-Page Application (SPA)', '響應式網頁設計 (RWD)', 'Vue Router'] },
  { category: '工程化與部署', items: ['pnpm', 'Git / GitHub', 'GitHub Actions (CI/CD)', 'GitHub Pages'] }
]
</script>

<template>
  <div class="page about-page">
    <div class="container about-container">
      <!-- Header -->
      <section class="about-header">
        <div class="badge">
          <span>💡 關於此專案與作者</span>
        </div>
        <h1 class="about-title">
          關於 <span class="gradient-text">Portfolio</span>
        </h1>
        <p class="about-subtitle">
          每一個頁面都是一個單獨維護的 .vue 檔案，具備高擴充性與清晰的模組結構。
        </p>
      </section>

      <!-- Profile & Overview Card -->
      <section class="card profile-card">
        <div class="profile-header">
          <div class="avatar-placeholder">
            <span>💻</span>
          </div>
          <div class="profile-info">
            <h2 class="profile-name">前端工程師 / 網頁開發者</h2>
            <p class="profile-bio">
              熱衷於打造優雅、高效且具備良好使用者體驗的 Web 應用。
              專注於 Vue 生態系、TypeScript 現代化架構與元件化設計。
            </p>
          </div>
        </div>
      </section>

      <!-- Skills Cards -->
      <section class="skills-section">
        <h2 class="section-title">核心技術棧與技能</h2>
        <div class="skills-grid">
          <div v-for="skillGroup in skills" :key="skillGroup.category" class="card skill-card">
            <h3 class="skill-category">{{ skillGroup.category }}</h3>
            <ul class="skill-list">
              <li v-for="item in skillGroup.items" :key="item" class="skill-item">
                <span class="bullet">▹</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Back Action -->
      <div class="about-actions">
        <button class="btn-primary" @click="navigateToHome" id="about-btn-home">
          <span>← 返回首頁</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  padding: 3rem 0 5rem;
}

.about-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 900px;
}

.about-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.about-title {
  font-size: 2.75rem;
  letter-spacing: -0.02em;
}

.about-subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 620px;
}

/* Profile Card */
.profile-card {
  padding: 2.25rem;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 1.75rem;
}

.avatar-placeholder {
  width: 72px;
  height: 72px;
  border-radius: var(--radius-md);
  background: var(--accent-gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  box-shadow: 0 4px 16px var(--accent-glow);
  flex-shrink: 0;
}

.profile-name {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}

.profile-bio {
  color: var(--text-secondary);
  line-height: 1.65;
  font-size: 0.98rem;
}

/* Skills */
.section-title {
  font-size: 1.6rem;
  margin-bottom: 1.25rem;
  text-align: center;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.skill-card {
  padding: 1.5rem;
}

.skill-category {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: var(--accent-secondary);
  border-bottom: 1px solid var(--border-subtle);
  padding-bottom: 0.5rem;
}

.skill-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.92rem;
}

.bullet {
  color: var(--accent-primary);
  font-weight: bold;
}

.about-actions {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .about-title {
    font-size: 2.1rem;
  }
  
  .profile-header {
    flex-direction: column;
    text-align: center;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
