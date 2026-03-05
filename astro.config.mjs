// @ts-check
import { defineConfig } from 'astro/config';

// 自定义RSS配置
export const rssConfig = {
  url: 'https://blog.storia.ren/index.xml'
};

// 站长信息配置
export const profileConfig = {
  avatar: "https://blog.storia.ren/img/avatar.webp",
  name: "王九弦SZ·Ninty",
  bio: "来吧，一起绘制属于我们的星星吧！",
  badge: {
    text: "梦想家",
    icon: "ri-star-s-fill"
  },
  links: [
    { name: "GitHub", url: "https://github.com/SinzMise", icon: "ri-github-fill" },
    { name: "Email", url: "mailto:email@sinzmise.top", icon: "ri-mail-fill" },
    { name: "Bilibili", url: "https://space.bilibili.com/479627766", icon: "ri-bilibili-line" },
  ]
};

// 导航链接配置
export const navigationConfig = {
  header: [
    { name: "首页", url: "/" },
    { name: "文章", url: "/posts" },
    { name: "网站", url: "/sites" }
  ],
  home: [
    { 
      name: "绘星里", 
      url: "https://blog.storia.ren/", 
      target: "_blank",
      icon: "ri-bard-fill",
      color: "#10b981"
    },
    { 
      name: "汐娜魔法书", 
      url: "https://diary.sinzmise.top/", 
      target: "_blank",
      icon: "ri-book-2-line",
      color: "#f59e0b"
    },
    { 
      name: "魔法监测站", 
      url: "https://monitor.sinzmise.top/", 
      target: "_blank",
      icon: "ri-magic-line",
      color: "#8b5cf6"
    }
  ]
};

// 网站信息配置
export const siteConfig = {
  title: "中弦世界",
  headerTitle: "中弦局·故事乐园",
  footerTitle: "中弦局·故事乐园",
  footerDescription: "在这带有故事和魔法的世界里面逛逛吧！"
};

// 和风天气配置
export const weatherConfig = {
  // 和风天气API Key
  // 请前往 https://dev.qweather.com/ 申请免费API Key
  key: "c466954b33d344078128450f26212d70"
};

// 背景图片配置
export const bgConfig = {
  // 是否启用背景图片
  enable: true,
  // 背景图片URL
  imageUrl: "https://www.loliapi.com/acg/"
};

// 网站列表配置
export const websitesConfig = {
  title: "我的网站",
  description: "这里收集了我搭建的一些小项目",
  items: [
    {
      name: "绘星里",
      description: "一个博客，但是取的是一个巷子的名称~",
      url: "https://blog.storia.ren/",
      icon: "ri-bard-fill",
      color: "#10b981"
    },
    {
      name: "汐娜魔法书",
      description: "喜欢将日常碎碎念和即时想法记录在这里~",
      url: "https://diary.sinzmise.top/",
      icon: "ri-book-2-line",
      color: "#f59e0b"
    },
    {
      name: "魔法监测站",
      description: "服务器监控，同时也是站点监控~不过我没有服务器所以就当做站点监控了哈哈哈......",
      url: "https://monitor.sinzmise.top/",
      icon: "ri-magic-line",
      color: "#8b5cf6"
    },
    {
      name: "Umami统计",
      description: "网站流量统计分析工具",
      url: "https://umami.status.sinzmise.top/",
      icon: "ri-bar-chart-2-line",
      color: "#3b82f6"
    },
  ]
};

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://www.storia.ren',
  integrations: []
});
