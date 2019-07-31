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
    props: ['accordion'],
    provide() {
      return {
        eventBus: this.eventBus
      }
    }
  }
</script>

<style scoped lang="scss">
  .c-collapse {
    border-top: 1px solid rgb(235, 238, 245);
  }
</style>