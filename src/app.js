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
