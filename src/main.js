import Vue from 'vue'
import App from './App.vue'
import router from './router'
import DateFilter from './filters/date'
import VueChatScroll from 'vue-chat-scroll'

Vue.use(VueChatScroll)
Vue.filter('date', DateFilter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
