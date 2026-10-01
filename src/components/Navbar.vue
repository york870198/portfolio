<script setup lang="ts">
import { ref, nextTick, watch, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { navRoutes } from '@/router'
import NavigationLink from './NavigationLink.vue'
import ThemeToggle from './ThemeToggle.vue'
import QuickContact from './QuickContact.vue'

const route = useRoute()
const router = useRouter()
const isMobileMenuOpen = ref(false)
const isGeneratingPdf = ref(false)
const header = ref<HTMLElement>()
const menuToggle = ref<HTMLButtonElement>()
let printFrame: HTMLIFrameElement | undefined
const desktopQuery = window.matchMedia('(min-width: 1101px)')

function closeMobileMenu() { isMobileMenuOpen.value = false }
async function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    await nextTick()
    header.value?.querySelector<HTMLAnchorElement>('.mobile-nav-link')?.focus()
  }
}
function onEscape(event: KeyboardEvent) {
  if (event.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu()
    menuToggle.value?.focus()
  }
}
function onOutside(event: Event) {
  if (!header.value?.contains(event.target as Node)) closeMobileMenu()
}
function onResize() { if (desktopQuery.matches) closeMobileMenu() }
watch(() => route.fullPath, closeMobileMenu)
onMounted(() => {
  document.addEventListener('pointerdown', onOutside)
  document.addEventListener('focusin', onOutside)
  desktopQuery.addEventListener('change', onResize)
})
onUnmounted(() => {
  document.removeEventListener('pointerdown', onOutside)
  document.removeEventListener('focusin', onOutside)
  desktopQuery.removeEventListener('change', onResize)
  printFrame?.remove()
})
async function handleDownloadResume() {
  closeMobileMenu()
  if (isGeneratingPdf.value) return
  if (route.path === '/resume') { window.print(); return }
  isGeneratingPdf.value = true
  printFrame?.remove()
  const iframe = document.createElement('iframe')
  printFrame = iframe
  iframe.title = '完整履歷列印'
  iframe.setAttribute('aria-hidden', 'true')
  iframe.tabIndex = -1
  iframe.style.cssText = 'position:fixed;width:0;height:0;border:0;opacity:0;pointer-events:none'
  // The parent owns printing; the frame must not use the auto-print query.
  iframe.src = `${import.meta.env.BASE_URL}resume`
  const fail = () => {
    iframe.remove()
    isGeneratingPdf.value = false
    void router.push('/resume?print=true')
  }
  const timeout = window.setTimeout(fail, 15000)
  iframe.onload = async () => {
    try {
      const frameWindow = iframe.contentWindow
      const frameDocument = iframe.contentDocument
      if (!frameWindow || !frameDocument) throw new Error('Resume frame unavailable')
      // Lazy route loading can finish after the iframe load event.
      while (!frameDocument.querySelector('.resume-profile-header')) {
        if (!iframe.isConnected) return
        await new Promise(resolve => window.setTimeout(resolve, 50))
      }
      await frameDocument.fonts.ready
      if (!iframe.isConnected) return
      window.clearTimeout(timeout)
      frameWindow.addEventListener('afterprint', () => iframe.remove(), { once: true })
      frameWindow.focus()
      frameWindow.print()
      isGeneratingPdf.value = false
    } catch { window.clearTimeout(timeout); fail() }
  }
  iframe.onerror = () => { window.clearTimeout(timeout); fail() }
  document.body.appendChild(iframe)
}
</script>

