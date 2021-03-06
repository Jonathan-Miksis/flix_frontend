import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import ReviewsIndex from '../views/ReviewsIndex.vue'
import MediaIndex from '../views/MediaIndex.vue'
import ReviewNew from '../views/ReviewNew.vue'
import MediumShow from '../views/MediumShow.vue'
import Watchlist from '../views/Watchlist.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/media',
    name: 'MediaIndex',
    component: MediaIndex
  },
  {
    path: '/media/:id',
    name: 'MediaShow',
    component: MediumShow
  },
  {
    path: '/reviews',
    name: 'ReviewsIndex',
    component: ReviewsIndex
  },
  {
    path: '/reviews/new',
    name: 'ReviewNew',
    component: ReviewNew
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/watchlist',
    name: 'Watchlist',
    component: Watchlist
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
