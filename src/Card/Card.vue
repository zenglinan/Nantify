<template>
  <div class="c-card">
    <div class="main">
      <div class="show">
        <slot></slot>
      </div>
      <div class="descript">
        <slot name="descript"></slot>
      </div>
      <transition name="code"
                  v-on:before-enter="beforeEnter"
                  v-on:enter="enter"
                  v-on:leave="leave">
        <div class="c-code" v-if="codeVisiable">
          <pre v-highlightjs><code v-text="code" class="html">{{code}}</code></pre>
        </div>
      </transition>
    </div>
    <footer class="codeTrigger" ref="footer" @click="codeVisiable = !codeVisiable">
      <c-icon :icon="codeVisiable ? 'i-pick': 'i-expand'"></c-icon>
      <span>{{codeVisiable ? "隐藏代码": "显示代码"}}</span>
    </footer>
  </div>
</template>

<script>
  import Icon from '../../src/Icon/icon'
  import Vue from 'vue'
  import VueHighlightJS from 'vue-highlightjs'
  import 'highlight.js/styles/atom-one-dark.css'

  Vue.use(VueHighlightJS)

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
    },
    methods: {
      beforeEnter(el) {
        el.style.height = '0';
        el.style.opacity = '0';
      },
      enter(el, done) {
        el.offsetWidth;
        el.style.height = el.children[0].scrollHeight + 'px';
        el.style.opacity = '1';
        el.style.transition = "all .3s ease"
        done()
      },
      leave(el) {
        el.style.height = '0';
        el.style.opacity = '0';
        el.style.transition = "all .3s ease"
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../src/common/scss/base";

  .my-transition {transition: 3s height ease-in-out}

  .c-card {
    border-radius: 4px;
    box-shadow: 0 0 1px rgba(0, 0, 0, .2);
    border: 1px solid #ebebeb;
    position: relative;

    .main {
      padding: 24px;
      border-bottom: 1px solid #ebebeb;
      .c-code {
        pre {
          background-color: rgb(250, 250, 250);

          code {
            color: rgb(131, 131, 131);
          }
        }

      }

      .descript {
        border: 1px solid #ebebeb;
        padding: 18px;
        border-radius: 4px;
        box-shadow: 0 0 1px rgba(0, 0, 0, .2);
        margin-top: 20px;
        font-size: $font-size;
        color: #5e6d82;

        .md {
          color: #5e6d82;
          padding: 3px 6px;
          border-radius: 4px;
          display: inline-flex;
          font-size: $font-size-s;
          font-family: Menlo, Monaco, Consolas, Courier, monospace;;
          background-color: rgb(230, 239, 251);
        }
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
        color: rgb(64, 158, 255);

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


  /*.code-enter-to, .code-leave{*/
  /*  height: 100%;*/
  /*}*/
</style>