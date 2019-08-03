## 省市区级联组件
### 总结
1. 如何确定数据的深度层级(传入的数据不一定是省市区三层, 也可能更多)<br>
**递归组件**: 
```asp
v-for循环组件自身, 循环的组件自身又会去进行v-for循环, 只要每次循环将更深一层的数据传过去即可
<template>
  <div class="cascaderItem">
    // 展示每层的name
    {{city.name}}
    // 以下为递归过程
    <cascader-item v-for="cityItem in city.children" :city="cityItem"></cascader-item>
  </div>
</template>
```