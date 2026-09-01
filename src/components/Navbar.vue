<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { navRoutes } from '@/router'
import ThemeToggle from '@/components/ThemeToggle.vue'
import QuickContact from '@/components/QuickContact.vue'

const route = useRoute()
const router = useRouter()
const isMobileMenuOpen = ref(false)
const isGeneratingPdf = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const navigateTo = (path: string) => {
  closeMobileMenu()
  router.push(path)
}

// 下載履歷處理函式（方案 A：透過隱藏 iframe 背景列印 / 匯出 PDF）
const handleDownloadResume = () => {
  closeMobileMenu()

  // 若使用者已在 /resume 頁面，直接觸發系統列印
  if (route.path === '/resume') {
    window.print()
    return
  }

  isGeneratingPdf.value = true

  // 建立不可見的 iframe 載入 /resume 內容，達成不跳頁的原生列印體驗
  const iframe = document.createElement('iframe')
  iframe.style.position = 'fixed'
  iframe.style.right = '0'
  iframe.style.bottom = '0'
  iframe.style.width = '0'
  iframe.style.height = '0'
  iframe.style.border = '0'
  iframe.style.opacity = '0'
  iframe.style.pointerEvents = 'none'

  const base = import.meta.env.BASE_URL || '/'
  const cleanBase = base.endsWith('/') ? base : `${base}/`
  iframe.src = `${cleanBase}resume?print=true`

  document.body.appendChild(iframe)

  iframe.onload = () => {
    setTimeout(() => {
      try {
        iframe.contentWindow?.focus()
        iframe.contentWindow?.print()
      } catch (err) {
        console.warn('Iframe print failed, falling back to route navigation:', err)
        router.push('/resume?print=true')
      } finally {
        isGeneratingPdf.value = false
        setTimeout(() => {
          if (document.body.contains(iframe)) {
            document.body.removeChild(iframe)
          }
        }, 1500)
      }
    }, 450)
  }
}

// 監聽鍵盤 Escape 鍵自動收合手機選單
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <header id="main-navbar" class="navbar-header">
    <div class="container navbar-container">
      <!-- Brand / Logo -->
      <router-link to="/" class="navbar-brand" @click="closeMobileMenu" id="nav-brand-link">
        <span class="brand-badge">Fay</span>
        <span class="brand-name">Portfolio<span class="brand-dot">.</span></span>
      </router-link>

      <!-- Desktop Navigation Menu -->
      <nav class="desktop-nav" aria-label="主要導覽選單">
        <ul class="nav-list">
          <li v-for="item in navRoutes" :key="item.path" class="nav-item">
            <router-link
              :to="item.path"
              class="nav-link"
              :class="{ 'active': route.path === item.path }"
              :id="`nav-link-${item.name}`"
            >
              <span class="nav-title">{{ item.title }}</span>
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- Utility Actions: Download Resume, Theme Toggle & Quick Contact -->
      <div class="navbar-actions">
        <!-- 下載履歷按鍵 -->
        <button
          id="nav-download-resume-btn"
          class="btn-download-resume"
          @click="handleDownloadResume"
          :disabled="isGeneratingPdf"
          title="下載履歷 (匯出為 PDF)"
          aria-label="下載履歷 PDF"
        >
          <span v-if="isGeneratingPdf" class="btn-icon spin">⏳</span>
          <span v-else class="btn-icon">📄</span>
          <span class="btn-text">下載履歷</span>
        </button>

        <QuickContact
          variant="compact"
          label="聯絡"
          email="york870198@gmail.com"
        />
        <ThemeToggle />

        <!-- Mobile Hamburger Toggle Button -->
        <button
          id="mobile-menu-toggle"
          class="mobile-toggle"
          :class="{ 'is-active': isMobileMenuOpen }"
          @click="toggleMobileMenu"
          aria-label="切換選單"
          :aria-expanded="isMobileMenuOpen"
        >
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer / Dropdown Menu -->
    <transition name="mobile-menu">
      <div v-if="isMobileMenuOpen" class="mobile-drawer" id="mobile-dropdown-menu">
        <nav class="mobile-nav" aria-label="行動版導覽選單">
          <ul class="mobile-nav-list">
            <li v-for="item in navRoutes" :key="item.path" class="mobile-nav-item">
              <button
                class="mobile-nav-link"
                :class="{ 'active': route.path === item.path }"
                @click="navigateTo(item.path)"
                :id="`mobile-nav-link-${item.name}`"
              >
                <span class="mobile-nav-icon">{{ item.icon }}</span>
                <span class="mobile-nav-title">{{ item.title }}</span>
                <span class="mobile-nav-tag">{{ item.tag }}</span>
                <span v-if="route.path === item.path" class="active-indicator">●</span>
              </button>
            </li>
          </ul>

          <!-- 行動版專用下載履歷按鈕 -->
          <div class="mobile-drawer-actions">
            <button
              class="mobile-download-btn"
              @click="handleDownloadResume"
              :disabled="isGeneratingPdf"
              id="mobile-download-resume-btn"
            >
              <span v-if="isGeneratingPdf" class="spin">⏳ 準備履歷中...</span>
              <span v-else>📄 下載履歷 (PDF)</span>
            </button>
          </div>
        </nav>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.navbar-header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--navbar-height);
  background-color: var(--bg-navbar);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border-bottom: 1px solid var(--border-subtle);
  z-index: 1000;
  display: flex;
  align-items: center;
  transition: background-color var(--transition-normal), border-color var(--transition-normal);
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: 1rem;
}

