# Coco Ui
### Button
**相关属性:**<br>
```icon```: svg的xlink:href的值<br>
```icon-position```: icon的位置,有效值:```left```,```right```,默认为```left```
```loading```: 为```true```时有loading动画,为```false```时无
```
<c-button icon="i-setting" icon-position="right" :loading='ifLoading' @click="ifLoading = true">
  自定义文字
</c-button>
```