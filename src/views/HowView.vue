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
        title="實踐方法"
        subtitle="方法總比問題多，而問題有夠多。"
        accentColor="var(--theme-how)"
      />

      <div class="page-content-flow">
        <QnACard
          :index="1"
          question="這個網站是怎麼做的？"
          highlight="我出一張嘴，Google Antigravity 出力。"
          accentColor="var(--theme-how)"
        >
          <p>
            由我定義這個網頁的目的、要在什麼裝置上被閱覽、要用哪些框架與工具、要佈署在什麼平台。<br />
            我按照以前工作時 PM 寫規格書的方式，把我預期的目標寫下來，開始指揮 Gemini 做事。<br />
            它做出來的東西跟我自己手動敲鍵盤基本上差不多，但它只需要我五分之一或更少的時間。
          </p>
          <p>
            如果你想知道的是技術面的細節：<br />
            這個網站是以 Vue / Vue Router / Vite / TypeScript 實作的靜態網站，<br />
            透過 Github Action 佈署至 Github Pages。
          </p>
        </QnACard>

        <QnACard
          :index="2"
          question="我如何與不同領域的協作者進行跨領域合作？"
          highlight="心有靈犀（誇飾）。"
          accentColor="var(--theme-how)"
        >
          <p>
            在四年半職涯間，我密集地與後端工程師、設計師與產品經理合作。<br />
            我們得出一個共識：協作順暢的關鍵可以簡化為一句話，「我知道你腦中的畫面是什麼。」。<br />
            即便只是一點入門級的知識，也能讓我更對於對方腦中想要傳達的想像有更準確的理解。<br />
            協作者之間共同的想像越明確，開發時的溝通摩擦便越少。
          </p>
          <p>
            我已具備常見後端架構的必要知識，並有與後端工程師長期合作的實務經驗；<br />
            並且為了提升與設計師的協作能力，我正在修習 Google UX Design Certificate 課程，學習 UI/UX 設計的知識。
          </p>
        </QnACard>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles can be extended here for custom customizations */
</style>
