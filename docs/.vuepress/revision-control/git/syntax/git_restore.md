# git restore

::: tip 主要作用
重置工作区
:::

## 语法

```bash
git restore [<options>] [--source=<tree>] [--staged] [--worktree] [--] <pathspec>…​
git restore [<options>] [--source=<tree>] [--staged] [--worktree] --pathspec-from-file=<file> [--pathspec-file-nul]
git restore (-p|--patch) [<options>] [--source=<tree>] [--staged] [--worktree] [--] [<pathspec>…​]
```

## 常用的参数

| 参数            | 解释            |
|:------------- |:------------- |
| -S,--staged   | 将暂存区的代码恢复到工作区 |
| -W,--worktree | 撤销工作区文件的修改    |

## 常用命令举例：

- 撤销暂存区的修改，恢复到工作区
  
  ```bash
  git restore --staged .
  ```

- 撤销工作区的变化
  
  ```bash
  git restore --worktree .
  ```
