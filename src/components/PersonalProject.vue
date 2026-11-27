<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import QnACard from '@/components/QnACard.vue'

const props = withDefaults(defineProps<{
  headingLevel?: 2 | 3
  index?: number
}>(), { headingLevel: 2 })
const { t } = useI18n({ useScope: 'global' })
const details = ['approach', 'stack', 'outcome'] as const
</script>

<template>
  <QnACard
    id="mountain-dog"
    class="personal-project"
    :heading-level="props.headingLevel"
    :index="props.index"
    :question="t('when.personalProject.title')"
    :highlight="t('when.personalProject.summary')"
  >
    <p>{{ t('when.personalProject.period') }}</p>
    <ul>
      <li v-for="item in details" :key="item">
        <strong>{{ t(`when.personalProject.labels.${item}`) }}</strong>
        {{ t(`when.personalProject.${item}`) }}
      </li>
      <!-- The URL is the link text so paper readers of the PDF can still find it. -->
      <li>
        <strong>{{ t('when.personalProject.labels.link') }}</strong> <a href="https://indie-dev-fayang.com/mountaindog/" target="_blank" rel="noopener noreferrer">indie-dev-fayang.com/mountaindog<span class="sr-only">{{ t('common.opensInNewTab') }}</span></a>
      </li>
    </ul>
  </QnACard>
</template>

<style scoped>
@media print {
  .personal-project { break-inside: avoid; page-break-inside: avoid; }
}
</style>
