# git rm

::: tip 主要作用
移除工作区和暂存区的文件
:::

## 语法

```bash
git rm [-f | --force] [-n] [-r] [--cached] [--ignore-unmatch]
  [--quiet] [--pathspec-from-file=<file> [--pathspec-file-nul]]
  [--] [<pathspec>…​]
```

## 常用的参数

| 参数         | 解释   |
|:---------- |:---- |
| -f,--force | 强制执行 |

## 常用命令举例：

- 移除a.txt
  
  ```bash
  git rm a.txt
  ```

- 强制移除a.txt
  
  ```bash
  git rm a.txt -f
  ```
