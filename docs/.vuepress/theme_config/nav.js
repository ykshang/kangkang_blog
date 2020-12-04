// 导航栏配置
module.exports =  [
  {
    text: '主页', link: '/'
  }, {
    text: 'Git',
    items: [{
      text: '基本介绍',
      link: ''
    }, {
      text: '基本语法',
      link: '',
      items: [{
        text: '常见的操作符',
        link: ''
      }, {
        text: 'git add',
        link: ''
      }, {
        text: 'git branch',
        link: '',
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