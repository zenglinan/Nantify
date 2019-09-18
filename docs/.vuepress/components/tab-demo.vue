<template>
  <div class="tabs">
    <h3>基础用法</h3>
    <c-card :code="code1">
      <c-tabs :selectedItems.sync="selectedItems" direction="row">
        <c-tab-nav>
          <c-tab name="setting">用户设置</c-tab>
          <c-tab name="authority">权限管理</c-tab>
          <c-tab name="personal">个人中心</c-tab>
          <c-tab name="journey">行程安排</c-tab>
        </c-tab-nav>

        <c-tab-content>
          <c-tab-pane name="setting">
            <div>用户设置</div>
          </c-tab-pane>
          <c-tab-pane name="authority">
            <div>权限管理</div>
          </c-tab-pane>
          <c-tab-pane name="personal">
            <div>个人中心</div>
          </c-tab-pane>
          <c-tab-pane name="journey">
            <div>行程安排</div>
          </c-tab-pane>
        </c-tab-content>
      </c-tabs>
      <template v-slot:descript>
        基本用法。
      </template>
    </c-card>

    <h3>带 icon 图标</h3>
    <c-card :code="code2">
      <c-tabs :selectedItems.sync="selectedItems2" direction="row">
        <c-tab-nav>
          <c-tab name="setting" icon="i-setting">用户设置</c-tab>
          <c-tab name="authority" icon="i-eye">权限管理</c-tab>
          <c-tab name="personal" icon="i-user">个人中心</c-tab>
          <c-tab name="journey" icon="i-select">行程安排</c-tab>
        </c-tab-nav>

        <c-tab-content>
          <c-tab-pane name="setting">
            <div>用户设置</div>
          </c-tab-pane>
          <c-tab-pane name="authority">
            <div>权限管理</div>
          </c-tab-pane>
          <c-tab-pane name="personal">
            <div>个人中心</div>
          </c-tab-pane>
          <c-tab-pane name="journey">
            <div>行程安排</div>
          </c-tab-pane>
        </c-tab-content>
      </c-tabs>
      <template v-slot:descript>
        使用 <span class="md">icon</span> 指定 tab 的图标。
        <br>
        可以使用内置的 icon , 也可以从 iconfont 获取 icon
      </template>
    </c-card>


    <h3>不同方向的 Tab</h3>
    <c-card :code="code3">
      <c-tabs :selectedItems.sync="selectedItems3" direction="column">
        <c-tab-nav>
          <c-tab name="setting" icon="i-setting">用户设置</c-tab>
          <c-tab name="authority" icon="i-eye">权限管理</c-tab>
          <c-tab name="personal" icon="i-user">个人中心</c-tab>
          <c-tab name="journey" icon="i-select">行程安排</c-tab>
        </c-tab-nav>

        <c-tab-content>
          <c-tab-pane name="setting">
            <div>用户设置</div>
          </c-tab-pane>
          <c-tab-pane name="authority">
            <div>权限管理</div>
          </c-tab-pane>
          <c-tab-pane name="personal">
            <div>个人中心</div>
          </c-tab-pane>
          <c-tab-pane name="journey">
            <div>行程安排</div>
          </c-tab-pane>
        </c-tab-content>
      </c-tabs>
      <template v-slot:descript>
        使用 <span class="md">direction</span> 指定 Tab 的方向。
      </template>
    </c-card>


  </div>
</template>

<script>
  import Tabs from '../../../src/Tab/Tab'
  import TabItem from '../../../src/Tab/Tab-Item'
  import TabContent from '../../../src/Tab/Tab-Content'
  import TabNav from '../../../src/Tab/Tab-Nav'
  import TabPane from '../../../src/Tab/Tab-Pane'
  import Card from '../../../src/Card/Card'
  import Icon from '../../../src/Icon/icon'

  export default {
    name: "tab-demo",
    components: {
      'c-tabs': Tabs,
      'c-tab': TabItem,
      'c-tab-pane': TabPane,
      'c-tab-nav': TabNav,
      'c-tab-content': TabContent,
      'c-card': Card,
      'c-icon': Icon
    },
    data() {
      return {
        selectedItems: "setting",
        selectedItems2: "setting",
        selectedItems3: "setting",
        code1: `
<c-tabs :selectedItems.sync="selectedItems">
  <c-tab-nav>
    <c-tab name="setting">用户设置</c-tab>
    <c-tab name="authority">权限管理</c-tab>
    <c-tab name="personal">个人中心</c-tab>
    <c-tab name="journey">行程安排</c-tab>
  </c-tab-nav>

  <c-tab-content>
    <c-tab-pane name="setting">
      <div>用户设置</div>
    </c-tab-pane>
    <c-tab-pane name="authority">
      <div>权限管理</div>
    </c-tab-pane>
    <c-tab-pane name="personal">
      <div>个人中心</div>
    </c-tab-pane>
    <c-tab-pane name="journey">
      <div>行程安排</div>
    </c-tab-pane>
  </c-tab-content>
</c-tabs>

<script>
  export default {
    data(){
      return {
        selectedItems: "setting",
      }
    }
  }
<\/script>`.trim(),
        code2: `
<c-tabs :selectedItems.sync="selectedItems">
  <c-tab-nav>
    <c-tab name="setting" icon="i-setting">用户设置</c-tab>
    <c-tab name="authority" icon="i-eye">权限管理</c-tab>
    <c-tab name="personal" icon="i-user">个人中心</c-tab>
    <c-tab name="journey" icon="i-select">行程安排</c-tab>
  </c-tab-nav>

  <c-tab-content>
    <c-tab-pane name="setting">
      <div>用户设置</div>
    </c-tab-pane>
    <c-tab-pane name="authority">
      <div>权限管理</div>
    </c-tab-pane>
    <c-tab-pane name="personal">
      <div>个人中心</div>
    </c-tab-pane>
    <c-tab-pane name="journey">
      <div>行程安排</div>
    </c-tab-pane>
  </c-tab-content>
</c-tabs>

<script>
  export default {
    data(){
      return {
        selectedItems: "setting",
      }
    }
  }
<\/script>`.trim(),
        code3: `
<c-tabs :selectedItems.sync="selectedItems" direction="column">
  <c-tab-nav>
    <c-tab name="setting" icon="i-setting">用户设置</c-tab>
    <c-tab name="authority" icon="i-eye">权限管理</c-tab>
    <c-tab name="personal" icon="i-user">个人中心</c-tab>
    <c-tab name="journey" icon="i-select">行程安排</c-tab>
  </c-tab-nav>

  <c-tab-content>
    <c-tab-pane name="setting">
      <div>用户设置</div>
    </c-tab-pane>
    <c-tab-pane name="authority">
      <div>权限管理</div>
    </c-tab-pane>
    <c-tab-pane name="personal">
      <div>个人中心</div>
    </c-tab-pane>
    <c-tab-pane name="journey">
      <div>行程安排</div>
    </c-tab-pane>
  </c-tab-content>
</c-tabs>

<script>
  export default {
    data(){
      return {
        selectedItems: "setting",
      }
    }
  }
<\/script>`.trim()
      }
    }
  }
</script>

<style scoped>

</style>