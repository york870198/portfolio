<script setup lang="ts">
interface Props {
  headingLevel?: 2 | 3
  question: string
  highlight?: string
  tags?: string[]
  index?: number | string
  accentColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  headingLevel: 2,
  tags: () => [],
  accentColor: 'var(--accent-primary)'
})
</script>

<template>
  <article class="qna-card card" :style="{ '--card-accent': props.accentColor }">
    <!-- Header: Question Number & Question Title -->
    <div class="qna-header">
      <div class="qna-title-row">
        <span v-if="props.index" class="qna-index">
          Q{{ props.index }}
        </span>
        <component :is="`h${props.headingLevel}`" class="qna-question">
          {{ props.question }}
        </component>
      </div>

      <!-- Optional Tags -->
      <div v-if="props.tags && props.tags.length > 0" class="qna-tags">
        <span v-for="tag in props.tags" :key="tag" class="qna-tag">
          #{{ tag }}
        </span>
      </div>
    </div>

    <!-- Optional Highlight / Key Takeaway Block -->
    <div v-if="props.highlight" class="qna-highlight">
      <p class="highlight-text">{{ props.highlight }}</p>
    </div>

    <!-- Main Answer Content Slot -->
    <div class="qna-answer-body">
      <slot />
    </div>
  </article>
</template>

<style scoped>
.qna-card { display: flex; flex-direction: column; gap: 1.5rem; padding: 2.25rem 0 3rem; border: 0; border-top: 1px solid var(--border-subtle); border-radius: 0; background: transparent; box-shadow: none; }
.qna-header { display: flex; flex-direction: column; gap: .85rem; }
.qna-title-row { display: flex; align-items: baseline; gap: 1rem; }
.qna-index { flex-shrink: 0; color: var(--accent-primary); font: 12px var(--font-mono); }
.qna-question { font-size: 1.15rem; line-height: 1.65; font-weight: 500; }
.qna-tags { display: flex; flex-wrap: wrap; gap: .5rem 1rem; }
.qna-tag { font: 12px/1.7 var(--font-mono); color: var(--text-muted); }
.qna-highlight { max-width: 38rem; }
.highlight-text { font-size: clamp(1.25rem, 2vw, 1.65rem); line-height: 1.7; font-weight: 600; color: var(--text-primary); letter-spacing: .01em; text-wrap: pretty; }
.qna-answer-body { display: flex; flex-direction: column; gap: 1.25rem; max-width: 42em; color: var(--text-secondary); font-size: 1.025rem; line-height: 1.95; overflow-wrap: anywhere; }
.qna-answer-body :deep(p) { margin: 0; }
.qna-answer-body :deep(strong) { color: var(--text-primary); font-weight: 600; }
.qna-answer-body :deep(ul) { padding-left: 1.25rem; }
.qna-answer-body :deep(li) { margin: .55rem 0; }
.qna-answer-body :deep(li::marker) { color: var(--accent-primary); }
.qna-answer-body :deep(a:not(.footprint-card)) { text-decoration: underline; text-underline-offset: .25em; }
.qna-answer-body :deep(.footprint-card:hover .footprint-name) { text-decoration: underline; text-underline-offset: .25em; }
.qna-answer-body :deep(.metrics-grid) { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 180px), 1fr)); gap: 1rem; }
.qna-answer-body :deep(.metric-item) { display: flex; flex-direction: column; padding: 1rem; border: 1px solid var(--border-subtle); }
.qna-answer-body :deep(.metric-val) { font-size: 1.4rem; color: var(--accent-primary); }
.qna-answer-body :deep(.metric-label) { font-size: .85rem; }
@media(max-width: 800px) { .qna-card { padding: 1.75rem 0 2rem; gap: 1.25rem; } .qna-question { font-size: 1.05rem; } .qna-answer-body { font-size: 1rem; } }
</style>
