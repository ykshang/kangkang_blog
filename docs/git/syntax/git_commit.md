# git commit

::: tip 主要作用
commit一个库到某路径下
:::

## 语法

```bash
git commit [--template=<template_directory>]
  [-l] [-s] [--no-hardlinks] [-q] [-n] [--bare] [--mirror]
  [-o <name>] [-b <name>] [-u <upload-pack>] [--reference <repository>]
  [--dissociate] [--separate-git-dir <git dir>]
  [--depth <depth>] [--[no-]single-branch] [--no-tags]
  [--recurse-submodules[=<pathspec>]] [--[no-]shallow-submodules]
  [--[no-]remote-submodules] [--jobs <n>] [--sparse]
  [--filter=<filter>] [--] <repository>
  [<directory>]
```

## 常用的参数

| 参数       | 解释                     |
|:-------- |:---------------------- |
| -m       | 提交信息                   |
| -a,--all | 提交全部文件，包括工作区，还没添加到暂存区的 |

## 常用命令举例：

- 提交代码
  
  ```bash
  git commit -m "提交信息"
  ```

- 添加全部修改并提交
  
  ```bash
  git commit -am "提交信息"
  ```
