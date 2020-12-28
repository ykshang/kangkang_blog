# 各种骚操作

## 快速切换到上一个分支

```bash
  git checkout -
  git swotch -
```

## 配置别名实现快速操作

```bash
  ## 以图形结构显示日志
  git config --global alias.lg "log -graph"
  ## 查看本地和远端全部的分支
  git config  --global alias.bra "branch -a"
  ## 查看远端全部的分支
  git config  --global alias.brr "branch -r"
  ## 修改分支描述
  git config  --global alias.bre "branch --edit-description"
```

  使用：

```bash
  git lg
  git bra
  git brr
  git bre branch_name
```

## 快速清空本地修改。

- 恢复到和某个远端分支一致，使用`reset`
  
  ```bash
  git reset -hard origin/分支名
  ```

- 清空工作区未提交的修改，使用`clean`
  
  ```bash
  git clean -df
  ```

- 在历史某个版本上拉出分支
  
  ```bash
  ## 基于某个提交拉出DTS分支
  git branch DTS b54d17b
  ## 基于某个tag拉出DTS分支
  git branch DTS V1.1.1
  ```
