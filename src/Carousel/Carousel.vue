<template>
  <div class="c-carousel" ref="carouselWrapper">
    <div class="arrow arrow-left" @click="toLast"><</div>
    <div class="arrow arrow-right" @click="toNext">></div>
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
        this.$children[this.visibleIndex].visible = true
        this.timer = setInterval(() => {
          this.$children[this.visibleIndex].visible = false
          this.visibleIndex++ && (this.visibleIndex = this.visibleIndex % len)
          this.$children[this.visibleIndex].visible = true
        }, this.delay)
      },
      cancelCarousel() {  // 取消定时器, 将当前幻灯片置为不可见
        this.$children[this.visibleIndex].visible = false
        clearInterval(this.timer)
      },
      setSize() {
        const {width, height} = getComputedStyle(this.$el.querySelector('.c-carousel-item'));
        this.$refs.carouselWrapper.style.width = width;
        this.$refs.carouselWrapper.style.height = height;
      },
      init() {
        this.setSize()
      },
      toLast() {
        const len = this.$children.length
        this.cancelCarousel()  // 先将当前index的visible设为false, 然后在设置上一张可见, 避免因为层级关系被挡住
        this.visibleIndex = (this.visibleIndex + len - 1) % len
        this.setCarousel()
      },
      toNext() {
        const len = this.$children.length
        this.cancelCarousel()
        this.visibleIndex = (this.visibleIndex + 1) % len
        this.setCarousel()
      }
    },
    mounted() {
      this.init()  // 设置c-carousel的宽高, 并且生成小圆点
      this.setCarousel()  // 开始轮播
    }
  }
</script>

<style scoped lang="scss">
  .c-carousel {
    display: inline-flex;
    position: relative;
    border: 1px solid red;

    .arrow {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: greenyellow;
      position: absolute;
      z-index: 1;
      top: 50%;
      text-align: center;
      line-height: 30px;

      &.arrow-left {
        left: 10px;
        transform: translateY(-50%);
      }

      &.arrow-right {
        right: 10px;
        transform: translateY(-50%);
      }
    }
  }
</style>