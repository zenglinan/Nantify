---
title: 'Basic 基础'
sidebarDepth: 2
---
## Icon 图标
<ClientOnly>
  <icon-demo/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| icon | 图标名称 | String | 内置 icon 名 | - |
</ClientOnly>

<br><br><br><br>

## Button 按钮
<ClientOnly>
  <button-demo/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| type | 按钮类型 | String | success, primary, danger, warning, default | default |
| icon | 图标名称 | String | 内置 icon 名 | - |
| loading | 加载状态 | Boolean | false | - |
| size | 按钮尺寸 | String, Number | 1, 2, 3 | 2 |

</ClientOnly>

<br><br><br><br>

## Layout 布局
<ClientOnly>
  <layout-demo/>
</ClientOnly>

<br><br><br><br>

## Grid 栅格系统
<ClientOnly>
  <grid-demo/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| span | 单元格所占格数 | String | 1 ~ 24 | - |
| offset | 单元格左偏移格数 | String, Number | 0 ~ 23 | - |
| gutter | 单元格间的间距, 单位为 'px' | String, Number | - | - |
</ClientOnly>