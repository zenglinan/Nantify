<template>
  <button class="coco c-button">1</button>
</template>

<script>
export default {
  
};
</script>

<style lang="scss">
.c-button {
  padding: var(--button-padding);
  font-size: var(--font-size);
  border-radius: var(--button-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  color: var(--color);
  outline: none;
  cursor: pointer;
  min-width: 60px;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
}
</style>
