<template>
  <div class="grid">
    <p>不要直接设置c-row的宽度，否则可能失效, 如果需要的话, 请在外面嵌套div</p>
    <p>8 : 8 : 8</p>
    <c-row>
      <c-col span="8">
        <div style="border: 1px solid #999; width: 100%">8</div>
      </c-col>
      <c-col span="8">
        <div style="border: 1px solid #999; width: 100%">8</div>
      </c-col>
      <c-col span="8">
        <div style="border: 1px solid #999; width: 100%">8</div>
      </c-col>
    </c-row>
    <p>10 : 12 带偏移</p>
    <c-row>
      <c-col span="10">
        <div style="border: 1px solid #999; width: 100%">10</div>
      </c-col>
      <c-col span="12" offset="2">
        <div style="border: 1px solid #999; width: 100%">12</div>
      </c-col>
    </c-row>
    <p>8 : 6 : 10 带gutter</p>
    <c-row gutter="10">
      <c-col span="8">
        <div style="border: 1px solid #999; width: 100%">8</div>
      </c-col>
      <c-col span="6" >
        <div style="border: 1px solid #999; width: 100%">6</div>
      </c-col>
      <c-col span="10" >
        <div style="border: 1px solid #999; width: 100%">10</div>
      </c-col>
    </c-row>
  </div>
</template>

<script>
  import Row from '../../../src/Grid System/Row'
  import Col from '../../../src/Grid System/Col'

  export default {
    name: "grid",
    components: {
      'c-row': Row,
      'c-col': Col
    }
  }
</script>

<style scoped>

</style>