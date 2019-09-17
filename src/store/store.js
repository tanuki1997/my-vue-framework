import Vue from 'vue'
import Vuex from 'vuex'
import * as storeCache from '@utils/storeCache'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    hasGetRouter: false,//是否从后台获取过路由
    menuRouter: [],//后台获取的菜单路由
    tabPanes: [],//标签页
    showMaskLayer: false,
    editableTabsValue: null,
  },
  getters: {
    hasGetRouter: state => state.hasGetRouter,
    menuRouter: state => state.menuRouter,
    tabPanes: state => state.tabPanes,
    showMaskLayer: state => state.showMaskLayer,
    editableTabsValue: state => state.editableTabsValue
  },

  mutations: {
    set_router: function (state, routerList) {
      state.menuRouter = routerList
      state.hasGetRouter = true
      storeCache.hasGetRouterCache(state.hasGetRouter)
      storeCache.menuRouterCache(state.menuRouter)
    },
    set_maskValue: function (state, value) {
      state.showMaskLayer = value
    },
    add_tabPane: function (state, node) {
      let addNodes = Object.assign({}, node)
      state.tabPanes.push(addNodes)
      storeCache.tabPanesCache(state.tabPanes)
    },
    remove_tabPane: function (state, nodeId) {
      let tabPanes = state.tabPanes
      let removeIndex
      if (tabPanes.length == 1) {
        state.tabPanes.splice(0, 1)
        storeCache.tabPanesCache(state.tabPanes)
        return
      }
      tabPanes.forEach((item, index) => {
        if (item.id == nodeId) {
          removeIndex = index
        }
      })
      if (removeIndex != 0) {
        state.editableTabsValue = state.tabPanes[removeIndex - 1].id + ''
      } else {
        state.editableTabsValue = state.tabPanes[removeIndex + 1].id + ''
      }
      state.tabPanes.splice(removeIndex, 1)
      storeCache.tabPanesCache(state.tabPanes)
      storeCache.activiryTabIndexCache(state.editableTabsValue)
    },

    set_editableTabsValue: function (state, value) {
      state.editableTabsValue = value + ''
      storeCache.activiryTabIndexCache(state.editableTabsValue)
    },

    get_state_cache: function (state) {
      state.hasGetRouter = storeCache.getHasGetRouterCache()
      state.menuRouter = storeCache.getMenuRouterCache()
      state.editableTabsValue = storeCache.getActiviryTabIndexCache()
      state.tabPanes = storeCache.getTabPanesCache()
    },

  },
  actions: {
    setRouterList (ctx, routerList) {
      ctx.commit('set_router', routerList) // 进行路由拼接并存储
    },
    setMaskValue: function (ctx, value) {
      ctx.commit('set_maskValue', value)
    },
    addTabPane: function (ctx, node) {
      ctx.commit('add_tabPane', node)
    },
    setEditableTabsValue: function (ctx, value) {
      ctx.commit('set_editableTabsValue', value)
    },
    getStateCache: function (ctx) {
      ctx.commit('get_state_cache')
    }
  }
})
export default store
