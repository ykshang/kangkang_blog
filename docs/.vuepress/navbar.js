module.exports = [
  {
    text: "主页",
    link: "/",
  }, {
    text: "前端基础",
    children: [{
      text: "Html",
      children: [{
        text: "Html 面试题",
        link: "/html/interview/",
      }],
    }, {
      text: "CSS",
      children: [{
        text: "Flex 弹性布局",
        link: "/css/layout/flex/",
      }, {
        text: "CSS 面试题",
        link: "/css/base/interview/",

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
    }, {
      text: "浏览器",
      children: [{
        text: "浏览器基础",
        link: "/browser/",
      }],
    }],
  }, {
    text: "前端框架",
    children: [{
      text: "Vue",
      children: [{
        text: "Vue 学习笔记",
        link: "/framework/vue/vue/",
      }, {
        text: "Vue Router",
        link: "/framework/vue/vue-router/",
      }, {
        text: "Vuex",
        link: "/framework/vue/vuex/",
      }, {
        text: "Vue 面试题",
        link: "/framework/vue/interview/",
      }],
    }, {
      text: 'uni-app',
      children: [{
        text: "uni-app",
        link: "/framework/uni-app/",
      }],
    }],
  }, {
    text: "Node.js",
    children: [{
      text: "Node.js",
      link: "/nodejs/node/",
    }, {
      text: "Express",
      link: "/nodejs/express/",
    }, {
      text: "Koa",
      link: "/nodejs/Koa/",
    }, {
      text: "数据库相关",
      link: "/nodejs/database/",
    }, {
      text: "相关面试题",
      link: "/nodejs/interview/",
    }],
  }, {
    text: "前端工程化",
    children: [{
      text: "常见面试题",
      link: "/tool/base/",
    }, {
      text: "Webpack",
      children: [{
        text: "学习笔记",
        link: "/tool/webpack/",
      }, {
        text: "常见面试题",
        link: "/tool/webpack-interview/",
      }],
    }, {
      text: "Vite",
      children: [{
        text: "常见面试题",
        link: "/vite/interview/",
      }],
    }, {
      text: "Babel",
      children: [{
        text: "常见面试题",
        link: "/babel/interview/",
      }],
    }],
  }, {
    text: "计算机基础",
    children: [{
      text: "网络",
      link: "/computer/network/",
    }, {
      text: "安全",
      link: "/computer/security/",
    }],
  }, {
    text: "数据库",
    children: [{
      text: "MangoDB",
      link: "/database/MangoDB/",
    }],
  }, {
    text: "算法",
    children: [{
      text: "算法",
      link: "/Algorithm/Algorithm/",
    }, {
      text: "设计模式",
      link: "/Algorithm/design-pattern/",
      // }, {
      //   text: "编程题",
      //   link: "/Algorithm/Algorithm/",
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
