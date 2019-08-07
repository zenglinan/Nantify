<template>
    <div class="c-item-wrapper">
      <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "coco-carousel-item",
  }
</script>

<style scoped>
  .c-item-wrapper {
    position: absolute;
  }
</style>