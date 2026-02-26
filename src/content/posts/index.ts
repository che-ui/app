/**
 * KimiBlog Framework - Posts Data
 * 文章数据管理
 */

import type { Post, Category, Tag, Archive } from '@/types/post';

// 示例文章数据
export const posts: Post[] = [
  {
    id: '1',
    slug: 'hello-world',
    frontMatter: {
      title: 'Hello World',
      date: '2024-01-15T10:00:00+08:00',
      updated: '2024-01-15T12:00:00+08:00',
      categories: ['随笔'],
      tags: ['开始', '介绍'],
      excerpt: '欢迎来到KimiBlog框架！这是你的第一篇文章。',
      comments: true,
      layout: 'post',
      published: true,
      toc: true,
    },
    content: `## 欢迎使用 KimiBlog 框架

这是你的第一篇文章。KimiBlog是一个类似Hexo的轻量级博客框架，基于React + TypeScript构建。

### 特性

- 快速: 基于Vite构建，开发体验流畅
- Markdown: 支持Markdown语法编写文章
- 主题: 可自定义主题样式
- 响应式: 适配各种设备
- 搜索: 内置本地搜索功能
- 标签: 支持文章标签和分类

### 开始使用

1. 在 posts 目录下创建新的文章
2. 添加Front Matter元数据
3. 编写你的文章内容
4. 运行 npm run build 构建博客

### 结语

感谢使用KimiBlog框架，开始你的博客之旅吧！`,
    excerpt: '欢迎来到KimiBlog框架！这是你的第一篇文章。',
    wordCount: 150,
    readingTime: 1,
  },
  {
    id: '2',
    slug: 'kimiblog-guide',
    frontMatter: {
      title: 'KimiBlog 框架使用指南',
      date: '2024-01-20T14:30:00+08:00',
      categories: ['技术', '教程'],
      tags: ['KimiBlog', '教程', 'React', 'TypeScript'],
      excerpt: '详细介绍如何使用KimiBlog框架搭建个人博客。',
      cover: '/images/guide-cover.jpg',
      comments: true,
      layout: 'post',
      published: true,
      toc: true,
    },
    content: `## KimiBlog 框架使用指南

KimiBlog是一个类似Hexo的轻量级博客框架，让你能够快速搭建个人博客。

### 目录结构

- blog.config.ts      # 博客配置文件
- src/
  - content/
    - posts/          # 文章目录
  - themes/           # 主题目录
  - types/            # 类型定义
- public/             # 静态资源

### 配置文件

在 blog.config.ts 中可以配置博客的基本信息，包括网站标题、副标题、作者等信息。

### 编写文章

文章支持Front Matter元数据，可以设置标题、日期、分类、标签等信息。

### Front Matter 参数

| 参数 | 描述 | 默认值 |
|------|------|--------|
| title | 文章标题 | 必填 |
| date | 发布日期 | 必填 |
| categories | 分类 | [] |
| tags | 标签 | [] |
| excerpt | 摘要 | 自动提取 |
| toc | 显示目录 | true |

### 部署博客

运行 npm run build 构建项目，然后将dist目录部署到服务器。

### 自定义主题

KimiBlog支持自定义主题，你可以在 themes 目录下创建自己的主题。`,
    excerpt: '详细介绍如何使用KimiBlog框架搭建个人博客。',
    wordCount: 350,
    readingTime: 2,
  },
  {
    id: '3',
    slug: 'markdown-syntax',
    frontMatter: {
      title: 'Markdown 语法支持',
      date: '2024-01-25T09:00:00+08:00',
      categories: ['技术'],
      tags: ['Markdown', '写作'],
      excerpt: 'KimiBlog支持完整的Markdown语法，让你的文章更加丰富多彩。',
      comments: true,
      layout: 'post',
      published: true,
      toc: true,
    },
    content: `## Markdown 语法支持

KimiBlog支持完整的Markdown语法，让你的文章更加丰富多彩。

### 标题

支持一级到六级标题，使用井号表示。

### 文本样式

支持粗体、斜体、删除线等文本样式。

### 列表

支持无序列表和有序列表，以及嵌套列表。

### 链接和图片

支持插入链接和图片，让内容更加丰富。

### 引用

支持引用文本，突出重要内容。

### 代码块

支持代码高亮，让代码更易读。

### 表格

支持表格展示数据。

### 任务列表

支持任务列表，方便记录待办事项。`,
    excerpt: 'KimiBlog支持完整的Markdown语法，让你的文章更加丰富多彩。',
    wordCount: 280,
    readingTime: 2,
  },
  {
    id: '4',
    slug: 'react-tips',
    frontMatter: {
      title: 'React 开发技巧分享',
      date: '2024-02-01T16:00:00+08:00',
      categories: ['技术', '前端'],
      tags: ['React', 'JavaScript', '前端开发'],
      excerpt: '分享一些React开发中的实用技巧和最佳实践。',
      comments: true,
      layout: 'post',
      published: true,
      toc: true,
    },
    content: `## React 开发技巧分享

分享一些React开发中的实用技巧和最佳实践。

### 1. 使用自定义Hook复用逻辑

自定义Hook是复用组件逻辑的最佳方式，可以将通用的逻辑提取出来。

### 2. 使用 React.memo 优化性能

对于纯展示组件，使用React.memo可以避免不必要的重渲染。

### 3. 使用 useCallback 缓存函数

useCallback可以缓存函数引用，避免子组件不必要的重渲染。

### 4. 使用 TypeScript 类型安全

TypeScript可以提供类型检查，减少运行时错误。

### 5. 错误边界处理

使用错误边界捕获组件错误，避免整个应用崩溃。`,
    excerpt: '分享一些React开发中的实用技巧和最佳实践。',
    wordCount: 420,
    readingTime: 3,
  },
  {
    id: '5',
    slug: 'typescript-best-practices',
    frontMatter: {
      title: 'TypeScript 最佳实践',
      date: '2024-02-10T11:00:00+08:00',
      categories: ['技术'],
      tags: ['TypeScript', 'JavaScript', '编程规范'],
      excerpt: 'TypeScript开发中的最佳实践和常见陷阱。',
      comments: true,
      layout: 'post',
      published: true,
      toc: true,
    },
    content: `## TypeScript 最佳实践

TypeScript开发中的最佳实践和常见陷阱。

### 1. 严格模式配置

开启严格模式可以获得更好的类型检查。

### 2. 使用接口定义对象形状

接口是定义对象类型的最佳方式。

### 3. 使用类型推断

TypeScript可以自动推断类型，减少冗余的类型注解。

### 4. 使用联合类型和类型守卫

联合类型可以表示多种可能的类型。

### 5. 使用泛型增加灵活性

泛型可以让代码更加通用和复用。

### 6. 避免使用 any

any类型会失去类型检查的优势。`,
    excerpt: 'TypeScript开发中的最佳实践和常见陷阱。',
    wordCount: 380,
    readingTime: 3,
  },
  {
    id: '6',
    slug: 'life-notes',
    frontMatter: {
      title: '生活随笔',
      date: '2024-02-15T20:00:00+08:00',
      categories: ['生活'],
      tags: ['随笔', '生活感悟'],
      excerpt: '记录生活中的一些感悟和思考。',
      comments: true,
      layout: 'post',
      published: true,
    },
    content: `## 生活随笔

记录生活中的一些感悟和思考。

### 关于时间

时间是最公平的资源，每个人每天都只有24小时。关键在于我们如何选择使用这些时间。

### 关于学习

学习是一个持续的过程，不应该停止。技术在不断更新，我们也需要不断进步。

### 关于健康

健康是一切的基础。无论工作多忙，都要注意身体。

### 关于人际关系

真诚待人，用心交流。好的关系需要双方共同维护。

### 结语

生活不只是工作，还有诗和远方。保持热爱，奔赴山海。`,
    excerpt: '记录生活中的一些感悟和思考。',
    wordCount: 220,
    readingTime: 1,
  },
];

