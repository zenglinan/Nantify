module.exports = {
  title: 'CoCo UI',
  description: '一个适合学习的 UI 框架',
  base: '/Coco-UI/',
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      {text: 'Github', link: 'https://github.com/zenglinan/Coco-UI'},
      {text: 'Home', link: '/'}
    ],
    sidebar: [
      {
        title: '开发指南',
        collapsable: true,
        children: [
          'views/guide/install.md',
          'views/guide/start.md'
        ]
      },
      {
        title: '组件',
        collapsable: true,
        children: [
          'views/components/basic/',
          'views/components/form/',
          'views/components/navigation/',
        ]
      }

    ],
  }
}