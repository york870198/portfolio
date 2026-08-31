<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div class="app-layout">
    <!-- 常駐導覽列 -->
    <Navbar />

    <!-- 頁面內容容器 -->
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- 頁尾 -->
    <footer class="app-footer">
      <div class="container footer-container">
        <p class="footer-text">
          © {{ new Date().getFullYear() }} Portfolio. Built with Vue 3 & TypeScript.
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Page Transition */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* Footer */
.app-footer {
  border-top: 1px solid var(--border-subtle);
  padding: 1.75rem 0;
  margin-top: auto;
  background: rgba(11, 15, 25, 0.5);
}

.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-text {
  color: var(--text-muted);
  font-size: 0.88rem;
  text-align: center;
}
</style>
