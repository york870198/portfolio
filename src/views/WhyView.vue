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
        title="動機"
        subtitle="俗話說得好：Javascript，從入門到放棄。我目前還在中間。"
        accentColor="var(--theme-why)"
      />

      <div class="page-content-flow">
        <QnACard
          :index="1"
          question="為什麼選擇前端領域？"
          highlight="其實一開始不是選這個，只是走著走著方向剛好朝這邊。"
          accentColor="var(--theme-why)"
        >
          <p>
            最早只是因為個人興趣，為了開發遊戲所以開始寫程式。<br />
            遊戲開發同時包含前端與後端，所以嚴格說來我一開始選擇的方向算是全端工程師。<br />
            後來終於正式把寫程式當成工作，第一個的職位是前端，久而久之分配給前端的心力自然也壓倒性的多。
          </p>
        </QnACard>
      </div>
    </div>
  </div>
</template>
