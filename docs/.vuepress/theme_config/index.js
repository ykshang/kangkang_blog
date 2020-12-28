
module.exports = {
  displayAllHeaders: true,
  logo: '/assets/img/logo.gif', // 导航栏的logo
  nextLinks: true,
  prevLinks: true,
  nav: require("./nav/index"), // 导航栏右侧的链接配置
  sidebar: 'auto', // 自动将打开的页面输出导航至侧边栏
  // sidebar: require("./sidebar/index"), // 侧边栏配置
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