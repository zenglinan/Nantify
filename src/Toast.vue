<template>
  <div class="c-toast">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "coco-toast"
  }
</script>

<style scoped lang="scss">
  $font-size: 14px;
  $toast-height: 36px;
  $toast-bg: rgba(0, 0, 0, 0.65);
  $border-radius: 8px;
  .c-toast {
    font-size: $font-size; height: $toast-height; line-height: 1.8;
    position: fixed; top: 0; left: 50%; transform: translateX(-50%); display: flex;
    color: white;
    align-items: center;
    background: $toast-bg;
    border-bottom-left-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);
    padding: 0 20px;
  }
</style>