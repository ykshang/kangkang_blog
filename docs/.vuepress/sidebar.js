module.exports = {
  "/intro/": [
    {
      text: "课程介绍",
      children: ["/intro/README.md", "/intro/pre.md", "/intro/group.md", "/intro/learn.md", "/intro/asset.md"],
    },
  ],
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
  }],
  "/base/": [
    {
      text: "基础配置",
      children: [
        "/base/README.md",
        "/base/base.md",
        "/base/config.md",
        "/base/development.md",
        "/base/css.md",
        "/base/image.md",
        "/base/output.md",
        "/base/clean.md",
        "/base/font.md",
        "/base/other.md",
        "/base/javascript.md",
        "/base/html.md",
        "/base/server.md",
        "/base/production.md",
        "/base/optimizeCss.md",
        "/base/minifyHtml.md",
        "/base/summary.md",
        "/base/111.md",
      ],
    },
  ],
  "/senior/": [
    {
      text: "高级优化",
      children: ["/senior/README.md", "/senior/enhanceExperience.md", "/senior/liftingSpeed.md", "/senior/reduceVolume.md", "/senior/optimizePerformance.md", "/senior/summary.md"],
    },
  ],
  "/project/": [
    {
      text: "项目配置",
      children: ["/project/README.md", "/project/react-cli.md", "/project/vue-cli.md", "/project/summary.md"],
    },
  ],
  "/origin/": [
    {
      text: "原理分析",
      children: ["/origin/README.md", "/origin/loader.md", "/origin/plugin.md", "/origin/summary.md"],
    },
  ],
};
