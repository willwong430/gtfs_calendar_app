import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import store from './vuex/store'

import App from './App'
import Hello from './components/Hello'

Vue.use(VueRouter)
Vue.use(VueResource)

// set the API root so we can use relative url's in our actions.
Vue.http.options.root = 'http://localhost:5000'

const routes = [
  { path: '/home', alias: '/', component: Hello }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  template: '<App/>',
  components: { App }
})
