<template>
  <div class="c-carousel" ref="carouselWrapper">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "coco-carousel",
    data() {
      return {
        timer: null,
        visibleIndex: 0
      }
    },
    props: {
      delay: {
        type: String | Number
      }
    },
    methods: {
      setCarousel() {
        const len = this.$children.length
        this.timer = setInterval(() => {
          this.$children[this.visibleIndex].visible = false
          this.visibleIndex++ && (this.visibleIndex = this.visibleIndex % len)
          this.$children[this.visibleIndex].visible = true
        }, this.delay)
      },
      init() {
        const {width, height} = getComputedStyle(this.$el.querySelector('.c-carousel-item'));
        this.$refs.carouselWrapper.style.width = width;
        this.$refs.carouselWrapper.style.height = height;
      }
    },
    mounted() {
      this.init()  // 设置c-carousel的宽高
      this.setCarousel()  // 开始轮播
    }
  }
</script>

<style scoped lang="scss">
  .c-carousel {
    display: inline-flex;
    position: relative;
    border: 1px solid red;
  }
</style>