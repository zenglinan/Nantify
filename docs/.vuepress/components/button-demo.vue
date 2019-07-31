<template>
  <div>
    <c-button></c-button>
    <c-button icon="i-setting">icon按钮</c-button>
    <c-button class="nouse">禁用按钮</c-button>
    <c-button icon="i-setting" icon-position="right" :loading=ifLoading @click="ifLoading = true">loading按钮</c-button>
  </div>
</template>

<script>
  import Button from '../../../src/Button/Button'

  export default {
    name: "buttonDemo.vue",
    components: {
      'c-button': Button
    },
    data(){
      return {
        ifLoading: false
      }
    }
  }
</script>

<style>

</style>