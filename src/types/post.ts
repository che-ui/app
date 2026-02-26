/**
 * KimiBlog Framework - Post Types
 * 文章类型定义
 */

export interface PostFrontMatter {
  title: string;
  date: string;
  updated?: string;
  categories?: string[];
  tags?: string[];
  permalink?: string;
  excerpt?: string;
  cover?: string;
  comments?: boolean;
  layout?: string;
  published?: boolean;
  sticky?: number;
  toc?: boolean;
  [key: string]: any;
}

export interface Post {
  id: string;
  slug: string;
  frontMatter: PostFrontMatter;
  content: string;
  excerpt: string;
  wordCount: number;
  readingTime: number;
}

export interface Archive {
  year: number;
  month: number;
  posts: Post[];
}

export interface Category {
  name: string;
  slug: string;
  count: number;
  posts: Post[];
}

export interface Tag {
  name: string;
  slug: string;
  count: number;
  posts: Post[];
}

export interface Pagination {
  current: number;
  total: number;
  perPage: number;
  hasNext: boolean;
  hasPrev: boolean;
  nextPage: number | null;
  prevPage: number | null;
}

export interface Page {
  id: string;
  slug: string;
  title: string;
  content: string;
  date: string;
  updated?: string;
  comments?: boolean;
  layout?: string;
}