<template>
  <header id="main-navbar" ref="header" class="navbar-header" @keydown="onEscape">
    <div class="container navbar-container">
      <NavigationLink to="/" class="navbar-brand" id="nav-brand-link" @click="closeMobileMenu">
        <span class="brand-mark" aria-hidden="true">✳</span><span class="brand-name">Fay</span><span class="brand-caption">Portfolio.</span>
      </NavigationLink>
      <nav class="desktop-nav" aria-label="主要導覽選單">
        <ul class="nav-list">
          <li v-for="item in navRoutes" :key="item.path">
            <NavigationLink :to="item.path" class="nav-link" :id="`nav-link-${item.name}`">{{ item.title }}</NavigationLink>
          </li>
        </ul>
      </nav>
      <div class="navbar-actions">
        <button id="nav-download-resume-btn" class="btn-download-resume" @click="handleDownloadResume" :disabled="isGeneratingPdf" aria-label="下載履歷 PDF">
          {{ isGeneratingPdf ? '準備中…' : '下載履歷' }} <span aria-hidden="true">↗</span>
        </button>
        <QuickContact variant="compact" label="聯絡" email="york870198@gmail.com" />
        <ThemeToggle />
        <button ref="menuToggle" id="mobile-menu-toggle" class="mobile-toggle" @click="toggleMobileMenu" :aria-label="isMobileMenuOpen ? '關閉選單' : '開啟選單'" :aria-expanded="isMobileMenuOpen" aria-controls="mobile-dropdown-menu">
          <span aria-hidden="true">{{ isMobileMenuOpen ? '×' : '☰' }}</span>
        </button>
      </div>
    </div>
    <div v-if="isMobileMenuOpen" class="mobile-drawer" id="mobile-dropdown-menu">
      <nav class="mobile-nav" aria-label="行動版導覽選單">
        <ul class="mobile-nav-list">
          <li v-for="item in navRoutes" :key="item.path">
            <NavigationLink :to="item.path" class="mobile-nav-link" :id="`mobile-nav-link-${item.name}`" @click="closeMobileMenu">
              <span>{{ item.title }}</span><span class="mobile-nav-tag">{{ item.tag }}</span>
            </NavigationLink>
          </li>
        </ul>
        <button class="mobile-download-btn" @click="handleDownloadResume" :disabled="isGeneratingPdf" id="mobile-download-resume-btn">{{ isGeneratingPdf ? '準備履歷中…' : '下載履歷 (PDF)' }} <span aria-hidden="true">↗</span></button>
      </nav>
    </div>
  </header>
</template>
<style scoped>
.navbar-header { position: sticky; top: 0; height: var(--navbar-height); background: var(--bg-navbar); border-bottom: 1px solid var(--border-subtle); z-index: 100; }
.navbar-container { display: flex; align-items: center; justify-content: space-between; height: 100%; gap: 1.25rem; }
.navbar-brand { display: flex; gap: .65rem; align-items: center; min-height: 44px; flex-shrink: 0; }
.brand-mark { font-size: 32px; color: var(--accent-primary); line-height: 1; }
.brand-name { font-size: 23px; font-weight: 700; letter-spacing: -.04em; }
.brand-caption { font: 10px var(--font-mono); margin-left: .5rem; color: var(--text-secondary); }
.nav-list { display: flex; list-style: none; gap: .15rem; }
.nav-link { display: flex; align-items: center; min-height: 44px; padding: .5rem .65rem; font: 12px var(--font-mono); color: var(--text-secondary); }
.nav-link:hover, .nav-link[aria-current] { color: var(--accent-primary); }
.nav-link[aria-current] { text-decoration: underline; text-underline-offset: 8px; }
.navbar-actions { display: flex; align-items: center; gap: .75rem; }
.btn-download-resume { display: flex; align-items: center; gap: 1rem; min-height: 44px; font-size: 13px; white-space: nowrap; }
.btn-download-resume span { color: var(--accent-primary); font-size: 21px; }
.btn-download-resume:hover { color: var(--accent-primary); }
.mobile-toggle { display: none; min-width: 44px; height: 44px; font-size: 24px; border: 1px solid var(--border-subtle); }
.mobile-drawer { position: absolute; top: 100%; left: 0; width: 100%; padding: .75rem 1.25rem 1.25rem; background: var(--bg-mobile-menu); border-bottom: 1px solid var(--border-subtle); max-height: calc(100dvh - var(--navbar-height)); overflow-y: auto; }
.mobile-nav-list { list-style: none; }
.mobile-nav-link { display: flex; justify-content: space-between; align-items: center; min-height: 48px; border-bottom: 1px solid var(--border-subtle); padding: .6rem .5rem; }
.mobile-nav-link[aria-current] { color: var(--accent-primary); background: var(--bg-tag); }
.mobile-nav-tag { font: 11px var(--font-mono); color: var(--text-muted); }
.mobile-download-btn { display: flex; justify-content: space-between; width: 100%; margin-top: 1rem; padding: .85rem; background: var(--accent-primary); color: var(--text-inverse); }
@media(max-width: 1100px) { .desktop-nav, .btn-download-resume { display: none; } .mobile-toggle { display: block; } }
@media(max-width: 440px) { .brand-caption { display: none; } .navbar-container { gap: .5rem; } .navbar-actions { gap: .4rem; } }
</style>
