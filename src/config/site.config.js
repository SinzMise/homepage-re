// 个人主页配置文件
export const siteConfig = {
  // 个人信息
  personalInfo: {
    title: "中弦局·故事乐园",
    subtitle: "欢迎来到这个有故事和魔法的乐园",
    name: "王九弦SZ·Ninty",
    bio: "如果我死了，就让风将我的故事流传下去吧",
    email: "email@sinzmise.top",
    location: "中国·广东潮州",
    copyright: "© SinZero Limited",
    // 背景图片URL
    background: "https://t.alcy.cc/moez",
    netlifystatus:{
      image: 'https://api.netlify.com/api/v1/badges/f36f2bed-5d17-4ce1-aa30-75c1b6652885/deploy-status',
      link: 'https://app.netlify.com/projects/paintdreamfun/deploys'
    }
  },

  socialLinks: [
    {
      name: "GitHub",
      icon: "ri-github-fill",
      href: "https://github.com/SinzMise"
    }
  ],

  // 链接分类
  linkCategories: [
    {
      name: "绘星·汐娜物语",
      links: [
        { 
          name: "绘星里博客", 
          url: "https://blog.storical.fun/",
          description: "个人技术博客",
          image: "https://picsum.photos/100/60?random=1"
        }
      ]
    },
    {
      name: "魔法中弦",
      links: [
        { 
          name: "魔法监测站", 
          url: "https://monitor.sinzmise.top/",
          description: "网站状态监控",
          image: "https://picsum.photos/100/60?random=2"
        },
        { 
          name: "中弦记事本", 
          url: "https://diary.sinzmise.top/",
          description: "个人日记记录",
          image: "https://picsum.photos/100/60?random=3"
        }
      ]
    },
    {
      name: "潮汐工坊",
      links: [
        { 
          name: "封面生成器1", 
          url: "https://covermake.sinzmise.top/",
          description: "音乐专辑封面生成",
          image: "https://picsum.photos/100/60?random=4"
        },
        { 
          name: "封面生成器2", 
          url: "https://minicover.sinzmise.top/",
          description: "简约风格封面生成",
          image: "https://picsum.photos/100/60?random=5"
        }
      ]
    },
    {
      name: "官方群聊",
      links: [
        { 
          name: "魔法店一号", 
          url: "https://qm.qq.com/q/C9pQTYPDtm",
          description: "技术交流群",
          image: "https://picsum.photos/100/60?random=6"
        },
        { 
          name: "魔法店二号", 
          url: "https://qm.qq.com/q/ZqcDxtIFW2",
          description: "生活分享群",
          image: "https://picsum.photos/100/60?random=7"
        }
      ]
    }
  ],

  UmamiConfig: {
    enable: true,
    src: "https://umami.status.sinzmise.top/a8f9c04189c7d6a2b6b03f4f3948ef41",
    websiteId: "00ab1f37-8bef-49d8-a012-64a64270e3d6",
    domains: "www.storical.fun",
    autoTrack: true,
    delayLoad: 2000, // 延迟2秒加载,不影响首屏
  }

};