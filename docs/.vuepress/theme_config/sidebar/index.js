// 侧边栏配置
let git = require('./git');

module.exports = [
  // {
  //   title: 'Group 1',   // 必要的
  //   path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
  //   collapsable: false, // 可选的, 默认值是 true,
  //   sidebarDepth: 1,    // 可选的, 默认值是 1
  //   children: [
  //     '/'
  //   ]
  // },
  {
    title: 'Hello Word！',
    path: '/guide/'
  }, git, {
    title: 'Vue.js',
    path: ''
  }, {
    title: 'React.js',
    path: ''
  }, {
    title: 'Node.js',
    path: ''
  }, {
    title: '菜谱的自我修养',
    path: ''
  }, {
    title: '自由行记录',
    path: ''
  }
]