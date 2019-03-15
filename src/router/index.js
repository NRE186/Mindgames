/* Frontend routes */
import Vue from 'vue'
import Router from 'vue-router'
import MainScreen from '../components/Main.vue'
import About from '../components/About.vue'
import Records from '../components/Records.vue'
import MathMain from '../components/Math/Math.vue'
import Auth from '../components/Auth.vue'
import NotFound from '../components/NotFound.vue'

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
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/math',
      name: 'Math',
      component: MathMain
    },
    {
      path: '/records',
      name: 'Records',
      component: Records
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    }
    // {
    //   path: '/*',
    //   name: 'NotFound',
    //   component: NotFound
    // }
  ]
})

export default router
