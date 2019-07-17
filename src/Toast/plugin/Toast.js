import Toast from '../Toast'

let currentToast
export default {
  install(Vue, options) {
    Vue.prototype.$toast = (toastOptions) => {
      if (currentToast) {  // 如果已经有Toast存在，先关掉上一个，避免多个重叠
        currentToast.close()
      }
      currentToast = createToast(Vue, toastOptions)
    }
  }
}

function createToast(Vue, {message, autoClose, closeDelay, callback, position}) {
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
  return vm
}