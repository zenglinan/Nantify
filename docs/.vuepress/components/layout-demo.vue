<template>
  <div class="demo">
    <h3>常用布局</h3>
    <c-card :code="code1">
      <div class="layout">
        <!-- 上中下布局 -->
        <c-wrapper style="margin-bottom: 30px;">
          <c-header class="c-header" style="height: 60px;">Header</c-header>
          <c-content class="c-content" style="height: 200px;">Content</c-content>
          <c-footer class="c-footer" style="height: 60px;">Footer</c-footer>
        </c-wrapper>

        <!-- 上中下布局, 带侧边栏 -->
        <c-wrapper style="margin-bottom: 30px;">
          <c-header class="c-header" style="height: 60px;">Header</c-header>
          <c-wrapper>
            <c-sidebar class="c-sidebar" style="width: 100px; height: 200px">Slider</c-sidebar>
            <c-content class="c-content" style="width: 200px; height: 200px">Content</c-content>
          </c-wrapper>
          <c-footer class="c-footer" style="height: 60px;">Footer</c-footer>
        </c-wrapper>

        <!-- 左右布局 -->
        <c-wrapper style="margin-bottom: 30px;">
          <c-sidebar class="c-sidebar" style="width: 160px; height:320px">Slider</c-sidebar>
          <c-wrapper>
            <c-header class="c-header" style="height: 60px;">Header</c-header>
            <c-content class="c-content" style="height: 200px;">Content</c-content>
            <c-footer class="c-footer" style="height: 60px;">Footer</c-footer>
          </c-wrapper>
        </c-wrapper>
      </div>
      <template v-slot:descript>
        使用 <span class="md">c-wrapper</span>、<span class="md">c-header</span>、<span class="md">c-content</span>、<span
              class="md">c-footer</span>、<span class="md">c-sidebar</span> 组建默认布局。
        要注意, 除了 <span class="md">c-sidebar</span> , 其他组件的宽度会自适应
      </template>
    </c-card>
  </div>

</template>

<script>
  import Wrapper from '../../../src/Layout/Wrapper'
  import Content from '../../../src/Layout/Content'
  import Footer from '../../../src/Layout/Footer'
  import Header from '../../../src/Layout/Header'
  import Sidebar from '../../../src/Layout/Sidebar'
  import Card from '../../../src/Card/Card'

  export default {
    name: "layout-demo",
    components: {
      'c-wrapper': Wrapper,
      'c-content': Content,
      'c-footer': Footer,
      'c-header': Header,
      'c-sidebar': Sidebar,
      'c-card': Card
    },
    data() {
      return {
        code1: `
<!-- 上中下布局 -->
<c-wrapper style="margin-bottom: 30px;">
  <c-header style="height: 60px;">Header</c-header>
  <c-content style="height: 200px;">Content</c-content>
  <c-footer style="height: 60px;">Footer</c-footer>
</c-wrapper>

<!-- 上中下布局, 带侧边栏 -->
<c-wrapper style="margin-bottom: 30px;">
  <c-header style="height: 60px;">Header</c-header>
  <c-wrapper>
    <c-sidebar style="width: 100px; height: 200px">Slider</c-sidebar>
    <c-content style="width: 200px; height: 200px">Content</c-content>
  </c-wrapper>
  <c-footer style="height: 60px;">Footer</c-footer>
</c-wrapper>

<!-- 左右布局 -->
<c-wrapper style="margin-bottom: 30px;">
  <c-sidebar style="width: 160px; height:320px">Slider</c-sidebar>
  <c-wrapper>
    <c-header style="height: 60px;">Header</c-header>
    <c-content style="height: 200px;">Content</c-content>
    <c-footer style="height: 60px;">Footer</c-footer>
  </c-wrapper>
</c-wrapper>
            `.trim()
      }
    }
    }
</script>

<style scoped>

  .c-header {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(179, 192, 209);
  }

  .c-content {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(233, 238, 243);
  }

  .c-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(179, 192, 209);
  }

  .c-sidebar {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(211, 220, 230);
  }


</style>