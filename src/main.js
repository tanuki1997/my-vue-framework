import Vue from 'vue'
import App from './views/App.vue'
import Main from'./views/Main'
import store from './store/store'
import router from './router/index'
import Element from 'element-ui'
import MaskLayer from './components/MaskLayer'


/*引入资源请求插件*/
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
import api from './api/api'
import * as common from './utils/common'
import '@/permission'
import id from 'element-ui/src/locale/lang/id'

Vue.use(Element)
Vue.use(VueResource)
Vue.component('Main',Main)
Vue.component('MaskLayer',MaskLayer)
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$common = common



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
console.log()
