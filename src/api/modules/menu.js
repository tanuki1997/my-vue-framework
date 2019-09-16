import http from '../http'


export const getMenuTree = () => {
  return http.fetchGet('/admin/getMenuTree')
}
//
// export const initMenu = (router, menu) => {
//   if (menu.length === 0) {
//     return
//   }
//   let menus = formatRoutes(menu);
//   // 最后添加
//   let unfound = { path: '*', redirect: '/404', hidden: true }
//   menus.push(unfound)
//   router.addRoutes(menus)
//   store.commit('ADD_ROUTERS',menus)
// }
