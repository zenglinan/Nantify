<template>
  <div class="wrapper">
    <div class="buttonDemo">
      <c-button></c-button>
      <c-button icon="i-setting">icon按钮</c-button>
      <c-button icon="i-setting" icon-position="right">icon按钮</c-button>
      <c-button class="nouse">禁用按钮</c-button>
      <c-button icon="i-setting" :loading=ifLoading @click="ifLoading = true">loading按钮</c-button>
    </div>
    <div class="buttonGroup">
      <c-button-group>
        <c-button icon="i-left">上一页</c-button>
        <c-button>更多</c-button>
        <c-button icon="i-right" icon-position="right">下一页</c-button>
      </c-button-group>
    </div>
  </div>

</template>

<script>
  import Button from '../../../src/Button/Button'
  import ButtonGroup from '../../../src/Button/Button-Group'

  export default {
    name: "buttonDemo.vue",
    components: {
      'c-button': Button,
      'c-button-group': ButtonGroup
    },
    data() {
      return {
        ifLoading: false
      }
    }
  }
</script>

<style>

</style>