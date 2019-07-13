const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.be.ok
  })
  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('可以接收value', () => {
      vm = new Constructor({
        propsData: {
          value: 'value'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('input')
      expect(useElement.value).to.equal('value')
    })
    it('可以接收disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const useElement = vm.$el.querySelector('input')
      expect(useElement.disabled).to.equal(true)
    })
    it('可以接收placeholder', () => {
      vm = new Constructor({
        propsData: {
          placeholder: '代替文字'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('input')
      expect(useElement.placeholder).to.equal('代替文字')
    })
    it('可以接收errorPrompt', () => {
      vm = new Constructor({
        propsData: {
          errorPrompt: true
        }
      }).$mount()
      const useElement = vm.$el
      expect(Array.from(useElement.classList)).to.include('error')
    })
    it('可以接收errorMessage', () => {
      vm = new Constructor({
        propsData: {
          errorMessage: '错误信息',
          errorPrompt: true
        }
      }).$mount()
      const useElement = vm.$el.querySelector('span')
      expect(useElement.innerHTML).to.equal('错误信息')
    })
  })
  describe('事件监听', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {  // it断言结束后，销毁vm实例
      vm.$destroy()
    })
    it('支持 change/input/focus/blur 事件', () => {
      ['change', 'input', 'focus', 'blur']
          .forEach((eventName) => {
            vm = new Constructor({}).$mount()
            const callback = sinon.fake();
            vm.$on(eventName, callback)
            //触发input的change 事件
            let event = new Event(eventName);
            let inputElement = vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).to.have.been.called
          })
    })
  })

})