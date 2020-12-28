# git tag

::: tip 主要作用
标签，标记某个历史节点，实际也是个指针，指向某一个commit
:::

## 语法

```bash
git tag [-a | -s | -u <keyid>] [-f] [-m <msg> | -F <file>] [-e]
  <tagname> [<commit> | <object>]
git tag -d <tagname>…​
git tag [-n[<num>]] -l [--contains <commit>] [--no-contains <commit>]
  [--points-at <object>] [--column[=<options>] | --no-column]
  [--create-reflog] [--sort=<key>] [--format=<format>]
  [--merged <commit>] [--no-merged <commit>] [<pattern>…​]
git tag -v [--format=<format>] <tagname>…​
```

## 常用的参数

| 参数                           | 解释      |
|:---------------------------- |:------- |
| -d,--delete                  | 删除某个tag |
| -l,--list                    | 查看tag列表 |
| -m \<msg\>,--message=\<msg\> | 添加描述    |
| -a,--annotate                | 不带注释的标签 |

## 常用命令举例：

- 查看当前标签列表
  
  ```bash
  git tag --list
  ```

- 查看当前tag列表和描述
  
  ```bash
  git tag -l -n
  ## 也可以使用参数查看描述的行数，不带参数默认只展示一行
  git tag -l -n11
  ```

- 删除某一个本地标签
  
  ```bash
  git tag -d tag_name
  ```

- 删掉远端的某个tag
  
  ```tag
  git push origin :refs/tags/v1.0.0
  ```

- 查看某个tag的内容
  
  ```bash
  git show tag_name
  ```

- 推送标签
  
  ```bash
  git push origin v1.0.0
  ```
  
  ::: warning 提示
  推送某个标签
  
  ```bash
  git push origin 标签名
  ## 相当于
  git push origin refs/tags/源标签名:refs/tags/目的标签名
  ```
  
  :::

- 删掉远端的某个tag
  
  ```bash
  git push origin :refs/tags/v1.0.0
  ```
  
  ::: warning 提示
  相当于用一个null去替换远端的标签。然后远端标签就没了
  :::
