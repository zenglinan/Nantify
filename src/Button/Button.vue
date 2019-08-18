<template>
  <button :class="[ 'coco',
                    'c-button',
                    buttonClass,
                    {[`type-${type}`]: true},
                    {[`size-${size}`]: true}
                  ]"
          @click="$emit('click')">
    <c-icon v-if="loading"
            class="loading"
            icon="i-loading">
    </c-icon>
    <c-icon v-if="icon && !loading"
            :icon=icon>
    </c-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  import Icon from '../Icon/icon'

  export default {
    name: 'coco-button',
    props: {
      icon: {
        type: String
      },
      type: {
        type: String,
        validator(value) {
          return ['success', 'primary', 'info', 'warning', 'danger', 'default'].indexOf(value) !== -1
        },
        default: 'default'
      },
      iconPosition: {
        type: String,
        default: "left",
        validator(value) {
          // return value === 'left' || value === 'right'
          return ['left', 'right'].indexOf(value) !== -1
        }
      },
      loading: {
        type: Boolean,
        default: false,
      },
      size: {
        type: String | Number,
        default: 2,
        validator(value) {
          return value >= 1 && value <= 3
        }
      }
    },
    computed: {
      buttonClass() {
        let {iconPosition, loading} = this
        return [
          {[`icon-${iconPosition}`]: true},
          {nouse: loading}
        ]
      }
    },
    components: {
      'c-icon': Icon
    }
  };

</script>
<style lang="scss" scoped>
  @import "../common/scss/base";

  @mixin setColor($backgroundColor, $color,$borderColor, $hoverColor,$activeColor) {
    background-color: $backgroundColor;
    color: $color;
    border-color: $borderColor;
    &:hover {background-color: $hoverColor;border-color: $hoverColor;color: white}
    &:active {background-color: $activeColor; border-color: $activeColor;}
  }

  @include rotateAnimation;
  .c-button {box-sizing: border-box;vertical-align: top;display: inline-flex;justify-content: center;
    align-items: center;font-size: $font-size;border-radius: 4px;
    border: 1px solid $border-color;outline: none;
    cursor: pointer;min-width: 60px;
    &.size-3 {
      padding: .8em 1.7em;
    }
    &.size-2{
      font-size: $font-size-m;
      padding: .65em 1.1em;
    }
    &.size-1{
      font-size: $font-size-s;
      padding: .45em .65em;
    }
    .content {order: 2;}


    &.icon-left {
      .icon {order: 1;margin-right: .2em;}
    }

    &.icon-right {
      .icon {order: 3;margin-left: .2em;}
    }

    &.nouse {cursor: not-allowed;opacity: .5;

      &:active {background-color: $bg;}
    }

    .loading {animation: rotate 1s linear infinite;}

    &.type-default {
      background: $bg;color: $black;

      &:hover {border-color: $border-color-hover;}

      &:active {background-color: $active-bg;}
    }

    &.type-success {
      @include setColor(#f0f9eb, #67c23a, #c2e7b0, rgb(103, 194, 58), rgb(93, 175, 52));
    }

    &.type-primary {
      @include setColor(rgb(236, 245, 255), #409EFF, rgb(179, 216, 255), rgb(64, 157, 255), rgb(58, 142, 230));
    }

    &.type-info {
      @include setColor(#f4f4f5, #909399, #d3d4d6, rgb(144, 147, 153), rgb(130, 132, 138));
    }

    &.type-warning {
      @include setColor(#fdf6ec, #e6a23c, #f5dab1, rgb(230, 162, 60), rgb(207, 142, 54));
    }

    &.type-danger {
      @include setColor(#fef0f0, #f56c6c, #fbc4c4, rgb(245, 108, 108), rgb(211, 97, 97));
    }
  }


</style>
