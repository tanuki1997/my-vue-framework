const HAS_GET_ROUTER_KEY = 'has_get_router'
const MENU_ROUTER_KEY = 'menu_router'
const TAB_PANES_KEY = 'tab_panes'
const ACTIVITY_TAB_KEY = 'activity_tab_index'

//缓存动态路由获取开关
export function hasGetRouterCache (value) {
  sessionStorage.setItem(HAS_GET_ROUTER_KEY, value)
}

export function getHasGetRouterCache () {
  return sessionStorage.getItem(HAS_GET_ROUTER_KEY)
}

//动态路由数据
export function menuRouterCache (value) {
  sessionStorage.setItem(MENU_ROUTER_KEY, JSON.stringify(value))
}

export function getMenuRouterCache () {
  return JSON.parse(sessionStorage.getItem(MENU_ROUTER_KEY))
}

//标签页数据
export function tabPanesCache (value) {
  sessionStorage.setItem(TAB_PANES_KEY, JSON.stringify(value))
}

export function getTabPanesCache () {
  return JSON.parse(sessionStorage.getItem(TAB_PANES_KEY))
}
//标签页下标
export function activiryTabIndexCache (value) {
  sessionStorage.setItem(ACTIVITY_TAB_KEY, value)
}

export function getActiviryTabIndexCache () {
  return sessionStorage.getItem(ACTIVITY_TAB_KEY)
}


const STORE_KEY="state"

export function stateCache (state) {
  sessionStorage.setItem(STORE_KEY, JSON.stringify(state))
}

export function getStateCache () {
  return JSON.parse(sessionStorage.getItem(STORE_KEY))
}
