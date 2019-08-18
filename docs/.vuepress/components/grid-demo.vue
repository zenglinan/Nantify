<template>
  <div class="demo">
    <h3>基本用法</h3>
    <c-card :code="code1">
      <div class="grid">
        <c-row class="c-row">
          <c-col span="24" style="height: 30px;"></c-col>
        </c-row>
        <c-row class="c-row">
          <c-col span="12" style="height: 30px;"></c-col>
          <c-col span="12" style="height: 30px;"></c-col>
        </c-row>
        <c-row class="c-row">
          <c-col span="8" style="height: 30px;"></c-col>
          <c-col span="8" style="height: 30px;"></c-col>
          <c-col span="8" style="height: 30px;"></c-col>
        </c-row>
        <c-row class="c-row">
          <c-col span="4" style="height: 30px;"></c-col>
          <c-col span="4" style="height: 30px;"></c-col>
          <c-col span="4" style="height: 30px;"></c-col>
          <c-col span="4" style="height: 30px;"></c-col>
          <c-col span="4" style="height: 30px;"></c-col>
          <c-col span="4" style="height: 30px;"></c-col>
        </c-row>
      </div>
      <template v-slot:descript>
        使用 c-row 组件包裹 c-col 组件, 配合 <span class="md">span</span> 指定 c-col 的格数。<br>
        一个 c-row 可以容纳 24 格。
        请注意: 不要直接设置 c-row 的宽度, 否则可能失效, 如果需要的话, 请在外面嵌套div。
      </template>
    </c-card>

    <h3>网格偏移</h3>
    <c-card :code="code2">
      <div class="grid">
        <c-row class="c-row">
          <c-col span="10" style="height: 30px;"></c-col>
          <c-col span="12" offset="2" style="height: 30px;"></c-col>
        </c-row>
        <c-row class="c-row">
          <c-col span="7" offset="1" style="height: 30px;"></c-col>
          <c-col span="7" offset="1" style="height: 30px;"></c-col>
          <c-col span="7" offset="1" style="height: 30px;"></c-col>
        </c-row>
        <c-row class="c-row">
          <c-col span="6" offset="6" style="height: 30px;"></c-col>
          <c-col span="6" offset="6" style="height: 30px;"></c-col>
        </c-row>
        <c-row class="c-row">
          <c-col span="12" offset="8" style="height: 30px;"></c-col>
        </c-row>
      </div>
      <template v-slot:descript>
        使用 <span class="md">offset</span> 指定 c-col 的偏移格数。<br>
        <span class="md">offset</span> 的格数算入 24 格总格数里
      </template>
    </c-card>

    <h3>分栏间隔</h3>
    <c-card :code="code3">
      <div class="grid">
        <c-row class="c-row gutter" gutter="10">
          <c-col span="12" style="height: 30px;">
            <div></div>
          </c-col>
          <c-col span="12" style="height: 30px;">
            <div></div>
          </c-col>
        </c-row>
        <c-row class="c-row gutter" gutter="10">
          <c-col span="8" style="height: 30px;">
            <div></div>
          </c-col>
          <c-col span="8" style="height: 30px;">
            <div></div>
          </c-col>
          <c-col span="8" style="height: 30px;" offset="1">
            <div></div>
          </c-col>
        </c-row>
        <c-row class="c-row gutter" gutter="10">
          <c-col span="6" offset="6" style="height: 30px;">
            <div></div>
          </c-col>
          <c-col span="6" offset="6" style="height: 30px;">
            <div></div>
          </c-col>
        </c-row>
        <c-row class="c-row gutter" gutter="10">
          <c-col span="12" offset="8" style="height: 30px;">
            <div></div>
          </c-col>
        </c-row>
      </div>
      <template v-slot:descript>
        使用 <span class="md">gutter</span> 指定 c-col 之间的间隔, gutter 单位为 px。<br>
        <span class="md">gutter</span> 会通过设置 padding 来调整间隔<br>
        <span class="md">gutter</span> 与 <span class="md">offset</span> 可以叠加使用。
      </template>
    </c-card>
  </div>
</template>

<script>
  import Row from '../../../src/Grid System/Row'
  import Col from '../../../src/Grid System/Col'
  import Card from '../../../src/Card/Card'

  export default {
    name: "grid",
    data() {
      return {
        code1: `
<c-row>
  <c-col span="24" style="height: 30px;"></c-col>
</c-row>
<c-row>
  <c-col span="12" style="height: 30px;"></c-col>
  <c-col span="12" style="height: 30px;"></c-col>
</c-row>
<c-row>
  <c-col span="8" style="height: 30px;"></c-col>
  <c-col span="8" style="height: 30px;"></c-col>
  <c-col span="8" style="height: 30px;"></c-col>
</c-row>
<c-row>
  <c-col span="4" style="height: 30px;"></c-col>
  <c-col span="4" style="height: 30px;"></c-col>
  <c-col span="4" style="height: 30px;"></c-col>
  <c-col span="4" style="height: 30px;"></c-col>
  <c-col span="4" style="height: 30px;"></c-col>
  <c-col span="4" style="height: 30px;"></c-col>
</c-row>
        `.trim(),
        code2: `
<c-row class="c-row">
  <c-col span="10" style="height: 30px;"></c-col>
  <c-col span="12" offset="2" style="height: 30px;"></c-col>
</c-row>
<c-row class="c-row">
  <c-col span="7" offset="1" style="height: 30px;"></c-col>
  <c-col span="7" offset="1" style="height: 30px;"></c-col>
  <c-col span="7" offset="1" style="height: 30px;"></c-col>
</c-row>
<c-row class="c-row">
  <c-col span="6" offset="6" style="height: 30px;"></c-col>
  <c-col span="6" offset="6" style="height: 30px;"></c-col>
</c-row>
<c-row class="c-row">
  <c-col span="12" offset="8" style="height: 30px;"></c-col>
</c-row>
        `.trim(),
        code3: `
<c-row gutter="10">
  <c-col span="12" style="height: 30px;"><div></div></c-col>
  <c-col span="12" style="height: 30px;"><div></div></c-col>
</c-row>
<c-row gutter="10">
  <c-col span="8" style="height: 30px;"><div></div></c-col>
  <c-col span="8" style="height: 30px;"><div></div></c-col>
  <c-col span="8" style="height: 30px;"><div></div></c-col>
</c-row gutter="10">
<c-row>
  <c-col span="6" offset="6" style="height: 30px;"><div></div></c-col>
  <c-col span="6" offset="6" style="height: 30px;"><div></div></c-col>
</c-row>
<c-row gutter="10">
  <c-col span="12" offset="8" style="height: 30px;"><div></div></c-col>
</c-row>
        `.trim()
      }
    },
    components: {
      'c-row': Row,
      'c-col': Col,
      'c-card': Card
    }
  }
</script>

<style scoped lang="scss">
  .c-row {
    margin-bottom: 20px;

    > * {
      border-radius: 6px;
    }

    > *:nth-child(even) {
      background-color: rgb(229, 233, 242);
    }

    > *:nth-child(odd) {
      background-color: rgb(211, 220, 230);
    }

    &.gutter {
      > * {
        background: none;

        > * {
          border-radius: 6px;
          width: 100%;
          background-color: rgb(211, 220, 230);
        }
      }
    }
  }


</style>