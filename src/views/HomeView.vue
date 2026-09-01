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
    title: '個人資訊',
    subtitle: '資深前端，以及除此以外。',
    icon: '👤',
    path: '/who',
    accentColor: 'var(--theme-who)'
  },
  {
    tag: 'WHEN',
    title: '經歷',
    subtitle: '成為工程師之後，以及之前。',
    icon: '⏳',
    path: '/when',
    accentColor: 'var(--theme-when)'
  },
  {
    tag: 'WHAT',
    title: '技術棧',
    subtitle: '通常在寫網頁，偶爾寫不是網頁的東西。',
    icon: '⚡',
    path: '/what',
    accentColor: 'var(--theme-what)'
  },
  {
    tag: 'WHERE',
    title: '活動範圍',
    subtitle: '在哪裡找得到我，或者我能跑多遠去找你。',
    icon: '📍',
    path: '/where',
    accentColor: 'var(--theme-where)'
  },
  {
    tag: 'WHY',
    title: '動機',
    subtitle: '原因很重要，但結果有時會比原因更早到。',
    icon: '💡',
    path: '/why',
    accentColor: 'var(--theme-why)'
  },
  {
    tag: 'HOW',
    title: '實踐方法',
    subtitle: '推薦你首先問問這個網站是怎麼做的。',
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
        <h1 class="hero-title">
          Everything about <span class="gradient-text">Fay</span>
        </h1>
      </section>
      <!-- 5W1H Minimalist Line Grid Entrance -->
      <section class="dimensions-section">

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
                更多細節
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
  padding: 1.5rem;
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
