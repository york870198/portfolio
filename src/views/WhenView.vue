<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageHeader from '@/components/PageHeader.vue'
import WorkExperience from '@/components/WorkExperience.vue'
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
        <WorkExperience />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles can be extended here for custom customizations */
</style>
