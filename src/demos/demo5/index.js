import Vue from 'vue'
import router from './../../router'
import Main from './Main'
import GlobalComp from "./GlobalComp";

Vue.config.productionTip = false
Vue.component("globalComp",GlobalComp)

new Vue({
  el: '#app',
  router,
  components: { Main },
  template: '<Main/>'
})
