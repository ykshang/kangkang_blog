# git reset

::: tip 主要作用
重置工作区，将文件从暂存移动到工作区
:::

## 语法

```bash
git reset [-q] [<tree-ish>] [--] <pathspec>…​
git reset [-q] [--pathspec-from-file=<file> [--pathspec-file-nul]] [<tree-ish>]
git reset (--patch | -p) [<tree-ish>] [--] [<pathspec>…​]
git reset [--soft | --mixed [-N] | --hard | --merge | --keep] [-q] [<commit>]
DEPRECATED: git reset [-q] [--stdin [-z]] [<tree-ish>]
```

## 常用的参数

| 参数      | 解释                         |
|:------- |:-------------------------- |
| --soft  | 软重置，撤回到某个时间点，中间的提交全部恢复到暂存区 |
| --mixed | 混合重置                       |
| --hard  | 硬重置，重置工作区到某个时间点            |
| --soft  | 软重置                        |

## 常用命令举例：

- 重置工作区和origin远端master分支保持一致
  
  ```bash
  git reset --hard origin/master
  ```

- 撤回提交到 09f13ce5e02644
  
  ```bash
  git reset --hard 765461f9a0
  ```

- 软重置，撤回上次提交
  
  ```bash
  git reset --soft head~1
  ```
