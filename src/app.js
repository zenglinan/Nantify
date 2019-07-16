import Vue from 'vue'
import Button from './Button'
import ButtonGroup from './Button-Group'
import Input from './Input'
import Col from './Col'
import Row from './Row'
import Slider from './Slider'
import Wrapper from './Wrapper'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import Toast from './plugin/Toast'

Vue.use(Toast)
new Vue({
  el: '#app',
  components: {
    'c-button': Button,
    'c-button-group': ButtonGroup,
    'c-input': Input,
    'c-col': Col,
    'c-row': Row,
    'c-footer': Footer,
    'c-header': Header,
    'c-wrapper': Wrapper,
    'c-slider': Slider,
    'c-content': Content
  },
  data() {
    return {
      ifLoading: false,
      message: 'Hi,我支持v-model!',
      promptType: 'error'
    }
  },
  methods: {
    toast() {
      this.$toast(
          {
            message: 'hello',
            autoClose: false,
            callback: () => {
              alert(1)
            },
            position: 'bottom'
          }
      )
    }
  }
})
