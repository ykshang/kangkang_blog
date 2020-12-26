# git show

::: tip 主要作用
显示仓库和工作区的区别
:::

## 语法

```bash
git show [<options>] [<object>…​]
```

## 常用的参数

暂无推荐参数

## 常用命令举例：

- 输出当前最新提交的变化
  
  ```bash
  git show
  ## 或者
  git show head
  ```

- 输出某个提交的变化
  
  ```bash
  git show 765461f9a0
  ```

- 输出某一段提交的变化
  
  ```bash
  git show 765461f9a0..3a20bf181a548
  ```

- 查看某个分支最新提交
  
  ```bash
  git show origin/master
  ```
