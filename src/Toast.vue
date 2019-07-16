<template>
  <div class="c-toast">
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
      close(){
        this.$el.remove()
        this.$destroy()
      }
    }
  }
</script>

<style scoped lang="scss">
  $font-size: 14px;
  $toast-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.65);
  $border-radius: 4px;
  .c-toast {
    font-size: $font-size; height: $toast-height; line-height: 1.8;
    position: fixed; top: 10px; left: 50%; transform: translateX(-50%); display: flex;
    color: white;
    align-items: center;
    background: $toast-bg;
    border-radius: $border-radius;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);
    padding: 0 60px;

    & .c-close {
      cursor: pointer;
      background-position: center;
      background-image: url("../asset/close.png");
      background-size: cover;
      content: '';
      height: 10px;
      display: block;
      position: absolute;
      right: 3px;
      top: 3px;
      width: 10px;
    }
  }
</style>