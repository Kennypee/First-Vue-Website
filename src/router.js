import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Books from './views/Books'
import Details from './views/Details'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/books/:bookId/details',
      name: 'details',
      component: Details,
      props:true
    },
    {
      path: '/books',
      name: 'books',
      component: Books
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
