<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed, ref } from 'vue'
import NavigationLink from '@/components/NavigationLink.vue'

const activeTag = ref('WHO')

interface DimensionItem {
  tag: string
  titleKey: string
  subtitleKey: string
  path: string
}

const dimensions: DimensionItem[] = [
  {
    tag: 'WHO',
    titleKey: 'home.who.title',
    subtitleKey: 'home.who.subtitle',
    path: '/who'
  },
  {
    tag: 'WHEN',
    titleKey: 'home.when.title',
    subtitleKey: 'home.when.subtitle',
    path: '/when'
  },
  {
    tag: 'WHAT',
    titleKey: 'home.what.title',
    subtitleKey: 'home.what.subtitle',
    path: '/what'
  },
  {
    tag: 'WHERE',
    titleKey: 'home.where.title',
    subtitleKey: 'home.where.subtitle',
    path: '/where'
  },
  {
    tag: 'WHY',
    titleKey: 'home.why.title',
    subtitleKey: 'home.why.subtitle',
    path: '/why'
  },
  {
    tag: 'HOW',
    titleKey: 'home.how.title',
    subtitleKey: 'home.how.subtitle',
    path: '/how'
  }
]

const activeDimension = computed(() => dimensions.find(item => item.tag === activeTag.value) ?? dimensions[0]!)

const { t } = useI18n({ useScope: 'global' })
</script>

<template>
  <div class="page home-page">
    <div class="container home-container">
      <section class="hero-section">
        <h1 class="hero-title"><span class="hero-intro">Everything about</span><span class="hero-name">Fay.</span></h1>
        <p class="hero-description">{{ t('home.who.subtitle') }}</p>
        <NavigationLink to="/resume" class="hero-resume">{{ t('common.navbar.downloadResume') }} <span aria-hidden="true">↗</span></NavigationLink>
        <div class="hero-preview" aria-hidden="true">
          <span :key="activeTag" class="preview-word">{{ activeTag }}?</span>
          <span>{{ t(activeDimension.titleKey) }}</span>
        </div>
        <p class="hero-footnote">WHO · WHEN · WHAT<br>WHERE · WHY · HOW</p>
      </section>
      <nav class="dimensions-section" :aria-label="t('common.dimensions')">
        <div class="index-label"><span>{{ t('common.dimensions') }}</span><span>INDEX ↓</span></div>
        <NavigationLink v-for="item in dimensions" :key="item.tag" :to="item.path" class="dimension-card" :id="'dimension-card-' + item.tag.toLowerCase()" @mouseenter="activeTag = item.tag" @focusin="activeTag = item.tag">
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
.home-page { padding: 1.5rem 0 4rem; }
.home-container { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(2rem, 5vw, 5rem); align-items: start; }
.hero-section { position: sticky; top: calc(var(--navbar-height) + 1.5rem); background: var(--accent-primary); color: var(--text-inverse); padding: clamp(1.5rem, 3.5vw, 3.5rem); min-height: 680px; display: flex; flex-direction: column; }
.hero-title { color: inherit; font-weight: 500; }
.hero-intro { display: block; font-size: clamp(1.75rem, 2.8vw, 2.6rem); line-height: 1.04; letter-spacing: -.055em; }
.hero-name { display: block; font-size: clamp(7rem, 16vw, 15rem); line-height: 1.1; letter-spacing: -.085em; margin: 1rem 0; }
.hero-description { font-size: 1.05rem; max-width: 100%; line-height: 1.8; }
.hero-resume { display: flex; align-items: center; justify-content: space-between; gap: 2rem; margin-top: 1.75rem; padding: .8rem 1.1rem; min-height: 48px; background: var(--text-inverse); color: var(--accent-primary); width: fit-content; transition: transform .2s; }
.hero-resume:hover { transform: translateY(-3px); }
.hero-preview { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; margin-top: auto; padding-top: 3rem; }
.preview-word { font-size: clamp(2rem, 3vw, 3rem); letter-spacing: -.055em; animation: preview-enter .3s ease both; }
.hero-footnote { font-size: 13px; line-height: 1.7; margin-top: 1rem; grid-column: 1 / -1; }
.index-label { display: flex; justify-content: space-between; font-size: 1rem; padding: .5rem 0 1.25rem; color: var(--text-secondary); }
.dimension-card { display: grid; grid-template-columns: 1fr 36px; align-items: center; gap: 1rem; padding: 1.6rem 1.25rem; margin-inline: -1.25rem; transition: background .22s, transform .22s; }
.dimension-card:hover, .dimension-card:focus-visible { background: var(--bg-secondary); transform: translateX(4px); }
.dimension-heading { display: flex; align-items: baseline; flex-wrap: wrap; gap: .5rem 1rem; }
.dimension-tag { font-size: clamp(2rem, 3.5vw, 3.25rem); font-weight: 500; line-height: 1; letter-spacing: -.055em; }
.dimension-title { font-size: 1rem; font-weight: 500; }
.dimension-subtitle { font-size: 1rem; line-height: 1.8; margin-top: .75rem; color: var(--text-secondary); }
.explore-arrow { display: grid; place-items: center; width: 36px; height: 36px; background: var(--bg-secondary); font-size: 24px; transition: transform .22s; }
.dimension-card:hover .explore-arrow { transform: rotate(45deg); background: var(--accent-primary); color: var(--text-inverse); }
@keyframes preview-enter { from { opacity: .4; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
@media(prefers-reduced-motion: no-preference) {
  .hero-title, .hero-description, .hero-resume { animation: preview-enter .65s both; }
  .hero-description { animation-delay: .1s; }
  .hero-resume { animation-delay: .2s; }
  .dimension-copy { animation: preview-enter .6s both; }
  .dimension-card:nth-child(3) .dimension-copy { animation-delay: .08s; }
  .dimension-card:nth-child(4) .dimension-copy { animation-delay: .16s; }
  .dimension-card:nth-child(5) .dimension-copy { animation-delay: .24s; }
  .dimension-card:nth-child(6) .dimension-copy { animation-delay: .32s; }
  .dimension-card:nth-child(7) .dimension-copy { animation-delay: .4s; }
}
@media(max-width: 800px) {
  .home-container { grid-template-columns: 1fr; gap: 2rem; }
  .hero-section { position: static; min-height: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .hero-title { grid-row: span 2; }
  .hero-intro { font-size: 2rem; }
  .hero-name { font-size: clamp(7rem, 22vw, 12rem); margin: .6rem 0 0; }
  .hero-description { align-self: end; }
  .hero-resume { align-self: start; margin-top: 0; }
  .hero-preview { grid-column: 1 / -1; padding-top: .5rem; }
  .dimension-card { padding-block: 1.5rem; }
}
@media(max-width: 480px) {
  .home-page { padding-top: .75rem; }
  .hero-section { display: flex; padding: 1.5rem; gap: 0; }
  .hero-intro br { display: none; }
  .hero-intro { font-size: 1.75rem; }
  .hero-name { font-size: 8.5rem; margin: .5rem 0 1rem; }
  .hero-description { align-self: auto; max-width: none; }
  .hero-resume { margin-top: 1.25rem; }
  .hero-preview { padding-top: 1.5rem; }
  .dimension-card { margin-inline: 0; padding-inline: 0; }
  .dimension-card:hover { transform: none; }
}
</style>
