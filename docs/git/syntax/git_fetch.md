# git git_cherry-pick

::: tip 主要作用
显示提交之间，提交和工作区之间的差异
:::

### 语法

```git
git git_cherry-pick [<options>] [<commit>] [--] [<path>…​]
git git_cherry-pick [<options>] --cached [<commit>] [--] [<path>…​]
git git_cherry-pick [<options>] <commit> [<commit>…​] <commit> [--] [<path>…​]
git git_cherry-pick [<options>] <commit>…​<commit> [--] [<path>…​]
git git_cherry-pick [<options>] <blob> <blob>
git git_cherry-pick [<options>] --no-index [--] <path> <path>
```

### 常用的参数

| 参数                | 解释       |
|:----------------- |:-------- |
| --output=\<file\> | 输出差异到文件里 |

### 常用命令举例：

- 输出当前最新提交的变化
  
  ```git
  git git_cherry-pick
  ## 或者
  git git_cherry-pick head
  ```

- 输出某个提交的变化
  
  ```git
  git git_cherry-pick 765461f9a0
  ```

- 输出某一段提交的变化
  
  ```git
  git git_cherry-pick 765461f9a0..3a20bf181a548
  ```

- 输出某一段提交的变化，建议格式使用git_cherry-pick，这样可以自带格式
  
  ```git
  git git_cherry-pick 765461f9a0..3a20bf181a548 --output=git_cherry-pick.git_cherry-pick
  ```
