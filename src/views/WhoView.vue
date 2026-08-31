<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import QnACard from '@/components/QnACard.vue'
</script>

<template>
  <div class="page who-page page-container">
    <div class="container">
      <PageHeader
        themeTag="WHO"
        themeIndex="01"
        title="個人定位與核心特質"
        subtitle="我是誰？具備全端工程視野與 UI/UX 設計思維的資深前端工程師。"
        accentColor="var(--theme-who)"
      />

      <div class="page-content-flow">
        <!-- Q1 Placeholder -->
        <QnACard
          :index="1"
          question="我的專業定位是什麼？具備哪些跨領域核心優勢？"
          highlight="以資深前端為核心，深度掌握 React 與 Vue 雙生態系，並能無縫銜接後端架構與 UI/UX 設計語彙。"
          :tags="['Senior Frontend', 'React & Vue', 'Full-Stack Mindset', 'UI/UX Literacy']"
          accentColor="var(--theme-who)"
        >
          <p>
            我專注於現代前端架構與極致使用者體驗。除了深入掌握 <strong>Vue 3 (Composition API / Pinia / Vite)</strong> 
            與 <strong>React (Hooks / Next.js / TypeScript)</strong> 兩大前端生態，我亦具備紮實的後端知識與 API 設計經驗。
          </p>
          <p>
            在團隊中，我不僅是純粹的介面實作者，更是工程與設計、前端與後端之間的<strong>跨職能橋樑</strong>：
          </p>
          <ul>
            <li><strong>後端協作優勢：</strong> 理解 RESTful / GraphQL API 設計思維與微服務資料流，能提前預防前後端整合瓶頸。</li>
            <li><strong>UI/UX 敏銳度：</strong> 主動學習 Design System 與互動設計原則，能精準將 Figma 設計稿轉化為具備無障礙 (a11y) 與高響應性的元件。</li>
            <li><strong>工程化素養：</strong> 重視 TypeScript 強型別防護、模組化封裝與自動化 CI/CD 流程。</li>
          </ul>
        </QnACard>

        <!-- Q2 Placeholder -->
        <QnACard
          :index="2"
          question="在團隊與組織中，我如何發揮技術影響力與協作價值？"
          highlight="透過建立標準化元件庫、推動代碼審查文化與主動賦能團隊成員，持續提升整體的研發效率與產品品質。"
          :tags="['Team Empowerment', 'Code Review', 'Design System', 'Mentorship']"
          accentColor="var(--theme-who)"
        >
          <p>
            身為資深工程師，我深信優秀的軟體來自健全的協作機制與持續的知識共享：
          </p>
          <ul>
            <li><strong>標準化與賦能：</strong> 主導建立 Design Tokens 與共用 UI 元件庫，大幅減少跨部門重複溝通成本與前端開發耗時。</li>
            <li><strong>品質守門：</strong> 積極參與 Code Review，推動 Clean Code 原則與前端測試規範，守護產品的可維護性與穩定度。</li>
            <li><strong>知識沉澱：</strong> 定期舉辦技術分享會與架構復盤，協助 Junior 成員快速成長並促進團隊技術迭代。</li>
          </ul>
        </QnACard>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles can be extended here for custom customizations */
</style>
