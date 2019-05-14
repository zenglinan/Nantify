<template>
  <div class="">
    <h1>Nav</h1>
    <n-nav :list="listItem"></n-nav>
  </div>
</template>
<script>
import Nav from "../components/nav";
export default {
  data() {
    return {
      listItem: [
        { text: "nav-1", active: true },
        { text: "nav-2", active: false },
        { text: "nav-3", active: false },
        { text: "nav-4", active: false }
      ]
    };
  },
  components: {
    "n-nav": Nav
  }
};
</script>
