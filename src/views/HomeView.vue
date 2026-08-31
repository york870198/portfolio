<script setup lang="ts">
import { useRouter } from 'vue-router'
import QuickContact from '@/components/QuickContact.vue'

const router = useRouter()

interface DimensionItem {
  tag: string
  title: string
  subtitle: string
  icon: string
  path: string
  accentColor: string
}

const dimensions: DimensionItem[] = [
  {
    tag: 'WHO',
    title: '個人定位與特質',
    subtitle: '我是誰？資深前端、React/Vue 雙生態系，兼具後端視野與 UI/UX 協作思維。',
    icon: '👤',
    path: '/who',
    accentColor: 'var(--theme-who)'
  },
  {
    tag: 'WHEN',
    title: '經歷時序與里程碑',
    subtitle: '我的成長時間軸？從關鍵專案到系統架構演進的歷程與轉折突破點。',
    icon: '⏳',
    path: '/when',
    accentColor: 'var(--theme-when)'
  },
  {
    tag: 'WHAT',
    title: '專案作品與技能棧',
    subtitle: '我做過什麼？精選代表專案成果、量化指標與全方位技術能力棧清單。',
    icon: '⚡',
    path: '/what',
    accentColor: 'var(--theme-what)'
  },
  {
    tag: 'WHERE',
    title: '工作偏好與足跡',
    subtitle: '我在哪裡發揮影響力？工作模式偏好（Remote / Hybrid）與開源社群足跡。',
    icon: '📍',
    path: '/where',
    accentColor: 'var(--theme-where)'
  },
  {
    tag: 'WHY',
    title: '求職動機與工程哲學',
    subtitle: '為什麼深耕前端？架構決策原則、技術選型邏輯與未來的職涯願景。',
    icon: '💡',
    path: '/why',
    accentColor: 'var(--theme-why)'
  },
  {
    tag: 'HOW',
    title: '方法論與協作實踐',
    subtitle: '我如何解決問題？跨職能 API 規範、Design Token 對齊與複雜排查方法。',
    icon: '🛠️',
    path: '/how',
    accentColor: 'var(--theme-how)'
  }
]

const navigateTo = (path: string) => {
  router.push(path)
}
</script>

<template>
  <div class="page home-page">
    <div class="container home-container">
      <!-- Minimalist Hero Section -->
      <section class="hero-section">
        <div class="badge hero-badge">
          <span>✨ 5W1H 概念履歷實例</span>
        </div>

        <h1 class="hero-title">
          資深前端工程師 <br />
          <span class="gradient-text">架構思維 × 跨域協作</span>
        </h1>

        <p class="hero-description">
          以 <strong>5W1H（Who / When / What / Where / Why / How）</strong> 
          六個核心維度，立體解析我的技術實踐、工程哲學與職涯價值。
        </p>

        <div class="hero-actions">
          <button class="btn-primary" @click="navigateTo('/who')" id="hero-btn-start">
            <span>開始探索 5W1H</span>
            <span class="btn-arrow">→</span>
          </button>
          <QuickContact label="一鍵複製 Email 聯絡" variant="secondary" />
        </div>
      </section>

      <!-- 5W1H Minimalist Line Grid Entrance -->
      <section class="dimensions-section">
        <div class="section-heading">
          <h2 class="section-title">5W1H 主題入口導航</h2>
          <p class="section-desc">點擊進入各主題獨立頁面，探索詳細問答與專業實踐</p>
        </div>

        <div class="dimensions-grid">
          <div
            v-for="item in dimensions"
            :key="item.tag"
            class="dimension-card card"
            :style="{ '--card-accent': item.accentColor }"
            @click="navigateTo(item.path)"
            :id="`dimension-card-${item.tag.toLowerCase()}`"
          >
            <div class="dimension-card-top">
              <span class="dimension-tag">{{ item.tag }}</span>
              <span class="dimension-icon">{{ item.icon }}</span>
            </div>

            <h3 class="dimension-title">{{ item.title }}</h3>
            <p class="dimension-subtitle">{{ item.subtitle }}</p>

            <div class="dimension-card-bottom">
              <span class="explore-link">
                進入探索
                <span class="explore-arrow">→</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  padding: 3.5rem 0 5rem;
}

.home-container {
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
}

/* Hero */
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 820px;
  margin: 0 auto;
}

.hero-badge {
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: 3.2rem;
  line-height: 1.2;
  margin-bottom: 1.25rem;
  letter-spacing: -0.03em;
}

.hero-description {
  font-size: 1.15rem;
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 2.25rem;
  max-width: 680px;
}

.hero-description strong {
  color: var(--text-primary);
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.btn-arrow {
  transition: transform var(--transition-fast);
}

.btn-primary:hover .btn-arrow {
  transform: translateX(4px);
}

/* Dimensions Section */
.dimensions-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section-heading {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-title {
  font-size: 1.75rem;
}

.section-desc {
  color: var(--text-secondary);
  font-size: 0.98rem;
}

.dimensions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.dimension-card {
  display: flex;
  flex-direction: column;
  padding: 1.75rem;
  border-radius: var(--radius-lg);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-top: 3px solid var(--card-accent, var(--accent-primary));
}

.dimension-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.dimension-tag {
  font-family: var(--font-mono);
  font-weight: 800;
  font-size: 0.88rem;
  letter-spacing: 0.08em;
  color: var(--card-accent, var(--accent-primary));
}

.dimension-icon {
  font-size: 1.4rem;
}

.dimension-title {
  font-size: 1.28rem;
  font-weight: 700;
  margin-bottom: 0.65rem;
  color: var(--text-primary);
}

.dimension-subtitle {
  color: var(--text-secondary);
  font-size: 0.92rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
}

.dimension-card-bottom {
  margin-top: auto;
}

.explore-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--card-accent, var(--accent-primary));
}

.explore-arrow {
  transition: transform var(--transition-fast);
}

.dimension-card:hover .explore-arrow {
  transform: translateX(4px);
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .dimensions-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .hero-title {
    font-size: 2.3rem;
  }

  .dimensions-grid {
    grid-template-columns: 1fr;
  }
}
</style>
