<template>
  <transition name="carousel">
    <div class="c-carousel-item" v-if="visible">
      <slot></slot>
    </div>
  </transition>
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
      if(this.$parent.$children[0] === this){
        this.visible = true
      }
    }
  }
</script>

<style scoped>
  .c-carousel-item {
    position: absolute;
  }
  .carousel-enter-active, .carousel-leave-active {
    transition: all 1s;
  }

  .carousel-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  .carousel-leave-to {
    opacity: 0;
    transform: translateX(-100%);
  }
</style>