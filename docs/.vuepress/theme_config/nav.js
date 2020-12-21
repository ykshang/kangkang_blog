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
        text: 'git cherry-pick',
        link: '/git/syntax/git_cherry-pick',
      }, {
        text: 'git clone',
        link: '/git/syntax/git_clone',
      }, {
        text: 'git commit',
        link: '/git/syntax/git_commit',
      }, {
        text: 'git config',
        link: '/git/syntax/git_config',
      }, {
        text: 'git diff',
        link: '/git/syntax/git_diff',
      }, {
        text: 'git fetch',
        link: '/git/syntax/git_fetch',
      }, {
        text: 'git init',
        link: '/git/syntax/git_init',
      }, {
        text: 'git log',
        link: '/git/syntax/git_log',
      }, {
        text: 'git merge',
        link: '/git/syntax/git_merge',
      }, {
        text: 'git mv',
        link: '/git/syntax/git_mv',
      }, {
        text: 'git pull',
        link: '/git/syntax/git_pull',
      }, {
        text: 'git push',
        link: '/git/syntax/git_push',
      }, {
        text: 'git reabse',
        link: '/git/syntax/git_rebase',
      }, {
        text: 'git remote',
        link: '/git/syntax/git_remote',
      }, {
        text: 'git reset',
        link: '/git/syntax/git_reset',
      }, {
        text: 'git restore',
        link: '/git/syntax/git_restore',
      }, {
        text: 'git rm',
        link: '/git/syntax/git_rm',
      }, {
        text: 'git show',
        link: '/git/syntax/git_show',
      }, {
        text: 'git stage',
        link: '/git/syntax/git_stage',
      }, {
        text: 'git stash',
        link: '/git/syntax/git_stash',
      }, {
        text: 'git status',
        link: '/git/syntax/git_status',
      }, {
        text: 'git tag',
        link: '/git/syntax/git_tag',
      }]
    }, {
      text: '各种操作实践',
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