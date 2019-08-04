<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover" v-show="popoverVisible">
      <cascader-item :city="citys" :selected="selected" @update:selected="updateSelected"></cascader-item>
    </div>
  </div>
</template>

<script>
  import CascaderItem from './CascaderItem'

  export default {
    name: "Cascader",
    props: {
      citys: {
        type: Array,
      },
      selected: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        popoverVisible: false,
      }
    },
    components: {
      'cascader-item': CascaderItem
    },
    methods: {
      updateSelected(newSelected) {
        this.$emit('update:selected', newSelected)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../common/scss/base";

  .cascader {
    display: inline-block;
    position: relative;

    .trigger {
      background: white;
      display: inline-flex;
      align-items: center;

    }

    .popover {
      font-size: $font-size;
      position: absolute; top: 100%; left: 0; background: $bg; display: flex;
      margin-top: 12px;z-index: 1;
      filter: drop-shadow(0 0 2px $box-shadow-color);
      position: relative;

      &::after, &::before {
        width: 0;
        height: 0;
        content: '';
        display: block;
        border: 8px solid transparent;
        border-top: none;
        position: absolute;
        top: 0;
        left: 5px;
        transform: translateY(-100%);
      }

      &::after {
        border-bottom-color: $bg;
        margin-top: 1px;
      }
    }

  }
</style>