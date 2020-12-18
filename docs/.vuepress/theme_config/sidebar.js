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
        path: '/git/syntax/git_add',
      }, {
        title: 'git branch',
        path: '/git/syntax/git_branch',
      }, {
        title: 'git checkout',
        path: '/git/syntax/git_checkout',
      }, {
        title: 'git clone',
        path: '/git/syntax/git_clone',
      }, {
        title: 'git commit',
        path: '/git/syntax/git_commit',
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