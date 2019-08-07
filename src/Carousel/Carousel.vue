<template>
  <div class="c-carousel">
    <div class="window">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "coco-carousel",
    methods: {},
    mounted() {

    }
  }
</script>

<style scoped lang="scss">
  .highZindex{
    z-index: 10
  }
  .lowerZindex{
    z-index: 0
  }
  .window {
    position: relative;
    box-sizing: border-box;
    width: 200px;
    border: 1px solid orangered;
  }
</style>