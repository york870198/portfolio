<script setup lang="ts">
import { useI18n } from 'vue-i18n'

// One list for the tech stack page and the resume; `extended` skills only appear on the full page.
const skillCategories = [
  {
    id: 'frontend',
    nameKey: 'what.skills.frontend.title',
    skills: [
      { id: 'vue', label: 'Vue 3 (Pinia / Vue Router)' },
      { id: 'react', label: 'React 18+ (functional components / Redux)' },
      { id: 'typescript', messageKey: 'what.skills.frontend.typescript' },
      { id: 'vite', label: 'Vite / pnpm' },
      { id: 'pwa', label: 'PWA', extended: true },
      { id: 'browserCompatibility', messageKey: 'what.skills.frontend.browserCompatibility', extended: true }
    ]
  },
  {
    id: 'backend',
    nameKey: 'what.skills.backend.title',
    skills: [
      { id: 'node', label: 'Node.js / Express' },
      { id: 'rxjs', label: 'RxJS' },
      { id: 'rest', label: 'RESTful API' },
      { id: 'mysql', label: 'MySQL' },
      { id: 'mocking', label: 'API Mocking' },
      { id: 'websocket', messageKey: 'what.skills.backend.websocket', extended: true }
    ]
  },
  {
    id: 'design',
    nameKey: 'what.skills.design.title',
    skills: [
      { id: 'figma', messageKey: 'what.skills.design.figma' },
      { id: 'responsive', messageKey: 'what.skills.design.responsive' },
      { id: 'ci', label: 'CI/CD (GitHub Actions / GitHub Pages)' },
      { id: 'vitest', label: 'Vitest' }
    ]
  }
]

const props = withDefaults(defineProps<{ compact?: boolean }>(), { compact: false })
const { t } = useI18n({ useScope: 'global' })
</script>

<template>
  <div class="skills-grid">
    <div v-for="cat in skillCategories" :key="cat.id" class="skill-category-block">
      <h3 class="category-title">{{ t(cat.nameKey) }}</h3>
      <ul class="skills-sublist">
        <li v-for="item in cat.skills.filter(skill => !(props.compact && skill.extended))" :key="item.id" class="skill-li">
          {{ item.messageKey ? t(item.messageKey) : item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr)); gap: 1.25rem; margin-top: .5rem; }
.skill-category-block { display: flex; flex-direction: column; gap: .75rem; padding: 1.25rem; background: var(--bg-secondary); }
.category-title { padding-bottom: .45rem; font-size: 1.05rem; font-weight: 600; color: var(--accent-primary); }
.skills-sublist { display: flex; flex-direction: column; gap: .5rem; list-style: none; }
.skill-li { font-size: 1rem; line-height: 1.5; color: var(--text-secondary); }
</style>
