import Vue from 'vue'
import router from './../../router'
import ComputeVue from './ComputeVue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { ComputeVue },
  template: '<ComputeVue/>'
})
