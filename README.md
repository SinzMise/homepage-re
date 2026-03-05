# 中弦世界·个人主页

没错，个人主页二次重写了

## 🌟 功能特性

- **响应式设计**：适配桌面端和移动端
- **动态导航**：支持自定义导航链接
- **个人信息展示**：可配置的个人资料卡片
- **天气预报**：集成和风天气API（可配置）
- **数字时钟**：实时显示当前时间
- **一言**：随机展示名言警句
- **网站列表**：展示个人项目和网站
- **博客文章**：展示最新文章
- **星空粒子背景**：动态视觉效果
- **无刷新加载**：使用 View Transitions API + ClientRouter
- **半透明玻璃拟态设计**：现代化UI风格

## 📁 项目结构

```
/
├── public/              # 静态资源
├── src/
│   ├── components/      # 组件
│   │   ├── BlogPosts.astro     # 博客文章列表
│   │   ├── ClientRouter.astro  # 客户端路由
│   │   ├── DigitalClock.astro  # 数字时钟
│   │   ├── Footer.astro        # 页脚
│   │   ├── Header.astro        # 头部导航
│   │   ├── ProfileCard.astro   # 个人信息卡片
│   │   └── WeatherWidget.astro # 天气插件
│   ├── layouts/         # 布局
│   │   └── Layout.astro        # 全局布局
│   └── pages/           # 页面
│       ├── index.astro          # 首页
│       ├── posts.astro          # 文章页面
│       └── sites.astro          # 网站列表页面
├── astro.config.mjs     # 配置文件
└── package.json         # 项目依赖
```

## ⚙️ 配置说明

所有配置都集中在 `astro.config.mjs` 文件中：

### 1. 基本信息配置

```javascript
// 网站信息配置
export const siteConfig = {
  title: "中弦局·故事乐园",
  headerTitle: "中弦局·故事乐园",
  footerTitle: "中弦局·故事乐园",
  footerDescription: "在这带有故事和魔法的世界里面逛逛吧！"
};
```

### 2. 个人信息配置

```javascript
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
```

### 3. 导航配置

```javascript
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
    // 更多链接...
  ]
};
```

### 4. 天气API配置

```javascript
// 和风天气配置
export const weatherConfig = {
  // 和风天气API Key
  // 请前往 https://dev.qweather.com/ 申请免费API Key
  key: "a0c1c1e0f9d34d8b9e3c8b9c8e8f9a0b"
};
```

### 5. 网站列表配置

```javascript
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
    // 更多网站...
  ]
};
```

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 本地开发

```bash
npm run dev
```

### 3. 构建生产版本

```bash
npm run build
```

### 4. 预览生产版本

```bash
npm run preview
```

## 🎨 自定义主题

### 颜色配置

- 主要颜色：`#10b981` (绿色)
- 背景：深色主题，支持半透明玻璃效果
- 文字：白色和浅色渐变

### 图标

使用 Remix Icon 图标库，可在配置中通过 `ri-` 前缀指定图标名称。

## 🌐 部署

### Vercel

1. 连接 GitHub 仓库
2. 选择项目目录
3. 配置构建命令：`npm run build`
4. 配置输出目录：`dist`
5. 部署项目

### Netlify

1. 导入项目
2. 配置构建命令：`npm run build`
3. 配置发布目录：`dist`
4. 部署站点

## 🛠 技术栈

- **前端框架**：Astro
- **CSS**：原生 CSS + CSS 变量
- **图标**：Remix Icon
- **天气 API**：和风天气 API + Open-Meteo (备用)
- **一言 API**：Hitokoto
- **客户端路由**：自定义 ClientRouter + View Transitions API

## 📝 注意事项

1. **和风天气 API**：需要申请 API Key 并在配置文件中填写
2. **响应式设计**：已适配移动端和桌面端
3. **性能优化**：使用 Astro 的静态生成特性
4. **浏览器兼容性**：支持现代浏览器

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📄 许可证

MIT License

---

**注**：本项目基于 Astro 构建，是一个现代化的个人主页解决方案，适合展示个人信息、项目和博客。