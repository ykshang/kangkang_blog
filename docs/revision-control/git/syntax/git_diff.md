# git diff

::: tip 主要作用
显示提交之间，提交和工作区之间的差异
:::

## 语法

```bash
git diff [<options>] [<commit>] [--] [<path>…​]
git diff [<options>] --cached [<commit>] [--] [<path>…​]
git diff [<options>] <commit> [<commit>…​] <commit> [--] [<path>…​]
git diff [<options>] <commit>…​<commit> [--] [<path>…​]
git diff [<options>] <blob> <blob>
git diff [<options>] --no-index [--] <path> <path>
```

## 常用的参数

| 参数                | 解释       |
|:----------------- |:-------- |
| --output=\<file\> | 输出差异到文件里 |

## 常用命令举例：

- 输出当前最新提交的变化
  
  ```bash
  git diff
  ## 或者
  git diff head
  ```

- 输出某个提交的变化
  
  ```bash
  git diff 765461f9a0
  ```

- 输出某一段提交的变化
  
  ```bash
  git diff 765461f9a0..3a20bf181a548
  ```

- 输出某一段提交的变化，建议格式使用diff，这样可以自带格式，使用ide查看的时候自带颜色格式。
  
  ```bash
  git diff 765461f9a0..3a20bf181a548 --output=diff.diff
  ```
