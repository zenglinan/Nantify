<template>
  <div class="c-pager">
    <span v-for="(item,index) in processTotal" :key="index">{{item}}</span>
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
    computed: {
      processTotal() {
        let pages = this.unique([1, this.total,
          this.current,
          this.current - 1, this.current - 2,
          this.current + 1, this.current + 2]
            .sort((a, b) => a - b))
        return pages
      }
    },
    methods: {
      unique(arr) {  // 去重函数
        let tmp = {}
        arr.forEach(item => {
          tmp[item] = true
        })
        console.log(Object.keys(tmp).map(key=>+key));
        return Object.keys(tmp).map(key => +key)  // 对象的键为字符串形式, 要变为数字
      }
    }
  }
</script>

<style scoped>

</style>