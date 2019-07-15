import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Input from './input'
import Col from './col'
import Row from './row'
import Slider from './slider'
import Wrapper from './wrapper'
import Header from './header'
import Footer from './footer'
import Content from './content'

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
  }
})
