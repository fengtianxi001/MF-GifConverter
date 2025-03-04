import App from './App.vue'
import { createApp } from 'vue'
import { router } from '@/router'
import 'animate.css'
import '@arco-design/web-vue/dist/arco.less'
import '@/assets/styles/reset.scss'
import '@/assets/fonts/DincorosBlack/result.css'
import '@/assets/fonts/SarasaMonoSC/result.css'
import '@/assets/fonts/Furore/result.css'

const boostrap = async () => {
  const app = createApp(App)
  app.use(router)
  app.mount('#app')
}

boostrap()
