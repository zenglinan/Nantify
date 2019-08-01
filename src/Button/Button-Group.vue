<template>
  <div class="c-button-group">
    <slot></slot>
  </div>
</template>

<script>
  import Button from './Button'
  export default {
    name: "coco-button-group",
    components: {
      'c-button': Button
    }
  }
</script>

<style lang="scss" scoped>
.c-button-group {
  display: inline-flex;
  .c-button {
    border-radius: 0;
    &:not(:first-child) {  // 消除相邻border的方法
      margin-left: -1px;
    }
    &:hover {
      position: relative;
      z-index: 2;
    }
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
}
</style>