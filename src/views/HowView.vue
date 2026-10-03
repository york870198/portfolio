<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageHeader from '@/components/PageHeader.vue'
import QnACard from '@/components/QnACard.vue'
import CollaborationCase from '@/components/CollaborationCase.vue'
const { t } = useI18n({ useScope: 'global' })
</script>

<template>
  <div class="page how-page page-container">
    <div class="container">
      <PageHeader
        themeTag="HOW"
        themeIndex="06"
        :title="t('how.title')"
        :subtitle="t('how.subtitle')"
        accentColor="var(--theme-how)"
      />

      <div class="page-content-flow">
        <QnACard
          :index="1"
          :question="t('how.collaboration.question')"
          :highlight="t('how.case.summary')"
          accentColor="var(--theme-how)"
        >
          <CollaborationCase />
          <p>{{ t('how.collaboration.designCourse') }}</p>
        </QnACard>

        <QnACard
          :index="2"
          :question="t('how.website.question')"
          accentColor="var(--theme-how)"
        >
          <p>{{ t('how.website.scope') }}</p>
          <p>{{ t('how.website.stack') }}</p>
        </QnACard>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles can be extended here for custom customizations */
</style>