/* Brand */
.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  user-select: none;
  flex-shrink: 0;
}

.brand-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: var(--radius-sm);
  background: var(--accent-gradient);
  color: #ffffff;
  font-weight: 800;
  font-size: 0.88rem;
  font-family: var(--font-mono);
  box-shadow: 0 2px 10px var(--accent-glow);
}

.brand-dot {
  color: var(--accent-secondary);
}

/* Desktop Nav */
.desktop-nav {
  display: block;
}

.nav-list {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  list-style: none;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  padding: 0.45rem 0.85rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: var(--radius-full);
  transition: color var(--transition-fast), background var(--transition-fast), transform var(--transition-fast);
  position: relative;
}

.nav-link:hover {
  color: var(--text-primary);
  background: var(--bg-card-subtle);
}

.nav-link.active {
  color: var(--accent-primary);
  font-weight: 700;
  background: var(--bg-tag);
  border: 1px solid var(--border-tag);
}

/* Navbar Actions */
.navbar-actions {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  flex-shrink: 0;
}

/* Mobile Toggle */
.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 38px;
  height: 38px;
  border-radius: var(--radius-sm);
  background: var(--bg-card-subtle);
  border: 1px solid var(--border-subtle);
  transition: background var(--transition-fast);
}

.mobile-toggle:hover {
  background: var(--bg-card-hover);
}

.hamburger-bar {
  width: 18px;
  height: 2px;
  background-color: var(--text-primary);
  border-radius: 2px;
  transition: transform var(--transition-normal), opacity var(--transition-normal);
}

/* Hamburger active */
.mobile-toggle.is-active .hamburger-bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.mobile-toggle.is-active .hamburger-bar:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.is-active .hamburger-bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Drawer */
.mobile-drawer {
  position: absolute;
  top: var(--navbar-height);
  left: 0;
  width: 100%;
  background: var(--bg-mobile-menu);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border-bottom: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-lg);
  padding: 1rem 1.25rem 1.5rem;
}

.mobile-nav-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.mobile-nav-link {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
  text-align: left;
  background: var(--bg-card-subtle);
  border: 1px solid transparent;
  transition: all var(--transition-fast);
}

.mobile-nav-link:hover {
  background: var(--bg-card-hover);
  color: var(--text-primary);
}

.mobile-nav-link.active {
  background: var(--bg-tag);
  border-color: var(--border-tag);
  color: var(--accent-primary);
  font-weight: 600;
}

.mobile-nav-tag {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-left: auto;
  padding-right: 0.5rem;
}

.active-indicator {
  color: var(--accent-secondary);
  font-size: 0.75rem;
}

/* Download Resume Button (Desktop) */
.btn-download-resume {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.42rem 0.85rem;
  background: var(--accent-gradient);
  color: #ffffff;
  font-size: 0.86rem;
  font-weight: 600;
  border-radius: var(--radius-full);
  box-shadow: 0 2px 10px var(--accent-glow);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast), opacity var(--transition-fast);
  cursor: pointer;
  white-space: nowrap;
}

.btn-download-resume:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);
  opacity: 0.95;
}

.btn-download-resume:active:not(:disabled) {
  transform: translateY(0);
}

.btn-download-resume:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.btn-icon {
  font-size: 0.95rem;
}

.spin {
  display: inline-block;
  animation: spin-pulse 1.2s ease infinite;
}

@keyframes spin-pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); }
}

/* Mobile Drawer Actions */
.mobile-drawer-actions {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--border-subtle);
}

.mobile-download-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 1rem;
  background: var(--accent-gradient);
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: var(--radius-md);
  box-shadow: 0 4px 14px var(--accent-glow);
  cursor: pointer;
  transition: transform var(--transition-fast), opacity var(--transition-fast);
}

.mobile-download-btn:active:not(:disabled) {
  transform: scale(0.98);
}

.mobile-download-btn:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

/* Transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity var(--transition-fast), transform var(--transition-fast);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* Responsive Media Queries */
@media (max-width: 860px) {
  .desktop-nav {
    display: none;
  }
  .btn-download-resume {
    display: none;
  }
  .mobile-toggle {
    display: flex;
  }
}
</style>
