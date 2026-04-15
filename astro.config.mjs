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
    text: "绘星者",
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
      icon: "ri-book-2-fill",
      color: "#f59e0b"
    },
    { 
      name: "魔法监测站", 
      url: "https://monitor.sinzmise.top/", 
      target: "_blank",
      icon: "ri-magic-fill",
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
  imageUrl: "#"
};

// 网站列表配置
export const websitesConfig = {
  title: "我的网站",
  description: "这里收集了我搭建的一些小项目",
  configPath: "src/data/websites.yml"
};

// 网站列表配置
export const UmamiConfig = {
  enable: true,
  src: "https://umami.status.sinzmise.top/a8f9c04189c7d6a2b6b03f4f3948ef41",
  websiteId: "00ab1f37-8bef-49d8-a012-64a64270e3d6",
  domains: "www.storia.ren",
  autoTrack: true,
  delayLoad: 2000, // 延迟2秒加载,不影响首屏
};

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://www.storia.ren',
  integrations: []
});
