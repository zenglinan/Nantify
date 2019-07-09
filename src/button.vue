<template>
  <button class="coco c-button">
    <svg class="icon" v-if="icon" :class="[`icon-${iconPosition}`]">
      <use :xlink:href="`#${icon}`" />
    </svg>
    <div class="content">
      <slot>按钮</slot>
    </div>
  </button>
</template>

<script>
export default {
  props: ["icon", "iconPosition"]
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
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  .icon-undefined {
    order: 1;
    margin-right: .2em;
  }
  .icon-left {
    order: 1;
    margin-right: .2em;
  }
  .icon-right {
    margin-left: .2em;
    order: 3;
  }
}
</style>
