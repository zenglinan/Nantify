<template>
  <div>
    <ul class="n-list">
      <li
        v-for="(item, index) in listItem"
        :key="index"
      >
        <span class="n-list-text">{{ item }}</span>
        <component :is="clickView"></component>
      </li>
    </ul>
  </div>
</template>
<script>
import Button from "./button";
import Arrow from './arrow'
export default {
  props: {
    clickView:{
      type: String,
      default: "n-arrow"
    },
    listItem: {
      type: Array,
      default() {
        return ['list-1','list-2','list-3'];
      }
    }
  },
  components: {
    "n-button": Button,
    'n-arrow': Arrow
  },
  data() {
    return {
      "n-view": "Button"
    };
  }
};
</script>
<style lang="scss">
.clearfix::after {
  display: block;
  clear: both;
  content: "";
}
.n-list {
  width: 320px;
  margin: 0 auto;
  li {
    padding: 12px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(241, 243, 244);
    .n-list-text {
      float: left;
    }
    .n-list-click {
      float: right;
    }
  }
}
</style>


