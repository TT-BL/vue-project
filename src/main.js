import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// window.Toast= Toast
// window.MessageBox=Toast
// Vue.use(Toast)
// Vue.use(MessageBox)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
