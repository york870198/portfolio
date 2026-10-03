<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { nextTick, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { localizedTarget } from '@/i18n/locale'
import WorkExperience from '@/components/WorkExperience.vue'

const route = useRoute()
const router = useRouter()

const skillCategories = [
  {
    "id": "frontend",
    "nameKey": "what.skills.frontend.title",
    "skills": [
      {
        "id": "vue",
        "label": "Vue 3 (Pinia / Vue Router)"
      },
      {
        "id": "react",
        "label": "React 18+ (functional components / Redux)"
      },
      {
        "id": "typescript",
        "messageKey": "what.skills.frontend.typescript"
      },
      {
        "id": "vite",
        "label": "Vite / pnpm"
      }
    ]
  },
  {
    "id": "backend",
    "nameKey": "what.skills.backend.title",
    "skills": [
      {
        "id": "node",
        "label": "Node.js / Express"
      },
      {
        "id": "rxjs",
        "label": "RxJS"
      },
      {
        "id": "rest",
        "label": "RESTful API"
      },
      {
        "id": "mysql",
        "label": "MySQL"
      },
      {
        "id": "mocking",
        "label": "API Mocking"
      }
    ]
  },
  {
    "id": "design",
    "nameKey": "what.skills.design.title",
    "skills": [
      {
        "id": "figma",
        "messageKey": "what.skills.design.figma"
      },
      {
        "id": "responsive",
        "messageKey": "what.skills.design.responsive"
      },
      {
        "id": "ci",
        "label": "CI/CD (GitHub Actions / GitHub Pages)"
      },
      {
        "id": "vitest",
        "label": "Vitest"
      }
    ]
  }
]

const printResume = () => {
  window.print()
}

const goBack = () => {
  router.push(localizedTarget(router.resolve('/'), route))
}

let isMounted = false
onUnmounted(() => { isMounted = false })
onMounted(async () => {
  isMounted = true
  // 若帶有 ?print=true 參數，則在載入後自動喚起列印對話框
  if (route.query.print === 'true' || route.query.auto === 'true') {
    await nextTick()
    await document.fonts?.ready
    if (isMounted) window.print()
  }
})
const { t, locale } = useI18n({ useScope: 'global' })
</script>

<template>
  <div class="page resume-page page-container">
    <div class="container resume-container">
      <!-- 螢幕操作列 (列印時自動隱藏) -->
      <div class="resume-toolbar no-print">
        <button class="toolbar-btn back-btn" @click="goBack" id="resume-back-btn">
          <span>←</span> {{ t('common.backHome') }} </button>
        <div class="toolbar-actions">
          <button class="toolbar-btn print-btn" @click="printResume" id="resume-print-action-btn">
            <span>🖨️</span> {{ t('resume.toolbar.print') }} </button>
        </div>
      </div>

      <!-- 履歷頂部個人名片摘要 (Resume Header) -->
      <header class="resume-profile-header card">
        <div class="profile-main-info">
          <div class="profile-name-row">
            <span class="profile-badge">Fay</span>
            <div class="name-block">
              <h1 class="profile-name">Fay Chung</h1>
              <p class="profile-title">{{ t('resume.profile.title') }}</p>
            </div>
          </div>
          <p class="profile-summary"> {{ t('resume.profile.summary') }} </p>
        </div>

        <div class="profile-contact-grid">
          <div class="contact-item">
            <span class="contact-icon">📧</span>
            <a href="mailto:york870198@gmail.com" class="contact-link">york870198@gmail.com</a>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📍</span>
            <span>{{ t('resume.concise.location') }}</span>
          </div>
          <div class="contact-item">
            <span class="contact-icon">💻</span>
            <a href="https://github.com/york870198" target="_blank" rel="noopener noreferrer" class="contact-link">github.com/york870198</a>
          </div>
          <div class="contact-item">
            <span class="contact-icon">💼</span>
            <a href="https://www.linkedin.com/in/fay-chung-682698224/" target="_blank" rel="noopener noreferrer" class="contact-link">LinkedIn: Fay Chung</a>
          </div>
        </div>
      </header>

      <div class="resume-sections-flow">
        <section class="resume-section" aria-labelledby="resume-experience-title">
          <h2 id="resume-experience-title" class="resume-section-title">{{ t('home.when.title') }}</h2>
          <div class="section-content-flow">
            <WorkExperience compact :heading-level="3" />
          </div>
        </section>

        <section class="resume-section" aria-labelledby="resume-skills-title">
          <h2 id="resume-skills-title" class="resume-section-title">{{ t('home.what.title') }}</h2>
          <div class="skills-grid">
            <div v-for="cat in skillCategories" :key="cat.id" class="skill-category-block">
              <h3 class="category-title">{{ t(cat.nameKey) }}</h3>
              <ul class="skills-sublist">
                <li v-for="item in cat.skills" :key="item.id" class="skill-li">
                  {{ item.messageKey ? t(item.messageKey) : item.label }}
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section class="resume-section resume-body" aria-labelledby="resume-development-title">
          <h2 id="resume-development-title" class="resume-section-title">{{ t('resume.concise.developmentTitle') }}</h2>
          <ul>
            <li>{{ t('resume.concise.uxCourse') }}</li>
            <li><strong>Tauri{{ locale === 'en' ? ':' : '：' }}</strong> {{ t('resume.concise.tauri') }}</li>
            <li><strong>Flutter{{ locale === 'en' ? ':' : '：' }}</strong> {{ t('resume.concise.flutter') }}</li>
          </ul>
        </section>

        <section class="resume-section resume-body" aria-labelledby="resume-work-title">
          <h2 id="resume-work-title" class="resume-section-title">{{ t('resume.concise.workTitle') }}</h2>
          <p>{{ t('resume.concise.work') }}</p>
          <p>{{ t('resume.concise.remoteExperience') }}</p>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.resume-section-title {
  font-size: 1.4rem;
  line-height: 1.5;
  font-weight: 600;
  color: var(--text-primary);
}

.resume-body {
  color: var(--text-secondary);
  font-size: 1.025rem;
  line-height: 1.95;
  overflow-wrap: anywhere;
}

.resume-body ul { padding-left: 1.25rem; }
.resume-body li + li { margin-top: 0.5rem; }
.resume-body strong { color: var(--text-primary); }

@media print {
  .resume-section-title { break-after: avoid; page-break-after: avoid; }
  .resume-body { break-inside: avoid; page-break-inside: avoid; }
}

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
  color: var(--text-inverse);
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
  color: var(--text-inverse);
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

/* Continuous resume reading order */
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

@media (max-width: 440px) {
  .resume-toolbar {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
    padding: 0.75rem;
  }

  .toolbar-btn {
    justify-content: center;
  }
}
</style>
