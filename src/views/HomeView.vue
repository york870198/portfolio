<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import NavigationLink from '@/components/NavigationLink.vue'

const activeTag = ref('WHO')

interface DimensionItem {
  tag: string
  titleKey: string
  subtitleKey: string
  icon: string
  path: string
  accentColor: string
}

const dimensions: DimensionItem[] = [
  {
    tag: 'WHO',
    titleKey: 'home.who.title',
    subtitleKey: 'home.who.subtitle',
    icon: '👤',
    path: '/who',
    accentColor: 'var(--theme-who)'
  },
  {
    tag: 'WHEN',
    titleKey: 'home.when.title',
    subtitleKey: 'home.when.subtitle',
    icon: '⏳',
    path: '/when',
    accentColor: 'var(--theme-when)'
  },
  {
    tag: 'WHAT',
    titleKey: 'home.what.title',
    subtitleKey: 'home.what.subtitle',
    icon: '⚡',
    path: '/what',
    accentColor: 'var(--theme-what)'
  },
  {
    tag: 'WHERE',
    titleKey: 'home.where.title',
    subtitleKey: 'home.where.subtitle',
    icon: '📍',
    path: '/where',
    accentColor: 'var(--theme-where)'
  },
  {
    tag: 'WHY',
    titleKey: 'home.why.title',
    subtitleKey: 'home.why.subtitle',
    icon: '💡',
    path: '/why',
    accentColor: 'var(--theme-why)'
  },
  {
    tag: 'HOW',
    titleKey: 'home.how.title',
    subtitleKey: 'home.how.subtitle',
    icon: '🛠️',
    path: '/how',
    accentColor: 'var(--theme-how)'
  }
]

const { t } = useI18n({ useScope: 'global' })
</script>

<template>
  <div class="page home-page">
    <div class="container home-container">
      <section class="hero-section">
        <h1 class="hero-title"><span class="hero-eyebrow">Everything about </span><span class="hero-name">Fay<span aria-hidden="true">.</span></span></h1>
        <div class="identity-diagram" aria-hidden="true">
          <svg viewBox="0 0 360 260" fill="none">
            <path class="diagram-axis" d="M0 130H360M180 0V260" />
            <g v-for="(_, i) in dimensions" :key="i" :transform="'rotate(' + (i * 30) + ' 180 130)'">
              <ellipse cx="180" cy="130" rx="105" ry="77" :class="{ selected: dimensions[i]?.tag === activeTag }" />
            </g>
          </svg>
          <span class="diagram-label">{{ activeTag }}</span>
          <span class="diagram-caption">01 — 06</span>
        </div>
        <div class="hero-footnote" aria-hidden="true"><span>WHO · WHEN · WHAT<br>WHERE · WHY · HOW</span><span>↘</span></div>
      </section>
      <nav class="dimensions-section" :aria-label="t('common.dimensions')">
        <div class="index-label"><span>{{ t('common.dimensions') }}</span><span>INDEX ↓</span></div>
        <NavigationLink v-for="(item, index) in dimensions" :key="item.tag" :to="item.path" class="dimension-card" :id="'dimension-card-' + item.tag.toLowerCase()" @mouseenter="activeTag = item.tag" @focusin="activeTag = item.tag">
          <span class="dimension-number">0{{ index + 1 }}</span>
          <div class="dimension-copy">
            <div class="dimension-heading"><span class="dimension-tag" :style="{ viewTransitionName: 'dimension-' + item.tag.toLowerCase() }">{{ item.tag }}</span><h2 class="dimension-title">{{ t(item.titleKey) }}</h2></div>
            <p class="dimension-subtitle">{{ t(item.subtitleKey) }}</p>
          </div>
          <span class="explore-arrow" aria-hidden="true">↗</span><span class="sr-only">{{ t('common.moreDetails') }}</span>
        </NavigationLink>
      </nav>
    </div>
  </div>
