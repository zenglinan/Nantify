# Coco Ui
[![Build Status](https://travis-ci.org/zenglinan/Coco-UI.svg?branch=master)](https://travis-ci.org/zenglinan/Coco-UI)
<br>

Coco, 一套基于Vue.js开发的UI框架
## 安装
使用npm
```
npm install coco-test
```
使用yarn
```
yarn add coco-test
```
## 使用
引入全局样式变量
```
html {
    --font-size: 12px;
    --button-padding: .5em 1em;
    --button-bg: white;
    --button-radius: 4px;
    --color: #333;
    --border-color: #999;
    --button-active-bg: #eee;
    --border-color-hover: #666;
    --button-width: 60px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```
## 文档
### Button
**相关属性:**<br>
```icon[String]```: svg的xlink:href的值<br>
```icon-position[String]```: icon的位置,( 'left' [default] | 'right' )
```loading[Boolean]```: 是否需要loading动画<br>
```nouse```: 禁用按钮的class类名
内置了几个icon<br>

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

### Input
**相关属性:**<br>
```value[String]```<br>
```disabled[Boolean]```<br>
```placeholder[String]```<br>
```prompt[String]```: 提示类型, ( 'pass' [default] | 'error' )<br>
```errorMessage[String]```: 错误提示信息<br>
```passMessage[String]```: 成功提示信息<br>
```promptPosition[String]```: 显示提示信息的位置, ( 'bottom' [default] | 'right' )<br>
支持原生事件, 支持 v-model

### 栅格系统
#### Row
```Row```为行组件, 包裹块组件<br>
**相关属性:**<br>
```gutter```: 指定Col块组件间的间距(水平方向), 与```offset```可叠加<br>

#### Col
```Col```为格组件,一个行组件分为24格<br>
**相关属性:**<br>
```span[String | Number]```: 指定格数<br>
```offset[String | Number]```: 指定该该格组件左偏移的格数<br>

### 默认布局
包含以下组件: <br>
#### Wrapper
用作包裹器, 包裹其余组件

#### Header
头部信息组件, 默认宽度自适应, 默认高度为0

#### Footer
尾部信息组件, 默认宽度自适应, 默认高度为0

#### Content
主体内容信息组件, 默认宽度自适应, 默认高度为0

#### Slider
边栏组件, 需设置宽度, 默认高度为0

### Toast
**相关属性:**<br>
```autoClose[Boolean]```: 是否自动关闭Toast提示框<br>
```position[String]```: Toast提示框的位置, ('top'[default] | 'middle' | 'bottom')<br>
```closeDelay[String | Boolean]```: 指定多少秒后自动关闭Toast, 需先设置```autoClose```为true<br>
```callback[Function]```: 指定关闭Toast后触发的回调函数

### Tab
**相关属性:**<br>
```direction[String]```: Tab的方向('column' | 'row')<br>
```name```: 需要给Tab和对应的内容指定相同的name<br>
```selected```:默认选中的Tab的name值<br>
```disabled```: 禁用指定的Tab
```asp
<c-tabs :selected.sync="selectedTab" direction="column">
  <c-tab-nav>
    <c-tab active name="setting" icon="i-setting">Setting</c-tab>
    <c-tab name="tab2">Tab2</c-tab>
    <c-tab name="girl" disabled>美女</c-tab>
  </c-tab-nav>

  <c-tab-content>
    <c-tab-pane name="setting">
      <div>content1</div>
    </c-tab-pane>
    <c-tab-pane name="tab2">
      <div>content2</div>
    </c-tab-pane>
    <c-tab-pane name="girl">
      <div>骗你的</div>
    </c-tab-pane>
  </c-tab-content>
</c-tabs>
```
### Popover
**相关属性**:<br>
```trigger[String]```: 指定触发方式('click' | 'hover')<br>
```direction[String]```: 指定Pooover弹出框的位置('top' | 'bottom' | 'left' | 'right')<br>
```delay[String, Number]```: 指定hover方式下移出时延迟几ms关闭Popover弹出框<br>
支持在Popover提示框中加html
```asp
<c-popover trigger="hover" direction="bottom" delay="300">
  <template v-slot:content="slotProps">
    <p>我里面可以加html标签,还可以加关闭按钮</p>
    <c-button @click="slotProps.close()">关闭</c-button>
  </template>
    <c-button>Delay 300ms</c-button>
</c-popover>
```
