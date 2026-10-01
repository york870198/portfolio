<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageHeader from '@/components/PageHeader.vue'
import QnACard from '@/components/QnACard.vue'
import plurkIcon from '@/assets/icons/plurk.png'

const socialLinks = [
  { id: 'github', name: 'GitHub', icon: '💻', url: 'https://github.com/york870198', descKey: 'where.social.github' },
  { id: 'plurk', name: 'Plurk', icon: plurkIcon, url: 'https://www.plurk.com/york870198', descKey: 'where.social.plurk' },
  { id: 'linkedin', name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/fay-chung-682698224/', descKey: 'where.social.linkedin' },
  { id: 'cake', name: 'Cake', icon: '🍰', url: 'https://www.cake.me/me/fayang', descKey: 'where.social.cake' }
]

const isImageIcon = (icon: string) => {
  return icon.startsWith('data:') || icon.startsWith('/') || icon.includes('.') || icon.includes('blob:')
}
const { t } = useI18n({ useScope: 'global' })
</script>

<template>
  <div class="page where-page page-container">
    <div class="container">
      <PageHeader
        themeTag="WHERE"
        themeIndex="04"
        :title="t('where.title')"
        :subtitle="t('where.subtitle')"
        accentColor="var(--theme-where)"
      />

      <div class="page-content-flow">
        <QnACard
          :index="1"
          :question="t('where.location.question')"
          :highlight="t('where.location.highlight')"
          accentColor="var(--theme-where)"
        >
          <p> {{ t('where.location.home') }}<br>
          </p>
          <p>{{ t('where.location.socialIntro') }}</p>
          <div class="footprint-grid">
            <a
              v-for="link in socialLinks"
              :key="link.id"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="footprint-card"
            >
              <span class="footprint-icon">
                <img v-if="isImageIcon(link.icon)" :src="link.icon" :alt="link.name" class="footprint-img" />
                <span v-else>{{ link.icon }}</span>
              </span>
              <div class="footprint-info">
                <span class="footprint-name">{{ link.name }}</span>
                <span class="footprint-desc">{{ t(link.descKey) }}</span>
              </div>
              <span class="footprint-arrow">↗</span>
            </a>
          </div>
        </QnACard>

        <QnACard
          :index="2"
          :question="t('where.work.question')"
          :highlight="t('where.work.highlight')"
          accentColor="var(--theme-where)"
        >
          <ul>
            <li><strong>{{ t('where.work.rangeLabel') }}</strong>{{ t('where.work.range') }}</li>
            <li><strong>{{ t('where.work.preferenceLabel') }}</strong>{{ t('where.work.preference') }}</li>
          </ul>
        </QnACard>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footprint-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  gap: 1rem;
  margin-top: 0.5rem;
}

.footprint-card {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 1.1rem;
  background: var(--bg-card-subtle);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.footprint-card:hover {
  background: var(--bg-card-hover);
  border-color: var(--theme-where, #f59e0b);
  transform: translateY(-2px);
}

.footprint-icon {
  font-size: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  flex-shrink: 0;
}
.footprint-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.footprint-info {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.footprint-name {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.95rem;
}

.footprint-desc {
  font-size: 0.78rem;
  color: var(--text-muted);
}

.footprint-arrow {
  color: var(--text-muted);
  font-size: 0.95rem;
}

.direct-contact-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--bg-card-subtle);
  border: 1px dashed var(--theme-where, #f59e0b);
  border-radius: var(--radius-md);
  margin-top: 0.75rem;
  flex-wrap: wrap;
}

.direct-text {
  font-weight: 500;
  color: var(--text-primary);
  font-size: 0.95rem;
}
</style>
