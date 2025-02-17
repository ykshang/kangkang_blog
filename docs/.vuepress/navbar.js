module.exports = [
  {
    text: "主页",
    link: "/",
  }, {
    text: "前端基础",
    children: [{
      text: "CSS",
      children: [{
        text: "Flex 弹性布局",
        link: "/css/layout/flex/",
      }],
    }, {
      text: "JavaScript",
      children: [{
        text: "JavaScript 面试题",
        link: "/JavaScript/interview/",
      }],
    }, {
      text: "Web基础",
      children: [{
        text: "Web基础面试题",
        link: "/web-basic/",
      }],
    }],
  }, {
    text: "工程化",
    children: [{
      text: "构建打包",
      children: [{
        text: "Webpack",
        link: "/compiler-tool/webpack/",
      }],
    }],
  }, {
    text: "数据库",
    children: [{
      text: "MangoDB",
      link: "/database/MangoDB/",
    }],
  }, {
    text: "其他",
    children: [{
      text: "版本控制工具",
      children: [{
        text: "Git",
        link: "/revision-control/git/",
      }],
    }],
  },
];
