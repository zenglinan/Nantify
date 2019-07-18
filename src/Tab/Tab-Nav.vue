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
  .c-tab-column { // 纵向
    .c-tab-nav {
      flex-direction: column;
      display: flex;
    }
  }

  .c-tab-row {
    .c-tab-nav {
      border-bottom: 2px solid rgb(225, 225, 225);
      display: flex;
    }
  }

</style>