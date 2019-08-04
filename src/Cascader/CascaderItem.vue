<template>
  <div class="cascaderItem">
    <div class="left">
      <div class="cityItem" v-for="itemLeft in city" @click="leftSelected=itemLeft">
        <div class="name">{{itemLeft.name}}</div>
        <c-icon v-if="itemLeft.children" icon="i-right"></c-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-item :city="rightItems">
      </cascader-item>
    </div>
  </div>
</template>

<script>
  import Icon from '../component/icon'
  export default {
    name: "CascaderItem",
    props: {
      city: {
        type: Array
      }
    },
    data() {
      return {
        leftSelected: null
      }
    },
    computed: {
      rightItems() {
        if (this.leftSelected && this.leftSelected.children) {
          return this.leftSelected.children
        } else {
          return null
        }
      }
    },
    components:{
      'c-icon': Icon
    }
  }
</script>

<style scoped lang="scss">
  @import "../common/scss/base";
  .cascaderItem {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 160px;
    overflow: auto;
    color: $gray-blue;
    .left {
      box-sizing: border-box;
      height: 100%;
      overflow: auto;
      padding-top: 5px;
    }

    .right {
      height: 100%;
      border-left: 1px solid $border-color-light;
    }

    .cityItem {
      padding: 12px 10px 12px 20px;
      display: flex;
      align-items: center;
      cursor: pointer;
      white-space: nowrap;
      &:hover {
        background: $beige;
      }
      .name{
        width: 120px;
      }
      .icon {
        width: .8em;
        height: .8em;
      }
    }
  }
</style>