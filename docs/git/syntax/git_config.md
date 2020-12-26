# git config

::: tip 主要作用
仓库的配置
:::

## 语法

```bash
git config [<file-option>] [--type=<type>] [--show-origin] [--show-scope] [-z|--null] name [value [value_regex]]
git config [<file-option>] [--type=<type>] --add name value
git config [<file-option>] [--type=<type>] --replace-all name value [value_regex]
git config [<file-option>] [--type=<type>] [--show-origin] [--show-scope] [-z|--null] --get name [value_regex]
git config [<file-option>] [--type=<type>] [--show-origin] [--show-scope] [-z|--null] --get-all name [value_regex]
git config [<file-option>] [--type=<type>] [--show-origin] [--show-scope] [-z|--null] [--name-only] --get-regexp name_regex [value_regex]
git config [<file-option>] [--type=<type>] [-z|--null] --get-urlmatch name URL
git config [<file-option>] --unset name [value_regex]
git config [<file-option>] --unset-all name [value_regex]
git config [<file-option>] --rename-section old_name new_name
git config [<file-option>] --remove-section name
git config [<file-option>] [--show-origin] [--show-scope] [-z|--null] [--name-only] -l | --list
git config [<file-option>] --get-color name [default]
git config [<file-option>] --get-colorbool name [stdout-is-tty]
git config [<file-option>] -e | --edit
```

## 常用的参数

| 参数        | 解释                    |
|:--------- |:--------------------- |
| --local   | 仓库级别配置                |
| --global  | 当前windows登录用户名下全局级别配置 |
| --system  | 系统级别配置，所有登录这台电脑用户下都生效 |
| -l,--list | 列出配置                  |

::: warning 提示

- 生效覆盖级别：`--local` > `--global` > `--system`

:::

## 常用命令举例：

- 查看当前仓库配置
  
  ```bash
  git config --list
  ## 或者
  git config --local --list
  ```

- 查看当前全局配置
  
  ```bash
  git config --global --list
  ```

- 配置用户相关信息
  
  ```bash
  git config --global user.name="shangyukang"
  git config --global user.email="535634238@qq.com"
  ```

- 配置别名
  
  ```bash
  git config --global alias.lg="log --graph"
  git config --global alias.psmr="pull source master --rebase"
  ```

- 配置分支描述
  
  ```bash
  git config branch.master.description "主干代码"
  git config branch.L2020JS1201.description "L2020JS1201江苏1201分支"
  ```
