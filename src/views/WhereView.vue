<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import QnACard from '@/components/QnACard.vue'
import plurkIcon from '@/assets/icons/plurk.png'

const socialLinks = [
  { name: 'GitHub', icon: '💻', url: 'https://github.com/york870198', desc: '我個人開發時習慣本地操作，所以它有點空。' },
  { name: 'Plurk', icon: plurkIcon, url: 'https://www.plurk.com/york870198', desc: '沒有演算法幫你決定你想看什麼的社群平台。' },
  { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/fay-chung-682698224/', desc: '平常只用來看 JS Developer 發的迷因。' },
  { name: 'Cake', icon: '🍰', url: 'https://www.cake.me/me/fayang', desc: '上面的資訊應該沒有比這裡多，但你往這裡發訊息我會收到通知。' }
]

const isImageIcon = (icon: string) => {
  return icon.startsWith('data:') || icon.startsWith('/') || icon.includes('.') || icon.includes('blob:')
}
</script>

<template>
  <div class="page where-page page-container">
    <div class="container">
      <PageHeader
        themeTag="WHERE"
        themeIndex="04"
        title="活動範圍"
        subtitle="扣掉不到一年的短暫高雄生活，我基本上是個沒見過世面的台北鄉巴佬。"
        accentColor="var(--theme-where)"
      />

      <div class="page-content-flow">
        <QnACard
          :index="1"
          question="我在哪裡？"
          highlight="台北，以及網路上。"
          accentColor="var(--theme-where)"
        >
          <p>
            我目前定居於台北，由於與家族同住，短期內沒有移居他地的規劃。<br>
          </p>
          <p>除了約出來面對面，你也能在以下地方找到我：</p>
          <div class="footprint-grid">
            <a
              v-for="link in socialLinks"
              :key="link.name"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="footprint-card"
            >
              <span class="footprint-icon">
                <img v-if="isImageIcon(link.icon)" :src="link.icon" :alt="link.name" class="footprint-img" />
                <span v-else>{{ link.icon }}</span>
              </span>
              <div class="footprint-info">
                <span class="footprint-name">{{ link.name }}</span>
                <span class="footprint-desc">{{ link.desc }}</span>
              </div>
              <span class="footprint-arrow">↗</span>
            </a>
          </div>
        </QnACard>

        <QnACard
          :index="2"
          question="我能跑多遠去工作？"
          highlight="大台北地區，或者公司遠端網路速度夠快。"
          accentColor="var(--theme-where)"
        >
          <ul>
            <li><strong>移動範圍：</strong>大台北地區中能夠靠捷運、公車與腳踏車抵達的地點。</li>
            <li><strong>偏好：</strong>混合式辦公。我有豐富的遠端協作經驗，能順暢與跨地點、跨時區的同事合作。</li>
          </ul>
        </QnACard>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footprint-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 0.5rem;
}

.footprint-card {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 1.1rem;
  background: var(--bg-card-subtle);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.footprint-card:hover {
  background: var(--bg-card-hover);
  border-color: var(--theme-where, #f59e0b);
  transform: translateY(-2px);
}

.footprint-icon {
  font-size: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  flex-shrink: 0;
}
.footprint-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.footprint-info {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.footprint-name {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.95rem;
}

.footprint-desc {
  font-size: 0.78rem;
  color: var(--text-muted);
}

.footprint-arrow {
  color: var(--text-muted);
  font-size: 0.95rem;
}

.direct-contact-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--bg-card-subtle);
  border: 1px dashed var(--theme-where, #f59e0b);
  border-radius: var(--radius-md);
  margin-top: 0.75rem;
  flex-wrap: wrap;
}

.direct-text {
  font-weight: 500;
  color: var(--text-primary);
  font-size: 0.95rem;
}
</style>
