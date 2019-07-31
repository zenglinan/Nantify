module.exports = {
  title: 'CoCo UI',
  description: '一个适合学习的 UI 框架',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
      {text: '交流', link: 'https://google.com'},
    ],
    sidebar: [
      {
        title: "快速上手",
        collapsable: true,
        children:[
          '/introduce/',
          '/install/',
        ]
      },
      {
        title: '组件',
        collapsable: true,
        children: [
          '/components/button',
          '/components/tabs',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/popover',
          '/components/slides',
        ]
      },
    ]
  }
}