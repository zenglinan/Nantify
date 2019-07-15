const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {

  it('存在.', () => {
    expect(Row).to.exist
  })
  it('可以接收gutter 并设置正确的margin padding', (done) => {
    Vue.component('c-row', Row)
    Vue.component('c-col', Col)
    let div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <c-row gutter="10">
        <c-col span="12"></c-col>
        <c-col span="12"></c-col>
      <c-row>
    `
    const vm = new Vue({
      el: div
    })
    setTimeout(() => {
      const row = vm.$el.querySelector('.c-row')
      const col = vm.$el.querySelector('.c-col')
      expect(getComputedStyle(row).marginLeft).to.eq('-5px')
      expect(getComputedStyle(row).marginRight).to.eq('-5px')
      expect(getComputedStyle(col).paddingLeft).to.eq('5px')
      expect(getComputedStyle(col).paddingLeft).to.eq('5px')
      vm.$el.remove()
      vm.$destroy()
      done()
    })
  })

})