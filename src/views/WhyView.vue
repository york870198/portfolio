<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import QnACard from '@/components/QnACard.vue'
</script>

<template>
  <div class="page why-page page-container">
    <div class="container">
      <PageHeader
        themeTag="WHY"
        themeIndex="05"
        title="求職動機與工程哲學"
        subtitle="為什麼深耕前端？架構決策原則、技術選型邏輯與未來的職涯願景。"
        accentColor="var(--theme-why)"
      />

      <div class="page-content-flow">
        <!-- Q1 Placeholder -->
        <QnACard
          :index="1"
          question="為什麼選擇深耕前端領域，並持續拓展 UI/UX 與後端能力？"
          highlight="前端是使用者與軟體價值的交會點；拓展全端與設計視野，是為了能站在更高維度打造極致產品。"
          :tags="['Frontend Passion', 'Cross-Domain Value', 'Product Empathy']"
          accentColor="var(--theme-why)"
        >
          <p>
            在軟體工程中，<strong>前端是唯一直接與終端使用者產生情感共鳴與互動的領域</strong>。
          </p>
          <p>
            然而，單純的介面開發若缺乏對系統架構的理解，容易受限於 API 限制；若缺乏設計思維，則難以打造順暢的人機交互體驗。這驅使我主動跨足後端架構與 UI/UX 設計：唯有打破職能壁壘，才能在軟體交付中兼顧<strong>極速效能、優雅視覺與穩固架構</strong>。
          </p>
        </QnACard>

        <!-- Q2 Placeholder -->
        <QnACard
          :index="2"
          question="在技術選型與架構決策時，我的核心原則與工程哲學為何？"
          highlight="實用主義 (Pragmatism) 為先：拒絕過度工程，以團隊可維護性、交付速度與商業價值為首要衡量標準。"
          :tags="['Engineering Philosophy', 'Pragmatism', 'Clean Architecture']"
          accentColor="var(--theme-why)"
        >
          <p>
            面對日新月異的前端技術與工具生態，我恪守以下三項決策原則：
          </p>
          <ul>
            <li><strong>商業價值導向：</strong> 技術是實現業務目標的手段而非目的。選型必須解決真實問題，而非盲目追隨潮流。</li>
            <li><strong>團隊可維護性優先：</strong> 好的架構應降低認知負荷。清晰的型別定義、直觀的資料流與嚴謹的測試，遠重於晦澀複雜的技巧。</li>
            <li><strong>深模組化 (Deep Modules)：</strong> 對外提供極簡乾淨的介面，將複雜度內聚於模組內部，實現真正的低耦合。</li>
          </ul>
        </QnACard>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles can be extended here for custom customizations */
</style>
