<template>
  <div class="c-pager">
    <div class="controller" @click="toLastPage">
      <c-icon icon="i-left"></c-icon>
    </div>
    <span v-for="(pageIndex,index) in processTotal"
          :key="index"
          class="item"
          :class="{active: currentIndex===pageIndex, pageItem: pageIndex!=='...'}"
          @click="toPage(pageIndex)"
    >{{pageIndex}}</span>
    <div class="controller" @click="toNextPage">
      <c-icon icon="i-right"></c-icon>
    </div>
  </div>
</template>

<script>
  import Icon from '../component/icon'

  export default {
    name: "Pager",
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
    data() {
      return {
        currentIndex: this.current
      }
    },
    computed: {
      processTotal() {
        const i = this.currentIndex
        let pages = this.unique([1, this.total,  // 默认显示页码为首页末页 + 当前页 + 当前页的前2页后2页
          i,
          i - 1, i - 2,
          i + 1, i + 2]
            .filter(n => (n >= 1 && n <= this.total))  // 过滤掉越界的索引
            .sort((a, b) => a - b))  // 排序
        pages = pages.reduce((pre, currentIndex, index) => {  // 在合适的位置加...
          pre.push(currentIndex)
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
        this.currentIndex = index
        this.emitPageChange()
      },
      toLastPage() {
        this.currentIndex > 1 && this.currentIndex--
        this.emitPageChange()
      },
      toNextPage() {
        this.currentIndex < this.total && this.currentIndex++
        this.emitPageChange()
      },
      emitPageChange(){
        this.$emit('onChange', this.currentIndex)
      }
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