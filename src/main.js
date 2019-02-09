import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Buefy from 'buefy'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(VueAnalytics, {
  id: 'UA-134129642-2',
  router
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
