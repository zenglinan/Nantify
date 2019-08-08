<template>
  <div class="c-carousel-item-wrapper" ref="itemWrapper">
  <transition name="carousel">
    <div class="c-carousel-item" v-if="visible">
      <slot></slot>
    </div>
  </transition>
  </div>
</template>

<script>
  export default {
    name: "coco-carousel-item",
    data() {
      return {
        visible: false
      }
    },
    created() {  // 默认显示第一张
      if (this.$parent.$children[0] === this) {
        this.visible = true
      }
    }
  }
</script>

<style scoped lang="scss">
  .c-carousel-item {
    position: absolute;
  }

  .carousel-enter-active, .carousel-leave-active {
    transition: all .5s;
  }

  .carousel-enter {
    opacity: 0;
    transform: translateX(50%);
  }

  .carousel-leave-to {
    opacity: 0;
    transform: translateX(-50%);
  }

  .rightDirection {

    & .carousel-enter {
      opacity: 0;
      transform: translateX(-50%);
    }

    & .carousel-leave-to {
      opacity: 0;
      transform: translateX(50%);
    }

  }
</style>