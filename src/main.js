import Vue from 'vue'
import $ from 'webpack-zepto'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router'
import FastClick from 'fastclick'
import vueFilter from 'vue-filter'
import 'lib-flexible'

import infinite from '@/components/infiniteScroll'
Vue.use(VueRouter)
Vue.use(vueFilter)
Vue.component(infinite.name, infinite)

$.ajaxSettings.crossDomain = true

// 实例化VueRouter
const router = new VueRouter({
  mode: 'history',
  routes
})

FastClick.attach(document.body)

new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
