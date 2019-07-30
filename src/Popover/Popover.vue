<template>
  <div class="c-popover">
    <div class="c-content" v-show=show ref="content" :class="{[`c-${direction}`]: true}" @click.stop>
      <slot name="content"></slot>
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
      }
    },
    data() {
      return {
        show: false,
      }
    },
    computed:{
      triggerButton(){
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
            contentDom.style.right = `${document.body.clientWidth - left + window.scrollX}px`;
            contentDom.style.top = `${top + window.scrollY}px`;
            break;
          case 'right':
            contentDom.style.left = `${left + window.scrollX + width}px`;
            contentDom.style.top = `${top + window.scrollY}px`;
            break;
        }
      },
      listenToClick() {
        let eventHandle = (e) => {
          this.show = false;
          document.removeEventListener('click', eventHandle)
        }
        this.triggerButton.addEventListener('click', () => {
          this.show = !this.show
          document.removeEventListener('click', eventHandle)
          document.addEventListener('click', eventHandle)   // 再重新监听
        })
      },
      listenToHover(){
        this.triggerButton.addEventListener('mouseenter', () => {
          this.show = true
        })
        this.triggerButton.addEventListener('mouseleave', () => {
          this.show = false
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .c-popover {display: inline-flex;flex-direction: column;position: relative;}

  .c-content {box-sizing: border-box;padding: 10px 24px;background: white;
    border: 1px solid #ebeef5;position: absolute;color: #606266;font-size: 14px;
    border-radius: 5px;max-width: 20em;word-break: break-all;

    &::after, &::before {content: '';display: block;position: absolute;
      height: 0;width: 0;border: 6px solid transparent;}


    &.c-top {margin-top: -6px;transform: translateY(-100%);
      filter: drop-shadow(0 2px 2px rgba(0, 0, 0, .1));

      &::after, &::before {top: 100%;left: 5px;border-bottom: none;}

      &::after {border-top-color: #ffffff;transform: translateY(-1px);}

      &::before {border-top-color: #ebeef5;}
    }

    &.c-bottom {margin-top: 6px;filter: drop-shadow(0 0 2px rgba(0, 0, 0, .1));

      &::after, &::before {bottom: 100%;left: 5px;border-top: none;}

      &::after {border-bottom-color: #ffffff;transform: translateY(1px);}

      &::before {border-bottom-color: #ebeef5;}
    }

    &.c-left {transform: translateX(-6px);filter: drop-shadow(0 0 2px rgba(0, 0, 0, .1));

      &::after, &::before {top: 4px;left: 100%;border-right: none;}

      &::after {border-bottom-color: #ffffff;transform: translateX(-1px) rotate(90deg);}

      &::before {border-bottom-color: #ebeef5;transform: rotate(90deg);}
    }

    &.c-right {transform: translateX(6px);filter: drop-shadow(0px 0 2px rgba(0, 0, 0, .1));

      &::after, &::before {top: 4px;left: 0;margin-left: -12px;border-left: none;}

      &::after {border-bottom-color: #ffffff;transform: translateX(1px) rotate(270deg);}

      &::before {border-bottom-color: #ebeef5;transform: rotate(270deg);}
    }

  }


</style>