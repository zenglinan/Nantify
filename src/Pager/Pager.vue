<template>
  <div class="c-pager">
    <div class="controller" @click="toPage(current - 1)">
      <c-icon icon="i-left"></c-icon>
    </div>
    <span v-for="(pageIndex,index) in processTotal"
          :key="index"
          class="item"
          :class="{active: current===pageIndex, pageItem: pageIndex!=='...'}"
          @click="toPage(pageIndex)"
    >{{pageIndex}}</span>
    <div class="controller" @click="toPage(current + 1)">
      <c-icon icon="i-right"></c-icon>
    </div>
  </div>
</template>

<script>
  import Icon from '../Icon/icon'

  export default {
    name: "coco-pager",
    props: {
      total: {
        type: Number,
        required: true
      },
      current: {
        type: Number,
        default: 1
      },
      hideIfOnePage: {  // 只有一页的时候是否隐藏分页器
        type: Boolean,
        default: true
      }
    },
    computed: {
      processTotal() {
        const i = this.current
        let pages = this.unique(  // 默认显示页码为首页末页 + 当前页 + 当前页的前2页后2页
            [1, this.total, i, i - 1, i - 2, i + 1, i + 2]
                .filter(n => (n >= 1 && n <= this.total))  // 过滤掉越界的索引
                .sort((a, b) => a - b))  // 排序

        pages = pages.reduce((pre, current, index) => {  // 在合适的位置加...
          pre.push(current)
          pages[index + 1] && pages[index + 1] - pages[index] > 1 && pre.push("...")
          return pre
        }, [])
        return pages
      }
    },
    methods: {
      unique(arr) {  // 去重函数
        let tmp = {}
        arr.forEach(item => {
          tmp[item] = true
        })
        return Object.keys(tmp).map(key => +key)  // 对象的键为字符串形式, 要变为数字
      },
      toPage(index) {
        index >= 1 && index <= this.total && this.$emit('update:current', index)
      },
    },
    components: {
      'c-icon': Icon
    }
  }
</script>

<style scoped lang="scss">
  @import "../common/scss/base";

  .c-pager {
    display: inline-flex;

    .item {margin-right: 10px;cursor: default;color: $black-deep;user-select: none;}

    .pageItem, .controller {display: inline;border: 1px solid $border-color-light;
      padding: 3px 9px;border-radius: 5px;cursor: pointer;

      &:hover {color: $blue;border-color: $blue;}

      &.active {border-color: $blue;color: $blue;}

    }

    .controller {padding: 3px 5px;

      &:first-of-type {margin-right: 10px;}

      &:last-of-type {margin-left: 10px;}

      svg {fill: $black-deep;}
    }

    .pageItem:last-of-type {margin-right: 0;}
  }
</style>