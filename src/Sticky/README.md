## Sticky
### 关键点
1. 当fixed定位后, sticky 脱离文档流, 页面高度发生变化, 可能会造成bug<br>
解决思路: 在外层套多一个div, fixed脱离文档流后获取自身高度, 写死外层div的高度

2. fixed 前要获取宽度, 设为fixed后的宽度, 以及left