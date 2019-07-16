import Toast from '../Toast'
export default {
  install(Vue, options) {
    Vue.prototype.$toast = (message) => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor()
      console.log(vm);
      vm.$slots.default = message
      vm.$mount()
      document.body.appendChild(vm.$el)
    }
  }
}