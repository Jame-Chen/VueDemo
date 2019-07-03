import Vue from 'vue'
import router from './../../router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Comp from './Comp'

Vue.use(VueAxios,axios);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { Comp },
  template: '<Comp/>'
})
