# git cherry-pick

::: tip 主要作用
操作提交，主要作用就是分支之间遴选提交，进行分支之间的部分代码合并
:::

### 语法

```git
git cherry-pick [--edit] [-n] [-m parent-number] [-s] [-x] [--ff]
                  [-S[<keyid>]] <commit>…​
git cherry-pick (--continue | --skip | --abort | --quit)
```

### 常用的参数

| 参数             | 解释                  |
|:-------------- |:------------------- |
| --continue     | 遇到冲突，处理完继续遴选        |
| --skip         | 放弃当前冲突处理，跳过，继续处理后边的 |
| --quit         | 跳过当前冲突的处理，继续遴选      |
| --abort        | 放弃当前冲突的处理，直接跳出      |
| -n,--no-commit | 手动处理，而不是自动处理，不推荐    |

### 常用命令举例：

- 遴选某个提交到当前分支
  
  ```git
  git git_cherry-pick 765461f9a0
  ```

- 遴选一段提交到当前分支
  
  ```git
  git git_cherry-pick 765461f9a0..3a20bf181a548
  ```

- 输出某一段提交的变化，建议格式使用git_cherry-pick，这样可以自带格式
  
  ```git
  git git_cherry-pick 765461f9a0..3a20bf181a548 --output=git_cherry-pick.git_cherry-pick
  ```
