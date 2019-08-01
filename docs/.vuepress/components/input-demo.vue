<template>
  <div class="input">
    <c-input placeholder="请输入用户名" value="支持value,placeholder"></c-input><br>
    <c-input prompt='error' error-message="用户名只能为6~12个英文字符" prompt-position="right"></c-input><br>
    <c-input :prompt='promptType' placeholder="点我一下就通过" error-message="用户名只能为6~12个英文字符" pass-message="通过"
             @blur="promptType = 'pass'"></c-input><br>
    <c-input value="禁止输入" :disabled=true></c-input><br>
    <c-input v-model="message"></c-input><br>
    <span>{{message}}</span>
  </div>
</template>

<script>
  import Input from '../../../src/Input/Input'
  export default {
    name: "input-demo.vue",
    components: {
      'c-input': Input
    },
    data(){
      return {
        promptType: 'error',
        message: '我支持双向绑定'
      }
    }
  }
</script>

<style scoped>

</style>