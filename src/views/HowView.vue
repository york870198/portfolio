<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import QnACard from '@/components/QnACard.vue'
</script>

<template>
  <div class="page how-page page-container">
    <div class="container">
      <PageHeader
        themeTag="HOW"
        themeIndex="06"
        title="方法論與協作實踐"
        subtitle="我如何解決問題？跨職能 API 規範制定、Design Token 對齊與複雜架構排查方法論。"
        accentColor="var(--theme-how)"
      />

      <div class="page-content-flow">
        <!-- Q1 Placeholder -->
        <QnACard
          :index="1"
          question="我如何進行跨職能協作？（與後端制定 API 契約、與 UI/UX 對齊 Design Tokens）"
          highlight="透過「合約優先 (Contract-First)」與「設計系統標準化」，在開發初期即消弭溝通歧異與整合摩擦。"
          :tags="['API Contract', 'Design Tokens', 'Cross-Functional', 'Figma to Code']"
          accentColor="var(--theme-how)"
        >
          <p>
            高效跨職能協作的核心在於建立<strong>單一真實來源 (Single Source of Truth)</strong>：
          </p>
          <ul>
            <li><strong>與後端協作：</strong> 在功能開發前即透過 OpenAPI / TypeScript Interface 制定清晰的 API Schema 與錯誤碼規範，並利用 Mock Service 實現前後端平行並行開發。</li>
            <li><strong>與 UI/UX 協作：</strong> 共同定義 Spacing, Colors, Typography 等 Design Tokens，將 Figma 變數直接對接前端 CSS Variables，確保介面高度還原且主題切換零成本。</li>
          </ul>
        </QnACard>

        <!-- Q2 Placeholder -->
        <QnACard
          :index="2"
          question="面對未知技術難題、效能瓶頸或緊急 Production Issue 時，我的排查方法論？"
          highlight="遵循「重現 ➜ 指標度量 ➜ 二分排查 ➜ 根因修復 ➜ 復盤與防禦」的嚴密工程診斷閉環。"
          :tags="['Performance Tuning', 'Debugging Loop', 'Root Cause Analysis', 'Post-Mortem']"
          accentColor="var(--theme-how)"
        >
          <p>
            面對複雜問題，我不依賴盲目猜測，而是採取結構化的排查步驟：
          </p>
          <ul>
            <li><strong>1. 最小可重現範例 (Minimal Reproduction)：</strong> 排除無關干擾變數，在受控環境精準重現 Bug。</li>
            <li><strong>2. 數據化度量與 Profiling：</strong> 利用 Chrome DevTools Performance、Lighthouse 或 Memory Snapshot 找出真正的效能或記憶體洩漏熱點。</li>
            <li><strong>3. 防禦性機制與復盤：</strong> 修復根因後，補足單元/整合測試 (TDD)，並於團隊進行知識復盤，避免同類問題再次發生。</li>
          </ul>
        </QnACard>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles can be extended here for custom customizations */
</style>
