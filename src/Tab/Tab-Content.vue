<template>
  <div class="c-tab-content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Tab-Content"
  }
</script>

<style scoped lang="scss">
  .c-tab-content {
    padding: 10px 16px;
  }
</style>