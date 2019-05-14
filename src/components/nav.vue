<template>
  <div class="n-nav">
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
      >
        <a
          :class="[item.active ? 'active' : '' ]"
          @click="navClick(index)"
        >{{item['text']}}</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      acquired:true,
      default() {
        return [
          { text: "nav-one", active: true },
          { text: "nav-two", active: false },
          { text: "nav-three", active: false },
          { text: "nav-four", active: false }
        ];
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    navClick(clickIndex) {
      this.list.forEach(item => {
        item.active = false;
      });
      this.list[clickIndex].active = true;
    }
  },
  created(){
    console.log(this.$props);
  }
};
</script>
<style lang="scss">
.n-nav {
  ul {
    display: flex;
    justify-content: center;
    li {
      a {
        transition: all 0.3s;
        cursor: pointer;
        display: inline-block;
        padding: 5px 8px;
        position: relative;
      }
      a::after {
        content: "";
        height: 3px;
        border-radius: 5px;
        width: 0;
        left: 0;
        position: absolute;
        top: 100%;
        background-color: rgb(248, 119, 123);
        transition: all 0.2s;
      }
      a.active::after {
        width: 100%;
      }
    }
  }
}
</style>

