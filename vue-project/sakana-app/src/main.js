import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui' //追加
import locale from 'element-ui/lib/locale/lang/ja' //追加
import 'element-ui/lib/theme-chalk/index.css' //追加


Vue.config.productionTip = false
Vue.use(ElementUI, {locale}) //追加

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
