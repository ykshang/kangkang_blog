# 各种骚操作总结

- 快速切换到上一个分支

```git
git checkout -
git swotch -
```

- 配置别名实现快速操作
  
  ```git
  git config alias.lg="log -graph"
  git config alias.bra="branch -a"
  git config alias.brr="branch -r"
  ```
  
  使用：
  
  ```git
  git lg
  git bra
  git brr
  ```

- 快速清空本地所做未提交的修改。
  
  - 使用`reset`，恢复到和某个远端分支一致
    
    ```git
    git reset -hard origin/分支名
    ```
  
  - 使用`clean`，清空工作区未提交的修改
    
    ```git
    git reset -df
    ```

- 在历史某个版本上拉出分支
  
  ```git
  ## 基于某个提交
  git branch DTS b54d17b
  ## 基于tag
  git branch DTS V1.1.1
  ```
