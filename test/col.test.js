const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/Grid System/Row'
import Col from '../src/Grid System/Col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
  const Constructor = Vue.extend(Col)
  let vm
  const div = document.createElement('div')
  it('存在.', () => {
    expect(Col).to.exist
  })
  it('可以接收span 并设置对应的类名', () => {
    vm = new Constructor({
      propsData: {
        span: 12
      }
    }).$mount(div)
    let col = vm.$el
    expect(col.classList.contains('col-12')).to.eq(true)
  })
  it('可以接收offset 并设置对应的类名', () => {
    vm = new Constructor({
      propsData: {
        span: 12,
        offset: 6
      }
    }).$mount(div)
    let col = vm.$el
    expect(col.classList.contains('offset-6')).to.eq(true)
  })

})