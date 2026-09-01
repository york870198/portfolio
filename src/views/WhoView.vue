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
        title="個人資訊"
        subtitle="一名資深前端工程師，略懂後端。"
        accentColor="var(--theme-who)"
      />

      <div class="page-content-flow">
        <QnACard
          :index="1"
          question="我是誰？"
          highlight="剛好趕在 AI 開始威脅要取代我們之前，從手工寫程式開始的資深前端工程師。"
          :tags="['Senior Frontend', 'React & Vue', 'Full-Stack Mindset']"
          accentColor="var(--theme-who)"
        >
          <p>
            我在工作場合自稱 Fay，另外在不同社群間有不同的暱稱。<br />
            如果你是從 LinkedIn 等人才媒合平台過來，你會在那邊看到我的本名。<br />
          </p>
          <p>
            我專注於現代前端架構，慣於使用 <strong>Vue 3</strong> 及 <strong>React</strong> 兩項前端生態系。<br/>稍微摸過一下 Svelte 跟 Angular，但僅止於小規模專案實作。
          </p>
          <ul>
            <li><strong>後端協作：</strong> 後端技術不是我的主要職能，不過我的知識至少充分到與後端工程師合作四年不會吵架。</li>
            <li><strong>UI/UX 協作</strong> 理解 Design System 與互動設計原則，能依據 Figma 設計稿完成高精準度的 UI 實作</li>
          </ul>
        </QnACard>

        <QnACard
          :index="2"
          question="我平常在關注誰？"
          highlight="公務上關注前端技術，私底下關注獨立遊戲。"
          :tags="[]"
          accentColor="var(--theme-who)"
        >
          <p>
            在我成為前端工程師之前，我首先是在鑽研獨立遊戲開發。<br/>
            當時跟 PM 一起天天跟畫面演出的細節大戰三百回合，做著做著回過神來發現我在寫的東西跟網頁前端有八成像。<br/>
            至於後來那個遊戲開發工具的下一代核心真的變成 HTML / CSS / JS，只能說是美麗的巧合。
          </p>
          <p>
            現在我平常追蹤 Hacker News 接收業界新聞，有空閒時則在獨立遊戲開發者的社群看看流行的新技術。
          </p>
        </QnACard>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles can be extended here for custom customizations */
</style>
