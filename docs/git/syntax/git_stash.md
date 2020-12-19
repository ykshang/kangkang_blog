# git stash

::: tip 主要作用
显示提交之间，提交和工作区之间的差异
:::

### 语法

```git
git stash [<options>] [<commit>] [--] [<path>…​]
git stash [<options>] --cached [<commit>] [--] [<path>…​]
git stash [<options>] <commit> [<commit>…​] <commit> [--] [<path>…​]
git stash [<options>] <commit>…​<commit> [--] [<path>…​]
git stash [<options>] <blob> <blob>
git stash [<options>] --no-index [--] <path> <path>
```

### 常用的参数

| 参数                | 解释       |
|:----------------- |:-------- |
| --output=\<file\> | 输出差异到文件里 |

### 常用命令举例：

- 输出当前最新提交的变化
  
  ```git
  git stash
  ## 或者
  git stash head
  ```

- 输出某个提交的变化
  
  ```git
  git stash 765461f9a0
  ```

- 输出某一段提交的变化
  
  ```git
  git stash 765461f9a0..3a20bf181a548
  ```

- 输出某一段提交的变化，建议格式使用stash，这样可以自带格式
  
  ```git
  git stash 765461f9a0..3a20bf181a548 --output=stash.stash
  ```