// 获取所有已发布文章
export function getPublishedPosts(): Post[] {
  return posts
    .filter(post => post.frontMatter.published !== false)
    .sort((a, b) => {
      const dateA = new Date(a.frontMatter.date);
      const dateB = new Date(b.frontMatter.date);
      return dateB.getTime() - dateA.getTime();
    });
}

// 根据slug获取文章
export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}

// 获取所有分类
export function getCategories(): Category[] {
  const categoryMap = new Map<string, Post[]>();
  
  posts.forEach(post => {
    const categories = post.frontMatter.categories || [];
    categories.forEach(category => {
      if (!categoryMap.has(category)) {
        categoryMap.set(category, []);
      }
      categoryMap.get(category)!.push(post);
    });
  });

  return Array.from(categoryMap.entries()).map(([name, posts]) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, '-'),
    count: posts.length,
    posts: posts.sort((a, b) => {
      const dateA = new Date(a.frontMatter.date);
      const dateB = new Date(b.frontMatter.date);
      return dateB.getTime() - dateA.getTime();
    }),
  }));
}

// 获取所有标签
export function getTags(): Tag[] {
  const tagMap = new Map<string, Post[]>();
  
  posts.forEach(post => {
    const tags = post.frontMatter.tags || [];
    tags.forEach(tag => {
      if (!tagMap.has(tag)) {
        tagMap.set(tag, []);
      }
      tagMap.get(tag)!.push(post);
    });
  });

  return Array.from(tagMap.entries()).map(([name, posts]) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, '-'),
    count: posts.length,
    posts: posts.sort((a, b) => {
      const dateA = new Date(a.frontMatter.date);
      const dateB = new Date(b.frontMatter.date);
      return dateB.getTime() - dateA.getTime();
    }),
  }));
}

