<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageHeader from '@/components/PageHeader.vue'
import QnACard from '@/components/QnACard.vue'
const { t } = useI18n({ useScope: 'global' })
</script>

<template>
  <div class="page why-page page-container">
    <div class="container">
      <PageHeader
        themeTag="WHY"
        themeIndex="05"
        :title="t('why.title')"
        :subtitle="t('why.subtitle')"
        accentColor="var(--theme-why)"
      />

      <div class="page-content-flow">
        <QnACard
          :index="1"
          :question="t('why.frontend.question')"
          :highlight="t('why.frontend.highlight')"
          accentColor="var(--theme-why)"
        >
          <p> {{ t('why.frontend.interest') }}<br /> {{ t('why.frontend.fullStack') }}<br /> {{ t('why.frontend.firstRole') }} </p>
        </QnACard>
      </div>
    </div>
  </div>
</template>
