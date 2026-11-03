<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import Icon from './Icon.vue'

// index.html resolves the saved or system theme before first paint; start from what it chose.
const isDark = ref(document.documentElement.dataset.theme !== 'light')

const toggleTheme = () => {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  try {
    localStorage.setItem('portfolio-theme', theme)
  } catch (e) {
    // ignore local storage errors
  }
}

const { t } = useI18n({ useScope: 'global' })
</script>

<template>
  <button
    class="theme-toggle-btn"
    @click="toggleTheme"
    :title="isDark ? t('common.theme.switchToLight') : t('common.theme.switchToDark')"
    :aria-label="isDark ? t('common.theme.switchToLight') : t('common.theme.switchToDark')"
    id="theme-toggle-btn"
  >
    <Icon :name="isDark ? 'sun' : 'moon'" class="theme-icon" />
  </button>
</template>

<style scoped>
.theme-toggle-btn {
  flex-shrink: 0;
  min-width: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-full);
  background: var(--bg-card-subtle);
  border: 0;
  color: var(--text-primary);
  font-size: 1.25rem;
  transition: background var(--transition-fast), transform var(--transition-fast);
  cursor: pointer;
}

.theme-toggle-btn:hover {
  background: var(--bg-card-hover);
  border-color: var(--border-card-hover);
  transform: scale(1.05);
}

.theme-icon {
  user-select: none;
  line-height: 1;
}
</style>
