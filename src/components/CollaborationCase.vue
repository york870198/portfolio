<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })
const steps = ['differences', 'agreement', 'api', 'verification'] as const
</script>

<template>
  <p>{{ t('when.project.title') }}</p>
  <ol class="collaboration-steps">
    <li v-for="step in steps" :key="step">
      <strong>{{ t(`how.case.labels.${step}`) }}</strong>
      {{ t(`how.case.${step}`) }}
    </li>
  </ol>
</template>

<style scoped>
.collaboration-steps {
  padding-left: 1.5rem;
}
</style>
