<script setup lang="ts">
interface Props {
  question: string
  highlight?: string
  tags?: string[]
  index?: number | string
  accentColor?: string
}

const props = withDefaults(defineProps<Props>(), {
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
        <h2 class="qna-question">
          {{ props.question }}
        </h2>
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
      <span class="highlight-icon">💡</span>
      <p class="highlight-text">{{ props.highlight }}</p>
    </div>

    <!-- Main Answer Content Slot -->
    <div class="qna-answer-body">
      <slot />
    </div>
  </article>
</template>

<style scoped>
.qna-card {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.25rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-card);
  position: relative;
  overflow: hidden;
  background: var(--bg-card);
}

.qna-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--card-accent, var(--accent-primary));
  opacity: 0.85;
}

/* Header */
.qna-header {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.qna-title-row {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.qna-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-sm);
  background: var(--bg-card-subtle);
  border: 1px solid var(--card-accent, var(--accent-primary));
  color: var(--card-accent, var(--accent-primary));
  font-family: var(--font-mono);
  font-weight: 800;
  font-size: 0.9rem;
  flex-shrink: 0;
  margin-top: 0.15rem;
}

.qna-question {
  font-size: 1.45rem;
  font-weight: 700;
  line-height: 1.4;
  color: var(--text-primary);
  letter-spacing: -0.01em;
}

/* Tags */
.qna-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-left: calc(0.9rem + 1.5rem + 1rem);
}

.qna-tag {
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.2rem 0.65rem;
  border-radius: var(--radius-full);
  background: var(--bg-tag);
  color: var(--text-tag);
  border: 1px solid var(--border-tag);
}

/* Highlight Box */
.qna-highlight {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  padding: 1rem 1.25rem;
  background: var(--bg-card-subtle);
  border-radius: var(--radius-md);
  border-left: 3px solid var(--card-accent, var(--accent-primary));
}

.highlight-icon {
  font-size: 1.2rem;
  line-height: 1.4;
}

.highlight-text {
  font-size: 0.96rem;
  color: var(--text-primary);
  font-weight: 500;
  line-height: 1.6;
}

/* Answer Body */
.qna-answer-body {
  color: var(--text-secondary);
  font-size: 1.02rem;
  line-height: 1.75;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.qna-answer-body :deep(p) {
  margin: 0;
}

.qna-answer-body :deep(strong) {
  color: var(--text-primary);
  font-weight: 600;
}

.qna-answer-body :deep(ul) {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  padding-left: 0.25rem;
}

.qna-answer-body :deep(li) {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
}

.qna-answer-body :deep(li::before) {
  content: '▹';
  color: var(--card-accent, var(--accent-primary));
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 1.5;
}

.qna-answer-body :deep(.metrics-grid) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: 0.5rem;
}

.qna-answer-body :deep(.metric-item) {
  padding: 0.85rem 1rem;
  background: var(--bg-card-subtle);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-subtle);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.qna-answer-body :deep(.metric-val) {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--card-accent, var(--accent-primary));
  font-family: var(--font-heading);
}

.qna-answer-body :deep(.metric-label) {
  font-size: 0.82rem;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .qna-card {
    padding: 1.5rem 1.25rem;
  }

  .qna-title-row {
    flex-direction: column;
    gap: 0.5rem;
  }

  .qna-tags {
    margin-left: 0;
  }

  .qna-question {
    font-size: 1.2rem;
  }
}
</style>
