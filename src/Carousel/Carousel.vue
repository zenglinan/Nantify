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
        index: 0,  // 当前可见的幻灯片的索引
        childLen: 0,
        rightDir: false
      }
    },
    props: {
      delay: {
        type: String | Number
      }
    },
    methods: {
      startCarousel() {
        this.showCarousel(this.index)  // 为了使得点上一张下一张后立马显示当前visibleIndex的幻灯片
        this.timer = setInterval(() => {
          this.hideCarousel(this.index)
          this.index = ((this.index + 1) % this.childLen)
          this.showCarousel(this.index)
        }, this.delay)
      },
      showCarousel(index) {
        this.justDirection(index)
        this.$children[index].visible = true

      },
      hideCarousel(index) {
        this.justDirection(index)
        this.$children[index].visible = false
      },
      cancelCarousel() {  // 取消定时器, 将当前幻灯片置为不可见
        this.hideCarousel(this.index)
        clearInterval(this.timer)
      },
      justDirection(index){  // 判断方向是要向左还是向右
        if (this.rightDir) {
          this.$children[index].$refs.itemWrapper.classList.add('rightDirection')
        }else{
          this.$children[index].$refs.itemWrapper.classList.remove('rightDirection')
        }
      },
      setSize() {
        const wrapper = this.$refs.carouselWrapper
        const {width, height} = getComputedStyle(this.$el.querySelector('.c-carousel-item'));
        wrapper.style.width = width;
        wrapper.style.height = height;
      },
      init() {
        this.setSize()
      },
      toLast() {
        this.rightDir = true
        this.cancelCarousel()  // 先将当前index的visible设为false, 然后在设置上一张可见, 避免因为层级关系被挡住
        this.index = ((this.index + this.childLen - 1) % this.childLen)
        this.startCarousel()
        this.rightDir = false
      },
      toNext() {
        this.cancelCarousel()
        this.index = (this.index + 1) % this.childLen
        this.startCarousel()
      }
    },
    mounted() {
      this.childLen = this.$children.length
      this.init()  // 设置c-carousel的宽高, 并且生成小圆点
      this.startCarousel()  // 开始轮播
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