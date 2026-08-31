<script setup lang="ts">
interface Metric {
  label: string
  value: string
}

interface Props {
  title: string
  role?: string
  description: string
  tags: string[]
  metrics?: Metric[]
  liveUrl?: string
  githubUrl?: string
}

const props = withDefaults(defineProps<Props>(), {
  tags: () => [],
  metrics: () => []
})
</script>

<template>
  <div class="project-card card">
    <div class="project-top">
      <div class="project-title-group">
        <h3 class="project-title">{{ props.title }}</h3>
        <span v-if="props.role" class="project-role-badge">{{ props.role }}</span>
      </div>

      <div class="project-links">
        <a
          v-if="props.githubUrl"
          :href="props.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link-btn"
          title="查看 GitHub 原始碼"
        >
          <span>GitHub</span>
          <span class="link-arrow">↗</span>
        </a>
        <a
          v-if="props.liveUrl"
          :href="props.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link-btn primary"
          title="前往 Live Demo 預覽"
        >
          <span>Live Demo</span>
          <span class="link-arrow">↗</span>
        </a>
      </div>
    </div>

    <p class="project-desc">
      {{ props.description }}
    </p>

    <!-- Metrics highlights -->
    <div v-if="props.metrics && props.metrics.length > 0" class="project-metrics">
      <div v-for="m in props.metrics" :key="m.label" class="metric-box">
        <span class="metric-val">{{ m.value }}</span>
        <span class="metric-lbl">{{ m.label }}</span>
      </div>
    </div>

    <!-- Tech Stack Tags -->
    <div class="project-tags">
      <span v-for="tag in props.tags" :key="tag" class="tag-pill">
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.75rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-card);
  background: var(--bg-card);
}

.project-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.project-title-group {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.project-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-primary);
}

.project-role-badge {
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-full);
  background: rgba(16, 185, 129, 0.12);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.project-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.project-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.85rem;
  border-radius: var(--radius-full);
  font-size: 0.82rem;
  font-weight: 600;
  background: var(--bg-card-subtle);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  transition: all var(--transition-fast);
}

.project-link-btn:hover {
  color: var(--text-primary);
  border-color: var(--border-card-hover);
  background: var(--bg-card-hover);
}

.project-link-btn.primary {
  background: rgba(99, 102, 241, 0.15);
  border-color: rgba(99, 102, 241, 0.35);
  color: #818cf8;
}

.project-link-btn.primary:hover {
  background: rgba(99, 102, 241, 0.25);
  color: #ffffff;
}

.link-arrow {
  font-size: 0.85rem;
}

.project-desc {
  color: var(--text-secondary);
  font-size: 0.96rem;
  line-height: 1.65;
}

.project-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 0.75rem;
}

.metric-box {
  padding: 0.65rem 0.85rem;
  background: var(--bg-card-subtle);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-subtle);
  display: flex;
  flex-direction: column;
}

.metric-val {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--theme-what, #10b981);
  font-family: var(--font-heading);
}

.metric-lbl {
  font-size: 0.76rem;
  color: var(--text-muted);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.tag-pill {
  font-size: 0.75rem;
  padding: 0.2rem 0.55rem;
  border-radius: var(--radius-full);
  background: var(--bg-card-subtle);
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
}
</style>
