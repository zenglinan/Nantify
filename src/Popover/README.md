## Popover
### 实现难点
1. 支持用户自定义事件类型
2. 弹出框不能放在Popover组件内部, 假如父元素设了overflow: hidden, 弹出框可能会看不见
3. 提示框小三角的实现, 小三角形没有box-shadow的解决方案
4. 消除额外的监听器
5. scrollY scrollX
6. 提示框最大宽度,超出换行
7. offsetRight的计算
8. 面向表结构编程