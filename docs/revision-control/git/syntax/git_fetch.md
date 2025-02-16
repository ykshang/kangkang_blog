# git fetch

::: tip 主要作用
一般用来检出提交，更新各个分支的指针。  
大部分情况下，都是用pull来做更新操作，但是有个例外情况，有时候指针没有正常更新，需要fetch做更新操作
:::

## 语法

```bash
git fetch [<options>] [<repository> [<refspec>…​]]
git fetch [<options>] <group>
git fetch --multiple [<options>] [(<repository> | <group>)…​]
git fetch --all [<options>]
```

## 常用的参数

| 参数    | 解释          |
|:----- |:----------- |
| --all | 更新各个分支的指针位置 |

## 常用命令举例：

- 更新全部分支，指针没有正常更新的时候，使用这个可以更新。
  
  ```bash
  git fetch --all 
  ```
