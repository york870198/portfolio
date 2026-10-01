import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import i18n from '@/i18n'
import '@/style.css'

const app = createApp(App)

app.use(i18n)
app.use(router)

// Render the initial route and shell together so the footer does not jump
// when a lazy-loaded page arrives after the first paint.
router.isReady().then(() => app.mount('#app'))
