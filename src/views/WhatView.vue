<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageHeader from '@/components/PageHeader.vue'
import QnACard from '@/components/QnACard.vue'
import NavigationLink from '@/components/NavigationLink.vue'
import SkillGrid from '@/components/SkillGrid.vue'

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
      />

      <div class="page-content-flow">
        <!-- Q1: 技能與專案用途 -->
        <QnACard
          :index="1"
          :question="t('what.web.question')"
          :highlight="t('what.web.highlight')"
          :tags="['Web Development', 'UI/UX', 'RWD' ]"
        >
          <SkillGrid />
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
        >
          <ul>
            <li><strong>Tauri{{ t('common.labelSeparator') }}</strong> {{ t('what.beyondFrontend.tauri') }}</li>
            <li><strong>Flutter{{ t('common.labelSeparator') }}</strong> {{ t('what.beyondFrontend.flutter') }}</li>
            <li><strong>Capacitor{{ t('common.labelSeparator') }}</strong> {{ t('what.beyondFrontend.capacitor') }}</li>
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
  border: 0;
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
</style>
