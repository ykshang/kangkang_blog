// 导航栏配置
module.exports =  [
  {
    text: '主页', link: '/'
  }, {
    text: 'Git',
    items: [{
      text: '基本介绍',
      link: '/git/overview'
    }, {
      text: '基本语法',
      link: '',
      items: [{
        text: '常见的操作符',
        link: '/git/syntax/oper_symbol'
      }, {
        text: 'git add',
        link: '/git/syntax/git_add'
      }, {
        text: 'git branch',
        link: '/git/syntax/git_branch',
      }, {
        text: 'git checkout',
        link: '/git/syntax/git_checkout',
      }, {
        text: 'git clone',
        link: '/git/syntax/git_clone',
      }, {
        text: 'git commit',
        link: '/git/syntax/git_commit',
      }]
    }, {
      text: '各种操作实践',
      link: '',
      items: [{
        text: '各种骚操作总结',
        link: '/git/advanced_skills/great_skills'
      }, {
        text: '通过分支管理需求、问题单的最佳实践',
        link: '/git/advanced_skills/best_practices'
      }, {
        text: 'merge、rebase、cherry-pick的区别',
        link: '/git/advanced_skills/different',
      }]
    }]
  }, {
    text: 'Vue.js',
    link: ''
  }, {
    text: 'React.js',
    link: ''
  }, {
    text: 'Node.js',
    link: ''
  }, {
    text: '菜谱的自我修养',
    link: ''
  }, {
    text: '自由行记录',
    link: ''
  }
]