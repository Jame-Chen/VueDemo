import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Main from './Main'
import CompA from "./CompA";
import CompB from "./CompB";
import CompC from "./CompC";
import CompD from "./CompD";
import CompE from "./CompE";

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/a',
      name: 'routeA',
      component: CompA
    },
    {
      path: '/b',
      name: 'routeB',
      component: CompB
    },
    {
      path: '/c',
      name: 'routeC',
      component: CompC
    },
    {
      path: '/d',
      name: 'routeD',
      component: CompD
    },
    {
      path: '/e',
      name: 'routeE',
      component: CompE
    },
    {
      path: '/',
      name: 'routeA',
      component: CompA
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
