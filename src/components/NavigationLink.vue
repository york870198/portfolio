<script setup lang="ts">
import { computed, nextTick } from 'vue'
import { useRoute, useRouter, type RouteLocationRaw } from 'vue-router'
import { localizedTarget } from '@/i18n/locale'

const props = defineProps<{ to: RouteLocationRaw }>()
const router = useRouter()
const route = useRoute()
const destination = computed(() => localizedTarget(router.resolve(props.to), route))

async function follow(event: MouseEvent) {
  const anchor = event.currentTarget as HTMLAnchorElement
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey ||
    event.shiftKey || event.altKey || anchor.target === '_blank') return

  event.preventDefault()
  const target = destination.value
  const update = async () => {
    await router.push(target)
    await nextTick()
  }
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!document.startViewTransition || reducedMotion || target.path === route.path) {
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
  <RouterLink :to="destination" custom v-slot="{ href, isExactActive }">
    <a :href="href" :aria-current="isExactActive ? 'page' : undefined" @click="follow"><slot /></a>
  </RouterLink>
</template>
