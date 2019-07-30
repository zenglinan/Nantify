## Popover
### 难点坑点总结
#### 1. 支持用户自定义事件类型
判断传给组件的prop('click' 或 'hover'), 决定开启的监听事件类型(click事件 / mouseenter & mouseleave), <br>
没法用v:on动态开启, 只能用js
#### 2. 弹出框不能放在Popover组件内部, 假如父元素高度不够而且设了overflow: hidden, 弹出框可能会看不见
在组件mounted后，将弹出框dom元素(content)移出组件的dom元素内部，并插入到body中
#### 3. 提示框小三角的实现(CSS), 小三角形没法设置box-shadow的解决方案
小箭头的画法：<br>
利用after，before伪元素画两个三角形，设置不同背景色，将after偏移，形成小箭头
```asp
.content{
    &::after, &::before {top: 100%;left: 5px;border-bottom: none;}

      &::after {border-top-color: #ffffff;transform: translateY(-1px);}

      &::before {border-top-color: #ebeef5;}
}

```
画出来的小箭头没有box-shadow：<br>
给整个弹出框设置filter滤镜, 注意要加背景色, 不然弹出框里面的文字也会加上滤镜
```
.content{
    background: #fff;
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, .1))
}
```
#### 4. 消除额外的监听器
每次开启新的监听器时先消除原有的监听器, 节省性能
#### 5. scrollY scrollX
利用dom.getBoundingClientRect得到的left, top坐标是相对于视口的,<br>
考虑上有滚动条的情况, 如果需要得到相对于页面的top, left<br>
需要加上滚动条滚动的距离```window.scrollY, window.scrollX```
#### 6. 提示框宽度和换行问题
给提示框设定最大宽度, 不能太长<br>
换行: word-break: break-all
#### 7. offsetRight的计算
计算元素的offsetRight, 没有直接的api<br>
只需用```页面宽度 - offsetLeft - offsetWidth```
#### 8. 给用户提供关闭提示框的api
在组件内部用slot-scope将关闭弹出框的方法传出给用户, <br>
```asp
<slot name='content' :close=close></slot>
```
用户可以接收后自己调用
```asp
<template v-slot:content="slotProps">
    <c-button @click="slotProps.close()">关闭</c-button>
</template>
```
#### 9. 手动派发mouseenter事件
mouseenter等事件不像click()一样, 他们没法手动触发, 所以我们需要手动生成和派发
```
const event = new Event('mouseenter')
dom.dispatchEvent(event)
```