import Vue from 'vue'
import router from './../../router'
import Main from './Main'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { Main },
  template: '<Main/>'
})
