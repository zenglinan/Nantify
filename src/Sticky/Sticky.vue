<template>
  <div class="c-sticky" ref="sticky" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "coco-sticky",
    props: {
    },
    data() {
      return {
        sticky: false
      }
    },
    computed: {
      classes() {
        return {
          sticky: this.sticky
        }
      }
    },
    mounted() {
      let top = this.top(this.$refs.sticky)
      window.addEventListener('scroll', this.throttle(() => {
        if(window.scrollY > top){
          this.sticky = true
        }else{
          this.sticky = false
        }

      }, 20))
    },
    methods: {
      top(el) {  // 获取文档顶部的高度
        return el.getBoundingClientRect().top + window.scrollY
      },
      throttle(fn, timeout) {  // 节流函数
        let timer = null
        return function () {
          let args = arguments
          if (!timer) {
            timer = setTimeout(() => {
              fn.apply(this, args)
              timer = null
            }, timeout)
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .c-sticky {
    border: 1px solid red;

    &.sticky {
      position: fixed;
      width: 100%;
      left: 0;
      top: 0;
    }
  }
</style>