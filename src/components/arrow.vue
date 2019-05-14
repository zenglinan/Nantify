<template>
  <span class="n-arrow"></span>
</template>
<style lang="scss">
.n-arrow {
  cursor: pointer;
  display: block;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-left-color: rgb(90,90,90);
  position: relative;
}
.n-arrow::after {
  display: block;
  border: 10px solid transparent;
  border-left-color: white;
  content: '';
  transform: translate(-12px,-10px);
}
</style>
