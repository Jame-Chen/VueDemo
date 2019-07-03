import Vue from 'vue'
import Router from 'vue-router'

import Main from './Main'
import store from '../../store'

Vue.use(Router)


Vue.config.productionTip = false


new Vue({
  el: '#app',
  store,
  components: { Main },
  template: '<Main/>'
})
