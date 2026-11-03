<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import NavigationLink from '@/components/NavigationLink.vue'
const { t } = useI18n({ useScope: 'global' })
</script>

<template>
  <div class="page notfound-page">
    <div class="container notfound-container">
      <div class="card notfound-card">
        <span class="error-code gradient-text">404</span>
        <h1 class="notfound-title">{{ t('notFound.title') }}</h1>
        <p class="notfound-desc"> {{ t('notFound.description') }} </p>
        <div class="notfound-actions">
          <NavigationLink to="/" class="btn-primary" id="notfound-btn-home">{{ t('common.backHome') }}</NavigationLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.notfound-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - var(--navbar-height) - 120px);
  padding: 3rem 0;
}

.notfound-container {
  display: flex;
  justify-content: center;
}

.notfound-card {
  max-width: 540px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 3.5rem 2.5rem;
}

.error-code {
  font-family: var(--font-heading);
  font-size: 5.5rem;
  font-weight: 800;
  line-height: 1;
}

.notfound-title {
  font-size: 1.8rem;
}

.notfound-desc {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
}

.notfound-actions {
  margin-top: 0.5rem;
}
</style>
