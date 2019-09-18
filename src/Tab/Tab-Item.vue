<template>
  <div class="c-tab-item" :class="{active,disabled}" @click="changeSelectedTab">
    <c-icon v-if="icon" :icon=icon></c-icon>
    <slot></slot>
  </div>
</template>

<script>
  import Icon from '../Icon/icon'

  export default {
    name: "coco-tab",
    props: {
      icon: {
        type: String
      },
      name: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
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
      this.eventBus.$on('changeSelectedTab', (selectedName) => {  // 接收到传递的修改事件
        this.active = (selectedName === this.name)
      })
    },
    methods: {
      changeSelectedTab() {  // 点击tab时传递事件，传递点击的tab的name
        !this.disabled && this.eventBus.$emit('changeSelectedTab', this.name)
      }
    }
  }
</script>

<style scoped lang="scss">
  .c-tab-column {  // 纵向
    .c-tab-item {
      padding: 1em .5em;
      &:nth-child(1){
        padding-top: .5em;
      }
    }
  }

  .c-tab-item {box-sizing: border-box;display: inline-flex;align-items: center;justify-content: center;
    min-height: 32px;padding: 0 14px;position: relative;cursor: pointer;font-size: 14px;

    .icon {padding-right: 5px;}

    &.disabled {cursor: not-allowed;color: rgb(170, 170, 170);}
  }
</style>