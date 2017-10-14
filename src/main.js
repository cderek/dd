import Vue from 'vue'
import $ from 'webpack-zepto'
import VueRouter from 'vue-router'
import routes from './router'
import FastClick from 'fastclick'
import vueFilter from 'vue-filter'
import 'lib-flexible'
Vue.use(VueRouter)
Vue.use(vueFilter)

$.ajaxSettings.crossDomain = true

// 实例化VueRouter
const router = new VueRouter({
  mode: 'history',
  routes
})

FastClick.attach(document.body)

new Vue({
  router
}).$mount('#app')
