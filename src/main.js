// src/main.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Home from './components/Home'
import store from './store'
// import $ from 'jquery'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  path: '/',
  component: Home
},
{
  path: '/home',
  component: Home
},
{
  path: '/chart-entries'
}]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
// 实例化我们的Vue
new Vue({
  el: '#app',
  data: {
    props: []
  },
  router,
  store,
  ...App
})
