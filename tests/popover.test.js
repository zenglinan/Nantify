const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/Popover/Popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  Vue.component('c-popover', Popover)
  it('存在.', () => {
    expect(Popover).to.exist
  })
  describe('props', () => {
    const Constructor = Vue.extend(Popover)
    let vm
    afterEach(() => {
      vm.$destroy()
    })

    it('可以接收trigger, click的情况', (done) => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
      <c-popover trigger="click">
        <template v-slot:content>
          第一个
        </template>
        <button>Left(click)</button>
      </c-popover>
      `
      vm = new Vue({
        el: div
      })
      const trigger = vm.$el.querySelector('.c-trigger')
      trigger.click()
      setTimeout(() => {
        const content = document.body.querySelector('.c-content')
        expect(content.style.display === 'none').to.not.be.ok
        content.remove()
        done()
      })

    })
    it('可以接收direction', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
      <c-popover trigger="click" direction="bottom">
        <template v-slot:content>
          第三个
        </template>
        <button>Left(click)</button>
      </c-popover>
      `
      vm = new Vue({
        el: div
      })
      expect(document.body.querySelector('.c-content').classList.contains('c-bottom')).to.be.ok
    })
  })
})