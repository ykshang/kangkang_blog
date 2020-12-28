module.exports = {
  title: '个人笔记', // 导航栏左侧的标题
  base: '/kangkang_blog/',
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: "/logo.png" }]
  ],
  description: '记录学习成长', // 不知道干嘛的
  displayAllHeaders: true,
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
          mobile: {
            show: true // 是否在移动设备上显示(default: false)
          },
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
  themeConfig: require("./theme_config/index") // 主题配置
}