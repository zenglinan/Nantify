<template>
  <div class="c-pager">
    <span v-for="(pageIndex,index) in processTotal"
          :key="index"
          class="item"
          :class="{active: currentIndex===pageIndex, pageItem: pageIndex!=='...'}"
          @click="toPage(pageIndex)"
    >{{pageIndex}}</span>
  </div>
</template>

<script>
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
    data(){
      return {
        currentIndex: this.current
      }
    },
    computed: {
      processTotal() {
        let pages = this.unique([1, this.total,
          this.currentIndex,
          this.currentIndex - 1, this.currentIndex - 2,
          this.currentIndex + 1, this.currentIndex + 2]
            .sort((a, b) => a - b))  // 默认显示页码为首页末页 + 当前页 + 当前页的前2页后2页
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
        console.log(Object.keys(tmp).map(key => +key));
        return Object.keys(tmp).map(key => +key)  // 对象的键为字符串形式, 要变为数字
      },
      toPage(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../common/scss/base";

  .c-pager {
    .item {
      margin-right: 10px;
      cursor: default;
      color: $black-deep;

      &.pageItem {
        border: 1px solid $border-color-light;
        padding: 3px 9px;
        border-radius: 5px;
        cursor: pointer;

        &:last-child {
          margin-right: 0;
        }

        &:hover {
          color: $blue;
          border-color: $blue;
        }

        &.active {
          border-color: $blue;
          color: $blue;
        }
      }
    }

  }
</style>