<template>
  <div class="c-button-group">
    <slot></slot>
  </div>
</template>

<script>
  import Button from './button'
  export default {
    name: "button-group",
    components: {
      'c-button': Button
    }
  }
</script>

<style lang="scss">
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
      border-top-left-radius: var(--button-radius);
      border-bottom-left-radius: var(--button-radius);
    }
    &:last-child {
      border-top-right-radius: var(--button-radius);
      border-bottom-right-radius: var(--button-radius);
    }
  }
}
</style>