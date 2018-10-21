import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))


Vue.use(iView)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
