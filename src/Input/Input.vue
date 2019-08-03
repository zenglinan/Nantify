<template>
  <div class="c-input-wrapper" :class="inputClass">
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
    <div v-if="prompt">
      <c-icon icon="i-error"></c-icon>
      <span>{{prompt === 'error' ? errorMessage : passMessage}}</span>
    </div>
  </div>
</template>

<script>
  import Icon from '../component/icon'

  export default {
    name: "coco-input",
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String
      },
      prompt: {
        type: String,
        validator(value) {
          return ['', 'pass', 'error'].indexOf(value) !== -1
        },
        default: ''
      },
      errorMessage: {
        type: String
      },
      passMessage: {
        type: String
      },
      promptPosition: {
        type: String,
        validator(value) {
          return ['right', 'bottom'].indexOf(value) !== -1
        },
        default: 'bottom'
      }
    },
    computed: {
      inputClass() {
        let {prompt, promptPosition} = this
        return {
          [`${prompt}`]: prompt,
          [`prompt-${promptPosition}`]: promptPosition
        }
      }
    },
    components: {
      'c-icon': Icon
    }
  }
</script>

<style lang="scss" scoped>
  @import "../common/scss/base";
  $height: 28px;
  .c-input-wrapper {box-sizing: border-box;font-size: $font-size-s; display: inline-flex; align-items: center;

    &.prompt-right {flex-direction: row;}

    &.prompt-bottom {flex-direction: column;align-items: end;}

    > .c-input {height: $height;border: 1px solid $border-color;border-radius: $border-radius;padding: 0 8px;font-size: inherit;

      &:hover {border-color: $border-color-hover;}

      &:focus {box-shadow: inset 0 1px 1px $box-shadow-color;outline: none;}

      &[disabled] {cursor: not-allowed;border-color: #aaa;color: #aaa;background-color: #fff;}
    }

    &.pass, &.error {
      &.prompt-bottom {
        svg {margin-right: 4px;}
      }

      &.prompt-right {
        :not(:last-child) {margin-right: 4px;}
      }
    }

    &.error {color: $red;

      > input {border-color: $red;

        &:hover {border-color: $red;}

        &:focus {box-shadow: inset 0 0px 2px $red;}
      }

      > svg {fill: $red;}
    }

    &.pass {color: $green;

      > svg {fill: $green;}
    }
  }
</style>