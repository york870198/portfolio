<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(true)

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

onMounted(() => {
  try {
    const savedTheme = localStorage.getItem('portfolio-theme')
    if (savedTheme === 'light' || savedTheme === 'dark') {
      isDark.value = savedTheme === 'dark'
      document.documentElement.setAttribute('data-theme', savedTheme)
    } else {
      // Check system preference
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark.value = prefersDark
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light')
    }
  } catch (e) {
    // Default to dark
    document.documentElement.setAttribute('data-theme', 'dark')
  }
})
</script>

<template>
  <button
    class="theme-toggle-btn"
    @click="toggleTheme"
    :title="isDark ? '切換為淺色主題' : '切換為深色主題'"
    :aria-label="isDark ? '切換為淺色主題' : '切換為深色主題'"
    id="theme-toggle-btn"
  >
    <span class="theme-icon" v-if="isDark">🌙</span>
    <span class="theme-icon" v-else>☀️</span>
  </button>
</template>

<style scoped>
.theme-toggle-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: var(--radius-full);
  background: var(--bg-card-subtle);
  border: 1px solid var(--border-subtle);
  color: var(--text-primary);
  font-size: 1.05rem;
  transition: all var(--transition-fast);
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
