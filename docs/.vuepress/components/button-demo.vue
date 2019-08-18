<template>
  <div class="demo">
    <h3>基本用法</h3>
    <c-card :code="code1">
      <div class="button">
        <c-button type="default">默认按钮</c-button>
        <c-button type="success">成功按钮</c-button>
        <c-button type="primary">主要按钮</c-button>
        <c-button type="info">信息按钮</c-button>
        <c-button type="warning">警告按钮</c-button>
        <c-button type="danger">危险按钮</c-button>
      </div>
      <template v-slot:descript>
        使用 <span class="md">type</span> 定义按钮的类型。
      </template>
    </c-card>


    <h3>图标按钮</h3>
    <c-card :code="code2">
      <div class="button">
        <c-button type="success" icon="i-info"></c-button>
        <c-button type="danger" icon="i-error"></c-button>
        <c-button type="primary" icon="i-setting">设置</c-button>
        <c-button type="primary" icon="i-upload" icon-position="right">上传</c-button>
      </div>
      <template v-slot:descript>
        使用 <span class="md">icon</span> 定义按钮所带的图标, <span class="md">icon</span> 的值为 <span class="md">xlink:href</span>
        的值, <br>
      </template>
    </c-card>

    <h3>Loading状态</h3>
    <c-card :code="code3">
      <div class="button">
        <c-button type="default" loading>加载中</c-button>
        <c-button icon="i-upload" type="primary" @click="ifLoading=true" :loading="ifLoading">上传</c-button>
      </div>
      <template v-slot:descript>
        使用 <span class="md">loading</span> 定义按钮是否为加载状态, 他接收一个 <span class="md">Boolean</span> 值, <br>
        也可以指定一个值为 <span class="md">Boolean</span> 的变量, 进行手动切换 <span class="md">loading</span> 状态。
      </template>
    </c-card>

    <h3>按钮尺寸</h3>
    <c-card :code="code4">
      <div class="button">
        <c-button type="default" size="3">大型按钮</c-button>
        <c-button type="default" size="2">默认按钮</c-button>
        <c-button type="default" size="1">小型按钮</c-button>
      </div>
      <template v-slot:descript>
        使用 <span class="md">size</span> 指定按钮的尺寸。
      </template>
    </c-card>

    <h3>按钮组</h3>
    <c-card :code="code5">
      <div class="button">
        <c-button-group>
          <c-button icon="i-left"  type="default">上一页</c-button>
          <c-button  type="default">更多</c-button>
          <c-button icon="i-right" icon-position="right" type="default">下一页</c-button>
        </c-button-group>
      </div>
      <template v-slot:descript>
        使用 <span class="md">使用c-button-group</span> 包裹按钮形成按钮组。
      </template>
    </c-card>
  </div>
</template>

<script>
  import Button from '../../../src/Button/Button'
  import ButtonGroup from '../../../src/Button/Button-Group'
  import Card from '../../../src/Card/Card'
  import Icon from '../../../src/Icon/icon'


  export default {
    name: "buttonDemo.vue",
    components: {
      'c-button': Button,
      'c-button-group': ButtonGroup,
      'c-icon': Icon,
      'c-card': Card
    },
    data() {
      return {
        ifLoading: false,
        code1: `
        <c-button type="default">默认按钮</c-button>
        <c-button type="success">成功按钮</c-button>
        <c-button type="primary">主要按钮</c-button>
        <c-button type="info">信息按钮</c-button>
        <c-button type="warning">警告按钮</c-button>
        <c-button type="danger">危险按钮</c-button>
        `.replace(/^\s*/gm, '').trim(),
        code2: `
        <c-button type="success" icon="i-info"></c-button>
        <c-button type="danger" icon="i-error"></c-button>
        <c-button type="primary" icon="i-setting">设置</c-button>
        <c-button type="primary" icon="i-upload" icon-position="right">上传</c-button>
        `.replace(/^\s*/gm, '').trim(),
        code3: `
<template>
  <c-button type="default" loading>加载中</c-button>
  <c-button icon="i-upload"
            type="primary"
            @click="ifLoading=true"
            :loading="ifLoading"
  >上传</c-button>
</template>

<script>
  export default {
    data(){
      return {
        ifLoading: false
      }
    }
  }
<\/script>`.trim(),
        code4: `
<div class="button">
  <c-button type="default" size="3">大型按钮</c-button>
  <c-button type="default" size="2">默认按钮</c-button>
  <c-button type="default" size="1">小型按钮</c-button>
</div>
        `.trim(),
        code5: `
<c-button-group>
  <c-button icon="i-left" type="default">上一页</c-button>
  <c-button type="default">更多</c-button>
  <c-button icon="i-right" icon-position="right  type="default"">下一页</c-button>
</c-button-group>
        `.trim()
      }
    }
  }
</script>

<style scoped lang="scss">
  .button {
    display: flex;
    align-items: flex-end;

    > button {
      margin-right: 15px;
    }
  }
</style>