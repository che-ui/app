/**
 * KimiBlog Framework - Main Application
 * 主应用组件
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Layout, PostList, PostDetail, Pagination, PageHeader, CategoryCard, TagCard, SearchBox } from '@/themes/default';
import { posts as allPosts, getPublishedPosts, getPostBySlug, getCategories, getTags, searchPosts } from '@/content/posts';
import { config } from '../blog.config';
import './App.css';

// 路由类型
type Route = 
  | { type: 'home'; page: number }
  | { type: 'post'; slug: string }
  | { type: 'archives' }
  | { type: 'categories' }
  | { type: 'category'; slug: string }
  | { type: 'tags' }
  | { type: 'tag'; slug: string }
  | { type: 'about' }
  | { type: 'search'; keyword: string };

// 解析路由
function parseRoute(hash: string): Route {
  const path = hash.replace('#', '') || '/';
  const parts = path.split('/').filter(Boolean);

  if (parts.length === 0) {
    return { type: 'home', page: 1 };
  }

  switch (parts[0]) {
    case 'posts':
      if (parts[1]) {
        return { type: 'post', slug: parts[1] };
      }
      return { type: 'home', page: 1 };
    
    case 'archives':
      return { type: 'archives' };
    
    case 'categories':
      if (parts[1]) {
        return { type: 'category', slug: parts[1] };
      }
      return { type: 'categories' };
    
    case 'tags':
      if (parts[1]) {
        return { type: 'tag', slug: parts[1] };
      }
      return { type: 'tags' };
    
    case 'about':
      return { type: 'about' };
    
    case 'search':
      const keyword = new URLSearchParams(window.location.search).get('q') || '';
      return { type: 'search', keyword };
    
    default:
      return { type: 'home', page: 1 };
  }
}

// 首页组件
const HomePage: React.FC<{ route: Route; onRouteChange: (route: Route) => void }> = ({ route, onRouteChange }) => {
  const publishedPosts = getPublishedPosts();
  const perPage = config.index.index_generator.per_page;
  const totalPages = Math.ceil(publishedPosts.length / perPage);
  const currentPage = (route as any).page || 1;
  
  const posts = publishedPosts.slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <>
      <PostList posts={posts} />
      {totalPages > 1 && (
        <Pagination
          current={currentPage}
          total={totalPages}
          onPageChange={(page) => onRouteChange({ type: 'home', page })}
        />
      )}
    </>
  );
};

// 文章详情页
const PostPage: React.FC<{ slug: string }> = ({ slug }) => {
  const post = getPostBySlug(slug);
  
  if (!post) {
    return (
      <div className="kimiblog-post kimiblog-fade-in">
        <h1>文章未找到</h1>
        <p>抱歉，您访问的文章不存在。</p>
        <a href="#/">返回首页</a>
      </div>
    );
  }

  return <PostDetail post={post} />;
};

// 归档页
const ArchivesPage: React.FC = () => {
  const archives = [
    { year: 2024, month: 2, posts: allPosts.filter(p => p.frontMatter.date.startsWith('2024-02')) },
    { year: 2024, month: 1, posts: allPosts.filter(p => p.frontMatter.date.startsWith('2024-01')) },
  ];

  return (
    <>
      <PageHeader title="归档" description="按时间整理的所有文章" />
      <div className="kimiblog-archive-timeline">
        {archives.map((archive) => (
          <div key={`${archive.year}-${archive.month}`} className="kimiblog-archive-section">
            <h2 className="kimiblog-archive-year-month">
              {archive.year}年{archive.month}月
            </h2>
            <div className="kimiblog-archive-posts">
              {archive.posts.map((post) => (
                <div key={post.id} className="kimiblog-archive-post">
                  <span className="kimiblog-archive-post-date">
                    {new Date(post.frontMatter.date).getDate()}日
                  </span>
                  <a href={`#/posts/${post.slug}`} className="kimiblog-archive-post-title">
                    {post.frontMatter.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

// 分类列表页
const CategoriesPage: React.FC = () => {
  const categories = getCategories();

  return (
    <>
      <PageHeader title="分类" description={`共 ${categories.length} 个分类`} />
      <div className="kimiblog-taxonomy-list">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </>
  );
};

// 分类详情页
const CategoryPage: React.FC<{ slug: string }> = ({ slug }) => {
  const categories = getCategories();
  const category = categories.find(c => c.slug === slug);

  if (!category) {
    return (
      <div className="kimiblog-post kimiblog-fade-in">
        <h1>分类未找到</h1>
        <p>抱歉，您访问的分类不存在。</p>
        <a href="#/categories">返回分类列表</a>
      </div>
    );
  }

  return (
    <>
      <PageHeader title={category.name} description={`共 ${category.count} 篇文章`} />
      <PostList posts={category.posts} />
    </>
  );
};

// 标签列表页
const TagsPage: React.FC = () => {
  const tags = getTags();

  return (
    <>
      <PageHeader title="标签" description={`共 ${tags.length} 个标签`} />
      <div className="kimiblog-taxonomy-list">
        {tags.map((tag) => (
          <TagCard key={tag.slug} tag={tag} />
        ))}
      </div>
    </>
  );
};

// 标签详情页
const TagPage: React.FC<{ slug: string }> = ({ slug }) => {
  const tags = getTags();
  const tag = tags.find(t => t.slug === slug);

  if (!tag) {
    return (
      <div className="kimiblog-post kimiblog-fade-in">
        <h1>标签未找到</h1>
        <p>抱歉，您访问的标签不存在。</p>
        <a href="#/tags">返回标签列表</a>
      </div>
    );
  }

  return (
    <>
      <PageHeader title={tag.name} description={`共 ${tag.count} 篇文章`} />
      <PostList posts={tag.posts} />
    </>
  );
};

// 关于页
const AboutPage: React.FC = () => {
  return (
    <article className="kimiblog-post kimiblog-fade-in">
      <header className="kimiblog-post-header">
        <h1 className="kimiblog-post-title">关于</h1>
      </header>
      <div className="kimiblog-post-content">
        <h2>关于 KimiBlog</h2>
        <p>
          KimiBlog 是一个类似 Hexo 的轻量级博客框架，基于 React + TypeScript 构建。
          它提供了简洁优雅的博客体验，支持 Markdown 写作、主题定制、标签分类等功能。
        </p>
        
        <h2>特性</h2>
        <ul>
          <li>🚀 快速构建，基于 Vite</li>
          <li>📝 Markdown 支持</li>
          <li>🎨 可自定义主题</li>
          <li>📱 响应式设计</li>
          <li>🔍 本地搜索</li>
          <li>🏷️ 标签和分类</li>
        </ul>

        <h2>联系方式</h2>
        <p>
          如果您有任何问题或建议，欢迎通过以下方式联系我：
        </p>
        <ul>
          <li>GitHub: <a href="https://github.com/kimiblog" target="_blank" rel="noopener noreferrer">@kimiblog</a></li>
          <li>Email: hello@kimiblog.dev</li>
        </ul>
      </div>
    </article>
  );
};

// 搜索结果页
const SearchPage: React.FC<{ keyword: string }> = ({ keyword }) => {
  const [searchValue, setSearchValue] = useState(keyword);
  const results = useMemo(() => {
    if (!keyword.trim()) return [];
    return searchPosts(keyword);
  }, [keyword]);

  const handleSearch = (value: string) => {
    setSearchValue(value);
    if (value.trim()) {
      window.location.hash = `#/search?q=${encodeURIComponent(value)}`;
    }
  };

  return (
    <>
      <PageHeader title="搜索" description="搜索您感兴趣的文章" />
      <SearchBox value={searchValue} onChange={handleSearch} />
      {keyword && (
        <div className="kimiblog-search-results">
          <p className="kimiblog-search-info">
            找到 {results.length} 篇与 "{keyword}" 相关的文章
          </p>
          <PostList posts={results} />
        </div>
      )}
    </>
  );
};

// 主应用组件
function App() {
  const [route, setRoute] = useState<Route>({ type: 'home', page: 1 });

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseRoute(window.location.hash));
    };

    // 初始解析
    handleHashChange();

    // 监听hash变化
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // 渲染当前路由对应的页面
  const renderContent = () => {
    switch (route.type) {
      case 'home':
        return <HomePage route={route} onRouteChange={setRoute} />;
      case 'post':
        return <PostPage slug={route.slug} />;
      case 'archives':
        return <ArchivesPage />;
      case 'categories':
        return <CategoriesPage />;
      case 'category':
        return <CategoryPage slug={route.slug} />;
      case 'tags':
        return <TagsPage />;
      case 'tag':
        return <TagPage slug={route.slug} />;
      case 'about':
        return <AboutPage />;
      case 'search':
        return <SearchPage keyword={route.keyword} />;
      default:
        return <HomePage route={{ type: 'home', page: 1 }} onRouteChange={setRoute} />;
    }
  };

  return (
    <Layout config={config} showSidebar={route.type !== 'about'}>
      {renderContent()}
    </Layout>
  );
}

export default App;
