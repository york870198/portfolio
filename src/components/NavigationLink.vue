<script setup lang="ts">
import { nextTick } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{ to: string }>()
const router = useRouter()

async function follow(event: MouseEvent) {
  const anchor = event.currentTarget as HTMLAnchorElement
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey ||
    event.shiftKey || event.altKey || anchor.target === '_blank') return

  event.preventDefault()
  const update = async () => {
    await router.push(props.to)
    await nextTick()
  }
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!document.startViewTransition || reducedMotion) {
    await update()
    return
  }

  // Animation is progressive enhancement: routing still completes if a snapshot is skipped.
  const transition = document.startViewTransition(update)
  void transition.ready.catch(() => {})
  await transition.updateCallbackDone
}
</script>

<template>
  <RouterLink :to="to" custom v-slot="{ href, isExactActive }">
    <a :href="href" :aria-current="isExactActive ? 'page' : undefined" @click="follow"><slot /></a>
  </RouterLink>
</template>
