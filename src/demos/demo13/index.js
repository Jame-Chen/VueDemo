import Vue from 'vue'
import router from './../../router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Main from './Main'

Vue.use(VueAxios,axios);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { Main },
  template: '<Main/>'
})
