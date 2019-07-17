<template>
  <div class="c-header">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "coco-header"
  }
</script>

<style scoped lang="scss">
  .c-header{
    flex-grow: 1;
  }
</style>