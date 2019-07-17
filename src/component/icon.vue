<template>
  <svg class="icon">
    <use :xlink:href="`#${icon}`" />
  </svg>
</template>

<script>
  import '../../asset/icon.js'
  export default {
    name:"coco-icon",
    props: {
      icon: {
      }
    }
  }
</script>

<style lang="scss" scoped>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>