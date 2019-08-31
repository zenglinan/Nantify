<template>
  <div class="cascader">
    <h3>基本用法</h3>
    <c-card :code="code1">
      <c-cascader :selected.sync="selected" :db="data">
      </c-cascader>
      <template v-slot:descript>
        级联选择器需要引入数据文件, 并以 <span class="md">db</span> 作为 prop 传给组件
        <br>
        你可以选择使用内置的中国省市区数据文件, 在路径 "@src/Cascader/database.js" 下, 也可以使用自己的数据文件
        <br>
        <span class="md">selected</span> 会自动更新记录选中的数据
      </template>
    </c-card>

    <h3>自定义数据</h3>
    <c-card :code="code2">
      <c-cascader :selected.sync="selected2" :db="myData">
      </c-cascader>
      <template v-slot:descript>
        自定义数据需要符合一定的格式:
        <br>
        <span class="md">id</span>： 每一项的id, 不可重复
        <br>
        <span class="md">name</span>： 每一项显示的文字
        <br>
        <span class="md">parent_id</span>： 每一项隶属的父级的 id , 如果是最高级则为 0
        <br>
        <span class="md">isLeap</span>： 是否无下一级
      </template>
    </c-card>

  </div>
</template>

<script>
  import Card from '../../../src/Card/Card'
  import Cascader from '../../../src/Cascader/Cascader'
  import data from '../../../src/Cascader/database'

  export default {
    name: "cascader-demo",
    components: {
      'c-card': Card,
      'c-cascader': Cascader,
    },
    data() {
      return {
        data,
        myData: [
          {"id": 1, "name": "一级1", "parent_id": 0, "isLeap": false},
          {"id": 2, "name": "一级2", "parent_id": 0, "isLeap": false},
          {"id": 3, "name": "一级3", "parent_id": 0, "isLeap": false},
          {"id": 4, "name": "一级4", "parent_id": 0, "isLeap": false},
          {"id": 5, "name": "二级1", "parent_id": 1, "isLeap": false},
          {"id": 6, "name": "二级2", "parent_id": 1, "isLeap": true},
          {"id": 7, "name": "二级3", "parent_id": 2, "isLeap": true},
          {"id": 8, "name": "二级4", "parent_id": 3, "isLeap": true},
          {"id": 9, "name": "三级1", "parent_id": 5, "isLeap": true}],
        selected: [],
        selected2: [],
        code1: `
<c-cascader :selected.sync="selected" :db="data">

<script>
import data from '@src/Cascader/database'
  export default {
    data(){
      return {
        data,
        selected: [],
      }
    }
  }
<\/script>
        `.trim(),
        code2: `
<c-cascader :selected.sync="selected" :db="data"></c-cascader>

<script>
  export default {
    data(){
      return {
        data: [
          {"id": 1, "name": "一级1", "parent_id": 0, "isLeap": false},
          {"id": 2, "name": "一级2", "parent_id": 0, "isLeap": false},
          {"id": 3, "name": "一级3", "parent_id": 0, "isLeap": false},
          {"id": 4, "name": "一级4", "parent_id": 0, "isLeap": false},
          {"id": 5, "name": "二级1", "parent_id": 1, "isLeap": false},
          {"id": 6, "name": "二级2", "parent_id": 1, "isLeap": true},
          {"id": 7, "name": "二级3", "parent_id": 2, "isLeap": true},
          {"id": 8, "name": "二级4", "parent_id": 3, "isLeap": true},
          {"id": 9, "name": "三级1", "parent_id": 5, "isLeap": true}],
        selected: [],
      }
    }
  }
<\/script>
        `
      }
    }
  }
</script>

<style scoped>

</style>