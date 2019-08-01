<template>
  <div class="toast">
    <c-button @click="toast1()">Toast-Bottom提示</c-button>
    <c-button @click="toast2()">Toast-Middle提示</c-button>
    <c-button @click="toast3()">Toast-Top提示</c-button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Toast from '../../../src/Toast/plugin/Toast'
  import Button from '../../../src/Button/Button'

  Vue.use(Toast)

  export default {
    name: "toast-demo",
    components:{
      'c-button': Button
    },
    methods: {
      toast1() {
        this.$toast(
            {
              message: '这是一条提示消息',
              autoClose: true,
              // callback: () => {
              //   alert('回调执行成功')
              // },
              position: 'bottom',
              closeDelay: 2
            }
        )
      },
      toast2() {
        this.$toast(
            {
              message: '这是一条提示消息',
              autoClose: true,
              // callback: () => {
              //   alert('回调执行成功')
              // },
              position: 'middle',
              closeDelay: 2
            }
        )
      },
      toast3() {
        this.$toast(
            {
              message: '这是一条提示消息',
              autoClose: true,
              // callback: () => {
              //   alert('回调执行成功')
              // },
              position: 'top',
              closeDelay: 2
            }
        )
      }
    }
  }
</script>

<style scoped>

</style>