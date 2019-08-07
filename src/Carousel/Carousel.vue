<template>
  <div class="c-carousel">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "coco-carousel",
    data() {
      return {
        timer: null,
        visibleIndex: 0
      }
    },
    props: {
      delay: {
        type: String | Number
      }
    },
    mounted() {
      const len = this.$children.length
      this.timer = setInterval(() => {
        this.$children[this.visibleIndex].visible = false
        this.visibleIndex++ && (this.visibleIndex = this.visibleIndex % len)
        this.$children[this.visibleIndex].visible = true
        console.log(this.visibleIndex);
      }, this.delay)
    }
  }
</script>

<style scoped lang="scss">

  .c-carousel {
    display: inline-flex;
    position: relative;
    width: 200px;
    height: 150px;
    border: 1px solid red;
  }

  .highZindex {
    z-index: 10
  }

  .lowerZindex {
    z-index: 0
  }
</style>