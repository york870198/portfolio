<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import QnACard from '@/components/QnACard.vue'

const props = withDefaults(defineProps<{
  compact?: boolean
  headingLevel?: 2 | 3
}>(), { compact: false, headingLevel: 2 })
const { t } = useI18n({ useScope: 'global' })
const contributions = ['delivery', 'requirements', 'api', 'verification'] as const
</script>

<template>
  <QnACard
    :heading-level="props.headingLevel"
    :index="1"
    :question="t('when.employment.employer')"
    :highlight="t('when.employment.roles')"
    accentColor="var(--theme-when)"
  >
    <p>{{ t('when.previousRole.highlight') }} · {{ t('when.employment.promotion') }}</p>
  </QnACard>

  <QnACard
    id="vue3-rebuild"
    :heading-level="props.headingLevel"
    :index="2"
    :question="t('when.project.title')"
    :highlight="t('when.project.summary')"
    accentColor="var(--theme-when)"
  >
    <p>{{ t('when.project.outcome') }}</p>
    <ul>
      <li v-for="item in contributions" :key="item">
        <strong>{{ t(`when.project.labels.${item}`) }}</strong>
        {{ t(`${props.compact ? 'resume.project' : 'when.project'}.${item}`) }}
      </li>
    </ul>
  </QnACard>
</template>
