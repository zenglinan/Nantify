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
    <div v-if="prompt" class="prompt">
      <c-icon icon="i-error"></c-icon>
      <span>{{prompt === 'error' ? errorMessage : passMessage}}</span>
    </div>
  </div>
</template>

<script>
  import Icon from '../Icon/icon'

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
      },
      size: {
        type: [String, Number],
        default: 2,
        validator(value){
          return value >=1 && value <=3
        }
      }
    },
    computed: {
      inputClass() {
        let {prompt, promptPosition, size} = this
        return {
          [`${prompt}`]: true,
          [`prompt-${promptPosition}`]: true,
          [`size-${size}`]: true
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

  $height-b: 36px;
  $height-m: 32px;
  $height-s: 30px;
  .c-input-wrapper {box-sizing: border-box; display: inline-flex; align-items: center;

    &.size-3{ > input{height: $height-b; font-size: 12px;} }
    &.size-2{ > input{height: $height-m; font-size: 11px;} }
    &.size-1{ > input{height: $height-s; font-size: 11px;} }

    &.prompt-right {flex-direction: row;}

    &.prompt-bottom {flex-direction: column;align-items: end;}

    > .c-input {border: 1px solid #c0c4cc;transition: all .2s;cursor: pointer;border-radius: $border-radius;padding: 0 8px;font-size: inherit;

      &:hover {border-color: $border-color;}

      &:focus {border-color: #409eff;outline: none;}

      &[disabled] {cursor: not-allowed;border-color: #aaa;color: #aaa;background-color: rgb(245,245,245);}
    }

    .prompt {
      font-size: 12px;
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

        &:focus {border-color: $red;box-shadow: inset 0 0 1px $red;}
      }

      > svg {fill: $red;}
    }

    &.pass {color: $green;

      > svg {fill: $green;}
    }
  }
</style>