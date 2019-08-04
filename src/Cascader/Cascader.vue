<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      {{getSelectedName}}
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
    },
    computed: {
      getSelectedName() {
        let names = this.selected.map((item) => {
          return item.name
        })
        return names.join('/')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../common/scss/base";

  .cascader {
    display: inline-flex;
    position: relative;

    .trigger {
      font-size: $font-size;
      background: white;
      display: inline-flex;
      align-items: center;
      min-width: 160px;
      height: 30px;
      padding: 0 8px;
      border-radius: 6px;
      box-shadow: 0 0 2px rgba(0, 0, 0, .2);
      border: 1px solid $border-color-light;
      color: $gray-blue;
    }

    .popover {
      font-size: $font-size;
      position: absolute; top: 100%; left: 0; background: $bg; display: flex;
      margin-top: 12px;z-index: 1;
      filter: drop-shadow(0 0 2px $box-shadow-color);

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