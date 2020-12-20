# git mv

::: tip 主要作用
远端配置有关
:::

### 语法

```git
git remote [-v | --verbose]
git remote add [-t <branch>] [-m <master>] [-f] [--[no-]tags] [--mirror=(fetch|push)] <name> <url>
git remote rename <old> <new>
git remote remove <name>
git remote set-head <name> (-a | --auto | -d | --delete | <branch>)
git remote set-branches [--add] <name> <branch>…​
git remote get-url [--push] [--all] <name>
git remote set-url [--push] <name> <newurl> [<oldurl>]
git remote set-url --add [--push] <name> <newurl>
git remote set-url --delete [--push] <name> <url>
git remote [-v | --verbose] show [-n] <name>…​
git remote prune [-n | --dry-run] <name>…​
git remote [-v | --verbose] update [-p | --prune] [(<group> | <remote>)…​]
```

### 常用的参数

| 参数           | 解释        |
|:------------ |:--------- |
| add          | 添加一个远端配置  |
| rename       | 对远端重命名    |
| rm,remove    | 删除某个远端    |
| -v,--verbose | 查看远端的详细配置 |

### 常用命令举例：

- 添加一个远端配置
  
  ```git
  git remote add origin git@github.com:ykshang/kangkang_blog.git
  ```

- 重命名远端
  
  ```git
  git remote rename old_name new_name
  ```

- 删除某个远端配置
  
  ```git
  git remote remove <name>
  ```

- 查看远端详细配置
  
  ```git
  git remote -v
  ```
