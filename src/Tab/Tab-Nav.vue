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
  @import "../common/scss/base";
  .c-tab-column { // 纵向
    .c-tab-nav {
      flex-direction: column;
      display: flex;
    }
  }

  .c-tab-row {
    .c-tab-nav {
      border-bottom: 2px solid $beige;
      display: flex;
    }
  }

</style>