import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './modules/module-a'
import moduleB from './modules/module-b'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})
