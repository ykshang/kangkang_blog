let git = require('./git');
let cookbook = require('./cookbook');
let vue = require('./vue');
let react = require('./react');
let travel = require('./travel');
let nodejs = require('./nodejs');
let flex= require('./flex');
let interview= require('./interview');
let welcome = {
  title: 'Hello Word！',
  path: '/guide/'
};
// 侧边栏配置
module.exports = [
  // {
  //   title: 'Group 1',   // 必要的
  //   path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
  //   collapsable: false, // 可选的, 默认值是 true,
  //   sidebarDepth: 1,    // 可选的, 默认值是 1
  //   children: [
  //     '/'
  //   ]
  // },
  welcome,
  git,
  flex,
  vue,
  react,
  nodejs,
  cookbook,
  travel,
  interview
]