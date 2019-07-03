import Vue from 'vue'
import router from './../../router'
import LifeCycle from './LifeCycle'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { LifeCycle },
  template: '<LifeCycle/>'
})
