# git pull

::: tip 主要作用
拉取远端，更新本地代码
:::

## 语法

```bash
git pull [<options>] [<repository> [<refspec>…​]]
```

## 常用的参数

| 参数             | 解释                                      |
|:-------------- |:--------------------------------------- |
| -r,--rebase    | 不带此参数，默认是merge的形式结束，以变基的形式更新代码，防止产生合并提交 |
| -t ,--tags     | 将tag更新到本地                               |
| --set-upstream | 建立跟踪关系，如果已存在则更新                         |

::: warning 举一反三
利用`--set-upstream`参数建/更新立跟踪关系以后，后续更新代码可以省略对应的参数
:::

## 常用命令举例：

- 更新代码
  
  ```bash
  git pull
  ```

- 以变基的形式更新代码
  
  ```bash
  git pull --rebase
  ```

- 将source远端的master更新到当前分支
  
  ```bash
  git pull source master
  ```

- 将source远端的master更新到指定分支
  
  ```bash
   git pull source master:target_branch
  ```

- 将source远端的master更新到当前分支，同时建立跟踪关系
  
  ```bash
  git pull --set-upstream source master
  ```
