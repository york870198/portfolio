<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  email?: string
  label?: string
  variant?: 'primary' | 'secondary' | 'compact'
}

const props = withDefaults(defineProps<Props>(), {
  email: 'contact@example.com',
  label: '聯絡我',
  variant: 'secondary'
})

const copied = ref(false)
let timer: number | null = null

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(props.email)
    copied.value = true
    if (timer) clearTimeout(timer)
    timer = window.setTimeout(() => {
      copied.value = false
    }, 2200)
  } catch (err) {
    // Fallback: window.location.href = `mailto:${props.email}`
    window.location.href = `mailto:${props.email}`
  }
}
</script>

<template>
  <div class="quick-contact-wrapper">
    <button
      :class="['quick-contact-btn', `variant-${props.variant}`, { 'is-copied': copied }]"
      @click="copyEmail"
      :title="`點擊複製 Email: ${props.email}`"
      id="quick-contact-btn"
    >
      <span class="btn-icon">{{ copied ? '✓' : '✉️' }}</span>
      <span class="btn-text">{{ copied ? 'Email 已複製！' : props.label }}</span>
    </button>
  </div>
</template>

<style scoped>
.quick-contact-wrapper {
  display: inline-flex;
  position: relative;
}

.quick-contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: var(--radius-full);
  transition: all var(--transition-fast);
  cursor: pointer;
  white-space: nowrap;
}

.variant-primary {
  padding: 0.6rem 1.25rem;
  background: var(--accent-gradient);
  color: #ffffff;
  box-shadow: 0 4px 14px var(--accent-glow);
}

.variant-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(99, 102, 241, 0.4);
}

.variant-secondary {
  padding: 0.5rem 1.1rem;
  background: var(--bg-card-subtle);
  border: 1px solid var(--border-subtle);
  color: var(--text-primary);
}

.variant-secondary:hover {
  background: var(--bg-card-hover);
  border-color: var(--border-card-hover);
  transform: translateY(-1px);
}

.variant-compact {
  padding: 0.45rem 0.85rem;
  font-size: 0.82rem;
  background: var(--bg-card-subtle);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
}

.variant-compact:hover {
  color: var(--text-primary);
  border-color: var(--border-card-hover);
}

.quick-contact-btn.is-copied {
  background: rgba(16, 185, 129, 0.18) !important;
  border-color: rgba(16, 185, 129, 0.5) !important;
  color: #10b981 !important;
}

.btn-icon {
  font-size: 0.95rem;
}
</style>
