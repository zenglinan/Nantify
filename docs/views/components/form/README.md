---
title: 'Form 表单'
sidebarDepth: 2
---

## Input 输入框
<ClientOnly>
  <input-demo/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| value | 输入框的值 | String | - | - |
| disabled | 是否禁用 | Boolean | true, false | false |
| placeholder | placeholder | String | - | - |
| prompt | 提示信息的类型 | String | 'pass', 'error' | - |
| errorMessage | 错误提示信息 | String | - | - |
| passMessage | 成功提示信息 | String | - | - |
| promptPosition | 提示信息出现位置 | String | 'right', 'bottom' | 'bottom' |
| size | 输入框大小 | String, Number | 3, 2, 1 | 2 |
</ClientOnly>

<br><br><br><br>

## Cascader 级联选择器
<ClientOnly>
  <cascader-demo/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| selected | 选中项的数组 | Array | - | - |
| db | 级联数据 | Array | - | - |
</ClientOnly>
