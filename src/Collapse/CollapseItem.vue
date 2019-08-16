<template>
  <div class="c-collapse-item" @click="open">
    <div class="c-collapse-title">
      <span>{{title}}</span>
      <c-icon icon="i-right" class="icon" :class="{open: show}"></c-icon>
    </div>
    <div class="c-collapse-content" v-show="show">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Icon from '../Icon/icon'

  export default {
    name: "CollapseItem",
    data() {
      return {
        show: false
      }
    },
    props: {
      title: {
        type: String,
        default: "标题"
      },
      name: {
        type: [String, Number]
      }
    },
    created() {
      this.eventBus.$on('selecetedChange', (name) => {
        name !== this.name && this.close()
      })
      this.eventBus.$on('selecetedDefault', (name) => {
        name == this.name && (this.show = true)
        this.eventBus.$off('selecetedDefault')
      })
    },
    components: {
      'c-icon': Icon
    },
    methods: {
      open() {
        this.show = !this.show
        this.eventBus.$emit('selecetedChange', this.name) // 更新开启的Collapse的name值
      },
      close() {
        if (this.$parent.accordion !== undefined) {  // 开启了自动关闭
          this.show = false
        } else {
        }
      }
    },
    inject: ['eventBus']
  }
</script>

<style scoped lang="scss">
  @import "../common/scss/base";

  .c-collapse-item {
    cursor: pointer;
    color: $brown;
    padding: 16px 0 22px 0;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    border-bottom: 1px solid $beige;

    .c-collapse-title {
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: $font-size-b;

      &.icon {
        width: .8em;
        height: .8em;
      }

      & span:hover {
        color: $blue-light;
      }
    }

    .c-collapse-content {
      padding: 22px 10px 0 10px;
      font-size: $font-size-m;
      color: $gray;
    }
  }

  .open {
    transform: rotate(90deg);
    transition: all .3s;
  }
</style>