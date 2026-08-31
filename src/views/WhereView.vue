<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import QnACard from '@/components/QnACard.vue'
import QuickContact from '@/components/QuickContact.vue'

const socialLinks = [
  { name: 'GitHub', icon: '💻', url: 'https://github.com', desc: '開源專案與代碼倉庫' },
  { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com', desc: '專業經歷與職業人脈' },
  { name: 'Technical Blog', icon: '📝', url: 'https://medium.com', desc: '前端架構與跨職能協作心得' }
]
</script>

<template>
  <div class="page where-page page-container">
    <div class="container">
      <PageHeader
        themeTag="WHERE"
        themeIndex="04"
        title="工作偏好與社群足跡"
        subtitle="我在哪裡發揮影響力？工作模式彈性偏好與線上開源社群足跡。"
        accentColor="var(--theme-where)"
      />

      <div class="page-content-flow">
        <!-- Q1 Placeholder -->
        <QnACard
          :index="1"
          question="我的工作模式偏好與地點彈性如何？"
          highlight="高度自我驅動與非同步協作能力，支援全遠端 (Remote)、混合辦公 (Hybrid) 或彈性 On-site。"
          :tags="['Remote-Friendly', 'Async Collaboration', 'Timezone Flexibility']"
          accentColor="var(--theme-where)"
        >
          <p>
            我擁有豐富的<strong>非同步協作 (Asynchronous Communication)</strong> 與遠端團隊配合經驗：
          </p>
          <ul>
            <li><strong>地點彈性：</strong> 偏好 Remote 或 Hybrid 辦公模式，具備優異的自主時間管理與交付透明度。</li>
            <li><strong>溝通原則：</strong> 善用文檔驅動（RFC、Issue 追蹤、API Schema 對齊），確保所有決策皆有跡可循。</li>
            <li><strong>理想團隊文化：</strong> 欣賞開放透明、注重代碼品質、鼓勵技術探索且以產品價值為核心的團隊氛圍。</li>
          </ul>
        </QnACard>

        <!-- Q2 Placeholder -->
        <QnACard
          :index="2"
          question="在哪裡可以找到我的技術足跡與線上作品？"
          highlight="活躍於開源社群與技術分享，歡迎隨時透過下方連結或郵件與我交流！"
          :tags="['GitHub', 'LinkedIn', 'Tech Articles', 'Contact']"
          accentColor="var(--theme-where)"
        >
          <div class="footprint-grid">
            <a
              v-for="link in socialLinks"
              :key="link.name"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="footprint-card"
            >
              <span class="footprint-icon">{{ link.icon }}</span>
              <div class="footprint-info">
                <span class="footprint-name">{{ link.name }}</span>
                <span class="footprint-desc">{{ link.desc }}</span>
              </div>
              <span class="footprint-arrow">↗</span>
            </a>
          </div>

          <div class="direct-contact-box">
            <span class="direct-text">需要進一步洽談或索取完整履歷？</span>
            <QuickContact variant="primary" label="一鍵複製 Email 聯絡" />
          </div>
        </QnACard>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footprint-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
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
