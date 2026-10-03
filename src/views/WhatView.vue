<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageHeader from '@/components/PageHeader.vue'
import QnACard from '@/components/QnACard.vue'
import NavigationLink from '@/components/NavigationLink.vue'

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
      },
      {
        "id": "pwa",
        "label": "PWA"
      },
      {
        "id": "browserCompatibility",
        "messageKey": "what.skills.frontend.browserCompatibility"
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
      },
      {
        "id": "websocket",
        "messageKey": "what.skills.backend.websocket"
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
const { t } = useI18n({ useScope: 'global' })
</script>

<template>
  <div class="page what-page page-container">
    <div class="container">
      <PageHeader
        themeTag="WHAT"
        themeIndex="03"
        :title="t('what.title')"
        :subtitle="t('what.subtitle')"
        accentColor="var(--theme-what)"
      />

      <div class="page-content-flow">
        <!-- Q1: 技能與專案用途 -->
        <QnACard
          :index="1"
          :question="t('what.web.question')"
          :highlight="t('what.web.highlight')"
          :tags="['Web Development', 'UI/UX', 'RWD' ]"
          accentColor="var(--theme-what)"
        >
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
          <section class="work-evidence" aria-labelledby="work-evidence-title">
            <h3 id="work-evidence-title">{{ t('what.evidence.title') }}</h3>
            <p>{{ t('when.project.title') }}</p>
            <ul>
              <li><strong>Vue 3{{ t('common.labelSeparator') }}</strong> {{ t('what.evidence.vue') }}</li>
              <li><strong>Pinia{{ t('common.labelSeparator') }}</strong> {{ t('what.evidence.pinia') }}</li>
              <li><strong>RxJS{{ t('common.labelSeparator') }}</strong> {{ t('what.evidence.rxjs') }}</li>
              <li><strong>WebSocket{{ t('common.labelSeparator') }}</strong> {{ t('what.evidence.websocket') }}</li>
            </ul>
            <NavigationLink id="work-evidence-link" to="/when">{{ t('what.evidence.readCase') }}</NavigationLink>
          </section>
        </QnACard>

        <QnACard
          :index="2"
          :question="t('what.beyondFrontend.question')"
          accentColor="var(--theme-what)"
        >
          <ul>
            <li><strong>Tauri{{ t('common.labelSeparator') }}</strong> {{ t('what.beyondFrontend.tauri') }}</li>
            <li><strong>Flutter{{ t('common.labelSeparator') }}</strong> {{ t('what.beyondFrontend.flutter') }}</li>
            <li><strong>Python{{ t('common.labelSeparator') }}</strong> {{ t('what.beyondFrontend.python') }}</li>
          </ul>
        </QnACard>
      </div>
    </div>
  </div>
</template>

<style scoped>
.work-evidence {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-subtle);
}

.work-evidence h3 {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
}

.work-evidence a {
  align-self: flex-start;
  padding-block: 0.5rem;
}

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
