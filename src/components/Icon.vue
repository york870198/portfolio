<script setup lang="ts">
// One drawn family for every UI glyph: 24px grid, 1.5 stroke, currentColor, sized by font-size.
const paths: Record<string, string> = {
  'arrow-up-right': 'M7 17 17 7M8 7h9v9',
  'arrow-right': 'M4 12h16M14 6l6 6-6 6',
  'arrow-left': 'M20 12H4M10 6l-6 6 6 6',
  'arrow-down': 'M12 4v16M6 14l6 6 6-6',
  check: 'M5 12.5l4.5 4.5L19 7',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6 6 18',
  sun: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4',
  moon: 'M19.5 14.5A7.5 7.5 0 0 1 9.5 4.5a7.5 7.5 0 1 0 10 10z',
  mail: 'M3.5 6h17v12h-17zM3.5 7l8.5 6 8.5-6',
  pin: 'M12 21s-6.5-5.8-6.5-11a6.5 6.5 0 0 1 13 0c0 5.2-6.5 11-6.5 11zM12 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z',
  code: 'M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16',
  briefcase: 'M3.5 8h17v11h-17zM8.5 8V5h7v3M3.5 13h17',
  chat: 'M4 5h16v11h-9l-5 4v-4H4z',
  document: 'M6 3h8.5L19 7.5V21H6zM14 3v5h5M9 12.5h7M9 16.5h7',
  printer: 'M7 9V3.5h10V9M7 17H4v-8h16v8h-3M7 14h10v7H7z'
}
const props = defineProps<{ name: string }>()
</script>

<template>
  <svg class="icon" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path :d="paths[props.name]" /></svg>
</template>

<style scoped>
.icon { flex-shrink: 0; vertical-align: -.125em; }
</style>
