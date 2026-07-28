import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrapPlugin from './plugins/bootstrap-vue'

createApp(App)
  .use(router)
  .use(store)
  .use(bootstrapPlugin)
  .mount('#app')
