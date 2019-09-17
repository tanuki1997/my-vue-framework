import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'

Vue.use(Router)

// 菜单重复点击路由重叠异常
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path: '/login',
      component: () => import('@views/Login')
    },
    {
      path: '/404',
      component: () => import('@views/404')
    },

  ]
})
