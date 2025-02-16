module.exports = {
  // 版本控制/git
  "/revision-control/git/": [{
    text: "基本介绍",
    link: "/revision-control/git/README.md",
  }, {
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
  }, {
    text: '第三方工具推荐',
    link: '/revision-control/git/tool/tool'
  }],
  "/css/layout/flex/": [{
    text: '简介',
    link: '/css/layout/flex/README.md'
  }, {
    text: '相关概念',
    link: '/css/layout/flex/introduction.md'
  }, {
    text: '初始化计算',
    link: '/css/layout/flex/init'
  }, {
    text: '弹性元素',
    link: '/css/layout/flex/item'
  }, {
    text: '弹性容器',
    link: '/css/layout/flex/container'
  }, {
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
      '/css/layout/flex/example/example1',
      '/css/layout/flex/example/example2',
    ]
  }],
};
