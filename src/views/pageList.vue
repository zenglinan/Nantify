<template>
  <div>
    <h1>List</h1>
    <n-list :list-item="list" :click-view="'n-arrow'"></n-list>
  </div>
</template>
<script>
import List from "../components/list";
export default {
  components: {
    "n-list": List,
  },
  data(){
    return {
      list: ['list1','list2','list3']
    }
  }
};
</script>
