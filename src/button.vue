<template>
  <button :class="[ 'coco','c-button',
                    {'`icon-${iconPosition}`': true},
                    {nouse: loading},
                  ]"
          @click="$emit('click')">
    <c-icon class="loading" icon="i-loading" v-show="loading"></c-icon>
    <c-icon :icon=icon v-if="icon && !loading"></c-icon>
    <div class="content">
      <slot>按钮</slot>
    </div>
  </button>
</template>

<script>
  import Icon from './component/icon'

  export default {
    props: {
      icon: {},
      iconPosition: {
        default: "left"
      },
      loading: {
        default: false
      },
    },
    components: {
      'c-icon': Icon
    }
  };

</script>
<style lang="scss">
  .c-button {
    vertical-align: top;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: var(--button-padding);
    font-size: var(--font-size);
    border-radius: var(--button-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    color: var(--color);
    outline: none;
    cursor: pointer;
    min-width: 60px;

    .content {
      order: 2;
    }

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background-color: var(--button-active-bg);
    }

    &.icon-left {
      .icon {
        order: 1;
        margin-right: .2em;
      }
    }

    &.icon-right {
      .icon {
        order: 3;
        margin-left: .2em;
      }
    }

    &.nouse {
      cursor: not-allowed;
      color: #aaaaaa;

      &:active {
        background-color: white;
      }
    }

    .loading {
      animation: rotate 1s linear infinite;
    }

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }


</style>
