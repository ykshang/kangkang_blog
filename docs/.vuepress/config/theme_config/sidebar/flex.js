module.exports = {
  title: 'Flex弹性布局',
  children: [{
    title: '简介',
    path: '/flex/'
  }, {
    title: '相关概念',
    path: '/flex/introduction'
  }, {
    title: '初始化计算',
    path: '/flex/init'
  }, {
    title: '弹性元素',
    path: '/flex/item/item'
  }, {
    title: '弹性容器',
    path: '/flex/container/container'
  }, {
    title: '外在影响因素',
    children: [{
      title: 'min-content/max-content',
      path: '/flex/other/css1'
    }, {
      title: 'position',
      path: '/flex/other/css2'
    }, {
      title: 'direction',
      path: '/flex/other/css3'
    }, {
      title: 'margin',
      path: '/flex/other/css4'
    }, {
      title: 'min-width/overflow',
      path: '/flex/other/css5'
    }]
  }, {
    title: '应用实例',
    children: [{
      title: '表格hover组件',
      path: '/flex/example/example1'
    }, {
      title: '表格hover组件2',
      path: '/flex/example/example2'
    }]
  }]
}