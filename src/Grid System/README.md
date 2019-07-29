## Col Row
### span指定宽度
将整个row分为24块, 每个col组件接收传入span的prop值, 通过span值生成类名,<br>
比如span-1,span2等24个类名, 对应不同宽度(用scss的循环做)
### offset
同span设置宽度的原理
### gutter的实现(难点)
使用场景: 在row上指定gutter="10", 需要相邻col之间有10px的间距<br>
由于offset用margin实现了, 为了不避免offset和gutter冲突, 通过给col设置padding实现<br>
**实现难点:**<br>
padding是在col组件里设置的, 不是用户设置的,<br>
col并不知道自己需要左padding或是右padding, 所以只能左右都设<br>
但对于第一个并不需要左padding, 最后一个并不需要右padding, <br>
所以需要给row加上负margin<br>
margin的值为-gutter/2, **注意: 不能给c-row设置width, 否则负margin会失效**
