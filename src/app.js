import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'

new Vue({
  el: '#app',
  components: {
    'c-button': Button,
    'c-button-group': ButtonGroup
  },
  data() {
    return {
      ifLoading: false,
    }
  }
})

// tip
// 单元测试

import chai from "chai"
import spies from 'chai-spies'
chai.use(spies)
const {expect} = chai
// 传给子组件的icon
try{
  {
    const Constructor = Vue.extend(Button)
    let vm = new Constructor({
      propsData: {
        icon: 'i-setting'
      }
    })
    vm.$mount()
    let ele = vm.$el.querySelectorAll('use')[1]
    let href = ele.getAttribute('xlink:href')
    expect(href).to.equal('#i-setting')
  }

// iconPosition
  {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'i-setting',
        iconPosition: 'right'
      }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelectorAll('svg')[1]
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('3')
    vm.$el.remove()
    vm.$destroy()
  }
// loading
  {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'i-setting',
        loading: true
      }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg > use')
    let href = svg.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    vm.$el.remove()
    vm.$destroy()
  }
// click事件, 函数的mock
  {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      icon: 'i-setting',
    })
    let spy = chai.spy(()=>{})
    vm.$mount()
    vm.$on('click',spy)
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
  }
}catch(error){
  window.errors = [error]
}finally {
  window.errors && window.errors.forEach((error)=>{
    console.log(error.message)
  })
}
