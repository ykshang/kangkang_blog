let git = require('./git');
let cookbook = require('./cookbook');

// 导航栏配置
module.exports = [
  {
    text: '欢迎',
    link: '/guide/'
  }, git, {
    text: 'Vue.js',
    link: ''
  }, {
    text: 'React.js',
    link: ''
  }, {
    text: 'Node.js',
    link: ''
  }, cookbook, {
    text: '旅行日记',
    link: ''
  }
]