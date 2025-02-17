const { copyCode } = require("vuepress-plugin-copy-code2");
const navbar = require("./navbar")
const sidebar = require("./sidebar")
module.exports = {
  // 站点配置
  base: "/MyBlog/",
  lang: "zh-CN",
  head: [["link", { rel: "icon", href: "/imgs/favicon.ico" }]],
  title: "kangkang 的博客",
  description: "记录个人技术栈学习记录和心得",
  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "/imgs/favicon.ico",
    lastUpdated: false,
    navbar: navbar,
    sidebar:sidebar,
  },
  plugins: [
    // https://vuepress-theme-hope.github.io/v2/copy-code/zh/
    copyCode({
      // 插件选项
      pure: true,
    }),
    [
      "@vuepress/plugin-external-link-icon",
      {
        locales: {
          "/": {
            openInNewWindow: "open in new window",
          },
          "/zh/": {
            openInNewWindow: "在新窗口打开",
          },
        },
      },
    ],
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "Search",
          },
          "/zh/": {
            placeholder: "搜索",
          },
        },
      },
    ],
  ],
};