// 获取归档数据
export function getArchives(): Archive[] {
  const archiveMap = new Map<string, Post[]>();
  
  posts.forEach(post => {
    const date = new Date(post.frontMatter.date);
    const key = date.getFullYear() + '-' + (date.getMonth() + 1);
    if (!archiveMap.has(key)) {
      archiveMap.set(key, []);
    }
    archiveMap.get(key)!.push(post);
  });

  return Array.from(archiveMap.entries())
    .map(([key, posts]) => {
      const [year, month] = key.split('-').map(Number);
      return {
        year,
        month,
        posts: posts.sort((a, b) => {
          const dateA = new Date(a.frontMatter.date);
          const dateB = new Date(b.frontMatter.date);
          return dateB.getTime() - dateA.getTime();
        }),
      };
    })
    .sort((a, b) => {
      if (a.year !== b.year) return b.year - a.year;
      return b.month - a.month;
    });
}

// 分页获取文章
export function getPostsByPage(page: number, perPage: number = 10): { posts: Post[]; total: number } {
  const publishedPosts = getPublishedPosts();
  const start = (page - 1) * perPage;
  const end = start + perPage;
  return {
    posts: publishedPosts.slice(start, end),
    total: Math.ceil(publishedPosts.length / perPage),
  };
}

// 搜索文章
export function searchPosts(keyword: string): Post[] {
  const lowerKeyword = keyword.toLowerCase();
  return getPublishedPosts().filter(post => {
    const title = post.frontMatter.title.toLowerCase();
    const content = post.content.toLowerCase();
    const excerpt = (post.frontMatter.excerpt || '').toLowerCase();
    const tags = (post.frontMatter.tags || []).join(' ').toLowerCase();
    const categories = (post.frontMatter.categories || []).join(' ').toLowerCase();
    
    return title.includes(lowerKeyword) ||
           content.includes(lowerKeyword) ||
           excerpt.includes(lowerKeyword) ||
           tags.includes(lowerKeyword) ||
           categories.includes(lowerKeyword);
  });
}

export default posts;
