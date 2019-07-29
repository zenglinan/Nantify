<template>
  <div class="c-col"
       :class="colClass"
       :style="colStyle"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "coco-col",
    props: {
      span: {},
      offset: {
        type: [Number, String]
      },
    },
    data() {
      return {
        gutter: 0
      }
    },
    computed: {
      colClass() {
        let {span, offset} = this
        return [
          [ span && `col-${span}`,
            offset && `offset-${offset}`,
          ]
        ]
      },
      colStyle() {
        let {gutter} = this
        return {
          paddingLeft: `${gutter / 2}px`,
          paddingRight: `${gutter / 2}px`
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  $span: col-;
  $offset: offset-;
  .c-col {
    display: flex;
    padding: 0 10px;
    @for $n from 1 through 24 {
      &.#{$span}#{$n} {
        width: ($n/24)*100%;
      }
    }
    @for $n from 1 through 24 { // 循环的变量
      &.#{$offset}#{$n} { // #{}是scss的插值表达式
        margin-left: ($n/24)*100%; // 循环写入
      }
    }
  }

</style>