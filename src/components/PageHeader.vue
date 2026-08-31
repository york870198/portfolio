<script setup lang="ts">
interface Props {
  themeTag: string
  themeIndex?: string
  title: string
  subtitle: string
  accentColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  themeIndex: '01',
  accentColor: 'var(--accent-primary)'
})
</script>

<template>
  <header class="page-header">
    <div class="header-badge-wrapper">
      <span class="theme-badge" :style="{ '--theme-accent': props.accentColor }">
        <span class="theme-letter">{{ props.themeTag }}</span>
        <span class="theme-divider">/</span>
        <span class="theme-num">{{ props.themeIndex }}</span>
      </span>
    </div>

    <h1 class="page-title">
      {{ props.title }}
    </h1>

    <p class="page-subtitle">
      {{ props.subtitle }}
    </p>
  </header>
</template>

<style scoped>
.page-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 3rem;
}

.header-badge-wrapper {
  margin-bottom: 1.25rem;
}

.theme-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 1.1rem;
  background: var(--bg-card-subtle);
  border: 1px solid var(--theme-accent, var(--accent-primary));
  border-radius: var(--radius-full);
  font-family: var(--font-mono);
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--theme-accent, var(--accent-primary));
  box-shadow: 0 0 16px rgba(99, 102, 241, 0.15);
}

.theme-divider {
  opacity: 0.4;
}

.theme-num {
  opacity: 0.8;
}

.page-title {
  font-size: 2.75rem;
  margin-bottom: 1rem;
  letter-spacing: -0.03em;
}

.page-subtitle {
  font-size: 1.12rem;
  color: var(--text-secondary);
  max-width: 680px;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .page-header {
    margin-bottom: 2rem;
  }

  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 1rem;
  }
}
</style>
