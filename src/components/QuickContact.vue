<script setup lang="ts">
import { ref, onUnmounted } from 'vue'

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

onUnmounted(() => { if (timer) window.clearTimeout(timer) })

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
      <span class="btn-icon">{{ copied ? '✓' : '↗' }}</span>
      <span class="btn-text">{{ props.label }}</span>
    </button>
    <span class="copy-status" role="status">{{ copied ? "已複製 Email 地址" : "" }}</span>
  </div>
</template>

<style scoped>
.quick-contact-wrapper { display: inline-flex; position: relative; }
.quick-contact-btn { display: inline-flex; align-items: center; gap: .65rem; min-height: 44px; padding: .5rem .65rem; color: var(--text-primary); font-size: 13px; white-space: nowrap; }
.quick-contact-btn:hover, .quick-contact-btn.is-copied { color: var(--accent-primary); }
.btn-icon { color: var(--accent-primary); font-size: 20px; }
.variant-primary { background: var(--accent-primary); color: var(--text-inverse); }
.variant-primary .btn-icon { color: inherit; }
.variant-secondary { border: 1px solid var(--border-subtle); }
.copy-status:not(:empty) { position: absolute; top: calc(100% + 12px); right: 0; padding: .65rem 1rem; background: var(--accent-primary); color: var(--text-inverse); white-space: nowrap; font-size: 13px; }
</style>
