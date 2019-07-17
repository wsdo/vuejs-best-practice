import Vue from 'vue'
import App from './App.vue'
import stark from './stark'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  stark,
}).$mount('#app')
