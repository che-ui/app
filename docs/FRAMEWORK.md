# KimiBlog Framework 文档

> 一个类似 Hexo 的轻量级博客框架，基于 React + TypeScript 构建。

## 目录

1. [简介](#简介)
2. [快速开始](#快速开始)
3. [项目结构](#项目结构)
4. [配置说明](#配置说明)
5. [写作指南](#写作指南)
6. [主题系统](#主题系统)
7. [部署指南](#部署指南)
8. [API 参考](#api-参考)

---

## 简介

KimiBlog 是一个现代化的静态博客框架，灵感来源于 Hexo，但使用 React + TypeScript 构建，提供了更好的开发体验和类型安全。

### 特性

- 🚀 **快速构建** - 基于 Vite，开发体验流畅，构建速度快
- 📝 **Markdown 支持** - 完整的 Markdown 语法支持，包括代码高亮
- 🎨 **主题系统** - 可自定义主题，支持多套主题切换
- 📱 **响应式设计** - 适配桌面、平板、手机等各种设备
- 🔍 **本地搜索** - 内置文章搜索功能
- 🏷️ **标签分类** - 支持文章标签和分类管理
- 📊 **归档统计** - 按时间归档文章，支持统计信息
- 💬 **评论支持** - 可集成第三方评论系统
- 🔧 **TypeScript** - 完整的类型支持，开发更安全

---

## 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 8.0.0 或 yarn >= 1.22.0

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

### 创建新文章

```bash
# 在 src/content/posts/ 目录下创建新的 Markdown 文件
# 例如: src/content/posts/my-first-post.md
```

文章内容示例：

```markdown
---
title: 我的第一篇文章
date: 2024-01-20 10:00:00
categories:
  - 随笔
tags:
  - 开始
  - 介绍
---

这里是文章内容...
```

### 构建

```bash
# 构建生产版本
npm run build

# 构建输出在 dist/ 目录
```

---

## 项目结构

```
kimiblog/
├── blog.config.ts          # 博客配置文件
├── index.html              # HTML 入口文件
├── package.json            # 项目依赖
├── tsconfig.json           # TypeScript 配置
├── vite.config.ts          # Vite 配置
├── public/                 # 静态资源目录
│   ├── favicon.ico
│   └── avatar.png
├── src/
│   ├── App.tsx             # 主应用组件
│   ├── App.css             # 应用样式
│   ├── main.tsx            # 应用入口
│   ├── index.css           # 全局样式
│   ├── content/            # 内容目录
│   │   └── posts/          # 文章目录
│   │       └── index.ts    # 文章数据
│   ├── themes/             # 主题目录
│   │   └── default/        # 默认主题
│   │       ├── index.tsx   # 主题组件
│   │       └── styles.css  # 主题样式
│   ├── types/              # 类型定义
│   │   └── post.ts         # 文章类型
│   └── utils/              # 工具函数
│       └── format.ts       # 格式化工具
└── docs/                   # 文档目录
    └── FRAMEWORK.md        # 框架文档
```

---

## 配置说明

博客的所有配置都在 `blog.config.ts` 文件中。

### 基本配置

```typescript
export const config = {
  // 网站基本信息
  site: {
    title: '我的博客',           // 网站标题
    subtitle: '记录生活，分享技术', // 网站副标题
    description: '这是一个使用 KimiBlog 搭建的个人博客',
    author: '博主',              // 作者名称
    language: 'zh-CN',          // 语言
    timezone: 'Asia/Shanghai',  // 时区
    url: 'https://example.com', // 网站 URL
    root: '/',                  // 网站根目录
  },

  // 目录配置
  directory: {
    source_dir: 'source',       // 源文件目录
    public_dir: 'public',       // 静态资源目录
    tag_dir: 'tags',            // 标签页面目录
    archive_dir: 'archives',    // 归档页面目录
    category_dir: 'categories', // 分类页面目录
  },

  // 写作配置
  writing: {
    default_layout: 'post',     // 默认布局
    titlecase: false,           // 标题是否首字母大写
    external_link: {
      enable: true,             // 是否开启外链
      field: 'site',
      exclude: [],
    },
    highlight: {
      enable: true,             // 是否开启代码高亮
      line_number: true,        // 是否显示行号
      auto_detect: false,       // 自动检测语言
    },
  },

  // 首页配置
  index: {
    index_generator: {
      path: '',
      per_page: 10,             // 每页文章数
      order_by: '-date',        // 排序方式
    },
  },

  // 主题配置
  theme: {
    name: 'default',            // 主题名称
    sidebar: {
      position: 'left',         // 侧边栏位置
      display: 'post',          // 显示方式
    },
    toc: {
      enable: true,             // 是否显示目录
      number: true,             // 是否显示序号
      max_depth: 6,             // 最大深度
    },
  },

  // 部署配置
  deploy: {
    type: 'git',
    repo: 'https://github.com/username/repo.git',
    branch: 'gh-pages',
    message: 'Site updated: {{ now("YYYY-MM-DD HH:mm:ss") }}',
  },
};
```

### 配置项详解

#### site

| 参数 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| title | string | 'KimiBlog' | 网站标题 |
| subtitle | string | '' | 网站副标题 |
| description | string | '' | 网站描述 |
| author | string | '' | 作者名称 |
| language | string | 'zh-CN' | 网站语言 |
| timezone | string | 'Asia/Shanghai' | 时区 |
| url | string | '' | 网站 URL |
| root | string | '/' | 网站根目录 |

#### index

| 参数 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| per_page | number | 10 | 每页显示文章数 |
| order_by | string | '-date' | 排序方式，`date` 正序，`-date` 倒序 |

#### theme

| 参数 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| name | string | 'default' | 主题名称 |
| sidebar.position | 'left' \| 'right' | 'left' | 侧边栏位置 |
| toc.enable | boolean | true | 是否显示文章目录 |
| toc.max_depth | number | 6 | 目录最大深度 |

---

## 写作指南

### Front Matter

Front Matter 是位于文章顶部的 YAML 格式的元数据，用 `---` 包裹。

```markdown
---
title: 文章标题
date: 2024-01-20 10:00:00
updated: 2024-01-21 12:00:00
categories:
  - 技术
  - 前端
tags:
  - React
  - TypeScript
excerpt: 这是文章的摘要
cover: /images/cover.jpg
comments: true
toc: true
sticky: 100
---
```

### Front Matter 参数

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| title | string | 是 | 文章标题 |
| date | string | 是 | 发布日期，格式：`YYYY-MM-DD HH:mm:ss` |
| updated | string | 否 | 更新日期 |
| categories | string[] | 否 | 分类列表 |
| tags | string[] | 否 | 标签列表 |
| excerpt | string | 否 | 文章摘要，不设置则自动提取 |
| cover | string | 否 | 封面图片 URL |
| comments | boolean | 否 | 是否开启评论，默认 `true` |
| toc | boolean | 否 | 是否显示目录，默认 `true` |
| sticky | number | 否 | 置顶优先级，数字越大越靠前 |
| published | boolean | 否 | 是否发布，默认 `true` |

### Markdown 语法

KimiBlog 支持完整的 Markdown 语法：

#### 标题

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

#### 文本样式

```markdown
**粗体文本**
*斜体文本*
~~删除线文本~~
`行内代码`
```

#### 列表

```markdown
- 无序列表项 1
- 无序列表项 2
  - 嵌套列表项

1. 有序列表项 1
2. 有序列表项 2
```

#### 链接和图片

```markdown
[链接文本](https://example.com)
![图片描述](https://example.com/image.jpg)
```

#### 引用

```markdown
> 这是一段引用文本。
> 可以有多行。
```

#### 代码块

````markdown
```javascript
function hello() {
  console.log('Hello, World!');
}
```
````

#### 表格

```markdown
| 表头1 | 表头2 | 表头3 |
|-------|-------|-------|
| 内容1 | 内容2 | 内容3 |
| 内容4 | 内容5 | 内容6 |
```

#### 任务列表

```markdown
- [x] 已完成任务
- [ ] 未完成任务
```

---

## 主题系统

### 创建自定义主题

1. 在 `src/themes/` 目录下创建新主题文件夹

```
src/themes/
├── default/
└── my-theme/           # 新主题
    ├── index.tsx       # 主题组件
    └── styles.css      # 主题样式
```

2. 创建主题组件

```typescript
// src/themes/my-theme/index.tsx
import React from 'react';
import './styles.css';

export const Layout: React.FC<{ children: React.ReactNode; config: any }> = ({ children, config }) => {
  return (
    <div className="my-theme">
      <header>{config.site.title}</header>
      <main>{children}</main>
      <footer>© 2024 {config.site.author}</footer>
    </div>
  );
};

export const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <article>
      <h2>{post.frontMatter.title}</h2>
      <p>{post.frontMatter.excerpt}</p>
    </article>
  );
};
```

3. 在 `blog.config.ts` 中切换主题

```typescript
export const config = {
  theme: {
    name: 'my-theme',  // 切换到你的主题
  },
};
```

### 主题组件列表

一个完整的主题需要实现以下组件：

| 组件 | 描述 |
|------|------|
| Layout | 页面布局组件 |
| Header | 头部导航组件 |
| Footer | 底部组件 |
| Sidebar | 侧边栏组件 |
| PostCard | 文章卡片组件 |
| PostList | 文章列表组件 |
| PostDetail | 文章详情组件 |
| Pagination | 分页组件 |
| PageHeader | 页面标题组件 |
| CategoryCard | 分类卡片组件 |
| TagCard | 标签卡片组件 |
| SearchBox | 搜索框组件 |

---

## 部署指南

### 构建

```bash
npm run build
```

构建完成后，静态文件会输出到 `dist/` 目录。

### 部署到 GitHub Pages

1. 修改 `blog.config.ts` 中的部署配置

```typescript
export const config = {
  deploy: {
    type: 'git',
    repo: 'https://github.com/username/username.github.io.git',
    branch: 'main',
    message: 'Site updated',
  },
};
```

2. 运行部署命令

```bash
npm run deploy
```

### 部署到 Vercel

1. 安装 Vercel CLI

```bash
npm i -g vercel
```

2. 部署

```bash
vercel --prod
```

### 部署到 Netlify

1. 构建项目

```bash
npm run build
```

2. 将 `dist/` 目录拖拽到 Netlify 部署页面

### 部署到自有服务器

1. 构建项目

```bash
npm run build
```

2. 将 `dist/` 目录中的文件上传到服务器

```bash
rsync -avz dist/ user@server:/var/www/blog/
```

---

## API 参考

### 文章数据 API

```typescript
import { 
  getPublishedPosts, 
  getPostBySlug, 
  getCategories, 
  getTags, 
  searchPosts 
} from '@/content/posts';

// 获取所有已发布文章
const posts = getPublishedPosts();

// 根据 slug 获取文章
const post = getPostBySlug('hello-world');

// 获取所有分类
const categories = getCategories();

// 获取所有标签
const tags = getTags();

// 搜索文章
const results = searchPosts('React');
```

### 格式化工具

```typescript
import { 
  formatDate, 
  getRelativeTime, 
  formatReadingTime, 
  formatWordCount 
} from '@/utils/format';

// 格式化日期
formatDate('2024-01-20', 'YYYY-MM-DD');  // "2024-01-20"
formatDate('2024-01-20', 'YYYY年MM月DD日');  // "2024年01月20日"

// 获取相对时间
getRelativeTime('2024-01-20');  // "3天前"

// 格式化阅读时间
formatReadingTime(5);  // "5分钟"

// 格式化字数
formatWordCount(1500);  // "1500"
formatWordCount(15000);  // "1.5万"
```

### 类型定义

```typescript
import type { Post, PostFrontMatter, Category, Tag } from '@/types/post';

// 文章类型
interface Post {
  id: string;
  slug: string;
  frontMatter: PostFrontMatter;
  content: string;
  excerpt: string;
  wordCount: number;
  readingTime: number;
}

// Front Matter 类型
interface PostFrontMatter {
  title: string;
  date: string;
  updated?: string;
  categories?: string[];
  tags?: string[];
  excerpt?: string;
  cover?: string;
  comments?: boolean;
  toc?: boolean;
  sticky?: number;
  published?: boolean;
}
```

---

## 常见问题

### Q: 如何添加新的文章？

A: 在 `src/content/posts/index.ts` 中的 `posts` 数组中添加新的文章对象。

### Q: 如何修改主题颜色？

A: 编辑 `src/themes/default/styles.css` 中的 CSS 变量。

### Q: 如何添加评论功能？

A: 可以在 `PostDetail` 组件中集成第三方评论系统，如 Giscus、Disqus 等。

### Q: 如何添加 Google Analytics？

A: 在 `index.html` 中添加 Google Analytics 的跟踪代码。

### Q: 如何自定义域名？

A: 在 `public/` 目录下创建 `CNAME` 文件，内容为你的域名。

---

## 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

---

## 许可证

MIT License © 2024 KimiBlog
