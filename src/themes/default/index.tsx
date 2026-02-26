/**
 * KimiBlog Framework - Default Theme Components
 * 默认主题组件
 */

import React from 'react';
import { Calendar, Clock, Tag, Folder, ChevronRight } from 'lucide-react';
import type { Post, Category, Tag as TagType } from '@/types/post';
import { formatDate, getRelativeTime, formatReadingTime, formatWordCount } from '@/utils/format';
import './styles.css';

// 布局组件
interface LayoutProps {
  children: React.ReactNode;
  config: any;
  showSidebar?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, config, showSidebar = true }) => {
  return (
    <div className="kimiblog">
      <Header config={config} />
      <main className={`kimiblog-main ${!showSidebar ? 'kimiblog-main--no-sidebar' : ''}`}>
        <div className="kimiblog-content">{children}</div>
        {showSidebar && <Sidebar config={config} />}
      </main>
      <Footer config={config} />
    </div>
  );
};

// 头部组件
interface HeaderProps {
  config: any;
}

export const Header: React.FC<HeaderProps> = ({ config }) => {
  const navItems = [
    { label: '首页', href: '#/' },
    { label: '归档', href: '#/archives' },
    { label: '分类', href: '#/categories' },
    { label: '标签', href: '#/tags' },
    { label: '关于', href: '#/about' },
  ];

  return (
    <header className="kimiblog-header">
      <div className="kimiblog-header-inner">
        <div className="kimiblog-brand">
          <a href="#/" className="kimiblog-brand-title">
            {config.site.title}
          </a>
          {config.site.subtitle && (
            <span className="kimiblog-brand-subtitle">{config.site.subtitle}</span>
          )}
        </div>
        <nav className="kimiblog-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="kimiblog-nav-link">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

// 侧边栏组件
interface SidebarProps {
  config: any;
}

export const Sidebar: React.FC<SidebarProps> = ({ config }) => {
  // 模拟数据
  const author = {
    name: config.site.author || '博主',
    avatar: config.meta?.avatar || '/avatar.png',
    bio: config.site.description || '记录生活，分享技术',
    postCount: 6,
    tagCount: 12,
    categoryCount: 4,
  };

  const tags = [
    { name: 'React', slug: 'react' },
    { name: 'TypeScript', slug: 'typescript' },
    { name: '教程', slug: 'tutorial' },
    { name: '前端开发', slug: 'frontend' },
    { name: 'Markdown', slug: 'markdown' },
    { name: '生活', slug: 'life' },
  ];

  const archives = [
    { year: 2024, month: 2, count: 3 },
    { year: 2024, month: 1, count: 3 },
  ];

  return (
    <aside className="kimiblog-sidebar">
      {/* 作者信息 */}
      <div className="kimiblog-widget kimiblog-author">
        <img src={author.avatar} alt={author.name} className="kimiblog-author-avatar" />
        <h3 className="kimiblog-author-name">{author.name}</h3>
        <p className="kimiblog-author-bio">{author.bio}</p>
        <div className="kimiblog-author-stats">
          <div className="kimiblog-author-stat">
            <div className="kimiblog-author-stat-value">{author.postCount}</div>
            <div className="kimiblog-author-stat-label">文章</div>
          </div>
          <div className="kimiblog-author-stat">
            <div className="kimiblog-author-stat-value">{author.categoryCount}</div>
            <div className="kimiblog-author-stat-label">分类</div>
          </div>
          <div className="kimiblog-author-stat">
            <div className="kimiblog-author-stat-value">{author.tagCount}</div>
            <div className="kimiblog-author-stat-label">标签</div>
          </div>
        </div>
      </div>

      {/* 标签云 */}
      <div className="kimiblog-widget">
        <h3 className="kimiblog-widget-title">标签云</h3>
        <div className="kimiblog-widget-content">
          <div className="kimiblog-tag-cloud">
            {tags.map((tag) => (
              <a key={tag.slug} href={`#/tags/${tag.slug}`} className="kimiblog-tag">
                {tag.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 归档 */}
      <div className="kimiblog-widget">
        <h3 className="kimiblog-widget-title">归档</h3>
        <div className="kimiblog-widget-content">
          <div className="kimiblog-archive-list">
            {archives.map((archive) => (
              <a
                key={`${archive.year}-${archive.month}`}
                href={`#/archives/${archive.year}/${archive.month}`}
                className="kimiblog-archive-item"
              >
                <span>{archive.year}年{archive.month}月</span>
                <span className="kimiblog-archive-item-count">{archive.count}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

// 底部组件
interface FooterProps {
  config: any;
}

export const Footer: React.FC<FooterProps> = ({ config }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="kimiblog-footer">
      <div className="kimiblog-footer-inner">
        <p className="kimiblog-footer-copyright">
          © {currentYear} {config.site.author || 'KimiBlog'}. All rights reserved.
        </p>
        <p className="kimiblog-footer-powered">
          Powered by <a href="https://github.com/kimiblog/kimiblog" target="_blank" rel="noopener noreferrer">KimiBlog</a>
        </p>
      </div>
    </footer>
  );
};

// 文章卡片组件
interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className="kimiblog-post-card kimiblog-fade-in">
      <header className="kimiblog-post-card-header">
        <h2 className="kimiblog-post-card-title">
          <a href={`#/posts/${post.slug}`}>{post.frontMatter.title}</a>
        </h2>
        <div className="kimiblog-post-card-meta">
          <span className="kimiblog-post-card-meta-item">
            <Calendar size={14} />
            {formatDate(post.frontMatter.date)}
          </span>
          <span className="kimiblog-post-card-meta-item">
            <Clock size={14} />
            {formatReadingTime(post.readingTime)}
          </span>
          {post.frontMatter.categories && post.frontMatter.categories.length > 0 && (
            <span className="kimiblog-post-card-meta-item">
              <Folder size={14} />
              {post.frontMatter.categories[0]}
            </span>
          )}
        </div>
      </header>
      <div className="kimiblog-post-card-excerpt">
        {post.frontMatter.excerpt || post.excerpt}
      </div>
      <footer className="kimiblog-post-card-footer">
        <div className="kimiblog-post-card-tags">
          {post.frontMatter.tags?.slice(0, 3).map((tag) => (
            <a key={tag} href={`#/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`} className="kimiblog-tag">
              <Tag size={12} />
              {tag}
            </a>
          ))}
        </div>
        <a href={`#/posts/${post.slug}`} className="kimiblog-post-card-readmore">
          阅读全文
          <ChevronRight size={16} />
        </a>
      </footer>
    </article>
  );
};

// 文章列表组件
interface PostListProps {
  posts: Post[];
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="kimiblog-post-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

// 文章详情组件
interface PostDetailProps {
  post: Post;
}

export const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  // 简单的Markdown渲染
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      // 代码块
      if (line.startsWith('```')) {
        return null; // 简化处理
      }
      // 标题
      if (line.startsWith('### ')) {
        return <h3 key={index}>{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index}>{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('# ')) {
        return <h1 key={index}>{line.replace('# ', '')}</h1>;
      }
      // 列表
      if (line.startsWith('- ')) {
        return <li key={index}>{line.replace('- ', '')}</li>;
      }
      // 引用
      if (line.startsWith('> ')) {
        return <blockquote key={index}>{line.replace('> ', '')}</blockquote>;
      }
      // 空行
      if (line.trim() === '') {
        return <br key={index} />;
      }
      // 普通段落
      return <p key={index}>{line}</p>;
    });
  };

  return (
    <article className="kimiblog-post kimiblog-fade-in">
      <header className="kimiblog-post-header">
        <h1 className="kimiblog-post-title">{post.frontMatter.title}</h1>
        <div className="kimiblog-post-meta">
          <span className="kimiblog-post-card-meta-item">
            <Calendar size={14} />
            {formatDate(post.frontMatter.date)}
          </span>
          {post.frontMatter.updated && (
            <span className="kimiblog-post-card-meta-item">
              更新于 {getRelativeTime(post.frontMatter.updated)}
            </span>
          )}
          <span className="kimiblog-post-card-meta-item">
            <Clock size={14} />
            {formatReadingTime(post.readingTime)}
          </span>
          <span className="kimiblog-post-card-meta-item">
            {formatWordCount(post.wordCount)} 字
          </span>
        </div>
      </header>
      <div className="kimiblog-post-content">
        {renderContent(post.content)}
      </div>
    </article>
  );
};

// 分页组件
interface PaginationProps {
  current: number;
  total: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ current, total, onPageChange }) => {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <nav className="kimiblog-pagination">
      <button
        className="kimiblog-pagination-btn"
        onClick={() => onPageChange(current - 1)}
        disabled={current <= 1}
      >
        上一页
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`kimiblog-pagination-btn ${page === current ? 'kimiblog-pagination-btn--active' : ''}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="kimiblog-pagination-btn"
        onClick={() => onPageChange(current + 1)}
        disabled={current >= total}
      >
        下一页
      </button>
    </nav>
  );
};

// 页面标题组件
interface PageHeaderProps {
  title: string;
  description?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="kimiblog-page-header">
      <h1 className="kimiblog-page-title">{title}</h1>
      {description && <p className="kimiblog-page-desc">{description}</p>}
    </div>
  );
};

// 分类卡片组件
interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="kimiblog-taxonomy-card kimiblog-fade-in">
      <h3 className="kimiblog-taxonomy-card-title">
        <a href={`#/categories/${category.slug}`}>
          <Folder size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          {category.name}
        </a>
      </h3>
      <p className="kimiblog-taxonomy-card-count">{category.count} 篇文章</p>
    </div>
  );
};

// 标签卡片组件
interface TagCardProps {
  tag: TagType;
}

export const TagCard: React.FC<TagCardProps> = ({ tag }) => {
  return (
    <div className="kimiblog-taxonomy-card kimiblog-fade-in">
      <h3 className="kimiblog-taxonomy-card-title">
        <a href={`#/tags/${tag.slug}`}>
          <Tag size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          {tag.name}
        </a>
      </h3>
      <p className="kimiblog-taxonomy-card-count">{tag.count} 篇文章</p>
    </div>
  );
};

// 搜索组件
interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBox: React.FC<SearchProps> = ({ value, onChange, placeholder = '搜索文章...' }) => {
  return (
    <div className="kimiblog-search">
      <input
        type="text"
        className="kimiblog-search-input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default {
  Layout,
  Header,
  Sidebar,
  Footer,
  PostCard,
  PostList,
  PostDetail,
  Pagination,
  PageHeader,
  CategoryCard,
  TagCard,
  SearchBox,
};
