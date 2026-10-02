<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { nextTick, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { localizedTarget } from '@/i18n/locale'
import PageHeader from '@/components/PageHeader.vue'
import QnACard from '@/components/QnACard.vue'
import WorkExperience from '@/components/WorkExperience.vue'
import plurkIcon from '@/assets/icons/plurk.png'

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
        "label": "React 18+ (Functional component / Redux)"
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
        "label": "CI/CD (GitHub Actions / Pages)"
      },
      {
        "id": "vitest",
        "label": "Vitest"
      }
    ]
  }
]

const socialLinks = [
  { id: 'github', name: 'GitHub', icon: '💻', url: 'https://github.com/york870198', descKey: 'resume.social.github' },
  { id: 'plurk', name: 'Plurk', icon: plurkIcon, url: 'https://www.plurk.com/york870198', descKey: 'resume.social.plurk' },
  { id: 'linkedin', name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/fay-chung-682698224/', descKey: 'resume.social.linkedin' },
  { id: 'cake', name: 'Cake', icon: '🍰', url: 'https://www.cake.me/me/fayang', descKey: 'resume.social.cake' }
]

const isImageIcon = (icon: string) => {
  return icon.startsWith('data:') || icon.startsWith('/') || icon.includes('.') || icon.includes('blob:')
}

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
const { t } = useI18n({ useScope: 'global' })
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
              <p class="profile-title">{{ t('resume.profile.title') }} <span>Senior Frontend Developer</span></p>
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
            <i18n-t scope="global" keypath="resume.profile.location" tag="span"><template #location><span lang="en">(Taipei, Taiwan)</span></template></i18n-t>
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
            :title="t('home.who.title')"
            :subtitle="t('who.subtitle')"
            accentColor="var(--theme-who)"
          />
          <div class="section-content-flow">
            <QnACard :heading-level="3"
              :index="1"
              :question="t('who.identity.question')"
              :highlight="t('who.identity.highlight')"
              :tags="['Senior Frontend', 'React & Vue', 'Full-Stack Mindset']"
              accentColor="var(--theme-who)"
            >
              <p> {{ t('who.identity.workName') }}<br /> {{ t('who.identity.realName') }}<br />
              </p>
              <p>
                <i18n-t scope="global" keypath="who.identity.architecture" tag="span"><template #vue><strong lang="en">Vue 3</strong></template><template #react><strong lang="en">React</strong></template></i18n-t><br/> {{ t('who.identity.backend') }}<br /> {{ t('who.identity.design') }}<br />
              </p>
            </QnACard>

            <QnACard :heading-level="3"
              :index="2"
              :question="t('who.interests.question')"
              :highlight="t('who.interests.highlight')"
              :tags="[]"
              accentColor="var(--theme-who)"
            >
              <p> {{ t('who.interests.gameDevelopment') }}<br/> {{ t('who.interests.presentation') }}<br/> {{ t('who.interests.coincidence') }} </p>
              <p> {{ t('who.interests.communities') }} </p>
            </QnACard>
          </div>
        </section>

        <!-- SECTION 2: WHEN -->
        <section class="resume-section" id="section-when">
          <PageHeader
            themeTag="WHEN"
            themeIndex="02"
            :title="t('home.when.title')"
            :subtitle="t('when.subtitle')"
            accentColor="var(--theme-when)"
          />
          <div class="section-content-flow">
            <WorkExperience compact :heading-level="3" />

            <QnACard :heading-level="3"
              :index="3"
              :question="t('when.careerStart.question')"
              :highlight="t('when.careerStart.highlight')"
              accentColor="var(--theme-when)"
            >
              <p> {{ t('when.careerStart.hobby') }}<br/> {{ t('when.careerStart.pandemic') }}<br/> {{ t('when.careerStart.transition') }} </p>
            </QnACard>

          </div>
        </section>

        <!-- SECTION 3: WHAT -->
        <section class="resume-section" id="section-what">
          <PageHeader
            themeTag="WHAT"
            themeIndex="03"
            :title="t('home.what.title')"
            :subtitle="t('what.subtitle')"
            accentColor="var(--theme-what)"
          />
          <div class="section-content-flow">
            <QnACard :heading-level="3"
              :index="1"
              :question="t('what.web.question')"
              :highlight="t('what.web.highlight')"
              :tags="['Web Development', 'UI/UX', 'RWD']"
              accentColor="var(--theme-what)"
            >
              <div class="skills-grid">
                <div v-for="cat in skillCategories" :key="cat.id" class="skill-category-block">
                  <h4 class="category-title">{{ t(cat.nameKey) }}</h4>
                  <ul class="skills-sublist">
                    <li v-for="item in cat.skills" :key="item.id" class="skill-li">
                      {{ item.messageKey ? t(item.messageKey) : item.label }}
                    </li>
                  </ul>
                </div>
              </div>
            </QnACard>

            <QnACard :heading-level="3"
              :index="2"
              :question="t('what.beyondFrontend.question')"
              accentColor="var(--theme-what)"
            >
              <ul>
                <li><strong>Tauri：</strong>{{ t('what.beyondFrontend.tauri') }}</li>
                <li><strong>Flutter：</strong>{{ t('what.beyondFrontend.flutter') }}</li>
                <li><strong>Python：</strong>{{ t('what.beyondFrontend.python') }}</li>
              </ul>
            </QnACard>

            <QnACard :heading-level="3"
              :index="3"
              :question="t('what.ai.question')"
              :highlight="t('what.ai.highlight')"
              accentColor="var(--theme-what)"
            >
              <p> {{ t('what.ai.bicycle') }}<br/> {{ t('what.ai.destination') }}<br/> {{ t('what.ai.balance') }} </p>
              <p> {{ t('what.ai.benefit') }} </p>
            </QnACard>
          </div>
        </section>

        <!-- SECTION 4: WHERE -->
        <section class="resume-section" id="section-where">
          <PageHeader
            themeTag="WHERE"
            themeIndex="04"
            :title="t('home.where.title')"
            :subtitle="t('where.subtitle')"
            accentColor="var(--theme-where)"
          />
          <div class="section-content-flow">
            <QnACard :heading-level="3"
              :index="1"
              :question="t('where.location.question')"
              :highlight="t('where.location.highlight')"
              accentColor="var(--theme-where)"
            >
              <p> {{ t('where.location.home') }}<br>
              </p>
              <p>{{ t('where.location.socialIntro') }}</p>
              <div class="footprint-grid">
                <a
                  v-for="link in socialLinks"
                  :key="link.id"
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
                    <span class="footprint-desc">{{ t(link.descKey) }}</span>
                  </div>
                  <span class="footprint-arrow">↗</span>
                </a>
              </div>
            </QnACard>

            <QnACard :heading-level="3"
              :index="2"
              :question="t('where.work.question')"
              :highlight="t('where.work.highlight')"
              accentColor="var(--theme-where)"
            >
              <ul>
                <li><strong>{{ t('where.work.rangeLabel') }}</strong>{{ t('where.work.range') }}</li>
                <li><strong>{{ t('where.work.preferenceLabel') }}</strong>{{ t('where.work.preference') }}</li>
              </ul>
            </QnACard>
          </div>
        </section>

        <!-- SECTION 5: WHY -->
        <section class="resume-section" id="section-why">
          <PageHeader
            themeTag="WHY"
            themeIndex="05"
            :title="t('home.why.title')"
            :subtitle="t('why.subtitle')"
            accentColor="var(--theme-why)"
          />
          <div class="section-content-flow">
            <QnACard :heading-level="3"
              :index="1"
              :question="t('why.frontend.question')"
              :highlight="t('why.frontend.highlight')"
              accentColor="var(--theme-why)"
            >
              <p> {{ t('why.frontend.interest') }}<br /> {{ t('why.frontend.fullStack') }}<br /> {{ t('why.frontend.firstRole') }} </p>
            </QnACard>
          </div>
        </section>

        <!-- SECTION 6: HOW -->
        <section class="resume-section" id="section-how">
          <PageHeader
            themeTag="HOW"
            themeIndex="06"
            :title="t('home.how.title')"
            :subtitle="t('how.subtitle')"
            accentColor="var(--theme-how)"
          />
          <div class="section-content-flow">
            <QnACard :heading-level="3"
              :index="1"
              :question="t('how.website.question')"
              :highlight="t('how.website.highlight')"
              accentColor="var(--theme-how)"
            >
              <p> {{ t('resume.how.scope') }}<br /> {{ t('resume.how.specification') }}<br /> {{ t('how.website.timeSaved') }} </p>
            </QnACard>

            <QnACard :heading-level="3"
              :index="2"
              :question="t('how.collaboration.question')"
              :highlight="t('how.collaboration.highlight')"
              accentColor="var(--theme-how)"
            >
              <p> {{ t('how.collaboration.experience') }}<br /> {{ t('how.collaboration.sharedPicture') }}<br /> {{ t('how.collaboration.basicKnowledge') }}<br /> {{ t('how.collaboration.lessFriction') }} </p>
              <p> {{ t('how.collaboration.backend') }}<br /> {{ t('how.collaboration.designCourse') }} </p>
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
