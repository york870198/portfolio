<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import { resolveLocale, switchLocaleTarget } from '@/i18n/locale'

const { t } = useI18n({ useScope: 'global' })
const route = useRoute()
const router = useRouter()
function changeLanguage(event: Event) {
  const language = resolveLocale((event.target as HTMLSelectElement).value)
  void router.push(switchLocaleTarget(route, language))
}
</script>

<template>
  <select id="nav-language-select" class="language-select" :aria-label="t('common.language.label')" :value="resolveLocale(route.query.lang)" @change="changeLanguage">
    <option value="zh-TW" lang="zh-TW">繁體中文</option>
    <option value="en" lang="en">English</option>
  </select>
</template>

<style scoped>
.language-select { min-height: 44px; max-width: 115px; padding: .45rem .4rem; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); color: var(--text-primary); background: var(--bg-primary); font: 12px var(--font-sans); cursor: pointer; }
</style>
