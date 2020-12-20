# git push

::: tip 主要作用
将本地代码推送到远端
:::

### 语法

```git
git push [--all | --mirror | --tags] [--follow-tags] [--atomic] [-n | --dry-run] [--receive-pack=<git-receive-pack>]
           [--repo=<repository>] [-f | --force] [-d | --delete] [--prune] [-v | --verbose]
           [-u | --set-upstream] [-o <string> | --push-option=<string>]
           [--[no-]signed|--signed=(true|false|if-asked)]
           [--force-with-lease[=<refname>[:<expect>]]]
           [--no-verify] [<repository> [<refspec>…​]]
```

### 常用的参数

| 参数                | 解释            |
|:----------------- |:------------- |
| --all             | 推送本地全部到远端     |
| --tags            | 推送里包含镜像，tag标签 |
| -d,--delete       | 用于删除远端分支      |
| -f,--force        | 强制推送          |
| -u,--set-upstream | 建立/更新跟踪关系     |

::: warning 提示

- 可以利用`-d,--delete`参数删除远端分支
- 利用`-f,--force`将远端强制覆盖
- 利用`-u,--set-upstream`更新/创建跟踪关系，后续可以省略参数

:::

### 常用命令举例：

- 推送代码
  
  ```git
  git push
  ```

- 将当前代码推送到origin远端master分支
  
  ```git
  git push origin master
  ```

- 将当前代码推送到origin远端master分支，并更新跟踪关系到此分支
  
  ```git
  git push -u origin master
  ```

- 将本地的DTS推送到origin远端的DTS分支，如果远端不存在则新建此分支
  
  ```git
  git push origin DTS:DTS
  ```

- 删除origin远端的DTS分支
  
  ```git
  git push -d origin DTS
  ```
