import routerMatch from './routerMatch'
import de from 'element-ui/src/locale/lang/de'

export function addRouter (routerlist, parentPath) {
  const router = []

  routerlist.forEach(r => {
    let e_new = {
      path: r.url,
      name: r.label,
      leaf: true,
      component: routerMatch(r.name),
      id: r.id,
    }


    if (r.url.indexOf('/') != -1) {
      //菜单目录
      e_new.fullPath = parentPath + r.url
    } else {
      //菜单
      e_new.fullPath = parentPath + '/' + r.url
    }

    if (r.children) {
      e_new.children = addRouter(r.children, e_new.fullPath)
      if (e_new.children.length > 0) {
        e_new.leaf = false

      }
    } else {

    }
    router.push(e_new)
  })
  return router
}

