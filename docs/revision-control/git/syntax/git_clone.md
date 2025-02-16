# git clone

::: tip 主要作用
clone一个库到某路径下
:::

## 语法

```bash
git clone [--template=<template_directory>]
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

| 参数                | 解释      |
|:----------------- |:------- |
| --depth \<depth\> | 克隆的深度   |
| -b \<branch\>     | 只克隆某个分支 |

::: warning 提示

- 可以利用`--depth`，`-b <branch>`参数下载默认分支，提高构建速度。

:::

## 常用命令举例：

- 只克隆某个远端库的master分支
  
  ```bash
  git clone -b master git@github.com:ykshang/kangkang_blog.git
  ```

- 克隆深度1
  
  ```bash
  git clone --depth 1 git@github.com:ykshang/kangkang_blog.git
  ```
