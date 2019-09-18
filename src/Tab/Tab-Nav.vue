<template>
  <div class="c-tab-nav">
    <slot></slot>
    <div class="bar" ref="bar"></div>
  </div>
</template>

<script>
  export default {
    name: "Tab-Nav",
    inject: ['eventBus'],
    mounted() {
      this.bar = this.$refs.bar
      const direction = this.$parent.$el.classList.contains('c-tab-row') ? 'row' : 'column'
      this.eventBus.$on('changeSelectedTab', () => {
        this.$nextTick(() => {  // 在 nextTick 中保证可以获取到更新后的元素
          this.setBar(direction)
        })
      })
    },
    methods: {
      setBar(direction) {  // 设置移动条的位置宽度
        const activeEl = this.$el.querySelector('.active')
        const {width, height} = activeEl.getBoundingClientRect()
        if (direction === 'row') {
          const offsetLeft = activeEl.offsetLeft
          this.setPos({direction: 'row', left: offsetLeft, width})
        } else {
          const offsetTop = activeEl.offsetTop
          this.setPos({direction: 'column', top: offsetTop, height})
        }
      },
      setPos({direction, left, width, top, height}) {
        this.bar.style.display = "none"
        if (direction === 'row') {
          this.bar.style.left = left + 'px'
          this.bar.style.width = width + 'px'
        } else {
          this.bar.style.height = height + 'px'
          this.bar.style.top = top + 'px'
        }
        this.bar.style.display = "block"
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../common/scss/base";

  .c-tab-nav {position: relative;}

  .c-tab-column { // 纵向
    .c-tab-nav {flex-direction: column;display: flex;border-right: 2px solid $beige;}

    .bar {left: 100%;width: 2px;}
  }

  .c-tab-row {
    .c-tab-nav {border-bottom: 2px solid $beige;display: flex;}

    .bar {top: 100%;height: 2px;}
  }

  .bar {position: absolute;background-color: #4A90E2;transition: all .3s;}


</style>