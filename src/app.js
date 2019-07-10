import Vue from 'vue'
import Button from './button'

new Vue({
  el: '#app',
  components: {
    'c-button': Button
  },
  data(){
    return {
      ifLoading: false,
    }
  }
})


