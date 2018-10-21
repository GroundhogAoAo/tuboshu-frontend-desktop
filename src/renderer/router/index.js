import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default,
      children: [{
        path: '/option',
        component: require('@/components/Optional/Option').default,
      },{
        path: '/quotes',
        component: require('@/components/Quotes/quotes').default,
      }]
    },
    {
      path: '*',
      redirect: '/',
      component: require('@/components/LandingPage/SystemInformation').default
    }
  ]
})
