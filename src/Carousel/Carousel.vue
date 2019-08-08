<template>
  <div class="c-carousel" ref="carouselWrapper">
    <slot></slot>
    <div class="arrow arrow-left" @click="toLast">
      <svg class="icon">
        <use xlink:href="#i-left"/>
      </svg>
    </div>
    <div class="arrow arrow-right" @click="toNext">
      <svg class="icon">
        <use xlink:href="#i-right"/>
      </svg>
    </div>
    <div class="points">
      <span class="point"
            ref="point"
            v-for="(item,itemIndex) in childLen" :key="itemIndex"
            @click="toCarousel(itemIndex)"
            :class="{'active':index===itemIndex}"
      ></span>
    </div>
  </div>
</template>

<script>
  import '../../asset/icon'

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
      toCarousel(index) {
        if (index < this.index) {  // 判断要往哪个方向
          this.rightDir = true
        }
        this.cancelCarousel()
        this.index = index
        this.startCarousel()
        this.rightDir = false
      },
      justDirection(index) {  // 判断方向是要向左还是向右
        if (this.rightDir) {
          this.$children[index].$refs.itemWrapper.classList.add('rightDirection')
        } else {
          this.$children[index].$refs.itemWrapper.classList.remove('rightDirection')
        }
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
      },
      setSize() {
        const wrapper = this.$refs.carouselWrapper
        const {width, height} = getComputedStyle(this.$el.querySelector('.c-carousel-item'));
        wrapper.style.width = width;
        wrapper.style.height = height;
      },
    },
    mounted() {
      this.childLen = this.$children.length
      this.init()  // 设置c-carousel的宽高, 并且生成小圆点
      this.startCarousel()  // 开始轮播
    }
  }
</script>

<style scoped lang="scss">
  @import "../common/scss/base";

  .c-carousel {
    display: inline-flex;
    position: relative;

    .arrow {
      width: 30px;
      height: 30px;
      border-radius: 50%;
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

      .icon {
        width: 1.2em;
        height: 1.2em;
        vertical-align: -0.15em;
        fill: white;
        overflow: hidden;
        cursor: pointer;
      }
    }

    .points {
      display: flex;
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);

      .point {
        margin-right: 8px;
        display: block;
        width: 24px;
        height: 4px;
        cursor: pointer;
        background-color: $white;

        &.active {
          background-color: rgb(207, 232, 252);
        }
      }

      .point:last-child {
        margin-right: 0;
      }


    }

  }
</style>