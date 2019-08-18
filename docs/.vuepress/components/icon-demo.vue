<template>
  <div class="demo">
    <h3>基本用法</h3>
    <c-card :code="code1">
      <div class="icon show1">
        <c-icon icon="i-user"></c-icon>
        <c-icon icon="i-phone"></c-icon>
        <c-icon icon="i-eye"></c-icon>
      </div>
      <template v-slot:descript>
        使用 <span class="md">icon</span> 属性, 指定 svg 的 <span class="md">xlink:href</span> 属性。<br>
        你可以使用内置的 icon, 也可以从 <a href="https://www.iconfont.cn/">iconfont.cn</a> 上自己获取 icon。
      </template>
    </c-card>

    <h3>内置图标</h3>
    <div class="icon totalShow">
      <div class="iconItem" v-for="(item,index) in total" :key="index" ref="iconItem">
        <c-icon :icon="item"></c-icon>
        <span>{{item}}</span>
      </div>
    </div>

  </div>
</template>

<script>
  import Icon from '../../../src/Icon/icon'
  import Card from '../../../src/Card/Card'

  export default {
    name: "icon-demo",
    components: {
      'c-icon': Icon,
      'c-card': Card
    },
    data() {
      return {
        total: ['i-phone', 'i-eye-close', 'i-user', 'i-eye', 'i-more', 'i-select', 'i-delete',
          'i-dustbin', 'i-question', 'i-upload', 'i-expand', 'i-pick', 'i-desc', 'i-asc', 'i-close',
          'i-loading', 'i-error', 'i-info', 'i-left', 'i-right', 'i-download', 'i-setting', 'i-paper-plane',
          'i-stop'
        ],
        code1: `
<c-icon icon="i-user"></c-icon>
<c-icon icon="i-phone"></c-icon>
      `.trim()
      }

    }
  }
</script>

<style scoped lang="scss">
  .icon {
    svg {
      width: 1.5em;
      height: 1.5em;
    }

    &.show1 {
      svg {
        margin-right: 20px;
      }
    }

    &.totalShow {
      display: inline-flex;
      flex-wrap: wrap;
      border-top: 1px solid #eaeefb;
      border-left: 1px solid #eaeefb;
      &:hover{
      }

      .iconItem {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        width: 120px;
        height: 120px;
        border-right: 1px solid #eaeefb;
        border-bottom: 1px solid #eaeefb;

        svg {
          width: 2em;
          height: 2em;
        }
        &:hover {
          color: rgb(92,182,255);
          svg{
            fill: rgb(92,182,255);
          }
        }
      }
    }
  }
</style>