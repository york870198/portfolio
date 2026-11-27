<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageHeader from '@/components/PageHeader.vue'
import WorkExperience from '@/components/WorkExperience.vue'
import PersonalProject from '@/components/PersonalProject.vue'
const { t } = useI18n({ useScope: 'global' })
</script>

<template>
  <div class="page when-page page-container">
    <div class="container">
      <PageHeader
        themeTag="WHEN"
        :title="t('when.title')"
        :subtitle="t('when.subtitle')"
      />

      <div class="page-content-flow">
        <WorkExperience />
        <PersonalProject :index="3" />
      </div>
    </div>
  </div>
</template>
