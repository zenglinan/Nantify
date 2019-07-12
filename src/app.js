import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Input from './input'

new Vue({
  el: '#app',
  components: {
    'c-button': Button,
    'c-button-group': ButtonGroup,
    'c-input': Input
  },
  data() {
    return {
      ifLoading: false,
      message: 'Hi,我支持v-model!'
    }
  }
})
