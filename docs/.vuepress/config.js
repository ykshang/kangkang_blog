let sidebar_config = require("./theme_config/sidebar"); // 导入侧边栏配置
let nav_config = require("./theme_config/nav"); // 导入导航栏配置
module.exports = {
  title: '个人笔记', // 导航栏左侧的标题
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: "/logo.png" }]
  ],
  description: '记录学习成长', // 不知道干嘛的
  // markdown: {
  //   lineNumbers: true // 显示行号
  // },
  plugins: [
    'reading-progress',
    "vuepress-plugin-gotop-plus",
    [
      'vuepress-plugin-helper-live2d',
      {
        threshold: 10, // 10%
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: 'shizuku',
          display: {
            position: "right", // 显示位置：left/right(default: 'right')
            width: 180, // 模型的长度(default: 135)
            height: 400, // 模型的高度(default: 300)
            hOffset: 50, //  水平偏移(default: 65)
            vOffset: 50, //  垂直偏移(default: 0)
          },
        },
      }
    ]
  ],
  themeConfig: {
    displayAllHeaders: true,
    logo: '/assets/img/logo.gif', // 导航栏的logo
    nav: nav_config, // 导航栏右侧的链接配置
    sidebar: 'auto', // 自动将打开的页面输出导航至侧边栏
    // sidebar: sidebar_config, // 侧边栏配置
    lastUpdated: "最后更新", // 文档的最后更新时间 可选值: string | boolean
    repo: 'ykshang/kangkang_blog', // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repoLabel: '查看源码',// 自定义仓库链接文字。
    // ? 以下为可选的编辑链接选项
    docsDir: 'docs',  // 假如文档不是放在仓库的根目录下：
    docsBranch: 'master', // 假如文档放在一个特定的分支下：
    editLinks: true, // 显示编辑链接，默认是 false, 设置为 true 来启用
    editLinkText: '编辑此文档',  // 编辑链接的文字 默认为 "Edit this page"
    smoothScroll: true //页面滚动效果
  }
}