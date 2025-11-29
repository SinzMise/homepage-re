# 绘梦乐园·个人主页

最近闲着没事干，给我个人主页用Astro重写了一下

## 功能特点

- 可自定义背景图片
- 个人信息展示（带头像）
- 分类链接展示
- 风格简约
- 通过配置文件轻松自定义内容

## 项目结构

```
.
├── src/
│   ├── assets/
│   │   └── avatar.png        # 个人头像文件
│   ├── config/
│   │   └── site.config.js    # 网站配置文件
│   └── pages/
│       └── index.astro       # 主页文件
├── astro.config.mjs          # Astro 配置文件
├── package.json              # 项目依赖配置
└── README.md                 # 项目说明文件
```

## 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:4321` 查看你的个人主页。

### 构建生产版本

```bash
npm run build
```

构建后的文件将位于 `dist/` 目录中。

## 自定义内容

你可以通过修改 `src/config/site.config.js` 文件来自定义所有内容：

### 1. 修改个人信息

```javascript
personalInfo: {
  title: "站点标题",
  subtitle: "站点副标题",
  name: "你的名字",
  bio: "你的个人简介",
  email: "你的邮箱",
  location: "你的位置",
  copyright: "版权信息",
  background: "背景图片URL"  // 背景图片URL
}
```

### 2. 修改链接分类

```javascript
linkCategories: [
  {
    name: "分类名称",
    links: [
      { name: "链接名称", url: "链接地址" },
      // 更多链接...
    ]
  },
  // 更多分类...
]
```

你可以添加、删除或修改分类，也可以在每个分类中添加、删除或修改链接。

## 头像设置

头像文件位于 `src/assets/avatar.png`，你可以直接替换此文件来更改头像，无需修改代码。

## 背景图片

背景图片可以通过修改 `src/config/site.config.js` 文件中的 `personalInfo.background` 配置项来自定义。