- 记录个人学习日常
- 记录个人旅行日志
- 记录个人美食日志

#### 安装 

```bash 
npm install
```
#### 运行方式

```bash
npm run dev
```


#### 手动部署

在目录下创建`deploy.sh`, 手动执行此脚本。

``` shell
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
## 本机执行不需要配置邮箱用户名，自动构建脚本需要
git config user.email "535634238@qq.com"
git config --global user.name "kangkang shang"
git add -A
git commit -m 'Automatic build'

# 发布到gh-pages分支
git push -f git@github.com:ykshang/kangkang_blog.git master:gh-pages

cd -
```
#### 自动部署

- 将本地用户名下的id_rsa私钥拷贝出来，配置到`settings`>`secrets`下，`title`需要设置为`ACTION_DEPLOY_KEY`,和执行脚本对应起来
- 在github的`Actions`页签下创建一个自动执行脚本

  脚本内容：

  ``` shell
  # This is a basic workflow to help you get started with Actions

  name: CI

  # Controls when the action will run. 
  on:
    # Triggers the workflow on push or pull request events but only for the master branch
    push:
      branches: [ master ]
    pull_request:
      branches: [ master ]

    # Allows you to run this workflow manually from the Actions tab
    workflow_dispatch:

  # A workflow run is made up of one or more jobs that can run sequentially or in parallel
  jobs:
    # This workflow contains a single job called "build"
    build:
      # The type of runner that the job will run on
      runs-on: ubuntu-latest

      # Steps represent a sequence of tasks that will be executed as part of the job
      steps:
        # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
        - uses: actions/checkout@v2

        - name: Setup install env
          env:
            ACTION_DEPLOY_KEY: ${{ secrets.ACTION_DEPLOY_KEY }}
          run: |
            # set up private key for deploy
            mkdir -p ~/.ssh/
            echo "$ACTION_DEPLOY_KEY" > ~/.ssh/id_rsa
            chmod 600 ~/.ssh/id_rsa
            ssh-keyscan github.com >> ~/.ssh/known_hosts

        # Runs a set of commands using the runners shell
        - name: build
          run: bash deploy.sh
  ```