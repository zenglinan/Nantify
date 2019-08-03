import Vue from 'vue'
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
import Toast from './Toast/plugin/Toast'
import Tabs from './Tab/Tabs'
import TabContent from './Tab/Tab-Content'
import TabNav from './Tab/Tab-Nav'
import TabPane from './Tab/Tab-Pane'
import TabItem from './Tab/Tab-Item'
import Popover from './Popover/Popover'
import Collapse from './Collapse/Collapse'
import CollapseItem from './Collapse/CollapseItem'
import Cascader from './Cascader/Cascader'

Vue.use(Toast)
new Vue({
  el: '#app',
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
        name: '浙江',
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
      }]
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
})
