<template>
  <div id="app">
    <div class="cascader">
      <div class="cascader">
        <c-cascader :citys="citys">
          <c-button>click</c-button>
        </c-cascader>
      </div>
      <div class="collapse">
        <c-collapse :selected.sync="name">
          <c-collapse-item title="标题1" name="1">
            内容1
          </c-collapse-item>
          <c-collapse-item title="标题2" name="2">
            内容2
          </c-collapse-item>
          <c-collapse-item title="标题3" name="3">
            内容3
          </c-collapse-item>
          <c-collapse-item title="标题4" name="4">
            内容4
          </c-collapse-item>
        </c-collapse>
      </div>
      <div class="popover">
        <c-popover trigger="click" direction="left">
          <template v-slot:content>
            Left
          </template>
          <c-button>Left(click)</c-button>
        </c-popover>
        <c-popover trigger="hover" direction="bottom" delay="300">
          <template v-slot:content="slotProps">
            <p>我里面可以加html标签,还可以加关闭按钮</p>
            <c-button @click="slotProps.close()">关闭</c-button>
          </template>
          <c-button>Delay 300ms</c-button>
        </c-popover>
        <c-popover trigger="hover" direction="top" delay="1000">
          <template v-slot:content="slotProps">
            <c-button @click="slotProps.close()">关闭</c-button>
          </template>
          <c-button>Top(hover)</c-button>
        </c-popover>
        <c-popover trigger="click" direction="right">
          <template v-slot:content>
            Right
          </template>
          <c-button>Right(click)</c-button>
        </c-popover>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from './Button/Button'
  import ButtonGroup from './Button/Button-Group'
  import Input from './Input/Input'
  import Col from './Grid System/Col'
  import Row from './Grid System/Row'
  import Slider from './Layout/Slider'
  import Wrapper from './Layout/Wrapper'
  import Header from './Layout/Header'
  import Footer from './Layout/Footer'
  import Content from './Layout/Content'
  import Tabs from './Tab/Tabs'
  import TabContent from './Tab/Tab-Content'
  import TabNav from './Tab/Tab-Nav'
  import TabPane from './Tab/Tab-Pane'
  import TabItem from './Tab/Tab-Item'
  import Popover from './Popover/Popover'
  import Collapse from './Collapse/Collapse'
  import CollapseItem from './Collapse/CollapseItem'
  import Cascader from './Cascader/Cascader'
export default {
  name: 'app',
  components: {
    'c-button': Button,
    'c-button-group': ButtonGroup,
    'c-input': Input,
    'c-col': Col,
    'c-row': Row,
    'c-footer': Footer,
    'c-header': Header,
    'c-wrapper': Wrapper,
    'c-slider': Slider,
    'c-content': Content,
    'c-tabs': Tabs,
    'c-tab': TabItem,
    'c-tab-pane': TabPane,
    'c-tab-nav': TabNav,
    'c-tab-content': TabContent,
    'c-popover': Popover,
    'c-collapse': Collapse,
    'c-collapse-item': CollapseItem,
    'c-cascader': Cascader
  },
  data() {
    return {
      ifLoading: false,
      message: 'Hi,我支持v-model!',
      promptType: 'error',
      selectedTab: "setting",
      name: '1',
      citys: [{
        name: '浙江23333',
        children: [
          {
            name: '杭州',
            children: [
              {name: '上城'},
              {name: '下城'},
              {name: '江干'},
            ]
          },
          {
            name: '嘉兴',
            children: [
              {name: '南湖'},
              {name: '秀洲'},
              {name: '嘉善'},
            ]
          },
        ]
      }, {
        name: '福建',
        children: [
          {
            name: '福州',
            children: [
              {name: '鼓楼'},
              {name: '台江'},
              {name: '仓山'},
            ]
          },
        ]
      }, {
        name: '浙江23333',
        children: [
          {
            name: '杭州',
            children: [
              {name: '上城'},
              {name: '下城'},
              {name: '江干'},
            ]
          },
          {
            name: '嘉兴',
            children: [
              {name: '南湖'},
              {name: '秀洲'},
              {name: '嘉善'},
            ]
          },
        ]
      }, {
        name: '浙江23333',
        children: [
          {
            name: '杭州',
            children: [
              {name: '上城'},
              {name: '下城'},
              {name: '江干'},
            ]
          },
          {
            name: '嘉兴',
            children: [
              {name: '南湖'},
              {name: '秀洲'},
              {name: '嘉善'},
            ]
          },
        ]
      }
      ]
    }
  },
  methods: {
    toast() {
      this.$toast(
          {
            message: 'hello',
            autoClose: false,
            // callback: () => {
            //   alert(1)
            // },
            position: 'top'
          }
      )
    },
    x() {
    }
  }
}
</script>

<style lang="scss">
</style>
