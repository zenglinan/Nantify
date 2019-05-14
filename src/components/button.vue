<template>
  <button
    class="nanButton"
    @click="$emit('btnClick')"
  >
    <slot name="icon"></slot>
    {{ msg }}
  </button>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      default: "确认"
    }
  },
  methods: {}
};
</script>
<style lang="scss">
.nanButton {
  font-size: 14px;
  outline: none;
  border: 1px solid rgb(220, 223, 230);
  cursor: pointer;
  border-radius: 5px;
  background-color: white;
  padding: 8px 14px;
  transition: all 0.2s;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}
.nanButton:hover {
  color: rgb(64, 169, 255);
  background-color: rgb(236, 245, 255);
  border: 1px solid rgb(198, 226, 255);
}
</style>

