## 默认布局
上中下布局
```
<c-wrapper style="margin-bottom: 30px;">
  <c-header></c-header>
  <c-content></c-content>
  <c-footer></c-footer>
</c-wrapper>
```
上中(slider加content)
```asp
<c-wrapper style="margin-bottom: 30px;">
  <c-header></c-header>
  <c-wrapper>
    <c-slider style="width: 100px"></c-slider>
    <c-content style="width: 200px"></c-content>
  </c-wrapper>
  <c-footer></c-footer>
</c-wrapper>
```
左(slider)右(header content footer)
```asp
<c-wrapper style="margin-bottom: 30px;">
  <c-slider style="width: 200px"></c-slider>
  <c-wrapper>
    <c-header></c-header>
    <c-content></c-content>
    <c-footer></c-footer>
  </c-wrapper>
</c-wrapper>
```
只需要判断wrapper组件里是否有slider组件, 有就把flex-direction改为row方向