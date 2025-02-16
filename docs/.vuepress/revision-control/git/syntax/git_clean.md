# git clean

::: tip 主要作用
移除工作区未被跟踪的文件
:::

## 语法

```bash
git clean [-d] [-f] [-i] [-n] [-q] [-e <pattern>] [-x | -X] [--] <path>…​
```

## 常用的参数

| 参数          | 解释    |
|:----------- |:----- |
| -d          | 移除空目录 |
| --f,--force | 强制删除  |

## 常用命令举例：

- 移除新增的文件
  
  ```bash
  git clean --f .
  ```

- 移除新增的文件和文件夹
  
  ```bash
  git clean -df .
  ```
