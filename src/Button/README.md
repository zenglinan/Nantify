## 实现思路: 
### 自定义icon
内部封装svg, 接收一个用户自定义的icon属性作为x:link:href
### icon图标的位置
通过传入的icon-position决定组件的class, 对应不同的order(flex布局实现)
### loading动画
给loading图标绑定v-if="loading"即可, <br>
通过切换传给Button的loading值来决定是否显示loading动画
### 禁用
通过传入的nouse属性决定对应的class样式
### 原生事件支持
子组件内触发事件时, 向父组件emit事件
### 消除ButtonGroup的重叠边框
组合在一起的按钮会有相邻的border, 需要消除一半<br>
但由于hover之后border会有样式, 所以不能去除一条边框<br>
解决方案: 将除了第一个的按钮全部```margin-left: -1px```, <br>\
这时候两条border已经重叠在一起了, 只需要hover时改变按钮的z-index即可