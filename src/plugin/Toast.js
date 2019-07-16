import Toast from '../Toast'

export default {
  install(Vue, options) {
    Vue.prototype.$toast = ({message, autoClose, closeDelay, callback, position}) => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose,
          closeDelay,
          callback,
          position
        }
      })
      vm.$slots.default = message
      vm.$mount()
      document.body.appendChild(vm.$el)
    }
  }
}