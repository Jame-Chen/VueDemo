import Vue from 'vue'
import Router from 'vue-router'

import Main from './Main'
import Header from "./Header";
import Left from "./Left";
import Right from "./Right";

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
        default:Header,
        left:Left,
        right:Right
      }
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { Main },
  template: '<Main/>'
})
