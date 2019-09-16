import router from './router'
import store from './store/store'
import { addRouter } from './utils/addRouter'
import { getUserInfSession } from './utils/common'
import api from './api/api'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  //是否登录
  let userInfo = getUserInfSession()
  if (userInfo) {
    if (to.path !== '/login') {
      if (store.getters.hasGetRouter) {
        // 获取了动态路由 data一定true,就无需再次请求 直接放行
        next()
      } else {
        // data为false,一定没有获取动态路由,就跳转到获取动态路由的方法
        gotoRouter(to, next)
      }
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // 免登陆白名单 直接进入
      next()
    } else {
      if (to.path !== '/login') {
        // 重定向到登录页面 不能这么写 因为假如之前的角色是 管理员页面 后又登陆了非管理员 重定向的页面就可能不存在,就会导致404
        // next(`/login?redirect=${to.path}`)
        next('/login')
      } else {
        next()
      }
    }
  }

})

function gotoRouter (to, next) {
  api.menu.getMenuTree().then(res => {
    console.log('解析后端动态路由', res.data)
    const asyncRouter = addRouter(res.data,'') // 进行递归解析初始化路由
    console.log(JSON.stringify(asyncRouter))
    // store.dispatch('setroles', res.data.data.permit)
    // 一定不能写在静态路由里面,否则会出现,访问动态路由404的情况.所以在这列添加
    asyncRouter.push({ path: '*', redirect: '/login', hidden: true })
    router.addRoutes(asyncRouter) // vue-router提供的addRouter方法进行路由拼接
    store.dispatch('setRouterList', asyncRouter) // 存储到vuex
    console.log(router.options.routes)
    next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
  })
    .catch(e => {
      console.log(e)
      next('/login')
    })
}
