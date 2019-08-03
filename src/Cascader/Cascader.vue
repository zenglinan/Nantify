<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for="item in citys">
        <cascader-item :city="item"></cascader-item>
      </div>
    </div>
  </div>
</template>

<script>
  import CascaderItem from './CascaderItem'
  export default {
    name: "Cascader",
    props: {
      citys: {
        type: Array
      }
    },
    components:{
      'cascader-item': CascaderItem
    }
  }
</script>

<style scoped>

</style>