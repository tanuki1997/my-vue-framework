import Vue from 'vue'
import Vuex from 'vuex'
import api from '@api/api'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    hasGetRouter: false,//是否从后台获取过路由
    RouterList: [],//所有的路由集合
    menuRouter: [],//后台获取的菜单路由
    tabPanes: [],//标签页
    showMaskLayer: false,
    editableTabsValue: null,
  },
  getters: {
    hasGetRouter: state => state.hasGetRouter,
    RouterList: state => state.RouterList,
    menuRouter: state => state.menuRouter,
    tabPanes: state => state.tabPanes,
    showMaskLayer: state => state.showMaskLayer,
    editableTabsValue: state => state.editableTabsValue
  },

  mutations: {
    set_router: function (state, routerList) {
      state.menuRouter = routerList
      state.hasGetRouter = true
    },
    set_maskValue: function (state, value) {
      state.showMaskLayer = value
    },
    add_tabPane: function (state, node) {
      state.tabPanes.push(node)
    },
    // remove_tabPane:function(state,node){
    //
    // }
    set_editableTabsValue: function (state, value) {
      state.editableTabsValue = value + ''
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
  }
})
export default store
