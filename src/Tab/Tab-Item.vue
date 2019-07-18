<template>
  <div class="c-tab-item" :class="{active}" @click="changeSelectedTab">
    <c-icon v-if="icon" :icon=icon></c-icon>
    <slot></slot>
  </div>
</template>

<script>
  import Icon from '../component/icon'

  export default {
    name: "coco-tab",
    props: {
      icon: {
        type: String
      },
      name: {
        type: String
      }
    },
    data() {
      return {
        active: false
      }
    },
    components: {
      'c-icon': Icon
    },
    inject: ['eventBus'],  // 订阅eventBus
    mounted() {
      this.eventBus.$on('update:selectedTab', (selectedName) => {  // 接收到传递的修改事件
        this.active = (selectedName === this.name)
      })
    },
    methods: {
      changeSelectedTab() {  // 点击tab时传递事件，传递点击的tab的name
        this.eventBus.$emit('update:selectedTab', this.name)
      }
    }
  }
</script>

<style scoped lang="scss">
  .c-tab-item {
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 32px;
    padding-right: 1em;
    &.active {
      border-bottom: 1px solid blue;
    }
  }
</style>