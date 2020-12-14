# git checkout

::: tip 主要作用
切换分支，重置工作区，检出文件
:::

### 语法

```git
git checkout [-q] [-f] [-m] [<branch>]
git checkout [-q] [-f] [-m] --detach [<branch>]
git checkout [-q] [-f] [-m] [--detach] <commit>
git checkout [-q] [-f] [-m] [[-b|-B|--orphan] <new_branch>] [<start_point>]
git checkout [-f|--ours|--theirs|-m|--conflict=<style>] [<tree-ish>] [--] <pathspec>…​
git checkout [-f|--ours|--theirs|-m|--conflict=<style>] [<tree-ish>] --pathspec-from-file=<file> [--pathspec-file-nul]
git checkout (-p|--patch) [<tree-ish>] [--] [<pathspec>…​]
```

### 常用的参数

| 参数            | 解释             |
|:------------- |:-------------- |
| -b \<branch\> | 创建并检出一个新分支     |
| -B \<branch\> | 创建/重置，并检出一个新分支 |
| -f, --force   | 强制，丢弃当前修改，并检出  |
| ### 常用命令举例：   |                |

- 切换到分支hotfix
  
  ```git
  git checkout hotfix
  ```

- 切换到上一个分支
  
  ```git
  git checkout -
  ```

- 基于远端origin/master分支创建本地gotfix分支
  
  ```git
  git checkout -b hotfix origin/master
  ```
