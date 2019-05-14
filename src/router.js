import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import pageList from './views/pageList.vue'
import pageButton from './views/pageButton.vue'
import pageNav from './views/pageNav.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/button',
      name: 'button',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: pageButton
    },
    {
      path: '/nav',
      name: 'nav',
      component: pageNav
    },
    {
      path: '/list',
      name: 'list',
      component: pageList
    }
  ]
})
