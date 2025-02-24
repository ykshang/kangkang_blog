module.exports = {
  // 版本控制/git ---------------
  "/revision-control/git/": [
    "/revision-control/git/README.md",
    {
      text: "基本语法",
      collapsible: true,
      children: [
        "/revision-control/git/syntax/oper_symbol.md",
        "/revision-control/git/syntax/git_add.md",
        "/revision-control/git/syntax/git_branch.md",
        "/revision-control/git/syntax/git_cherry-pick.md",
        "/revision-control/git/syntax/git_clone.md",
        "/revision-control/git/syntax/git_config.md",
        "/revision-control/git/syntax/git_diff.md",
        "/revision-control/git/syntax/git_fetch.md",
        "/revision-control/git/syntax/git_init.md",
        "/revision-control/git/syntax/git_log.md",
        "/revision-control/git/syntax/git_merge.md",
        "/revision-control/git/syntax/git_pull.md",
        "/revision-control/git/syntax/git_push.md",
        "/revision-control/git/syntax/git_rebase.md",
        "/revision-control/git/syntax/git_remote.md",
        "/revision-control/git/syntax/git_reset.md",
        "/revision-control/git/syntax/git_rm.md",
        "/revision-control/git/syntax/git_show.md",
        "/revision-control/git/syntax/git_status.md",
        "/revision-control/git/syntax/git_tag.md",
      ],
    }, {
      text: "操作实践",
      collapsible: true,
      children: [
        "/revision-control/git/advanced_skills/rule",
        "/revision-control/git/advanced_skills/great_skills",
        "/revision-control/git/advanced_skills/best_practices",
        "/revision-control/git/advanced_skills/different",
      ]
    },
    '/revision-control/git/tool/tool'
  ],
  // flex布局 ----------------------
  "/css/layout/flex/": [
    "/css/layout/flex/README.md",
    '/css/layout/flex/introduction.md',
    '/css/layout/flex/init',
    '/css/layout/flex/item',
    '/css/layout/flex/container',
    {
      text: '外在影响因素',
      collapsible: true,
      children: [
        '/css/layout/flex/other/css1',
        '/css/layout/flex/other/css2',
        '/css/layout/flex/other/css3',
        '/css/layout/flex/other/css4',
        '/css/layout/flex/other/css5',
        '/css/layout/flex/other/css6',
      ]
    }, {
      text: '应用实例',
      collapsible: true,
      children: [
        '/css/layout/flex/example/example2',
      ]
    }
  ],
  // webpack ----------------------
  "/tool/webpack/": [
    "/tool/webpack/README.md",
    {
      text: '基础配置',
      collapsible: true,
      children: [
        "/tool/webpack/base/README.md",
        "/tool/webpack/base/base.md",
        "/tool/webpack/base/config.md",
        "/tool/webpack/base/development.md",
        "/tool/webpack/base/image.md",
        "/tool/webpack/base/output.md",
        "/tool/webpack/base/clean.md",
        "/tool/webpack/base/font.md",
        "/tool/webpack/base/other.md",
        "/tool/webpack/base/javascript.md",
        "/tool/webpack/base/html.md",
        "/tool/webpack/base/server.md",
        "/tool/webpack/base/production.md",
        "/tool/webpack/base/optimizeCss.md",
        "/tool/webpack/base/minifyHtml.md",
        "/tool/webpack/base/summary.md",
      ]
    }, {
      text: '高级优化',
      collapsible: true,
      children: [
        "/tool/webpack/senior/README.md",
        "/tool/webpack/senior/enhanceExperience.md",
        "/tool/webpack/senior/liftingSpeed.md",
        "/tool/webpack/senior/reduceVolume.md",
        "/tool/webpack/senior/optimizePerformance.md",
        "/tool/webpack/senior/summary.md",
      ]
    }, {
      text: '项目配置',
      collapsible: true,
      children: [
        "/tool/webpack/project/README.md",
        "/tool/webpack/project/react-cli.md",
        "/tool/webpack/project/vue-cli.md",
        "/tool/webpack/project/summary.md",
      ]
    }, {
      text: '原理分析',
      collapsible: true,
      children: [
        "/tool/webpack/origin/README.md",
        "/tool/webpack/origin/loader.md",
        "/tool/webpack/origin/plugin.md",
        "/tool/webpack/origin/summary.md",
      ]
    }
  ],
  "/tool/webpack-interview/": [{
    text: 'Webpack 面试题',
    collapsible: false,
    children: [
      "/tool/webpack-interview/1",
      "/tool/webpack-interview/2",
      "/tool/webpack-interview/3",
      "/tool/webpack-interview/4",
      "/tool/webpack-interview/5",
      "/tool/webpack-interview/6",
      "/tool/webpack-interview/7",
      "/tool/webpack-interview/8",
      "/tool/webpack-interview/9",
      "/tool/webpack-interview/10",
      "/tool/webpack-interview/11",
      "/tool/webpack-interview/12",
      "/tool/webpack-interview/13",
      "/tool/webpack-interview/14",
      "/tool/webpack-interview/15",
      "/tool/webpack-interview/16",
      "/tool/webpack-interview/17",
      "/tool/webpack-interview/18",
      "/tool/webpack-interview/19",
      "/tool/webpack-interview/20",
      "/tool/webpack-interview/21",
      "/tool/webpack-interview/22",
      "/tool/webpack-interview/23",
      "/tool/webpack-interview/24",
      "/tool/webpack-interview/25",
      "/tool/webpack-interview/26",
      "/tool/webpack-interview/27",
      "/tool/webpack-interview/28",
      "/tool/webpack-interview/29",
      "/tool/webpack-interview/30",
      "/tool/webpack-interview/31",
      "/tool/webpack-interview/32",
      "/tool/webpack-interview/33",
      "/tool/webpack-interview/34",
      "/tool/webpack-interview/35",
      "/tool/webpack-interview/36",
    ]
  }],
  "/tool/base/": [
    {
      text: '基础面试题',
      collapsible: false,
      children: [
        "/tool/base/1.md",
        "/tool/base/2.md",
        "/tool/base/3.md",
        "/tool/base/4.md",
        "/tool/base/5.md",
        "/tool/base/6.md",
        "/tool/base/7.md",
        "/tool/base/8.md",
        "/tool/base/9.md",
        "/tool/base/10.md",
        "/tool/base/11.md",
        "/tool/base/12.md",
        "/tool/base/13.md",
      ]
    },
  ],
  "/web-basic/": [{
    text: 'web基础面试题',
    collapsible: false,
    children: [
      "/web-basic/1",
      "/web-basic/2",
      "/web-basic/3",
      "/web-basic/4"
    ]
  }],
  "/babel/interview/": [{
    text: 'Babel 常见面试题',
    collapsible: false,
    children: [
      "/babel/interview/1",
      "/babel/interview/2",
    ]
  }],
  "/database/": [{
    text: 'MongoDB',
    collapsible: false,
    children: [
      "/database/MangoDB/1",
      "/database/MangoDB/2",
      "/database/MangoDB/3",
      "/database/MangoDB/4",
      "/database/MangoDB/5",
      "/database/MangoDB/6",
      "/database/MangoDB/7",
      "/database/MangoDB/8",
      "/database/MangoDB/9",
    ],
  }],
  "/JavaScript/interview/": [{
    text: "JavaScript 面试题",
    collapsible: false,
    children: [
      "/JavaScript/interview/1",
      "/JavaScript/interview/2",
      "/JavaScript/interview/3",
      "/JavaScript/interview/5",
      "/JavaScript/interview/6",
      "/JavaScript/interview/7",
      "/JavaScript/interview/8",
      "/JavaScript/interview/9",
      "/JavaScript/interview/10",
      "/JavaScript/interview/11",
      "/JavaScript/interview/12",
      "/JavaScript/interview/13",
      "/JavaScript/interview/14",
      "/JavaScript/interview/15",
      "/JavaScript/interview/16",
      "/JavaScript/interview/17",
      "/JavaScript/interview/18",
      "/JavaScript/interview/19",
      "/JavaScript/interview/20",
      "/JavaScript/interview/21",
      "/JavaScript/interview/22",
      "/JavaScript/interview/23",
      "/JavaScript/interview/24",
      "/JavaScript/interview/25",
      "/JavaScript/interview/26",
      "/JavaScript/interview/27",
      "/JavaScript/interview/28",
      "/JavaScript/interview/29",
      "/JavaScript/interview/30",
      "/JavaScript/interview/32",
    ],
  }],
  "/Algorithm/Algorithm/": [{
    text: "算法",
    collapsible: false,
    children: [
      "/Algorithm/Algorithm/1",
      "/Algorithm/Algorithm/2",
      "/Algorithm/Algorithm/3",
    ],
  }],
  "/Algorithm/design-pattern/": [{
    text: "设计模式",
    collapsible: false,
    children: [
      "/Algorithm/design-pattern/1",
      "/Algorithm/design-pattern/2",
    ]
  }],
  "/computer/network/": [{
    text: "网络",
    collapsible: false,
    children: [
      "/computer/network/1",
      "/computer/network/2",
      "/computer/network/3",
      "/computer/network/4",
      "/computer/network/5",
      "/computer/network/6",
      "/computer/network/7",
      "/computer/network/8",
      "/computer/network/9",
      "/computer/network/10",
      "/computer/network/11",
      "/computer/network/12",
      "/computer/network/13",
      "/computer/network/14",
      "/computer/network/15",
      "/computer/network/16",
      "/computer/network/17",
      "/computer/network/18",
    ],
  }],
  "/framework/vue/vue": [{
    text: "Vue 学习笔记",
    collapsible: false,
    children: [
      "/framework/vue/vue/1",
      "/framework/vue/vue/2",
      "/framework/vue/vue/3",
      "/framework/vue/vue/4",
      "/framework/vue/vue/5",
      "/framework/vue/vue/6",
      "/framework/vue/vue/7",
      "/framework/vue/vue/8",
      "/framework/vue/vue/9",
      "/framework/vue/vue/10",
      "/framework/vue/vue/11",
      "/framework/vue/vue/12",
      "/framework/vue/vue/13",
      "/framework/vue/vue/14",
      "/framework/vue/vue/15",
      "/framework/vue/vue/16",
      "/framework/vue/vue/17",
      "/framework/vue/vue/18",
      "/framework/vue/vue/19",
      "/framework/vue/vue/20",
      "/framework/vue/vue/21",
      "/framework/vue/vue/22",
      "/framework/vue/vue/23",
      "/framework/vue/vue/24",
      "/framework/vue/vue/25",
      "/framework/vue/vue/26",
      "/framework/vue/vue/27",
    ],
  }],
  "/framework/vue/vuex/": [{
    text: "Vuex 专题",
    collapsible: false,
    children: [
      "/framework/vue/vuex/1",
    ]
  }],
  "/framework/uni-app/": [{
    text: "Uni-App 专题",
    collapsible: false,
    children: [
      "/framework/uni-app/1",
    ]
  }],
  "/framework/vue/vue-router/": [{
    text: "Vue Router 专题",
    collapsible: false,
    children: [
      "/framework/vue/vue-router/1",
    ]
  }],
  "/nodejs/node/": [{
    text: "Node.js",
    collapsible: false,
    children: [
      '/nodejs/node/1',
      '/nodejs/node/2',
      '/nodejs/node/3',
      '/nodejs/node/4',
      '/nodejs/node/5',
      '/nodejs/node/6',
      '/nodejs/node/7',
      '/nodejs/node/8',
      '/nodejs/node/9',
      '/nodejs/node/10',
      '/nodejs/node/11',
      '/nodejs/node/12',
      '/nodejs/node/13',
      '/nodejs/node/14',
      '/nodejs/node/15',
      '/nodejs/node/16',
      '/nodejs/node/17',
      "/nodejs/node/18"
    ]
  }],
  "/nodejs/express/": [{
    text: "Express",
    collapsible: false,
    children: [
      '/nodejs/express/1',
      '/nodejs/express/2',
      '/nodejs/express/3',
      '/nodejs/express/4',
      '/nodejs/express/5',
      '/nodejs/express/6',
      '/nodejs/express/7',
    ]
  }],
  "/nodejs/database/": [{
    text: "数据库",
    collapsible: false,
    children: [
      '/nodejs/database/1',
      '/nodejs/database/2',
      '/nodejs/database/3',
      '/nodejs/database/4',
    ]
  }],
};
