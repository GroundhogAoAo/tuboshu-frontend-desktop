import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default,
      children: [{ // 登录进去的
        path: '/option',
        component: require('@/components/Optional/Option').default,
        meta:{
          requireLogin:true
        }
      },{
        path: '/quotes',
        component: require('@/components/Quotes/quotes').default,
      }]
    },{
      path: '/login',
      name: 'Login',
      component: require('@/components/Login/login').default,
    },
    ,{
      path: '/register',
      name: 'Register',
      component: require('@/components/Register/register').default,
    },{
      path: '/forgetpass',
      name: 'Forgetpass',
      component: require('@/components/ForgetPass/forgetpass').default,
    },
    {
      path: '*',
      redirect: '/',
      component: require('@/components/LandingPage/SystemInformation').default
    }
  ]
})
