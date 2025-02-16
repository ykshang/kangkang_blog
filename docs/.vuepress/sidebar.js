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
  },{
    text: "操作实践",
    collapsible: true,
    children: [
      "/revision-control/git/advanced_skills/rule",
      "/revision-control/git/advanced_skills/great_skills",
      "/revision-control/git/advanced_skills/best_practices",
      "/revision-control/git/advanced_skills/different",
    ]
  },{
    text: '第三方工具推荐',
    link: '/revision-control/git/tool/tool'
  }],
};
