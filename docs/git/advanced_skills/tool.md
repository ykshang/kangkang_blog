# 第三方工具推荐

## 分支描述查看插件 git-br <Badge text="Node.js" type="tip" vertical="top"/>

主要用来查看分支的描述，其中描述主要是用来标记分支的作用。

- 安装插件
  
  ```shell
  npm i git-br
  ```

- 使用插件
  
  ```shell
  git br
  ```

- 配置分支描述数据
  
  ```git
  git config branch.master.description 主干代码
  git config branch.gh-pages.description 用于gihub页面展示
  ```

- 执行效果
  
  ```powershell
  PS D:\code\kangkang_blog> git br
    gh-pages 用于gihub页面展示
  * master 主干代码
  ```

## TortoiseGit 图形化工具 <Badge text="GUI" type="tip" vertical="top"/>

## SourceTree 图形化工具 <Badge text="GUI" type="tip" vertical="top"/>
