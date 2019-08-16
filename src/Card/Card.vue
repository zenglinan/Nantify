<template>
  <div class="c-card">
    <div class="main">
      <slot></slot>
      <transition name="code">
        <div class="c-code" v-if="codeVisiable" style="height: 300px;">
          <pre><code v-text="code">{{code}}</code></pre>
        </div>
      </transition>
    </div>
    <footer class="codeTrigger" ref="footer" @click="codeVisiable = !codeVisiable">
      <c-icon icon="i-expand"></c-icon>
      <span>{{codeVisiable ? "隐藏代码": "显示代码"}}</span>
    </footer>
  </div>
</template>

<script>
  import Icon from '../../src/Icon/icon'

  export default {
    name: "coco-card",
    props: {
      code: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        codeVisiable: false,
        footerTextVisiable: false
      }
    },
    components: {
      'c-icon': Icon
    },
    mounted() {
      const footer = this.$refs.footer
      footer.addEventListener('mouseenter', () => {
        this.footerTextVisiable = true
      })
      footer.addEventListener('mouseleave', () => {
        this.footerTextVisiable = false
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../src/common/scss/base";

  .c-card {
    border-radius: 4px;
    box-shadow: 0 0 1px rgba(0, 0, 0, .2);
    border: 1px solid #ebebeb;
    position: relative;

    .main {
      padding: 24px;
      border-bottom: 1px solid #ebebeb;
    }

    .c-code {
      height: 300px;
      code {
        color: red;
      }
    }

    footer {
      font-size: $font-size;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding: 12px 0;
      cursor: pointer;
      transition: all .3s;

      &:hover {
        background-color: rgb(249, 250, 252);

        svg {
          fill: rgb(64, 158, 255);
        }
      }

      svg {
        transition: all .3s;
        width: 1.2em;
        height: 1.2em;
        fill: #ccc;
        margin-right: 5px;
      }
    }
  }
  .code-enter-active, .code-leave-active {
    transition: all .5s;
  }
  .code-enter, .code-leave-to{
    opacity: 0;
    height: 0;
  }
  /*.code-enter-to, .code-leave{*/
  /*  height: 100%;*/
  /*}*/
</style>