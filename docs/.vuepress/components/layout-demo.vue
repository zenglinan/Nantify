<template>
  <div class="layout">
    <!--    上中下结构-->
    <c-wrapper style="margin-bottom: 30px;">
      <c-header>Header</c-header>
      <c-content>Content</c-content>
      <c-footer>Footer</c-footer>
    </c-wrapper>
    <!--    中左slider-->
    <c-wrapper style="margin-bottom: 30px;">
      <c-header>Header</c-header>
      <c-wrapper>
        <c-slider style="width: 100px">Slider</c-slider>
        <c-content style="width: 200px">Content</c-content>
      </c-wrapper>
      <c-footer>Footer</c-footer>
    </c-wrapper>
    <!--    侧边栏-->
    <c-wrapper style="margin-bottom: 30px;">
      <c-slider style="width: 200px">Slider</c-slider>
      <c-wrapper>
        <c-header>Header</c-header>
        <c-content>Content</c-content>
        <c-footer>Footer</c-footer>
      </c-wrapper>
    </c-wrapper>
  </div>
</template>

<script>
  import Wrapper from '../../../src/Layout/Wrapper'
  import Content from '../../../src/Layout/Content'
  import Footer from '../../../src/Layout/Footer'
  import Header from '../../../src/Layout/Header'
  import Slider from '../../../src/Layout/Slider'

  export default {
    name: "layout-demo",
    components: {
      'c-wrapper': Wrapper,
      'c-content': Content,
      'c-footer': Footer,
      'c-header': Header,
      'c-slider': Slider
    }
  }
</script>

<style scoped>
  .layout .c-wrapper div {
    border-radius: 4px;
    height: 110px;
  }

  .c-header {
    background-color: rgba(153, 169, 191, .9);
  }

  .c-content {
    background-color: rgba(153, 169, 191, .6);
  }

  .c-slider {
    background-color: rgba(153, 169, 191, .4);
  }

  .c-footer {
    background-color: rgba(153, 169, 191, .2);
  }
</style>