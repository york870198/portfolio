<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '@/components/Navbar.vue'

const route = useRoute()
watch(() => route.path, async () => {
  await nextTick()
  const heading = document.querySelector<HTMLElement>('main h1')
  heading?.setAttribute('tabindex', '-1')
  heading?.focus({ preventScroll: true })
}, { flush: 'post' })
const { t } = useI18n({ useScope: 'global' })
</script>

<template>
  <div class="app-layout">
    <a class="skip-link" href="#main-content">{{ t('common.skipToContent') }}</a>
    <!-- 常駐導覽列 -->
    <Navbar />

    <!-- 頁面內容容器 -->
    <main id="main-content" class="main-content" tabindex="-1">
      <router-view />
    </main>

    <!-- 頁尾 -->
    <footer class="app-footer">
      <div class="container footer-container">
        <p class="footer-text">
          © {{ new Date().getFullYear() }} Portfolio. Built with Vue 3 & TypeScript.
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Footer */
.app-footer {
  border-top: 1px solid var(--border-subtle);
  padding: 1.75rem 0;
  margin-top: auto;
  background: var(--bg-primary);
}

.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-text {
  color: var(--text-muted);
  font-size: 0.88rem;
  text-align: center;
}
</style>
