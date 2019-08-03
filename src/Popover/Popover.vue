<template>
  <div class="c-popover">
    <div class="c-content" v-show=show ref="content" :class="{[`c-${direction}`]: true}" @click.stop>
      <slot name="content" :close="close">
      </slot>
    </div>
    <div class="c-trigger" ref="trigger" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "coco-popover",
    props: {
      trigger: {
        type: String,
        default: 'click',
        validator(value) {
          return ['click', 'hover'].indexOf(value) !== -1
        }
      },
      direction: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) !== -1
        }
      },
      delay: {
        type: [Number, String],
        default: 0
      }
    },
    data() {
      return {
        show: false,
        timer: null  // 定时器
      }
    },
    computed: {
      triggerButton() {
        return this.$refs.trigger
      }
    },
    mounted() {
      this.trigger === 'click' && this.listenToClick()
      this.trigger === 'hover' && this.listenToHover()
      this.setPopover()
    },
    methods: {
      setPopover() { // 将popover放置为body的子元素, 并且定位， 避免父元素设了overlow: hidden看不见popover提示框
        // 将元素移出
        let contentDom = this.$el.removeChild(this.$refs.content)
        // 作为body的子元素
        document.body.appendChild(contentDom)
        this.setPosition(contentDom)

      },
      setPosition(contentDom){
        const {width, height, top, left, right} = this.$refs.trigger.getBoundingClientRect()
        switch (this.direction) {
          case 'top':
            contentDom.style.left = `${left + window.scrollX}px`;
            contentDom.style.top = `${top + window.scrollY}px`;
            break;
          case 'bottom':
            contentDom.style.left = `${left + window.scrollX}px`;
            contentDom.style.top = `${top + window.scrollY + height}px`;
            break;
          case 'left':
            contentDom.style.right = `${document.body.clientWidth - left + window.scrollX}px`
            contentDom.style.top = `${top + window.scrollY}px`
            break;
          case 'right':
            contentDom.style.left = `${left + window.scrollX + width}px`
            contentDom.style.top = `${top + window.scrollY}px`
            break;
        }
      },
      listenToClick() {
        let eventHandle = (e) => {
          this.close()
        }
        this.triggerButton.addEventListener('click', () => {
          this.show = !this.show
          document.removeEventListener('click', eventHandle)
          document.addEventListener('click', eventHandle)   // 再重新监听
        })
      },
      listenToHover() {
        this.triggerButton.addEventListener('mouseenter', () => {
          clearInterval(this.timer)
          this.open()
        })
        this.triggerButton.addEventListener('mouseleave', () => {
          this.timer = setInterval(() => {
            this.close()
          }, this.delay)
        })
      },
      close() {
        this.show = false
      },
      open() {
        this.show = true
      }

    }
  }
</script>

<style scoped lang="scss">
  @import "../common/scss/base";
  .c-popover {display: inline-flex;flex-direction: column;position: relative;}

  .c-content {box-sizing: border-box;padding: 14px 18px;background: $bg;
    border: 1px solid $border-color-light;position: absolute;color: $brown;font-size: 14px;
    border-radius: 5px;max-width: 20em;word-break: break-all;z-index: 10;

    &::after, &::before {content: '';display: block;position: absolute;
      height: 0;width: 0;border: 6px solid transparent;}


    &.c-top {margin-top: -6px;transform: translateY(-100%);
      filter: drop-shadow(0 2px 2px rgba(0, 0, 0, .1));

      &::after, &::before {top: 100%;left: 5px;border-bottom: none;}

      &::after {border-top-color: $bg;transform: translateY(-1px);}

      &::before {border-top-color: $border-color-light;}
    }

    &.c-bottom {margin-top: 6px;filter: drop-shadow(0 0 2px rgba(0, 0, 0, .1));

      &::after, &::before {bottom: 100%;left: 5px;border-top: none;}

      &::after {border-bottom-color: $bg;transform: translateY(1px);}

      &::before {border-bottom-color: $border-color-light;}
    }

    &.c-left {transform: translateX(-6px);filter: drop-shadow(0 0 2px rgba(0, 0, 0, .1));

      &::after, &::before {top: 4px;left: 100%;}

      &::after {border-bottom-color: $bg;transform: translateX(-1px) rotate(90deg);}

      &::before {border-bottom-color: $border-color-light;transform: rotate(90deg);}
    }

    &.c-right {transform: translateX(6px);filter: drop-shadow(0px 0 2px rgba(0, 0, 0, .1));

      &::after, &::before {top: 4px;left: 0;margin-left: -12px;}

      &::after {border-bottom-color: $bg;transform: translateX(1px) rotate(270deg);}

      &::before {border-bottom-color: $border-color-light;transform: rotate(270deg);}
    }

  }


</style>