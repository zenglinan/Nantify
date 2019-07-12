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
      console.log(vm.$el);
      expect(useElement.innerHTML).to.equal('错误信息')
    })
  })


})