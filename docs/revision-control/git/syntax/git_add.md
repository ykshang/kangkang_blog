# git add

::: tip 主要作用
将文件添加到到暂存区
:::

## 语法

```bash
git add [--verbose | -v] [--dry-run | -n] [--force | -f] [--interactive | -i] [--patch | -p]
  [--edit | -e] [--[no-]all | --[no-]ignore-removal | [--update | -u]]
  [--intent-to-add | -N] [--refresh] [--ignore-errors] [--ignore-missing] [--renormalize]
  [--chmod=(+|-)x] [--pathspec-from-file=<file> [--pathspec-file-nul]]
  [--] [<pathspec>…​]
```

## 常用的参数

| 参数         | 解释                       |
|:---------- |:------------------------ |
| -f,--force | 强制添加，可以将ignored的文件添加到暂存区 |
| .,-a,--all | 将当前工作区下全部修改添加到暂存区        |

## 常用命令举例：

- 将某个文件或文件夹添加到暂存区
  
  ```bash
  git add file_name
  git add folder_name
  ```

- 默认将当前全部修改添加到暂存区
  
  ```bash
  git add .
  git add -a
  git add --all
  ```

- 将某个被忽略的文件强制添加到暂存区
  
  ```bash
  git add -f node_nodules
  git add --force node_modules
  ```
