<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="page notfound-page">
    <div class="container notfound-container">
      <div class="card notfound-card">
        <span class="error-code gradient-text">404</span>
        <h1 class="notfound-title">找不到此頁面</h1>
        <p class="notfound-desc">
          抱歉，您所尋找的頁面不存在或已被移動。請檢查網址或點擊下方按鈕返回首頁。
        </p>
        <div class="notfound-actions">
          <button class="btn-primary" @click="navigateToHome" id="notfound-btn-home">
            <span>返回首頁</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.notfound-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - var(--navbar-height) - 120px);
  padding: 3rem 0;
}

.notfound-container {
  display: flex;
  justify-content: center;
}

.notfound-card {
  max-width: 540px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 3.5rem 2.5rem;
}

.error-code {
  font-family: var(--font-heading);
  font-size: 5.5rem;
  font-weight: 800;
  line-height: 1;
}

.notfound-title {
  font-size: 1.8rem;
}

.notfound-desc {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
}

.notfound-actions {
  margin-top: 0.5rem;
}
</style>
