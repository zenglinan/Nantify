<template>
  <div class="cascader">
    <div class="trigger" :class="{active}" @click="clickTrigger">
      {{getSelectedName}}
    </div>
    <div class="popover" v-show="popoverVisible">
      <cascader-item :city="citys" :selected="selected" @update:selected="updateSelected"></cascader-item>
    </div>
  </div>
</template>

<script>
  import db from './database.js'
  import CascaderItem from './CascaderItem'

  export default {
    name: "Cascader",
    props: {
      selected: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        popoverVisible: false,
        active: false,
        citys: []
      }
    },
    components: {
      'cascader-item': CascaderItem
    },
    methods: {
      updateSelected(newSelected) {  // 更新选中区域的数组selected
        let lastSelectedId = newSelected.length - 1
        let lastSelected = newSelected[lastSelectedId]
        this.getDb(lastSelectedId).then(res => {  // 同时请求当前选中区域的children
          this.$set(lastSelected, 'children', res)
        })
        this.$emit('update:selected', newSelected)  // 向父组件请求更新selected
      },
      getDb(level = 0) {  // 传入当前选中区域的id, 去查找是否有item的parent_id与之相符, 相符的即为下一级区域
        return new Promise((resolve, reject) => {
          let result = db.filter(item => {
            return item.parent_id == level
          })
          result && resolve(result)
        })
      },
      clickTrigger(){
        this.popoverVisible = !this.popoverVisible
        this.active = !this.active
      }
    },
    computed: {
      getSelectedName() {  // 组合selected中的区域, 显示在页面
        let names = this.selected.map((item) => {
          return item.name
        })
        return names.join('/')
      }
    },
    mounted() {  // 初始化citys第一级数据
      this.getDb().then(res => {
        this.citys = res
      })
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
      background: $bg;
      display: inline-flex;
      align-items: center;
      min-width: 180px;
      height: 30px;
      cursor: pointer;
      padding: 0 8px;
      border-radius: 6px;
      box-shadow: 0 0 2px $box-shadow-color;
      border: 1px solid $border-color-light;
      color: $gray-blue;
      &.active {
        border-color: $blue;
        box-shadow: none;
      }
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