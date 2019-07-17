<template>
  <div class="c-row"
       :style="rowStyle"
  >
    <slot></slot>
  </div>
</template>

<script>
  import Col from './Col'

  export default {
    name: "coco-row",
    props: {
      gutter: {
        type: [String, Number]
      }
    },
    computed: {
      rowStyle() {
        let {gutter} = this
        return {
          marginLeft: `-${gutter / 2}px`,
          marginRight: `-${gutter / 2}px`
        }
      }
    },
    components: {
      'c-col': Col
    },
    mounted() {
      this.$children.forEach((vm) => {
        vm.gutter = this.gutter;
      })
    }
  }
</script>

<style scoped>
  .c-row {
    display: flex;
  }
</style>