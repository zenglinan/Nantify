<template>
  <div class="cascaderItem">
    <div class="left">
      <div class="cityItem" v-for="itemLeft in city" @click="onClickCity(itemLeft)">
        <div class="name">{{itemLeft.name}}</div>
        <c-icon icon="i-right" class="icon" v-if="!itemLeft.isLeap"></c-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-item :city="rightItems" :selected="selected" :level="level+1" @update:selected="updateSelected">
      </cascader-item>
    </div>
  </div>
</template>

<script>
  import Icon from '../Icon/icon'

  export default {
    name: "CascaderItem",
    props: {
      city: {
        type: Array
      },
      selected: {
        type: Array,
        default: () => []
      },
      level: {  // 级数
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        leftSelected: null,
      }
    },
    computed: {
      rightItems() {  // 确认当前选中的区域是否有下一级区域
        let currentSelected = this.selected[this.level]
        if (currentSelected && currentSelected.children) {
          return currentSelected.children
        } else {
          return null
        }
      }
    },
    methods: {
      updateSelected(newSelected) {  // 向父组件请求更新selected
        this.$emit('update:selected', newSelected)
      },
      onClickCity(item) {
        let copy = JSON.parse(JSON.stringify(this.selected))
        copy[this.level] = item
        copy.splice(this.level + 1)  // eg: 点击山西时, 将之前选中的内蒙古的市-区的selected数据删除
        this.updateSelected(copy)
      }
    },
    components:{
      'c-icon': Icon
    }
  }
</script>

<style scoped lang="scss">
  @import "../common/scss/base";
  @import "../common/scss/scrollbar";

  .cascaderItem {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 180px;
    overflow: auto;
    color: $gray-blue;

    .left {
      box-sizing: border-box;
      height: 100%;
      overflow: auto;
      padding-top: 5px;
    }

    .right {
      height: 100%;
      border-left: 1px solid $border-color-light;
    }

    .cityItem {
      padding: 12px 10px 12px 20px;
      display: flex;
      align-items: center;
      cursor: pointer;
      white-space: nowrap;
      .icon {
        width: .8em;
        height: .8em;
      }
      &:hover {
        background: $beige;
      }

      .name {
        width: 120px;
      }

      .icon {
        width: .8em;
        height: .8em;
      }
    }
  }
</style>