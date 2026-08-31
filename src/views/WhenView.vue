<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import QnACard from '@/components/QnACard.vue'
</script>

<template>
  <div class="page when-page page-container">
    <div class="container">
      <PageHeader
        themeTag="WHEN"
        themeIndex="02"
        title="經歷時序與里程碑"
        subtitle="我的技術成長時間軸？從關鍵專案實踐到系統架構演進的歷程與轉折突破點。"
        accentColor="var(--theme-when)"
      />

      <div class="page-content-flow">
        <!-- Q1 Placeholder -->
        <QnACard
          :index="1"
          question="我的前端與技術職涯演進歷程是怎樣的？"
          highlight="從基礎切版到全棧視野與大型前端架構師的漸進式蛻變，經歷多次核心系統重構與團隊規模化挑戰。"
          :tags="['Career Progression', 'Architecture Evolution', 'Scale & Impact']"
          accentColor="var(--theme-when)"
        >
          <p>
            回顧過去的工程職涯，我的專業成長可劃分為三個關鍵演進階段：
          </p>
          <ul>
            <li><strong>基礎奠定與工程化實踐（早期）：</strong> 專注於現代前端核心基礎（HTML5/CSS3/ES6+），熟練掌握 Vue/React SPA 架構與元件化開發。</li>
            <li><strong>全端協作與系統深化（中期）：</strong> 深入後端 API 設計、資料庫交互與微服務架構，主導大型前端性能優化與重構專案。</li>
            <li><strong>架構主導與設計系統賦能（現階段）：</strong> 作為資深前端，負責核心系統選型、跨職能設計系統落地，並持續探索現代 Web 效能極限。</li>
          </ul>
        </QnACard>

        <!-- Q2 Placeholder -->
        <QnACard
          :index="2"
          question="在過往經歷中，最關鍵的成長轉折與突破是什麼？"
          highlight="從『只關注前端功能實作』轉化為『以商業價值與使用者體驗為導向』的產品工程師思維。"
          :tags="['Mindset Shift', 'Product Thinking', 'Turning Points']"
          accentColor="var(--theme-when)"
        >
          <p>
            最具突破性的轉折點發生在主導一次關鍵商業系統的前端重構時：
          </p>
          <p>
            當時我意識到，單純的「把畫面切出來」並無法創造真正的差異化價值。唯有深入理解<strong>後端資料流架構</strong>與<strong>UI/UX 使用者心理學</strong>，才能在效能、美感與商業轉化率之間取得完美平衡。自此，我將跨域協作思維深植於每一個技術決策中。
          </p>
        </QnACard>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles can be extended here for custom customizations */
</style>
