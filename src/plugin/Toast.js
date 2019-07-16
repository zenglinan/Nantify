import Toast from '../Toast'
export default {
  install(Vue, options) {
    Vue.prototype.$toast = ({message,autoClose,closeDelay}) => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: autoClose,
          closeDelay: closeDelay
        }
      })
      vm.$slots.default = message
      vm.$mount()
      document.body.appendChild(vm.$el)
    }
  }
}