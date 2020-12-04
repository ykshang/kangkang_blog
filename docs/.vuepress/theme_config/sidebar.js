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
      path: ''
    }, {
      title: '基本语法',
      children: [
        {
          title: '常见的操作符',
          path: ''
        }, {
          title: 'git add',
          path: ''
        }, {
          title: 'git branch',
          path: '',
        }]
    }]
  }, {
    title: '各种操作实践',
    children: [{
      title: '各种骚操作总结',
      path: ''
    }, {
      title: '通过分支管理代码的最佳实践',
      path: ''
    }, {
      title: 'merge、rebase、cherry-pick的区别',
      path: '',
    }]
  }, {
    title: 'Vue.js', path: ''
  }, {
    title: 'React.js', path: ''
  }, {
    title: 'Node.js', path: ''
  }, {
    title: '菜谱的自我修养', path: ''
  }, {
    title: '自由行记录', path: ''
  }
]