// 侧边栏配置
module.exports = [
  // {
  //   title: 'Group 1',   // 必要的
  //   path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
  //   collapsable: false, // 可选的, 默认值是 true,
  //   sidebarDepth: 1,    // 可选的, 默认值是 1
  //   children: [
  //     '/'
  //   ]
  // },
  {
    title: 'Git',
    children: [{
      title: '基本介绍',
      path: '/git/overview',
    }, {
      title: '基本语法',
      children: [{
        title: '常见的操作符',
        path: '/git/syntax/oper_symbol',
      }, {
        title: 'git add',
        path: '/git/syntax/git_add'
      }, {
        title: 'git branch',
        path: '/git/syntax/git_branch',
      }, {
        title: 'git checkout',
        path: '/git/syntax/git_checkout',
      }, {
        title: 'git cherry-pick',
        path: '/git/syntax/git_cherry-pick',
      }, {
        title: 'git clone',
        path: '/git/syntax/git_clone',
      }, {
        title: 'git commit',
        path: '/git/syntax/git_commit',
      }, {
        title: 'git diff',
        path: '/git/syntax/git_diff',
      }, {
        title: 'git fetch',
        path: '/git/syntax/git_fetch',
      }, {
        title: 'git init',
        path: '/git/syntax/git_init',
      }, {
        title: 'git log',
        path: '/git/syntax/git_log',
      }, {
        title: 'git merge',
        path: '/git/syntax/git_merge',
      }, {
        title: 'git mv',
        path: '/git/syntax/git_mv',
      }, {
        title: 'git pull',
        path: '/git/syntax/git_pull',
      }, {
        title: 'git push',
        path: '/git/syntax/git_push',
      }, {
        title: 'git reabse',
        path: '/git/syntax/git_rebase',
      }, {
        title: 'git reset',
        path: '/git/syntax/git_reset',
      }, {
        title: 'git restore',
        path: '/git/syntax/git_restore',
      }, {
        title: 'git rm',
        path: '/git/syntax/git_rm',
      }, {
        title: 'git show',
        path: '/git/syntax/git_show',
      }, {
        title: 'git stage',
        path: '/git/syntax/git_stage',
      }, {
        title: 'git stash',
        path: '/git/syntax/git_stash',
      }, {
        title: 'git status',
        path: '/git/syntax/git_status',
      }]
    }, {
        title: '各种操作实践',
        children: [{
          title: '各种骚操作总结',
          path: '/git/advanced_skills/great_skills'
        }, {
          title: '通过分支管理需求、问题单的最佳实践',
          path: '/git/advanced_skills/best_practices'
        }, {
          title: 'merge、rebase、cherry-pick的区别',
          path: '/git/advanced_skills/different',
        }]
    }]
  }, {
    title: 'Vue.js',
    path: ''
  }, {
    title: 'React.js',
    path: ''
  }, {
    title: 'Node.js',
    path: ''
  }, {
    title: '菜谱的自我修养',
    path: ''
  }, {
    title: '自由行记录',
    path: ''
  }
]