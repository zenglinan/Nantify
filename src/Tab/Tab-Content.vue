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
  .c-tab-column {
    .c-tab-content {
      padding: 1em 1.5em;
    }
  }
  .c-tab-content {
    padding: 14px;
  }
</style>