import Vue from 'vue'
import App from './App'
import Toast from './Toast/plugin/Toast'

Vue.config.productionTip = false

Vue.use(Toast)
new Vue({
  render: h=>h(App),

}).$mount('#app')
