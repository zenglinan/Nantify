module.exports = {
  title: 'CoCo UI',
  description: '一个适合学习的 UI 框架',
  base: '/Coco-UI/',
  themeConfig: {
    nav: [
      {text: 'Github', link: 'https://github.com/zenglinan/Coco-UI'},
      {text: 'Home', link: '/'}
    ],
    sidebar: [
      {
        title: '开发指南',
        collapsable: false,
        children: [
          'views/guide/install.md',
          'views/guide/start.md'
        ]
      },
      {
        title: '组件',
        collapsable: true,
        children: [
          'views/components/basic/'
        ]
      },
    ],
  }
}