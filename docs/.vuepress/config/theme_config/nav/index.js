let git = require('./git');
let cookbook = require('./cookbook');
let vue = require('./vue');
let react = require('./react');
let travel = require('./travel');
let nodejs = require('./nodejs');
let welcome = {
  text: '欢迎',
  link: '/guide/'
};

// 导航栏配置
module.exports = [
  welcome,
  git,
  vue,
  react,
  nodejs,
  cookbook,
  travel
];