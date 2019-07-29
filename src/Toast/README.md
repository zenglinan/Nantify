## Toast
这个组件不同于其他组件, 提示组件不是直接写死在页面的, <br>
而是要通过类似```this.$toast()```这种形式去触发的<br>
所以将Toast做成一个插件, 通过在app.js use插件, 注入所有组件<br>
实现思路: 在Toast组件写好样式和接收的prop, 在当调用this.$toast方法时, 手动挂载一个Toast组件
