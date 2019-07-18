<template>
  <div class="c-tabs"
       :class="[`c-tab-${direction}`]"
  >
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: "Tabs",
    data() {
      return {
        eventBus: new Vue()
      }
    },
    props: {
      direction: {
        type: String,
        default: 'row',
        validator(value) {
          return ['column', 'row'].indexOf(value) !== -1
        }
      },
      selected: {
        type: String
      }
    },
    provide() {
      return {
        eventBus: this.eventBus  // 将eventBus放在data中，为了可以访问到创建的eventBus
      }
    },
    mounted() {
      this.eventBus.$emit('changeSelectedTab', this.selected)  // 向后代传递修改selectedTab的事件，值为用户初始定义的name
      this.eventBus.$on('changeSelectedTab', (selectedName) => {  // 接收到传递的修改事件
        this.$emit('update:selected', selectedName)
      })
    }
  }
</script>

<style scoped lang="scss">
  .c-tabs {
    &.c-tab-column {
      display: flex;
    }
  }
</style>