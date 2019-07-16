const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/Toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  const Constructor = Vue.extend(Toast)
  it('存在.', () => {
    expect(Toast).to.exist
  })
  describe('props', () => {
    it('接受 autoClose', (done) => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: true,
          closeDelay: 1
        }
      }).$mount(div)
      setTimeout(() => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      },1000)
    })
  })

})