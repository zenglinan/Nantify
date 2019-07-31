<template>
  <div class="c-collapse">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: "Collapse",
    data() {
      return {
        eventBus: new Vue({})
      }
    },
    props: {
      accordion: {},
      selected: {
        type: [String]
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    mounted() {
      this.eventBus.$emit('selecetedDefault', this.selected)  // 开启默认
      this.eventBus.$on('selecetedChange', (name) => {  // 监听更改
        this.$emit("update:selected", name)
      })
    }
  }
</script>

<style scoped lang="scss">
  .c-collapse {
    border-top: 1px solid rgb(235, 238, 245);
  }
</style>