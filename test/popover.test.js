const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/Popover/Popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.be.ok
  })
  describe('props', () => {
    const Constructor = Vue.extend(Popover)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('可以接收trigger', () => {
      vm = new Constructor({
        propsData: {
          trigger: 'click'
        }
      }).$mount(document.body)
      vm.$nextTick(() => {
        console.log(vm.$el);
        const trigger = vm.$el.querySelector('.c-trigger')
        trigger.click()
        const content = vm.$el.querySelector('.c-content')
        console.log(content);
        expect(getComputedStyle(content).display === 'none').to.be.ok
      })

    })
  })
})