# KimiBlog Framework

> 🚀 一个类似 Hexo 的轻量级博客框架，基于 React + TypeScript 构建。

[![React](https://img.shields.io/badge/React-18.0+-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

[在线演示](https://kimiblog-demo.vercel.app) · [文档](./docs/FRAMEWORK.md) · [更新日志](./CHANGELOG.md)

---

## ✨ 特性

- **🚀 极速构建** - 基于 Vite，开发体验流畅，构建速度飞快
- **📝 Markdown 写作** - 完整的 Markdown 语法支持，专注内容创作
- **🎨 主题系统** - 可自定义主题，轻松打造个性化博客
- **📱 响应式设计** - 完美适配桌面、平板、手机等各种设备
- **🔍 本地搜索** - 内置文章搜索功能，快速找到想要的内容
- **🏷️ 标签分类** - 支持文章标签和分类，内容管理更清晰
- **📊 归档统计** - 按时间归档文章，支持丰富的统计信息
- **💬 评论支持** - 可集成第三方评论系统
- **🔧 TypeScript** - 完整的类型支持，开发更安全

---

## 🚀 快速开始

### 环境要求

- [Node.js](https://nodejs.org/) >= 16.0.0
- [npm](https://www.npmjs.com/) >= 8.0.0 或 [yarn](https://yarnpkg.com/) >= 1.22.0

### 安装

```bash
# 克隆项目
git clone https://github.com/kimiblog/kimiblog.git my-blog
cd my-blog

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

打开浏览器访问 `http://localhost:5173` 即可看到你的博客。

### 创建第一篇文章

在 `src/content/posts/index.ts` 中添加你的文章：

```typescript
{
  id: '1',
  slug: 'hello-world',
  frontMatter: {
    title: 'Hello World',
    date: '2024-01-20T10:00:00+08:00',
    categories: ['随笔'],
    tags: ['开始', '介绍'],
    excerpt: '这是我的第一篇文章',
  },
  content: `## 欢迎使用 KimiBlog

这是我的第一篇文章，感谢使用 KimiBlog 框架！`,
  excerpt: '这是我的第一篇文章',
  wordCount: 30,
  readingTime: 1,
}
```

### 构建部署

```bash
# 构建生产版本
npm run build

# 构建输出在 dist/ 目录
```

---

## 📁 项目结构

```
kimiblog/
├── blog.config.ts          # 博客配置文件
├── index.html              # HTML 入口文件
├── package.json            # 项目依赖
├── public/                 # 静态资源目录
├── src/
│   ├── App.tsx             # 主应用组件
│   ├── content/            # 内容目录
│   │   └── posts/          # 文章数据
│   ├── themes/             # 主题目录
│   │   └── default/        # 默认主题
│   ├── types/              # 类型定义
│   └── utils/              # 工具函数
└── docs/                   # 文档目录
```

---

## ⚙️ 配置

博客的所有配置都在 `blog.config.ts` 文件中：

```typescript
export const config = {
  site: {
    title: '我的博客',
    subtitle: '记录生活，分享技术',
    description: '这是一个使用 KimiBlog 搭建的个人博客',
    author: '博主',
    language: 'zh-CN',
    url: 'https://example.com',
  },
  index: {
    index_generator: {
      per_page: 10,
    },
  },
  theme: {
    name: 'default',
  },
};
```

更多配置选项请参考 [完整文档](./docs/FRAMEWORK.md)。

---

## 📝 写作

### Front Matter

文章顶部的 YAML 格式元数据：

```markdown
---
title: 文章标题
date: 2024-01-20 10:00:00
categories:
  - 技术
tags:
  - React
  - TypeScript
---

文章内容...
```

### 支持的参数

| 参数 | 描述 | 必填 |
|------|------|------|
| title | 文章标题 | ✅ |
| date | 发布日期 | ✅ |
| categories | 分类列表 | ❌ |
| tags | 标签列表 | ❌ |
| excerpt | 文章摘要 | ❌ |
| cover | 封面图片 | ❌ |
| toc | 显示目录 | ❌ |
| sticky | 置顶优先级 | ❌ |

---

## 🎨 主题

### 使用内置主题

```typescript
// blog.config.ts
export const config = {
  theme: {
    name: 'default',  // 切换到默认主题
  },
};
```

### 创建自定义主题

1. 在 `src/themes/` 下创建新主题文件夹
2. 实现主题组件（Layout、PostCard、PostDetail 等）
3. 在配置中切换主题

更多主题开发指南请参考 [文档](./docs/FRAMEWORK.md#主题系统)。

---

## 🚢 部署

### 部署到 Vercel

```bash
npm i -g vercel
vercel --prod
```

### 部署到 GitHub Pages

```bash
npm run build
# 将 dist/ 目录推送到 gh-pages 分支
```

### 部署到 Netlify

将 `dist/` 目录拖拽到 Netlify 部署页面即可。

### 部署到自有服务器

```bash
npm run build
rsync -avz dist/ user@server:/var/www/blog/
```

---

## 📖 文档

- [框架文档](./docs/FRAMEWORK.md) - 完整的配置和使用指南
- [主题开发](./docs/FRAMEWORK.md#主题系统) - 如何创建自定义主题
- [API 参考](./docs/FRAMEWORK.md#api-参考) - 可用的 API 和类型定义

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

---

## 📄 许可证

[MIT](LICENSE) License © 2024 KimiBlog

---

## 💖 支持

如果这个项目对你有帮助，欢迎给个 Star ⭐️

[GitHub](https://github.com/kimiblog/kimiblog) · [Issues](https://github.com/kimiblog/kimiblog/issues)
