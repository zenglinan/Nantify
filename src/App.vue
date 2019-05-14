<template>
  <div id="wrapper" class="clearfix">
    <h1><a href="#/">Nantify</a></h1>
    <ul class="indexUl">
      <li><a href="#/button">Button</a></li>
      <li><a href="#/nav">Nav</a></li>
      <li><a href="#/list">List</a></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
.clearfix::after {
  display: block;
  content: '';
  clear: both;
}
body,
ul,
ol {
  margin: 0;
  padding: 0;
}
div,
body,
ul,
ol {
  box-sizing: border-box;
}
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
}
#wrapper {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
  a {
    color: rgb(90, 90, 90);
  }
  .indexUl {
    position: absolute;
    left: 0;
    li {
      border: 1px solid rgb(241, 243, 244);
      border-top: none;
    }
    li:nth-child(1) {
      border-top: 1px solid rgb(241, 243, 244);
    }
    li:hover {
      background-color: rgb(245, 245, 245);
      cursor: pointer;
    }
    li a {
      display: block;
      padding: 14px 80px;
    }
  }
}
</style>
