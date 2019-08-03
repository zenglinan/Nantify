<template>
  <div class="cascaderItem">
    {{city.name}}
    <cascader-item v-for="cityItem in city.children" :city="cityItem"></cascader-item>
  </div>
</template>

<script>
  export default {
    name: "CascaderItem",
    props: {
      city: {
        type: Object
      }
    }
  }
</script>

<style scoped>
.cascaderItem {
  border: 1px solid #4a90e2;
  padding: 10px;
}
</style>