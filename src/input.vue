<template>
  <div class="c-input-wrapper" :class="{'error': errorPrompt, [`error-${errorPosition}`]: errorPosition}">
    <input type="text"
           class="c-input"
           :value=value
           :disabled=disabled
           :placeholder="placeholder"
           @change="$emit('change',$event.target.value)"
           @blur="$emit('blur',$event.target.value)"
           @input="$emit('input',$event.target.value)"
           @focus="$emit('focus',$event.target.value)"
    >
    <div v-if="errorPrompt">
      <c-icon icon="i-error"></c-icon>
      <span>{{errorMessage}}</span>
    </div>
  </div>
</template>

<script>
  import Icon from './component/icon'

  export default {
    name: "coco-input",
    props: {
      value: {
        type: String,
      },
      disabled: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
      },
      errorPrompt: {  // 是否加入错误提示
        type: Boolean,
        default: false
      },
      errorMessage: {
        type: String
      },
      errorPosition: {
        type: String,
        validator(value) {
          return ['right', 'bottom'].indexOf(value) !== -1
        },
        default: 'bottom'
      }
    },
    components: {
      'c-icon': Icon
    },
  }
</script>

<style lang="scss" scoped>
  $height: 28px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 12px;
  $box-shadow-color: rgba(0, 0, 0, 0.3);
  $border-radius: 4px;
  $red: #F1453D;
  .c-input-wrapper {box-sizing: border-box;font-size: $font-size; display: inline-flex; align-items: center;

    &.error-right {flex-direction: row;}

    &.error-bottom {flex-direction: column;align-items: end;}

    > .c-input {height: $height;border: 1px solid $border-color;border-radius: $border-radius;padding: 0 8px;font-size: inherit;

      &:hover {border-color: $border-color-hover;}

      &:focus {box-shadow: inset 0 1px 1px $box-shadow-color;outline: none;}

      &[disabled] {cursor: not-allowed;border-color: #aaa;color: #aaa;background-color: #fff;}
    }

    &.error {color: $red;

      :not(:last-child) {margin-right: 4px;}

      > input {border-color: $red;

        &:hover {border-color: $red;}

        &:focus {box-shadow: inset 0 0px 1px $red;}
      }

      > svg {fill: $red;}
    }
  }
</style>