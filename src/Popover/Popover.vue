<template>
  <div class="c-popover">
    <div class="c-content" v-show=show ref="content" @click.stop>
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
          return ['click', 'focus', 'hover'].indexOf(value) !== -1
        }
      }
    },
    data() {
      return {
        show: false
      }
    },
    mounted() {
      this.listenToClick()
      this.setPopover()
    },
    methods: {
      setPopover() { // 将popover放置为body的子元素, 并且定位
        // 将元素移出
        let contentDom = this.$el.removeChild(this.$refs.content)
        // 作为body的子元素
        document.body.appendChild(contentDom)
        const {top, left} = this.$refs.trigger.getBoundingClientRect()
        contentDom.style.left = `${left + window.scrollX}px`
        contentDom.style.top = `${top - 6 + window.scrollY}px`
      },
      listenToClick() {
        let eventHandle = (e) => {
          console.log(1);
          this.show = false;
          document.removeEventListener('click', eventHandle)
        }
        this.$el.querySelector('.c-trigger').addEventListener('click', () => {
          this.show = !this.show
          document.removeEventListener('click', eventHandle)
          document.addEventListener('click', eventHandle)   // 再重新监听
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .c-popover {
    display: inline-flex;
    flex-direction: column;
    position: relative;
  }

  .c-content {
    box-sizing: border-box;
    padding: 18px 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    border: 1px solid #ebeef5;
    position: absolute;
    white-space: nowrap;
    transform: translateY(-100%);
    color: #606266;
    font-size: 14px;
    border-radius: 4px;
  }

  .c-content::after {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    left: 10px;
    height: 0;
    width: 0;
    border: 6px solid transparent;
    border-top-color: #ffffff;
    transform: translateY(-1px);

  }

  .c-content::before {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    left: 10px;
    height: 0;
    width: 0;
    border: 6px solid transparent;
    border-top-color: #ebeef5;

  }
</style>