<template>
  <div class="tabs">
    <h3>基础用法</h3>
    <c-tabs :selectedItems.sync="selectedItems" direction="row">
      <c-tab-nav>
        <c-tab name="setting" icon="i-setting">用户设置</c-tab>
        <c-tab name="tab2">权限管理</c-tab>
      </c-tab-nav>

      <c-tab-content>
        <c-tab-pane name="setting">
          <div>用户设置</div>
        </c-tab-pane>
        <c-tab-pane name="tab2">
          <div>权限管理</div>
        </c-tab-pane>
        <c-tab-pane name="girl">
          <div>骗你的</div>
        </c-tab-pane>
      </c-tab-content>
    </c-tabs>
    <h3>禁用Tab</h3>




  </div>
</template>

<script>
  import Tabs from '../../../src/Tab/Tabs'
  import TabItem from '../../../src/Tab/Tab-Item'
  import TabContent from '../../../src/Tab/Tab-Content'
  import TabNav from '../../../src/Tab/Tab-Nav'
  import TabPane from '../../../src/Tab/Tab-Pane'
  export default {
    name: "tab-demo",
    components:{
      'c-tabs': Tabs,
      'c-tab': TabItem,
      'c-tab-pane': TabPane,
      'c-tab-nav': TabNav,
      'c-tab-content': TabContent,
    },
    data(){
      return {
        selectedItems: "setting",
      }
    }
  }
</script>

<style scoped>

</style>