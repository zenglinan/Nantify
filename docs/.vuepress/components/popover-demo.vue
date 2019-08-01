<template>
  <div class="popover">
    <h3>基础用法</h3>
    <c-popover trigger="click" direction="left">
      <template v-slot:content>
        这是一个提示
      </template>
      <c-button>Left</c-button>
    </c-popover>
    <c-popover trigger="click" direction="bottom">
      <template v-slot:content>
        这是一个提示
      </template>
      <c-button>Bottom</c-button>
    </c-popover>
    <c-popover trigger="click" direction="top">
      <template v-slot:content>
        这是一个提示
      </template>
      <c-button>Top</c-button>
    </c-popover>

    <c-popover trigger="click" direction="right">
      <template v-slot:content>
        这是一个提示
      </template>
      <c-button>Right</c-button>
    </c-popover>
    <h3>触发方式</h3>
    <c-popover trigger="hover" direction="top" delay="300">
      <template v-slot:content>
        hover触发, 延时300ms关闭
      </template>
      <c-button>Hover触发</c-button>
    </c-popover>
    <c-popover trigger="click" direction="top" delay="1000">
      <template v-slot:content>
        click触发
      </template>
      <c-button>Click触发</c-button>
    </c-popover>
    <h3>提供关闭api</h3>
    <c-popover trigger="click" direction="top" delay="1000">
      <template v-slot:content="slotProps">
        <p>提供关闭api, 内部支持HTML标签</p>
        <c-button @click="slotProps.close()">关闭</c-button>
      </template>
      <c-button>Click触发</c-button>
    </c-popover>
  </div>
</template>

<script>
  import Popover from '../../../src/Popover/Popover'
  import Button from '../../../src/Button/Button'
  export default {
    name: "popover-demo",
    components:{
      'c-popover': Popover,
      'c-button': Button
    }
  }
</script>

<style scoped>

</style>