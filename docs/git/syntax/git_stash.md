# git stash

::: tip 主要作用
将暂存区，工作区的修改存储到栈里，分支之间是通用的
:::

## 语法

```bash
git stash list [<options>]
git stash show [<options>] [<stash>]
git stash drop [-q|--quiet] [<stash>]
git stash ( pop | apply ) [--index] [-q|--quiet] [<stash>]
git stash branch <branchname> [<stash>]
git stash [push [-p|--patch] [-k|--[no-]keep-index] [-q|--quiet]
  [-u|--include-untracked] [-a|--all] [-m|--message <message>]
  [--pathspec-from-file=<file> [--pathspec-file-nul]]
  [--] [<pathspec>…​]]
git stash clear
git stash create [<message>]
git stash store [-m|--message <message>] [-q|--quiet] <commit>
```

## 常用的参数

| 参数    | 解释            |
|:----- |:------------- |
| list  | 查看stash存储备份列表 |
| show  | 查看某一个备份的内容    |
| pop   | 弹出某个备份        |
| apply | 应用备份          |
| drop  | 清空备份          |
| save  | 将当前修改备份       |

## 常用命令举例：

- 查看当前备份列表
  
  ```bash
  git stash list
  ```

- 查看某一个备份
  
  ```bash
  git stash show stash@{1}
  ```

- 清空备份
  
  ```bash
  git stash drop
  ```

- 弹出最新的备份
  
  ```bash
  git stash pop
  ```

- 应用某一个备份
  
  ```bash
  git stash apply stash@{1}
  ```
