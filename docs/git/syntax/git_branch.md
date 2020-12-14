# git branch

::: tip 主要作用
分支的操作：新建，修改，删除，查看。不具备切换分支的能力  
分支的实质是一个指针。  
:::

### 语法

```git
git branch [--color[=<when>] | --no-color] [--show-current]
        [-v [--abbrev=<length> | --no-abbrev]]
        [--column[=<options>] | --no-column] [--sort=<key>]
        [--merged [<commit>]] [--no-merged [<commit>]]
        [--contains [<commit>]] [--no-contains [<commit>]]
        [--points-at <object>] [--format=<format>]
        [(-r | --remotes) | (-a | --all)]
        [--list] [<pattern>…​]
git branch [--track | --no-track] [-f] <branchname> [<start-point>]
git branch (--set-upstream-to=<upstream> | -u <upstream>) [<branchname>]
git branch --unset-upstream [<branchname>]
git branch (-m | -M) [<oldbranch>] <newbranch>
git branch (-c | -C) [<oldbranch>] <newbranch>
git branch (-d | -D) [-r] <branchname>…​
git branch --edit-description [<branchname>]
```

### 常用的参数

| 参数                                 | 解释                                                           |
|:---------------------------------- |:------------------------------------------------------------ |
| -a, --all                          | 列出本地和远端的所有分支                                                 |
| -d, --delete                       | 删除已经完全合并的分支，**禁止删除当前所在的分支**，如果想删除需要切换到其他分支在操作。               |
| -D                                 | 删除分支，即便它未被合并，可以理解为强制删除                                       |
| -v, --verbose                      | **分支的实质是个指针**，此参数实质显示的是指向的commit的hash、message，连续输入两次额外显示跟踪关系 |
| -u, --set-upstream-to \<upstream\> | 给分支添加跟踪关系                                                    |
| --unset-upstream                   | 移除分支的跟踪关系                                                    |
| -r, --remotes                      | 查看远端分支                                                       |
| -m, --move                         | 对一个分支及相应的reflog进行移动和重命名                                      |
| -c, --copy                         | 对一个分支及相应的reflog进行复制                                          |
| -C                                 | 复制一个分支，即便不存在                                                 |
| -l, --list                         | 列出本地分支列表                                                     |
| -f, --force                        | 强制执行，用于移动、复制、删除等操作时                                          |

### 常用命令举例：

- 查看本地分支列表
  
  ```git
  git branch -l
  git branch list
  ```

- 查看远端分支列表
  
  ```git
  git branch -r
  git branch --remotes
  ```

- 查看本地和远端的全部分支
  
  ```git
  git branch -a
  git branch --all
  ```

- 新建hotfix分支
  
  ```git
  git branch hotfix
  ```

- 删除hotfix分支
  
  ```git
  git branch -D hotfix
  ```
