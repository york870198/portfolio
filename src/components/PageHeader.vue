<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { navRoutes } from '@/router'
import NavigationLink from './NavigationLink.vue'
const props = withDefaults(defineProps<{ themeTag: string; themeIndex?: string; title: string; subtitle: string; accentColor?: string }>(), { themeIndex: '01', accentColor: 'var(--accent-primary)' })
const route = useRoute()
const isResume = computed(() => route.path === '/resume')
</script>
<template>
  <header class="page-header" :class="{ 'resume-section-header': isResume }">
    <div class="chapter-meta"><span>{{ props.themeIndex }} / 06</span><span aria-hidden="true">↘</span></div>
    <span class="theme-letter" :style="isResume ? undefined : { viewTransitionName: `dimension-${props.themeTag.toLowerCase()}` }">{{ props.themeTag }}</span>
    <component :is="isResume ? 'h2' : 'h1'" class="page-title">{{ props.title }}</component>
    <p class="page-subtitle">{{ props.subtitle }}</p>
    <nav v-if="!isResume" class="chapter-nav no-print" aria-label="六個面向">
      <NavigationLink v-for="item in navRoutes.slice(1)" :key="item.path" :to="item.path">{{ item.tag }}</NavigationLink>
    </nav>
  </header>
</template>
<style scoped>
.page-header { position: sticky; top: calc(var(--navbar-height) + 2.5rem); align-self: start; }
.chapter-meta { display: flex; justify-content: space-between; padding-bottom: 1.25rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font: 12px var(--font-mono); }
.chapter-meta span:last-child { color: var(--accent-primary); font-size: 20px; }
.theme-letter { display: block; width: fit-content; margin-top: 1.75rem; color: var(--accent-primary); font: 700 clamp(2.6rem, 4.8vw, 4.5rem)/1 var(--font-heading); letter-spacing: -.055em; }
.page-title { font-size: clamp(1.65rem, 2.6vw, 2.4rem); margin: 1.1rem 0; letter-spacing: .015em; }
.page-subtitle { color: var(--text-secondary); font-size: 1rem; line-height: 1.9; max-width: 30ch; }
.chapter-nav { display: grid; grid-template-columns: repeat(3, 1fr); gap: .35rem; margin-top: 2.25rem; }
.chapter-nav a { display: flex; min-height: 44px; align-items: center; justify-content: center; border: 1px solid var(--border-subtle); font: 12px var(--font-mono); color: var(--text-secondary); }
.chapter-nav a:hover, .chapter-nav a[aria-current] { color: var(--text-inverse); background: var(--accent-primary); border-color: var(--accent-primary); }
.resume-section-header { position: static; margin-bottom: 2rem; }
.resume-section-header .theme-letter { font-size: 2rem; }
.resume-section-header .page-subtitle { max-width: 60ch; }
@media(max-width: 800px) {
  .page-header { position: static; }
  .theme-letter { font-size: 3.25rem; margin-top: 1.25rem; }
  .page-title { margin: .75rem 0; }
  .page-subtitle { max-width: 45ch; }
  .chapter-nav { grid-template-columns: repeat(6, 1fr); margin-top: 1.5rem; gap: .25rem; }
  .chapter-nav a { font-size: 11px; }
}
</style>
