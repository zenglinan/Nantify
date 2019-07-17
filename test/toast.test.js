const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/Toast/Toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  const Constructor = Vue.extend(Toast)
  let vm
  it('存在.', () => {
    expect(Toast).to.exist
  })
  describe('props', () => {
    it('接受 autoClose closeDelay', (done) => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      vm = new Constructor({
        propsData: {
          autoClose: true,
          closeDelay: 1
        }
      }).$mount(div)
      setTimeout(() => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      }, 1000)
    })
    it('可以接收callback', (done) => {
      const callback = sinon.fake()
      vm = new Constructor({
        propsData: {
          autoClose: true,
          closeDelay: 1,
          callback
        }
      }).$mount()
      setTimeout(() => {
        expect(callback).to.have.been.called
        done()
      }, 1000)

    })
    it('可以接收position', () => {
      vm = new Constructor({
        propsData: {
          autoClose: false,
          position: 'top'
        }
      }).$mount()
      expect(vm.$el.classList.contains('toast-top')).to.eq(true)
    })
  })

  describe('事件', () => {
    it('可以触发close事件', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      vm = new Constructor({
        propsData:{
          autoClose: false
        }
      }).$mount(div)
      let closeButton = vm.$el.querySelector('.c-close')
      closeButton.click()
      expect(document.body.contains(vm.$el)).to.eq(false)
    })
  })

})