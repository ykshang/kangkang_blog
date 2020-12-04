// 导航栏配置
module.exports =  [
  {
    text: '主页', link: '/'
  }, {
    text: 'Git文档',
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
      }]
    }, {
      text: '各种操作实践',
      link: '',
      items: [{
        text: '各种骚操作总结',
        link: ''
      }, {
        text: '通过分支管理代码的最佳实践',
        link: ''
      }, {
        text: 'merge、rebase、cherry-pick的区别',
        link: '',
      }]
    }]
  }, {
    text: 'Vue.js', link: ''
  }, {
    text: 'React.js', link: ''
  }, {
    text: 'Node.js', link: ''
  }, {
    text: '菜谱的自我修养', link: ''
  }, {
    text: '自由行记录', link: ''
  }
]