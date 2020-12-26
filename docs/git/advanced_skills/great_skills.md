# 各种骚操作

## 快速切换到上一个分支
  
  ```bash
  git checkout -
  git swotch -
  ```

## 配置别名实现快速操作
  
  ```bash
  git config alias.lg="log -graph"
  git config alias.bra="branch -a"
  git config alias.brr="branch -r"
  ```
  
  使用：
  
  ```bash
  git lg
  git bra
  git brr
  ```

## 快速清空本地所做未提交的修改。
  
  - 使用`reset`，恢复到和某个远端分支一致
    
    ```bash
    git reset -hard origin/分支名
    ```
  
  - 使用`clean`，清空工作区未提交的修改
    
    ```bash
    git reset -df
    ```

- 在历史某个版本上拉出分支
  
  ```bash
  ## 基于某个提交
  git branch DTS b54d17b
  ## 基于tag
  git branch DTS V1.1.1
  ```
