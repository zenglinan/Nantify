<template>
  <svg class="icon">
    <use :xlink:href="`#${icon}`" />
  </svg>
</template>

<script>
  export default {
    props: {
      icon: {
      }
    }
  }
</script>

<style lang="scss">
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>