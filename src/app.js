import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Input from './input'
import Col from './col'
import Row from './row'

new Vue({
  el: '#app',
  components: {
    'c-button': Button,
    'c-button-group': ButtonGroup,
    'c-input': Input,
    'c-col': Col,
    'c-row': Row
  },
  data() {
    return {
      ifLoading: false,
      message: 'Hi,我支持v-model!',
      promptType: 'error'
    }
  }
})
