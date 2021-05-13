import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'



Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const routes = [
  {
    path: '/',
    redirect: 'Homepage'
  },
  {
    path: '/calendar',
    name: 'ปฏิทิน',
    component: () => import('../views/Calendar.vue')
  },
  {
    path: '/homepage',
    name: 'Homepage',
    component: () => import('../views/Homepage.vue')
  },
  
  {
    path: '/members',
    name: 'สมาชิก',
    component: () => import('../views/Members.vue')
  },
  {
    path: '/content',
    name: 'บทความ',
    component: () => import('../views/Content.vue')
  },
  {
    path: '/signin',
    name: 'เข้าสู่ระบบ',
    component: () => import('../views/Signin.vue')
  },
  {
    // Test Purpose, Deleter later
    path: '/signup',
    name: 'ลงทะเบียน',
    component: () => import('../views/Signup.vue')
  },
  {
    // Test Purpose, Deleter later
    path: '/homepage',
    name: 'Homepage',
    component: () => import('../views/Homepage.vue')
  },
  {
    // Test Purpose, Deleter later
    path: '/userprofile',
    name: 'userProfile',
    component: () => import('../views/userProfile.vue')
  },
  {
    // Test Purpose, Deleter later
    path: '/registermember',
    name: 'registerMember',
    component: () => import('../views/registerMember.vue')
  },
  {
    // Test Purpose, Deleter later
    path: '/buyMember',
    name: 'buyMember',
    component: () => import('../views/buyMember.vue')
  },{
    // Test Purpose, Deleter later
    path: '/transaction',
    name: 'transaction',
    component: () => import('../views/transaction.vue')
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
