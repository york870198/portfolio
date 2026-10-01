<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageHeader from '@/components/PageHeader.vue'
import QnACard from '@/components/QnACard.vue'
const { t } = useI18n({ useScope: 'global' })
</script>

<template>
  <div class="page when-page page-container">
    <div class="container">
      <PageHeader
        themeTag="WHEN"
        themeIndex="02"
        :title="t('when.title')"
        :subtitle="t('when.subtitle')"
        accentColor="var(--theme-when)"
      />

      <div class="page-content-flow">
        <QnACard
          :index="1"
          :question="t('when.careerStart.question')"
          :highlight="t('when.careerStart.highlight')"
          accentColor="var(--theme-when)"
        >
          <p> {{ t('when.careerStart.hobby') }}<br/> {{ t('when.careerStart.pandemic') }}<br/> {{ t('when.careerStart.transition') }} </p>
        </QnACard>

        <QnACard
          :index="2"
          :question="t('when.previousRole.question')"
          :highlight="t('when.previousRole.highlight')"
          accentColor="var(--theme-when)"
        >
          <p> {{ t('when.previousRole.tenure') }}<br/> {{ t('when.previousRole.company') }}<br/> {{ t('when.previousRole.studyGroups') }}<br/>
          </p>
          <p> {{ t('when.previousRole.family') }} </p>
        </QnACard>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles can be extended here for custom customizations */
</style>
