import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home/home.vue'
import cart from '../views/cart/cart'
import profile from '../views/profile/profile'
import category from '../views/category/category'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    // components: home
    redirect: "/home"
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/profile',
    component: profile
  }
]

const router = new VueRouter({
  routes,
  model: history
})

export default router