</template>
<style scoped>
.home-page { padding: 3rem 0 5rem; }
.home-container { display: grid; grid-template-columns: .85fr 1.15fr; gap: 4.5rem; }
.hero-section { border-right: 1px solid var(--border-subtle); padding-right: 3.5rem; }
.hero-title { font-weight: 700; }
.hero-eyebrow { display: block; font: 12px var(--font-mono); letter-spacing: 0; color: var(--text-secondary); }
.hero-name { display: block; font-size: clamp(6rem, 13vw, 12rem); letter-spacing: -.075em; line-height: 1.05; margin: 2rem 0 2.5rem; }
.hero-name > span { color: var(--accent-primary); }
.identity-diagram { position: relative; border: 1px solid var(--border-subtle); max-width: 360px; }
.identity-diagram svg { display: block; width: 100%; }
.identity-diagram ellipse { stroke: var(--text-muted); stroke-width: .8; transition: stroke .2s ease, fill .2s ease; }
.identity-diagram ellipse.selected { stroke: var(--accent-primary); stroke-width: 1.5; fill: var(--bg-tag); }
.diagram-axis { stroke: var(--border-subtle); }
.diagram-label { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: .5rem; background: var(--bg-primary); font: 11px var(--font-mono); color: var(--accent-primary); }
.diagram-caption { position: absolute; left: 12px; bottom: 12px; font: 10px var(--font-mono); color: var(--text-muted); }
.hero-footnote { display: flex; justify-content: space-between; margin-top: 1.25rem; font: 10px/1.9 var(--font-mono); color: var(--text-muted); max-width: 360px; }
.hero-footnote > span:last-child { font-size: 26px; color: var(--accent-primary); }
.index-label { display: flex; justify-content: space-between; padding-bottom: 1.5rem; font: 12px var(--font-mono); color: var(--text-secondary); }
.dimension-card { display: grid; grid-template-columns: 22px 1fr 28px; gap: 1rem; padding: 1.65rem 0; border-top: 1px solid var(--border-subtle); align-items: start; }
.dimension-card:last-child { border-bottom: 1px solid var(--border-subtle); }
.dimension-number { color: var(--accent-primary); font: 11px var(--font-mono); padding-top: .6rem; }
.dimension-heading { display: flex; align-items: baseline; flex-wrap: wrap; gap: .5rem 1.15rem; }
.dimension-tag { display: block; font: 700 clamp(1.85rem, 3.2vw, 2.85rem)/1 var(--font-heading); letter-spacing: -.05em; }
.dimension-title { font-size: 1.1rem; font-weight: 500; letter-spacing: .03em; }
.dimension-subtitle { color: var(--text-secondary); font-size: .95rem; line-height: 1.8; margin-top: .9rem; }
.explore-arrow { font-size: 25px; line-height: 1.3; color: var(--text-muted); transition: transform .2s ease; }
.dimension-card:hover .dimension-tag, .dimension-card:focus-visible .dimension-tag { color: var(--accent-primary); }
.dimension-card:hover .explore-arrow { transform: translate(3px, -3px); color: var(--accent-primary); }
@media(max-width: 1000px) { .home-container { gap: 2.5rem; grid-template-columns: .7fr 1.3fr; } .hero-section { padding-right: 2rem; } }
@media(max-width: 700px) {
  .home-page { padding: 1.75rem 0 3rem; }
  .home-container { grid-template-columns: 1fr; gap: 2rem; }
  .hero-section { border-right: 0; padding-right: 0; display: grid; grid-template-columns: 1fr 100px; gap: 1rem; align-items: center; }
  .hero-name { font-size: 5.5rem; margin: .75rem 0 0; }
  .identity-diagram { border: 0; }
  .identity-diagram svg { overflow: visible; }
  .diagram-label { font-size: 8px; padding: .25rem; }
  .diagram-caption, .hero-footnote { display: none; }
  .index-label { padding-bottom: 1.1rem; }
  .dimension-card { padding: 1.4rem 0; gap: .65rem; grid-template-columns: 20px 1fr 22px; }
  .dimension-heading { gap: .5rem .8rem; }
  .dimension-tag { font-size: 2rem; }
  .dimension-title { font-size: 1rem; }
  .dimension-subtitle { margin-top: .65rem; font-size: .9rem; }
}
</style>
