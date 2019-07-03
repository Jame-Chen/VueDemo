import Vue from 'vue'
import Router from 'vue-router'

import Main from './Main'
import Comp1 from './Comp1'
import H1 from './H1'
import H2 from './H2'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Comp1,
      children: [
        {path: '/h1', name: 'H1', component: H1},
        {path: '/h2', name: 'H2', component: H2}
      ]
    }

  ]
})

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {

  if(to.path == "/"){
    next();
    return ;
  }
  let rate = Math.random();
  if(to.path == '/h2'){
    if(rate>0.5){
      next();
    }else{
      alert("不允许跳转!")
      // next({ path: '/h1' })
    }
  }else{
    next();
  }
})

new Vue({
  el: '#app',
  router,
  components: { Main },
  template: '<Main/>'
})
