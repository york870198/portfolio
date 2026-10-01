<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageHeader from '@/components/PageHeader.vue'
import QnACard from '@/components/QnACard.vue'
const { t } = useI18n({ useScope: 'global' })
</script>

<template>
  <div class="page who-page page-container">
    <div class="container">
      <PageHeader
        themeTag="WHO"
        themeIndex="01"
        :title="t('who.title')"
        :subtitle="t('who.subtitle')"
        accentColor="var(--theme-who)"
      />

      <div class="page-content-flow">
        <QnACard
          :index="1"
          :question="t('who.identity.question')"
          :highlight="t('who.identity.highlight')"
          :tags="['Senior Frontend', 'React & Vue', 'Full-Stack Mindset']"
          accentColor="var(--theme-who)"
        >
          <p> {{ t('who.identity.workName') }}<br /> {{ t('who.identity.realName') }}<br />
          </p>
          <p>
            <i18n-t scope="global" keypath="who.identity.architecture" tag="span"><template #vue><strong lang="en">Vue 3</strong></template><template #react><strong lang="en">React</strong></template></i18n-t><br /> {{ t('who.identity.backend') }}<br /> {{ t('who.identity.design') }}<br />
          </p>
        </QnACard>

        <QnACard
          :index="2"
          :question="t('who.interests.question')"
          :highlight="t('who.interests.highlight')"
          :tags="[]"
          accentColor="var(--theme-who)"
        >
          <p> {{ t('who.interests.gameDevelopment') }}<br/> {{ t('who.interests.presentation') }}<br/> {{ t('who.interests.coincidence') }} </p>
          <p> {{ t('who.interests.communities') }} </p>
        </QnACard>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles can be extended here for custom customizations */
</style>
