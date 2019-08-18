---
title: '快速上手'
---

## 快速上手
在使用前, 我们假设您已经了解[Vue](https://cn.vuejs.org/v2/guide/)、[Vue组件](https://cn.vuejs.org/v2/guide/components-registration.html)、[Vue单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)等相关知识。

### 基本配置
在入口的 js 文件中引入
```asp
<template>
  <div id="app">
    <c-button></c-button>
  </div>
</template>

<script>
import {Button} from 'coco-test'
export default {
  name: 'app',
  components: {
    'c-button': Button
  }
}
</script>
```
### 前置条件
使用coco-ui时，需要使用border-box盒模型，否则会影响样式。
```
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```