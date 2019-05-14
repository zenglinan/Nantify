<template>
  <div class="pageButtonWrapper">
    <h2>Button</h2>
    <n-button
      :msg="msg"
      @btnClick="myBtnClickEvent"
    >
      <template v-slot:icon>
        <img
          src="../assets/logo.png"
          alt="buttonIcon"
        >
      </template>
    </n-button>
  </div>
</template>
<script>
import Button from "../components/button";
export default {
  components: {
    "n-button": Button
  },
  methods: {
    myBtnClickEvent() {
      alert(this.msg);
    }
  },
  data() {
    return {
      msg: "Back"
    };
  }
};
</script>
<style lang="scss">
  [alt="buttonIcon"] {
    width: 14px;
    padding-right: 5px;
    :focus{
      outline: none;
      border: none;
    }
  }
</style>

