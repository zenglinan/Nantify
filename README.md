# Coco Ui
### Button
**相关属性:**<br>
```icon```: svg的xlink:href的值<br>
```icon-position```: icon的位置,有效值:```left```,```right```,默认为```left```
```loading```: 为```true```时有loading动画,为```false```时无<br>
通过```@click```给按钮绑定事件<br>
添加```nouse``类名时，按钮被禁用
```
<c-button icon="i-setting"
          icon-position="right"
          :loading='ifLoading'
          @click="ifLoading = true">
  自定义文字
</c-button>
```

### Button-Group
**用来包裹Button组件, 形成一个并排按钮组**<br>
```
<c-button-group>
  <c-button icon="i-left">上一页</c-button>
  <c-button>更多</c-button>
  <c-button icon="i-right" icon-position="right">下一页</c-button>
</c-button-group>
```
