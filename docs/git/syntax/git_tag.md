# git restore

::: tip 主要作用
标签，标记某个历史节点，实际也是个指针，指向某一个commit
:::

### 语法

```git
git tag [-a | -s | -u <keyid>] [-f] [-m <msg> | -F <file>] [-e]
        <tagname> [<commit> | <object>]
git tag -d <tagname>…​
git tag [-n[<num>]] -l [--contains <commit>] [--no-contains <commit>]
        [--points-at <object>] [--column[=<options>] | --no-column]
        [--create-reflog] [--sort=<key>] [--format=<format>]
        [--merged <commit>] [--no-merged <commit>] [<pattern>…​]
git tag -v [--format=<format>] <tagname>…​
```

### 常用的参数

| 参数                           | 解释      |
|:---------------------------- |:------- |
| -d,--delete                  | 删除某个tag |
| -l,--list                    | 查看tag列表 |
| -m \<msg\>,--message=\<msg\> | 添加描述    |
| -a,--annotate                | 不带注释的标签 |

### 常用命令举例：

- 查看当前标签列表
  
  ```git
  git tag --list
  ```

-删除某一个标签

```git
  git tag -d tag_name
```

- 查看某个tag
  
  ```git
  git show tag_name
  ```
