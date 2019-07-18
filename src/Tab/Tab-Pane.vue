<template>
  <div class="c-tab-pane" v-show="active">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Tab-pane",
    props: {
      name: {
        type: String
      }
    },
    data(){
      return {
        active: false
      }
    },
    inject: ['eventBus'],
    mounted() {
      this.eventBus.$on('changeSelectedTab', (selectedName) => {
        this.active = (selectedName === this.name)
      })
    }
  }
</script>

<style scoped lang="scss">

</style>