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
    it('可以接收value', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          value: 'value'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('input')
      expect(useElement.value).to.equal('value')
      vm.$destroy()
    })
    it('可以接收disabled', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const useElement = vm.$el.querySelector('input')
      expect(useElement.disabled).to.equal(true)
      vm.$destroy()
    })
    it('可以接收placeholder', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          placeholder: '代替文字'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('input')
      expect(useElement.placeholder).to.equal('代替文字')
      vm.$destroy()
    })
    it('可以接收errorPrompt', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          errorPrompt: true
        }
      }).$mount()
      const useElement = vm.$el
      expect(Array.from(useElement.classList)).to.include('error')
      vm.$destroy()
    })
    it('可以接收errorMessage', () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          errorMessage: '错误信息',
          errorPrompt: true
        }
      }).$mount()
      const useElement = vm.$el.querySelector('span')
      console.log(vm.$el);
      expect(useElement.innerHTML).to.equal('错误信息')
      vm.$destroy()
    })
  })


})