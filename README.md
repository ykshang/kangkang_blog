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


#### 部署

在目录下创建`deploy.sh`, 然后持续集成中设置执行此脚本，或者手动执行此脚本。

``` shell
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'Automatic build'

# 发布到gh-pages分支
git push -f git@github.com:ykshang/kangkang_blog.git master:gh-pages

cd -
```