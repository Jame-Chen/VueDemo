import Vue from 'vue'
import router from './../../router'
import MyFirstVue from './MyFirstVue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { MyFirstVue },
  template: '<MyFirstVue/>'
})
