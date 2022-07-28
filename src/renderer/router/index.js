import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // routes: [
  //   {
  //     path: '/',
  //     name: 'landing-page',
  //     component: require('@/components/LandingPage').default
  //   },
  //   {
  //     path: '*',
  //     redirect: '/'
  //   }
  // ]
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/Home').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
