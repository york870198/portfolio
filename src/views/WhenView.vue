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
        title="經歷"
        subtitle="AI 時代飛行速度有點太快，害我感覺過去那個手寫程式的自己比實際上更老。"
        accentColor="var(--theme-when)"
      />

      <div class="page-content-flow">
        <QnACard
          :index="1"
          question="我何時成為前端工程師？"
          highlight="2021 年末。"
          accentColor="var(--theme-when)"
        >
          <p>
            「寫程式」這件事從高中就開始了，但一直都停留在興趣階段，大學也不是讀資工本科。<br/>
            2020 年新冠疫情改變了很多事情，我當時工作的領域大受影響，我覺得這樣下去不是辦法。<br/>
            我提了離職、找了個系統化的課程把當時前端業界該學的東西複習一遍、成功應徵到前端職位，然後就這樣了。
          </p>
        </QnACard>

        <QnACard
          :index="2"
          question="上一份工作何時開始、何時結束？"
          highlight="2021 年末，2026 年中離職。"
          accentColor="var(--theme-when)"
        >
          <p>
            上一份工作就是我入行的第一份工作，待了超過四年。<br/>
            是一間成長速度很快的公司，團隊的技術領導是致力於開源社群的大神。<br/>
            除了與工作直接相關的技術外，公司內也會定期舉辦讀書會、同事們一起持續溫故知新。<br/>
          </p>
          <p>
            2026 年初時，我的家庭內發生了需要我專注處理的問題，實在沒有心力蠟燭兩頭燒，故離職專心處理家裡的狀況。
          </p>
        </QnACard>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles can be extended here for custom customizations */
</style>
