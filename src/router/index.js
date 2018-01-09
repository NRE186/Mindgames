import Vue from 'vue'
import Router from 'vue-router'
import MainScreen from '../components/Main.vue'
import MathMain from '../components/Math/Math.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainScreen',
      component: MainScreen
    },
    {
      path: '/math',
      name: 'Math',
      component: MathMain
    }
  ]
})

export default router
