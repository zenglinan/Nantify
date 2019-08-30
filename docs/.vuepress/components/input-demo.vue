<template>
  <div class="c-card">
    <h3>基本用法</h3>
    <c-card :code="code1">
      <div class="input">
        <c-input placeholder="请输入..."></c-input>
      </div>
      <template v-slot:descript>
        使用 <span class="md">placeholder</span> 可以指定占位文本。
      </template>
    </c-card>

    <h3>禁用状态</h3>
    <c-card :code="code2">
      <div class="input">
        <c-input placeholder="禁止输入" disabled></c-input>
      </div>
      <template v-slot:descript>
        使用 <span class="md">disabled</span> 禁用输入框。
      </template>
    </c-card>

    <h3>value</h3>
    <c-card :code="code3">
      <div class="input">
        <c-input value="我是输入框的 value"></c-input>
      </div>
      <template v-slot:descript>
        使用 <span class="md">value</span> 指定输入框的 value。
      </template>
    </c-card>

    <h3>提示信息</h3>
    <c-card :code="code3">
      <div class="input">
        <c-input :prompt='promptType'
                 placeholder="点我一下, 然后离开"
                 error-message="用户名只能为6~12个英文字符" pass-message="通过"
                 @blur="promptType = 'pass'"></c-input>
        <c-input :prompt='promptType2'
                 placeholder="点我一下, 然后离开"
                 error-message="用户名只能为6~12个英文字符" pass-message="通过"
                 promptPosition="right"
                 @blur="promptType2 = 'pass'"></c-input>
      </div>
      <template v-slot:descript>
        通过 <span class="md">prompt</span> 设置提示信息的类型, 有 <span class="md">pass</span> 和 <span class="md">error</span> 两种。
        <br>
        通过 <span class="md">pass-message</span> 和 <span class="md">error-message</span> 提供两种提示信息。
        <br>
        通过 <span class="md">promptPosition</span> 控制提示信息的位置。
        <br>
        可以切换 <span class="md">prompt</span> 来显示不同类型的提示信息。
      </template>
    </c-card>

    <h3>尺寸</h3>
    <c-card :code="code4">
      <div class="input">
        <c-input size="3" placeholder="请输入..."></c-input>
        <c-input size="2" placeholder="请输入..."></c-input>
        <c-input size="1" placeholder="请输入..."></c-input>
      </div>
      <template v-slot:descript>
        使用 <span class="md">size</span> 指定输入框的尺寸。
      </template>
    </c-card>
  </div>
</template>

<script>
  import Input from '../../../src/Input/Input'
  import Card from '../../../src/Card/Card'

  export default {
    name: "input-demo.vue",
    components: {
      'c-input': Input,
      'c-card': Card
    },
    data() {
      return {
        promptType: 'error',
        promptType2: 'error',
        message: '我支持双向绑定',
        code1: `
<c-input placeholder="请输入..."></c-input>
        `.trim(),
        code2: `
<c-input placeholder="禁止输入" disabled></c-input>
        `.trim(),
        code3: `
<c-input :prompt='promptType'
         placeholder="点我一下, 然后离开"
         error-message="用户名只能为6~12个英文字符" pass-message="通过"
         @blur="promptType = 'pass'"></c-input>

<script>
  export default {
    data(){
      return {
        promptType: 'error'
      }
    }
  }
<\/script>
        `.trim(),
        code4: `
<c-input size="3" placeholder="请输入..."></c-input>
<c-input size="2" placeholder="请输入..."></c-input>
<c-input size="1" placeholder="请输入..."></c-input>
        `.trim()
      }
    }
  }
</script>

<style scoped>

</style>