<template>
  <div class="c-toast" :class="{[`toast-${position}`]: true}">
    <slot></slot>
    <div class="c-close" @click="close()"></div>
  </div>
</template>

<script>
  export default {
    name: "coco-toast",
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      closeDelay: {
        type: [String, Number],
        default: 2
      },
      callback: {
        type: Function
      },
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'middle', 'bottom'].indexOf(value) !== -1;
        }
      }
    },
    mounted() {
      if (this.autoClose === true) {
        setTimeout(() => {
          this.close()
        }, this.closeDelay * 1000)
      }
    },
    methods: {
      close() {
        this.$el.remove()
        this.$destroy()
        this.callback && this.callback()
      }
    }
  }
</script>

<style scoped lang="scss">
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }

  ;
  @keyframes slideUp {
    0% {
      transform: translate(-50%, 100%);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @keyframes slideDown {
    0% {
      transform: translate(-50%, -100%);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  $font-size: 14px;
  $toast-min-height: 42px;
  $toast-bg: rgba(0, 0, 0, 0.65);
  $border-radius: 4px;
  $animation-time: .3s;
  .c-toast {
    animation: fadeIn $animation-time;
    font-size: $font-size; height: $toast-min-height; line-height: 1.8;
    position: fixed; left: 50%; transform: translateX(-50%); display: flex;
    color: white;align-items: center;background: $toast-bg;border-radius: $border-radius;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);padding: 0 60px;z-index: 100;

    &.toast-top {top: 10px; animation: slideDown $animation-time;}

    &.toast-middle {top: 50%; transform: translate(-50%, -50%)}

    &.toast-bottom {bottom: 10px; animation: slideUp $animation-time;}

    & .c-close {cursor: pointer;background-position: center;background-image: url("../../asset/close.png");
      background-size: cover;content: '';height: 10px;display: block;position: absolute;
      right: 3px;top: 3px;width: 10px;}
  }
</style>