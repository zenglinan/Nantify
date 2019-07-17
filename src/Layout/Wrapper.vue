<template>
  <div class="c-wrapper" :class="{hasSliderClass}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "coco-wrapper",
    data() {
      return {
        hasSliderClass: false
      }
    },
    mounted() {
      let res = Array.from(this.$el.children).some((vm) => {
        return vm.classList.contains('c-slider')
      })
      res && (this.hasSliderClass = true)
    }
  }
</script>

<style scoped lang="scss">
  .c-wrapper {display: flex;flex-direction: column;

    &.hasSliderClass {flex-direction: row;

      .c-content {flex-grow: 1;}

      .c-wrapper {flex-grow: 1;}
    }
  }
</style>