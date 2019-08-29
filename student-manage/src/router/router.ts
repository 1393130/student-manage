import Vue from 'vue'
import Router from 'vue-router'
import { getToken } from '../utils/index'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: {
        auth:true,
        keepAlive:true
      }
    },
    {
      path:'/charts',
      name: 'charts',
      component: () => import('../views/Charts.vue'),
      meta: { 
        auth:true,//是否需要登录
        keepAlive:true //是否缓存组件
      }
    },
    {
      path: "/login",
      name: "login",
      component: () => import('../views/Login.vue'),
      meta: {
        auth: false,
        keepAlive :false
      }
    },
    {
      path: "/keyCharts",
      name: "keyCharts",
      component: () => import('../views/KeyCharts.vue'),
      meta: {
        auth: true,
        keepAlive: true
      }
    },
    {
      path: '*', //未匹配到路由时重定向
      redirect: '/',
      meta:{

      }
    }
  ]
})
// 全局路由钩子函数 对全局有效
router.beforeEach((to, from, next) => {
  let auth = to.meta.auth
  if (auth) { // 需要登录
    if(getToken()) {
      console.log('getToken...',getToken)
      next()
    } else {
      next({
        path: '/login',
        query: {
            redirect: to.fullPath
        }
    })
   }
  } else {
      next()
  }
})
export default router