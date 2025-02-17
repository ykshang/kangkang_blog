module.exports = [
  {
    text: "主页",
    link: "/",
  }, {
    text: "版本控制工具",
    children: [{
      text: "Git",
      link: "/revision-control/git/",
    }],
  }, {
    text: "前端基础",
    children: [{
      text: "CSS",
      children: [{
        text: "Flex 弹性布局",
        link: "/css/layout/flex/",
      }],
    }],
  }, {
    text: "构建打包",
    children: [{
      text: "Webpack",
      link: "/compiler-tool/webpack/",
    }],
  },
  
];
