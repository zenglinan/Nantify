<template>
  <div class="c-tab-nav">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Tab-Nav"
  }
</script>

<style scoped lang="scss">
  .c-tab-nav {
    display: flex;
  }
</style>