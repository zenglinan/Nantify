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
      this.eventBus.$on('changeSelectedTab', (selectedName) => {
        this.$nextTick(() => {  // 在 nextTick 中保证可以获取到更新后的元素
          this.setBar()
        })
      })
    },
    methods: {
      setBar(){  // 设置移动条的位置宽度
        const activeEl = this.$el.querySelector('.active')
        const offsetLeft = activeEl.offsetLeft
        const {width} = activeEl.getBoundingClientRect()
        this.bar.style.display = "none"
        this.bar.style.left = offsetLeft + 'px'
        this.bar.style.width = width + 'px'
        this.bar.style.display = "block"
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../common/scss/base";

  .c-tab-nav {position: relative;}

  .c-tab-column { // 纵向
    .c-tab-nav {flex-direction: column;display: flex;}
  }

  .c-tab-row {
    .c-tab-nav {border-bottom: 2px solid $beige;display: flex;}
  }

  .bar {position: absolute;top: 100%;left: 0;height: 2px;
    width: 20px;background-color: #4A90E2;transition: all .3s;}

</style>